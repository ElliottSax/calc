import { NextRequest, NextResponse } from 'next/server'

interface RateLimitConfig {
  interval: number // Time window in milliseconds
  maxRequests: number // Maximum requests per interval
  identifier?: (req: NextRequest) => string // Custom identifier function
  skipSuccessfulRequests?: boolean // Only count failed requests
  skipFailedRequests?: boolean // Only count successful requests
}

interface RateLimitStore {
  count: number
  resetTime: number
}

class RateLimiter {
  private store: Map<string, RateLimitStore> = new Map()
  private cleanupInterval: NodeJS.Timeout | null = null

  constructor() {
    // Clean up expired entries every minute
    this.cleanupInterval = setInterval(() => {
      this.cleanup()
    }, 60000)
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, value] of this.store.entries()) {
      if (value.resetTime <= now) {
        this.store.delete(key)
      }
    }
  }

  private getIdentifier(req: NextRequest, config: RateLimitConfig): string {
    if (config.identifier) {
      return config.identifier(req)
    }

    // Default: Use IP address
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    return `${req.nextUrl.pathname}:${ip}`
  }

  async check(req: NextRequest, config: RateLimitConfig): Promise<{
    success: boolean
    limit: number
    remaining: number
    reset: number
  }> {
    const identifier = this.getIdentifier(req, config)
    const now = Date.now()

    let limitData = this.store.get(identifier)

    if (!limitData || limitData.resetTime <= now) {
      // Create new limit window
      limitData = {
        count: 0,
        resetTime: now + config.interval,
      }
      this.store.set(identifier, limitData)
    }

    limitData.count++
    const remaining = Math.max(0, config.maxRequests - limitData.count)
    const success = limitData.count <= config.maxRequests

    return {
      success,
      limit: config.maxRequests,
      remaining,
      reset: limitData.resetTime,
    }
  }

  destroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval)
    }
    this.store.clear()
  }
}

// Global rate limiter instance
const rateLimiter = new RateLimiter()

// Rate limiting middleware
export async function withRateLimit(
  req: NextRequest,
  config: RateLimitConfig,
  handler: () => Promise<NextResponse>
): Promise<NextResponse> {
  const result = await rateLimiter.check(req, config)

  // Add rate limit headers
  const headers = new Headers({
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': new Date(result.reset).toISOString(),
    'Retry-After': result.success ? '' : Math.ceil((result.reset - Date.now()) / 1000).toString(),
  })

  if (!result.success) {
    return new NextResponse(
      JSON.stringify({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil((result.reset - Date.now()) / 1000),
      }),
      {
        status: 429,
        headers,
      }
    )
  }

  // Execute handler and add rate limit headers to response
  const response = await handler()

  headers.forEach((value, key) => {
    response.headers.set(key, value)
  })

  return response
}

// Pre-configured rate limiters for different use cases
export const RateLimits = {
  // Strict limit for authentication endpoints
  auth: {
    interval: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
  },

  // API endpoints
  api: {
    interval: 60 * 1000, // 1 minute
    maxRequests: 30,
  },

  // Newsletter signup
  newsletter: {
    interval: 60 * 60 * 1000, // 1 hour
    maxRequests: 3,
  },

  // Calculator usage
  calculator: {
    interval: 60 * 1000, // 1 minute
    maxRequests: 100,
  },

  // Affiliate tracking
  affiliate: {
    interval: 60 * 1000, // 1 minute
    maxRequests: 10,
  },

  // Search
  search: {
    interval: 60 * 1000, // 1 minute
    maxRequests: 20,
  },

  // File download
  download: {
    interval: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
  },
}

// Helper function to create rate-limited API route
export function createRateLimitedRoute(
  config: RateLimitConfig,
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    return withRateLimit(req, config, () => handler(req))
  }
}

// IP-based rate limiter
export function ipRateLimit(
  maxRequests: number = 100,
  windowMs: number = 60000
): RateLimitConfig {
  return {
    interval: windowMs,
    maxRequests,
    identifier: (req) => {
      const forwarded = req.headers.get('x-forwarded-for')
      return forwarded ? forwarded.split(',')[0] : 'unknown'
    },
  }
}

// User-based rate limiter (requires authentication)
export function userRateLimit(
  maxRequests: number = 1000,
  windowMs: number = 60000
): RateLimitConfig {
  return {
    interval: windowMs,
    maxRequests,
    identifier: (req) => {
      // Extract user ID from JWT or session
      const auth = req.headers.get('authorization')
      if (auth && auth.startsWith('Bearer ')) {
        const token = auth.substring(7)
        // Decode JWT to get user ID (simplified)
        try {
          const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
          return `user:${payload.userId || payload.sub}`
        } catch {
          return 'anonymous'
        }
      }
      return 'anonymous'
    },
  }
}

// Sliding window rate limiter for more accurate limiting
export class SlidingWindowRateLimiter {
  private windows: Map<string, number[]> = new Map()

  async check(
    identifier: string,
    maxRequests: number,
    windowMs: number
  ): Promise<boolean> {
    const now = Date.now()
    const windowStart = now - windowMs

    // Get or create window for identifier
    let timestamps = this.windows.get(identifier) || []

    // Remove expired timestamps
    timestamps = timestamps.filter(t => t > windowStart)

    // Check if limit exceeded
    if (timestamps.length >= maxRequests) {
      return false
    }

    // Add current timestamp
    timestamps.push(now)
    this.windows.set(identifier, timestamps)

    return true
  }

  cleanup() {
    const now = Date.now()
    for (const [key, timestamps] of this.windows.entries()) {
      // Remove identifiers with no recent activity
      if (timestamps.length === 0 || timestamps[timestamps.length - 1] < now - 3600000) {
        this.windows.delete(key)
      }
    }
  }
}