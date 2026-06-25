import type { ChatTurn, ChatQualification } from './chatValidation'
import { buildCaptureHandoffMessage } from '../../utils/salesContact'
import { detectProductCategory, isStructurallyReadyForCapture } from '../../utils/captureReadiness'
import { classifyCaptureIntent } from './captureClassifier'

export { isStructurallyReadyForCapture as isReadyForCapture }

export async function shouldCaptureLead(
  apiKey: string,
  modelName: string,
  messages: ChatTurn[],
  lastUserMessage: string
): Promise<{ capture: boolean; hints: Partial<ChatQualification> }> {
  if (isStructurallyReadyForCapture(messages, lastUserMessage)) {
    return { capture: true, hints: {} }
  }

  try {
    const result = await classifyCaptureIntent(apiKey, modelName, messages, lastUserMessage)
    const hints: Partial<ChatQualification> = {}
    if (result.requestType) hints.requestType = result.requestType
    if (result.intent) hints.intent = result.intent
    return { capture: result.capture, hints }
  } catch (err) {
    console.error('[shouldCaptureLead] classifier error:', err)
    return { capture: false, hints: {} }
  }
}

export function buildCaptureQualification(
  messages: ChatTurn[],
  lastUserMessage: string,
  existing: ChatQualification
): Record<string, string> {
  const conversation = messages.map((m) => m.content).join('\n')
  const out: Record<string, string> = {
    requestType: existing.requestType || 'Quotation',
    intent: existing.intent || 'New Engineering Project',
    notes: conversation.slice(-2000)
  }

  if (existing.systemType) out.systemType = existing.systemType

  const kva = conversation.match(/\b(\d+)\s*kva\b/i)
  if (kva) out.capacity = `${kva[1]} KVA`

  const kw = conversation.match(/\b(\d+)\s*kw\b/i)
  if (kw && !out.capacity) out.capacity = `${kw[1]} KW`

  const product = detectProductCategory(conversation)
  if (product) out.productInterest = product

  if (/\belectrical\b/i.test(conversation) && !out.systemType) {
    out.systemType = 'Electrical Systems'
  } else if (/\bmechanical\b/i.test(conversation) && !out.systemType) {
    out.systemType = 'Mechanical Systems'
  } else if (/\belectromechanical\b/i.test(conversation) && !out.systemType) {
    out.systemType = 'Electromechanical'
  }

  if (lastUserMessage.trim()) {
    out.lastAnswer = lastUserMessage.trim().slice(0, 200)
  }

  return out
}

export function getCaptureHandoffText(): string {
  return buildCaptureHandoffMessage()
}
