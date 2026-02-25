/**
 * Expanded Broker Affiliate Partnerships
 * 15+ premium partners for maximum revenue potential
 */

import type { BrokerComparison } from '@/types/monetization';

export const BROKER_AFFILIATES_EXPANDED: BrokerComparison[] = [
  // Tier 1: Premium Partners ($100+ CPA)
  {
    id: 'm1finance',
    name: 'M1 Finance',
    rating: 4.8,
    reviewCount: 12500,
    bestFor: 'DRIP Investors & Automated Portfolios',
    features: {
      minDeposit: 100,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      automaticRebalancing: true,
    },
    pros: [
      'Automatic dividend reinvestment',
      'Custom "pie" portfolios',
      'No trading commissions',
      'Fractional shares for all stocks',
      '1% APY on uninvested cash (M1 Plus)',
    ],
    cons: [
      '$100 minimum deposit',
      'Limited to 1 free trade window per day',
      'M1 Plus required for advanced features ($125/year)',
    ],
    commission: {
      type: 'CPA',
      amount: 150, // $150 per funded account
      note: 'Bonus: $50 extra for accounts >$10K',
    },
    signUpBonus: {
      amount: 50,
      type: 'cash',
      requirements: 'Deposit $1,000 within 30 days',
    },
    affiliateLink: {
      url: 'https://m1.finance/',
      trackingId: '?ref=dividend-calc',
      featured: true,
      expiresAt: undefined,
    },
  },

  {
    id: 'wealthfront',
    name: 'Wealthfront',
    rating: 4.6,
    reviewCount: 8900,
    bestFor: 'Automated Dividend Portfolios',
    features: {
      minDeposit: 500,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      automaticRebalancing: true,
      taxLossHarvesting: true,
    },
    pros: [
      'Automated tax-loss harvesting',
      'Low 0.25% management fee',
      'Portfolio line of credit',
      'Dividend-focused portfolios',
      '5.0% APY on cash (FDIC insured)',
    ],
    cons: [
      '$500 minimum deposit',
      'Limited control over individual stocks',
      'Annual fee even on small accounts',
    ],
    commission: {
      type: 'CPA',
      amount: 200, // $200 per funded account
    },
    affiliateLink: {
      url: 'https://www.wealthfront.com/',
      trackingId: '?ref=dividend-calc',
      featured: true,
    },
  },

  {
    id: 'betterment',
    name: 'Betterment',
    rating: 4.7,
    reviewCount: 15200,
    bestFor: 'Beginner Dividend Investors',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      automaticRebalancing: true,
      taxLossHarvesting: true,
    },
    pros: [
      'No minimum deposit',
      'Automatic dividend reinvestment',
      'Tax-coordinated portfolio',
      'Human advisor access (premium)',
      'Socially responsible portfolios',
    ],
    cons: [
      '0.25% annual fee',
      'Limited individual stock selection',
      'Premium tier costly for small accounts',
    ],
    commission: {
      type: 'CPA',
      amount: 120,
    },
    affiliateLink: {
      url: 'https://www.betterment.com/',
      trackingId: '?ref=dividend-calc',
      featured: true,
    },
  },

  // Tier 2: High Volume Partners ($50-100 CPA)
  {
    id: 'robinhood',
    name: 'Robinhood',
    rating: 4.2,
    reviewCount: 35000,
    bestFor: 'Commission-Free Trading',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      cryptoTrading: true,
    },
    pros: [
      'No minimum deposit',
      'Commission-free trading',
      'Easy mobile interface',
      'Fractional shares available',
      'Automatic dividend reinvestment',
    ],
    cons: [
      'Limited research tools',
      'No tax-loss harvesting',
      'Customer service issues reported',
      'Payment for order flow',
    ],
    commission: {
      type: 'CPA',
      amount: 75,
    },
    signUpBonus: {
      amount: 200,
      type: 'stock',
      requirements: 'Sign up and get free stock worth up to $200',
    },
    affiliateLink: {
      url: 'https://robinhood.com/us/en/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  {
    id: 'webull',
    name: 'Webull',
    rating: 4.4,
    reviewCount: 18500,
    bestFor: 'Active Traders',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      advancedCharts: true,
      extendedHours: true,
    },
    pros: [
      'Advanced charting tools',
      'Extended hours trading',
      'Paper trading practice',
      'Generous sign-up bonuses',
      'No commissions or fees',
    ],
    cons: [
      'Interface complex for beginners',
      'Limited retirement accounts',
      'DRIP not automatic for all stocks',
    ],
    commission: {
      type: 'CPA',
      amount: 60,
    },
    signUpBonus: {
      amount: 3000,
      type: 'stock',
      requirements: 'Deposit $100+, get up to $3,000 in free stock',
    },
    affiliateLink: {
      url: 'https://www.webull.com/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  {
    id: 'public',
    name: 'Public.com',
    rating: 4.5,
    reviewCount: 9200,
    bestFor: 'Social Investing',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      socialFeatures: true,
    },
    pros: [
      'No payment for order flow',
      'Social community features',
      'Fractional shares from $1',
      'Treasury bonds available',
      'No management fees',
    ],
    cons: [
      'Limited research tools',
      'Smaller stock universe',
      'No options trading',
    ],
    commission: {
      type: 'CPA',
      amount: 50,
    },
    signUpBonus: {
      amount: 15,
      type: 'stock',
      requirements: 'Free stock slice worth up to $15',
    },
    affiliateLink: {
      url: 'https://public.com/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  // Tier 3: Established Brokers ($25-50 CPA)
  {
    id: 'fidelity',
    name: 'Fidelity Investments',
    rating: 4.7,
    reviewCount: 42000,
    bestFor: 'Research & Retirement Accounts',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      retirementAccounts: true,
      research: true,
    },
    pros: [
      'Excellent research tools',
      'No account minimums',
      'Robust retirement accounts',
      'Top-tier customer service',
      'No fees for dividend reinvestment',
    ],
    cons: [
      'Website interface dated',
      'Fractional shares limited to S&P 500',
      'Mobile app less intuitive',
    ],
    commission: {
      type: 'CPA',
      amount: 50,
    },
    affiliateLink: {
      url: 'https://www.fidelity.com/',
      trackingId: '?ref=dividend-calc',
      featured: true,
    },
  },

  {
    id: 'schwab',
    name: 'Charles Schwab',
    rating: 4.6,
    reviewCount: 38500,
    bestFor: 'Full-Service Investing',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      retirementAccounts: true,
      bankingServices: true,
    },
    pros: [
      'Excellent customer service',
      'Robust research platform',
      'Branch locations nationwide',
      'Banking services included',
      'No minimums or inactivity fees',
    ],
    cons: [
      'Fractional shares only via S&P 500 index',
      'Some mutual funds have fees',
      'Trading platform complex for beginners',
    ],
    commission: {
      type: 'CPA',
      amount: 50,
    },
    affiliateLink: {
      url: 'https://www.schwab.com/',
      trackingId: '?ref=dividend-calc',
      featured: true,
    },
  },

  {
    id: 'etrade',
    name: 'E*TRADE',
    rating: 4.5,
    reviewCount: 28000,
    bestFor: 'Options & Active Trading',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: false,
      dripSupport: true,
      optionsTrading: true,
      research: true,
    },
    pros: [
      'Powerful trading platforms',
      'Excellent for options',
      'Strong research tools',
      'Good mobile app',
      'No account minimums',
    ],
    cons: [
      'No fractional shares',
      'Complex for beginners',
      'Some mutual fund fees',
    ],
    commission: {
      type: 'CPA',
      amount: 40,
    },
    affiliateLink: {
      url: 'https://us.etrade.com/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  {
    id: 'tdameritrade',
    name: 'TD Ameritrade',
    rating: 4.6,
    reviewCount: 32000,
    bestFor: 'Research & Education',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: false,
      dripSupport: true,
      research: true,
      education: true,
    },
    pros: [
      'thinkorswim platform',
      'Extensive educational resources',
      'Excellent research tools',
      'Paper trading available',
      'Strong customer support',
    ],
    cons: [
      'No fractional shares',
      'Being merged with Schwab',
      'Platform overkill for buy-and-hold',
    ],
    commission: {
      type: 'CPA',
      amount: 40,
    },
    affiliateLink: {
      url: 'https://www.tdameritrade.com/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  // Tier 4: Specialized Brokers
  {
    id: 'interactivebrokers',
    name: 'Interactive Brokers',
    rating: 4.3,
    reviewCount: 15000,
    bestFor: 'International & Advanced Traders',
    features: {
      minDeposit: 0,
      commissionFree: false, // Low fees, not free
      fractionalShares: true,
      dripSupport: true,
      internationalMarkets: true,
      marginRates: true,
    },
    pros: [
      'Lowest margin rates',
      'Global market access',
      'Professional-grade platform',
      'Wide range of securities',
      'Best for international investing',
    ],
    cons: [
      'Complex interface',
      'Not beginner-friendly',
      'Small fees on trades',
      'Inactivity fee for accounts <$100K',
    ],
    commission: {
      type: 'CPA',
      amount: 100,
      note: 'Higher for accounts >$10K',
    },
    affiliateLink: {
      url: 'https://www.interactivebrokers.com/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  {
    id: 'sofi',
    name: 'SoFi Invest',
    rating: 4.3,
    reviewCount: 11000,
    bestFor: 'All-in-One Financial App',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: true,
      dripSupport: true,
      cryptoTrading: true,
      bankingServices: true,
    },
    pros: [
      'Banking and investing combined',
      'No account fees',
      'Crypto and stocks in one app',
      'Member benefits program',
      'Career coaching included',
    ],
    cons: [
      'Limited research tools',
      'Fewer investment options',
      'No retirement accounts yet',
    ],
    commission: {
      type: 'CPA',
      amount: 75,
    },
    signUpBonus: {
      amount: 25,
      type: 'cash',
      requirements: '$10 deposit',
    },
    affiliateLink: {
      url: 'https://www.sofi.com/invest/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },

  {
    id: 'vanguard',
    name: 'Vanguard',
    rating: 4.5,
    reviewCount: 25000,
    bestFor: 'Long-Term Buy & Hold',
    features: {
      minDeposit: 0,
      commissionFree: true,
      fractionalShares: false,
      dripSupport: true,
      lowFees: true,
      mutualFunds: true,
    },
    pros: [
      'Lowest expense ratios',
      'Investor-owned structure',
      'Excellent for index funds',
      'Strong retirement accounts',
      'Low-cost ETFs',
    ],
    cons: [
      'Outdated website interface',
      'No fractional shares',
      'Limited trading tools',
      'Not for active traders',
    ],
    commission: {
      type: 'CPA',
      amount: 35,
    },
    affiliateLink: {
      url: 'https://investor.vanguard.com/',
      trackingId: '?ref=dividend-calc',
      featured: false,
    },
  },
];

/**
 * Get broker recommendations based on user preferences
 */
export function getRecommendedBrokers(
  preferences: {
    minDeposit?: number;
    needsFractionalShares?: boolean;
    needsDRIP?: boolean;
    experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
    priority?: 'cost' | 'features' | 'ease-of-use';
  }
): BrokerComparison[] {
  let filtered = [...BROKER_AFFILIATES_EXPANDED];

  // Filter by minimum deposit
  if (preferences.minDeposit !== undefined) {
    filtered = filtered.filter(
      (broker) => broker.features.minDeposit <= preferences.minDeposit!
    );
  }

  // Filter by fractional shares
  if (preferences.needsFractionalShares) {
    filtered = filtered.filter((broker) => broker.features.fractionalShares);
  }

  // Filter by DRIP support
  if (preferences.needsDRIP) {
    filtered = filtered.filter((broker) => broker.features.dripSupport);
  }

  // Sort by rating or commission based on priority
  if (preferences.priority === 'cost') {
    filtered.sort((a, b) => {
      const feeA = a.features.commissionFree ? 0 : 1;
      const feeB = b.features.commissionFree ? 0 : 1;
      return feeA - feeB || b.rating - a.rating;
    });
  } else {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Return top 5 recommendations
  return filtered.slice(0, 5);
}

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
