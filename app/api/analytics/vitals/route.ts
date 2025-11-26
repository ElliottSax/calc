import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const vitals = await request.json()

    // Log vitals (in production, you'd send to your analytics service)
    console.log('Web Vitals:', vitals)

    // Here you could send to:
    // - Google Analytics
    // - Sentry
    // - Custom analytics endpoint
    // - Database for tracking

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing web vitals:', error)
    return NextResponse.json(
      { error: 'Failed to process vitals' },
      { status: 500 }
    )
  }
}
