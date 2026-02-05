/**
 * TypeScript types for monetization features
 */

// Ad Types
export interface AdSlot {
  id: string
  type: 'display' | 'native' | 'in-feed' | 'in-article'
  size: AdSize
  placement: AdPlacement
  enabled: boolean
}

export type AdSize = 
  | '728x90'   // Leaderboard
  | '300x250'  // Medium Rectangle
  | '336x280'  // Large Rectangle
  | '300x600'  // Half Page
  | '320x50'   // Mobile Banner
  | 'responsive'

export type AdPlacement = 
  | 'header'
  | 'sidebar'
  | 'in-content'
  | 'below-calculator'
  | 'footer'

// Affiliate Types
export interface AffiliateLink {
  id?: string
  merchant?: string
  url: string
  trackingId: string
  commission?: string
  category?: 'broker' | 'tool' | 'education' | 'service'
  featured?: boolean
  expiresAt?: string
}

export interface BrokerComparison {
  id: string
  name: string
  logo?: string
  affiliateLink?: AffiliateLink
  features: {
    minDeposit: number
    commissionFree: boolean
    fractionalShares: boolean
    dividendReinvestment?: boolean
    dripSupport?: boolean
    automaticRebalancing?: boolean
    internationalStocks?: boolean
  }
  pros: string[]
  cons: string[]
  rating: number
  reviewCount: number
  bestFor: string
  commission?: string | {
    type: string
    amount: number
    note: string
  }
  affiliate?: {
    url: string
    cpa: number
    cookie: number
  }
  signUpBonus?: {
    amount: number
    type: string
    requirements: string
  }
}

// Lead Generation Types
export interface LeadSegment {
  id: string
  name: string
  description: string
  tags: string[]
  leadMagnet: LeadMagnet
}

export interface LeadMagnet {
  id: string
  title: string
  description: string
  type: 'pdf' | 'excel' | 'video' | 'email-course'
  deliveryMethod: 'instant' | 'drip'
  segmentId: string
}

export interface UserBehaviorTrigger {
  type: 'time-on-page' | 'scroll-depth' | 'exit-intent' | 'calculation-completed' | 'page-views'
  threshold: number
  action: 'show-popup' | 'show-banner' | 'show-inline-form'
  targetSegment?: string
}

// Premium Features
export interface PremiumFeature {
  id: string
  name: string
  description: string
  requiresAuth: boolean
  requiresPremium: boolean
}

export interface UserSubscription {
  userId: string
  plan: 'free' | 'basic' | 'premium'
  features: string[]
  startDate: string
  endDate?: string
  billingCycle?: 'monthly' | 'yearly'
  status: 'active' | 'cancelled' | 'expired'
}

// Analytics Types
export interface MonetizationEvent {
  type: 'ad_impression' | 'ad_click' | 'affiliate_click' | 'lead_capture' | 'premium_conversion'
  source: string
  revenue?: number
  userId?: string
  metadata?: Record<string, any>
  timestamp: string
}

export interface DashboardMetrics {
  period: 'day' | 'week' | 'month' | 'year'
  revenue: {
    ads: number
    affiliates: number
    premium: number
    total: number
  }
  conversions: {
    leads: number
    premiumSignups: number
    affiliateClicks: number
  }
  engagement: {
    pageViews: number
    calculatorUses: number
    avgTimeOnSite: number
  }
}

// Calculation History
export interface CalculationHistory {
  id: string
  userId: string
  calculatorType: 'drip' | 'yield' | 'growth'
  inputs: Record<string, any>
  results: Record<string, any>
  createdAt: string
  name?: string
  notes?: string
}