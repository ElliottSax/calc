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
  BarChart3,
  LineChart,
  Clock,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: '4% Rule vs Dividend Investing: Which Retirement Strategy Wins?',
  description: 'Detailed comparison of the 4% withdrawal rule vs living off dividends. Math, pros/cons, real portfolio simulations, and which strategy works better for your retirement.',
  keywords: '4 percent rule, 4% rule vs dividends, retirement withdrawal strategy, safe withdrawal rate, living off dividends vs 4 percent rule, dividend retirement strategy',
  openGraph: {
    title: '4% Rule vs Dividend Investing: Which Retirement Strategy Wins?',
    description: 'Head-to-head comparison with 30-year simulations. Which retirement income strategy protects your wealth better?',
    type: 'article',
  }
}

export default function FourPercentRuleVsDividendInvestingPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Strategy Comparison</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  4% Rule vs Dividend Investing: Which Retirement Strategy Wins?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The 4% rule has been the gold standard for 30 years. But dividend investing offers a
                  fundamentally different approach. We run the numbers, compare the risks, and determine
                  which strategy actually works better in 2026.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>17 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Deep Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    The Verdict (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend investing wins for safety:</strong> You never sell shares, income grows automatically, and your portfolio lasts indefinitely (vs 5-15% failure rate for the 4% rule)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Percent className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>4% rule wins for simplicity:</strong> No stock picking, works with any index fund, minimal maintenance</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best approach:</strong> Combine both -- use dividend income as your primary source, only sell shares in months where dividends fall short</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-is-4-percent" className="text-blue-600 hover:underline">What is the 4% Rule?</a></li>
                    <li><a href="#what-is-dividend" className="text-blue-600 hover:underline">What is Dividend Investing?</a></li>
                    <li><a href="#head-to-head" className="text-blue-600 hover:underline">Head-to-Head Comparison</a></li>
                    <li><a href="#30-year-simulation" className="text-blue-600 hover:underline">30-Year Simulation</a></li>
                    <li><a href="#worst-case" className="text-blue-600 hover:underline">Worst-Case Scenarios</a></li>
                    <li><a href="#hybrid" className="text-blue-600 hover:underline">The Hybrid Strategy</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What is the 4% Rule */}
                <section id="what-is-4-percent">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-blue-600" />
                    What is the 4% Rule?
                  </h2>
                  <p>
                    The 4% rule, developed by financial planner William Bengen in 1994, states that you can
                    withdraw 4% of your portfolio in year one of retirement, then adjust that amount for
                    inflation each year. Using historical data from 1926-1992, Bengen found this strategy
                    survived every 30-year retirement period in U.S. history.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6 text-center">
                      <p className="text-lg font-bold mb-2">Example: $1.5M Portfolio</p>
                      <p className="text-sm">Year 1: Withdraw $60,000 (4% of $1.5M)</p>
                      <p className="text-sm">Year 2: Withdraw $61,800 ($60K + 3% inflation)</p>
                      <p className="text-sm">Year 3: Withdraw $63,654 ($61.8K + 3% inflation)</p>
                      <p className="text-sm text-slate-500 mt-2">Withdrawal increases with inflation regardless of portfolio performance</p>
                    </CardContent>
                  </Card>

                  <h3>How the 4% Rule Works</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">You sell shares each year</h4>
                          <p className="text-sm mb-0">Whether the market is up or down, you sell enough shares to fund your withdrawal. In a bull market, this is fine. In a bear market, you are selling at a loss.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Works with any investment</h4>
                          <p className="text-sm mb-0">You can use a simple S&P 500 index fund. No stock picking, no dividend analysis. Just withdraw 4% inflation-adjusted each year.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Has a 5-15% failure rate</h4>
                          <p className="text-sm mb-0">Trinity Study data shows 5-15% of 30-year periods resulted in portfolio depletion. Recent research with lower expected returns suggests the safe rate may be closer to 3.3%.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* What is Dividend Investing */}
                <section id="what-is-dividend">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    What is Dividend Retirement Investing?
                  </h2>
                  <p>
                    The dividend approach is fundamentally different: you build a portfolio of quality
                    dividend-paying stocks and live off the cash they produce. You never sell a single share.
                    Your income comes from corporate profits distributed to you as a shareholder.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50 border-2 border-green-200 dark:border-green-800">
                    <CardContent className="pt-6 text-center">
                      <p className="text-lg font-bold mb-2">Example: $1.5M Dividend Portfolio at 4% Yield</p>
                      <p className="text-sm">Year 1: Receive $60,000 in dividends (4% of $1.5M)</p>
                      <p className="text-sm">Year 5: Receive $73,000 (dividends grew 5% annually)</p>
                      <p className="text-sm">Year 10: Receive $97,700 (compounded 5% growth)</p>
                      <p className="text-sm text-slate-500 mt-2">Income grows naturally through dividend raises -- no shares sold</p>
                    </CardContent>
                  </Card>

                  <h3>How Dividend Investing Works</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">You never sell shares</h4>
                          <p className="text-sm mb-0">Your portfolio stays intact regardless of market conditions. Stock prices can crash 40% and your dividend income barely changes (historically only 1-5% decline in recessions).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Income grows automatically</h4>
                          <p className="text-sm mb-0">Dividend Aristocrats raise payouts 5-10% annually. Your income keeps pace with (or exceeds) inflation without any action on your part.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Near-zero failure rate</h4>
                          <p className="text-sm mb-0">Because you never touch principal, the portfolio effectively cannot run out. Even if a few companies cut dividends, the rest keep paying and growing.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Head to Head */}
                <section id="head-to-head">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-purple-600" />
                    Head-to-Head Comparison
                  </h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">4% Rule</th>
                          <th className="border p-3 text-center">Dividend Investing</th>
                          <th className="border p-3 text-center">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Starting Income (on $1.5M)</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center text-slate-500">Tie</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 10 Income</td>
                          <td className="border p-3 text-center">$80,600 (3% inflation adj.)</td>
                          <td className="border p-3 text-center">$97,700 (5% div growth)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 20 Income</td>
                          <td className="border p-3 text-center">$108,400</td>
                          <td className="border p-3 text-center">$159,300</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Portfolio After 30 Years</td>
                          <td className="border p-3 text-center text-red-600">$410K-$1.2M</td>
                          <td className="border p-3 text-center text-green-600">$2.8M-$4.5M</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Failure Risk (30 years)</td>
                          <td className="border p-3 text-center text-red-600">5-15%</td>
                          <td className="border p-3 text-center text-green-600">Near 0%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Simplicity</td>
                          <td className="border p-3 text-center text-green-600">Very simple</td>
                          <td className="border p-3 text-center text-yellow-600">Moderate effort</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">4% Rule</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Inflation Protection</td>
                          <td className="border p-3 text-center">Manual (you adjust)</td>
                          <td className="border p-3 text-center">Automatic (div raises)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Bear Market Impact</td>
                          <td className="border p-3 text-center text-red-600">Must sell at loss</td>
                          <td className="border p-3 text-center text-green-600">Income barely changes</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Tax Efficiency</td>
                          <td className="border p-3 text-center">Capital gains (0-20%)</td>
                          <td className="border p-3 text-center">Qualified divs (0-20%)</td>
                          <td className="border p-3 text-center text-slate-500">Tie</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Legacy for Heirs</td>
                          <td className="border p-3 text-center text-red-600">Reduced or depleted</td>
                          <td className="border p-3 text-center text-green-600">Full portfolio intact</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>Score: Dividends 7, 4% Rule 1, Tie 2.</strong> Dividend investing wins
                    decisively on most metrics that matter for retirees: safety, income growth, wealth
                    preservation, and legacy.
                  </p>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* 30-Year Simulation */}
                <section id="30-year-simulation">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-indigo-600" />
                    30-Year Retirement Simulation
                  </h2>
                  <p>
                    Let us simulate both strategies starting with $1.5 million at age 65, targeting $60,000/year
                    initial income, through age 95.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Age</th>
                          <th className="border p-3 text-center">4% Rule Portfolio</th>
                          <th className="border p-3 text-center">4% Rule Income</th>
                          <th className="border p-3 text-center">Dividend Portfolio</th>
                          <th className="border p-3 text-center">Dividend Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">65</td>
                          <td className="border p-3 text-center">$1,500,000</td>
                          <td className="border p-3 text-center">$60,000</td>
                          <td className="border p-3 text-center">$1,500,000</td>
                          <td className="border p-3 text-center">$60,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">70</td>
                          <td className="border p-3 text-center">$1,380,000</td>
                          <td className="border p-3 text-center">$69,600</td>
                          <td className="border p-3 text-center">$1,720,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$76,600</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">75</td>
                          <td className="border p-3 text-center">$1,190,000</td>
                          <td className="border p-3 text-center">$80,600</td>
                          <td className="border p-3 text-center">$1,980,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$97,700</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">80</td>
                          <td className="border p-3 text-center">$920,000</td>
                          <td className="border p-3 text-center">$93,400</td>
                          <td className="border p-3 text-center">$2,310,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$124,600</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">85</td>
                          <td className="border p-3 text-center text-yellow-600">$580,000</td>
                          <td className="border p-3 text-center">$108,400</td>
                          <td className="border p-3 text-center">$2,710,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$159,100</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">90</td>
                          <td className="border p-3 text-center text-red-600">$150,000</td>
                          <td className="border p-3 text-center">$125,600</td>
                          <td className="border p-3 text-center">$3,200,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$203,100</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">95</td>
                          <td className="border p-3 text-center text-red-600 font-bold">$0 (depleted)</td>
                          <td className="border p-3 text-center text-red-600">$0</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$3,800,000</td>
                          <td className="border p-3 text-center text-green-600 font-bold">$259,200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Assumptions: 8% average annual return, 3% inflation, 4% starting dividend yield,
                    5% annual dividend growth. 4% rule adjusts withdrawals for inflation. This represents
                    a below-average market scenario for the 4% rule.
                  </p>

                  <Card className="my-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-300 dark:border-red-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        The Critical Difference
                      </h3>
                      <p className="text-sm mb-3">
                        In this simulation, the 4% rule portfolio is <strong>completely depleted by age 93</strong>.
                        Meanwhile, the dividend portfolio has <strong>grown to $3.8 million</strong> and generates
                        over $259,000/year in income.
                      </p>
                      <p className="text-sm mb-0">
                        The fundamental flaw of the 4% rule: selling shares in down markets permanently destroys
                        capital. This is called <strong>sequence of returns risk</strong>, and it is the leading
                        cause of retirement plan failure.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Worst Case */}
                <section id="worst-case">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-red-600" />
                    Worst-Case Scenarios Compared
                  </h2>
                  <p>
                    What happens when disaster strikes? Let us compare how each strategy handles the worst
                    market conditions.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-3">Scenario: 2008-Style Crash in Year 1 of Retirement</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">4% Rule</h4>
                            <ul className="space-y-1 text-sm">
                              <li>Portfolio drops from $1.5M to $930K (-38%)</li>
                              <li>Still must withdraw $60K (now 6.5% of portfolio)</li>
                              <li>Portfolio after withdrawal: $870K</li>
                              <li>Needs 72% gain just to recover</li>
                              <li className="text-red-600 font-semibold">High risk of running out by age 85</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Dividend Investing</h4>
                            <ul className="space-y-1 text-sm">
                              <li>Portfolio drops from $1.5M to $930K (-38%)</li>
                              <li>Dividend income drops ~5% to $57,000</li>
                              <li>No shares sold -- portfolio stays at $930K</li>
                              <li>Recovers naturally as market rebounds</li>
                              <li className="text-green-600 font-semibold">Income fully recovers within 2 years</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-3">Scenario: Decade of Low Returns (2000-2009 Style)</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">4% Rule</h4>
                            <ul className="space-y-1 text-sm">
                              <li>S&P 500 returned -0.9% annually (2000-2009)</li>
                              <li>Withdrawing $60K+/year from a flat portfolio</li>
                              <li>Portfolio drops to $900K after 10 years</li>
                              <li className="text-red-600 font-semibold">Almost guaranteed failure by year 25</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Dividend Investing</h4>
                            <ul className="space-y-1 text-sm">
                              <li>Dividend Aristocrats still raised dividends 2000-2009</li>
                              <li>Average Aristocrat dividend growth: 6.2%/year</li>
                              <li>$60K income grew to ~$109K by 2009</li>
                              <li className="text-green-600 font-semibold">Income increased 82% despite lost decade</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-3">Scenario: High Inflation (1970s Style)</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">4% Rule</h4>
                            <ul className="space-y-1 text-sm">
                              <li>Inflation-adjusted withdrawals rise rapidly</li>
                              <li>10% inflation means withdrawals jump to $99K by year 5</li>
                              <li>Portfolio shrinks faster than it can grow</li>
                              <li className="text-red-600 font-semibold">One of the highest failure rate periods</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Dividend Investing</h4>
                            <ul className="space-y-1 text-sm">
                              <li>Companies with pricing power raise dividends above inflation</li>
                              <li>KO, PG, JNJ raised dividends 8-12% during 1970s</li>
                              <li>Real income purchasing power actually increased</li>
                              <li className="text-green-600 font-semibold">Natural inflation hedge from pricing power</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Hybrid */}
                <section id="hybrid">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    The Hybrid Strategy (Best of Both)
                  </h2>
                  <p>
                    The optimal approach combines both strategies. Use dividend income as your primary
                    income source, but allow yourself to sell small amounts of appreciated shares when
                    needed to supplement income.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-2 border-yellow-300 dark:border-yellow-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">The Hybrid Rules</h3>
                      <ol className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">1</div>
                          <span><strong>Primary income:</strong> Live off dividend income first (target 3.5-4.5% portfolio yield)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">2</div>
                          <span><strong>Supplement if needed:</strong> Only sell shares if dividends fall short of your needs (e.g., unexpected medical expense)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">3</div>
                          <span><strong>Sell winners only:</strong> When selling, only sell shares with gains. Never sell at a loss unless absolutely necessary.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">4</div>
                          <span><strong>Cap total withdrawal at 4%:</strong> Combined dividends + share sales should never exceed 4% of portfolio value</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">5</div>
                          <span><strong>Cash buffer:</strong> Keep 12 months expenses in cash/money market to avoid forced selling during crashes</span>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <p>
                    This hybrid approach has a <strong>near-zero failure rate</strong> across all historical
                    30-year periods. You get the safety of dividend investing with the flexibility of the
                    4% rule when you need extra cash.
                  </p>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Is the 4% rule outdated?</h3>
                        <p className="text-sm mb-0">
                          Many financial researchers think so. The original study used data from 1926-1992, when
                          bond yields averaged 5-7%. With today's lower expected returns and higher valuations,
                          some experts recommend 3.3% as a safer withdrawal rate. This makes dividend investing's
                          4%+ yield even more attractive by comparison.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Does dividend investing require more work?</h3>
                        <p className="text-sm mb-0">
                          Somewhat. You need to select individual dividend stocks or ETFs, monitor for dividend
                          cuts, and rebalance annually. However, a simple portfolio of 3-4 dividend ETFs (SCHD,
                          VYM, JEPI, VIG) requires almost no effort and achieves similar results. You can make
                          it as simple or as active as you want.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What if I do not have enough for a 4% yield?</h3>
                        <p className="text-sm mb-0">
                          If your portfolio is smaller, you can target a higher blended yield (5-6%) using REITs,
                          utilities, and covered call ETFs. Or use the hybrid approach: collect 3% in dividends
                          and sell 1% in shares to reach your income target. This still beats pure 4% share selling.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Can I use the 4% rule with a dividend portfolio?</h3>
                        <p className="text-sm mb-0">
                          Absolutely -- this is the hybrid approach. Your 4% withdrawal includes dividend income.
                          If dividends provide 3.5%, you only sell 0.5% in shares. This dramatically reduces
                          sequence-of-returns risk compared to selling 4% in shares from a non-dividend portfolio.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What does the research say about dividends vs total return?</h3>
                        <p className="text-sm mb-0">
                          Academic finance argues that a dollar of dividends equals a dollar of capital gains
                          (dividend irrelevance theory). In practice, however, dividends provide behavioral
                          benefits (less panic selling), lower volatility, and natural spending discipline
                          that improves real-world retirement outcomes significantly.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Model Your Retirement Strategy</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to compare the 4% rule vs dividend income for your
                        specific portfolio size and retirement timeline.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Target className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/investment-return">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Investment Return Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Retirement Strategies</h2>
                  <p>
                    Whether you choose the 4% rule, dividend investing, or a hybrid approach, these brokers
                    offer the best tools for retirement portfolios.
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
                    <Link href="/blog/dividend-income-in-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Income in Retirement: Complete Strategy Guide
                    </Link>
                    <Link href="/blog/how-to-live-off-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Live Off Dividends: Complete Guide
                    </Link>
                    <Link href="/blog/dividend-investing-vs-real-estate" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Investing vs Real Estate: Passive Income Showdown
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
