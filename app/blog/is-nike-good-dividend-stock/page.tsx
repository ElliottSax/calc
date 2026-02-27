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
  Clock
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata: Metadata = {
  title: 'Is Nike (NKE) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Nike (NKE) as a dividend investment. 22+ years of consecutive increases, ~1.8% yield, world\'s strongest athletic brand, growth + dividends combination, and safety analysis.',
  keywords: [
    'nike dividend',
    'NKE dividend stock',
    'nike stock analysis 2026',
    'nike dividend safety',
    'nike dividend growth',
    'athletic apparel dividend stocks',
    'nike dividend history',
    'is nike a good investment'
  ],
}

export default function IsNikeGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4">
          <Star className="h-3 w-3 mr-1" />
          Stock Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is Nike (NKE) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Nike combines the world&apos;s strongest athletic brand with 22 consecutive years of dividend
          increases. With a ~1.8% yield and a history of 10%+ annual dividend growth, NKE offers
          a rare blend of growth potential and growing income. Is it right for your portfolio?
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
          <span>Updated: February 2026</span>
          <span>-</span>
          <span>11 min read</span>
          <span>-</span>
          <span className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            Expert Analysis
          </span>
        </div>
      </div>

      {/* Quick Verdict */}
      <Card className="mb-16 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-950 dark:to-orange-950 border-2 border-orange-200 dark:border-orange-800">
        <CardContent className="pt-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-600" />
            Quick Verdict: Should You Buy Nike for Dividends?
          </h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Brand Power:</strong> Nike is the #1 athletic brand globally with $50B+ in annual revenue. Unmatched brand equity drives pricing power.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend Growth:</strong> 22 consecutive years of increases with a ~10% average annual growth rate. Low starting yield, big compounding potential.</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Near-term headwinds from DTC (direct-to-consumer) transition challenges, China slowdown, and inventory management missteps.</span>
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <Award className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Our Rating: BUY ON WEAKNESS</strong> for long-term dividend growth investors. The brand is irreplaceable, and current challenges are temporary. Best bought during pullbacks.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-orange-600" />
          Nike Dividend Snapshot (2026)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 rounded-lg">
                <Percent className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Current Yield</p>
                <p className="text-3xl font-bold text-slate-800 dark:text-slate-200">~1.8%</p>
                <p className="text-xs text-slate-500 mt-1">Annual: $1.48/share</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">10-Yr Dividend CAGR</p>
                <p className="text-3xl font-bold text-green-600">~11%</p>
                <p className="text-xs text-slate-500 mt-1">Strong growth rate</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="text-3xl font-bold text-blue-600">~45%</p>
                <p className="text-xs text-slate-500 mt-1">Very comfortable</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Key Facts</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Cap:</strong> ~$120 billion</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Revenue:</strong> ~$51 billion (FY2025)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Consecutive Increases:</strong> 22 years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ticker:</strong> NKE (NYSE)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Brands:</strong> Nike, Jordan, Converse</span>
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

      {/* Brand Power Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-600" />
          Nike&apos;s Unmatched Brand Power
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Nike&apos;s brand is worth an estimated $30+ billion, making it the most valuable athletic
          brand in the world. This brand equity is the engine that drives pricing power, customer
          loyalty, and -- ultimately -- sustainable dividend growth.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Global Dominance</h3>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>- #1 athletic footwear market share globally (~27%)</li>
                <li>- #1 athletic apparel market share globally (~16%)</li>
                <li>- Present in 190+ countries</li>
                <li>- ~75,000 employees worldwide</li>
                <li>- Sponsorships: LeBron, Ronaldo, 1,000+ athletes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-3">Revenue Mix (FY2025)</h3>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>- <strong>North America:</strong> ~44% ($22.5B)</li>
                <li>- <strong>EMEA:</strong> ~27% ($13.8B)</li>
                <li>- <strong>Greater China:</strong> ~15% ($7.5B)</li>
                <li>- <strong>APLA:</strong> ~10% ($5.1B)</li>
                <li>- <strong>Converse:</strong> ~4% ($2.1B)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-orange-50 to-slate-50 dark:from-orange-950 dark:to-slate-950">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-3">Why Brand Power Matters for Dividends</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Pricing Power:</strong> Nike can raise prices 4-6% annually because consumers pay for the brand. This directly flows to earnings and dividend growth.</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>DTC Margins:</strong> Direct-to-consumer sales (Nike.com, Nike stores) carry 60%+ gross margins vs 40% for wholesale. DTC is now ~45% of revenue.</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Innovation Pipeline:</strong> Air Max, Flyknit, ZoomX, Vaporfly -- consistent innovation justifies premium pricing and drives repeat purchases.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-green-600" />
          Nike Dividend History (10-Year)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Fiscal Year</th>
                    <th className="text-center p-3">Annual Dividend</th>
                    <th className="text-center p-3">YoY Growth</th>
                    <th className="text-center p-3">Approx. Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: 'FY2016', div: '$0.62', growth: '+12.7%', yld: '~1.1%' },
                    { year: 'FY2017', div: '$0.70', growth: '+12.9%', yld: '~1.3%' },
                    { year: 'FY2018', div: '$0.78', growth: '+11.4%', yld: '~1.0%' },
                    { year: 'FY2019', div: '$0.88', growth: '+12.8%', yld: '~1.0%' },
                    { year: 'FY2020', div: '$0.98', growth: '+11.4%', yld: '~1.0%' },
                    { year: 'FY2021', div: '$1.07', growth: '+9.2%', yld: '~0.7%' },
                    { year: 'FY2022', div: '$1.22', growth: '+14.0%', yld: '~1.1%' },
                    { year: 'FY2023', div: '$1.36', growth: '+11.5%', yld: '~1.2%' },
                    { year: 'FY2024', div: '$1.45', growth: '+6.6%', yld: '~1.5%' },
                    { year: 'FY2025', div: '$1.48', growth: '+2.1%', yld: '~1.8%' },
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

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">Understanding the Yield Paradox</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Nike&apos;s yield has risen from ~1.0% to ~1.8% -- not because the dividend grew
                slowly, but because the stock price declined ~40% from its 2021 highs. The dividend
                itself has more than doubled over 10 years. For patient investors, buying Nike
                at a higher yield (during weakness) sets up excellent long-term compounding.
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

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Payout Ratio (~45% of earnings)</span>
                </div>
                <Badge className="bg-green-600">Very Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Free Cash Flow Coverage (2.0x)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Brand Moat (World #1)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Balance Sheet (Net cash position)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Near-Term Earnings Pressure</span>
                </div>
                <Badge className="bg-yellow-600">Moderate Risk</Badge>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200">Overall: VERY SAFE (8.5/10)</p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Nike&apos;s dividend is extremely safe. The 45% payout ratio leaves massive room for
                continued increases even during earnings downturns. Nike carries minimal net debt
                and generates $6B+ in annual free cash flow. Even in the current challenging
                environment, the dividend is not at risk. The question is not whether Nike will
                cut the dividend (it won&apos;t), but how fast it will grow from here.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Growth + Dividends */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-7 w-7 text-green-600" />
          Nike: The Rare Growth + Dividend Combination
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Most high-growth stocks pay no dividend. Most high-dividend stocks don&apos;t grow. Nike
          offers both -- and that combination is rare and valuable for long-term investors.
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Nike vs. Pure Yield vs. Pure Growth (Hypothetical $10,000 Over 20 Years)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Strategy</th>
                    <th className="text-center p-3">Starting Yield</th>
                    <th className="text-center p-3">Div Growth</th>
                    <th className="text-center p-3">Year 10 Income</th>
                    <th className="text-center p-3">Year 20 Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-orange-50 dark:bg-orange-950">
                    <td className="p-3 font-bold">Nike (NKE)</td>
                    <td className="p-3 text-center">1.8%</td>
                    <td className="p-3 text-center">10%</td>
                    <td className="p-3 text-center text-green-600">$467</td>
                    <td className="p-3 text-center text-green-600 font-bold">$1,211</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">High-Yield Stock (e.g., VZ)</td>
                    <td className="p-3 text-center">6.5%</td>
                    <td className="p-3 text-center">2%</td>
                    <td className="p-3 text-center">$792</td>
                    <td className="p-3 text-center">$966</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Growth Stock (No Div)</td>
                    <td className="p-3 text-center">0%</td>
                    <td className="p-3 text-center">N/A</td>
                    <td className="p-3 text-center text-slate-400">$0</td>
                    <td className="p-3 text-center text-slate-400">$0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">The Crossover Point</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Nike&apos;s dividend income overtakes the high-yield stock around year 13. By year 20,
                Nike produces 25% more annual income -- plus the stock likely appreciated significantly.
                This is the power of combining modest starting yield with double-digit growth.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pros and Cons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-indigo-600" />
          Pros and Cons
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
                  <span><strong>World&apos;s #1 athletic brand</strong> -- irreplaceable competitive moat</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>22-year dividend streak</strong> with ~11% average annual growth rate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Low 45% payout ratio</strong> -- massive room for continued growth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>DTC margin expansion</strong> -- shifting to higher-margin direct sales channels</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Global tailwinds</strong> -- rising middle class in emerging markets drives athletic wear demand</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Stock price pullback</strong> -- ~40% off highs creates an attractive entry point</span>
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
                  <span><strong>Low starting yield</strong> (~1.8%) -- requires patience for compounding to deliver</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>China uncertainty</strong> -- 15% of revenue exposed to geopolitical and economic risks</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>DTC transition bumps</strong> -- pulling back from wholesale alienated some retail partners</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Inventory management</strong> -- excess inventory led to margin-eroding markdowns in 2023-2024</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Competition from On, Hoka, New Balance</strong> -- premium running segment being challenged</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Consumer discretionary</strong> -- athletic wear spending declines in recessions</span>
                </div>
              </div>
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
              <h3 className="text-lg font-bold mb-2">Is Nike a Dividend Aristocrat?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not yet. Nike has 22 consecutive years of dividend increases; Dividend Aristocrat
                status requires 25 years in the S&P 500 with consecutive increases. If Nike continues
                its streak, it will qualify around 2028-2029. However, Nike is already a member of the
                S&P 500 Dividend Aristocrats Index&apos;s watchlist. The 22-year track record through
                multiple recessions demonstrates strong commitment to growing the dividend.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Why is Nike&apos;s stock down so much from its highs?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Nike&apos;s stock fell from ~$175 (late 2021) to ~$80 due to multiple headwinds: the
                DTC strategy was pushed too aggressively (alienating wholesale partners like Foot
                Locker), China revenue stagnated due to local brand competition and economic weakness,
                inventory buildups forced heavy markdowns that crushed margins, and new competitors
                (On Running, Hoka) gained market share in the premium running segment. These are
                real challenges, but most are fixable and temporary -- the Nike brand remains dominant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Will Nike&apos;s dividend growth reaccelerate?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, once earnings recover. The FY2025 dividend increase was only ~2%, reflecting
                the current earnings downturn. However, the 45% payout ratio means Nike has capacity
                to grow dividends faster than earnings when the business improves. As margins recover
                through DTC mix improvement, reduced markdowns, and China normalization, expect
                dividend growth to return to 8-12% annually by FY2027-2028. The long-term trajectory
                remains intact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Can On Running and Hoka threaten Nike&apos;s dividend long-term?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlikely. On Running (~$2B revenue) and Hoka (~$2B revenue) combined are less than
                8% of Nike&apos;s size. They have gained share in premium running, but Nike dominates
                basketball, soccer, lifestyle, training, and most other categories. Nike&apos;s response
                has been innovation acceleration (Vaporfly, Alphafly for running) and renewed
                wholesale partnerships. Competition is real but does not threaten Nike&apos;s overall
                market position or cash flow generation. The dividend is not at risk from these
                competitors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is now a good time to buy Nike for dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The current pullback creates an attractive entry point for long-term dividend growth
                investors. At ~$80, Nike yields 1.8% -- the highest yield in over a decade. Historically,
                buying Nike near peak yield has delivered strong total returns over the following 5-10
                years. The business challenges are real but temporary, and the brand moat is intact.
                Dollar-cost averaging into Nike during weakness is a time-tested strategy for building
                a growing income stream.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-slate-800 to-orange-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Nike Dividend Returns</h3>
            <p className="mb-6 text-slate-200">
              Model Nike&apos;s dividend compounding power. See how a 1.8% starting yield growing
              at 10%+ per year transforms into substantial income over time.
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
            <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              50 Best Dividend Stocks to Buy in 2026
            </Link>
            <Link href="/blog/growth-stocks-vs-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Growth Stocks vs Dividend Stocks: Complete Guide
            </Link>
            <Link href="/blog/how-to-reinvest-dividends-for-maximum-growth" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Reinvest Dividends for Maximum Growth
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
