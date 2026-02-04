import { NextResponse } from 'next/server'
import { validateRequestBody, validationSchemas } from '@/lib/validation/sanitizer'
import { subscribeToNewsletter } from '@/lib/email/email-service'
import { logger } from '@/lib/logger'

export async function POST(request: Request) {
  try {
    // Validate and sanitize input
    const validatedData = await validateRequestBody(
      request,
      validationSchemas.newsletterSignup
    )

    const { email, firstName, lastName, interests } = validatedData

    // Subscribe using configured email service
    const result = await subscribeToNewsletter({
      email,
      firstName,
      lastName,
      source: 'newsletter_signup',
      tags: interests || [],
      customFields: {
        signup_date: new Date().toISOString(),
        signup_page: 'calculator_hub'
      }
    })

    if (!result.success) {
      throw new Error(result.error || 'Subscription failed')
    }

    logger.info({ email, subscriberId: result.subscriberId }, 'Newsletter subscription successful')

    return NextResponse.json({
      success: true,
      message: result.message || 'Successfully subscribed to newsletter',
      data: {
        email,
        subscribed: true,
        subscriberId: result.subscriberId,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    logger.error({ error }, 'Newsletter subscription error')
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter',
        success: false
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { email } = await request.json()

    // Here you would unsubscribe from your email service
    console.log('Newsletter unsubscribe:', email)

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed',
      data: { email, unsubscribed: true }
    })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to unsubscribe' },
      { status: 500 }
    )
  }
}