/**
 * Rate Limiting Utilities for API Routes
 *
 * Provides per-endpoint rate limiting to prevent abuse and DoS attacks.
 * Complements the global middleware rate limiting with stricter limits
 * for sensitive endpoints like error/log ingestion.
 */

import { NextRequest, NextResponse } from 'next/server'

interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Max requests per window
  message?: string // Custom error message
}

interface RateLimitEntry {
  count: number
  resetTime: number
}

/**
 * In-memory rate limit store per endpoint.
 * Key format: "endpoint:identifier"
 */
const rateLimitStores = new Map<string, Map<string, RateLimitEntry>>()
let lastCleanup = Date.now()
const CLEANUP_INTERVAL_MS = 300_000 // 5 minutes

/**
 * Preset rate limit configurations for common use cases.
 */
export const RateLimitPresets = {
  /** Strict limits for log/error ingestion to prevent DoS via log flooding */
  LOG_INGESTION: {
    windowMs: 60_000, // 1 minute
    maxRequests: 20, // 20 logs per minute per IP
    message: 'Too many log submissions. Please slow down.',
  },

  /** Moderate limits for monitoring/metrics endpoints */
  MONITORING: {
    windowMs: 60_000, // 1 minute
    maxRequests: 30, // 30 requests per minute
    message: 'Rate limit exceeded for monitoring endpoint.',
  },

  /** Lenient limits for conversion tracking (user-facing) */
  CONVERSION_TRACKING: {
    windowMs: 60_000, // 1 minute
    maxRequests: 10, // 10 conversions per minute per IP
    message: 'Too many conversion events. Please try again later.',
  },

  /** Very strict limits for admin operations */
  ADMIN_OPERATIONS: {
    windowMs: 60_000, // 1 minute
    maxRequests: 10, // 10 admin requests per minute
    message: 'Admin rate limit exceeded.',
  },
} as const

/**
 * Clean up stale entries from all rate limit stores.
 */
function cleanupStaleEntries(): void {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return

  lastCleanup = now

  for (const [_endpoint, store] of rateLimitStores) {
    for (const [key, entry] of store) {
      if (entry.resetTime <= now) {
        store.delete(key)
      }
    }
  }
}

/**
 * Get client identifier (IP address) from request.
 */
function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

/**
 * Check rate limit for a specific endpoint and client.
 *
 * @param request - The incoming request
 * @param endpoint - Unique identifier for this endpoint (e.g., 'logs', 'metrics')
 * @param config - Rate limit configuration
 * @returns NextResponse with 429 status if rate limited, null otherwise
 */
export function checkRateLimit(
  request: NextRequest,
  endpoint: string,
  config: RateLimitConfig
): NextResponse | null {
  cleanupStaleEntries()

  // Get or create store for this endpoint
  if (!rateLimitStores.has(endpoint)) {
    rateLimitStores.set(endpoint, new Map())
  }
  const store = rateLimitStores.get(endpoint)!

  const identifier = getClientIdentifier(request)
  const now = Date.now()
  const entry = store.get(identifier)

  if (entry && entry.resetTime > now) {
    if (entry.count >= config.maxRequests) {
      const retryAfter = Math.ceil((entry.resetTime - now) / 1000)
      const remaining = 0
      const reset = Math.ceil(entry.resetTime / 1000)

      return new NextResponse(
        JSON.stringify({
          error: 'Rate limit exceeded',
          message: config.message || 'Too many requests. Please try again later.',
          retryAfter,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': String(config.maxRequests),
            'X-RateLimit-Remaining': String(remaining),
            'X-RateLimit-Reset': String(reset),
          },
        }
      )
    }

    // Increment count
    entry.count++

    // Set remaining header
    const remaining = config.maxRequests - entry.count
    return null
  } else {
    // Create new entry
    store.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    })
  }

  return null
}

/**
 * Middleware helper for easy rate limiting in route handlers.
 *
 * @example
 * ```typescript
 * export async function POST(request: NextRequest) {
 *   const rateLimitError = applyRateLimit(request, 'logs', RateLimitPresets.LOG_INGESTION)
 *   if (rateLimitError) return rateLimitError
 *
 *   // ... your handler code
 * }
 * ```
 */
export function applyRateLimit(
  request: NextRequest,
  endpoint: string,
  config: RateLimitConfig
): NextResponse | null {
  return checkRateLimit(request, endpoint, config)
}

/**
 * Get current rate limit status for debugging/monitoring.
 */
export function getRateLimitStatus(endpoint: string, identifier: string): {
  remaining: number
  resetTime: number
  limited: boolean
} | null {
  const store = rateLimitStores.get(endpoint)
  if (!store) return null

  const entry = store.get(identifier)
  if (!entry) return null

  const now = Date.now()
  if (entry.resetTime <= now) {
    return null
  }

  // Find the config for this endpoint (would need to be passed in or stored)
  // For now, assume default of 60 max
  const maxRequests = 60
  const remaining = Math.max(0, maxRequests - entry.count)
  const limited = entry.count >= maxRequests

  return {
    remaining,
    resetTime: entry.resetTime,
    limited,
  }
}
