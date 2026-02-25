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
  PiggyBank,
  Shield,
  Calculator,
  RefreshCw,
  Wallet,
  FileText,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Minimize Dividend Taxes: 11 Legal Strategies (2026 Guide)',
  description: 'Learn 11 proven strategies to legally minimize dividend taxes and keep more of your investment income. Complete guide with real examples showing dollar amounts saved.',
  keywords: 'minimize dividend taxes, reduce dividend taxes, dividend tax strategies, qualified dividends, Roth IRA dividends, tax-loss harvesting, dividend tax planning',
  openGraph: {
    title: 'How to Minimize Dividend Taxes: 11 Legal Tax-Saving Strategies',
    description: 'Discover how to legally reduce your dividend taxes by thousands per year using these 11 proven strategies.',
    type: 'article',
  }
}

export default function MinimizeDividendTaxesPage() {
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
                <Badge className="mb-4">Tax Optimization</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Minimize Dividend Taxes: 11 Legal Strategies
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Stop paying more tax than necessary on your dividend income. Learn 11 proven strategies
                  to legally reduce your dividend tax bill by thousands per year and keep more of what you earn.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Tax Professional Reviewed
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Biggest Win:</strong> Max out Roth IRA ($7,000/year) for 100% tax-free dividend income forever</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Quick Savings:</strong> Hold dividend stocks 60+ days to qualify for 0-20% tax vs 10-37% ordinary rates</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Potential Savings:</strong> $3,000-7,000 annually on a $100K dividend portfolio using all 11 strategies</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-tax-basics" className="text-blue-600 hover:underline">Dividend Tax Basics</a></li>
                    <li><a href="#strategy-1" className="text-blue-600 hover:underline">1. Maximize Roth IRA</a></li>
                    <li><a href="#strategy-2" className="text-blue-600 hover:underline">2. Choose Qualified Dividends</a></li>
                    <li><a href="#strategy-3" className="text-blue-600 hover:underline">3. Asset Location Optimization</a></li>
                    <li><a href="#strategy-4" className="text-blue-600 hover:underline">4. Tax-Loss Harvesting</a></li>
                    <li><a href="#strategy-5" className="text-blue-600 hover:underline">5. Use 401(k) for High-Yielders</a></li>
                    <li><a href="#strategy-6" className="text-blue-600 hover:underline">6. HSA Triple Tax Advantage</a></li>
                    <li><a href="#strategy-7" className="text-blue-600 hover:underline">7. Municipal Bonds Alternative</a></li>
                    <li><a href="#strategy-8" className="text-blue-600 hover:underline">8. Manage Your Tax Bracket</a></li>
                    <li><a href="#strategy-9" className="text-blue-600 hover:underline">9. Avoid Dividend Traps</a></li>
                    <li><a href="#strategy-10" className="text-blue-600 hover:underline">10. Capital Gains Harvesting</a></li>
                    <li><a href="#strategy-11" className="text-blue-600 hover:underline">11. Charitable Donations Strategy</a></li>
                    <li><a href="#example" className="text-blue-600 hover:underline">Real-World Example</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Dividend Tax Basics */}
                <section id="dividend-tax-basics">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-blue-600" />
                    Understanding Dividend Tax Basics
                  </h2>
                  <p>
                    Before diving into strategies, understand this: <strong>not all dividend income is taxed equally</strong>.
                    The IRS treats dividends in two ways:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                          Qualified Dividends
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Tax Rates:</strong> 0%, 15%, or 20%</li>
                          <li><strong>Requirements:</strong> Hold stock 60+ days during 121-day period</li>
                          <li><strong>Best For:</strong> Long-term investors</li>
                          <li><strong>Examples:</strong> Most U.S. stocks (AAPL, JNJ, KO)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-950/50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <XCircle className="h-6 w-6 text-red-600" />
                          Ordinary Dividends
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Tax Rates:</strong> 10% to 37% (your income tax rate)</li>
                          <li><strong>Requirements:</strong> None - taxed immediately</li>
                          <li><strong>Worst For:</strong> High-income earners</li>
                          <li><strong>Examples:</strong> REITs, MLPs, some preferred stocks</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Real Cost Example</h4>
                          <p className="text-sm mb-0">
                            On $10,000 in dividends, a high earner (37% bracket) pays <strong>$3,700 in ordinary taxes</strong> vs
                            only <strong>$2,000 in qualified dividend taxes</strong>. That's $1,700 saved just by holding 60+ days!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 1: Roth IRA */}
                <section id="strategy-1">
                  <h2 className="flex items-center gap-2">
                    <PiggyBank className="h-7 w-7 text-green-600" />
                    Strategy 1: Maximize Your Roth IRA
                  </h2>
                  <p>
                    The <strong>absolute best</strong> tax shelter for dividend investors. Roth IRAs offer 100% tax-free
                    dividend income forever - no taxes on dividends, no taxes on growth, no taxes on withdrawals in retirement.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">How Much You Save</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold mb-1">Contribution Limits (2026)</p>
                            <p>Under 50: <strong>$7,000/year</strong></p>
                            <p>Age 50+: <strong>$8,000/year</strong></p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Tax Savings Example</p>
                            <p>4% yield on $7,000 = $280/year dividends</p>
                            <p className="text-green-600 font-bold">Tax saved: $56-104/year</p>
                          </div>
                        </div>
                        <div className="pt-4 border-t">
                          <p className="font-bold text-base mb-2">30-Year Projection (maxing Roth IRA)</p>
                          <ul className="text-sm space-y-1">
                            <li>Starting at age 30, contribute $7,000/year</li>
                            <li>4% dividend yield, reinvested tax-free</li>
                            <li>At age 60: <strong>$420,000+ portfolio</strong></li>
                            <li>Annual dividends: <strong>$16,800/year tax-free</strong></li>
                            <li><span className="text-green-600 font-bold">Lifetime tax savings: $80,000-140,000</span></li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Action Steps</h3>
                  <ul>
                    <li><strong>Open Roth IRA:</strong> Choose a broker with no fees (Fidelity, Schwab, Vanguard)</li>
                    <li><strong>Auto-contribute:</strong> Set up automatic monthly transfers ($583/month = $7,000/year)</li>
                    <li><strong>Focus on high-yielders:</strong> REITs, BDCs, preferred stocks (normally heavily taxed) are perfect here</li>
                    <li><strong>Never sell:</strong> Let dividends compound tax-free for decades</li>
                  </ul>
                </section>

                {/* Strategy 2: Qualified Dividends */}
                <section id="strategy-2">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    Strategy 2: Choose Qualified Dividend Stocks
                  </h2>
                  <p>
                    Simple but powerful: favor stocks that pay <strong>qualified dividends</strong> over ordinary dividends
                    in taxable accounts. The tax savings are enormous.
                  </p>

                  <h3>Qualified vs Ordinary Tax Comparison</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Income Level</th>
                          <th className="border p-3 text-center">Qualified Tax</th>
                          <th className="border p-3 text-center">Ordinary Tax</th>
                          <th className="border p-3 text-center">Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">$0-44,625 (single)</td>
                          <td className="border p-3 text-center font-bold text-green-600">0%</td>
                          <td className="border p-3 text-center">10-12%</td>
                          <td className="border p-3 text-center">10-12%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">$44,626-492,300</td>
                          <td className="border p-3 text-center font-bold text-green-600">15%</td>
                          <td className="border p-3 text-center">22-35%</td>
                          <td className="border p-3 text-center">7-20%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">$492,301+</td>
                          <td className="border p-3 text-center font-bold text-green-600">20%</td>
                          <td className="border p-3 text-center">37%</td>
                          <td className="border p-3 text-center">17%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Real Dollar Savings</h4>
                      <p className="text-sm mb-3">
                        Portfolio: $100,000 earning 4% dividends = $4,000/year
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">Ordinary Dividends (REITs)</p>
                          <p>Tax at 24% bracket: <strong>$960/year</strong></p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Qualified Dividends (Stocks)</p>
                          <p>Tax at 15% rate: <strong>$600/year</strong></p>
                        </div>
                      </div>
                      <p className="font-bold text-green-600 mt-3">Annual Savings: $360</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Over 30 years: $10,800+ saved</p>
                    </CardContent>
                  </Card>

                  <h3>Stocks That Pay Qualified Dividends</h3>
                  <ul>
                    <li><strong>U.S. Corporations:</strong> Apple (AAPL), Microsoft (MSFT), Johnson & Johnson (JNJ)</li>
                    <li><strong>Dividend Aristocrats:</strong> Coca-Cola (KO), Procter & Gamble (PG), 3M (MMM)</li>
                    <li><strong>Qualified Foreign Stocks:</strong> Must be from countries with U.S. tax treaties</li>
                  </ul>

                  <h3>Non-Qualified (Avoid in Taxable Accounts)</h3>
                  <ul>
                    <li><strong>REITs:</strong> Realty Income (O), VICI Properties (VICI) - ordinary income</li>
                    <li><strong>MLPs:</strong> Enterprise Products (EPD) - return of capital, complex K-1s</li>
                    <li><strong>Preferred Stocks:</strong> Many pay ordinary dividends</li>
                  </ul>
                </section>

                {/* Strategy 3: Asset Location */}
                <section id="strategy-3">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-purple-600" />
                    Strategy 3: Master Asset Location
                  </h2>
                  <p>
                    It's not just <em>what</em> you own - it's <strong>where</strong> you own it. Strategic asset location
                    can save thousands in taxes by placing the right investments in the right account types.
                  </p>

                  <h3>The Perfect Asset Location Strategy</h3>
                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <Card className="bg-purple-50 dark:bg-purple-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <PiggyBank className="h-5 w-5 text-purple-600" />
                          Roth IRA
                        </h4>
                        <p className="text-sm font-semibold mb-2">Best For:</p>
                        <ul className="text-sm space-y-1">
                          <li>• High-yield REITs (6-10%)</li>
                          <li>• BDCs (8-12%)</li>
                          <li>• Preferred stocks</li>
                          <li>• MLPs</li>
                        </ul>
                        <p className="text-xs mt-3 text-purple-600 font-semibold">Why: Turn heavily-taxed income into tax-free income</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          Traditional 401(k)/IRA
                        </h4>
                        <p className="text-sm font-semibold mb-2">Best For:</p>
                        <ul className="text-sm space-y-1">
                          <li>• High-yield bonds</li>
                          <li>• Corporate bonds</li>
                          <li>• Bond ETFs</li>
                          <li>• Taxable REITs</li>
                        </ul>
                        <p className="text-xs mt-3 text-blue-600 font-semibold">Why: Defer taxes until retirement (lower bracket)</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 dark:bg-green-950/50">
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-green-600" />
                          Taxable Brokerage
                        </h4>
                        <p className="text-sm font-semibold mb-2">Best For:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Qualified dividend stocks</li>
                          <li>• Dividend Aristocrats</li>
                          <li>• Growth stocks (low/no div)</li>
                          <li>• Index funds (tax-efficient)</li>
                        </ul>
                        <p className="text-xs mt-3 text-green-600 font-semibold">Why: Lowest tax rates (0-20%) on qualified dividends</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Asset Location Savings Example</h4>
                      <p className="text-sm mb-3">$100,000 portfolio: 50% stocks (4% yield), 50% REITs (7% yield)</p>

                      <div className="space-y-4 text-sm">
                        <div className="border-b pb-3">
                          <p className="font-semibold text-red-600 mb-2">❌ Bad Location (All in Taxable Account)</p>
                          <p>• Stock dividends: $2,000 × 15% = $300 tax</p>
                          <p>• REIT dividends: $3,500 × 24% = $840 tax</p>
                          <p className="font-bold mt-1">Total Tax: $1,140/year</p>
                        </div>

                        <div>
                          <p className="font-semibold text-green-600 mb-2">✅ Smart Location</p>
                          <p>• Stocks in taxable: $2,000 × 15% = $300 tax</p>
                          <p>• REITs in Roth IRA: $3,500 × 0% = $0 tax</p>
                          <p className="font-bold mt-1 text-green-600">Total Tax: $300/year</p>
                        </div>

                        <div className="border-t pt-3">
                          <p className="font-bold text-lg">Annual Savings: $840</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">30-year savings: $25,200+</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 4: Tax-Loss Harvesting */}
                <section id="strategy-4">
                  <h2 className="flex items-center gap-2">
                    <RefreshCw className="h-7 w-7 text-orange-600" />
                    Strategy 4: Tax-Loss Harvesting
                  </h2>
                  <p>
                    Turn investment losses into tax wins. Tax-loss harvesting lets you offset dividend income with capital
                    losses, reducing your overall tax bill.
                  </p>

                  <h3>How It Works</h3>
                  <ol>
                    <li><strong>Sell losing positions:</strong> Stock down 10-20%? Sell it to realize the loss</li>
                    <li><strong>Offset gains/income:</strong> Use losses to offset capital gains or up to $3,000 of ordinary income</li>
                    <li><strong>Maintain exposure:</strong> Buy a similar (but not identical) investment to stay in the market</li>
                    <li><strong>Avoid wash sale:</strong> Wait 30 days before repurchasing the exact same security</li>
                  </ol>

                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Real Example: $1,200 Tax Savings</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold">Situation:</p>
                          <p>• Dividend income: $8,000 (qualified, 15% tax = $1,200)</p>
                          <p>• Stock position down $8,000 (unrealized loss)</p>
                        </div>
                        <div>
                          <p className="font-semibold">Action:</p>
                          <p>• Sell losing stock, realize $8,000 capital loss</p>
                          <p>• Buy similar ETF to maintain market exposure</p>
                        </div>
                        <div>
                          <p className="font-semibold text-green-600">Result:</p>
                          <p>• $8,000 loss offsets $8,000 dividend income</p>
                          <p className="font-bold text-green-600">Tax Saved: $1,200</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Tax-Loss Harvesting Strategies</h3>
                  <ul>
                    <li><strong>December strategy:</strong> Harvest losses before year-end to offset current year's dividends</li>
                    <li><strong>Quarterly harvesting:</strong> Review portfolio each quarter for harvest opportunities</li>
                    <li><strong>Swap to similar funds:</strong> Sell VTI, buy ITOT (both S&P 500 ETFs, avoid wash sale)</li>
                    <li><strong>Carry forward losses:</strong> Losses beyond $3,000/year carry forward indefinitely</li>
                  </ul>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Wash Sale Rule Warning</h4>
                          <p className="text-sm mb-0">
                            Don't buy the same security 30 days before or after selling it for a loss. The IRS will disallow
                            the loss. Instead, buy a similar but different fund (e.g., VOO instead of SPY).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 5: 401(k) for High-Yielders */}
                <section id="strategy-5">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-indigo-600" />
                    Strategy 5: Use 401(k) for High-Yield Investments
                  </h2>
                  <p>
                    Your 401(k) is a tax-deferred fortress. Perfect for holding high-yield investments that would otherwise
                    create massive tax bills in taxable accounts.
                  </p>

                  <Card className="my-6 bg-indigo-50 dark:bg-indigo-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">High-Yield Investments Perfect for 401(k)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-2">High Tax Drag (Keep in 401k):</p>
                          <ul className="space-y-1">
                            <li>• High-yield bond funds (5-7%)</li>
                            <li>• Junk bond ETFs (8-10%)</li>
                            <li>• Emerging market bonds</li>
                            <li>• Actively managed funds</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Tax-Efficient (Keep in Taxable):</p>
                          <ul className="space-y-1">
                            <li>• Total stock market index</li>
                            <li>• S&P 500 ETFs</li>
                            <li>• Qualified dividend stocks</li>
                            <li>• Growth stocks (no dividends)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Tax Savings Example</h3>
                  <Card className="my-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-3">$50,000 in high-yield bond fund paying 6% = $3,000/year</p>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span>In Taxable Account (24% bracket):</span>
                          <span className="font-bold text-red-600">$720/year tax</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>In 401(k) (tax-deferred):</span>
                          <span className="font-bold text-green-600">$0/year tax</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between items-center">
                          <span className="font-bold">Annual Savings:</span>
                          <span className="font-bold text-green-600 text-lg">$720</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                        Note: You'll pay tax at withdrawal, but likely in a lower bracket in retirement
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 6: HSA */}
                <section id="strategy-6">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-emerald-600" />
                    Strategy 6: HSA Triple Tax Advantage
                  </h2>
                  <p>
                    Health Savings Accounts (HSAs) are the <strong>most tax-advantaged account</strong> in existence.
                    Triple tax benefit: tax-deductible contributions, tax-free growth, tax-free withdrawals for medical expenses.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-4">HSA Triple Tax Advantage</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">1. Tax-Deductible Contributions</p>
                            <p className="text-sm">2026 limits: $4,300 individual, $8,550 family</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">2. Tax-Free Growth</p>
                            <p className="text-sm">Dividends and capital gains grow 100% tax-free</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">3. Tax-Free Withdrawals</p>
                            <p className="text-sm">For qualified medical expenses (and penalty-free after 65)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>HSA as a Dividend Powerhouse</h3>
                  <p>
                    Most people use HSAs for short-term medical expenses. Smart investors use them as long-term
                    dividend growth accounts - paying medical expenses out of pocket and letting the HSA grow tax-free.
                  </p>

                  <Card className="my-6 bg-emerald-50 dark:bg-emerald-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">30-Year HSA Dividend Strategy</h4>
                      <div className="space-y-2 text-sm">
                        <p>• Max contribute $8,550/year (family) from age 30-60</p>
                        <p>• Invest in dividend growth stocks (4% yield, 8% annual growth)</p>
                        <p>• Pay medical expenses from checking account</p>
                        <p>• Never withdraw from HSA</p>
                        <div className="border-t mt-4 pt-4">
                          <p className="font-bold text-lg mb-1">Age 60 Balance: ~$850,000</p>
                          <p className="font-bold text-emerald-600 text-lg">Annual Dividends: $34,000 tax-free</p>
                          <p className="text-xs mt-2">Compared to taxable account: $5,100-8,900/year tax savings</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 7: Municipal Bonds */}
                <section id="strategy-7">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    Strategy 7: Municipal Bonds Alternative
                  </h2>
                  <p>
                    If you're in a high tax bracket, consider <strong>municipal bonds</strong> instead of taxable dividend stocks.
                    Muni bond interest is exempt from federal taxes (and often state taxes if you buy in-state bonds).
                  </p>

                  <h3>Tax-Equivalent Yield Comparison</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">
                        Formula: Tax-Equivalent Yield = Muni Yield ÷ (1 - Tax Rate)
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Muni Yield</th>
                              <th className="border p-2 text-center">24% Bracket</th>
                              <th className="border p-2 text-center">32% Bracket</th>
                              <th className="border p-2 text-center">37% Bracket</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2 font-bold">3.0%</td>
                              <td className="border p-2 text-center">3.95%</td>
                              <td className="border p-2 text-center">4.41%</td>
                              <td className="border p-2 text-center">4.76%</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-2 font-bold">4.0%</td>
                              <td className="border p-2 text-center">5.26%</td>
                              <td className="border p-2 text-center">5.88%</td>
                              <td className="border p-2 text-center">6.35%</td>
                            </tr>
                            <tr>
                              <td className="border p-2 font-bold">5.0%</td>
                              <td className="border p-2 text-center">6.58%</td>
                              <td className="border p-2 text-center">7.35%</td>
                              <td className="border p-2 text-center">7.94%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>When Municipal Bonds Win</h3>
                  <ul>
                    <li><strong>High tax bracket:</strong> 32% or 37% bracket makes munis highly attractive</li>
                    <li><strong>State tax savings:</strong> In-state munis avoid state taxes (huge in CA, NY, NJ)</li>
                    <li><strong>Stable income:</strong> Munis are generally safer than high-yield stocks</li>
                    <li><strong>Large portfolios:</strong> Best for $500K+ portfolios where muni bond ladders make sense</li>
                  </ul>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Real Savings Example</h4>
                      <p className="text-sm mb-3">$100,000 invested, 37% federal + 9.3% CA state = 46.3% total tax</p>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Corporate dividend: 5% = $5,000</span>
                          <span>After tax: <strong>$2,685</strong></span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>CA muni bond: 4% = $4,000</span>
                          <span>After tax: <strong>$4,000</strong></span>
                        </div>
                        <div className="border-t pt-3">
                          <p className="font-bold text-green-600 text-lg">Muni wins by $1,315/year!</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 8: Manage Tax Bracket */}
                <section id="strategy-8">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-purple-600" />
                    Strategy 8: Manage Your Tax Bracket
                  </h2>
                  <p>
                    Small income changes can trigger huge tax bracket jumps. Strategic income management keeps you in
                    lower brackets and qualifies you for the 0% qualified dividend rate.
                  </p>

                  <h3>2026 Tax Brackets for Qualified Dividends</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Filing Status</th>
                          <th className="border p-3 text-center">0% Rate</th>
                          <th className="border p-3 text-center">15% Rate</th>
                          <th className="border p-3 text-center">20% Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">Single</td>
                          <td className="border p-3 text-center">$0-44,625</td>
                          <td className="border p-3 text-center">$44,626-492,300</td>
                          <td className="border p-3 text-center">$492,301+</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Married Filing Jointly</td>
                          <td className="border p-3 text-center">$0-89,250</td>
                          <td className="border p-3 text-center">$89,251-553,850</td>
                          <td className="border p-3 text-center">$553,851+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Strategies to Stay in Lower Brackets</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Max 401(k) contributions:</strong> $23,000 reduces taxable income (2026 limit)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Max HSA contributions:</strong> $8,550 family reduces income (triple tax benefit)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Traditional IRA:</strong> $7,000 deduction if you qualify</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Charitable donations:</strong> Itemize to reduce AGI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Business expenses:</strong> If self-employed, maximize deductions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>The 0% Dividend Tax Sweet Spot</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Example: Married Couple Living on Dividends</h4>
                      <div className="space-y-2 text-sm">
                        <p>Target: Stay under $89,250 taxable income for 0% qualified dividend rate</p>
                        <div className="border-t border-b py-3 my-3 space-y-1">
                          <p>Standard deduction 2026: <strong>$30,000</strong></p>
                          <p>0% dividend threshold: <strong>$89,250</strong></p>
                          <p className="font-bold text-green-600">Total income before tax: $119,250</p>
                        </div>
                        <p>Portfolio needed at 4% yield: <strong>$2,981,250</strong></p>
                        <p className="font-bold text-green-600 text-lg mt-3">Pay ZERO federal tax on $119,250/year!</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 9: Avoid Dividend Traps */}
                <section id="strategy-9">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    Strategy 9: Avoid Dividend Capture Traps
                  </h2>
                  <p>
                    Timing matters! Buying right before the ex-dividend date might seem smart, but it triggers
                    <strong> taxable dividends without the qualified holding period</strong>.
                  </p>

                  <h3>The Dividend Capture Trap</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold mb-2">Why Dividend Capture Fails</h4>
                          <ol className="space-y-2 text-sm">
                            <li>1. You buy stock the day before ex-dividend date</li>
                            <li>2. Stock price drops by the dividend amount on ex-div date</li>
                            <li>3. You receive dividend but haven't held 60 days</li>
                            <li>4. Dividend taxed as ordinary income (up to 37%), not qualified (0-20%)</li>
                            <li>5. You lost money: capital loss + high taxes</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The 60-Day Holding Period Rule</h3>
                  <p>
                    To get qualified dividend treatment (0-20% tax), you must hold the stock for <strong>more than 60 days
                    during the 121-day period</strong> that begins 60 days before the ex-dividend date.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Smart Dividend Strategy</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Buy and hold long-term:</strong> Easiest way to ensure qualified status</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Track holding periods:</strong> Mark purchase dates, don't sell before 61 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Ignore ex-div dates:</strong> Don't time purchases around dividends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Use DRIP carefully:</strong> Each DRIP purchase starts a new 60-day clock</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Strategy 10: Capital Gains Harvesting */}
                <section id="strategy-10">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    Strategy 10: Capital Gains Harvesting
                  </h2>
                  <p>
                    The opposite of tax-loss harvesting. If you're in the 0% capital gains bracket, <strong>intentionally
                    realize gains</strong> to reset your cost basis higher - completely tax-free!
                  </p>

                  <h3>Who Can Use This Strategy</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-3">
                        If your taxable income is below these thresholds, you pay <strong>0% on long-term capital gains</strong>:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Single: $44,625 or less (2026)</li>
                        <li>• Married: $89,250 or less (2026)</li>
                      </ul>
                      <p className="text-sm mt-3 font-semibold">
                        Perfect for early retirees, semi-retired, or low-income years
                      </p>
                    </CardContent>
                  </Card>

                  <h3>How Capital Gains Harvesting Works</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Example: Resetting Cost Basis Tax-Free</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold">Situation:</p>
                          <p>• Married couple, $70,000 taxable income (below $89,250 threshold)</p>
                          <p>• Own $50,000 of dividend stocks with $20,000 unrealized gains</p>
                        </div>
                        <div>
                          <p className="font-semibold">Action:</p>
                          <p>• Sell all positions, realize $20,000 gain</p>
                          <p>• Immediately repurchase same stocks (no wash sale rule for gains!)</p>
                        </div>
                        <div>
                          <p className="font-semibold text-green-600">Result:</p>
                          <p>• Pay $0 tax (0% rate)</p>
                          <p>• New cost basis: $50,000 instead of $30,000</p>
                          <p className="font-bold text-green-600">Future tax savings: $3,000-4,000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>When to Use This Strategy</h3>
                  <ul>
                    <li><strong>Low-income years:</strong> Between jobs, sabbatical, early retirement</li>
                    <li><strong>Annually:</strong> Harvest gains every year you're in 0% bracket</li>
                    <li><strong>Before retirement ends:</strong> Once RMDs kick in, income jumps</li>
                    <li><strong>No wash sale rule:</strong> Can rebuy immediately (unlike tax-loss harvesting)</li>
                  </ul>
                </section>

                {/* Strategy 11: Charitable Donations */}
                <section id="strategy-11">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Strategy 11: Donate Appreciated Dividend Stocks
                  </h2>
                  <p>
                    Want to give to charity? Donate <strong>appreciated dividend stocks</strong> instead of cash.
                    You avoid capital gains tax AND get a charitable deduction for the full market value.
                  </p>

                  <h3>Double Tax Benefit</h3>
                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Benefit 1: Avoid Capital Gains Tax</p>
                            <p className="text-sm">Never pay tax on the appreciation when you donate stock</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Benefit 2: Deduct Full Market Value</p>
                            <p className="text-sm">Itemize and deduct the current value, not what you paid</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Real Example: $2,400 Tax Savings</h3>
                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p className="font-semibold">Want to donate $10,000 to charity</p>

                        <div className="border-b pb-3">
                          <p className="font-semibold text-red-600 mb-2">❌ Bad Way: Donate Cash</p>
                          <p>• Sell stock: $10,000 value, $4,000 cost basis</p>
                          <p>• Pay capital gains: $6,000 gain × 20% = $1,200 tax</p>
                          <p>• Donate: $10,000 cash</p>
                          <p>• Deduction: $10,000 × 24% = $2,400 saved</p>
                          <p className="font-bold mt-1">Net benefit: $1,200</p>
                        </div>

                        <div>
                          <p className="font-semibold text-green-600 mb-2">✅ Smart Way: Donate Stock</p>
                          <p>• Donate stock directly: $10,000 value</p>
                          <p>• Pay capital gains: $0 (no sale occurred)</p>
                          <p>• Deduction: $10,000 × 24% = $2,400 saved</p>
                          <p className="font-bold mt-1 text-green-600">Net benefit: $2,400</p>
                        </div>

                        <div className="border-t pt-3">
                          <p className="font-bold text-lg">Extra Savings: $1,200</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Advanced Strategy: Donor-Advised Funds (DAFs)</h3>
                  <p>
                    Donate appreciated stocks to a donor-advised fund, get an immediate tax deduction, then distribute
                    to charities over time. Perfect for large one-time stock windfalls.
                  </p>

                  <ul>
                    <li><strong>Immediate deduction:</strong> Take full deduction in high-income year</li>
                    <li><strong>Invest tax-free:</strong> DAF assets grow tax-free while you decide where to give</li>
                    <li><strong>Give over time:</strong> Distribute to charities annually from the fund</li>
                    <li><strong>Popular DAFs:</strong> Fidelity Charitable, Schwab Charitable, Vanguard Charitable</li>
                  </ul>
                </section>

                {/* Real-World Example */}
                <section id="example">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-purple-600" />
                    Real-World Example: Combining All 11 Strategies
                  </h2>
                  <p>
                    Let's see how these strategies work together to dramatically reduce taxes on a $100,000 dividend portfolio.
                  </p>

                  <Card className="my-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Portfolio: $100,000 Total</h3>

                      <div className="space-y-6">
                        {/* Before */}
                        <div className="border-b pb-4">
                          <h4 className="font-bold text-red-600 mb-3">❌ Before: No Tax Optimization</h4>
                          <div className="space-y-2 text-sm">
                            <p>• All investments in taxable account</p>
                            <p>• Mix of REITs (7% yield) and stocks (4% yield)</p>
                            <p>• Total dividends: $5,500/year</p>
                            <p>• Tax at 24% bracket: <strong className="text-red-600">$1,320/year</strong></p>
                          </div>
                        </div>

                        {/* After */}
                        <div>
                          <h4 className="font-bold text-green-600 mb-3">✅ After: All 11 Strategies Applied</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-semibold">Strategy 1-3: Account Optimization</p>
                              <p>• $7,000 REITs in Roth IRA (7% = $490 tax-free)</p>
                              <p>• $23,000 REITs in 401(k) (7% = $1,610 tax-deferred)</p>
                              <p>• $70,000 qualified dividend stocks in taxable (4% = $2,800)</p>
                            </div>

                            <div>
                              <p className="font-semibold">Strategy 2: Qualified Dividends</p>
                              <p>• Taxable dividends all qualified: $2,800 × 15% = $420 tax</p>
                            </div>

                            <div>
                              <p className="font-semibold">Strategy 4: Tax-Loss Harvesting</p>
                              <p>• Harvest $3,000 loss, offset other income</p>
                              <p>• Save: $3,000 × 24% = $720</p>
                            </div>

                            <div>
                              <p className="font-semibold">Strategy 8: Max 401(k) Contribution</p>
                              <p>• Contribute $23,000 to 401(k)</p>
                              <p>• Reduce taxable income: $23,000 × 24% = $5,520 saved</p>
                            </div>

                            <div className="border-t pt-3 mt-3">
                              <p className="font-bold text-lg mb-1">Total Tax on Dividends: $420</p>
                              <p className="font-bold text-green-600 text-xl">Annual Savings: $900 + $5,520 = $6,420</p>
                              <p className="text-xs mt-2">30-year savings: $192,600+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Quick Reference Table */}
                <section>
                  <h2>Quick Reference: All 11 Strategies</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Strategy</th>
                          <th className="border p-3 text-left">Best For</th>
                          <th className="border p-3 text-center">Difficulty</th>
                          <th className="border p-3 text-center">Potential Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">1. Max Roth IRA</td>
                          <td className="border p-3">Everyone under income limits</td>
                          <td className="border p-3 text-center">Easy</td>
                          <td className="border p-3 text-center">$200-500/year</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">2. Qualified Dividends</td>
                          <td className="border p-3">Long-term investors</td>
                          <td className="border p-3 text-center">Easy</td>
                          <td className="border p-3 text-center">$500-2,000/year</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">3. Asset Location</td>
                          <td className="border p-3">Multi-account investors</td>
                          <td className="border p-3 text-center">Medium</td>
                          <td className="border p-3 text-center">$800-3,000/year</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">4. Tax-Loss Harvesting</td>
                          <td className="border p-3">Active investors</td>
                          <td className="border p-3 text-center">Medium</td>
                          <td className="border p-3 text-center">$300-1,500/year</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">5. Use 401(k)</td>
                          <td className="border p-3">Employees with 401(k)</td>
                          <td className="border p-3 text-center">Easy</td>
                          <td className="border p-3 text-center">$1,000-5,000/year</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">6. HSA</td>
                          <td className="border p-3">High-deductible health plan</td>
                          <td className="border p-3 text-center">Easy</td>
                          <td className="border p-3 text-center">$400-1,500/year</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">7. Municipal Bonds</td>
                          <td className="border p-3">High earners (32-37% bracket)</td>
                          <td className="border p-3 text-center">Medium</td>
                          <td className="border p-3 text-center">$1,000-4,000/year</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">8. Manage Brackets</td>
                          <td className="border p-3">Near bracket thresholds</td>
                          <td className="border p-3 text-center">Hard</td>
                          <td className="border p-3 text-center">$500-3,000/year</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">9. Avoid Div Traps</td>
                          <td className="border p-3">All investors</td>
                          <td className="border p-3 text-center">Easy</td>
                          <td className="border p-3 text-center">$100-500/year</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">10. Gains Harvesting</td>
                          <td className="border p-3">Low-income/retirees</td>
                          <td className="border p-3 text-center">Medium</td>
                          <td className="border p-3 text-center">$1,000-5,000 (one-time)</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">11. Charitable Donations</td>
                          <td className="border p-3">Charitable givers</td>
                          <td className="border p-3 text-center">Easy</td>
                          <td className="border p-3 text-center">$500-2,000/year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Tax Savings</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to estimate your dividend income and see how much you could save
                        with these tax strategies.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Tax Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            Retirement Income Planner
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Tax-Efficient Brokers for Dividend Investing</h2>
                  <p>
                    Choose a broker that makes tax optimization easy with automatic tax-loss harvesting, detailed tax reports,
                    and low-cost dividend reinvestment.
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Tax & Dividend Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/dividend-tax-guide-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Dividend Tax Guide 2026
                    </Link>
                    <Link href="/blog/qualified-vs-ordinary-dividends-explained" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Qualified vs Ordinary Dividends Explained
                    </Link>
                    <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Roth IRA vs Taxable Account for Dividends
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      DRIP Investing: Tax-Efficient Compounding
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Tax Comparison
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
