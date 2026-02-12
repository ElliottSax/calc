import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock logger
vi.mock('@/lib/logger', () => ({
  logger: { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() },
}))

// Mock email service
vi.mock('@/lib/email/email-service', () => ({
  subscribeToNewsletter: vi.fn().mockResolvedValue({
    success: true,
    subscriberId: 'test-123',
    message: 'Subscribed!',
  }),
}))

// Mock next/server
vi.mock('next/server', async () => {
  class MockNextResponse {
    body: any
    status: number
    constructor(body: any, init?: { status?: number }) {
      this.body = body
      this.status = init?.status ?? 200
    }
    static json(data: any, init?: { status?: number }) {
      return { data, status: init?.status ?? 200 }
    }
  }
  class MockNextRequest {
    private bodyData: any
    constructor(body: any) {
      this.bodyData = body
    }
    async json() {
      return this.bodyData
    }
  }
  return { NextResponse: MockNextResponse, NextRequest: MockNextRequest }
})

import { POST } from '@/app/api/subscribe/route'

function makeRequest(body: any) {
  return { json: async () => body } as any
}

describe('POST /api/subscribe', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns success for valid subscription', async () => {
    const response = await POST(makeRequest({
      email: 'test@example.com',
      name: 'Test User',
      timestamp: Date.now() - 5000,
    }))
    expect(response.status).toBe(200)
    expect(response.data.success).toBe(true)
  })

  it('returns 400 for missing email', async () => {
    const response = await POST(makeRequest({
      name: 'Test User',
      timestamp: Date.now() - 5000,
    }))
    expect(response.status).toBe(400)
    expect(response.data.error).toContain('required')
  })

  it('returns 400 for invalid email format', async () => {
    const response = await POST(makeRequest({
      email: 'not-an-email',
      timestamp: Date.now() - 5000,
    }))
    expect(response.status).toBe(400)
    expect(response.data.error).toContain('Invalid email')
  })

  it('returns silent success when honeypot is filled (bot)', async () => {
    const response = await POST(makeRequest({
      email: 'bot@spam.com',
      website: 'http://spam.com', // honeypot field filled
      timestamp: Date.now() - 5000,
    }))
    expect(response.status).toBe(200)
    expect(response.data.success).toBe(true)
    // Should NOT have called the email service
    const { subscribeToNewsletter } = await import('@/lib/email/email-service')
    expect(subscribeToNewsletter).not.toHaveBeenCalled()
  })

  it('returns silent success when submitted too fast (bot)', async () => {
    const response = await POST(makeRequest({
      email: 'fast@bot.com',
      timestamp: Date.now() - 500, // only 500ms ago
    }))
    expect(response.status).toBe(200)
    expect(response.data.success).toBe(true)
    const { subscribeToNewsletter } = await import('@/lib/email/email-service')
    expect(subscribeToNewsletter).not.toHaveBeenCalled()
  })
})
