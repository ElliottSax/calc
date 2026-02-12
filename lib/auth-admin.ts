/**
 * Admin API Authentication Utilities
 *
 * Provides API key-based authentication for admin/monitoring endpoints.
 * Uses secure header-based auth to prevent exposure of admin endpoints.
 */

import { NextRequest, NextResponse } from 'next/server'

/**
 * Environment variable for admin API key.
 * Generate with: openssl rand -hex 32
 * Add to .env.local: ADMIN_API_KEY=your-secure-key
 */
const ADMIN_API_KEY = process.env.ADMIN_API_KEY

/**
 * Check if admin authentication is properly configured.
 */
export function isAdminAuthConfigured(): boolean {
  return !!ADMIN_API_KEY && ADMIN_API_KEY.length >= 32
}

/**
 * Validate admin API key from request headers.
 *
 * @param request - The incoming Next.js request
 * @returns true if authenticated, false otherwise
 */
export function isAdminAuthenticated(request: NextRequest): boolean {
  if (!ADMIN_API_KEY) {
    console.error('ADMIN_API_KEY not configured in environment')
    return false
  }

  const authHeader = request.headers.get('authorization')
  const apiKeyHeader = request.headers.get('x-api-key')

  // Support both Authorization: Bearer <key> and X-API-Key: <key>
  const providedKey = authHeader?.replace(/^Bearer\s+/i, '') || apiKeyHeader

  if (!providedKey) {
    return false
  }

  // Constant-time comparison to prevent timing attacks
  return timingSafeEqual(providedKey, ADMIN_API_KEY)
}

/**
 * Middleware helper to require admin authentication.
 * Returns 401 response if not authenticated, null otherwise.
 *
 * @example
 * ```typescript
 * export async function GET(request: NextRequest) {
 *   const authError = requireAdminAuth(request)
 *   if (authError) return authError
 *
 *   // ... your handler code
 * }
 * ```
 */
export function requireAdminAuth(request: NextRequest): NextResponse | null {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      {
        error: 'Admin authentication not configured',
        message: 'ADMIN_API_KEY environment variable must be set',
      },
      { status: 500 }
    )
  }

  if (!isAdminAuthenticated(request)) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
        message: 'Valid API key required. Provide via Authorization: Bearer <key> or X-API-Key: <key> header',
      },
      {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Bearer realm="Admin API"',
        },
      }
    )
  }

  return null
}

/**
 * Timing-safe string comparison to prevent timing attacks.
 * Compares two strings in constant time regardless of where they differ.
 */
function timingSafeEqual(a: string, b: string): boolean {
  // If lengths differ, still compare to prevent timing leaks
  const aLen = a.length
  const bLen = b.length
  const maxLen = Math.max(aLen, bLen)

  let result = aLen === bLen ? 0 : 1

  for (let i = 0; i < maxLen; i++) {
    const aChar = i < aLen ? a.charCodeAt(i) : 0
    const bChar = i < bLen ? b.charCodeAt(i) : 0
    result |= aChar ^ bChar
  }

  return result === 0
}

/**
 * Optional: IP allowlist for additional security layer.
 * Enable by setting ADMIN_ALLOWED_IPS in environment (comma-separated).
 */
export function isIpAllowed(request: NextRequest): boolean {
  const allowedIps = process.env.ADMIN_ALLOWED_IPS?.split(',').map(ip => ip.trim())

  if (!allowedIps || allowedIps.length === 0) {
    // If no IP allowlist configured, allow all (rely on API key only)
    return true
  }

  const forwarded = request.headers.get('x-forwarded-for')
  const clientIp = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'

  return allowedIps.includes(clientIp)
}

/**
 * Combined auth check: API key + optional IP allowlist.
 */
export function requireAdminAuthWithIp(request: NextRequest): NextResponse | null {
  // First check IP allowlist if configured
  if (!isIpAllowed(request)) {
    return NextResponse.json(
      {
        error: 'Forbidden',
        message: 'Access denied from your IP address',
      },
      { status: 403 }
    )
  }

  // Then check API key
  return requireAdminAuth(request)
}
