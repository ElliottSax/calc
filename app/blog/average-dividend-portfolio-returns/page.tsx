import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, DollarSign, Calculator, CheckCircle2, AlertTriangle, PieChart, Calendar, Shield } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Average Dividend Portfolio Returns: Historical Data (1926-2026)',
  description: 'Comprehensive analysis of average dividend portfolio returns over 100 years. S&P 500 dividend contribution, total return breakdown, decade-by-decade performance, and what to expect going forward.',
  keywords: ['average dividend return', 'dividend portfolio returns', 'historical dividend returns', 'S&P 500 dividend contribution', 'dividend investing returns'],
}

export default function AverageDividendPortfolioReturns() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          100 Years of Data
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Average Dividend Portfolio Returns
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          From 1926 to 2026, dividends have contributed approximately 40% of the S&P 500's total return. Here is the complete historical breakdown every investor should know.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Updated February 2026 | 13 min read
        </p>
      </div>

      {/* Key Statistics */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Key Statistics: 100 Years of Dividend Returns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600">10.3%</p>
              <p className="text-sm font-semibold">Avg Annual Total Return</p>
              <p className="text-xs text-slate-500">S&P 500, 1926-2025</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600">~40%</p>
              <p className="text-sm font-semibold">From Dividends</p>
              <p className="text-xs text-slate-500">Of total return historically</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-purple-600">3.2%</p>
              <p className="text-sm font-semibold">Avg Dividend Yield</p>
              <p className="text-xs text-slate-500">Historical average</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="text-3xl font-bold text-amber-600">5.8%</p>
              <p className="text-sm font-semibold">Avg Dividend Growth</p>
              <p className="text-xs text-slate-500">Annual dividend increase</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
            <p className="text-sm font-semibold mb-2">What This Means:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              A $10,000 investment in the S&P 500 in 1926, with all dividends reinvested, would have grown to approximately <strong>$126 million by 2025</strong>. Without dividend reinvestment, that same $10,000 would have grown to only about <strong>$2.1 million</strong>. Dividend reinvestment accounted for <strong>98% of the difference</strong> through the power of compounding.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Total Return Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">S&P 500 Total Return: Where the Money Comes From</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-6 w-6 text-blue-600" />
              Two Sources of Stock Market Returns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Every dollar you earn in the stock market comes from one of two sources: price appreciation (stocks going up) and dividends (cash paid to you). Historically, the split is roughly 60/40:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">~6.2%</p>
                  <p className="font-bold text-lg mb-2">Price Appreciation</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Stocks increasing in value over time, driven by earnings growth, multiple expansion, and investor sentiment. This is the part most people think of when they hear "stock market returns."
                  </p>
                  <p className="text-xs text-slate-500 mt-2">~60% of total return</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-green-600 mb-2">~4.1%</p>
                  <p className="font-bold text-lg mb-2">Dividend Income + Reinvestment</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Cash dividends paid by companies, plus the compounding effect of reinvesting those dividends to buy more shares. This is the "silent engine" that most investors underestimate.
                  </p>
                  <p className="text-xs text-slate-500 mt-2">~40% of total return</p>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="text-sm font-semibold text-green-600 mb-2">Why This Matters</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                During the "Lost Decade" (2000-2009), the S&P 500 price returned -24%. But with dividends reinvested, the total return was -9%. Dividends cut your losses by 63%. In flat or declining markets, dividends are the only return you get.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Decade-by-Decade */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Decade-by-Decade Performance (1930s-2020s)</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              S&P 500 Returns by Decade
            </CardTitle>
            <CardDescription>Price return vs total return (with dividends reinvested)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Decade</th>
                    <th className="text-right p-3">Avg Dividend Yield</th>
                    <th className="text-right p-3">Price Return (Annual)</th>
                    <th className="text-right p-3">Total Return (Annual)</th>
                    <th className="text-right p-3">Dividend Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">1930s</td>
                    <td className="p-3 text-right">5.4%</td>
                    <td className="p-3 text-right text-red-600">-5.3%</td>
                    <td className="p-3 text-right">-0.1%</td>
                    <td className="p-3 text-right font-semibold text-green-600">Saved from disaster</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1940s</td>
                    <td className="p-3 text-right">5.4%</td>
                    <td className="p-3 text-right">3.0%</td>
                    <td className="p-3 text-right">9.2%</td>
                    <td className="p-3 text-right font-semibold">67%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1950s</td>
                    <td className="p-3 text-right">4.9%</td>
                    <td className="p-3 text-right">13.6%</td>
                    <td className="p-3 text-right">19.4%</td>
                    <td className="p-3 text-right font-semibold">30%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1960s</td>
                    <td className="p-3 text-right">3.3%</td>
                    <td className="p-3 text-right">4.4%</td>
                    <td className="p-3 text-right">7.8%</td>
                    <td className="p-3 text-right font-semibold">44%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1970s</td>
                    <td className="p-3 text-right">4.2%</td>
                    <td className="p-3 text-right">1.6%</td>
                    <td className="p-3 text-right">5.9%</td>
                    <td className="p-3 text-right font-semibold text-green-600">73%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1980s</td>
                    <td className="p-3 text-right">4.0%</td>
                    <td className="p-3 text-right">12.6%</td>
                    <td className="p-3 text-right">17.5%</td>
                    <td className="p-3 text-right font-semibold">28%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1990s</td>
                    <td className="p-3 text-right">2.4%</td>
                    <td className="p-3 text-right">15.3%</td>
                    <td className="p-3 text-right">18.2%</td>
                    <td className="p-3 text-right font-semibold">16%</td>
                  </tr>
                  <tr className="border-b bg-red-50 dark:bg-red-950">
                    <td className="p-3">2000s</td>
                    <td className="p-3 text-right">1.8%</td>
                    <td className="p-3 text-right text-red-600">-2.7%</td>
                    <td className="p-3 text-right text-red-600">-0.9%</td>
                    <td className="p-3 text-right font-semibold text-green-600">Saved from worse</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2010s</td>
                    <td className="p-3 text-right">2.0%</td>
                    <td className="p-3 text-right">11.2%</td>
                    <td className="p-3 text-right">13.6%</td>
                    <td className="p-3 text-right font-semibold">18%</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-950">
                    <td className="p-3">2020s (to date)</td>
                    <td className="p-3 text-right">1.5%</td>
                    <td className="p-3 text-right">9.8%</td>
                    <td className="p-3 text-right">11.5%</td>
                    <td className="p-3 text-right font-semibold">15%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-semibold text-green-600 mb-2">Key Pattern: Dividends Matter Most in Bad Decades</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  In the 1930s, 1970s, and 2000s, when price returns were flat or negative, dividends provided the majority of returns. Dividends are your "downside cushion" during tough markets.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm font-semibold text-blue-600 mb-2">Key Pattern: Yields Have Declined Over Time</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Average yields dropped from 5%+ in the 1930s-40s to under 2% today. Companies now return cash through buybacks too. However, dividend growth has accelerated, partially compensating for lower starting yields.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend vs Non-Dividend Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Payers vs Non-Payers: The Performance Gap</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>50-Year Track Record (1973-2023)</CardTitle>
            <CardDescription>Data from Ned Davis Research / Hartford Funds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Stock Category</th>
                    <th className="text-right p-3">Avg Annual Return</th>
                    <th className="text-right p-3">$10,000 Becomes</th>
                    <th className="text-right p-3">Volatility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-bold">Dividend Growers & Initiators</td>
                    <td className="p-3 text-right font-bold text-green-600">10.2%</td>
                    <td className="p-3 text-right font-bold text-green-600">$1,322,000</td>
                    <td className="p-3 text-right">15.3%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">All Dividend Payers</td>
                    <td className="p-3 text-right">9.2%</td>
                    <td className="p-3 text-right">$834,000</td>
                    <td className="p-3 text-right">16.0%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Equal-Weight S&P 500</td>
                    <td className="p-3 text-right">7.7%</td>
                    <td className="p-3 text-right">$435,000</td>
                    <td className="p-3 text-right">17.3%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Dividend Payers With No Change</td>
                    <td className="p-3 text-right">6.8%</td>
                    <td className="p-3 text-right">$283,000</td>
                    <td className="p-3 text-right">17.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Non-Dividend Payers</td>
                    <td className="p-3 text-right">4.3%</td>
                    <td className="p-3 text-right">$83,000</td>
                    <td className="p-3 text-right">22.6%</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-950">
                    <td className="p-3 font-bold text-red-600">Dividend Cutters & Eliminators</td>
                    <td className="p-3 text-right font-bold text-red-600">-0.5%</td>
                    <td className="p-3 text-right font-bold text-red-600">$7,800</td>
                    <td className="p-3 text-right">24.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-semibold text-green-600 mb-2">The Clear Winner: Dividend Growers</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Companies that consistently grow their dividends outperformed every other category with <strong>lower volatility</strong>. $10,000 in dividend growers became $1.32 million vs just $83,000 in non-payers. That is a 16x difference over 50 years. The message is clear: dividend growth is the single most powerful predictor of long-term stock performance.
                </p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <p className="text-sm font-semibold text-red-600 mb-2">The Clear Loser: Dividend Cutters</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Companies that cut or eliminated their dividends actually lost money over 50 years, turning $10,000 into just $7,800. They also had the highest volatility. Avoiding dividend cutters is just as important as finding dividend growers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* What Returns to Expect */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Returns Should You Expect Going Forward?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Realistic Return Expectations for 2026 and Beyond
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Past returns do not guarantee future results, but we can build reasonable expectations using current market conditions:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Portfolio Strategy</th>
                    <th className="text-right p-3">Expected Yield</th>
                    <th className="text-right p-3">Expected Growth</th>
                    <th className="text-right p-3">Expected Total Return</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Dividend Growth (SCHD, aristocrats)</td>
                    <td className="p-3 text-right">3.0-3.5%</td>
                    <td className="p-3 text-right">5-7%</td>
                    <td className="p-3 text-right font-semibold">8-10.5%</td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-semibold">Balanced Dividend (mixed ETFs)</td>
                    <td className="p-3 text-right">3.5-4.5%</td>
                    <td className="p-3 text-right">4-6%</td>
                    <td className="p-3 text-right font-semibold text-green-600">7.5-10.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">High Yield (REITs, utilities, MLPs)</td>
                    <td className="p-3 text-right">5-7%</td>
                    <td className="p-3 text-right">2-4%</td>
                    <td className="p-3 text-right font-semibold">7-11%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Covered Call (JEPI, QYLD)</td>
                    <td className="p-3 text-right">7-10%</td>
                    <td className="p-3 text-right">0-3%</td>
                    <td className="p-3 text-right font-semibold">7-13%</td>
                  </tr>
                  <tr>
                    <td className="p-3">S&P 500 Index (for comparison)</td>
                    <td className="p-3 text-right">1.3-1.5%</td>
                    <td className="p-3 text-right">6-8%</td>
                    <td className="p-3 text-right font-semibold">7.3-9.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg mb-4">
              <p className="text-sm font-semibold text-blue-600 mb-2">Conservative Planning Recommendation</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                For financial planning purposes, we recommend assuming <strong>7-8% total return</strong> for a diversified dividend portfolio. This is below the historical average of 10.3%, providing a safety margin for lower-than-average decades. If you beat 8%, that is a bonus. If the market underperforms, you are still on track.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Current Market Context (Feb 2026)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                S&P 500 dividend yields are near historic lows (~1.3%) as companies increasingly favor buybacks. Dividend-focused ETFs like SCHD yield 3.5%, well above the broad market. This makes dedicated dividend portfolios more attractive for income investors than a simple S&P 500 index fund.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Compounding Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Compounding Effect: Real Dollar Examples</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>$500/Month Invested at Different Return Levels</CardTitle>
            <CardDescription>Illustrating the impact of total return assumptions over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Timeframe</th>
                    <th className="text-right p-3">Total Invested</th>
                    <th className="text-right p-3">At 7% Return</th>
                    <th className="text-right p-3">At 8% Return</th>
                    <th className="text-right p-3">At 10% Return</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">5 Years</td>
                    <td className="p-3 text-right">$30,000</td>
                    <td className="p-3 text-right">$35,800</td>
                    <td className="p-3 text-right">$36,700</td>
                    <td className="p-3 text-right">$38,700</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">10 Years</td>
                    <td className="p-3 text-right">$60,000</td>
                    <td className="p-3 text-right">$86,500</td>
                    <td className="p-3 text-right">$91,500</td>
                    <td className="p-3 text-right">$102,400</td>
                  </tr>
                  <tr className="border-b bg-blue-50 dark:bg-blue-950">
                    <td className="p-3 font-semibold">20 Years</td>
                    <td className="p-3 text-right">$120,000</td>
                    <td className="p-3 text-right font-semibold">$260,000</td>
                    <td className="p-3 text-right font-semibold">$294,500</td>
                    <td className="p-3 text-right font-semibold">$380,000</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-bold">30 Years</td>
                    <td className="p-3 text-right">$180,000</td>
                    <td className="p-3 text-right font-bold">$610,000</td>
                    <td className="p-3 text-right font-bold text-green-600">$745,000</td>
                    <td className="p-3 text-right font-bold text-green-600">$1,130,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-semibold mb-2">The 1% Difference Is Massive</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  At 30 years, the difference between 7% and 8% returns is $135,000 on just $500/month. Between 7% and 10%, it is $520,000. This is why even a small yield advantage from dividend stocks can transform your outcome over decades.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm font-semibold mb-2">Income at the 30-Year Mark</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  A $745,000 portfolio at 4% yield generates $29,800/year ($2,483/month) in dividend income. At $1.13M, it generates $45,200/year ($3,767/month). All from investing just $500/month consistently.
                </p>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Link href="/calculators/compound-interest">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Compound Interest Calculator
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  DRIP Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividends During Crashes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Dividends Performed During Market Crashes</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Dividend Resilience During Major Market Downturns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Crisis</th>
                    <th className="text-right p-3">S&P 500 Price Drop</th>
                    <th className="text-right p-3">Dividend Change</th>
                    <th className="text-right p-3">Recovery Time (Price)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">2000-2002 (Dot-com)</td>
                    <td className="p-3 text-right text-red-600">-49%</td>
                    <td className="p-3 text-right text-green-600">+2% (grew through it)</td>
                    <td className="p-3 text-right">7 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2007-2009 (Financial Crisis)</td>
                    <td className="p-3 text-right text-red-600">-57%</td>
                    <td className="p-3 text-right text-red-600">-23% (banks cut)</td>
                    <td className="p-3 text-right">5.5 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2020 (COVID)</td>
                    <td className="p-3 text-right text-red-600">-34%</td>
                    <td className="p-3 text-right text-green-600">+1% (grew through it)</td>
                    <td className="p-3 text-right">5 months</td>
                  </tr>
                  <tr>
                    <td className="p-3">2022 (Rate Hikes)</td>
                    <td className="p-3 text-right text-red-600">-25%</td>
                    <td className="p-3 text-right text-green-600">+10% (strong growth)</td>
                    <td className="p-3 text-right">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>In 3 of the 4 major crashes, aggregate dividends actually grew.</strong> Only the 2008 financial crisis caused meaningful cuts, and those were concentrated in banks and financials.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Dividend Aristocrats (25+ years of increases) have never collectively cut dividends</strong>, even during 2008. Individual companies may falter, but the group maintains its record.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Reinvesting dividends during crashes supercharges recovery.</strong> Buying shares at 50% off with your dividend payments means you own far more shares when prices recover. This is why long-term dividend investors often welcome downturns.
                </p>
              </div>
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
              <CardTitle className="text-lg">What is a good annual return for a dividend portfolio?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>7-10% total return is considered good.</strong> This includes 3-4% from dividends and 4-6% from price appreciation. Some years will be higher (15-25%), others will be negative. Over any 20-year rolling period in U.S. history, the S&P 500 has never delivered a negative total return. Consistency and time are your biggest advantages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do dividend stocks underperform growth stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>It depends on the time period.</strong> Growth stocks (like tech) dominated 2010-2021. Dividend stocks outperformed in 2000-2009 and 2022. Over the full 50-year record, dividend growers (10.2% annually) have closely matched or beaten the broader market with significantly less volatility. The real comparison should be risk-adjusted return, where dividend strategies excel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I include international dividend stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>International stocks often have higher yields than U.S. stocks</strong> (3-5% average vs 1.3% for the S&P 500). International dividend ETFs like VYMI (4.5% yield) and IDV (6% yield) can boost portfolio income. However, consider foreign withholding taxes (10-30%) and currency risk. Many investors allocate 20-30% internationally for diversification.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How does inflation affect dividend returns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>After inflation, the S&P 500 has returned about 7% annually (vs 10.3% nominal).</strong> Dividend growth has historically averaged 5.8% -- above the 3.2% average inflation rate. This means dividend income has grown faster than prices over time. A dollar of dividends in 1970 would buy $6.50 of purchasing power today through dividend growth, well ahead of inflation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is the difference between yield and total return?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Yield is the cash income percentage; total return includes everything.</strong> A stock yielding 3% that also appreciates 7% has a 10% total return. A stock yielding 8% that drops 3% in price has only a 5% total return. Always evaluate both metrics together. High yield with negative price performance (QYLD, for example) may deliver lower total returns than a moderate-yield grower (SCHD).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Model Your Dividend Portfolio Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Use our calculators to project your dividend portfolio growth using conservative, moderate, or historical return assumptions. See how your monthly investments compound into life-changing wealth over 10, 20, and 30 years.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/investment-return">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Investment Return
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Dividend Growth
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              This article is for educational purposes only. Historical returns do not guarantee future performance. All data is approximate and sourced from publicly available market research. Consult a financial advisor for personalized guidance.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/dividend-income-vs-capital-gains">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Income vs Capital Gains</CardTitle>
                <CardDescription>Understanding the two paths to investment returns</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-growth-vs-high-yield-strategy">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Growth vs High Yield Strategy</CardTitle>
                <CardDescription>Which approach delivers better long-term results?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-much-to-invest-for-500-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How Much to Invest for $500/Month?</CardTitle>
                <CardDescription>Portfolio sizes needed at every yield level</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/SCHD-vs-VYM-comparison">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">SCHD vs VYM: Complete Comparison</CardTitle>
                <CardDescription>Head-to-head analysis of returns, yield, and growth</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
