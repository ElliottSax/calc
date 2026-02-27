import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, Clock, BookOpen, ArrowRight, Calculator, Shield, Target, BarChart3, Building2, Wallet, Globe, Zap, PiggyBank, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Investing Blog - Strategies, Analysis & Guides | Dividend Calculator Hub',
  description: 'Expert dividend investing guides, stock analysis, and strategies. 60+ in-depth articles on DRIP investing, dividend stocks, portfolio building, and passive income.',
  keywords: [
    'dividend investing blog',
    'dividend stock analysis',
    'DRIP strategy',
    'passive income blog',
    'dividend growth investing',
    'best dividend stocks 2026',
    'dividend portfolio building',
    'monthly dividend stocks',
    'dividend aristocrats',
    'dividend tax strategies'
  ],
  openGraph: {
    title: 'Dividend Investing Blog - 60+ Expert Guides & Analysis',
    description: 'Expert dividend investing guides covering stock picks, strategies, tax optimization, and portfolio building.',
  }
}

const ARTICLE_CATEGORIES = [
  {
    title: 'Best Dividend Stocks by Sector',
    description: 'Top picks across every major sector',
    icon: Building2,
    articles: [
      { slug: 'best-dividend-stocks-2026', title: '50 Best Dividend Stocks to Buy in 2026', badge: 'Most Popular' },
      { slug: 'best-dividend-stocks-for-beginners', title: 'Best Dividend Stocks for Beginners' },
      { slug: 'best-dividend-stocks-under-50', title: 'Best Dividend Stocks Under $50' },
      { slug: 'best-dividend-growth-stocks-2026', title: 'Best Dividend Growth Stocks 2026' },
      { slug: 'best-monthly-dividend-stocks-2026', title: 'Best Monthly Dividend Stocks 2026' },
      { slug: 'best-bank-dividend-stocks', title: 'Best Bank Dividend Stocks' },
      { slug: 'best-reit-dividend-stocks', title: 'Best REIT Dividend Stocks' },
      { slug: 'best-high-yield-reits-2026', title: 'Best High-Yield REITs 2026' },
      { slug: 'best-technology-dividend-stocks', title: 'Best Technology Dividend Stocks' },
      { slug: 'best-healthcare-dividend-stocks', title: 'Best Healthcare Dividend Stocks' },
      { slug: 'best-energy-dividend-stocks', title: 'Best Energy Dividend Stocks' },
      { slug: 'best-utility-dividend-stocks', title: 'Best Utility Dividend Stocks' },
      { slug: 'best-consumer-staples-dividend-stocks', title: 'Best Consumer Staples Dividend Stocks' },
      { slug: 'best-industrial-dividend-stocks', title: 'Best Industrial Dividend Stocks' },
      { slug: 'best-financial-dividend-stocks', title: 'Best Financial Dividend Stocks' },
      { slug: 'best-insurance-dividend-stocks', title: 'Best Insurance Dividend Stocks' },
      { slug: 'best-telecom-dividend-stocks', title: 'Best Telecom Dividend Stocks' },
      { slug: 'best-oil-and-gas-dividend-stocks', title: 'Best Oil & Gas Dividend Stocks' },
      { slug: 'best-canadian-dividend-stocks', title: 'Best Canadian Dividend Stocks' },
      { slug: 'best-international-dividend-stocks', title: 'Best International Dividend Stocks' },
      { slug: 'high-yield-dividend-stocks-over-5-percent', title: 'High-Yield Stocks Over 5%' },
    ]
  },
  {
    title: 'Stock & ETF Analysis',
    description: 'Deep dives into individual stocks and ETFs',
    icon: BarChart3,
    articles: [
      { slug: 'dividend-aristocrats-complete-list-2026', title: 'Dividend Aristocrats: Complete List 2026', badge: 'Essential' },
      { slug: 'top-dividend-aristocrats-2026', title: 'Top Dividend Aristocrats Ranked' },
      { slug: 'dividend-kings-list-2026', title: 'Dividend Kings: 50+ Year Streaks' },
      { slug: 'monthly-dividend-stocks-complete-list', title: 'Monthly Dividend Stocks: Complete List' },
      { slug: 'top-dividend-etfs-2026', title: 'Top Dividend ETFs 2026' },
      { slug: 'realty-income-stock-analysis-2026', title: 'Realty Income (O) Stock Analysis' },
      { slug: 'johnson-and-johnson-dividend-analysis', title: 'Johnson & Johnson Dividend Analysis' },
      { slug: 'is-att-stock-good-dividend-investment', title: 'Is AT&T a Good Dividend Investment?' },
      { slug: 'is-verizon-stock-good-dividend-investment', title: 'Is Verizon a Good Dividend Investment?' },
      { slug: 'is-altria-dividend-safe', title: "Is Altria's 9% Dividend Safe?" },
    ]
  },
  {
    title: 'How-To Guides',
    description: 'Step-by-step guides to build dividend income',
    icon: Target,
    articles: [
      { slug: 'how-to-build-1000-month-dividend-portfolio', title: 'How to Build a $1,000/Month Portfolio', badge: 'Popular' },
      { slug: 'how-to-build-dividend-portfolio-from-scratch', title: 'Build a Dividend Portfolio from Scratch' },
      { slug: 'how-much-to-invest-for-1000-month-dividends', title: 'How Much to Invest for $1,000/Month' },
      { slug: 'how-to-live-off-dividends', title: 'How to Live Off Dividends' },
      { slug: 'how-to-find-dividend-stocks', title: 'How to Find Dividend Stocks' },
      { slug: 'how-to-pick-dividend-stocks', title: 'How to Pick Dividend Stocks' },
      { slug: 'how-to-screen-for-quality-dividend-stocks', title: 'Screen for Quality Dividend Stocks' },
      { slug: 'how-to-analyze-dividend-safety', title: 'How to Analyze Dividend Safety' },
      { slug: 'how-to-avoid-dividend-cuts', title: 'How to Avoid Dividend Cuts' },
      { slug: 'how-to-calculate-dividend-yield', title: 'How to Calculate Dividend Yield' },
      { slug: 'how-to-read-dividend-payout-ratios', title: 'How to Read Dividend Payout Ratios' },
      { slug: 'how-to-reinvest-dividends-for-maximum-growth', title: 'Reinvest Dividends for Maximum Growth' },
      { slug: 'how-to-track-your-dividend-portfolio', title: 'Track Your Dividend Portfolio' },
      { slug: 'how-to-choose-dividend-broker', title: 'How to Choose a Dividend Broker' },
      { slug: 'best-account-for-dividend-stocks', title: 'Best Account for Dividend Stocks' },
    ]
  },
  {
    title: 'Investment Strategies',
    description: 'Proven strategies for dividend investors',
    icon: Zap,
    articles: [
      { slug: 'drip-investing-guide', title: 'DRIP Investing: Complete Guide', badge: 'Essential' },
      { slug: 'dividend-growth-vs-high-yield-strategy', title: 'Dividend Growth vs High Yield' },
      { slug: 'high-yield-vs-growth-dividends', title: 'High Yield vs Growth: Which Wins?' },
      { slug: 'dividend-income-vs-capital-gains', title: 'Dividend Income vs Capital Gains' },
      { slug: 'covered-call-dividend-strategy', title: 'Covered Call Dividend Strategy' },
      { slug: 'dividend-ladder-strategy-guide', title: 'Dividend Ladder Strategy Guide' },
      { slug: 'snowball-dividend-investing-strategy', title: 'Snowball Dividend Strategy' },
      { slug: 'dividend-portfolio-allocation-by-age', title: 'Portfolio Allocation by Age' },
      { slug: 'dividend-stocks-vs-etfs-complete-guide', title: 'Dividend Stocks vs ETFs' },
    ]
  },
  {
    title: 'Tax & Account Strategy',
    description: 'Minimize taxes and maximize after-tax returns',
    icon: Shield,
    articles: [
      { slug: 'dividend-tax-guide-2026', title: 'Dividend Tax Guide 2026', badge: 'Updated' },
      { slug: 'dividend-tax-rate-2026', title: 'Dividend Tax Rates 2026' },
      { slug: 'how-to-minimize-dividend-taxes', title: 'How to Minimize Dividend Taxes' },
      { slug: 'qualified-vs-ordinary-dividends-explained', title: 'Qualified vs Ordinary Dividends' },
      { slug: 'foreign-dividend-tax-withholding', title: 'Foreign Dividend Tax Withholding' },
      { slug: 'roth-ira-vs-taxable-for-dividend-investing', title: 'Roth IRA vs Taxable for Dividends' },
    ]
  },
  {
    title: 'Beginner Guides',
    description: 'Start your dividend investing journey',
    icon: PiggyBank,
    articles: [
      { slug: 'what-are-dividends-beginners-guide', title: 'What Are Dividends? Complete Guide', badge: 'Start Here' },
      { slug: 'dividend-investing-for-beginners-2026', title: 'Dividend Investing for Beginners 2026' },
      { slug: 'what-is-a-good-dividend-yield', title: 'What is a Good Dividend Yield?' },
      { slug: 'dividend-yield-calculator-guide', title: 'Dividend Yield Calculator Guide' },
      { slug: 'how-often-are-dividends-paid', title: 'How Often Are Dividends Paid?' },
      { slug: 'how-do-dividend-payments-work', title: 'How Do Dividend Payments Work?' },
      { slug: 'ex-dividend-date-explained', title: 'Ex-Dividend Date Explained' },
      { slug: 'dividend-payout-ratio-calculator', title: 'Dividend Payout Ratio Calculator' },
      { slug: 'dividend-discount-model-calculator', title: 'Dividend Discount Model Calculator' },
      { slug: 'dividend-growth-rate-calculator', title: 'Dividend Growth Rate Calculator' },
      { slug: 'total-return-calculator-dividends', title: 'Total Return Calculator' },
    ]
  },
  {
    title: 'Comparisons',
    description: 'Side-by-side investment comparisons',
    icon: Scale,
    articles: [
      { slug: 'SCHD-vs-VYM-comparison', title: 'SCHD vs VYM: Which ETF is Better?', badge: 'New' },
      { slug: 'growth-stocks-vs-dividend-stocks', title: 'Growth Stocks vs Dividend Stocks' },
      { slug: 'dividend-stocks-vs-bonds', title: 'Dividend Stocks vs Bonds' },
      { slug: 'dividend-ETFs-vs-index-funds', title: 'Dividend ETFs vs Index Funds' },
      { slug: 'reits-vs-dividend-stocks', title: 'REITs vs Dividend Stocks' },
      { slug: 'special-dividends-vs-regular-dividends', title: 'Special vs Regular Dividends' },
      { slug: 'dividend-capture-strategy-guide', title: 'Dividend Capture Strategy' },
    ]
  },
]

