import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, TrendingUp, DollarSign, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'REITs vs Dividend Stocks: Income Comparison Guide 2026',
  description: 'Compare REITs and dividend stocks on yield, tax treatment, correlation, and portfolio role. Learn when to use each for maximum income and diversification.',
  keywords: 'REITs vs dividend stocks, REIT dividend comparison, REIT tax treatment, dividend stock income, real estate vs stocks, REIT portfolio allocation',
}

export default function REITsVsDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Building2 className="h-3 w-3 mr-1" />
          Income Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          REITs vs Dividend Stocks: Income Comparison Guide
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Higher REIT yields look tempting, but tax treatment changes the math.
          Here is the complete comparison to help you allocate wisely.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>10 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <Building2 className="h-10 w-10 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">4-8%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Typical REIT yield</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">2-4%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Typical dividend stock yield</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-10 w-10 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">0.5</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">REIT-to-stock correlation</p>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">REITs vs Dividend Stocks at a Glance</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-center p-3 font-semibold text-blue-700 dark:text-blue-400">REITs</th>
                    <th className="text-center p-3 font-semibold text-green-700 dark:text-green-400">Dividend Stocks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Typical Yield</td>
                    <td className="p-3 text-center font-semibold">4-8%</td>
                    <td className="p-3 text-center">2-4%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Tax Treatment</td>
                    <td className="p-3 text-center text-sm">Ordinary income (10-37%)</td>
                    <td className="p-3 text-center text-sm font-semibold">Qualified (0-20%)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Payout Requirement</td>
                    <td className="p-3 text-center font-semibold">90% of taxable income</td>
                    <td className="p-3 text-center">No requirement</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Dividend Growth Rate</td>
                    <td className="p-3 text-center">3-5%/year</td>
                    <td className="p-3 text-center font-semibold">7-12%/year</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Correlation to S&P 500</td>
                    <td className="p-3 text-center font-semibold">0.5 (lower)</td>
                    <td className="p-3 text-center">0.85 (higher)</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Inflation Hedge</td>
                    <td className="p-3 text-center font-semibold">Strong (rent escalators)</td>
                    <td className="p-3 text-center">Moderate (pricing power)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Best Account</td>
                    <td className="p-3 text-center">Roth IRA / tax-deferred</td>
                    <td className="p-3 text-center">Taxable or any</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Yield Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Yield Differences Explained</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Why REITs Pay More</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              REITs yield more because they are legally required to distribute at least 90% of taxable
              income as dividends. Traditional corporations have no such requirement and typically retain
              50-70% of earnings for growth, buybacks, or debt reduction.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2">Top REIT Yields</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Realty Income (O)</span><span className="font-semibold">5.2%</span></div>
                  <div className="flex justify-between"><span>W. P. Carey (WPC)</span><span className="font-semibold">5.8%</span></div>
                  <div className="flex justify-between"><span>VICI Properties (VICI)</span><span className="font-semibold">5.4%</span></div>
                  <div className="flex justify-between"><span>STAG Industrial (STAG)</span><span className="font-semibold">4.3%</span></div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold mb-2">Top Dividend Stock Yields</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Johnson & Johnson (JNJ)</span><span className="font-semibold">3.0%</span></div>
                  <div className="flex justify-between"><span>Coca-Cola (KO)</span><span className="font-semibold">3.1%</span></div>
                  <div className="flex justify-between"><span>PepsiCo (PEP)</span><span className="font-semibold">3.4%</span></div>
                  <div className="flex justify-between"><span>AbbVie (ABBV)</span><span className="font-semibold">3.6%</span></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tax Treatment */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Treatment: The Critical Difference</h2>

        <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
              REIT Dividends Are Taxed Higher
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Most REIT dividends are classified as <strong>ordinary income</strong>, taxed at your regular
              income tax rate (10-37%). Regular dividend stocks usually pay <strong>qualified dividends</strong>,
              taxed at the lower capital gains rate (0-20%).
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <p className="font-semibold text-red-600 mb-2">REIT Dividend on $10,000 Income</p>
                <div className="text-sm space-y-1">
                  <p>Gross income: $10,000</p>
                  <p>Tax (24% bracket): -$2,400</p>
                  <p>QBI deduction (20%): +$480</p>
                  <p className="font-bold">After-tax: $8,080</p>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <p className="font-semibold text-green-600 mb-2">Stock Dividend on $10,000 Income</p>
                <div className="text-sm space-y-1">
                  <p>Gross income: $10,000</p>
                  <p>Tax (15% qualified rate): -$1,500</p>
                  <p>No additional deduction: $0</p>
                  <p className="font-bold">After-tax: $8,500</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              Note: REITs qualify for a 20% Qualified Business Income (QBI) deduction under Section 199A,
              which partially offsets the higher tax rate. This deduction is currently set to expire after 2025
              unless extended by Congress.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Account Placement Strategy:</p>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Roth IRA:</strong> Hold REITs here -- all that high-yield income grows tax-free forever</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Traditional IRA / 401(k):</strong> Either works -- taxes are deferred regardless</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Taxable brokerage:</strong> Hold dividend stocks here -- qualified dividends get lower rates</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Diversification */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Correlation and Diversification Benefits</h2>

        <Card>
          <CardHeader>
            <CardTitle>Why Owning Both Reduces Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              REITs have a correlation of roughly 0.5 to the S&P 500, meaning they often move differently
              from regular stocks. Adding REITs to a dividend stock portfolio provides genuine
              diversification, not just more of the same.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">When REITs Shine</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>- Falling interest rate environments (2019, 2024)</li>
                  <li>- Inflationary periods (rents rise with CPI)</li>
                  <li>- When growth stocks sell off (tech corrections)</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">When Dividend Stocks Shine</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>- Rising interest rate environments (2022-2023)</li>
                  <li>- Economic expansions with strong consumer spending</li>
                  <li>- When real estate is overvalued or struggling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Portfolio Role */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Allocation: Combining Both</h2>

        <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-2">
          <CardHeader>
            <CardTitle>Balanced Income Portfolio ($100,000)</CardTitle>
            <CardDescription>Blending REITs and dividend stocks for optimal income + diversification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Dividend Stocks (SCHD/VYM)</p>
                  <p className="text-xs text-slate-600">Qualified dividends, growth, lower tax</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$60,000 (60%)</p>
                  <p className="text-xs">~3.2% yield = $1,920/yr</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Equity REITs (O, STAG, VICI)</p>
                  <p className="text-xs text-slate-600">High yield, real estate exposure, inflation hedge</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$30,000 (30%)</p>
                  <p className="text-xs">~5.0% yield = $1,500/yr</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">REIT ETF (VNQ)</p>
                  <p className="text-xs text-slate-600">Broad REIT diversification, 160+ holdings</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$10,000 (10%)</p>
                  <p className="text-xs">~3.8% yield = $380/yr</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-sm text-center">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Total Annual Income</p>
                  <p className="text-xl font-bold text-green-600">$3,800</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Blended Yield</p>
                  <p className="text-xl font-bold text-blue-600">3.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Monthly Income</p>
                  <p className="text-xl font-bold text-purple-600">$317</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Model Your Income Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Project exactly how much income your REIT + dividend stock blend would generate
              over 5, 10, or 20 years using our free calculators.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/retirement-income">
                <Button className="w-full" size="lg">
                  Retirement Income Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  Dividend Growth Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-high-yield-reits-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best High-Yield REITs 2026</CardTitle>
                <CardDescription>Top REITs paying 5-10% yields</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-reit-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best REIT Dividend Stocks</CardTitle>
                <CardDescription>Our top REIT picks for income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/qualified-vs-ordinary-dividends-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Qualified vs Ordinary Dividends</CardTitle>
                <CardDescription>Understanding REIT tax treatment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Roth IRA vs Taxable Account</CardTitle>
                <CardDescription>Best account for REITs and dividend stocks</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
