import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calculator, TrendingUp, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Dividend Growth Rate Calculator: Track Your Income Growth',
  description: 'Learn how to calculate dividend growth rate using CAGR. Includes the formula, worked examples, and why dividend growth rate matters for yield on cost and retirement planning.',
  keywords: 'dividend growth rate, dividend growth rate calculator, dividend CAGR, how to calculate dividend growth, dividend growth rate formula, yield on cost growth',
}

export default function DividendGrowthRateCalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calculator className="h-3 w-3 mr-1" />
          Dividend Math
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend Growth Rate Calculator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Track how fast your dividend income is growing.
          The single best predictor of future income and total returns.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>8 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* The Formula */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The CAGR Formula</CardTitle>
          <CardDescription>Compound Annual Growth Rate for dividends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg mb-4">
            <p className="text-center text-2xl md:text-3xl font-bold mb-4">
              DGR = (Ending Dividend / Beginning Dividend)^(1/Years) - 1
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-blue-600">Ending Dividend</p>
                <p className="text-slate-600 dark:text-slate-400">Most recent annual dividend per share</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">Beginning Dividend</p>
                <p className="text-slate-600 dark:text-slate-400">Annual dividend at start of period</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">Years</p>
                <p className="text-slate-600 dark:text-slate-400">Number of years in the measurement period</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <p className="font-semibold mb-2">Quick Example: Johnson & Johnson</p>
            <ul className="text-sm space-y-1">
              <li>- 2016 annual dividend: $3.20 per share</li>
              <li>- 2026 annual dividend: $4.96 per share</li>
              <li>- Period: 10 years</li>
              <li>- Calculation: ($4.96 / $3.20)^(1/10) - 1 = <strong className="text-green-600">4.5% annual growth rate</strong></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Step by Step */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step-by-Step Calculation</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <CardTitle>Find Beginning and Ending Dividends</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Look up the annual dividend per share for your starting year and ending year. Use the total
                annual amount, not a single quarterly payment. You can find this on the company&apos;s investor
                relations page or financial sites like Yahoo Finance.
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-sm font-semibold">Tip: Use 5 or 10-year periods</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Short periods (1-2 years) can be misleading due to one-time fluctuations.
                  Five and ten-year CAGR gives a more reliable picture of the trend.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <CardTitle>Divide Ending by Beginning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                This gives you the total growth multiple. If the result is 1.55, the dividend has grown
                55% over the total period.
              </p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="text-sm">JNJ example: $4.96 / $3.20 = <strong>1.55</strong> (55% total growth)</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <CardTitle>Apply the Exponent (1/Years)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Raise the growth multiple to the power of (1 / number of years). This converts total growth
                into an annualized rate. Then subtract 1 and multiply by 100 for a percentage.
              </p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="text-sm">JNJ example: 1.55^(1/10) = 1.045 - 1 = <strong>0.045 = 4.5%/year</strong></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Growth Rates: Real Examples</h2>

        <Card>
          <CardHeader>
            <CardTitle>10-Year Dividend Growth Rates (2016-2026)</CardTitle>
            <CardDescription>Annualized CAGR for popular dividend stocks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Company</th>
                    <th className="text-right p-3">2016 Div</th>
                    <th className="text-right p-3">2026 Div</th>
                    <th className="text-right p-3">10-Yr DGR</th>
                    <th className="text-left p-3">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Visa (V)</td>
                    <td className="p-3 text-right">$0.56</td>
                    <td className="p-3 text-right">$2.36</td>
                    <td className="p-3 text-right font-semibold text-green-600">15.4%</td>
                    <td className="p-3"><Badge variant="outline" className="text-green-600">Fast Grower</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Microsoft (MSFT)</td>
                    <td className="p-3 text-right">$1.44</td>
                    <td className="p-3 text-right">$3.32</td>
                    <td className="p-3 text-right font-semibold text-green-600">8.7%</td>
                    <td className="p-3"><Badge variant="outline" className="text-green-600">Fast Grower</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">AbbVie (ABBV)</td>
                    <td className="p-3 text-right">$2.28</td>
                    <td className="p-3 text-right">$6.20</td>
                    <td className="p-3 text-right font-semibold text-green-600">10.5%</td>
                    <td className="p-3"><Badge variant="outline" className="text-green-600">Fast Grower</Badge></td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">PepsiCo (PEP)</td>
                    <td className="p-3 text-right">$2.96</td>
                    <td className="p-3 text-right">$5.42</td>
                    <td className="p-3 text-right font-semibold text-blue-600">6.2%</td>
                    <td className="p-3"><Badge variant="outline" className="text-blue-600">Moderate</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Coca-Cola (KO)</td>
                    <td className="p-3 text-right">$1.40</td>
                    <td className="p-3 text-right">$1.94</td>
                    <td className="p-3 text-right font-semibold text-blue-600">3.3%</td>
                    <td className="p-3"><Badge variant="outline" className="text-blue-600">Moderate</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">AT&T (T)</td>
                    <td className="p-3 text-right">$1.96</td>
                    <td className="p-3 text-right">$1.11</td>
                    <td className="p-3 text-right font-semibold text-red-600">-5.5%</td>
                    <td className="p-3"><Badge variant="destructive">Cut</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why DGR Matters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Dividend Growth Rate Matters</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                It Drives Your Yield on Cost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Yield on cost is the dividend yield based on your original purchase price. A stock with
                a 2.5% starting yield and 10% annual growth becomes a 6.5% yield-on-cost in just 10 years,
                and 16.9% in 20 years.
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="text-sm"><strong>Example:</strong> Buy at $100, initial dividend $2.50 (2.5% yield).
                At 10% growth, after 10 years the dividend is $6.48 -- that is a 6.5% yield on your $100 cost.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                It Predicts Total Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Historically, stocks with consistent dividend growth outperform those with flat or declining
                dividends. Companies that grow dividends 7-10% annually tend to also deliver 10-12% total
                returns, because dividend increases signal management confidence in future earnings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                It Beats Inflation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                With inflation running 3-4%, a stock growing dividends at 7%+ means your purchasing power
                increases every year. A high-yield stock with 0% growth loses real value annually. Growth
                rate matters more than starting yield for investors with a 10+ year horizon.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Dividend Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use our dividend growth calculator to project how your income will grow over time
              based on current yield and growth rate. See the power of compounding dividends.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/dividend-growth">
                <Button className="w-full" size="lg">
                  Dividend Growth Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" className="w-full" size="lg">
                  Yield on Cost Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>The foundational formula every investor needs</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks 2026</CardTitle>
                <CardDescription>Top stocks with 10%+ annual dividend growth</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-growth-vs-high-yield-strategy">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Growth vs High Yield</CardTitle>
                <CardDescription>Which strategy builds more wealth?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top Dividend Aristocrats 2026</CardTitle>
                <CardDescription>25+ years of consecutive dividend increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
