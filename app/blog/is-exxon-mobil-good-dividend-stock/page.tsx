import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  Landmark,
  PieChart,
  Calendar,
  Clock,
  Zap,
  Award,
  LineChart
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Is Exxon Mobil (XOM) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Exxon Mobil (XOM) as a dividend stock. 42 consecutive years of increases, ~3.5% yield, energy sector outlook, safety analysis, and comparison with Chevron.',
  keywords: ['exxon dividend', 'XOM dividend', 'exxon mobil stock', 'energy dividend stocks', 'exxon dividend yield', 'is exxon a good investment', 'oil stock dividends 2026'],
}

const dividendHistory = [
  { year: 2026, dividend: '$3.96', increase: '4.2%' },
  { year: 2025, dividend: '$3.80', increase: '4.4%' },
  { year: 2024, dividend: '$3.64', increase: '3.7%' },
  { year: 2023, dividend: '$3.52', increase: '3.5%' },
  { year: 2022, dividend: '$3.40', increase: '3.4%' },
  { year: 2021, dividend: '$3.28', increase: '1.2%' },
  { year: 2020, dividend: '$3.24', increase: '2.5%' },
  { year: 2019, dividend: '$3.16', increase: '5.7%' },
  { year: 2018, dividend: '$2.99', increase: '6.5%' },
  { year: 2017, dividend: '$2.81', increase: '2.7%' },
]

const peerComparison = [
  { company: 'Exxon Mobil (XOM)', yield: '3.5%', growth5yr: '3.5%', payout: '42%', streak: 42, safety: '88/100' },
  { company: 'Chevron (CVX)', yield: '4.2%', growth5yr: '6.0%', payout: '50%', streak: 37, safety: '85/100' },
  { company: 'ConocoPhillips (COP)', yield: '3.0%', growth5yr: '8.0%', payout: '35%', streak: 8, safety: '80/100' },
  { company: 'Shell (SHEL)', yield: '3.8%', growth5yr: '4.0%', payout: '38%', streak: 4, safety: '75/100' },
  { company: 'TotalEnergies (TTE)', yield: '5.0%', growth5yr: '5.5%', payout: '45%', streak: 6, safety: '78/100' },
]

