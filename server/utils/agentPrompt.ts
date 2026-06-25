import {
  AGENT_BEHAVIOR,
  formatAgentKnowledgePrompt,
  formatProductDetail,
  retrieveRelevantProducts
} from './agentKnowledge'

export function buildSystemPrompt(userMessage: string, pageUrl: string | null): string {
  const knowledge = formatAgentKnowledgePrompt()
  const focused = retrieveRelevantProducts(userMessage)
  const focusedBlock = focused.length
    ? focused.map((p) => formatProductDetail(p)).join('\n\n')
    : ''

  return `
You are ${AGENT_BEHAVIOR.role}.

GOAL: ${AGENT_BEHAVIOR.primaryGoal}
TONE: ${AGENT_BEHAVIOR.tone.join(', ')}

RULES (never break these):
${AGENT_BEHAVIOR.rules.map((r) => `- ${r}`).join('\n')}

KNOWLEDGE BASE (only source of truth — do not invent facts beyond this):
${knowledge}
${focusedBlock ? `\nFOCUSED PRODUCTS FOR THIS QUESTION:\n${focusedBlock}` : ''}
${pageUrl ? `\nVISITOR CONTEXT (internal only — do not mention this URL or any page link to the visitor): ${pageUrl}` : ''}

RESPONSE STYLE:
- Answer in plain text only (no JSON, no markdown headers, no links).
- Keep replies to 1–3 short sentences unless technical detail is required.
- Answer product questions fully in this chat using specs, brands, capacity, and services from the knowledge base.
- Never tell the visitor to visit a page, URL, or path on the website — give the information directly here.
- Ask at most one follow-up question when it helps qualify the project.
- Never provide prices, quotes, timelines, or certifications not in the knowledge base.
- When the visitor wants human follow-up, keep your reply to one short sentence — a contact form will appear automatically. Do not list contact channel options.
- If the visitor wants to purchase, order, or install and has indicated a product type (e.g. diesel generators, solar, HVAC), ask at most one clarifying question then stop — the system will collect their contact details next. Do not keep asking narrowing questions once product type is clear.
- For pure information questions (e.g. "do you supply X?"), answer helpfully and ask one optional follow-up only if useful.
`.trim()
}

export function buildQualificationUpdate(
  userMessage: string,
  existing: { intent?: string; systemType?: string; requestType?: string; notes?: string }
): { intent?: string; systemType?: string; requestType?: string; notes?: string } {
  const lower = userMessage.toLowerCase()
  const update: {
    intent?: string
    systemType?: string
    requestType?: string
    notes?: string
  } = {
    notes: userMessage
  }

  if (!existing.intent) {
    if (/\bmaintenance|repair|breakdown|fault\b/.test(lower)) {
      update.intent = 'Maintenance Issue'
    } else if (/\bproject|install|build|factory|plant\b/.test(lower)) {
      update.intent = 'New Engineering Project'
    }
  }

  if (!existing.systemType) {
    if (/\b(electrical|wiring|panel|ups|switchgear)\b/.test(lower)) {
      update.systemType = 'Electrical Systems'
    } else if (/\b(hvac|cooling|chiller|refrigeration|pump|generator|mechanical)\b/.test(lower)) {
      update.systemType = 'Mechanical Systems'
    } else if (/\b(automation|plc|electromechanical)\b/.test(lower)) {
      update.systemType = 'Electromechanical'
    } else if (/\b(industrial|factory|plant|facility|warehouse)\b/.test(lower)) {
      update.systemType = 'Industrial Facility'
    }
  }

  if (!existing.requestType && /\bwhatsapp\b/i.test(lower)) {
    update.requestType = 'WhatsApp'
  }

  return update
}

/** Strip URLs and site paths the model may still emit despite prompt rules. */
export function sanitizeChatReply(text: string): string {
  return text
    .replace(/\s*(you can find more (details |info )?at|see|visit|check)\s*:?\s*/gi, ' ')
    .replace(/https?:\/\/[^\s)]+/gi, '')
    .replace(/\/?products\/[\w-]+/gi, '')
    .replace(/\bconstanteng\.com\b[^\s]*/gi, '')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/\bat\s*[.,]/gi, '.')
    .replace(/\s{2,}/g, ' ')
    .trim()
}