export default function BlogPage() {
  const totalArticles = ARTICLE_CATEGORIES.reduce((sum, cat) => sum + cat.articles.length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <BookOpen className="w-3 h-3 mr-1" />
              {totalArticles}+ In-Depth Articles
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Dividend Investing Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Expert guides, stock analysis, and strategies to build lasting wealth through dividends
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/best-dividend-stocks-2026">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-blue-100 dark:border-blue-900/50">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle className="text-xl">50 Best Dividend Stocks to Buy in 2026</CardTitle>
                  <CardDescription>Expert-curated picks across every sector with yields, safety ratings, and growth potential.</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-blue-600 flex items-center gap-1 text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-green-100 dark:border-green-900/50">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-green-100 text-green-700">How-To Guide</Badge>
                  <CardTitle className="text-xl">Build a $1,000/Month Dividend Portfolio</CardTitle>
                  <CardDescription>Step-by-step blueprint to build a portfolio generating $12,000+ annual passive income.</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-blue-600 flex items-center gap-1 text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/drip-investing-guide">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-purple-100 dark:border-purple-900/50">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-purple-100 text-purple-700">Essential</Badge>
                  <CardTitle className="text-xl">DRIP Investing: Complete Guide</CardTitle>
                  <CardDescription>Everything about dividend reinvestment plans and how they supercharge compound growth.</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-blue-600 flex items-center gap-1 text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* All Categories */}
        {ARTICLE_CATEGORIES.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <category.icon className="w-6 h-6 text-blue-600" />
              {category.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.articles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {article.badge && (
                            <Badge variant="secondary" className="text-xs shrink-0">{article.badge}</Badge>
                          )}
                        </div>
                        <p className="font-medium text-sm leading-snug">{article.title}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Calculator CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Put Your Knowledge Into Action
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Use our free calculators to model your dividend portfolio, project future income, and compare investment strategies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/calculators/drip" className="flex-1">
                    <Button variant="secondary" className="w-full gap-2" size="lg">
                      <Calculator className="w-5 h-5" />
                      DRIP Calculator
                    </Button>
                  </Link>
                  <Link href="/calculators/dividend-growth" className="flex-1">
                    <Button variant="secondary" className="w-full gap-2" size="lg">
                      <TrendingUp className="w-5 h-5" />
                      Growth Calculator
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
