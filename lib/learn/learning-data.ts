/**
 * Learning center data and utilities
 */

import { LucideIcon, BookOpen, TrendingUp, BarChart3 } from 'lucide-react'

export interface LearningPath {
  id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  courses: number
  topics: string[]
  icon: LucideIcon
  color: string
}

export interface Course {
  id: string
  title: string
  description: string
  content: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  type: 'video' | 'article'
  students: number
  featured: boolean
  pathId: string
  order: number
  prerequisites: string[]
  learningObjectives: string[]
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'beginner-fundamentals',
    title: 'Dividend Investing Fundamentals',
    description: 'Start your journey with the basics of dividend investing, from understanding what dividends are to building your first portfolio.',
    level: 'Beginner',
    courses: 8,
    topics: [
      'What are dividends?',
      'Dividend yield vs. growth',
      'Building your first portfolio',
      'Tax implications',
      'Common mistakes to avoid'
    ],
    icon: BookOpen,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'growth-strategies',
    title: 'Dividend Growth Investing',
    description: 'Learn advanced strategies for finding and investing in companies that consistently grow their dividend payments over time.',
    level: 'Intermediate',
    courses: 12,
    topics: [
      'Dividend Aristocrats analysis',
      'Quality metrics evaluation',
      'Sector rotation strategies',
      'DRIP optimization',
      'Risk management'
    ],
    icon: TrendingUp,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'portfolio-optimization',
    title: 'Advanced Portfolio Management',
    description: 'Master portfolio construction, risk management, and optimization techniques for sophisticated dividend investors.',
    level: 'Advanced',
    courses: 10,
    topics: [
      'Modern Portfolio Theory',
      'Factor investing',
      'International diversification',
      'Tax-loss harvesting',
      'Rebalancing strategies'
    ],
    icon: BarChart3,
    color: 'bg-purple-100 text-purple-600'
  }
]

