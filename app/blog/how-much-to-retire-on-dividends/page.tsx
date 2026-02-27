import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Percent,
  PieChart,
  Calendar,
  Calculator,
  Landmark
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Do You Need to Retire on Dividends Alone? (2026 Guide)',
  description: 'Calculate exactly how much you need to retire on dividend income alone. Portfolio sizes for $40K, $60K, $80K, and $100K annual income at different yields. Real examples and step-by-step plan.',
  keywords: 'retire on dividends, how much to retire on dividends, dividend retirement portfolio size, live off dividends, dividend income retirement, passive income retirement',
  openGraph: {
    title: 'How Much Do You Need to Retire on Dividends Alone?',
    description: 'Portfolio sizes for $40K-$100K annual dividend income. Real math, real examples, real strategy.',
    type: 'article',
  }
}

export default function HowMuchToRetireOnDividendsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Retirement Planning</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How Much Do You Need to Retire on Dividends Alone?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The exact portfolio sizes you need to generate $40K, $60K, $80K, or $100K in annual dividend
                  income -- with real stock examples and a step-by-step building plan for 2026.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>15 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    Quick Answer
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>At 3% yield:</strong> You need $1.33M for $40K/year, $2M for $60K/year, $2.67M for $80K/year, $3.33M for $100K/year</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>At 4% yield:</strong> You need $1M for $40K/year, $1.5M for $60K/year, $2M for $80K/year, $2.5M for $100K/year</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>At 5% yield:</strong> You need $800K for $40K/year, $1.2M for $60K/year, $1.6M for $80K/year, $2M for $100K/year</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#the-formula" className="text-blue-600 hover:underline">The Dividend Retirement Formula</a></li>
                    <li><a href="#income-targets" className="text-blue-600 hover:underline">Portfolio Sizes by Income Target</a></li>
                    <li><a href="#yield-levels" className="text-blue-600 hover:underline">Conservative vs Aggressive Yields</a></li>
                    <li><a href="#real-examples" className="text-blue-600 hover:underline">Real Portfolio Examples</a></li>
                    <li><a href="#social-security" className="text-blue-600 hover:underline">Factoring in Social Security</a></li>
                    <li><a href="#building-plan" className="text-blue-600 hover:underline">Step-by-Step Building Plan</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* The Formula */}
                <section id="the-formula">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-blue-600" />
                    The Dividend Retirement Formula
                  </h2>
                  <p>
                    The math for retiring on dividends is straightforward. You need a portfolio large enough that
                    the dividends it generates cover your annual living expenses -- without ever selling a single share.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6 text-center">
                      <p className="text-2xl font-black text-blue-700 dark:text-blue-300 mb-2">
                        Portfolio Size = Annual Income Needed / Dividend Yield
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Example: $60,000 / 0.04 (4% yield) = $1,500,000 portfolio needed
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    This is fundamentally different from the traditional 4% rule, which assumes you sell shares
                    each year. With dividend retirement, your <strong>principal stays intact forever</strong>.
                    You live off the income stream while your portfolio continues to grow in value.
                  </p>

                  <h3>Why This Approach Works</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">You Never Run Out of Money</h4>
                          <p className="text-sm mb-0">Unlike the 4% rule, you never touch principal. Your portfolio can last indefinitely because you only spend the dividend income.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Built-in Inflation Protection</h4>
                          <p className="text-sm mb-0">Quality dividend stocks raise payouts 5-10% annually. Your income grows faster than inflation without any effort.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Leave a Legacy</h4>
                          <p className="text-sm mb-0">Your heirs inherit the entire portfolio, which has likely grown 2-3x over your retirement.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Income Targets Table */}
                <section id="income-targets">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Portfolio Sizes by Income Target
                  </h2>
                  <p>
                    Here is the complete breakdown of how much you need invested based on your desired annual
                    income and portfolio yield. These numbers assume you spend only dividend income and never
                    sell shares.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Annual Income</th>
                          <th className="border p-3 text-center">At 3% Yield</th>
                          <th className="border p-3 text-center">At 4% Yield</th>
                          <th className="border p-3 text-center">At 5% Yield</th>
                          <th className="border p-3 text-center">At 6% Yield</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">$40,000/year</td>
                          <td className="border p-3 text-center">$1,333,333</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,000,000</td>
                          <td className="border p-3 text-center">$800,000</td>
                          <td className="border p-3 text-center">$666,667</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$60,000/year</td>
                          <td className="border p-3 text-center">$2,000,000</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,500,000</td>
                          <td className="border p-3 text-center">$1,200,000</td>
                          <td className="border p-3 text-center">$1,000,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">$80,000/year</td>
                          <td className="border p-3 text-center">$2,666,667</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,000,000</td>
                          <td className="border p-3 text-center">$1,600,000</td>
                          <td className="border p-3 text-center">$1,333,333</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$100,000/year</td>
                          <td className="border p-3 text-center">$3,333,333</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,500,000</td>
                          <td className="border p-3 text-center">$2,000,000</td>
                          <td className="border p-3 text-center">$1,666,667</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">$150,000/year</td>
                          <td className="border p-3 text-center">$5,000,000</td>
                          <td className="border p-3 text-center font-bold text-green-600">$3,750,000</td>
                          <td className="border p-3 text-center">$3,000,000</td>
                          <td className="border p-3 text-center">$2,500,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Important:</strong> These are pre-tax numbers. Qualified dividends are taxed at 0%, 15%, or 20% depending on your income bracket. At $60K in qualified dividend income, a married couple filing jointly would pay roughly $0-$3,000 in federal tax (2026 rates).</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Yield Levels */}
                <section id="yield-levels">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-purple-600" />
                    Conservative vs Aggressive Yield Strategies
                  </h2>
                  <p>
                    The yield you target dramatically impacts both the portfolio size you need and the risk
                    you take. Here is how to think about different yield levels.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Shield className="h-6 w-6 text-green-600" />
                          Conservative: 3-3.5% Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Portfolio needed for $60K:</strong> $1.7M-$2M
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Stocks:</strong> Dividend Aristocrats, SCHD ETF, JNJ, PG, PEP, KO, MMM</p>
                          <p><strong>Pros:</strong> Safest dividends, 7-10% annual dividend growth, excellent capital appreciation</p>
                          <p><strong>Cons:</strong> Requires largest portfolio. Need $2M+ for comfortable retirement.</p>
                          <p><strong>Best for:</strong> Conservative investors with larger portfolios who prioritize safety</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Target className="h-6 w-6 text-blue-600" />
                          Balanced: 4-4.5% Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Portfolio needed for $60K:</strong> $1.33M-$1.5M
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Stocks:</strong> SCHD + JEPI blend, ABBV, PFE, BLK, O, VICI</p>
                          <p><strong>Pros:</strong> Good income-growth balance, moderate dividend growth (4-6%), solid safety</p>
                          <p><strong>Cons:</strong> Mix of qualified and non-qualified dividends adds tax complexity</p>
                          <p><strong>Best for:</strong> Most retirees. The sweet spot between income and safety.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-6 w-6 text-orange-600" />
                          Aggressive: 5-7% Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Portfolio needed for $60K:</strong> $857K-$1.2M
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Stocks:</strong> REITs (O, VICI, WPC), MLPs (EPD, ET), BDCs (ARCC), high-yield utilities</p>
                          <p><strong>Pros:</strong> Smallest portfolio needed. Maximum current income from day one.</p>
                          <p><strong>Cons:</strong> Higher dividend cut risk, limited growth, more tax-inefficient (REIT income taxed as ordinary)</p>
                          <p><strong>Best for:</strong> Retirees with smaller portfolios who need maximum income now</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Real Portfolio Examples */}
                <section id="real-examples">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-indigo-600" />
                    Real Portfolio Examples
                  </h2>
                  <p>
                    Let us build three model portfolios targeting $60,000 in annual dividend income at
                    different yield levels.
                  </p>

                  <h3>Portfolio A: Conservative ($2M at 3% yield = $60K/year)</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Holding</th>
                          <th className="border p-3 text-center">Allocation</th>
                          <th className="border p-3 text-center">Amount</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Annual Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">SCHD (Dividend Growth ETF)</td>
                          <td className="border p-3 text-center">30%</td>
                          <td className="border p-3 text-center">$600,000</td>
                          <td className="border p-3 text-center">3.5%</td>
                          <td className="border p-3 text-center">$21,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Johnson & Johnson (JNJ)</td>
                          <td className="border p-3 text-center">12%</td>
                          <td className="border p-3 text-center">$240,000</td>
                          <td className="border p-3 text-center">3.1%</td>
                          <td className="border p-3 text-center">$7,440</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Procter & Gamble (PG)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$200,000</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center">$4,800</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">PepsiCo (PEP)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$200,000</td>
                          <td className="border p-3 text-center">2.8%</td>
                          <td className="border p-3 text-center">$5,600</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$200,000</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center">$6,800</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Coca-Cola (KO)</td>
                          <td className="border p-3 text-center">8%</td>
                          <td className="border p-3 text-center">$160,000</td>
                          <td className="border p-3 text-center">2.9%</td>
                          <td className="border p-3 text-center">$4,640</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$200,000</td>
                          <td className="border p-3 text-center">5.5%</td>
                          <td className="border p-3 text-center">$11,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50 font-bold">
                          <td className="border p-3">TOTAL</td>
                          <td className="border p-3 text-center">100%</td>
                          <td className="border p-3 text-center">$2,000,000</td>
                          <td className="border p-3 text-center text-green-600">3.1%</td>
                          <td className="border p-3 text-center text-green-600">$61,280</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Portfolio B: Balanced ($1.5M at 4% yield = $60K/year)</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Holding</th>
                          <th className="border p-3 text-center">Allocation</th>
                          <th className="border p-3 text-center">Amount</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Annual Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">SCHD (Dividend Growth ETF)</td>
                          <td className="border p-3 text-center">25%</td>
                          <td className="border p-3 text-center">$375,000</td>
                          <td className="border p-3 text-center">3.5%</td>
                          <td className="border p-3 text-center">$13,125</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">JEPI (Income ETF)</td>
                          <td className="border p-3 text-center">20%</td>
                          <td className="border p-3 text-center">$300,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center">$21,600</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">12%</td>
                          <td className="border p-3 text-center">$180,000</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center">$6,120</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center">13%</td>
                          <td className="border p-3 text-center">$195,000</td>
                          <td className="border p-3 text-center">5.5%</td>
                          <td className="border p-3 text-center">$10,725</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Enterprise Products (EPD)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$150,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center">$10,800</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50 font-bold">
                          <td className="border p-3">TOTAL (+ other positions)</td>
                          <td className="border p-3 text-center">100%</td>
                          <td className="border p-3 text-center">$1,500,000</td>
                          <td className="border p-3 text-center text-green-600">4.2%</td>
                          <td className="border p-3 text-center text-green-600">$62,370</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* Social Security */}
                <section id="social-security">
                  <h2 className="flex items-center gap-2">
                    <Landmark className="h-7 w-7 text-blue-600" />
                    Factoring in Social Security
                  </h2>
                  <p>
                    Most retirees will also receive Social Security benefits. The average benefit in 2026 is
                    approximately $1,907/month ($22,884/year) for an individual and $3,200/month ($38,400/year)
                    for a couple. This dramatically reduces the portfolio size you need.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Total Income Goal</th>
                          <th className="border p-3 text-center">Social Security (Couple)</th>
                          <th className="border p-3 text-center">Dividends Needed</th>
                          <th className="border p-3 text-center">Portfolio at 4% Yield</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">$60,000/year</td>
                          <td className="border p-3 text-center">$38,400</td>
                          <td className="border p-3 text-center">$21,600</td>
                          <td className="border p-3 text-center font-bold text-green-600">$540,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$80,000/year</td>
                          <td className="border p-3 text-center">$38,400</td>
                          <td className="border p-3 text-center">$41,600</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,040,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">$100,000/year</td>
                          <td className="border p-3 text-center">$38,400</td>
                          <td className="border p-3 text-center">$61,600</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,540,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$150,000/year</td>
                          <td className="border p-3 text-center">$38,400</td>
                          <td className="border p-3 text-center">$111,600</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,790,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>Key takeaway:</strong> With Social Security factored in, a couple needs only about
                    $540,000 to generate $60,000/year total income. That is a much more achievable goal than
                    $1.5 million.
                  </p>
                </section>

                {/* Building Plan */}
                <section id="building-plan">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-orange-600" />
                    Step-by-Step Building Plan
                  </h2>
                  <p>
                    Here is how to build your dividend retirement portfolio from scratch, whether you have
                    10 years or 30 years to retirement.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <CardContent className="pt-6">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                          <div>
                            <h4 className="font-bold mb-1">Calculate Your Number</h4>
                            <p className="text-sm mb-0">Determine your annual expenses in retirement. Subtract Social Security and pension income. The remainder is what dividends must cover.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                          <div>
                            <h4 className="font-bold mb-1">Start with DRIP Investing</h4>
                            <p className="text-sm mb-0">Reinvest every dividend during the accumulation phase. A $500/month investment in SCHD (3.5% yield, 10% dividend growth) grows to $760,000 in 25 years.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                          <div>
                            <h4 className="font-bold mb-1">Max Out Tax-Advantaged Accounts</h4>
                            <p className="text-sm mb-0">Contribute to Roth IRA ($7,000/year), 401(k) ($23,500/year). Tax-free dividend income in a Roth IRA is the ultimate retirement hack.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                          <div>
                            <h4 className="font-bold mb-1">Shift to Higher Yield 5 Years Before Retirement</h4>
                            <p className="text-sm mb-0">Gradually move from growth-focused to income-focused holdings. Add REITs, utilities, and higher-yield blue chips to boost your portfolio yield from 3% toward 4-5%.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">5</div>
                          <div>
                            <h4 className="font-bold mb-1">Turn Off DRIP at Retirement</h4>
                            <p className="text-sm mb-0">Stop reinvesting and start collecting dividends as cash. Set up monthly dividend payments by staggering ex-dividend dates across your holdings.</p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <h3>Monthly Investment Needed to Reach $1.5M</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Years to Retirement</th>
                          <th className="border p-3 text-center">Monthly Investment</th>
                          <th className="border p-3 text-center">Total Invested</th>
                          <th className="border p-3 text-center">Growth (at 10%/yr)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">30 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">$660/month</td>
                          <td className="border p-3 text-center">$237,600</td>
                          <td className="border p-3 text-center">$1,262,400</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">25 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,130/month</td>
                          <td className="border p-3 text-center">$339,000</td>
                          <td className="border p-3 text-center">$1,161,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">20 years</td>
                          <td className="border p-3 text-center font-bold text-blue-600">$2,000/month</td>
                          <td className="border p-3 text-center">$480,000</td>
                          <td className="border p-3 text-center">$1,020,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">15 years</td>
                          <td className="border p-3 text-center font-bold text-orange-600">$3,650/month</td>
                          <td className="border p-3 text-center">$657,000</td>
                          <td className="border p-3 text-center">$843,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">10 years</td>
                          <td className="border p-3 text-center font-bold text-red-600">$7,300/month</td>
                          <td className="border p-3 text-center">$876,000</td>
                          <td className="border p-3 text-center">$624,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Assumes 10% average annual return with dividends reinvested. The earlier you start, the less you need to invest each month.
                  </p>
                </section>

                {/* FAQ Section */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Can you really live off dividends alone?</h3>
                        <p className="text-sm mb-0">
                          Yes, thousands of retirees do it. The key is building a portfolio large enough that dividend
                          income covers your expenses. A $1.5 million portfolio yielding 4% generates $60,000/year
                          in passive income. Combined with Social Security, most couples can live comfortably without
                          ever selling shares.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What if dividends get cut during a recession?</h3>
                        <p className="text-sm mb-0">
                          Diversification is your defense. During the 2020 COVID recession, only 5% of Dividend
                          Aristocrats cut their dividends. By holding 20-30 quality dividend stocks across multiple
                          sectors, a few cuts barely dent your income. Keep a 6-12 month cash reserve for worst-case
                          scenarios.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Is it better to retire on dividends or use the 4% rule?</h3>
                        <p className="text-sm mb-0">
                          Dividends provide a psychological and financial advantage: you never sell shares, so your
                          portfolio stays intact. The 4% rule requires selling shares in down markets, which can
                          deplete your portfolio faster (sequence of returns risk). Dividend income is more stable
                          and predictable than market returns.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How are dividends taxed in retirement?</h3>
                        <p className="text-sm mb-0">
                          Qualified dividends (from stocks held 60+ days) are taxed at 0%, 15%, or 20% based
                          on your income. A married couple can earn up to $94,050 in qualified dividends at 0%
                          federal tax (2026). Roth IRA dividends are completely tax-free. REIT dividends are taxed
                          as ordinary income (up to 37%).
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What is the fastest way to build a dividend retirement portfolio?</h3>
                        <p className="text-sm mb-0">
                          Maximize contributions to tax-advantaged accounts (401k + Roth IRA = $30,500/year),
                          reinvest all dividends (DRIP), focus on dividend growth stocks (10%+ annual raises),
                          and invest consistently through market ups and downs. Starting with $30,500/year at
                          age 35, you could reach $1.5M by age 55.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Retirement Number</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to determine exactly how much you need to retire on dividends,
                        and how long it will take to get there.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Target className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Retirement Portfolios</h2>
                  <p>
                    Choose a broker with free DRIP, zero commissions, and strong retirement account options (IRA, Roth IRA, 401k rollovers).
                  </p>
                  <BrokerComparisonTable />
                </section>
              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/dividend-income-in-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Income in Retirement: Complete Strategy Guide
                    </Link>
                    <Link href="/blog/4-percent-rule-vs-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      4% Rule vs Dividend Investing: Which Strategy Wins?
                    </Link>
                    <Link href="/blog/how-to-live-off-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Live Off Dividends: Complete Guide
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Retirement: 15 Safe Picks
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
