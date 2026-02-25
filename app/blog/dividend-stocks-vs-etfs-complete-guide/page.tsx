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
  PieChart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Stocks vs. Dividend ETFs: Which Strategy Wins in 2026?',
  description: 'Complete comparison of individual dividend stocks vs dividend ETFs. Learn the pros, cons, returns, and which strategy fits your goals. Data-driven analysis with examples.',
  keywords: 'dividend stocks, dividend ETFs, individual stocks vs ETFs, best dividend strategy, dividend investing comparison, SCHD vs individual stocks',
  openGraph: {
    title: 'Dividend Stocks vs. ETFs: The Ultimate Comparison Guide',
    description: 'Discover which dividend strategy delivers better returns, lower risk, and fits your investing style.',
    type: 'article',
  }
}

export default function DividendStocksVsETFsPage() {
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
                <Badge className="mb-4">Strategy Comparison</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Stocks vs. Dividend ETFs: Which Strategy Wins?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The definitive comparison guide: individual dividend stocks vs dividend ETFs.
                  Discover which approach delivers better returns, lower risk, and fits your investing goals.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>15 min read</span>
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
                      <span><strong>Individual Stocks Win If:</strong> You have time to research, can handle volatility, want 5-7% yields, and enjoy active management</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend ETFs Win If:</strong> You want simplicity, automatic diversification, hands-off investing, and sleep-well-at-night peace of mind</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Strategy:</strong> Hybrid approach - 70% dividend ETFs for stability + 30% individual stocks for higher yields</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#individual-stocks" className="text-blue-600 hover:underline">Individual Dividend Stocks</a></li>
                    <li><a href="#dividend-etfs" className="text-blue-600 hover:underline">Dividend ETFs</a></li>
                    <li><a href="#head-to-head" className="text-blue-600 hover:underline">Head-to-Head Comparison</a></li>
                    <li><a href="#returns" className="text-blue-600 hover:underline">Historical Returns</a></li>
                    <li><a href="#best-for-you" className="text-blue-600 hover:underline">Which is Best for You?</a></li>
                    <li><a href="#hybrid-strategy" className="text-blue-600 hover:underline">The Hybrid Strategy</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Individual Stocks Section */}
                <section id="individual-stocks">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Individual Dividend Stocks: The Active Approach
                  </h2>
                  <p>
                    Individual dividend stocks are shares of single companies that pay regular dividends.
                    Think Johnson & Johnson, Coca-Cola, AT&T, or Realty Income. You handpick each stock
                    in your portfolio.
                  </p>

                  <h3>Pros of Individual Dividend Stocks</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Higher Dividend Yields</h4>
                          <p className="text-sm mb-0">Individual stocks often yield 4-7%, while ETFs average 2-4%. Example: Realty Income (O) yields 5.5% vs SCHD ETF at 3.5%.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Complete Control</h4>
                          <p className="text-sm mb-0">You choose exactly which companies to own. Don't like Big Tobacco? Exclude it. Love tech dividends? Overweight them.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Tax Efficiency</h4>
                          <p className="text-sm mb-0">Control when you sell for capital gains. ETFs can trigger unexpected capital gains distributions.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Lower Fees</h4>
                          <p className="text-sm mb-0">No ongoing expense ratios. Buy once, hold forever, pay nothing extra.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Cons of Individual Dividend Stocks</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Concentration Risk</h4>
                          <p className="text-sm mb-0">One bad stock can devastate your portfolio. Remember GE's 50% dividend cut in 2018?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Time-Intensive Research</h4>
                          <p className="text-sm mb-0">Analyzing financials, payout ratios, competitive moats takes 5-10 hours per stock.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Higher Volatility</h4>
                          <p className="text-sm mb-0">Single stocks can drop 20-50% during bad news. ETFs smooth this out across 50-100 holdings.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Cuts</h4>
                          <p className="text-sm mb-0">Companies can (and do) cut dividends during recessions. Disney, Boeing, Ford all cut in 2020.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* ETFs Section */}
                <section id="dividend-etfs">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Dividend ETFs: The Passive Approach
                  </h2>
                  <p>
                    Dividend ETFs are funds that hold baskets of dividend-paying stocks. Popular examples:
                    SCHD (Schwab U.S. Dividend Equity), VYM (Vanguard High Dividend Yield), DGRO (iShares
                    Core Dividend Growth).
                  </p>

                  <h3>Pros of Dividend ETFs</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Instant Diversification</h4>
                          <p className="text-sm mb-0">One share = 50-500 dividend stocks. SCHD holds 103 stocks. VYM holds 500+.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Zero Research Required</h4>
                          <p className="text-sm mb-0">Professional managers handle stock selection, rebalancing, and dividend cuts automatically.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Lower Volatility</h4>
                          <p className="text-sm mb-0">Diversification smooths out single-stock crashes. SCHD dropped only 10% in 2022 vs individual stocks down 30-50%.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Automatic Rebalancing</h4>
                          <p className="text-sm mb-0">ETFs drop underperformers and add new winners quarterly. You do nothing.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Cons of Dividend ETFs</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Lower Dividend Yields</h4>
                          <p className="text-sm mb-0">Most dividend ETFs yield 2.5-4% vs individual stocks at 4-7%. That's 40-50% less income.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Ongoing Fees</h4>
                          <p className="text-sm mb-0">Expense ratios of 0.06-0.35% annually. On $100K, that's $60-350/year forever.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Stock Selection Control</h4>
                          <p className="text-sm mb-0">You own what the ETF owns. Hate a company? Too bad, it's in the fund.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Unexpected Capital Gains</h4>
                          <p className="text-sm mb-0">ETFs can distribute capital gains even if you didn't sell. Rare but it happens.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Head-to-Head */}
                <section id="head-to-head">
                  <h2>Head-to-Head Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">Individual Stocks</th>
                          <th className="border p-3 text-center">Dividend ETFs</th>
                          <th className="border p-3 text-center">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Yield</td>
                          <td className="border p-3 text-center">4-7%</td>
                          <td className="border p-3 text-center">2-4%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Stocks</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Diversification</td>
                          <td className="border p-3 text-center">Manual (20-30 stocks)</td>
                          <td className="border p-3 text-center">Automatic (50-500 stocks)</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">ETFs</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Time Required</td>
                          <td className="border p-3 text-center">5-10 hrs/month</td>
                          <td className="border p-3 text-center">0 hrs/month</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">ETFs</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Fees</td>
                          <td className="border p-3 text-center">$0/year</td>
                          <td className="border p-3 text-center">0.06-0.35%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Stocks</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Volatility</td>
                          <td className="border p-3 text-center">High (±30-50%)</td>
                          <td className="border p-3 text-center">Moderate (±15-25%)</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">ETFs</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Control</td>
                          <td className="border p-3 text-center">Full</td>
                          <td className="border p-3 text-center">None</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Stocks</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Risk Level</td>
                          <td className="border p-3 text-center">High</td>
                          <td className="border p-3 text-center">Low-Moderate</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">ETFs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Which is Best */}
                <section id="best-for-you">
                  <h2>Which Strategy is Best for You?</h2>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-green-600" />
                        Choose Individual Dividend Stocks If:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You enjoy researching companies and reading annual reports</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You want maximum dividend income (5-7% yields)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You can handle 30-50% price swings without panicking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You have $50,000+ to properly diversify (20-30 stocks)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You want complete control over your holdings</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <PieChart className="h-6 w-6 text-purple-600" />
                        Choose Dividend ETFs If:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>You want hands-off, passive income with zero maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>You're a beginner with limited investing knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>You have a small portfolio ($1,000-50,000)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>You want automatic diversification and rebalancing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>You prefer lower volatility and sleep-well-at-night peace</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Hybrid Strategy */}
                <section id="hybrid-strategy">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    The Best Strategy: Hybrid Approach
                  </h2>
                  <p>
                    You don't have to choose just one! The smartest dividend investors use a <strong>hybrid strategy</strong>:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Recommended Allocation:</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">70% Dividend ETFs (Core Holdings)</span>
                            <Badge>Stability</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-purple-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            SCHD, VYM, DGRO for diversified, stable income (3-4% yield)
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">30% Individual Stocks (Satellite Holdings)</span>
                            <Badge variant="secondary">Higher Yield</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            5-10 hand-picked high-yielders like REITs, utilities, energy (5-7% yield)
                          </p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="font-semibold">Portfolio Yield: ~4.0%</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            (70% × 3.5%) + (30% × 6.0%) = 4.25% blended yield
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why This Works</h3>
                  <ul>
                    <li><strong>Best of Both Worlds:</strong> Stability from ETFs + higher income from individual stocks</li>
                    <li><strong>Reduced Risk:</strong> Individual stock crashes only affect 30% of portfolio</li>
                    <li><strong>Higher Overall Yield:</strong> 4.25% vs 3.5% from 100% ETFs</li>
                    <li><strong>Learning Opportunity:</strong> Build stock-picking skills without risking entire portfolio</li>
                  </ul>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Your Dividend Portfolio?</h3>
                      <p className="mb-6 text-blue-100">
                        Use our calculators to model your dividend strategy and see projections for your specific situation.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
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

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Investing</h2>
                  <p>
                    Whether you choose individual stocks or ETFs, you need a brokerage account. Here are the
                    top-rated brokers for dividend investors:
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
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/blog/how-to-choose-dividend-broker" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Choose the Best Dividend Broker
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
