/**
 * Email Service Integration
 *
 * This module provides a unified interface for email service providers.
 * Currently supports: ConvertKit, SendGrid, Resend, Mailchimp
 *
 * To use:
 * 1. Choose your provider in .env: EMAIL_PROVIDER=convertkit
 * 2. Add your API key: CONVERTKIT_API_KEY=your_key or SENDGRID_API_KEY=your_key
 * 3. Import and use: import { subscribeToNewsletter } from '@/lib/email/email-service'
 */

import { logger } from '@/lib/logger'

export type EmailProvider = 'convertkit' | 'sendgrid' | 'resend' | 'mailchimp' | 'mock'

export interface SubscribeParams {
  email: string
  firstName?: string
  lastName?: string
  source?: string
  tags?: string[]
  customFields?: Record<string, any>
}

export interface SubscribeResponse {
  success: boolean
  subscriberId?: string
  message?: string
  error?: string
}

/**
 * Get the configured email provider
 */
function getProvider(): EmailProvider {
  const provider = (process.env.EMAIL_PROVIDER || 'mock') as EmailProvider
  return provider
}

/**
 * Subscribe user to newsletter using configured provider
 */
export async function subscribeToNewsletter(
  params: SubscribeParams
): Promise<SubscribeResponse> {
  const provider = getProvider()

  logger.info({ provider, source: params.source }, 'Newsletter subscription attempt')

  try {
    switch (provider) {
      case 'convertkit':
        return await subscribeConvertKit(params)

      case 'sendgrid':
        return await subscribeSendGrid(params)

      case 'resend':
        return await subscribeResend(params)

      case 'mailchimp':
        return await subscribeMailchimp(params)

      case 'mock':
      default:
        return mockSubscribe(params)
    }
  } catch (error) {
    logger.error({ error, provider }, 'Newsletter subscription failed')
    return {
      success: false,
      error: 'Failed to subscribe. Please try again later.'
    }
  }
}

/**
 * ConvertKit Implementation
 * https://developers.convertkit.com/
 */
async function subscribeConvertKit(params: SubscribeParams): Promise<SubscribeResponse> {
  const apiKey = process.env.CONVERTKIT_API_KEY
  const formId = process.env.CONVERTKIT_FORM_ID

  if (!apiKey || !formId) {
    logger.warn('ConvertKit credentials not configured')
    return mockSubscribe(params)
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      api_key: apiKey,
      email: params.email,
      first_name: params.firstName || '',
      tags: params.tags || [],
      fields: {
        source: params.source || 'website',
        ...params.customFields
      }
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`ConvertKit API error: ${error}`)
  }

  const data = await response.json()

  logger.info({ subscriberId: data.subscription.subscriber.id }, 'ConvertKit subscription successful')

  return {
    success: true,
    subscriberId: data.subscription.subscriber.id.toString(),
    message: 'Successfully subscribed to newsletter'
  }
}

/**
 * SendGrid Implementation
 * https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact
 */
async function subscribeSendGrid(params: SubscribeParams): Promise<SubscribeResponse> {
  const apiKey = process.env.SENDGRID_API_KEY
  const listId = process.env.SENDGRID_LIST_ID

  if (!apiKey || !listId) {
    logger.warn('SendGrid credentials not configured')
    return mockSubscribe(params)
  }

  const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      list_ids: [listId],
      contacts: [{
        email: params.email,
        first_name: params.firstName || '',
        last_name: params.lastName || '',
        custom_fields: {
          source: params.source || 'website',
          ...params.customFields
        }
      }]
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`SendGrid API error: ${error}`)
  }

  logger.info('SendGrid subscription successful')

  return {
    success: true,
    message: 'Successfully subscribed to newsletter'
  }
}

/**
 * Resend Implementation
 * https://resend.com/docs/api-reference/audiences/create-contact
 */
