import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, TrendingUp, DollarSign } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Energy Dividend Stocks 2026: Oil, Gas & Renewable Income',
  description: 'Top energy stocks paying 4-8% dividends. Includes ExxonMobil, Chevron, ConocoPhillips, and renewable energy plays for passive income investors.',
}

export default function BestEnergyDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Zap className="h-3 w-3 mr-1" />
          Energy Sector Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Energy Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Oil, gas, and renewable energy companies paying 4-8% yields.
          Benefit from energy demand while earning passive income.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 8 Energy Dividend Stocks</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. ExxonMobil (XOM)</CardTitle>
                  <CardDescription>Largest U.S. oil company | Dividend aristocrat</CardDescription>
                </div>
                <Badge className="bg-green-600">3.3% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$425B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">41 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">45%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Global giant in oil, natural gas, and chemicals. 41 consecutive years of dividend increases (dividend
                aristocrat). Weathered 2020 oil crash without cutting dividend. Investing heavily in low-carbon solutions.
                Most reliable energy dividend stock for conservative investors.
              </p>

              <Link href="/stocks/xom">
                <Button variant="outline" size="sm">Calculate XOM Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. Chevron (CVX)</CardTitle>
                  <CardDescription>Integrated oil & gas | Strong balance sheet</CardDescription>
                </div>
                <Badge className="bg-blue-600">3.5% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$275B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">37 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">52%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Second-largest U.S. oil company. 37 years of dividend increases. Lower debt than peers. Strong positions
                in Permian Basin and renewable fuels. Often preferred by value investors for cleaner balance sheet than Exxon.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. ConocoPhillips (COP)</CardTitle>
                  <CardDescription>Pure-play E&P | High dividend growth</CardDescription>
                </div>
                <Badge className="bg-purple-600">3.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$135B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">25.5%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">35%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Type</p>
                  <p className="font-semibold">E&P</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Pure exploration & production (no refining/chemicals). Fastest dividend growth in the sector—increased 25.5%
                annually over 5 years. Returns 75%+ of cash flow to shareholders via dividends + buybacks. Best growth
                potential among majors.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top Energy Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Company</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">ExxonMobil (XOM)</td><td className="p-2 text-right">3.3%</td><td className="p-2">Integrated</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Chevron (CVX)</td><td className="p-2 text-right">3.5%</td><td className="p-2">Integrated</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">ConocoPhillips (COP)</td><td className="p-2 text-right">3.2%</td><td className="p-2">E&P</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">EOG Resources (EOG)</td><td className="p-2 text-right">3.1%</td><td className="p-2">E&P</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Phillips 66 (PSX)</td><td className="p-2 text-right">4.2%</td><td className="p-2">Refining</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Kinder Morgan (KMI)</td><td className="p-2 text-right">6.2%</td><td className="p-2">Pipeline</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Enterprise Products (EPD)</td><td className="p-2 text-right">7.1%</td><td className="p-2">Pipeline</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td></tr>
                  <tr><td className="p-2">Williams Companies (WMB)</td><td className="p-2 text-right">5.8%</td><td className="p-2">Pipeline</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Energy Dividend Watchlist"
          description="Complete analysis of 20+ energy stocks with yields, growth rates, and buy targets"
          buttonText="Download Watchlist"
          source="energy_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Energy Sector Overview</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Integrated Oil & Gas</CardTitle>
              <Badge variant="outline" className="text-green-600">Safest</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Do everything: exploration, production, refining, marketing. Examples: XOM, CVX
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Diversified revenue</li>
                <li>• Long dividend histories</li>
                <li>• Recession-tested</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Lower yields (3-4%)</li>
                <li>• Slower growth</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E&P Companies</CardTitle>
              <Badge variant="outline" className="text-blue-600">Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Exploration & production only. Examples: COP, EOG
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Faster dividend growth</li>
                <li>• Benefit most from oil price rises</li>
                <li>• Efficient operators</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• More volatile</li>
                <li>• Cyclical earnings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pipelines/Midstream</CardTitle>
              <Badge variant="outline" className="text-purple-600">High Yield</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Transport oil & gas. Examples: KMI, EPD, WMB
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• High yields (5-8%)</li>
                <li>• Stable cash flows</li>
                <li>• Less price exposure</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• K-1 tax forms (complex)</li>
                <li>• Leverage concerns</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Energy Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced Energy Income Portfolio</CardTitle>
            <CardDescription>$30K investment | 4.1% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">ExxonMobil (XOM)</span>
                <span>$10,000 | 33%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Chevron (CVX)</span>
                <span>$8,000 | 27%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">ConocoPhillips (COP)</span>
                <span>$6,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Kinder Morgan (KMI)</span>
                <span>$4,000 | 13%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Enterprise Products (EPD)</span>
                <span>$2,000 | 7%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$1,230</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">4.1%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Diversification</p>
                  <p className="font-semibold">3 types</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Earning Energy Dividends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Energy stocks offer solid yields with dividend growth. Start with blue chips like Exxon and Chevron,
              add growth via ConocoPhillips, and boost yield with selective pipeline exposure.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/xom">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Energy Stocks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Start your dividend journey</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks</CardTitle>
                <CardDescription>Fast-growing dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
