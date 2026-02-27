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
  Star,
  Target,
  Percent,
  Building2,
  Calendar,
  Zap,
  Award,
  LineChart,
  PieChart
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata: Metadata = {
  title: 'Is Home Depot (HD) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Home Depot (HD) as a dividend investment. 15+ years of increases, ~2.5% yield, exceptional 15%/yr dividend growth rate, housing market outlook, and comparison with Lowe\'s.',
  keywords: [
    'home depot dividend',
    'HD dividend stock',
    'home depot stock analysis 2026',
    'home depot dividend growth',
    'home depot vs lowes dividend',
    'retail dividend stocks',
    'home depot dividend history',
    'is home depot a good investment'
  ],
}

export default function IsHomeDepotGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4">
          <Building2 className="h-3 w-3 mr-1" />
          Stock Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is Home Depot (HD) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Home Depot is a dividend growth machine. With 15 consecutive years of increases, a ~2.5%
          yield, and an average annual dividend growth rate exceeding 15%, HD is one of the best
          compounding dividend stocks in the market. Here is the full breakdown.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
          <span>Updated: February 2026</span>
          <span>-</span>
          <span>11 min read</span>
          <span>-</span>
          <span className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Expert Analysis
          </span>
        </div>
      </div>

      {/* Quick Verdict */}
      <Card className="mb-16 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-2 border-orange-200 dark:border-orange-800">
        <CardContent className="pt-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-600" />
            Quick Verdict: Should You Buy Home Depot for Dividends?
          </h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend Growth Rate:</strong> ~15% annual CAGR over the past decade -- one of the fastest growers among large caps.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~2.5% with an annual dividend of $9.00 per share. Modest today but grows rapidly.</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Housing market slowdown. High mortgage rates suppressing home sales and renovation spending.</span>
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <Award className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Our Rating: STRONG BUY</strong> for dividend growth investors with a 5+ year time horizon. The compounding power is exceptional.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-orange-600" />
          Home Depot Dividend Snapshot (2026)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
                <Percent className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Current Yield</p>
                <p className="text-3xl font-bold text-orange-600">~2.5%</p>
                <p className="text-xs text-slate-500 mt-1">Annual: $9.00/share</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">10-Yr Dividend CAGR</p>
                <p className="text-3xl font-bold text-green-600">~15%</p>
                <p className="text-xs text-slate-500 mt-1">Exceptional growth rate</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="text-3xl font-bold text-blue-600">~55%</p>
                <p className="text-xs text-slate-500 mt-1">Room for continued growth</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Key Facts</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Cap:</strong> ~$360 billion</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Revenue:</strong> ~$155 billion (2025)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Stores:</strong> 2,300+ across North America</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Consecutive Increases:</strong> 15 years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ticker:</strong> HD (NYSE)</span>
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

      {/* Why HD is a Dividend Growth Machine */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          Why Home Depot Is a Dividend Growth Machine
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Home Depot&apos;s dividend growth rate is truly remarkable among large-cap stocks. The power
          of compounding dividends at 15% per year means your income from HD shares roughly doubles
          every 5 years.
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">The Power of 15% Dividend Growth (Hypothetical $10,000 Investment)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-center p-3">Annual Dividend Income</th>
                    <th className="text-center p-3">Yield on Cost</th>
                    <th className="text-center p-3">Cumulative Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Year 1</td>
                    <td className="p-3 text-center">$250</td>
                    <td className="p-3 text-center">2.5%</td>
                    <td className="p-3 text-center">$250</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Year 5</td>
                    <td className="p-3 text-center">$437</td>
                    <td className="p-3 text-center">4.4%</td>
                    <td className="p-3 text-center">$1,685</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Year 10</td>
                    <td className="p-3 text-center">$879</td>
                    <td className="p-3 text-center text-green-600 font-bold">8.8%</td>
                    <td className="p-3 text-center">$5,091</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Year 15</td>
                    <td className="p-3 text-center">$1,768</td>
                    <td className="p-3 text-center text-green-600 font-bold">17.7%</td>
                    <td className="p-3 text-center">$11,729</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Year 20</td>
                    <td className="p-3 text-center">$3,555</td>
                    <td className="p-3 text-center text-green-600 font-bold">35.6%</td>
                    <td className="p-3 text-center">$25,087</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">The Compounding Magic</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                At 15% dividend growth, your $250/year income grows to $3,555/year by year 20 -- a
                35.6% yield on your original cost. This is why dividend growth investors focus on
                growth rate, not starting yield. Even a modest 2.5% starting yield becomes enormous
                over time.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend History Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-green-600" />
          Home Depot Dividend History (10-Year)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-center p-3">Annual Dividend</th>
                    <th className="text-center p-3">YoY Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2016', div: '$2.76', growth: '+17.0%' },
                    { year: '2017', div: '$3.56', growth: '+29.0%' },
                    { year: '2018', div: '$4.12', growth: '+15.7%' },
                    { year: '2019', div: '$5.44', growth: '+32.0%' },
                    { year: '2020', div: '$6.00', growth: '+10.3%' },
                    { year: '2021', div: '$6.60', growth: '+10.0%' },
                    { year: '2022', div: '$7.60', growth: '+15.2%' },
                    { year: '2023', div: '$8.36', growth: '+10.0%' },
                    { year: '2024', div: '$8.90', growth: '+6.5%' },
                    { year: '2025', div: '$9.00', growth: '+1.1%' },
                  ].map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-center">{row.div}</td>
                      <td className="p-3 text-center text-green-600">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">Recent Slowdown Note</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Growth slowed to ~1-6% in 2024-2025 due to the housing market softening and higher
                mortgage rates reducing renovation spending. This is likely temporary. Analysts expect
                growth to reaccelerate to 8-12% annually once housing activity recovers.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* InlineSignup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis
        </h2>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Payout Ratio (~55% of earnings)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Free Cash Flow Coverage (1.6x)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Competitive Moat (Market Leader)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Debt Level ($45B long-term debt)</span>
                </div>
                <Badge className="bg-yellow-600">Moderate</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Housing Market Sensitivity</span>
                </div>
                <Badge className="bg-yellow-600">Moderate Risk</Badge>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200">Overall: SAFE (8/10)</p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Home Depot&apos;s dividend is very safe. The company generates $17B+ in annual free cash
                flow, easily covering the ~$9B in annual dividends. Even during the 2020 pandemic, HD
                thrived as homeowners invested in DIY projects. The main risk is a prolonged housing
                recession, but even then, HD&apos;s dominant market position provides resilience.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Competitive Advantages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-600" />
          Home Depot&apos;s Competitive Advantages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Scale and Buying Power</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                With $155B in revenue and 2,300+ stores, Home Depot has massive purchasing leverage
                with suppliers. This translates into lower costs, better margins, and the ability to
                undercut smaller competitors on price while maintaining profitability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Pro Customer Focus</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Pro customers (contractors, builders) account for ~50% of sales and have higher
                ticket sizes. HD&apos;s investments in supply chain, delivery, and Pro-specific tools
                create sticky relationships. The SRS Distribution acquisition (~$18B) deepens
                this competitive moat.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Omnichannel Leadership</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Online sales account for ~15% of revenue. HD interconnects digital and physical
                seamlessly -- buy online, pick up in store (BOPIS) accounts for over 50% of online
                orders. Amazon cannot replicate 4x8 sheets of plywood or kitchen cabinet installations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Aging Housing Stock</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The average U.S. home is 40+ years old. Aging housing requires constant maintenance,
                repair, and remodeling -- driving persistent demand regardless of new home sales.
                This structural tailwind supports HD for decades.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HD vs LOW */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-purple-600" />
          Home Depot vs Lowe&apos;s: Which Is the Better Dividend Stock?
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Metric</th>
                    <th className="text-center p-3">Home Depot (HD)</th>
                    <th className="text-center p-3">Lowe&apos;s (LOW)</th>
                    <th className="text-center p-3">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Dividend Yield</td>
                    <td className="p-3 text-center">~2.5%</td>
                    <td className="p-3 text-center">~1.9%</td>
                    <td className="p-3 text-center"><Badge className="bg-orange-600">HD</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">10-Year Dividend CAGR</td>
                    <td className="p-3 text-center">~15%</td>
                    <td className="p-3 text-center">~20%</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">LOW</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Consecutive Increases</td>
                    <td className="p-3 text-center">15 years</td>
                    <td className="p-3 text-center">62 years</td>
                    <td className="p-3 text-center"><Badge className="bg-blue-600">LOW</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Revenue</td>
                    <td className="p-3 text-center">$155B</td>
                    <td className="p-3 text-center">$84B</td>
                    <td className="p-3 text-center"><Badge className="bg-orange-600">HD</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Operating Margin</td>
                    <td className="p-3 text-center">~14.5%</td>
                    <td className="p-3 text-center">~12.5%</td>
                    <td className="p-3 text-center"><Badge className="bg-orange-600">HD</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3 font-medium">Pro Customer Mix</td>
                    <td className="p-3 text-center">~50%</td>
                    <td className="p-3 text-center">~25%</td>
                    <td className="p-3 text-center"><Badge className="bg-orange-600">HD</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <p className="font-bold mb-2">Verdict: Home Depot Wins for Most Investors</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Home Depot has the stronger business with higher margins, better Pro exposure, and
                larger scale. Lowe&apos;s has a longer dividend streak (62 years as a Dividend King) and
                faster recent growth, but from a smaller base. For dividend growth investing,
                <strong> HD is the safer pick</strong>. For dividend streak purists, Lowe&apos;s exceptional
                62-year track record is hard to ignore.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Will Home Depot&apos;s dividend growth slow down?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Growth already slowed in 2024-2025 to low single digits due to the housing downturn
                and the large SRS Distribution acquisition requiring debt digestion. However, analysts
                expect growth to reaccelerate to 8-12% annually once housing activity improves and
                the acquisition synergies materialize. The long-term trajectory remains strong given
                HD&apos;s dominant market position, pricing power, and massive free cash flow generation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is Home Depot recession-proof?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not entirely, but more resilient than most retailers. During the 2008-2009 recession,
                HD&apos;s revenue declined 7-9% and earnings dropped more significantly. The dividend was
                frozen (not cut) from 2007-2010. However, during COVID-19, Home Depot actually
                thrived as homeowners invested in their living spaces. The business is tied to the
                housing market, which is cyclical, but the aging housing stock in America provides
                a structural demand floor that limits downside.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How does the housing market affect HD&apos;s dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Directly. About 40% of HD&apos;s revenue comes from big-ticket remodeling projects that
                correlate with home sales and home equity levels. When mortgage rates are high and
                home sales slow (as in 2023-2025), growth stalls. But 60% of revenue comes from
                maintenance, repair, and small projects that happen regardless. The dividend is safe
                in a housing slowdown -- growth just decelerates temporarily.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is HD stock overvalued at a ~24x P/E?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Home Depot typically trades at a premium valuation (20-25x earnings) because of
                its consistent growth, strong cash returns, and dominant market position. While 24x
                isn&apos;t cheap, it is within HD&apos;s historical range. Dollar-cost averaging into HD
                over time reduces the risk of buying at a peak. The best strategy for long-term
                dividend growth investors is to add shares consistently rather than trying to time
                a perfect entry point.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is the SRS Distribution acquisition good for dividend growth?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Long-term yes, short-term it adds debt pressure. SRS Distribution (~$18B deal) deepens
                Home Depot&apos;s Pro customer exposure and adds $10B+ in revenue from roofing,
                landscaping, and pool supplies distribution. The near-term impact is higher leverage
                and slower dividend growth (2024-2025), but by 2027-2028, the acquisition should be
                accretive to earnings and support reacceleration of dividend growth to 10%+ annually.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Home Depot Dividend Returns</h3>
            <p className="mb-6 text-orange-100">
              Model HD&apos;s powerful dividend growth with our calculators. See how reinvesting at 15%
              annual growth transforms a modest starting yield into substantial income.
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
            <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Growth Stocks for 2026
            </Link>
            <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Consumer Staples Dividend Stocks
            </Link>
            <Link href="/blog/how-to-reinvest-dividends-for-maximum-growth" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Reinvest Dividends for Maximum Growth
            </Link>
            <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete Dividend Kings List (2026)
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
