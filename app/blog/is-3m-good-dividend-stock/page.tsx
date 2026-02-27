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
  title: 'Is 3M (MMM) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of 3M (MMM) as a dividend stock after the Solventum spinoff. Former Dividend King with 65+ years of increases, ~5% yield, litigation risks, turnaround story, and whether to buy the dip.',
  keywords: ['3m dividend', 'MMM dividend', '3m stock analysis', '3m dividend cut', '3m dividend yield', 'is 3m a good investment', 'industrial dividend stocks 2026'],
}

const dividendHistory = [
  { year: 2026, dividend: '$4.44', increase: '0.9%' },
  { year: 2025, dividend: '$4.40', increase: '-0.7%' },
  { year: 2024, dividend: '$4.43', increase: '-24.7%' },
  { year: 2023, dividend: '$5.88', increase: '-0.2%' },
  { year: 2022, dividend: '$5.90', increase: '0.7%' },
  { year: 2021, dividend: '$5.86', increase: '0.9%' },
  { year: 2020, dividend: '$5.76', increase: '2.0%' },
  { year: 2019, dividend: '$5.76', increase: '5.9%' },
  { year: 2018, dividend: '$5.44', increase: '16.0%' },
  { year: 2017, dividend: '$4.70', increase: '5.9%' },
]

const solventumComparison = [
  { metric: 'Revenue', mmm: '$24B', solventum: '$8.3B' },
  { metric: 'Focus', mmm: 'Industrial, Safety, Consumer', solventum: 'Healthcare (medical devices, dental)' },
  { metric: 'Dividend Yield', mmm: '~5.0%', solventum: '~0.8%' },
  { metric: 'Growth Outlook', mmm: '2-3% organic', solventum: '4-6% organic' },
  { metric: 'Margin Profile', mmm: '20-22% operating', solventum: '18-20% operating' },
  { metric: 'Litigation Exposure', mmm: 'PFAS + earplug settlements', solventum: 'Minimal (separated)' },
]

const peerComparison = [
  { company: '3M (MMM)', yield: '5.0%', growth5yr: '-3.0%', payout: '65%', pe: '14x', safety: '65/100' },
  { company: 'Honeywell (HON)', yield: '2.0%', growth5yr: '6.0%', payout: '40%', pe: '22x', safety: '88/100' },
  { company: 'Illinois Tool Works (ITW)', yield: '2.3%', growth5yr: '7.0%', payout: '55%', pe: '24x', safety: '90/100' },
  { company: 'Parker Hannifin (PH)', yield: '1.2%', growth5yr: '15.0%', payout: '20%', pe: '26x', safety: '92/100' },
  { company: 'Emerson Electric (EMR)', yield: '2.0%', growth5yr: '1.5%', payout: '40%', pe: '20x', safety: '82/100' },
]