async function subscribeResend(params: SubscribeParams): Promise<SubscribeResponse> {
  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    logger.warn('Resend credentials not configured')
    return mockSubscribe(params)
  }

  const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: params.email,
      first_name: params.firstName || '',
      last_name: params.lastName || '',
      unsubscribed: false
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Resend API error: ${error}`)
  }

  const data = await response.json()

  logger.info({ contactId: data.id }, 'Resend subscription successful')

  return {
    success: true,
    subscriberId: data.id,
    message: 'Successfully subscribed to newsletter'
  }
}

/**
 * Mailchimp Implementation
 * https://mailchimp.com/developer/marketing/api/list-members/
 */
async function subscribeMailchimp(params: SubscribeParams): Promise<SubscribeResponse> {
  const apiKey = process.env.MAILCHIMP_API_KEY
  const listId = process.env.MAILCHIMP_LIST_ID
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX // e.g., 'us1'

  if (!apiKey || !listId || !serverPrefix) {
    logger.warn('Mailchimp credentials not configured')
    return mockSubscribe(params)
  }

  const response = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: params.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: params.firstName || '',
          LNAME: params.lastName || '',
          SOURCE: params.source || 'website'
        },
        tags: params.tags || []
      })
    }
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Mailchimp API error: ${error}`)
  }

  const data = await response.json()

  logger.info({ subscriberId: data.id }, 'Mailchimp subscription successful')

  return {
    success: true,
    subscriberId: data.id,
    message: 'Successfully subscribed to newsletter'
  }
}

/**
 * Mock implementation for development/testing
 */
function mockSubscribe(params: SubscribeParams): SubscribeResponse {
  logger.info({ source: params.source }, 'Mock subscription (no email sent)')

  // In development, just log and return success
  return {
    success: true,
    subscriberId: `mock-${Date.now()}`,
    message: 'Successfully subscribed (mock mode - no actual email sent)'
  }
}

/**
 * Send a welcome email to a new subscriber.
 *
 * Implemented for Resend (the configured provider). Sending requires a verified
 * domain on the Resend account for the EMAIL_FROM address; until the domain
 * verifies, Resend rejects the send and this returns false — but it is called
 * non-blocking from the route, so a failed welcome never fails the signup.
 */
export async function sendWelcomeEmail(
  email: string,
  firstName?: string
): Promise<boolean> {
  const provider = getProvider()

  if (provider !== 'resend') {
    logger.info({ provider }, 'Welcome email skipped (provider has no send implementation)')
    return true
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    logger.warn('Welcome email skipped — RESEND_API_KEY not set')
    return false
  }

  const from = process.env.EMAIL_FROM || 'Dividend Engines <hello@dividendengines.com>'
  const hi = firstName ? ` ${firstName}` : ''
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://dividendengines.com'

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: 'Welcome to Dividend Engines 📈',
        text: `Hi${hi},

Thanks for subscribing to Dividend Engines.

You'll get practical dividend-investing tips and new calculator releases — no spam.

Start here:
• DRIP calculator: ${site}/calculators/drip
• Retirement income: ${site}/calculators/retirement-income
• Dividend growth: ${site}/calculators/dividend-growth

Happy compounding,
The Dividend Engines Team`,
        html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;line-height:1.6;color:#1a1a1a">
  <h1 style="font-size:22px;margin:0 0 12px">Welcome to Dividend Engines 📈</h1>
  <p>Hi${hi},</p>
  <p>Thanks for subscribing. You'll get practical dividend-investing tips and new calculator releases — no spam.</p>
  <p style="margin:20px 0"><strong>Start here:</strong></p>
  <ul style="padding-left:18px">
    <li><a href="${site}/calculators/drip" style="color:#0d9488">DRIP calculator</a></li>
    <li><a href="${site}/calculators/retirement-income" style="color:#0d9488">Retirement income calculator</a></li>
    <li><a href="${site}/calculators/dividend-growth" style="color:#0d9488">Dividend growth calculator</a></li>
  </ul>
  <p style="margin-top:24px">Happy compounding,<br><strong>The Dividend Engines Team</strong></p>
</div>`,
      }),
    })

    if (!res.ok) {
      // Most common cause: the EMAIL_FROM domain isn't verified in Resend yet.
      logger.error({ status: res.status, body: await res.text() }, 'Welcome email send failed')
      return false
    }
    logger.info('Welcome email sent')
    return true
  } catch (error) {
    logger.error({ error }, 'Welcome email send threw')
    return false
  }
}
