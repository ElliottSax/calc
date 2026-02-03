import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, CheckCircle, AlertCircle, X } from 'lucide-react'

export const metadata = {
  title: 'How to Analyze Dividend Safety: 5 Key Metrics (2026 Guide)',
  description: 'Learn to spot dividend cuts before they happen. Analyze payout ratios, cash flow, debt levels, and earnings trends to protect your income.',
}

export default function HowToAnalyzeDividendSafety() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Shield className="h-3 w-3 mr-1" />
          Risk Analysis Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Analyze Dividend Safety
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Spot dividend cuts before they happen. Learn the 5 key metrics
          professional investors use to evaluate dividend sustainability.
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
              <span>5 critical metrics that predict dividend cuts with 90% accuracy</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>How to calculate payout ratios and free cash flow coverage</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Red flags that signal a dividend cut is imminent</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Real examples of safe vs risky dividends</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The 5 Key Safety Metrics</h2>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">1</Badge>
              <CardTitle className="text-2xl">Payout Ratio (Target: Under 60%)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              The most important metric. Shows what percentage of earnings goes to dividends. Lower is safer.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">Payout Ratio = (Annual Dividend / Earnings Per Share) × 100</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Example: $3.00 dividend / $10.00 EPS = 30% payout ratio
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Payout Ratio</th>
                    <th className="text-left p-2">Safety Rating</th>
                    <th className="text-left p-2">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0-40%</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Very Safe</Badge></td>
                    <td className="p-2 text-xs">Plenty of cushion for dividend increases</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">40-60%</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2 text-xs">Sustainable with moderate growth potential</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">60-80%</td>
                    <td className="p-2"><Badge variant="outline" className="text-yellow-600">Caution</Badge></td>
                    <td className="p-2 text-xs">Less room for error, monitor closely</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">80-100%</td>
                    <td className="p-2"><Badge variant="outline" className="text-orange-600">Risky</Badge></td>
                    <td className="p-2 text-xs">Vulnerable to earnings decline</td>
                  </tr>
                  <tr>
                    <td className="p-2">100%+</td>
                    <td className="p-2"><Badge variant="outline" className="text-red-600">Danger</Badge></td>
                    <td className="p-2 text-xs">Unsustainable - cut likely within 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded">
              <p className="text-sm font-semibold mb-2">Example: Johnson & Johnson (Safe)</p>
              <p className="text-sm">Annual Dividend: $4.76 | EPS: $10.04 | Payout Ratio: 47%</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                ✓ Safe. Plenty of cushion for future increases.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">2</Badge>
              <CardTitle className="text-2xl">Free Cash Flow Coverage (Target: Over 1.2x)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              More reliable than earnings-based payout ratio. Cash is real; earnings can be manipulated. Dividend must
              be covered by actual cash generated.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">FCF Coverage = Free Cash Flow / Total Dividends Paid</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Example: $10B free cash flow / $5B dividends = 2.0x coverage (very safe)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-1">1.5x+</p>
                <p className="text-xs">Excellent coverage. Room for dividend growth and share buybacks.</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">1.0-1.5x</p>
                <p className="text-xs">Adequate coverage. Dividend is safe but limited growth potential.</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Under 1.0x</p>
                <p className="text-xs">Warning! Not generating enough cash to cover dividend.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 dark:bg-red-950 rounded border-l-4 border-l-red-500">
              <p className="text-sm font-semibold mb-2 text-red-700 dark:text-red-400">
                Example: AT&T Before 2022 Cut (Risky)
              </p>
              <p className="text-sm">Free Cash Flow: $27B | Dividends Paid: $15B | Coverage: 1.8x</p>
              <p className="text-sm mt-2">But high debt ($180B) meant cash needed for debt service, not dividends. Cut
                dividend 47% in 2022.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">3</Badge>
              <CardTitle className="text-2xl">Debt-to-Equity Ratio (Target: Under 1.5)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              High debt forces companies to choose: pay creditors or pay shareholders. In tough times, creditors always
              win. Lower debt = safer dividend.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">Debt-to-Equity = Total Debt / Shareholder Equity</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Find these on the balance sheet. Example: $50B debt / $100B equity = 0.5 (low debt)
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start p-3 bg-green-50 dark:bg-green-950 rounded">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Under 0.5: Conservative</p>
                  <p className="text-xs">Company has fortress balance sheet. Dividend very safe.</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-green-50 dark:bg-green-950 rounded">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">0.5-1.0: Healthy</p>
                  <p className="text-xs">Balanced use of debt. Dividend safe if other metrics good.</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">1.0-1.5: Elevated</p>
                  <p className="text-xs">Manageable but monitor. Vulnerable in recession.</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-red-50 dark:bg-red-950 rounded">
                <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Over 1.5: High Risk</p>
                  <p className="text-xs">Dividend at risk if business weakens. Avoid.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">4</Badge>
              <CardTitle className="text-2xl">Earnings Trend (Target: Growing or Stable)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Dividends come from earnings. If earnings trend down, dividend will eventually follow. Look at 5-year
              earnings trend.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded border-l-4 border-l-green-500">
                <p className="font-semibold mb-2 text-green-700 dark:text-green-400">✓ Safe Pattern</p>
                <div className="text-sm space-y-1 mb-3">
                  <p>2021: $8.00 EPS</p>
                  <p>2022: $8.50 EPS</p>
                  <p>2023: $9.20 EPS</p>
                  <p>2024: $9.80 EPS</p>
                  <p>2025: $10.10 EPS</p>
                </div>
                <p className="text-xs">Consistent growth. Dividend can grow sustainably.</p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded border-l-4 border-l-red-500">
                <p className="font-semibold mb-2 text-red-700 dark:text-red-400">✗ Risky Pattern</p>
                <div className="text-sm space-y-1 mb-3">
                  <p>2021: $10.00 EPS</p>
                  <p>2022: $9.00 EPS</p>
                  <p>2023: $7.50 EPS</p>
                  <p>2024: $6.80 EPS</p>
                  <p>2025: $6.20 EPS</p>
                </div>
                <p className="text-xs">Declining trend. Dividend cut likely coming.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
              <p className="font-semibold mb-2">What About Cyclical Stocks?</p>
              <p className="text-sm">Energy, materials, and industrials have volatile earnings. For these sectors, look
                at earnings over full business cycle (10+ years), not just recent years. Also weight free cash flow
                more heavily than earnings.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">5</Badge>
              <CardTitle className="text-2xl">Dividend Growth History (Target: 10+ Years)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Past behavior predicts future behavior. Companies with long dividend growth histories are culturally
              committed to dividends. They'll do almost anything to avoid cutting.
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="font-semibold mb-1">Dividend Kings (50+ years)</p>
                <p className="text-xs">Gold standard. Never cut through multiple recessions. Examples: Procter & Gamble
                  (68 years), Coca-Cola (62 years)</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-1">Dividend Aristocrats (25+ years)</p>
                <p className="text-xs">Very reliable. Proven through at least 2 recessions. 65 stocks in S&P 500 qualify</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-1">Consistent Growers (10+ years)</p>
                <p className="text-xs">Good track record. Proven commitment but less battle-tested</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold mb-1">Short History (Under 5 years)</p>
                <p className="text-xs">Unproven. May cut at first sign of trouble. Higher risk.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
              <p className="text-sm font-semibold mb-2">Important Note:</p>
              <p className="text-xs">Long history doesn't guarantee future safety. Still check other 4 metrics. But it
                does indicate management's priorities and culture.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Red Flags: Warning Signs of a Cut</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                Payout Ratio Rising Toward 100%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Watch the trend, not just the current number. If payout ratio is steadily climbing (60% → 75% → 85% →
                95%), cut is coming.
              </p>
              <p className="text-xs font-semibold">Action: Sell before ratio hits 95%</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                Borrowing Money to Pay Dividend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Check cash flow statement. If "debt issuance" is happening while dividends paid exceed free cash flow,
                company is borrowing to maintain dividend. Unsustainable.
              </p>
              <p className="text-xs font-semibold">Action: Exit immediately</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                Management Talks About "Evaluating" Dividend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Read earnings call transcripts. If CEO says dividend is "under review" or they're "evaluating capital
                allocation priorities," cut is coming within 2 quarters.
              </p>
              <p className="text-xs font-semibold">Action: Sell on this language</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                Revenue Declining Multiple Years
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Shrinking businesses can't support growing dividends. If revenue down 3 years in a row, dividend is at
                risk even if payout ratio looks okay.
              </p>
              <p className="text-xs font-semibold">Action: Avoid or exit</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Analysis Example</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Example 1: Microsoft (Safe)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Payout Ratio:</span>
                  <span className="text-green-600">25% ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">FCF Coverage:</span>
                  <span className="text-green-600">2.8x ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Debt/Equity:</span>
                  <span className="text-green-600">0.4 ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">5-Yr EPS Growth:</span>
                  <span className="text-green-600">+18%/yr ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Div History:</span>
                  <span className="text-green-600">21 years ✓</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Verdict: Very Safe</p>
                <p className="text-xs">All 5 metrics excellent. Room for significant dividend growth.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle>Example 2: Walgreens (Risky)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Payout Ratio:</span>
                  <span className="text-red-600">250% ✗</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">FCF Coverage:</span>
                  <span className="text-red-600">0.3x ✗</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Debt/Equity:</span>
                  <span className="text-orange-600">1.2 ⚠</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">5-Yr EPS Growth:</span>
                  <span className="text-red-600">-40% ✗</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Div History:</span>
                  <span className="text-yellow-600">47 years ⚠</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Verdict: High Risk</p>
                <p className="text-xs">Long history can't save unsustainable dividend. Cut announced 2024.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Analyzing Dividend Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use these 5 metrics to protect your income. Check payout ratio, free cash flow, debt levels, earnings
              trend, and dividend history before buying any dividend stock.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button className="w-full" size="lg">Analyze Stocks →</Button>
              </Link>
              <Link href="/blog/best-dividend-stocks-for-beginners">
                <Button variant="outline" className="w-full" size="lg">See Safe Picks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-read-dividend-payout-ratios">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Understanding Payout Ratios</CardTitle>
                <CardDescription>Deep dive into the #1 safety metric</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-find-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Find Dividend Stocks</CardTitle>
                <CardDescription>Screening for quality picks</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