export default function Is3MGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-red-600 to-orange-600">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Former Dividend King - Turnaround Story
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is 3M (MMM) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          3M was one of the most legendary dividend stocks in history -- 65 consecutive years of increases
          as a Dividend King. Then came PFAS lawsuits, the earplug settlement, and the Solventum spinoff
          that ended the streak. With a ~5% yield and shares near multi-year lows, is 3M a contrarian
          value play or a falling knife? Here is the complete analysis.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Updated February 2026</span>
          <span>|</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 19 min read</span>
        </div>
      </div>

      {/* Quick Summary */}
      <Card className="mb-16 border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-600" />
            Quick Verdict: 3M Dividend Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Streak Broken:</strong> The 65-year Dividend King streak ended with a 24.7% cut in 2024 following the Solventum healthcare spinoff</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~5.0% ($4.44 annually) -- one of the highest yields among industrial blue chips</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Payout Ratio:</strong> 65% -- elevated after earnings reset, but improving as restructuring takes hold</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risks:</strong> $10.3B PFAS water contamination settlement + $6B earplug litigation. Payments stretch through 2036.</span>
            </p>
            <p className="flex items-start gap-2">
              <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Safety Score:</strong> 65/100 -- below average due to litigation, but the current dividend level appears sustainable</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What Happened to 3M */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-red-600" />
          What Happened to 3M? The Fall of a Dividend King
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            For over six decades, 3M (NYSE: MMM) was the epitome of dividend reliability. The diversified
            industrial conglomerate -- known for Post-it Notes, Scotch tape, and thousands of other products
            used across every industry -- raised its dividend every single year from 1959 through 2023. Then
            three body blows landed in rapid succession.
          </p>
        </div>

        <div className="space-y-4 my-6">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg text-lg font-bold text-red-600">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">PFAS "Forever Chemicals" Lawsuit ($10.3B Settlement)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    3M manufactured per- and polyfluoroalkyl substances (PFAS) used in firefighting foam, non-stick
                    coatings, and water-resistant fabrics. These "forever chemicals" contaminated drinking water
                    supplies nationwide. In June 2023, 3M agreed to pay $10.3 billion over 13 years (2024-2036)
                    to settle claims from US water suppliers. Additional individual lawsuits remain pending.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg text-lg font-bold text-orange-600">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Combat Arms Earplug Litigation ($6B Settlement)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    3M's Aearo Technologies subsidiary made defective earplugs supplied to the US military. Over
                    300,000 service members filed claims alleging hearing damage. 3M agreed to pay approximately
                    $6 billion over 5 years to settle the mass tort. This was one of the largest product liability
                    cases in US history.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-lg font-bold text-yellow-600">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Solventum Healthcare Spinoff (April 2024)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    3M spun off its $8.3B healthcare division as Solventum (NYSE: SOLV) in April 2024. This
                    removed 3M's highest-growth segment and forced a dividend recalibration. The annual dividend
                    was cut from $5.88 to $4.44 -- a 24.7% reduction -- ending the 65-year Dividend King streak.
                    Shareholders received Solventum stock but with a minimal 0.8% yield.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Combined, the PFAS and earplug settlements total approximately $16.3 billion in payments through
            2036. This amounts to roughly $1.2-1.5 billion annually -- significant but manageable against
            3M's $5.5-6.0 billion in annual free cash flow. The dividend, now reset at $4.44, requires
            approximately $2.4 billion annually, leaving $2-3 billion for litigation payments, debt reduction,
            and reinvestment.
          </p>
        </div>
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-green-600" />
          Dividend History: Rise, Fall, and Reset
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Annual Dividend</th>
                    <th className="text-right p-3">YoY Change</th>
                  </tr>
                </thead>
                <tbody>
                  {dividendHistory.map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-right font-semibold">{row.dividend}</td>
                      <td className={`p-3 text-right ${parseFloat(row.increase) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {parseFloat(row.increase) >= 0 ? '+' : ''}{row.increase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              The 2024 cut of 24.7% reflects the Solventum spinoff removing healthcare revenue. Adjusted for
              the spinoff, the effective cut to the legacy 3M business was closer to 10-12%.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* InlineSignup midway */}
      <div className="mb-16">
        <InlineSignup />
      </div>

      {/* Solventum Spinoff Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-7 w-7 text-blue-600" />
          Post-Spinoff: 3M vs. Solventum
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3">Metric</th>
                    <th className="text-right p-3">3M (MMM)</th>
                    <th className="text-right p-3">Solventum (SOLV)</th>
                  </tr>
                </thead>
                <tbody>
                  {solventumComparison.map((row) => (
                    <tr key={row.metric} className="border-b">
                      <td className="p-3 font-medium">{row.metric}</td>
                      <td className="p-3 text-right">{row.mmm}</td>
                      <td className="p-3 text-right">{row.solventum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            For dividend investors, the key question is whether to hold both stocks or sell one. 3M offers
            the much higher yield (5.0% vs. 0.8%) but carries litigation risk and slower growth. Solventum
            offers healthcare growth potential but minimal current income. Most income-focused investors have
            chosen to keep 3M for yield and sell Solventum, or hold both for the combined income stream.
          </p>
        </div>
      </section>

      {/* Turnaround Case */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          The Bull Case: 3M's Turnaround Story
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Reasons to Buy
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>5% yield:</strong> Among the highest in the industrial sector for a blue-chip company</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Litigation clarity:</strong> PFAS and earplug settlements are defined -- no more "unknown unknowns"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Restructuring benefits:</strong> $700M-$900M in annual cost savings from operational streamlining</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Valuation:</strong> Trading at 14x earnings vs. 20-26x for industrial peers -- significant discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Innovation pipeline:</strong> 60,000+ products, $1.8B annual R&D, 100+ years of material science IP</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Reasons to Avoid
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Broken streak:</strong> 65-year Dividend King status lost -- trust takes decades to rebuild</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>$16.3B in settlements:</strong> Annual payments of $1.2-1.5B for 10+ years drain free cash flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Slow organic growth:</strong> Core industrial businesses growing just 2-3% annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Additional PFAS risk:</strong> Individual lawsuits beyond the water supplier settlement remain pending</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Lost healthcare segment:</strong> Solventum was the fastest-growing division; remaining 3M is slower</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-yellow-600" />
          Dividend Safety Analysis: 65/100 (Below Average)
        </h2>

        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Payout Ratio: 65% (Elevated)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Higher than ideal due to reduced earnings post-spinoff. Needs to come down to 50% for
                    the dividend to be fully comfortable. Expected to improve as restructuring delivers cost savings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Free Cash Flow: $5.5-6.0B (Adequate)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Covers $2.4B dividend + $1.2-1.5B litigation payments with $1.5-2.0B remaining for
                    debt reduction and reinvestment. Tight but functional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Litigation Payments: $1.2-1.5B/Year Through 2036</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Settlement payments are fixed and predictable, but they consume 20-25% of free cash flow
                    for the next decade. Any additional legal surprises could stress the dividend further.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Brand Portfolio: Strong (60,000+ Products)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Post-it Notes, Scotch tape, Filtrete filters, Command strips, and thousands of industrial
                    products used globally. Recurring revenue from essential products provides cash flow stability.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <p className="font-bold text-yellow-800 dark:text-yellow-200">Overall Assessment: HOLD / WATCH</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                The current $4.44 dividend appears sustainable at current earnings and cash flow levels. However,
                the 65% payout ratio and ongoing litigation payments leave little margin for error. Another
                dividend cut is unlikely but not impossible if a recession reduces industrial demand while
                litigation payments continue. Best for contrarian investors comfortable with elevated risk.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Peer Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          3M vs. Industrial Dividend Peers
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
                    <th className="text-right p-3">P/E</th>
                    <th className="text-right p-3">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  {peerComparison.map((stock) => (
                    <tr
                      key={stock.company}
                      className={`border-b ${stock.company.includes('3M') ? 'bg-orange-50 dark:bg-orange-950 font-semibold' : ''}`}
                    >
                      <td className="p-3">{stock.company}</td>
                      <td className="p-3 text-right">{stock.yield}</td>
                      <td className={`p-3 text-right ${parseFloat(stock.growth5yr) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.growth5yr}
                      </td>
                      <td className="p-3 text-right">{stock.payout}</td>
                      <td className="p-3 text-right">{stock.pe}</td>
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
            The comparison reveals 3M's fundamental dilemma: it offers the highest yield (5.0%) among industrial
            blue chips, but with the lowest safety score (65/100) and negative 5-year dividend growth. Every peer
            offers better dividend growth, lower payout ratios, and higher safety scores. 3M's only advantage
            is the high current yield and deep value valuation (14x vs. 20-26x for peers).
          </p>
          <p>
            <strong>For income seekers:</strong> 3M's 5% yield is compelling if you believe the turnaround will succeed.
            <strong> For dividend growth investors:</strong> Illinois Tool Works or Parker Hannifin are far superior choices
            with proven, growing dividends and much higher safety margins.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Will 3M cut its dividend again?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Another cut is unlikely but not impossible. The current $4.44 dividend requires $2.4B annually,
                which is covered by $5.5-6.0B in free cash flow even after litigation payments. However, a
                recession reducing industrial demand by 15-20% could push the payout ratio above 80%, making
                a freeze or modest cut possible. Management has stated the current dividend level is a priority,
                and restructuring savings of $700-900M annually should improve coverage over time. The base case
                is that the dividend holds and grows modestly (1-3%) starting in 2027.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is 3M a value trap or a turnaround opportunity?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This is the central debate. Value trap arguments: slow organic growth (2-3%), lost healthcare
                segment, decade of litigation payments, broken trust. Turnaround arguments: 14x P/E (40%
                discount to peers), $700-900M in cost savings coming, defined litigation exposure (no more
                unknowns), 60,000 essential products with sticky demand. The truth likely falls in between.
                3M is unlikely to return to its former glory, but the stock may deliver solid total returns
                (5% yield + 5-8% price appreciation) from current depressed levels as the turnaround takes hold.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Should I keep the Solventum shares or sell them?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If you own 3M and received Solventum shares in the spinoff, the decision depends on your
                goals. For income: sell Solventum (0.8% yield) and reinvest in 3M or other high-yield stocks.
                For growth: keep Solventum -- its healthcare business (medical devices, dental, surgical)
                should grow 4-6% annually with expanding margins. For tax optimization: check your cost basis
                before selling -- the spinoff may have created capital gains or losses depending on when you
                purchased 3M.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">How do the PFAS settlements affect 3M's finances?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The $10.3B PFAS water contamination settlement is being paid over 13 years (2024-2036), averaging
                approximately $800M per year. Combined with the $6B earplug settlement (~$1.2B/year for 5 years,
                declining afterward), total litigation payments are $1.2-1.5B annually through 2029, then drop
                to $800M-$1B annually through 2036. Against $5.5-6.0B in annual free cash flow, this is
                manageable but constraining. It limits 3M's ability to grow the dividend aggressively, make
                acquisitions, or buy back stock in the near term.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Can 3M ever become a Dividend King again?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Technically, yes -- but it would take 50+ years of consecutive increases starting from scratch.
                The 65-year streak is gone and cannot be recovered. However, 3M can rebuild its dividend
                growth reputation by delivering consistent 3-5% annual increases starting in 2027-2028 once
                restructuring benefits materialize and litigation payments become more manageable. In 25 years,
                3M could achieve Dividend Aristocrat status (25+ years). But for most current investors,
                the psychological loss of the King title is permanent.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your 3M Dividend Returns</h3>
            <p className="mb-6 text-orange-100">
              Model 3M's 5% yield with our free calculators. Compare the income from 3M's high yield versus
              the compounding power of faster-growing industrial dividend stocks.
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
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary" className="gap-2">
                  <LineChart className="h-5 w-5" />
                  Investment Return Calculator
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
            <Link href="/blog/best-industrial-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Industrial Dividend Stocks for 2026
            </Link>
            <Link href="/blog/how-to-avoid-dividend-cuts" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Avoid Dividend Cuts: Warning Signs to Watch
            </Link>
            <Link href="/blog/high-yield-dividend-stocks-over-5-percent" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              High-Yield Dividend Stocks Over 5%
            </Link>
            <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Kings (2026)
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
