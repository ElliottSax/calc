import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { requireAdminAuth } from '@/lib/auth-admin'
import { applyRateLimit, RateLimitPresets } from '@/lib/rate-limit'

interface ConversionData {
  platform: string
  action: 'signup' | 'deposit' | 'trade'
  value?: number
  userId?: string
  metadata?: Record<string, any>
  timestamp?: string
  sessionId?: string
  affiliateData?: any
  ip?: string
  userAgent?: string
  referer?: string
}

// Simulated database for tracking conversions
const conversions: ConversionData[] = []

export async function POST(request: NextRequest) {
  // Apply rate limiting to prevent conversion tracking abuse
  const rateLimitError = applyRateLimit(request, 'conversion-post', RateLimitPresets.CONVERSION_TRACKING)
  if (rateLimitError) return rateLimitError
  try {
    const data: ConversionData = await request.json()
    const cookieStore = cookies()

    // Get affiliate tracking data from cookies
    const affiliateData = cookieStore.get('affiliate_data')
    const sessionId = cookieStore.get('session_id')

    // Validate required fields
    if (!data.platform || !data.action) {
      return NextResponse.json(
        { error: 'Missing required fields: platform and action' },
        { status: 400 }
      )
    }

    // Create conversion record
    const conversion = {
      ...data,
      timestamp: new Date().toISOString(),
      sessionId: sessionId?.value,
      affiliateData: affiliateData ? JSON.parse(affiliateData.value) : null,
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      referer: request.headers.get('referer') || 'direct',
    }

    // Here you would typically:
    // 1. Save to database (PostgreSQL, MongoDB, etc.)
    // 2. Send to affiliate network API
    // 3. Trigger webhook to notification service
    // 4. Update analytics

    // For demo, we'll simulate saving
    conversions.push(conversion)
    console.log('Conversion tracked:', conversion)

    // Send to affiliate networks (example for different platforms)
    switch (data.platform) {
      case 'etoro':
        // await sendToEtoroAPI(conversion)
        break
      case 'interactive-brokers':
        // await sendToIBKRAPI(conversion)
        break
      case 'charles-schwab':
        // await sendToSchwabAPI(conversion)
        break
      default:
        console.log(`No specific handler for ${data.platform}`)
    }

    // Track in Google Analytics
    const gtag = {
      event: 'conversion',
      value: data.value || 0,
      currency: 'USD',
      transaction_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      affiliation: data.platform,
      items: [{
        item_name: data.action,
        item_category: 'affiliate',
        item_brand: data.platform,
        price: data.value || 0,
        quantity: 1,
      }]
    }

    return NextResponse.json({
      success: true,
      message: 'Conversion tracked successfully',
      data: {
        conversionId: `conv_${Date.now()}`,
        platform: data.platform,
        action: data.action,
        value: data.value,
        gtag,
      }
    })
  } catch (error) {
    console.error('Conversion tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track conversion' },
      { status: 500 }
    )
  }
}

// Get conversion analytics (ADMIN ONLY - contains sensitive business data)
export async function GET(request: NextRequest) {
  // Require admin authentication for viewing analytics
  const authError = requireAdminAuth(request)
  if (authError) return authError

  // Apply rate limiting
  const rateLimitError = applyRateLimit(request, 'conversion-get', RateLimitPresets.MONITORING)
  if (rateLimitError) return rateLimitError
  try {
    const { searchParams } = new URL(request.url)
    const platform = searchParams.get('platform')
    const days = parseInt(searchParams.get('days') || '30')

    // Calculate date range
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Filter conversions
    let filtered = conversions.filter(c => {
      const convDate = new Date(c.timestamp!)
      return convDate >= startDate && convDate <= endDate
    })

    if (platform) {
      filtered = filtered.filter(c => c.platform === platform)
    }

    // Calculate analytics
    const analytics = {
      total: filtered.length,
      byPlatform: {} as Record<string, number>,
      byAction: {} as Record<string, number>,
      totalValue: 0,
      averageValue: 0,
      conversionRate: 0,
      recentConversions: filtered.slice(-10).reverse(),
    }

    // Aggregate data
    filtered.forEach(c => {
      // By platform
      analytics.byPlatform[c.platform] = (analytics.byPlatform[c.platform] || 0) + 1

      // By action
      analytics.byAction[c.action] = (analytics.byAction[c.action] || 0) + 1

      // Total value
      analytics.totalValue += c.value || 0
    })

    // Calculate averages
    if (filtered.length > 0) {
      analytics.averageValue = analytics.totalValue / filtered.length
      // Simulated conversion rate (would need total visitors from analytics)
      analytics.conversionRate = (filtered.length / 1000) * 100 // Assuming 1000 visitors
    }

    return NextResponse.json({
      success: true,
      period: `${days} days`,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      analytics,
    })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve analytics' },
      { status: 500 }
    )
  }
}