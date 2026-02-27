import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Target,
  Percent,
  Building2,
  Landmark,
  Calendar,
  Zap,
  Award,
  LineChart
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata: Metadata = {
  title: 'Is Chevron (CVX) a Good Dividend Stock? 2026 Analysis',
  description: 'Comprehensive analysis of Chevron (CVX) as a dividend investment. 37+ years of consecutive increases, ~4.0% yield, energy sector outlook, comparison with ExxonMobil, and dividend safety rating.',
  keywords: [
    'chevron dividend',
    'CVX dividend stock',
    'chevron stock analysis 2026',
    'chevron dividend safety',
    'chevron vs exxonmobil',
    'energy dividend stocks',
    'chevron dividend history',
    'is chevron a good investment'
  ],
}

export default function IsChevronGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4">
          <Building2 className="h-3 w-3 mr-1" />
          Stock Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is Chevron (CVX) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Chevron has increased its dividend for 37 consecutive years, making it one of the most
          reliable income stocks in the energy sector. With a yield near 4.0% and strong free cash
          flow, is CVX the right dividend stock for your portfolio?
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
          <span>Updated: February 2026</span>
          <span>-</span>
          <span>12 min read</span>
          <span>-</span>
          <span className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Expert Analysis
          </span>
        </div>
      </div>

      {/* Quick Verdict */}
      <Card className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Quick Verdict: Should You Buy Chevron for Dividends?
          </h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend Streak:</strong> 37 consecutive years of increases -- approaching Dividend Aristocrat exit threshold territory in consistency.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~4.0% with an annual dividend of $6.52 per share -- well above the S&P 500 average of 1.3%.</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Oil price volatility. Chevron maintained its dividend through 2020 when oil went negative, but prolonged low prices pressure free cash flow.</span>
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Our Rating: BUY</strong> for income investors seeking energy exposure with a best-in-class balance sheet and decades of dividend reliability.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          Chevron Dividend Snapshot (2026)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
                <Percent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Current Yield</p>
                <p className="text-3xl font-bold text-blue-600">~4.0%</p>
                <p className="text-xs text-slate-500 mt-1">Annual: $6.52/share</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="text-3xl font-bold text-green-600">~55%</p>
                <p className="text-xs text-slate-500 mt-1">Well-covered by earnings</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Consecutive Increases</p>
                <p className="text-3xl font-bold text-orange-600">37</p>
                <p className="text-xs text-slate-500 mt-1">Since 1989</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Key Facts</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Cap:</strong> ~$280 billion</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Payment Frequency:</strong> Quarterly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Sector:</strong> Energy (Integrated Oil & Gas)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ticker:</strong> CVX (NYSE)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>5-Yr Dividend Growth:</strong> ~6% CAGR</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dividend Tax:</strong> Qualified</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-green-600" />
          Chevron Dividend History (10-Year)
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Chevron has raised its dividend every year since 1989. Even during the 2020 oil price crash
          when WTI crude briefly went negative, Chevron still increased its annual payout. That kind of
          commitment to shareholders is rare in the energy sector.
        </p>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-center p-3">Annual Dividend</th>
                    <th className="text-center p-3">YoY Growth</th>
                    <th className="text-center p-3">Approx. Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2016', div: '$4.28', growth: '+0.9%', yld: '~3.9%' },
                    { year: '2017', div: '$4.32', growth: '+0.9%', yld: '~3.5%' },
                    { year: '2018', div: '$4.48', growth: '+3.7%', yld: '~3.7%' },
                    { year: '2019', div: '$4.76', growth: '+6.3%', yld: '~4.0%' },
                    { year: '2020', div: '$5.16', growth: '+8.4%', yld: '~5.8%' },
                    { year: '2021', div: '$5.36', growth: '+3.9%', yld: '~4.6%' },
                    { year: '2022', div: '$5.68', growth: '+6.0%', yld: '~3.2%' },
                    { year: '2023', div: '$6.04', growth: '+6.3%', yld: '~3.7%' },
                    { year: '2024', div: '$6.28', growth: '+4.0%', yld: '~4.1%' },
                    { year: '2025', div: '$6.52', growth: '+3.8%', yld: '~4.0%' },
                  ].map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-center">{row.div}</td>
                      <td className="p-3 text-center text-green-600">{row.growth}</td>
                      <td className="p-3 text-center">{row.yld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">Key Takeaway</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Notice 2020: oil crashed, Chevron stock fell 30%, but the dividend still grew 8.4%.
                Management protected shareholders even during the worst oil downturn in history.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Chevron has the strongest balance sheet among the integrated oil majors. Its net debt-to-capital
          ratio of roughly 12% is the lowest in the industry, giving it enormous financial flexibility
          to maintain dividends through commodity downturns.
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Payout Ratio (~55%)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Balance Sheet (12% net debt-to-capital)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Free Cash Flow Coverage (1.8x)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Oil Price Sensitivity</span>
                </div>
                <Badge className="bg-yellow-600">Moderate Risk</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Track Record (37 years)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200">Overall: SAFE (8/10)</p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Chevron can cover its dividend even with oil at $50/barrel. At current prices near $70-80,
                the dividend is extremely well-funded. The breakeven price for dividend coverage is
                approximately $40-45/barrel -- the lowest among the supermajors.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-3">Free Cash Flow Breakdown (2025 Estimated)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 border-b">
                <span>Operating Cash Flow</span>
                <span className="font-semibold text-green-600">$35.5B</span>
              </div>
              <div className="flex justify-between p-2 border-b">
                <span>Capital Expenditures</span>
                <span className="font-semibold text-red-600">-$16.0B</span>
              </div>
              <div className="flex justify-between p-2 border-b-2">
                <span className="font-bold">Free Cash Flow</span>
                <span className="font-bold text-green-600">$19.5B</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Dividend Payments</span>
                <span className="font-semibold">-$12.0B</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Share Buybacks</span>
                <span className="font-semibold">-$5.0B</span>
              </div>
              <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950">
                <span className="font-bold">Cash After Shareholder Returns</span>
                <span className="font-bold text-green-600">$2.5B</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* InlineSignup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* CVX vs XOM Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-purple-600" />
          Chevron vs ExxonMobil: Head-to-Head Comparison
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Chevron and ExxonMobil are the two largest U.S.-based integrated oil companies. Both are
          Dividend Aristocrats, but they differ in strategy, balance sheet strength, and growth outlook.
        </p>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Metric</th>
                    <th className="text-center p-3">Chevron (CVX)</th>
                    <th className="text-center p-3">ExxonMobil (XOM)</th>
                    <th className="text-center p-3">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Dividend Yield</td>
                    <td className="p-3 text-center">~4.0%</td>
                    <td className="p-3 text-center">~3.4%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">CVX</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Consecutive Increases</td>
                    <td className="p-3 text-center">37 years</td>
                    <td className="p-3 text-center">42 years</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">XOM</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Net Debt/Capital</td>
                    <td className="p-3 text-center">~12%</td>
                    <td className="p-3 text-center">~18%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">CVX</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Market Cap</td>
                    <td className="p-3 text-center">$280B</td>
                    <td className="p-3 text-center">$470B</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">XOM</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Free Cash Flow</td>
                    <td className="p-3 text-center">$19.5B</td>
                    <td className="p-3 text-center">$33B</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">XOM</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Payout Ratio</td>
                    <td className="p-3 text-center">~55%</td>
                    <td className="p-3 text-center">~45%</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">XOM</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Permian Basin Position</td>
                    <td className="p-3 text-center">Strong</td>
                    <td className="p-3 text-center">Dominant (Pioneer)</td>
                    <td className="p-3 text-center"><Badge className="bg-green-600">XOM</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">LNG Exposure</td>
                    <td className="p-3 text-center">Strong (Australia, US)</td>
                    <td className="p-3 text-center">Growing (Golden Pass)</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">CVX</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">5-Yr Dividend CAGR</td>
                    <td className="p-3 text-center">~6%</td>
                    <td className="p-3 text-center">~5%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">CVX</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="font-bold mb-2">Verdict: Both Are Excellent, Different Strengths</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Choose Chevron (CVX)</strong> for higher current yield, cleaner balance sheet,
                and better LNG positioning. <strong>Choose ExxonMobil (XOM)</strong> for larger scale,
                lower payout ratio, and dominant Permian Basin production. Many dividend investors own
                both for diversified energy exposure.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pros and Cons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Pros and Cons of Chevron as a Dividend Stock
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-green-300 dark:border-green-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Reasons to Buy
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>37-year growth streak</strong> through recessions, oil crashes, and pandemics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Best balance sheet</strong> among integrated oil majors (12% net debt-to-capital)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Strong buyback program</strong> -- $5B+ annually reduces share count, boosting per-share growth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Permian Basin and Gulf of Mexico</strong> assets provide decades of low-cost production</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>LNG exposure</strong> positions Chevron for long-term natural gas demand growth in Asia</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-300 dark:border-red-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Risks to Consider
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Oil price dependency</strong> -- earnings and cash flow fluctuate with crude prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Energy transition risk</strong> -- long-term shift to renewables threatens fossil fuel demand</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Regulatory and ESG pressures</strong> -- carbon taxes, drilling restrictions, and divestment campaigns</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Hess acquisition uncertainty</strong> -- ongoing arbitration with CNOOC over Guyana assets</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Cyclical sector</strong> -- stock can drop 30-40% during oil downturns even if dividend is safe</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          Chevron Business Overview
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Chevron operates across the entire energy value chain -- from exploration and production (upstream)
          to refining, chemicals, and fuel retail (downstream). This integrated model provides natural
          hedging: when oil prices fall, refining margins often expand.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Upstream (Exploration & Production)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">~70% of operating earnings</p>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>- Production: ~3.1 million BOE/day</li>
                <li>- Key assets: Permian Basin, Gulf of Mexico, Kazakhstan (Tengiz), Australia (Gorgon/Wheatstone LNG)</li>
                <li>- Guyana development (via Hess acquisition, pending arbitration)</li>
                <li>- Breakeven costs among lowest in industry at ~$40/barrel</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Downstream (Refining & Chemicals)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">~30% of operating earnings</p>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>- Refining capacity: ~1.7 million barrels/day</li>
                <li>- Key refineries: Pascagoula (MS), El Segundo (CA), Richmond (CA)</li>
                <li>- Chevron-branded gas stations across the western U.S.</li>
                <li>- CPChem joint venture (petrochemicals with Phillips 66)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Can Chevron maintain its dividend if oil drops to $50/barrel?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. Chevron&apos;s dividend breakeven is approximately $40-45 per barrel of Brent crude.
                At $50/barrel, Chevron can cover the dividend but would likely pause share buybacks and
                reduce capital expenditures. The company maintained its dividend through 2020 when WTI
                crude went negative, so management has proven its commitment. Chevron&apos;s industry-leading
                balance sheet provides years of cushion even in a prolonged downturn.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is Chevron a Dividend Aristocrat?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. With 37 consecutive years of dividend increases, Chevron qualifies as a Dividend
                Aristocrat (requires 25+ years in the S&P 500 with consecutive increases). It is also
                on track to become a Dividend King (50+ years) by 2039 if it continues its streak.
                Chevron is one of only two energy companies in the Dividend Aristocrats, alongside ExxonMobil.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How does the energy transition affect Chevron&apos;s dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The energy transition is a long-term risk, not a near-term threat to the dividend.
                Global oil demand is not expected to peak until the early 2030s at the earliest.
                Chevron is investing $10B+ in lower-carbon technologies (hydrogen, carbon capture,
                renewable fuels) while continuing to generate massive cash from oil and gas. The
                dividend is safe for at least the next 10-15 years. Beyond that, Chevron&apos;s ability
                to transition its business model will determine long-term sustainability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Should I buy Chevron or an energy ETF like XLE?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Chevron gives you a higher yield (~4.0% vs XLE&apos;s ~3.3%) and a proven dividend
                growth track record. However, XLE provides diversification across 23 energy companies,
                reducing single-stock risk. If you want to own just one energy dividend stock, Chevron
                is an excellent choice. If you prefer diversification, XLE includes both Chevron (22%
                weight) and ExxonMobil (23% weight) plus midstream and services companies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">What will Chevron&apos;s dividend be in 5 years?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If Chevron maintains its recent ~5-6% annual growth rate, the dividend could reach
                approximately $8.30-$8.70 per share by 2030 (up from $6.52 today). At a $160 stock
                price, that would represent a yield-on-cost of 5.2-5.4% for shares bought today.
                Growth may be slower if oil prices decline, or faster if energy prices remain elevated.
                Use our Dividend Growth Calculator to model your own scenarios.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Chevron Dividend Returns</h3>
            <p className="mb-6 text-blue-100">
              See how much income Chevron could generate in your portfolio over 10, 20, or 30 years.
              Model DRIP reinvestment, dividend growth, and different investment amounts.
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
              <Link href="/calculators/yield-on-cost">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Yield on Cost Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="grid gap-3">
            <Link href="/blog/best-energy-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Energy Dividend Stocks for 2026
            </Link>
            <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              50 Best Dividend Stocks to Buy in 2026
            </Link>
            <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Analyze Dividend Safety (8-Point Checklist)
            </Link>
            <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Aristocrats (2026)
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
