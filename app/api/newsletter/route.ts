import { NextResponse } from 'next/server'
import { validateRequestBody, validationSchemas } from '@/lib/validation/sanitizer'
import { subscribeToNewsletter } from '@/lib/email/email-service'
import { logger } from '@/lib/logger'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot: if the hidden "website" field is filled, it's a bot
    if (body.website) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: { email: body.email, subscribed: true },
      })
    }

    // Re-parse for validation (validateRequestBody reads from request)
    const validatedData = await validateRequestBody(
      new Request(request.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }),
      validationSchemas.newsletterSignup
    )

    const { email, firstName, lastName, interests } = validatedData

    const result = await subscribeToNewsletter({
      email,
      firstName,
      lastName,
      source: 'newsletter_signup',
      tags: interests || [],
      customFields: {
        signup_date: new Date().toISOString(),
        signup_page: 'calculator_hub',
      },
    })

    if (!result.success) {
      throw new Error(result.error || 'Subscription failed')
    }

    logger.info({ subscriberId: result.subscriberId }, 'Newsletter subscription successful')

    return NextResponse.json({
      success: true,
      message: result.message || 'Successfully subscribed to newsletter',
      data: {
        email,
        subscribed: true,
        subscriberId: result.subscriberId,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    logger.error({ error }, 'Newsletter subscription error')
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter',
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required', success: false },
        { status: 400 }
      )
    }

    const provider = process.env.EMAIL_PROVIDER || 'mock'

    // Unsubscribe based on the configured provider
    switch (provider) {
      case 'convertkit': {
        const apiSecret = process.env.CONVERTKIT_API_SECRET
        if (apiSecret) {
          const res = await fetch(
            `https://api.convertkit.com/v3/unsubscribe`,
            {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ api_secret: apiSecret, email }),
            }
          )
          if (!res.ok) {
            throw new Error(`ConvertKit unsubscribe failed: ${await res.text()}`)
          }
        }
        break
      }
      case 'sendgrid': {
        const apiKey = process.env.SENDGRID_API_KEY
        if (apiKey) {
          const searchRes = await fetch(
            `https://api.sendgrid.com/v3/marketing/contacts/search/emails`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ emails: [email] }),
            }
          )
          if (searchRes.ok) {
            const data = await searchRes.json()
            const contact = data.result?.[email]?.contact
            if (contact?.id) {
              await fetch(
                `https://api.sendgrid.com/v3/marketing/contacts?ids=${contact.id}`,
                {
                  method: 'DELETE',
                  headers: { Authorization: `Bearer ${apiKey}` },
                }
              )
            }
          }
        }
        break
      }
      case 'resend': {
        const apiKey = process.env.RESEND_API_KEY
        const audienceId = process.env.RESEND_AUDIENCE_ID
        if (apiKey && audienceId) {
          // Resend uses contact ID; search by email first
          const listRes = await fetch(
            `https://api.resend.com/audiences/${audienceId}/contacts`,
            {
              headers: { Authorization: `Bearer ${apiKey}` },
            }
          )
          if (listRes.ok) {
            const contacts = await listRes.json()
            const contact = contacts.data?.find(
              (c: { email: string }) => c.email === email
            )
            if (contact?.id) {
              await fetch(
                `https://api.resend.com/audiences/${audienceId}/contacts/${contact.id}`,
                {
                  method: 'DELETE',
                  headers: { Authorization: `Bearer ${apiKey}` },
                }
              )
            }
          }
        }
        break
      }
      case 'mailchimp': {
        const apiKey = process.env.MAILCHIMP_API_KEY
        const listId = process.env.MAILCHIMP_LIST_ID
        const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX
        if (apiKey && listId && serverPrefix) {
          // Mailchimp uses MD5 hash of lowercase email as subscriber ID
          const crypto = await import('crypto')
          const subscriberHash = crypto
            .createHash('md5')
            .update(email.toLowerCase())
            .digest('hex')
          await fetch(
            `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`,
            {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ status: 'unsubscribed' }),
            }
          )
        }
        break
      }
      default:
        // Mock mode
        logger.info({ email }, 'Mock unsubscribe processed')
        break
    }

    logger.info({ provider }, 'Newsletter unsubscribe successful')

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed',
      data: { email, unsubscribed: true },
    })
  } catch (error) {
    logger.error({ error }, 'Newsletter unsubscribe error')
    return NextResponse.json(
      { error: 'Failed to unsubscribe', success: false },
      { status: 500 }
    )
  }
}
