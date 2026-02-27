import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, CheckCircle2, ArrowRight, Star, Calendar, BarChart3, Zap, LineChart, Award } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Dividend Snowball Method: How to Accelerate Your Income (2026)',
  description: 'Learn how the dividend snowball method works to compound your income faster. Real examples showing how reinvested dividends create exponential growth over time.',
  keywords: ['dividend snowball', 'dividend snowball method', 'dividend compounding', 'reinvest dividends', 'dividend snowball effect', 'accelerate dividend income'],
}

export default function DividendSnowballMethodExplained() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <TrendingUp className="h-3 w-3 mr-1" />
          Wealth Building Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          The Dividend Snowball Method Explained
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          How reinvesting dividends creates a self-accelerating income machine.
          Turn small investments into massive wealth through the power of compounding.
        </p>
      </div>

      {/* Quick Concept */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Zap className="h-6 w-6 text-blue-600" />
            The Core Idea
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              The dividend snowball method is simple: <strong>reinvest every dividend to buy more shares,
              which pay more dividends, which buy more shares</strong> -- creating an accelerating cycle
              of growing income.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 py-4 text-sm">
              <div className="px-3 py-2 bg-white dark:bg-slate-900 rounded-lg font-semibold">Buy Shares</div>
              <ArrowRight className="h-4 w-4 text-blue-600" />
              <div className="px-3 py-2 bg-white dark:bg-slate-900 rounded-lg font-semibold">Earn Dividends</div>
              <ArrowRight className="h-4 w-4 text-blue-600" />
              <div className="px-3 py-2 bg-white dark:bg-slate-900 rounded-lg font-semibold">Reinvest (DRIP)</div>
              <ArrowRight className="h-4 w-4 text-blue-600" />
              <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg font-bold text-blue-700 dark:text-blue-300">More Shares</div>
              <ArrowRight className="h-4 w-4 text-blue-600" />
              <div className="px-3 py-2 bg-green-100 dark:bg-green-900 rounded-lg font-bold text-green-700 dark:text-green-300">More Dividends</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
              Each cycle grows larger than the last. After 10-15 years, the snowball becomes unstoppable.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Real Example */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-green-600" />
          The Snowball in Action: A Real Example
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Let us follow $10,000 invested in a stock yielding 4% with 7% annual dividend growth.
          No additional money added -- just the snowball doing its work:
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Year 1</p>
                  <p className="text-xs text-slate-500">Starting point</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$400 dividends</p>
                  <p className="text-xs text-slate-500">4.0% yield on $10,000</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Year 5</p>
                  <p className="text-xs text-slate-500">Snowball gaining speed</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$587 dividends</p>
                  <p className="text-xs text-slate-500">5.2% yield on cost + reinvested shares</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Year 10</p>
                  <p className="text-xs text-slate-500">Compounding accelerates</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$919 dividends</p>
                  <p className="text-xs text-slate-500">9.2% yield on original cost</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Year 15</p>
                  <p className="text-xs text-slate-500">Snowball is massive</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$1,528 dividends</p>
                  <p className="text-xs text-slate-500">15.3% yield on original cost</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded border-2 border-green-400">
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">Year 20</p>
                  <p className="text-xs text-green-600">Snowball dominates</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-700 dark:text-green-400">$2,590 dividends</p>
                  <p className="text-xs text-green-600">25.9% yield on original $10,000</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>The magic:</strong> Your original $10,000 now pays $2,590/year -- a 25.9% annual return
                on your original investment. You never added another dollar. The snowball effect (dividend
                reinvestment + dividend growth) did all the work. Total portfolio value at year 20: approximately
                $54,000 -- more than 5x your original investment.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-red-50 dark:bg-red-950 border-red-200">
            <CardContent className="pt-6">
              <p className="font-bold mb-2 text-red-700 dark:text-red-400">Without Snowball (No DRIP)</p>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>Year 1: $400/yr income</li>
                <li>Year 10: $787/yr income (growth only)</li>
                <li>Year 20: $1,547/yr income</li>
                <li>Total dividends collected: $14,783</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 dark:bg-green-950 border-green-200">
            <CardContent className="pt-6">
              <p className="font-bold mb-2 text-green-700 dark:text-green-400">With Snowball (DRIP On)</p>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>Year 1: $400/yr income</li>
                <li>Year 10: $919/yr income (+17%)</li>
                <li>Year 20: $2,590/yr income (+67%)</li>
                <li>Total dividends reinvested: $18,204</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 text-center">
          Over 20 years, the snowball effect produces 67% more annual income from the same starting investment.
        </p>
      </section>

      {/* Three Snowball Accelerators */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          3 Snowball Accelerators
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The basic snowball works with just DRIP. But these three accelerators make it grow dramatically faster:
        </p>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</span>
                Monthly Contributions (The Turbocharger)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Adding fresh capital each month is like packing more snow onto your snowball. Even $500/month
                makes a massive difference over time.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-bold">Starting $10K +</th>
                      <th className="text-center py-2 font-bold">Year 10 Value</th>
                      <th className="text-center py-2 font-bold">Year 10 Income</th>
                      <th className="text-center py-2 font-bold">Year 20 Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">$0/month added</td>
                      <td className="text-center">$22,000</td>
                      <td className="text-center">$919/yr</td>
                      <td className="text-center">$2,590/yr</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">$500/month added</td>
                      <td className="text-center">$109,000</td>
                      <td className="text-center">$4,905/yr</td>
                      <td className="text-center">$18,960/yr</td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-950">
                      <td className="py-2 font-semibold">$1,000/month added</td>
                      <td className="text-center font-semibold">$196,000</td>
                      <td className="text-center font-semibold">$8,820/yr</td>
                      <td className="text-center font-bold text-green-600">$35,280/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                $1,000/month + DRIP turns $10K into $35,280/year in income ($2,940/month) after 20 years.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</span>
                Dividend Growth Stocks (The Multiplier)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Companies that raise dividends 8-10% annually double your per-share income every 7-9 years.
                This is the hidden engine of the snowball -- you get paid more per share AND own more shares.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Top Dividend Growers</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                    <li>ABBV -- 12.5% 5yr growth rate</li>
                    <li>HD (Home Depot) -- 10.2% growth</li>
                    <li>AVGO (Broadcom) -- 14.8% growth</li>
                    <li>COST (Costco) -- 12.1% growth</li>
                    <li>UNH (UnitedHealth) -- 14.5% growth</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm">Steady Growers</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                    <li>JNJ -- 6.1% 5yr growth rate</li>
                    <li>PG (Procter & Gamble) -- 6.0%</li>
                    <li>KO (Coca-Cola) -- 4.8% growth</li>
                    <li>PEP (PepsiCo) -- 7.1% growth</li>
                    <li>O (Realty Income) -- 4.2% growth</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</span>
                Buying Dips (The Supercharger)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                When stock prices drop, dividend yields go up. Buying during corrections means your DRIP
                purchases more shares per dollar. Investors who stayed invested and kept buying during the
                2020 COVID crash saw their yield-on-cost jump 15-30%.
              </p>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-semibold mb-2">Example: Realty Income (O) during 2020 crash</p>
                <ul className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Pre-crash price: $78/share (3.5% yield)</li>
                  <li>Crash low: $38/share (7.2% yield)</li>
                  <li>Investors who bought at $38 locked in 7.2% yield -- now getting 8.5%+ with growth</li>
                  <li>Those shares have also appreciated 100%+ as the price recovered</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* How to Implement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-purple-600" />
          How to Set Up Your Dividend Snowball
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
                <div>
                  <p className="font-bold text-lg">Open a Brokerage Account with Free DRIP</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Choose a broker that offers automatic dividend reinvestment at no cost. Fidelity, Schwab,
                    and M1 Finance all offer this. M1 Finance is especially good because it automatically
                    rebalances reinvested dividends across your target allocation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">2</div>
                <div>
                  <p className="font-bold text-lg">Build Your Starting Portfolio</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Start with a dividend growth ETF like SCHD (30-50% of portfolio). Add 3-5 individual
                    Dividend Aristocrats across different sectors. Target a 3.5-5% blended yield with 6-8%
                    average dividend growth rate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">3</div>
                <div>
                  <p className="font-bold text-lg">Enable DRIP on Every Holding</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Go into your brokerage settings and enable dividend reinvestment for every stock and ETF.
                    This is the snowball engine. Every dividend automatically buys more shares at no commission.
                    With fractional shares, even small dividends get reinvested immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">4</div>
                <div>
                  <p className="font-bold text-lg">Set Up Automatic Monthly Contributions</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Schedule automatic transfers from your bank account -- $500, $1,000, or whatever you can
                    afford. Consistency beats timing. Dollar-cost averaging ensures you buy at all price
                    levels, including dips when yields are higher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">5</div>
                <div>
                  <p className="font-bold text-lg">Track Your Snowball Quarterly</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Once per quarter, check your forward annual dividend income. Watch it grow quarter over
                    quarter. This number is your scoreboard. Do not focus on stock prices -- focus on
                    increasing your annual dividend income. As long as that number keeps rising, your
                    snowball is working.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Snowball Milestones */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Award className="h-7 w-7 text-yellow-500" />
          Snowball Milestones to Celebrate
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-2 border-slate-300">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-black text-slate-600">$100</p>
              <p className="text-sm font-semibold">First $100/month in dividends</p>
              <p className="text-xs text-slate-500 mt-1">Your snowball has formed. Keep rolling it.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-300">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-black text-blue-600">$500</p>
              <p className="text-sm font-semibold">$500/month -- covers a car payment</p>
              <p className="text-xs text-slate-500 mt-1">Serious momentum. Compounding is visible.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-300">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-black text-green-600">$1,000</p>
              <p className="text-sm font-semibold">$1,000/month -- covers a mortgage</p>
              <p className="text-xs text-slate-500 mt-1">Life-changing. Your snowball is a boulder.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-purple-300">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-black text-purple-600">$5,000</p>
              <p className="text-sm font-semibold">$5,000/month -- financial freedom</p>
              <p className="text-xs text-slate-500 mt-1">Work is optional. The snowball funds your life.</p>
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
              <CardTitle className="text-lg">How long before the snowball effect is noticeable?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Most investors start noticing meaningful acceleration around year 5-7. The first few years
                feel slow because the dollar amounts are small. But once your reinvested dividends are
                adding $200-$500/month in new purchases, the growth becomes visible and exciting. Patience
                in years 1-5 is what makes years 10-20 extraordinary.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I ever turn off DRIP?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Only when you need the income to live on. During the accumulation phase, keep DRIP on
                for everything. Some advanced investors selectively turn off DRIP for overweight positions
                and manually redirect dividends to underweight positions. But for most people, automatic
                DRIP on everything is the best approach.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Does the snowball work with ETFs or only individual stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It works with both. ETFs like SCHD, VYM, and DGRO all pay dividends that can be automatically
                reinvested. The snowball effect is identical whether you hold 1 ETF or 20 individual stocks.
                ETFs are actually slightly better for beginners because you get instant diversification
                without needing to research individual companies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is the dividend snowball better than growth investing?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your goals. Growth investing (buying NVDA, AMZN, etc.) has produced higher total
                returns in the last decade. But dividend snowball investing provides reliable, growing income
                and performs better in bear markets. Many investors use both: growth stocks for wealth building
                and dividend stocks for income generation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is the biggest risk to the snowball?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividend cuts. If a company reduces its dividend, your snowball shrinks. Protect against this
                by diversifying across 15+ stocks and 8+ sectors, and by prioritizing companies with 10+ years
                of consecutive dividend increases. Dividend Aristocrats (25+ years) and Dividend Kings (50+ years)
                have the best track records of maintaining payments through recessions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl">Start Your Dividend Snowball Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              See exactly how your snowball grows over time with our free calculators.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  Growth Projector <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" className="w-full" size="lg">
                  Yield on Cost <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Everything about dividend reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/passive-income-with-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build Passive Income with Dividends</CardTitle>
                <CardDescription>$500 to $5,000/month roadmap</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-make-500-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Make $500/Month in Dividends</CardTitle>
                <CardDescription>Your first snowball milestone</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-reinvest-dividends-for-maximum-growth">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Reinvest Dividends for Maximum Growth</CardTitle>
                <CardDescription>Advanced reinvestment strategies</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
