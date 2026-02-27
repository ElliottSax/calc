import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, AlertTriangle, ArrowRight, Shield, Target } from 'lucide-react'

export const metadata = {
  title: 'What Is a Good Dividend Yield? Benchmarks by Sector (2026)',
  description: 'Learn what constitutes a good dividend yield, typical ranges by sector (utilities, REITs, tech, healthcare), how to spot yield traps, and the relationship between yield and safety.',
  keywords: ['good dividend yield', 'what is a good dividend yield', 'dividend yield by sector', 'average dividend yield', 'high dividend yield', 'dividend yield trap', 'safe dividend yield', 'S&P 500 dividend yield'],
}

export default function WhatIsAGoodDividendYield() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          Yield Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          What Is a Good Dividend Yield?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The answer depends on the sector, your goals, and whether the dividend is actually
          safe. Here are the benchmarks that matter, plus how to avoid yield traps.
        </p>
      </div>

      {/* The Quick Answer */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Quick Answer</h2>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <CardTitle className="text-xl">General Guideline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              For most investors, a <strong>good dividend yield falls between 2% and 6%</strong>, depending on
              the sector and your investment goals. The S&P 500 average dividend yield has historically hovered
              around <strong>1.5% to 2.0%</strong>, so anything above 2% is already above average for a broad
              market stock.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              But yield alone is not enough to evaluate a dividend stock. A 2.5% yield that grows 10% per year
              is far more valuable than a 7% yield that stays flat or gets cut. The best dividend investments
              balance <strong>current yield</strong>, <strong>dividend growth</strong>, and <strong>safety</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              <CardTitle className="text-xl">The Sweet Spot</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-600">2.0% - 3.5%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Dividend Growth</p>
                <p className="text-xs text-slate-500 mt-1">Lower yield, faster growth. Best for wealth building over 10+ years.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-400">
                <p className="text-2xl font-bold text-green-600">3.5% - 5.5%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Balanced Income</p>
                <p className="text-xs text-slate-500 mt-1">Solid yield with moderate growth. Best for most investors.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                <p className="text-2xl font-bold text-orange-600">5.5% - 8.0%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">High Income</p>
                <p className="text-xs text-slate-500 mt-1">Higher yield, less growth. Best for current income needs. Requires more due diligence.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Yield by Sector */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Yield Benchmarks by Sector</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          What counts as a &ldquo;good&rdquo; yield varies dramatically by sector. A 2% yield is excellent for a tech
          stock but below average for a utility. Here are typical yield ranges for each major sector:
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-bold">Sector</th>
                    <th className="text-center p-3 font-bold">Typical Yield Range</th>
                    <th className="text-center p-3 font-bold">&ldquo;Good&rdquo; Yield</th>
                    <th className="text-left p-3 font-bold">Growth Rate</th>
                    <th className="text-left p-3 font-bold">Key Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-red-50 dark:bg-red-950/30">
                    <td className="p-3 font-medium">REITs</td>
                    <td className="p-3 text-center">4.0% - 8.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">5.0%+</td>
                    <td className="p-3">2-5%</td>
                    <td className="p-3">Required to distribute 90% of income; naturally high yield</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Utilities</td>
                    <td className="p-3 text-center">3.0% - 5.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">3.5%+</td>
                    <td className="p-3">3-6%</td>
                    <td className="p-3">Regulated, stable cash flows; defensive sector</td>
                  </tr>
                  <tr className="border-b bg-red-50 dark:bg-red-950/30">
                    <td className="p-3 font-medium">Energy</td>
                    <td className="p-3 text-center">3.0% - 6.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">4.0%+</td>
                    <td className="p-3">Variable</td>
                    <td className="p-3">Cyclical; dividends tied to oil/gas prices</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Telecoms</td>
                    <td className="p-3 text-center">4.0% - 7.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">5.0%+</td>
                    <td className="p-3">1-3%</td>
                    <td className="p-3">High capex needs; check payout ratio carefully</td>
                  </tr>
                  <tr className="border-b bg-red-50 dark:bg-red-950/30">
                    <td className="p-3 font-medium">Consumer Staples</td>
                    <td className="p-3 text-center">2.5% - 4.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">3.0%+</td>
                    <td className="p-3">5-8%</td>
                    <td className="p-3">Recession-resistant; many Dividend Aristocrats here</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Healthcare</td>
                    <td className="p-3 text-center">1.5% - 4.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">2.5%+</td>
                    <td className="p-3">5-10%</td>
                    <td className="p-3">Aging demographics tailwind; patent risk</td>
                  </tr>
                  <tr className="border-b bg-red-50 dark:bg-red-950/30">
                    <td className="p-3 font-medium">Financials</td>
                    <td className="p-3 text-center">2.0% - 4.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">3.0%+</td>
                    <td className="p-3">5-10%</td>
                    <td className="p-3">Banks, insurers; interest rate sensitive</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Industrials</td>
                    <td className="p-3 text-center">1.5% - 3.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">2.0%+</td>
                    <td className="p-3">7-12%</td>
                    <td className="p-3">Cyclical but strong dividend growth; reinvestment heavy</td>
                  </tr>
                  <tr className="border-b bg-red-50 dark:bg-red-950/30">
                    <td className="p-3 font-medium">Technology</td>
                    <td className="p-3 text-center">0.5% - 2.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">1.0%+</td>
                    <td className="p-3">10-20%</td>
                    <td className="p-3">Fastest dividend growth; lower starting yield</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Consumer Discretionary</td>
                    <td className="p-3 text-center">1.0% - 3.0%</td>
                    <td className="p-3 text-center font-bold text-green-600">1.5%+</td>
                    <td className="p-3">8-15%</td>
                    <td className="p-3">Cyclical; income growth can be fast</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-lg">Key Takeaway</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Always compare a stock&apos;s yield to its sector average, not to stocks in other sectors. A REIT
              yielding 3% is underperforming for its sector, while a tech stock yielding 1.5% is doing exceptionally
              well. Context matters more than absolute numbers.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Historical S&P 500 Yields */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Historical S&P 500 Dividend Yields</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>S&P 500 Average Yield Over Time</CardTitle>
            <CardDescription>How market-wide yields have shifted over the decades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-bold">Period</th>
                    <th className="text-center p-3 font-bold">Average Yield</th>
                    <th className="text-left p-3 font-bold">Context</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">1940s - 1960s</td>
                    <td className="p-3 text-center font-bold">4.0% - 6.0%</td>
                    <td className="p-3">Dividends were the primary reason people bought stocks</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">1970s - 1980s</td>
                    <td className="p-3 text-center font-bold">3.5% - 5.5%</td>
                    <td className="p-3">High interest rates competed with dividends; yields stayed elevated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">1990s</td>
                    <td className="p-3 text-center font-bold">1.5% - 3.0%</td>
                    <td className="p-3">Tech boom drove prices up, compressing yields; buybacks rose</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">2000s</td>
                    <td className="p-3 text-center font-bold">1.5% - 2.5%</td>
                    <td className="p-3">Post-dot-com recovery; financial crisis briefly spiked yields</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">2010s</td>
                    <td className="p-3 text-center font-bold">1.7% - 2.2%</td>
                    <td className="p-3">Low interest rates; companies preferred stock buybacks</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">2020s (current)</td>
                    <td className="p-3 text-center font-bold">1.3% - 1.8%</td>
                    <td className="p-3">Market highs compress yields; buybacks dominate capital return</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              The long-term average S&P 500 dividend yield since 1926 is approximately <strong>3.3%</strong>.
              Today&apos;s ~1.5% average is well below that historical norm, driven largely by the growing
              dominance of low-yield or no-yield tech stocks in the index and the shift toward stock buybacks
              as the preferred capital return method.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Yield Traps */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Spot a Dividend Yield Trap</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          A &ldquo;yield trap&rdquo; is a stock with an attractively high yield that is actually a warning sign.
          The high yield exists because the stock price has collapsed, and the dividend is likely to be cut.
          Here are the red flags:
        </p>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg">Yield Above 8-10%</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                While some legitimate investments (like certain BDCs or mortgage REITs) can sustain yields
                above 8%, for most common stocks a double-digit yield is a major red flag. The market is
                pricing in a dividend cut. Very few companies can sustainably pay out that much of their
                earnings. Always ask: &ldquo;Why is this yield so much higher than its peers?&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg">Payout Ratio Above 80-90%</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The payout ratio is the percentage of earnings paid out as dividends. A ratio above 80% for
                most companies means there is very little margin of safety. If earnings dip even slightly,
                the dividend could be cut. The exception is REITs (which are required to pay 90%+) and
                utilities (which have very predictable earnings).
              </p>
              <Link href="/blog/how-to-read-dividend-payout-ratios">
                <Button variant="link" size="sm" className="mt-2 p-0">
                  How to analyze payout ratios <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg">Declining Revenue and Earnings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If a company&apos;s revenue and earnings have been shrinking for multiple years, the dividend is living
                on borrowed time. Companies can only sustain dividends if they generate enough cash. Look for at
                least stable (preferably growing) free cash flow. If FCF does not cover the dividend, the company
                is borrowing or selling assets to pay it &mdash; that is not sustainable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg">Rising Debt with No Growth</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                When a company takes on more debt while its business is not growing, it may be borrowing to fund
                its dividend. This is the final stage before a dividend cut. Check the debt-to-equity ratio and
                interest coverage ratio. If the company is spending a significant portion of its cash flow on
                interest payments, the dividend is at risk.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg">Stock Price Down 40%+ While Yield Soars</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Remember that yield = dividend / price. When a stock drops dramatically, the yield
                automatically increases even though the dividend has not changed. If a stock that normally
                yields 3% now yields 8% because it lost half its value, that is not a buying opportunity &mdash;
                it is the market telling you something is wrong. The dividend will likely be cut to match the
                new reality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Yield Trap Example */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="text-xl">Real-World Yield Trap Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              In early 2020, many investors were attracted to AT&T&apos;s ~7% dividend yield. It seemed like an
              incredible income opportunity. But the high yield masked serious problems:
            </p>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2 mb-4">
              <li><strong>Massive debt</strong> from the Time Warner acquisition ($170B+)</li>
              <li><strong>Declining legacy business</strong> (landline, DirecTV subscriber losses)</li>
              <li><strong>Payout ratio above 90%</strong> of free cash flow</li>
              <li><strong>Zero dividend growth</strong> for several years</li>
            </ul>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              In 2022, AT&T cut its dividend by nearly 50% when it spun off WarnerMedia. Investors who chased
              the high yield saw their income cut in half AND their stock price decline significantly. A stock
              yielding 3.5% with 10% annual growth (like Broadcom at the time) would have delivered far more
              total income over that period.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Yield vs Growth */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">High Yield vs. High Growth: Which Is Better?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10-Year Income Comparison</CardTitle>
            <CardDescription>Starting with $100,000 investment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-bold">Metric</th>
                    <th className="text-center p-3 font-bold">Stock A: High Yield</th>
                    <th className="text-center p-3 font-bold">Stock B: High Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Starting Yield</td>
                    <td className="p-3 text-center">6.0%</td>
                    <td className="p-3 text-center">2.0%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Annual Dividend Growth</td>
                    <td className="p-3 text-center">2%</td>
                    <td className="p-3 text-center">12%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Year 1 Income</td>
                    <td className="p-3 text-center font-bold text-green-600">$6,000</td>
                    <td className="p-3 text-center">$2,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Year 5 Income</td>
                    <td className="p-3 text-center font-bold text-green-600">$6,495</td>
                    <td className="p-3 text-center">$3,148</td>
                  </tr>
                  <tr className="border-b bg-yellow-50 dark:bg-yellow-950/30">
                    <td className="p-3 font-medium">Year 10 Income</td>
                    <td className="p-3 text-center">$7,170</td>
                    <td className="p-3 text-center font-bold text-green-600">$5,547</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Total 10-Year Income</td>
                    <td className="p-3 text-center font-bold">$65,698</td>
                    <td className="p-3 text-center font-bold">$35,097</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-950/30">
                    <td className="p-3 font-medium">Yield on Cost (Year 10)</td>
                    <td className="p-3 text-center">7.2%</td>
                    <td className="p-3 text-center">5.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              In this example, the high-yield stock delivers more total income over 10 years. But by Year 10,
              the growth stock is nearly catching up &mdash; and by Year 15, it will surpass the high-yield stock in
              annual income while also likely having better stock price appreciation. The right choice depends
              on your time horizon.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" size="sm">Yield on Cost Calculator <ArrowRight className="h-3 w-3 ml-1" /></Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" size="sm">Dividend Growth Calculator <ArrowRight className="h-3 w-3 ml-1" /></Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Choose Higher Yield If...</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>You need income now (retired or near retirement)</li>
                <li>You have a shorter time horizon (under 10 years)</li>
                <li>You prioritize current cash flow over growth</li>
                <li>You are in a low tax bracket (maximizing qualified dividends)</li>
                <li>You want to supplement Social Security or pension income</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <CardTitle className="text-lg">Choose Higher Growth If...</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>You are building wealth for the future (10+ year horizon)</li>
                <li>You want your income to outpace inflation significantly</li>
                <li>You are reinvesting all dividends (DRIP)</li>
                <li>You value total return (price appreciation + income)</li>
                <li>You are in a high tax bracket (defer more income to later)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Safety-Yield Relationship */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Yield-Safety Relationship</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How to Evaluate Dividend Safety</CardTitle>
            <CardDescription>Five key metrics that reveal whether a yield is sustainable</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="font-medium mb-1">1. Payout Ratio (Target: Under 60% for most sectors)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Divide the annual dividend by earnings per share. A 50% payout ratio means the company
                  keeps half its earnings as a cushion. REITs and utilities can safely run higher (75-90%)
                  due to their stable, predictable cash flows.
                </p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium mb-1">2. Free Cash Flow Coverage (Target: 1.5x or higher)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Dividends are paid from cash, not earnings. Free cash flow coverage = FCF / total dividends paid.
                  A ratio of 1.5x means the company generates 50% more cash than it needs for dividends. Below
                  1.0x means the company is not generating enough cash to cover its dividend.
                </p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium mb-1">3. Dividend Track Record (Target: 10+ years of no cuts)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Companies that have maintained or grown dividends for 10+ years have proven they can
                  weather recessions. Dividend Aristocrats (25+ years) and Dividend Kings (50+ years) are
                  the gold standard of reliability.
                </p>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium mb-1">4. Debt-to-EBITDA (Target: Under 3.0x)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Heavily indebted companies may be forced to cut dividends to service debt, especially
                  when interest rates rise. A ratio under 3.0x provides comfort. Above 4.0x should raise
                  concerns for most industries.
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">5. Earnings Growth Trend (Target: Positive 3-5 year trend)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Dividends ultimately follow earnings. If a company&apos;s earnings are growing, it can continue
                  increasing its dividend. If earnings are declining, even a current low payout ratio may not
                  protect the dividend in the future.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Link href="/blog/how-to-analyze-dividend-safety">
          <Button variant="outline">
            Complete Guide to Dividend Safety Analysis <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </Link>
      </section>

      {/* What Yield Should You Target */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Yield Should You Target?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="text-lg">Young Investor (20s-30s)</CardTitle>
              <CardDescription>20-30+ year time horizon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">1.5% - 3.0%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Focus on dividend growth stocks (tech, healthcare, industrials). A lower starting yield with
                10-15% annual dividend growth will compound into a massive income stream by retirement. Reinvest
                everything via DRIP. Time is your greatest asset.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="text-lg">Mid-Career (40s-50s)</CardTitle>
              <CardDescription>10-20 year time horizon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600 mb-2">2.5% - 4.5%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Balance yield and growth. Mix Dividend Aristocrats (staples, healthcare) with moderate-yield
                growers. Start shifting toward slightly higher yields as retirement approaches. Continue
                reinvesting, but begin planning your income withdrawal strategy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500">
            <CardHeader>
              <CardTitle className="text-lg">Near/In Retirement (60s+)</CardTitle>
              <CardDescription>Income needed now</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-600 mb-2">3.5% - 6.0%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Prioritize current income and safety. Utilities, consumer staples, REITs, and high-quality
                telecoms provide the yield you need. Still include some growth to keep pace with inflation.
                Avoid yield traps. A safe 4% is better than a risky 8%.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-2xl">Find Your Ideal Dividend Yield</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Use our free calculators to model different yield and growth scenarios. See how your choice of yield
              impacts your income 5, 10, and 20 years from now.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/yield-on-cost">
                <Button className="w-full" size="lg">Yield on Cost Calculator <ArrowRight className="h-4 w-4 ml-1" /></Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">Dividend Growth Calculator <ArrowRight className="h-4 w-4 ml-1" /></Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/blog/what-are-dividends-beginners-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">What Are Dividends?</CardTitle>
                <CardDescription>Complete beginner&apos;s guide to dividend investing</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High Yield vs. Growth Dividends</CardTitle>
                <CardDescription>Which strategy wins long-term?</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/how-to-avoid-dividend-cuts">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Avoid Dividend Cuts</CardTitle>
                <CardDescription>Protect your income stream</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
