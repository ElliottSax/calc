/**
 * Analytics tracking utilities for monetization events
 */

import { logger } from '@/lib/logger'
import type { MonetizationEvent } from '@/types/monetization'

// Google Analytics 4 event tracking
export function trackEvent(
  eventName: string,
  parameters?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
    logger.info({ eventName, parameters }, 'Analytics event tracked')
  }
}

// Track ad impressions
export function trackAdImpression(params: {
  adSlot: string
  adPlacement: string
  adSize?: string
}) {
  trackEvent('ad_impression', {
    ad_slot: params.adSlot,
    ad_placement: params.adPlacement,
    ad_size: params.adSize,
    value: 0.001 // Estimated CPM value
  })
}

// Track ad clicks
export function trackAdClick(params: {
  adSlot: string
  adPlacement: string
}) {
  trackEvent('ad_click', {
    ad_slot: params.adSlot,
    ad_placement: params.adPlacement,
    value: 0.05 // Estimated CPC value
  })
}

// Track affiliate clicks
export function trackAffiliateClick(params: {
  merchantId: string
  merchantName: string
  category: string
  placement: string
}) {
  trackEvent('affiliate_click', {
    merchant_id: params.merchantId,
    merchant_name: params.merchantName,
    category: params.category,
    placement: params.placement,
    value: 1.0 // Estimated affiliate value
  })

  // Also track in database for detailed reporting
  saveMonetizationEvent({
    type: 'affiliate_click',
    source: params.merchantId,
    metadata: params,
    timestamp: new Date().toISOString()
  })
}

// Track lead captures
export function trackLeadCapture(params: {
  leadMagnet: string
  segment?: string
  source: string
}) {
  trackEvent('generate_lead', {
    lead_magnet: params.leadMagnet,
    segment: params.segment,
    source: params.source,
    currency: 'USD',
    value: 5.0 // Estimated lead value
  })

  saveMonetizationEvent({
    type: 'lead_capture',
    source: params.source,
    metadata: params,
    timestamp: new Date().toISOString()
  })
}

// Track premium conversions
export function trackPremiumConversion(params: {
  plan: string
  price: number
  billingCycle: string
  userId: string
}) {
  trackEvent('purchase', {
    transaction_id: `premium_${Date.now()}`,
    value: params.price,
    currency: 'USD',
    items: [{
      item_id: params.plan,
      item_name: `Premium ${params.plan}`,
      price: params.price,
      quantity: 1
    }]
  })

  saveMonetizationEvent({
    type: 'premium_conversion',
    source: params.plan,
    revenue: params.price,
    userId: params.userId,
    metadata: params,
    timestamp: new Date().toISOString()
  })
}

// Track calculator usage
export function trackCalculatorUse(params: {
  calculatorType: string
  userId?: string
}) {
  trackEvent('calculator_use', {
    calculator_type: params.calculatorType,
    user_id: params.userId
  })
}

// Track feature usage
export function trackFeatureUse(params: {
  feature: string
  requiresPremium: boolean
  userId?: string
}) {
  trackEvent('feature_use', {
    feature_name: params.feature,
    requires_premium: params.requiresPremium,
    user_id: params.userId
  })
}

// Save monetization event to database
async function saveMonetizationEvent(event: MonetizationEvent) {
  try {
    await fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    })
  } catch (error) {
    logger.error({ error, event }, 'Failed to save monetization event')
  }
}

// Get user behavior for targeting
export function getUserBehavior(): {
  timeOnPage: number
  scrollDepth: number
  pageViews: number
  calculationsCompleted: number
} {
  if (typeof window === 'undefined') {
    return {
      timeOnPage: 0,
      scrollDepth: 0,
      pageViews: 0,
      calculationsCompleted: 0
    }
  }

  return {
    timeOnPage: parseInt(sessionStorage.getItem('timeOnPage') || '0'),
    scrollDepth: parseInt(sessionStorage.getItem('maxScrollDepth') || '0'),
    pageViews: parseInt(sessionStorage.getItem('pageViews') || '0'),
    calculationsCompleted: parseInt(sessionStorage.getItem('calculationsCompleted') || '0')
  }
}

// Update behavior metrics
export function updateBehaviorMetrics() {
  if (typeof window === 'undefined') return

  // Track time on page
  const startTime = parseInt(sessionStorage.getItem('pageStartTime') || Date.now().toString())
  const timeOnPage = Math.floor((Date.now() - startTime) / 1000)
  sessionStorage.setItem('timeOnPage', timeOnPage.toString())

  // Track scroll depth
  const scrollDepth = Math.round(
    (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
  )
  const maxScrollDepth = parseInt(sessionStorage.getItem('maxScrollDepth') || '0')
  if (scrollDepth > maxScrollDepth) {
    sessionStorage.setItem('maxScrollDepth', scrollDepth.toString())
  }

  // Increment page views
  const pageViews = parseInt(sessionStorage.getItem('pageViews') || '0')
  sessionStorage.setItem('pageViews', (pageViews + 1).toString())
}