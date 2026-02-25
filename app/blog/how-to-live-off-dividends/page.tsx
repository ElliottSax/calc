import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calculator,
  PieChart,
  Shield,
  Zap,
  TrendingDown,
  BarChart3,
  Wallet,
  Calendar,
  CircleDollarSign
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Live Off Dividends: Complete Retirement Income Guide 2026',
  description: 'Step-by-step guide to living off dividend income in retirement. Learn how much you need, portfolio strategies, tax optimization, and withdrawal tactics. Real examples included.',
  keywords: 'live off dividends, dividend retirement income, retire on dividends, dividend portfolio retirement, passive income retirement, how much to retire on dividends',
  openGraph: {
    title: 'How to Live Off Dividends: The Complete Retirement Income Blueprint',
    description: 'Calculate exactly how much you need to retire on dividend income. Real portfolio examples, tax strategies, and actionable steps.',
    type: 'article',
  }
}

export default function HowToLiveOffDividendsPage() {
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
                <Badge className="mb-4">Retirement Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Live Off Dividends: Your Complete Retirement Income Guide
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The definitive blueprint for retiring on dividend income. Learn exactly how much you need,
                  which portfolio strategy to use, tax optimization tactics, and withdrawal strategies that make
                  your money last forever.
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
                      <span><strong>How Much You Need:</strong> 25-30x your desired annual income. For $50K/year, need $1.25M-$1.5M invested at 3.5-4% yield</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Portfolio:</strong> 60% dividend growth stocks + 30% dividend ETFs + 10% high-yield REITs for 3.5-4.5% blended yield</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Tax Strategy:</strong> Qualified dividends taxed at 0-20% (vs 22-37% ordinary income). Max out Roth IRAs first for tax-free income</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Success Factor:</strong> Dividend growth beats high yield. Target 8-12% annual dividend increases to outpace inflation</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#can-you-live" className="text-blue-600 hover:underline">Can You Really Live Off Dividends?</a></li>
                    <li><a href="#how-much-needed" className="text-blue-600 hover:underline">How Much Money Do You Need?</a></li>
                    <li><a href="#portfolio-strategies" className="text-blue-600 hover:underline">Portfolio Strategies</a></li>
                    <li><a href="#step-by-step" className="text-blue-600 hover:underline">Step-by-Step Plan</a></li>
                    <li><a href="#tax-strategies" className="text-blue-600 hover:underline">Tax Optimization</a></li>
                    <li><a href="#withdrawal-tactics" className="text-blue-600 hover:underline">Withdrawal Strategies</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks & How to Mitigate</a></li>
                    <li><a href="#real-examples" className="text-blue-600 hover:underline">Real Portfolio Examples</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Can You Live Off Dividends */}
                <section id="can-you-live">
                  <h2 className="flex items-center gap-2">
                    <CircleDollarSign className="h-7 w-7 text-blue-600" />
                    Can You Really Live Off Dividends?
                  </h2>
                  <p>
                    Yes—thousands of retirees successfully live off dividend income. But it requires careful planning,
                    realistic expectations, and a disciplined approach. Living off dividends means your investment portfolio
                    generates enough cash payments to cover your living expenses without selling shares.
                  </p>

                  <h3>Why Dividend Income Works for Retirement</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Predictable Cash Flow</h4>
                          <p className="text-sm mb-0">Companies pay dividends quarterly like clockwork. You know exactly when and how much income you'll receive.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Need to Sell Shares</h4>
                          <p className="text-sm mb-0">You never have to time the market or sell during downturns. Your shares keep working for you forever.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Inflation Protection</h4>
                          <p className="text-sm mb-0">Quality dividend stocks increase payouts 5-10% annually, helping you keep pace with rising costs.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Tax Advantages</h4>
                          <p className="text-sm mb-0">Qualified dividends taxed at 0-20% vs ordinary income at 22-37%. Huge savings for retirees.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Portfolio Continues Growing</h4>
                          <p className="text-sm mb-0">Your principal remains intact (and often grows), creating a legacy for heirs.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Challenges You Need to Know</h3>
                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Requires Significant Capital</h4>
                          <p className="text-sm mb-0">To generate $50K annually at 4% yield needs $1.25M invested. This is the biggest barrier for most people.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Cuts During Recessions</h4>
                          <p className="text-sm mb-0">Even quality companies can cut dividends. In 2020, Disney, Boeing, and many others slashed payouts.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Inflation Risk</h4>
                          <p className="text-sm mb-0">Your dividend growth must exceed inflation or your purchasing power declines over time.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* How Much Money */}
                <section id="how-much-needed">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-purple-600" />
                    How Much Money Do You Need to Live Off Dividends?
                  </h2>
                  <p>
                    The answer depends on three factors: your annual expenses, your target dividend yield, and your
                    risk tolerance. Here's the formula that governs dividend retirement:
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <p className="text-2xl font-bold">Required Capital = Annual Expenses ÷ Dividend Yield</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Example: $60,000 expenses ÷ 4% yield = $1,500,000 needed
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Capital Requirements by Income Level</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Annual Income Needed</th>
                          <th className="border p-3 text-center">3.5% Yield (Conservative)</th>
                          <th className="border p-3 text-center">4.5% Yield (Balanced)</th>
                          <th className="border p-3 text-center">6% Yield (Aggressive)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">$30,000/year</td>
                          <td className="border p-3 text-center">$857,000</td>
                          <td className="border p-3 text-center">$667,000</td>
                          <td className="border p-3 text-center">$500,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$50,000/year</td>
                          <td className="border p-3 text-center">$1,429,000</td>
                          <td className="border p-3 text-center">$1,111,000</td>
                          <td className="border p-3 text-center">$833,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">$75,000/year</td>
                          <td className="border p-3 text-center">$2,143,000</td>
                          <td className="border p-3 text-center">$1,667,000</td>
                          <td className="border p-3 text-center">$1,250,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$100,000/year</td>
                          <td className="border p-3 text-center">$2,857,000</td>
                          <td className="border p-3 text-center">$2,222,000</td>
                          <td className="border p-3 text-center">$1,667,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Target className="h-6 w-6 text-blue-600" />
                        Recommended Strategy: The 3.5-4.5% Sweet Spot
                      </h4>
                      <p className="text-sm mb-3">
                        The optimal dividend yield for retirement is <strong>3.5-4.5%</strong>. Here's why:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Below 3.5%:</strong> Too conservative, requires excessive capital, dividend growth often slow</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>3.5-4.5% (Sweet Spot):</strong> Balance of safety, yield, and dividend growth (8-12% annually)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Above 6%:</strong> High risk of dividend cuts, often unsustainable payout ratios</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>The 25x Rule vs The Dividend Approach</h3>
                  <p>
                    Traditional retirement planning uses the "25x rule" (save 25x annual expenses, withdraw 4% yearly).
                    The dividend approach is similar but superior because:
                  </p>
                  <ul>
                    <li><strong>You never touch principal:</strong> No sequence of returns risk</li>
                    <li><strong>Income grows automatically:</strong> Dividend increases compound over time</li>
                    <li><strong>Market downturns don't force sales:</strong> You collect dividends regardless of stock prices</li>
                    <li><strong>Legacy remains intact:</strong> Your heirs inherit the full portfolio</li>
                  </ul>
                </section>

                {/* Portfolio Strategies */}
                <section id="portfolio-strategies">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-green-600" />
                    The Best Portfolio Strategies for Dividend Retirement
                  </h2>
                  <p>
                    Not all dividend portfolios are created equal. Your strategy should balance current income,
                    dividend growth, and safety. Here are the three proven approaches:
                  </p>

                  <h3>Strategy 1: The Dividend Growth Portfolio (Recommended)</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">Target Allocation:</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">60% Dividend Aristocrats & Kings</span>
                              <Badge>Core Holdings</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-green-600 h-3 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              JNJ, PG, KO, PEP, MMM - 25+ years of dividend increases (2.5-3.5% yield)
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">30% Dividend Growth ETFs</span>
                              <Badge variant="secondary">Diversification</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              SCHD, VIG, DGRO - instant diversification, auto-rebalancing (3-4% yield)
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">10% Quality REITs</span>
                              <Badge variant="outline">Income Boost</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-purple-600 h-3 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              O, VICI, PLD - monthly dividends, inflation hedge (4-6% yield)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-lg">Portfolio Characteristics:</p>
                        <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Blended Yield:</p>
                            <p className="font-bold text-xl text-green-600">3.8%</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Avg. Dividend Growth:</p>
                            <p className="font-bold text-xl text-blue-600">9-11%/year</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Risk Level:</p>
                            <p className="font-bold text-lg">Low-Moderate</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Time Required:</p>
                            <p className="font-bold text-lg">2-3 hrs/quarter</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Strategy 2: The High-Yield Income Portfolio</h3>
                  <Card className="my-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-800">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">Target Allocation:</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">50% High-Yield REITs</span>
                              <Badge>Maximum Income</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-orange-600 h-3 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              AGNC, NLY, GOOD - mortgage REITs, high monthly income (10-14% yield)
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">30% BDCs & Energy</span>
                              <Badge variant="secondary">Growth Potential</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-red-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              ARCC, MMP, ET - business development companies, pipelines (7-10% yield)
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">20% Covered Call ETFs</span>
                              <Badge variant="outline">Stability</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              JEPI, QYLD, XYLD - enhanced income strategies (8-12% yield)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-lg">Portfolio Characteristics:</p>
                        <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Blended Yield:</p>
                            <p className="font-bold text-xl text-orange-600">10.5%</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Avg. Dividend Growth:</p>
                            <p className="font-bold text-xl text-yellow-600">2-4%/year</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Risk Level:</p>
                            <p className="font-bold text-lg text-red-600">High</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Time Required:</p>
                            <p className="font-bold text-lg">5-8 hrs/month</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <strong>⚠️ Warning:</strong> Higher yields come with higher risk. Dividend cuts are common during recessions.
                          Only suitable if you have backup income sources or can reduce expenses during downturns.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Strategy 3: The Ultra-Safe Pension Replacement</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">Target Allocation:</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">70% Dividend ETFs</span>
                              <Badge>Set & Forget</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              SCHD, VYM, VIG - maximum diversification, minimal effort (3-4% yield)
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">20% Dividend Aristocrats</span>
                              <Badge variant="secondary">Stability</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-cyan-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              Top 5-8 aristocrats: JNJ, PG, KO, MCD, LOW (2.5-3.5% yield)
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">10% Short-Term Bonds</span>
                              <Badge variant="outline">Emergency Buffer</Badge>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                              <div className="bg-green-600 h-3 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                            <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                              BND, VGSH - 1-2 years expenses for emergencies (4-5% yield)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-lg">Portfolio Characteristics:</p>
                        <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Blended Yield:</p>
                            <p className="font-bold text-xl text-blue-600">3.3%</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Avg. Dividend Growth:</p>
                            <p className="font-bold text-xl text-green-600">7-9%/year</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Risk Level:</p>
                            <p className="font-bold text-lg text-green-600">Very Low</p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">Time Required:</p>
                            <p className="font-bold text-lg">1 hr/quarter</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step-by-Step Plan */}
                <section id="step-by-step">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-blue-600" />
                    Step-by-Step Plan to Live Off Dividends
                  </h2>
                  <p>
                    Building a dividend income portfolio that can support retirement takes planning and discipline.
                    Here's your actionable roadmap from accumulation to living off the income:
                  </p>

                  <h3>Phase 1: Accumulation (Years 1-15)</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-4">Your Goal: Build the Portfolio</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold mb-1">Calculate Your Target Portfolio Size</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Use the formula: Desired Annual Income ÷ 0.04 = Target Portfolio. For $50K/year income, need $1.25M.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold mb-1">Max Out Tax-Advantaged Accounts First</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                              Priority order: Roth IRA ($7K/year) → 401(k) match → Max 401(k) ($23K/year) → HSA ($4.1K/year) → Taxable brokerage.
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              <strong>Why Roth is king:</strong> Dividends and withdrawals are 100% tax-free in retirement. No RMDs either.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                          <div>
                            <p className="font-semibold mb-1">Reinvest ALL Dividends (DRIP)</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Enable automatic dividend reinvestment. This compounds your returns dramatically. A $10K investment
                              in SCHD with dividends reinvested grew to $28K over 10 years vs $21K without reinvestment.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                          <div>
                            <p className="font-semibold mb-1">Invest Consistently Every Month</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Dollar-cost averaging beats lump sum timing. Invest $1,000-5,000 monthly regardless of market conditions.
                              Set up automatic investments to remove emotion.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                          <div>
                            <p className="font-semibold mb-1">Track Your Dividend Growth</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Monitor quarterly dividend income. You should see 8-15% annual growth from combination of new capital,
                              dividend reinvestment, and dividend raises. This motivates continued investing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Phase 2: Transition (2-3 Years Before Retirement)</h3>
                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-4">Your Goal: Prepare for Income Mode</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold mb-1">Build 2-3 Years Cash Reserve</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Move 2-3 years of expenses into short-term bonds or high-yield savings. This protects you from
                              needing to sell stocks or rely on dividends during a severe recession.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold mb-1">Analyze Your Dividend Coverage Ratio</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Your annual dividend income should be 100-120% of annual expenses. If you need $50K/year, target
                              $50K-60K in dividends. The 20% buffer covers dividend cuts and provides peace of mind.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                          <div>
                            <p className="font-semibold mb-1">Optimize for Qualified Dividends</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Review portfolio for tax efficiency. REITs and BDCs pay non-qualified dividends (taxed as ordinary income).
                              Keep these in Roth IRA, keep qualified dividend stocks in taxable accounts.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                          <div>
                            <p className="font-semibold mb-1">Stress Test Your Portfolio</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Model a 2008-style recession where dividends drop 20% and stock prices fall 40%. Can you survive 2-3
                              years on reduced income + cash reserves? If no, increase your allocation to dividend aristocrats.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Phase 3: Retirement (Living Off Dividends)</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-4">Your Goal: Sustainable Income Forever</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold mb-1">Turn Off Dividend Reinvestment</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Switch from DRIP to receiving cash dividends into your checking account. Set up automatic transfers
                              on dividend payment dates so income arrives like a paycheck.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold mb-1">Monitor Dividend Safety Quarterly</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Review each holding's payout ratio, free cash flow, and dividend growth. Sell companies with
                              payout ratios above 80% or declining earnings before they cut dividends.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                          <div>
                            <p className="font-semibold mb-1">Maintain a Spending Buffer</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Keep expenses 10-20% below dividend income during normal years. Bank the excess for recession years
                              when dividends may decrease. This creates a self-sustaining system.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                          <div>
                            <p className="font-semibold mb-1">Let Dividend Growth Fight Inflation</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Quality dividend stocks raise payouts 7-10% annually. This outpaces inflation (3-4%) by 2-3x,
                              meaning your purchasing power actually INCREASES in retirement. Resist the urge to chase higher yields.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                          <div>
                            <p className="font-semibold mb-1">Rebalance Opportunistically</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              When a position grows to 8-10% of portfolio, trim and reinvest into underweight holdings. Do this
                              1-2x per year maximum. Avoid overtrading which triggers taxes and reduces dividend stream.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Tax Strategies */}
                <section id="tax-strategies">
                  <h2 className="flex items-center gap-2">
                    <Wallet className="h-7 w-7 text-green-600" />
                    Tax Optimization Strategies
                  </h2>
                  <p>
                    Taxes can destroy 20-40% of your dividend income if you don't optimize. Here's how to keep more of what you earn:
                  </p>

                  <h3>Understanding Dividend Taxation</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Dividend Type</th>
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Qualified Dividends</td>
                          <td className="border p-3">
                            <div className="space-y-1 text-sm">
                              <p>0% (income up to $47K single, $94K married)</p>
                              <p>15% (up to $518K single, $583K married)</p>
                              <p>20% (above those thresholds)</p>
                            </div>
                          </td>
                          <td className="border p-3 text-sm">Most US stocks: JNJ, AAPL, KO, PG, SCHD, VYM</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Ordinary/Non-Qualified</td>
                          <td className="border p-3">
                            <div className="space-y-1 text-sm">
                              <p>Your marginal tax rate</p>
                              <p>(22%, 24%, 32%, 35%, or 37%)</p>
                            </div>
                          </td>
                          <td className="border p-3 text-sm">REITs (O, VICI), BDCs (ARCC), some foreign stocks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Tax Optimization Tactics</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strategy 1: Max Out Roth Accounts</h4>
                          <p className="text-sm mb-2">
                            Roth IRA and Roth 401(k) dividends are <strong>100% tax-free</strong> forever. No taxes on dividends,
                            no taxes on withdrawals, no RMDs. Prioritize filling Roth accounts before taxable accounts.
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            <strong>Example:</strong> $500K in Roth earning 4% = $20K/year tax-free dividend income. In taxable account
                            at 15% rate = $17K after tax. That's $3K/year saved forever.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strategy 2: Asset Location Optimization</h4>
                          <p className="text-sm mb-2">
                            Put high-tax investments in tax-advantaged accounts, low-tax investments in taxable accounts:
                          </p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li><strong>Roth IRA:</strong> REITs, BDCs, high-yield stocks (non-qualified dividends)</li>
                            <li><strong>Traditional IRA/401(k):</strong> Bonds, dividend ETFs</li>
                            <li><strong>Taxable Brokerage:</strong> Dividend aristocrats, growth stocks (qualified dividends, long-term gains)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strategy 3: The 0% Dividend Tax Bracket</h4>
                          <p className="text-sm mb-2">
                            In 2026, married couples with income under $94,050 pay <strong>0% on qualified dividends</strong>.
                            If your only income is dividends, you can earn ~$94K completely tax-free!
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            <strong>Example:</strong> Couple with $2.3M portfolio at 4% qualified dividend yield = $92K/year income.
                            Combined with $29.2K standard deduction, they live on $92K and pay $0 federal tax.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strategy 4: Tax-Loss Harvesting</h4>
                          <p className="text-sm mb-2">
                            When a dividend stock drops below your cost basis, sell it and immediately buy a similar (not identical)
                            stock. Bank the capital loss to offset future gains. This adds 0.5-1% annual alpha.
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            <strong>Example:</strong> Own AT&T down $5K. Sell AT&T, buy Verizon. Use $5K loss to offset capital gains
                            from rebalancing. Still maintain telecom dividend exposure.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strategy 5: Hold Dividend Stocks Long-Term</h4>
                          <p className="text-sm">
                            To qualify for preferential dividend tax rates, you must hold stocks for 60+ days around the ex-dividend date.
                            Buy and hold beats trading. Plus, no capital gains tax until you sell.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Real Tax Savings Example</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Scenario: $1.5M Portfolio, $60K Annual Dividend Income</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-2 border-red-200 dark:border-red-800">
                          <p className="font-bold text-red-700 dark:text-red-400 mb-3">❌ Poor Tax Strategy</p>
                          <ul className="text-sm space-y-2">
                            <li>• All in taxable brokerage</li>
                            <li>• 50% REITs (non-qualified dividends)</li>
                            <li>• No asset location planning</li>
                            <li>• 24% marginal tax bracket</li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-red-300 dark:border-red-700">
                            <p className="text-sm mb-1">Annual Tax Bill:</p>
                            <p className="text-2xl font-bold text-red-700 dark:text-red-400">$10,800</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">($30K × 24%) + ($30K × 15%)</p>
                          </div>
                        </div>

                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-200 dark:border-green-800">
                          <p className="font-bold text-green-700 dark:text-green-400 mb-3">✓ Optimized Tax Strategy</p>
                          <ul className="text-sm space-y-2">
                            <li>• $500K Roth (REITs + BDCs)</li>
                            <li>• $1M Taxable (qualified dividends)</li>
                            <li>• Asset location optimized</li>
                            <li>• Stay in 0% qualified div bracket</li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-green-300 dark:border-green-700">
                            <p className="text-sm mb-1">Annual Tax Bill:</p>
                            <p className="text-2xl font-bold text-green-700 dark:text-green-400">$0</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">($20K Roth) + ($40K qualified @ 0%)</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-500">
                        <p className="font-bold text-lg mb-2">Total Savings: $10,800/year</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Over 30-year retirement, that's <strong>$324,000 saved</strong> through tax optimization alone.
                          Enough to fund an extra 5+ years of retirement.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Withdrawal Strategies */}
                <section id="withdrawal-tactics">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-purple-600" />
                    Withdrawal Strategies During Retirement
                  </h2>
                  <p>
                    Even with dividend income, you need a withdrawal strategy for when dividends aren't enough
                    (recessions, emergencies, major expenses). Here are the proven approaches:
                  </p>

                  <h3>The Dividend Floor Strategy (Recommended)</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3">How It Works:</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                          <p className="font-semibold mb-2">Normal Years (Dividends Cover 100%+ of Expenses)</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Live entirely on dividend income</li>
                            <li>✓ Bank any excess into cash reserves</li>
                            <li>✓ Let portfolio compound untouched</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-500">
                          <p className="font-semibold mb-2">Recession Years (Dividends Cover 70-90% of Expenses)</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Use banked cash reserves to fill the gap</li>
                            <li>✓ Reduce discretionary spending 10-20%</li>
                            <li>✓ Avoid selling stocks during downturns</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-red-500">
                          <p className="font-semibold mb-2">Emergency (Dividends + Reserves Exhausted)</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Sell most appreciated positions first (lowest tax impact)</li>
                            <li>✓ Sell underperformers to harvest tax losses</li>
                            <li>✓ Never sell dividend growers—they'll recover</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                        <p className="font-bold text-green-700 dark:text-green-400 mb-2">Why This Works:</p>
                        <p className="text-sm">
                          Historical data shows dividend income rarely drops below 70% of prior peak, even in severe recessions.
                          With 2-3 years cash reserves, you can weather any storm without forced selling.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Variable Percentage Withdrawal</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3">How It Works:</h4>
                      <p className="text-sm mb-4">
                        Withdraw a percentage of your portfolio each year (typically 3.5-4.5%), regardless of whether
                        it comes from dividends or selling shares. Adjust spending based on portfolio performance.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Strong Market Year (+15% portfolio growth)</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Withdraw 4.5%, increase spending 5% to enjoy gains</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Average Year (+7% portfolio growth)</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Withdraw 4%, maintain current spending</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Down Market Year (-15% portfolio decline)</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Withdraw 3.5%, reduce spending 10-15% to preserve capital</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <p className="font-bold mb-2">Best For:</p>
                        <p className="text-sm">
                          Retirees with flexible expenses who can adjust lifestyle based on portfolio performance.
                          Reduces sequence of returns risk by cutting spending during downturns.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Bucket Strategy</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3">How It Works:</h4>
                      <p className="text-sm mb-4">
                        Divide portfolio into three "buckets" based on when you'll need the money. Provides psychological
                        comfort during market volatility.
                      </p>
                      <div className="space-y-3">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-bold">Bucket 1: Cash (1-2 Years Expenses)</p>
                            <Badge>10-15% of Portfolio</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            High-yield savings, money market, short-term bonds. Draw from this for living expenses.
                          </p>
                          <p className="text-sm"><strong>Holdings:</strong> VUSXX, SGOV, HYSA</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-bold">Bucket 2: Dividend Income (3-10 Years)</p>
                            <Badge variant="secondary">60-70% of Portfolio</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Dividend stocks and ETFs. Refill Bucket 1 annually from dividend payments.
                          </p>
                          <p className="text-sm"><strong>Holdings:</strong> SCHD, VYM, JNJ, PG, O, VICI</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-bold">Bucket 3: Growth (10+ Years)</p>
                            <Badge variant="outline">20-30% of Portfolio</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Dividend growth stocks, some growth stocks. Never touch for 10+ years, let compound.
                          </p>
                          <p className="text-sm"><strong>Holdings:</strong> AAPL, MSFT, V, MA, UNH</p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                        <p className="font-bold mb-2">Annual Rebalancing:</p>
                        <p className="text-sm">
                          Each year, use dividends from Bucket 2 to refill Bucket 1. If markets are up, sell some Bucket 3
                          to top off. If markets are down, leave Bucket 3 alone and use only dividends.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-red-600" />
                    Risks & How to Mitigate Them
                  </h2>
                  <p>
                    Living off dividends isn't risk-free. Here are the major threats and how to protect yourself:
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <TrendingDown className="h-6 w-6 text-red-600" />
                          Risk #1: Dividend Cuts During Recessions
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>The Threat:</strong> During 2008-2009, S&P 500 dividends fell 23%. In 2020, hundreds
                          of companies cut or suspended dividends. Your income can drop 20-40% overnight.
                        </p>
                        <div className="pl-4 border-l-4 border-red-500">
                          <p className="font-semibold mb-2 text-sm">How to Mitigate:</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Focus on Dividend Aristocrats (25+ years of increases, even through recessions)</li>
                            <li>✓ Diversify across 30-50 holdings to reduce single-stock impact</li>
                            <li>✓ Maintain 2-3 years cash reserves to weather dividend droughts</li>
                            <li>✓ Monitor payout ratios quarterly—sell before cuts happen</li>
                            <li>✓ Keep 20% income buffer (earn $60K if you need $50K)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <TrendingDown className="h-6 w-6 text-orange-600" />
                          Risk #2: Inflation Eroding Purchasing Power
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>The Threat:</strong> If inflation averages 3% but your dividends only grow 2%, you lose
                          1% purchasing power annually. After 20 years, your $50K income is worth $33K in today's dollars.
                        </p>
                        <div className="pl-4 border-l-4 border-orange-500">
                          <p className="font-semibold mb-2 text-sm">How to Mitigate:</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Target 8-12% annual dividend growth (2-3x inflation rate)</li>
                            <li>✓ Own dividend growers, not high-yield dividend traps</li>
                            <li>✓ Include REITs (real estate adjusts with inflation)</li>
                            <li>✓ Review dividend growth rate annually—replace slow growers</li>
                            <li>✓ Consider I-Bonds or TIPS for 10-20% of portfolio</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <AlertCircle className="h-6 w-6 text-yellow-600" />
                          Risk #3: Sequence of Returns Risk
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>The Threat:</strong> If you retire right before a crash (2000, 2008, 2020), your portfolio
                          may never recover even if long-term returns are good. Early losses devastate compound growth.
                        </p>
                        <div className="pl-4 border-l-4 border-yellow-500">
                          <p className="font-semibold mb-2 text-sm">How to Mitigate:</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Build 2-3 years cash before retirement (ride out crashes without selling)</li>
                            <li>✓ Use dividend income (not principal) to avoid selling in downturns</li>
                            <li>✓ Retire during market highs when possible (2017, 2019, 2024 were ideal)</li>
                            <li>✓ Consider working part-time first 2-3 years to reduce withdrawal pressure</li>
                            <li>✓ Use the Variable Percentage strategy to cut spending during bear markets</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <AlertCircle className="h-6 w-6 text-purple-600" />
                          Risk #4: Concentration in Dividend Stocks
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>The Threat:</strong> Dividend-focused portfolios often overweight slow-growth sectors
                          (utilities, consumer staples, tobacco) and miss high-growth tech. You might underperform.
                        </p>
                        <div className="pl-4 border-l-4 border-purple-500">
                          <p className="font-semibold mb-2 text-sm">How to Mitigate:</p>
                          <ul className="text-sm space-y-1">
                            <li>✓ Include 20-30% dividend-paying tech: AAPL, MSFT, AVGO, TXN</li>
                            <li>✓ Own dividend growth stocks, not just high yielders</li>
                            <li>✓ Diversify across all sectors (use SCHD for automatic balance)</li>
                            <li>✓ Accept 3.5-4.5% yields instead of chasing 8-10% (higher quality)</li>
                            <li>✓ Review total return (dividends + growth), not just dividend yield</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Real Examples */}
                <section id="real-examples">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Real Portfolio Examples
                  </h2>
                  <p>
                    Let's look at three real-world dividend portfolios at different income levels and risk tolerances:
                  </p>

                  <h3>Example 1: Conservative Retiree ($1.5M Portfolio, $50K Income)</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <p className="font-bold mb-2">Profile:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Age 68, recently retired teacher</li>
                          <li>• Needs $50K/year to cover expenses</li>
                          <li>• Low risk tolerance, wants sleep-well-at-night portfolio</li>
                          <li>• Has pension ($20K/year) + Social Security ($25K/year)</li>
                          <li>• Only needs $5K/year from investments, wants growth for legacy</li>
                        </ul>
                      </div>
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Holding</th>
                              <th className="border p-2 text-center">Allocation</th>
                              <th className="border p-2 text-center">Amount</th>
                              <th className="border p-2 text-center">Yield</th>
                              <th className="border p-2 text-center">Annual Income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">SCHD (Dividend ETF)</td>
                              <td className="border p-2 text-center">40%</td>
                              <td className="border p-2 text-center">$600,000</td>
                              <td className="border p-2 text-center">3.5%</td>
                              <td className="border p-2 text-center">$21,000</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">VYM (High Div Yield ETF)</td>
                              <td className="border p-2 text-center">25%</td>
                              <td className="border p-2 text-center">$375,000</td>
                              <td className="border p-2 text-center">3.2%</td>
                              <td className="border p-2 text-center">$12,000</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Dividend Aristocrats (JNJ, PG, KO)</td>
                              <td className="border p-2 text-center">20%</td>
                              <td className="border p-2 text-center">$300,000</td>
                              <td className="border p-2 text-center">2.8%</td>
                              <td className="border p-2 text-center">$8,400</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">BND (Bond ETF)</td>
                              <td className="border p-2 text-center">10%</td>
                              <td className="border p-2 text-center">$150,000</td>
                              <td className="border p-2 text-center">4.5%</td>
                              <td className="border p-2 text-center">$6,750</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Cash / Money Market</td>
                              <td className="border p-2 text-center">5%</td>
                              <td className="border p-2 text-center">$75,000</td>
                              <td className="border p-2 text-center">4.8%</td>
                              <td className="border p-2 text-center">$3,600</td>
                            </tr>
                            <tr className="bg-green-50 dark:bg-green-950 font-bold">
                              <td className="border p-2">TOTAL</td>
                              <td className="border p-2 text-center">100%</td>
                              <td className="border p-2 text-center">$1,500,000</td>
                              <td className="border p-2 text-center">3.45%</td>
                              <td className="border p-2 text-center">$51,750</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                        <p className="font-bold mb-2">Strategy Outcome:</p>
                        <ul className="text-sm space-y-1">
                          <li>✓ Generates $51,750/year in dividend income (reinvests $46,750)</li>
                          <li>✓ Ultra-safe: 90% diversified ETFs and aristocrats</li>
                          <li>✓ Expected dividend growth: 7-8% annually</li>
                          <li>✓ In 10 years, portfolio worth ~$2.4M, dividends ~$95K/year</li>
                          <li>✓ Risk level: Very low, perfect for conservative retiree</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 2: Balanced Early Retiree ($1M Portfolio, $40K Income)</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <p className="font-bold mb-2">Profile:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Age 52, early retirement from tech career</li>
                          <li>• Needs $40K/year from portfolio (no pension/SS yet)</li>
                          <li>• Moderate risk tolerance, wants growth + income</li>
                          <li>• All assets in Roth IRA (tax-free forever)</li>
                          <li>• Willing to do quarterly rebalancing and monitoring</li>
                        </ul>
                      </div>
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Holding</th>
                              <th className="border p-2 text-center">Allocation</th>
                              <th className="border p-2 text-center">Amount</th>
                              <th className="border p-2 text-center">Yield</th>
                              <th className="border p-2 text-center">Annual Income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">Dividend Growth Stocks (20 holdings)</td>
                              <td className="border p-2 text-center">50%</td>
                              <td className="border p-2 text-center">$500,000</td>
                              <td className="border p-2 text-center">3.2%</td>
                              <td className="border p-2 text-center">$16,000</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">SCHD ETF</td>
                              <td className="border p-2 text-center">25%</td>
                              <td className="border p-2 text-center">$250,000</td>
                              <td className="border p-2 text-center">3.5%</td>
                              <td className="border p-2 text-center">$8,750</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Quality REITs (O, VICI, PLD)</td>
                              <td className="border p-2 text-center">15%</td>
                              <td className="border p-2 text-center">$150,000</td>
                              <td className="border p-2 text-center">4.8%</td>
                              <td className="border p-2 text-center">$7,200</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">Growth Stocks (AAPL, MSFT, V)</td>
                              <td className="border p-2 text-center">10%</td>
                              <td className="border p-2 text-center">$100,000</td>
                              <td className="border p-2 text-center">0.8%</td>
                              <td className="border p-2 text-center">$800</td>
                            </tr>
                            <tr className="bg-green-50 dark:bg-green-950 font-bold">
                              <td className="border p-2">TOTAL</td>
                              <td className="border p-2 text-center">100%</td>
                              <td className="border p-2 text-center">$1,000,000</td>
                              <td className="border p-2 text-center">3.28%</td>
                              <td className="border p-2 text-center">$32,750</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg border-l-4 border-yellow-500">
                        <p className="font-bold mb-2">Strategy Outcome:</p>
                        <ul className="text-sm space-y-1">
                          <li>⚠️ Dividend income ($32,750) falls short of needs ($40,000)</li>
                          <li>✓ Solution: Sell $7,250 of growth stocks annually (tax-free in Roth)</li>
                          <li>✓ Expected dividend growth: 10-12% annually</li>
                          <li>✓ In 5 years, dividends cover 100% of expenses</li>
                          <li>✓ In 10 years, portfolio worth ~$1.8M, dividends ~$65K/year</li>
                          <li>✓ Risk level: Moderate, suitable for younger early retiree</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 3: Aggressive Income Seeker ($800K Portfolio, $60K Income)</h3>
                  <Card className="my-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-800">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <p className="font-bold mb-2">Profile:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Age 62, needs high immediate income</li>
                          <li>• Needs $60K/year (aggressive 7.5% withdrawal rate)</li>
                          <li>• Has Social Security starting at 70 ($36K/year)</li>
                          <li>• Willing to accept higher risk and volatility</li>
                          <li>• Plans to reduce withdrawal to $24K when SS starts</li>
                        </ul>
                      </div>
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Holding</th>
                              <th className="border p-2 text-center">Allocation</th>
                              <th className="border p-2 text-center">Amount</th>
                              <th className="border p-2 text-center">Yield</th>
                              <th className="border p-2 text-center">Annual Income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">mREITs (AGNC, NLY)</td>
                              <td className="border p-2 text-center">30%</td>
                              <td className="border p-2 text-center">$240,000</td>
                              <td className="border p-2 text-center">12.5%</td>
                              <td className="border p-2 text-center">$30,000</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">Covered Call ETFs (JEPI, QYLD)</td>
                              <td className="border p-2 text-center">25%</td>
                              <td className="border p-2 text-center">$200,000</td>
                              <td className="border p-2 text-center">10.0%</td>
                              <td className="border p-2 text-center">$20,000</td>
                            </tr>
                            <tr>
                              <td className="border p-2">BDCs (ARCC, MAIN)</td>
                              <td className="border p-2 text-center">20%</td>
                              <td className="border p-2 text-center">$160,000</td>
                              <td className="border p-2 text-center">9.0%</td>
                              <td className="border p-2 text-center">$14,400</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2">Quality REITs (O, VICI)</td>
                              <td className="border p-2 text-center">15%</td>
                              <td className="border p-2 text-center">$120,000</td>
                              <td className="border p-2 text-center">5.5%</td>
                              <td className="border p-2 text-center">$6,600</td>
                            </tr>
                            <tr>
                              <td className="border p-2">SCHD (Dividend ETF)</td>
                              <td className="border p-2 text-center">10%</td>
                              <td className="border p-2 text-center">$80,000</td>
                              <td className="border p-2 text-center">3.5%</td>
                              <td className="border p-2 text-center">$2,800</td>
                            </tr>
                            <tr className="bg-green-50 dark:bg-green-950 font-bold">
                              <td className="border p-2">TOTAL</td>
                              <td className="border p-2 text-center">100%</td>
                              <td className="border p-2 text-center">$800,000</td>
                              <td className="border p-2 text-center">9.23%</td>
                              <td className="border p-2 text-center">$73,800</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 rounded-lg border-l-4 border-red-500">
                        <p className="font-bold mb-2">⚠️ High Risk Strategy:</p>
                        <ul className="text-sm space-y-1">
                          <li>✓ Generates $73,800/year (23% above needs)</li>
                          <li>⚠️ Very high risk: mREITs can cut dividends 30-50% in recessions</li>
                          <li>⚠️ Minimal dividend growth (2-3% annually)</li>
                          <li>⚠️ Stock prices volatile (can drop 40-60% in bear markets)</li>
                          <li>✓ Bridge strategy: Only needs to work 8 years until Social Security</li>
                          <li>✓ Tax efficiency: All non-qualified dividends (keep in Roth IRA)</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                        <p className="font-bold mb-2">Recommendation:</p>
                        <p className="text-sm">
                          This strategy is only suitable as a short-term bridge. At age 70, transition to conservative
                          portfolio (Example 1) once Social Security provides base income. The high yields won't last forever.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Calculator CTA */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Retirement Plan</h3>
                      <p className="mb-6 text-blue-100">
                        Use our calculators to model your exact situation. See how much you need to save, when you can retire,
                        and what your dividend income will be.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Calculator className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator (Accumulation)
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Email Signup */}
                <InlineSignup
                  title="Master Dividend Investing"
                  description="Get our free dividend investing checklist plus weekly tips on building passive income."
                  source="live-off-dividends"
                />

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Investors</h2>
                  <p>
                    To build your dividend portfolio, you need a brokerage account with commission-free trading,
                    automatic dividend reinvestment (DRIP), and strong research tools. Here are the top choices:
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a $1,000/Month Dividend Portfolio
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Complete Comparison
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/blog/dividend-tax-guide-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Dividend Tax Guide 2026
                    </Link>
                    <Link href="/blog/top-dividend-aristocrats-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Top Dividend Aristocrats 2026
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
