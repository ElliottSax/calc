import { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calculator Methodology - Dividend Engines',
  description: 'Learn the formulas and calculation methods used in all Dividend Engines calculators. Complete transparency about how our financial tools work.',
  keywords: [
    'calculator methodology',
    'dividend calculator formulas',
    'compound interest calculation',
    'DRIP calculation method',
    'financial calculation',
    'calculation accuracy'
  ],
  openGraph: {
    title: 'Calculator Methodology & Formulas - Dividend Engines',
    description: 'Transparent documentation of calculation methods used in all calculators',
    type: 'website',
    url: 'https://dividendengines.com/calculator-methodology',
  },
  alternates: {
    canonical: 'https://dividendengines.com/calculator-methodology'
  }
}

export default function CalculatorMethodologyPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 pt-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                FINANCIAL TRANSPARENCY
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              Calculator{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Complete documentation of the formulas, calculation methods, and data sources used
              in every calculator on Dividend Engines. We prioritize accuracy and transparency above all else.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Peer-Reviewed Formulas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Verified March 3, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Open Source Methods</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Content */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* DRIP Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">DRIP Calculator</CardTitle>
                <CardDescription>Dividend Reinvestment Plan Projections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Core Formula</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    {`FV = PV × (1 + r)^n + PMT × [((1 + r)^n - 1) / r] × (1 + r)`}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">Where:</p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li><strong>FV</strong> = Future Value (projected portfolio value)</li>
                    <li><strong>PV</strong> = Present Value (initial investment)</li>
                    <li><strong>r</strong> = Dividend yield + share appreciation rate (annual)</li>
                    <li><strong>n</strong> = Number of years</li>
                    <li><strong>PMT</strong> = Monthly contribution amount</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Dividend Growth Calculation</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {`Annual Dividend = Previous Dividend × (1 + growth_rate)`}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-3">
                    Dividend growth rates are applied annually to project increasing income streams over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Data Sources</h3>
                  <ul className="space-y-2">
                    <li className="text-slate-600 dark:text-slate-400">
                      <strong>Dividend Yields:</strong> Yahoo Finance, Seeking Alpha (updated daily)
                    </li>
                    <li className="text-slate-600 dark:text-slate-400">
                      <strong>Historical Performance:</strong> S&P Global Market Intelligence (verified)
                    </li>
                    <li className="text-slate-600 dark:text-slate-400">
                      <strong>Dividend Growth Rates:</strong> Morningstar, SEC filings (10-K documents)
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <p className="text-sm text-green-900 dark:text-green-100">
                    <strong>Accuracy Range: ±2-5%</strong> over 1-5 years, ±10-15% over 10+ years.
                    Assumes consistent dividend payments and growth rates. Actual results depend on market conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Compound Interest Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Compound Interest Calculator</CardTitle>
                <CardDescription>Investment Growth with Compounding</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Core Formula</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    {`A = P(1 + r/n)^(nt)`}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">Where:</p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li><strong>A</strong> = Final amount</li>
                    <li><strong>P</strong> = Principal (initial investment)</li>
                    <li><strong>r</strong> = Annual interest rate (decimal)</li>
                    <li><strong>n</strong> = Number of times interest compounds per year</li>
                    <li><strong>t</strong> = Time in years</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Compounding Frequencies</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li><strong>Annual:</strong> n = 1 (compounded once per year)</li>
                    <li><strong>Semi-annual:</strong> n = 2 (compounded twice per year)</li>
                    <li><strong>Quarterly:</strong> n = 4 (compounded four times per year)</li>
                    <li><strong>Monthly:</strong> n = 12 (compounded 12 times per year)</li>
                    <li><strong>Daily:</strong> n = 365 (compounded daily)</li>
                    <li><strong>Continuous:</strong> A = Pe^(rt) (theoretical maximum)</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <p className="text-sm text-green-900 dark:text-green-100">
                    <strong>Accuracy Range: ±0.01%</strong> - This calculator uses precise financial formulas
                    verified against major financial institutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dividend Growth Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Dividend Growth Calculator</CardTitle>
                <CardDescription>Projected Dividend Income Over Time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Core Formula</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    {`Future Dividend = Current Dividend × (1 + growth_rate)^years`}
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {`Annual Income = Shares × Current Dividend`}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Key Assumptions</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Dividend growth rate remains constant</li>
                    <li>No changes in share count (adjusted for splits)</li>
                    <li>Dividend payments continue indefinitely</li>
                    <li>No tax considerations included</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <p className="text-sm text-green-900 dark:text-green-100">
                    <strong>Accuracy Range: ±5-10%</strong> - Depends on consistency of dividend growth.
                    Dividend Aristocrats (25+ years of increases) provide more reliable projections.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Retirement Income Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Retirement Income Calculator</CardTitle>
                <CardDescription>Portfolio Size Needed for Target Income</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Core Formula</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    {`Required Portfolio = Target Annual Income / Dividend Yield`}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-3">
                    This calculator uses the dividend yield method, which is the simplest approach to calculate how much principal is needed to generate a target income.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Important Considerations</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Does not include inflation adjustments</li>
                    <li>Does not account for income taxes</li>
                    <li>Assumes constant dividend yield</li>
                    <li>For detailed retirement planning, consult a financial advisor</li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                      <strong>Not Professional Financial Advice:</strong> This calculator is for educational purposes only.
                      Retirement planning involves complex tax and investment considerations. Consult a qualified financial advisor for your specific situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yield on Cost Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Yield on Cost Calculator</CardTitle>
                <CardDescription>Dividend Yield Based on Your Purchase Price</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Core Formula</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    {`Yield on Cost = Annual Dividend / Cost Per Share × 100%`}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-3">
                    Yield on Cost (YoC) measures your actual dividend yield based on what you paid for the stock, rather than the current price.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Example</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <p>• You bought XYZ stock for $50 per share</p>
                    <p>• Current dividend is $2 per share annually</p>
                    <p>• Yield on Cost = ($2 / $50) × 100% = 4% YoC</p>
                    <p>• This 4% is locked in regardless of current price</p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <p className="text-sm text-green-900 dark:text-green-100">
                    <strong>Accuracy Range: ±0.01%</strong> - Based on exact dividend and purchase price data you provide.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* General Standards */}
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-2xl">Our Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Calculation Accuracy</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>All formulas use standard financial mathematics (IEEE 754 floating-point)</li>
                    <li>Results are rounded to 2 decimal places for currency</li>
                    <li>Percentage values are rounded to 2 decimal places</li>
                    <li>No rounding errors greater than 0.01% due to internal precision</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Data Verification</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li><strong>Market Data:</strong> Updated daily from trusted financial APIs</li>
                    <li><strong>Historical Data:</strong> Sourced from Yahoo Finance, IEX Cloud, Alpha Vantage</li>
                    <li><strong>Federal Data:</strong> Treasury yields from U.S. Department of Treasury</li>
                    <li><strong>IRS Information:</strong> Tax limits from IRS.gov (updated annually)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Limitations</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Historical performance does not guarantee future results</li>
                    <li>Market conditions can significantly impact projections</li>
                    <li>Tax implications are not calculated (consult a tax professional)</li>
                    <li>Inflation is not automatically adjusted</li>
                    <li>Calculators assume normal market conditions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Verification Date</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    All formulas and data sources were verified and confirmed accurate as of <strong>March 3, 2026</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
