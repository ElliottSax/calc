/**
 * API endpoint for collecting Core Web Vitals data
 */

import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

// Interface for vitals data
interface VitalsData {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
  url: string
  timestamp: number
  userAgent: string
  connectionType?: string
}

export async function POST(request: NextRequest) {
  try {
    const vitalsData: VitalsData = await request.json()
    
    // Validate the data
    if (!vitalsData.name || typeof vitalsData.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid vitals data' },
        { status: 400 }
      )
    }
    
    // Log the vitals data
    logger.info('Core Web Vitals collected', {
      metric: vitalsData.name,
      value: vitalsData.value,
      rating: vitalsData.rating,
      url: vitalsData.url,
      userAgent: vitalsData.userAgent,
      connectionType: vitalsData.connectionType,
      timestamp: vitalsData.timestamp
    })
    
    // In production, you might want to:
    // 1. Store in database for analytics
    // 2. Send to monitoring service
    // 3. Aggregate metrics
    
    // Example: Store in database (uncomment if needed)
    /*
    await supabase
      .from('web_vitals')
      .insert({
        metric_name: vitalsData.name,
        metric_value: vitalsData.value,
        metric_rating: vitalsData.rating,
        page_url: vitalsData.url,
        user_agent: vitalsData.userAgent,
        connection_type: vitalsData.connectionType,
        timestamp: new Date(vitalsData.timestamp).toISOString()
      })
    */
    
    // Alert on poor performance
    if (vitalsData.rating === 'poor') {
      logger.warn('Poor Core Web Vitals detected', {
        metric: vitalsData.name,
        value: vitalsData.value,
        url: vitalsData.url,
        threshold: getPoorThreshold(vitalsData.name)
      })
      
      // In production, you might send alerts to Slack, email, etc.
      // await sendPerformanceAlert(vitalsData)
    }
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    logger.error('Error processing vitals data', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to get poor thresholds
function getPoorThreshold(metricName: string): number {
  const thresholds: Record<string, number> = {
    CLS: 0.25,
    FID: 300,
    FCP: 3000,
    LCP: 4000,
    TTFB: 1800
  }
  
  return thresholds[metricName] || 0
}

// Example alert function (implement based on your needs)
// async function sendPerformanceAlert(vitalsData: VitalsData) {
//   // Send to Slack, email, monitoring service, etc.
//   console.log('Performance alert:', vitalsData)
// }