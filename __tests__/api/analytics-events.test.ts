import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

vi.mock('@/lib/logger', () => ({
  logger: { info: vi.fn(), error: vi.fn(), warn: vi.fn(), debug: vi.fn() },
}))

import { POST } from '@/app/api/analytics/events/route'
import { logger } from '@/lib/logger'

function makeRequest(body: any) {
  return new NextRequest('http://localhost/api/analytics/events', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('POST /api/analytics/events', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('accepts a real affiliate_click event and logs it (regression: route used to 404)', async () => {
    const response = await POST(
      makeRequest({
        type: 'affiliate_click',
        source: 'schwab',
        metadata: { placement: 'comparison-table' },
        timestamp: new Date().toISOString(),
      })
    )
    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(logger.info).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'affiliate_click', source: 'schwab' }),
      'Monetization event recorded'
    )
  })

  it('accepts lead_capture and premium_conversion event types', async () => {
    const lead = await POST(
      makeRequest({ type: 'lead_capture', source: 'exit-intent', timestamp: new Date().toISOString() })
    )
    expect(lead.status).toBe(200)

    const premium = await POST(
      makeRequest({ type: 'premium_conversion', source: 'pro-plan', revenue: 9.99, timestamp: new Date().toISOString() })
    )
    expect(premium.status).toBe(200)
  })

  it('rejects an unknown event type', async () => {
    const response = await POST(
      makeRequest({ type: 'not_a_real_type', source: 'x' })
    )
    expect(response.status).toBe(400)
  })

  it('rejects an event with no source', async () => {
    const response = await POST(
      makeRequest({ type: 'affiliate_click' })
    )
    expect(response.status).toBe(400)
  })
})
