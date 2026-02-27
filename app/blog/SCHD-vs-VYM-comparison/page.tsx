import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, BarChart3, DollarSign, Shield, CheckCircle2, Scale, PieChart, Target, ArrowRight } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'SCHD vs VYM: Which Dividend ETF is Better in 2026?',
  description: 'In-depth comparison of SCHD vs VYM covering expense ratios, yields, 5 and 10-year returns, top holdings, sector allocation, dividend growth, and tax efficiency. Find the best dividend ETF for your portfolio.',
  keywords: 'SCHD vs VYM, SCHD or VYM, Schwab dividend ETF, Vanguard high dividend yield, best dividend ETF 2026, SCHD review, VYM review, dividend ETF comparison',
}

export default function SCHDvsVYMComparison() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Scale className="h-3 w-3 mr-1" />
          ETF Head-to-Head
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          SCHD vs VYM: Which Dividend ETF is Better in 2026?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Schwab U.S. Dividend Equity vs Vanguard High Dividend Yield -- the two most popular
          dividend ETFs go head-to-head. Here is every metric that matters.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>18 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">$116B+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Combined assets under management</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <BarChart3 className="h-10 w-10 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">0.06%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Identical expense ratios</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-10 w-10 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">~30%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Holdings overlap between funds</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Verdict */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">The Quick Verdict</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Choose SCHD If:</h3>
                <ul className="space-y-1 text-sm">
                  <li>- You want higher dividend growth (12%+ annually)</li>
                  <li>- You value quality screening (profitability, cash flow)</li>
                  <li>- You prefer a concentrated, high-conviction portfolio</li>
                  <li>- You are under 50 and reinvesting dividends</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Choose VYM If:</h3>
                <ul className="space-y-1 text-sm">
                  <li>- You want broader diversification (500+ holdings)</li>
                  <li>- You prefer lower single-stock risk</li>
                  <li>- You want more sector balance</li>
                  <li>- You are retired and want stability above all</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Fund Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Fund Overview: SCHD vs VYM at a Glance</h2>

        <Card>
          <CardHeader>
            <CardTitle>Head-to-Head Comparison Table</CardTitle>
            <CardDescription>All data as of February 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Metric</th>
                    <th className="text-center p-3 font-semibold text-blue-700 dark:text-blue-400">SCHD</th>
                    <th className="text-center p-3 font-semibold text-green-700 dark:text-green-400">VYM</th>
                    <th className="text-center p-3 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Full Name</td>
                    <td className="p-3 text-center text-sm">Schwab U.S. Dividend Equity</td>
                    <td className="p-3 text-center text-sm">Vanguard High Dividend Yield</td>
                    <td className="p-3 text-center">--</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Expense Ratio</td>
                    <td className="p-3 text-center">0.06%</td>
                    <td className="p-3 text-center">0.06%</td>
                    <td className="p-3 text-center"><Badge variant="outline">Tie</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Dividend Yield</td>
                    <td className="p-3 text-center font-semibold">3.5%</td>
                    <td className="p-3 text-center">2.8%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">SCHD</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Number of Holdings</td>
                    <td className="p-3 text-center">~100</td>
                    <td className="p-3 text-center font-semibold">~500</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">VYM</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Assets Under Management</td>
                    <td className="p-3 text-center font-semibold">$62B</td>
                    <td className="p-3 text-center">$54B</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">SCHD</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">5-Year Total Return</td>
                    <td className="p-3 text-center font-semibold">78.4%</td>
                    <td className="p-3 text-center">62.1%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">SCHD</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">10-Year Total Return</td>
                    <td className="p-3 text-center font-semibold">218.6%</td>
                    <td className="p-3 text-center">176.3%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">SCHD</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">5-Year Dividend Growth</td>
                    <td className="p-3 text-center font-semibold">12.2%/yr</td>
                    <td className="p-3 text-center">5.8%/yr</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">SCHD</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Dividend Frequency</td>
                    <td className="p-3 text-center">Quarterly</td>
                    <td className="p-3 text-center">Quarterly</td>
                    <td className="p-3 text-center"><Badge variant="outline">Tie</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Inception Date</td>
                    <td className="p-3 text-center">Oct 2011</td>
                    <td className="p-3 text-center">Nov 2006</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">VYM</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Index Tracked</td>
                    <td className="p-3 text-center text-sm">Dow Jones U.S. Dividend 100</td>
                    <td className="p-3 text-center text-sm">FTSE High Dividend Yield</td>
                    <td className="p-3 text-center">--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Key Takeaway:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              SCHD wins on yield, total return, and dividend growth. VYM wins on diversification and
              longer track record. Both charge the same ultra-low 0.06% expense ratio. For most
              investors, the performance difference matters more than the holdings count.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Methodology Differences */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Each ETF Selects Stocks</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl">SCHD: Quality-First Approach</CardTitle>
              <CardDescription>Dow Jones U.S. Dividend 100 Index</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                SCHD uses a multi-factor quality screen that goes beyond simply finding high-yielding stocks.
                It selects 100 companies that score highest on:
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Cash flow to debt ratio</strong> -- companies that generate enough cash to cover obligations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Return on equity (ROE)</strong> -- profitable businesses that efficiently use shareholder capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dividend yield</strong> -- above-average yields relative to the market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>5-year dividend growth rate</strong> -- proven record of increasing payments</span>
                </li>
              </ul>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
                Minimum requirement: 10 consecutive years of dividend payments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">VYM: Broad Yield Approach</CardTitle>
              <CardDescription>FTSE High Dividend Yield Index</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                VYM takes a simpler, broader approach. It holds nearly all U.S. stocks with above-average
                dividend yields, excluding REITs:
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Yield-ranked selection</strong> -- includes all stocks with above-median yields</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market-cap weighted</strong> -- larger companies get bigger positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>REITs excluded</strong> -- avoids non-qualified dividend tax treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Minimal quality filters</strong> -- focuses on breadth over selectivity</span>
                </li>
              </ul>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
                Result: 500+ holdings give maximum diversification within the dividend universe.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Holdings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Holdings Comparison</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-700 dark:text-blue-400">SCHD Top 10</CardTitle>
              <CardDescription>~40% of total portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Cisco Systems (CSCO)</span><span className="font-semibold">4.5%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>BlackRock (BLK)</span><span className="font-semibold">4.3%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Home Depot (HD)</span><span className="font-semibold">4.2%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Chevron (CVX)</span><span className="font-semibold">4.1%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Texas Instruments (TXN)</span><span className="font-semibold">4.0%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Verizon (VZ)</span><span className="font-semibold">4.0%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>PepsiCo (PEP)</span><span className="font-semibold">3.9%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Lockheed Martin (LMT)</span><span className="font-semibold">3.8%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>AbbVie (ABBV)</span><span className="font-semibold">3.7%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Amgen (AMGN)</span><span className="font-semibold">3.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-700 dark:text-green-400">VYM Top 10</CardTitle>
              <CardDescription>~25% of total portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Broadcom (AVGO)</span><span className="font-semibold">3.8%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>JPMorgan Chase (JPM)</span><span className="font-semibold">3.5%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Exxon Mobil (XOM)</span><span className="font-semibold">3.2%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Johnson & Johnson (JNJ)</span><span className="font-semibold">2.8%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Procter & Gamble (PG)</span><span className="font-semibold">2.4%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Home Depot (HD)</span><span className="font-semibold">2.3%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>AbbVie (ABBV)</span><span className="font-semibold">2.1%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Merck (MRK)</span><span className="font-semibold">2.0%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Chevron (CVX)</span><span className="font-semibold">1.9%</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  <span>Walmart (WMT)</span><span className="font-semibold">1.8%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Holdings Overlap:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              About 30% of SCHD holdings also appear in VYM (Home Depot, AbbVie, Chevron, PepsiCo, and others).
              However, the weightings differ significantly. SCHD concentrates more in its top picks (top 10 = ~40%),
              while VYM spreads weight more evenly (top 10 = ~25%). If you own both funds, you get some overlap
              but meaningful diversification benefit.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Sector Allocation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sector Allocation Breakdown</h2>

        <Card>
          <CardHeader>
            <CardTitle>Where Your Money Goes</CardTitle>
            <CardDescription>Sector weights reveal very different investment philosophies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Sector</th>
                    <th className="text-center p-3 text-blue-700 dark:text-blue-400">SCHD</th>
                    <th className="text-center p-3 text-green-700 dark:text-green-400">VYM</th>
                    <th className="text-left p-3">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Financials</td>
                    <td className="p-3 text-center">15.8%</td>
                    <td className="p-3 text-center font-semibold">21.4%</td>
                    <td className="p-3 text-green-600">VYM +5.6%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">Healthcare</td>
                    <td className="p-3 text-center font-semibold">16.2%</td>
                    <td className="p-3 text-center">13.5%</td>
                    <td className="p-3 text-blue-600">SCHD +2.7%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Industrials</td>
                    <td className="p-3 text-center font-semibold">18.1%</td>
                    <td className="p-3 text-center">10.2%</td>
                    <td className="p-3 text-blue-600">SCHD +7.9%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">Technology</td>
                    <td className="p-3 text-center font-semibold">11.5%</td>
                    <td className="p-3 text-center">9.8%</td>
                    <td className="p-3 text-blue-600">SCHD +1.7%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Consumer Staples</td>
                    <td className="p-3 text-center font-semibold">13.7%</td>
                    <td className="p-3 text-center">11.9%</td>
                    <td className="p-3 text-blue-600">SCHD +1.8%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">Energy</td>
                    <td className="p-3 text-center">8.4%</td>
                    <td className="p-3 text-center font-semibold">9.1%</td>
                    <td className="p-3 text-green-600">VYM +0.7%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Utilities</td>
                    <td className="p-3 text-center">2.1%</td>
                    <td className="p-3 text-center font-semibold">6.8%</td>
                    <td className="p-3 text-green-600">VYM +4.7%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">Consumer Discretionary</td>
                    <td className="p-3 text-center font-semibold">7.8%</td>
                    <td className="p-3 text-center">5.4%</td>
                    <td className="p-3 text-blue-600">SCHD +2.4%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Other (Comm, Materials, RE)</td>
                    <td className="p-3 text-center">6.4%</td>
                    <td className="p-3 text-center">11.9%</td>
                    <td className="p-3 text-green-600">VYM +5.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">SCHD Sector Takeaway</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                SCHD is overweight industrials, healthcare, and consumer staples -- sectors known for
                steady dividend growth and strong cash flows. Lower financials and utilities exposure
                means less interest rate sensitivity.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">VYM Sector Takeaway</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                VYM is heavily weighted toward financials (banks, insurance) and includes more utilities.
                This makes it more cyclical during economic expansions and more interest-rate sensitive.
                Broader sector spread provides natural diversification.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Deep Dive */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Performance Deep Dive</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Return Comparison</CardTitle>
              <CardDescription>Cumulative returns including reinvested dividends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Time Period</th>
                      <th className="text-center p-3 text-blue-700 dark:text-blue-400">SCHD</th>
                      <th className="text-center p-3 text-green-700 dark:text-green-400">VYM</th>
                      <th className="text-center p-3">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">1 Year</td>
                      <td className="p-3 text-center font-semibold">14.2%</td>
                      <td className="p-3 text-center">12.8%</td>
                      <td className="p-3 text-center text-blue-600">SCHD +1.4%</td>
                    </tr>
                    <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                      <td className="p-3">3 Year (annualized)</td>
                      <td className="p-3 text-center font-semibold">11.3%</td>
                      <td className="p-3 text-center">9.7%</td>
                      <td className="p-3 text-center text-blue-600">SCHD +1.6%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">5 Year (annualized)</td>
                      <td className="p-3 text-center font-semibold">12.3%</td>
                      <td className="p-3 text-center">10.1%</td>
                      <td className="p-3 text-center text-blue-600">SCHD +2.2%</td>
                    </tr>
                    <tr>
                      <td className="p-3">10 Year (annualized)</td>
                      <td className="p-3 text-center font-semibold">12.3%</td>
                      <td className="p-3 text-center">10.7%</td>
                      <td className="p-3 text-center text-blue-600">SCHD +1.6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <p className="text-sm font-semibold mb-2">What This Means in Real Dollars:</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                If you invested $100,000 ten years ago with dividends reinvested:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">SCHD would be worth</p>
                  <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">$318,600</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">VYM would be worth</p>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">$276,300</p>
                </div>
              </div>
              <p className="text-sm text-center mt-4 font-semibold">
                SCHD outperformed by ~$42,300 over the decade on a $100K investment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dividend Growth */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Growth Rate Comparison</h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Dividend growth is arguably more important than current yield for long-term investors. A faster-growing
          dividend means your income accelerates over time, and historically, stocks with rising dividends also
          deliver superior price appreciation.
        </p>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Metric</th>
                    <th className="text-center p-3 text-blue-700 dark:text-blue-400">SCHD</th>
                    <th className="text-center p-3 text-green-700 dark:text-green-400">VYM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">1-Year Dividend Growth</td>
                    <td className="p-3 text-center font-semibold text-blue-600">13.4%</td>
                    <td className="p-3 text-center">6.2%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">3-Year Avg Dividend Growth</td>
                    <td className="p-3 text-center font-semibold text-blue-600">11.8%</td>
                    <td className="p-3 text-center">5.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">5-Year Avg Dividend Growth</td>
                    <td className="p-3 text-center font-semibold text-blue-600">12.2%</td>
                    <td className="p-3 text-center">5.8%</td>
                  </tr>
                  <tr>
                    <td className="p-3">10-Year Avg Dividend Growth</td>
                    <td className="p-3 text-center font-semibold text-blue-600">11.5%</td>
                    <td className="p-3 text-center">6.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">The Crossover Effect:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Even though VYM starts with a higher effective yield on some metrics, SCHD&apos;s faster dividend
              growth means its yield-on-cost surpasses VYM within about 6-7 years. If you invested $10,000
              today, SCHD would pay more annual dividends than VYM by roughly year 7, and the gap would widen
              every year after that. This is why SCHD is especially powerful for investors with a 10+ year horizon.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Tax Efficiency */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Efficiency Comparison</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>SCHD Tax Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Qualified dividends:</strong> ~95%+ of distributions are qualified, taxed at the lower 0-20% capital gains rate</li>
                <li><strong>Turnover:</strong> ~20% annually (moderate, reconstituted annually)</li>
                <li><strong>Capital gains distributions:</strong> Historically minimal due to index methodology</li>
                <li><strong>No REITs:</strong> Avoids ordinary income tax on REIT dividends</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>VYM Tax Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Qualified dividends:</strong> ~95%+ of distributions are qualified, similar to SCHD</li>
                <li><strong>Turnover:</strong> ~10% annually (very low, market-cap weighted)</li>
                <li><strong>Capital gains distributions:</strong> Extremely rare thanks to Vanguard&apos;s ETF structure and patent</li>
                <li><strong>No REITs:</strong> Also excludes REITs from holdings</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Tax Verdict:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Both ETFs are highly tax-efficient. VYM has a slight edge due to lower turnover and Vanguard&apos;s
              unique ETF share class structure (which uses its patented heartbeat trades to minimize capital gains).
              In a taxable account, VYM may generate marginally fewer capital gains distributions. In tax-advantaged
              accounts (IRA, 401k), the difference is irrelevant -- pick based on performance and yield instead.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Email CTA */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free SCHD vs VYM Deep Dive Report"
          description="Complete 20-page analysis with historical data, Monte Carlo projections, and portfolio allocation models"
          buttonText="Download Free Report"
          source="schd_vs_vym_blog"
        />
      </div>

      {/* Risk Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Risk and Volatility</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Risk Metric</th>
                    <th className="text-center p-3 text-blue-700 dark:text-blue-400">SCHD</th>
                    <th className="text-center p-3 text-green-700 dark:text-green-400">VYM</th>
                    <th className="text-left p-3">Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Beta (vs S&P 500)</td>
                    <td className="p-3 text-center">0.82</td>
                    <td className="p-3 text-center">0.85</td>
                    <td className="p-3 text-sm">Both less volatile than market; SCHD slightly less</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">Standard Deviation (5yr)</td>
                    <td className="p-3 text-center">14.8%</td>
                    <td className="p-3 text-center font-semibold">14.2%</td>
                    <td className="p-3 text-sm">VYM slightly less volatile (more diversified)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Max Drawdown (5yr)</td>
                    <td className="p-3 text-center">-18.2%</td>
                    <td className="p-3 text-center font-semibold">-16.9%</td>
                    <td className="p-3 text-sm">VYM held up slightly better in worst drops</td>
                  </tr>
                  <tr>
                    <td className="p-3">Sharpe Ratio (5yr)</td>
                    <td className="p-3 text-center font-semibold">0.78</td>
                    <td className="p-3 text-center">0.65</td>
                    <td className="p-3 text-sm">SCHD better risk-adjusted returns</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Concentration Risk Warning:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              SCHD holds only ~100 stocks with ~40% in the top 10. If any major holding has a bad year (dividend
              cut, earnings miss), it affects SCHD more than VYM. In 2022, SCHD&apos;s concentration in value
              stocks actually helped it outperform, but in other years it could work against you. VYM&apos;s 500+
              holdings provide a wider safety net. If concentration risk keeps you up at night, VYM is the
              better sleep-at-night choice.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Who Should Buy Which */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Verdict: Who Should Buy Which?</h2>

        <div className="space-y-6">
          <Card className="border-2 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Buy SCHD If You Are...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Growth-Oriented Investor</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>- Under 50 and reinvesting dividends via DRIP</li>
                    <li>- Prioritize dividend growth over current yield</li>
                    <li>- Want the highest long-term total return</li>
                    <li>- Comfortable with 100-stock concentration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality-Focused Investor</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>- Want fundamental quality screening built in</li>
                    <li>- Prefer companies with strong balance sheets</li>
                    <li>- Like the idea of a curated best-of-the-best approach</li>
                    <li>- Plan to hold for 10+ years</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                Buy VYM If You Are...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Yield-Oriented Investor</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>- Retired or within 5 years of retirement</li>
                    <li>- Spending dividends as income (not reinvesting)</li>
                    <li>- Want maximum diversification for safety</li>
                    <li>- Prefer broad market exposure over stock picking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Risk-Averse Investor</h4>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>- Want 500+ holdings to spread risk</li>
                    <li>- Prioritize stability over outperformance</li>
                    <li>- Investing in a taxable account (lower turnover)</li>
                    <li>- Prefer the Vanguard brand and infrastructure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500 bg-purple-50 dark:bg-purple-950">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <PieChart className="h-6 w-6 text-purple-600" />
                Or Buy Both (The Smart Play)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Many seasoned dividend investors hold both SCHD and VYM. Despite ~30% overlap, they
                complement each other well:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <p className="font-semibold">60% SCHD + 40% VYM</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Growth tilt -- best for accumulators under 50. Gets SCHD&apos;s quality screening
                    with VYM&apos;s diversification cushion.
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <p className="font-semibold">50% SCHD + 50% VYM</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Balanced approach -- good for ages 45-60. Equal emphasis on growth and breadth.
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <p className="font-semibold">40% SCHD + 60% VYM</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Income tilt -- best for retirees 60+. Maximizes diversification while still
                    benefiting from SCHD&apos;s dividend growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Model Your SCHD or VYM Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use our free calculators to project exactly how much income and wealth either ETF would
              generate based on your investment amount, time horizon, and DRIP settings.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button className="w-full" size="lg">
                  Dividend Growth Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is SCHD better than VYM?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                SCHD has outperformed VYM on total return, yield, and dividend growth over the past decade. However,
                VYM offers broader diversification (500+ vs 100 stocks) and lower volatility. For most long-term
                investors reinvesting dividends, SCHD is the stronger choice. For retirees prioritizing stability
                and broad exposure, VYM edges ahead.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I hold both SCHD and VYM in the same portfolio?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely. Despite about 30% overlap, holding both gives you SCHD&apos;s quality screening plus
                VYM&apos;s broader diversification. A 60/40 or 50/50 split is a popular approach among dividend
                investors. The overlap is not redundant -- it simply means you have extra weighting in the
                highest-quality dividend payers that both indexes agree on.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Which is better in a Roth IRA vs taxable account?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                In a Roth IRA, choose SCHD for its higher yield and growth -- all gains are tax-free forever.
                In a taxable account, VYM has a slight edge due to lower turnover and Vanguard&apos;s tax-efficient
                ETF structure. That said, the difference is small. Performance matters more than marginal tax
                efficiency, so SCHD remains compelling in either account type.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why did SCHD underperform in 2023?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                In 2023, the S&P 500 was driven by the &quot;Magnificent 7&quot; mega-cap tech stocks (Apple, NVIDIA, etc.)
                that SCHD does not hold. SCHD&apos;s quality-dividend focus meant it missed that narrow rally.
                However, SCHD has historically bounced back strongly and has outperformed over longer periods.
                One year of underperformance does not invalidate the strategy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What about VIG or DGRO instead?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                VIG (Vanguard Dividend Appreciation) focuses on 10+ year dividend growers with a lower 2.0% yield but
                faster growth. DGRO (iShares Core Dividend Growth) is a balanced middle ground. Both are excellent but
                serve different needs. SCHD and VYM are the two largest and most liquid dividend ETFs, making them the
                default starting point for most investors. Consider adding VIG or DGRO as a secondary holding.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/top-dividend-etfs-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend ETFs for 2026</CardTitle>
                <CardDescription>Complete ranking with yields, expenses, and portfolio ideas</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which strategy wins over 20 years?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Automate your wealth building with dividend reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-stocks-vs-etfs-complete-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Stocks vs ETFs</CardTitle>
                <CardDescription>When to pick individual stocks vs funds</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
