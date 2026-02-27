import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, DollarSign, Scale, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Dividend ETFs vs Index Funds: Performance Comparison 2026',
  description: 'SCHD, VYM, VIG vs VOO, VTI head-to-head. Compare total returns, income generation, tax efficiency, and find which strategy fits your goals.',
  keywords: 'dividend ETF vs index fund, SCHD vs VOO, VYM vs VTI, dividend ETF performance, index fund dividends, best dividend ETF 2026',
}

export default function DividendETFsVsIndexFunds() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Scale className="h-3 w-3 mr-1" />
          ETF Strategy Showdown
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend ETFs vs Index Funds: Performance Comparison
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Should you buy SCHD for dividends or VOO for total growth?
          Here is the data-driven answer for every investor type.
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
            <TrendingUp className="h-10 w-10 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">10.3%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">VOO 10-year annualized return</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-10 w-10 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">3.5%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">SCHD current dividend yield</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <BarChart3 className="h-10 w-10 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">1.3%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">VOO current dividend yield</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Verdict */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">The Quick Verdict</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Choose Dividend ETFs If:</h3>
                <ul className="space-y-1 text-sm">
                  <li>- You need current income (retirement or living expenses)</li>
                  <li>- You want lower volatility and drawdowns</li>
                  <li>- You prefer predictable, growing cash flow</li>
                  <li>- You value quality-screened holdings</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Choose Index Funds If:</h3>
                <ul className="space-y-1 text-sm">
                  <li>- You are accumulating wealth (10+ year horizon)</li>
                  <li>- You want maximum total return</li>
                  <li>- You prefer broad market exposure including growth</li>
                  <li>- Tax efficiency in a taxable account matters</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Contenders */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Contenders: Fund Profiles</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Head-to-Head Comparison Table</CardTitle>
            <CardDescription>All data as of February 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Metric</th>
                    <th className="text-center p-3 font-semibold text-blue-700 dark:text-blue-400">SCHD</th>
                    <th className="text-center p-3 font-semibold text-blue-700 dark:text-blue-400">VYM</th>
                    <th className="text-center p-3 font-semibold text-green-700 dark:text-green-400">VOO</th>
                    <th className="text-center p-3 font-semibold text-green-700 dark:text-green-400">VTI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Expense Ratio</td>
                    <td className="p-3 text-center">0.06%</td>
                    <td className="p-3 text-center">0.06%</td>
                    <td className="p-3 text-center">0.03%</td>
                    <td className="p-3 text-center">0.03%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Dividend Yield</td>
                    <td className="p-3 text-center font-semibold">3.5%</td>
                    <td className="p-3 text-center">2.8%</td>
                    <td className="p-3 text-center">1.3%</td>
                    <td className="p-3 text-center">1.3%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Holdings</td>
                    <td className="p-3 text-center">~100</td>
                    <td className="p-3 text-center">~500</td>
                    <td className="p-3 text-center">~500</td>
                    <td className="p-3 text-center">~4,000</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">10-Year Total Return</td>
                    <td className="p-3 text-center">218%</td>
                    <td className="p-3 text-center">176%</td>
                    <td className="p-3 text-center font-semibold">267%</td>
                    <td className="p-3 text-center">258%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Strategy</td>
                    <td className="p-3 text-center text-xs">Quality dividends</td>
                    <td className="p-3 text-center text-xs">High yield</td>
                    <td className="p-3 text-center text-xs">S&P 500</td>
                    <td className="p-3 text-center text-xs">Total market</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Max Drawdown (5yr)</td>
                    <td className="p-3 text-center">-18%</td>
                    <td className="p-3 text-center">-17%</td>
                    <td className="p-3 text-center">-24%</td>
                    <td className="p-3 text-center">-25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Total Returns */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Total Returns: Who Wins?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Growth of $100,000 Over 10 Years</CardTitle>
            <CardDescription>Dividends reinvested, as of February 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400">VOO (S&P 500)</p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">$367,000</p>
                <p className="text-xs text-slate-500">10.3% annualized</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400">SCHD (Dividend)</p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">$318,600</p>
                <p className="text-xs text-slate-500">12.3% annualized</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Key insight:</strong> Index funds (VOO/VTI) have beaten dividend ETFs on total return
              over the past decade, driven primarily by mega-cap tech growth (Apple, NVIDIA, Microsoft).
              However, dividend ETFs experienced significantly smaller drawdowns during market corrections,
              which matters for investors who need stability or who spend their dividends.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Income Generation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Income Generation: The Real Difference</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Annual Dividend Income on $500,000 Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-blue-700 dark:text-blue-400">SCHD (3.5% yield)</p>
                  <p className="text-2xl font-bold">$17,500/yr</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">$1,458/month -- growing 12% annually</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold">VYM (2.8% yield)</p>
                  <p className="text-2xl font-bold">$14,000/yr</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">$1,167/month -- growing 6% annually</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-green-700 dark:text-green-400">VOO (1.3% yield)</p>
                  <p className="text-2xl font-bold">$6,500/yr</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">$542/month -- growing 7% annually</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
              If you need income to pay bills, the difference is dramatic. SCHD generates nearly 3x more
              cash flow than VOO. For retirees withdrawing 4%, dividend ETFs produce enough income without
              selling shares, while index fund investors must sell shares to generate the same cash.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Tax Efficiency */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Efficiency Breakdown</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-lg">Dividend ETFs (SCHD/VYM)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>95%+ qualified dividends (0-20% tax rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Higher forced distributions each year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>More tax drag in taxable accounts</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">Best in: Roth IRA (tax-free growth on high dividends)</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg">Index Funds (VOO/VTI)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lower dividend payouts = less annual tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>More growth deferred as unrealized gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ultra-low turnover (minimal capital gains)</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">Best in: Taxable brokerage (defer taxes longer)</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Tax Strategy Summary:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              In a taxable account, VOO/VTI are more tax-efficient because you control when gains are
              realized. In a Roth IRA, SCHD/VYM are ideal because all those high dividends grow
              completely tax-free. In a traditional IRA or 401(k), choose based on performance -- taxes
              are deferred regardless.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Compare Returns for Your Situation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use our calculators to model how dividend ETFs and index funds perform with your specific
              investment amount, time horizon, and income needs.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/blog/SCHD-vs-VYM-comparison">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">SCHD vs VYM: Complete Comparison</CardTitle>
                <CardDescription>The two biggest dividend ETFs head-to-head</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-etfs-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend ETFs for 2026</CardTitle>
                <CardDescription>Complete ranking with yields and expenses</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which yield strategy wins over 20 years?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-income-vs-capital-gains">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Income vs Capital Gains</CardTitle>
                <CardDescription>Understanding the two paths to wealth</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
