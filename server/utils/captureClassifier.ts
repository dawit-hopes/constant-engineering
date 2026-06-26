import { GoogleGenerativeAI } from '@google/generative-ai'
import type { ChatTurn } from './chatValidation'

export interface CaptureClassification {
  capture: boolean
  requestType?: string
  intent?: string
}

const CLASSIFIER_INSTRUCTION = `You decide whether a B2B engineering sales chat should show a contact-details form next.

Return capture=true when ANY of these apply:
- Visitor gave a capacity or sizing (e.g. "1500", "500 KVA") and discussed a product
- Visitor stated what they want to buy ("I want a diesel generator") with clear interest
- Product type is identified and they have sent 2+ messages about it — stop qualifying, show the form
- They want sales/engineering contact, quote, or callback

Return capture=false ONLY when:
- First message is a vague greeting with no product interest
- Pure info question with no buying signal ("do you supply Perkins?")

Default: when product interest exists, prefer capture=true. Sales qualifies on callback — do not keep chatting.

Optional fields when capture=true:
- requestType: one of "Quotation", "Engineer Callback", "WhatsApp", "Consultation"
- intent: one of "New Engineering Project", "Maintenance Issue", "Direct enquiry"

Reply with JSON only, e.g. {"capture":true,"requestType":"Engineer Callback"}`

function parseClassification(raw: string): CaptureClassification {
  const trimmed = raw.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '')
  const parsed = JSON.parse(trimmed) as Partial<CaptureClassification>
  return {
    capture: Boolean(parsed.capture),
    requestType: typeof parsed.requestType === 'string' ? parsed.requestType : undefined,
    intent: typeof parsed.intent === 'string' ? parsed.intent : undefined
  }
}

function formatTranscript(messages: ChatTurn[]): string {
  return messages
    .slice(-10)
    .map((m) => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`)
    .join('\n')
}

export async function classifyCaptureIntent(
  apiKey: string,
  modelName: string,
  messages: ChatTurn[],
  lastUserMessage: string
): Promise<CaptureClassification> {
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: CLASSIFIER_INSTRUCTION,
    generationConfig: {
      temperature: 0,
      maxOutputTokens: 80,
      responseMimeType: 'application/json'
    }
  })

  const transcript = formatTranscript(messages)
  const result = await model.generateContent({
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `Conversation:\n${transcript}\n\nLatest visitor message:\n${lastUserMessage}`
          }
        ]
      }
    ]
  })

  const text = result.response.text()
  if (!text) return { capture: false }
  return parseClassification(text)
}
