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
  Layers,
  Shield,
  Zap,
  Users,
  Calculator,
  TrendingDown
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Build a Dividend Portfolio from Scratch: Complete 7-Step Guide (2026)',
  description: 'Step-by-step blueprint for building a dividend portfolio from zero. Stock selection criteria, diversification rules, and sample portfolios from $10K to $100K+.',
  keywords: 'build dividend portfolio, dividend portfolio from scratch, dividend investing for beginners, dividend stock selection, dividend diversification, passive income portfolio',
  openGraph: {
    title: 'How to Build a Dividend Portfolio from Scratch: 7-Step Blueprint',
    description: 'Complete actionable guide with stock selection criteria, sample portfolios, and diversification strategies for building passive income.',
    type: 'article',
  }
}

export default function BuildDividendPortfolioPage() {
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
                <Badge className="mb-4">Beginner Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Build a Dividend Portfolio from Scratch: Complete 7-Step Blueprint
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The definitive step-by-step guide to building a dividend portfolio from zero. Learn stock selection criteria, diversification rules, and get sample portfolios from $10,000 to $100,000+.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Actionable Blueprint
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
                      <span><strong>Start Small:</strong> You can build a dividend portfolio with as little as $1,000 using fractional shares and ETFs</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>7-Step Process:</strong> Open broker → Choose strategy → Screen stocks → Diversify → Set DRIP → Monitor → Rebalance quarterly</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Target Yield:</strong> Aim for 3-5% yield with quality stocks. Higher yields (6%+) often signal dividend cut risk</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Diversification Rule:</strong> 15-25 stocks across 8+ sectors. Never exceed 5% in a single position</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#why-build" className="text-blue-600 hover:underline">Why Build a Dividend Portfolio?</a></li>
                    <li><a href="#step-1" className="text-blue-600 hover:underline">Step 1: Open a Brokerage Account</a></li>
                    <li><a href="#step-2" className="text-blue-600 hover:underline">Step 2: Choose Your Strategy</a></li>
                    <li><a href="#step-3" className="text-blue-600 hover:underline">Step 3: Screen for Quality Stocks</a></li>
                    <li><a href="#step-4" className="text-blue-600 hover:underline">Step 4: Apply Selection Criteria</a></li>
                    <li><a href="#step-5" className="text-blue-600 hover:underline">Step 5: Diversify Properly</a></li>
                    <li><a href="#step-6" className="text-blue-600 hover:underline">Step 6: Set Up DRIP</a></li>
                    <li><a href="#step-7" className="text-blue-600 hover:underline">Step 7: Monitor & Rebalance</a></li>
                    <li><a href="#sample-portfolios" className="text-blue-600 hover:underline">Sample Portfolios</a></li>
                    <li><a href="#common-mistakes" className="text-blue-600 hover:underline">Common Mistakes to Avoid</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Why Build Section */}
                <section id="why-build">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Why Build a Dividend Portfolio?
                  </h2>
                  <p>
                    A dividend portfolio is a collection of stocks or funds that pay regular cash dividends, creating
                    passive income streams. Unlike growth stocks that only make you money when you sell, dividend stocks
                    pay you quarterly just for holding them.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Benefits of Dividend Investing:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <DollarSign className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Passive Income Stream</h4>
                            <p className="text-sm mb-0">Get paid quarterly whether the stock price goes up or down. A $100,000 portfolio at 4% yield generates $4,000/year in cash.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Lower Volatility</h4>
                            <p className="text-sm mb-0">Dividend stocks drop 15-20% less than growth stocks during bear markets. The income cushions the blow.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <BarChart3 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Compound Growth Power</h4>
                            <p className="text-sm mb-0">Reinvest dividends to buy more shares. Over 30 years, 90% of stock market returns come from reinvested dividends.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Quality Companies</h4>
                            <p className="text-sm mb-0">Companies that pay dividends are typically profitable, mature, and financially stable. Think Johnson & Johnson, not crypto startups.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Real Example: The Power of Time</h3>
                  <p>
                    Let's say you invest $10,000 in a dividend portfolio yielding 4% with 7% annual dividend growth:
                  </p>
                  <ul>
                    <li><strong>Year 1:</strong> $400 in dividends</li>
                    <li><strong>Year 10:</strong> $784 in dividends (yield on cost: 7.8%)</li>
                    <li><strong>Year 20:</strong> $1,548 in dividends (yield on cost: 15.5%)</li>
                    <li><strong>Year 30:</strong> $3,054 in dividends (yield on cost: 30.5%)</li>
                  </ul>
                  <p>
                    That's the magic of dividend growth. Your income <strong>doubles every 10 years</strong> even if you
                    never add another dollar.
                  </p>
                </section>

                {/* CTA Section 1 */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Growth</h3>
                      <p className="mb-6 text-blue-100">
                        See exactly how much passive income you'll generate over time with our free DRIP calculator.
                      </p>
                      <Link href="/calculators/drip">
                        <Button size="lg" variant="secondary" className="gap-2">
                          <Calculator className="h-5 w-5" />
                          Try DRIP Calculator
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 1 */}
                <section id="step-1">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">1</span>
                    Open a Brokerage Account
                  </h2>
                  <p>
                    Before you can buy dividend stocks, you need a brokerage account. This is where your stocks live
                    and where dividends get deposited.
                  </p>

                  <h3>What to Look For:</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">$0 Commission Trading</h4>
                          <p className="text-sm mb-0">Every major broker now offers free stock trades. Never pay $5-10 per trade again.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Automatic DRIP (Dividend Reinvestment)</h4>
                          <p className="text-sm mb-0">Must-have feature. Auto-reinvests dividends to buy more shares with zero fees.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Fractional Shares</h4>
                          <p className="text-sm mb-0">Buy $50 of Amazon or Berkshire Hathaway instead of needing $3,000+ for one share.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Research Tools</h4>
                          <p className="text-sm mb-0">Stock screeners, dividend calendars, analyst ratings save you hours of research.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Top Brokers for Dividend Investors:</h3>
                  <BrokerComparisonTable />
                </section>

                {/* Step 2 */}
                <section id="step-2">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">2</span>
                    Choose Your Dividend Strategy
                  </h2>
                  <p>
                    Not all dividend portfolios are created equal. You need to pick a strategy that matches your goals,
                    timeline, and risk tolerance.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-6 w-6 text-blue-600" />
                          Dividend Growth Strategy
                        </h3>
                        <p className="text-sm mb-4">
                          Focus on companies that grow dividends 7-12% annually. Lower starting yield (2-3%) but income
                          doubles every 7-10 years.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Best For:</strong> Long-term wealth building (10+ years)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Examples:</strong> Microsoft, Visa, UnitedHealth</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Yield:</strong> 2-3% starting, 8-15% in 20 years</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-green-600" />
                          High Yield Strategy
                        </h3>
                        <p className="text-sm mb-4">
                          Prioritize immediate income with 5-8% yields. Lower growth but more cash today. Popular for
                          retirees.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Best For:</strong> Generating income now (retirement)</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Examples:</strong> REITs, utilities, BDCs, preferred stocks</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Yield:</strong> 5-8% starting, 6-10% in 20 years</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Award className="h-6 w-6 text-purple-600" />
                          Dividend Aristocrats Strategy
                        </h3>
                        <p className="text-sm mb-4">
                          Only buy companies with 25+ years of consecutive dividend increases. Ultra-safe but lower yields.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Best For:</strong> Conservative investors wanting safety</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Examples:</strong> Coca-Cola, Procter & Gamble, 3M</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Yield:</strong> 2.5-4% with reliable 5-7% annual growth</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <PieChart className="h-6 w-6 text-yellow-600" />
                          ETF-Only Strategy
                        </h3>
                        <p className="text-sm mb-4">
                          Skip individual stocks entirely. Buy 2-4 dividend ETFs and call it a day. Simplest approach.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Best For:</strong> Beginners or passive investors</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Examples:</strong> SCHD, VYM, DGRO, VIG</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                            <span><strong>Yield:</strong> 2.5-4% with instant diversification</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Award className="h-6 w-6 text-blue-600" />
                        Recommended: Hybrid Approach
                      </h3>
                      <p className="mb-4">
                        Most successful dividend investors use a <strong>hybrid strategy</strong>: 60% dividend growth stocks
                        + 30% high yield positions + 10% dividend ETFs for diversification.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Growth stocks compound your wealth over time</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>High yield positions provide immediate income</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>ETFs fill gaps and reduce concentration risk</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 3 */}
                <section id="step-3">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">3</span>
                    Screen for Quality Dividend Stocks
                  </h2>
                  <p>
                    Don't just buy the highest-yielding stocks. Many high yields are "yield traps" - companies about to
                    cut dividends. Use these screening criteria to find quality candidates.
                  </p>

                  <h3>Essential Screening Filters:</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Metric</th>
                              <th className="border p-3 text-left">Safe Range</th>
                              <th className="border p-3 text-left">Why It Matters</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">Dividend Yield</td>
                              <td className="border p-3">2-6%</td>
                              <td className="border p-3">Higher than 6% often signals trouble. Lower than 2% may not be worth it.</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Payout Ratio</td>
                              <td className="border p-3">&lt;60% of earnings</td>
                              <td className="border p-3">Room to grow dividends. Above 80% means dividend cuts likely.</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Dividend Growth Rate</td>
                              <td className="border p-3">5-15% annually</td>
                              <td className="border p-3">Proof the company can afford raises. Compounds your income.</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Years of Consecutive Raises</td>
                              <td className="border p-3">10+ years</td>
                              <td className="border p-3">Track record of reliability. Survives recessions.</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Free Cash Flow</td>
                              <td className="border p-3">Positive & growing</td>
                              <td className="border p-3">Cash left after expenses to fund dividends. Negative FCF = danger.</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Debt-to-Equity Ratio</td>
                              <td className="border p-3">&lt;1.0 (lower better)</td>
                              <td className="border p-3">Less debt = more financial stability during downturns.</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Market Cap</td>
                              <td className="border p-3">&gt;$5 billion</td>
                              <td className="border p-3">Larger, more stable companies. Less likely to go bankrupt.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Where to Screen Stocks:</h3>
                  <ul>
                    <li><strong>Dividend.com:</strong> Free stock screener with dividend-specific filters</li>
                    <li><strong>Simply Safe Dividends:</strong> Dividend safety scores (0-100 rating)</li>
                    <li><strong>Your Broker's Screener:</strong> Most brokers have built-in dividend filters</li>
                    <li><strong>ETF Holdings:</strong> Look at top holdings in SCHD, VYM, VIG for ideas</li>
                  </ul>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-2 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Warning: Avoid These Yield Traps
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Yields above 8%:</strong> Usually means dividend cut coming or risky business model</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Payout ratio above 100%:</strong> Paying more than they earn - unsustainable</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Declining revenue:</strong> Shrinking businesses eventually cut dividends</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Recent dividend cuts:</strong> Once cut, often happens again within 3-5 years</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 4 */}
                <section id="step-4">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">4</span>
                    Apply Stock Selection Criteria
                  </h2>
                  <p>
                    After screening, you'll have 50-100 candidates. Now apply deeper analysis to pick your final 15-25 stocks.
                  </p>

                  <h3>The 5-Point Quality Checklist:</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-base mb-2">Business Quality</h4>
                          <p className="text-sm mb-2">Does the company have a durable competitive advantage (moat)?</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• Strong brand recognition (Coca-Cola, Apple)</li>
                            <li>• High switching costs (Microsoft, Visa)</li>
                            <li>• Network effects (Mastercard, Google)</li>
                            <li>• Cost leadership (Walmart, Costco)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-base mb-2">Financial Health</h4>
                          <p className="text-sm mb-2">Can they afford to pay and grow the dividend?</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• Payout ratio under 60% (room to grow)</li>
                            <li>• Positive free cash flow (actual cash generated)</li>
                            <li>• Low debt-to-equity (&lt;1.0 preferred)</li>
                            <li>• Investment-grade credit rating (BBB or higher)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-base mb-2">Dividend Track Record</h4>
                          <p className="text-sm mb-2">Have they proven reliability through multiple economic cycles?</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• 10+ years of consecutive dividend increases</li>
                            <li>• Maintained dividends through 2008 financial crisis</li>
                            <li>• Maintained dividends through 2020 COVID crash</li>
                            <li>• Consistent quarterly payout schedule</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-bold text-base mb-2">Growth Prospects</h4>
                          <p className="text-sm mb-2">Can revenue and earnings keep growing to support dividend raises?</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• Positive revenue growth last 5 years</li>
                            <li>• Expanding profit margins</li>
                            <li>• Growing market share in their industry</li>
                            <li>• Reasonable valuation (P/E under 25)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">5</div>
                        <div>
                          <h4 className="font-bold text-base mb-2">Industry Position</h4>
                          <p className="text-sm mb-2">Is the sector stable and resistant to disruption?</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• #1 or #2 player in their industry</li>
                            <li>• Industry is essential (healthcare, consumer staples, utilities)</li>
                            <li>• Not threatened by technology disruption</li>
                            <li>• Regulatory protection (utilities, pipelines)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example: Evaluating Johnson & Johnson (JNJ)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-bold mb-2">The Numbers:</h4>
                          <ul className="space-y-1">
                            <li>• Dividend Yield: 3.1%</li>
                            <li>• Payout Ratio: 44%</li>
                            <li>• Consecutive Increases: 61 years</li>
                            <li>• Avg Dividend Growth: 6.1% annually</li>
                            <li>• Debt-to-Equity: 0.48</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">The Quality:</h4>
                          <ul className="space-y-1">
                            <li>✓ Dividend King (50+ year streak)</li>
                            <li>✓ AAA credit rating (highest possible)</li>
                            <li>✓ Diversified healthcare leader</li>
                            <li>✓ Survived 12 recessions while raising dividends</li>
                            <li>✓ Essential products (Band-Aid, Tylenol, medical devices)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-semibold text-green-600">Verdict: High-quality dividend growth stock ✓</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section 2 */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Project Your Retirement Income</h3>
                      <p className="mb-6 text-purple-100">
                        Calculate exactly how much dividend income you'll need for retirement and when you'll reach your goal.
                      </p>
                      <Link href="/calculators/retirement-income">
                        <Button size="lg" variant="secondary" className="gap-2">
                          <DollarSign className="h-5 w-5" />
                          Retirement Income Calculator
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 5 */}
                <section id="step-5">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">5</span>
                    Diversify Properly
                  </h2>
                  <p>
                    Diversification protects you from individual stock disasters. Remember: even great companies like GE,
                    Intel, and AT&T have cut dividends. Spread your risk.
                  </p>

                  <h3>The Diversification Framework:</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <Layers className="h-5 w-5 text-purple-600" />
                            Number of Holdings
                          </h4>
                          <ul className="text-sm space-y-1 ml-6">
                            <li>• <strong>Minimum 15 stocks:</strong> Below this, too much concentration risk</li>
                            <li>• <strong>Optimal 20-25 stocks:</strong> Sweet spot for diversification vs manageability</li>
                            <li>• <strong>Maximum 30 stocks:</strong> Beyond this, you're basically creating your own ETF</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <PieChart className="h-5 w-5 text-purple-600" />
                            Position Sizing
                          </h4>
                          <ul className="text-sm space-y-1 ml-6">
                            <li>• <strong>No single stock above 5%</strong> of total portfolio value</li>
                            <li>• <strong>Core holdings 4-5%</strong> each (your highest conviction picks)</li>
                            <li>• <strong>Regular positions 3-4%</strong> each (solid but not exceptional)</li>
                            <li>• <strong>Smaller positions 2-3%</strong> each (speculative or higher risk)</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                            Sector Allocation
                          </h4>
                          <p className="text-sm mb-2">
                            Diversify across at least 8 of these 11 sectors. Never exceed 25% in any single sector.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Recommended Sector Allocation:</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Sector</th>
                              <th className="border p-3 text-center">Target %</th>
                              <th className="border p-3 text-left">Example Stocks</th>
                              <th className="border p-3 text-left">Why Include</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">Consumer Staples</td>
                              <td className="border p-3 text-center">15-20%</td>
                              <td className="border p-3">PG, KO, PEP, COST</td>
                              <td className="border p-3">Recession-resistant, stable dividends</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Healthcare</td>
                              <td className="border p-3 text-center">15-20%</td>
                              <td className="border p-3">JNJ, ABBV, UNH, MDT</td>
                              <td className="border p-3">Aging population, essential services</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Financials</td>
                              <td className="border p-3 text-center">10-15%</td>
                              <td className="border p-3">JPM, BAC, V, MA</td>
                              <td className="border p-3">Economic growth, rising rates benefit</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Utilities</td>
                              <td className="border p-3 text-center">10-15%</td>
                              <td className="border p-3">NEE, DUK, SO, AEP</td>
                              <td className="border p-3">High yields, stable cash flows, regulated</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Technology</td>
                              <td className="border p-3 text-center">10-15%</td>
                              <td className="border p-3">MSFT, AAPL, AVGO, TXN</td>
                              <td className="border p-3">High dividend growth potential</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Industrials</td>
                              <td className="border p-3 text-center">8-12%</td>
                              <td className="border p-3">MMM, HON, CAT, EMR</td>
                              <td className="border p-3">Economic growth exposure, dividends</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Real Estate (REITs)</td>
                              <td className="border p-3 text-center">8-12%</td>
                              <td className="border p-3">O, VICI, WPC, SPG</td>
                              <td className="border p-3">High yields (5-7%), inflation hedge</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Energy</td>
                              <td className="border p-3 text-center">5-10%</td>
                              <td className="border p-3">XOM, CVX, ENB, EPD</td>
                              <td className="border p-3">High yields, inflation protection</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Communication</td>
                              <td className="border p-3 text-center">5-8%</td>
                              <td className="border p-3">T, VZ, CMCSA</td>
                              <td className="border p-3">Essential services, high yields</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Consumer Discretionary</td>
                              <td className="border p-3 text-center">3-5%</td>
                              <td className="border p-3">MCD, LOW, HD, TGT</td>
                              <td className="border p-3">Economic growth plays</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Materials</td>
                              <td className="border p-3 text-center">0-5%</td>
                              <td className="border p-3">APD, ECL, SHW</td>
                              <td className="border p-3">Optional, commodity exposure</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-3">
                        <Shield className="h-5 w-5 text-blue-600" />
                        Diversification Reality Check
                      </h4>
                      <p className="text-sm mb-3">
                        Use this quick test to verify proper diversification:
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>If your #1 holding cut its dividend to $0 tomorrow, would you lose more than 5% of total income? (Should be NO)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Do you have at least 3 stocks in your largest sector? (Should be YES)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>If one entire sector crashed, would you lose more than 25% of portfolio value? (Should be NO)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 6 */}
                <section id="step-6">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">6</span>
                    Set Up Dividend Reinvestment (DRIP)
                  </h2>
                  <p>
                    This is the secret to building wealth with dividends. Instead of taking cash, automatically reinvest
                    dividends to buy more shares. Compounds your income exponentially.
                  </p>

                  <h3>How DRIP Works:</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">1</div>
                          <div>
                            <h4 className="font-bold mb-1">You Receive a Dividend</h4>
                            <p className="text-sm">Company pays $100 dividend to your account</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">2</div>
                          <div>
                            <h4 className="font-bold mb-1">Broker Auto-Buys More Shares</h4>
                            <p className="text-sm">That $100 immediately purchases additional shares (even fractional)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex-shrink-0">3</div>
                          <div>
                            <h4 className="font-bold mb-1">You Now Own More Shares</h4>
                            <p className="text-sm">Next quarter, you get dividends on MORE shares, creating compound growth</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Compounding Effect:</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Example: $10,000 in JNJ stock at 3% yield with 6% annual dividend growth:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Year</th>
                              <th className="border p-3 text-right">Without DRIP</th>
                              <th className="border p-3 text-right">With DRIP</th>
                              <th className="border p-3 text-right">Difference</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">Year 1</td>
                              <td className="border p-3 text-right">$300</td>
                              <td className="border p-3 text-right">$300</td>
                              <td className="border p-3 text-right">$0</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Year 10</td>
                              <td className="border p-3 text-right">$537</td>
                              <td className="border p-3 text-right">$784</td>
                              <td className="border p-3 text-right text-green-600">+$247</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Year 20</td>
                              <td className="border p-3 text-right">$961</td>
                              <td className="border p-3 text-right">$2,118</td>
                              <td className="border p-3 text-right text-green-600">+$1,157</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Year 30</td>
                              <td className="border p-3 text-right">$1,720</td>
                              <td className="border p-3 text-right">$5,521</td>
                              <td className="border p-3 text-right text-green-600 font-bold">+$3,801</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm mt-4 font-semibold text-green-600">
                        With DRIP, you earn 221% more income after 30 years!
                      </p>
                    </CardContent>
                  </Card>

                  <h3>How to Enable DRIP:</h3>
                  <div className="space-y-3 text-base">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Fidelity:</strong> Accounts → Dividends and Capital Gains → Update → Choose "Reinvest in Security"</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Schwab:</strong> Service → Dividends and Capital Gains → Select stocks → Choose "Reinvest"</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Vanguard:</strong> My Accounts → Cost basis → Reinvestment options → Enable DRIP</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Robinhood:</strong> Investing → Menu → Dividend Reinvestment → Toggle on</span>
                    </p>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-blue-600" />
                        Pro Tip: Fractional Shares Matter
                      </h4>
                      <p className="text-sm">
                        Make sure your broker supports <strong>fractional share DRIP</strong>. Without it, dividends under
                        the share price sit as cash instead of compounding. Fidelity, Schwab, and Robinhood all support
                        fractional DRIP. Some older brokers don't.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 7 */}
                <section id="step-7">
                  <h2 className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">7</span>
                    Monitor and Rebalance Quarterly
                  </h2>
                  <p>
                    Your dividend portfolio isn't "set it and forget it." Quarterly maintenance takes 2-3 hours but prevents
                    disasters and optimizes returns.
                  </p>

                  <h3>Quarterly Checklist (Every 3 Months):</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          Check for Dividend Cuts or Suspensions
                        </h4>
                        <p className="text-sm ml-7">
                          Review each holding's latest earnings report. Look for "reduced dividend," "suspended payout,"
                          or declining free cash flow. Sell immediately if dividend is cut.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          Review Position Sizes
                        </h4>
                        <p className="text-sm ml-7">
                          If any stock grew to more than 6% of portfolio, trim it back to 5%. Sell the excess and reinvest
                          in underweight positions or new opportunities.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          Verify Sector Balance
                        </h4>
                        <p className="text-sm ml-7">
                          Ensure no sector exceeds 25% of total value. Technology and healthcare tend to grow fastest,
                          so rebalance into slower sectors like utilities or consumer staples.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          Monitor Payout Ratios
                        </h4>
                        <p className="text-sm ml-7">
                          Check if any payout ratios climbed above 80%. If yes, research why. Declining earnings? One-time
                          expense? If earnings are genuinely falling, consider selling before the dividend cut.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          Add New Money
                        </h4>
                        <p className="text-sm ml-7">
                          Deploy fresh capital to the most underweight positions or highest-conviction new ideas. Avoid
                          buying more of your largest holdings just because they've performed well.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          Track Total Return
                        </h4>
                        <p className="text-sm ml-7">
                          Calculate your portfolio's total return: (current value - invested capital + dividends received)
                          / invested capital. Aim for 8-12% annually including dividends.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>When to Sell a Dividend Stock:</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        Sell Immediately If:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Dividend is cut or suspended:</strong> Rare exceptions, but usually signals deeper problems</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Payout ratio exceeds 100%:</strong> Unsustainable - paying more than they earn</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Revenue declining 3+ consecutive quarters:</strong> Shrinking business kills dividend growth</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Debt-to-equity spikes above 2.0:</strong> Financial distress often leads to dividend cuts</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Better opportunity elsewhere:</strong> Only if significantly better risk/reward (swap, don't abandon)</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section 3 */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-green-600 to-teal-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Track Your Dividend Growth</h3>
                      <p className="mb-6 text-green-100">
                        Model your portfolio's dividend growth over time and see when you'll reach financial independence.
                      </p>
                      <Link href="/calculators/dividend-growth">
                        <Button size="lg" variant="secondary" className="gap-2">
                          <TrendingUp className="h-5 w-5" />
                          Dividend Growth Calculator
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </section>

                {/* Sample Portfolios */}
                <section id="sample-portfolios">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Sample Dividend Portfolios by Size
                  </h2>
                  <p>
                    Here are three ready-to-use portfolio templates based on your starting capital. Copy these exactly or
                    use as inspiration for your own mix.
                  </p>

                  <h3 className="mt-8">Beginner Portfolio: $10,000</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Strategy: Keep It Simple with ETFs</h4>
                        <p className="text-sm mb-4">
                          At $10K, you can't properly diversify individual stocks. Focus on 2-3 dividend ETFs to get broad
                          exposure without overconcentration.
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Ticker</th>
                              <th className="border p-3 text-left">Name</th>
                              <th className="border p-3 text-center">Allocation</th>
                              <th className="border p-3 text-right">Amount</th>
                              <th className="border p-3 text-center">Yield</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">SCHD</td>
                              <td className="border p-3">Schwab U.S. Dividend Equity ETF</td>
                              <td className="border p-3 text-center">50%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">3.5%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">VYM</td>
                              <td className="border p-3">Vanguard High Dividend Yield ETF</td>
                              <td className="border p-3 text-center">30%</td>
                              <td className="border p-3 text-right">$3,000</td>
                              <td className="border p-3 text-center">2.9%</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">VIG</td>
                              <td className="border p-3">Vanguard Dividend Appreciation ETF</td>
                              <td className="border p-3 text-center">20%</td>
                              <td className="border p-3 text-right">$2,000</td>
                              <td className="border p-3 text-center">1.9%</td>
                            </tr>
                            <tr className="bg-slate-100 dark:bg-slate-800 font-bold">
                              <td className="border p-3" colspan="3">Portfolio Totals</td>
                              <td className="border p-3 text-right">$10,000</td>
                              <td className="border p-3 text-center">3.0%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 space-y-2 text-sm">
                        <p><strong>Expected Annual Income:</strong> $300</p>
                        <p><strong>Expected Dividend Growth:</strong> 7-9% per year</p>
                        <p><strong>Number of Holdings:</strong> 650+ companies (via ETFs)</p>
                        <p><strong>Maintenance Required:</strong> 30 minutes per year</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="mt-8">Intermediate Portfolio: $50,000</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Strategy: Hybrid (60% ETFs + 40% Individual Stocks)</h4>
                        <p className="text-sm mb-4">
                          At $50K, you can add individual stocks for higher yields while keeping ETF core for stability.
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Ticker</th>
                              <th className="border p-3 text-left">Name</th>
                              <th className="border p-3 text-center">Allocation</th>
                              <th className="border p-3 text-right">Amount</th>
                              <th className="border p-3 text-center">Yield</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                              <td className="border p-3 font-bold" colspan="5">CORE ETF HOLDINGS (60%)</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">SCHD</td>
                              <td className="border p-3">Schwab U.S. Dividend Equity ETF</td>
                              <td className="border p-3 text-center">40%</td>
                              <td className="border p-3 text-right">$20,000</td>
                              <td className="border p-3 text-center">3.5%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">VIG</td>
                              <td className="border p-3">Vanguard Dividend Appreciation ETF</td>
                              <td className="border p-3 text-center">20%</td>
                              <td className="border p-3 text-right">$10,000</td>
                              <td className="border p-3 text-center">1.9%</td>
                            </tr>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                              <td className="border p-3 font-bold" colspan="5">INDIVIDUAL DIVIDEND GROWTH STOCKS (25%)</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">JNJ</td>
                              <td className="border p-3">Johnson & Johnson</td>
                              <td className="border p-3 text-center">6%</td>
                              <td className="border p-3 text-right">$3,000</td>
                              <td className="border p-3 text-center">3.1%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">MSFT</td>
                              <td className="border p-3">Microsoft</td>
                              <td className="border p-3 text-center">6%</td>
                              <td className="border p-3 text-right">$3,000</td>
                              <td className="border p-3 text-center">0.8%</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">PG</td>
                              <td className="border p-3">Procter & Gamble</td>
                              <td className="border p-3 text-center">6%</td>
                              <td className="border p-3 text-right">$3,000</td>
                              <td className="border p-3 text-center">2.4%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">V</td>
                              <td className="border p-3">Visa</td>
                              <td className="border p-3 text-center">7%</td>
                              <td className="border p-3 text-right">$3,500</td>
                              <td className="border p-3 text-center">0.7%</td>
                            </tr>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                              <td className="border p-3 font-bold" colspan="5">HIGH YIELD POSITIONS (15%)</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">O</td>
                              <td className="border p-3">Realty Income (REIT)</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$2,500</td>
                              <td className="border p-3 text-center">5.5%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">NEE</td>
                              <td className="border p-3">NextEra Energy (Utility)</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$2,500</td>
                              <td className="border p-3 text-center">2.8%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">XOM</td>
                              <td className="border p-3">ExxonMobil (Energy)</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$2,500</td>
                              <td className="border p-3 text-center">3.4%</td>
                            </tr>
                            <tr className="bg-slate-100 dark:bg-slate-800 font-bold">
                              <td className="border p-3" colspan="3">Portfolio Totals</td>
                              <td className="border p-3 text-right">$50,000</td>
                              <td className="border p-3 text-center">2.8%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 space-y-2 text-sm">
                        <p><strong>Expected Annual Income:</strong> $1,400</p>
                        <p><strong>Expected Dividend Growth:</strong> 8-10% per year</p>
                        <p><strong>Number of Holdings:</strong> 7 individual stocks + 2 ETFs (500+ companies total)</p>
                        <p><strong>Maintenance Required:</strong> 2 hours per quarter</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="mt-8">Advanced Portfolio: $100,000+</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Strategy: Individual Stock Focus (80% Stocks + 20% ETFs)</h4>
                        <p className="text-sm mb-4">
                          At $100K+, you have enough capital to properly diversify 20-25 individual stocks across all sectors.
                          Add ETFs only to fill gaps.
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Ticker</th>
                              <th className="border p-3 text-left">Name</th>
                              <th className="border p-3 text-center">%</th>
                              <th className="border p-3 text-right">Amount</th>
                              <th className="border p-3 text-center">Yield</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                              <td className="border p-3 font-bold" colspan="5">DIVIDEND GROWTH STOCKS (50%)</td>
                            </tr>
                            <tr>
                              <td className="border p-3">MSFT</td>
                              <td className="border p-3">Microsoft</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">0.8%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">AAPL</td>
                              <td className="border p-3">Apple</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">0.5%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">V</td>
                              <td className="border p-3">Visa</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">0.7%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">UNH</td>
                              <td className="border p-3">UnitedHealth Group</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">1.3%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">JNJ</td>
                              <td className="border p-3">Johnson & Johnson</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">3.1%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">PG</td>
                              <td className="border p-3">Procter & Gamble</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">2.4%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">KO</td>
                              <td className="border p-3">Coca-Cola</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">3.0%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">COST</td>
                              <td className="border p-3">Costco</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">0.6%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">JPM</td>
                              <td className="border p-3">JPMorgan Chase</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">2.2%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">HON</td>
                              <td className="border p-3">Honeywell</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">2.0%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">LOW</td>
                              <td className="border p-3">Lowe's</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">1.8%</td>
                            </tr>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                              <td className="border p-3 font-bold" colspan="5">HIGH YIELD POSITIONS (30%)</td>
                            </tr>
                            <tr>
                              <td className="border p-3">O</td>
                              <td className="border p-3">Realty Income (REIT)</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">5.5%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">VICI</td>
                              <td className="border p-3">VICI Properties (REIT)</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">5.2%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">NEE</td>
                              <td className="border p-3">NextEra Energy</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">2.8%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">DUK</td>
                              <td className="border p-3">Duke Energy</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">4.0%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">XOM</td>
                              <td className="border p-3">ExxonMobil</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">3.4%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">CVX</td>
                              <td className="border p-3">Chevron</td>
                              <td className="border p-3 text-center">4%</td>
                              <td className="border p-3 text-right">$4,000</td>
                              <td className="border p-3 text-center">3.7%</td>
                            </tr>
                            <tr>
                              <td className="border p-3">T</td>
                              <td className="border p-3">AT&T</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-right">$5,000</td>
                              <td className="border p-3 text-center">5.8%</td>
                            </tr>
                            <tr className="bg-slate-200 dark:bg-slate-700">
                              <td className="border p-3 font-bold" colspan="5">DIVERSIFICATION ETFs (20%)</td>
                            </tr>
                            <tr>
                              <td className="border p-3">SCHD</td>
                              <td className="border p-3">Schwab U.S. Dividend Equity ETF</td>
                              <td className="border p-3 text-center">10%</td>
                              <td className="border p-3 text-right">$10,000</td>
                              <td className="border p-3 text-center">3.5%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3">VXUS</td>
                              <td className="border p-3">Vanguard Total International Stock ETF</td>
                              <td className="border p-3 text-center">10%</td>
                              <td className="border p-3 text-right">$10,000</td>
                              <td className="border p-3 text-center">3.1%</td>
                            </tr>
                            <tr className="bg-slate-100 dark:bg-slate-800 font-bold">
                              <td className="border p-3" colspan="3">Portfolio Totals (20 positions)</td>
                              <td className="border p-3 text-right">$100,000</td>
                              <td className="border p-3 text-center">2.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 space-y-2 text-sm">
                        <p><strong>Expected Annual Income:</strong> $2,900</p>
                        <p><strong>Expected Dividend Growth:</strong> 7-9% per year</p>
                        <p><strong>Sector Diversification:</strong> 9 sectors (Tech, Healthcare, Financials, Consumer, REITs, Utilities, Energy, Industrials, International)</p>
                        <p><strong>Maintenance Required:</strong> 3 hours per quarter</p>
                        <p><strong>Income in 10 Years:</strong> ~$6,500/year (assuming 8% dividend growth)</p>
                        <p><strong>Income in 20 Years:</strong> ~$14,500/year</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    7 Common Mistakes to Avoid
                  </h2>
                  <p>
                    Learn from others' expensive errors. Here are the most common dividend investing mistakes that destroy
                    portfolios:
                  </p>

                  <div className="space-y-6 my-8">
                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">1</span>
                          Chasing the Highest Yields
                        </h3>
                        <p className="text-sm mb-3">
                          Beginners often buy the 8-12% yielders without researching. These are usually yield traps - stocks
                          about to cut dividends.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: Stick to 2-6% yields. If it seems too good to be true, it is.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">2</span>
                          Ignoring Payout Ratios
                        </h3>
                        <p className="text-sm mb-3">
                          A company paying out 95% of earnings has zero room for growth or economic downturns. Dividend cuts
                          follow.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: Only buy stocks with payout ratios under 70%. Under 60% is ideal.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">3</span>
                          Poor Diversification
                        </h3>
                        <p className="text-sm mb-3">
                          Putting 30% in one stock or 50% in one sector. When that sector crashes (energy 2014, banks 2008),
                          your entire portfolio implodes.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: Max 5% per stock, max 25% per sector, minimum 15 total holdings.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">4</span>
                          Not Enabling DRIP
                        </h3>
                        <p className="text-sm mb-3">
                          Taking dividends as cash instead of reinvesting. You miss the compounding magic that turns $10,000
                          into $100,000+ over 30 years.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: Enable automatic dividend reinvestment on every holding, every time.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">5</span>
                          Panic Selling During Crashes
                        </h3>
                        <p className="text-sm mb-3">
                          Selling quality dividend stocks when they drop 20-30% during market corrections. You lock in losses
                          and miss the recovery.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: If the dividend is maintained, HOLD. Market crashes are buying opportunities, not selling signals.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">6</span>
                          Neglecting International Diversification
                        </h3>
                        <p className="text-sm mb-3">
                          100% U.S. stocks means missing European and Asian dividend opportunities. Also adds currency risk
                          if the dollar crashes.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: Allocate 10-20% to international dividend stocks or ETFs like VXUS, VIGI.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">7</span>
                          Holding After Dividend Cuts
                        </h3>
                        <p className="text-sm mb-3">
                          "It'll come back!" No, it won't. Companies that cut dividends rarely restore them for 5-10 years.
                          You're better off redeploying capital.
                        </p>
                        <p className="text-sm font-semibold text-red-600">
                          Fix: Sell immediately when dividends are cut unless there's clear evidence it's temporary (like COVID).
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Building?</h3>
                      <p className="mb-6 text-blue-100">
                        Open a brokerage account with one of these top-rated dividend brokers and start your portfolio today.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="#step-1">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Users className="h-5 w-5" />
                            Compare Brokers
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Calculator className="h-5 w-5" />
                            Model Your Portfolio
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Key Takeaways */}
                <section>
                  <h2>Key Takeaways: Your Action Plan</h2>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Start with $1,000-10,000:</strong> Use dividend ETFs (SCHD, VYM) for instant diversification</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Target 3-5% yields:</strong> Sweet spot for safety and income. Avoid 8%+ yield traps</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Screen for quality:</strong> Payout ratio under 60%, 10+ years dividend growth, strong free cash flow</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Diversify properly:</strong> 15-25 stocks, 8+ sectors, max 5% per position, max 25% per sector</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Enable DRIP always:</strong> Automatic reinvestment compounds income exponentially over decades</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Review quarterly:</strong> Check for dividend cuts, rebalance sectors, trim winners above 6%</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Think long-term:</strong> Dividend portfolios take 10+ years to reach full potential. Be patient.</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Building a dividend portfolio is one of the most powerful wealth-building strategies available to retail
                    investors. Start small, stay disciplined, reinvest everything, and let compound interest work its magic.
                    Your future self will thank you.
                  </p>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Building Your Dividend Portfolio</h2>
                  <p>
                    Ready to get started? These brokers offer commission-free trades, automatic DRIP, fractional shares,
                    and research tools perfect for dividend investors:
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Continue Learning: Related Guides</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. Dividend ETFs: Which Strategy Wins?
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/calculators/drip" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      DRIP Calculator: Project Your Dividend Income
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
