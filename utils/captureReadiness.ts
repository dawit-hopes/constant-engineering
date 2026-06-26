/** Capture signals — fast path to the lead form; sales qualifies on callback. */

export interface CaptureMessage {
  role: string
  content: string
}

const SPEC_SIGNALS = /\b\d+\s*(kva|kw|kwh|hp)\b/i

const ENGAGEMENT_SIGNALS =
  /\b(reach out|get in touch|talk to|speak to|talk with|speak with|connect|contact|callback|call me|sales|engineer|human|quote|quotation|whatsapp|order|buy|purchase|install)\b/i

const BUYING_SIGNALS = /\b(i want|i need|we want|we need|looking for|interested in|get a|need a)\b/i

/** Max user messages with product context before we stop qualifying and show the form. */
const MAX_PRODUCT_TURNS = 2

const PRODUCT_PATTERNS: { category: string; pattern: RegExp }[] = [
  { category: 'Diesel Generators', pattern: /\b(diesel|generat\w*|perkins|cummins)\b/i },
  { category: 'Solar & Hybrid Energy', pattern: /\b(solar|hybrid energy|hybrid system)\b/i },
  { category: 'HVAC & Cooling', pattern: /\b(hvac|cooling|chiller|refrigeration|cold room)\b/i },
  { category: 'Power Quality & Protection', pattern: /\b(ups|power quality|voltage stabiliz|harmonic filter)\b/i },
  { category: 'Electrical Distribution', pattern: /\b(switchgear|distribution panel|mccb|power cable)\b/i },
  { category: 'Pumping Solutions', pattern: /\b(pump|pumping|submersible)\b/i },
  { category: 'Industrial Automation', pattern: /\b(automation|plc|control panel|mcc)\b/i },
  { category: 'Metal Engineering', pattern: /\b(fabrication|steel structure|storage tank)\b/i }
]

export function hasSpecDetail(text: string): boolean {
  return SPEC_SIGNALS.test(text)
}

export function hasEngagementIntent(text: string): boolean {
  return ENGAGEMENT_SIGNALS.test(text.trim())
}

export function hasBuyingIntent(text: string): boolean {
  return BUYING_SIGNALS.test(text.trim())
}

export function isBareCapacityReply(text: string): boolean {
  const t = text.trim()
  return /^\d{1,4}$/.test(t) || /^\d{1,4}\s*(kva|kw|kwh|hp)$/i.test(t)
}

export function detectProductCategory(text: string): string | null {
  for (const { category, pattern } of PRODUCT_PATTERNS) {
    if (pattern.test(text)) return category
  }
  return null
}

/** Parse capacity from message or thread (including bare "1500" when product context exists). */
export function extractCapacity(lastUserMessage: string, conversation: string): string | null {
  const kva =
    lastUserMessage.match(/\b(\d+)\s*kva\b/i) || conversation.match(/\b(\d+)\s*kva\b/i)
  if (kva) return `${kva[1]} KVA`

  const kw = lastUserMessage.match(/\b(\d+)\s*kw\b/i) || conversation.match(/\b(\d+)\s*kw\b/i)
  if (kw) return `${kw[1]} KW`

  if (isBareCapacityReply(lastUserMessage) && detectProductCategory(conversation)) {
    const n = lastUserMessage.trim().match(/^(\d{1,4})/)
    if (n) return `${n[1]} KVA`
  }

  return null
}

function countUserMessages(messages: CaptureMessage[]): number {
  return messages.filter((m) => m.role === 'user').length
}

/**
 * Deterministic capture — prefer showing the form early; sales team qualifies on callback.
 */
export function isStructurallyReadyForCapture(
  messages: CaptureMessage[],
  lastUserMessage: string
): boolean {
  const conversation = messages.map((m) => m.content).join(' ')
  const productInThread = detectProductCategory(conversation)
  const productOnLast = detectProductCategory(lastUserMessage)
  const userTurns = countUserMessages(messages)
  const engaged = hasEngagementIntent(lastUserMessage)
  const buying = hasBuyingIntent(lastUserMessage)
  const capacity = extractCapacity(lastUserMessage, conversation)

  // Capacity given (incl. bare "1500") with product context
  if (capacity && productInThread) return true

  if (hasSpecDetail(lastUserMessage) && productInThread) return true

  // "I want a diesel generator" — product + buying intent
  if (buying && productOnLast) return true

  // Enough product chat — stop qualifying
  if (productInThread && userTurns >= MAX_PRODUCT_TURNS) return true

  if (productInThread && engaged) return true
  if (engaged && userTurns >= 2) return true

  return false
}

export function isReadyForCapture(
  messages: CaptureMessage[],
  lastUserMessage: string
): boolean {
  return isStructurallyReadyForCapture(messages, lastUserMessage)
}
