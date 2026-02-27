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
  Calendar,
  Clock,
  Zap,
  BarChart3,
  PieChart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Create Monthly Dividend Income: Step-by-Step (2026)',
  description: 'Learn how to build a portfolio that pays dividends every month. Payment staggering strategy, monthly dividend payers, and step-by-step guide to creating a monthly income stream.',
  keywords: 'monthly dividend income, create monthly dividend income, monthly dividend stocks, dividend payment schedule, monthly passive income, dividend income every month',
  openGraph: {
    title: 'How to Create Monthly Dividend Income: Step-by-Step',
    description: 'Build a portfolio that pays you every single month. Payment staggering, monthly payers, and real portfolio examples.',
    type: 'article',
  }
}

export default function HowToCreateMonthlyDividendIncomePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Income Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Create Monthly Dividend Income: Step-by-Step
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Most stocks pay dividends quarterly, but with the right strategy you can receive dividend
                  checks every single month. Here is the exact method to build your monthly income machine.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>14 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Practical Guide
                  </span>
                </div>
              </div>

              {/* Quick Answer */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    The Strategy in 30 Seconds
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Step 1:</strong> Quarterly payers follow 3 schedules: Jan/Apr/Jul/Oct, Feb/May/Aug/Nov, and Mar/Jun/Sep/Dec. Hold stocks from each group.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Step 2:</strong> Add monthly dividend payers like Realty Income (O), STAG Industrial, and JEPI for guaranteed monthly cash flow.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Result:</strong> A $500K portfolio at 4.5% yield generates ~$1,875/month in dividend income -- like a paycheck, every month.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#payment-schedules" className="text-blue-600 hover:underline">Understanding Payment Schedules</a></li>
                    <li><a href="#staggering-strategy" className="text-blue-600 hover:underline">The Staggering Strategy</a></li>
                    <li><a href="#monthly-payers" className="text-blue-600 hover:underline">Best Monthly Dividend Payers</a></li>
                    <li><a href="#model-portfolio" className="text-blue-600 hover:underline">Model Monthly Income Portfolio</a></li>
                    <li><a href="#income-targets" className="text-blue-600 hover:underline">Income by Portfolio Size</a></li>
                    <li><a href="#step-by-step" className="text-blue-600 hover:underline">Step-by-Step Setup Guide</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Payment Schedules */}
                <section id="payment-schedules">
                  <h2 className="flex items-center gap-2">
                    <Calendar className="h-7 w-7 text-blue-600" />
                    Understanding Dividend Payment Schedules
                  </h2>
                  <p>
                    Most U.S. companies pay dividends quarterly (4 times per year). The key insight: they do not
                    all pay in the same months. There are three main quarterly payment cycles, and by holding
                    stocks from each cycle, you create monthly income.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Cycle</th>
                          <th className="border p-3 text-center">Payment Months</th>
                          <th className="border p-3 text-left">Example Stocks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 dark:bg-green-950/30">
                          <td className="border p-3 font-semibold text-green-700 dark:text-green-400">Cycle A</td>
                          <td className="border p-3 text-center font-bold">Jan, Apr, Jul, Oct</td>
                          <td className="border p-3">Johnson & Johnson, Coca-Cola, Microsoft, Visa, Lowe's</td>
                        </tr>
                        <tr className="bg-blue-50 dark:bg-blue-950/30">
                          <td className="border p-3 font-semibold text-blue-700 dark:text-blue-400">Cycle B</td>
                          <td className="border p-3 text-center font-bold">Feb, May, Aug, Nov</td>
                          <td className="border p-3">AbbVie, PepsiCo, Duke Energy, BlackRock, Procter & Gamble</td>
                        </tr>
                        <tr className="bg-purple-50 dark:bg-purple-950/30">
                          <td className="border p-3 font-semibold text-purple-700 dark:text-purple-400">Cycle C</td>
                          <td className="border p-3 text-center font-bold">Mar, Jun, Sep, Dec</td>
                          <td className="border p-3">Apple, McDonald's, Costco, UnitedHealth, NextEra Energy</td>
                        </tr>
                        <tr className="bg-orange-50 dark:bg-orange-950/30">
                          <td className="border p-3 font-semibold text-orange-700 dark:text-orange-400">Monthly</td>
                          <td className="border p-3 text-center font-bold">Every Month</td>
                          <td className="border p-3">Realty Income, STAG Industrial, AGNC, JEPI, JEPQ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Important:</strong> Payment dates can vary by a few days. Check each company's dividend history for exact payment dates. Most brokers show upcoming dividend dates in your portfolio view.</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Staggering Strategy */}
                <section id="staggering-strategy">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-green-600" />
                    The Dividend Staggering Strategy
                  </h2>
                  <p>
                    The goal is to allocate roughly equal amounts to stocks in each payment cycle. This
                    creates a steady, predictable monthly income stream. Here is how to balance it.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-4">Optimal Allocation for Monthly Income</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-700 dark:text-green-400">Cycle A: Jan/Apr/Jul/Oct</span>
                            <span className="font-bold">30%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-700 dark:text-blue-400">Cycle B: Feb/May/Aug/Nov</span>
                            <span className="font-bold">30%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-purple-700 dark:text-purple-400">Cycle C: Mar/Jun/Sep/Dec</span>
                            <span className="font-bold">25%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-purple-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-orange-700 dark:text-orange-400">Monthly Payers</span>
                            <span className="font-bold">15%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-orange-600 h-3 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                        The monthly payers (Realty Income, JEPI, etc.) ensure you have income in every
                        month regardless of how your quarterly stocks align.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Monthly Payers */}
                <section id="monthly-payers">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Best Monthly Dividend Payers (2026)
                  </h2>
                  <p>
                    These stocks and ETFs pay dividends every single month, eliminating any gaps in your
                    income stream.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Name</th>
                          <th className="border p-3 text-center">Ticker</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Type</th>
                          <th className="border p-3 text-center">Monthly on $10K</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Realty Income</td>
                          <td className="border p-3 text-center">O</td>
                          <td className="border p-3 text-center font-bold text-green-600">5.5%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">$45.83</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">STAG Industrial</td>
                          <td className="border p-3 text-center">STAG</td>
                          <td className="border p-3 text-center font-bold text-green-600">4.2%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">$35.00</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AGNC Investment</td>
                          <td className="border p-3 text-center">AGNC</td>
                          <td className="border p-3 text-center font-bold text-green-600">14.5%</td>
                          <td className="border p-3 text-center">mREIT</td>
                          <td className="border p-3 text-center">$120.83</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">JPMorgan Equity Premium Income</td>
                          <td className="border p-3 text-center">JEPI</td>
                          <td className="border p-3 text-center font-bold text-green-600">7.2%</td>
                          <td className="border p-3 text-center">ETF</td>
                          <td className="border p-3 text-center">$60.00</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">JPMorgan Nasdaq Equity Premium</td>
                          <td className="border p-3 text-center">JEPQ</td>
                          <td className="border p-3 text-center font-bold text-green-600">9.5%</td>
                          <td className="border p-3 text-center">ETF</td>
                          <td className="border p-3 text-center">$79.17</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Agree Realty</td>
                          <td className="border p-3 text-center">ADC</td>
                          <td className="border p-3 text-center font-bold text-green-600">4.4%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">$36.67</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">LTC Properties</td>
                          <td className="border p-3 text-center">LTC</td>
                          <td className="border p-3 text-center font-bold text-green-600">6.8%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">$56.67</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Pembina Pipeline</td>
                          <td className="border p-3 text-center">PBA</td>
                          <td className="border p-3 text-center font-bold text-green-600">5.1%</td>
                          <td className="border p-3 text-center">Energy</td>
                          <td className="border p-3 text-center">$42.50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Caution with AGNC:</strong> While AGNC's 14.5% yield is attractive, mortgage REITs are highly sensitive to interest rates and have historically shown price erosion. Limit mREITs to 5% of your portfolio. JEPI and O are safer monthly payer choices.</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* Model Portfolio */}
                <section id="model-portfolio">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-indigo-600" />
                    Model Monthly Income Portfolio ($500K)
                  </h2>
                  <p>
                    Here is a complete portfolio that generates dividend income every single month, targeting
                    $22,500/year ($1,875/month) from a $500,000 investment.
                  </p>

                  <h3 className="text-green-700 dark:text-green-400">Cycle A: Pays Jan, Apr, Jul, Oct</h3>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-green-100 dark:bg-green-900/50">
                          <th className="border p-2 text-left">Stock</th>
                          <th className="border p-2 text-center">Amount</th>
                          <th className="border p-2 text-center">Yield</th>
                          <th className="border p-2 text-center">Annual</th>
                          <th className="border p-2 text-center">Per Quarter</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">Johnson & Johnson (JNJ)</td><td className="border p-2 text-center">$50,000</td><td className="border p-2 text-center">3.1%</td><td className="border p-2 text-center">$1,550</td><td className="border p-2 text-center">$387</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Coca-Cola (KO)</td><td className="border p-2 text-center">$40,000</td><td className="border p-2 text-center">2.9%</td><td className="border p-2 text-center">$1,160</td><td className="border p-2 text-center">$290</td></tr>
                        <tr><td className="border p-2">VICI Properties (VICI)</td><td className="border p-2 text-center">$40,000</td><td className="border p-2 text-center">5.8%</td><td className="border p-2 text-center">$2,320</td><td className="border p-2 text-center">$580</td></tr>
                        <tr className="bg-green-50 dark:bg-green-950/30 font-bold"><td className="border p-2">Cycle A Total</td><td className="border p-2 text-center">$130,000</td><td className="border p-2 text-center">3.9%</td><td className="border p-2 text-center">$5,030</td><td className="border p-2 text-center">$1,257</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-blue-700 dark:text-blue-400">Cycle B: Pays Feb, May, Aug, Nov</h3>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-blue-100 dark:bg-blue-900/50">
                          <th className="border p-2 text-left">Stock</th>
                          <th className="border p-2 text-center">Amount</th>
                          <th className="border p-2 text-center">Yield</th>
                          <th className="border p-2 text-center">Annual</th>
                          <th className="border p-2 text-center">Per Quarter</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">AbbVie (ABBV)</td><td className="border p-2 text-center">$50,000</td><td className="border p-2 text-center">3.4%</td><td className="border p-2 text-center">$1,700</td><td className="border p-2 text-center">$425</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">PepsiCo (PEP)</td><td className="border p-2 text-center">$40,000</td><td className="border p-2 text-center">2.8%</td><td className="border p-2 text-center">$1,120</td><td className="border p-2 text-center">$280</td></tr>
                        <tr><td className="border p-2">Duke Energy (DUK)</td><td className="border p-2 text-center">$40,000</td><td className="border p-2 text-center">4.2%</td><td className="border p-2 text-center">$1,680</td><td className="border p-2 text-center">$420</td></tr>
                        <tr className="bg-blue-50 dark:bg-blue-950/30 font-bold"><td className="border p-2">Cycle B Total</td><td className="border p-2 text-center">$130,000</td><td className="border p-2 text-center">3.5%</td><td className="border p-2 text-center">$4,500</td><td className="border p-2 text-center">$1,125</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-purple-700 dark:text-purple-400">Cycle C: Pays Mar, Jun, Sep, Dec</h3>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-purple-100 dark:bg-purple-900/50">
                          <th className="border p-2 text-left">Stock</th>
                          <th className="border p-2 text-center">Amount</th>
                          <th className="border p-2 text-center">Yield</th>
                          <th className="border p-2 text-center">Annual</th>
                          <th className="border p-2 text-center">Per Quarter</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">NextEra Energy (NEE)</td><td className="border p-2 text-center">$40,000</td><td className="border p-2 text-center">2.8%</td><td className="border p-2 text-center">$1,120</td><td className="border p-2 text-center">$280</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Enterprise Products (EPD)</td><td className="border p-2 text-center">$40,000</td><td className="border p-2 text-center">7.2%</td><td className="border p-2 text-center">$2,880</td><td className="border p-2 text-center">$720</td></tr>
                        <tr><td className="border p-2">Procter & Gamble (PG)</td><td className="border p-2 text-center">$30,000</td><td className="border p-2 text-center">2.4%</td><td className="border p-2 text-center">$720</td><td className="border p-2 text-center">$180</td></tr>
                        <tr className="bg-purple-50 dark:bg-purple-950/30 font-bold"><td className="border p-2">Cycle C Total</td><td className="border p-2 text-center">$110,000</td><td className="border p-2 text-center">4.3%</td><td className="border p-2 text-center">$4,720</td><td className="border p-2 text-center">$1,180</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-orange-700 dark:text-orange-400">Monthly Payers: Every Month</h3>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-orange-100 dark:bg-orange-900/50">
                          <th className="border p-2 text-left">Stock</th>
                          <th className="border p-2 text-center">Amount</th>
                          <th className="border p-2 text-center">Yield</th>
                          <th className="border p-2 text-center">Annual</th>
                          <th className="border p-2 text-center">Per Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">Realty Income (O)</td><td className="border p-2 text-center">$50,000</td><td className="border p-2 text-center">5.5%</td><td className="border p-2 text-center">$2,750</td><td className="border p-2 text-center">$229</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">JEPI (Income ETF)</td><td className="border p-2 text-center">$50,000</td><td className="border p-2 text-center">7.2%</td><td className="border p-2 text-center">$3,600</td><td className="border p-2 text-center">$300</td></tr>
                        <tr><td className="border p-2">STAG Industrial (STAG)</td><td className="border p-2 text-center">$30,000</td><td className="border p-2 text-center">4.2%</td><td className="border p-2 text-center">$1,260</td><td className="border p-2 text-center">$105</td></tr>
                        <tr className="bg-orange-50 dark:bg-orange-950/30 font-bold"><td className="border p-2">Monthly Payer Total</td><td className="border p-2 text-center">$130,000</td><td className="border p-2 text-center">5.9%</td><td className="border p-2 text-center">$7,610</td><td className="border p-2 text-center">$634</td></tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Monthly Summary */}
                  <Card className="my-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300 dark:border-green-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Award className="h-6 w-6 text-green-600" />
                        Monthly Income Breakdown
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Month</th>
                              <th className="border p-2 text-center">Quarterly</th>
                              <th className="border p-2 text-center">Monthly Payers</th>
                              <th className="border p-2 text-center font-bold text-green-600">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border p-2">January</td><td className="border p-2 text-center">$1,257</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,891</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">February</td><td className="border p-2 text-center">$1,125</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,759</td></tr>
                            <tr><td className="border p-2">March</td><td className="border p-2 text-center">$1,180</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,814</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">April</td><td className="border p-2 text-center">$1,257</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,891</td></tr>
                            <tr><td className="border p-2">May</td><td className="border p-2 text-center">$1,125</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,759</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">June</td><td className="border p-2 text-center">$1,180</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,814</td></tr>
                            <tr><td className="border p-2">July</td><td className="border p-2 text-center">$1,257</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,891</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">August</td><td className="border p-2 text-center">$1,125</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,759</td></tr>
                            <tr><td className="border p-2">September</td><td className="border p-2 text-center">$1,180</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,814</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">October</td><td className="border p-2 text-center">$1,257</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,891</td></tr>
                            <tr><td className="border p-2">November</td><td className="border p-2 text-center">$1,125</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,759</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">December</td><td className="border p-2 text-center">$1,180</td><td className="border p-2 text-center">$634</td><td className="border p-2 text-center font-bold text-green-600">$1,814</td></tr>
                            <tr className="font-bold bg-green-100 dark:bg-green-900/50"><td className="border p-2">ANNUAL TOTAL</td><td className="border p-2 text-center">$14,248</td><td className="border p-2 text-center">$7,610</td><td className="border p-2 text-center text-green-700 dark:text-green-400">$21,858</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                        Average monthly income: <strong>$1,821</strong>. Range: $1,759 to $1,891. Very consistent month-to-month.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Income Targets */}
                <section id="income-targets">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-purple-600" />
                    Monthly Income by Portfolio Size
                  </h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Portfolio Size</th>
                          <th className="border p-3 text-center">At 3.5% Yield</th>
                          <th className="border p-3 text-center">At 4.5% Yield</th>
                          <th className="border p-3 text-center">At 5.5% Yield</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">$100,000</td>
                          <td className="border p-3 text-center">$292/mo</td>
                          <td className="border p-3 text-center">$375/mo</td>
                          <td className="border p-3 text-center">$458/mo</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$250,000</td>
                          <td className="border p-3 text-center">$729/mo</td>
                          <td className="border p-3 text-center">$938/mo</td>
                          <td className="border p-3 text-center">$1,146/mo</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">$500,000</td>
                          <td className="border p-3 text-center">$1,458/mo</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,875/mo</td>
                          <td className="border p-3 text-center">$2,292/mo</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$750,000</td>
                          <td className="border p-3 text-center">$2,188/mo</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,813/mo</td>
                          <td className="border p-3 text-center">$3,438/mo</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">$1,000,000</td>
                          <td className="border p-3 text-center">$2,917/mo</td>
                          <td className="border p-3 text-center font-bold text-green-600">$3,750/mo</td>
                          <td className="border p-3 text-center">$4,583/mo</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">$1,500,000</td>
                          <td className="border p-3 text-center">$4,375/mo</td>
                          <td className="border p-3 text-center font-bold text-green-600">$5,625/mo</td>
                          <td className="border p-3 text-center">$6,875/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Step-by-Step */}
                <section id="step-by-step">
                  <h2 className="flex items-center gap-2">
                    <Clock className="h-7 w-7 text-orange-600" />
                    Step-by-Step Setup Guide
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <CardContent className="pt-6">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                          <div>
                            <h4 className="font-bold mb-1">List Your Target Income</h4>
                            <p className="text-sm mb-0">Determine how much monthly income you need from dividends. Remember to subtract Social Security, pensions, and other income sources.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                          <div>
                            <h4 className="font-bold mb-1">Choose Your Stocks from Each Cycle</h4>
                            <p className="text-sm mb-0">Select 3-5 quality dividend stocks from each payment cycle (A, B, C) plus 2-3 monthly payers. Look up payment schedules on your broker's website or dividendcalendar.com.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                          <div>
                            <h4 className="font-bold mb-1">Allocate Roughly Equal Amounts Per Cycle</h4>
                            <p className="text-sm mb-0">Aim for 30/30/25/15 across Cycle A, B, C, and monthly payers. Adjust based on individual stock yields to equalize monthly income.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                          <div>
                            <h4 className="font-bold mb-1">Set Up Direct Deposit to Your Bank</h4>
                            <p className="text-sm mb-0">Turn off DRIP on all positions and set up automatic cash sweeps from your brokerage to checking account. Most brokers process this within 1-2 business days.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">5</div>
                          <div>
                            <h4 className="font-bold mb-1">Track and Rebalance Annually</h4>
                            <p className="text-sm mb-0">Create a simple spreadsheet tracking each stock's payment date, yield, and income. Rebalance once per year to keep cycles balanced and replace any underperformers.</p>
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
                        <h3 className="font-bold text-base mb-2">What if some months have much more income than others?</h3>
                        <p className="text-sm mb-0">
                          Adjust your allocation amounts to equalize. If Cycle A stocks yield more, invest less
                          in that cycle and more in lower-yielding cycles. Adding monthly payers (O, JEPI, STAG)
                          smooths out any remaining gaps. A 10-15% variance between months is normal and acceptable.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Can I build monthly income with just ETFs?</h3>
                        <p className="text-sm mb-0">
                          Yes. Use SCHD (pays Mar/Jun/Sep/Dec), VYM (pays Mar/Jun/Sep/Dec), JEPI (monthly),
                          and DGRO (pays Mar/Jun/Sep/Dec). The challenge is that most dividend ETFs pay on the
                          same Cycle C schedule. JEPI and JEPQ paying monthly helps fill the gaps.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How much do I need to generate $1,000/month?</h3>
                        <p className="text-sm mb-0">
                          $1,000/month = $12,000/year. At a 4% blended yield, you need $300,000 invested. At
                          5% yield, you need $240,000. At 3.5% yield, you need $343,000. Our DRIP calculator
                          can show you how long it takes to build to that amount.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Do I need to worry about ex-dividend dates?</h3>
                        <p className="text-sm mb-0">
                          Only when initially buying. You must own the stock before the ex-dividend date to
                          receive that quarter's payment. After that, as long as you hold, dividends arrive
                          automatically on the payment date (usually 2-4 weeks after the ex-date).
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Will my monthly income grow over time?</h3>
                        <p className="text-sm mb-0">
                          Yes. With a 5% average annual dividend growth rate, your $1,821/month becomes
                          $2,965/month in 10 years and $4,830/month in 20 years -- all without adding any
                          new money. This is the power of dividend growth for inflation protection.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Monthly Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to model your monthly income portfolio and project
                        future growth.
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

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Monthly Dividend Income</h2>
                  <p>
                    Choose a broker that supports easy dividend tracking, free DRIP when needed, and automatic cash sweeps to your bank account.
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
                    <Link href="/blog/best-monthly-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Monthly Dividend Stocks (2026)
                    </Link>
                    <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a $1,000/Month Dividend Portfolio
                    </Link>
                    <Link href="/blog/how-to-invest-100k-for-dividend-income" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Invest $100K for Dividend Income
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
