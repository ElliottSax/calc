import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calculator, Shield, DollarSign, AlertTriangle, CheckCircle2, FileText } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Complete Dividend Tax Guide 2026: Rates, Rules & Strategies',
  description: 'Master dividend taxation with our comprehensive 2026 guide. Learn qualified vs ordinary rates, tax-advantaged accounts, and legal strategies to minimize your tax bill.',
}

export default function DividendTaxGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <FileText className="h-3 w-3 mr-1" />
          Updated for 2026 Tax Year
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Complete Dividend Tax Guide 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Everything you need to know about dividend taxation—qualified vs ordinary rates,
          tax-advantaged accounts, and legal strategies to keep more of your dividends.
        </p>
      </div>

      {/* Quick Facts */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Key Facts for 2026</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-green-600">Qualified Dividends</p>
              <p>0%, 15%, or 20% tax</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Based on income bracket</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600">Ordinary Dividends</p>
              <p>10% to 37% tax</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Same as your income tax</p>
            </div>
            <div>
              <p className="font-semibold text-blue-600">Roth IRA Dividends</p>
              <p>0% tax forever</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Best tax treatment</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Dividends are taxed differently than other investment income. Understanding the rules can save you
          thousands of dollars annually. The difference between <strong>qualified</strong> and <strong>ordinary</strong> dividends
          alone can mean paying 0% vs 37% tax on the same income.
        </p>
        <p>
          This guide covers everything: tax rates by income level, how to qualify for lower rates, which accounts
          offer tax advantages, and legal strategies to minimize your dividend tax bill.
        </p>
      </div>

      {/* Qualified vs Ordinary */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Qualified vs Ordinary Dividends: The Big Difference</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Qualified Dividends</CardTitle>
              <Badge variant="outline" className="text-green-600 border-green-600">Lower Tax Rate</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">
                Taxed at long-term capital gains rates: <strong>0%, 15%, or 20%</strong> depending on your income.
                Most dividends from U.S. corporations and qualified foreign companies fall into this category.
              </p>

              <p className="text-sm font-semibold mb-2">Requirements to Qualify:</p>
              <ul className="text-sm space-y-1 mb-4">
                <li>✓ Paid by U.S. corporation or qualified foreign company</li>
                <li>✓ You held the stock for <strong>more than 60 days</strong> during the 121-day period
                    beginning 60 days before the ex-dividend date</li>
                <li>✓ Not listed as a non-qualified dividend by the IRS</li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Example: Johnson & Johnson, Apple, Microsoft, Coca-Cola—all pay qualified dividends.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <AlertTriangle className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Ordinary Dividends</CardTitle>
              <Badge variant="outline" className="text-orange-600 border-orange-600">Higher Tax Rate</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">
                Taxed at your regular income tax rate: <strong>10% to 37%</strong> depending on your bracket.
                These are dividends that don't meet the qualified requirements.
              </p>

              <p className="text-sm font-semibold mb-2">Common Sources:</p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• REITs (Real Estate Investment Trusts)</li>
                <li>• BDCs (Business Development Companies)</li>
                <li>• MLPs (Master Limited Partnerships)</li>
                <li>• Money market funds</li>
                <li>• Tax-exempt organizations</li>
                <li>• Dividends on stock held less than 61 days</li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Example: Realty Income (O), most monthly dividend stocks, savings account interest.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Real Tax Example
            </p>
            <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <p>You earn $10,000 in dividends. You're in the 24% tax bracket and 15% capital gains bracket.</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded">
                  <p className="font-semibold text-green-600 mb-1">If Qualified:</p>
                  <p>$10,000 × 15% = <strong>$1,500 tax</strong></p>
                  <p className="text-xs mt-1">You keep $8,500</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded">
                  <p className="font-semibold text-orange-600 mb-1">If Ordinary:</p>
                  <p>$10,000 × 24% = <strong>$2,400 tax</strong></p>
                  <p className="text-xs mt-1">You keep $7,600</p>
                </div>
              </div>
              <p className="mt-4 font-semibold">Difference: $900 per year. Over 30 years, that's $27,000!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tax Rates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">2026 Dividend Tax Rates by Income</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Qualified Dividend Tax Rates (2026)</CardTitle>
            <CardDescription>Based on your taxable income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Filing Status</th>
                    <th className="text-right p-3">0% Rate</th>
                    <th className="text-right p-3">15% Rate</th>
                    <th className="text-right p-3">20% Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Single</td>
                    <td className="p-3 text-right">$0 - $47,025</td>
                    <td className="p-3 text-right">$47,026 - $518,900</td>
                    <td className="p-3 text-right">$518,901+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Married Filing Jointly</td>
                    <td className="p-3 text-right">$0 - $94,050</td>
                    <td className="p-3 text-right">$94,051 - $583,750</td>
                    <td className="p-3 text-right">$583,751+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Married Filing Separately</td>
                    <td className="p-3 text-right">$0 - $47,025</td>
                    <td className="p-3 text-right">$47,026 - $291,850</td>
                    <td className="p-3 text-right">$291,851+</td>
                  </tr>
                  <tr>
                    <td className="p-3">Head of Household</td>
                    <td className="p-3 text-right">$0 - $63,000</td>
                    <td className="p-3 text-right">$63,001 - $551,350</td>
                    <td className="p-3 text-right">$551,351+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
              Note: High earners may also pay 3.8% Net Investment Income Tax (NIIT) on top of these rates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ordinary Dividend Tax Rates (2026)</CardTitle>
            <CardDescription>Same as your regular income tax bracket</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Tax Rate</th>
                    <th className="text-right p-3">Single</th>
                    <th className="text-right p-3">Married Filing Jointly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">10%</td><td className="p-3 text-right">$0 - $11,600</td><td className="p-3 text-right">$0 - $23,200</td></tr>
                  <tr className="border-b"><td className="p-3">12%</td><td className="p-3 text-right">$11,601 - $47,150</td><td className="p-3 text-right">$23,201 - $94,300</td></tr>
                  <tr className="border-b"><td className="p-3">22%</td><td className="p-3 text-right">$47,151 - $100,525</td><td className="p-3 text-right">$94,301 - $201,050</td></tr>
                  <tr className="border-b"><td className="p-3">24%</td><td className="p-3 text-right">$100,526 - $191,950</td><td className="p-3 text-right">$201,051 - $383,900</td></tr>
                  <tr className="border-b"><td className="p-3">32%</td><td className="p-3 text-right">$191,951 - $243,725</td><td className="p-3 text-right">$383,901 - $487,450</td></tr>
                  <tr className="border-b"><td className="p-3">35%</td><td className="p-3 text-right">$243,726 - $609,350</td><td className="p-3 text-right">$487,451 - $731,200</td></tr>
                  <tr><td className="p-3">37%</td><td className="p-3 text-right">$609,351+</td><td className="p-3 text-right">$731,201+</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free Tax-Optimization Guide"
          description="Step-by-step strategies to legally minimize dividend taxes and keep more of your income"
          buttonText="Download Tax Guide"
          source="dividend_tax_blog"
        />
      </div>

      {/* Tax-Advantaged Accounts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Best Accounts for Dividend Stocks</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                Roth IRA (Best Tax Treatment)
              </CardTitle>
              <Badge variant="outline" className="text-green-600 border-green-600">0% Tax Forever</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Tax treatment:</strong> Dividends grow 100% tax-free. No taxes when you withdraw in retirement
                (after age 59½). Contributions are made with after-tax money.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">Pros:</p>
                  <ul className="text-sm space-y-1">
                    <li>✓ Never pay taxes on dividends</li>
                    <li>✓ Never pay taxes on withdrawals</li>
                    <li>✓ Perfect for high-yield stocks</li>
                    <li>✓ No required minimum distributions</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">Cons:</p>
                  <ul className="text-sm space-y-1">
                    <li>✗ $7,000 annual contribution limit ($8,000 if 50+)</li>
                    <li>✗ Income limits to contribute</li>
                    <li>✗ Can't withdraw before 59½ without penalty</li>
                  </ul>
                </div>
              </div>

              <Card className="bg-green-50 dark:bg-green-950">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold mb-2">💰 Power of Tax-Free Growth:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    A 35-year-old investing $7,000/year in dividend stocks yielding 4% in a Roth IRA vs taxable account
                    (assuming 24% tax bracket): <strong>Roth advantage = $312,000 extra</strong> by age 65!
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                Traditional IRA / 401(k)
              </CardTitle>
              <Badge variant="outline" className="text-blue-600 border-blue-600">Tax-Deferred</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Tax treatment:</strong> Contributions are tax-deductible now. Dividends grow tax-deferred
                (no annual taxes). Pay ordinary income tax on withdrawals in retirement.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">Pros:</p>
                  <ul className="text-sm space-y-1">
                    <li>✓ Immediate tax deduction</li>
                    <li>✓ No taxes on dividends while invested</li>
                    <li>✓ Higher contribution limits ($23,000 for 401k)</li>
                    <li>✓ Can compound without tax drag</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">Cons:</p>
                  <ul className="text-sm space-y-1">
                    <li>✗ Pay ordinary tax on withdrawal (not qualified rate)</li>
                    <li>✗ Required minimum distributions at 73</li>
                    <li>✗ Penalty for early withdrawal</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best for:</strong> High earners in high tax brackets now who expect to be in lower brackets
                in retirement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-purple-600" />
                Health Savings Account (HSA)
              </CardTitle>
              <Badge variant="outline" className="text-purple-600 border-purple-600">Triple Tax Advantage</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Tax treatment:</strong> Contributions are tax-deductible, dividends grow tax-free,
                withdrawals for medical expenses are tax-free. If you have a high-deductible health plan,
                this is the best account for dividend investing.
              </p>

              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tax deduction on contributions (like traditional IRA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tax-free dividend growth (like Roth IRA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tax-free withdrawals for medical expenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>After age 65, can withdraw for anything (taxed like traditional IRA)</span>
                </li>
              </ul>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Contribution limits:</strong> $4,300 individual, $8,550 family (2026). Must have
                high-deductible health plan to qualify.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-yellow-600" />
                Taxable Brokerage Account
              </CardTitle>
              <Badge variant="outline" className="text-yellow-600 border-yellow-600">Most Flexible</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Tax treatment:</strong> Pay taxes on dividends every year (qualified or ordinary rates).
                No contribution limits, no withdrawal restrictions, but also no tax advantages.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">Pros:</p>
                  <ul className="text-sm space-y-1">
                    <li>✓ No contribution limits</li>
                    <li>✓ Withdraw anytime, any reason</li>
                    <li>✓ Qualified dividends taxed at lower rates</li>
                    <li>✓ Tax-loss harvesting opportunities</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">Cons:</p>
                  <ul className="text-sm space-y-1">
                    <li>✗ Pay taxes on dividends annually</li>
                    <li>✗ No upfront tax deduction</li>
                    <li>✗ Tax drag reduces compounding</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best for:</strong> After you max out Roth IRA/401(k), or if you need flexibility to
                access money before retirement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tax Strategies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">7 Legal Strategies to Reduce Dividend Taxes</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Asset Location Strategy</CardTitle>
              <CardDescription>Put the right investments in the right accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold text-green-600 mb-1">Roth IRA: High-yield investments</p>
                  <p>REITs, BDCs, high-yield stocks (6-10%+). Tax-free growth maximizes these.</p>
                  <p className="text-xs mt-1">Example: Realty Income, Main Street Capital, mREITs</p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <p className="font-semibold text-blue-600 mb-1">Traditional IRA/401(k): Moderate-yield</p>
                  <p>Dividend growth stocks, ETFs with 3-5% yields. Tax-deferred growth helps.</p>
                  <p className="text-xs mt-1">Example: SCHD, VYM, dividend aristocrats</p>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                  <p className="font-semibold text-purple-600 mb-1">Taxable Account: Qualified dividends</p>
                  <p>U.S. blue-chip stocks with qualified dividends. Get 0-15% tax rate.</p>
                  <p className="text-xs mt-1">Example: JNJ, PG, KO, MSFT, AAPL</p>
                </div>
              </div>

              <p className="text-sm mt-4 font-semibold text-slate-700 dark:text-slate-300">
                This strategy can save $5,000-$10,000+ annually on a $500K portfolio!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Hold for 61+ Days (Qualified Treatment)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                To get qualified dividend treatment (lower tax rates), you must hold the stock for <strong>more than
                60 days during the 121-day period</strong> that begins 60 days before the ex-dividend date.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Don't:</strong> Buy right before ex-dividend date and sell immediately. You'll pay ordinary
                rates (10-37%) instead of qualified rates (0-20%).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Tax-Loss Harvesting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Sell losing positions to offset dividend income. Capital losses can offset up to $3,000 of ordinary
                income per year. The rest carries forward to future years.
              </p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded text-sm">
                <p className="font-semibold mb-1">Example:</p>
                <p>You receive $5,000 in dividends (ordinary, 24% bracket = $1,200 tax).</p>
                <p>You sell a losing stock for a $3,000 capital loss.</p>
                <p>Net taxable income: $5,000 - $3,000 = $2,000 (save $720 in taxes).</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Stay in the 0% Qualified Dividend Bracket</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                If your taxable income is under $47,025 (single) or $94,050 (married), you pay <strong>0% tax</strong> on
                qualified dividends. Strategies to stay under:
              </p>
              <ul className="text-sm space-y-1">
                <li>• Work part-time in semi-retirement</li>
                <li>• Use standard deduction + retirement account withdrawals carefully</li>
                <li>• Harvest capital gains at 0% too (same income threshold)</li>
                <li>• Convert traditional IRA to Roth up to the limit</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Use Qualified Charitable Distributions (QCDs)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                If you're 70½ or older, donate up to $105,000/year directly from your IRA to charity.
                This counts toward your required minimum distribution (RMD) but doesn't increase your taxable income.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Lower AGI = lower taxes on Social Security, lower Medicare premiums, and potentially lower
                taxes on other dividend income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Consider Municipal Bond Funds (Tax-Exempt)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                While not technically "dividends," municipal bond interest is federal tax-free (and sometimes
                state tax-free too). If you're in a high tax bracket (32%+), tax-free yields of 3-4% can
                equal 4.5-6% taxable yields.
              </p>
              <p className="text-sm font-semibold">Popular muni ETFs: MUB, TFI, SUB, HYD</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Time Income Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                If you expect lower income next year (early retirement, career change), delay taking dividends
                or sell dividend stocks this year and repurchase next year. You'll pay taxes at a lower rate.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Conversely, if you expect higher income next year, accelerate dividend income into this year
                if possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">5 Costly Tax Mistakes to Avoid</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Holding REITs in Taxable Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                REITs pay ordinary dividends taxed at up to 37%. Put these in Roth IRAs where they grow
                tax-free. In taxable accounts, they create a huge tax drag.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Not Reinvesting in Tax-Advantaged Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If dividends sit as cash in your Roth IRA or 401(k), you're wasting tax-free space.
                Enable automatic reinvestment (DRIP) to compound without taxes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Dividend Capture Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Buying just before ex-dividend and selling after seems smart but usually loses money
                after taxes and stock price adjustment. Plus you won't get qualified treatment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Ignoring State Taxes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                High-tax states (CA, NY, NJ) add 8-13% on top of federal taxes. Consider moving to
                a no-income-tax state in retirement or using municipal bonds from your state.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Forgetting About Net Investment Income Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If your modified AGI exceeds $200K (single) or $250K (married), you pay an additional
                3.8% Medicare tax on investment income including dividends. Plan accordingly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I pay taxes on dividends if I reinvest them?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Yes, in taxable accounts.</strong> Even if you use DRIP and never receive cash,
                the IRS treats dividends as taxable income the year they're paid. Exception: Tax-advantaged
                accounts (Roth IRA, traditional IRA, 401k) where dividends grow tax-free or tax-deferred.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I know if my dividends are qualified?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Check your 1099-DIV form from your broker (arrives in January). Box 1a shows total dividends,
                Box 1b shows qualified dividends. Most U.S. blue-chip stocks pay qualified dividends. REITs,
                BDCs, and MLPs generally don't.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I hold dividend stocks in a Roth IRA or traditional IRA?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Roth IRA is better for high-yield dividend stocks.</strong> Since Roth withdrawals
                are tax-free forever, you maximize the benefit with investments that generate lots of taxable
                income. Traditional IRA is fine for moderate yields but you'll pay ordinary income tax on withdrawals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I deduct investment expenses against dividend income?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No, not since the 2017 Tax Cuts and Jobs Act. Investment advisory fees, subscriptions,
                and other investment expenses are no longer deductible. Exceptions: Margin interest
                (limited to investment income) and expenses within a business (trader status).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if I receive foreign dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Foreign companies often withhold 10-30% tax at source. You may be able to claim a foreign
                tax credit on your U.S. return to avoid double taxation. Many developed-country stocks
                (Canada, UK, EU) still qualify for the lower dividend tax rates if held in taxable accounts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Take Control of Your Dividend Taxes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Understanding dividend taxation can save you thousands of dollars every year. Focus on:
              (1) Maximizing tax-advantaged account contributions, (2) Asset location strategy,
              (3) Holding qualified dividend stocks in taxable accounts, and (4) Avoiding common mistakes.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Browse Dividend Stocks →
                </Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Tax Strategies →
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              Disclaimer: This is educational content, not tax advice. Consult a tax professional
              for your specific situation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/top-dividend-etfs-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend ETFs 2026</CardTitle>
                <CardDescription>Best funds for tax-efficient dividend income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Automate tax-efficient reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Tax implications of each strategy</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-choose-dividend-broker">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Choose a Dividend Broker</CardTitle>
                <CardDescription>Find platforms with tax reporting tools</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
