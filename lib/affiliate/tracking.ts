/**
 * Affiliate Tracking System
 * Handles affiliate link tracking, cookie management, and conversion attribution
 */

interface AffiliateConfig {
  cookieDuration: number // days
  defaultCommission: number // percentage
  platforms: Record<string, AffiliatePlatform>
}

interface AffiliatePlatform {
  name: string
  baseUrl: string
  affiliateId: string
  commission: number
  cookieDuration?: number
  params?: Record<string, string>
}

interface ClickData {
  platform: string
  timestamp: number
  page: string
  referrer?: string
  utm?: {
    source?: string
    medium?: string
    campaign?: string
    term?: string
    content?: string
  }
}

interface ConversionData extends ClickData {
  value?: number
  conversionType: 'click' | 'signup' | 'deposit' | 'trade'
}

// Affiliate platforms configuration
export const AFFILIATE_CONFIG: AffiliateConfig = {
  cookieDuration: 90, // 90 days default
  defaultCommission: 50, // 50% average commission
  platforms: {
    // Brokers
    etoro: {
      name: 'eToro',
      baseUrl: 'https://partners.etoro.com/aw.aspx',
      affiliateId: process.env.NEXT_PUBLIC_ETORO_ID || 'YOUR_ETORO_ID',
      commission: 200, // $200 CPA
      params: {
        'aw': '1234567',
        'awinmid': '6645',
        'clickref': ''
      }
    },
    interactive_brokers: {
      name: 'Interactive Brokers',
      baseUrl: 'https://www.interactivebrokers.com',
      affiliateId: process.env.NEXT_PUBLIC_IB_ID || 'YOUR_IB_ID',
      commission: 200,
      params: {
        'gmid': '',
        'gclid': ''
      }
    },
    charles_schwab: {
      name: 'Charles Schwab',
      baseUrl: 'https://www.schwab.com',
      affiliateId: process.env.NEXT_PUBLIC_SCHWAB_ID || 'YOUR_SCHWAB_ID',
      commission: 100,
      params: {
        'refrid': ''
      }
    },
    fidelity: {
      name: 'Fidelity',
      baseUrl: 'https://www.fidelity.com',
      affiliateId: process.env.NEXT_PUBLIC_FIDELITY_ID || 'YOUR_FIDELITY_ID',
      commission: 150,
      params: {
        'immid': '',
        'immsrc': ''
      }
    },
    td_ameritrade: {
      name: 'TD Ameritrade',
      baseUrl: 'https://www.tdameritrade.com',
      affiliateId: process.env.NEXT_PUBLIC_TD_ID || 'YOUR_TD_ID',
      commission: 100,
      params: {
        'offerID': '',
        'afftrack': ''
      }
    },
    webull: {
      name: 'Webull',
      baseUrl: 'https://www.webull.com',
      affiliateId: process.env.NEXT_PUBLIC_WEBULL_ID || 'YOUR_WEBULL_ID',
      commission: 30,
      cookieDuration: 30,
      params: {
        'inviteCode': '',
        'inviteSource': 'wb_oversea_pc'
      }
    },
    robinhood: {
      name: 'Robinhood',
      baseUrl: 'https://join.robinhood.com',
      affiliateId: process.env.NEXT_PUBLIC_ROBINHOOD_ID || 'YOUR_RH_ID',
      commission: 5, // Stock reward
      cookieDuration: 60,
      params: {}
    },

    // Robo-Advisors
    betterment: {
      name: 'Betterment',
      baseUrl: 'https://www.betterment.com',
      affiliateId: process.env.NEXT_PUBLIC_BETTERMENT_ID || 'YOUR_BETTERMENT_ID',
      commission: 100,
      params: {
        'referral_key': ''
      }
    },
    wealthfront: {
      name: 'Wealthfront',
      baseUrl: 'https://www.wealthfront.com',
      affiliateId: process.env.NEXT_PUBLIC_WEALTHFRONT_ID || 'YOUR_WF_ID',
      commission: 100,
      params: {
        'wfaid': ''
      }
    },
    m1_finance: {
      name: 'M1 Finance',
      baseUrl: 'https://m1.finance',
      affiliateId: process.env.NEXT_PUBLIC_M1_ID || 'YOUR_M1_ID',
      commission: 50,
      params: {
        'pid': '',
        'c': ''
      }
    },

    // Newsletter & Services
    motley_fool: {
      name: 'The Motley Fool',
      baseUrl: 'https://www.fool.com',
      affiliateId: process.env.NEXT_PUBLIC_FOOL_ID || 'YOUR_FOOL_ID',
      commission: 100,
      params: {
        'source': '',
        'aid': ''
      }
    },
    seeking_alpha: {
      name: 'Seeking Alpha',
      baseUrl: 'https://seekingalpha.com',
      affiliateId: process.env.NEXT_PUBLIC_SA_ID || 'YOUR_SA_ID',
      commission: 50,
      params: {
        'checkout': 'true',
        'source': ''
      }
    },
    morningstar: {
      name: 'Morningstar',
      baseUrl: 'https://www.morningstar.com',
      affiliateId: process.env.NEXT_PUBLIC_MORNINGSTAR_ID || 'YOUR_MS_ID',
      commission: 75,
      params: {
        'cid': ''
      }
    }
  }
}

