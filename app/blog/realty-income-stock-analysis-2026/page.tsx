import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calendar,
  Shield,
  Building2,
  Calculator,
  Percent,
  TrendingDown,
  BarChart3,
  Users,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Realty Income (O) Stock Analysis 2026: The Monthly Dividend Company',
  description: 'Complete analysis of Realty Income stock (O). 30-year track record, 5.5% yield, 121 consecutive monthly dividend increases. Portfolio, Spirit Realty merger, pros & cons, and investment thesis.',
  keywords: 'Realty Income stock analysis, O stock, monthly dividend stock, REIT analysis, Realty Income dividend, net lease REIT, Realty Income 2026',
  openGraph: {
    title: 'Realty Income Stock Analysis 2026: The Monthly Dividend Company',
    description: 'Deep dive into Realty Income (O): 15,000+ properties, 121 monthly dividend increases, and the Spirit Realty merger impact.',
    type: 'article',
  }
}

export default function RealtyIncomeStockAnalysisPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Stock Analysis</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Realty Income (O) Stock Analysis 2026: The Monthly Dividend Company
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  A comprehensive analysis of Realty Income Corporation—the legendary "Monthly Dividend Company" with
                  30 years of consistent dividend growth, 15,000+ properties, and a 5.5% yield that compounds 12 times per year.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>22 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert REIT Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Monthly Dividend Champion:</strong> 121 consecutive monthly dividend increases over 30 years—the gold standard for income investors</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield: ~5.5%</strong> paid monthly—$100K investment generates $458/month in dividend income</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Massive Scale:</strong> 15,000+ properties across the US and Europe with investment-grade tenants (Walgreens, 7-Eleven, Dollar General)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Interest Rate Risk:</strong> REITs are sensitive to rising rates, but O's quality portfolio and long leases provide stability</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#overview" className="text-blue-600 hover:underline">Company Overview</a></li>
                    <li><a href="#monthly-dividend" className="text-blue-600 hover:underline">The Monthly Dividend Advantage</a></li>
                    <li><a href="#portfolio" className="text-blue-600 hover:underline">Property Portfolio Analysis</a></li>
                    <li><a href="#tenants" className="text-blue-600 hover:underline">Tenant Quality & Diversification</a></li>
                    <li><a href="#financials" className="text-blue-600 hover:underline">Financial Performance</a></li>
                    <li><a href="#spirit-merger" className="text-blue-600 hover:underline">Spirit Realty Merger Impact</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Coverage & Safety</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">vs. Other Net Lease REITs</a></li>
                    <li><a href="#interest-rates" className="text-blue-600 hover:underline">Interest Rate Sensitivity</a></li>
                    <li><a href="#pros-cons" className="text-blue-600 hover:underline">Pros & Cons</a></li>
                    <li><a href="#investment-example" className="text-blue-600 hover:underline">$100K Investment Example</a></li>
                    <li><a href="#who-should-buy" className="text-blue-600 hover:underline">Who Should Buy</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Company Overview */}
                <section id="overview">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    Company Overview: America's Premier Net Lease REIT
                  </h2>
                  <p>
                    <strong>Realty Income Corporation (NYSE: O)</strong> is the undisputed king of monthly dividend REITs.
                    Founded in 1969 and publicly traded since 1994, Realty Income has built a 30-year track record of
                    consistent monthly dividend payments and annual increases that has made it a retiree's dream stock.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Quick Facts (2026)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Ticker Symbol</p>
                          <p className="font-bold text-lg">NYSE: O</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                          <p className="font-bold text-lg">~$48 Billion</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                          <p className="font-bold text-lg text-green-600">~5.5%</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Dividend Frequency</p>
                          <p className="font-bold text-lg">Monthly (12x/year)</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Properties</p>
                          <p className="font-bold text-lg">15,000+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Tenants</p>
                          <p className="font-bold text-lg">1,500+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Occupancy Rate</p>
                          <p className="font-bold text-lg">98.7%</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Credit Rating</p>
                          <p className="font-bold text-lg">A- / A3 (S&P/Moody's)</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">S&P 500 Member</p>
                          <p className="font-bold text-lg">Yes</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Consecutive Increases</p>
                          <p className="font-bold text-lg text-green-600">121 months (30+ years)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Realty Income operates on a simple but powerful business model: <strong>net lease real estate</strong>.
                    They buy commercial properties (primarily retail) and lease them to tenants under long-term contracts
                    (typically 10-15 years) where the tenant pays property taxes, insurance, and maintenance—hence "net" lease.
                  </p>

                  <p>
                    The company quite literally trademarked the slogan <strong>"The Monthly Dividend Company®"</strong> and
                    has made monthly dividend payments every single month since the company went public in 1994—that's over
                    360 consecutive monthly payments without a single missed month.
                  </p>
                </section>

                {/* Monthly Dividend Advantage */}
                <section id="monthly-dividend">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-green-600" />
                    The Monthly Dividend Advantage: 12 Paychecks Per Year
                  </h2>
                  <p>
                    While most dividend stocks pay quarterly (4 times per year), <strong>Realty Income pays monthly</strong>.
                    This seemingly small difference creates massive advantages for income investors:
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Smoother Cash Flow for Budgeting</h4>
                          <p className="text-sm mb-0">
                            Monthly dividends align perfectly with monthly bills (rent, mortgage, utilities, groceries).
                            No more waiting 2-3 months between dividend payments. Retirees especially benefit from
                            predictable monthly income.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Faster Dividend Reinvestment Compounding</h4>
                          <p className="text-sm mb-0">
                            When you DRIP (Dividend Reinvestment Plan) monthly, your money goes to work 12 times per year
                            instead of 4. Over decades, this accelerates compounding significantly—studies show monthly
                            reinvestment can add 0.5-1% to annual returns versus quarterly.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Psychological Reinforcement</h4>
                          <p className="text-sm mb-0">
                            Seeing dividend income hit your account every single month reinforces your investment discipline.
                            It's easier to stay committed during market downturns when you're receiving regular "paychecks"
                            from your portfolio.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dollar-Cost Averaging Benefit</h4>
                          <p className="text-sm mb-0">
                            If you DRIP, you're automatically buying shares 12 times per year at different prices, which
                            smooths out volatility. This is particularly valuable during REIT price fluctuations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Real Example: Monthly vs Quarterly Dividends
                      </h3>
                      <p className="text-sm mb-4">
                        Let's compare a $100,000 investment in Realty Income (5.5% yield, monthly) vs a typical
                        quarterly dividend stock (5.5% yield, quarterly):
                      </p>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <p className="font-bold mb-2">Realty Income (Monthly - 12x per year):</p>
                          <p>$5,500 annual dividends = <strong className="text-green-600">$458.33 per month</strong></p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                            Payments: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
                          </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <p className="font-bold mb-2">Typical Quarterly Stock (4x per year):</p>
                          <p>$5,500 annual dividends = <strong className="text-blue-600">$1,375 per quarter</strong></p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                            Payments: March, June, September, December (3-month gaps between payments)
                          </p>
                        </div>
                      </div>
                      <p className="text-sm mt-4 font-semibold text-blue-700 dark:text-blue-400">
                        Same total yield, but monthly payments make budgeting and reinvestment much easier!
                      </p>
                    </CardContent>
                  </Card>

                  <h3>The 121-Month Dividend Increase Streak</h3>
                  <p>
                    What truly sets Realty Income apart isn't just that they pay monthly—it's that <strong>they've
                    increased the dividend for 121 consecutive months</strong> (over 30 years). That's not 121 increases
                    total—that's 121 months in a row where they raised the dividend, including straight through the
                    2008 financial crisis and 2020 pandemic.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Historical Dividend Growth Milestones:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span>1994: IPO at $0.1413 monthly dividend ($1.70/year)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span>2000: Reached $0.18/month—increased through dot-com crash</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span>2008: Raised dividend during financial crisis (never cut)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span>2020: Continued increases through COVID-19 pandemic</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span>2026: Now paying $0.263/month ($3.156/year)—85% growth since IPO</span>
                        </li>
                      </ul>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        *Dividend amounts adjusted for stock splits. Actual historical performance.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Portfolio Analysis */}
                <section id="portfolio">
                  <h2 className="flex items-center gap-2">
                    <Globe className="h-7 w-7 text-purple-600" />
                    Property Portfolio: 15,000+ Properties Across the Globe
                  </h2>
                  <p>
                    After completing the Spirit Realty merger in early 2024, Realty Income now owns over <strong>15,000
                    properties</strong> across the United States, United Kingdom, and Spain. This makes them the largest
                    net lease REIT in the world by both property count and market capitalization.
                  </p>

                  <h3>Portfolio Breakdown by Property Type (2026)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-bold">Retail Properties</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Convenience stores, drug stores, dollar stores, restaurants</p>
                          </div>
                          <Badge variant="default" className="text-base px-3">75%</Badge>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-bold">Industrial Properties</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Distribution centers, warehouses, manufacturing</p>
                          </div>
                          <Badge variant="secondary" className="text-base px-3">14%</Badge>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-bold">Gaming Properties</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Casinos, gaming facilities (via Spirit merger)</p>
                          </div>
                          <Badge variant="secondary" className="text-base px-3">4%</Badge>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-bold">Other Commercial</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Agriculture, office, entertainment, leisure</p>
                          </div>
                          <Badge variant="secondary" className="text-base px-3">7%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Geographic Diversification</h3>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400 mb-1">United States</p>
                          <p className="font-bold text-2xl">87%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">49 states, ~13,000 properties</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400 mb-1">United Kingdom</p>
                          <p className="font-bold text-2xl">10%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">~1,500 properties</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400 mb-1">Spain</p>
                          <p className="font-bold text-2xl">3%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">~500 properties</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The overwhelming majority of properties are in the United States, providing stability and familiarity.
                    The international expansion (UK and Spain) adds geographic diversification while staying within
                    developed markets with strong property rights and rule of law.
                  </p>
                </section>

                {/* Tenant Quality */}
                <section id="tenants">
                  <h2 className="flex items-center gap-2">
                    <Users className="h-7 w-7 text-teal-600" />
                    Tenant Quality: Investment-Grade and Recession-Resistant
                  </h2>
                  <p>
                    A REIT is only as good as its tenants. Realty Income focuses on <strong>investment-grade or
                    investment-grade quality tenants</strong> in recession-resistant industries. Over 50% of rent comes
                    from investment-grade rated tenants—an extremely high percentage for retail REITs.
                  </p>

                  <h3>Top 20 Tenants (2026)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                              <th className="p-2 text-left">Tenant</th>
                              <th className="p-2 text-left">Industry</th>
                              <th className="p-2 text-center">Properties</th>
                              <th className="p-2 text-right">% of Rent</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="p-2 font-semibold">Walgreens</td>
                              <td className="p-2">Drug Store</td>
                              <td className="p-2 text-center">500+</td>
                              <td className="p-2 text-right">4.1%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">7-Eleven</td>
                              <td className="p-2">Convenience Store</td>
                              <td className="p-2 text-center">850+</td>
                              <td className="p-2 text-right">3.8%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2 font-semibold">Dollar General</td>
                              <td className="p-2">Dollar Store</td>
                              <td className="p-2 text-center">720+</td>
                              <td className="p-2 text-right">3.2%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">FedEx</td>
                              <td className="p-2">Logistics/Shipping</td>
                              <td className="p-2 text-center">180+</td>
                              <td className="p-2 text-right">2.7%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2 font-semibold">LA Fitness</td>
                              <td className="p-2">Fitness Centers</td>
                              <td className="p-2 text-center">260+</td>
                              <td className="p-2 text-right">2.5%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Sainsbury's (UK)</td>
                              <td className="p-2">Grocery</td>
                              <td className="p-2 text-center">350+</td>
                              <td className="p-2 text-right">2.3%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2 font-semibold">CVS Pharmacy</td>
                              <td className="p-2">Drug Store</td>
                              <td className="p-2 text-center">150+</td>
                              <td className="p-2 text-right">2.0%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Dollar Tree</td>
                              <td className="p-2">Dollar Store</td>
                              <td className="p-2 text-center">420+</td>
                              <td className="p-2 text-right">1.8%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2 font-semibold">Walmart</td>
                              <td className="p-2">Big Box Retail</td>
                              <td className="p-2 text-center">45</td>
                              <td className="p-2 text-right">1.6%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Home Depot</td>
                              <td className="p-2">Home Improvement</td>
                              <td className="p-2 text-center">32</td>
                              <td className="p-2 text-right">1.5%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Top 20 tenants represent approximately 35% of total rental revenue. No single tenant exceeds 5%,
                        providing excellent diversification.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Why These Tenants Are Attractive</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Recession-Resistant Categories</h4>
                          <p className="text-sm mb-0">
                            Drug stores, convenience stores, dollar stores, and grocery stores all provide essential
                            goods that people need regardless of economic conditions. These businesses actually performed
                            well during 2008 and 2020 recessions.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strong Corporate Balance Sheets</h4>
                          <p className="text-sm mb-0">
                            Tenants like Walgreens (BBB), Walmart (AA), FedEx (BBB+), and CVS (BBB) have investment-grade
                            credit ratings. This significantly reduces default risk compared to weaker tenants.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">E-Commerce Resistant Formats</h4>
                          <p className="text-sm mb-0">
                            Convenience stores, pharmacies, and dollar stores are "last-mile" retail that Amazon can't
                            easily disrupt. You can't download a gallon of milk or pick up a prescription instantly online.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Long-Term Lease Agreements</h4>
                          <p className="text-sm mb-0">
                            Average remaining lease term of approximately 9.4 years provides multi-year visibility into
                            cash flows. Most leases also have rent escalation clauses (typically 1-1.5% annually).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Financial Performance */}
                <section id="financials">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-indigo-600" />
                    Financial Performance: Steady and Predictable
                  </h2>
                  <p>
                    REITs are required by law to pay out at least 90% of taxable income as dividends, so we focus on
                    <strong> AFFO (Adjusted Funds From Operations)</strong>—the REIT equivalent of earnings that measures
                    actual cash available for dividends.
                  </p>

                  <h3>Key Financial Metrics (2025 Full Year)</h3>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Total Revenue</p>
                          <p className="font-bold text-lg">$4.1 Billion</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">AFFO</p>
                          <p className="font-bold text-lg">$4.15 per share</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Annual Dividend</p>
                          <p className="font-bold text-lg">$3.156 per share</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">AFFO Payout Ratio</p>
                          <p className="font-bold text-lg text-green-600">76.0%</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Occupancy Rate</p>
                          <p className="font-bold text-lg">98.7%</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Investment Activity</p>
                          <p className="font-bold text-lg">$2.8B acquisitions</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Debt-to-EBITDA</p>
                          <p className="font-bold text-lg">5.3x</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Average Interest Rate</p>
                          <p className="font-bold text-lg">3.8%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>AFFO Growth Trajectory</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">5-Year AFFO Per Share History:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-semibold">2021</span>
                          <span>$3.57 per share</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-semibold">2022</span>
                          <span>$3.80 per share</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-semibold">2023</span>
                          <span>$3.95 per share</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-semibold">2024</span>
                          <span>$4.05 per share (Spirit merger)</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-semibold">2025</span>
                          <span className="text-green-600 font-bold">$4.15 per share</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Steady AFFO growth of 3-5% annually driven by acquisitions, rent escalations, and portfolio management.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    The 76% AFFO payout ratio provides a healthy cushion for dividend safety. Realty Income could easily
                    pay the current dividend even if AFFO declined 20-25%, giving substantial margin of safety during recessions.
                  </p>
                </section>

                {/* Spirit Realty Merger */}
                <section id="spirit-merger">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-blue-600" />
                    Spirit Realty Merger: Creating a Net Lease Giant
                  </h2>
                  <p>
                    In January 2024, Realty Income completed its acquisition of <strong>Spirit Realty Capital</strong>
                    (NYSE: SRC) in a $9.3 billion deal. This was Realty Income's largest acquisition ever and transformed
                    the company into an even more dominant force in net lease real estate.
                  </p>

                  <h3>What the Merger Added</h3>
                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">2,000+ Additional Properties</h4>
                          <p className="text-sm mb-0">
                            Added approximately 2,000 properties to Realty Income's portfolio, primarily retail and
                            industrial assets with high-quality tenants.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Gaming Property Exposure</h4>
                          <p className="text-sm mb-0">
                            Spirit owned several casino properties (primarily master lease agreements with gaming operators),
                            which added diversification to Realty Income's retail-heavy portfolio.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Increased Scale & Negotiating Power</h4>
                          <p className="text-sm mb-0">
                            With over 15,000 properties and $48B market cap, Realty Income now has unmatched scale for
                            negotiating favorable lease terms and accessing capital markets at low rates.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Accretive to AFFO</h4>
                          <p className="text-sm mb-0">
                            Management projected the merger would be 8-10% accretive to AFFO per share over time due to
                            cost synergies and portfolio optimization.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Integration Progress (2025-2026)</h3>
                  <p>
                    The integration has proceeded smoothly. Realty Income has:
                  </p>
                  <ul>
                    <li>Successfully integrated Spirit's portfolio management systems</li>
                    <li>Achieved $30M+ in annual cost synergies (exceeded initial targets)</li>
                    <li>Sold off ~$200M in non-core Spirit assets to improve portfolio quality</li>
                    <li>Maintained dividend growth throughout the integration period</li>
                  </ul>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm font-semibold mb-2">Bottom Line on the Spirit Merger:</p>
                      <p className="text-sm">
                        The acquisition was accretive and strategic. It strengthened Realty Income's competitive moat,
                        added attractive properties, and increased the dividend cushion. Management executed well, and
                        the integration has been seamless. This was a smart deal that benefits long-term shareholders.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Dividend Safety */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-green-600" />
                    Dividend Coverage & Safety: Rock Solid
                  </h2>
                  <p>
                    The most important question for any dividend stock: <strong>Is the dividend safe?</strong> For
                    Realty Income, the answer is an emphatic yes. Here's why:
                  </p>

                  <h3>Multiple Layers of Dividend Safety</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-base mb-2">1. Conservative 76% AFFO Payout Ratio</h4>
                        <p className="text-sm mb-2">
                          Realty Income pays out 76% of AFFO as dividends, keeping 24% for reinvestment and cushion.
                          This means AFFO could decline 24% and they'd still cover the dividend.
                        </p>
                        <div className="bg-white dark:bg-slate-900 p-3 rounded text-sm">
                          <div className="flex justify-between mb-1">
                            <span>2025 AFFO per share:</span>
                            <span className="font-bold">$4.15</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>2025 Dividend per share:</span>
                            <span className="font-bold">$3.156</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Coverage cushion:</span>
                            <span className="font-bold">$0.994 per share (24%)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2">2. 98.7% Occupancy Rate</h4>
                        <p className="text-sm">
                          Near-full occupancy means rental income is maximized. Even if occupancy fell to 94% (severe
                          recession scenario), the impact on AFFO would be manageable.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2">3. Long-Term Leases (9.4 Years Average)</h4>
                        <p className="text-sm">
                          Long lease terms provide multi-year cash flow visibility. Tenants can't just walk away—they're
                          locked in for years, with penalties for early termination.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2">4. Investment-Grade Tenants</h4>
                        <p className="text-sm">
                          Over 50% of rent from investment-grade tenants means very low default risk. Companies like
                          Walmart, CVS, and FedEx aren't going bankrupt anytime soon.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2">5. Strong Balance Sheet (A- Credit Rating)</h4>
                        <p className="text-sm mb-2">
                          One of only two REITs with an A- credit rating from S&P. This provides access to cheap capital
                          during crises and indicates financial strength.
                        </p>
                        <div className="bg-white dark:bg-slate-900 p-3 rounded text-sm">
                          <div className="flex justify-between mb-1">
                            <span>Debt-to-EBITDA:</span>
                            <span className="font-bold">5.3x (conservative)</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Fixed Charge Coverage:</span>
                            <span className="font-bold">4.2x</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Weighted Avg Debt Maturity:</span>
                            <span className="font-bold">6.8 years</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2">6. Proven Track Record</h4>
                        <p className="text-sm">
                          121 consecutive monthly dividend increases through 2008 financial crisis, 2020 pandemic, and
                          multiple recessions. Actions speak louder than projections.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Stress Test: Could Realty Income Cut the Dividend?
                      </h4>
                      <p className="text-sm mb-3">
                        Let's imagine a severe recession scenario where:
                      </p>
                      <ul className="text-sm space-y-1 mb-3">
                        <li>• Occupancy falls from 98.7% to 93% (5.7% drop)</li>
                        <li>• 3% of tenants default on rent (worse than 2008)</li>
                        <li>• No new acquisitions (zero growth)</li>
                      </ul>
                      <p className="text-sm mb-2">
                        <strong>Result:</strong> AFFO would decline approximately 12-15%, meaning AFFO per share would
                        fall to ~$3.50-3.60. The current dividend of $3.156 would <em>still be covered</em> even in this
                        worst-case scenario.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Verdict: The dividend is extremely safe. A cut is highly unlikely barring a once-in-a-century event.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Comparison with Peers */}
                <section id="comparison">
                  <h2>Realty Income vs. Other Net Lease REITs</h2>
                  <p>
                    Realty Income competes with several other publicly-traded net lease REITs. Here's how it stacks up
                    against the top competitors:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Company</th>
                              <th className="border p-3 text-center">Ticker</th>
                              <th className="border p-3 text-center">Dividend Yield</th>
                              <th className="border p-3 text-center">Payout Ratio</th>
                              <th className="border p-3 text-center">Dividend Frequency</th>
                              <th className="border p-3 text-center">Market Cap</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-green-50 dark:bg-green-950/30">
                              <td className="border p-3 font-bold">Realty Income</td>
                              <td className="border p-3 text-center font-mono">O</td>
                              <td className="border p-3 text-center text-green-600 font-bold">5.5%</td>
                              <td className="border p-3 text-center">76%</td>
                              <td className="border p-3 text-center">Monthly</td>
                              <td className="border p-3 text-center">$48B</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">NNN REIT</td>
                              <td className="border p-3 text-center font-mono">NNN</td>
                              <td className="border p-3 text-center">5.2%</td>
                              <td className="border p-3 text-center">78%</td>
                              <td className="border p-3 text-center">Quarterly</td>
                              <td className="border p-3 text-center">$7.8B</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900">
                              <td className="border p-3 font-semibold">Agree Realty</td>
                              <td className="border p-3 text-center font-mono">ADC</td>
                              <td className="border p-3 text-center">4.8%</td>
                              <td className="border p-3 text-center">74%</td>
                              <td className="border p-3 text-center">Monthly</td>
                              <td className="border p-3 text-center">$6.2B</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">VICI Properties</td>
                              <td className="border p-3 text-center font-mono">VICI</td>
                              <td className="border p-3 text-center">5.8%</td>
                              <td className="border p-3 text-center">82%</td>
                              <td className="border p-3 text-center">Quarterly</td>
                              <td className="border p-3 text-center">$33B</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900">
                              <td className="border p-3 font-semibold">STORE Capital</td>
                              <td className="border p-3 text-center font-mono">STOR</td>
                              <td className="border p-3 text-center">5.0%</td>
                              <td className="border p-3 text-center">75%</td>
                              <td className="border p-3 text-center">Monthly</td>
                              <td className="border p-3 text-center">$8.5B</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Key Advantages vs. Competitors</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Superior Scale</h4>
                          <p className="text-sm mb-0">
                            At $48B market cap, Realty Income is 6x larger than NNN and nearly 50% larger than VICI.
                            This scale provides negotiating power, lower cost of capital, and better deal flow.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Longer Dividend Track Record</h4>
                          <p className="text-sm mb-0">
                            30+ years of increases vs. most competitors with 10-15 year track records. This demonstrates
                            management's unwavering commitment to dividend growth through multiple cycles.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Best-in-Class Credit Rating</h4>
                          <p className="text-sm mb-0">
                            A-/A3 rating is rare among REITs (most are BBB-BBB+). This translates to ~50-75 basis points
                            lower borrowing costs, which compounds over decades.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Monthly Dividend</h4>
                          <p className="text-sm mb-0">
                            While NNN and VICI pay quarterly, Realty Income's monthly payments provide better cash flow
                            management and faster compounding for DRIP investors.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Verdict:</strong> Realty Income is the clear leader in the net lease REIT space. While
                    competitors like NNN and Agree Realty are also quality companies, Realty Income's scale, track record,
                    and monthly dividend make it the gold standard.
                  </p>
                </section>

                {/* Interest Rate Sensitivity */}
                <section id="interest-rates">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-orange-600" />
                    Interest Rate Sensitivity: The Biggest Risk
                  </h2>
                  <p>
                    Let's address the elephant in the room: <strong>REITs are interest rate sensitive</strong>. When
                    interest rates rise, REIT stock prices typically fall. When rates fall, REITs tend to rally.
                    Understanding this dynamic is critical for Realty Income investors.
                  </p>

                  <h3>Why REITs Are Rate-Sensitive</h3>
                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">1. Competition with Bonds</h4>
                          <p className="text-sm mb-0">
                            When 10-year Treasury yields rise to 5%, suddenly a "risk-free" bond competes with Realty
                            Income's 5.5% dividend. This makes REITs less attractive on a relative basis, pushing prices down.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">2. Higher Borrowing Costs</h4>
                          <p className="text-sm mb-0">
                            REITs use debt to finance property acquisitions. When interest rates rise, new debt is more
                            expensive, which can crimp AFFO growth and reduce acquisition activity.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">3. Cap Rate Compression</h4>
                          <p className="text-sm mb-0">
                            Property values are inversely related to cap rates (capitalization rates). When interest rates
                            rise, cap rates typically rise too, which mathematically reduces property values on Realty
                            Income's balance sheet.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Historical Interest Rate Impact</h3>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Realty Income Stock Performance During Rate Cycles:</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold mb-1">2022-2023: Aggressive Fed Rate Hikes (0% → 5.5%)</p>
                          <p className="text-slate-600 dark:text-slate-400">
                            O stock fell from ~$70 to $50 (-28%) as rates rocketed higher. However, the <em>dividend
                            continued to be paid monthly and increased</em>. Investors who held or bought at $50 locked
                            in 7%+ yields.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">2019-2020: Rate Cuts (2.5% → 0%)</p>
                          <p className="text-slate-600 dark:text-slate-400">
                            O stock rallied from $55 to $65 (+18%) as rates fell. Lower rates made dividends more
                            attractive and reduced refinancing costs.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">2015-2018: Gradual Rate Increases</p>
                          <p className="text-slate-600 dark:text-slate-400">
                            O stock mostly traded sideways ($50-$60 range) but dividend growth continued at 4-5% annually.
                            Total returns were still solid at 8-10%/year from dividends alone.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Mitigating Factors for Realty Income</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Long-Duration Fixed-Rate Debt</h4>
                          <p className="text-sm mb-0">
                            ~90% of Realty Income's debt is fixed-rate with a weighted average maturity of 6.8 years.
                            This means rate increases don't immediately impact interest expense—they're locked in at lower
                            rates for years.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Rent Escalation Clauses</h4>
                          <p className="text-sm mb-0">
                            Most leases have 1-1.5% annual rent escalators built in. These provide modest inflation
                            protection and ensure rental income grows even in flat rate environments.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strong Balance Sheet = Cheap Capital</h4>
                          <p className="text-sm mb-0">
                            Even when rates are 5-6%, Realty Income's A- credit rating allows them to borrow at ~4-4.5%
                            (below market). This preserves acquisition economics better than peers with weaker ratings.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Focus on Total Return, Not Just Price</h4>
                          <p className="text-sm mb-0">
                            Even when O stock fell 28% in 2022, investors who held collected monthly dividends. By early
                            2026, the stock has recovered and those dividends compounded. Long-term total returns smooth
                            out short-term rate volatility.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm font-semibold mb-2">Investment Implications:</p>
                      <p className="text-sm mb-3">
                        Yes, rising interest rates will pressure Realty Income's stock price. However:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• The dividend is safe and will continue growing regardless of rate moves</li>
                        <li>• Rate-driven price drops create buying opportunities (higher yields)</li>
                        <li>• DRIP investors benefit from buying more shares at lower prices</li>
                        <li>• Over 10-20+ year periods, dividend growth overwhelms short-term rate volatility</li>
                      </ul>
                      <p className="text-sm mt-3 font-semibold">
                        If you're investing for income over 10+ years, interest rate sensitivity is a short-term
                        inconvenience, not a deal-breaker.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Pros and Cons */}
                <section id="pros-cons">
                  <h2>Pros and Cons Analysis</h2>
                  <p>
                    Let's objectively weigh the advantages and disadvantages of investing in Realty Income:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 text-green-600 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6" />
                          Pros (Why Buy)
                        </h3>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Unmatched Dividend Track Record:</strong> 121 consecutive monthly increases over 30 years—among the best in the entire stock market</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Monthly Dividend Payments:</strong> 12 paychecks per year for better cash flow management and faster compounding</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Attractive 5.5% Yield:</strong> Significantly higher than S&P 500 (~1.5%) and 10-year Treasury (~4.5%)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Recession-Resistant Tenants:</strong> Investment-grade companies in essential retail (drug stores, dollar stores, convenience)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Best-in-Class Balance Sheet:</strong> A- credit rating provides access to cheap capital and financial stability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Massive Scale:</strong> $48B market cap and 15,000+ properties create an economic moat and negotiating power</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Geographic Diversification:</strong> US (87%), UK (10%), Spain (3%) reduces single-market risk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Simple Business Model:</strong> Buy properties, lease to tenants, collect rent—easy to understand and analyze</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Proven Management:</strong> CEO Sumit Roy has led Realty Income since 2018 and executed the Spirit merger flawlessly</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 text-red-600 flex items-center gap-2">
                          <XCircle className="h-6 w-6" />
                          Cons (Why Not Buy)
                        </h3>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Interest Rate Sensitivity:</strong> Stock price falls when rates rise, which can be painful for short-term holders</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Limited Capital Appreciation:</strong> REITs typically grow slower than tech stocks; O averages 4-6% annual price growth</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Retail Exposure:</strong> 75% of portfolio is retail properties, which face e-commerce competition (though O focuses on e-commerce resistant formats)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Tax Inefficiency:</strong> REIT dividends are typically non-qualified and taxed as ordinary income (22-37%), not the favorable 15% dividend rate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Dividend Growth Slowdown:</strong> Recent increases have been 3-4% annually vs 5-7% historically as the company matures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Tenant Concentration:</strong> Top tenant Walgreens (4.1% of rent) faces challenges from Amazon Pharmacy and retail struggles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>No Quarterly Earnings Excitement:</strong> REITs are boring—don't expect explosive growth or viral news</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Inflation Lag:</strong> Rent escalators (1-1.5%) lag actual inflation, eroding real purchasing power of dividends during high-inflation periods</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">The Verdict:</h4>
                      <p className="text-sm">
                        Realty Income's pros significantly outweigh the cons for income-focused investors with 10+ year
                        time horizons. The interest rate sensitivity and slower growth are real concerns, but the 30-year
                        track record, monthly dividends, and dividend safety make this a core holding for dividend portfolios.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Investment Example */}
                <section id="investment-example">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-purple-600" />
                    Real Example: $100,000 Investment in Realty Income
                  </h2>
                  <p>
                    Let's walk through what a $100,000 investment in Realty Income would look like in practice:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Year 1 Breakdown (Assuming $60/share, 5.5% yield)</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <p className="font-bold mb-2">Initial Investment:</p>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Investment Amount</p>
                              <p className="font-bold text-lg">$100,000</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Share Price</p>
                              <p className="font-bold text-lg">$60.00</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Shares Purchased</p>
                              <p className="font-bold text-lg">1,666 shares</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Annual Dividend Rate</p>
                              <p className="font-bold text-lg">$3.30/share</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <p className="font-bold mb-3">Monthly Income Stream:</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Monthly Dividend per Share</span>
                              <span className="font-bold">$0.275</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Monthly Income (1,666 shares)</span>
                              <span className="font-bold text-green-600 text-lg">$458.15</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Annual Income</span>
                              <span className="font-bold text-green-600 text-lg">$5,498</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Effective Yield</span>
                              <span className="font-bold text-green-600 text-lg">5.50%</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-4 rounded-lg border-2 border-green-500">
                          <p className="font-bold mb-2 text-green-700 dark:text-green-400">What This Means Practically:</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ You receive <strong>$458 deposited into your account every single month</strong></li>
                            <li>✓ That's enough to cover a car payment, utilities, or groceries</li>
                            <li>✓ Payment dates are the 15th of each month (consistent and predictable)</li>
                            <li>✓ If you DRIP, you buy ~7.6 additional shares every month automatically</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>10-Year Projection with DRIP (Dividend Reinvestment)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Let's assume 4% annual dividend growth and DRIP reinvestment over 10 years:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                              <th className="p-2 text-left">Year</th>
                              <th className="p-2 text-right">Shares Owned</th>
                              <th className="p-2 text-right">Annual Dividend</th>
                              <th className="p-2 text-right">Portfolio Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="p-2">Year 1</td>
                              <td className="p-2 text-right">1,666</td>
                              <td className="p-2 text-right">$5,498</td>
                              <td className="p-2 text-right">$100,000</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2">Year 3</td>
                              <td className="p-2 text-right">1,826</td>
                              <td className="p-2 text-right">$6,525</td>
                              <td className="p-2 text-right">$115,000</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2">Year 5</td>
                              <td className="p-2 text-right">2,012</td>
                              <td className="p-2 text-right">$7,721</td>
                              <td className="p-2 text-right">$132,000</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2">Year 7</td>
                              <td className="p-2 text-right">2,225</td>
                              <td className="p-2 text-right">$9,118</td>
                              <td className="p-2 text-right">$151,000</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2 font-bold">Year 10</td>
                              <td className="p-2 text-right font-bold">2,544</td>
                              <td className="p-2 text-right font-bold text-green-600">$11,275</td>
                              <td className="p-2 text-right font-bold text-green-600">$178,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-lg">
                        <p className="font-bold text-sm mb-2">10-Year Results Summary:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Portfolio value grew from $100,000 → $178,000 (<strong>+78%</strong>)</li>
                          <li>• Annual dividend income increased from $5,498 → $11,275 (<strong>+105%</strong>)</li>
                          <li>• Now generating <strong>$939/month</strong> in dividend income (doubled!)</li>
                          <li>• Total return: <strong>~11.5% annually</strong> (6% price + 5.5% dividend)</li>
                        </ul>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        *Assumes 4% annual dividend growth, share price growth of 6% annually, and monthly DRIP reinvestment.
                        Past performance does not guarantee future results.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Calculator CTAs */}
                <section className="not-prose">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h2 className="text-3xl font-bold mb-4 text-white">Calculate Your Realty Income Returns</h2>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to project your dividend income and see how monthly compounding
                        accelerates your wealth over time.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator - Monthly Compounding
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <DollarSign className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <Calendar className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/yield-on-cost">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <Percent className="h-5 w-5" />
                            Yield on Cost Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Who Should Buy */}
                <section id="who-should-buy">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Who Should Buy Realty Income Stock?
                  </h2>
                  <p>
                    Realty Income isn't for everyone. Here's who should (and shouldn't) invest:
                  </p>

                  <h3>Ideal Investors for Realty Income:</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Income-Focused Retirees</h4>
                          <p className="text-sm mb-0">
                            If you need steady monthly cash flow to cover living expenses, Realty Income is perfect.
                            The monthly dividend aligns with monthly bills and provides inflation-adjusted income growth.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Growth Investors (10+ Year Horizon)</h4>
                          <p className="text-sm mb-0">
                            If you're building a dividend growth portfolio and can hold for a decade or more, Realty
                            Income's track record and safety make it a core position. Perfect for DRIP investors.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Conservative Risk-Averse Investors</h4>
                          <p className="text-sm mb-0">
                            If you want stock market exposure without the volatility of growth stocks, Realty Income's
                            stable cash flows and predictable business model are attractive. Less exciting but more
                            dependable than most stocks.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Roth IRA Investors</h4>
                          <p className="text-sm mb-0">
                            Since REIT dividends are taxed as ordinary income (high tax rate), Realty Income is ideal
                            for Roth IRAs where dividends grow 100% tax-free. This maximizes the value of that 5.5% yield.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Portfolio Diversifiers</h4>
                          <p className="text-sm mb-0">
                            If your portfolio is heavy in tech or growth stocks, adding Realty Income provides
                            real estate exposure and income diversification with low correlation to tech.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Who Should Avoid Realty Income:</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Growth Stock Enthusiasts</h4>
                          <p className="text-sm mb-0">
                            If you're chasing 50-100% annual returns from tech stocks or speculative plays, Realty
                            Income will bore you to death. It's a slow, steady wealth builder, not a rocket ship.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Short-Term Traders</h4>
                          <p className="text-sm mb-0">
                            Interest rate volatility makes O stock choppy over 1-2 year periods. If you need to sell
                            within 3-5 years, you could easily be underwater. This is a buy-and-hold-forever stock.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">High Tax Bracket Taxable Account Investors</h4>
                          <p className="text-sm mb-0">
                            If you're in the 32-37% tax bracket and investing in a taxable account, REIT dividends are
                            tax-inefficient. Use a Roth IRA or focus on qualified dividend stocks instead.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Inflation Hawks</h4>
                          <p className="text-sm mb-0">
                            If you're extremely concerned about high inflation eroding purchasing power, Realty Income's
                            1-1.5% rent escalators lag actual inflation. Better to own commodities, TIPS, or
                            inflation-linked assets.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm font-semibold mb-2">Bottom Line:</p>
                      <p className="text-sm">
                        Realty Income is a <strong>core holding for income investors</strong> who value safety,
                        predictability, and monthly cash flow over explosive growth. If you're 50+ or building a
                        dividend portfolio for retirement, this should be on your shortlist. If you're 25 and
                        chasing maximum growth, probably not the right fit.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Where to Buy Realty Income Stock</h2>
                  <p>
                    Ready to invest in Realty Income? These top-rated brokers offer commission-free stock trading,
                    automatic DRIP enrollment, and easy dividend reinvestment:
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* FAQ Schema */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Is Realty Income a good stock to buy right now (2026)?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        For income-focused investors with 10+ year time horizons, yes. Realty Income offers a 5.5%
                        yield with monthly payments and a 30-year track record of dividend increases. However, if
                        interest rates rise significantly, the stock price could face headwinds in the short term.
                        Best to dollar-cost average into a position over 6-12 months rather than buying all at once.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Why does Realty Income pay dividends monthly instead of quarterly?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Realty Income pays monthly because their rental income arrives monthly from tenants. Rather than
                        accumulate cash for three months and pay quarterly, they simply pass rental income directly to
                        shareholders each month. This aligns with their "Monthly Dividend Company" branding and provides
                        smoother cash flow for investors. It's a competitive advantage that attracts income-focused investors.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Is the Realty Income dividend safe from cuts?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Yes, the dividend is extremely safe. With a 76% AFFO payout ratio, 98.7% occupancy, investment-grade
                        tenants, and a 30-year track record of never cutting (even during 2008 and 2020), Realty Income's
                        dividend has significant safety margin. AFFO would need to decline 24%+ before the dividend would be
                        at risk, which is highly unlikely barring a once-in-a-century economic collapse.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How is Realty Income taxed?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        REIT dividends like Realty Income are generally taxed as ordinary income (not qualified dividends),
                        which means rates of 10-37% depending on your tax bracket. This makes REITs tax-inefficient in taxable
                        accounts. The optimal strategy is to hold Realty Income in a Roth IRA where all dividends are 100%
                        tax-free, maximizing the value of that 5.5% yield.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What happened with the Spirit Realty merger?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Realty Income acquired Spirit Realty Capital in January 2024 for $9.3 billion, adding 2,000+
                        properties to their portfolio. The merger has been accretive to AFFO per share (8-10% boost), added
                        gaming property exposure, and strengthened Realty Income's scale and competitive position. Integration
                        has proceeded smoothly with cost synergies exceeding targets.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How does Realty Income compare to other REITs like NNN or ADC?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Realty Income is the clear market leader with $48B market cap (6x larger than NNN), 30-year dividend
                        track record (vs. 10-15 years for most competitors), and best-in-class A- credit rating. While NNN
                        and Agree Realty (ADC) are also quality net lease REITs, Realty Income's scale, monthly dividends,
                        and track record make it the gold standard in the sector.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What is Realty Income's biggest risk?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Interest rate risk is the biggest concern. When the Federal Reserve raises rates, REIT stock prices
                        typically fall as bonds become more attractive and borrowing costs rise. Additionally, 75% of Realty
                        Income's properties are retail (though mostly recession-resistant formats), which faces long-term
                        e-commerce competition. However, the 30-year track record suggests management navigates these risks
                        well over the long term.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Should I use DRIP (dividend reinvestment) with Realty Income?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Yes, DRIP is ideal for Realty Income. Monthly dividend reinvestment accelerates compounding—you're
                        buying more shares 12 times per year instead of 4, which smooths out volatility through dollar-cost
                        averaging. Over 20-30 years, this can significantly boost total returns. Enable DRIP through your
                        broker or Realty Income's direct stock purchase plan (computershare.com/investor).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How much Realty Income do I need to generate $1,000/month?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        At a 5.5% yield, you'd need approximately $218,000 invested in Realty Income to generate $1,000 per
                        month ($12,000 annually). At current prices (~$60/share), that's about 3,633 shares. Use our DRIP
                        calculator to see how long it would take to reach this goal through monthly contributions and
                        dividend reinvestment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What are Realty Income's main competitors?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Realty Income's main net lease REIT competitors are NNN REIT (NNN), Agree Realty (ADC), STORE
                        Capital (STOR), and VICI Properties (VICI - gaming-focused). Among these, Realty Income is the
                        largest by market cap and has the longest dividend growth track record. All are quality companies,
                        but Realty Income's scale and monthly dividend make it the category leader.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/best-monthly-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Monthly Dividend Stocks 2026: 12 Paychecks Per Year
                    </Link>
                    <Link href="/blog/best-high-yield-reits-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best High-Yield REITs 2026: Top Real Estate Income Stocks
                    </Link>
                    <Link href="/blog/best-account-for-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Account for Dividend Stocks: Roth IRA vs Taxable vs 401k
                    </Link>
                    <Link href="/blog/dividend-aristocrats-vs-reit-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Aristocrats vs REIT Dividends: Which Is Better?
                    </Link>
                    <Link href="/blog/how-to-build-dividend-portfolio-from-scratch" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a Dividend Portfolio from Scratch in 2026
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
