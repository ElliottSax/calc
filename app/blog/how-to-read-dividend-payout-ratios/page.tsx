import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calculator, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'How to Read Dividend Payout Ratios: Complete Guide (2026)',
  description: 'Master payout ratio analysis. Learn to calculate, interpret, and use payout ratios to predict dividend safety and growth potential.',
}

export default function HowToReadDividendPayoutRatios() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calculator className="h-3 w-3 mr-1" />
          Financial Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Read Dividend Payout Ratios
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Master the #1 metric for dividend safety. Learn to calculate, interpret,
          and use payout ratios to protect your income and spot growth opportunities.
        </p>
      </div>

      <Card className="mb-16 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>How to calculate payout ratios from financial statements</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>What's a safe payout ratio for different sectors</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Alternative payout metrics (FCF, cash flow-based)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Real examples analyzing safe vs risky payout ratios</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is a Payout Ratio?</h2>

        <Card>
          <CardHeader>
            <CardTitle>The Most Important Dividend Metric</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Payout ratio shows what percentage of earnings a company pays out as dividends. It's the single best
              metric for assessing dividend sustainability.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-lg font-mono mb-2">Payout Ratio = (Annual Dividends / Net Income) × 100</p>
              <p className="text-sm">Or per-share basis:</p>
              <p className="text-lg font-mono">Payout Ratio = (DPS / EPS) × 100</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2 text-green-700 dark:text-green-400">Example: Safe Payout</p>
                <div className="text-sm space-y-1">
                  <p>Company earns: $10.00 per share</p>
                  <p>Company pays: $4.00 per share dividend</p>
                  <p>Payout Ratio: $4 / $10 = <strong>40%</strong></p>
                </div>
                <p className="text-xs mt-2">✓ Safe - Company keeps 60% to reinvest and grow</p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold mb-2 text-red-700 dark:text-red-400">Example: Risky Payout</p>
                <div className="text-sm space-y-1">
                  <p>Company earns: $5.00 per share</p>
                  <p>Company pays: $6.00 per share dividend</p>
                  <p>Payout Ratio: $6 / $5 = <strong>120%</strong></p>
                </div>
                <p className="text-xs mt-2">✗ Unsustainable - Paying more than earned!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Calculate Payout Ratios</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Step-by-Step Calculation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="mb-2">Step 1</Badge>
                <p className="font-semibold mb-1">Find Annual Dividend</p>
                <p className="text-sm">Look up "Annual Dividend" on Yahoo Finance, Seeking Alpha, or company investor
                  relations. For quarterly payers, multiply latest quarterly dividend × 4.</p>
                <p className="text-xs mt-1 font-mono">Example: $1.19/quarter × 4 = $4.76 annual</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="mb-2">Step 2</Badge>
                <p className="font-semibold mb-1">Find Earnings Per Share (EPS)</p>
                <p className="text-sm">Use TTM (trailing twelve months) EPS from income statement or financial site.
                  This is "Diluted EPS" on financial statements.</p>
                <p className="text-xs mt-1 font-mono">Example: TTM EPS = $10.04</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="mb-2">Step 3</Badge>
                <p className="font-semibold mb-1">Divide and Multiply by 100</p>
                <p className="text-sm">Payout Ratio = (Annual Dividend / EPS) × 100</p>
                <p className="text-xs mt-1 font-mono">Example: ($4.76 / $10.04) × 100 = 47.4%</p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <Badge className="mb-2 bg-green-600">Result</Badge>
                <p className="font-semibold mb-1">Interpret the Number</p>
                <p className="text-sm">47.4% payout ratio = Very Safe. Company pays less than half its earnings as
                  dividends, keeping plenty for growth and cushion against earnings declines.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Safe Payout Ratios by Sector</h2>

        <Card>
          <CardHeader>
            <CardTitle>Not All Sectors Have the Same Standards</CardTitle>
            <CardDescription>What's safe for tech is risky for utilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Sector</th>
                    <th className="text-left p-2">Safe Range</th>
                    <th className="text-left p-2">Why Different?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Technology</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">20-40%</Badge></td>
                    <td className="p-2 text-xs">Need cash for R&D and acquisitions. Low payout = growth focus</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Consumer Staples</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">40-60%</Badge></td>
                    <td className="p-2 text-xs">Mature businesses with stable earnings. Can afford higher payouts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Healthcare</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">40-60%</Badge></td>
                    <td className="p-2 text-xs">Similar to staples. Defensive with consistent cash flows</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Utilities</td>
                    <td className="p-2"><Badge variant="outline" className="text-yellow-600">60-80%</Badge></td>
                    <td className="p-2 text-xs">Regulated with predictable cash flows. Higher payouts acceptable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">REITs</td>
                    <td className="p-2"><Badge variant="outline" className="text-orange-600">90%+</Badge></td>
                    <td className="p-2 text-xs">Required by law to pay 90% of income. Use FFO not EPS</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Energy</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">30-50%</Badge></td>
                    <td className="p-2 text-xs">Cyclical earnings. Need cushion for downturns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
              <p className="text-sm font-semibold mb-1">Key Insight:</p>
              <p className="text-sm">Compare a stock's payout ratio to sector average, not universal standards. 70%
                payout is dangerous for tech but normal for utilities.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Alternative Payout Metrics</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Free Cash Flow Payout Ratio</CardTitle>
            <CardDescription>More reliable than earnings-based ratio</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Earnings can be manipulated through accounting. Free cash flow is actual cash generated. For cyclical
              companies (energy, materials, industrials), use FCF payout ratio.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">FCF Payout Ratio = Total Dividends Paid / Free Cash Flow</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Find on cash flow statement. Example: $5B dividends / $12B FCF = 42%
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-center">
                <p className="font-semibold text-green-700 dark:text-green-400">Under 60%</p>
                <p className="text-xs">Very Safe</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded text-center">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400">60-80%</p>
                <p className="text-xs">Monitor</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded text-center">
                <p className="font-semibold text-red-700 dark:text-red-400">Over 80%</p>
                <p className="text-xs">Warning</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>REIT Payout Ratios (FFO-Based)</CardTitle>
            <CardDescription>REITs use different accounting</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              REITs show low or negative "earnings" due to depreciation. Use Funds From Operations (FFO) instead—it's
              cash available for dividends.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Formula for REITs:</p>
              <p className="text-sm font-mono">Payout Ratio = (Dividend / FFO per share) × 100</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Target: Under 80% for equity REITs, under 90% for mortgage REITs
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Warning Signs in Payout Ratios</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Payout Ratio Over 100%</CardTitle>
                  <CardDescription>Company paying more than it earns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Mathematically unsustainable. Company either cuts dividend soon or borrows money to pay it (even worse).
              </p>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="text-xs font-semibold mb-1">Example: Kohl's (KSS) in 2024</p>
                <p className="text-xs">EPS: $2.15 | Dividend: $2.00 | Payout: 93%</p>
                <p className="text-xs mt-1">Earnings trending down. Cut dividend 50% in early 2024.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Rising Payout Ratio</CardTitle>
                  <CardDescription>Trend matters as much as current number</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Watch the trend. If payout ratio climbing steadily (60% → 70% → 80% → 90%), dividend cut coming.
              </p>
              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <p className="text-xs font-semibold mb-1">What to Check:</p>
                <p className="text-xs">Look at 5-year payout ratio history. Steady or declining = good. Rising = bad.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Negative Earnings, Positive Dividend</CardTitle>
                  <CardDescription>Losing money but still paying dividend</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                If company has negative earnings but still pays dividend, payout ratio shows as negative or N/A. Major
                red flag—check free cash flow immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Company Analysis</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Microsoft (MSFT) - Growth Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Annual Dividend:</span>
                  <span className="font-semibold">$3.00</span>
                </div>
                <div className="flex justify-between">
                  <span>TTM EPS:</span>
                  <span className="font-semibold">$12.00</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Payout Ratio:</span>
                  <span className="font-semibold text-green-600">25%</span>
                </div>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="text-xs font-semibold mb-1 text-green-700 dark:text-green-400">Analysis: Very Safe</p>
                <p className="text-xs">Low payout gives room for 10-15% annual increases. Keeps 75% for cloud
                  investments. Typical for growth-oriented tech.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>AT&T (T) - Income Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Annual Dividend:</span>
                  <span className="font-semibold">$1.11</span>
                </div>
                <div className="flex justify-between">
                  <span>TTM EPS:</span>
                  <span className="font-semibold">$2.20</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Payout Ratio:</span>
                  <span className="font-semibold text-blue-600">50%</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="text-xs font-semibold mb-1 text-blue-700 dark:text-blue-400">Analysis: Reasonable</p>
                <p className="text-xs">After 2022 cut, now sustainable. 50% payout appropriate for telecom. Room for
                  modest growth. Higher than tech but normal for sector.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle>Realty Income (O) - REIT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Annual Dividend:</span>
                  <span className="font-semibold">$3.13</span>
                </div>
                <div className="flex justify-between">
                  <span>TTM FFO:</span>
                  <span className="font-semibold">$4.10</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">FFO Payout Ratio:</span>
                  <span className="font-semibold text-purple-600">76%</span>
                </div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="text-xs font-semibold mb-1 text-purple-700 dark:text-purple-400">Analysis: Typical REIT</p>
                <p className="text-xs">76% FFO payout normal for equity REIT. Required to pay 90%+ of taxable income.
                  Don't compare to corporate payout ratios.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle>Walgreens (WBA) - Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Annual Dividend:</span>
                  <span className="font-semibold">$1.92</span>
                </div>
                <div className="flex justify-between">
                  <span>TTM EPS:</span>
                  <span className="font-semibold">$0.76</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Payout Ratio:</span>
                  <span className="font-semibold text-red-600">253%</span>
                </div>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="text-xs font-semibold mb-1 text-red-700 dark:text-red-400">Analysis: Unsustainable</p>
                <p className="text-xs">Paying 2.5× earnings! Announced 48% dividend cut in 2024. Classic example of why
                  payout ratio matters.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Master Payout Ratio Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Payout ratio is your first line of defense against dividend cuts. Always check it before buying. Compare
              to sector averages, watch for trends, and use FCF-based ratios for cyclical stocks.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-analyze-dividend-safety">
                <Button className="w-full" size="lg">Complete Safety Guide →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Analyze Stocks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-find-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Find Dividend Stocks</CardTitle>
                <CardDescription>Screening for quality picks</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-screen-for-quality-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Advanced Screening</CardTitle>
                <CardDescription>Multi-factor analysis</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
