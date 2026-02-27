import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, CheckCircle2, AlertTriangle, BarChart3, Calculator, PieChart, Target } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Total Return Calculator: Dividends + Capital Gains Explained (2026)',
  description: 'Learn what total return means, the formula for calculating it (price change + dividends), why it matters more than price alone, and common mistakes investors make.',
  keywords: 'total return calculator, total return formula, dividends plus capital gains, investment total return, stock total return, total return vs price return',
}

export default function TotalReturnCalculatorDividends() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          Investment Fundamentals
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Total Return: Dividends + Capital Gains
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Looking only at stock price is like grading a test but ignoring the bonus questions.
          Total return tells the real story of your investment performance.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Total Return Formula</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg text-center mb-4">
            <p className="text-lg font-mono font-bold">
              Total Return = (Ending Price - Beginning Price + Dividends) / Beginning Price
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">Capital Gains</p>
              <p className="text-slate-600 dark:text-slate-400">Change in stock price</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-600 mb-1">+</p>
              <p className="font-semibold">Plus</p>
              <p className="text-slate-600 dark:text-slate-400">Both components matter</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">Dividends</p>
              <p className="text-slate-600 dark:text-slate-400">Cash payments received</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is Total Return?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>The Complete Picture of Investment Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Total return measures the actual gain or loss on an investment over a period of time.
              It includes <strong>two components</strong>: the change in the stock price (capital
              appreciation or depreciation) and any income received (dividends or interest).
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Most stock charts and financial headlines show only the <strong>price return</strong>,
              which ignores dividends entirely. This significantly understates the performance of
              dividend-paying stocks and misleads investors about actual wealth creation.
            </p>

            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-300 dark:border-amber-700 text-sm">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-600" />
                Why This Matters
              </p>
              <p>
                Since 1926, dividends have contributed approximately <strong>40% of the S&P 500's
                total return</strong>. If you only look at price charts, you are missing nearly half
                of the market's historical gains.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Examples: Price Return vs Total Return</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-blue-600" />
                Example 1: AT&T (T) -- Dividends Save the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine you bought AT&T in January 2015 at $33.59 per share and checked the price
                in January 2020: it was $37.68. Looks like a modest 12% gain over 5 years.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="font-semibold text-slate-600 mb-2">Price Return Only</p>
                  <p className="text-2xl font-bold">+12.2%</p>
                  <p className="text-slate-500">($33.59 to $37.68)</p>
                  <p className="text-xs text-slate-400 mt-2">2.3% annualized</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">Total Return (with dividends)</p>
                  <p className="text-2xl font-bold text-green-600">+43.8%</p>
                  <p className="text-slate-600 dark:text-slate-400">Price gain + ~$10.20 in dividends</p>
                  <p className="text-xs text-green-600 mt-2">7.5% annualized</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                Dividends added 31.6 percentage points to the return. Looking at price alone would
                have made this look like a terrible investment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-600" />
                Example 2: S&P 500 -- The Long-Term Difference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Consider $10,000 invested in the S&P 500 in 1990. By 2024, the price-only return
                and total return tell dramatically different stories.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="font-semibold text-slate-600 mb-2">Price Return Only</p>
                  <p className="text-2xl font-bold">~$140,000</p>
                  <p className="text-slate-500">14x your money</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">Total Return (dividends reinvested)</p>
                  <p className="text-2xl font-bold text-green-600">~$280,000</p>
                  <p className="text-slate-600 dark:text-slate-400">28x your money</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                Reinvested dividends roughly <strong>doubled</strong> your final wealth over 34 years.
                This is the power of total return thinking combined with compounding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-green-600" />
                Example 3: Realty Income (O) -- Monthly Dividends Add Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                REITs like Realty Income often have modest price appreciation but significant
                dividend yields. Looking at price alone dramatically understates their value.
              </p>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded text-sm">
                <p className="mb-2">
                  Realty Income has paid over 650 consecutive monthly dividends and increased
                  its dividend over 120 times since going public. A stock chart that ignores
                  dividends would make this REIT look mediocre -- but total return investors
                  have been well rewarded with 13%+ annualized total returns since its 1994 IPO.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Track Your Total Returns"
          description="Get our free portfolio tracker template that calculates true total return including all dividend payments"
          buttonText="Get Free Tracker"
          source="total_return_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes When Measuring Returns</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #1: Looking Only at the Stock Price Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Standard stock charts on Google, Yahoo Finance, and most brokerages show price only
                by default. A stock that paid 3-5% in annual dividends for 20 years will look much
                worse than it actually performed.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Fix: Look for the "adjusted close" or "total return" option on charting tools.
                On Yahoo Finance, use the "Adj Close" column in historical data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #2: Comparing Dividend Stocks to Growth Stocks on Price Alone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                People say "Amazon beat Coca-Cola over the last 20 years." That may be true on price,
                but Coca-Cola has paid billions in dividends during that period. The gap narrows
                significantly when you include total return. For some periods, high-dividend stocks
                actually win on a total return basis.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Fix: Always compare investments on total return. This is the only fair comparison.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #3: Ignoring Dividend Reinvestment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Even when people account for dividends, they often forget the compounding effect.
                If you reinvest your dividends to buy more shares, those new shares also generate
                dividends, which buy even more shares. This snowball effect is enormous over decades.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Fix: Use a{' '}
                <Link href="/calculators/drip" className="underline">DRIP calculator</Link>{' '}
                to model the real compounding effect of reinvested dividends.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #4: Not Accounting for Taxes and Inflation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Total return is typically quoted before taxes and inflation. Your real after-tax,
                inflation-adjusted return is what actually matters for purchasing power. A 10% total
                return with 3% inflation and 2% taxes is really 5% in real terms.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Fix: Use our{' '}
                <Link href="/calculators/investment-return" className="underline">Investment Return Calculator</Link>{' '}
                to model returns with tax and inflation adjustments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Calculate Your Total Return</h2>

        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Guide</CardTitle>
            <CardDescription>Calculate total return for any investment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-sm">Find your purchase price</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Example: You bought 100 shares at $50 = $5,000 invested
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-sm">Find the current price</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Example: Stock is now $60. Your 100 shares are worth $6,000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-sm">Add up all dividends received</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Example: $2.00/share/year x 3 years x 100 shares = $600 in dividends
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-sm">Apply the formula</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    ($6,000 - $5,000 + $600) / $5,000 = 32% total return over 3 years
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-green-50 dark:bg-green-950 rounded border border-green-300 dark:border-green-700">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                <div>
                  <p className="font-semibold text-sm">Annualize it (optional)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    32% over 3 years = approximately 9.7% annualized
                    (use the formula: (1 + 0.32)^(1/3) - 1)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-sm">
              <p className="font-semibold mb-2">Breakdown of the 32% Total Return:</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Capital gain:</p>
                  <p className="font-bold">+$1,000 (20%)</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Dividends:</p>
                  <p className="font-bold">+$600 (12%)</p>
                </div>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Dividends contributed over a third of the total return. Looking at price only,
                you would have thought this was a 20% return instead of 32%.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Total Return Matters for Retirement Planning</h2>

        <Card>
          <CardHeader>
            <CardTitle>The Income vs Growth Debate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Many retirees focus exclusively on dividend yield for income. But total return investing
              can be equally effective. Here is why:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Dividend-Only Approach</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Predictable income stream</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Never sell shares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>May limit to lower-growth stocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Dividends can be cut</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Total Return Approach</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>More diversified portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Potentially higher growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Must sell shares for income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Sequence-of-returns risk</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              The best approach for most people is a blend: hold dividend stocks for reliable income,
              but evaluate all investments on total return. A stock yielding 2% with 10% annual price
              appreciation (12% total return) is better than a stock yielding 5% with 3% price growth
              (8% total return).
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is a good total return for stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The S&P 500 has averaged roughly 10% annualized total return over the last century
                (about 7% after inflation). Anything consistently above 10% is excellent. Individual
                dividend stocks that deliver 8-12% total return (3-4% yield + 5-8% price growth) are
                performing well.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Does total return include reinvested dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on how it is calculated. Simple total return includes dividends as cash
                received. Total return with reinvestment assumes dividends are immediately used to
                buy more shares, which gives a higher number due to compounding. When comparing
                investments, make sure both use the same methodology.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I see total return on my brokerage account?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Most brokerages show total return in your portfolio performance section. Fidelity,
                Schwab, and Vanguard all provide total return figures that include dividends. If
                your broker only shows gain/loss based on price, add your cumulative dividends
                received to get the true picture.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is total return the same as annualized return?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. Total return is the cumulative percentage gain over a period (for example, 50% over
                5 years). Annualized return converts that into a yearly rate (8.4% per year in this
                case). Annualized return is more useful for comparing investments held for different
                time periods.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Total Return</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Stop guessing and start measuring your true investment performance. Our calculators
              show you exactly how dividends and price appreciation combine to build wealth over time.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/investment-return">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Investment Return Calculator
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  DRIP Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Maximize returns through reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-income-vs-capital-gains">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Income vs Capital Gains</CardTitle>
                <CardDescription>Tax comparison of both return types</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/growth-stocks-vs-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Growth Stocks vs Dividend Stocks</CardTitle>
                <CardDescription>Which strategy wins on total return?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>One piece of the total return puzzle</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
