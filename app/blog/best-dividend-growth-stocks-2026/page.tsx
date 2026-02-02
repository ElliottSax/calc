import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Zap, DollarSign, CheckCircle2, Target } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Dividend Growth Stocks 2026: 10%+ Annual Increases',
  description: 'Discover stocks increasing dividends 10-25% annually. Build wealth through dividend growth compounding. Perfect for investors under 50 building long-term income.',
}

export default function BestDividendGrowthStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Zap className="h-3 w-3 mr-1" />
          Fast-Growing Dividends
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Dividend Growth Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Lower yields today, but dividends growing 10-25% annually.
          Your income doubles every 3-7 years instead of 20+ years.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle>Growth vs Yield: The Math</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <h3 className="font-bold text-orange-600 mb-3">High-Yield Approach</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Year 1:</strong> $10,000 @ 6% = $600/year</p>
                <p><strong>Year 10:</strong> $643/year (3% growth)</p>
                <p><strong>Year 20:</strong> $867/year</p>
                <p className="pt-2 font-semibold">Takes 24 years to double income</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
              <h3 className="font-bold text-green-600 mb-3">Dividend Growth Approach</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Year 1:</strong> $10,000 @ 2% = $200/year</p>
                <p><strong>Year 10:</strong> $518/year (15% growth)</p>
                <p><strong>Year 20:</strong> $3,273/year (!)</p>
                <p className="pt-2 font-semibold text-green-600">Income doubles every 5 years</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
            <strong>Key insight:</strong> By year 15, the dividend growth stock pays more annually
            despite starting at 1/3 the yield. By year 25, it's paying 5x more per year!
          </p>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Dividend Growth Stocks</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. Broadcom (AVGO)</CardTitle>
                  <CardDescription>Semiconductor & infrastructure software</CardDescription>
                </div>
                <Badge className="bg-green-600">18.5% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">1.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">18.5%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">14 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">48%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Leading semiconductor company with dominant position in data center networking and wireless chips.
                Acquired VMware for software diversification. Dividend has grown from $0.23/quarter in 2019 to
                $0.59/quarter in 2024. Your income triples in 7 years at this pace.
              </p>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-sm">
                <p className="font-semibold mb-1">Income Projection (per $10,000 invested):</p>
                <p>Year 1: $180 | Year 5: $367 | Year 10: $951 | Year 15: $2,461</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. Visa (V)</CardTitle>
                  <CardDescription>Global payments network</CardDescription>
                </div>
                <Badge className="bg-blue-600">17% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">0.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">17.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">16 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">21%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Processes billions of transactions globally. Earns a small fee on each swipe. Extremely low payout
                ratio (21%) means massive room for growth. As world moves to digital payments, Visa profits grow.
                15-year track record of double-digit dividend increases.
              </p>

              <Link href="/stocks/v" className="inline-block">
                <Button variant="outline" size="sm">Calculate V Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. Mastercard (MA)</CardTitle>
                  <CardDescription>Digital payments & data analytics</CardDescription>
                </div>
                <Badge className="bg-purple-600">16% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">0.6%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">16.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">13 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">18%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Similar model to Visa—earns fees on transactions. Ultra-low payout ratio (18%) enables aggressive
                dividend growth. Every year, more cash transactions convert to digital, growing MA's revenue.
                Perfect for 30+ year holding period.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. Costco (COST)</CardTitle>
                  <CardDescription>Membership warehouse retail</CardDescription>
                </div>
                <Badge className="bg-teal-600">13% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">0.6%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">13.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">21 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">28%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Membership fees ($120-130/year) provide predictable revenue. 93% renewal rate = sticky customers.
                Paid special $10-15/share dividends several times (on top of regular dividend). If you shop at Costco,
                you understand why it wins.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. Lowe's (LOW)</CardTitle>
                  <CardDescription>Home improvement retail</CardDescription>
                </div>
                <Badge className="bg-orange-600">15% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">2.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">15.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">62 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">35%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Aging housing stock (median U.S. home is 40+ years old) drives renovation demand. Dividend aristocrat
                with 62 years of payments. Better value than Home Depot currently with similar growth profile.
                2% starting yield sweetens the deal.
              </p>

              <Link href="/stocks/low" className="inline-block">
                <Button variant="outline" size="sm">Calculate LOW Returns →</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top 10 Growth Champions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">5Y Growth</th>
                    <th className="text-left p-2">Sector</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Broadcom (AVGO)</td><td className="p-2 text-right">1.8%</td><td className="p-2 text-right text-green-600">18.5%</td><td className="p-2">Technology</td></tr>
                  <tr className="border-b"><td className="p-2">Visa (V)</td><td className="p-2 text-right">0.8%</td><td className="p-2 text-right text-green-600">17.0%</td><td className="p-2">Financials</td></tr>
                  <tr className="border-b"><td className="p-2">Mastercard (MA)</td><td className="p-2 text-right">0.6%</td><td className="p-2 text-right text-green-600">16.0%</td><td className="p-2">Financials</td></tr>
                  <tr className="border-b"><td className="p-2">Lowe's (LOW)</td><td className="p-2 text-right">2.0%</td><td className="p-2 text-right text-green-600">15.0%</td><td className="p-2">Consumer</td></tr>
                  <tr className="border-b"><td className="p-2">Home Depot (HD)</td><td className="p-2 text-right">2.3%</td><td className="p-2 text-right text-green-600">14.0%</td><td className="p-2">Consumer</td></tr>
                  <tr className="border-b"><td className="p-2">Costco (COST)</td><td className="p-2 text-right">0.6%</td><td className="p-2 text-right text-green-600">13.0%</td><td className="p-2">Consumer</td></tr>
                  <tr className="border-b"><td className="p-2">Microsoft (MSFT)</td><td className="p-2 text-right">0.8%</td><td className="p-2 text-right text-green-600">10.2%</td><td className="p-2">Technology</td></tr>
                  <tr className="border-b"><td className="p-2">Apple (AAPL)</td><td className="p-2 text-right">0.5%</td><td className="p-2 text-right text-green-600">7.8%</td><td className="p-2">Technology</td></tr>
                  <tr className="border-b"><td className="p-2">Stryker (SYK)</td><td className="p-2 text-right">1.1%</td><td className="p-2 text-right text-green-600">9.5%</td><td className="p-2">Healthcare</td></tr>
                  <tr><td className="p-2">TJX Companies (TJX)</td><td className="p-2 text-right">1.3%</td><td className="p-2 text-right text-green-600">11.0%</td><td className="p-2">Retail</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Dividend Growth Portfolio Template"
          description="Pre-built spreadsheet with 25 fast-growing dividend stocks + tracking tools"
          buttonText="Download Free Template"
          source="dividend_growth_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Who Should Focus on Dividend Growth?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Perfect For:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ages 20-50:</strong> Time for compounding to work its magic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>High earners:</strong> Don't need income today, building for future</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Roth IRA investors:</strong> Tax-free growth amplifies compounding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Long-term holders:</strong> Patient investors who won't sell in downturns</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Not Ideal For:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold min-w-[20px]">✗</span>
                  <span><strong>Retirees needing income now:</strong> 0.5-2% yields won't cover bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold min-w-[20px]">✗</span>
                  <span><strong>Short-term traders:</strong> Need 10+ years to see full benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold min-w-[20px]">✗</span>
                  <span><strong>Income-focused investors:</strong> Current cash flow matters more than future growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold min-w-[20px]">✗</span>
                  <span><strong>Impatient investors:</strong> Want to see results immediately</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Sample $50K Dividend Growth Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Broadcom (AVGO)</span>
                <span>$10,000 | 18.5% growth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Visa (V)</span>
                <span>$8,000 | 17.0% growth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Mastercard (MA)</span>
                <span>$8,000 | 16.0% growth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Lowe's (LOW)</span>
                <span>$7,000 | 15.0% growth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Home Depot (HD)</span>
                <span>$7,000 | 14.0% growth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Costco (COST)</span>
                <span>$5,000 | 13.0% growth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-semibold">Microsoft (MSFT)</span>
                <span>$5,000 | 10.2% growth</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Income Projection:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Year 1</p>
                  <p className="font-semibold text-lg">$650</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Year 5</p>
                  <p className="font-semibold text-lg">$1,312</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Year 10</p>
                  <p className="font-semibold text-lg">$3,288</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Year 15</p>
                  <p className="font-semibold text-lg text-green-600">$8,235</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                Assumes 15% average dividend growth with DRIP enabled. Does not include stock price appreciation.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why are the yields so low?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Companies paying 0.5-2% yields are reinvesting profits into growth. As the business grows,
                dividends grow too. Think of it like planting a tree—small today, but massive in 20 years.
                High-yield stocks (6-10%) often lack growth because they pay out everything.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long until growth stocks "catch up" to high-yield stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Typically 7-12 years. A stock growing dividends 15% annually doubles income every 5 years.
                After 10-15 years of compounding, the total income received can exceed a 6% yielder.
                Use our calculator to model your specific scenario.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I mix growth and high-yield stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely! Many investors do 60% dividend growth (for future) + 40% high-yield (for current income).
                This balances long-term wealth building with near-term cash flow. Adjust ratios based on your age.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Building Your Growth Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              If you're under 50 and don't need income today, dividend growth stocks are your best path to
              financial independence. Start with 3-5 of these companies and hold for decades.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Growth Stocks →
                </Button>
              </Link>
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Browse All Dividend Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which strategy wins over 20 years?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build $1,000/Month Portfolio</CardTitle>
                <CardDescription>Complete roadmap to passive income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top Dividend Aristocrats 2026</CardTitle>
                <CardDescription>25+ years of consecutive increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Start your dividend journey here</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
