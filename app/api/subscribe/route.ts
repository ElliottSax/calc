import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

/**
 * POST /api/subscribe
 * Handle email newsletter subscriptions
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, leadMagnet } = body
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    logger.info({ email, leadMagnet }, 'New newsletter subscription')

    // Use the unified email service
    const { subscribeToNewsletter } = await import('@/lib/email/email-service')

    const result = await subscribeToNewsletter({
      email,
      firstName: name,
      source: 'subscribe_endpoint',
      tags: leadMagnet ? [leadMagnet] : undefined,
      customFields: {
        lead_magnet: leadMagnet || 'none',
        signup_date: new Date().toISOString()
      }
    })

    if (!result.success) {
      throw new Error(result.error || 'Subscription failed')
    }

    return NextResponse.json({
      success: true,
      message: result.message || 'Successfully subscribed to newsletter',
      subscriberId: result.subscriberId
    })
    
  } catch (error) {
    logger.error({ error }, 'Newsletter subscription error')
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}