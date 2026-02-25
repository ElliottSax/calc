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
  BarChart3,
  PieChart,
  Calendar,
  Shield,
  Zap,
  TrendingDown
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Portfolio Allocation by Age: 20s to 70s Guide (2026)',
  description: 'Complete age-based dividend allocation guide. Learn optimal portfolio splits for growth vs income dividends from your 20s through retirement. Expert models with real percentages.',
  keywords: 'dividend allocation by age, age-based dividend portfolio, dividend investing by age, retirement dividend strategy, dividend growth vs income, portfolio allocation retirement',
  openGraph: {
    title: 'Dividend Portfolio Allocation by Age: The Complete Lifecycle Guide',
    description: 'Discover the exact portfolio allocations for dividend investors in their 20s, 30s, 40s, 50s, 60s, and 70s. Science-backed models for every life stage.',
    type: 'article',
  }
}

export default function DividendAllocationByAgePage() {
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
                <Badge className="mb-4">Age-Based Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Portfolio Allocation by Age: Your Complete 20s to 70s Guide
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The definitive lifecycle guide to dividend investing. Discover the exact allocation models
                  for growth vs income dividends at every age, from building wealth in your 20s to living
                  off dividends in retirement.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
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
                      <span><strong>20s-30s:</strong> 90-100% growth dividends (low yield, high growth) - maximize compound growth</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>40s-50s:</strong> 60-70% growth, 30-40% income - transition begins 10-15 years before retirement</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>60s-70s:</strong> 30-50% growth, 50-70% income - live off dividends while preserving capital</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Golden Rule:</strong> Shift 2-3% from growth to income per year starting at age 45-50</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#growth-vs-income" className="text-blue-600 hover:underline">Growth vs Income Dividends</a></li>
                    <li><a href="#20s" className="text-blue-600 hover:underline">Your 20s: 100% Growth</a></li>
                    <li><a href="#30s" className="text-blue-600 hover:underline">Your 30s: 90% Growth</a></li>
                    <li><a href="#40s" className="text-blue-600 hover:underline">Your 40s: 70% Growth</a></li>
                    <li><a href="#50s" className="text-blue-600 hover:underline">Your 50s: 50% Balanced</a></li>
                    <li><a href="#60s" className="text-blue-600 hover:underline">Your 60s: 35% Growth</a></li>
                    <li><a href="#70s" className="text-blue-600 hover:underline">Your 70s+: 25% Growth</a></li>
                    <li><a href="#transition-strategy" className="text-blue-600 hover:underline">Transition Strategy</a></li>
                    <li><a href="#risk-tolerance" className="text-blue-600 hover:underline">Risk by Age</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Growth vs Income */}
                <section id="growth-vs-income">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Understanding Growth vs Income Dividends
                  </h2>
                  <p>
                    Before we dive into age-specific allocations, you need to understand the two types of
                    dividend stocks and why they matter at different life stages.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-6 w-6 text-green-600" />
                          Growth Dividends
                        </h3>
                        <p className="text-sm mb-4">Companies that grow dividends 8-15% annually but have lower current yields.</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Yield:</strong> 1.5-3.5%</p>
                          <p><strong>Growth Rate:</strong> 8-15% per year</p>
                          <p><strong>Examples:</strong> Microsoft (0.8% yield, 10% growth), Visa (0.7%, 15% growth), Costco (0.6%, 12% growth)</p>
                          <p><strong>Best For:</strong> Ages 20-50 - maximize long-term compound growth</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-blue-600" />
                          Income Dividends
                        </h3>
                        <p className="text-sm mb-4">Companies with high current yields but slower dividend growth.</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Yield:</strong> 4-8%</p>
                          <p><strong>Growth Rate:</strong> 2-5% per year</p>
                          <p><strong>Examples:</strong> AT&T (6.5% yield, 2% growth), Realty Income (5.4%, 3% growth), Altria (8.2%, 4% growth)</p>
                          <p><strong>Best For:</strong> Ages 55+ - maximize current income for living expenses</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>The Math Behind the Strategy</h3>
                  <p>
                    A $10,000 investment in a growth dividend stock (2% yield, 10% growth) will produce
                    $200 in year 1 but $1,289 in year 20. The same $10,000 in an income stock (6% yield,
                    2% growth) produces $600 in year 1 but only $891 in year 20.
                  </p>
                  <p>
                    <strong>The key insight:</strong> Growth dividends compound faster but take 10-15 years
                    to catch up to income dividends. That's why young investors focus on growth, while
                    retirees need income now.
                  </p>
                </section>

                {/* 20s Section */}
                <section id="20s">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Your 20s: Maximum Growth Mode (100% Growth Dividends)
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Recommended Allocation (Ages 22-29)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">100% Growth Dividends</span>
                            <Badge>Maximum Compound Growth</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-green-600 h-4 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 1.5-3.0% | Dividend growth: 10-15%</p>
                        </div>
                        <div className="pt-4 border-t space-y-2">
                          <p className="font-semibold">Example $10,000 Portfolio:</p>
                          <ul className="text-sm space-y-1">
                            <li>$3,000 - Dividend Growth ETFs (SCHD, DGRO, VIG)</li>
                            <li>$7,000 - Individual growth dividend stocks (Microsoft, Visa, UnitedHealth)</li>
                          </ul>
                          <p className="text-sm font-bold mt-3">Expected Results: $250/year income today → $1,600/year in 20 years</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why 100% Growth in Your 20s?</h3>
                  <ul>
                    <li><strong>Time is Your Superpower:</strong> 40+ years until retirement means dividend growth compounds exponentially</li>
                    <li><strong>You Don't Need Income Yet:</strong> You're earning a salary - focus on future income, not current cash flow</li>
                    <li><strong>Recover from Volatility:</strong> Decades to bounce back from market crashes</li>
                    <li><strong>Tax Efficiency:</strong> Low yields mean minimal taxes while you're in peak earning years later</li>
                  </ul>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        Best Stock Types for Your 20s
                      </h4>
                      <div className="grid gap-3 text-sm">
                        <div>
                          <p className="font-semibold">Tech Dividend Growers (40%)</p>
                          <p className="text-slate-600 dark:text-slate-400">Microsoft, Apple, Visa, Mastercard - low yield, explosive growth</p>
                        </div>
                        <div>
                          <p className="font-semibold">Healthcare Dividend Aristocrats (30%)</p>
                          <p className="text-slate-600 dark:text-slate-400">Johnson & Johnson, UnitedHealth, AbbVie - stable, consistent growth</p>
                        </div>
                        <div>
                          <p className="font-semibold">Consumer Staples (20%)</p>
                          <p className="text-slate-600 dark:text-slate-400">Procter & Gamble, Costco, Walmart - recession-resistant</p>
                        </div>
                        <div>
                          <p className="font-semibold">Dividend Growth ETFs (10%)</p>
                          <p className="text-slate-600 dark:text-slate-400">SCHD, DGRO, VIG - diversification foundation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Real Example: $500/Month from Age 25-65</h3>
                  <p>
                    Invest $500/month in growth dividend stocks from age 25-65 (40 years) at 10% total
                    return with 2% starting yield growing 10% annually:
                  </p>
                  <ul>
                    <li><strong>Total Invested:</strong> $240,000</li>
                    <li><strong>Portfolio Value at 65:</strong> $3,162,039</li>
                    <li><strong>Annual Dividend Income:</strong> $163,321 (51.6% yield on cost)</li>
                    <li><strong>Monthly Passive Income:</strong> $13,610</li>
                  </ul>
                  <p className="text-sm italic">
                    That's living off dividends alone without touching principal. This is why growth
                    dividends in your 20s are so powerful.
                  </p>
                </section>

                {/* 30s Section */}
                <section id="30s">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    Your 30s: Stay Aggressive (90% Growth, 10% Income)
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Recommended Allocation (Ages 30-39)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">90% Growth Dividends</span>
                            <Badge>Core Holdings</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-green-600 h-4 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 2.0-3.5% | Dividend growth: 8-12%</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">10% Income Dividends</span>
                            <Badge variant="secondary">Diversification</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 4.5-6.5% | Dividend growth: 3-5%</p>
                        </div>

                        <div className="pt-4 border-t space-y-2">
                          <p className="font-semibold">Example $50,000 Portfolio:</p>
                          <ul className="text-sm space-y-1">
                            <li>$45,000 - Growth (SCHD ETF, Microsoft, Visa, Home Depot, UnitedHealth)</li>
                            <li>$5,000 - Income (Realty Income, AGNC Investment Corp)</li>
                          </ul>
                          <p className="text-sm font-bold mt-3">Blended Yield: ~3.2% | Growth Rate: ~9.5%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why Add 10% Income in Your 30s?</h3>
                  <ul>
                    <li><strong>Diversification:</strong> REITs and utilities behave differently than tech/healthcare</li>
                    <li><strong>Stability Practice:</strong> Get comfortable with income stocks before you need them</li>
                    <li><strong>Psychological Comfort:</strong> Higher yield provides tangible cash flow during market volatility</li>
                    <li><strong>Still 30 Years to Compound:</strong> 90% in growth still dominates your returns</li>
                  </ul>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Common Mistake to Avoid in Your 30s
                      </h4>
                      <p className="text-sm mb-2">
                        <strong>Don't chase high yields too early!</strong> Many 30-somethings get excited about
                        8-10% yields from REITs, BDCs, or high-risk dividend stocks. This sacrifices long-term
                        growth for short-term income you don't even need yet.
                      </p>
                      <p className="text-sm">
                        Example: $50,000 in 10% yield stocks will produce $5,000/year today but may only grow
                        to $8,100/year in 20 years. The same $50,000 in 2% yield growth stocks produces $1,000
                        today but grows to $6,727/year in 20 years - and the stock price appreciation is far higher.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* 40s Section */}
                <section id="40s">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Your 40s: Begin the Transition (70% Growth, 30% Income)
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Recommended Allocation (Ages 40-49)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">70% Growth Dividends</span>
                            <Badge>Still Growing</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-green-600 h-4 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 2.5-4.0% | Dividend growth: 7-10%</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">30% Income Dividends</span>
                            <Badge variant="secondary">Income Building</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 5.0-7.0% | Dividend growth: 3-5%</p>
                        </div>

                        <div className="pt-4 border-t space-y-2">
                          <p className="font-semibold">Example $200,000 Portfolio:</p>
                          <ul className="text-sm space-y-1">
                            <li>$140,000 - Growth (SCHD, VIG, JNJ, MSFT, V, HD, LOW)</li>
                            <li>$60,000 - Income (O, VZ, MO, AGNC, high-yield ETFs)</li>
                          </ul>
                          <p className="text-sm font-bold mt-3">Blended Yield: ~4.1% = $8,200/year income | Growth Rate: ~7.3%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why 30% Income in Your 40s?</h3>
                  <ul>
                    <li><strong>15-25 Years to Retirement:</strong> Start building the income engine you'll need</li>
                    <li><strong>Peak Earning Years:</strong> Can handle lower growth as contributions increase</li>
                    <li><strong>Volatility Buffer:</strong> Higher yields provide stability if markets crash 10 years before retirement</li>
                    <li><strong>Gradual Transition:</strong> Shifting 2-3% per year prevents sudden portfolio changes</li>
                  </ul>

                  <h3>The 40s Decision Point: Early Retirement vs Traditional</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-2 text-green-600">Traditional Retirement (Age 65)</h4>
                          <p className="text-sm mb-3">You have 20-25 years of compounding left.</p>
                          <p className="text-sm"><strong>Allocation:</strong> 70% growth / 30% income</p>
                          <p className="text-sm"><strong>Focus:</strong> Maximize total return, gradual shift</p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-blue-600">Early Retirement (Age 50-55)</h4>
                          <p className="text-sm mb-3">You have 10-15 years to build income stream.</p>
                          <p className="text-sm"><strong>Allocation:</strong> 50% growth / 50% income</p>
                          <p className="text-sm"><strong>Focus:</strong> Accelerate income, accept lower growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* 50s Section */}
                <section id="50s">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Your 50s: The Balanced Decade (50% Growth, 50% Income)
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Recommended Allocation (Ages 50-59)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">50% Growth Dividends</span>
                            <Badge>Balanced</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-green-600 h-4 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 3.0-4.5% | Dividend growth: 6-9%</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">50% Income Dividends</span>
                            <Badge variant="secondary">Income Focus</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 5.5-8.0% | Dividend growth: 2-4%</p>
                        </div>

                        <div className="pt-4 border-t space-y-2">
                          <p className="font-semibold">Example $500,000 Portfolio:</p>
                          <ul className="text-sm space-y-1">
                            <li>$250,000 - Growth (SCHD, VYM, JNJ, PG, MSFT, V, LMT, NEE)</li>
                            <li>$250,000 - Income (O, VZ, T, MO, ENB, EPD, MAIN, high-yield ETFs)</li>
                          </ul>
                          <p className="text-sm font-bold mt-3">Blended Yield: ~5.4% = $27,000/year income | Growth Rate: ~5.5%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why 50/50 in Your 50s?</h3>
                  <ul>
                    <li><strong>5-15 Years to Retirement:</strong> Income stream needs to be nearly ready</li>
                    <li><strong>Volatility Protection:</strong> 50% high-yield cushions against late-career market crashes</li>
                    <li><strong>Test Run for Retirement:</strong> See if your income covers 50-75% of expenses</li>
                    <li><strong>Still Growing:</strong> 50% growth dividends continue compounding for another 10-30 years</li>
                  </ul>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        The "Dividend Paycheck" Goal in Your 50s
                      </h4>
                      <p className="text-sm mb-3">
                        By the end of your 50s, aim for your dividend income to cover 50-75% of your living
                        expenses. This means if you spend $60,000/year, target $30,000-45,000 in annual dividends.
                      </p>
                      <div className="text-sm space-y-2">
                        <p><strong>Required Portfolio Size (at 5.4% yield):</strong></p>
                        <ul className="ml-4 space-y-1">
                          <li>$30,000/year income = $555,556 portfolio</li>
                          <li>$45,000/year income = $833,333 portfolio</li>
                          <li>$60,000/year income = $1,111,111 portfolio</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Managing Sequence of Returns Risk</h3>
                  <p>
                    Your 50s are the most dangerous decade for market crashes. A 40% drop at age 55 when you
                    have $800,000 can devastate retirement plans. Your 50/50 allocation helps two ways:
                  </p>
                  <ul>
                    <li><strong>Income Stability:</strong> High-yield stocks often hold up better (or drop less) during crashes</li>
                    <li><strong>Dividend Continuity:</strong> Even if stock prices drop 30%, dividends typically drop only 5-15%</li>
                    <li><strong>No Forced Selling:</strong> Living off dividends means you never sell stocks at the bottom</li>
                  </ul>
                </section>

                {/* 60s Section */}
                <section id="60s">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Your 60s: Income Takes Priority (35% Growth, 65% Income)
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Recommended Allocation (Ages 60-69)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">35% Growth Dividends</span>
                            <Badge>Long-term Growth</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-green-600 h-4 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 3.5-5.0% | Dividend growth: 5-8%</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">65% Income Dividends</span>
                            <Badge variant="secondary">Living Expenses</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 6.0-9.0% | Dividend growth: 2-3%</p>
                        </div>

                        <div className="pt-4 border-t space-y-2">
                          <p className="font-semibold">Example $1,000,000 Portfolio:</p>
                          <ul className="text-sm space-y-1">
                            <li>$350,000 - Growth (SCHD, VYM, JNJ, PG, PEP, NEE, LMT)</li>
                            <li>$650,000 - Income (O, STAG, VZ, T, ENB, EPD, MAIN, ARCC, high-yield ETFs)</li>
                          </ul>
                          <p className="text-sm font-bold mt-3">Blended Yield: ~6.4% = $64,000/year income | Growth Rate: ~3.5%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why 65% Income in Your 60s?</h3>
                  <ul>
                    <li><strong>Living Off Dividends:</strong> Your portfolio must generate enough income without selling shares</li>
                    <li><strong>Social Security Bridge:</strong> Dividends fill the gap from early retirement (62) until full benefits (67-70)</li>
                    <li><strong>Preserve Capital:</strong> High yields mean you rarely (or never) touch principal</li>
                    <li><strong>Healthcare Costs:</strong> Medicare doesn't start until 65 - need extra cash flow</li>
                  </ul>

                  <h3>Why Keep 35% in Growth?</h3>
                  <p>
                    You're not done! At 65, you likely have 20-30 years of life ahead. Keeping 35% in growth
                    dividends ensures your income keeps pace with inflation over decades.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Example: Inflation Protection from Growth Dividends</h4>
                      <p className="text-sm mb-3">
                        Assume $1,000,000 portfolio at age 65 producing $64,000/year (6.4% yield).
                      </p>
                      <div className="text-sm space-y-2">
                        <div>
                          <p className="font-semibold">100% Income (7% yield, 2% growth):</p>
                          <ul className="ml-4 space-y-1">
                            <li>Age 65: $70,000/year income</li>
                            <li>Age 75: $85,348/year income</li>
                            <li>Age 85: $104,030/year income (49% increase)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold">35% Growth / 65% Income (6.4% yield, 3.5% blended growth):</p>
                          <ul className="ml-4 space-y-1">
                            <li>Age 65: $64,000/year income</li>
                            <li>Age 75: $90,237/year income</li>
                            <li>Age 85: $127,237/year income (99% increase)</li>
                          </ul>
                        </div>
                        <p className="font-bold text-green-600">Result: 35% growth allocation doubles your income growth over 20 years.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Withdrawal Strategy for Your 60s</h3>
                  <p>
                    Most 60-somethings follow a "dividends-first" approach:
                  </p>
                  <ol>
                    <li><strong>Live off dividends:</strong> Use the $64,000/year in dividend income first</li>
                    <li><strong>Supplement if needed:</strong> Sell shares only if dividends don't cover expenses</li>
                    <li><strong>Reinvest excess:</strong> If dividends exceed expenses, DRIP the surplus</li>
                    <li><strong>Touch growth last:</strong> Only sell growth holdings in emergencies</li>
                  </ol>
                </section>

                {/* 70s+ Section */}
                <section id="70s">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    Your 70s and Beyond: Capital Preservation (25% Growth, 75% Income)
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Recommended Allocation (Ages 70+)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">25% Growth Dividends</span>
                            <Badge>Inflation Hedge</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-green-600 h-4 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 4.0-5.5% | Dividend growth: 5-7%</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">75% Income Dividends</span>
                            <Badge variant="secondary">Maximum Income</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <p className="text-sm mt-2">Target yield: 6.5-10.0% | Dividend growth: 1-2%</p>
                        </div>

                        <div className="pt-4 border-t space-y-2">
                          <p className="font-semibold">Example $800,000 Portfolio (after RMDs, spending):</p>
                          <ul className="text-sm space-y-1">
                            <li>$200,000 - Growth (SCHD, JNJ, PG, dividend aristocrats)</li>
                            <li>$600,000 - Income (O, VZ, T, MO, ENB, MAIN, ARCC, PDI, high-yield CEFs)</li>
                          </ul>
                          <p className="text-sm font-bold mt-3">Blended Yield: ~7.1% = $56,800/year income | Growth Rate: ~2.3%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why 75% Income in Your 70s+?</h3>
                  <ul>
                    <li><strong>No Recovery Time:</strong> A market crash at 75 doesn't allow 10 years to recover</li>
                    <li><strong>RMDs Start at 73:</strong> Required Minimum Distributions from IRAs force sales anyway</li>
                    <li><strong>Healthcare Costs Rise:</strong> Medical expenses increase dramatically with age</li>
                    <li><strong>Simplicity:</strong> Easier to manage 10-15 high-yield stocks than 30+ positions</li>
                  </ul>

                  <h3>Why Keep 25% Growth?</h3>
                  <p>
                    At 70, you could live another 15-25 years. Inflation will cut your purchasing power in half
                    without dividend growth. That 25% in growth dividends is your longevity insurance.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Estate Planning Consideration
                      </h4>
                      <p className="text-sm mb-2">
                        If you plan to leave wealth to heirs, keep that portion in growth dividends. Your kids/grandkids
                        have decades to compound - don't saddle them with low-growth income stocks.
                      </p>
                      <p className="text-sm">
                        Example: $200,000 earmarked for grandchildren should stay in SCHD, JNJ, MSFT - not 8% yield
                        stocks that won't grow for the next 40 years.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Advanced Strategies for 70s+</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">1. Closed-End Funds (CEFs) for Enhanced Yield</h4>
                      <p className="text-sm">
                        CEFs can yield 8-12% through leverage and option strategies. Suitable for 10-20% of income
                        allocation. Examples: PDI (PIMCO Dynamic Income), UTF (Cohen & Steers Infrastructure).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">2. Monthly Dividend Stocks</h4>
                      <p className="text-sm">
                        Switch from quarterly payers to monthly for smoother cash flow: Realty Income (O), STAG
                        Industrial (STAG), Main Street Capital (MAIN).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">3. Avoid Dividend Traps</h4>
                      <p className="text-sm">
                        At 70+, you can't afford dividend cuts. Avoid yields above 10% (often unsustainable),
                        declining businesses (malls, newspapers), and stocks with payout ratios above 90%.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Transition Strategy */}
                <section id="transition-strategy">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-indigo-600" />
                    The Gradual Transition Strategy
                  </h2>
                  <p>
                    The biggest mistake dividend investors make is shifting too quickly from growth to income.
                    A sudden change creates tax events, disrupts compounding, and often happens at the wrong time.
                  </p>

                  <h3>The 2-3% Per Year Rule</h3>
                  <p>
                    Starting at age 45-50, shift 2-3% of your portfolio from growth to income dividends annually.
                    This creates a smooth 20-year transition from 90% growth to 30% growth by retirement.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-4">Example 20-Year Transition (Age 45-65)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Age</th>
                              <th className="border p-2 text-center">Growth %</th>
                              <th className="border p-2 text-center">Income %</th>
                              <th className="border p-2 text-center">Annual Shift</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">45</td>
                              <td className="border p-2 text-center">90%</td>
                              <td className="border p-2 text-center">10%</td>
                              <td className="border p-2 text-center">-</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">50</td>
                              <td className="border p-2 text-center">75%</td>
                              <td className="border p-2 text-center">25%</td>
                              <td className="border p-2 text-center">-3% per year</td>
                            </tr>
                            <tr>
                              <td className="border p-2">55</td>
                              <td className="border p-2 text-center">60%</td>
                              <td className="border p-2 text-center">40%</td>
                              <td className="border p-2 text-center">-3% per year</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">60</td>
                              <td className="border p-2 text-center">45%</td>
                              <td className="border p-2 text-center">55%</td>
                              <td className="border p-2 text-center">-3% per year</td>
                            </tr>
                            <tr>
                              <td className="border p-2 font-bold">65 (Retirement)</td>
                              <td className="border p-2 text-center font-bold">30%</td>
                              <td className="border p-2 text-center font-bold">70%</td>
                              <td className="border p-2 text-center">-3% per year</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Execute the Shift</h3>
                  <ol>
                    <li><strong>Use New Contributions:</strong> Direct new money to income stocks first (no tax impact)</li>
                    <li><strong>Harvest Gains Strategically:</strong> Sell growth winners when you're in low tax bracket years</li>
                    <li><strong>Don't Reinvest Growth Dividends:</strong> Let growth dividends accumulate as cash, use to buy income stocks</li>
                    <li><strong>Rebalance Annually:</strong> Once per year, typically in December for tax planning</li>
                  </ol>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Tax-Efficient Transition Example
                      </h4>
                      <p className="text-sm mb-3">
                        Age 52 with $300,000 portfolio (currently 80% growth, 20% income). Goal: Shift to 70% growth, 30% income by age 53.
                      </p>
                      <div className="text-sm space-y-2">
                        <p><strong>Current:</strong> $240,000 growth, $60,000 income</p>
                        <p><strong>Target:</strong> $210,000 growth, $90,000 income (need to move $30,000)</p>
                        <p className="font-semibold mt-3">Tax-Smart Approach:</p>
                        <ol className="ml-4 space-y-1">
                          <li>1. Contribute $12,000 new money → all to income stocks</li>
                          <li>2. Growth dividends pay $6,000 → don't reinvest, buy income stocks</li>
                          <li>3. Sell $12,000 of growth stocks with lowest gains → buy income stocks</li>
                          <li>4. Result: Shifted $30,000 with minimal tax impact</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Risk Tolerance */}
                <section id="risk-tolerance">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-600" />
                    Risk Tolerance by Age: When to Shift
                  </h2>
                  <p>
                    Your risk tolerance isn't just about psychology - it's about math and time. Here's how
                    risk capacity changes with age and how it impacts your dividend allocation.
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Age Range</th>
                          <th className="border p-3 text-left">Risk Capacity</th>
                          <th className="border p-3 text-left">Primary Risk</th>
                          <th className="border p-3 text-left">Allocation Response</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">20s-30s</td>
                          <td className="border p-3">Very High</td>
                          <td className="border p-3">Missing compound growth</td>
                          <td className="border p-3">90-100% growth dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">40s</td>
                          <td className="border p-3">High to Moderate</td>
                          <td className="border p-3">Market crash 10-15 years before retirement</td>
                          <td className="border p-3">70% growth, 30% income buffer</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">50s</td>
                          <td className="border p-3">Moderate</td>
                          <td className="border p-3">Sequence of returns risk</td>
                          <td className="border p-3">50/50 balance</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">60s</td>
                          <td className="border p-3">Low to Moderate</td>
                          <td className="border p-3">Running out of money</td>
                          <td className="border p-3">35% growth, 65% income</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">70s+</td>
                          <td className="border p-3">Low</td>
                          <td className="border p-3">Inflation destroying purchasing power</td>
                          <td className="border p-3">25% growth, 75% income</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Special Situations That Modify Allocations</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">You Have a Pension or Large Inheritance Coming</h4>
                        <p className="text-sm">
                          <strong>Impact:</strong> Can stay more aggressive longer since pension covers baseline income.<br/>
                          <strong>Adjustment:</strong> Keep 10-20% more in growth dividends at all ages.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">You're Self-Employed or Business Owner</h4>
                        <p className="text-sm">
                          <strong>Impact:</strong> Income volatility is higher, need more stability.<br/>
                          <strong>Adjustment:</strong> Shift to income dividends 5-10 years earlier than employees.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">You Retired Early (Before 60)</h4>
                        <p className="text-sm">
                          <strong>Impact:</strong> Need income now but also 30-40 years of growth ahead.<br/>
                          <strong>Adjustment:</strong> Use "bucket strategy" - 3-5 years expenses in income stocks, rest in growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">You Have High Healthcare Costs</h4>
                        <p className="text-sm">
                          <strong>Impact:</strong> Need reliable income to cover fixed medical expenses.<br/>
                          <strong>Adjustment:</strong> Add 10-15% more to income allocation, focus on monthly payers.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Model Your Age-Based Dividend Strategy</h3>
                      <p className="mb-6 text-blue-100">
                        Use our calculators to project your dividend income at different ages and test various
                        allocation strategies for your specific situation.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Quick Reference Guide */}
                <section>
                  <h2>Quick Reference: Allocation Summary by Age</h2>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="space-y-4 text-sm">
                        <div className="grid grid-cols-3 gap-3 pb-2 border-b font-bold">
                          <div>Age</div>
                          <div>Growth %</div>
                          <div>Income %</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div>20-29</div>
                          <div className="text-green-600 font-bold">100%</div>
                          <div>0%</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 bg-slate-100 dark:bg-slate-800 -mx-6 px-6 py-2">
                          <div>30-39</div>
                          <div className="text-green-600 font-bold">90%</div>
                          <div className="text-blue-600 font-bold">10%</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div>40-49</div>
                          <div className="text-green-600 font-bold">70%</div>
                          <div className="text-blue-600 font-bold">30%</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 bg-slate-100 dark:bg-slate-800 -mx-6 px-6 py-2">
                          <div>50-59</div>
                          <div className="text-green-600 font-bold">50%</div>
                          <div className="text-blue-600 font-bold">50%</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div>60-69</div>
                          <div className="text-green-600 font-bold">35%</div>
                          <div className="text-blue-600 font-bold">65%</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 bg-slate-100 dark:bg-slate-800 -mx-6 px-6 py-2">
                          <div>70+</div>
                          <div className="text-green-600 font-bold">25%</div>
                          <div className="text-blue-600 font-bold">75%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Age-Based Dividend Investing</h2>
                  <p>
                    Whether you're in your 20s building a growth portfolio or 60s living off income, you need
                    a brokerage that supports dividend reinvestment, fractional shares, and low fees.
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Which Strategy Wins?
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/blog/retirement-dividend-income-strategy" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Live Off Dividends in Retirement
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
