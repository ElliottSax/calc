// Detailed broker information for individual review pages

export interface BrokerDetail {
  id: string
  name: string
  slug: string
  logo?: string
  tagline: string
  rating: number
  reviewCount: number

  // Affiliate
  affiliateLink: string
  currentPromo?: {
    title: string
    description: string
    expiresAt?: string
  }

  // Overview
  bestFor: string[]
  summary: string

  // Fees
  fees: {
    tradingCommission: string
    accountMinimum: string
    accountFees: string
    dripFees: string
    transferFees?: string
  }

  // Features
  features: {
    dripSupport: boolean
    fractionalShares: boolean
    researchTools: string // 'Excellent', 'Good', 'Basic'
    mobileApp: string // 'Excellent', 'Good', 'Basic'
    customerSupport: string
    educationalResources: string
    taxReporting: string
  }

  // Detailed pros and cons
  pros: string[]
  cons: string[]

  // Perfect for
  idealFor: string[]
  notIdealFor: string[]

  // User experience
  easeOfUse: number // 1-5
  platformSpeed: number // 1-5
  reliability: number // 1-5
}

export const BROKER_DETAILS: Record<string, BrokerDetail> = {
  'm1-finance': {
    id: 'm1-finance',
    name: 'M1 Finance',
    slug: 'm1-finance',
    tagline: 'The Best Platform for Dividend Investors',
    rating: 4.8,
    reviewCount: 8500,
    affiliateLink: 'https://m1.com/affiliate-link-here',
    currentPromo: {
      title: 'Get up to $200 Bonus',
      description: 'Deposit $1,000+ and get $75. Deposit $10,000+ and get $200.',
      expiresAt: '2026-03-31'
    },
    bestFor: ['Dividend investors', 'Long-term holders', 'Portfolio automation'],
    summary: 'M1 Finance is the best all-around platform for dividend investors. Their "Pie" system makes building and rebalancing a dividend portfolio effortless, and they offer free DRIP and fractional shares.',
    fees: {
      tradingCommission: '$0',
      accountMinimum: '$100',
      accountFees: '$0',
      dripFees: '$0 (automatic)',
      transferFees: '$0 in, $0-100 out'
    },
    features: {
      dripSupport: true,
      fractionalShares: true,
      researchTools: 'Good',
      mobileApp: 'Excellent',
      customerSupport: 'Good',
      educationalResources: 'Good',
      taxReporting: 'Excellent'
    },
    pros: [
      'Free dividend reinvestment (DRIP)',
      'Fractional shares for all stocks',
      '"Pies" make portfolio management easy',
      'Automatic rebalancing',
      'No trading commissions',
      'M1 Plus offers 1% cash back on spending',
      'Great mobile app',
      'Low $100 minimum to start'
    ],
    cons: [
      'Only one trading window per day (not for active traders)',
      'Limited research tools compared to Fidelity',
      'No options trading on basic plan',
      'Customer support can be slow',
      'Not ideal for frequent trading'
    ],
    idealFor: [
      'Long-term dividend investors',
      'People who want to "set and forget"',
      'Beginners who want simplicity',
      'Portfolio builders who like visual interfaces',
      'Anyone wanting automated dividend reinvestment'
    ],
    notIdealFor: [
      'Day traders or active traders',
      'Options traders (unless M1 Plus)',
      'People needing extensive research tools',
      'Those requiring 24/7 customer support'
    ],
    easeOfUse: 5,
    platformSpeed: 4,
    reliability: 5
  },

  'fidelity': {
    id: 'fidelity',
    name: 'Fidelity Investments',
    slug: 'fidelity',
    tagline: 'Best Research Tools & Customer Service',
    rating: 4.9,
    reviewCount: 45000,
    affiliateLink: 'https://fidelity.com/affiliate-link-here',
    bestFor: ['Research-focused investors', 'Retirement accounts', 'Full-service investing'],
    summary: 'Fidelity is a powerhouse with the best research tools, excellent customer service, and everything a dividend investor needs. Perfect if you want professional-grade tools.',
    fees: {
      tradingCommission: '$0',
      accountMinimum: '$0',
      accountFees: '$0',
      dripFees: '$0',
      transferFees: '$0 in, $75 out'
    },
    features: {
      dripSupport: true,
      fractionalShares: true,
      researchTools: 'Excellent',
      mobileApp: 'Excellent',
      customerSupport: 'Excellent',
      educationalResources: 'Excellent',
      taxReporting: 'Excellent'
    },
    pros: [
      'Best-in-class research tools',
      'Excellent customer service (24/7)',
      'Free DRIP and fractional shares',
      'No account minimums',
      'Huge selection of dividend ETFs',
      'Great for retirement accounts',
      'Physical branch locations',
      'Industry-leading reputation'
    ],
    cons: [
      'Platform can feel overwhelming for beginners',
      'Website interface is dated',
      'Too many features (complexity)',
      'Mobile app less intuitive than competitors'
    ],
    idealFor: [
      'Serious investors who want deep research',
      'Retirement account holders',
      'People who value customer service',
      'Those transitioning from other brokers',
      'Investors with large portfolios'
    ],
    notIdealFor: [
      'Complete beginners (too complex)',
      'Minimalists who want simple interface',
      'Mobile-first users'
    ],
    easeOfUse: 3,
    platformSpeed: 4,
    reliability: 5
  },

  'charles-schwab': {
    id: 'charles-schwab',
    name: 'Charles Schwab',
    slug: 'charles-schwab',
    tagline: 'Best All-Around Platform',
    rating: 4.8,
    reviewCount: 38000,
    affiliateLink: 'https://schwab.com/affiliate-link-here',
    bestFor: ['All-around investing', 'Banking integration', 'Full-service brokerage'],
    summary: 'Charles Schwab offers the complete package: excellent platform, great research, banking services, and perfect for dividend investors with free DRIP.',
    fees: {
      tradingCommission: '$0',
      accountMinimum: '$0',
      accountFees: '$0',
      dripFees: '$0',
      transferFees: '$0 in, $0 out (full ACAT)'
    },
    features: {
      dripSupport: true,
      fractionalShares: true,
      researchTools: 'Excellent',
      mobileApp: 'Excellent',
      customerSupport: 'Excellent',
      educationalResources: 'Excellent',
      taxReporting: 'Excellent'
    },
    pros: [
      'Excellent all-around platform',
      'Free DRIP and fractional shares',
      'Banking integration (checking, savings)',
      'No foreign transaction fees',
      'Physical branches nationwide',
      'Great mobile app',
      '24/7 customer service',
      'Robust research tools'
    ],
    cons: [
      'Platform can feel corporate/institutional',
      'Not as beginner-friendly as Robinhood',
      'Some advanced features require learning',
      'Occasional platform slowdowns'
    ],
    idealFor: [
      'Investors wanting a one-stop shop',
      'People who want banking + investing',
      'Long-term dividend investors',
      'Those who value branch access',
      'International investors (no forex fees)'
    ],
    notIdealFor: [
      'Complete beginners wanting simplicity',
      'Active day traders',
      'Crypto investors (limited offerings)'
    ],
    easeOfUse: 4,
    platformSpeed: 4,
    reliability: 5
  },

  'robinhood': {
    id: 'robinhood',
    name: 'Robinhood',
    slug: 'robinhood',
    tagline: 'Simplest Platform for Beginners',
    rating: 4.3,
    reviewCount: 95000,
    affiliateLink: 'https://robinhood.com/affiliate-link-here',
    bestFor: ['Beginners', 'Mobile-first users', 'Simple investing'],
    summary: 'Robinhood revolutionized commission-free trading and remains the easiest platform for beginners. Great for dividend investors who want simplicity.',
    fees: {
      tradingCommission: '$0',
      accountMinimum: '$0',
      accountFees: '$0',
      dripFees: '$0',
      transferFees: '$0 in, $75 out'
    },
    features: {
      dripSupport: true,
      fractionalShares: true,
      researchTools: 'Basic',
      mobileApp: 'Excellent',
      customerSupport: 'Fair',
      educationalResources: 'Good',
      taxReporting: 'Good'
    },
    pros: [
      'Extremely easy to use',
      'Best mobile app design',
      'Free DRIP and fractional shares',
      'No account minimum',
      'Instant deposits',
      'Crypto trading integrated',
      'Clean, modern interface',
      'Great for beginners'
    ],
    cons: [
      'Limited research tools',
      'Poor customer service reputation',
      'Platform outages during volatility',
      'No tax-loss harvesting',
      'Limited account types (no joint accounts)',
      'No phone support'
    ],
    idealFor: [
      'Complete beginners',
      'Mobile-first investors',
      'Young investors (18-35)',
      'Simple buy-and-hold strategies',
      'Small account sizes'
    ],
    notIdealFor: [
      'Serious investors needing research',
      'People who value customer service',
      'Retirement account holders',
      'Active traders during volatile markets'
    ],
    easeOfUse: 5,
    platformSpeed: 3,
    reliability: 3
  },

  'webull': {
    id: 'webull',
    name: 'Webull',
    slug: 'webull',
    tagline: 'Best for Technical Analysis',
    rating: 4.5,
    reviewCount: 42000,
    affiliateLink: 'https://webull.com/affiliate-link-here',
    currentPromo: {
      title: 'Get Free Stocks',
      description: 'Deposit $100+ and get 6 free stocks (valued up to $3,000)',
    },
    bestFor: ['Chart analysis', 'Advanced traders', 'Extended hours trading'],
    summary: 'Webull offers advanced charting and analysis tools for free. Great for dividend investors who also like technical analysis.',
    fees: {
      tradingCommission: '$0',
      accountMinimum: '$0',
      accountFees: '$0',
      dripFees: '$0',
      transferFees: '$0 in, $75 out'
    },
    features: {
      dripSupport: true,
      fractionalShares: true,
      researchTools: 'Good',
      mobileApp: 'Excellent',
      customerSupport: 'Good',
      educationalResources: 'Good',
      taxReporting: 'Good'
    },
    pros: [
      'Advanced charting tools (free)',
      'Extended hours trading (4am-8pm)',
      'Free DRIP and fractional shares',
      'No account fees',
      'Good signup bonuses',
      'Desktop and mobile apps',
      'Options trading included'
    ],
    cons: [
      'Customer service via email only',
      'Not ideal for complete beginners',
      'Limited retirement account options',
      'Interface can feel cluttered',
      'Chinese ownership (data privacy concerns for some)'
    ],
    idealFor: [
      'Investors who like charts and data',
      'Those wanting extended hours',
      'Tech-savvy users',
      'People transitioning from simple to advanced',
      'Options traders'
    ],
    notIdealFor: [
      'Complete beginners',
      'People needing phone support',
      'Retirement-focused investors',
      'Those concerned about data privacy'
    ],
    easeOfUse: 3,
    platformSpeed: 4,
    reliability: 4
  }
}

// Helper functions
export function getBrokerBySlug(slug: string): BrokerDetail | undefined {
  return BROKER_DETAILS[slug]
}

export function getAllBrokers(): BrokerDetail[] {
  return Object.values(BROKER_DETAILS)
}

export function getTopRatedBrokers(limit: number = 3): BrokerDetail[] {
  return Object.values(BROKER_DETAILS)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}
