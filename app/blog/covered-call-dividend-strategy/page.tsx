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
  Shield,
  Zap,
  TrendingDown,
  Calendar,
  Calculator as CalcIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Covered Call + Dividend Strategy: Double Your Income in 2026',
  description: 'Learn how to combine covered calls with dividend stocks to generate 8-12% annual income. Complete guide with real examples, best stocks, strike selection, and risks explained.',
  keywords: 'covered call dividend stocks, covered call strategy, dividend income strategy, selling covered calls, options income, double dividend income, best covered call stocks, dividend and options',
  openGraph: {
    title: 'Covered Call + Dividend Strategy: Double Your Income',
    description: 'Generate 8-12% annual returns by combining dividend stocks with covered call premiums. Real examples and step-by-step strategy.',
    type: 'article',
  }
}

export default function CoveredCallDividendStrategyPage() {
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
                <Badge className="mb-4">Advanced Income Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Covered Call + Dividend Strategy: Double Your Income
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Discover how to generate 8-12% annual returns by combining dividend stocks with covered call premiums.
                  Real-world examples, best stocks, strike selection strategies, and risks explained in plain English.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Strategy
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Strategy:</strong> Own dividend stocks + sell monthly covered calls to collect premiums on top of dividends</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Income Potential:</strong> 8-12% total annual return (4-5% dividends + 4-7% option premiums)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Stocks:</strong> Stable dividend aristocrats with moderate volatility (Ford, AT&T, REITs like O, JEPI)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Main Risk:</strong> Stock gets called away if price rises above strike, capping upside gains</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-are-covered-calls" className="text-blue-600 hover:underline">What Are Covered Calls?</a></li>
                    <li><a href="#how-it-works" className="text-blue-600 hover:underline">How the Strategy Works</a></li>
                    <li><a href="#real-example" className="text-blue-600 hover:underline">Real Income Example</a></li>
                    <li><a href="#best-stocks" className="text-blue-600 hover:underline">Best Stocks for Covered Calls</a></li>
                    <li><a href="#strike-selection" className="text-blue-600 hover:underline">Strike Price Selection</a></li>
                    <li><a href="#when-to-write" className="text-blue-600 hover:underline">When to Write Calls</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks & Downsides</a></li>
                    <li><a href="#income-calculator" className="text-blue-600 hover:underline">Income Calculator</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What Are Covered Calls */}
                <section id="what-are-covered-calls">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    What Are Covered Calls?
                  </h2>
                  <p>
                    A <strong>covered call</strong> is an options strategy where you sell call options on stocks you already own.
                    Think of it as renting out your shares temporarily in exchange for immediate cash (the premium).
                  </p>

                  <h3>The Basic Mechanics</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-base mb-2">Step 1: Own the Stock</h4>
                        <p className="text-sm mb-0">You must own 100 shares (or multiples of 100) of the underlying stock. Example: 100 shares of AT&T at $20 = $2,000 investment.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base mb-2">Step 2: Sell a Call Option</h4>
                        <p className="text-sm mb-0">You sell someone the <em>right</em> to buy your shares at a specific price (strike price) by a specific date (expiration). You collect cash immediately.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-base mb-2">Step 3: Three Possible Outcomes</h4>
                        <ul className="text-sm space-y-1 mb-0">
                          <li><strong>Stock below strike:</strong> Option expires worthless. You keep premium + shares + dividends. Win!</li>
                          <li><strong>Stock above strike:</strong> Shares get called away. You keep premium + dividends + capped profit.</li>
                          <li><strong>Stock crashes:</strong> Premium provides small cushion but you still lose on stock decline.</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why Combine With Dividends?</h3>
                  <p>
                    Dividend stocks are perfect for covered calls because:
                  </p>
                  <ul>
                    <li><strong>Stable price movements</strong> - Dividend aristocrats like Johnson & Johnson don't swing wildly, making premiums predictable</li>
                    <li><strong>Quarterly dividends</strong> - You collect dividends even while holding positions between option expirations</li>
                    <li><strong>Lower volatility stocks</strong> - Blue-chip dividend payers have enough volatility to generate decent premiums without excessive risk</li>
                    <li><strong>Long-term holdings</strong> - You plan to hold these stocks anyway, so selling calls generates bonus income</li>
                  </ul>
                </section>

                {/* How It Works */}
                <section id="how-it-works">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    How the Strategy Works: Step-by-Step
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6 space-y-4">
                      <h3 className="text-lg font-bold mb-2">Complete Monthly Cycle Example</h3>

                      <div className="border-l-4 border-yellow-600 pl-4">
                        <p className="font-semibold mb-1">Day 1: Buy Stock + Sell Call</p>
                        <ul className="text-sm space-y-1">
                          <li>Buy 100 shares of AT&T (T) at $20/share = $2,000</li>
                          <li>Sell 1 call option: $21 strike, 30 days expiration</li>
                          <li>Collect premium: $0.35/share × 100 = $35 instant cash</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <p className="font-semibold mb-1">Day 15: Dividend Payment</p>
                        <ul className="text-sm space-y-1">
                          <li>AT&T pays quarterly dividend: $0.28/share</li>
                          <li>You receive: $0.28 × 100 = $28</li>
                          <li>Total income so far: $35 (premium) + $28 (dividend) = $63</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-600 pl-4">
                        <p className="font-semibold mb-1">Day 30: Option Expires</p>
                        <p className="text-sm font-semibold mb-2">Scenario A: Stock at $20.50 (below $21 strike)</p>
                        <ul className="text-sm space-y-1 mb-3">
                          <li>Option expires worthless - you keep shares</li>
                          <li>Keep $35 premium + $28 dividend = $63 total</li>
                          <li>Shares worth $2,050 (up $50)</li>
                          <li>Sell another call for next month, repeat!</li>
                        </ul>

                        <p className="text-sm font-semibold mb-2">Scenario B: Stock at $22 (above $21 strike)</p>
                        <ul className="text-sm space-y-1">
                          <li>Shares called away at $21 = $2,100</li>
                          <li>Profit: $100 (stock gain) + $35 (premium) + $28 (dividend) = $163</li>
                          <li>Return: $163 / $2,000 = 8.15% in one month</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Real Example */}
                <section id="real-example">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Real Income Example: Ford Stock (F)
                  </h2>
                  <p>
                    Let's run a real-world scenario using Ford Motor Company (F), a popular dividend stock for covered calls.
                  </p>

                  <h3>Portfolio Setup</h3>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-base mb-3">Initial Investment</h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex justify-between">
                              <span>Stock Price:</span>
                              <strong>$12.00</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>Shares Purchased:</span>
                              <strong>500 (5 contracts)</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>Total Investment:</span>
                              <strong>$6,000</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>Annual Dividend:</span>
                              <strong>$0.60/share (5% yield)</strong>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-base mb-3">Monthly Covered Call</h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex justify-between">
                              <span>Strike Price:</span>
                              <strong>$13.00 (8% OTM)</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>Expiration:</span>
                              <strong>30 days</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>Premium:</span>
                              <strong>$0.25/share</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>Monthly Income:</span>
                              <strong>$125 (500 × $0.25)</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>12-Month Income Breakdown</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Income Source</th>
                          <th className="border p-3 text-right">Per Share</th>
                          <th className="border p-3 text-right">500 Shares</th>
                          <th className="border p-3 text-right">Annual Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Income</td>
                          <td className="border p-3 text-right">$0.60</td>
                          <td className="border p-3 text-right">$300</td>
                          <td className="border p-3 text-right text-green-600 font-bold">$300</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Option Premiums</td>
                          <td className="border p-3 text-right">$0.25/month</td>
                          <td className="border p-3 text-right">$125/month</td>
                          <td className="border p-3 text-right text-green-600 font-bold">$1,500</td>
                        </tr>
                        <tr className="bg-green-50 dark:bg-green-950/50">
                          <td className="border p-3 font-semibold">TOTAL INCOME</td>
                          <td className="border p-3 text-right font-bold">$3.60</td>
                          <td className="border p-3 text-right font-bold">-</td>
                          <td className="border p-3 text-right font-bold text-green-600 text-lg">$1,800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3">Total Return Analysis</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Initial Investment:</span>
                          <strong className="text-xl">$6,000</strong>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Annual Cash Income:</span>
                          <strong className="text-xl text-green-600">$1,800</strong>
                        </div>
                        <div className="flex justify-between items-center border-t pt-3">
                          <span className="text-lg">Effective Annual Return:</span>
                          <strong className="text-2xl text-green-600">30.0%</strong>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          That's 5% from dividends + 25% annualized from option premiums!
                          (Assumes stock stays below $13 and you repeat monthly)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-2">Important Reality Check</h4>
                          <p className="text-sm mb-0">
                            The 30% return assumes you successfully sell 12 monthly calls without the stock being called away.
                            In reality, expect 8-15% annual returns as you'll occasionally get assigned, miss premium opportunities
                            during volatile periods, or adjust strikes to avoid assignment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Best Stocks */}
                <section id="best-stocks">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-purple-600" />
                    Best Dividend Stocks for Covered Calls
                  </h2>
                  <p>
                    Not all dividend stocks work well for covered calls. You need the Goldilocks zone: enough volatility
                    to generate decent premiums, but not so much that your stock gets called away constantly or crashes.
                  </p>

                  <h3>Ideal Stock Characteristics</h3>
                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Moderate Volatility (15-30%)</h4>
                          <p className="text-sm mb-0">Too low = tiny premiums. Too high = constant assignment or big losses. Sweet spot: 20-25% implied volatility.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Stable Dividend (4%+ yield)</h4>
                          <p className="text-sm mb-0">You want reliable dividend income. Look for 5-10 year dividend growth history.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">High Liquidity</h4>
                          <p className="text-sm mb-0">Tight bid-ask spreads on options = better premiums. Stick to stocks trading 1M+ shares daily.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strong Fundamentals</h4>
                          <p className="text-sm mb-0">You'll hold these long-term. Choose companies you believe in, not penny stocks.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Top 10 Stocks for Covered Call + Dividend Strategy</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Stock (Ticker)</th>
                          <th className="border p-3 text-center">Div Yield</th>
                          <th className="border p-3 text-center">IV Rank</th>
                          <th className="border p-3 text-center">Est. Premium</th>
                          <th className="border p-3 text-center">Total Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">
                            <strong>Ford (F)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Auto manufacturer</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">5.0%</td>
                          <td className="border p-3 text-center">High (25-30%)</td>
                          <td className="border p-3 text-center">5-7%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">10-12%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">
                            <strong>AT&T (T)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Telecom</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">5.6%</td>
                          <td className="border p-3 text-center">Medium (20-25%)</td>
                          <td className="border p-3 text-center">3-5%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">8-10%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">
                            <strong>Realty Income (O)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Monthly dividend REIT</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">5.5%</td>
                          <td className="border p-3 text-center">Medium (18-22%)</td>
                          <td className="border p-3 text-center">3-4%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">8-9%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">
                            <strong>JEPI</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Covered call ETF</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">7.5%</td>
                          <td className="border p-3 text-center">Medium (20%)</td>
                          <td className="border p-3 text-center">2-3%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">9-10%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">
                            <strong>Energy Transfer (ET)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Energy MLP</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">8.0%</td>
                          <td className="border p-3 text-center">High (25-30%)</td>
                          <td className="border p-3 text-center">4-6%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">12-14%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">
                            <strong>Pfizer (PFE)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Pharma</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">6.0%</td>
                          <td className="border p-3 text-center">Medium (22-26%)</td>
                          <td className="border p-3 text-center">4-5%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">10-11%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">
                            <strong>Verizon (VZ)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Telecom</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">6.5%</td>
                          <td className="border p-3 text-center">Low-Med (16-20%)</td>
                          <td className="border p-3 text-center">2-4%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">8-10%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">
                            <strong>3M (MMM)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Industrials</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">5.8%</td>
                          <td className="border p-3 text-center">Medium (20-24%)</td>
                          <td className="border p-3 text-center">3-5%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">9-11%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">
                            <strong>Altria (MO)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Tobacco</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">8.5%</td>
                          <td className="border p-3 text-center">Medium (18-22%)</td>
                          <td className="border p-3 text-center">3-4%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">11-12%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">
                            <strong>AGNC Investment (AGNC)</strong>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Mortgage REIT</div>
                          </td>
                          <td className="border p-3 text-center font-semibold">14.0%</td>
                          <td className="border p-3 text-center">Very High (30%+)</td>
                          <td className="border p-3 text-center">6-8%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">20-22%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Pro Tip: Use JEPI for Instant Covered Call Income
                      </h4>
                      <p className="text-sm mb-0">
                        <strong>JEPI (JPMorgan Equity Premium Income ETF)</strong> is an ETF that automatically runs a covered call
                        strategy on S&P 500 stocks. You get 7-9% annual distributions without doing any options trading yourself.
                        Perfect for beginners or tax-advantaged accounts (IRA) where options trading is restricted.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Strike Selection */}
                <section id="strike-selection">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-red-600" />
                    Strike Price Selection: The Art of Not Getting Called Away
                  </h2>
                  <p>
                    The strike price is the most critical decision. Too close to current price = higher premiums but higher assignment risk.
                    Too far away = lower premiums but safer position.
                  </p>

                  <h3>Three Strike Selection Strategies</h3>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-red-600" />
                        Strategy 1: Aggressive (ATM or Slightly OTM)
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-sm">Strike: At-the-money or 1-3% out-of-the-money</p>
                          <p className="text-sm">Example: Stock at $50, sell $50 or $51 call</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-green-600 mb-2">Pros:</p>
                            <ul className="space-y-1">
                              <li>• Maximum premium (1-3% per month)</li>
                              <li>• 12-36% annualized option income</li>
                              <li>• Works great in sideways markets</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-red-600 mb-2">Cons:</p>
                            <ul className="space-y-1">
                              <li>• Very high assignment risk (50%+)</li>
                              <li>• Miss out on stock upside</li>
                              <li>• Constant buying/selling friction</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm italic border-t pt-3">Best for: Stocks you expect to trade sideways or decline slightly. Short-term income generation.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-2 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-yellow-600" />
                        Strategy 2: Balanced (5-10% OTM) - RECOMMENDED
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-sm">Strike: 5-10% above current price</p>
                          <p className="text-sm">Example: Stock at $50, sell $53-55 call</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-green-600 mb-2">Pros:</p>
                            <ul className="space-y-1">
                              <li>• Good premium (0.5-1.5% per month)</li>
                              <li>• 6-18% annualized option income</li>
                              <li>• Lower assignment risk (20-30%)</li>
                              <li>• Still capture some upside</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-red-600 mb-2">Cons:</p>
                            <ul className="space-y-1">
                              <li>• Lower premiums than aggressive</li>
                              <li>• Still capped upside at strike</li>
                              <li>• Occasionally get assigned</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm italic border-t pt-3">Best for: Long-term holdings where you want income but also some growth potential. Most versatile strategy.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50 border-2 border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        Strategy 3: Conservative (15-25% OTM)
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-sm">Strike: 15-25% above current price</p>
                          <p className="text-sm">Example: Stock at $50, sell $58-62 call</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-green-600 mb-2">Pros:</p>
                            <ul className="space-y-1">
                              <li>• Very low assignment risk (5-10%)</li>
                              <li>• Keep shares almost always</li>
                              <li>• Capture most upside moves</li>
                              <li>• Good for growth stocks</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-red-600 mb-2">Cons:</p>
                            <ul className="space-y-1">
                              <li>• Tiny premiums (0.2-0.5% per month)</li>
                              <li>• 2-6% annualized option income</li>
                              <li>• Barely worth the effort</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm italic border-t pt-3">Best for: Stocks you absolutely want to keep. Dividend growers like MSFT, AAPL where upside matters more than premium.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Strike Selection Formula (Quick Reference)</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CalcIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-bold mb-2">Beginner Formula: 0.30 Delta Sweet Spot</p>
                            <p className="text-sm mb-3">
                              Target options with <strong>0.25-0.35 delta</strong>. This represents a 25-35% chance of being in-the-money at expiration.
                              Usually corresponds to 5-8% OTM strikes on dividend stocks.
                            </p>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                              <p className="font-mono text-sm mb-2">If stock = $100:</p>
                              <ul className="font-mono text-sm space-y-1">
                                <li>• Target strike: $105-108</li>
                                <li>• Expected premium: $0.50-1.00 (0.5-1%)</li>
                                <li>• Assignment probability: ~25-35%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* When to Write */}
                <section id="when-to-write">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-indigo-600" />
                    When to Write Covered Calls: Timing Matters
                  </h2>
                  <p>
                    Not every moment is ideal for selling covered calls. Here's when to pull the trigger and when to wait.
                  </p>

                  <h3>Best Times to Write Covered Calls</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">After a Stock Price Run-Up</h4>
                          <p className="text-sm mb-0">
                            Your stock jumps 10-20% in a short period? Perfect time to lock in gains by selling calls slightly above current price.
                            You capture premium while protecting recent gains.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">High Volatility Periods</h4>
                          <p className="text-sm mb-0">
                            When VIX spikes or your stock's implied volatility jumps, premiums expand. Strike while the iron is hot.
                            Example: Write calls during earnings season (before announcement) for 2-3x normal premiums.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Beginning of the Month</h4>
                          <p className="text-sm mb-0">
                            Sell 30-45 day calls at month start for maximum time decay. Options lose value fastest in the final 30 days (theta decay).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">After Collecting Your Dividend</h4>
                          <p className="text-sm mb-0">
                            Sell calls right after the ex-dividend date. This ensures you collect the dividend payment before potential assignment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>When NOT to Write Covered Calls</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Before Earnings Announcements</h4>
                          <p className="text-sm mb-0">
                            Stock could gap up 20% overnight. You'd miss those gains. Exception: Sell calls specifically to profit from
                            elevated earnings IV if you don't expect big moves.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">During Strong Bull Markets</h4>
                          <p className="text-sm mb-0">
                            When your stock is in a confirmed uptrend with momentum, capping upside hurts. Let winners run.
                            Resume covered calls when price stabilizes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Before Expected Catalysts</h4>
                          <p className="text-sm mb-0">
                            FDA approval pending? Merger announcement expected? Major product launch? Don't cap your upside before
                            potentially explosive news.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">When You're Down Significantly</h4>
                          <p className="text-sm mb-0">
                            Stock dropped 30% and you're underwater? Selling calls now locks in losses. Wait for a bounce, then write calls
                            at or above your cost basis.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Optimal Expiration Period</h3>
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 text-center">Weekly (7 days)</h4>
                        <p className="text-sm text-center mb-3">0.3-0.5% premium</p>
                        <div className="text-xs space-y-2">
                          <p className="font-semibold text-green-600">Pros:</p>
                          <ul className="space-y-1">
                            <li>• Maximum annualized return</li>
                            <li>• Fast theta decay</li>
                            <li>• Quick adjustments</li>
                          </ul>
                          <p className="font-semibold text-red-600 mt-3">Cons:</p>
                          <ul className="space-y-1">
                            <li>• Time-intensive</li>
                            <li>• High commissions</li>
                            <li>• Stressful</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-500">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <h4 className="font-bold text-center">Monthly (30-45 days)</h4>
                          <Badge variant="default">Best</Badge>
                        </div>
                        <p className="text-sm text-center mb-3">1.0-2.0% premium</p>
                        <div className="text-xs space-y-2">
                          <p className="font-semibold text-green-600">Pros:</p>
                          <ul className="space-y-1">
                            <li>• Sweet spot for theta/premium</li>
                            <li>• Manageable workload</li>
                            <li>• Best risk/reward</li>
                          </ul>
                          <p className="font-semibold text-red-600 mt-3">Cons:</p>
                          <ul className="space-y-1">
                            <li>• Moderate time commitment</li>
                            <li>• Need monthly monitoring</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-2 text-center">Quarterly (60-90 days)</h4>
                        <p className="text-sm text-center mb-3">2.0-3.5% premium</p>
                        <div className="text-xs space-y-2">
                          <p className="font-semibold text-green-600">Pros:</p>
                          <ul className="space-y-1">
                            <li>• Higher total premium</li>
                            <li>• Less work</li>
                            <li>• Set and forget</li>
                          </ul>
                          <p className="font-semibold text-red-600 mt-3">Cons:</p>
                          <ul className="space-y-1">
                            <li>• Capital tied up longer</li>
                            <li>• Slow theta decay</li>
                            <li>• Hard to adjust</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    Risks & Downsides: What Can Go Wrong
                  </h2>
                  <p>
                    Covered calls sound perfect: free money on stocks you already own. But there's no free lunch in investing.
                    Here are the real risks you need to understand.
                  </p>

                  <h3>Major Risks</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-2 border-red-300 dark:border-red-700">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Risk #1: Capped Upside (Assignment)</h4>
                          <p className="text-sm mb-2">
                            <strong>The scenario:</strong> You sell a $50 call on your stock. It rockets to $70. Your shares get called away at $50.
                            You miss out on $20/share in gains.
                          </p>
                          <p className="text-sm mb-2">
                            <strong>Real example:</strong> In 2023, many investors sold calls on NVIDIA at $150-200. Stock went to $500+.
                            They made a few dollars in premium but missed 200%+ gains.
                          </p>
                          <p className="text-sm font-semibold text-red-700">
                            Mitigation: Only write calls on stocks you're willing to sell at the strike price. Don't use covered calls on
                            high-growth stocks.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Risk #2: Limited Downside Protection</h4>
                          <p className="text-sm mb-2">
                            <strong>The scenario:</strong> Stock drops from $50 to $30. You collected $1 premium. You still lost $19/share.
                          </p>
                          <p className="text-sm mb-2">
                            The premium provides a tiny cushion (2-3% typically) but doesn't protect against crashes. You're still 100%
                            exposed to downside beyond the premium collected.
                          </p>
                          <p className="text-sm font-semibold text-red-700">
                            Mitigation: Only write calls on fundamentally strong stocks you'd hold through volatility. Use stop losses or
                            protective puts for crash insurance.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Risk #3: Opportunity Cost</h4>
                          <p className="text-sm mb-2">
                            While collecting 1-2% monthly premiums, you might miss better opportunities. If the market rallies 30% and your
                            covered call positions only return 12%, you underperformed.
                          </p>
                          <p className="text-sm font-semibold text-red-700">
                            Mitigation: Use covered calls on only 30-50% of portfolio. Keep rest in pure equity exposure for full upside capture.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Risk #4: Tax Complexity</h4>
                          <p className="text-sm mb-2">
                            Premiums are taxed as short-term capital gains (ordinary income tax rates). If you hold stocks long-term but
                            constantly write calls, you lose long-term capital gains treatment on the shares when assigned.
                          </p>
                          <p className="text-sm font-semibold text-red-700">
                            Mitigation: Run covered calls in tax-advantaged accounts (IRA, 401k) or consult a tax professional about
                            qualified covered calls.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Risk #5: Early Assignment (Dividend Capture)</h4>
                          <p className="text-sm mb-2">
                            If you sell calls before the ex-dividend date, buyers might exercise early to capture the dividend. You miss the
                            dividend even though you planned to collect it.
                          </p>
                          <p className="text-sm font-semibold text-red-700">
                            Mitigation: Never sell calls that expire between now and ex-dividend date. Always write calls that expire after
                            dividend payment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Who Should NOT Use This Strategy</h3>
                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm"><strong>Growth stock investors:</strong> If you own TSLA, NVDA, or high-growth tech, capping upside defeats the purpose.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm"><strong>Hands-off investors:</strong> Covered calls require monthly monitoring and adjustments. Not truly passive.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm"><strong>Small portfolios (&lt;$10K):</strong> Need 100-share lots. With limited capital, better to just buy shares or ETFs.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm"><strong>Options beginners:</strong> Learn basic options mechanics first. Paper trade for 3-6 months before risking real money.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Income Calculator */}
                <section id="income-calculator" className="not-prose">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <CalcIcon className="h-8 w-8 text-green-600" />
                    Covered Call Income Calculator
                  </h2>

                  <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white mb-8">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Potential Income</h3>
                      <p className="mb-6 text-green-100">
                        See exactly how much income you could generate combining dividends with covered call premiums.
                        Model different stocks, strikes, and scenarios.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Quick Income Estimator</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Portfolio Size</th>
                              <th className="border p-3 text-center">Dividend Yield</th>
                              <th className="border p-3 text-center">Option Premium</th>
                              <th className="border p-3 text-center">Monthly Income</th>
                              <th className="border p-3 text-center">Annual Income</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">$10,000</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-center">1%/month</td>
                              <td className="border p-3 text-center font-semibold">$125</td>
                              <td className="border p-3 text-center text-green-600 font-bold">$1,500</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">$25,000</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-center">1%/month</td>
                              <td className="border p-3 text-center font-semibold">$312</td>
                              <td className="border p-3 text-center text-green-600 font-bold">$3,750</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">$50,000</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-center">1%/month</td>
                              <td className="border p-3 text-center font-semibold">$625</td>
                              <td className="border p-3 text-center text-green-600 font-bold">$7,500</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">$100,000</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-center">1%/month</td>
                              <td className="border p-3 text-center font-semibold">$1,250</td>
                              <td className="border p-3 text-center text-green-600 font-bold">$15,000</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">$250,000</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-center">1%/month</td>
                              <td className="border p-3 text-center font-semibold">$3,125</td>
                              <td className="border p-3 text-center text-green-600 font-bold">$37,500</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">$500,000</td>
                              <td className="border p-3 text-center">5%</td>
                              <td className="border p-3 text-center">1%/month</td>
                              <td className="border p-3 text-center font-semibold">$6,250</td>
                              <td className="border p-3 text-center text-green-600 font-bold">$75,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Assumes 5% annual dividend yield (0.42% monthly) + 1% monthly option premium = 1.42% monthly income = 17% annual return.
                        Actual results vary based on stock performance, strike selection, and assignment frequency.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Implementation Guide */}
                <section className="not-prose">
                  <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">How to Get Started (Step-by-Step)</h2>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Open an Options-Enabled Brokerage Account</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              You need Level 1 or Level 2 options approval. Most brokers require $2,000 minimum and basic options knowledge quiz.
                            </p>
                            <p className="text-sm font-semibold">Recommended brokers: Fidelity, TD Ameritrade, E*TRADE, Interactive Brokers</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Buy 100+ Shares of a Dividend Stock</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              Options trade in 100-share contracts. Start with one 100-share lot ($2,000-10,000 depending on stock price).
                            </p>
                            <p className="text-sm font-semibold">Beginner picks: AT&T ($20/share), Ford ($12/share), Realty Income ($60/share)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Sell Your First Covered Call (Sell-to-Open)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              In your broker's options chain, select a strike 5-10% above current price, 30-45 days out. Click "Sell to Open" for 1 contract.
                            </p>
                            <p className="text-sm font-semibold">Example: Stock at $20 → Sell $22 call expiring in 35 days for $0.30 premium</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Collect Premium & Manage Position</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              Premium ($30) credited instantly. Monitor weekly. If stock approaches strike, either let shares get called away
                              or "roll" the call (buy back current, sell new one at higher strike/later date).
                            </p>
                            <p className="text-sm font-semibold">Pro tip: Set alert at 80% of strike price to decide roll or assignment</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">5</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Repeat Monthly (Rinse & Repeat)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              On expiration day, if not assigned, sell a new call for next month. If assigned, use proceeds to buy another
                              100 shares and start over. Track income monthly.
                            </p>
                            <p className="text-sm font-semibold">Goal: 1-2% monthly income = 12-24% annual return</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Final Tips */}
                <section>
                  <h2>Advanced Tips for Maximizing Income</h2>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-base mb-1">Tip #1: Roll Winning Calls Up and Out</h3>
                          <p className="text-sm mb-0">
                            Stock approaching strike? Don't just accept assignment. "Roll" by buying back the current call and simultaneously
                            selling a new one at higher strike + later expiration. Collect more premium while keeping shares.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-base mb-1">Tip #2: Sell After Ex-Dividend Date</h3>
                          <p className="text-sm mb-0">
                            Always time your covered calls to expire after the ex-dividend date. This ensures you collect both the dividend
                            AND the premium without early assignment risk.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-base mb-1">Tip #3: Use DRIP to Compound Faster</h3>
                          <p className="text-sm mb-0">
                            Reinvest dividends automatically (DRIP). Use option premiums to buy more shares. Over time, you'll own more contracts,
                            generating exponentially more income.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-base mb-1">Tip #4: Diversify Across 3-5 Stocks</h3>
                          <p className="text-sm mb-0">
                            Don't put all capital in one stock's covered calls. Spread across 3-5 dividend stocks in different sectors.
                            Example: 1 REIT, 1 utility, 1 telecom, 1 energy, 1 consumer staple.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-base mb-1">Tip #5: Track Your True Return</h3>
                          <p className="text-sm mb-0">
                            Use a spreadsheet to track: premiums collected, dividends received, shares called away, and capital gains/losses.
                            Calculate real annualized return including assignment impacts.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Covered Call Strategies</h2>
                  <p>
                    You need a broker with low (or zero) options commissions, good options chains, and easy-to-use platforms.
                    Here are the top choices for covered call traders:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* Summary */}
                <section>
                  <h2>The Verdict: Is the Covered Call + Dividend Strategy Worth It?</h2>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Bottom Line</h3>
                      <div className="space-y-3 text-sm">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Yes, if:</strong> You want 8-15% annual income, own dividend stocks long-term, can handle moderate complexity, and accept capped upside</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>No, if:</strong> You own high-growth stocks, want maximum capital appreciation, prefer hands-off investing, or have &lt;$10K portfolio</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Perfect for:</strong> Retirees, income investors, and dividend portfolio holders who want to juice returns by 3-7% annually with moderate effort</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The covered call + dividend strategy isn't a get-rich-quick scheme. It's a methodical way to enhance income from
                    stable dividend stocks you already own. Used correctly on appropriate stocks (high-yield, low-growth blue chips),
                    you can realistically generate 8-12% total annual returns through a combination of dividends and option premiums.
                  </p>

                  <p>
                    Start small with 100 shares of a single stock. Paper trade first if you're new to options. Once comfortable,
                    scale up to 3-5 positions and make it a monthly routine. The income compounds surprisingly fast.
                  </p>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks 2026: Top 20 High-Yield Picks
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. ETFs: Which Strategy Wins?
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      DRIP Investing Guide: Automate Your Dividend Growth
                    </Link>
                    <Link href="/blog/retirement-income-from-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Generate $5,000/Month From Dividends
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
