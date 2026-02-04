import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Scale, Check, X } from 'lucide-react'

export const metadata = {
  title: 'Roth IRA vs Taxable Account for Dividend Investing (2026)',
  description: 'Should you hold dividend stocks in Roth IRA or taxable account? Compare tax treatment, withdrawal rules, and long-term wealth building strategies.',
}

export default function RothIRAVsTaxableForDividendInvesting() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Scale className="h-3 w-3 mr-1" />
          Account Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Roth IRA vs Taxable for Dividend Investing
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Where should you hold dividend stocks? Compare Roth IRA vs taxable
          accounts for tax efficiency, flexibility, and long-term wealth.
        </p>
      </div>

      <Card className="mb-16 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Tax differences between Roth IRA and taxable accounts</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Which dividend stocks go in which account</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>30-year wealth comparison: Roth vs taxable</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>When to use each account type strategically</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle>Roth IRA</CardTitle>
              <Badge variant="outline" className="text-purple-600">Tax-Free Growth</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Pros:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Dividends grow 100% tax-free forever</li>
                    <li>• Withdrawals tax-free after 59½</li>
                    <li>• No required minimum distributions (RMDs)</li>
                    <li>• Perfect for high-yield stocks/REITs</li>
                    <li>• Reinvest without tax drag</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Cons:</p>
                  <ul className="text-xs space-y-1">
                    <li>• $7,000/year contribution limit ($8,000 if 50+)</li>
                    <li>• Income limits ($161k single, $240k married)</li>
                    <li>• Can't access dividends before 59½ easily</li>
                    <li>• Limited total contribution room</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Taxable Account</CardTitle>
              <Badge variant="outline" className="text-blue-600">Unlimited & Flexible</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Pros:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Unlimited contributions (no cap)</li>
                    <li>• Access money anytime without penalty</li>
                    <li>• Qualified dividends taxed at only 0-20%</li>
                    <li>• Step-up in basis at death (heirs benefit)</li>
                    <li>• Tax-loss harvesting opportunities</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Cons:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Pay taxes on dividends every year</li>
                    <li>• Pay capital gains tax when selling</li>
                    <li>• REITs/MLPs taxed as ordinary income</li>
                    <li>• Drag from annual dividend taxes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">30-Year Wealth Comparison</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Scenario: $50,000 Initial Investment</CardTitle>
            <CardDescription>High-yield REIT portfolio (7% dividend yield, 5% growth)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-l-purple-500">
                <p className="font-semibold mb-3 text-purple-700 dark:text-purple-400">Roth IRA</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Initial Investment:</span>
                    <span className="font-semibold">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Dividends:</span>
                    <span>$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax on Dividends:</span>
                    <span className="text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reinvest Amount:</span>
                    <span className="font-semibold">$3,500</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between">
                    <span className="font-semibold">After 30 Years:</span>
                    <span className="font-semibold text-purple-600">$448,760</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Withdrawal (tax-free):</span>
                    <span className="text-green-600 font-semibold">$448,760</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-l-blue-500">
                <p className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Taxable Account</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Initial Investment:</span>
                    <span className="font-semibold">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Dividends:</span>
                    <span>$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (22% ordinary):</span>
                    <span className="text-red-600">-$770</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reinvest Amount:</span>
                    <span className="font-semibold">$2,730</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between">
                    <span className="font-semibold">After 30 Years:</span>
                    <span className="font-semibold text-blue-600">$349,830</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>After 20% cap gains tax:</span>
                    <span className="font-semibold">$309,864</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-semibold text-lg mb-2">Roth IRA Advantage: $138,896</p>
              <p className="text-sm">The Roth IRA builds 45% more wealth over 30 years with high-yield investments due
                to tax-free compounding.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scenario: $50,000 in Blue Chip Stocks</CardTitle>
            <CardDescription>Low-yield dividend growth (2.5% yield, 8% total return)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-l-purple-500">
                <p className="font-semibold mb-3 text-purple-700 dark:text-purple-400">Roth IRA</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>After 30 Years:</span>
                    <span className="font-semibold text-purple-600">$503,133</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Withdrawal (tax-free):</span>
                    <span className="text-green-600 font-semibold">$503,133</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-l-blue-500">
                <p className="font-semibold mb-3 text-blue-700 dark:text-blue-400">Taxable Account</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>After 30 Years:</span>
                    <span className="font-semibold text-blue-600">$456,200</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>After 15% div tax + 15% gains tax:</span>
                    <span className="font-semibold">$421,565</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <p className="font-semibold text-lg mb-2">Roth IRA Advantage: $81,568</p>
              <p className="text-sm">Even with low-yield qualified dividend stocks, Roth still wins by 19% over 30
                years. The gap is smaller than high-yield, but still significant.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Asset Location Strategy</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Optimal Placement: Which Stocks in Which Account?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <p className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Priority 1: Roth IRA</p>
                <p className="text-sm mb-3">Limited space ($7k/year), so put highest-taxed investments here:</p>
                <ul className="text-sm space-y-2">
                  <li><strong>• REITs (7-8% yield):</strong> Always ordinary income, perfect for Roth</li>
                  <li><strong>• High-yield bonds:</strong> Interest taxed as ordinary, save with Roth</li>
                  <li><strong>• Actively traded stocks:</strong> Short-term capital gains avoided</li>
                  <li><strong>• Small-cap growth:</strong> Highest growth potential = most tax benefit</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2 text-blue-700 dark:text-blue-400">Priority 2: Taxable Account</p>
                <p className="text-sm mb-3">Unlimited space, so put tax-efficient investments here:</p>
                <ul className="text-sm space-y-2">
                  <li><strong>• Qualified dividend stocks:</strong> JNJ, PG, KO (15% tax rate)</li>
                  <li><strong>• Growth stocks (low yield):</strong> AAPL, MSFT (defer taxes via holding)</li>
                  <li><strong>• Index funds:</strong> Low turnover, tax-efficient</li>
                  <li><strong>• Positions over $7k:</strong> Can't fit everything in Roth</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold mb-2 text-green-700 dark:text-green-400">The Strategy:</p>
                <p className="text-sm">Max out Roth with high-yield/high-growth investments. Use taxable for
                  tax-efficient blue chips. This minimizes total taxes paid over lifetime.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Considerations</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Age & Time Horizon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold mb-1">Under 40:</p>
                  <p>Roth IRA is a no-brainer. 20-40 years of tax-free compounding = massive wealth. Max it out every
                    year. Put aggressive growth + high-yield here.</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <p className="font-semibold mb-1">40-55:</p>
                  <p>Still favor Roth, but also build taxable for flexibility. You might want access to dividends before
                    59½. Split 60/40 Roth/Taxable.</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                  <p className="font-semibold mb-1">55+:</p>
                  <p>Taxable becomes more important for pre-retirement income. Still max Roth if possible, but taxable
                    gives flexibility to retire early. Split 40/60 Roth/Taxable.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Income Level & Tax Bracket</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold mb-1">0% Qualified Dividend Bracket (Income under $47k/$94k):</p>
                  <p>Taxable account is amazing—dividends are tax-free! Consider using taxable for qualified dividend
                    stocks. Save Roth for high-yield REITs.</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                  <p className="font-semibold mb-1">15% Qualified Dividend Bracket (Most people):</p>
                  <p>Roth is better, but taxable isn't terrible. Max Roth first, then use taxable for overflow. 15% tax
                    drag is manageable.</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                  <p className="font-semibold mb-1">20% + 3.8% NIIT (High earners over $500k):</p>
                  <p>Roth is critically important. Every dollar in Roth saves 23.8% tax. Max Roth, consider backdoor
                    Roth, use taxable only when necessary.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Early Retirement Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Want to retire before 59½? You'll need taxable account for income since Roth is locked up. Build both:
              </p>
              <ul className="text-sm space-y-1">
                <li>• Roth: Max every year for tax-free growth (access later)</li>
                <li>• Taxable: Build large enough to live off dividends until 59½</li>
                <li>• Example: Need $40k/year, build $1M taxable (4% yield) + max Roth</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estate Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Roth IRA for Heirs:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Heirs inherit tax-free</li>
                    <li>• Must withdraw over 10 years</li>
                    <li>• But withdrawals still tax-free</li>
                    <li>• Great wealth transfer vehicle</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Taxable for Heirs:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Step-up in cost basis</li>
                    <li>• Heirs pay $0 on previous gains</li>
                    <li>• Better if estate over $13M</li>
                    <li>• Immediate access to funds</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Decision Framework</h2>

        <Card>
          <CardHeader>
            <CardTitle>Use This Flowchart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2">Step 1: Are you eligible for Roth IRA?</p>
                <p className="text-sm">Income under $161k (single) or $240k (married)? → Max Roth first ($7k/year)</p>
                <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">If over limits, consider backdoor Roth or
                  use taxable</p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <p className="font-semibold mb-2">Step 2: What type of investments?</p>
                <p className="text-sm">High-yield REITs/bonds? → Roth IRA (tax-free ordinary income)</p>
                <p className="text-sm mt-1">Qualified dividend stocks? → Taxable OK (only 15% tax)</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold mb-2">Step 3: Need access before 59½?</p>
                <p className="text-sm">Yes → Build taxable portfolio for early retirement income</p>
                <p className="text-sm mt-1">No → Max Roth, use taxable for overflow only</p>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <p className="font-semibold mb-2">Step 4: Total investable assets?</p>
                <p className="text-sm">Under $50k → Focus on Roth (limited funds, prioritize tax-free)</p>
                <p className="text-sm mt-1">Over $50k → Max Roth + build taxable (need both)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Optimize Your Account Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              For most investors, the answer is both: Max Roth IRA with high-yield investments for tax-free growth, then
              use taxable accounts for qualified dividend stocks and additional capacity. This hybrid approach optimizes
              taxes while maintaining flexibility.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dividend-tax-guide-2026">
                <Button className="w-full" size="lg">Complete Tax Guide →</Button>
              </Link>
              <Link href="/blog/best-high-yield-reits-2026">
                <Button variant="outline" className="w-full" size="lg">High-Yield REITs for Roth →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/qualified-vs-ordinary-dividends-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Qualified vs Ordinary Dividends</CardTitle>
                <CardDescription>Understand dividend taxation</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-reinvest-dividends-for-maximum-growth">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Reinvestment</CardTitle>
                <CardDescription>DRIP strategies</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
