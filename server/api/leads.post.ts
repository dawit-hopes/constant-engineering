import { defineEventHandler, readBody, createError } from 'h3'
import { useRuntimeConfig } from 'nitropack/runtime'
import { ServerClient } from 'postmark'
import {
  validateLeadBody,
  escapeHtml,
  LeadValidationError,
  type RawLeadBody,
  type ValidatedLead
} from '../utils/leadValidation'

function formatQualification(lead: ValidatedLead): string {
  const labels: Record<string, string> = {
    intent: 'Intent',
    systemType: 'System type',
    requestType: 'Request type',
    notes: 'Notes',
    capacity: 'Capacity',
    productInterest: 'Product interest',
    lastAnswer: 'Last answer'
  }
  const lines = Object.entries(lead.qualification)
    .filter(([, v]) => v)
    .map(([k, v]) => `${labels[k] || k}: ${v}`)
  return lines.length ? lines.join('\n') : 'Not specified'
}

function formatUtm(lead: ValidatedLead): string {
  const entries = Object.entries(lead.utm)
  return entries.length ? entries.map(([k, v]) => `${k}: ${v}`).join('\n') : 'None'
}

function buildEmailBodies(lead: ValidatedLead) {
  const qualification = formatQualification(lead)
  const utm = formatUtm(lead)
  const subject = `Engineering Lead — ${lead.name}${lead.company ? ` (${lead.company})` : ''}`

  const text = [
    'New engineering consultation lead',
    '================================',
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Company: ${lead.company || 'Not provided'}`,
    `Request type: ${lead.requestType}`,
    `Submitted at: ${lead.submittedAt}`,
    `Page URL: ${lead.pageUrl || 'Not provided'}`,
    '',
    'Qualification',
    '-------------',
    qualification,
    '',
    'UTM',
    '---',
    utm,
    '',
    'Chat transcript',
    '---------------',
    lead.transcript || '(empty)',
    ''
  ].join('\n')

  const html = `
    <h2>New engineering consultation lead</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(lead.name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(lead.phone)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(lead.company || 'Not provided')}</td></tr>
      <tr><td><strong>Request type</strong></td><td>${escapeHtml(lead.requestType)}</td></tr>
      <tr><td><strong>Submitted at</strong></td><td>${escapeHtml(lead.submittedAt)}</td></tr>
      <tr><td><strong>Page URL</strong></td><td>${escapeHtml(lead.pageUrl || 'Not provided')}</td></tr>
    </table>
    <h3>Qualification</h3>
    <pre style="background:#f4f4f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(qualification)}</pre>
    <h3>UTM</h3>
    <pre style="background:#f4f4f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(utm)}</pre>
    <h3>Chat transcript</h3>
    <pre style="background:#f4f4f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(lead.transcript || '(empty)')}</pre>
  `.trim()

  return { subject, text, html }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = config.postmarkToken as string
  const fromEmail = config.postmarkFromEmail as string
  const toEmail = config.contactEmail as string

  if (!token || !fromEmail || !toEmail) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Lead delivery is not configured.'
    })
  }

  let body: RawLeadBody
  try {
    body = await readBody<RawLeadBody>(event)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Invalid request body.' })
  }

  let lead: ValidatedLead
  try {
    lead = validateLeadBody(body)
  } catch (err) {
    if (err instanceof LeadValidationError) {
      throw createError({ statusCode: err.statusCode, statusMessage: err.message })
    }
    throw createError({ statusCode: 400, statusMessage: 'Invalid submission.' })
  }

  const { subject, text, html } = buildEmailBodies(lead)
  const client = new ServerClient(token)

  try {
    await client.sendEmail({
      From: fromEmail,
      To: toEmail,
      Subject: subject,
      TextBody: text,
      HtmlBody: html,
      ReplyTo: fromEmail,
      MessageStream: 'outbound'
    })
  } catch (err) {
    console.error('[leads.post] Postmark error:', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to deliver lead. Please try again later.'
    })
  }

  return { ok: true, submittedAt: lead.submittedAt }
})
