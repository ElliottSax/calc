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
    
    // In production, you would:
    // 1. Add to email service (ConvertKit, Mailchimp, etc.)
    // 2. Send welcome email with lead magnet
    // 3. Store in database for tracking
    
    // Example ConvertKit integration:
    /*
    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email,
        first_name: name,
        tags: [leadMagnet]
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to subscribe to ConvertKit')
    }
    */
    
    // For demo purposes, just return success
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    })
    
  } catch (error) {
    logger.error({ error }, 'Newsletter subscription error')
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}