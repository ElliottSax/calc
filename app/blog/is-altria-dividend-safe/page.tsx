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
  ArrowRight,
  BarChart3,
  TrendingDown,
  Activity,
  AlertTriangle,
  ShieldCheck,
  XCircle,
  Scale,
  Building2,
  Flame,
  Users,
  FileText,
  Zap,
  PieChart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is Altria\'s 8%+ Dividend Safe? Deep Dive into MO Stock (2026)',
  description: 'Complete analysis of Altria Group (MO) dividend safety. Examine the 8-9% yield, 56-year growth streak, declining cigarette volumes, pricing power, Juul writedown, payout ratio, and compare with PM and BTI.',
  keywords: 'is Altria dividend safe, MO stock dividend, Altria dividend yield, Altria stock analysis, tobacco dividend stocks, Altria payout ratio, is MO stock safe, Altria vs Philip Morris, cigarette stock dividends',
  openGraph: {
    title: 'Is Altria\'s 8%+ Dividend Safe? Complete MO Stock Analysis',
    description: 'Balanced analysis of Altria\'s ultra-high dividend: 56-year growth streak meets declining industry. Pricing power, cash flow, ESG risks, and comparison with PM & BTI.',
    type: 'article',
  }
}

interface ProConItem {
  text: string
  icon: React.ReactNode
}

const pros: ProConItem[] = [
  {
    text: '8-9% dividend yield - nearly 3x the S&P 500 average',
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    text: '56 consecutive years of dividend increases (Dividend Aristocrat)',
    icon: <Award className="h-5 w-5" />
  },
  {
    text: 'Marlboro dominance with 40%+ U.S. market share and pricing power',
    icon: <Target className="h-5 w-5" />
  },
  {
    text: 'Massive cash generation ($8-9 billion annually) from mature business',
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    text: 'Low capital requirements allow high dividend payouts',
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    text: 'Addictive product creates loyal customer base and predictable revenue',
    icon: <Users className="h-5 w-5" />
  }
]

const cons: ProConItem[] = [
  {
    text: 'Industry-wide cigarette volume declining 4-6% annually',
    icon: <TrendingDown className="h-5 w-5" />
  },
  {
    text: 'High 80% payout ratio leaves minimal margin for error',
    icon: <AlertTriangle className="h-5 w-5" />
  },
  {
    text: '$12.6 billion Juul writedown shows poor capital allocation',
    icon: <XCircle className="h-5 w-5" />
  },
  {
    text: 'ESG concerns exclude Altria from many institutional portfolios',
    icon: <AlertCircle className="h-5 w-5" />
  },
  {
    text: 'Regulatory risks including flavor bans and menthol restrictions',
    icon: <FileText className="h-5 w-5" />
  },
  {
    text: 'Limited growth from diversification (cannabis, alcohol stakes)',
    icon: <Activity className="h-5 w-5" />
  }
]

