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
  PieChart,
  Calendar,
  Clock,
  Zap,
  LineChart,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Income in Retirement: Complete Strategy Guide (2026)',
  description: 'Build reliable dividend income in retirement. Compare withdrawal strategies, learn portfolio construction, tax optimization, and how to create a paycheck from dividends.',
  keywords: 'dividend income retirement, retirement dividend strategy, living off dividends in retirement, dividend portfolio retirement, retirement income strategy, passive income retirement',
  openGraph: {
    title: 'Dividend Income in Retirement: Complete Strategy Guide',
    description: 'Build a reliable income stream from dividends. Portfolio construction, tax optimization, and withdrawal strategies compared.',
    type: 'article',
  }
}

export default function DividendIncomeInRetirementPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Retirement Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Income in Retirement: Complete Strategy Guide
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  How to build, manage, and optimize a dividend portfolio that generates reliable monthly
                  income throughout your entire retirement -- without ever selling a share.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>18 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    The Bottom Line
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend income beats traditional withdrawal:</strong> You never deplete principal, income grows annually, and your portfolio can last indefinitely</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Optimal yield target:</strong> 3.5-4.5% blended yield provides best balance of income, safety, and growth</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>With 5% dividend growth:</strong> $60K/year income becomes $97K/year in 10 years and $158K/year in 20 years -- automatic inflation protection</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#why-dividends" className="text-blue-600 hover:underline">Why Dividends Beat Traditional Withdrawals</a></li>
                    <li><a href="#withdrawal-comparison" className="text-blue-600 hover:underline">Withdrawal Strategy Comparison</a></li>
                    <li><a href="#portfolio-construction" className="text-blue-600 hover:underline">Retirement Portfolio Construction</a></li>
                    <li><a href="#income-buckets" className="text-blue-600 hover:underline">The 3-Bucket Income System</a></li>
                    <li><a href="#tax-optimization" className="text-blue-600 hover:underline">Tax Optimization Strategies</a></li>
                    <li><a href="#common-mistakes" className="text-blue-600 hover:underline">5 Costly Mistakes to Avoid</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Why Dividends */}
                <section id="why-dividends">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Why Dividends Beat Traditional Withdrawals in Retirement
                  </h2>
                  <p>
                    The traditional retirement approach says: save a big pile of money, then sell 4% of it each year.
                    The dividend approach says: build an income-generating portfolio, then live off the cash it produces.
                    Here is why the dividend method is superior for most retirees.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Sequence of Returns Risk</h4>
                          <p className="text-sm mb-0">Selling shares in a down market permanently destroys wealth. Dividends keep flowing regardless of stock prices. During the 2020 crash, S&P 500 dropped 34% but dividend payments only declined 1.5%.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Income Grows Automatically</h4>
                          <p className="text-sm mb-0">Quality dividend stocks raise payouts 5-10% per year. Your $60K income in year 1 becomes $97K by year 10 without any action. The 4% rule has no built-in growth mechanism.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Portfolio Stays Intact</h4>
                          <p className="text-sm mb-0">You never sell shares, so your principal continues compounding. A $1.5M portfolio stays at $1.5M+ (often growing to $2M-3M over 20 years) while paying you income.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Psychological Comfort</h4>
                          <p className="text-sm mb-0">Selling shares feels like eating your seed corn. Collecting dividends feels like harvesting fruit. Retirees using dividend income report significantly less anxiety about running out of money.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Withdrawal Comparison */}
                <section id="withdrawal-comparison">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    Withdrawal Strategy Comparison: 30-Year Simulation
                  </h2>
                  <p>
                    Let us compare three retirement income strategies starting with $1.5 million at age 65.
                    Each aims to provide $60,000/year in income.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Metric</th>
                          <th className="border p-3 text-center">4% Rule (Sell Shares)</th>
                          <th className="border p-3 text-center">Dividend Only</th>
                          <th className="border p-3 text-center">Hybrid (Div + Small Sell)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Starting Income</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center">$60,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 10 Income</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$97,700</td>
                          <td className="border p-3 text-center">$78,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 20 Income</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$159,100</td>
                          <td className="border p-3 text-center">$102,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 30 Portfolio Value</td>
                          <td className="border p-3 text-center text-red-600">$410,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$3,200,000</td>
                          <td className="border p-3 text-center">$1,800,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Risk of Running Out</td>
                          <td className="border p-3 text-center text-red-600">15-20%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Near 0%</td>
                          <td className="border p-3 text-center">5-8%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Inflation Protection</td>
                          <td className="border p-3 text-center text-red-600">None built-in</td>
                          <td className="border p-3 text-center text-green-600 font-bold">5% annual growth</td>
                          <td className="border p-3 text-center">Partial</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Legacy for Heirs</td>
                          <td className="border p-3 text-center text-red-600">Small or none</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$3.2M+</td>
                          <td className="border p-3 text-center">$1.8M</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Assumptions: 8% annual total return, 4% starting yield, 5% annual dividend growth, 3% inflation.
                    The 4% rule withdraws $60K/year inflation-adjusted. Dividend-only spends dividend income only.
                  </p>
                </section>

                {/* Portfolio Construction */}
                <section id="portfolio-construction">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-indigo-600" />
                    Retirement Dividend Portfolio Construction
                  </h2>
                  <p>
                    A well-built retirement dividend portfolio balances yield, growth, and safety across
                    multiple sectors. Here is the ideal allocation for someone entering retirement.
                  </p>

                  <h3>The Ideal Retirement Dividend Allocation</h3>
                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Dividend Growth Core (40%)</span>
                          <Badge>Stability + Growth</Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-3">
                          <div className="bg-green-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          <strong>Holdings:</strong> SCHD, JNJ, PG, PEP, KO, ABBV, MMM
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yield: 3.0-3.5% | Growth: 7-10%/year | Purpose: Growing income + capital preservation
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">High-Yield Income (30%)</span>
                          <Badge variant="secondary">Current Income</Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-3">
                          <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          <strong>Holdings:</strong> O, VICI, EPD, JEPI, WPC, STAG
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yield: 5.5-7.5% | Growth: 2-4%/year | Purpose: Maximize current cash flow
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Defensive Utilities (15%)</span>
                          <Badge variant="outline">Stability</Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-3">
                          <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          <strong>Holdings:</strong> DUK, SO, AEP, NEE, XEL
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yield: 3.5-4.5% | Growth: 4-6%/year | Purpose: Recession-proof income
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Cash Reserve (15%)</span>
                          <Badge variant="outline">Safety Net</Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-3">
                          <div className="bg-slate-600 h-3 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          <strong>Holdings:</strong> Money market fund, short-term Treasury bills, I-bonds
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yield: 4.5-5.0% | Purpose: 18-24 months of expenses for emergencies and market downturns
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">Blended Portfolio Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-black text-green-700 dark:text-green-400">4.2%</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Blended Yield</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-blue-700 dark:text-blue-400">5.5%</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Growth</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-purple-700 dark:text-purple-400">$63K</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Income on $1.5M</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-orange-700 dark:text-orange-400">0.85</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Portfolio Beta</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* 3-Bucket System */}
                <section id="income-buckets">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-orange-600" />
                    The 3-Bucket Dividend Income System
                  </h2>
                  <p>
                    Organize your retirement income into three buckets for maximum reliability and peace of
                    mind. This system ensures you always have cash available, even during severe market
                    downturns.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Shield className="h-6 w-6 text-green-600" />
                          Bucket 1: Immediate Cash (1-2 Years)
                        </h3>
                        <p className="text-sm mb-3">
                          Keep 12-24 months of living expenses in highly liquid, safe investments. This is your
                          buffer during market crashes -- you draw from here instead of selling stocks.
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>High-yield savings account (4.5-5% APY in 2026)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Money market funds (Vanguard VMFXX, Fidelity SPAXX)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Short-term Treasury bills (3-6 month)</span>
                          </li>
                        </ul>
                        <p className="text-sm mt-3 font-semibold">Target: $120,000-$144,000 (at $60K/year expenses)</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-l-4 border-l-blue-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Calendar className="h-6 w-6 text-blue-600" />
                          Bucket 2: Dividend Income (Ongoing)
                        </h3>
                        <p className="text-sm mb-3">
                          This is the core engine: your dividend-paying stocks and ETFs. Dividends flow into
                          your checking account monthly, replenishing Bucket 1 as you spend from it.
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Dividend growth stocks (SCHD, JNJ, PG, PEP, ABBV)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>High-yield REITs (O, VICI, WPC, STAG)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Utilities (DUK, SO, NEE) and MLPs (EPD)</span>
                          </li>
                        </ul>
                        <p className="text-sm mt-3 font-semibold">Target: $1.2M-$1.5M generating $55K-$65K/year</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-6 w-6 text-purple-600" />
                          Bucket 3: Growth Reserve (Long-Term)
                        </h3>
                        <p className="text-sm mb-3">
                          A smaller allocation to growth-oriented dividend stocks that will fuel future income
                          increases. These have lower current yields but 10-15% dividend growth rates.
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Dividend growth leaders (MSFT, V, UNH, COST, BLK)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Growth ETFs (DGRO, VIG)</span>
                          </li>
                        </ul>
                        <p className="text-sm mt-3 font-semibold">Target: $200K-$300K (reinvest dividends here for 5-10 years)</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Tax Optimization */}
                <section id="tax-optimization">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Tax Optimization for Dividend Income
                  </h2>
                  <p>
                    Smart account placement can save you thousands in taxes annually. Here is where to hold
                    different types of dividend investments.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Investment Type</th>
                          <th className="border p-3 text-center">Best Account</th>
                          <th className="border p-3 text-center">Tax Treatment</th>
                          <th className="border p-3 text-center">Annual Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">REITs (O, VICI, WPC)</td>
                          <td className="border p-3 text-center font-bold text-green-600">Roth IRA</td>
                          <td className="border p-3 text-center">Ordinary income (up to 37%)</td>
                          <td className="border p-3 text-center">$2,000-$5,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BDCs (ARCC, MAIN)</td>
                          <td className="border p-3 text-center font-bold text-green-600">Roth IRA</td>
                          <td className="border p-3 text-center">Ordinary income (up to 37%)</td>
                          <td className="border p-3 text-center">$1,500-$3,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Growth (JNJ, PG)</td>
                          <td className="border p-3 text-center font-bold text-blue-600">Taxable</td>
                          <td className="border p-3 text-center">Qualified (0-20%)</td>
                          <td className="border p-3 text-center">Already low tax</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">MLPs (EPD, ET)</td>
                          <td className="border p-3 text-center font-bold text-blue-600">Taxable</td>
                          <td className="border p-3 text-center">Return of capital (deferred)</td>
                          <td className="border p-3 text-center">Natural tax advantage</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">High-Yield ETFs (JEPI)</td>
                          <td className="border p-3 text-center font-bold text-purple-600">Traditional IRA</td>
                          <td className="border p-3 text-center">Mixed (ordinary + qualified)</td>
                          <td className="border p-3 text-center">$1,000-$2,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Key tip:</strong> A married couple filing jointly can earn up to $94,050 in qualified dividends at the 0% federal tax rate in 2026. If your only income is qualified dividends plus Social Security, you may owe very little in federal taxes.</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-red-600" />
                    5 Costly Mistakes Dividend Retirees Make
                  </h2>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">1. Chasing Yield Above 8%</h3>
                        <p className="text-sm mb-0">
                          Ultra-high yields (8%+) are often a sign of distress. The company may be about to cut the
                          dividend. Stick to 3-6% yields from quality companies. If a stock yields 10%+, the market
                          is pricing in a cut. In 2023, Lumen Technologies (LUMN) yielded 12% before slashing 100%.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">2. Over-Concentrating in One Sector</h3>
                        <p className="text-sm mb-0">
                          Many retirees load up on utilities and REITs because of high yields. But when interest rates
                          rise, these sectors drop 15-25%. Cap any single sector at 25% of your portfolio. Diversify
                          across healthcare, consumer staples, financials, industrials, and technology.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">3. Ignoring Dividend Growth</h3>
                        <p className="text-sm mb-0">
                          A 3% yield growing 10% per year beats a 6% yield growing 0% within 8 years. And after
                          20 years, the growth stock yields 20% on your original cost vs the flat 6%. Always
                          allocate at least 40% to dividend growers.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">4. No Cash Buffer</h3>
                        <p className="text-sm mb-0">
                          Even dividend income can temporarily decline during severe recessions. Keep 12-24 months
                          of expenses in cash or money market funds. This prevents panic selling if a few companies
                          cut dividends simultaneously.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">5. Holding REITs in Taxable Accounts</h3>
                        <p className="text-sm mb-0">
                          REIT dividends are taxed as ordinary income (up to 37%), not the favorable qualified
                          dividend rate (0-20%). Always hold REITs in Roth IRAs or Traditional IRAs. This alone
                          can save $3,000-$5,000 per year in taxes on a typical retirement portfolio.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How much dividend income can I expect from a $1 million portfolio?</h3>
                        <p className="text-sm mb-0">
                          At a 3.5% blended yield: $35,000/year. At 4.5% yield: $45,000/year. At 5.5% yield: $55,000/year.
                          Most retirees should target 4-4.5% for the best balance of income and safety. With 5%
                          annual dividend growth, your $45K income becomes $73K by year 10.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Should I stop reinvesting dividends when I retire?</h3>
                        <p className="text-sm mb-0">
                          Yes, for the income you need to live on. Turn off DRIP on your income-generating holdings
                          and let dividends flow to your cash account. However, consider keeping DRIP enabled on
                          your growth bucket (Bucket 3) to continue compounding for future income growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What happens to dividend income during a recession?</h3>
                        <p className="text-sm mb-0">
                          During the 2008 financial crisis, S&P 500 dividends declined about 23%. During COVID 2020,
                          they dropped only 1.5%. Dividend Aristocrats fared much better: only 5% cut during COVID.
                          A diversified portfolio of quality dividend stocks might see 5-10% income decline during a
                          severe recession -- which your cash buffer handles easily.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How do I create monthly dividend income?</h3>
                        <p className="text-sm mb-0">
                          Stagger your holdings across different payment schedules. Most stocks pay quarterly in
                          Jan/Apr/Jul/Oct, Feb/May/Aug/Nov, or Mar/Jun/Sep/Dec. By holding stocks from each group,
                          you receive dividends every month. REITs like Realty Income (O) pay monthly natively.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Plan Your Retirement Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to model your retirement income, project dividend growth,
                        and determine the optimal portfolio size for your goals.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Target className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Retirement Dividend Portfolios</h2>
                  <p>
                    Choose a broker with free DRIP, zero commissions, IRA/Roth IRA options, and strong retirement planning tools.
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
                      How Much Do You Need to Retire on Dividends Alone?
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Retirement: 15 Safe Picks
                    </Link>
                    <Link href="/blog/how-to-create-monthly-dividend-income" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Create Monthly Dividend Income
                    </Link>
                    <Link href="/blog/4-percent-rule-vs-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      4% Rule vs Dividend Investing: Which Wins?
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
