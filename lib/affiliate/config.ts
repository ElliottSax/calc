/**
 * Affiliate tracking config — single source of truth for outbound broker links.
 *
 * Real tracking parameters are supplied at runtime via the
 * NEXT_PUBLIC_AFFILIATE_TRACKING env var: a JSON object keyed by broker id whose
 * values are the query fragment to append (with or without a leading "?"/"&").
 *
 * Example:
 *   NEXT_PUBLIC_AFFILIATE_TRACKING={"schwab":"refrid=ABC123","fidelity":"immid=XYZ"}
 *
 * A single static `process.env.NEXT_PUBLIC_AFFILIATE_TRACKING` reference is used
 * (not a dynamically-built key) so Next.js can inline it into client bundles.
 *
 * When a broker has no configured value, buildAffiliateUrl returns the bare base
 * URL with NO tracking param — never a fake placeholder.
 */

let cachedMap: Record<string, string> | null = null

function getTrackingMap(): Record<string, string> {
  if (cachedMap) return cachedMap

  const raw = process.env.NEXT_PUBLIC_AFFILIATE_TRACKING
  if (!raw) {
    cachedMap = {}
    return cachedMap
  }

  try {
    const parsed = JSON.parse(raw)
    cachedMap = parsed && typeof parsed === 'object' ? (parsed as Record<string, string>) : {}
  } catch {
    cachedMap = {}
  }

  return cachedMap
}

/**
 * Build an outbound affiliate URL for a broker.
 *
 * @param brokerKey broker id — must match a key in NEXT_PUBLIC_AFFILIATE_TRACKING
 * @param baseUrl   the broker's plain destination URL
 * @returns baseUrl with the configured tracking param appended (respecting any
 *          existing query string), or the bare baseUrl when nothing is configured.
 */
export function buildAffiliateUrl(brokerKey: string, baseUrl: string): string {
  if (!baseUrl) return baseUrl

  const map = getTrackingMap()
  const configured = (brokerKey && map[brokerKey]) || ''
  const param = configured.replace(/^[?&]+/, '').trim()

  if (!param) return baseUrl

  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}${param}`
}
