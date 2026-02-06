import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Edge-compatible rate limiter using a sliding window with periodic cleanup.
 * Note: In serverless environments (Vercel), this provides per-instance limiting
 * which is still useful for burst protection even though state doesn't persist
 * across cold starts. For production-grade limiting, integrate Upstash Redis.
 */
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 60
const RATE_LIMIT_CLEANUP_INTERVAL = 300_000 // 5 minutes

const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
let lastCleanup = Date.now()

function cleanupStaleEntries() {
  const now = Date.now()
  if (now - lastCleanup < RATE_LIMIT_CLEANUP_INTERVAL) return
  lastCleanup = now
  for (const [key, val] of rateLimitStore) {
    if (val.resetTime <= now) rateLimitStore.delete(key)
  }
}

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'
  return `${request.nextUrl.pathname}:${ip}`
}

function checkRateLimit(request: NextRequest): NextResponse | null {
  cleanupStaleEntries()

  const key = getRateLimitKey(request)
  const now = Date.now()
  const entry = rateLimitStore.get(key)

  if (entry && entry.resetTime > now) {
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
      const retryAfter = Math.ceil((entry.resetTime - now) / 1000)
      return new NextResponse(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(entry.resetTime / 1000)),
          },
        }
      )
    }
    entry.count++
  } else {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
  }
  return null
}

function setSecurityHeaders(response: NextResponse, isApiRoute: boolean): void {
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')

  // Only set browser-facing headers on non-API routes
  if (!isApiRoute) {
    response.headers.set('X-Robots-Tag', 'index, follow')

    // CSP: unsafe-inline is required for Next.js inline styles and Google Analytics/AdSense.
    // unsafe-eval is required by Google AdSense ad rendering.
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https: blob:;
      font-src 'self' data:;
      connect-src 'self' https://www.google-analytics.com https://financialmodelingprep.com https://*.supabase.co https://us.i.posthog.com;
      frame-src 'self' https://www.google.com https://pagead2.googlesyndication.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'self';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim()

    response.headers.set('Content-Security-Policy', cspHeader)
  }
}

export function middleware(request: NextRequest) {
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/')

  // Rate limit API routes
  if (isApiRoute) {
    const rateLimitResponse = checkRateLimit(request)
    if (rateLimitResponse) return rateLimitResponse
  }

  const response = NextResponse.next()
  setSecurityHeaders(response, isApiRoute)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
