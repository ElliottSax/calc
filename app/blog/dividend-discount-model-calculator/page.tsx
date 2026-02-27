import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calculator, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, Target } from 'lucide-react'

export const metadata = {
  title: 'Dividend Discount Model (DDM) Calculator: Value Dividend Stocks',
  description: 'Learn the Gordon Growth Model formula to calculate the intrinsic value of dividend stocks. Includes worked examples, multi-stage DDM, limitations, and a free calculator.',
  keywords: 'dividend discount model, DDM calculator, Gordon Growth Model, intrinsic value dividend stocks, stock valuation model, dividend discount model formula',
}

export default function DividendDiscountModelCalculator() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calculator className="h-3 w-3 mr-1" />
          Stock Valuation
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend Discount Model (DDM) Calculator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Calculate the fair value of any dividend stock using the Gordon Growth Model.
          Find out if a stock is overvalued or undervalued in minutes.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>12 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* The Formula */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Gordon Growth Model Formula</CardTitle>
          <CardDescription>The simplest and most widely used dividend discount model</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg mb-4">
            <p className="text-center text-2xl md:text-3xl font-bold mb-6">
              Intrinsic Value = D1 / (r - g)
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-blue-600">D1</p>
                <p className="text-slate-600 dark:text-slate-400">Expected dividend next year</p>
                <p className="text-xs text-slate-500">(Current dividend x (1 + growth rate))</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">r (Required Return)</p>
                <p className="text-slate-600 dark:text-slate-400">Your minimum acceptable return</p>
                <p className="text-xs text-slate-500">(Typically 8-12% for stocks)</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">g (Growth Rate)</p>
                <p className="text-slate-600 dark:text-slate-400">Expected dividend growth rate</p>
                <p className="text-xs text-slate-500">(Must be less than r)</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <p className="font-semibold mb-2">Quick Example: Coca-Cola (KO)</p>
            <ul className="text-sm space-y-1">
              <li>- Current annual dividend: $1.94</li>
              <li>- Expected growth rate (g): 4%</li>
              <li>- D1 = $1.94 x 1.04 = $2.02</li>
              <li>- Required return (r): 10%</li>
              <li>- Intrinsic Value = $2.02 / (0.10 - 0.04) = <strong className="text-green-600">$33.67</strong></li>
              <li>- Current price: ~$62 -- appears <strong className="text-red-600">overvalued</strong> by this model</li>
            </ul>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              Note: This simplified result highlights why the DDM works best when combined with other
              valuation methods. A 10% required return may be too high for a defensive blue-chip like KO.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Worked Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Worked Examples: Valuing Real Stocks</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Example 1: Johnson & Johnson (JNJ) -- Fair Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="text-sm font-semibold mb-2">Inputs</p>
                  <ul className="text-sm space-y-1">
                    <li>Current dividend: $4.76/share</li>
                    <li>Growth rate (g): 5.5%</li>
                    <li>Required return (r): 9%</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="text-sm font-semibold mb-2">Calculation</p>
                  <ul className="text-sm space-y-1">
                    <li>D1 = $4.76 x 1.055 = $5.02</li>
                    <li>Value = $5.02 / (0.09 - 0.055)</li>
                    <li className="font-bold text-green-600">Intrinsic Value = $143.43</li>
                    <li>Current price: ~$160</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                At a 9% required return, the DDM suggests JNJ is slightly overvalued. However, lowering
                the required return to 8% (reasonable for a low-risk Dividend King) gives a value of $200.80,
                making it look undervalued. This sensitivity is a key consideration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Example 2: AbbVie (ABBV) -- Growth Premium
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="text-sm font-semibold mb-2">Inputs</p>
                  <ul className="text-sm space-y-1">
                    <li>Current dividend: $6.20/share</li>
                    <li>Growth rate (g): 7.5%</li>
                    <li>Required return (r): 10%</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <p className="text-sm font-semibold mb-2">Calculation</p>
                  <ul className="text-sm space-y-1">
                    <li>D1 = $6.20 x 1.075 = $6.67</li>
                    <li>Value = $6.67 / (0.10 - 0.075)</li>
                    <li className="font-bold text-blue-600">Intrinsic Value = $266.60</li>
                    <li>Current price: ~$185</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                AbbVie&apos;s high dividend growth rate (10.5% over 10 years) combined with a large current
                dividend gives a high intrinsic value. The DDM suggests ABBV is undervalued, which aligns
                with its reputation as a top dividend growth stock.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Multi-Stage DDM */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Multi-Stage DDM: For More Accuracy</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>When One Growth Rate Is Not Enough</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The basic Gordon Growth Model assumes dividends grow at a constant rate forever. In reality,
              many companies grow dividends faster when young and slower as they mature. The two-stage DDM
              addresses this.
            </p>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg mb-4">
              <p className="font-semibold mb-2">Two-Stage DDM Approach</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-blue-600 mb-1">Stage 1: High Growth (Years 1-10)</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Use the company&apos;s current dividend growth rate. For fast growers like Visa,
                    this might be 12-15% annually. Calculate each year&apos;s dividend individually
                    and discount back to present value.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600 mb-1">Stage 2: Stable Growth (Year 11+)</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Assume growth slows to a sustainable long-term rate (3-5%, roughly GDP growth).
                    Apply the Gordon Growth Model to calculate the terminal value, then discount
                    it back to present.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="font-semibold mb-2">Two-Stage Example: Visa (V)</p>
              <div className="text-sm space-y-1">
                <p>Stage 1: Dividends grow at 12% for 10 years (D0 = $2.36)</p>
                <p>Stage 2: Dividends grow at 4% forever (terminal growth rate)</p>
                <p>Required return: 10%</p>
                <p>PV of Stage 1 dividends: ~$24.50</p>
                <p>Terminal value at Year 10: $2.36 x (1.12)^10 x 1.04 / (0.10 - 0.04) = $126.91</p>
                <p>PV of terminal value: $126.91 / (1.10)^10 = $48.93</p>
                <p className="font-bold mt-2">Total intrinsic value: $24.50 + $48.93 = <span className="text-green-600">$73.43</span></p>
                <p className="text-xs text-slate-500 mt-1">Current price: ~$310. Visa trades at a premium because the market expects long-duration growth that exceeds what conservative DDM inputs capture.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Limitations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Limitations of the DDM</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Only Works for Dividend-Paying Stocks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The DDM cannot value companies that do not pay dividends (Amazon, Tesla, Meta until recently).
                It is best suited for mature, consistently dividend-paying companies like Coca-Cola, J&J,
                or Procter & Gamble.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Extremely Sensitive to Inputs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Small changes in the required return or growth rate drastically change the result.
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-sm"><strong>Example:</strong> A stock with $2 dividend and 5% growth.
                At r=10%: value = $42. At r=9%: value = $52.50. At r=8%: value = $70. Just a 2% change
                in required return changes the value by 67%.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Growth Must Be Less Than Required Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If g is greater than or equal to r, the formula produces a negative or infinite number, which
                is meaningless. This means the basic DDM breaks down for high-growth companies. Use the
                multi-stage model for stocks with growth rates above 8%.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Best Practice: Use DDM as One Tool Among Many
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The DDM gives a useful baseline valuation, but combine it with P/E ratios, free cash flow
                analysis, and peer comparisons. If the DDM says a stock is undervalued AND other metrics
                agree, you have a stronger conviction signal.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Required Return Guidelines</h2>

        <Card>
          <CardHeader>
            <CardTitle>What Required Return (r) Should You Use?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded flex justify-between items-center">
                <div>
                  <p className="font-semibold">Low-Risk Blue Chips</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">JNJ, PG, KO, PEP</p>
                </div>
                <Badge variant="outline" className="text-green-600">7-9%</Badge>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded flex justify-between items-center">
                <div>
                  <p className="font-semibold">Average Dividend Stocks</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">ABBV, TXN, HD, CVX</p>
                </div>
                <Badge variant="outline" className="text-blue-600">9-11%</Badge>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded flex justify-between items-center">
                <div>
                  <p className="font-semibold">Higher-Risk Dividend Payers</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">REITs, BDCs, MLPs</p>
                </div>
                <Badge variant="outline" className="text-orange-600">11-14%</Badge>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              A common approach is to use the CAPM (Capital Asset Pricing Model): r = risk-free rate + beta x equity risk premium.
              With the 10-year Treasury at ~4.5% and a 5.5% equity risk premium, a stock with beta 0.8 would have r = 4.5% + (0.8 x 5.5%) = 8.9%.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Try Our Dividend Growth Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              While our calculator focuses on projecting future dividend income rather than DDM valuation,
              it uses the same growth rate inputs. Model how dividends compound over 5, 10, or 20 years.
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
          <Link href="/blog/dividend-growth-rate-calculator">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Growth Rate Calculator</CardTitle>
                <CardDescription>Calculate CAGR for any dividend stock</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>The foundational formula for dividend investors</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-analyze-dividend-safety">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Analyze Dividend Safety</CardTitle>
                <CardDescription>Ensure dividends are sustainable before investing</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks 2026</CardTitle>
                <CardDescription>Top stocks with consistent dividend increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