export default function IsExxonMobilGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-orange-600">
          <Award className="h-3 w-3 mr-1" />
          Dividend Aristocrat - 42 Years
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is Exxon Mobil (XOM) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          With 42 consecutive years of dividend increases, Exxon Mobil is one of the longest-running
          Dividend Aristocrats in the energy sector. But does cyclical oil revenue make this
          high-yield stock reliable enough for income investors? Here is the complete breakdown.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Updated February 2026</span>
          <span>|</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</span>
        </div>
      </div>

      {/* Quick Summary Card */}
      <Card className="mb-16 border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-yellow-600" />
            Quick Verdict: Exxon Mobil Dividend Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend Streak:</strong> 42 consecutive years of increases -- survived every oil crash since 1984</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~3.5% ($3.96 annually), paid quarterly with a strong track record</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Payout Ratio:</strong> 42% of earnings -- well-covered even when oil drops to $60/barrel</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Revenue and earnings swing dramatically with oil prices -- $80 oil supports growth, $50 oil stresses the dividend</span>
            </p>
            <p className="flex items-start gap-2">
              <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Safety Score:</strong> 88/100 -- strong for energy; Pioneer Natural Resources acquisition strengthens the portfolio</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section: Company Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-7 w-7 text-blue-600" />
          Exxon Mobil: The World's Largest Energy Company
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Exxon Mobil (NYSE: XOM) is the largest publicly traded oil and gas company in the world by market
            capitalization, valued at approximately $480 billion as of early 2026. The company operates across
            the full energy value chain: upstream exploration and production, downstream refining and chemicals,
            and a growing low-carbon solutions division.
          </p>
          <p>
            The 2024 acquisition of Pioneer Natural Resources for $60 billion was transformative. It made Exxon
            the dominant producer in the Permian Basin -- the most prolific oil region in the United States -- with
            over 1.4 million net acres. This gives Exxon access to decades of low-cost drilling inventory, reducing
            its breakeven oil price and strengthening cash flow predictability.
          </p>
          <p>
            In 2025, Exxon produced approximately 4.6 million barrels of oil equivalent per day, generated $55 billion
            in operating cash flow, and returned $36 billion to shareholders through dividends and buybacks. The
            company's integrated model -- spanning exploration, refining, and chemicals -- provides natural hedging
            against commodity price swings that pure-play E&P companies cannot match.
          </p>
        </div>
      </section>

      {/* Dividend History Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-green-600" />
          42-Year Dividend History
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Annual Dividend</th>
                    <th className="text-right p-3">YoY Increase</th>
                  </tr>
                </thead>
                <tbody>
                  {dividendHistory.map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-right font-semibold">{row.dividend}</td>
                      <td className="p-3 text-right text-green-600">+{row.increase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Average annual increase over the last 10 years: 3.8%. During the 2020 oil crash, Exxon still
              raised its dividend by 2.5% while many peers (Shell, BP) cut theirs by 50-66%.
            </p>
          </CardContent>
        </Card>
        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            The 2020 pandemic was the ultimate stress test. Oil prices briefly went negative, and Exxon posted
            a $22 billion loss. Yet the company raised its dividend anyway -- funded by debt and asset sales -- to
            preserve the 38-year streak at the time. That commitment to the dividend, even during existential
            stress, speaks volumes about management's priorities.
          </p>
          <p>
            Since then, oil prices recovered to $70-90 per barrel, and Exxon's earnings surged. The 2022
            supercycle delivered record $56 billion in profit, allowing Exxon to repay debt, accelerate buybacks,
            and grow the dividend at a faster 3-4% annual rate.
          </p>
        </div>
      </section>

      {/* Key Metrics Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          Current Dividend Metrics (2026)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Dividend Yield</p>
                  <p className="text-3xl font-bold">3.5%</p>
                </div>
                <Percent className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Based on ~$113 share price. Quarterly payment of $0.99/share.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Annual Dividend</p>
                  <p className="text-3xl font-bold">$3.96</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Paid quarterly: $0.99 per share in March, June, September, December.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Payout Ratio</p>
                  <p className="text-3xl font-bold">42%</p>
                </div>
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">At $80 oil. Rises to ~65% at $60 oil, drops to ~30% at $100 oil.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Free Cash Flow</p>
                  <p className="text-3xl font-bold">$36B</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">2025 estimated. Covers $16B in dividends with a 2.2x coverage ratio.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Energy Sector Analysis */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          Energy Sector Cyclicality: The Elephant in the Room
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            The biggest risk to owning Exxon is commodity price volatility. Unlike consumer staples companies
            (Procter & Gamble, Coca-Cola) that generate predictable revenue regardless of economic conditions,
            Exxon's earnings swing wildly with oil and natural gas prices.
          </p>
        </div>

        <Card className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <CardHeader>
            <CardTitle className="text-lg">Oil Price Sensitivity Analysis</CardTitle>
            <CardDescription>How Exxon's dividend coverage changes with oil prices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Oil Price (WTI)</th>
                    <th className="text-right p-3">Est. Earnings/Share</th>
                    <th className="text-right p-3">Payout Ratio</th>
                    <th className="text-right p-3">Dividend Safety</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-red-50 dark:bg-red-950">
                    <td className="p-3">$40/barrel</td>
                    <td className="p-3 text-right">$3.50</td>
                    <td className="p-3 text-right text-red-600">113%</td>
                    <td className="p-3 text-right"><Badge className="bg-red-600">At Risk</Badge></td>
                  </tr>
                  <tr className="border-b bg-yellow-50 dark:bg-yellow-950">
                    <td className="p-3">$60/barrel</td>
                    <td className="p-3 text-right">$6.10</td>
                    <td className="p-3 text-right text-yellow-600">65%</td>
                    <td className="p-3 text-right"><Badge className="bg-yellow-600">Stressed</Badge></td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3">$80/barrel</td>
                    <td className="p-3 text-right">$9.40</td>
                    <td className="p-3 text-right text-green-600">42%</td>
                    <td className="p-3 text-right"><Badge className="bg-green-600">Safe</Badge></td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3">$100/barrel</td>
                    <td className="p-3 text-right">$13.20</td>
                    <td className="p-3 text-right text-green-600">30%</td>
                    <td className="p-3 text-right"><Badge className="bg-green-600">Very Safe</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              The Pioneer acquisition lowered Exxon's breakeven to ~$35/barrel, providing a wider margin
              of safety than pre-2024 levels.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            The critical takeaway: Exxon's dividend is safe above $55 oil but comes under pressure below $50.
            Since 1984, oil has averaged approximately $65 per barrel (inflation-adjusted). OPEC+ supply
            management and growing global energy demand suggest $70-90 oil for the medium term, which supports
            comfortable dividend coverage.
          </p>
          <p>
            The Pioneer acquisition is the game-changer. It lowered Exxon's production costs and added
            15+ years of Permian Basin drilling inventory. Even if oil drops to $50, Exxon can sustain the
            dividend through low-cost Permian production, downstream refining margins, and chemical earnings
            that partially offset upstream weakness.
          </p>
        </div>
      </section>

      {/* InlineSignup - midway through article */}
      <div className="mb-16">
        <InlineSignup />
      </div>

      {/* Dividend Safety Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis: 88/100
        </h2>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">42-Year Streak (Excellent)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Survived the 1986 oil crash, 1998 Asian crisis, 2008 financial crisis, 2014-16 oil glut,
                    and 2020 pandemic. Management treats the dividend as sacrosanct.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Integrated Business Model (Strong)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Upstream, downstream, and chemicals provide natural hedging. When oil drops, refining margins
                    often expand, partially offsetting production losses.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Pioneer Acquisition (Positive)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Low-cost Permian Basin assets reduce breakeven price and extend production runway by 15+ years.
                    Annual synergies of $2B+ expected by 2027.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Balance Sheet (Very Strong)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Debt-to-equity of 0.2x. AA+ credit rating. $30B in cash reserves provides years of dividend
                    coverage even in a severe downturn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Commodity Dependence (Risk Factor)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Despite diversification, 60%+ of earnings come from oil production. Prolonged oil below
                    $50 would strain the dividend within 2-3 years.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Energy Transition Risk (Long-Term)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Electric vehicles and renewables could reduce oil demand over 20-30 years. Exxon is investing
                    in carbon capture and lithium, but fossil fuels remain core.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Peer Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          Exxon vs. Energy Sector Peers
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3">Company</th>
                    <th className="text-right p-3">Yield</th>
                    <th className="text-right p-3">5Y Growth</th>
                    <th className="text-right p-3">Payout</th>
                    <th className="text-right p-3">Streak</th>
                    <th className="text-right p-3">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  {peerComparison.map((stock) => (
                    <tr
                      key={stock.company}
                      className={`border-b ${stock.company.includes('Exxon') ? 'bg-yellow-50 dark:bg-yellow-950 font-semibold' : ''}`}
                    >
                      <td className="p-3">{stock.company}</td>
                      <td className="p-3 text-right">{stock.yield}</td>
                      <td className="p-3 text-right text-green-600">{stock.growth5yr}</td>
                      <td className="p-3 text-right">{stock.payout}</td>
                      <td className="p-3 text-right">{stock.streak} yrs</td>
                      <td className="p-3 text-right">{stock.safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            <strong>Exxon vs. Chevron:</strong> Chevron offers a higher yield (4.2%) and faster dividend growth
            (6.0%), but its payout ratio is higher (50%) and its streak is shorter (37 years). Exxon has the
            stronger balance sheet and the dominant Permian Basin position after the Pioneer deal. For pure
            dividend reliability, Exxon edges out Chevron.
          </p>
          <p>
            <strong>Exxon vs. ConocoPhillips:</strong> ConocoPhillips offers faster dividend growth (8.0%) but
            a lower yield (3.0%) and only 8 years of increases. COP is a pure-play E&P company with higher
            upside in bull markets but more downside risk in bear markets. Exxon's integrated model is safer.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is Exxon Mobil a good dividend stock for beginners?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Exxon is a solid dividend stock for beginners who understand energy sector cyclicality. The 42-year
                streak and 3.5% yield provide reliable income, but beginners should be prepared for stock price
                swings of 20-30% during oil downturns. A good approach is to start with a small position (3-5% of
                your portfolio) and dollar-cost average over time. Pair Exxon with defensive dividend stocks
                like Johnson & Johnson or Procter & Gamble for balance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Can Exxon maintain its dividend if oil drops below $50?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                In the short term (1-2 years), yes. Exxon has $30B in cash reserves, a 0.2x debt-to-equity ratio,
                and the willingness to borrow to fund the dividend (as it did in 2020). However, a prolonged
                period of sub-$50 oil lasting 3+ years would force difficult choices. Management would likely
                cut buybacks and capex before touching the dividend, but sustained low prices would eventually
                threaten the streak. The Pioneer acquisition helps by lowering breakeven to ~$35/barrel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">How does the energy transition affect Exxon's dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The energy transition is a long-term risk, not an immediate threat. Global oil demand is expected
                to peak between 2030 and 2040, then decline gradually. Exxon is positioning through carbon capture
                and storage (CCS) investments, lithium mining for EV batteries, and lower-emission fuels. However,
                the core business remains fossil fuels. Investors should treat Exxon as a 10-20 year holding, not
                a forever stock, and monitor the pace of EV adoption and policy changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Should I buy Exxon or a diversified energy ETF like VDE?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your conviction and risk tolerance. Exxon offers a concentrated bet on the
                strongest integrated oil major, with a longer dividend streak and better balance sheet than most
                peers. The Vanguard Energy ETF (VDE) provides diversification across 100+ energy stocks but
                lower yield (~3.0%) and less predictable dividend growth. If you want maximum dividend reliability,
                choose Exxon. If you want broader energy exposure with less single-stock risk, choose VDE.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">What was the impact of the Pioneer Natural Resources acquisition?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The $60 billion Pioneer acquisition (closed October 2024) was transformative. It doubled Exxon's
                Permian Basin acreage to 1.4 million net acres, added 700,000 barrels per day of production, and
                provided 15+ years of low-cost drilling inventory. Synergies of $2B+ annually are expected by 2027.
                For dividend investors, the key benefit is lower production costs -- Pioneer's assets produce oil
                at $35/barrel, well below the $55+ needed to cover the dividend, giving Exxon a wider margin of safety.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your XOM Dividend Returns</h3>
            <p className="mb-6 text-blue-100">
              Model your Exxon Mobil investment with our free calculators. See how dividend reinvestment,
              yield-on-cost, and compounding work together to build long-term wealth.
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
                  <Percent className="h-5 w-5" />
                  Yield-on-Cost Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle>Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <Link href="/blog/best-energy-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Energy Dividend Stocks for 2026
            </Link>
            <Link href="/blog/best-oil-and-gas-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Oil and Gas Dividend Stocks
            </Link>
            <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Aristocrats (2026)
            </Link>
            <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Build a $1,000/Month Dividend Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
