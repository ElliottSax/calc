import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calculator, CheckCircle2, AlertTriangle, BookOpen } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Calculate Dividend Yield: Complete Guide with Examples',
  description: 'Master dividend yield calculation in 5 minutes. Learn the formula, avoid common mistakes, and understand what makes a good yield. Includes calculator and real examples.',
}

export default function HowToCalculateDividendYield() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calculator className="h-3 w-3 mr-1" />
          Beginner-Friendly Math
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Calculate Dividend Yield
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The single most important metric for dividend investors.
          Learn to calculate it correctly in under 5 minutes.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Formula (It's Simple)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg mb-4">
            <p className="text-center text-3xl font-bold mb-4">
              Dividend Yield = (Annual Dividend ÷ Stock Price) × 100
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-blue-600">Annual Dividend</p>
                <p className="text-slate-600 dark:text-slate-400">Total paid per share per year</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">÷</p>
                <p className="text-slate-600 dark:text-slate-400">Divided by</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">Stock Price</p>
                <p className="text-slate-600 dark:text-slate-400">Current price per share</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <p className="font-semibold mb-2">Example: Coca-Cola</p>
            <ul className="text-sm space-y-1">
              <li>• Annual dividend: $1.94 per share</li>
              <li>• Stock price: $62.00 per share</li>
              <li>• Calculation: ($1.94 ÷ $62.00) × 100 = <strong className="text-green-600">3.13% yield</strong></li>
            </ul>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              This means for every $100 invested, you earn $3.13 per year in dividends.
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step-by-Step: Calculate Any Stock's Yield</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <CardTitle>Find the Annual Dividend</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Most stocks pay quarterly (4 times per year). To get the annual dividend:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm mb-2">Method 1: Multiply Quarterly</p>
                  <p className="text-sm">Latest quarterly dividend × 4</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Example: $0.50/quarter × 4 = $2.00/year
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm mb-2">Method 2: Use "Indicated Dividend"</p>
                  <p className="text-sm">Most financial sites show this directly</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Look for "Annual Div" or "Indicated Dividend"
                  </p>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  Watch out for special dividends
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Some companies pay one-time "special" dividends. Don't include these when calculating
                  yield—only use regular, recurring dividends.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <CardTitle>Get the Current Stock Price</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Use the current market price, not yesterday's or last week's. Yield changes as price changes.
              </p>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold text-sm mb-2">Where to find current price:</p>
                <ul className="text-sm space-y-1">
                  <li>• Your brokerage app (real-time)</li>
                  <li>• Google Finance, Yahoo Finance (15-min delay)</li>
                  <li>• Company investor relations page</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <CardTitle>Divide and Multiply by 100</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Take annual dividend, divide by stock price, multiply by 100 to get percentage:
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold mb-2">Example 1: Johnson & Johnson</p>
                  <p className="text-sm">Annual dividend: $4.76 | Price: $160</p>
                  <p className="text-sm">($4.76 ÷ $160) × 100 = <strong className="text-green-600">2.98%</strong></p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold mb-2">Example 2: AT&T</p>
                  <p className="text-sm">Annual dividend: $1.11 | Price: $18</p>
                  <p className="text-sm">($1.11 ÷ $18) × 100 = <strong className="text-green-600">6.17%</strong></p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold mb-2">Example 3: Visa</p>
                  <p className="text-sm">Annual dividend: $2.08 | Price: $280</p>
                  <p className="text-sm">($2.08 ÷ $280) × 100 = <strong className="text-green-600">0.74%</strong></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free Dividend Yield Calculator Spreadsheet"
          description="Pre-built Excel template that calculates yield automatically for your entire portfolio"
          buttonText="Download Calculator"
          source="yield_calculation_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Yield Changes Daily</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Yield Moves Opposite to Price</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The dividend payment is fixed, but the stock price fluctuates. This creates an inverse relationship:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                <p className="font-semibold text-red-600 mb-2">Price Goes DOWN → Yield Goes UP</p>
                <div className="text-sm space-y-2">
                  <p><strong>Example: XYZ Stock</strong></p>
                  <p>Dividend: $2/year (unchanged)</p>
                  <p>Price drops: $50 → $40</p>
                  <p>Yield changes: 4.0% → <strong>5.0%</strong></p>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <p className="font-semibold text-green-600 mb-2">Price Goes UP → Yield Goes DOWN</p>
                <div className="text-sm space-y-2">
                  <p><strong>Example: ABC Stock</strong></p>
                  <p>Dividend: $2/year (unchanged)</p>
                  <p>Price rises: $50 → $60</p>
                  <p>Yield changes: 4.0% → <strong>3.3%</strong></p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
              <strong>Key insight:</strong> A 10% yield isn't always "better" than 3%. Sometimes high yields
              signal that investors expect a dividend cut (which is why the price fell).
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes & How to Avoid Them</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #1: Using Trailing Yield After a Dividend Cut
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> Company cuts dividend from $4 to $2, but Yahoo Finance
                still shows old $4 number for a few weeks. You calculate using old data.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Always check the most recent dividend announcement on company investor
                relations page before calculating.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #2: Including Special Dividends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> Company pays regular $2/year + one-time $5 special dividend.
                You calculate yield using $7 total, making it look sustainable.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Only use regular, recurring dividends. Special dividends are bonuses,
                not reliable income.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #3: Forgetting to Annualize Monthly Dividends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> Stock pays $0.10/month. You divide by price and get 0.5% yield,
                forgetting there are 12 monthly payments.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Monthly dividend × 12 = annual. ($0.10 × 12 = $1.20 annual)
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #4: Using Your Purchase Price Instead of Current Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> You bought at $50, stock is now $60. You calculate yield
                using $50 (your cost basis) instead of $60 (current market price).
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Always use current market price for "yield." Your personal "yield on cost"
                is different (and uses your purchase price).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What's a "Good" Dividend Yield?</h2>

        <Card>
          <CardHeader>
            <CardTitle>Yield Interpretation Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">0% - 1.5%</p>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">Growth Focus</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Companies reinvesting heavily in growth. Examples: Visa, Mastercard, Costco, Microsoft.
                  Low yield today but usually growing 10-20% annually.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">2% - 4%</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">Sweet Spot</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Balanced approach. Solid current income + room for dividend growth. Examples: JNJ, PG, KO, PEP.
                  Most dividend aristocrats fall here. Safest zone for beginners.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">4% - 6%</p>
                  <Badge variant="outline" className="text-yellow-600 border-yellow-600">Moderate Yield</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Higher income focus. Examples: Verizon, AT&T, quality REITs, some utilities.
                  Dividend growth may be slower (5-8% annually). Still generally safe.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">6% - 10%</p>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">Higher Risk</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  High income but elevated risk. Examples: BDCs, mREITs, struggling companies.
                  Dividend cuts are common during recessions. Research carefully.
                </p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">10%+</p>
                  <Badge variant="destructive">Warning Zone</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Extreme yields usually signal dividend cut coming. Stock price has crashed because investors
                  expect bad news. Can be opportunities for experienced investors, but beginners should avoid.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Yield vs Yield on Cost</h2>

        <Card>
          <CardHeader>
            <CardTitle>Two Different (But Related) Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h3 className="font-bold mb-2">Current Yield</h3>
                <p className="text-sm mb-3">Annual Dividend ÷ <strong>Current Market Price</strong></p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  What the stock yields <em>right now</em> if you buy it today. Changes daily as price moves.
                  Used to compare investment opportunities.
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h3 className="font-bold mb-2">Yield on Cost</h3>
                <p className="text-sm mb-3">Annual Dividend ÷ <strong>Your Purchase Price</strong></p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  What the stock yields based on <em>what you paid</em>. Stays constant as your cost doesn't change.
                  Used to track personal returns over time.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="font-semibold mb-3">Example: The Magic of Yield on Cost</p>
              <div className="space-y-2 text-sm">
                <p><strong>2010:</strong> You buy Coca-Cola at $30/share, dividend is $0.88/year</p>
                <p className="ml-4">→ Yield at purchase: 2.93%</p>
                <p><strong>2026:</strong> Stock is now $62, dividend has grown to $1.94/year</p>
                <p className="ml-4">→ Current yield: 3.13%</p>
                <p className="ml-4">→ <strong className="text-green-600">Your yield on cost: 6.47%!</strong></p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                  You're earning 6.47% on your original investment even though the stock "only" yields 3.13% today.
                  This is the power of dividend growth over long time periods.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Calculator: Find Your Yield</h2>

        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <CardHeader>
            <CardTitle>Use Our Free Dividend Calculator</CardTitle>
            <CardDescription>Calculate yield for any stock instantly + see income projections</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Our calculator does all the math automatically. Just enter the ticker symbol and it pulls
              current price, dividend data, and calculates:
            </p>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Current dividend yield</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Annual income based on your investment amount</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>10-year DRIP projection with dividend growth</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Comparison with other dividend stocks</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Try Calculator Now →
                </Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Yields →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I calculate yield before or after taxes?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividend yield is always calculated <strong>before taxes</strong>. It's the gross yield.
                Your after-tax yield depends on your tax bracket and account type (Roth IRA dividends
                are tax-free, for example).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I use trailing or forward dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Most people use <strong>trailing</strong> (last 12 months of actual payments) because
                it's factual. "Forward" yield uses projected future payments, which may not happen if
                the company cuts dividends. Trailing is more conservative and accurate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Does DRIP affect my yield calculation?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. Yield is purely dividend ÷ price, regardless of whether you reinvest. However, DRIP
                compounds your <em>returns</em> over time by buying more shares, which increases your
                total income in future years.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why do different websites show different yields?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Timing differences. One site uses this morning's price, another uses yesterday's close.
                Or they use different dividend figures (trailing vs indicated). The differences are usually
                small (0.1-0.2%). Use your broker's numbers as they're most up-to-date.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">You're Now a Yield Expert</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Understanding how to calculate dividend yield correctly is fundamental to dividend investing.
              Now you know the formula, common mistakes, and how to interpret different yield levels.
              Time to put it into practice!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Calculate Stock Yields →
                </Button>
              </Link>
              <Link href="/blog/best-dividend-stocks-for-beginners">
                <Button variant="outline" className="w-full" size="lg">
                  Find High-Yield Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>Start with these proven performers</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which yield strategy is right for you?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Calculate after-tax yield</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Maximize your yield with reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
