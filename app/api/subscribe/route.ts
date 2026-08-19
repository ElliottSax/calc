import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * POST /api/subscribe
 * Handle email newsletter subscriptions with basic bot protection.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, leadMagnet, website, timestamp } = body

    // Honeypot: if the hidden "website" field is filled, it's a bot
    if (website) {
      // Return success to avoid revealing the honeypot
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
      })
    }

    // Timing check: a human takes a moment to type an email, a bot does not. This
    // compares against when the FORM WAS RENDERED, not when it was submitted.
    //
    // It previously read the same way but the client sent Date.now() at submit
    // time, so the delta was always ~0ms and every genuine signup was classified
    // as a bot -- silently returning success while storing nothing. The client now
    // sends `renderedAt`; `timestamp` is still accepted so older cached bundles
    // keep working, but it can no longer trip the check on its own.
    const renderedAt = Number(body.renderedAt ?? timestamp)
    if (body.renderedAt && Number.isFinite(renderedAt) && Date.now() - renderedAt < 2000) {
      logger.info({ source: 'subscribe_endpoint' }, 'Rejected suspiciously fast submission')
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
      })
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    logger.info({ source: 'subscribe_endpoint', leadMagnet }, 'New newsletter subscription')

    const { subscribeToNewsletter } = await import('@/lib/email/email-service')

    const result = await subscribeToNewsletter({
      email,
      firstName: name,
      source: 'subscribe_endpoint',
      tags: leadMagnet ? [leadMagnet] : undefined,
      customFields: {
        lead_magnet: leadMagnet || 'none',
        signup_date: new Date().toISOString(),
      },
    })

    if (!result.success) {
      throw new Error(result.error || 'Subscription failed')
    }

    return NextResponse.json({
      success: true,
      message: result.message || 'Successfully subscribed to newsletter',
      subscriberId: result.subscriberId,
    })
  } catch (error) {
    logger.error({ error }, 'Newsletter subscription error')
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
