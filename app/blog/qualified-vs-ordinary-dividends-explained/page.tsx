import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Qualified vs Ordinary Dividends Explained: Tax Guide (2026)',
  description: 'Complete guide to dividend taxation. Learn the difference between qualified and ordinary dividends, tax rates, holding period rules, and how to minimize taxes.',
}

export default function QualifiedVsOrdinaryDividendsExplained() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <DollarSign className="h-3 w-3 mr-1" />
          Tax Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Qualified vs Ordinary Dividends Explained
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Master dividend taxation. Understand the difference between qualified
          and ordinary dividends and how it affects your tax bill.
        </p>
      </div>

      <Card className="mb-16 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>The difference between qualified and ordinary dividends</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Tax rates for each type (up to 20% difference!)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Holding period rules to qualify for lower tax rates</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Real examples calculating tax on $10,000 in dividends</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Qualified Dividends</CardTitle>
              <Badge variant="outline" className="text-green-600">Lower Tax Rates</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">Tax Rates:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 0% if income under $47,025 (single) / $94,050 (married)</li>
                    <li>• 15% for most people</li>
                    <li>• 20% if income over $518,900 (single) / $583,750 (married)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Requirements:</p>
                  <ul className="text-sm space-y-1">
                    <li>• U.S. company or qualified foreign corp</li>
                    <li>• Held stock 60+ days (during 121-day period)</li>
                    <li>• Not a REIT, MLP, or special dividend</li>
                  </ul>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-400">Best For:</p>
                  <p className="text-sm">Long-term investors in regular corporations (JNJ, AAPL, KO, etc.)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle>Ordinary Dividends</CardTitle>
              <Badge variant="outline" className="text-red-600">Higher Tax Rates</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">Tax Rates:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Same as your income tax rate</li>
                    <li>• 10% to 37% depending on income</li>
                    <li>• No preferential treatment</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Common Sources:</p>
                  <ul className="text-sm space-y-1">
                    <li>• REITs (real estate investment trusts)</li>
                    <li>• MLPs (master limited partnerships)</li>
                    <li>• Foreign stocks (some)</li>
                    <li>• Stocks held under 60 days</li>
                  </ul>
                </div>

                <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-400">Best For:</p>
                  <p className="text-sm">Tax-advantaged accounts (IRA, 401k) where taxes don't matter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Rate Breakdown</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2026 Qualified Dividend Tax Rates</CardTitle>
            <CardDescription>Based on taxable income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Tax Rate</th>
                    <th className="text-left p-2">Single</th>
                    <th className="text-left p-2">Married Filing Jointly</th>
                    <th className="text-left p-2">Head of Household</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-2 font-semibold">0%</td>
                    <td className="p-2">$0 - $47,025</td>
                    <td className="p-2">$0 - $94,050</td>
                    <td className="p-2">$0 - $63,000</td>
                  </tr>
                  <tr className="border-b bg-blue-50 dark:bg-blue-950">
                    <td className="p-2 font-semibold">15%</td>
                    <td className="p-2">$47,026 - $518,900</td>
                    <td className="p-2">$94,051 - $583,750</td>
                    <td className="p-2">$63,001 - $551,350</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-950">
                    <td className="p-2 font-semibold">20%</td>
                    <td className="p-2">$518,901+</td>
                    <td className="p-2">$583,751+</td>
                    <td className="p-2">$551,351+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
              <p className="text-sm font-semibold mb-1">Plus: 3.8% Net Investment Income Tax</p>
              <p className="text-sm">If income over $200k (single) or $250k (married), add 3.8% NIIT on top. So
                effective rates become 18.8% or 23.8%.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ordinary Dividend Tax Rates</CardTitle>
            <CardDescription>Same as your ordinary income tax bracket</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Tax Bracket</th>
                    <th className="text-left p-2">Single</th>
                    <th className="text-left p-2">Married Filing Jointly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">10%</td><td className="p-2">$0 - $11,600</td><td className="p-2">$0 - $23,200</td></tr>
                  <tr className="border-b"><td className="p-2">12%</td><td className="p-2">$11,601 - $47,150</td><td className="p-2">$23,201 - $94,300</td></tr>
                  <tr className="border-b"><td className="p-2">22%</td><td className="p-2">$47,151 - $100,525</td><td className="p-2">$94,301 - $201,050</td></tr>
                  <tr className="border-b"><td className="p-2">24%</td><td className="p-2">$100,526 - $191,950</td><td className="p-2">$201,051 - $383,900</td></tr>
                  <tr className="border-b"><td className="p-2">32%</td><td className="p-2">$191,951 - $243,725</td><td className="p-2">$383,901 - $487,450</td></tr>
                  <tr className="border-b"><td className="p-2">35%</td><td className="p-2">$243,726 - $609,350</td><td className="p-2">$487,451 - $731,200</td></tr>
                  <tr><td className="p-2">37%</td><td className="p-2">$609,351+</td><td className="p-2">$731,201+</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The 60-Day Holding Period Rule</h2>

        <Card className="border-2 border-yellow-300 dark:border-yellow-700">
          <CardHeader>
            <CardTitle>Critical Rule: Must Hold Stock 60+ Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold mb-2">The Exact Rule:</p>
                <p className="text-sm">You must hold the stock for more than 60 days during the 121-day period that
                  begins 60 days before the ex-dividend date.</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-2">In Plain English:</p>
                <p className="text-sm mb-3">Buy the stock at least 60 days before ex-dividend date, OR buy right after
                  ex-dividend date and hold 60+ days. Don't sell within 60 days of buying or dividends become ordinary.</p>

                <div className="mt-3 p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="text-xs font-semibold mb-1 text-green-700 dark:text-green-400">✓ Qualifies (Example):</p>
                  <p className="text-xs">Buy: Jan 1 | Ex-Div: Feb 15 | Sell: April 1 (held 90 days) → Qualified</p>
                </div>

                <div className="mt-2 p-3 bg-red-50 dark:bg-red-950 rounded">
                  <p className="text-xs font-semibold mb-1 text-red-700 dark:text-red-400">✗ Doesn't Qualify:</p>
                  <p className="text-xs">Buy: Feb 10 | Ex-Div: Feb 15 | Sell: March 1 (held 19 days) → Ordinary</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Strategy:</p>
                <p className="text-sm">For long-term investors, this rule doesn't matter—you hold stocks for years. Only
                  affects short-term traders trying to capture dividends quickly.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Tax Examples</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Example 1: Married Couple, $100k Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-sm mb-2"><strong>Scenario:</strong> Receive $10,000 in dividends</p>
                <p className="text-sm mb-2"><strong>Income:</strong> $100,000 (married filing jointly)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded border-l-4 border-l-green-500">
                  <p className="font-semibold mb-2 text-green-700 dark:text-green-400">Qualified Dividends:</p>
                  <div className="text-sm space-y-1 mb-2">
                    <p>Dividend Income: $10,000</p>
                    <p>Tax Rate: 15% (in 15% bracket)</p>
                    <p className="font-semibold">Tax Owed: $1,500</p>
                  </div>
                  <p className="text-xs">Keep: $8,500 of $10,000</p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950 rounded border-l-4 border-l-red-500">
                  <p className="font-semibold mb-2 text-red-700 dark:text-red-400">Ordinary Dividends:</p>
                  <div className="text-sm space-y-1 mb-2">
                    <p>Dividend Income: $10,000</p>
                    <p>Tax Rate: 22% (ordinary income rate)</p>
                    <p className="font-semibold">Tax Owed: $2,200</p>
                  </div>
                  <p className="text-xs">Keep: $7,800 of $10,000</p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold">Difference: $700 more tax (7% of dividend income)</p>
                <p className="text-sm mt-1">Qualified dividends save this couple $700 per year!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example 2: Single Filer, $60k Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-sm mb-2"><strong>Scenario:</strong> Receive $5,000 in dividends</p>
                <p className="text-sm mb-2"><strong>Income:</strong> $60,000 (single filer)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded border-l-4 border-l-green-500">
                  <p className="font-semibold mb-2 text-green-700 dark:text-green-400">Qualified Dividends:</p>
                  <div className="text-sm space-y-1 mb-2">
                    <p>Dividend Income: $5,000</p>
                    <p>Tax Rate: 15%</p>
                    <p className="font-semibold">Tax Owed: $750</p>
                  </div>
                  <p className="text-xs">Keep: $4,250 of $5,000</p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950 rounded border-l-4 border-l-red-500">
                  <p className="font-semibold mb-2 text-red-700 dark:text-red-400">Ordinary Dividends:</p>
                  <div className="text-sm space-y-1 mb-2">
                    <p>Dividend Income: $5,000</p>
                    <p>Tax Rate: 22%</p>
                    <p className="font-semibold">Tax Owed: $1,100</p>
                  </div>
                  <p className="text-xs">Keep: $3,900 of $5,000</p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold">Difference: $350 more tax</p>
                <p className="text-sm mt-1">That's 7% of dividend income lost to higher tax rates.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Investments Pay Qualified vs Ordinary?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Qualified Dividends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3 text-slate-700 dark:text-slate-300">Most regular U.S. corporations pay qualified
                dividends:</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Blue chip stocks:</strong> JNJ, PG, KO, AAPL, MSFT</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>S&P 500 companies:</strong> Nearly all pay qualified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Dividend aristocrats:</strong> All 65 pay qualified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Most foreign stocks:</strong> If from treaty country</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle>Ordinary Dividends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3 text-slate-700 dark:text-slate-300">These investments always pay ordinary (never
                qualified):</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>REITs:</strong> Realty Income (O), Prologis (PLD)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>MLPs:</strong> Energy Transfer (ET), Enterprise (EPD)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>BDCs:</strong> Ares Capital (ARCC)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Money market funds:</strong> All interest income</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Optimization Strategies</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Strategy 1: Account Placement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Put the right investments in the right accounts to minimize taxes.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold mb-2 text-green-700 dark:text-green-400">Taxable Account:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Qualified dividend stocks (JNJ, PG, KO)</li>
                    <li>• Low-turnover equity funds</li>
                    <li>• Long-term holdings</li>
                    <li>• Tax-advantaged at 0-15% rate</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <p className="font-semibold mb-2 text-blue-700 dark:text-blue-400">IRA/401k:</p>
                  <ul className="text-xs space-y-1">
                    <li>• REITs and high-yield ordinary dividends</li>
                    <li>• Bonds and bond funds</li>
                    <li>• Actively traded positions</li>
                    <li>• Tax doesn't matter in retirement accounts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategy 2: Timing Gains</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If in 0% qualified dividend bracket (income under $47k single / $94k married), consider realizing capital
                gains tax-free too. Sell winners, immediately rebuy to reset cost basis. Both dividends AND gains are
                tax-free at this income level.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategy 3: Monitor the 60-Day Rule</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If trading around dividend dates, mark calendars to ensure you hit 60+ day holding period. Otherwise
                qualified dividends become ordinary, costing 7-17% more in taxes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Master Dividend Taxation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Understanding qualified vs ordinary dividends can save thousands in taxes annually. Focus on qualified
              dividend stocks in taxable accounts, save REITs for tax-advantaged accounts, and hold positions 60+ days
              to qualify for lower rates.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dividend-tax-guide-2026">
                <Button className="w-full" size="lg">Complete Tax Guide →</Button>
              </Link>
              <Link href="/blog/best-dividend-stocks-for-beginners">
                <Button variant="outline" className="w-full" size="lg">See Qualified Dividend Stocks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete Tax Guide</CardTitle>
                <CardDescription>Minimize dividend taxes</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-high-yield-reits-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best REITs</CardTitle>
                <CardDescription>Ordinary dividend investments</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
