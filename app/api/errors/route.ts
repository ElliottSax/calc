import { NextRequest, NextResponse } from 'next/server'
import { calculatorLogger } from '@/lib/logger'
import { applyRateLimit, RateLimitPresets } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  // Apply strict rate limiting to prevent DoS via error flooding
  const rateLimitError = applyRateLimit(request, 'errors', RateLimitPresets.LOG_INGESTION)
  if (rateLimitError) return rateLimitError
  try {
    const errorData = await request.json()

    // Log the error
    calculatorLogger.error({
      ...errorData,
      source: 'client',
    }, 'Client-side error captured')

    // In production, you might want to:
    // 1. Send to Sentry/LogRocket
    // 2. Store in database for analysis
    // 3. Send alerts for critical errors
    // 4. Aggregate metrics

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing error report:', error)
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    )
  }
}