export default function IsAltriaDividendSafePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">
                  <Flame className="h-3 w-3 mr-1" />
                  Stock Analysis
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is Altria's 8%+ Dividend Safe? Deep Dive into MO Stock
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Altria Group (MO) offers one of the highest dividend yields in the S&P 500 at 8-9%, backed by
                  56 consecutive years of increases. But can a declining tobacco business sustain this payout
                  long-term? We examine the evidence from all angles.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>15 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    Expert Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-2 border-yellow-200 dark:border-yellow-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-yellow-600" />
                    Quick Answer: Dividend Safety Assessment
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Safety Rating: MODERATE (6.5/10)</strong> - The dividend appears safe for the next 3-5 years thanks to massive cash flow, but long-term sustainability (10+ years) is questionable due to declining volumes and regulatory headwinds.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Strength:</strong> $8-9B annual operating cash flow easily covers $6.8B in dividend payments. 80% payout ratio is sustainable short-term for mature tobacco business.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Long-Term Risk:</strong> If cigarette volumes decline 4-5% annually for another decade without price increases offsetting the decline, dividend growth will stall and eventual cuts become possible.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best For:</strong> Income-focused investors comfortable with ESG concerns who want ultra-high current yield (8%+) and accept minimal dividend growth (2-3% annually) plus modest principal decline risk.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">56-Year Dividend History</a></li>
                    <li><a href="#current-yield" className="text-blue-600 hover:underline">Current Yield & Payout Ratio</a></li>
                    <li><a href="#business-analysis" className="text-blue-600 hover:underline">Business Model Analysis</a></li>
                    <li><a href="#declining-volumes" className="text-blue-600 hover:underline">Declining Cigarette Volumes</a></li>
                    <li><a href="#pricing-power" className="text-blue-600 hover:underline">Pricing Power & Margins</a></li>
                    <li><a href="#juul-writedown" className="text-blue-600 hover:underline">Juul Investment Disaster</a></li>
                    <li><a href="#diversification" className="text-blue-600 hover:underline">Diversification Attempts</a></li>
                    <li><a href="#regulatory-risks" className="text-blue-600 hover:underline">Regulatory & ESG Risks</a></li>
                    <li><a href="#cash-flow" className="text-blue-600 hover:underline">Cash Flow Sustainability</a></li>
                    <li><a href="#peer-comparison" className="text-blue-600 hover:underline">vs. Philip Morris & BTI</a></li>
                    <li><a href="#pros-cons" className="text-blue-600 hover:underline">Pros & Cons Table</a></li>
                    <li><a href="#safety-score" className="text-blue-600 hover:underline">Final Safety Score</a></li>
                    <li><a href="#brokers" className="text-blue-600 hover:underline">Where to Buy MO Stock</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Altria's Impressive 56-Year Dividend Growth Streak
                  </h2>
                  <p>
                    Altria Group has increased its dividend for 56 consecutive years, earning prestigious Dividend
                    Aristocrat status (companies with 25+ years of increases). This places Altria among America's
                    most reliable income stocks alongside Johnson & Johnson, Procter & Gamble, and Coca-Cola.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Growth Milestones</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">1970-1980</span>
                          <span>Established annual dividend increase tradition</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">1990-2000</span>
                          <span>Double-digit dividend growth during industry peak</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">2008-2009</span>
                          <span>Maintained increases through financial crisis</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">2020-2021</span>
                          <span>Continued growth despite COVID-19 pandemic</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">2022-2026</span>
                          <span>Slower growth (2-4% annually) reflects industry maturity</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    However, recent dividend growth has slowed dramatically. From 2010-2015, Altria increased dividends
                    by 8-10% annually. Since 2020, growth has decelerated to just 2-4% per year as management prioritizes
                    maintaining the payout amid declining cigarette volumes rather than aggressive increases.
                  </p>

                  <Card className="my-6 border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-2">Historical Context Matters</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Altria's 56-year streak is impressive but includes decades when smoking rates were rising
                            or stable. The last 15 years tell a different story: volumes down 40%+ since 2010. The
                            streak continues only because price increases offset volume declines. This works until
                            elasticity breaks - when higher prices accelerate consumer exodus to vaping or quitting.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Current Yield */}
                <section id="current-yield">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Current Dividend Yield: 8-9% (Among S&P 500's Highest)
                  </h2>
                  <p>
                    As of February 2026, Altria's dividend yield fluctuates between 8-9% depending on the stock price,
                    making it one of the top 5 highest-yielding stocks in the S&P 500. This yield is approximately:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <div className="text-3xl font-bold text-blue-600 mb-2">5.7x</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Higher than S&P 500 average (1.4%)</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Higher than 10-year Treasury (~2.5%)</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                          <div className="text-3xl font-bold text-purple-600 mb-2">2.4x</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Higher than high-yield bond avg (~3.5%)</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The ultra-high yield exists for a reason: the market prices in significant risks. When a blue-chip
                    company yields 8%+, investors are demanding extra compensation for perceived threats to the business
                    model. In Altria's case, those threats include declining volumes, regulatory pressure, and ESG concerns.
                  </p>

                  <h3>Payout Ratio Analysis: 80% of Earnings</h3>
                  <p>
                    Altria's dividend consumes approximately 80% of earnings (varies by quarter), which is elevated
                    compared to most dividend stocks but appropriate for mature, cash-generative businesses with minimal
                    growth investment needs.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Payout Ratio Context by Business Stage</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-32 font-semibold">Growth Tech:</div>
                          <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-6 relative">
                            <div className="bg-blue-500 h-6 rounded-full" style={{width: '25%'}}></div>
                            <span className="absolute inset-0 flex items-center justify-center text-xs">15-35%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-32 font-semibold">Mature Industrial:</div>
                          <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-6 relative">
                            <div className="bg-green-500 h-6 rounded-full" style={{width: '50%'}}></div>
                            <span className="absolute inset-0 flex items-center justify-center text-xs">40-60%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-32 font-semibold">REITs/Utilities:</div>
                          <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-6 relative">
                            <div className="bg-yellow-500 h-6 rounded-full" style={{width: '75%'}}></div>
                            <span className="absolute inset-0 flex items-center justify-center text-xs">70-85%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2">
                          <div className="w-32 font-semibold">Altria (MO):</div>
                          <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-6 relative">
                            <div className="bg-orange-500 h-6 rounded-full" style={{width: '80%'}}></div>
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">~80%</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                        Altria's 80% payout ratio is sustainable for a mature tobacco business requiring minimal capital
                        investment, but leaves little room for earnings declines without triggering dividend cuts.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Business Analysis */}
                <section id="business-analysis">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-slate-600" />
                    Understanding Altria's Business Model
                  </h2>
                  <p>
                    Altria Group is the largest tobacco company in the United States, though not globally (Philip Morris
                    International and British American Tobacco are larger worldwide). Altria's portfolio includes:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-l-red-500 pl-4">
                          <h4 className="font-bold text-sm mb-1">Marlboro Cigarettes (Core Business - 90% of Profit)</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            40%+ U.S. market share. Seven of the top 10 cigarette brands. Premium pricing power.
                            Declining volumes of 4-6% annually but offset by 6-8% price increases.
                          </p>
                        </div>
                        <div className="border-l-4 border-l-blue-500 pl-4">
                          <h4 className="font-bold text-sm mb-1">Smokeless Tobacco (Copenhagen, Skoal)</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            50%+ market share in oral tobacco. Slightly better volume trends than cigarettes but
                            still declining mid-single digits. Contributes ~8% of operating income.
                          </p>
                        </div>
                        <div className="border-l-4 border-l-purple-500 pl-4">
                          <h4 className="font-bold text-sm mb-1">NJOY E-Cigarettes (Acquired 2023)</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Small but FDA-authorized e-vapor product. Attempt to capture smokers transitioning to
                            vaping after catastrophic Juul investment. Growth potential but tiny revenue today.
                          </p>
                        </div>
                        <div className="border-l-4 border-l-green-500 pl-4">
                          <h4 className="font-bold text-sm mb-1">Wine (Ste. Michelle Wine Estates)</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Premium wine brands. Low-growth, stable cash flow. Less than 2% of total company revenue.
                            Strategic fit questionable.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The key point: <strong>Marlboro cigarettes generate 90% of Altria's profit</strong>. Everything else
                    is essentially a rounding error. The dividend's safety hinges almost entirely on Marlboro's ability
                    to offset volume declines with price increases for the next decade.
                  </p>
                </section>

                {/* Declining Volumes */}
                <section id="declining-volumes">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-600" />
                    The Reality: Cigarette Volumes Down 40% Since 2010
                  </h2>
                  <p>
                    U.S. cigarette industry volumes have declined every year since 1980, with acceleration in recent decades:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Annual Volume Decline Rates</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span>1990-2000</span>
                          <span className="font-semibold text-orange-600">-1.5% to -2.5% per year</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span>2000-2010</span>
                          <span className="font-semibold text-orange-600">-2.5% to -3.5% per year</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span>2010-2020</span>
                          <span className="font-semibold text-red-600">-4.0% to -5.0% per year</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950 rounded border-2 border-red-300 dark:border-red-700">
                          <span className="font-bold">2020-2026</span>
                          <span className="font-bold text-red-600">-4.5% to -6.0% per year</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    What's driving the accelerating decline?
                  </p>

                  <ul className="space-y-3 my-6">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Generational shift:</strong> Smoking rates among adults under 30 are now under 10%,
                        compared to 25%+ for Baby Boomers. Younger cohorts simply never start smoking.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Vaping migration:</strong> While Juul's popularity has waned, vaping still captures
                        smokers who would have otherwise continued with cigarettes. E-cigarettes offer nicotine without combustion.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Health awareness:</strong> COVID-19 heightened awareness of lung health. Smoking and
                        respiratory disease correlation is now universally known and accepted.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Price sensitivity:</strong> As Altria raises prices 6-8% annually to offset volume
                        declines, some price-sensitive smokers quit or switch to cheaper brands (though Marlboro holds share).
                      </div>
                    </li>
                  </ul>

                  <Card className="my-6 border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-2">Long-Term Trajectory</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            If volumes continue declining 4-5% annually for the next 10 years, U.S. cigarette consumption
                            will fall another 40% by 2035. Altria's total addressable market is literally shrinking every
                            year. The question isn't whether volumes will decline - they will - but whether pricing power
                            can indefinitely offset those declines.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Pricing Power */}
                <section id="pricing-power">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Pricing Power: Altria's Secret Weapon
                  </h2>
                  <p>
                    Here's the bull case for Altria's dividend: despite collapsing volumes, the company has maintained
                    and grown profits through aggressive pricing. Since 2010, Altria has raised Marlboro prices by 6-8%
                    annually, far exceeding inflation.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Why Pricing Power Works for Tobacco</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Nicotine Addiction Creates Inelastic Demand</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              Cigarettes are one of the most addictive consumer products. Long-term smokers will pay
                              higher prices rather than quit. Price elasticity is extremely low for this customer base.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Marlboro Brand Premium Justified</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              Marlboro commands 40%+ market share with premium pricing. Smokers perceive quality and
                              taste differences. Brand loyalty is exceptionally high - many smoke same brand for decades.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Oligopoly Industry Structure</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              Altria and Reynolds American control 75%+ of the U.S. market. With no new entrants (regulatory
                              barriers), both companies can raise prices in lockstep without fear of competition.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Minimal Capital Requirements</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              Unlike technology or manufacturing, tobacco requires almost no R&D or capital investment.
                              Every dollar of price increase drops straight to free cash flow and can fund dividends.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Math That Sustains the Dividend</h3>
                  <p>
                    Here's how Altria has maintained profitability and dividend growth despite volume declines:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                        <p className="text-sm mb-3 font-semibold">Hypothetical Annual Scenario (Typical Recent Year)</p>
                        <div className="space-y-2 text-sm font-mono">
                          <div className="flex justify-between">
                            <span>Cigarette Volume Decline:</span>
                            <span className="text-red-600">-5.0%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price Increase:</span>
                            <span className="text-green-600">+7.5%</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-300 dark:border-slate-700 pt-2 mt-2 font-bold">
                            <span>Net Revenue Change:</span>
                            <span className="text-green-600">+2.1%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cost Reductions (workforce, facilities):</span>
                            <span className="text-green-600">+1.5%</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-300 dark:border-slate-700 pt-2 mt-2 font-bold">
                            <span>Operating Income Growth:</span>
                            <span className="text-green-600">+3.6%</span>
                          </div>
                          <div className="flex justify-between mt-2 text-blue-600">
                            <span>Dividend Increase:</span>
                            <span>+2.5%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    This formula has worked for 15 years. But there's a limit. Eventually, prices become so high that
                    even addicted smokers quit, switch to generic brands, or buy contraband cigarettes. Some analysts
                    believe we're approaching that inflection point in 2026-2030.
                  </p>
                </section>

                {/* CTA Section 1 */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Portfolio Returns</h3>
                      <p className="mb-6 text-blue-100">
                        Considering Altria for your dividend portfolio? Use our free calculators to model how an 8%
                        yield with 2-3% growth would perform over 10-30 years compared to faster-growing stocks.
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

                {/* Juul Writedown */}
                <section id="juul-writedown">
                  <h2 className="flex items-center gap-2">
                    <XCircle className="h-7 w-7 text-red-600" />
                    The $12.6 Billion Juul Disaster
                  </h2>
                  <p>
                    In December 2018, Altria invested $12.8 billion for a 35% stake in Juul Labs, valuing the e-cigarette
                    startup at $38 billion. At the time, Juul dominated 75%+ of the U.S. e-vapor market. Management saw
                    Juul as Altria's bridge to a "smoke-free future" and alternative to declining cigarette sales.
                  </p>

                  <p>
                    By 2022, Altria had written down the entire investment to near-zero, recognizing a <strong>$12.6 billion
                    loss</strong> - one of the worst capital allocation decisions in consumer products history.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3 text-red-600">What Went Wrong with Juul</h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Regulatory Crackdown:</strong> FDA investigations into youth vaping led to flavor
                            bans that gutted Juul's appeal. Teen usage rates became a public health crisis.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Market Share Collapse:</strong> From 75% in 2018 to under 35% by 2022 as competitors
                            launched disposable vapes not subject to same restrictions. Juul's pod-based system lost relevance.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Valuation Absurdity:</strong> Altria paid $38 billion valuation for a company with
                            ~$1 billion in revenue and no profits. 38x sales for a controversial, regulation-threatened
                            product showed desperation, not strategy.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Legal Liabilities:</strong> Thousands of lawsuits from states, cities, and individuals
                            claiming Juul marketed to minors. Settlement costs in billions. Brand permanently tainted.
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>What the Juul Failure Means for Dividend Safety</h3>
                  <p>
                    The Juul writedown didn't force a dividend cut because it was a non-cash accounting charge, not an
                    operational loss. Altria's cigarette business continued generating $8-9 billion in annual cash flow
                    to fund the dividend.
                  </p>

                  <p>
                    However, the incident revealed three concerning truths:
                  </p>

                  <Card className="my-6 border-l-4 border-l-orange-500">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Poor capital allocation:</strong> Management wasted $12.6 billion that could have
                            funded 2+ years of dividends, bought back massive stock, or paid down debt. This capital
                            will never return to shareholders.
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Diversification desperation:</strong> The Juul overpayment revealed management's
                            panic about the core business decline. When companies overpay for "transformation," it
                            signals weakness in the base business.
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>No viable Plan B:</strong> After Juul failed, Altria lacks a credible path to
                            replace declining cigarette revenue. NJOY is tiny. Cannabis stakes provide no income.
                            The company is back to managing decline.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Diversification */}
                <section id="diversification">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Diversification Attempts: Cannabis, Alcohol, and Vaping
                  </h2>
                  <p>
                    Recognizing the cigarette business's terminal decline, Altria has invested billions attempting to
                    diversify into adjacent "vice" categories. Results have been mixed to poor:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-l-green-500 pl-4">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <span>Cannabis: Cronos Group Stake</span>
                            <Badge className="bg-red-600">Underperforming</Badge>
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Altria invested $1.8 billion for 45% of Canadian cannabis producer Cronos Group in 2018.
                            Thesis: position for U.S. federal legalization and capture smokers transitioning to marijuana.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Reality:</strong> Cronos stock down 90%+ from Altria's entry point. U.S. federal
                            legalization stalled. Cannabis industry profitless with commodity pricing. Altria has written
                            down the stake by billions. No meaningful income contribution.
                          </p>
                        </div>

                        <div className="border-l-4 border-l-blue-500 pl-4">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <span>Alcohol: Anheuser-Busch InBev Stake</span>
                            <Badge className="bg-yellow-600">Neutral</Badge>
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Altria owns 10.5% of AB InBev (Budweiser parent), a legacy position from the 2008 InBev-Anheuser
                            merger. Worth ~$11 billion in 2026.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Reality:</strong> AB InBev provides dividend income (~$400M annually) and occasional
                            special distributions, but beer industry also faces secular decline in developed markets. Not
                            a growth driver. Management has considered selling this stake.
                          </p>
                        </div>

                        <div className="border-l-4 border-l-purple-500 pl-4">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <span>E-Vapor: NJOY Acquisition</span>
                            <Badge className="bg-blue-600">Too Early to Judge</Badge>
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            After the Juul disaster, Altria acquired NJOY in 2023 for $2.75 billion. NJOY has FDA authorization
                            for its e-cigarettes, a key advantage over competitors.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Reality:</strong> NJOY has under 5% e-vapor market share. Disposable vapes dominate the
                            category but face regulatory threats. Even if successful, NJOY is too small (sub-$1B revenue)
                            to move the needle on a $20B+ revenue tobacco giant.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-2">Bottom Line on Diversification</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            None of Altria's diversification moves have created a viable second revenue stream to offset
                            cigarette decline. The dividend remains 90%+ dependent on Marlboro's ability to raise prices
                            indefinitely. There is no cavalry coming to save the business if tobacco economics break.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Regulatory Risks */}
                <section id="regulatory-risks">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-red-600" />
                    Regulatory Risks and ESG Concerns
                  </h2>
                  <p>
                    Tobacco is one of the most regulated industries globally, and regulatory risk to Altria's dividend
                    comes in multiple forms:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Major Regulatory Threats to Monitor</h4>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950">
                          <h5 className="font-bold mb-1 text-red-600">Menthol Cigarette Ban</h5>
                          <p className="text-slate-600 dark:text-slate-400">
                            FDA has proposed banning menthol cigarettes, which represent 30-35% of the U.S. market and
                            significantly higher share among African American smokers. If enacted, Altria estimates 10-15%
                            revenue impact. Timeline uncertain but politically charged.
                          </p>
                        </div>
                        <div className="p-3 border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-950">
                          <h5 className="font-bold mb-1 text-orange-600">Nicotine Reduction Mandate</h5>
                          <p className="text-slate-600 dark:text-slate-400">
                            FDA has authority to mandate reduced nicotine levels in cigarettes to "non-addictive" levels.
                            This would destroy tobacco industry economics by removing addiction-driven repeat purchases.
                            Industry would litigate for years, but represents existential threat.
                          </p>
                        </div>
                        <div className="p-3 border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950">
                          <h5 className="font-bold mb-1 text-yellow-600">Tax Increases</h5>
                          <p className="text-slate-600 dark:text-slate-400">
                            Federal and state cigarette excise taxes could increase to fund budget deficits or healthcare
                            programs. Higher taxes accelerate volume declines and limit Altria's pricing power (can't raise
                            prices if government already did). Some states have $4-5 per pack taxes.
                          </p>
                        </div>
                        <div className="p-3 border-l-4 border-l-purple-500 bg-purple-50 dark:bg-purple-950">
                          <h5 className="font-bold mb-1 text-purple-600">Litigation Risk</h5>
                          <p className="text-slate-600 dark:text-slate-400">
                            Tobacco companies have largely defeated individual smoker lawsuits via the 1998 Master Settlement
                            Agreement. But new theories (marketing to minors via vaping, environmental damage from cigarette
                            butts) could create fresh legal exposure.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>ESG Concerns: Institutional Exclusion</h3>
                  <p>
                    A growing number of pension funds, endowments, and ESG-focused investment funds explicitly exclude
                    tobacco stocks from their portfolios. This reduces the potential buyer base for Altria shares and
                    contributes to valuation compression (low P/E ratio, high dividend yield).
                  </p>

                  <p>
                    Key ESG concerns cited by investors:
                  </p>

                  <ul className="space-y-2 my-6 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Public health:</strong> Cigarettes kill 480,000 Americans annually, per CDC data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Addiction:</strong> Nicotine is highly addictive; business model depends on addiction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Marketing practices:</strong> Historical targeting of minors and minorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Environmental:</strong> Cigarette butts are #1 form of litter globally</span>
                    </li>
                  </ul>

                  <p>
                    For dividend investors, ESG exclusion means lower stock price and higher yield (which appears attractive)
                    but also reduced liquidity and limited multiple expansion potential. Altria will likely trade at 8-12x
                    earnings indefinitely while S&P 500 averages 18-20x.
                  </p>
                </section>

                {/* Cash Flow */}
                <section id="cash-flow">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-green-600" />
                    Cash Flow Analysis: Can Altria Sustain the Dividend?
                  </h2>
                  <p>
                    Despite all the business challenges, Altria generates enormous cash flow - the lifeblood of any dividend.
                    Here's the current state of Altria's cash generation:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4">2025 Cash Flow Snapshot (Approximate)</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span>Revenue</span>
                          <span className="font-semibold">$20.5 billion</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span>Operating Income</span>
                          <span className="font-semibold">$11.2 billion</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-50 dark:bg-green-950 rounded border-2 border-green-300 dark:border-green-700">
                          <span className="font-bold">Operating Cash Flow</span>
                          <span className="font-bold text-green-600">$8.9 billion</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span>Capital Expenditures</span>
                          <span className="font-semibold">$250 million</span>
                        </div>
                        <div className="flex justify-between p-3 bg-blue-50 dark:bg-blue-950 rounded border-2 border-blue-300 dark:border-blue-700">
                          <span className="font-bold">Free Cash Flow</span>
                          <span className="font-bold text-blue-600">$8.65 billion</span>
                        </div>
                        <div className="flex justify-between p-3 bg-red-50 dark:bg-red-950 rounded border-2 border-red-300 dark:border-red-700">
                          <span className="font-bold">Dividend Payments</span>
                          <span className="font-bold text-red-600">$6.8 billion</span>
                        </div>
                        <div className="flex justify-between p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                          <span className="font-bold">Dividend Coverage Ratio</span>
                          <span className="font-bold text-yellow-600">1.27x</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                        Free cash flow of $8.65B covers dividend of $6.8B with $1.85B remaining for debt paydown,
                        buybacks, or M&A. Coverage of 1.27x provides modest safety cushion.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Three Scenarios for Dividend Safety (2026-2035)</h3>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-300 dark:border-green-700">
                          <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5" />
                            Bull Case: Dividend Safe and Growing
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            <strong>Assumptions:</strong> Volume declines moderate to -3% annually, pricing power remains
                            strong at +5-6%, cost cuts maintain margins, no catastrophic regulation.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Outcome:</strong> Free cash flow stays $7-8B+ through 2035. Dividend grows 2-4% annually.
                            Stock yields 8-10% as market refuses to re-rate tobacco despite stability. Total return 10-14%
                            from dividends plus modest price appreciation.
                          </p>
                        </div>

                        <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
                          <h4 className="font-bold text-yellow-600 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Base Case: Dividend Frozen but Maintained
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            <strong>Assumptions:</strong> Volume declines accelerate to -5-6%, pricing power constrained
                            to +4-5% by consumer price sensitivity, menthol ban hits but no nicotine reduction.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Outcome:</strong> Free cash flow slowly declines to $6-7B by 2030-2032. Dividend frozen
                            at current level (no cuts but no increases). Stock trades flat to down as yield stays high but
                            no growth. Total return 7-9% from dividends only.
                          </p>
                        </div>

                        <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-2 border-red-300 dark:border-red-700">
                          <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                            <XCircle className="h-5 w-5" />
                            Bear Case: Dividend Cut Forced
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            <strong>Assumptions:</strong> Volume declines hit -7-8% annually as smoking rates crater among
                            younger cohorts, pricing power breaks as consumers switch to vaping/quitting, menthol ban +
                            significant flavor restrictions on e-vapor.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Outcome:</strong> Free cash flow drops to $4-5B by 2030. Dividend cut 20-30% to restore
                            sustainability. Stock crashes 30-50% on cut announcement. Recovery takes years. Total return
                            negative even with dividends.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Most analysts assign 50-60% probability to Base Case, 25-30% to Bull Case, and 15-20% to Bear Case.
                    The dividend appears safe for 3-5 years under almost all scenarios, but 10-year visibility is murky.
                  </p>
                </section>

                {/* Peer Comparison */}
                <section id="peer-comparison">
                  <h2 className="flex items-center gap-2">
                    <Scale className="h-7 w-7 text-blue-600" />
                    Altria vs. Philip Morris vs. British American Tobacco
                  </h2>
                  <p>
                    How does Altria compare to its global tobacco peers? Here's a side-by-side comparison of the three
                    largest Western tobacco companies:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                              <th className="text-left p-2">Metric</th>
                              <th className="text-left p-2">Altria (MO)</th>
                              <th className="text-left p-2">Philip Morris (PM)</th>
                              <th className="text-left p-2">British American (BTI)</th>
                            </tr>
                          </thead>
                          <tbody className="text-xs">
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                              <td className="p-2 font-semibold">Market</td>
                              <td className="p-2">U.S. only</td>
                              <td className="p-2">International (ex-U.S.)</td>
                              <td className="p-2">Global (incl. U.S.)</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Dividend Yield</td>
                              <td className="p-2 text-green-600 font-bold">8.0-9.0%</td>
                              <td className="p-2">5.0-5.5%</td>
                              <td className="p-2">7.5-8.5%</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                              <td className="p-2 font-semibold">Volume Trend</td>
                              <td className="p-2 text-red-600">-5% to -6% annually</td>
                              <td className="p-2 text-orange-600">-3% to -4% annually</td>
                              <td className="p-2 text-red-600">-4% to -5% annually</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Pricing Power</td>
                              <td className="p-2 text-green-600">Strong (6-8%)</td>
                              <td className="p-2 text-green-600">Strong (5-7%)</td>
                              <td className="p-2 text-yellow-600">Moderate (4-6%)</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                              <td className="p-2 font-semibold">Payout Ratio</td>
                              <td className="p-2 text-orange-600">~80%</td>
                              <td className="p-2 text-green-600">~75%</td>
                              <td className="p-2 text-red-600">~85%</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Smoke-Free Revenue</td>
                              <td className="p-2 text-red-600">&lt;5%</td>
                              <td className="p-2 text-green-600">~35% (IQOS)</td>
                              <td className="p-2 text-yellow-600">~15% (Vuse)</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                              <td className="p-2 font-semibold">ESG Rating</td>
                              <td className="p-2 text-red-600">Very Low</td>
                              <td className="p-2 text-yellow-600">Low</td>
                              <td className="p-2 text-red-600">Very Low</td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Regulatory Risk</td>
                              <td className="p-2 text-red-600">High (FDA aggressive)</td>
                              <td className="p-2 text-yellow-600">Moderate (varied globally)</td>
                              <td className="p-2 text-orange-600">Moderate-High</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900">
                              <td className="p-2 font-semibold">Dividend Growth (5yr)</td>
                              <td className="p-2 text-yellow-600">2-4% annually</td>
                              <td className="p-2 text-green-600">4-6% annually</td>
                              <td className="p-2 text-orange-600">1-3% annually</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Key Takeaways from Peer Comparison</h3>

                  <ul className="space-y-3 my-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Altria offers highest yield</strong> but slowest growth. Best for income-now investors.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Philip Morris is most diversified</strong> with IQOS heat-not-burn products generating
                        35% of revenue. Lower yield (5-5.5%) but better long-term growth prospects and lower payout ratio
                        provide safety buffer.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>British American Tobacco</strong> combines high yield (7.5-8.5%) with higher payout ratio
                        (85%+), making it highest risk. Vuse vaping brand provides some diversification but not enough to
                        offset cigarette decline.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>If prioritizing dividend safety over yield,</strong> Philip Morris (PM) is the safest tobacco
                        dividend with lowest payout ratio, best smoke-free transition, and international diversification.
                        Altria offers 3% more yield but higher risk.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Pros & Cons */}
                <section id="pros-cons">
                  <h2>Pros and Cons: Should You Buy Altria for the Dividend?</h2>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="border-2 border-green-300 dark:border-green-700">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6" />
                          Pros: Why Altria Could Work
                        </h3>
                        <div className="space-y-3">
                          {pros.map((pro, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm">
                              <div className="text-green-600 mt-0.5">{pro.icon}</div>
                              <span>{pro.text}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-red-300 dark:border-red-700">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                          <XCircle className="h-6 w-6" />
                          Cons: Significant Risks to Consider
                        </h3>
                        <div className="space-y-3">
                          {cons.map((con, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm">
                              <div className="text-red-600 mt-0.5">{con.icon}</div>
                              <span>{con.text}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section 2 */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Model Your High-Yield Dividend Strategy</h3>
                      <p className="mb-6 text-green-100">
                        Compare an 8% yield tobacco stock portfolio against dividend growth stocks yielding 2-3% with
                        10%+ annual increases. See which strategy builds more wealth over 10, 20, and 30 years.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/yield-on-cost">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Yield on Cost Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Final Safety Score */}
                <section id="safety-score">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-yellow-600" />
                    Final Dividend Safety Score: 6.5/10 (Moderate)
                  </h2>
                  <p>
                    After analyzing all factors - business fundamentals, cash flow, payout ratio, regulatory environment,
                    management execution, and peer comparison - here's our comprehensive dividend safety assessment:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-2 border-yellow-300 dark:border-yellow-700">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-2">8.5/10</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Short-Term Safety (1-3 years)</div>
                          <p className="text-xs mt-2 text-slate-500 dark:text-slate-400">Cash flow easily covers dividend</p>
                        </div>
                        <div className="text-center p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                          <div className="text-3xl font-bold text-yellow-600 mb-2">6.5/10</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Medium-Term Safety (3-7 years)</div>
                          <p className="text-xs mt-2 text-slate-500 dark:text-slate-400">Pricing power vs volume decline battle</p>
                        </div>
                        <div className="text-center p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                          <div className="text-3xl font-bold text-orange-600 mb-2">4.5/10</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Long-Term Safety (7+ years)</div>
                          <p className="text-xs mt-2 text-slate-500 dark:text-slate-400">Secular decline eventually wins</p>
                        </div>
                      </div>

                      <h4 className="font-bold mb-3">Rating Breakdown by Factor</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Current Cash Flow Strength</span>
                          <Badge className="bg-green-600">9/10</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Payout Ratio Sustainability</span>
                          <Badge className="bg-yellow-600">7/10</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Business Model Durability</span>
                          <Badge className="bg-orange-600">5/10</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Regulatory Environment</span>
                          <Badge className="bg-red-600">4/10</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Management Capital Allocation</span>
                          <Badge className="bg-orange-600">5/10</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Growth Prospects</span>
                          <Badge className="bg-red-600">3/10</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>ESG & Reputational Risk</span>
                          <Badge className="bg-red-600">2/10</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Who Should Buy Altria Stock?</h3>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-l-green-500">
                          <h4 className="font-bold text-green-600 mb-2">Good Fit For:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Income-focused investors who prioritize current yield (8%+) over capital appreciation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Retirees needing maximum cash flow today to fund living expenses</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Investors comfortable with ESG concerns and "sin stock" ethics</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Those with 3-7 year time horizon who believe pricing power thesis holds</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Portfolio diversifiers wanting non-correlated income (tobacco moves independently)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-l-red-500">
                          <h4 className="font-bold text-red-600 mb-2">Poor Fit For:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Long-term buy-and-hold investors with 15+ year horizons (secular decline risk)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Dividend growth investors seeking 7%+ annual dividend increases</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>ESG-conscious investors or those at institutions with tobacco exclusions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Investors unable to tolerate 20-30% stock price volatility or dividend cut risk</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Those seeking capital appreciation and total return (stock likely trades sideways)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Our Recommendation</h3>
                  <p>
                    Altria is a <strong>tactical income position, not a core holding</strong>. Consider limiting tobacco
                    stocks to 5-10% of your dividend portfolio maximum. The 8-9% yield is attractive for generating current
                    income, but the lack of growth and long-term business risks make it unsuitable as a foundational
                    dividend stock.
                  </p>

                  <p>
                    For most dividend investors, we recommend blending Altria (if you choose to own it) with dividend
                    growth stocks in healthcare, technology, and consumer staples that offer lower yields (2-4%) but
                    sustainable 7-10% annual dividend growth. This combination provides current income plus growing income
                    that outpaces inflation over time.
                  </p>
                </section>

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Where to Buy Altria Stock (MO)</h2>
                  <p>
                    To buy Altria Group shares commission-free with automatic dividend reinvestment, you'll need a
                    brokerage account. Here are the top-rated brokers for dividend investors in 2026:
                  </p>
                  <BrokerComparisonTable />
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                    All major brokers offer commission-free stock trading and automatic DRIP. Choose based on research
                    tools, mobile app quality, and customer service. For beginners, Fidelity and Charles Schwab provide
                    the best combination of education and ease of use.
                  </p>
                </section>

                {/* FAQ Section */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Altria's dividend safe in 2026?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, for the short-to-medium term (3-5 years). Altria generates $8.6 billion in free cash flow
                          against $6.8 billion in dividend payments, providing 1.27x coverage. The dividend appears safe
                          unless cigarette volume declines accelerate dramatically or major regulation (menthol ban, nicotine
                          reduction) is enacted. However, long-term safety beyond 7-10 years is more questionable due to
                          secular industry decline.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is Altria's current dividend yield?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Altria's dividend yield fluctuates between 8-9% depending on the stock price. As of February 2026,
                          the annual dividend is approximately $3.76 per share. At a stock price of $45, the yield is 8.4%.
                          At $40, it yields 9.4%. This is 5-6x higher than the S&P 500 average of 1.4%. The ultra-high yield
                          reflects market concerns about business sustainability and declining cigarette volumes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How long has Altria increased its dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Altria has increased its dividend for 56 consecutive years, making it a Dividend Aristocrat (25+
                          year streak) and nearly a Dividend King (50+ years). The streak dates back to 1970. However, recent
                          dividend growth has slowed to just 2-4% annually since 2020, down from 8-10% growth in the 2010-2015
                          period. Management prioritizes maintaining the high payout over aggressive increases given volume
                          headwinds.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I buy Altria or Philip Morris International?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          It depends on your priorities. Altria (MO) offers a higher yield (8-9% vs 5-5.5%) but slower dividend
                          growth (2-4% vs 4-6%), higher payout ratio (80% vs 75%), and more regulatory risk (U.S.-only FDA
                          exposure). Philip Morris (PM) is more diversified with 35% of revenue from IQOS smoke-free products,
                          operates internationally with less regulatory concentration, and has better long-term growth prospects.
                          For safety-focused investors, PM is the better choice. For maximum current income, MO yields 3% more.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What happened with Altria and Juul?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          In December 2018, Altria invested $12.8 billion for a 35% stake in Juul Labs at a $38 billion
                          valuation. The investment quickly soured as FDA cracked down on youth vaping, Juul lost market share
                          from 75% to under 35%, and litigation mounted. By 2022, Altria had written down the entire investment
                          to near-zero, realizing a $12.6 billion loss. While the writedown didn't force a dividend cut (it was
                          a non-cash accounting charge), it demonstrated poor capital allocation and management's desperation
                          to diversify away from cigarettes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Altria stock a good investment for retirement income?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          It can be, but with caveats. The 8-9% yield provides substantial current income - $8,000-9,000
                          annually per $100,000 invested. For retirees needing maximum cash flow today, Altria delivers.
                          However, you must accept: (1) minimal dividend growth (2-3% annually won't keep pace with inflation),
                          (2) stock price likely to decline or stay flat long-term, (3) ESG concerns if that matters to you,
                          and (4) risk of eventual dividend cut in 10+ years. Best used as a tactical allocation (5-10% of
                          portfolio) rather than core holding.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What are the biggest risks to Altria's dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Top risks in order: (1) <strong>Accelerating volume declines</strong> - if cigarette consumption
                          drops 7-8% annually vs current 5-6%, cash flow erodes quickly. (2) <strong>Menthol ban</strong> -
                          would eliminate 30-35% of market overnight. (3) <strong>Pricing power breakdown</strong> - if
                          consumers become more price-sensitive and reject 6-8% annual increases, revenue collapses.
                          (4) <strong>Nicotine reduction mandate</strong> - FDA requiring non-addictive nicotine levels would
                          destroy the business model. (5) <strong>Tax increases</strong> - higher excise taxes reduce Altria's
                          ability to raise prices and accelerate volume declines.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Does Altria's ESG rating matter for dividend safety?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Indirectly, yes. Altria's very low ESG rating means exclusion from most ESG-focused funds, pension
                          plans, and endowments. This reduces the potential buyer base for shares, permanently compresses
                          valuation (low P/E ratio), and creates higher dividend yields. From a pure dividend safety perspective,
                          ESG doesn't affect cash flow or payout ability. But it does mean the stock will likely trade sideways
                          or down long-term, limiting total return potential. If you need share price appreciation along with
                          dividends, ESG concerns matter. If you only care about income, they don't directly impact safety.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How does Altria maintain profitability with declining volumes?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Through aggressive pricing and cost-cutting. Despite cigarette volumes falling 40%+ since 2010,
                          Altria has grown operating income by raising Marlboro prices 6-8% annually (far exceeding inflation).
                          Nicotine addiction creates extremely inelastic demand - smokers will pay more rather than quit.
                          Simultaneously, Altria cuts costs by reducing workforce, closing facilities, and eliminating marketing
                          spend (tobacco advertising is restricted anyway). The formula works as long as price increases don't
                          accelerate consumer exits to vaping or quitting.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What percentage of my portfolio should be in tobacco stocks?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          For most dividend investors, we recommend limiting tobacco exposure to 5-10% maximum of your total
                          portfolio, even if the yields are tempting. The concentration limit protects you if the dividend is
                          eventually cut or the stock crashes on regulatory news. A balanced dividend portfolio might include:
                          50-60% in dividend growth stocks (healthcare, tech, consumer staples, financials), 20-30% in higher-yield
                          REITs and utilities, 5-10% in tobacco for extra income, and 10-15% in bonds or cash. This diversification
                          ensures one sector's problems don't sink your entire income stream.
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
                    <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      50 Best Dividend Stocks to Buy in 2026
                    </Link>
                    <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Consumer Staples Dividend Stocks (Recession-Proof Income)
                    </Link>
                    <Link href="/blog/best-high-yield-reits-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best High-Yield REITs 2026 (6-10% Dividends)
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. ETFs: Complete Comparison Guide
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026 (10%+ Annual Increases)
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
