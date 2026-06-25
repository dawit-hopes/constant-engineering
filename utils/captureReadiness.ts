/** Shared capture-readiness rules for server chat API and client fallbacks. */

export interface CaptureMessage {
  role: string
  content: string
}

const PURCHASE_SIGNALS =
  /\b(purchase|buy|order|quote|quotation|install|installation|installment|make a purchase|new install|proceed with|get started|how can i (make|get)|want to (buy|order|purchase))\b/i

const SPEC_SIGNALS = /\b\d+\s*(kva|kw|kwh|hp)\b/i

const SYSTEM_SIGNALS =
  /\b(electrical system|mechanical system|electromechanical|industrial facility|power generation|new project|new installation)\b/i

const CONTACT_SIGNALS =
  /\b(contact me|call me|my number|here'?s my|that'?s all|thats all|send someone)\b/i

const PRODUCT_PATTERNS: { category: string; pattern: RegExp }[] = [
  { category: 'Diesel Generators', pattern: /\b(diesel|generator|generators|perkins|cummins)\b/i },
  { category: 'Solar & Hybrid Energy', pattern: /\b(solar|hybrid energy|hybrid system)\b/i },
  { category: 'HVAC & Cooling', pattern: /\b(hvac|cooling|chiller|refrigeration|cold room)\b/i },
  { category: 'Power Quality & Protection', pattern: /\b(ups|power quality|voltage stabiliz|harmonic filter)\b/i },
  { category: 'Electrical Distribution', pattern: /\b(switchgear|distribution panel|mccb|power cable)\b/i },
  { category: 'Pumping Solutions', pattern: /\b(pump|pumping|submersible)\b/i },
  { category: 'Industrial Automation', pattern: /\b(automation|plc|control panel|mcc)\b/i },
  { category: 'Metal Engineering', pattern: /\b(fabrication|steel structure|storage tank)\b/i }
]

export function hasPurchaseIntent(conversation: string): boolean {
  return PURCHASE_SIGNALS.test(conversation)
}

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
 * Enough context to collect contact details — skip further LLM turns.
 */
export function isReadyForCapture(
  messages: CaptureMessage[],
  lastUserMessage: string
): boolean {
  const conversation = messages.map((m) => m.content).join(' ')
  const hasPurchase = hasPurchaseIntent(conversation)
  const hasSpecOnLast = hasSpecDetail(lastUserMessage)
  const productOnLast = detectProductCategory(lastUserMessage)
  const productInThread = detectProductCategory(conversation)
  const hasSystem = SYSTEM_SIGNALS.test(conversation)
  const userTurns = countUserMessages(messages)

  if (CONTACT_SIGNALS.test(lastUserMessage)) return true

  // Concrete sizing provided (e.g. "15kva")
  if (hasPurchase && hasSpecOnLast) return true
  if (productInThread && hasSpecOnLast && userTurns >= 2) return true

  // Purchase intent + product category chosen (e.g. "diesel" after buy flow)
  if (hasPurchase && productOnLast) return true

  // Purchase + system context + product identified anywhere in thread
  if (hasPurchase && hasSystem && productInThread) return true

  // Sizing without explicit "purchase" but clear project thread
  if (hasSpecOnLast && productInThread && userTurns >= 3) return true

  return false
}
