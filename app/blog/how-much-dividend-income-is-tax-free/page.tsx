import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, DollarSign, CheckCircle2, AlertTriangle, Calculator, Percent, Target, ArrowRight, TrendingUp } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How Much Dividend Income Is Tax-Free? (2026 Tax Brackets)',
  description: 'Learn exactly how much dividend income you can earn tax-free in 2026. Covers the 0% qualified dividend bracket, standard deduction strategy, Roth IRA loophole, and state tax considerations.',
  keywords: ['dividend income tax free', 'how much dividend income is tax free', 'qualified dividend 0% tax rate', 'tax free dividend income 2026', 'dividend tax brackets'],
}

export default function HowMuchDividendIncomeIsTaxFree() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Shield className="h-3 w-3 mr-1" />
          2026 Tax Year Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How Much Dividend Income Is Tax-Free?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          In 2026, a single filer can earn up to $47,025 in qualified dividends at a 0% federal tax rate. A married couple can earn up to $94,050 tax-free. With the standard deduction, the real numbers are even higher.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Updated February 2026 | 11 min read
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Quick Answer: Tax-Free Dividend Thresholds (2026)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Filing Status</th>
                  <th className="text-right p-3">0% Bracket Limit</th>
                  <th className="text-right p-3">+ Standard Deduction</th>
                  <th className="text-right p-3">Total Tax-Free Income</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Single</td>
                  <td className="p-3 text-right">$47,025</td>
                  <td className="p-3 text-right">$15,000</td>
                  <td className="p-3 text-right font-bold text-green-600">$62,025</td>
                </tr>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <td className="p-3 font-semibold">Married Filing Jointly</td>
                  <td className="p-3 text-right">$94,050</td>
                  <td className="p-3 text-right">$30,000</td>
                  <td className="p-3 text-right font-bold text-green-600">$124,050</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Head of Household</td>
                  <td className="p-3 text-right">$63,000</td>
                  <td className="p-3 text-right">$22,500</td>
                  <td className="p-3 text-right font-bold text-green-600">$85,500</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Married Filing Separately</td>
                  <td className="p-3 text-right">$47,025</td>
                  <td className="p-3 text-right">$15,000</td>
                  <td className="p-3 text-right font-bold text-green-600">$62,025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
            <p className="text-sm font-semibold mb-2">What This Means in Plain English:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              A married couple with <strong>no other income</strong> (retired, for example) can earn up to <strong>$124,050 in qualified dividends and pay exactly $0 in federal income tax</strong>. That is $10,337 per month, or $2,385 per week, completely tax-free.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How the 0% Dividend Tax Rate Works</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-6 w-6 text-blue-600" />
              The Three-Tier Qualified Dividend Tax System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Unlike wages which are taxed at 10-37%, qualified dividends have their own special tax brackets. The rates are 0%, 15%, or 20% based on your total taxable income:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-green-600">0% Rate -- The Sweet Spot</h3>
                  <Badge className="bg-green-600">Zero Tax</Badge>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm mt-2">
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Single:</td>
                        <td className="p-2 text-right">Taxable income up to $47,025</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Married Filing Jointly:</td>
                        <td className="p-2 text-right">Taxable income up to $94,050</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Head of Household:</td>
                        <td className="p-2 text-right">Taxable income up to $63,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-3">
                  Most relevant for retirees, early retirees, part-time workers, and anyone who controls their income sources carefully.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-blue-600">15% Rate -- Most Investors</h3>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">Low Tax</Badge>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm mt-2">
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Single:</td>
                        <td className="p-2 text-right">$47,026 to $518,900</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Married Filing Jointly:</td>
                        <td className="p-2 text-right">$94,051 to $583,750</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Head of Household:</td>
                        <td className="p-2 text-right">$63,001 to $551,350</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-3">
                  If you are a working professional earning a salary plus dividends, you will likely pay 15% on qualified dividends. Still much better than the 22-35% you pay on wages.
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-purple-600">20% Rate -- High Earners</h3>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">+ 3.8% NIIT</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Only applies to taxable income above $518,900 (single) or $583,750 (married). Additionally, the 3.8% Net Investment Income Tax applies for modified AGI above $200K (single) or $250K (married), bringing the effective top rate to 23.8%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Standard Deduction Strategy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Standard Deduction: Your Built-In Tax Shield</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How the Standard Deduction Increases Your Tax-Free Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The 0% bracket applies to your <strong>taxable income</strong>, which is your total income minus the standard deduction. This effectively raises the amount of dividends you can earn tax-free:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-bold mb-2">Example: Single Filer, Only Dividend Income</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                    <p className="text-slate-700 dark:text-slate-300">Gross dividend income: <strong>$62,025</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                    <p className="text-slate-700 dark:text-slate-300">Minus standard deduction: <strong>-$15,000</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                    <p className="text-slate-700 dark:text-slate-300">Taxable income: <strong>$47,025</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">4</div>
                    <p className="text-slate-700 dark:text-slate-300">Tax rate on qualified dividends at this level: <strong className="text-green-600">0%</strong></p>
                  </div>
                </div>
                <p className="text-sm font-bold text-green-600 mt-4">
                  Result: $62,025 in dividend income, $0 in federal tax
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                <p className="font-bold mb-2">Example: Married Couple, Only Dividend Income</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                    <p className="text-slate-700 dark:text-slate-300">Gross dividend income: <strong>$124,050</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                    <p className="text-slate-700 dark:text-slate-300">Minus standard deduction: <strong>-$30,000</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                    <p className="text-slate-700 dark:text-slate-300">Taxable income: <strong>$94,050</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0">4</div>
                    <p className="text-slate-700 dark:text-slate-300">Tax rate on qualified dividends at this level: <strong className="text-green-600">0%</strong></p>
                  </div>
                </div>
                <p className="text-sm font-bold text-green-600 mt-4">
                  Result: $124,050 in dividend income, $0 in federal tax. That is $10,337/month completely tax-free.
                </p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Critical Requirement: Qualified Dividends Only
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The 0% rate applies only to <strong>qualified dividends</strong>. REIT dividends, BDC dividends, and short-term holding periods result in ordinary dividend treatment, taxed at your regular income rate (10-37%). Most U.S. blue-chip stocks and major ETFs (SCHD, VYM, VIG) pay qualified dividends. Check Box 1b on your 1099-DIV form.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* Roth IRA Loophole */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Roth IRA Strategy: Unlimited Tax-Free Dividends</h2>

        <Card className="mb-6 border-2 border-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Roth IRA: The Ultimate Tax-Free Dividend Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Inside a Roth IRA, there is no limit to how much dividend income can be tax-free. Whether your Roth generates $1,000 or $100,000 in annual dividends, you pay exactly $0 in tax, forever. Here is how to maximize it:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold text-green-600 mb-2">Roth IRA Advantages</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All dividends grow 100% tax-free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All withdrawals are tax-free after 59.5</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No required minimum distributions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>REIT dividends are tax-free too (unlike taxable accounts)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold text-blue-600 mb-2">Maximizing Your Roth</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Contribute $7,000/year ($8,000 if 50+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Use Backdoor Roth if income is too high</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Hold high-yield REITs here (tax-free ordinary dividends)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Enable DRIP for maximum compounding</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <p className="font-semibold mb-2">Roth IRA Projection: $7,000/Year for 30 Years</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Year</th>
                      <th className="text-right p-2">Total Contributed</th>
                      <th className="text-right p-2">Roth Balance</th>
                      <th className="text-right p-2">Annual Dividends (4%)</th>
                      <th className="text-right p-2">Tax Owed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Year 10</td>
                      <td className="p-2 text-right">$70,000</td>
                      <td className="p-2 text-right">$109,000</td>
                      <td className="p-2 text-right">$4,360</td>
                      <td className="p-2 text-right font-bold text-green-600">$0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Year 20</td>
                      <td className="p-2 text-right">$140,000</td>
                      <td className="p-2 text-right">$336,000</td>
                      <td className="p-2 text-right">$13,440</td>
                      <td className="p-2 text-right font-bold text-green-600">$0</td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-950">
                      <td className="p-2 font-bold">Year 30</td>
                      <td className="p-2 text-right font-bold">$210,000</td>
                      <td className="p-2 text-right font-bold">$838,000</td>
                      <td className="p-2 text-right font-bold">$33,520</td>
                      <td className="p-2 text-right font-bold text-green-600">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2">Assumes 8% total return, 4% dividend yield. Dividends reinvested during accumulation phase.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Combined Strategy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Combined Strategy: Roth + Taxable at 0%</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-green-600" />
              Maximum Tax-Free Dividend Income (Married Couple Example)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Roth IRA Dividends</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">No limit, always tax-free</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">$33,520/yr</p>
                </div>
              </div>

              <div className="text-center text-2xl font-bold text-slate-400">+</div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Taxable Account Qualified Dividends</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Up to 0% bracket limit</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">$124,050/yr</p>
                </div>
              </div>

              <div className="text-center text-2xl font-bold text-slate-400">=</div>

              <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg border-2 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">Total Tax-Free Dividend Income</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Federal tax: $0</p>
                  </div>
                  <p className="text-3xl font-bold text-green-600">$157,570/yr</p>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                  That is <strong>$13,131/month</strong> or <strong>$3,030/week</strong> in completely federal tax-free dividend income.
                </p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Important Caveats
              </p>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>- The taxable account 0% bracket only works if you have no other significant income (salary, pension, Social Security)</li>
                <li>- Social Security benefits can push you into the 15% bracket</li>
                <li>- State taxes may still apply (see state section below)</li>
                <li>- Roth IRA withdrawals must be after age 59.5 and the account must be 5+ years old</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* What About Other Income */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What If You Have Other Income (Salary, Social Security)?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tax-Free Dividend Amount Shrinks With Other Income</CardTitle>
            <CardDescription>Your other income "fills up" the 0% bracket, leaving less room for dividends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Other Income (Single Filer)</th>
                    <th className="text-right p-3">Tax-Free Dividend Space</th>
                    <th className="text-right p-3">Monthly Tax-Free Dividends</th>
                    <th className="text-right p-3">Tax on Next Dollar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3">$0 (retired, no other income)</td>
                    <td className="p-3 text-right font-bold text-green-600">$62,025</td>
                    <td className="p-3 text-right text-green-600">$5,169</td>
                    <td className="p-3 text-right">0%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">$20,000 (part-time work)</td>
                    <td className="p-3 text-right">$42,025</td>
                    <td className="p-3 text-right">$3,502</td>
                    <td className="p-3 text-right">15%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">$30,000 (Social Security)</td>
                    <td className="p-3 text-right">$32,025</td>
                    <td className="p-3 text-right">$2,669</td>
                    <td className="p-3 text-right">15%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">$50,000 (salary)</td>
                    <td className="p-3 text-right">$12,025</td>
                    <td className="p-3 text-right">$1,002</td>
                    <td className="p-3 text-right">15%</td>
                  </tr>
                  <tr>
                    <td className="p-3">$62,025+ (fills 0% bracket)</td>
                    <td className="p-3 text-right font-bold text-red-600">$0</td>
                    <td className="p-3 text-right text-red-600">$0</td>
                    <td className="p-3 text-right">15%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              This is why many early retirees and financially independent individuals keep their non-dividend income low. By living primarily on dividends and Roth withdrawals, they can maintain the 0% tax rate for years or even decades.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* State Taxes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">State Taxes: The Other Half of the Equation</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Not All States Tax Dividends</CardTitle>
            <CardDescription>9 states have no income tax on dividends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold text-green-600 mb-3">No State Income Tax (Best for Dividends)</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Texas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Florida</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Nevada</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Wyoming</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Washington</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Alaska</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>South Dakota</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Tennessee</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>New Hampshire*</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">*NH taxes interest/dividends only -- phasing out by 2027</p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <p className="font-bold text-red-600 mb-3">Highest State Tax on Dividends</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>California</span>
                    <span className="font-bold">13.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New York</span>
                    <span className="font-bold">10.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Jersey</span>
                    <span className="font-bold">10.75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Oregon</span>
                    <span className="font-bold">9.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minnesota</span>
                    <span className="font-bold">9.85%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">These states do not distinguish between qualified and ordinary dividends</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              A married couple in Florida earning $124,050 in qualified dividends pays $0 in total tax (federal + state). The same couple in California would pay $0 federal but approximately $9,000-$11,000 in state tax. Location matters significantly for dividend investors.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are all dividends eligible for the 0% tax rate?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>No.</strong> Only qualified dividends get the 0%/15%/20% rates. Ordinary dividends (from REITs, BDCs, MLPs, and stocks held less than 61 days) are taxed at your regular income rate (10-37%). Most dividends from U.S. blue-chip stocks and major ETFs like SCHD, VYM, and VIG are qualified. Check Box 1b on your 1099-DIV form.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I still have to file a tax return if I owe $0?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Generally, yes.</strong> If your gross income exceeds the filing threshold ($15,000 for single, $30,000 for married in 2026), you must file even if your tax liability is $0. You will report the dividends on Schedule B and Form 1040, but the calculated tax will be $0 if you stay within the 0% bracket.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Does dividend income in a Roth IRA count toward the 0% bracket?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>No, and that is the beauty of it.</strong> Roth IRA income is not reported on your tax return as taxable income. It does not count toward the $47,025/$94,050 thresholds. This means you can receive unlimited tax-free dividends inside the Roth AND still fill up the 0% bracket in your taxable accounts. They are completely separate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What about the NIIT (Net Investment Income Tax)?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>The 3.8% NIIT applies to modified AGI above $200,000 (single) or $250,000 (married).</strong> If your total income is within the 0% qualified dividend bracket, you are well below the NIIT threshold and it does not apply. The NIIT only becomes a concern for high-income earners who have both significant salary and investment income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Will the 0% dividend rate change in future years?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>It could.</strong> The current qualified dividend rates (0%/15%/20%) were made permanent by the 2012 American Taxpayer Relief Act. However, Congress can always change tax law. Some proposals have suggested taxing dividends as ordinary income. As of February 2026, no imminent changes are expected, but it is wise to maximize Roth contributions as insurance against future tax increases.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Tax-Free Dividend Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Use our calculators to model how much dividend income you can earn tax-free based on your specific situation. Plan your portfolio to maximize the 0% bracket and keep more of every dollar your investments generate.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/retirement-income">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Retirement Income
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Dividend Growth
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" className="w-full" size="lg">
                  <Percent className="h-4 w-4 mr-2" />
                  Yield on Cost
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              This article is for educational purposes only. It is not tax advice. Tax laws change frequently. Consult a qualified tax professional for your specific situation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Comprehensive guide to all dividend tax rules and strategies</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-much-to-invest-for-500-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How Much to Invest for $500/Month?</CardTitle>
                <CardDescription>Portfolio sizes and timelines for $500/month income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-roth-ira">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Roth IRA</CardTitle>
                <CardDescription>Top picks for tax-free dividend growth</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-income-in-retirement">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Income in Retirement</CardTitle>
                <CardDescription>Building a sustainable retirement income stream</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
