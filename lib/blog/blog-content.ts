/**
 * Blog content loader - reads markdown files from content/blog directory
 */

import fs from 'fs'
import path from 'path'

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogContentMetadata {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  readTime: number
  keywords: string[]
}

// Metadata for all 10 new blog posts
export const NEW_BLOG_POSTS_METADATA: BlogContentMetadata[] = [
  {
    slug: 'drip-investing-for-beginners-2026',
    title: 'DRIP Investing for Beginners 2026: Your Complete Starting Guide',
    excerpt: 'Dividend Reinvestment Plans (DRIPs) are one of the most powerful wealth-building strategies available. Learn how zero-commission trading and fractional shares make DRIP investing more accessible than ever.',
    category: 'Education',
    tags: ['DRIP', 'Beginner Investing', 'Dividend Reinvestment', 'Compound Growth'],
    readTime: 12,
    keywords: ['DRIP investing', 'dividend reinvestment plan', 'automatic investing', 'compound growth', 'zero commission']
  },
  {
    slug: 'top-10-dividend-aristocrats-analysis',
    title: 'Top 10 Dividend Aristocrats Analysis 2026: The Elite Dividend Stocks',
    excerpt: 'Discover the top 10 Dividend Aristocrats with 25+ years of consecutive dividend increases. In-depth analysis of Procter & Gamble, Coca-Cola, Johnson & Johnson, and more elite dividend growers.',
    category: 'Analysis',
    tags: ['Dividend Aristocrats', 'Stock Analysis', 'Dividend Growth', 'S&P 500'],
    readTime: 14,
    keywords: ['dividend aristocrats', 'top dividend stocks', 'dividend growth', 'S&P 500', 'reliable dividends']
  },
  {
    slug: 'monthly-dividend-stocks-guide',
    title: 'Monthly Dividend Stocks Guide: Build Consistent Cash Flow',
    excerpt: 'Learn how to build a portfolio of monthly dividend stocks for consistent cash flow. Analysis of REITs, BDCs, and monthly payers with strategies for creating monthly income streams.',
    category: 'Strategy',
    tags: ['Monthly Dividends', 'REITs', 'Cash Flow', 'Income Investing'],
    readTime: 13,
    keywords: ['monthly dividend stocks', 'monthly dividends', 'REITs', 'consistent income', 'cash flow investing']
  },
  {
    slug: 'reits-vs-dividend-stocks',
    title: 'REITs vs Dividend Stocks: Comprehensive Comparison for Income Investors',
    excerpt: 'Compare REITs and traditional dividend stocks for income investing. Understand tax implications, yield differences, growth potential, and optimal portfolio positioning.',
    category: 'Comparison',
    tags: ['REITs', 'Dividend Stocks', 'Tax Strategy', 'Asset Allocation'],
    readTime: 11,
    keywords: ['REITs vs stocks', 'real estate investment trusts', 'dividend comparison', 'tax-efficient investing']
  },
  {
    slug: 'tax-efficient-dividend-investing',
    title: 'Tax-Efficient Dividend Investing: Strategies to Keep More of Your Income',
    excerpt: 'Master tax-efficient dividend investing with strategies for account positioning, qualified dividends, tax-loss harvesting, and minimizing tax drag on your portfolio.',
    category: 'Tax Strategy',
    tags: ['Tax Efficiency', 'Account Positioning', 'Qualified Dividends', 'Tax Planning'],
    readTime: 12,
    keywords: ['tax-efficient investing', 'dividend taxes', 'qualified dividends', 'tax-loss harvesting', 'Roth IRA']
  },
  {
    slug: 'dividend-growth-strategy',
    title: 'Dividend Growth Strategy: Building Long-Term Wealth Through Rising Income',
    excerpt: 'Build a dividend growth portfolio that compounds wealth over decades. Learn stock selection criteria, target allocation, and realistic growth projections for financial independence.',
    category: 'Strategy',
    tags: ['Dividend Growth', 'Long-Term Investing', 'Portfolio Building', 'Financial Independence'],
    readTime: 13,
    keywords: ['dividend growth investing', 'dividend growth stocks', 'compounding dividends', 'financial independence']
  },
  {
    slug: 'high-yield-vs-dividend-growth',
    title: 'High Yield vs Dividend Growth: Which Strategy Wins?',
    excerpt: 'Compare high-yield and dividend growth strategies with 10-year projections. Understand when to choose each approach and how to build a hybrid strategy.',
    category: 'Comparison',
    tags: ['High Yield', 'Dividend Growth', 'Strategy Comparison', 'Portfolio Allocation'],
    readTime: 12,
    keywords: ['high yield dividends', 'dividend growth', 'yield vs growth', 'dividend strategy']
  },
  {
    slug: 'building-1k-monthly-dividend-income',
    title: 'Building $1K Monthly Dividend Income: Step-by-Step Roadmap',
    excerpt: 'Achieve $1,000 in monthly dividend income with this comprehensive roadmap. Year-by-year milestones, capital requirements, portfolio allocation, and realistic timelines.',
    category: 'Case Study',
    tags: ['Income Goals', 'Portfolio Building', 'Monthly Income', 'Financial Planning'],
    readTime: 13,
    keywords: ['$1000 monthly dividends', 'passive income', 'dividend income goal', 'financial milestones']
  },
  {
    slug: 'retirement-income-from-dividends',
    title: 'Retirement Income from Dividends: Complete Planning Guide',
    excerpt: 'Plan your retirement income strategy using dividends. Calculate required capital, optimize for taxes, ensure income stability, and create a sustainable withdrawal plan.',
    category: 'Retirement',
    tags: ['Retirement Planning', 'Income Strategy', 'Tax Optimization', 'Withdrawal Strategy'],
    readTime: 14,
    keywords: ['retirement dividends', 'retirement income', 'dividend retirement strategy', 'sustainable income']
  },
  {
    slug: 'dividend-reinvestment-calculator-guide',
    title: 'Dividend Reinvestment Calculator Guide: Master Your DRIP Projections',
    excerpt: 'Learn how to use dividend reinvestment calculators to project long-term growth. Understand inputs, model different scenarios, and interpret results to optimize your DRIP strategy.',
    category: 'Tools',
    tags: ['Calculator Guide', 'DRIP', 'Financial Planning', 'Projections'],
    readTime: 15,
    keywords: ['dividend calculator', 'DRIP calculator', 'dividend projections', 'financial modeling']
  }
]

