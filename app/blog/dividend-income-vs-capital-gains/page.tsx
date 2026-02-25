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
  XCircle,
  ArrowRight,
  BarChart3,
  PieChart,
  Calculator,
  Shield,
  TrendingDown,
  Percent
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Income vs Capital Gains Tax: Complete 2026 Comparison Guide',
  description: 'Comprehensive comparison of dividends vs capital gains tax rates. Learn which strategy is more tax-efficient, see tax rate tables, examples at different income levels, and strategic insights.',
  keywords: 'dividends vs capital gains tax, dividend tax rates, capital gains tax rates, qualified dividends, tax-efficient investing, dividend income tax, investment tax comparison',
  openGraph: {
    title: 'Dividend Income vs Capital Gains Tax: Which Is More Tax-Efficient?',
    description: 'Side-by-side tax comparison with rates, examples, and strategic insights to optimize your investment tax strategy.',
    type: 'article',
  }
}

export default function DividendIncomeVsCapitalGainsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Tax Strategy Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Income vs. Capital Gains Tax: Which Is More Tax-Efficient?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The complete 2026 tax comparison guide: qualified dividends vs long-term capital gains.
                  Discover tax rate differences, see real examples at every income level, and learn which
                  strategy saves you the most money.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Tax Expert Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Tax Rates Are Identical:</strong> Qualified dividends and long-term capital gains both taxed at 0%, 15%, or 20% depending on income</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividends Win For:</strong> Immediate tax-efficient income without selling shares - perfect for retirees and passive income seekers</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Capital Gains Win For:</strong> Tax control (choose when to sell), potential 0% tax harvesting, and wealth accumulation phase</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Strategy:</strong> Combine both - qualified dividends for income + strategic capital gains harvesting for tax optimization</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#tax-basics" className="text-blue-600 hover:underline">Tax Treatment Basics</a></li>
                    <li><a href="#dividend-taxes" className="text-blue-600 hover:underline">Dividend Tax Rates</a></li>
                    <li><a href="#capital-gains-taxes" className="text-blue-600 hover:underline">Capital Gains Tax Rates</a></li>
                    <li><a href="#side-by-side" className="text-blue-600 hover:underline">Side-by-Side Comparison</a></li>
                    <li><a href="#income-examples" className="text-blue-600 hover:underline">Examples by Income Level</a></li>
                    <li><a href="#strategic-insights" className="text-blue-600 hover:underline">Strategic Tax Insights</a></li>
                    <li><a href="#when-dividends-better" className="text-blue-600 hover:underline">When Dividends Win</a></li>
                    <li><a href="#when-capital-gains-better" className="text-blue-600 hover:underline">When Capital Gains Win</a></li>
                    <li><a href="#total-return-comparison" className="text-blue-600 hover:underline">Total Return Analysis</a></li>
                    <li><a href="#optimization-strategies" className="text-blue-600 hover:underline">Tax Optimization Strategies</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Tax Basics Section */}
                <section id="tax-basics">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    Understanding Investment Tax Treatment
                  </h2>
                  <p>
                    When you invest in stocks, you can make money two ways: dividends and capital gains.
                    Both are taxed, but understanding the nuances can save you thousands of dollars annually.
                  </p>

                  <h3>What Are Dividends?</h3>
                  <p>
                    Dividends are cash payments companies distribute to shareholders from profits. You receive
                    them without selling anything - just for owning the stock. However, not all dividends are
                    taxed equally.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3">Two Types of Dividends:</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-400">Qualified Dividends (Tax-Advantaged)</h5>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Taxed at long-term capital gains rates (0%, 15%, or 20%)</li>
                            <li>• Must hold stock 60+ days during 121-day period around ex-dividend date</li>
                            <li>• Paid by U.S. corporations and qualified foreign companies</li>
                            <li>• Examples: Apple, Microsoft, Johnson & Johnson dividends</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-700 dark:text-red-400">Ordinary (Non-Qualified) Dividends</h5>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Taxed at ordinary income rates (10% to 37%)</li>
                            <li>• REIT dividends, money market funds, short-term holdings</li>
                            <li>• Can result in 2x higher taxes than qualified dividends</li>
                            <li>• Examples: Most REIT payouts, employee stock plan dividends</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>What Are Capital Gains?</h3>
                  <p>
                    Capital gains are profits from selling an investment for more than you paid. The tax
                    treatment depends entirely on how long you held the investment.
                  </p>

                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3">Two Types of Capital Gains:</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-400">Long-Term Capital Gains (Held 1+ Year)</h5>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Taxed at preferential rates (0%, 15%, or 20%)</li>
                            <li>• Must hold investment longer than 365 days</li>
                            <li>• Same tax treatment as qualified dividends</li>
                            <li>• Example: Buy stock Jan 1, 2025 → Sell Jan 2, 2026 = long-term</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-700 dark:text-red-400">Short-Term Capital Gains (Held &lt; 1 Year)</h5>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Taxed at ordinary income rates (10% to 37%)</li>
                            <li>• Applies to investments held 365 days or less</li>
                            <li>• Highest possible tax burden on investment gains</li>
                            <li>• Example: Buy stock Jan 1, 2025 → Sell Dec 1, 2025 = short-term</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-300 dark:border-yellow-700">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Key Insight</h4>
                          <p className="text-sm mb-0">
                            For this comparison, we're focusing on <strong>qualified dividends vs long-term capital gains</strong> -
                            the two tax-advantaged strategies. Short-term gains and ordinary dividends are both
                            taxed at much higher ordinary income rates and should generally be avoided.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dividend Tax Rates Section */}
                <section id="dividend-taxes">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Dividend Tax Rates (2026)
                  </h2>
                  <p>
                    Qualified dividends are taxed at the same preferential rates as long-term capital gains.
                    Your tax rate depends on your taxable income and filing status.
                  </p>

                  <h3>2026 Qualified Dividend Tax Brackets</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-100 dark:bg-green-900">
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Single Filers</th>
                          <th className="border p-3 text-left">Married Filing Jointly</th>
                          <th className="border p-3 text-left">Head of Household</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-bold text-green-600">0%</td>
                          <td className="border p-3">Up to $47,025</td>
                          <td className="border p-3">Up to $94,050</td>
                          <td className="border p-3">Up to $63,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-bold text-yellow-600">15%</td>
                          <td className="border p-3">$47,026 - $518,900</td>
                          <td className="border p-3">$94,051 - $583,750</td>
                          <td className="border p-3">$63,001 - $551,350</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-bold text-red-600">20%</td>
                          <td className="border p-3">Over $518,900</td>
                          <td className="border p-3">Over $583,750</td>
                          <td className="border p-3">Over $551,350</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        Additional Medicare Surtax
                      </h4>
                      <p className="text-sm mb-2">
                        High earners pay an additional 3.8% Net Investment Income Tax (NIIT) on dividend income:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Single:</strong> Kicks in at $200,000 Modified AGI</li>
                        <li>• <strong>Married Filing Jointly:</strong> Kicks in at $250,000 Modified AGI</li>
                        <li>• <strong>Effective Top Rate:</strong> 20% + 3.8% = 23.8% for highest earners</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>Qualified Dividend Examples</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 1: Low Income Investor</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $40,000 (single filer)</p>
                          <p><strong>Qualified Dividends:</strong> $2,000</p>
                          <p><strong>Tax Rate:</strong> 0%</p>
                          <p className="text-green-700 dark:text-green-400 font-bold">
                            Tax Owed: $0
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Below $47,025 threshold = zero dividend tax
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-yellow-50 dark:bg-yellow-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 2: Middle Income Investor</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $120,000 (married filing jointly)</p>
                          <p><strong>Qualified Dividends:</strong> $8,000</p>
                          <p><strong>Tax Rate:</strong> 15%</p>
                          <p className="text-yellow-700 dark:text-yellow-400 font-bold">
                            Tax Owed: $1,200
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Within 15% bracket ($94K-$584K)
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50 dark:bg-orange-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 3: High Income Investor</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $600,000 (married filing jointly)</p>
                          <p><strong>Qualified Dividends:</strong> $25,000</p>
                          <p><strong>Tax Rate:</strong> 20% + 3.8% NIIT</p>
                          <p className="text-orange-700 dark:text-orange-400 font-bold">
                            Tax Owed: $5,950 (23.8%)
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Above $583,750 + Medicare surtax applies
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 4: REIT Income (Ordinary)</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $120,000 (married filing jointly)</p>
                          <p><strong>REIT Dividends:</strong> $8,000</p>
                          <p><strong>Tax Rate:</strong> 22% (ordinary income)</p>
                          <p className="text-red-700 dark:text-red-400 font-bold">
                            Tax Owed: $1,760
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            REITs = ordinary dividends = higher taxes
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Capital Gains Tax Rates Section */}
                <section id="capital-gains-taxes">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-purple-600" />
                    Capital Gains Tax Rates (2026)
                  </h2>
                  <p>
                    Long-term capital gains (investments held more than one year) use the exact same tax
                    brackets as qualified dividends. This is the key insight most investors miss.
                  </p>

                  <h3>2026 Long-Term Capital Gains Tax Brackets</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-purple-100 dark:bg-purple-900">
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Single Filers</th>
                          <th className="border p-3 text-left">Married Filing Jointly</th>
                          <th className="border p-3 text-left">Head of Household</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-bold text-green-600">0%</td>
                          <td className="border p-3">Up to $47,025</td>
                          <td className="border p-3">Up to $94,050</td>
                          <td className="border p-3">Up to $63,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-bold text-yellow-600">15%</td>
                          <td className="border p-3">$47,026 - $518,900</td>
                          <td className="border p-3">$94,051 - $583,750</td>
                          <td className="border p-3">$63,001 - $551,350</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-bold text-red-600">20%</td>
                          <td className="border p-3">Over $518,900</td>
                          <td className="border p-3">Over $583,750</td>
                          <td className="border p-3">Over $551,350</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Notice Something?</h4>
                          <p className="text-sm mb-0">
                            These brackets are <strong>identical</strong> to qualified dividend brackets. Both
                            qualified dividends and long-term capital gains receive the same preferential tax treatment.
                            The key difference isn't the tax rate - it's when and how you realize the income.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Long-Term Capital Gains Examples</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 1: First-Time Investor</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $35,000 (single filer)</p>
                          <p><strong>Capital Gains:</strong> $5,000 (held 2 years)</p>
                          <p><strong>Tax Rate:</strong> 0%</p>
                          <p className="text-green-700 dark:text-green-400 font-bold">
                            Tax Owed: $0
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Total income $40K still under $47K threshold
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-yellow-50 dark:bg-yellow-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 2: Portfolio Rebalance</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $150,000 (married filing jointly)</p>
                          <p><strong>Capital Gains:</strong> $20,000 (held 18 months)</p>
                          <p><strong>Tax Rate:</strong> 15%</p>
                          <p className="text-yellow-700 dark:text-yellow-400 font-bold">
                            Tax Owed: $3,000
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Held long enough for preferential rate
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50 dark:bg-orange-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 3: Large Portfolio Sale</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $650,000 (married filing jointly)</p>
                          <p><strong>Capital Gains:</strong> $100,000 (held 3 years)</p>
                          <p><strong>Tax Rate:</strong> 20% + 3.8% NIIT</p>
                          <p className="text-orange-700 dark:text-orange-400 font-bold">
                            Tax Owed: $23,800 (23.8%)
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Above threshold + Medicare surtax
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Example 4: Day Trading (Short-Term)</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Income:</strong> $150,000 (married filing jointly)</p>
                          <p><strong>Capital Gains:</strong> $20,000 (held 6 months)</p>
                          <p><strong>Tax Rate:</strong> 22% (ordinary income)</p>
                          <p className="text-red-700 dark:text-red-400 font-bold">
                            Tax Owed: $4,400
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Short-term = 47% more tax than long-term!
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Side-by-Side Comparison */}
                <section id="side-by-side">
                  <h2>Side-by-Side Tax Comparison</h2>
                  <p>
                    Here's the comprehensive comparison showing tax rates are identical, but the strategies differ
                    in implementation, control, and optimization opportunities.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">Qualified Dividends</th>
                          <th className="border p-3 text-center">Long-Term Capital Gains</th>
                          <th className="border p-3 text-center">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Tax Rates</td>
                          <td className="border p-3 text-center">0%, 15%, 20%</td>
                          <td className="border p-3 text-center">0%, 15%, 20%</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Tie</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Holding Period</td>
                          <td className="border p-3 text-center">60 days (around ex-div)</td>
                          <td className="border p-3 text-center">1+ year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Tax Timing Control</td>
                          <td className="border p-3 text-center">None (auto-triggered)</td>
                          <td className="border p-3 text-center">Full (you choose when to sell)</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">Capital Gains</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Zero-Tax Opportunities</td>
                          <td className="border p-3 text-center">Limited (depends on income)</td>
                          <td className="border p-3 text-center">High (tax-loss harvesting)</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">Capital Gains</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Immediate Income</td>
                          <td className="border p-3 text-center">Yes (cash in hand)</td>
                          <td className="border p-3 text-center">No (must sell shares)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Keep Ownership</td>
                          <td className="border p-3 text-center">Yes (never sell)</td>
                          <td className="border p-3 text-center">No (must sell to realize)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Medicare Surtax (3.8%)</td>
                          <td className="border p-3 text-center">Yes (if income &gt; threshold)</td>
                          <td className="border p-3 text-center">Yes (if income &gt; threshold)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Tie</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Predictability</td>
                          <td className="border p-3 text-center">High (quarterly/monthly)</td>
                          <td className="border p-3 text-center">Low (market dependent)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Compounding Power</td>
                          <td className="border p-3 text-center">Moderate (if reinvested)</td>
                          <td className="border p-3 text-center">High (unrealized gains compound)</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">Capital Gains</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Estate Tax Step-Up</td>
                          <td className="border p-3 text-center">N/A (already paid)</td>
                          <td className="border p-3 text-center">Yes (heirs reset basis)</td>
                          <td className="border p-3 text-center text-purple-600 font-bold">Capital Gains</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Best For Retirees</td>
                          <td className="border p-3 text-center">Yes (passive income)</td>
                          <td className="border p-3 text-center">Partial (need to sell)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Income Level Examples */}
                <section id="income-examples">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-blue-600" />
                    Real Examples Across Income Levels
                  </h2>
                  <p>
                    Let's compare identical $10,000 returns from dividends vs capital gains at different income levels
                    to see the real-world tax impact.
                  </p>

                  <div className="space-y-6 my-6">
                    {/* Low Income */}
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                          Low Income: $40,000 Annual (Single Filer)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Qualified Dividends: $10,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $50,000</p>
                              <p>Tax Rate: 15% (just over 0% threshold)</p>
                              <p className="text-green-700 dark:text-green-400 font-bold text-base">
                                Tax Owed: $1,500
                              </p>
                              <p className="text-xs">After-tax income: $8,500</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Long-Term Capital Gains: $10,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $50,000</p>
                              <p>Tax Rate: 15% (just over 0% threshold)</p>
                              <p className="text-green-700 dark:text-green-400 font-bold text-base">
                                Tax Owed: $1,500
                              </p>
                              <p className="text-xs">After-tax gain: $8,500</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
                          <strong>Result:</strong> Identical tax treatment. However, with careful planning,
                          could keep total income under $47K for 0% tax on capital gains.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Middle Income */}
                    <Card className="bg-yellow-50 dark:bg-yellow-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <Percent className="h-6 w-6 text-yellow-600" />
                          Middle Income: $120,000 Annual (Married Filing Jointly)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Qualified Dividends: $10,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $130,000</p>
                              <p>Tax Rate: 15%</p>
                              <p className="text-yellow-700 dark:text-yellow-400 font-bold text-base">
                                Tax Owed: $1,500
                              </p>
                              <p className="text-xs">After-tax income: $8,500</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Long-Term Capital Gains: $10,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $130,000</p>
                              <p>Tax Rate: 15%</p>
                              <p className="text-yellow-700 dark:text-yellow-400 font-bold text-base">
                                Tax Owed: $1,500
                              </p>
                              <p className="text-xs">After-tax gain: $8,500</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
                          <strong>Result:</strong> Identical $1,500 tax. Capital gains offer more control -
                          could delay sale to lower-income year or harvest losses to offset.
                        </p>
                      </CardContent>
                    </Card>

                    {/* High Income */}
                    <Card className="bg-orange-50 dark:bg-orange-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <TrendingUp className="h-6 w-6 text-orange-600" />
                          High Income: $400,000 Annual (Married Filing Jointly)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Qualified Dividends: $10,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $410,000</p>
                              <p>Tax Rate: 15% + 3.8% NIIT</p>
                              <p className="text-orange-700 dark:text-orange-400 font-bold text-base">
                                Tax Owed: $1,880 (18.8%)
                              </p>
                              <p className="text-xs">After-tax income: $8,120</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Long-Term Capital Gains: $10,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $410,000</p>
                              <p>Tax Rate: 15% + 3.8% NIIT</p>
                              <p className="text-orange-700 dark:text-orange-400 font-bold text-base">
                                Tax Owed: $1,880 (18.8%)
                              </p>
                              <p className="text-xs">After-tax gain: $8,120</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
                          <strong>Result:</strong> Identical $1,880 tax including Medicare surtax. Both hit NIIT threshold.
                          Capital gains offer timing flexibility and potential tax-loss harvesting.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Very High Income */}
                    <Card className="bg-red-50 dark:bg-red-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <Award className="h-6 w-6 text-red-600" />
                          Very High Income: $700,000 Annual (Married Filing Jointly)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Qualified Dividends: $50,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $750,000</p>
                              <p>Tax Rate: 20% + 3.8% NIIT</p>
                              <p className="text-red-700 dark:text-red-400 font-bold text-base">
                                Tax Owed: $11,900 (23.8%)
                              </p>
                              <p className="text-xs">After-tax income: $38,100</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Long-Term Capital Gains: $50,000</h4>
                            <div className="space-y-1 text-sm">
                              <p>Total Income: $750,000</p>
                              <p>Tax Rate: 20% + 3.8% NIIT</p>
                              <p className="text-red-700 dark:text-red-400 font-bold text-base">
                                Tax Owed: $11,900 (23.8%)
                              </p>
                              <p className="text-xs">After-tax gain: $38,100</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
                          <strong>Result:</strong> Maximum 23.8% rate for both. At this level, capital gains strategy
                          offers charitable giving opportunities (donate appreciated shares), estate planning benefits
                          (step-up basis for heirs), and tax-loss harvesting to offset gains.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Strategic Insights */}
                <section id="strategic-insights">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-purple-600" />
                    Strategic Tax Insights
                  </h2>
                  <p>
                    Since the tax rates are identical, the winning strategy depends on your situation,
                    income level, and financial goals. Here are the key strategic considerations.
                  </p>

                  <h3>1. The Zero-Tax Bracket Opportunity</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>Both dividends and capital gains can be tax-free</strong> if your total taxable
                        income stays under $47,025 (single) or $94,050 (married). This is huge for:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Early retirees:</strong> Living off investments before Social Security kicks in</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Part-time workers:</strong> $30K salary + $15K dividends/gains = still 0% tax on $15K</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Gap year students:</strong> Living off capital gains tax-free</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm font-semibold text-green-700 dark:text-green-400">
                        Pro Tip: Capital gains give you MORE control here. You can choose exactly when to realize
                        gains to stay under the threshold. Dividends arrive whether you want them or not.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>2. Tax-Loss Harvesting Advantage (Capital Gains Only)</h3>
                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>Capital gains have a massive advantage: tax-loss harvesting.</strong> You can:
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Sell losing positions to offset capital gains (dollar-for-dollar)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Offset up to $3,000 of ordinary income per year</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Carry forward unused losses indefinitely</span>
                        </li>
                      </ul>
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Example:</h4>
                        <p className="text-sm">
                          • Stock A gain: +$20,000<br />
                          • Stock B loss: -$8,000<br />
                          • Taxable gain: Only $12,000 (saved $1,200-1,904 in taxes)<br />
                          • <strong>Dividends can't do this.</strong> Once paid, you owe taxes regardless.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>3. Estate Planning Benefits (Capital Gains Win)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>The step-up in basis at death</strong> is a massive advantage for capital gains:
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Your heirs inherit stock at current market value (stepped-up basis)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Lifetime unrealized capital gains disappear - never taxed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Heirs can immediately sell with zero capital gains tax</span>
                        </li>
                      </ul>
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Example:</h4>
                        <p className="text-sm">
                          You bought Apple stock in 2000 for $10,000. It's worth $500,000 at death.<br />
                          • <strong>With step-up:</strong> Heirs inherit at $500K basis. $490K gain never taxed!<br />
                          • <strong>Dividends over 24 years:</strong> Already taxed when received. No step-up benefit.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>4. Immediate Income Needs (Dividends Win)</h3>
                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>For retirees needing cash flow, dividends are psychologically easier:</strong>
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>No selling required:</strong> Cash arrives quarterly without touching principal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Predictable:</strong> Know exactly when and how much you'll receive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>No market timing risk:</strong> Get paid in down markets too</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Preserve ownership:</strong> Never reduce share count</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm">
                        While you could achieve the same by selling 2-3% of growth stocks annually, many
                        retirees find regular dividend checks more comforting and less stressful.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* When Dividends Win */}
                <section id="when-dividends-better">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    When Dividend Strategy Is Better
                  </h2>
                  <p>
                    Choose qualified dividend investing when these factors align with your situation:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Strategy Wins When You:</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Need Immediate, Predictable Income</h4>
                            <p className="text-sm mb-0">
                              Retirees, part-time workers, or anyone who needs regular cash flow without
                              selling shares. Dividends arrive like clockwork - quarterly or even monthly.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Want to Preserve Principal</h4>
                            <p className="text-sm mb-0">
                              Never reduce your share count. Your 100 shares stay 100 shares forever,
                              while still generating income. Perfect for legacy planning.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Prefer Set-It-And-Forget-It Simplicity</h4>
                            <p className="text-sm mb-0">
                              No decisions required. Buy quality dividend stocks, hold, collect checks.
                              No timing markets, no rebalancing, no selling stress.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Are in 0% or 15% Tax Bracket</h4>
                            <p className="text-sm mb-0">
                              Income under $518,900 (single) or $583,750 (married) = max 15% tax on dividends.
                              That's incredibly tax-efficient for regular income.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Value Income Over Total Return</h4>
                            <p className="text-sm mb-0">
                              You prioritize cash in hand over paper gains. A 4% dividend yield feels
                              more real than a 15% unrealized capital gain.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Want DRIP Automation</h4>
                            <p className="text-sm mb-0">
                              Dividend reinvestment plans (DRIPs) automatically compound your wealth.
                              No commissions, no decisions, exponential growth over decades.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Perfect Dividend Investor Profile</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-blue-50 dark:bg-blue-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Profile: Retired Engineer, Age 65</h4>
                        <div className="space-y-2 text-sm">
                          <p>• Portfolio: $800,000 in dividend stocks</p>
                          <p>• Yield: 4% = $32,000 annual income</p>
                          <p>• Tax: 15% = $4,800</p>
                          <p>• After-tax income: $27,200</p>
                          <p>• Social Security: $30,000</p>
                          <p>• <strong>Total: $57,200/year without selling a share</strong></p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Profile: Part-Time Teacher, Age 58</h4>
                        <div className="space-y-2 text-sm">
                          <p>• Salary: $35,000 (3 days/week)</p>
                          <p>• Portfolio: $400,000 dividend stocks</p>
                          <p>• Yield: 3.5% = $14,000 dividends</p>
                          <p>• Total income: $49,000</p>
                          <p>• Tax on dividends: 15% = $2,100</p>
                          <p>• <strong>Supplements income without touching principal</strong></p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* When Capital Gains Win */}
                <section id="when-capital-gains-better">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-purple-600" />
                    When Capital Gains Strategy Is Better
                  </h2>
                  <p>
                    Choose growth stock investing with strategic capital gains realization when these
                    factors align:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Capital Gains Strategy Wins When You:</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Are in Wealth Accumulation Phase</h4>
                            <p className="text-sm mb-0">
                              Don't need income now. Let gains compound untaxed for 10-40 years. A $100K
                              investment growing at 10% becomes $4.5 million in 40 years - never taxed until sold.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Want Maximum Tax Control</h4>
                            <p className="text-sm mb-0">
                              You decide when to realize gains. Retire early with low income? Sell shares at
                              0% tax. High-income year? Don't sell. Total control over your tax bill.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Can Use Tax-Loss Harvesting</h4>
                            <p className="text-sm mb-0">
                              Sophisticated strategy: sell losers to offset winners, save $5,000-20,000
                              annually in taxes. Dividends offer no equivalent strategy.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Are Planning for Estate Transfer</h4>
                            <p className="text-sm mb-0">
                              Step-up in basis at death = your lifetime gains never taxed. $1 million in
                              unrealized gains passes tax-free to heirs. Massive wealth transfer advantage.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Prefer Total Return Investing</h4>
                            <p className="text-sm mb-0">
                              Growth stocks like Apple, Microsoft, Amazon pay tiny dividends but deliver
                              15-25% annual returns. You're optimizing for wealth creation, not income.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Have Flexible Income Needs</h4>
                            <p className="text-sm mb-0">
                              Some years you need $30K, others $80K. Sell shares as needed. Dividends give
                              you the same amount whether you need it or not.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">Want Charitable Giving Benefits</h4>
                            <p className="text-sm mb-0">
                              Donate appreciated shares to charity: avoid capital gains tax + get fair
                              market value deduction. A $100K stock with $50K gain saves $11,900-23,800 in taxes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Perfect Capital Gains Investor Profile</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-purple-50 dark:bg-purple-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Profile: Software Engineer, Age 35</h4>
                        <div className="space-y-2 text-sm">
                          <p>• Salary: $180,000</p>
                          <p>• Portfolio: $300,000 in FAANG stocks</p>
                          <p>• Annual gains: 18% = $54,000 unrealized</p>
                          <p>• Tax on unrealized gains: $0</p>
                          <p>• 25 years to retirement</p>
                          <p>• <strong>$300K → $15.4M tax-deferred compounding</strong></p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-indigo-50 dark:bg-indigo-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Profile: Early Retiree, Age 50</h4>
                        <div className="space-y-2 text-sm">
                          <p>• Portfolio: $2 million in index funds</p>
                          <p>• Annual need: $60,000</p>
                          <p>• Strategy: Sell $70,588 in shares</p>
                          <p>• Basis: ~$35K, Gain: ~$35K</p>
                          <p>• Tax: 15% × $35K = $5,250</p>
                          <p>• <strong>Net: $65,338 after tax, control when to realize</strong></p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Total Return Comparison */}
                <section id="total-return-comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Total Return Comparison: Real Numbers
                  </h2>
                  <p>
                    Let's compare two portfolios over 30 years to see the real-world difference between
                    dividend income strategy vs capital gains growth strategy.
                  </p>

                  <h3>The Setup: $100,000 Initial Investment, 30 Years</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          Dividend Strategy
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Portfolio:</strong> High-quality dividend stocks</p>
                          <p><strong>Starting Yield:</strong> 4%</p>
                          <p><strong>Dividend Growth:</strong> 7% annually</p>
                          <p><strong>Price Appreciation:</strong> 5% annually</p>
                          <p><strong>Total Return:</strong> ~9% annually</p>
                          <p className="pt-2 border-t"><strong>Strategy:</strong> DRIP - reinvest all dividends</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 dark:bg-purple-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-purple-600" />
                          Capital Gains Strategy
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Portfolio:</strong> Growth stocks (S&P 500)</p>
                          <p><strong>Starting Yield:</strong> 1.5%</p>
                          <p><strong>Dividend Growth:</strong> 6% annually</p>
                          <p><strong>Price Appreciation:</strong> 8.5% annually</p>
                          <p><strong>Total Return:</strong> ~10% annually</p>
                          <p className="pt-2 border-t"><strong>Strategy:</strong> Buy and hold, minimal selling</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>After-Tax Results Over 30 Years</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Year</th>
                              <th className="border p-3 text-right">Dividend Portfolio</th>
                              <th className="border p-3 text-right">Growth Portfolio</th>
                              <th className="border p-3 text-right">Difference</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">Year 10</td>
                              <td className="border p-3 text-right">$214,358</td>
                              <td className="border p-3 text-right">$243,122</td>
                              <td className="border p-3 text-right text-purple-600">+$28,764</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Year 20</td>
                              <td className="border p-3 text-right">$453,870</td>
                              <td className="border p-3 text-right">$582,449</td>
                              <td className="border p-3 text-right text-purple-600">+$128,579</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">Year 30</td>
                              <td className="border p-3 text-right">$1,048,113</td>
                              <td className="border p-3 text-right">$1,621,370</td>
                              <td className="border p-3 text-right text-purple-600">+$573,257</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg">
                          <h5 className="font-bold mb-2">Dividend Portfolio Tax Burden</h5>
                          <p className="text-sm">Cumulative taxes paid: <strong>~$48,000</strong></p>
                          <p className="text-xs mt-1">Paid annually on dividends received (15% rate)</p>
                        </div>
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-lg">
                          <h5 className="font-bold mb-2">Growth Portfolio Tax Burden</h5>
                          <p className="text-sm">Cumulative taxes paid: <strong>~$0</strong></p>
                          <p className="text-xs mt-1">Pay only when sold (deferred compounding)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-300 dark:border-yellow-700">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Key Insight: Tax Deferral Advantage</h4>
                          <p className="text-sm mb-0">
                            The growth portfolio wins because <strong>tax deferral allows faster compounding</strong>.
                            The dividend portfolio paid $48,000 in taxes over 30 years that couldn't compound.
                            However, the dividend portfolio provides <strong>immediate income every year</strong> -
                            worth more than raw returns if you need cash flow.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Income Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Year 30 Annual Income: Dividend Strategy</h4>
                        <div className="space-y-2 text-sm">
                          <p>Portfolio value: $1,048,113</p>
                          <p>Yield grown to: ~7.6%</p>
                          <p className="text-green-700 dark:text-green-400 font-bold text-lg">
                            Annual dividends: $79,656
                          </p>
                          <p>Tax (15%): $11,948</p>
                          <p className="font-bold">After-tax income: $67,708/year</p>
                          <p className="text-xs">Without selling a single share</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 dark:bg-purple-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Year 30 Annual Income: Capital Gains Strategy</h4>
                        <div className="space-y-2 text-sm">
                          <p>Portfolio value: $1,621,370</p>
                          <p>4% withdrawal rate: $64,855</p>
                          <p className="text-purple-700 dark:text-purple-400 font-bold text-lg">
                            Sell shares worth: $64,855
                          </p>
                          <p>Basis: ~$32,428, Gain: ~$32,428</p>
                          <p>Tax (15% on gain): $4,864</p>
                          <p className="font-bold">After-tax income: $59,991/year</p>
                          <p className="text-xs">By selling ~4% of portfolio</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        The Verdict on Total Return
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Growth wins on wealth:</strong> $573,257 more after 30 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Dividends win on income:</strong> $67,708 vs $59,991 annual cash flow</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Tax burden is similar:</strong> Both strategies are tax-efficient at 15%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Best approach:</strong> Combine both - growth during accumulation, shift to dividends near retirement</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Optimization Strategies */}
                <section id="optimization-strategies">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-orange-600" />
                    Advanced Tax Optimization Strategies
                  </h2>
                  <p>
                    Now that you understand the fundamentals, here are sophisticated strategies to minimize
                    taxes on both dividends and capital gains.
                  </p>

                  <h3>1. Asset Location Strategy</h3>
                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>Where you hold investments matters as much as what you hold.</strong>
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <h5 className="font-bold text-sm mb-2 text-green-600">Traditional IRA / 401(k)</h5>
                          <p className="text-xs mb-2"><strong>Best for:</strong></p>
                          <ul className="text-xs space-y-1">
                            <li>• High-yield bonds</li>
                            <li>• REITs (ordinary dividends)</li>
                            <li>• Actively traded funds</li>
                            <li>• Short-term gains</li>
                          </ul>
                          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">
                            Tax-deferred growth, withdraw at lower retirement tax rate
                          </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <h5 className="font-bold text-sm mb-2 text-purple-600">Roth IRA</h5>
                          <p className="text-xs mb-2"><strong>Best for:</strong></p>
                          <ul className="text-xs space-y-1">
                            <li>• Growth stocks</li>
                            <li>• Long-term compounders</li>
                            <li>• High-growth potential</li>
                            <li>• Young investors</li>
                          </ul>
                          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">
                            Tax-free forever - maximize growth potential
                          </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <h5 className="font-bold text-sm mb-2 text-blue-600">Taxable Brokerage</h5>
                          <p className="text-xs mb-2"><strong>Best for:</strong></p>
                          <ul className="text-xs space-y-1">
                            <li>• Qualified dividend stocks</li>
                            <li>• Long-term index funds</li>
                            <li>• Tax-loss harvesting</li>
                            <li>• Step-up basis planning</li>
                          </ul>
                          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">
                            Max 15-20% tax, flexibility, estate planning
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>2. Tax Bracket Management</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Strategic Income Planning to Stay in 0% or 15% Bracket</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white dark:bg-slate-900 p-3 rounded-lg">
                          <p className="font-semibold mb-2">Early Retirement Years (Before RMDs):</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Roth conversions up to top of 15% bracket ($583,750 married)</li>
                            <li>• Realize capital gains in 0% bracket years ($94,050 married)</li>
                            <li>• Delay Social Security to keep income low</li>
                            <li>• Live off Roth withdrawals (tax-free) + 0% bracket gains</li>
                          </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-3 rounded-lg">
                          <p className="font-semibold mb-2">High Income Years:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Max out tax-deferred accounts (401k, HSA, etc.)</li>
                            <li>• Avoid realizing capital gains</li>
                            <li>• Use tax-loss harvesting aggressively</li>
                            <li>• Donate appreciated shares to charity</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>3. Qualified Dividend vs REIT Allocation</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>Not all dividends are created equal tax-wise.</strong> Strategic allocation
                        can save thousands:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <h5 className="font-bold text-sm mb-2">Taxable Accounts</h5>
                          <ul className="text-xs space-y-1">
                            <li>✅ <strong>Hold:</strong> Qualified dividend stocks (JNJ, KO, MSFT)</li>
                            <li>✅ <strong>Tax:</strong> 0-20% max</li>
                            <li>❌ <strong>Avoid:</strong> REITs, MLPs, bond funds</li>
                            <li>❌ <strong>Tax:</strong> Up to 37% ordinary income</li>
                          </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <h5 className="font-bold text-sm mb-2">IRA / 401(k)</h5>
                          <ul className="text-xs space-y-1">
                            <li>✅ <strong>Hold:</strong> REITs, high-yield bonds, MLPs</li>
                            <li>✅ <strong>Benefit:</strong> Tax-deferred until withdrawal</li>
                            <li>⚠️ <strong>Note:</strong> Qualified dividends lose preference in IRA</li>
                            <li>⚠️ <strong>Withdrawals:</strong> Taxed as ordinary income regardless</li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm mt-4 font-semibold text-blue-700 dark:text-blue-400">
                        Example: $10,000 REIT dividend → Taxable: $3,700 tax (37%) | IRA: $0 tax now
                      </p>
                    </CardContent>
                  </Card>

                  <h3>4. The Hybrid Portfolio Strategy</h3>
                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-4">Recommended Tax-Optimized Portfolio Allocation</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">40% Growth Stocks (Taxable)</span>
                            <Badge>Capital Gains</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-purple-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            S&P 500, NASDAQ, mega-cap tech - tax-deferred compounding + step-up basis
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">30% Qualified Dividend Stocks (Taxable)</span>
                            <Badge variant="secondary">15% Tax Max</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            Dividend aristocrats, SCHD - tax-efficient income + DRIP automation
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">20% REITs (IRA/401k)</span>
                            <Badge variant="secondary">Tax-Deferred</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-orange-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            High-yield REITs shielded from ordinary income tax
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">10% Bonds (IRA/401k)</span>
                            <Badge variant="secondary">Tax-Deferred</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            Corporate/government bonds - shield interest from ordinary income tax
                          </p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="font-semibold">Effective Tax Rate: ~8-12%</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            vs 15-25% for random allocation. Strategic placement saves $5,000-15,000 annually.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>5. Tax-Loss Harvesting Best Practices</h3>
                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">How to Save $5,000-20,000 Annually</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Review portfolio quarterly for losses</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Look for positions down 10%+ from purchase price
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Sell losers to offset realized gains</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              $20K gain + $8K loss = taxable gain of only $12K (save $1,200-1,900)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Immediately reinvest in similar (not identical) asset</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Sell VTI, buy VOO - maintain market exposure, avoid wash sale rule
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Offset up to $3,000 of ordinary income</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              No gains this year? Still save $660-1,110 by offsetting W-2 income
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Carry losses forward indefinitely</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              $50K loss this year? Use $3K/year for 16+ years or offset future gains
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-slate-900 p-4 rounded-lg mt-4">
                        <h5 className="font-bold text-sm mb-2">Real Example:</h5>
                        <div className="text-xs space-y-1">
                          <p>• 2025 realized gains: $80,000</p>
                          <p>• Tax owed (20%): $16,000</p>
                          <p>• Harvest $30,000 in losses (sell underperformers)</p>
                          <p>• New taxable gain: $50,000</p>
                          <p>• New tax: $10,000</p>
                          <p className="font-bold text-purple-600 pt-2">Savings: $6,000 in one year</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Tax-Optimized Strategy</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to model dividend income, capital gains, and total return
                        projections for your specific situation.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Tax-Efficient Investing</h2>
                  <p>
                    Whether you focus on dividends or capital gains, you need a broker with excellent tax
                    tools, low fees, and robust reporting. Here are the top-rated options:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section>
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Are qualified dividends and long-term capital gains taxed the same?</h3>
                        <p className="text-sm">
                          Yes, they use identical tax brackets: 0%, 15%, or 20% depending on your taxable income.
                          Both also face the 3.8% Medicare surtax above $200,000 (single) or $250,000 (married).
                          The key difference is timing and control - dividends are automatic, capital gains are
                          realized when you choose to sell.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Which is better for retirees: dividend income or selling stocks for capital gains?</h3>
                        <p className="text-sm">
                          Dividends are often better for retirees who want predictable, automatic income without
                          selling shares. A $1 million portfolio yielding 4% provides $40,000/year in dividends
                          without touching principal. However, the capital gains strategy can work too - selling
                          $40,000 worth of stocks annually and potentially staying in the 0% tax bracket if
                          income is low enough. Many retirees use a hybrid approach.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Can I avoid paying taxes on dividends and capital gains?</h3>
                        <p className="text-sm">
                          Yes, if your taxable income is under $47,025 (single) or $94,050 (married filing jointly)
                          in 2026, both qualified dividends and long-term capital gains are taxed at 0%. This is
                          achievable for early retirees, part-time workers, or those with strategic tax planning.
                          You can also hold investments in Roth IRA for completely tax-free growth and withdrawals.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Do REITs count as qualified dividends?</h3>
                        <p className="text-sm">
                          No, most REIT dividends are classified as ordinary (non-qualified) dividends and taxed
                          at your regular income tax rate (10-37%). This is why it's best to hold REITs in
                          tax-advantaged accounts like IRAs or 401(k)s where the high tax rate doesn't matter.
                          Only the portion of REIT dividends classified as capital gains distributions or
                          qualified dividends (very small) get preferential treatment.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is tax-loss harvesting and can I use it with dividends?</h3>
                        <p className="text-sm">
                          Tax-loss harvesting means selling losing investments to offset capital gains and reduce
                          your tax bill. You can offset capital gains dollar-for-dollar, plus up to $3,000 of
                          ordinary income per year. This strategy ONLY works with capital gains - you cannot
                          harvest losses to offset dividend income. This is one of the biggest advantages of a
                          capital gains strategy.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I hold dividend stocks in a Roth IRA or taxable account?</h3>
                        <p className="text-sm">
                          It depends on your goal. <strong>Taxable account:</strong> Best for qualified dividend
                          stocks because they're already tax-efficient (15% max for most people) and you get
                          flexibility to withdraw anytime. <strong>Roth IRA:</strong> Better for high-growth stocks
                          that will compound tax-free forever. Since qualified dividends are already low-taxed,
                          you're not gaining much by putting them in Roth vs taxable. Save Roth space for assets
                          that would otherwise face higher taxes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How does the step-up in basis work for capital gains?</h3>
                        <p className="text-sm">
                          When you die, your heirs inherit your stocks at the current market value (stepped-up basis),
                          not your original purchase price. This means all unrealized capital gains disappear -
                          never taxed. Example: You bought stock for $50,000, worth $500,000 at death. Your heirs
                          inherit at $500,000 basis and can immediately sell with zero capital gains tax. This
                          massive estate planning benefit doesn't exist for dividends (already taxed when received).
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
                    <Link href="/blog/qualified-vs-ordinary-dividends-explained" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Qualified vs Ordinary Dividends: Complete Tax Guide
                    </Link>
                    <Link href="/blog/how-to-minimize-dividend-taxes" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Minimize Dividend Taxes: 7 Proven Strategies
                    </Link>
                    <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Roth IRA vs Taxable Account for Dividend Investing
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Complete Strategy Comparison
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
