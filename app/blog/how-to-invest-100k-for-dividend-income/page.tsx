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
  BarChart3,
  Zap,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Invest $100K for Dividend Income (2026 Portfolio Guide)',
  description: 'Three model portfolios for investing $100K for dividend income: conservative, balanced, and aggressive. Expected income projections, stock picks, and step-by-step allocation guide.',
  keywords: 'invest 100k for income, invest 100000 for dividends, 100k dividend portfolio, how to invest 100k, dividend income portfolio, passive income 100k',
  openGraph: {
    title: 'How to Invest $100K for Dividend Income',
    description: 'Three model portfolios with real stock picks, income projections, and risk levels for your $100K investment.',
    type: 'article',
  }
}

export default function HowToInvest100KForDividendIncomePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Portfolio Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Invest $100K for Dividend Income
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Three complete model portfolios for your $100,000 -- conservative, balanced, and aggressive.
                  Real stock picks, exact allocations, expected income, and 10-year growth projections.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>16 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Portfolio Guide
                  </span>
                </div>
              </div>

              {/* Quick Answer */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    What $100K Can Generate
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Conservative (3.2% yield):</strong> $3,200/year now, growing to $5,730/year in 10 years. Lowest risk, highest growth potential.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Balanced (4.5% yield):</strong> $4,500/year now, growing to $6,950/year in 10 years. Best risk-reward for most investors.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Aggressive (6.5% yield):</strong> $6,500/year now, growing to $7,800/year in 10 years. Maximum income today, slower growth.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#before-investing" className="text-blue-600 hover:underline">Before You Invest $100K</a></li>
                    <li><a href="#conservative" className="text-blue-600 hover:underline">Portfolio A: Conservative</a></li>
                    <li><a href="#balanced" className="text-blue-600 hover:underline">Portfolio B: Balanced</a></li>
                    <li><a href="#aggressive" className="text-blue-600 hover:underline">Portfolio C: Aggressive</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">10-Year Comparison</a></li>
                    <li><a href="#implementation" className="text-blue-600 hover:underline">Step-by-Step Implementation</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Before Investing */}
                <section id="before-investing">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                    Before You Invest $100K: Checklist
                  </h2>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Emergency Fund in Place</h4>
                          <p className="text-sm mb-0">Keep 6 months of expenses ($15K-$30K) in a high-yield savings account before investing in stocks. This money should not be invested.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">High-Interest Debt Paid Off</h4>
                          <p className="text-sm mb-0">Pay off credit cards (15-25% APR) before investing. No dividend portfolio beats 20% guaranteed returns from debt payoff.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Choose the Right Account</h4>
                          <p className="text-sm mb-0">Max out Roth IRA ($7,000) and 401(k) match first. Invest the remainder in a taxable brokerage account. Place tax-inefficient assets (REITs, BDCs) in retirement accounts.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dollar-Cost Average In</h4>
                          <p className="text-sm mb-0">Consider investing over 3-6 months instead of all at once. This reduces timing risk if the market drops shortly after you invest.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Conservative Portfolio */}
                <section id="conservative">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-green-600" />
                    Portfolio A: Conservative ($100K)
                  </h2>
                  <p>
                    Focused on dividend safety and growth. Lower starting income but your dividends grow
                    fastest. Best for investors under 55 who prioritize wealth building and long-term
                    income growth over current cash flow.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-green-100 dark:bg-green-900/50">
                          <th className="border p-3 text-left">Holding</th>
                          <th className="border p-3 text-center">Amount</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Div Growth</th>
                          <th className="border p-3 text-center">Annual Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">SCHD (Dividend Growth ETF)</td>
                          <td className="border p-3 text-center">$30,000</td>
                          <td className="border p-3 text-center">3.5%</td>
                          <td className="border p-3 text-center text-green-600">10.4%</td>
                          <td className="border p-3 text-center">$1,050</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Johnson & Johnson (JNJ)</td>
                          <td className="border p-3 text-center">$12,000</td>
                          <td className="border p-3 text-center">3.1%</td>
                          <td className="border p-3 text-center text-green-600">5.9%</td>
                          <td className="border p-3 text-center">$372</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center text-green-600">8.5%</td>
                          <td className="border p-3 text-center">$340</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">PepsiCo (PEP)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">2.8%</td>
                          <td className="border p-3 text-center text-green-600">7.1%</td>
                          <td className="border p-3 text-center">$280</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">BlackRock (BLK)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center text-green-600">11.2%</td>
                          <td className="border p-3 text-center">$192</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">UnitedHealth (UNH)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">1.5%</td>
                          <td className="border p-3 text-center text-green-600">14.5%</td>
                          <td className="border p-3 text-center">$150</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">NextEra Energy (NEE)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">2.8%</td>
                          <td className="border p-3 text-center text-green-600">10.2%</td>
                          <td className="border p-3 text-center">$224</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center">$7,000</td>
                          <td className="border p-3 text-center">5.5%</td>
                          <td className="border p-3 text-center text-green-600">2.8%</td>
                          <td className="border p-3 text-center">$385</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Procter & Gamble (PG)</td>
                          <td className="border p-3 text-center">$5,000</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center text-green-600">6.2%</td>
                          <td className="border p-3 text-center">$120</td>
                        </tr>
                        <tr className="bg-green-50 dark:bg-green-950/30 font-bold">
                          <td className="border p-3">TOTAL</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center text-green-600">3.1%</td>
                          <td className="border p-3 text-center text-green-600">8.6%</td>
                          <td className="border p-3 text-center text-green-600">$3,113</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-4 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-xl font-black text-green-700 dark:text-green-400">$3,113</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 1 Income</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-green-700 dark:text-green-400">$5,730</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 10 Income</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-green-700 dark:text-green-400">$284K</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 10 Portfolio</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-green-700 dark:text-green-400">8.6%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Avg Div Growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Balanced Portfolio */}
                <section id="balanced">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-blue-600" />
                    Portfolio B: Balanced ($100K)
                  </h2>
                  <p>
                    The sweet spot. Good current income with solid growth potential. Blends dividend growth
                    stocks with higher-yield holdings for 4.5% blended yield. Best for investors 45-65
                    who want meaningful income plus growth.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-blue-100 dark:bg-blue-900/50">
                          <th className="border p-3 text-left">Holding</th>
                          <th className="border p-3 text-center">Amount</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Div Growth</th>
                          <th className="border p-3 text-center">Annual Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">SCHD (Dividend Growth ETF)</td>
                          <td className="border p-3 text-center">$20,000</td>
                          <td className="border p-3 text-center">3.5%</td>
                          <td className="border p-3 text-center text-green-600">10.4%</td>
                          <td className="border p-3 text-center">$700</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">JEPI (Income ETF)</td>
                          <td className="border p-3 text-center">$15,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center">N/A</td>
                          <td className="border p-3 text-center">$1,080</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center text-green-600">8.5%</td>
                          <td className="border p-3 text-center">$340</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">5.5%</td>
                          <td className="border p-3 text-center text-green-600">2.8%</td>
                          <td className="border p-3 text-center">$550</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">VICI Properties (VICI)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">5.8%</td>
                          <td className="border p-3 text-center text-green-600">4.2%</td>
                          <td className="border p-3 text-center">$464</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Enterprise Products (EPD)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center text-green-600">3.1%</td>
                          <td className="border p-3 text-center">$576</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Duke Energy (DUK)</td>
                          <td className="border p-3 text-center">$7,000</td>
                          <td className="border p-3 text-center">4.2%</td>
                          <td className="border p-3 text-center text-green-600">2.1%</td>
                          <td className="border p-3 text-center">$294</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">PepsiCo (PEP)</td>
                          <td className="border p-3 text-center">$7,000</td>
                          <td className="border p-3 text-center">2.8%</td>
                          <td className="border p-3 text-center text-green-600">7.1%</td>
                          <td className="border p-3 text-center">$196</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Johnson & Johnson (JNJ)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">3.1%</td>
                          <td className="border p-3 text-center text-green-600">5.9%</td>
                          <td className="border p-3 text-center">$248</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BlackRock (BLK)</td>
                          <td className="border p-3 text-center">$7,000</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center text-green-600">11.2%</td>
                          <td className="border p-3 text-center">$168</td>
                        </tr>
                        <tr className="bg-blue-50 dark:bg-blue-950/30 font-bold">
                          <td className="border p-3">TOTAL</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center text-blue-600">4.6%</td>
                          <td className="border p-3 text-center text-blue-600">5.5%</td>
                          <td className="border p-3 text-center text-blue-600">$4,616</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-xl font-black text-blue-700 dark:text-blue-400">$4,616</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 1 Income</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-blue-700 dark:text-blue-400">$6,950</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 10 Income</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-blue-700 dark:text-blue-400">$248K</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 10 Portfolio</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-blue-700 dark:text-blue-400">5.5%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Avg Div Growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* Aggressive Portfolio */}
                <section id="aggressive">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-orange-600" />
                    Portfolio C: Aggressive High-Yield ($100K)
                  </h2>
                  <p>
                    Maximum income from day one. Targets 6.5%+ yield for retirees or income-focused investors
                    who need cash flow now. Lower growth potential but immediate high income.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-orange-100 dark:bg-orange-900/50">
                          <th className="border p-3 text-left">Holding</th>
                          <th className="border p-3 text-center">Amount</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Div Growth</th>
                          <th className="border p-3 text-center">Annual Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">JEPI (Income ETF)</td>
                          <td className="border p-3 text-center">$20,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center">N/A</td>
                          <td className="border p-3 text-center">$1,440</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center">$12,000</td>
                          <td className="border p-3 text-center">5.5%</td>
                          <td className="border p-3 text-center text-green-600">2.8%</td>
                          <td className="border p-3 text-center">$660</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">VICI Properties (VICI)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">5.8%</td>
                          <td className="border p-3 text-center text-green-600">4.2%</td>
                          <td className="border p-3 text-center">$580</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Ares Capital (ARCC)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">9.2%</td>
                          <td className="border p-3 text-center text-green-600">0.8%</td>
                          <td className="border p-3 text-center">$920</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Enterprise Products (EPD)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center text-green-600">3.1%</td>
                          <td className="border p-3 text-center">$720</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Altria (MO)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">8.4%</td>
                          <td className="border p-3 text-center text-green-600">1.2%</td>
                          <td className="border p-3 text-center">$672</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">W.P. Carey (WPC)</td>
                          <td className="border p-3 text-center">$8,000</td>
                          <td className="border p-3 text-center">6.0%</td>
                          <td className="border p-3 text-center text-green-600">1.5%</td>
                          <td className="border p-3 text-center">$480</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">JEPQ (Nasdaq Income ETF)</td>
                          <td className="border p-3 text-center">$10,000</td>
                          <td className="border p-3 text-center">9.5%</td>
                          <td className="border p-3 text-center">N/A</td>
                          <td className="border p-3 text-center">$950</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Southern Company (SO)</td>
                          <td className="border p-3 text-center">$7,000</td>
                          <td className="border p-3 text-center">3.9%</td>
                          <td className="border p-3 text-center text-green-600">3.1%</td>
                          <td className="border p-3 text-center">$273</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">$5,000</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center text-green-600">8.5%</td>
                          <td className="border p-3 text-center">$170</td>
                        </tr>
                        <tr className="bg-orange-50 dark:bg-orange-950/30 font-bold">
                          <td className="border p-3">TOTAL</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center text-orange-600">6.9%</td>
                          <td className="border p-3 text-center text-orange-600">2.0%</td>
                          <td className="border p-3 text-center text-orange-600">$6,865</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-4 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-xl font-black text-orange-700 dark:text-orange-400">$6,865</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 1 Income</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-orange-700 dark:text-orange-400">$8,370</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 10 Income</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-orange-700 dark:text-orange-400">$195K</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Year 10 Portfolio</p>
                        </div>
                        <div>
                          <p className="text-xl font-black text-orange-700 dark:text-orange-400">2.0%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Avg Div Growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* 10 Year Comparison */}
                <section id="comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-purple-600" />
                    10-Year Projection: All Three Portfolios
                  </h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Year</th>
                          <th className="border p-3 text-center">Conservative Income</th>
                          <th className="border p-3 text-center">Balanced Income</th>
                          <th className="border p-3 text-center">Aggressive Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Year 1</td>
                          <td className="border p-3 text-center">$3,113</td>
                          <td className="border p-3 text-center">$4,616</td>
                          <td className="border p-3 text-center font-bold text-orange-600">$6,865</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 3</td>
                          <td className="border p-3 text-center">$3,670</td>
                          <td className="border p-3 text-center">$5,130</td>
                          <td className="border p-3 text-center">$7,140</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 5</td>
                          <td className="border p-3 text-center">$4,320</td>
                          <td className="border p-3 text-center">$5,700</td>
                          <td className="border p-3 text-center">$7,430</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 7</td>
                          <td className="border p-3 text-center">$5,080</td>
                          <td className="border p-3 text-center">$6,340</td>
                          <td className="border p-3 text-center">$7,730</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 10</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$5,730</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">$6,950</td>
                          <td className="border p-3 text-center text-orange-600 font-bold">$8,370</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50 font-bold">
                          <td className="border p-3">Year 10 Portfolio Value</td>
                          <td className="border p-3 text-center text-green-600">$284,000</td>
                          <td className="border p-3 text-center text-blue-600">$248,000</td>
                          <td className="border p-3 text-center text-orange-600">$195,000</td>
                        </tr>
                        <tr className="font-bold">
                          <td className="border p-3">Year 10 Total Value (Portfolio + 10yr Income)</td>
                          <td className="border p-3 text-center text-green-600">$327,000</td>
                          <td className="border p-3 text-center text-blue-600">$305,000</td>
                          <td className="border p-3 text-center text-orange-600">$271,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-2 border-purple-300 dark:border-purple-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Star className="h-6 w-6 text-purple-600" />
                        Key Insight
                      </h3>
                      <p className="text-sm mb-3">
                        The <strong>conservative portfolio generates the most total wealth</strong> ($327K) despite
                        starting with the lowest income ($3,113). The aggressive portfolio produces the most income
                        every year but has the lowest total value ($271K).
                      </p>
                      <p className="text-sm mb-0">
                        <strong>Our recommendation:</strong> The Balanced Portfolio (B) offers the best risk-adjusted
                        outcome for most investors. It generates $4,616/year from day one (enough to be meaningful)
                        while still growing at 5.5% annually.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Implementation */}
                <section id="implementation">
                  <h2 className="flex items-center gap-2">
                    <Star className="h-7 w-7 text-indigo-600" />
                    Step-by-Step Implementation
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <CardContent className="pt-6">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                          <div>
                            <h4 className="font-bold mb-1">Open the Right Account</h4>
                            <p className="text-sm mb-0">Max out Roth IRA first ($7,000), then use a taxable brokerage for the remaining $93,000. Place REITs and BDCs in the Roth IRA. Choose Fidelity, Schwab, or Vanguard for zero commissions.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                          <div>
                            <h4 className="font-bold mb-1">Invest $33K Immediately (1/3)</h4>
                            <p className="text-sm mb-0">Start with ETFs (SCHD, JEPI) for instant diversification. Buy your largest positions first -- the ones you are most confident about.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                          <div>
                            <h4 className="font-bold mb-1">Invest $33K in Month 2 (2/3)</h4>
                            <p className="text-sm mb-0">Add individual stock positions. Research each company before buying. Check payout ratios, dividend history, and recent earnings.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                          <div>
                            <h4 className="font-bold mb-1">Invest Final $34K in Month 3</h4>
                            <p className="text-sm mb-0">Complete your portfolio. Review all positions to ensure proper allocation. This 3-month dollar-cost averaging reduces timing risk.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">5</div>
                          <div>
                            <h4 className="font-bold mb-1">Enable DRIP (or Collect Cash)</h4>
                            <p className="text-sm mb-0">If accumulating: enable DRIP on all positions. If retired: turn off DRIP and let dividends flow to your cash account for spending.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">6</div>
                          <div>
                            <h4 className="font-bold mb-1">Review Quarterly, Rebalance Annually</h4>
                            <p className="text-sm mb-0">Check earnings reports each quarter. Rebalance once per year by adding new money to underweight positions. Replace any stock that cuts its dividend.</p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Should I invest $100K all at once or dollar-cost average?</h3>
                        <p className="text-sm mb-0">
                          Historically, lump-sum investing beats DCA about 66% of the time. However, investing over
                          2-3 months is a reasonable compromise that reduces the risk of buying at a market peak.
                          If you would lose sleep investing it all at once, DCA over 3 months for peace of mind.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Which portfolio is best for someone already retired?</h3>
                        <p className="text-sm mb-0">
                          The Balanced Portfolio (B) is ideal for most retirees. It provides $4,616/year immediately
                          with 5.5% growth. If you absolutely need maximum income now, the Aggressive Portfolio (C)
                          generates $6,865/year but with slower growth and higher risk.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How much monthly income does $100K generate?</h3>
                        <p className="text-sm mb-0">
                          Conservative: $260/month. Balanced: $385/month. Aggressive: $572/month. These amounts
                          grow annually with dividend increases. After 10 years, the balanced portfolio generates
                          $579/month.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What if I have $200K or $500K to invest?</h3>
                        <p className="text-sm mb-0">
                          Simply multiply the allocations. With $200K, double each position. With $500K, multiply
                          by 5. You can also add more individual stocks for greater diversification -- aim for
                          15-25 total positions at larger portfolio sizes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Should I add to this portfolio over time?</h3>
                        <p className="text-sm mb-0">
                          Absolutely. Contributing $1,000/month to the balanced portfolio adds $12,000/year in
                          fresh capital. After 10 years of contributions plus DRIP, your $100K + $120K in additions
                          could grow to $500K+ generating over $20,000/year in income.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Model Your $100K Dividend Portfolio</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to customize these portfolios for your specific goals,
                        time horizon, and risk tolerance.
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
                <section>
                  <h2 id="brokers">Best Brokers for Investing $100K</h2>
                  <p>
                    Choose a broker with zero commissions, free DRIP, fractional shares, and strong research tools.
                  </p>
                  <BrokerComparisonTable />
                </section>
              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/how-much-to-retire-on-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How Much Do You Need to Retire on Dividends?
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Retirement: 15 Safe Picks
                    </Link>
                    <Link href="/blog/how-to-create-monthly-dividend-income" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Create Monthly Dividend Income
                    </Link>
                    <Link href="/blog/dividend-investing-vs-real-estate" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Investing vs Real Estate: Which Wins?
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