/**
 * Track affiliate link click
 */
export function trackAffiliateClick(platform: string, page?: string): string {
  const config = AFFILIATE_CONFIG.platforms[platform]
  if (!config) {
    console.error(`Unknown affiliate platform: ${platform}`)
    return '#'
  }

  // Create click data
  const clickData: ClickData = {
    platform,
    timestamp: Date.now(),
    page: page || window.location.pathname,
    referrer: document.referrer,
    utm: getUTMParams()
  }

  // Store in cookie
  setCookie(`aff_${platform}`, JSON.stringify(clickData), config.cookieDuration || AFFILIATE_CONFIG.cookieDuration)

  // Store in localStorage for backup
  const clicks = getStoredClicks()
  clicks.push(clickData)
  localStorage.setItem('affiliate_clicks', JSON.stringify(clicks))

  // Send to analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'affiliate_click', {
      platform,
      page: clickData.page,
      value: config.commission
    })
  }

  // Build affiliate URL
  const url = new URL(config.baseUrl)

  // Add affiliate ID
  if (config.affiliateId) {
    url.searchParams.set('ref', config.affiliateId)
  }

  // Add tracking params
  Object.entries(config.params || {}).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })

  // Add custom tracking ID
  const trackingId = generateTrackingId(platform)
  url.searchParams.set('tid', trackingId)

  return url.toString()
}

/**
 * Track conversion (signup, deposit, etc)
 */
export function trackConversion(platform: string, type: ConversionData['conversionType'], value?: number) {
  const clickData = getCookie(`aff_${platform}`)
  if (!clickData) return

  const conversion: ConversionData = {
    ...JSON.parse(clickData),
    conversionType: type,
    value: value || AFFILIATE_CONFIG.platforms[platform]?.commission || 0
  }

  // Store conversion
  const conversions = getStoredConversions()
  conversions.push(conversion)
  localStorage.setItem('affiliate_conversions', JSON.stringify(conversions))

  // Send to analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      platform,
      conversion_type: type,
      value: conversion.value,
      currency: 'USD'
    })
  }

  // Send to backend for tracking
  fetch('/api/track-conversion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(conversion)
  }).catch(console.error)
}

/**
 * Get affiliate link for platform
 */
export function getAffiliateLink(platform: string): string {
  return trackAffiliateClick(platform)
}

/**
 * Check if user came from affiliate link
 */
export function checkAffiliateReferral(): string | null {
  const urlParams = new URLSearchParams(window.location.search)
  const ref = urlParams.get('ref') || urlParams.get('aff') || urlParams.get('partner')

  if (ref) {
    setCookie('affiliate_referrer', ref, 90)
    return ref
  }

  return getCookie('affiliate_referrer')
}

/**
 * Calculate potential commission
 */
export function calculateCommission(platforms: string[]): number {
  return platforms.reduce((total, platform) => {
    const config = AFFILIATE_CONFIG.platforms[platform]
    return total + (config?.commission || 0)
  }, 0)
}

/**
 * Get performance metrics
 */
export function getAffiliateMetrics() {
  const clicks = getStoredClicks()
  const conversions = getStoredConversions()

  const metrics = {
    totalClicks: clicks.length,
    totalConversions: conversions.length,
    conversionRate: clicks.length > 0 ? (conversions.length / clicks.length) * 100 : 0,
    estimatedRevenue: conversions.reduce((sum, c) => sum + (c.value || 0), 0),
    topPlatforms: getTopPlatforms(clicks),
    recentActivity: [...clicks, ...conversions]
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10)
  }

  return metrics
}

// Helper functions
function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

function getUTMParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    source: params.get('utm_source') || undefined,
    medium: params.get('utm_medium') || undefined,
    campaign: params.get('utm_campaign') || undefined,
    term: params.get('utm_term') || undefined,
    content: params.get('utm_content') || undefined
  }
}

function generateTrackingId(platform: string): string {
  return `${platform}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

function getStoredClicks(): ClickData[] {
  try {
    return JSON.parse(localStorage.getItem('affiliate_clicks') || '[]')
  } catch {
    return []
  }
}

function getStoredConversions(): ConversionData[] {
  try {
    return JSON.parse(localStorage.getItem('affiliate_conversions') || '[]')
  } catch {
    return []
  }
}

function getTopPlatforms(clicks: ClickData[]): Record<string, number> {
  const counts: Record<string, number> = {}
  clicks.forEach(click => {
    counts[click.platform] = (counts[click.platform] || 0) + 1
  })
  return Object.fromEntries(
    Object.entries(counts).sort(([, a], [, b]) => b - a).slice(0, 5)
  )
}

// Auto-initialize on load
if (typeof window !== 'undefined') {
  // Check for referral on page load
  checkAffiliateReferral()

  // Track page views for attribution
  if (getCookie('affiliate_referrer')) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        affiliate_referrer: getCookie('affiliate_referrer')
      })
    }
  }
}

// Export types
export type { AffiliateConfig, AffiliatePlatform, ClickData, ConversionData }