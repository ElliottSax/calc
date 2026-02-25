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
  Flame,
  Calculator,
  Percent,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Account for Dividend Stocks: Roth IRA vs Taxable vs 401k (2026)',
  description: 'Discover the best account type for dividend stocks. Complete comparison of Roth IRA, taxable accounts, and 401k with real tax savings examples. Learn optimal asset location strategy.',
  keywords: 'best account for dividend stocks, Roth IRA dividend stocks, taxable account dividends, 401k dividends, asset location strategy, tax-free dividends, dividend tax optimization',
  openGraph: {
    title: 'Best Account for Dividend Stocks: Complete Tax Optimization Guide',
    description: 'Learn which account type maximizes your dividend returns. Roth IRA vs taxable vs 401k comparison with real tax savings examples.',
    type: 'article',
  }
}

export default function BestAccountForDividendStocksPage() {
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
                <Badge className="mb-4">Tax Optimization Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Best Account for Dividend Stocks: Roth IRA vs Taxable vs 401k
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Choosing the right account for your dividend stocks can save you thousands in taxes every year.
                  Here's the complete guide to maximizing your after-tax returns with optimal account placement.
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
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Overall: Roth IRA</strong> - Tax-free dividends forever, no RMDs, perfect for high-yield stocks (save $15,000+ over 30 years per $100K invested)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Second Best: Taxable Account</strong> - Qualified dividends taxed at only 15-20%, flexible access, ideal for dividend aristocrats</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Generally Avoid: 401k/Traditional IRA</strong> - Dividends taxed as ordinary income (up to 37%), better for growth stocks</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#why-account-matters" className="text-blue-600 hover:underline">Why Account Type Matters</a></li>
                    <li><a href="#roth-ira" className="text-blue-600 hover:underline">Roth IRA: The Tax-Free Winner</a></li>
                    <li><a href="#taxable" className="text-blue-600 hover:underline">Taxable Accounts</a></li>
                    <li><a href="#traditional-401k" className="text-blue-600 hover:underline">Traditional 401k/IRA</a></li>
                    <li><a href="#comparison-table" className="text-blue-600 hover:underline">Head-to-Head Comparison</a></li>
                    <li><a href="#tax-examples" className="text-blue-600 hover:underline">Real Tax Savings Examples</a></li>
                    <li><a href="#asset-location" className="text-blue-600 hover:underline">Asset Location Strategy</a></li>
                    <li><a href="#calculator" className="text-blue-600 hover:underline">Account Comparison Calculator</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Why It Matters */}
                <section id="why-account-matters">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Why Account Type Matters for Dividend Stocks
                  </h2>
                  <p>
                    Here's a sobering fact: <strong>The wrong account choice can cost you $20,000-50,000+ in taxes over your investing lifetime.</strong>
                  </p>
                  <p>
                    Unlike growth stocks that only get taxed when you sell, dividend stocks generate taxable income every quarter.
                    This compounds year after year, making account selection absolutely critical.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-yellow-600" />
                        Real-World Example: $100,000 Investment Over 30 Years
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p className="mb-3">A $100,000 portfolio yielding 5% annually generates $5,000/year in dividends:</p>
                        <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <div className="flex justify-between">
                            <span className="font-semibold">Roth IRA:</span>
                            <span className="text-green-600 font-bold">$0 taxes (save $51,750)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Taxable (Qualified):</span>
                            <span className="text-blue-600 font-bold">$22,500 taxes (15% rate)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Traditional 401k:</span>
                            <span className="text-red-600 font-bold">$51,750 taxes (24% rate)</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                          *Assumes 24% ordinary income tax bracket, 15% capital gains rate, 30 years of $5,000 annual dividends
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The right account can literally save you enough to retire years earlier or live more comfortably in retirement.
                    Let's break down each option.
                  </p>
                </section>

                {/* Roth IRA Section */}
                <section id="roth-ira">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-purple-600" />
                    Roth IRA: The Tax-Free Champion
                  </h2>
                  <p>
                    For most dividend investors, <strong>Roth IRAs are the absolute best account type</strong>. Here's why:
                  </p>

                  <h3>How Roth IRAs Work for Dividends</h3>
                  <ul>
                    <li>You contribute after-tax money (already paid income tax)</li>
                    <li>Dividends grow 100% tax-free inside the account</li>
                    <li>Qualified withdrawals in retirement are completely tax-free</li>
                    <li>No Required Minimum Distributions (RMDs) ever</li>
                  </ul>

                  <h3>Massive Advantages for Dividend Stocks</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Zero Tax on Dividends - Forever</h4>
                          <p className="text-sm mb-0">
                            A high-yield REIT paying 7% dividends? You keep every penny. In a taxable account, you'd lose
                            15-37% to taxes on the same dividends. Over 30 years, that's life-changing money.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Perfect for High-Yield Stocks</h4>
                          <p className="text-sm mb-0">
                            REITs, BDCs, MLPs, and high-yield dividend stocks that normally face heavy taxation become
                            completely tax-free. You can chase 6-10% yields without tax concerns.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Compounding Supercharger</h4>
                          <p className="text-sm mb-0">
                            When you DRIP dividends tax-free, 100% gets reinvested vs 63-85% in taxable accounts.
                            This creates exponential compounding advantages over decades.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Required Minimum Distributions</h4>
                          <p className="text-sm mb-0">
                            Unlike Traditional IRAs/401ks, Roth IRAs never force you to withdraw. Let your dividends
                            compound forever, or pass the account tax-free to heirs.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Tax-Free Income in Retirement</h4>
                          <p className="text-sm mb-0">
                            Need $40,000/year from dividends at age 65? Take it all tax-free. This is especially
                            powerful if you expect to be in a high tax bracket in retirement.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Limitations to Know</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Contribution Limits</h4>
                          <p className="text-sm mb-0">
                            2026 limits: $7,000/year ($8,000 if age 50+). This caps how much you can supercharge with
                            tax-free treatment annually.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Income Phaseouts</h4>
                          <p className="text-sm mb-0">
                            2026: Phaseout starts at $146,000 (single) or $230,000 (married). High earners need
                            backdoor Roth strategies.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">5-Year Rule for Earnings</h4>
                          <p className="text-sm mb-0">
                            Must hold the Roth for 5 years AND be 59.5+ to withdraw earnings tax-free. Contributions
                            can be withdrawn anytime penalty-free.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Best Dividend Stocks for Roth IRAs:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-purple-600" />
                          <span><strong>REITs:</strong> Realty Income (O), Agree Realty (ADC) - 5-6% yields, normally heavily taxed</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-purple-600" />
                          <span><strong>BDCs:</strong> Ares Capital (ARCC), Main Street Capital (MAIN) - 8-10% yields</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-purple-600" />
                          <span><strong>High-Yield Stocks:</strong> Altria (MO), AT&T (T) - 6-8% yields</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-purple-600" />
                          <span><strong>Preferred Stocks:</strong> Fixed-income like securities with 5-7% yields</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Taxable Account Section */}
                <section id="taxable">
                  <h2 className="flex items-center gap-2">
                    <PiggyBank className="h-7 w-7 text-blue-600" />
                    Taxable Accounts: The Flexible Runner-Up
                  </h2>
                  <p>
                    Regular brokerage accounts are the <strong>second-best choice for dividend stocks</strong>, and in
                    some situations, they might be better than a Roth IRA.
                  </p>

                  <h3>How Taxable Accounts Work for Dividends</h3>
                  <ul>
                    <li>Dividends are taxed the year you receive them</li>
                    <li><strong>Qualified dividends:</strong> Taxed at favorable 0-20% capital gains rates</li>
                    <li><strong>Ordinary dividends:</strong> Taxed at regular income rates (10-37%)</li>
                    <li>You receive a 1099-DIV each year reporting dividend income</li>
                  </ul>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">2026 Qualified Dividend Tax Rates:</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                              <th className="p-2 text-left">Income Level (Single)</th>
                              <th className="p-2 text-left">Income Level (Married)</th>
                              <th className="p-2 text-right">Tax Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="p-2">$0 - $47,025</td>
                              <td className="p-2">$0 - $94,050</td>
                              <td className="p-2 text-right font-bold text-green-600">0%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2">$47,026 - $518,900</td>
                              <td className="p-2">$94,051 - $583,750</td>
                              <td className="p-2 text-right font-bold text-blue-600">15%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2">$518,901+</td>
                              <td className="p-2">$583,751+</td>
                              <td className="p-2 text-right font-bold text-red-600">20%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                        *Most middle-class investors pay just 15% on qualified dividends vs 22-24% ordinary income
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Advantages of Taxable Accounts</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Contribution Limits</h4>
                          <p className="text-sm mb-0">
                            Invest $1 million if you want. Perfect for high-income earners who max out retirement accounts
                            and still have money to invest.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Access Money Anytime</h4>
                          <p className="text-sm mb-0">
                            Need cash before age 59.5? No penalties, no restrictions. Critical for early retirees or
                            emergency funds. Withdraw dividends or sell shares whenever needed.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Qualified Dividends = Low Taxes</h4>
                          <p className="text-sm mb-0">
                            Most U.S. stock dividends are "qualified" and taxed at only 15% for middle-income investors.
                            That's close to Roth IRA tax efficiency for many people.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Tax-Loss Harvesting</h4>
                          <p className="text-sm mb-0">
                            Offset dividend income by selling losers to harvest capital losses. You can deduct up to
                            $3,000/year against ordinary income, plus unlimited offsets against capital gains.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Step-Up Basis at Death</h4>
                          <p className="text-sm mb-0">
                            Your heirs inherit with a stepped-up cost basis, erasing all capital gains tax. A huge
                            estate planning advantage over Traditional IRAs.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Disadvantages of Taxable Accounts</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Annual Tax Drag on Dividends</h4>
                          <p className="text-sm mb-0">
                            Even at 15%, you lose some compounding power every year. A 5% yield becomes 4.25% after-tax,
                            which adds up over decades.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">REIT/BDC Dividends Hit Hard</h4>
                          <p className="text-sm mb-0">
                            Most REIT and BDC dividends are non-qualified, taxed at ordinary income rates (22-37%).
                            These belong in a Roth IRA instead.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Upfront Tax Deduction</h4>
                          <p className="text-sm mb-0">
                            Unlike Traditional 401k contributions, you get no tax break when you invest. You're using
                            after-tax dollars without the later tax-free treatment of a Roth.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Best Dividend Stocks for Taxable Accounts:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-600" />
                          <span><strong>Dividend Aristocrats:</strong> JNJ, PG, KO - qualified dividends, low turnover</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-600" />
                          <span><strong>Low-Yield Quality:</strong> MSFT, AAPL, V - qualified, minimal tax drag (1-2% yields)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-600" />
                          <span><strong>Dividend ETFs:</strong> SCHD, VYM, DGRO - qualified dividends, automatic rebalancing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-600" />
                          <span><strong>Avoid:</strong> REITs, BDCs, MLPs - mostly non-qualified (save for Roth IRA)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Traditional 401k/IRA Section */}
                <section id="traditional-401k">
                  <h2 className="flex items-center gap-2">
                    <Flame className="h-7 w-7 text-orange-600" />
                    Traditional 401k/IRA: Generally Avoid for Dividends
                  </h2>
                  <p>
                    Here's the uncomfortable truth: <strong>Traditional 401ks and IRAs are usually the worst place for
                    dividend stocks.</strong> Let me explain why.
                  </p>

                  <h3>How Traditional Accounts Tax Dividends</h3>
                  <ul>
                    <li>Dividends grow tax-deferred inside the account (good!)</li>
                    <li>But ALL withdrawals are taxed as ordinary income (bad!)</li>
                    <li>You lose the preferential 15% qualified dividend rate</li>
                    <li>Instead, you pay your full marginal rate: 22%, 24%, 32%, or even 37%</li>
                  </ul>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        The Tax Rate Conversion Problem
                      </h3>
                      <p className="text-sm mb-4">
                        Traditional accounts convert tax-advantaged dividend income into the highest-taxed income type:
                      </p>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded">
                          <span>Qualified Dividends (Taxable):</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">15% tax</Badge>
                        </div>
                        <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded">
                          <span>Same Dividends (Traditional 401k):</span>
                          <Badge className="bg-red-100 text-red-800">22-37% tax</Badge>
                        </div>
                      </div>
                      <p className="text-sm mt-4 font-semibold text-red-700 dark:text-red-400">
                        You actually PAY MORE tax by using a "tax-deferred" account for dividends!
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Why Traditional Accounts Fail for Dividends</h3>
                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Converts Low-Tax Dividends to High-Tax Income</h4>
                          <p className="text-sm mb-0">
                            Qualified dividends taxed at 15% become ordinary income taxed at 24%+. You're converting a
                            tax-advantaged asset into a tax-inefficient one.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Required Minimum Distributions (RMDs)</h4>
                          <p className="text-sm mb-0">
                            Starting at age 73, you MUST withdraw money whether you need it or not. This forces taxable
                            income and can push you into higher brackets or trigger Medicare surcharges.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">No Step-Up Basis for Heirs</h4>
                          <p className="text-sm mb-0">
                            Your kids inherit a "tax time bomb" - they must pay full ordinary income tax on withdrawals.
                            Taxable accounts give a step-up basis; Roth IRAs are tax-free.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Worse Than Just Paying Tax Now</h4>
                          <p className="text-sm mb-0">
                            Unless you drop to the 12% bracket in retirement (unlikely with dividends + Social Security),
                            you'd be better off in a taxable account paying 15% today.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>When Traditional Accounts Make Sense</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-3">
                        Traditional 401ks/IRAs aren't useless - they're just wrong for dividend stocks. Use them for:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>Growth stocks</strong> with no/low dividends (AMZN, GOOGL, BRK.B)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>Bonds and bond funds</strong> (interest taxed as ordinary income anyway)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>Employer match</strong> (free money beats all tax considerations)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>High-turnover strategies</strong> (active trading, rebalancing)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Comparison Table */}
                <section id="comparison-table">
                  <h2>Account Type Head-to-Head Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">Roth IRA</th>
                          <th className="border p-3 text-center">Taxable</th>
                          <th className="border p-3 text-center">Traditional 401k/IRA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Tax on Dividends</td>
                          <td className="border p-3 text-center text-green-600 font-bold">0% (Tax-Free)</td>
                          <td className="border p-3 text-center">15-20% (Qualified)</td>
                          <td className="border p-3 text-center text-red-600">22-37% (On withdrawal)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Annual Contribution Limit</td>
                          <td className="border p-3 text-center">$7,000 ($8,000 age 50+)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Unlimited</td>
                          <td className="border p-3 text-center">$23,000 ($30,500 age 50+)</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Access Before 59.5</td>
                          <td className="border p-3 text-center">Limited (contributions only)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Anytime</td>
                          <td className="border p-3 text-center text-red-600">10% penalty + tax</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Required Distributions</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Never</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Never</td>
                          <td className="border p-3 text-center text-red-600">Age 73+</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Best For</td>
                          <td className="border p-3 text-center">High-yield stocks, REITs, BDCs</td>
                          <td className="border p-3 text-center">Quality dividend aristocrats</td>
                          <td className="border p-3 text-center">Growth stocks, bonds</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Estate Planning</td>
                          <td className="border p-3 text-center text-green-600">Tax-free to heirs</td>
                          <td className="border p-3 text-center text-green-600">Step-up basis</td>
                          <td className="border p-3 text-center text-red-600">Heirs pay ordinary tax</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Upfront Tax Break</td>
                          <td className="border p-3 text-center">No</td>
                          <td className="border p-3 text-center">No</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Yes (Deductible)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Overall Ranking</td>
                          <td className="border p-3 text-center"><Badge className="bg-yellow-500">1st - Best</Badge></td>
                          <td className="border p-3 text-center"><Badge variant="secondary">2nd - Good</Badge></td>
                          <td className="border p-3 text-center"><Badge variant="destructive">3rd - Avoid</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Tax Examples */}
                <section id="tax-examples">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-indigo-600" />
                    Real Tax Savings Examples (2026)
                  </h2>
                  <p>
                    Let's see the actual dollar impact of account choice with real numbers. These examples show 30-year
                    results assuming 7% annual growth (5% yield + 2% appreciation) with dividends reinvested.
                  </p>

                  <h3>Example 1: $100,000 REIT Portfolio (7% Yield)</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-green-500">
                            <h4 className="font-bold text-sm mb-2 text-green-600">Roth IRA (Winner)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Final Value: <span className="font-bold">$761,226</span></p>
                              <p>Total Taxes Paid: <span className="font-bold text-green-600">$0</span></p>
                              <p>After-Tax Value: <span className="font-bold text-lg text-green-600">$761,226</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-blue-600">Taxable Account</h4>
                            <div className="space-y-1 text-sm">
                              <p>Final Value: <span className="font-bold">$608,973</span></p>
                              <p>Taxes on Dividends: <span className="font-bold text-red-600">$85,423</span></p>
                              <p>After-Tax Value: <span className="font-bold text-lg">$608,973</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-red-500">
                            <h4 className="font-bold text-sm mb-2 text-red-600">Traditional 401k</h4>
                            <div className="space-y-1 text-sm">
                              <p>Final Value: <span className="font-bold">$761,226</span></p>
                              <p>Tax on Withdrawal (24%): <span className="font-bold text-red-600">$182,694</span></p>
                              <p>After-Tax Value: <span className="font-bold text-lg text-red-600">$578,532</span></p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                          <p className="font-bold text-sm">Roth IRA Advantage:</p>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>Save $152,253 vs Taxable Account (25% more wealth)</li>
                            <li>Save $182,694 vs Traditional 401k (31% more wealth)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 2: $50,000 Dividend Aristocrat Portfolio (3% Yield)</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-green-500">
                            <h4 className="font-bold text-sm mb-2 text-green-600">Roth IRA</h4>
                            <div className="space-y-1 text-sm">
                              <p>Final Value: <span className="font-bold">$244,692</span></p>
                              <p>Total Taxes: <span className="font-bold text-green-600">$0</span></p>
                              <p>After-Tax: <span className="font-bold text-lg text-green-600">$244,692</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-blue-500">
                            <h4 className="font-bold text-sm mb-2 text-blue-600">Taxable (Close 2nd)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Final Value: <span className="font-bold">$232,144</span></p>
                              <p>Taxes Paid: <span className="font-bold text-orange-600">$12,548</span></p>
                              <p>After-Tax: <span className="font-bold text-lg">$232,144</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-red-600">Traditional 401k</h4>
                            <div className="space-y-1 text-sm">
                              <p>Final Value: <span className="font-bold">$244,692</span></p>
                              <p>Tax at Withdrawal: <span className="font-bold text-red-600">$58,726</span></p>
                              <p>After-Tax: <span className="font-bold text-lg text-red-600">$185,966</span></p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                          <p className="font-bold text-sm">Key Insight:</p>
                          <p className="text-sm mt-1">
                            For lower-yield stocks (3%), taxable accounts are nearly as good as Roth IRAs due to the
                            15% qualified dividend rate. The gap is only $12,548 (5% difference). But Traditional 401k
                            still costs you $46,178 more in taxes vs taxable.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 3: Early Retiree Needing $30,000/Year at Age 50</h3>
                  <Card className="my-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-sm font-semibold">Scenario: You retire at 50 and need $30,000/year in dividend income</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-green-600">Roth IRA</h4>
                            <div className="space-y-1 text-sm">
                              <p><XCircle className="h-4 w-4 text-red-600 inline mr-1" />Can't access earnings until 59.5</p>
                              <p className="text-xs text-slate-600">Must use contributions or SEPP</p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-green-500">
                            <h4 className="font-bold text-sm mb-2 text-green-600">Taxable (Best Here)</h4>
                            <div className="space-y-1 text-sm">
                              <p className="text-green-600"><CheckCircle2 className="h-4 w-4 inline mr-1" />Full access anytime</p>
                              <p>Tax: $4,500/year (15%)</p>
                              <p className="font-bold">Net Income: $25,500/year</p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-red-600">Traditional 401k</h4>
                            <div className="space-y-1 text-sm">
                              <p><XCircle className="h-4 w-4 text-red-600 inline mr-1" />10% early withdrawal penalty</p>
                              <p>Tax + Penalty: $11,100/year</p>
                              <p className="font-bold text-red-600">Net Income: $18,900/year</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                          <p className="font-bold text-sm">Winner: Taxable Account</p>
                          <p className="text-sm mt-1">
                            For early retirement before 59.5, taxable accounts dominate due to penalty-free access.
                            You'd need $600,000 at 5% yield to generate $30K/year pre-tax.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Asset Location Strategy */}
                <section id="asset-location">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    The Optimal Asset Location Strategy
                  </h2>
                  <p>
                    The smartest investors don't just pick one account - they use <strong>asset location</strong> to
                    optimize every dollar. Here's the proven strategy:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Priority Order: Where to Put What</h3>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-purple-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-purple-600 mt-1">Priority 1</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Roth IRA: High-Yield Dividend Stocks</h4>
                              <p className="text-sm mb-2">Max out your $7,000 contribution limit with the highest-taxed assets:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>REITs (Realty Income, Digital Realty, Prologis)</li>
                                <li>BDCs (Ares Capital, Main Street Capital)</li>
                                <li>High-yield stocks (Altria, AT&T, Verizon)</li>
                                <li>Preferred stocks and CEFs</li>
                                <li>Target: 5-8% yields</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-blue-600 mt-1">Priority 2</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Taxable Account: Qualified Dividend Stocks</h4>
                              <p className="text-sm mb-2">Fill taxable accounts with tax-efficient dividend payers:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>Dividend Aristocrats (JNJ, PG, KO, PEP)</li>
                                <li>Dividend ETFs (SCHD, VYM, DGRO)</li>
                                <li>Quality blue chips (MSFT, AAPL, JPM, V)</li>
                                <li>Target: 2-4% qualified dividend yields</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-orange-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-orange-600 mt-1">Priority 3</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Traditional 401k/IRA: Growth Stocks & Bonds</h4>
                              <p className="text-sm mb-2">Use tax-deferred space for non-dividend assets:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>Growth stocks (AMZN, GOOGL, TSLA, NVDA)</li>
                                <li>Total market index funds (VTI, VTSAX)</li>
                                <li>Bonds and bond funds (interest = ordinary income anyway)</li>
                                <li>Actively managed funds (high turnover)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Sample $250,000 Multi-Account Portfolio</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Roth IRA: $50,000</h4>
                            <Badge variant="secondary">20% of total</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>$20,000 - Realty Income (O) - 5.5% yield</p>
                            <p>$15,000 - Ares Capital (ARCC) - 9% yield</p>
                            <p>$15,000 - Altria (MO) - 8% yield</p>
                            <p className="font-bold text-green-600 mt-2">Annual Dividends: $3,475 (TAX-FREE)</p>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Taxable Account: $150,000</h4>
                            <Badge variant="secondary">60% of total</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>$60,000 - SCHD ETF - 3.5% yield</p>
                            <p>$40,000 - Johnson & Johnson (JNJ) - 3% yield</p>
                            <p>$30,000 - Procter & Gamble (PG) - 2.5% yield</p>
                            <p>$20,000 - Microsoft (MSFT) - 0.8% yield</p>
                            <p className="font-bold text-blue-600 mt-2">Annual Dividends: $4,510 (15% tax = $677)</p>
                            <p className="font-bold text-green-600">After-Tax: $3,833</p>
                          </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-950/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Traditional 401k: $50,000</h4>
                            <Badge variant="secondary">20% of total</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>$30,000 - VTI (Total Stock Market) - 1.5% yield</p>
                            <p>$20,000 - BND (Total Bond Market) - 3.5% yield</p>
                            <p className="font-bold text-orange-600 mt-2">Tax-Deferred Growth (pay tax later)</p>
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border-2 border-green-500">
                          <h4 className="font-bold mb-2">Portfolio Summary:</h4>
                          <div className="text-sm space-y-1">
                            <p>Total Annual Dividends: ~$8,535</p>
                            <p>Current Taxes Paid: $677 (only on taxable account dividends)</p>
                            <p>Tax Savings vs All-401k: ~$1,374/year</p>
                            <p className="font-bold text-green-600 mt-2">30-Year Tax Savings: $67,443 (with compounding)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Asset Location Rules of Thumb</h3>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <Percent className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Higher Yield = Roth IRA Priority</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              Every 1% of extra yield in a Roth IRA is worth 15-37% more over time vs other accounts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Percent className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Qualified Dividends = Taxable Account OK</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              15% tax isn't bad. Save Roth space for non-qualified dividends if you can.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Percent className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Non-Qualified = Absolutely Roth IRA</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              REITs and BDCs have no business in Traditional accounts (taxed at 37% vs 0% in Roth)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Percent className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Need Flexibility? Prioritize Taxable</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              Early retirement, emergencies, or irregular income? Keep more in taxable for penalty-free access.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Interactive Calculator Section */}
                <section id="calculator" className="not-prose">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h2 className="text-3xl font-bold mb-4 text-white">Compare Account Types with Real Numbers</h2>
                      <p className="mb-6 text-blue-100">
                        Use our calculators to see exactly how much you'll save by choosing the right account for your
                        dividend stocks. Run your own scenarios with your specific numbers.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <PiggyBank className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/ira">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <Shield className="h-5 w-5" />
                            IRA Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/401k">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <Building2 className="h-5 w-5" />
                            401k Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Action Plan */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                    Your Step-by-Step Action Plan
                  </h2>
                  <p>Ready to optimize your dividend accounts? Follow this checklist:</p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 1</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Open or Max Out Your Roth IRA</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Contribute $7,000 for 2026 ($8,000 if 50+). Open at Fidelity, Schwab, or Vanguard if you
                              don't have one yet. This is your tax-free dividend machine.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 2</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Fill Roth with Highest-Yield Assets</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Buy REITs, BDCs, and high-yield dividend stocks (5-10% yields) in your Roth IRA first.
                              These benefit most from tax-free treatment.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 3</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Use Taxable for Quality Dividend Aristocrats</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Once Roth is full, buy qualified dividend payers (JNJ, PG, SCHD) in taxable accounts.
                              The 15% tax rate is manageable.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 4</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Reserve 401k for Growth Stocks</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Keep dividend stocks out of Traditional 401k/IRA if possible. Use that space for growth
                              stocks, index funds, and bonds instead.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 5</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Review and Rebalance Annually</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Each year, check if you've optimized asset location. Move highest-taxed assets to most
                              tax-advantaged accounts as you add new money.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </section>

                {/* Final Verdict */}
                <section>
                  <h2>The Final Verdict</h2>
                  <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-lg font-semibold">
                          After analyzing thousands in potential tax savings, here's the simple truth:
                        </p>
                        <div className="space-y-3 text-base">
                          <p className="flex items-start gap-2">
                            <Award className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Roth IRA is the clear winner</strong> for dividend stocks, especially high-yield
                              (5%+) and non-qualified dividends. The tax-free compounding is unbeatable.
                            </span>
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Taxable accounts are a solid second choice</strong> for qualified dividend stocks
                              (2-4% yields). The 15% tax is reasonable, and you get full flexibility.
                            </span>
                          </p>
                          <p className="flex items-start gap-2">
                            <XCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Avoid Traditional 401k/IRA for dividends</strong> unless you have no other choice.
                              Converting 15% qualified dividends into 24-37% ordinary income is wealth destruction.
                            </span>
                          </p>
                        </div>
                        <p className="text-base pt-4 border-t">
                          The difference between smart and poor account selection is <strong>$50,000-200,000+ over a lifetime</strong>.
                          Take the time to get this right, and your future self will thank you.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Investing Across All Account Types</h2>
                  <p>
                    Whether you choose Roth IRA, taxable, or 401k, you'll need a brokerage account. These top-rated
                    brokers offer all account types with zero commissions on stocks and ETFs:
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* FAQ Schema */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Can I hold dividend stocks in both Roth IRA and taxable accounts?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Absolutely! The smart strategy is to use both - put your highest-yield, most tax-inefficient
                        dividend stocks (REITs, BDCs) in your Roth IRA, and put qualified dividend aristocrats in your
                        taxable account. This optimizes your overall tax situation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What if I can only invest through my employer's 401k?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        If 401k is your only option, dividend stocks can still work - just expect to pay ordinary income
                        tax rates on withdrawals in retirement. Focus on total return rather than just yield, and consider
                        opening a Roth IRA on the side even if you can only contribute small amounts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Should I convert my Traditional IRA dividend stocks to a Roth IRA?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Possibly, if you can afford the tax hit now. Roth conversions make most sense when: (1) you're in
                        a lower tax bracket now than expected in retirement, (2) you have cash outside the IRA to pay the
                        taxes, and (3) you have 10+ years for tax-free growth to offset the upfront tax. Run the numbers
                        with a tax professional first.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Are REITs really that much worse in taxable accounts?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Yes. REIT dividends are typically non-qualified and taxed at ordinary income rates (22-37% for
                        most investors) rather than the preferential 15% qualified dividend rate. On a $10,000 REIT
                        investment yielding 6%, that's $600/year in dividends - you'd pay $90/year (15%) if qualified or
                        $144-222/year (24-37%) for non-qualified. That 2.5x difference compounds significantly over decades.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Roth IRA vs Taxable Account: Complete Comparison
                    </Link>
                    <Link href="/blog/dividend-tax-guide-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Dividend Tax Guide 2026
                    </Link>
                    <Link href="/blog/qualified-vs-ordinary-dividends-explained" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Qualified vs Ordinary Dividends Explained
                    </Link>
                    <Link href="/blog/best-high-yield-reits-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best High-Yield REITs for Your Roth IRA
                    </Link>
                    <Link href="/blog/how-to-build-dividend-portfolio-from-scratch" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a Dividend Portfolio from Scratch
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
