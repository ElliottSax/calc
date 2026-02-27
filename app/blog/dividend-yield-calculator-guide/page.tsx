import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calculator, CheckCircle2, AlertTriangle, TrendingUp, ArrowUpDown, BookOpen } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Dividend Yield Calculator: How to Calculate & Compare Yields',
  description: 'Use our free dividend yield calculator to compare stock yields instantly. Learn the formula, forward vs trailing yield, yield on cost, and avoid costly mistakes. Step-by-step examples included.',
  keywords: 'dividend yield calculator, calculate dividend yield, forward dividend yield, trailing dividend yield, yield on cost, dividend yield formula',
}

export default function DividendYieldCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calculator className="h-3 w-3 mr-1" />
          Free Calculator + Complete Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend Yield Calculator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Calculate, compare, and understand dividend yields like a professional investor.
          Step-by-step formula, real examples, and a free calculator to use right now.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/calculators/yield-on-cost">
            <Button size="lg">
              <Calculator className="h-4 w-4 mr-2" />
              Open Yield Calculator
            </Button>
          </Link>
          <Link href="/calculators/drip">
            <Button variant="outline" size="lg">
              Try DRIP Calculator
            </Button>
          </Link>
        </div>
      </div>

      {/* The Core Formula */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Dividend Yield Formula</CardTitle>
          <CardDescription>One simple equation every investor must know</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg mb-6">
            <p className="text-center text-3xl font-bold mb-2">
              Dividend Yield = (Annual Dividend per Share / Stock Price) x 100
            </p>
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              The result is a percentage that tells you how much income you earn per dollar invested.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
              <p className="font-bold text-green-700 dark:text-green-300 text-lg mb-1">$2.00</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividend</p>
              <p className="text-xs text-slate-500 mt-1">Total dividends paid per share in one year</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
              <p className="font-bold text-blue-700 dark:text-blue-300 text-lg mb-1">$50.00</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Current Stock Price</p>
              <p className="text-xs text-slate-500 mt-1">Market price per share right now</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg text-center">
              <p className="font-bold text-purple-700 dark:text-purple-300 text-lg mb-1">4.00%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Yield</p>
              <p className="text-xs text-slate-500 mt-1">$2.00 / $50.00 x 100 = 4.00%</p>
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
            <strong>In plain English:</strong> A 4% yield means for every $100 you invest, you receive $4 per year in dividend income.
            Invest $10,000 and you collect $400 per year, or about $100 per quarter.
          </p>
        </CardContent>
      </Card>

      {/* Step-by-Step Calculation Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step-by-Step: Calculate Any Stock's Dividend Yield</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <CardTitle>Find the Annual Dividend per Share</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Look up the company's annual dividend. Most U.S. stocks pay quarterly, so multiply
                the quarterly dividend by 4 to get the annual amount.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm mb-1">Quarterly Payer</p>
                  <p className="text-sm">$0.75/quarter x 4 = <strong>$3.00/year</strong></p>
                  <p className="text-xs text-slate-500 mt-1">Most common (JNJ, KO, PG)</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm mb-1">Monthly Payer</p>
                  <p className="text-sm">$0.25/month x 12 = <strong>$3.00/year</strong></p>
                  <p className="text-xs text-slate-500 mt-1">REITs like Realty Income (O)</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold text-sm mb-1">Semi-Annual Payer</p>
                  <p className="text-sm">$1.50/half x 2 = <strong>$3.00/year</strong></p>
                  <p className="text-xs text-slate-500 mt-1">Common in international stocks</p>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  Watch out for special dividends
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  One-time special dividends artificially inflate the annual figure. Only use regular,
                  recurring dividends in your calculation. Check the company's investor relations page
                  for the most recent declared regular dividend.
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
                Use the current market price for an accurate yield calculation. The stock price
                changes every second during market hours, so yield is always a moving target.
              </p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold text-sm mb-2">Where to find real-time prices:</p>
                <ul className="text-sm space-y-1">
                  <li>- Your brokerage platform (most accurate, real-time)</li>
                  <li>- Google Finance or Yahoo Finance (15-minute delay for free)</li>
                  <li>- Our calculator pulls live data automatically</li>
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
                Take the annual dividend, divide by the stock price, and multiply by 100 to express the result as a percentage.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="font-bold mb-2">Example 1: Procter & Gamble (PG)</p>
                  <div className="text-sm space-y-1">
                    <p>Quarterly dividend: $1.0065 per share</p>
                    <p>Annual dividend: $1.0065 x 4 = $4.026</p>
                    <p>Current price: $170 per share</p>
                    <p>Yield: ($4.026 / $170) x 100 = <strong className="text-green-600">2.37%</strong></p>
                    <p className="text-xs text-slate-500 mt-2">For every $1,000 invested, you earn $23.70 per year.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="font-bold mb-2">Example 2: Realty Income (O) - Monthly Payer</p>
                  <div className="text-sm space-y-1">
                    <p>Monthly dividend: $0.2625 per share</p>
                    <p>Annual dividend: $0.2625 x 12 = $3.15</p>
                    <p>Current price: $56 per share</p>
                    <p>Yield: ($3.15 / $56) x 100 = <strong className="text-green-600">5.63%</strong></p>
                    <p className="text-xs text-slate-500 mt-2">For every $1,000 invested, you earn $56.30 per year, paid monthly.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="font-bold mb-2">Example 3: Schwab U.S. Dividend Equity ETF (SCHD)</p>
                  <div className="text-sm space-y-1">
                    <p>Recent annual distributions: ~$2.80 per share</p>
                    <p>Current price: $80 per share</p>
                    <p>Yield: ($2.80 / $80) x 100 = <strong className="text-green-600">3.50%</strong></p>
                    <p className="text-xs text-slate-500 mt-2">ETF yields vary quarter to quarter, so use the trailing 12-month total.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Forward vs Trailing Yield */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Forward Yield vs. Trailing Yield</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowUpDown className="h-6 w-6 text-blue-600" />
              Two Ways to Calculate Yield
            </CardTitle>
            <CardDescription>
              The same stock can show different yields depending on which method you use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Trailing Yield (TTM)</h3>
                <p className="text-sm mb-3">Uses dividends actually paid over the <strong>last 12 months</strong>.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Based on real, historical data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>More conservative and factual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>May understate yield after a recent increase</span>
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-white dark:bg-slate-900 rounded text-sm">
                  <strong>Example:</strong> Company paid $0.50, $0.50, $0.55, $0.55 over the last 4 quarters.
                  Trailing annual = $2.10. At $60/share, trailing yield = 3.50%.
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Forward Yield (Indicated)</h3>
                <p className="text-sm mb-3">Uses the most recent dividend and <strong>projects it forward</strong>.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reflects the latest dividend rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Better for stocks that just raised dividends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Assumes the company will maintain or repeat this rate</span>
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-white dark:bg-slate-900 rounded text-sm">
                  <strong>Example:</strong> Latest quarterly dividend is $0.55. Forward annual = $0.55 x 4 = $2.20.
                  At $60/share, forward yield = 3.67%.
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="font-semibold mb-2">Which should you use?</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>For comparing stocks:</strong> Use forward yield so you're comparing the most current dividend rates.
                <br />
                <strong>For income planning:</strong> Use trailing yield for a conservative estimate of what you'll actually receive.
                <br />
                <strong>Our calculators</strong> show both, so you always have the full picture.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Yield on Cost */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Yield on Cost: Your Personal Return</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Current Yield vs. Yield on Cost</CardTitle>
            <CardDescription>
              Why long-term dividend investors often earn much higher "personal yields" than what the market shows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-lg mb-6">
              <p className="text-center text-2xl font-bold mb-2">
                Yield on Cost = (Current Annual Dividend / Your Purchase Price) x 100
              </p>
              <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                Uses the price YOU paid, not today's market price
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg mb-6">
              <p className="font-semibold mb-3">Real-World Example: Home Depot (HD)</p>
              <div className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">When You Bought (2016)</p>
                    <p>Purchase price: $120/share</p>
                    <p>Annual dividend at time: $2.76</p>
                    <p>Yield at purchase: 2.30%</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600 dark:text-green-400">Today (2026)</p>
                    <p>Current price: $380/share</p>
                    <p>Current annual dividend: $9.00</p>
                    <p>Current yield (new buyers): 2.37%</p>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <p className="font-bold text-lg text-green-600">
                    Your yield on cost: ($9.00 / $120) x 100 = 7.50%
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    New investors see a 2.37% yield, but you're earning 7.50% on your original investment
                    because the dividend has grown 226% while your cost basis stayed at $120.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <p className="font-semibold mb-2">Why Yield on Cost Matters</p>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tracks your actual return on invested capital over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Motivates long-term holding: your yield improves each year the dividend grows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Helps you decide whether to sell: a high yield-on-cost position is hard to replace</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Link href="/calculators/yield-on-cost">
                <Button className="w-full" size="lg">
                  Calculate Your Yield on Cost
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  Project Future Yield on Cost
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How Yield Changes with Price */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Yield Changes When Stock Prices Move</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              The Inverse Relationship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Because the dividend amount stays fixed between payment dates while the stock price
              fluctuates, yield and price always move in opposite directions. This is one of the
              most important concepts in dividend investing.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg mb-6">
              <p className="font-semibold mb-3">Scenario: Verizon (VZ) pays $2.66 per year</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Event</th>
                      <th className="text-right p-2">Stock Price</th>
                      <th className="text-right p-2">Annual Dividend</th>
                      <th className="text-right p-2">Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Normal day</td>
                      <td className="p-2 text-right">$42.00</td>
                      <td className="p-2 text-right">$2.66</td>
                      <td className="p-2 text-right font-semibold">6.33%</td>
                    </tr>
                    <tr className="border-b bg-red-50 dark:bg-red-950">
                      <td className="p-2">Stock drops 15%</td>
                      <td className="p-2 text-right text-red-600">$35.70</td>
                      <td className="p-2 text-right">$2.66</td>
                      <td className="p-2 text-right font-semibold text-green-600">7.45%</td>
                    </tr>
                    <tr className="border-b bg-green-50 dark:bg-green-950">
                      <td className="p-2">Stock rises 15%</td>
                      <td className="p-2 text-right text-green-600">$48.30</td>
                      <td className="p-2 text-right">$2.66</td>
                      <td className="p-2 text-right font-semibold text-red-600">5.51%</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-950">
                      <td className="p-2">Stock drops 30%</td>
                      <td className="p-2 text-right text-red-600">$29.40</td>
                      <td className="p-2 text-right">$2.66</td>
                      <td className="p-2 text-right font-semibold text-green-600">9.05%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <p className="font-semibold text-green-600 mb-2">Opportunity Signal</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  When a fundamentally strong company's price drops temporarily (market sell-off,
                  sector rotation), the yield goes UP. If the dividend remains safe, this is often
                  a buying opportunity: you lock in a higher yield.
                </p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                <p className="font-semibold text-red-600 mb-2">Warning Signal</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  When a stock's yield is unusually high (8-10%+) because the price has crashed,
                  it may signal that investors expect a dividend cut. A "yield trap" lures in income
                  seekers just before the dividend is reduced or eliminated.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Dividend Yield Comparison Spreadsheet"
          description="Pre-built Excel template comparing yields across 50+ dividend stocks, with forward and trailing yield calculated automatically."
          buttonText="Download Free Spreadsheet"
          source="yield_calculator_guide_blog"
        />
      </div>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">5 Common Yield Calculation Mistakes</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #1: Comparing Trailing Yield to Forward Yield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> You see Stock A at 3.5% (trailing) and Stock B at 3.2% (forward).
                You pick Stock A thinking it pays more, but Stock B just raised its dividend and actually pays
                more going forward.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Always compare the same type of yield. Use forward-to-forward or trailing-to-trailing
                for accurate comparisons.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #2: Ignoring Dividend Growth Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> You choose a 5% yield over a 2% yield every time, ignoring that
                the 2% stock grows its dividend 12% annually while the 5% stock barely grows at 1%.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: A 2% yield growing at 12% per year becomes a 6.2% yield on cost after 10 years.
                A 5% yield growing at 1% only becomes 5.5%. The "lower" yield wins long-term.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #3: Falling for Yield Traps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> You see a stock yielding 12% and think it's an amazing deal.
                The stock price crashed 50% because the company is in trouble. The 12% yield reflects the
                old dividend that's about to be cut.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: If a yield looks too good to be true, check the payout ratio (should be below 75%
                for most sectors), debt levels, and recent earnings trends. A declining business often cuts
                the dividend.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #4: Confusing Current Yield with Yield on Cost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> You bought a stock at $40 that now trades at $80. You tell friends
                you have a "6% yielder" because the $4.80 dividend / $80 price = 6%. But that's the current yield.
                Your yield on cost is actually $4.80 / $40 = 12%.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Use current yield to evaluate new purchases. Use yield on cost to measure your
                portfolio's performance on the capital you originally invested.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #5: Not Accounting for Taxes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The problem:</strong> You see a 4% yield and plan your income around receiving 4%.
                But after federal and state taxes, qualified dividends may only net you 2.8-3.2%,
                and ordinary dividends could net even less.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Solution: Calculate your after-tax yield, especially for income planning. Better yet,
                hold dividend stocks in a Roth IRA where dividends are completely tax-free.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Dividend Yield Now</CardTitle>
            <CardDescription>Free calculators with real-time data, projections, and comparisons</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Skip the manual math. Our calculators do everything covered in this guide automatically.
              Enter your stocks and see current yield, forward yield, yield on cost, income projections,
              and DRIP compounding results in seconds.
            </p>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Calculate yield on cost for stocks you already own</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Compare forward and trailing yields side by side</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>See 10, 20, and 30-year DRIP growth projections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Estimate annual and monthly dividend income</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/yield-on-cost">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Yield on Cost Calculator
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  DRIP Growth Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is a good dividend yield?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For most investors, the sweet spot is <strong>2-5%</strong>. Below 2% is growth-focused (Visa,
                Microsoft), 2-4% is the quality zone (JNJ, PG, KO), and above 5% carries higher risk but more
                immediate income. The S&P 500 average yield is roughly 1.3%, so anything above that beats the index
                for income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Does a higher yield mean a better investment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not necessarily. A high yield can indicate that the stock price has fallen sharply, which often
                precedes a dividend cut. The best dividend investments balance a <strong>reasonable yield</strong>
                (2-5%) with <strong>consistent dividend growth</strong> (5-10% annually). Total return matters more
                than yield alone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How often should I recalculate dividend yield?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The yield recalculates automatically as prices change, so there's no need to do it manually every day.
                Recalculate or review when: (1) a company announces a dividend change, (2) you're comparing stocks
                for a new purchase, or (3) quarterly, as part of a portfolio review. Our calculator does this
                automatically in real time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why does Yahoo Finance show a different yield than my broker?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Different data providers use different methodologies. Some use trailing 12-month yield, others use
                forward (indicated) yield. They also may use different price snapshots: real-time vs. previous close
                vs. delayed. The differences are typically small (0.1-0.3%). Your broker's figure is usually the most
                accurate since it uses real-time pricing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can dividend yield be negative?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. Dividend yield cannot be negative because companies never charge shareholders for owning stock.
                A stock either pays a dividend (positive yield) or it doesn't (0% yield). If a company suspends its
                dividend entirely, the yield drops to 0%.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>Deep dive into the math with more examples</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which yield strategy maximizes your wealth?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Supercharge your yield with reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>10 proven stocks with safe, growing yields</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
