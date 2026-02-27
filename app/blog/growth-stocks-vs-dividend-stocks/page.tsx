import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, BarChart3, DollarSign, Shield, Target, PieChart, ArrowRight, Clock, Users, Zap, Scale } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Growth Stocks vs Dividend Stocks: Which Strategy to Choose in 2026?',
  description: 'Complete guide comparing growth stocks vs dividend stocks. See total return data, real examples (NVDA vs JNJ, AMZN vs KO), portfolio allocation by age, and when to combine both strategies.',
  keywords: 'growth stocks vs dividend stocks, growth investing vs dividend investing, growth or dividends, NVDA vs JNJ, best investment strategy 2026, growth vs income investing, total return comparison',
}

export default function GrowthVsDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Scale className="h-3 w-3 mr-1" />
          Investment Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Growth Stocks vs Dividend Stocks: Which Should You Choose?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The great investing debate: chase explosive capital gains or collect steady dividend income?
          The right answer depends on your age, goals, and risk tolerance. Here is the complete breakdown.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>20 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <Zap className="h-10 w-10 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">2,840%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">NVDA 10-year return (growth)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">62 Years</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">JNJ consecutive dividend increases</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <PieChart className="h-10 w-10 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">~40%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">S&P 500 total return from dividends</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Answer */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-purple-50 to-green-50 dark:from-purple-950 dark:to-green-950 border-2 border-purple-200 dark:border-purple-800">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">The Quick Answer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Choose Growth Stocks If:</h3>
                <ul className="space-y-1 text-sm">
                  <li>- You are under 40 with a long time horizon</li>
                  <li>- You do not need current income from investments</li>
                  <li>- You can stomach 30-50% drawdowns</li>
                  <li>- You want to maximize total wealth accumulation</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Choose Dividend Stocks If:</h3>
                <ul className="space-y-1 text-sm">
                  <li>- You are over 50 or approaching retirement</li>
                  <li>- You want passive income you can spend</li>
                  <li>- You prefer lower volatility and drawdowns</li>
                  <li>- You sleep better with quarterly dividend checks</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-center mt-4 text-slate-600 dark:text-slate-400">
              Most investors should own both -- the mix changes with age.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Fundamental Differences */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Understanding the Fundamental Differences</h2>

        <Card>
          <CardHeader>
            <CardTitle>Growth vs Dividend: Side-by-Side Characteristics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Characteristic</th>
                    <th className="text-center p-3 font-semibold text-purple-700 dark:text-purple-400">Growth Stocks</th>
                    <th className="text-center p-3 font-semibold text-green-700 dark:text-green-400">Dividend Stocks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">How You Make Money</td>
                    <td className="p-3 text-center">Stock price appreciation</td>
                    <td className="p-3 text-center">Dividends + modest price gains</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Current Income</td>
                    <td className="p-3 text-center">None or minimal (0-1%)</td>
                    <td className="p-3 text-center">2-6% annual yield</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Revenue Growth</td>
                    <td className="p-3 text-center">20-50%+ annually</td>
                    <td className="p-3 text-center">3-10% annually</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">P/E Ratio</td>
                    <td className="p-3 text-center">30-100x+ (expensive)</td>
                    <td className="p-3 text-center">12-25x (moderate)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Volatility</td>
                    <td className="p-3 text-center">High (30-60% swings)</td>
                    <td className="p-3 text-center">Lower (10-25% swings)</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Company Maturity</td>
                    <td className="p-3 text-center">Young, scaling businesses</td>
                    <td className="p-3 text-center">Mature, established companies</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Cash Usage</td>
                    <td className="p-3 text-center">Reinvested into growth</td>
                    <td className="p-3 text-center">Returned to shareholders</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 font-medium">Typical Sectors</td>
                    <td className="p-3 text-center">Tech, healthcare, e-commerce</td>
                    <td className="p-3 text-center">Utilities, staples, financials</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Bear Market Behavior</td>
                    <td className="p-3 text-center">Drops 40-70%</td>
                    <td className="p-3 text-center">Drops 15-35%, income continues</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Real Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real-World Examples: Growth vs Dividend Returns</h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Nothing illustrates the difference better than comparing actual stocks side by side. Let us look
          at two iconic matchups over the past decade.
        </p>

        {/* NVDA vs JNJ */}
        <Card className="mb-6 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-xl">Matchup 1: NVIDIA (NVDA) vs Johnson & Johnson (JNJ)</CardTitle>
            <CardDescription>The explosive grower vs the ultimate dividend king</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3">NVIDIA (Growth)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>10-Year Total Return</span><span className="font-bold">~2,840%</span></div>
                  <div className="flex justify-between"><span>Dividend Yield</span><span>0.03%</span></div>
                  <div className="flex justify-between"><span>Revenue Growth (5yr avg)</span><span>45%/year</span></div>
                  <div className="flex justify-between"><span>P/E Ratio</span><span>~55x</span></div>
                  <div className="flex justify-between"><span>Max Drawdown (2022)</span><span className="text-red-600">-66%</span></div>
                  <div className="flex justify-between"><span>$10K invested in 2016</span><span className="font-bold text-purple-700">~$294,000</span></div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">Johnson & Johnson (Dividend)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>10-Year Total Return</span><span className="font-bold">~85%</span></div>
                  <div className="flex justify-between"><span>Dividend Yield</span><span>3.1%</span></div>
                  <div className="flex justify-between"><span>Revenue Growth (5yr avg)</span><span>4%/year</span></div>
                  <div className="flex justify-between"><span>P/E Ratio</span><span>~16x</span></div>
                  <div className="flex justify-between"><span>Max Drawdown (2022)</span><span className="text-red-600">-18%</span></div>
                  <div className="flex justify-between"><span>$10K invested in 2016</span><span className="font-bold text-green-700">~$18,500</span></div>
                </div>
              </div>
            </div>

            <Card className="mt-4 bg-slate-50 dark:bg-slate-800">
              <CardContent className="pt-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>The catch:</strong> NVDA&apos;s 2,840% return is extraordinary and not typical for growth stocks.
                  During its -66% drawdown in 2022, many investors panic-sold and missed the recovery. JNJ investors
                  collected dividends every quarter and never saw a decline worse than -18%. The question is not just
                  about returns -- it is about what you can actually hold through.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* AMZN vs KO */}
        <Card className="mb-6 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-xl">Matchup 2: Amazon (AMZN) vs Coca-Cola (KO)</CardTitle>
            <CardDescription>The e-commerce disruptor vs the dividend aristocrat</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3">Amazon (Growth)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>10-Year Total Return</span><span className="font-bold">~920%</span></div>
                  <div className="flex justify-between"><span>Dividend Yield</span><span>0% (no dividend)</span></div>
                  <div className="flex justify-between"><span>Revenue Growth (5yr avg)</span><span>22%/year</span></div>
                  <div className="flex justify-between"><span>P/E Ratio</span><span>~60x</span></div>
                  <div className="flex justify-between"><span>Max Drawdown (2022)</span><span className="text-red-600">-56%</span></div>
                  <div className="flex justify-between"><span>$10K invested in 2016</span><span className="font-bold text-blue-700">~$102,000</span></div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">Coca-Cola (Dividend)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>10-Year Total Return</span><span className="font-bold">~95%</span></div>
                  <div className="flex justify-between"><span>Dividend Yield</span><span>2.9%</span></div>
                  <div className="flex justify-between"><span>Revenue Growth (5yr avg)</span><span>5%/year</span></div>
                  <div className="flex justify-between"><span>P/E Ratio</span><span>~24x</span></div>
                  <div className="flex justify-between"><span>Max Drawdown (2022)</span><span className="text-red-600">-14%</span></div>
                  <div className="flex justify-between"><span>$10K invested in 2016</span><span className="font-bold text-green-700">~$19,500</span></div>
                </div>
              </div>
            </div>

            <Card className="mt-4 bg-slate-50 dark:bg-slate-800">
              <CardContent className="pt-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Key insight:</strong> Amazon generated 10x the return of Coca-Cola, but paid zero dividends
                  along the way. KO investors received roughly $3,800 in cumulative dividends over the decade on a
                  $10K investment. During the 2022 bear market, KO dropped just 14% while AMZN cratered 56%.
                  Warren Buffett holds $25 billion in KO and has been collecting dividends since 1988 -- his
                  yield-on-cost now exceeds 50%.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Survivorship Bias Warning:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              It is easy to pick NVDA and AMZN in hindsight. For every Amazon, there are dozens of failed growth
              stocks (Peloton -95%, Zoom -88%, WeWork bankrupt). Dividend stocks rarely go to zero because they
              are profitable, mature businesses. The average growth stock investor does not pick the winners -- they
              pick a mix that averages out to more modest returns than the highlight reel suggests.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Total Return Data */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Total Return Comparison: The Broader Data</h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Instead of cherry-picking individual stocks, let us compare growth and dividend indexes
          over multiple time periods.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Index Returns: Growth vs Value/Dividend</CardTitle>
            <CardDescription>Annualized total returns including dividends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Time Period</th>
                    <th className="text-center p-3 text-purple-700 dark:text-purple-400">Russell 1000 Growth</th>
                    <th className="text-center p-3 text-green-700 dark:text-green-400">Dividend Aristocrats</th>
                    <th className="text-center p-3">S&P 500 (blend)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">1 Year</td>
                    <td className="p-3 text-center font-semibold">28.5%</td>
                    <td className="p-3 text-center">11.2%</td>
                    <td className="p-3 text-center">21.3%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">5 Year (annualized)</td>
                    <td className="p-3 text-center font-semibold">16.8%</td>
                    <td className="p-3 text-center">10.4%</td>
                    <td className="p-3 text-center">13.9%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">10 Year (annualized)</td>
                    <td className="p-3 text-center font-semibold">15.2%</td>
                    <td className="p-3 text-center">11.8%</td>
                    <td className="p-3 text-center">12.6%</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3">20 Year (annualized)</td>
                    <td className="p-3 text-center">11.4%</td>
                    <td className="p-3 text-center font-semibold">11.9%</td>
                    <td className="p-3 text-center">10.5%</td>
                  </tr>
                  <tr>
                    <td className="p-3">30 Year (annualized)</td>
                    <td className="p-3 text-center">10.8%</td>
                    <td className="p-3 text-center font-semibold">12.1%</td>
                    <td className="p-3 text-center">10.2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">The Surprising Finding:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Over 20 and 30 years, dividend aristocrats have actually outperformed growth stocks on an
              annualized basis. Growth stocks dominated the 2010-2025 era (driven by FAANG), but over longer
              periods that include bear markets and value rotations, consistent dividend growers compound
              more reliably. This is the power of reinvested dividends and lower drawdowns during crashes.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* When Each Strategy Wins */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">When Each Strategy Performs Best</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <Zap className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Growth Stocks Outperform When:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Interest rates are falling</strong> -- cheap money fuels high-growth businesses and makes future earnings more valuable</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Economic expansion</strong> -- bull markets and risk appetite favor speculative, high-valuation stocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Technology disruption waves</strong> -- AI, cloud, EVs create new trillion-dollar markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Low inflation environments</strong> -- companies can invest aggressively without cost pressures</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Dividend Stocks Outperform When:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Interest rates are rising</strong> -- investors rotate to tangible income and value; growth multiples compress</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Recessions and bear markets</strong> -- dividends provide a return floor even when prices drop</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>High inflation periods</strong> -- established companies with pricing power maintain margins and dividends</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market uncertainty</strong> -- flight to quality and income pushes money into reliable dividend payers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email CTA */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free Growth vs Dividend Portfolio Builder"
          description="Custom allocation models by age, risk tolerance, and income needs with specific stock and ETF picks"
          buttonText="Download Free Guide"
          source="growth_vs_dividend_blog"
        />
      </div>

      {/* Portfolio Allocation by Age */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Portfolio Allocation by Age</h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          The optimal growth-to-dividend ratio shifts as you move through different life stages. Here is
          a practical framework used by many financial advisors.
        </p>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Ages 20-35: Heavy Growth (80% Growth / 20% Dividend)</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    You have 30+ years to retirement. Maximize growth and let compounding work. You can ride
                    out 2-3 bear markets and recover. Dividends are a small diversifier, not the main strategy.
                  </p>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Example Portfolio ($50K):</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      $20K QQQ (Nasdaq 100) + $10K VGT (Tech ETF) + $10K individual growth picks (NVDA, AMZN, GOOGL)
                      + $10K SCHD (dividend ETF for stability)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Ages 35-45: Balanced Growth (60% Growth / 40% Dividend)</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Start building your dividend income stream while maintaining growth exposure. Your portfolio
                    is larger now, so the dividend portion generates meaningful income even at moderate yields.
                  </p>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Example Portfolio ($150K):</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      $45K QQQ + $22.5K growth stocks + $22.5K VUG (growth ETF)
                      + $30K SCHD + $15K VYM + $15K individual dividend stocks (JNJ, PG, ABBV)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Ages 45-55: Income Transition (40% Growth / 60% Dividend)</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Retirement is visible on the horizon. Shift toward income generation while keeping enough
                    growth to outpace inflation. Prioritize dividend stocks with strong growth rates (SCHD-style).
                  </p>
                  <div className="p-3 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Example Portfolio ($400K):</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      $100K QQQ + $60K diversified growth ETFs
                      + $100K SCHD + $80K VYM + $60K individual dividend aristocrats
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Ages 55-65: Income Focus (20% Growth / 80% Dividend)</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Approaching or entering retirement. Your primary concern is generating reliable income while
                    preserving capital. Growth allocation serves as an inflation hedge.
                  </p>
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Example Portfolio ($800K):</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      $100K VUG + $60K blue-chip growth (MSFT, AAPL)
                      + $250K SCHD + $200K VYM + $120K high-yield dividend stocks + $70K bond ETFs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Ages 65+: Maximum Income (10% Growth / 90% Dividend)</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Fully retired. Every dollar should work to generate income. A small growth allocation
                    keeps the portfolio growing to sustain spending over a 20-30 year retirement.
                  </p>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Example Portfolio ($1M):</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      $100K diversified growth ETF (inflation hedge)
                      + $350K SCHD + $250K VYM + $200K high-yield dividend stocks + $100K bond ladder
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Combining Both Strategies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Best of Both Worlds: Combining Growth and Dividends</h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          The smartest investors do not choose one or the other -- they strategically combine both.
          Here are three proven hybrid approaches.
        </p>

        <div className="space-y-6">
          <Card className="border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Strategy 1: The Core-Satellite Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Use dividend ETFs as your stable core (70%) and individual growth stocks as satellites (30%).
                The core provides income and stability while satellites provide upside potential.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="font-semibold text-sm mb-1">Core (70%)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">SCHD + VYM + VIG dividend ETFs</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <p className="font-semibold text-sm mb-1">Satellites (30%)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">5-10 hand-picked growth stocks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Strategy 2: The Dividend Growth Crossover
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Buy companies that are both growth stocks AND dividend growers. These rare companies
                deliver price appreciation AND rising income simultaneously.
              </p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold text-sm mb-1">Examples of Growth + Dividend Companies:</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Microsoft (MSFT) -- 0.7% yield, 10% dividend growth, 20%+ earnings growth |
                  Apple (AAPL) -- 0.5% yield, 6% dividend growth, massive buybacks |
                  Broadcom (AVGO) -- 1.6% yield, 18% dividend growth, AI semiconductor leader |
                  Costco (COST) -- 0.6% yield, 13% dividend growth + special dividends
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Strategy 3: The Age-Based Glide Path
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Start with heavy growth allocation and automatically shift 2% per year toward dividends.
                At age 25, you are 80/20 growth. By age 55, you have naturally glided to 20/80.
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold text-sm mb-1">The Formula:</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Dividend allocation = Your age + 5%. So at age 30: 35% dividend, 65% growth.
                  At age 50: 55% dividend, 45% growth. At age 65: 70% dividend, 30% growth.
                  Rebalance once per year.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Mistake 1: Going 100% Growth With No Income Plan</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                An all-growth portfolio generates zero income. When you need money (retirement, emergency), you
                must sell shares -- potentially at a loss during a downturn. Having a dividend income stream means
                you never have to sell at the worst time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Mistake 2: Buying Only Dividend Stocks at Age 25</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If you are 25, you do not need dividend income for 30+ years. Going all-dividend at a young age
                sacrifices significant wealth accumulation. A $10K investment growing at 15% (growth) vs 10%
                (dividends) over 30 years: $662K vs $174K. That is nearly $500K in lost potential wealth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Mistake 3: Ignoring Total Return</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A stock yielding 7% that drops 10% per year in price is a terrible investment. Always look at
                total return (price change + dividends), not just yield. Conversely, a 0% yield stock returning
                20% annually creates more wealth than a 5% yielder returning 8% total.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Mistake 4: Not Adjusting As You Age</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Your 30-year-old portfolio should look nothing like your 60-year-old portfolio. Failing to
                gradually shift from growth to income as retirement approaches leaves you vulnerable to a
                poorly timed bear market wiping out decades of gains right when you need the money.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-purple-50 to-green-50 dark:from-purple-950 dark:to-green-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">The Final Verdict</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Growth stocks and dividend stocks are not enemies -- they are teammates in a well-constructed
              portfolio. The question is not &quot;which is better?&quot; but &quot;what is the right mix for me right now?&quot;
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg flex items-start gap-3">
                <Clock className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Young investors (20-40):</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Lean heavily into growth. Time is your greatest asset. A 70-80% growth allocation maximizes long-term wealth.</p>
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Mid-career investors (40-55):</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Balance growth and dividends. A 50/50 or 40/60 mix builds income while maintaining growth above inflation.</p>
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Retirees (55+):</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Prioritize dividend income. An 80-90% dividend allocation generates spendable cash without selling shares in a downturn.</p>
                </div>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Remember: the best portfolio is one you can stick with through bull and bear markets.
              If 100% growth stocks cause you to panic-sell during a -50% crash, you would have been
              better off with a calmer dividend-heavy approach all along.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Model Your Growth vs Dividend Returns
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our free calculators to see exactly how different growth and dividend allocations
              perform over your specific time horizon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary">
                  Investment Return Calculator <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Dividend Growth Calculator <ArrowRight className="ml-2 h-5 w-5" />
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
          <Link href="/blog/SCHD-vs-VYM-comparison">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">SCHD vs VYM: Complete ETF Comparison</CardTitle>
                <CardDescription>Head-to-head breakdown of the two most popular dividend ETFs</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>8% yield today or 2% that grows 15% per year?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-portfolio-allocation-by-age">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Portfolio Allocation by Age</CardTitle>
                <CardDescription>Optimal portfolio mix from your 20s through retirement</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-etfs-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend ETFs for 2026</CardTitle>
                <CardDescription>Best passive income funds ranked by yield and performance</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
