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
  Building2,
  Clock,
  Zap,
  BarChart3,
  PieChart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Investing vs Real Estate: Passive Income Showdown (2026)',
  description: 'Detailed comparison of dividend investing vs real estate for passive income. Returns, effort, liquidity, taxes, and diversification compared side-by-side with real numbers.',
  keywords: 'dividend investing vs real estate, passive income comparison, dividend stocks vs rental property, real estate vs stocks, best passive income investment, dividend income vs rental income',
  openGraph: {
    title: 'Dividend Investing vs Real Estate: Passive Income Showdown',
    description: 'Which builds more passive income: dividend stocks or rental properties? Real returns, effort, and tax comparison.',
    type: 'article',
  }
}

export default function DividendInvestingVsRealEstatePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Passive Income Comparison</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Investing vs Real Estate: Passive Income Showdown
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Two proven paths to passive income. One requires clicking a button, the other requires
                  managing tenants. Which actually produces better risk-adjusted returns? The answer
                  may surprise you.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>16 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Deep Comparison
                  </span>
                </div>
              </div>

              {/* Quick Answer */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    The Bottom Line
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend stocks:</strong> Truly passive, fully liquid, starts with $100, 8-12% total returns. Best for hands-off investors who value simplicity and flexibility.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Building2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Real estate:</strong> Leveraged returns (15-25% on equity with mortgage), tax advantages, tangible asset. Best for hands-on investors who can handle property management.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Optimal strategy:</strong> Do both. Use dividends as your liquid, passive core (70%) and real estate for leveraged growth and tax benefits (30%).</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#head-to-head" className="text-blue-600 hover:underline">Head-to-Head Comparison</a></li>
                    <li><a href="#returns" className="text-blue-600 hover:underline">Returns Comparison</a></li>
                    <li><a href="#effort" className="text-blue-600 hover:underline">Time & Effort Required</a></li>
                    <li><a href="#liquidity" className="text-blue-600 hover:underline">Liquidity & Flexibility</a></li>
                    <li><a href="#taxes" className="text-blue-600 hover:underline">Tax Comparison</a></li>
                    <li><a href="#100k-example" className="text-blue-600 hover:underline">$100K Investment Example</a></li>
                    <li><a href="#hybrid" className="text-blue-600 hover:underline">The Hybrid Approach</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

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
                          <th className="border p-3 text-center">Dividend Stocks</th>
                          <th className="border p-3 text-center">Rental Real Estate</th>
                          <th className="border p-3 text-center">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Minimum Investment</td>
                          <td className="border p-3 text-center text-green-600">$1 (fractional shares)</td>
                          <td className="border p-3 text-center">$30K-$80K (down payment)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Cash-on-Cash Return</td>
                          <td className="border p-3 text-center">3-6%</td>
                          <td className="border p-3 text-center text-green-600">8-12% (with leverage)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Real Estate</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Total Return</td>
                          <td className="border p-3 text-center">8-12%/year</td>
                          <td className="border p-3 text-center">10-15%/year (leveraged)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Real Estate</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Time Required</td>
                          <td className="border p-3 text-center text-green-600">1-2 hours/month</td>
                          <td className="border p-3 text-center">5-15 hours/month</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Liquidity</td>
                          <td className="border p-3 text-center text-green-600">Sell in seconds</td>
                          <td className="border p-3 text-center">30-90 days to sell</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Leverage Available</td>
                          <td className="border p-3 text-center">None (cash only)</td>
                          <td className="border p-3 text-center text-green-600">75-80% LTV (mortgage)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Real Estate</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Diversification</td>
                          <td className="border p-3 text-center text-green-600">20-50 stocks instantly</td>
                          <td className="border p-3 text-center">1-3 properties typically</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Tax Advantages</td>
                          <td className="border p-3 text-center">Qualified div rates (0-20%)</td>
                          <td className="border p-3 text-center text-green-600">Depreciation, 1031 exchange</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">Real Estate</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Passive?</td>
                          <td className="border p-3 text-center text-green-600">100% passive</td>
                          <td className="border p-3 text-center">Semi-passive (with PM)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Income Predictability</td>
                          <td className="border p-3 text-center">Very predictable</td>
                          <td className="border p-3 text-center">Variable (vacancies, repairs)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Dividends</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <strong>Score: Dividends 6, Real Estate 3, Tie 1.</strong> Dividend investing wins
                    on passivity, liquidity, accessibility, and diversification. Real estate wins on
                    leveraged returns, cash-on-cash yield, and tax advantages.
                  </p>
                </section>

                {/* Returns */}
                <section id="returns">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Returns Comparison: The Real Numbers
                  </h2>

                  <h3>Dividend Portfolio: $100K Invested (No Leverage)</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Starting yield:</strong> 4% = $4,000/year income</li>
                        <li><strong>Dividend growth:</strong> 6%/year (income doubles every 12 years)</li>
                        <li><strong>Capital appreciation:</strong> 7%/year</li>
                        <li><strong>Total annual return:</strong> ~11% (with DRIP)</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-green-700 dark:text-green-400">After 10 Years: $284,000 portfolio, $7,160/year income</p>
                        <p className="font-bold text-green-700 dark:text-green-400">After 20 Years: $806,000 portfolio, $12,820/year income</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Rental Property: $100K Invested (With 75% Leverage)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Property purchase:</strong> $400K property (25% down = $100K)</li>
                        <li><strong>Monthly rent:</strong> $2,800 ($33,600/year gross)</li>
                        <li><strong>Expenses (50% rule):</strong> $16,800 (taxes, insurance, repairs, PM, vacancy)</li>
                        <li><strong>Mortgage payment:</strong> $1,600/month ($19,200/year at 6.5%)</li>
                        <li><strong>Net cash flow:</strong> -$2,400/year (negative in early years at current rates)</li>
                        <li><strong>Equity buildup + appreciation:</strong> $18,000-$22,000/year</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-blue-700 dark:text-blue-400">After 10 Years: $320,000 equity, $8,400/year cash flow (after refi)</p>
                        <p className="font-bold text-blue-700 dark:text-blue-400">After 20 Years: $580,000 equity, $22,000/year cash flow (mortgage paid)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Important caveat:</strong> At 2026 interest rates (6.5%+ for investment properties), many rental properties have negative cash flow in the early years. The returns above assume 3% annual rent increases and 4% property appreciation. Dividend stocks are cash-flow positive from day one.</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Effort */}
                <section id="effort">
                  <h2 className="flex items-center gap-2">
                    <Clock className="h-7 w-7 text-orange-600" />
                    Time and Effort Required
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-400">Dividend Investing: 1-2 Hours/Month</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Initial research: 10-20 hours (one time)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Monitoring: check quarterly earnings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Rebalancing: once per year</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>No phone calls, no emergencies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Works while you travel, sleep, or do anything else</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/50">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">Rental Real Estate: 5-15 Hours/Month</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>Initial property search: 50-200 hours</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>Tenant screening and management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>Maintenance requests (2 AM pipe burst)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>Vacancy periods (lost income)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>Property manager costs 8-10% of rent</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    <strong>The effort gap is enormous.</strong> Dividend investing is set-and-forget. Real
                    estate is a part-time job unless you hire a property manager, which costs 8-10% of gross rent
                    and significantly reduces your returns.
                  </p>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* Liquidity */}
                <section id="liquidity">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Liquidity and Flexibility
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 text-green-700 dark:text-green-400">Dividend Stocks: Instant Liquidity</h3>
                        <ul className="space-y-2 text-sm">
                          <li>Sell any amount in seconds during market hours</li>
                          <li>Cash in your account within 1 business day (T+1)</li>
                          <li>Sell $500 or $500,000 -- same process</li>
                          <li>No closing costs, no real estate commissions</li>
                          <li>Rebalance portfolio with a few clicks</li>
                          <li>Access capital for any emergency instantly</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 text-red-700 dark:text-red-400">Real Estate: Illiquid</h3>
                        <ul className="space-y-2 text-sm">
                          <li>30-90 days to sell a property</li>
                          <li>5-6% selling costs (agent commissions)</li>
                          <li>Cannot sell "half a house" for partial cash</li>
                          <li>Market conditions affect ability to sell</li>
                          <li>Tenant complications can delay sales</li>
                          <li>Emergency cash access requires HELOC or refinance</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Taxes */}
                <section id="taxes">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    Tax Comparison
                  </h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Tax Feature</th>
                          <th className="border p-3 text-center">Dividend Stocks</th>
                          <th className="border p-3 text-center">Rental Real Estate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Income Tax Rate</td>
                          <td className="border p-3 text-center">0-20% (qualified dividends)</td>
                          <td className="border p-3 text-center">10-37% (ordinary income, after depreciation)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Depreciation Deduction</td>
                          <td className="border p-3 text-center text-red-600">Not available</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Yes (27.5 years for residential)</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">1031 Exchange</td>
                          <td className="border p-3 text-center text-red-600">Not available</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Yes (defer capital gains indefinitely)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Expense Deductions</td>
                          <td className="border p-3 text-center text-red-600">None</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Mortgage interest, repairs, insurance, PM fees</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Roth IRA Eligible</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Yes (100% tax-free)</td>
                          <td className="border p-3 text-center text-red-600">No (cannot hold property in Roth)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Tax at Sale</td>
                          <td className="border p-3 text-center">0-20% LTCG</td>
                          <td className="border p-3 text-center">25% depreciation recapture + LTCG</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Stepped-Up Basis at Death</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Yes</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>Real estate wins on tax advantages</strong> -- depreciation can shelter most or all
                    of your rental income from taxes. A $400K property generates ~$11,000/year in depreciation
                    deductions. However, dividend stocks in a Roth IRA produce 100% tax-free income forever,
                    which is the ultimate tax advantage.
                  </p>
                </section>

                {/* $100K Example */}
                <section id="100k-example">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-indigo-600" />
                    $100K Investment: 20-Year Side-by-Side
                  </h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Year</th>
                          <th className="border p-3 text-center">Div Portfolio Value</th>
                          <th className="border p-3 text-center">Div Annual Income</th>
                          <th className="border p-3 text-center">RE Equity</th>
                          <th className="border p-3 text-center">RE Annual Cash Flow</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Year 0</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center">$4,000</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center text-red-600">-$2,400</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 5</td>
                          <td className="border p-3 text-center">$169,000</td>
                          <td className="border p-3 text-center">$5,350</td>
                          <td className="border p-3 text-center">$187,000</td>
                          <td className="border p-3 text-center">$1,200</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 10</td>
                          <td className="border p-3 text-center">$284,000</td>
                          <td className="border p-3 text-center">$7,160</td>
                          <td className="border p-3 text-center">$320,000</td>
                          <td className="border p-3 text-center">$8,400</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 15</td>
                          <td className="border p-3 text-center">$478,000</td>
                          <td className="border p-3 text-center">$9,580</td>
                          <td className="border p-3 text-center">$440,000</td>
                          <td className="border p-3 text-center">$14,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 20</td>
                          <td className="border p-3 text-center font-bold text-green-600">$806,000</td>
                          <td className="border p-3 text-center">$12,820</td>
                          <td className="border p-3 text-center font-bold text-blue-600">$580,000</td>
                          <td className="border p-3 text-center font-bold text-blue-600">$22,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-2 border-purple-300 dark:border-purple-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Award className="h-6 w-6 text-purple-600" />
                        The Nuanced Result
                      </h3>
                      <p className="text-sm mb-3">
                        After 20 years, the <strong>dividend portfolio has 39% more total value</strong> ($806K vs $580K).
                        But the <strong>rental property generates 72% more annual income</strong> ($22K vs $12.8K) once the mortgage
                        is paid off.
                      </p>
                      <p className="text-sm mb-0">
                        This is the core tradeoff: dividends build more wealth, but leveraged real estate
                        generates more cash flow per dollar invested. The real estate investor also had to deal
                        with tenants, repairs, and vacancies for 20 years.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Hybrid */}
                <section id="hybrid">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-orange-600" />
                    The Hybrid Approach: Best of Both
                  </h2>
                  <p>
                    The smartest investors use both. Here is an optimal allocation for building
                    passive income.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-2 border-yellow-300 dark:border-yellow-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">The 70/30 Hybrid Portfolio</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">70% Dividend Stocks (Liquid Core)</span>
                            <Badge>Passive Income Base</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            SCHD, JNJ, PG, PEP, O, ABBV, EPD. Fully liquid, truly passive, tax-efficient in Roth IRA.
                          </p>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">30% Real Estate (Leveraged Growth)</span>
                            <Badge variant="secondary">Tax Advantages</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            1-2 rental properties or REITs. Leverage mortgage for higher returns. Depreciation tax shelter.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Which is truly passive: dividends or real estate?</h3>
                        <p className="text-sm mb-0">
                          Dividend investing is truly passive. You buy stocks, enable DRIP, and collect income
                          with zero effort. Real estate requires finding deals, screening tenants, handling
                          maintenance, and managing finances. Even with a property manager (8-10% of rent),
                          you still make decisions and handle issues.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Can REITs replace real estate investing?</h3>
                        <p className="text-sm mb-0">
                          Partially. REITs like Realty Income (O) and VICI Properties (VICI) give you real estate
                          exposure with stock-market liquidity and zero management effort. However, you lose
                          leverage (no mortgage) and tax advantages (no depreciation on REIT shares). REITs
                          are perfect for the "real estate" portion of a dividend portfolio.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How do returns compare in a recession?</h3>
                        <p className="text-sm mb-0">
                          In 2008-2009, home prices dropped 27% nationally and rental vacancies spiked to 10%+.
                          Dividend Aristocrats cut just 5% of dividends, and prices recovered within 2 years.
                          Real estate took 5-7 years to recover in most markets. Dividend portfolios are more
                          resilient during economic downturns.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What about rental property in today's high-rate environment?</h3>
                        <p className="text-sm mb-0">
                          With mortgage rates at 6.5%+ for investment properties in 2026, many rental properties
                          have negative cash flow in the early years. This makes dividend stocks (which produce
                          positive cash flow from day one at 3-6% yields) relatively more attractive right now.
                          Real estate becomes more compelling when rates drop below 5%.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to model dividend income and compare it to
                        potential rental returns.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/investment-return">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Investment Return Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Investing</h2>
                  <p>
                    Start building your passive dividend income portfolio with these top-rated brokers.
                  </p>
                  <BrokerComparisonTable />
                </section>
              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/how-to-invest-100k-for-dividend-income" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Invest $100K for Dividend Income
                    </Link>
                    <Link href="/blog/best-reit-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best REIT Dividend Stocks (2026)
                    </Link>
                    <Link href="/blog/how-much-to-retire-on-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How Much Do You Need to Retire on Dividends?
                    </Link>
                    <Link href="/blog/dividend-income-vs-capital-gains" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Income vs Capital Gains
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
