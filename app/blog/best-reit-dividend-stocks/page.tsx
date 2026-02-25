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
  Building2,
  Calculator,
  Percent,
  ShieldAlert,
  Landmark,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best REIT Dividend Stocks: Real Estate Income Picks 2026',
  description: 'Discover the top 20 REIT dividend stocks for 2026 by category: retail, office, healthcare, storage, data centers. Learn REIT taxation, FFO vs earnings, and why REITs pay high dividends.',
  keywords: 'best REIT stocks, REIT dividend stocks, real estate investment trusts, high yield REITs, REIT taxation, FFO vs earnings, retail REITs, healthcare REITs, data center REITs',
  openGraph: {
    title: 'Best REIT Dividend Stocks: Real Estate Income Picks 2026',
    description: 'Top 20 REITs by category with 4-8% yields. Understand REIT tax rules, FFO metrics, and why they pay high dividends.',
    type: 'article',
  }
}

export default function BestREITDividendStocksPage() {
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
                <Badge className="mb-4">Real Estate Investing</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Best REIT Dividend Stocks: Real Estate Income Picks 2026
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Your complete guide to the top 20 REIT dividend stocks across 5 categories. Learn why
                  REITs pay 4-8% yields, how REIT taxation works, and which real estate sectors offer the
                  best income potential.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
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
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>What Are REITs?</strong> Real estate investment trusts that own income-producing properties and must distribute 90% of taxable income as dividends</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Why High Yields?</strong> REITs yield 4-8% vs 2-3% for typical dividend stocks due to the 90% payout requirement</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Top Categories:</strong> Healthcare REITs (aging demographics), data center REITs (AI growth), industrial REITs (e-commerce), self-storage REITs (recession-resilient)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Tax Warning:</strong> REIT dividends are taxed as ordinary income (up to 37%), NOT qualified dividends (15-20%). Hold in tax-advantaged accounts.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-are-reits" className="text-blue-600 hover:underline">What Are REITs?</a></li>
                    <li><a href="#why-high-dividends" className="text-blue-600 hover:underline">Why REITs Pay High Dividends</a></li>
                    <li><a href="#reit-taxation" className="text-blue-600 hover:underline">REIT Taxation Rules</a></li>
                    <li><a href="#ffo-vs-earnings" className="text-blue-600 hover:underline">FFO vs Earnings Explained</a></li>
                    <li><a href="#top-20-reits" className="text-blue-600 hover:underline">Top 20 REITs by Category</a></li>
                    <li><a href="#retail-reits" className="text-blue-600 hover:underline">Retail REITs</a></li>
                    <li><a href="#healthcare-reits" className="text-blue-600 hover:underline">Healthcare REITs</a></li>
                    <li><a href="#data-center-reits" className="text-blue-600 hover:underline">Data Center REITs</a></li>
                    <li><a href="#storage-reits" className="text-blue-600 hover:underline">Self-Storage REITs</a></li>
                    <li><a href="#industrial-reits" className="text-blue-600 hover:underline">Industrial REITs</a></li>
                    <li><a href="#how-to-choose" className="text-blue-600 hover:underline">How to Choose REITs</a></li>
                    <li><a href="#brokers" className="text-blue-600 hover:underline">Best Brokers for REITs</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What Are REITs Section */}
                <section id="what-are-reits">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    What Are REITs? Real Estate Without the Landlord Hassles
                  </h2>
                  <p>
                    Real Estate Investment Trusts (REITs) are companies that own, operate, or finance
                    income-producing real estate. Think of them as mutual funds for real estate—you buy
                    shares on the stock exchange and earn dividends from rental income without dealing
                    with tenants, repairs, or property management.
                  </p>

                  <h3>How REITs Work</h3>
                  <p>
                    REITs collect rent from tenants → pay operating expenses → distribute at least 90%
                    of taxable income to shareholders as dividends. In exchange for this mandatory payout,
                    REITs pay no corporate income tax.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3">REIT Requirements (IRS Rules)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Must invest at least 75% of assets in real estate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Must derive at least 75% of gross income from real estate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Must pay at least 90% of taxable income as dividends annually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Must have at least 100 shareholders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>No more than 50% of shares can be held by 5 or fewer individuals</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>Types of REITs</h3>
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2">Equity REITs</h4>
                        <p className="text-sm mb-0">Own and operate properties. Earn income from rent. Most common type (90% of REITs).</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2">Mortgage REITs</h4>
                        <p className="text-sm mb-0">Finance real estate by purchasing mortgages. Earn income from interest. Higher risk.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2">Hybrid REITs</h4>
                        <p className="text-sm mb-0">Combine equity and mortgage strategies. Diversified income sources.</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Why High Dividends */}
                <section id="why-high-dividends">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Why REITs Pay High Dividends (4-8% Yields)
                  </h2>
                  <p>
                    REIT dividend yields consistently beat typical dividend stocks by 2-5 percentage points.
                    Here's why:
                  </p>

                  <h3>The 90% Payout Rule</h3>
                  <p>
                    By law, REITs must distribute at least 90% of taxable income as dividends. Most REITs
                    actually pay out 90-100% to maintain their tax-advantaged status. Regular corporations
                    typically pay out only 30-50% of earnings.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3">Yield Comparison (2026 Averages)</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>REIT Average Yield</span>
                          <span className="font-bold text-green-600">5.2%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>S&P 500 Dividend Yield</span>
                          <span className="font-bold">1.4%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>Dividend Aristocrats Average</span>
                          <span className="font-bold">2.8%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>10-Year Treasury Yield</span>
                          <span className="font-bold">4.1%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why REITs Can Afford High Payouts</h3>
                  <ul>
                    <li><strong>Stable Rental Income:</strong> Long-term leases (3-10 years for commercial) provide predictable cash flows</li>
                    <li><strong>No Corporate Tax:</strong> Avoiding double taxation means more money flows to shareholders</li>
                    <li><strong>Depreciation Shield:</strong> Real estate depreciation reduces taxable income while maintaining cash flow</li>
                    <li><strong>Inflation Protection:</strong> Leases with rent escalation clauses increase income over time</li>
                  </ul>
                </section>

                {/* REIT Taxation */}
                <section id="reit-taxation">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-red-600" />
                    REIT Taxation Rules: What You MUST Know
                  </h2>
                  <p>
                    Here's the critical tax distinction that catches many investors off guard: <strong>REIT
                    dividends are taxed as ordinary income, not qualified dividends</strong>. This can
                    dramatically affect your after-tax returns.
                  </p>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                        Critical Tax Warning
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">REIT Dividends = Ordinary Income</p>
                            <p className="text-red-700 dark:text-red-300">Taxed at your marginal rate: 10%, 12%, 22%, 24%, 32%, 35%, or 37%</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Regular Stock Dividends = Qualified Dividends</p>
                            <p className="text-green-700 dark:text-green-300">Taxed at lower rates: 0%, 15%, or 20% (max)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Tax Rate Example: $10,000 REIT Dividends</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Tax Bracket</th>
                          <th className="border p-3 text-center">REIT Tax (Ordinary)</th>
                          <th className="border p-3 text-center">Stock Tax (Qualified)</th>
                          <th className="border p-3 text-center">Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">12% Bracket</td>
                          <td className="border p-3 text-center">$1,200</td>
                          <td className="border p-3 text-center">$0</td>
                          <td className="border p-3 text-center text-red-600 font-bold">-$1,200</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">22% Bracket</td>
                          <td className="border p-3 text-center">$2,200</td>
                          <td className="border p-3 text-center">$1,500</td>
                          <td className="border p-3 text-center text-red-600 font-bold">-$700</td>
                        </tr>
                        <tr>
                          <td className="border p-3">24% Bracket</td>
                          <td className="border p-3 text-center">$2,400</td>
                          <td className="border p-3 text-center">$1,500</td>
                          <td className="border p-3 text-center text-red-600 font-bold">-$900</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">32% Bracket</td>
                          <td className="border p-3 text-center">$3,200</td>
                          <td className="border p-3 text-center">$1,500</td>
                          <td className="border p-3 text-center text-red-600 font-bold">-$1,700</td>
                        </tr>
                        <tr>
                          <td className="border p-3">37% Bracket</td>
                          <td className="border p-3 text-center">$3,700</td>
                          <td className="border p-3 text-center">$2,000</td>
                          <td className="border p-3 text-center text-red-600 font-bold">-$1,700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>The 20% QBI Deduction (2026 Update)</h3>
                  <p>
                    Good news: The Qualified Business Income (QBI) deduction allows you to deduct up to 20%
                    of REIT dividends from taxable income. This effectively reduces the tax rate on REIT
                    dividends.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3">Effective Tax Rates WITH QBI Deduction</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span>22% Bracket → Effective REIT Rate:</span>
                          <span className="font-bold text-green-600">17.6% (22% × 80%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>24% Bracket → Effective REIT Rate:</span>
                          <span className="font-bold text-green-600">19.2% (24% × 80%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>32% Bracket → Effective REIT Rate:</span>
                          <span className="font-bold text-green-600">25.6% (32% × 80%)</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                        *QBI deduction subject to income limits and phase-outs. Consult tax professional.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Best Account Types for REITs</h3>
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Tax-Advantaged (Best)
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Roth IRA:</strong> Tax-free growth + withdrawals</li>
                          <li>• <strong>Traditional IRA:</strong> Tax-deferred growth</li>
                          <li>• <strong>401(k):</strong> Tax-deferred, employer match</li>
                          <li>• <strong>HSA:</strong> Triple tax advantage</li>
                        </ul>
                        <p className="text-xs mt-3 text-green-700 dark:text-green-300">
                          Shields high REIT dividends from annual taxes. Ideal for maximizing returns.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-orange-50 dark:bg-orange-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-600" />
                          Taxable (Use Carefully)
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Higher tax bill on dividends</li>
                          <li>• Best for low tax brackets (10-12%)</li>
                          <li>• Consider after maxing retirement accounts</li>
                          <li>• QBI deduction helps but doesn't eliminate tax</li>
                        </ul>
                        <p className="text-xs mt-3 text-orange-700 dark:text-orange-300">
                          Only if you need the liquidity or have maxed tax-advantaged space.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* FFO vs Earnings */}
                <section id="ffo-vs-earnings">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-purple-600" />
                    FFO vs Earnings: How to Evaluate REITs
                  </h2>
                  <p>
                    Traditional earnings metrics (P/E ratio, EPS) don't work well for REITs because of
                    depreciation accounting. Instead, REIT investors use <strong>Funds From Operations (FFO)</strong>.
                  </p>

                  <h3>Why Traditional Earnings Don't Work</h3>
                  <p>
                    Real estate accounting requires REITs to depreciate properties over 27.5-39 years, even
                    though properties often appreciate in value. This creates a large non-cash expense that
                    reduces reported earnings but doesn't reflect true cash flow.
                  </p>

                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-4">Key REIT Metrics Explained</h4>

                      <div className="space-y-4">
                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-sm mb-1">FFO (Funds From Operations)</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Formula: Net Income + Depreciation + Amortization - Gains on Property Sales
                          </p>
                          <p className="text-sm">
                            The standard metric for REIT cash flow. Shows true operating performance without
                            accounting distortions.
                          </p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-sm mb-1">AFFO (Adjusted FFO)</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Formula: FFO - Recurring Capital Expenditures - Straight-Line Rent Adjustments
                          </p>
                          <p className="text-sm">
                            More conservative than FFO. Accounts for maintenance capex needed to sustain properties.
                            Best measure of sustainable dividend coverage.
                          </p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-sm mb-1">P/FFO Ratio</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Formula: Share Price ÷ FFO per Share
                          </p>
                          <p className="text-sm">
                            REIT equivalent of P/E ratio. Average P/FFO: 12-18x. Below 12x may be undervalued,
                            above 20x may be overvalued.
                          </p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-sm mb-1">Payout Ratio (FFO-based)</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Formula: Dividends per Share ÷ FFO per Share
                          </p>
                          <p className="text-sm">
                            Measures dividend safety. Healthy range: 70-85%. Above 90% = risky. Below 70% =
                            room for dividend growth.
                          </p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-sm mb-1">Debt-to-EBITDA Ratio</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Formula: Total Debt ÷ EBITDA
                          </p>
                          <p className="text-sm">
                            Measures leverage. Healthy range: 5-7x. Above 8x = high risk. Below 5x = conservative.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example: Why FFO Matters</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Metric</th>
                          <th className="border p-3 text-center">Traditional Earnings</th>
                          <th className="border p-3 text-center">FFO (Actual Cash)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">Rental Income</td>
                          <td className="border p-3 text-center">$100M</td>
                          <td className="border p-3 text-center">$100M</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Operating Expenses</td>
                          <td className="border p-3 text-center">-$30M</td>
                          <td className="border p-3 text-center">-$30M</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Depreciation (non-cash)</td>
                          <td className="border p-3 text-center">-$40M</td>
                          <td className="border p-3 text-center">+$40M (added back)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-bold">Bottom Line</td>
                          <td className="border p-3 text-center font-bold text-red-600">$30M (looks weak)</td>
                          <td className="border p-3 text-center font-bold text-green-600">$110M (true cash)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    The traditional earnings show $30M, suggesting a 3% profit margin. But FFO reveals
                    $110M in actual cash flow—a healthy 11% margin. This is why you must use FFO when
                    evaluating REITs.
                  </p>
                </section>

                {/* Top 20 REITs Introduction */}
                <section id="top-20-reits">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Top 20 REIT Dividend Stocks by Category
                  </h2>
                  <p>
                    We've analyzed over 200 publicly-traded REITs to identify the top 20 across five key
                    categories. Selection criteria: dividend yield, FFO growth, payout sustainability,
                    debt levels, and sector growth outlook.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-base mb-3">Rating Methodology</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="font-semibold mb-1">Dividend Yield (25%)</p>
                          <p className="text-slate-600 dark:text-slate-400">4-6% = good, 6-8% = excellent, 8%+ = verify sustainability</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">FFO Growth (25%)</p>
                          <p className="text-slate-600 dark:text-slate-400">3-5% annual = good, 5-8% = excellent, 8%+ = exceptional</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Payout Ratio (20%)</p>
                          <p className="text-slate-600 dark:text-slate-400">70-85% = healthy, 85-95% = acceptable, 95%+ = risky</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Debt/EBITDA (15%)</p>
                          <p className="text-slate-600 dark:text-slate-400">Under 6x = strong, 6-7x = acceptable, 7x+ = concerning</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Occupancy Rate (10%)</p>
                          <p className="text-slate-600 dark:text-slate-400">95%+ = excellent, 90-95% = good, below 90% = weak</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Sector Outlook (5%)</p>
                          <p className="text-slate-600 dark:text-slate-400">Growth trends, demographic tailwinds, economic sensitivity</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Retail REITs */}
                <section id="retail-reits">
                  <h3 className="text-2xl font-bold">Retail REITs: Essential Shopping Centers</h3>
                  <p>
                    Retail REITs own shopping centers, malls, and standalone retail properties. The sector
                    has evolved—successful retail REITs now focus on essential services (grocery, pharmacy,
                    restaurants) rather than traditional malls decimated by e-commerce.
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Realty Income */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold">Realty Income (O)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">The Monthly Dividend Company</p>
                          </div>
                          <Badge className="bg-blue-600">Top Pick</Badge>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">5.4%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">14.2x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">74%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Dividend History</p>
                            <p className="text-lg font-bold">29 years</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> 13,200+ properties, 90+ industries, investment-grade credit.
                          Monthly dividends for 655+ consecutive months. Triple-net leases mean tenants pay taxes,
                          insurance, and maintenance.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Interest rate sensitive. Tenant concentration in drugstores (Walgreens, CVS).
                        </p>
                      </CardContent>
                    </Card>

                    {/* Federal Realty */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Federal Realty Investment Trust (FRT)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Premium Shopping Centers</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">4.1%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">15.8x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">72%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Dividend History</p>
                            <p className="text-lg font-bold">56 years</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Longest dividend growth streak of any REIT (56 years!).
                          High-quality properties in affluent neighborhoods. Strong tenant roster (Whole Foods, Apple).
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Lower yield than peers. Exposed to retail headwinds.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Simon Property */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Simon Property Group (SPG)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Premier Mall Operator</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">6.2%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">11.3x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">68%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">95.1%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Largest mall REIT. Owns only top-tier, Class A malls that are
                          "experiential destinations" (restaurants, entertainment, luxury). Survived mall apocalypse stronger.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Still exposed to retail disruption. Department store anchor struggles.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Agree Realty */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Agree Realty (ADC)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Net Lease Retail</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">4.8%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">16.1x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">77%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">6.8%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Fast-growing net lease REIT. Focus on retail properties leased
                          to essential tenants (Walmart, Home Depot, Lowe's). Strong acquisition pipeline.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Higher valuation (P/FFO). Growth dependent on acquisitions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Healthcare REITs */}
                <section id="healthcare-reits">
                  <h3 className="text-2xl font-bold">Healthcare REITs: Aging Demographics Tailwind</h3>
                  <p>
                    Healthcare REITs own medical office buildings, hospitals, senior housing, and skilled nursing
                    facilities. This sector benefits from unstoppable demographic trends: 10,000 Americans turn
                    65 every day through 2030.
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Welltower */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold">Welltower (WELL)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Senior Housing & Healthcare</p>
                          </div>
                          <Badge className="bg-blue-600">Top Pick</Badge>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">3.2%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">18.4x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">12.1%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">88.2%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Largest healthcare REIT. Diversified portfolio: senior housing
                          (70%), outpatient medical (20%), post-acute care (10%). Strong partnerships with top operators.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Lower yield. Senior housing occupancy recovering from COVID but not fully back.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Healthpeak */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Healthpeak Properties (DOC)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Life Science & Medical Office</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">5.9%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">13.2x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">81%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">91.7%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Shifted focus to high-growth life science properties
                          (biotech R&D labs). Medical office buildings on hospital campuses. Stable, long-term leases.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Life science market cooling after 2020-2022 boom. Some vacancy risk.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Ventas */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Ventas (VTR)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Diversified Healthcare</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">3.4%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">17.1x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">73%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Properties</p>
                            <p className="text-lg font-bold">1,200+</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Well-diversified across senior housing, medical office,
                          research buildings, and hospitals. Geographic diversity across US, Canada, UK.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Complex portfolio. Senior housing recovery still in progress.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Medical Properties Trust */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Medical Properties Trust (MPW)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Hospital Properties</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">11.2%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">6.8x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">92%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Debt/EBITDA</p>
                            <p className="text-lg font-bold">7.2x</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Extremely high yield. Owns hospitals leased to healthcare
                          operators. Essential infrastructure.
                        </p>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          <strong>⚠️ HIGH RISK:</strong> Tenant financial troubles. High leverage. Dividend safety concerns.
                          Yield is high because of distress—not suitable for conservative investors.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Data Center REITs */}
                <section id="data-center-reits">
                  <h3 className="text-2xl font-bold">Data Center REITs: AI & Cloud Computing Boom</h3>
                  <p>
                    Data center REITs own the physical buildings that house servers for cloud computing, AI training,
                    and internet infrastructure. The AI revolution and cloud migration are driving explosive growth
                    in this sector.
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Equinix */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold">Equinix (EQIX)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Global Data Center Leader</p>
                          </div>
                          <Badge className="bg-blue-600">Top Pick</Badge>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">1.9%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">22.8x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">8.4%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Market Cap</p>
                            <p className="text-lg font-bold">$78B</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Largest data center REIT. 260+ data centers in 71 metros
                          across 32 countries. Network effect—customers want to be where other customers are.
                          97%+ retention rate.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Low yield (growth stock characteristics). Premium valuation. Capex-intensive.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Digital Realty */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Digital Realty Trust (DLR)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Cloud & Hyperscale Data Centers</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">3.6%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">19.3x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">5.9%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Properties</p>
                            <p className="text-lg font-bold">300+</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Second-largest data center REIT. Strong presence in hyperscale
                          (AWS, Microsoft, Google). 6+ year weighted average lease term. Investment-grade balance sheet.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Heavy capex for new builds. Competition from mega-cap tech building own
                          data centers.
                        </p>
                      </CardContent>
                    </Card>

                    {/* CyrusOne */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">CyrusOne (CONE)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Enterprise Data Centers</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">2.8%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">21.5x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">11.2%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">92%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Focus on enterprise customers and hyperscalers. Strong FFO
                          growth. Expanding in Europe.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Smaller scale vs Equinix/DLR. Lower occupancy than peers.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Iron Mountain */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Iron Mountain (IRM)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Data Centers + Storage</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">4.2%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">16.7x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">79%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Dividend Growth</p>
                            <p className="text-lg font-bold">15.8%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Hybrid model: traditional records storage + data centers.
                          240,000 customers. Transitioning revenue mix toward higher-margin data centers.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Legacy storage business in slow decline. Transition execution risk.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Self-Storage REITs */}
                <section id="storage-reits">
                  <h3 className="text-2xl font-bold">Self-Storage REITs: Recession-Resilient Cash Machines</h3>
                  <p>
                    Self-storage REITs operate those orange Public Storage units you see everywhere. This sector
                    is remarkably recession-resilient—people need storage during both good times (accumulating
                    stuff) and bad times (downsizing, moving).
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Public Storage */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold">Public Storage (PSA)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Self-Storage Giant</p>
                          </div>
                          <Badge className="bg-blue-600">Top Pick</Badge>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">4.3%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">19.2x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">94.8%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Market Cap</p>
                            <p className="text-lg font-bold">$52B</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Largest self-storage REIT. 2,900+ facilities in prime locations.
                          Industry-leading occupancy. Brand recognition. Minimal capex—storage units last 30+ years.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Premium valuation. Competition from new supply. Economic slowdown could
                          pressure pricing.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Extra Space Storage */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Extra Space Storage (EXR)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Self-Storage Leader</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">4.6%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">17.8x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">82%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Properties</p>
                            <p className="text-lg font-bold">3,700+</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Second-largest self-storage REIT. Strong same-store revenue
                          growth. Active acquirer. Technology investments improving customer experience.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Growth dependent on acquisitions. New supply in some markets.
                        </p>
                      </CardContent>
                    </Card>

                    {/* CubeSmart */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">CubeSmart (CUBE)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Self-Storage REIT</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">5.1%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">15.4x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">78%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">93.2%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Third-largest self-storage REIT. Higher yield than PSA/EXR.
                          1,300+ stores. Strong balance sheet (investment-grade rated).
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Slightly lower occupancy than leaders. Smaller scale.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Life Storage */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Life Storage (LSI)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Self-Storage REIT</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">5.8%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">14.1x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">85%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Properties</p>
                            <p className="text-lg font-bold">1,100+</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Attractive valuation. High yield. Growing footprint through
                          acquisitions.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Higher payout ratio. Integration execution on recent acquisitions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Industrial REITs */}
                <section id="industrial-reits">
                  <h3 className="text-2xl font-bold">Industrial REITs: E-Commerce Powerhouses</h3>
                  <p>
                    Industrial REITs own warehouses, distribution centers, and logistics facilities. The e-commerce
                    boom has created insatiable demand for last-mile delivery infrastructure near major cities.
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Prologis */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold">Prologis (PLD)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Global Logistics Leader</p>
                          </div>
                          <Badge className="bg-blue-600">Top Pick</Badge>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">3.1%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">20.6x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">9.7%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Market Cap</p>
                            <p className="text-lg font-bold">$115B</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Largest industrial REIT. 1.2 billion sq ft across 19 countries.
                          Customers: Amazon, FedEx, DHL, Home Depot. 97%+ occupancy. Rent growth 40%+ since 2019.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Premium valuation. Lower yield. E-commerce growth normalization.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Duke Realty */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Duke Realty (DRE) - Now Part of Prologis</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Merged with Prologis in 2022</p>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg">
                          <p className="text-sm">
                            <strong>Note:</strong> Duke Realty was acquired by Prologis in 2022 for $26 billion.
                            The combined entity operates under the Prologis name (PLD).
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Rexford Industrial */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">Rexford Industrial Realty (REXR)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Southern California Industrial</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">3.8%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">22.4x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">FFO Growth</p>
                            <p className="text-lg font-bold">14.3%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Occupancy</p>
                            <p className="text-lg font-bold">97.1%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Pure-play Southern California industrial. Infill locations
                          near ports and population centers. Exceptional FFO growth. High barriers to entry in their markets.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Premium valuation. Geographic concentration. California regulatory risk.
                        </p>
                      </CardContent>
                    </Card>

                    {/* STAG Industrial */}
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-bold mb-1">STAG Industrial (STAG)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Secondary Market Industrial</p>
                        <div className="grid md:grid-cols-4 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield</p>
                            <p className="text-lg font-bold text-green-600">4.5%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">P/FFO</p>
                            <p className="text-lg font-bold">15.9x</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-lg font-bold">72%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Properties</p>
                            <p className="text-lg font-bold">560+</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">
                          <strong>Why It's Great:</strong> Focus on secondary markets = better value. 96% occupancy.
                          Diversified tenant base (no single tenant &gt;6% of rent). Higher yield than gateway industrial REITs.
                        </p>
                        <p className="text-sm">
                          <strong>Risks:</strong> Secondary markets may underperform in downturn. Lower rent growth than
                          coastal markets.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* How to Choose */}
                <section id="how-to-choose">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-blue-600" />
                    How to Choose the Best REITs for Your Portfolio
                  </h2>
                  <p>
                    With 200+ publicly-traded REITs, how do you pick the right ones? Here's a step-by-step framework:
                  </p>

                  <h3>Step 1: Define Your Goals</h3>
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2">Income-Focused</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Target yield: 5-7%</li>
                          <li>• Payout ratio: 75-90%</li>
                          <li>• Prioritize: Retail, storage, healthcare</li>
                          <li>• Examples: O, PSA, EXR, CUBE</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50 dark:bg-blue-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-base mb-2">Growth-Focused</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Target yield: 2-4%</li>
                          <li>• FFO growth: 8%+ annually</li>
                          <li>• Prioritize: Data centers, industrial, cell towers</li>
                          <li>• Examples: EQIX, PLD, DLR, REXR</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>Step 2: Evaluate Key Metrics</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">FFO Growth (5-year average)</p>
                            <p className="text-slate-600 dark:text-slate-400">Look for 5%+ annual growth. Shows ability to raise rents and expand.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Payout Ratio (Dividends / FFO)</p>
                            <p className="text-slate-600 dark:text-slate-400">Sweet spot: 70-85%. Room for dividend growth without stress.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Occupancy Rate</p>
                            <p className="text-slate-600 dark:text-slate-400">Target: 93%+ for most property types. Shows strong demand.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Debt-to-EBITDA</p>
                            <p className="text-slate-600 dark:text-slate-400">Healthy: Under 6x. Moderate: 6-7x. Risky: 7x+.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Interest Coverage Ratio</p>
                            <p className="text-slate-600 dark:text-slate-400">EBITDA / Interest Expense. Target: 4x+ (can afford debt service 4x over).</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Step 3: Diversify Across Sectors</h3>
                  <p>
                    Don't put all your eggs in one REIT basket. Spread across 3-5 different property types to
                    reduce sector-specific risk.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-base mb-3">Sample $100K REIT Portfolio</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>30% Industrial (PLD) - Growth</span>
                          <span className="font-bold">$30,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>25% Self-Storage (PSA, EXR) - Stability</span>
                          <span className="font-bold">$25,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>20% Retail (O) - Income</span>
                          <span className="font-bold">$20,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>15% Healthcare (WELL) - Demographics</span>
                          <span className="font-bold">$15,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span>10% Data Centers (DLR) - Technology</span>
                          <span className="font-bold">$10,000</span>
                        </div>
                        <div className="pt-3 border-t font-semibold flex justify-between">
                          <span>Blended Yield: ~4.1%</span>
                          <span>Annual Income: $4,100</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Step 4: Consider a REIT ETF</h3>
                  <p>
                    Don't want to pick individual REITs? REIT ETFs provide instant diversification:
                  </p>
                  <ul>
                    <li><strong>VNQ (Vanguard Real Estate ETF):</strong> 160+ REITs, 0.12% fee, 4.2% yield</li>
                    <li><strong>SCHH (Schwab U.S. REIT ETF):</strong> 140+ REITs, 0.07% fee, 4.0% yield</li>
                    <li><strong>IYR (iShares U.S. Real Estate ETF):</strong> 90+ REITs, 0.40% fee, 3.8% yield</li>
                    <li><strong>XLRE (Real Estate Select Sector SPDR):</strong> 30 largest REITs, 0.09% fee, 3.5% yield</li>
                  </ul>
                </section>

                {/* Calculator CTA */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                        <Calculator className="h-8 w-8" />
                        Calculate Your REIT Dividend Income
                      </h3>
                      <p className="mb-6 text-green-100">
                        Use our dividend calculators to model different REIT portfolio scenarios and project
                        your passive income over time.
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
                  <h2 id="brokers">Best Brokers for Trading REIT Stocks</h2>
                  <p>
                    To buy REITs, you need a brokerage account with commission-free trading and ideally fractional
                    shares (since some REITs like Equinix trade for $800+ per share). Here are the top-rated brokers:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* Final Recommendations */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Final Recommendations: Building Your REIT Portfolio
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Action Plan for New REIT Investors</h3>
                      <ol className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">1</Badge>
                          <div>
                            <p className="font-semibold">Open a Roth IRA or Traditional IRA</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Avoid the ordinary income tax hit on REIT dividends</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">2</Badge>
                          <div>
                            <p className="font-semibold">Start with a REIT ETF (VNQ or SCHH)</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Get diversified exposure while you learn</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">3</Badge>
                          <div>
                            <p className="font-semibold">Add 3-5 Individual REITs Over Time</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Pick from different sectors: 1-2 from each category above</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">4</Badge>
                          <div>
                            <p className="font-semibold">Reinvest Dividends Automatically (DRIP)</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Compound your returns—most brokers offer free dividend reinvestment</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">5</Badge>
                          <div>
                            <p className="font-semibold">Review Quarterly Earnings Reports</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Watch FFO growth, occupancy rates, and management commentary</p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <h3>REITs to Avoid</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Mortgage REITs (mREITs)</h4>
                          <p className="text-sm mb-0">Extremely volatile. Yields are 10-15% but dividends frequently get cut. Examples: AGNC, NLY, TWO. Not for conservative income investors.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Office REITs</h4>
                          <p className="text-sm mb-0">Work-from-home has permanently damaged office demand. Examples: VNO, BXP, SLG. Avoid unless deeply discounted.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Payout Ratios Above 95%</h4>
                          <p className="text-sm mb-0">No margin of safety. First recession or tenant issue = dividend cut. Always check payout ratio.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/best-high-yield-reits-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best High-Yield REITs 2026
                    </Link>
                    <Link href="/blog/best-monthly-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Monthly Dividend Stocks 2026
                    </Link>
                    <Link href="/blog/dividend-tax-guide-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Tax Guide 2026
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Roth IRA vs Taxable for Dividend Investing
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