/**
 * Read blog content from markdown file
 */
export function readBlogContent(slug: string): string {
  const fileName = getFileNameForSlug(slug)
  const filePath = path.join(BLOG_CONTENT_DIR, fileName)

  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8')
    }
  } catch (error) {
    console.error(`Failed to read blog content for ${slug}:`, error)
  }

  return ''
}

/**
 * Map slug to filename in content/blog directory
 */
function getFileNameForSlug(slug: string): string {
  const slugToFileMap: Record<string, string> = {
    'drip-investing-for-beginners-2026': '01-drip-investing-for-beginners-2026.md',
    'top-10-dividend-aristocrats-analysis': '02-top-10-dividend-aristocrats-analysis.md',
    'monthly-dividend-stocks-guide': '03-monthly-dividend-stocks-guide.md',
    'reits-vs-dividend-stocks': '04-reits-vs-dividend-stocks.md',
    'tax-efficient-dividend-investing': '05-tax-efficient-dividend-investing.md',
    'dividend-growth-strategy': '06-dividend-growth-strategy.md',
    'high-yield-vs-dividend-growth': '07-high-yield-vs-dividend-growth.md',
    'building-1k-monthly-dividend-income': '08-building-1k-monthly-dividend-income.md',
    'retirement-income-from-dividends': '09-retirement-income-from-dividends.md',
    'dividend-reinvestment-calculator-guide': '10-dividend-reinvestment-calculator-guide.md'
  }

  return slugToFileMap[slug] || `${slug}.md`
}

/**
 * Check if a blog post exists in content/blog directory
 */
export function blogContentExists(slug: string): boolean {
  const fileName = getFileNameForSlug(slug)
  const filePath = path.join(BLOG_CONTENT_DIR, fileName)
  return fs.existsSync(filePath)
}