export const COURSES: Course[] = [
  {
    id: 'what-are-dividends',
    title: 'Understanding Dividends: A Complete Beginner\'s Guide',
    description: 'Learn the fundamentals of dividend investing, including what dividends are, how they work, and why companies pay them.',
    content: `# Understanding Dividends: A Complete Beginner's Guide

## What Are Dividends?

Dividends are cash payments that companies make to their shareholders, typically on a quarterly basis. Think of them as your share of the company's profits.

### Key Concepts

1. **Dividend Per Share (DPS)**: The dollar amount paid per share
2. **Dividend Yield**: Annual dividend divided by stock price
3. **Ex-Dividend Date**: Last day to buy stock and receive upcoming dividend
4. **Payment Date**: When dividends are actually paid

## Why Do Companies Pay Dividends?

### Mature Companies
Established companies with stable cash flows often return excess capital to shareholders

### Shareholder Attraction
Dividends attract income-focused investors and retirees

### Signal of Confidence
Regular dividends signal management's confidence in future cash flows

## Types of Dividend Payments

### Regular Dividends
Consistent quarterly payments that investors can rely on

### Special Dividends
One-time payments when companies have excess cash

### Stock Dividends
Payments made in additional shares rather than cash

## Dividend Yield Calculation

**Formula**: Annual Dividend Per Share ÷ Current Stock Price × 100

**Example**: 
- Stock Price: $100
- Annual Dividend: $4
- Yield: 4%

## Benefits of Dividend Investing

1. **Regular Income**: Predictable cash flow
2. **Inflation Protection**: Growing dividends combat inflation
3. **Lower Volatility**: Dividend stocks often less volatile
4. **Compound Growth**: Reinvested dividends accelerate wealth building

## Key Metrics to Understand

### Payout Ratio
Percentage of earnings paid as dividends. Lower ratios suggest more sustainable dividends.

### Dividend Growth Rate
Annual percentage increase in dividend payments

### Free Cash Flow
Cash available after capital expenditures - funds future dividend payments

## Next Steps

Now that you understand dividend basics, you're ready to:
1. Learn about dividend yield vs. growth
2. Explore how to evaluate dividend safety
3. Start building your dividend portfolio

Use our [DRIP Calculator](/) to see how reinvesting dividends can accelerate your wealth building!`,
    level: 'Beginner',
    duration: '15 min',
    type: 'article',
    students: 15420,
    featured: true,
    pathId: 'beginner-fundamentals',
    order: 1,
    prerequisites: [],
    learningObjectives: [
      'Define what dividends are and how they work',
      'Calculate dividend yield',
      'Understand different types of dividend payments',
      'Identify key dividend metrics'
    ]
  },
  {
    id: 'dividend-aristocrats-deep-dive',
    title: 'Dividend Aristocrats: Elite Income Investments',
    description: 'Deep dive into the prestigious group of S&P 500 companies with 25+ years of consecutive dividend increases.',
    content: `# Dividend Aristocrats: Elite Income Investments

## The Elite Club

Dividend Aristocrats represent the gold standard in dividend investing - S&P 500 companies that have increased dividends for 25+ consecutive years.

## Current Requirements

1. **S&P 500 Member**: Must be in the index
2. **25+ Years**: Consecutive dividend increases
3. **Quality Metrics**: Meet liquidity and market cap requirements
4. **Annual Review**: Membership reviewed annually

## Why Aristocrats Excel

### Proven Business Models
Decades of dividend growth prove durable competitive advantages

### Management Quality
Disciplined capital allocation and shareholder focus

### Economic Resilience
Survived multiple recessions while growing dividends

### Market Outperformance
Historically delivered superior risk-adjusted returns

## Top Dividend Aristocrats by Sector

### Healthcare
- **Johnson & Johnson (JNJ)**: 60+ years
- **AbbVie (ABBV)**: Healthcare spinoff success

### Consumer Staples
- **Coca-Cola (KO)**: 61+ years
- **Procter & Gamble (PG)**: 67+ years
- **Walmart (WMT)**: 49+ years

### Industrials
- **3M Company (MMM)**: 64+ years
- **Caterpillar (CAT)**: Construction equipment leader

## Investment Strategies

### Equal Weight Portfolio
Invest equally across all Aristocrats for diversification

### Sector Focus
Concentrate on specific sectors based on economic outlook

### Quality Screen
Further filter by financial metrics and growth prospects

### Dollar-Cost Averaging
Regular investments smooth out volatility

## Risks to Consider

### Index Changes
Companies can be removed if they cut dividends

### Sector Concentration
Some sectors over/under-represented vs. broad market

### Valuation Risk
Popular stocks may become overvalued

## Building an Aristocrats Portfolio

### Step 1: Research
Analyze current list and individual company fundamentals

### Step 2: Diversify
Spread investments across multiple sectors

### Step 3: Monitor
Regularly review holdings for fundamental changes

### Step 4: Reinvest
Use DRIPs to compound your returns

## Performance Analysis

Historically, Dividend Aristocrats have:
- Outperformed the S&P 500 over long periods
- Provided lower volatility
- Delivered superior risk-adjusted returns
- Protected capital during market downturns

## Getting Started

Explore individual Aristocrats with our [Stock Analysis Tool](/stocks) or model your potential returns with the [DRIP Calculator](/).`,
    level: 'Intermediate',
    duration: '12 min',
    type: 'article',
    students: 8750,
    featured: true,
    pathId: 'growth-strategies',
    order: 3,
    prerequisites: ['what-are-dividends'],
    learningObjectives: [
      'Understand Dividend Aristocrat requirements',
      'Identify top Aristocrats by sector',
      'Develop investment strategies for Aristocrats',
      'Analyze historical performance data'
    ]
  },
  {
    id: 'drip-investing-mastery',
    title: 'DRIP Investing Mastery: Compound Your Way to Wealth',
    description: 'Master the powerful strategy of dividend reinvestment and learn how to optimize your DRIP program for maximum returns.',
    content: `# DRIP Investing Mastery: Compound Your Way to Wealth

## The Power of Dividend Reinvestment

DRIP (Dividend Reinvestment Plan) investing harnesses compound growth by automatically reinvesting dividends to purchase additional shares.

## How DRIPs Transform Returns

### The Snowball Effect
Each dividend buys more shares → More shares generate more dividends → Exponential growth

### Mathematical Magic
A 4% yielding stock growing dividends at 5% annually can generate 10%+ total returns through DRIP

## Types of DRIP Programs

### Company-Sponsored DRIPs
- **Direct enrollment** with transfer agent
- **No commissions** on reinvestment
- **Discount pricing** (some offer 3-5% discount)
- **Fractional shares** automatically purchased

### Brokerage DRIPs
- **Convenience** of single account
- **Multiple stocks** in one program
- **Immediate reinvestment** on payment date
- **Tax reporting** simplified

## DRIP Optimization Strategies

### 1. Timing Considerations
**Ex-Dividend Dates**: Buy before to receive next dividend
**Market Volatility**: DRIPs benefit from volatile markets through dollar-cost averaging

### 2. Stock Selection
**High-Quality Companies**: Focus on sustainable dividend growers
**Moderate Yields**: 3-5% yields often more sustainable than 8%+
**Growth Potential**: Companies with dividend growth runway

### 3. Portfolio Management
**Diversification**: Don't let DRIP concentration get too high
**Rebalancing**: Periodically rebalance across sectors
**Tax Planning**: Consider tax-advantaged accounts for DRIPs

## DRIP Case Study: Johnson & Johnson

**Initial Investment**: $10,000 in 2000
**Strategy**: DRIP reinvestment for 20 years
**Dividend Growth**: ~6% annually
**Result**: ~$55,000 total value (vs. ~$28,000 without DRIP)

## Setting Up Your DRIP Program

### Step 1: Choose Your Method
Decide between company-sponsored or brokerage DRIPs

### Step 2: Select Quality Stocks
Focus on dividend aristocrats and quality growers

### Step 3: Automate Everything
Set up automatic investments and reinvestment

### Step 4: Monitor & Adjust
Regular review without over-tinkering

## Advanced DRIP Techniques

### Synthetic DRIPs
Reinvest dividends into different stocks for better diversification

### Tax-Loss Harvesting
Pair DRIP gains with tax-loss selling in taxable accounts

### International DRIPs
Explore foreign dividend growers for global diversification

## Common DRIP Mistakes

1. **Forgetting Taxes**: DRIP dividends are taxable when received
2. **Over-Concentration**: Letting one stock grow too large
3. **Ignoring Fundamentals**: Continuing DRIP in declining companies
4. **Timing Attempts**: Trying to time dividend reinvestment

## Tax Implications

### Taxable Accounts
- Dividends taxed in year received (even if reinvested)
- Keep detailed records of basis adjustments
- Consider qualified vs. ordinary dividend rates

### Tax-Advantaged Accounts
- No current tax on reinvested dividends
- Traditional IRA: Tax-deferred growth
- Roth IRA: Tax-free growth

## Measuring DRIP Success

### Key Metrics
1. **Total Return**: Price appreciation + dividends
2. **Dividend Growth**: Annual increase rate
3. **Share Accumulation**: Shares purchased through DRIP
4. **Yield on Cost**: Dividends ÷ original investment

## Conclusion

DRIP investing represents one of the most powerful wealth-building strategies available to individual investors. Start early, stay consistent, and let compound growth work its magic.

Model your DRIP potential with our [DRIP Calculator](/) and see how reinvesting dividends can transform your financial future.`,
    level: 'Intermediate',
    duration: '18 min',
    type: 'article',
    students: 12330,
    featured: true,
    pathId: 'growth-strategies',
    order: 5,
    prerequisites: ['what-are-dividends'],
    learningObjectives: [
      'Understand compound growth through dividend reinvestment',
      'Compare company vs. brokerage DRIPs',
      'Implement DRIP optimization strategies',
      'Avoid common DRIP investing mistakes'
    ]
  }
]

// Get all learning paths
export function getLearningPaths(): LearningPath[] {
  return LEARNING_PATHS
}

// Get learning path by ID
export function getLearningPathById(id: string): LearningPath | undefined {
  return LEARNING_PATHS.find(path => path.id === id)
}

// Get all courses
export function getCourses(): Course[] {
  return COURSES
}

// Get course by ID
export function getCourseById(id: string): Course | undefined {
  return COURSES.find(course => course.id === id)
}

// Get courses by learning path
export function getCoursesByPath(pathId: string): Course[] {
  return COURSES
    .filter(course => course.pathId === pathId)
    .sort((a, b) => a.order - b.order)
}

// Get course prerequisites
export function getCoursePrerequisites(courseId: string): Course[] {
  const course = getCourseById(courseId)
  if (!course) return []
  
  return COURSES.filter(c => course.prerequisites.includes(c.id))
}