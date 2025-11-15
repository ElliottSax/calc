/**
 * Broker affiliate data and configuration
 */

import type { BrokerComparison } from '@/types/monetization'

export const BROKER_AFFILIATES: BrokerComparison[] = [
  {
    id: 'charles-schwab',
    name: 'Charles Schwab',
    logo: '/logos/charles-schwab.png',
    affiliateLink: {
      id: 'schwab-001',
      merchant: 'Charles Schwab',
      url: 'https://www.schwab.com',
      trackingId: '?ref=dividendcalchub',
      commission: '$100 per qualified account',
      category: 'broker',
      featured: true
    },
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dividendReinvestment: true,
      internationalStocks: true
    },
    pros: [
      'No minimum deposit',
      'Commission-free stocks & ETFs',
      'Excellent research tools',
      'Free dividend reinvestment',
      '24/7 customer support'
    ],
    cons: [
      'Limited cryptocurrency options',
      'Higher margin rates than some competitors'
    ],
    rating: 4.8,
    reviewCount: 15420,
    bestFor: 'Long-term dividend investors'
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    logo: '/logos/fidelity.png',
    affiliateLink: {
      id: 'fidelity-001',
      merchant: 'Fidelity',
      url: 'https://www.fidelity.com',
      trackingId: '?s=dividendcalchub',
      commission: '$50-150 per account',
      category: 'broker',
      featured: true
    },
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dividendReinvestment: true,
      internationalStocks: true
    },
    pros: [
      'No account minimums',
      'Zero commission trades',
      'Fractional shares available',
      'Strong research platform',
      'Excellent mobile app'
    ],
    cons: [
      'Complex fee structure for some services',
      'Limited crypto selection'
    ],
    rating: 4.7,
    reviewCount: 22100,
    bestFor: 'Beginners and research-focused investors'
  },
  {
    id: 'vanguard',
    name: 'Vanguard',
    logo: '/logos/vanguard.png',
    affiliateLink: {
      id: 'vanguard-001',
      merchant: 'Vanguard',
      url: 'https://investor.vanguard.com',
      trackingId: '?cmpgn=dividendcalchub',
      commission: '$50-100 per account',
      category: 'broker',
      featured: false
    },
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: false,
      dividendReinvestment: true,
      internationalStocks: true
    },
    pros: [
      'Low-cost index funds',
      'No commission on Vanguard ETFs',
      'Strong retirement planning tools',
      'Automatic dividend reinvestment',
      'Industry-leading expense ratios'
    ],
    cons: [
      'Limited trading tools',
      'No fractional shares',
      'Basic mobile app'
    ],
    rating: 4.5,
    reviewCount: 18500,
    bestFor: 'Buy-and-hold dividend investors'
  },
  {
    id: 'etrade',
    name: 'E*TRADE',
    logo: '/logos/etrade.png',
    affiliateLink: {
      id: 'etrade-001',
      merchant: 'E*TRADE',
      url: 'https://us.etrade.com',
      trackingId: '?offer=dividendcalchub',
      commission: '$75-200 per account',
      category: 'broker',
      featured: false
    },
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: false,
      dividendReinvestment: true,
      internationalStocks: true
    },
    pros: [
      'User-friendly platform',
      'Commission-free trades',
      'Comprehensive educational resources',
      'Pre-built portfolios',
      'Power E*TRADE for active traders'
    ],
    cons: [
      'No fractional shares',
      'Higher margin rates'
    ],
    rating: 4.4,
    reviewCount: 16800,
    bestFor: 'Active traders and options investors'
  },
  {
    id: 'td-ameritrade',
    name: 'TD Ameritrade',
    logo: '/logos/td-ameritrade.png',
    affiliateLink: {
      id: 'td-001',
      merchant: 'TD Ameritrade',
      url: 'https://www.tdameritrade.com',
      trackingId: '?source=dividendcalchub',
      commission: '$100-150 per account',
      category: 'broker',
      featured: false
    },
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: false,
      dividendReinvestment: true,
      internationalStocks: true
    },
    pros: [
      'Thinkorswim platform',
      'Extensive educational content',
      'No account minimums',
      'Paper trading available',
      '24/7 support'
    ],
    cons: [
      'Being merged with Schwab',
      'No fractional shares',
      'Complex for beginners'
    ],
    rating: 4.6,
    reviewCount: 19200,
    bestFor: 'Technical analysis enthusiasts'
  }
]

// Recommended tools affiliate links
export const RECOMMENDED_TOOLS = [
  {
    id: 'morningstar',
    name: 'Morningstar Premium',
    description: 'Professional-grade investment research and portfolio analysis',
    category: 'research',
    affiliateUrl: 'https://www.morningstar.com/premium?ref=dividendcalchub',
    commission: '30% recurring',
    features: [
      'Stock & fund analysis',
      'Portfolio X-Ray',
      'Fair value estimates',
      'Analyst reports'
    ]
  },
  {
    id: 'seeking-alpha',
    name: 'Seeking Alpha Premium',
    description: 'Crowd-sourced content and analysis for dividend investors',
    category: 'research',
    affiliateUrl: 'https://seekingalpha.com/premium?source=dividendcalchub',
    commission: '25% recurring',
    features: [
      'Dividend scorecards',
      'Quant ratings',
      'Earnings call transcripts',
      'Real-time alerts'
    ]
  },
  {
    id: 'yahoo-finance-plus',
    name: 'Yahoo Finance Plus',
    description: 'Enhanced market data and advanced charting tools',
    category: 'data',
    affiliateUrl: 'https://finance.yahoo.com/plus?src=dividendcalchub',
    commission: '$15 per signup',
    features: [
      'Advanced charting',
      'Company insights',
      'Enhanced screeners',
      'Portfolio analytics'
    ]
  },
  {
    id: 'personal-capital',
    name: 'Personal Capital',
    description: 'Free wealth management and tracking tools',
    category: 'portfolio',
    affiliateUrl: 'https://www.personalcapital.com?utm_source=dividendcalchub',
    commission: '$100 per qualified lead',
    features: [
      'Net worth tracking',
      'Investment checkup',
      'Retirement planner',
      'Fee analyzer'
    ]
  }
]