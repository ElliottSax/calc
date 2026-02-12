import { describe, it, expect, vi, beforeEach } from 'vitest'

// We need to mock next/server before importing middleware
vi.mock('next/server', async () => {
  class MockHeaders {
    private headers = new Map<string, string>()
    set(key: string, value: string) { this.headers.set(key.toLowerCase(), value) }
    get(key: string) { return this.headers.get(key.toLowerCase()) ?? null }
    has(key: string) { return this.headers.has(key.toLowerCase()) }
    forEach(cb: (value: string, key: string) => void) { this.headers.forEach(cb) }
  }

  class MockNextResponse {
    status: number
    headers: MockHeaders
    body: string | null

    constructor(body?: string | null, init?: { status?: number; headers?: Record<string, string> }) {
      this.body = body ?? null
      this.status = init?.status ?? 200
      this.headers = new MockHeaders()
      if (init?.headers) {
        for (const [k, v] of Object.entries(init.headers)) {
          this.headers.set(k, v)
        }
      }
    }

    static next() {
      return new MockNextResponse(null, { status: 200 })
    }

    static json(data: any, init?: { status?: number }) {
      return new MockNextResponse(JSON.stringify(data), { status: init?.status ?? 200 })
    }
  }

  return { NextResponse: MockNextResponse }
})

function makeRequest(pathname: string, ip = '127.0.0.1') {
  return {
    nextUrl: { pathname },
    headers: {
      get(key: string) {
        if (key === 'x-forwarded-for') return ip
        return null
      },
    },
  } as any
}

// Import after mocks are set up
let middleware: any

beforeEach(async () => {
  // Re-import to reset rate limit store state
  vi.resetModules()
  const mod = await import('@/middleware')
  middleware = mod.middleware
})

describe('middleware - security headers', () => {
  it('sets security headers on page routes', () => {
    const response = middleware(makeRequest('/about'))
    expect(response.headers.get('x-frame-options')).toBe('SAMEORIGIN')
    expect(response.headers.get('x-content-type-options')).toBe('nosniff')
    expect(response.headers.get('strict-transport-security')).toContain('max-age=')
    expect(response.headers.get('referrer-policy')).toBe('strict-origin-when-cross-origin')
    expect(response.headers.get('permissions-policy')).toContain('camera=()')
  })

  it('sets security headers on API routes', () => {
    const response = middleware(makeRequest('/api/subscribe', '10.0.0.1'))
    expect(response.headers.get('x-frame-options')).toBe('SAMEORIGIN')
    expect(response.headers.get('x-content-type-options')).toBe('nosniff')
    expect(response.headers.get('strict-transport-security')).toContain('max-age=')
  })

  it('sets CSP header only on non-API routes', () => {
    const pageResponse = middleware(makeRequest('/'))
    expect(pageResponse.headers.get('content-security-policy')).toBeTruthy()

    const apiResponse = middleware(makeRequest('/api/test', '10.0.0.2'))
    expect(apiResponse.headers.get('content-security-policy')).toBeNull()
  })

  it('sets X-Robots-Tag only on non-API routes', () => {
    const pageResponse = middleware(makeRequest('/calculators'))
    expect(pageResponse.headers.get('x-robots-tag')).toBe('index, follow')

    const apiResponse = middleware(makeRequest('/api/data', '10.0.0.3'))
    expect(apiResponse.headers.get('x-robots-tag')).toBeNull()
  })
})

describe('middleware - rate limiting', () => {
  it('allows requests under the limit', () => {
    const response = middleware(makeRequest('/api/test', '192.168.1.1'))
    expect(response.status).toBe(200)
  })

  it('returns 429 after exceeding rate limit', () => {
    const ip = '192.168.1.100'
    // Send 60 requests (the limit)
    for (let i = 0; i < 60; i++) {
      middleware(makeRequest('/api/test', ip))
    }
    // 61st should be rate limited
    const response = middleware(makeRequest('/api/test', ip))
    expect(response.status).toBe(429)
    expect(response.headers.get('retry-after')).toBeTruthy()
    expect(response.headers.get('x-ratelimit-remaining')).toBe('0')
  })

  it('does not rate limit page routes', () => {
    const ip = '192.168.1.200'
    // Send many page requests
    for (let i = 0; i < 100; i++) {
      const response = middleware(makeRequest('/about', ip))
      expect(response.status).toBe(200)
    }
  })
})
