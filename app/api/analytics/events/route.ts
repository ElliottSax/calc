/**
 * API endpoint for detailed monetization event logging.
 *
 * lib/analytics/tracking.ts's trackAffiliateClick / trackLeadCapture /
 * trackPremiumConversion each fire a GA4 gtag event AND POST here for
 * server-side logging ("Also track in database for detailed reporting").
 * This route didn't exist -- every one of those calls has been silently
 * 404ing since the tracking helper was written; the fetch is wrapped in a
 * try/catch that only logs the failure client-side, so it never surfaced.
 * GA4 tracking itself is unaffected (that call happens first and separately),
 * but there has never been any server-side record of affiliate
 * clicks/lead captures/premium conversions to reconcile against GA4 or spot
 * gaps in it.
 *
 * There's no events database wired into this project yet (same as
 * app/api/vitals/route.ts, which only logs), so this mirrors that route's
 * pattern: validate, log via the structured logger (captured in Vercel's
 * log stream), return success. Swap in real persistence later without
 * changing the caller.
 */

import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'
import { applyRateLimit, RateLimitPresets } from '@/lib/rate-limit'
import type { MonetizationEvent } from '@/types/monetization'

const VALID_TYPES = new Set<MonetizationEvent['type']>([
  'ad_impression',
  'ad_click',
  'affiliate_click',
  'lead_capture',
  'premium_conversion',
])

export async function POST(request: NextRequest) {
  const rateLimitError = applyRateLimit(request, 'analytics-events', RateLimitPresets.CONVERSION_TRACKING)
  if (rateLimitError) return rateLimitError

  try {
    const event: MonetizationEvent = await request.json()

    if (!event || typeof event.type !== 'string' || !VALID_TYPES.has(event.type)) {
      return NextResponse.json(
        { error: 'Invalid or missing monetization event type' },
        { status: 400 }
      )
    }

    if (typeof event.source !== 'string' || !event.source) {
      return NextResponse.json(
        { error: 'Missing event source' },
        { status: 400 }
      )
    }

    logger.info(
      {
        type: event.type,
        source: event.source,
        revenue: event.revenue,
        userId: event.userId,
        metadata: event.metadata,
        timestamp: event.timestamp || new Date().toISOString(),
      },
      'Monetization event recorded'
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error({ error }, 'Failed to record monetization event')
    return NextResponse.json(
      { error: 'Failed to record event' },
      { status: 500 }
    )
  }
}
