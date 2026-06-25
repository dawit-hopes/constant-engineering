/** Objective capture signals — sizing and catalog product matches only (no phrase lists). */

export interface CaptureMessage {
  role: string
  content: string
}

const SPEC_SIGNALS = /\b\d+\s*(kva|kw|kwh|hp)\b/i

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

export function detectProductCategory(text: string): string | null {
  for (const { category, pattern } of PRODUCT_PATTERNS) {
    if (pattern.test(text)) return category
  }
  return null
}

function countUserMessages(messages: CaptureMessage[]): number {
  return messages.filter((m) => m.role === 'user').length
}

/**
 * Hard rules that do not depend on natural-language phrasing — e.g. "15 KVA" + generators.
 */
export function isStructurallyReadyForCapture(
  messages: CaptureMessage[],
  lastUserMessage: string
): boolean {
  const conversation = messages.map((m) => m.content).join(' ')
  const hasSpecOnLast = hasSpecDetail(lastUserMessage)
  const productInThread = detectProductCategory(conversation)
  const userTurns = countUserMessages(messages)

  if (hasSpecOnLast && productInThread) return true
  if (hasSpecOnLast && userTurns >= 3) return true

  return false
}

/** @deprecated Use isStructurallyReadyForCapture — intent is handled by captureClassifier on the server. */
export function isReadyForCapture(
  messages: CaptureMessage[],
  lastUserMessage: string
): boolean {
  return isStructurallyReadyForCapture(messages, lastUserMessage)
}
