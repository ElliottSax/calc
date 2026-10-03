import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/logger', () => ({
  logger: { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() },
}))
const subscribeToNewsletter = vi.fn()
vi.mock('@/lib/email/email-service', () => ({
  subscribeToNewsletter: (...args: unknown[]) => subscribeToNewsletter(...args),
  sendWelcomeEmail: vi.fn().mockResolvedValue(undefined),
}))

import { POST } from '@/app/api/newsletter/route'

function req(body: string) {
  return new Request('http://localhost/api/newsletter', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('POST /api/newsletter', () => {
  beforeEach(() => vi.clearAllMocks())

  it('returns 400 (not 500) with the validation message for an invalid email', async () => {
    const res = await POST(req(JSON.stringify({ email: 'not-an-email' })))
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.success).toBe(false)
    expect(data.error).toMatch(/Validation failed|Invalid request body/)
    expect(subscribeToNewsletter).not.toHaveBeenCalled()
  })

  it('returns 400 for malformed JSON', async () => {
    const res = await POST(req('{not json'))
    expect(res.status).toBe(400)
  })

  it('still returns 500 when the provider fails on a valid email', async () => {
    subscribeToNewsletter.mockResolvedValue({ success: false, error: 'provider down' })
    const res = await POST(req(JSON.stringify({ email: 'reader@example.com' })))
    expect(res.status).toBe(500)
  })
})
