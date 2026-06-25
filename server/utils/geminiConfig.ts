/** Normalize API key from .env (strip whitespace and wrapping quotes). */
export function normalizeGeminiApiKey(raw: string | undefined): string {
  if (!raw) return ''
  return raw.trim().replace(/^['"]|['"]$/g, '')
}

/**
 * Google AI Studio keys used by @google/generative-ai start with "AIza".
 * Cloud OAuth tokens (e.g. "AQ." / "ya29.") are not valid here.
 */
export function getGeminiKeySetupError(key: string): string | null {
  if (!key) {
    return 'GEMINI_API_KEY is not set. Add a Google AI Studio key to .env.'
  }
  if (/^(AQ\.|ya29\.)/.test(key)) {
    return 'Invalid GEMINI_API_KEY type. Use a Google AI Studio API key (starts with AIza), not a Cloud OAuth token. Create one at https://aistudio.google.com/apikey'
  }
  if (!key.startsWith('AIza')) {
    return 'GEMINI_API_KEY does not look like a Google AI Studio key (expected prefix AIza). Create one at https://aistudio.google.com/apikey'
  }
  return null
}

export function geminiAuthErrorMessage(err: unknown): string {
  const message = err instanceof Error ? err.message : String(err)
  if (message.includes('401') || message.includes('ACCESS_TOKEN_TYPE_UNSUPPORTED')) {
    return 'Assistant authentication failed. Set a valid Google AI Studio API key (AIza…) in .env — see https://aistudio.google.com/apikey'
  }
  if (message.includes('404') && message.includes('models/')) {
    return 'The configured GEMINI_MODEL is not available for this API key. Try GEMINI_MODEL=gemini-2.0-flash in .env.'
  }
  return 'The assistant is temporarily unavailable. Please try again or contact our team directly.'
}
