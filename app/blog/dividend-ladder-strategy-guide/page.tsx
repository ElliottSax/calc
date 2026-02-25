import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  AlertCircle,
  Clock,
  Wallet,
  RefreshCw,
  BarChart3,
  PieChart,
  Layers
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Ladder Strategy: Create Monthly Income Streams (2026 Guide)',
  description: 'Master dividend laddering to create consistent monthly income. Complete 12-stock portfolio example, payment calendars, build strategies, and maintenance tips for weekly cash flow.',
  keywords: 'dividend ladder, dividend laddering strategy, monthly dividend income, dividend payment calendar, dividend portfolio strategy, consistent dividend income, weekly dividend stocks',
  openGraph: {
    title: 'Dividend Ladder Strategy: Generate Weekly Income with 12 Stocks',
    description: 'Build a dividend ladder for consistent monthly income. Complete portfolio example with payment dates for weekly cash flow.',
    type: 'article',
  }
}

export default function DividendLadderStrategyPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Income Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Ladder Strategy: Create Monthly Income Streams
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Build a dividend ladder portfolio that pays you every week. Complete guide with 12-stock
                  example, payment calendars, construction strategies, and maintenance tips for consistent cash flow.
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
                      <span><strong>What It Is:</strong> A dividend ladder is a portfolio of 12+ stocks with staggered payment dates to create weekly/monthly income instead of quarterly lumps</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Minimum Investment:</strong> Start with $12,000-15,000 ($1,000-1,250 per stock) for proper diversification</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Weekly Income:</strong> Our 12-stock example generates $180-250/week vs $780/quarter from a single stock</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best For:</strong> Retirees or investors who need consistent monthly cash flow for expenses vs reinvesting dividends</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-is" className="text-blue-600 hover:underline">What is Dividend Laddering?</a></li>
                    <li><a href="#why-use" className="text-blue-600 hover:underline">Why Use a Ladder?</a></li>
                    <li><a href="#payment-calendar" className="text-blue-600 hover:underline">12-Month Payment Calendar</a></li>
                    <li><a href="#sample-portfolio" className="text-blue-600 hover:underline">Sample 12-Stock Portfolio</a></li>
                    <li><a href="#build-ladder" className="text-blue-600 hover:underline">How to Build Your Ladder</a></li>
                    <li><a href="#maintenance" className="text-blue-600 hover:underline">Maintenance Tips</a></li>
                    <li><a href="#vs-monthly" className="text-blue-600 hover:underline">Ladder vs Monthly Payers</a></li>
                    <li><a href="#common-mistakes" className="text-blue-600 hover:underline">Common Mistakes</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What Is Section */}
                <section id="what-is">
                  <h2 className="flex items-center gap-2">
                    <Layers className="h-7 w-7 text-blue-600" />
                    What is Dividend Laddering?
                  </h2>
                  <p>
                    A <strong>dividend ladder</strong> is a portfolio construction strategy where you select stocks
                    with different dividend payment months to create consistent, predictable monthly income throughout
                    the year.
                  </p>

                  <p>
                    Instead of owning just Johnson & Johnson (which pays quarterly in March, June, September, December)
                    and receiving large lump sums 4 times per year, you own 12 different stocks that each pay in
                    different months. This creates a steady monthly income stream similar to a paycheck.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Visual Example:</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-sm mb-2">Traditional Portfolio (1 Stock):</p>
                          <div className="grid grid-cols-12 gap-1">
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">J</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">F</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">M</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">A</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">M</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">J</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">J</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">A</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">S</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">O</div>
                            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-xs">N</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">D</div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Payment: $780 in 4 months only</p>
                        </div>

                        <div>
                          <p className="font-semibold text-sm mb-2">Dividend Ladder (12 Stocks):</p>
                          <div className="grid grid-cols-12 gap-1">
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">J</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">F</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">M</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">A</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">M</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">J</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">J</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">A</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">S</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">O</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">N</div>
                            <div className="h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">D</div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Payment: $250/month every month (same $3,000/year)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Key Characteristics of a Dividend Ladder:</h3>
                  <ul>
                    <li><strong>Staggered Payments:</strong> Stocks selected specifically for different payment months</li>
                    <li><strong>Monthly Income:</strong> At least one dividend payment every single month</li>
                    <li><strong>Predictable Cash Flow:</strong> You know exactly when and how much you'll receive</li>
                    <li><strong>Requires Planning:</strong> Must research dividend payment schedules before buying</li>
                  </ul>
                </section>

                {/* Why Use Section */}
                <section id="why-use">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-purple-600" />
                    Why Use a Dividend Ladder Strategy?
                  </h2>

                  <h3>Advantages of Dividend Laddering</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Consistent Monthly Income</h4>
                          <p className="text-sm mb-0">Perfect for retirees who need to pay monthly bills (rent, utilities, groceries). No more waiting 3 months for next dividend.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Easier Budgeting</h4>
                          <p className="text-sm mb-0">When you receive $800/month instead of $2,400 quarterly, it's easier to plan expenses and avoid overspending lump sums.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Psychological Benefit</h4>
                          <p className="text-sm mb-0">Monthly income feels like a "paycheck" vs quarterly windfalls. Creates sense of financial stability.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Forced Diversification</h4>
                          <p className="text-sm mb-0">Needing 12 different payment months forces you to diversify across sectors and companies automatically.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Better Cash Management</h4>
                          <p className="text-sm mb-0">Can keep smaller emergency cash reserves since income arrives monthly vs quarterly.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Disadvantages of Dividend Laddering</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Limits Stock Selection</h4>
                          <p className="text-sm mb-0">You might skip a great stock because you already have that payment month covered. Example: Can't own both JNJ and PEP (both pay March/June/Sept/Dec).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Requires Larger Starting Capital</h4>
                          <p className="text-sm mb-0">Need $12,000-15,000 minimum to buy 12 different stocks. Can't build a ladder with just $3,000.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">More Complex to Manage</h4>
                          <p className="text-sm mb-0">Tracking 12 stocks vs 5 stocks means more earnings calls, more rebalancing decisions, more tax documents.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Payment Dates Can Change</h4>
                          <p className="text-sm mb-0">Companies occasionally shift dividend months, breaking your ladder. Requires monitoring and replacement.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Not Ideal for DRIP Investors</h4>
                          <p className="text-sm mb-0">If you're reinvesting dividends anyway, monthly income doesn't matter. Simpler to own best stocks regardless of payment dates.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Payment Calendar Section */}
                <section id="payment-calendar">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-orange-600" />
                    Dividend Payment Calendar: How to Map Your Ladder
                  </h2>
                  <p>
                    Most U.S. dividend stocks pay quarterly. The key to building a ladder is finding stocks that pay
                    in different quarterly cycles. There are three main payment patterns:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">The Three Quarterly Payment Cycles:</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg">
                          <p className="font-semibold mb-2">Cycle A: January, April, July, October</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Apple (AAPL), Microsoft (MSFT), Cisco (CSCO), Texas Instruments (TXN)</p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg">
                          <p className="font-semibold mb-2">Cycle B: February, May, August, November</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Coca-Cola (KO), AT&T (T), Verizon (VZ), Target (TGT)</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950/50 rounded-lg">
                          <p className="font-semibold mb-2">Cycle C: March, June, September, December</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Johnson & Johnson (JNJ), Procter & Gamble (PG), Walmart (WMT), 3M (MMM)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Create Weekly Income</h3>
                  <p>
                    For even more consistent cash flow, select 12 stocks with payment dates spread throughout each month.
                    This creates weekly income instead of just monthly:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-4">Weekly Income Pattern Example:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="font-semibold mb-1">Week 1 (1st-7th)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">3 stocks pay</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="font-semibold mb-1">Week 2 (8th-14th)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">3 stocks pay</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="font-semibold mb-1">Week 3 (15th-21st)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">3 stocks pay</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="font-semibold mb-1">Week 4 (22nd-31st)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">3 stocks pay</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Sample Portfolio Section */}
                <section id="sample-portfolio">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-indigo-600" />
                    Sample 12-Stock Dividend Ladder Portfolio
                  </h2>
                  <p>
                    Here's a complete dividend ladder with 12 high-quality dividend stocks, balanced across sectors,
                    payment months, and risk profiles. This portfolio generates weekly income throughout every month.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Portfolio Overview (Based on $50,000 Investment)</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-indigo-600">$50,000</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Total Investment</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">4.2%</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Avg Yield</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-600">$2,100</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Annual Income</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-orange-600">$175</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Monthly Income</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Stock</th>
                          <th className="border p-3 text-left">Sector</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Investment</th>
                          <th className="border p-3 text-center">Annual Dividend</th>
                          <th className="border p-3 text-left">Payment Months</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* January Payers */}
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3">
                            <div className="font-semibold">Apple (AAPL)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Tech Giant</div>
                          </td>
                          <td className="border p-3">Technology</td>
                          <td className="border p-3 text-center font-semibold">0.5%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$21</td>
                          <td className="border p-3">Jan, Apr, Jul, Oct</td>
                        </tr>

                        {/* February Payers */}
                        <tr>
                          <td className="border p-3">
                            <div className="font-semibold">Coca-Cola (KO)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Dividend Aristocrat</div>
                          </td>
                          <td className="border p-3">Consumer Staples</td>
                          <td className="border p-3 text-center font-semibold">3.1%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$130</td>
                          <td className="border p-3">Feb, May, Aug, Nov</td>
                        </tr>

                        {/* March Payers */}
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3">
                            <div className="font-semibold">Johnson & Johnson (JNJ)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Dividend King</div>
                          </td>
                          <td className="border p-3">Healthcare</td>
                          <td className="border p-3 text-center font-semibold">3.0%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$126</td>
                          <td className="border p-3">Mar, Jun, Sep, Dec</td>
                        </tr>

                        {/* April Payers */}
                        <tr>
                          <td className="border p-3">
                            <div className="font-semibold">Texas Instruments (TXN)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Semiconductor</div>
                          </td>
                          <td className="border p-3">Technology</td>
                          <td className="border p-3 text-center font-semibold">2.8%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$118</td>
                          <td className="border p-3">Jan, Apr, Jul, Oct</td>
                        </tr>

                        {/* May Payers */}
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3">
                            <div className="font-semibold">AT&T (T)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">High Yield Telecom</div>
                          </td>
                          <td className="border p-3">Telecom</td>
                          <td className="border p-3 text-center font-semibold">6.2%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$260</td>
                          <td className="border p-3">Feb, May, Aug, Nov</td>
                        </tr>

                        {/* June Payers */}
                        <tr>
                          <td className="border p-3">
                            <div className="font-semibold">Procter & Gamble (PG)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Dividend Aristocrat</div>
                          </td>
                          <td className="border p-3">Consumer Staples</td>
                          <td className="border p-3 text-center font-semibold">2.4%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$101</td>
                          <td className="border p-3">Mar, Jun, Sep, Dec</td>
                        </tr>

                        {/* July Payers */}
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3">
                            <div className="font-semibold">Cisco (CSCO)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Networking Leader</div>
                          </td>
                          <td className="border p-3">Technology</td>
                          <td className="border p-3 text-center font-semibold">3.0%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$126</td>
                          <td className="border p-3">Jan, Apr, Jul, Oct</td>
                        </tr>

                        {/* August Payers */}
                        <tr>
                          <td className="border p-3">
                            <div className="font-semibold">Target (TGT)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Retail Dividend Aristocrat</div>
                          </td>
                          <td className="border p-3">Consumer Discretionary</td>
                          <td className="border p-3 text-center font-semibold">3.3%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$139</td>
                          <td className="border p-3">Feb, May, Aug, Nov</td>
                        </tr>

                        {/* September Payers */}
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3">
                            <div className="font-semibold">3M Company (MMM)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Industrial Dividend King</div>
                          </td>
                          <td className="border p-3">Industrials</td>
                          <td className="border p-3 text-center font-semibold">6.1%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$256</td>
                          <td className="border p-3">Mar, Jun, Sep, Dec</td>
                        </tr>

                        {/* October Payers */}
                        <tr>
                          <td className="border p-3">
                            <div className="font-semibold">Intel (INTC)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Semiconductor</div>
                          </td>
                          <td className="border p-3">Technology</td>
                          <td className="border p-3 text-center font-semibold">2.0%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$84</td>
                          <td className="border p-3">Jan, Apr, Jul, Oct</td>
                        </tr>

                        {/* November Payers */}
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3">
                            <div className="font-semibold">Verizon (VZ)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">High Yield Telecom</div>
                          </td>
                          <td className="border p-3">Telecom</td>
                          <td className="border p-3 text-center font-semibold">6.8%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$286</td>
                          <td className="border p-3">Feb, May, Aug, Nov</td>
                        </tr>

                        {/* December Payers */}
                        <tr>
                          <td className="border p-3">
                            <div className="font-semibold">Realty Income (O)</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Monthly Dividend REIT</div>
                          </td>
                          <td className="border p-3">Real Estate</td>
                          <td className="border p-3 text-center font-semibold">5.5%</td>
                          <td className="border p-3 text-center">$4,200</td>
                          <td className="border p-3 text-center">$231</td>
                          <td className="border p-3">Every Month</td>
                        </tr>

                        {/* Totals */}
                        <tr className="bg-green-100 dark:bg-green-900 font-bold">
                          <td className="border p-3" colSpan={3}>TOTAL PORTFOLIO</td>
                          <td className="border p-3 text-center">$50,400</td>
                          <td className="border p-3 text-center">$2,078/year</td>
                          <td className="border p-3">$173/month avg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Portfolio Analysis
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Sector Diversification:</strong> 8 sectors represented (Tech, Healthcare, Telecom, Industrials, Consumer, Real Estate)</p>
                        <p><strong>Dividend Safety:</strong> Includes 4 Dividend Aristocrats/Kings with 25+ year track records</p>
                        <p><strong>Yield Range:</strong> 0.5% (AAPL) to 6.8% (VZ) - balanced between growth and income</p>
                        <p><strong>Weekly Income:</strong> Approximately $40-50 every week vs $520 once per quarter</p>
                        <p><strong>Realty Income Bonus:</strong> Provides monthly payments as additional smoothing (pays 12x per year vs 4x)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>12-Month Payment Calendar for This Portfolio</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Month</th>
                          <th className="border p-3 text-left">Stocks Paying</th>
                          <th className="border p-3 text-center">Total Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">January</td>
                          <td className="border p-3">AAPL, TXN, CSCO, INTC, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$180</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">February</td>
                          <td className="border p-3">KO, T, TGT, VZ, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$245</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">March</td>
                          <td className="border p-3">JNJ, PG, MMM, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$165</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">April</td>
                          <td className="border p-3">AAPL, TXN, CSCO, INTC, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$180</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">May</td>
                          <td className="border p-3">KO, T, TGT, VZ, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$245</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">June</td>
                          <td className="border p-3">JNJ, PG, MMM, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$165</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">July</td>
                          <td className="border p-3">AAPL, TXN, CSCO, INTC, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$180</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">August</td>
                          <td className="border p-3">KO, T, TGT, VZ, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$245</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">September</td>
                          <td className="border p-3">JNJ, PG, MMM, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$165</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">October</td>
                          <td className="border p-3">AAPL, TXN, CSCO, INTC, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$180</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">November</td>
                          <td className="border p-3">KO, T, TGT, VZ, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$245</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">December</td>
                          <td className="border p-3">JNJ, PG, MMM, O</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$165</td>
                        </tr>
                        <tr className="bg-green-100 dark:bg-green-900 font-bold">
                          <td className="border p-3" colSpan={2}>ANNUAL TOTAL</td>
                          <td className="border p-3 text-center">$2,360</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* How to Build Section */}
                <section id="build-ladder">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-green-600" />
                    How to Build Your Own Dividend Ladder
                  </h2>
                  <p>
                    Follow these 7 steps to construct a dividend ladder tailored to your income needs and risk tolerance:
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Step 1 */}
                    <Card className="border-l-4 border-l-blue-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                          Determine Your Income Goal
                        </h3>
                        <p className="text-sm mb-3">
                          Calculate how much monthly income you need. Example: $2,000/month = $24,000/year ÷ 4% yield = $600,000 portfolio required.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg text-sm">
                          <p className="font-semibold mb-2">Quick Formula:</p>
                          <p className="font-mono">Required Portfolio = (Monthly Income × 12) ÷ Average Yield%</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Step 2 */}
                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                          Research Dividend Payment Schedules
                        </h3>
                        <p className="text-sm mb-3">
                          Use dividend calendars and stock screeners to find payment dates. Key resources:
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• Nasdaq.com dividend calendar</li>
                          <li>• Company investor relations pages</li>
                          <li>• Your broker's dividend research tools</li>
                          <li>• DividendHistory.org</li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Step 3 */}
                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                          Select 12 Stocks Across Payment Cycles
                        </h3>
                        <p className="text-sm mb-3">
                          Pick 4 stocks from each quarterly cycle (A, B, C) to ensure monthly coverage:
                        </p>
                        <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg text-sm space-y-2">
                          <p><strong>Cycle A (Jan/Apr/Jul/Oct):</strong> 4 stocks</p>
                          <p><strong>Cycle B (Feb/May/Aug/Nov):</strong> 4 stocks</p>
                          <p><strong>Cycle C (Mar/Jun/Sep/Dec):</strong> 4 stocks</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Step 4 */}
                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                          Ensure Sector Diversification
                        </h3>
                        <p className="text-sm mb-3">
                          Don't put all 12 stocks in the same industry. Spread across 6-8 sectors minimum:
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• Healthcare (JNJ, ABBV)</li>
                          <li>• Consumer Staples (PG, KO)</li>
                          <li>• Technology (AAPL, MSFT)</li>
                          <li>• Telecom (T, VZ)</li>
                          <li>• Utilities (DUK, SO)</li>
                          <li>• Industrials (MMM, CAT)</li>
                          <li>• Real Estate (O, STAG)</li>
                          <li>• Energy (XOM, CVX)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Step 5 */}
                    <Card className="border-l-4 border-l-red-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">5</div>
                          Check Dividend Safety Metrics
                        </h3>
                        <p className="text-sm mb-3">
                          Not all high yields are safe. Verify these before buying:
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Payout Ratio:</strong> Under 70% for most stocks (under 80% for REITs)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Dividend History:</strong> 10+ years of consecutive payments (5+ years minimum)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Free Cash Flow:</strong> Positive and growing to sustain dividends</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Debt Levels:</strong> Debt-to-equity under 2.0 for stability</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Step 6 */}
                    <Card className="border-l-4 border-l-indigo-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">6</div>
                          Allocate Capital Equally
                        </h3>
                        <p className="text-sm mb-3">
                          For simplicity and consistent monthly income, invest equal amounts in each stock:
                        </p>
                        <div className="bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-lg text-sm">
                          <p><strong>Example:</strong> $24,000 portfolio ÷ 12 stocks = $2,000 per stock</p>
                          <p className="mt-2 text-slate-600 dark:text-slate-400">
                            This ensures each month receives approximately equal dividend income
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Step 7 */}
                    <Card className="border-l-4 border-l-yellow-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center text-sm font-bold">7</div>
                          Track and Monitor
                        </h3>
                        <p className="text-sm mb-3">
                          Create a spreadsheet or use portfolio tracking software to monitor:
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• Ex-dividend dates (when you must own stock to receive payment)</li>
                          <li>• Payment dates (when cash hits your account)</li>
                          <li>• Dividend announcements (watch for increases or cuts)</li>
                          <li>• Total monthly income (ensure it meets your needs)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Maintenance Section */}
                <section id="maintenance">
                  <h2 className="flex items-center gap-2">
                    <RefreshCw className="h-7 w-7 text-teal-600" />
                    Dividend Ladder Maintenance Tips
                  </h2>
                  <p>
                    Building the ladder is just the start. Here's how to maintain it for long-term success:
                  </p>

                  <h3>Quarterly Review Checklist</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Verify Payment Dates Haven't Changed</h4>
                          <p className="text-sm mb-0">Companies occasionally shift dividend months. Check investor relations pages quarterly.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Monitor for Dividend Cuts</h4>
                          <p className="text-sm mb-0">Set Google Alerts for "[Stock Symbol] dividend cut". Replace immediately if cut occurs.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Rebalance Positions</h4>
                          <p className="text-sm mb-0">If one stock grows to 15%+ of portfolio due to price appreciation, trim and redistribute.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Reinvest Dividend Growth</h4>
                          <p className="text-sm mb-0">When dividends increase, either enjoy higher income or use excess to add new positions.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>When to Replace a Stock</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-4">Replace immediately if:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Dividend is cut or suspended</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Payout ratio exceeds 100% (unsustainable)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Company shifts payment months, creating a gap in your ladder</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Free cash flow turns negative for 2+ consecutive quarters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Better alternative becomes available in the same payment month</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>Tax Optimization Strategies</h3>
                  <ul>
                    <li><strong>Hold in Tax-Advantaged Accounts:</strong> IRAs and 401(k)s avoid annual dividend taxes</li>
                    <li><strong>Prefer Qualified Dividends:</strong> Taxed at 0-20% vs ordinary income rates (up to 37%)</li>
                    <li><strong>Tax-Loss Harvesting:</strong> Offset gains by selling losers in same payment month</li>
                    <li><strong>REIT Caution:</strong> REITs pay non-qualified dividends taxed at ordinary rates</li>
                  </ul>
                </section>

                {/* Ladder vs Monthly Section */}
                <section id="vs-monthly">
                  <h2 className="flex items-center gap-2">
                    <Wallet className="h-7 w-7 text-pink-600" />
                    Dividend Ladder vs Monthly Dividend Stocks
                  </h2>
                  <p>
                    There's another way to get monthly income: buy stocks that pay dividends monthly instead of quarterly.
                    How does this compare to building a ladder?
                  </p>

                  <h3>Popular Monthly Dividend Stocks</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Stock</th>
                              <th className="border p-3 text-left">Type</th>
                              <th className="border p-3 text-center">Yield</th>
                              <th className="border p-3 text-left">Payments</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">Realty Income (O)</td>
                              <td className="border p-3">Retail REIT</td>
                              <td className="border p-3 text-center">5.5%</td>
                              <td className="border p-3">12x per year</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">STAG Industrial (STAG)</td>
                              <td className="border p-3">Industrial REIT</td>
                              <td className="border p-3 text-center">4.2%</td>
                              <td className="border p-3">12x per year</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">EPR Properties (EPR)</td>
                              <td className="border p-3">Experiential REIT</td>
                              <td className="border p-3 text-center">7.8%</td>
                              <td className="border p-3">12x per year</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">AGNC Investment (AGNC)</td>
                              <td className="border p-3">Mortgage REIT</td>
                              <td className="border p-3 text-center">14.2%</td>
                              <td className="border p-3">12x per year</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Main Street Capital (MAIN)</td>
                              <td className="border p-3">BDC</td>
                              <td className="border p-3 text-center">6.8%</td>
                              <td className="border p-3">12x per year</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Comparison: Ladder vs Monthly Payers</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">Dividend Ladder (12 Stocks)</th>
                          <th className="border p-3 text-center">Monthly Payers Only</th>
                          <th className="border p-3 text-center">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Diversification</td>
                          <td className="border p-3 text-center">Excellent (12 stocks, 8+ sectors)</td>
                          <td className="border p-3 text-center">Limited (mostly REITs)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Ladder</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Simplicity</td>
                          <td className="border p-3 text-center">Complex (track 12 schedules)</td>
                          <td className="border p-3 text-center">Simple (3-5 stocks max)</td>
                          <td className="border p-3 text-center text-pink-600 font-bold">Monthly</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Yield</td>
                          <td className="border p-3 text-center">3-5% average</td>
                          <td className="border p-3 text-center">5-8% average (REITs)</td>
                          <td className="border p-3 text-center text-pink-600 font-bold">Monthly</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Tax Efficiency</td>
                          <td className="border p-3 text-center">Mostly qualified dividends</td>
                          <td className="border p-3 text-center">Mostly non-qualified (REITs)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Ladder</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Stock Quality</td>
                          <td className="border p-3 text-center">Blue chips + Aristocrats</td>
                          <td className="border p-3 text-center">REITs, BDCs (higher risk)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Ladder</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Capital Growth</td>
                          <td className="border p-3 text-center">Higher (tech, healthcare)</td>
                          <td className="border p-3 text-center">Lower (REITs lag market)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Ladder</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Volatility</td>
                          <td className="border p-3 text-center">Moderate (diversified)</td>
                          <td className="border p-3 text-center">Higher (REITs sensitive to rates)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Ladder</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-600" />
                        Best Approach: Hybrid Strategy
                      </h4>
                      <p className="text-sm mb-3">
                        Combine both approaches for optimal results:
                      </p>
                      <ul className="text-sm space-y-2">
                        <li><strong>Core (60%):</strong> Dividend ladder with 8-10 blue-chip quarterly payers</li>
                        <li><strong>Booster (40%):</strong> 2-4 monthly dividend REITs for income smoothing</li>
                        <li><strong>Result:</strong> High diversification + consistent monthly cash flow + better total returns</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Common Mistakes Section */}
                <section id="common-mistakes">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    Common Dividend Ladder Mistakes to Avoid
                  </h2>

                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="font-bold text-base mb-2">Mistake #1: Chasing High Yields</h3>
                        <p className="text-sm mb-2">
                          A 10% yield often signals dividend cut risk, not a bargain. Stick to 3-7% range for safety.
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          <strong>Fix:</strong> Calculate payout ratio. If over 80%, avoid it regardless of yield.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="font-bold text-base mb-2">Mistake #2: Ignoring Sector Concentration</h3>
                        <p className="text-sm mb-2">
                          Owning 6 utility stocks might cover all payment months but crashes if rates spike.
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          <strong>Fix:</strong> Limit any single sector to 25% of portfolio maximum.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="font-bold text-base mb-2">Mistake #3: Not Checking Ex-Dividend Dates</h3>
                        <p className="text-sm mb-2">
                          Buying stock the day before payment doesn't get you the dividend. You need to own it on ex-div date (usually 2 days before).
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          <strong>Fix:</strong> Always check ex-dividend date before buying. Plan purchases 3-5 days ahead.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="font-bold text-base mb-2">Mistake #4: Selling Winners Too Early</h3>
                        <p className="text-sm mb-2">
                          If a stock doubles, don't sell just because it's now 15% of portfolio. Great companies deserve to run.
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          <strong>Fix:</strong> Trim positions over 20%, but keep the best performers growing.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="font-bold text-base mb-2">Mistake #5: Forgetting About Taxes</h3>
                        <p className="text-sm mb-2">
                          Holding high-dividend stocks in taxable accounts can create large tax bills.
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          <strong>Fix:</strong> Prioritize dividend ladder in IRA/401(k). Use growth stocks in taxable accounts.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="font-bold text-base mb-2">Mistake #6: Building Ladder Too Small</h3>
                        <p className="text-sm mb-2">
                          $500 per stock ($6,000 total) creates commission drag and tiny dividends ($20-30/month).
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          <strong>Fix:</strong> Wait until you have $12,000-15,000 minimum before starting ladder.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Build Your Dividend Ladder Today</h3>
                      <p className="mb-6 text-blue-100">
                        Use our calculators to model your dividend ladder strategy and project your monthly income streams.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Monthly Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Portfolio Builder
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Ladder Investing</h2>
                  <p>
                    Building a dividend ladder requires buying 12+ stocks, so you need a broker with zero commissions
                    and excellent dividend reinvestment tools. Here are the top-rated options:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* Final Tips */}
                <section>
                  <h2>Final Thoughts: Is a Dividend Ladder Right for You?</h2>
                  <p>
                    A dividend ladder is a powerful strategy for creating consistent monthly income, but it's not for everyone.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">You Should Build a Dividend Ladder If:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You're retired or near retirement and need monthly income for living expenses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You have $15,000+ to invest for proper diversification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You prefer predictable cash flow over reinvesting dividends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You enjoy researching individual stocks and active management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>You can commit to quarterly monitoring and rebalancing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Stick with Simpler Strategies If:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>You're in accumulation phase and reinvesting all dividends anyway</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>You have under $10,000 to invest (not enough for 12 stocks)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>You prefer passive, hands-off investing with dividend ETFs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>You don't have time to research 12 different companies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>You're more focused on total return than current income</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <p className="text-lg font-semibold">
                    The beauty of dividend ladder investing is the consistent, paycheck-like income it creates.
                    For retirees who need reliable monthly cash flow, it's one of the most effective strategies available.
                    Just make sure you have the capital, time, and temperament to build and maintain it properly.
                  </p>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Complete Comparison
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/blog/monthly-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Top Monthly Dividend Stocks for Passive Income
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
