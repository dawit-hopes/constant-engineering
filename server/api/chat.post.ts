import {
  defineEventHandler,
  readBody,
  createError,
  sendStream,
  setResponseHeaders
} from 'h3'
import { useRuntimeConfig } from 'nitropack/runtime'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { AGENT_BEHAVIOR } from '../utils/agentKnowledge'
import {
  buildSystemPrompt,
  buildQualificationUpdate,
  isConversionIntent,
  resolveChatAction,
  sanitizeChatReply
} from '../utils/agentPrompt'
import {
  geminiAuthErrorMessage,
  getGeminiKeySetupError,
  normalizeGeminiApiKey
} from '../utils/geminiConfig'
import {
  buildCaptureQualification,
  getCaptureHandoffText,
  isReadyForCapture
} from '../utils/qualificationFlow'
import {
  validateChatBody,
  ChatValidationError,
  type RawChatBody
} from '../utils/chatValidation'

type ChatAction = 'continue' | 'convert' | 'capture'

type StreamEvent =
  | { type: 'delta'; content: string }
  | { type: 'done'; action: ChatAction; qualification: Record<string, string> }
  | { type: 'error'; message: string }

function encodeSse(event: StreamEvent): Uint8Array {
  return new TextEncoder().encode(`data: ${JSON.stringify(event)}\n\n`)
}

function sendCaptureHandoff(
  send: (payload: StreamEvent) => void,
  messages: ReturnType<typeof validateChatBody>['messages'],
  lastUserMessage: string,
  qualification: Record<string, string>
) {
  const captureQual = buildCaptureQualification(messages, lastUserMessage, qualification)
  send({ type: 'delta', content: getCaptureHandoffText() })
  send({
    type: 'done',
    action: 'capture',
    qualification: captureQual
  })
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiKey = normalizeGeminiApiKey(config.geminiApiKey as string)
  const modelName = (config.geminiModel as string) || 'gemini-2.0-flash'

  const keyError = getGeminiKeySetupError(apiKey)
  if (keyError) {
    throw createError({
      statusCode: 503,
      statusMessage: keyError
    })
  }

  let body: RawChatBody
  try {
    body = await readBody<RawChatBody>(event)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Invalid request body.' })
  }

  let chatRequest
  try {
    chatRequest = validateChatBody(body)
  } catch (err) {
    if (err instanceof ChatValidationError) {
      throw createError({ statusCode: err.statusCode, statusMessage: err.message })
    }
    throw createError({ statusCode: 400, statusMessage: 'Invalid chat request.' })
  }

  const { messages, qualification, pageUrl, lastUserMessage } = chatRequest

  setResponseHeaders(event, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no'
  })

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (payload: StreamEvent) => {
        controller.enqueue(encodeSse(payload))
      }

      const qualUpdate = buildQualificationUpdate(lastUserMessage, qualification)
      const mergedQualification = { ...qualification, ...qualUpdate }

      try {
        if (isReadyForCapture(messages, lastUserMessage)) {
          sendCaptureHandoff(send, messages, lastUserMessage, mergedQualification)
          return
        }

        if (isConversionIntent(lastUserMessage)) {
          send({ type: 'delta', content: AGENT_BEHAVIOR.conversionMessage })
          send({
            type: 'done',
            action: 'convert',
            qualification: {
              ...mergedQualification,
              intent: mergedQualification.intent || 'Direct enquiry'
            }
          })
          return
        }

        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: buildSystemPrompt(lastUserMessage, pageUrl)
        })

        const contents = messages.map((message) => ({
          role: message.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: message.content }]
        }))

        const result = await model.generateContentStream({ contents })
        let fullReply = ''

        for await (const chunk of result.stream) {
          let text = ''
          try {
            text = chunk.text()
          } catch {
            text = ''
          }
          if (!text) continue
          const clean = sanitizeChatReply(text)
          if (!clean) continue
          fullReply += clean
          send({ type: 'delta', content: clean })
        }

        if (!fullReply.trim()) {
          send({
            type: 'delta',
            content:
              'I can connect you with our engineering team for accurate guidance. What system or project are you working on?'
          })
        }

        const action = resolveChatAction(lastUserMessage)
        send({
          type: 'done',
          action,
          qualification: mergedQualification
        })
      } catch (err) {
        console.error('[chat.post] Gemini error:', err)
        if (isReadyForCapture(messages, lastUserMessage)) {
          sendCaptureHandoff(send, messages, lastUserMessage, mergedQualification)
          return
        }
        send({
          type: 'error',
          message: geminiAuthErrorMessage(err)
        })
      } finally {
        controller.close()
      }
    }
  })

  return sendStream(event, stream)
})
