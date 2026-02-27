import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import { AlertTriangle, ArrowRight, Award, BarChart3, Building2, CheckCircle2, Crown, DollarSign, LineChart, O, P, Percent, PieChart, ShieldCheck, Star, Target, TrendingUp, XCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is PepsiCo (PEP) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of PepsiCo (PEP) as a dividend stock: 52 consecutive years of increases, ~3.0% yield, Frito-Lay snacks diversification, and head-to-head comparison with Coca-Cola (KO).',
  keywords: 'pepsi dividend, PEP dividend, pepsico stock, PEP dividend yield, pepsico dividend history, is pepsico a good dividend stock, pepsi vs coca cola dividend',
  openGraph: {
    title: 'Is PepsiCo (PEP) a Good Dividend Stock? Complete 2026 Analysis',
    description: '52 consecutive dividend increases. Deep analysis of PEP yield, Frito-Lay advantage, growth vs KO, and dividend safety.',
    type: 'article',
  }
}

const historicalDividends = [
  { year: 2026, dividend: '$5.42', increase: '7.0%' },
  { year: 2025, dividend: '$5.06', increase: '7.1%' },
  { year: 2024, dividend: '$4.73', increase: '7.0%' },
  { year: 2023, dividend: '$4.60', increase: '10.0%' },
  { year: 2022, dividend: '$4.30', increase: '7.0%' },
  { year: 2021, dividend: '$4.09', increase: '5.1%' },
  { year: 2020, dividend: '$3.89', increase: '7.1%' },
  { year: 2019, dividend: '$3.63', increase: '3.1%' },
  { year: 2018, dividend: '$3.52', increase: '15.2%' },
  { year: 2017, dividend: '$3.06', increase: '7.0%' },
  { year: 2016, dividend: '$2.86', increase: '7.1%' },
  { year: 2015, dividend: '$2.67', increase: '7.2%' },
]

const comparisonWithKO = [
  { metric: 'Dividend Yield', pep: '3.0%', ko: '3.1%', winner: 'KO' },
  { metric: '5-Year Dividend Growth', pep: '6.8%', ko: '4.1%', winner: 'PEP' },
  { metric: 'Consecutive Increases', pep: '52 years', ko: '62 years', winner: 'KO' },
  { metric: 'Payout Ratio', pep: '68%', ko: '72%', winner: 'PEP' },
  { metric: 'Revenue Diversification', pep: 'Beverages + Snacks', ko: 'Beverages Only', winner: 'PEP' },
  { metric: 'Revenue (Annual)', pep: '~$91B', ko: '~$46B', winner: 'PEP' },
  { metric: 'Dividend Safety Score', pep: '90/100', ko: '92/100', winner: 'KO' },
  { metric: 'EPS Growth (5Y CAGR)', pep: '8.2%', ko: '6.5%', winner: 'PEP' },
  { metric: 'Free Cash Flow Margin', pep: '~10%', ko: '~24%', winner: 'KO' },
  { metric: 'International Revenue', pep: '~42%', ko: '~65%', winner: 'Tie' },
]

const segmentBreakdown = [
  {
    segment: 'Frito-Lay North America',
    percentage: '~27%',
    revenue: '~$24.5B',
    brands: 'Lay\'s, Doritos, Cheetos, Tostitos, Ruffles, Fritos, SunChips',
    margin: '~30%',
    growth: '5-7%',
  },
  {
    segment: 'PepsiCo Beverages North America',
    percentage: '~27%',
    revenue: '~$24.5B',
    brands: 'Pepsi, Mountain Dew, Gatorade, Tropicana, Aquafina, Bubly, Starry',
    margin: '~12%',
    growth: '3-5%',
  },
  {
    segment: 'Quaker Foods North America',
    percentage: '~3%',
    revenue: '~$2.7B',
    brands: 'Quaker Oats, Cap\'n Crunch, Life Cereal, Rice-A-Roni',
    margin: '~22%',
    growth: '1-3%',
  },
  {
    segment: 'International (Beverages + Snacks)',
    percentage: '~43%',
    revenue: '~$39B',
    brands: 'All brands globally + Walkers (UK), Sabritas (Mexico), Smith\'s (Australia)',
    margin: '~15%',
    growth: '6-9%',
  },
]

export default function IsPepsiGoodDividendStockPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-blue-800">
                  <Crown className="h-3 w-3 mr-1" />
                  Dividend Aristocrat - 52 Years
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is PepsiCo (PEP) a Good Dividend Stock? 2026 Analysis
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  PepsiCo is more than cola — it&apos;s a snack and beverage empire with 52 consecutive years of
                  dividend increases. With Frito-Lay providing a massive competitive edge, faster dividend growth
                  than Coca-Cola, and a rock-solid balance sheet, PEP is the dividend growth investor&apos;s
                  choice in consumer staples.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>17 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    Consumer Staples
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Verdict: PepsiCo Dividend Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend Aristocrat:</strong> 52 consecutive years of increases (since 1974) — qualifies as Dividend King in 2024</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield:</strong> 3.0% ($5.42 annual dividend) with 6.8% five-year growth rate</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Frito-Lay Advantage:</strong> Snack division generates ~30% operating margins — highest in the industry</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout Ratio:</strong> 68% — lower and more sustainable than Coca-Cola&apos;s 72%</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Our Rating:</strong> BUY for dividend growth investors — 90/100 safety score</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">52-Year Dividend History</a></li>
                    <li><a href="#current-metrics" className="text-blue-600 hover:underline">Current Dividend Metrics</a></li>
                    <li><a href="#frito-lay" className="text-blue-600 hover:underline">The Frito-Lay Advantage</a></li>
                    <li><a href="#segments" className="text-blue-600 hover:underline">Business Segments</a></li>
                    <li><a href="#ko-comparison" className="text-blue-600 hover:underline">PEP vs. KO Head-to-Head</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety Score</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks to Consider</a></li>
                    <li><a href="#drip-example" className="text-blue-600 hover:underline">25-Year DRIP Example</a></li>
                    <li><a href="#verdict" className="text-blue-600 hover:underline">Buy / Hold / Watch Verdict</a></li>
                    <li><a href="#calculators" className="text-blue-600 hover:underline">Dividend Calculators</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Introduction */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    More Than Cola: A Snack and Beverage Empire
                  </h2>
                  <p>
                    PepsiCo (NASDAQ: PEP) is often misunderstood. While most people associate the name with Pepsi
                    cola, the reality is that snacks generate more profit than beverages. Frito-Lay alone accounts
                    for roughly 27% of revenue but nearly 45% of operating profit thanks to industry-leading 30%
                    margins.
                  </p>
                  <p>
                    This dual engine — beverages plus snacks — is PepsiCo&apos;s secret weapon. While Coca-Cola relies
                    entirely on beverages, PepsiCo benefits from two massive consumer staples categories that provide
                    cross-selling, shelf-space dominance, and diversified cash flow. When beverage sales slow, snacks
                    often accelerate, and vice versa.
                  </p>
                  <p>
                    With $91 billion in annual revenue, 52 years of dividend growth, and a 3.0% yield growing at
                    nearly 7% per year, PepsiCo is the dividend growth investor&apos;s top pick in consumer staples.
                    Let&apos;s break down why.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-green-600" />
                    52 Years of Consecutive Dividend Increases
                  </h2>
                  <p>
                    PepsiCo has raised its dividend every single year since 1974. That&apos;s 52 consecutive years
                    through every major recession, market crash, and global crisis. The company officially became a
                    Dividend King (50+ years) in 2024.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Growth History (Last 12 Years)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Year</th>
                              <th className="text-right p-2">Annual Dividend</th>
                              <th className="text-right p-2">Increase</th>
                            </tr>
                          </thead>
                          <tbody>
                            {historicalDividends.map((year) => (
                              <tr key={year.year} className="border-b">
                                <td className="p-2">{year.year}</td>
                                <td className="text-right p-2 font-semibold">{year.dividend}</td>
                                <td className="text-right p-2 text-green-600">{year.increase}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Average annual increase (2015-2026): 7.1% — significantly faster than Coca-Cola&apos;s 4.9% average.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    The 7%+ growth rate is what sets PepsiCo apart. While KO grows dividends at 4-5%, PEP
                    consistently delivers 7% or more. At this rate, PEP&apos;s dividend doubles every 10 years.
                    The $5.42 dividend in 2026 will become $10.66 by 2036 if the growth rate continues.
                  </p>
                  <p>
                    The 2023 spike to 10% was driven by strong Frito-Lay pricing power and international expansion.
                    Management has signaled continued 7%+ dividend growth aligned with mid-to-high single-digit
                    EPS growth.
                  </p>
                </section>

                {/* Current Metrics */}
                <section id="current-metrics">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Current Dividend Metrics (2026)
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-blue-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Yield</p>
                            <p className="text-3xl font-bold">3.0%</p>
                          </div>
                          <Percent className="h-8 w-8 text-blue-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Based on stock price ~$180. Quarterly payment of $1.355 per share.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividend</p>
                            <p className="text-3xl font-bold">$5.42</p>
                          </div>
                          <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Paid quarterly (Jan, Mar, Jun, Sep). 7.0% increase from 2025.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">5-Year CAGR</p>
                            <p className="text-3xl font-bold">6.8%</p>
                          </div>
                          <TrendingUp className="h-8 w-8 text-purple-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Compound annual growth from 2021-2026. Well above inflation.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-3xl font-bold">68%</p>
                          </div>
                          <PieChart className="h-8 w-8 text-orange-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Lower than KO (72%). Comfortable ratio with room for continued growth.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Frito-Lay Advantage */}
                <section id="frito-lay">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-orange-600" />
                    The Frito-Lay Advantage: PepsiCo&apos;s Secret Weapon
                  </h2>
                  <p>
                    Frito-Lay is the most profitable snack company in the world. With ~30% operating margins
                    and a 60%+ market share in the US salty snack category, it is the single biggest reason to
                    buy PEP over KO.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 border-l-4 border-l-orange-500">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Frito-Lay by the Numbers</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Annual Revenue</p>
                          <p className="font-bold text-lg">~$24.5B</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Operating Margin</p>
                          <p className="font-bold text-lg">~30%</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">US Market Share</p>
                          <p className="font-bold text-lg">60%+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">% of PEP Operating Profit</p>
                          <p className="font-bold text-lg text-green-600">~45%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Think about it: Lay&apos;s, Doritos, and Cheetos are in nearly every convenience store, grocery
                    store, and vending machine in America. The brands are irreplaceable. Retailers cannot remove
                    Frito-Lay products from shelves because customers demand them.
                  </p>
                  <p>
                    This gives PepsiCo enormous pricing power. During the 2022-2023 inflation surge, Frito-Lay
                    raised prices 13-16% while losing minimal volume. Consumers complained about &quot;shrinkflation&quot;
                    but kept buying. That pricing power flows directly into dividend growth.
                  </p>
                  <p>
                    Coca-Cola cannot replicate this advantage. KO has a wider beverage moat, but PEP&apos;s combination
                    of beverages and snacks creates a more diversified and higher-growth cash flow engine.
                  </p>
                </section>

                {/* Business Segments */}
                <section id="segments">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Business Segment Breakdown
                  </h2>

                  <div className="space-y-4 my-6">
                    {segmentBreakdown.map((segment) => (
                      <Card key={segment.segment} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{segment.segment}</h3>
                            <Badge className="bg-blue-600">{segment.percentage}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Revenue</p>
                              <p className="font-semibold">{segment.revenue}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Op. Margin</p>
                              <p className="font-semibold">{segment.margin}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Growth</p>
                              <p className="font-semibold text-green-600">{segment.growth}</p>
                            </div>
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300">
                            <strong>Key Brands:</strong> {segment.brands}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    International operations (43% of revenue) are the biggest growth driver, expanding 6-9%
                    annually as emerging markets develop. PEP is particularly strong in Mexico (Sabritas dominates
                    snacks), the UK (Walkers), and India (Kurkure, Lay&apos;s).
                  </p>
                </section>

                {/* InlineSignup */}
                <div className="not-prose">
                  <InlineSignup />
                </div>

                {/* PEP vs KO Comparison */}
                <section id="ko-comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    PepsiCo vs. Coca-Cola: Head-to-Head Dividend Comparison
                  </h2>
                  <p>
                    This is the most common question dividend investors ask: PEP or KO? Here&apos;s the
                    definitive comparison across every metric that matters.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="text-left p-3 border">Metric</th>
                          <th className="text-right p-3 border">PEP</th>
                          <th className="text-right p-3 border">KO</th>
                          <th className="text-center p-3 border">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonWithKO.map((row) => (
                          <tr key={row.metric}>
                            <td className="p-3 border font-medium">{row.metric}</td>
                            <td className={`text-right p-3 border ${row.winner === 'PEP' ? 'text-green-600 font-bold' : ''}`}>{row.pep}</td>
                            <td className={`text-right p-3 border ${row.winner === 'KO' ? 'text-green-600 font-bold' : ''}`}>{row.ko}</td>
                            <td className="text-center p-3 border">
                              <Badge className={row.winner === 'PEP' ? 'bg-blue-600' : row.winner === 'KO' ? 'bg-red-600' : 'bg-slate-500'}>
                                {row.winner}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>PEP wins on growth.</strong> Faster dividend growth (6.8% vs. 4.1%), better EPS growth (8.2% vs. 6.5%),
                    lower payout ratio (68% vs. 72%), and greater revenue diversification through Frito-Lay.
                  </p>
                  <p>
                    <strong>KO wins on safety.</strong> Longer streak (62 vs. 52 years), higher dividend safety score (92 vs. 90),
                    better free cash flow margins (24% vs. 10%), and a stronger brand moat in beverages.
                  </p>
                  <p>
                    <strong>Bottom line:</strong> Choose PEP if you prioritize dividend growth and diversification. Choose KO
                    if you prioritize yield and safety. The best portfolio owns both.
                  </p>
                </section>

                {/* Dividend Safety */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-green-600" />
                    Dividend Safety Score: 90/100 (Excellent)
                  </h2>

                  <Card className="my-6 bg-green-50 dark:bg-green-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Safety Factor Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">52-Year Track Record (Excellent)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Dividend King status. Never cut through 7+ recessions. Management treats the dividend as sacred.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Revenue Diversification (Superior)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Beverages + snacks = two recession-proof categories. No single brand exceeds 15% of revenue.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Free Cash Flow: $9-10B annually (Strong)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Generates ample FCF to cover $7.5B in dividends with room for reinvestment and buybacks.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Credit Rating: A+ (Investment Grade)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Net debt/EBITDA of ~2.8x. Conservative capital structure with no refinancing risk.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Pricing Power (Proven)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Frito-Lay raised prices 13-16% in 2022-2023 without material volume loss. Brands are must-stock for retailers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                    Risks to Consider
                  </h2>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          Volume Pressure from Health Trends
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          GLP-1 drugs (Ozempic, Wegovy) and growing health consciousness could reduce snack and sugary
                          drink consumption. Frito-Lay volume growth has already slowed to flat in some quarters.
                          PEP is countering with &quot;better for you&quot; products like SunChips, baked options, and smaller
                          portion sizes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          Currency and Geopolitical Exposure
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          42% of revenue comes from international markets. A strong US dollar reduces the value of
                          foreign earnings when converted to USD. Operations in Russia (exited 2022), Middle East,
                          and Latin America carry geopolitical risk.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          Quaker Foods Recall Risk
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          The Quaker Foods segment faced product recalls in late 2023 and 2024 due to salmonella
                          contamination. While a small segment (~3% revenue), food safety issues can damage brand trust
                          and create legal liabilities. This remains an ongoing concern.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* DRIP Example */}
                <section id="drip-example">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    25-Year DRIP Compounding Example
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 PEP Investment with DRIP</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Assumptions: 3.0% starting yield, 6.8% annual dividend growth, 8% stock price appreciation, dividends reinvested.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 1 (2026):</span>
                          <span className="text-slate-600">Value: $10,800 | Income: $300</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 5 (2030):</span>
                          <span className="text-slate-600">Value: $16,100 | Income: $475</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 10 (2035):</span>
                          <span className="text-slate-600">Value: $27,300 | Income: $865</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 15 (2040):</span>
                          <span className="text-slate-600">Value: $46,600 | Income: $1,650</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 20 (2045):</span>
                          <span className="text-slate-600">Value: $79,800 | Income: $3,180</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-100 dark:bg-green-950 rounded border-2 border-green-500">
                          <span className="font-bold">Year 25 (2050):</span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            Value: $137,000 | Income: $6,100
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="text-sm font-semibold mb-2">PEP&apos;s Growth Advantage in Action:</p>
                        <p className="text-xs">
                          Thanks to 6.8% dividend growth (vs. KO&apos;s 4.1%), PEP generates $6,100/year in income after 25
                          years versus KO&apos;s projected $3,800. The faster growth compounds to 61% more income over time.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Verdict */}
                <section id="verdict">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Final Verdict: BUY for Dividend Growth
                  </h2>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Growth Investors</p>
                          <p className="text-2xl font-black text-green-600">STRONG BUY</p>
                          <p className="text-xs mt-1">Best-in-class growth rate</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Income Investors</p>
                          <p className="text-2xl font-black text-green-600">BUY</p>
                          <p className="text-xs mt-1">Solid 3.0% yield + growth</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Retirees</p>
                          <p className="text-2xl font-black text-green-600">BUY</p>
                          <p className="text-xs mt-1">Recession-proof income</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <p>
                    PepsiCo is the best dividend growth stock in consumer staples. The combination of a 3.0% yield,
                    7% annual growth, Frito-Lay&apos;s dominant margins, and 52 years of increases makes PEP a core
                    portfolio holding. Buy PEP if you want your income to grow faster than inflation for decades.
                  </p>
                </section>

                {/* Calculator CTA */}
                <section id="calculators" className="not-prose">
                  <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your PepsiCo Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Model your PEP investment. See how the 7% growth rate compounds your income
                        over 10, 20, or 30 years.
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

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Where to Buy PepsiCo Stock</h2>
                  <p>
                    Buy PEP shares commission-free with automatic dividend reinvestment. All brokers below offer
                    zero commissions, free DRIP, and fractional shares.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is PepsiCo a better dividend stock than Coca-Cola?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          It depends on your priority. PEP offers faster dividend growth (6.8% vs. 4.1%), lower payout ratio
                          (68% vs. 72%), and better revenue diversification through Frito-Lay snacks. KO offers a slightly
                          higher yield (3.1% vs. 3.0%), a longer streak (62 vs. 52 years), and a wider moat in beverages.
                          For growth, PEP wins. For safety, KO wins. The best dividend portfolios own both.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much does PepsiCo pay in dividends per share?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          PepsiCo pays $5.42 per share annually ($1.355 quarterly) as of 2026. At a stock price of ~$180,
                          that&apos;s a 3.0% dividend yield. PEP has increased this payment for 52 consecutive years at an
                          average rate of 7% per year. The next increase is typically announced in February or March.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is PepsiCo&apos;s dividend safe?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, PEP&apos;s dividend scores 90/100 on our safety rating. The 68% payout ratio leaves a 32%
                          buffer, free cash flow of $9-10B easily covers $7.5B in dividend payments, and the dual
                          beverage/snack business model provides exceptional recession resistance. PEP has never cut
                          its dividend in over 50 years.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Will GLP-1 drugs affect PepsiCo&apos;s business?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          GLP-1 weight loss drugs (Ozempic, Wegovy) could pressure snack and sugary drink volumes
                          over time. However, PEP is adapting with smaller portion sizes, &quot;better for you&quot; options,
                          and zero-sugar beverages. Frito-Lay&apos;s pricing power also means the company can offset
                          volume declines with price increases. The long-term impact remains uncertain but manageable.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much do I need to invest in PEP for $500/month in dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          At a 3.0% yield, you need approximately $200,000 invested in PEP to generate $6,000/year
                          ($500/month) in dividends. That&apos;s about 1,111 shares at ~$180. But with 7% annual dividend
                          growth, you&apos;ll need less over time. An investment of $120,000 today will reach $500/month
                          in income within 8-9 years through dividend growth alone.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/is-coca-cola-good-dividend-stock" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Is Coca-Cola (KO) a Good Dividend Stock? 2026 Analysis
                    </Link>
                    <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Consumer Staples Dividend Stocks
                    </Link>
                    <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete List of Dividend Kings 2026
                    </Link>
                    <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a $1,000/Month Dividend Portfolio
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
