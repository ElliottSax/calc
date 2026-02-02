import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Cpu, TrendingUp, Zap, CheckCircle2 } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Technology Dividend Stocks 2026: Growth + Income',
  description: 'Discover tech stocks that pay dividends. Microsoft, Apple, Broadcom, and more combine innovation with shareholder returns. Perfect for growth-focused investors.',
}

export default function BestTechDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Cpu className="h-3 w-3 mr-1" />
          Growth + Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Technology Dividend Stocks
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Tech stocks that pay dividends? Yes! These companies combine innovation
          and growth with increasing shareholder payouts.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Why Tech + Dividends is Powerful</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Most tech stocks don't pay dividends—they reinvest everything into growth. But <strong>mature
            tech giants</strong> now generate so much cash that they can fund innovation AND pay shareholders.
            This creates the best of both worlds: growth potential plus income.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white dark:bg-slate-900 rounded">
              <CheckCircle2 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold mb-1">Capital Appreciation</p>
              <p className="text-slate-600 dark:text-slate-400">Stock price grows as company innovates</p>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded">
              <CheckCircle2 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold mb-1">Dividend Growth</p>
              <p className="text-slate-600 dark:text-slate-400">Payouts increase 8-15% annually</p>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded">
              <CheckCircle2 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold mb-1">Lower Volatility</p>
              <p className="text-slate-600 dark:text-slate-400">Dividend-payers are more stable than pure growth</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Tech Dividend Stocks</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. Microsoft (MSFT)</CardTitle>
                  <CardDescription>Cloud computing, AI, enterprise software</CardDescription>
                </div>
                <Badge className="bg-green-600">10.2% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">0.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">10.2%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">22 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">25%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The most dominant tech company. Azure cloud, Office 365, LinkedIn, Xbox, and now AI leadership
                with ChatGPT integration. Generates $80B+ in free cash flow annually. Only pays out 25% as
                dividends, leaving massive room for increases. 22 years of dividend growth. Perfect core tech holding.
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-green-600">Very Safe</Badge>
                <Badge variant="outline">AI Leader</Badge>
                <Badge variant="outline">Cloud Dominance</Badge>
              </div>

              <Link href="/stocks/msft">
                <Button variant="outline" size="sm">Calculate MSFT Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. Apple (AAPL)</CardTitle>
                  <CardDescription>iPhone, Mac, Services, Wearables</CardDescription>
                </div>
                <Badge className="bg-blue-600">7.8% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">0.5%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">7.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">12 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">15%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Most valuable company in the world. iPhone remains cash machine, but Services (App Store, iCloud,
                Apple Music) growing faster and more profitable. Ecosystem lock-in creates moat. Ultra-low 15%
                payout ratio means dividend can grow for decades. Massive buybacks too.
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-green-600">Brand Power</Badge>
                <Badge variant="outline">Ecosystem</Badge>
                <Badge variant="outline">Services Growth</Badge>
              </div>

              <Link href="/stocks/aapl">
                <Button variant="outline" size="sm">Calculate AAPL Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. Broadcom (AVGO)</CardTitle>
                  <CardDescription>Semiconductors, networking, software</CardDescription>
                </div>
                <Badge className="bg-purple-600">18.5% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">1.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">18.5%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">14 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">48%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Fastest-growing dividend in tech. Supplies critical chips for data centers, networking, wireless.
                Acquired VMware for software diversification. Dividend has nearly tripled in 5 years. AI boom
                driving demand for their data center chips. Premium valuation but worth it for growth.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-purple-600">Fastest Growth</Badge>
                <Badge variant="outline">AI Play</Badge>
                <Badge variant="outline">Data Center</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. Texas Instruments (TXN)</CardTitle>
                  <CardDescription>Analog chips, embedded processors</CardDescription>
                </div>
                <Badge className="bg-teal-600">13% Growth</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">2.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">13.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">20 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">62%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Boring but profitable. Makes analog chips that go in everything: cars, appliances, industrial
                equipment. Not sexy like AI, but extremely stable with 70%+ gross margins. 20 years of dividend
                increases. Higher 2.8% yield appeals to income investors. Recession-resistant.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-teal-600">Higher Yield</Badge>
                <Badge variant="outline">Stable</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. Cisco Systems (CSCO)</CardTitle>
                  <CardDescription>Networking equipment, security, collaboration</CardDescription>
                </div>
                <Badge className="bg-orange-600">3.1% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Current Yield</p>
                  <p className="font-semibold">3.1%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold text-green-600">3.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years Paying</p>
                  <p className="font-semibold">14 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">51%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Dominant in enterprise networking. Routers, switches, security—the backbone of the internet.
                Slower growth than Microsoft/Apple but 3.1% yield compensates. Transitioning to subscriptions
                for recurring revenue. Solid choice for income-focused tech exposure.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-orange-600">Higher Yield</Badge>
                <Badge variant="outline">Enterprise</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top 10 Tech Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Company</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">5Y Growth</th>
                    <th className="text-left p-2">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Broadcom (AVGO)</td><td className="p-2 text-right">1.8%</td><td className="p-2 text-right text-green-600">18.5%</td><td className="p-2">Chips, Networking</td></tr>
                  <tr className="border-b"><td className="p-2">Texas Instruments (TXN)</td><td className="p-2 text-right">2.8%</td><td className="p-2 text-right text-green-600">13.0%</td><td className="p-2">Analog Chips</td></tr>
                  <tr className="border-b"><td className="p-2">Microsoft (MSFT)</td><td className="p-2 text-right">0.8%</td><td className="p-2 text-right text-green-600">10.2%</td><td className="p-2">Cloud, AI</td></tr>
                  <tr className="border-b"><td className="p-2">Apple (AAPL)</td><td className="p-2 text-right">0.5%</td><td className="p-2 text-right text-green-600">7.8%</td><td className="p-2">Consumer Tech</td></tr>
                  <tr className="border-b"><td className="p-2">Cisco (CSCO)</td><td className="p-2 text-right">3.1%</td><td className="p-2 text-right text-green-600">3.0%</td><td className="p-2">Networking</td></tr>
                  <tr className="border-b"><td className="p-2">IBM (IBM)</td><td className="p-2 text-right">4.2%</td><td className="p-2 text-right text-green-600">1.2%</td><td className="p-2">Enterprise IT</td></tr>
                  <tr className="border-b"><td className="p-2">Qualcomm (QCOM)</td><td className="p-2 text-right">2.2%</td><td className="p-2 text-right text-green-600">5.4%</td><td className="p-2">Mobile Chips</td></tr>
                  <tr className="border-b"><td className="p-2">Intel (INTC)</td><td className="p-2 text-right">1.8%</td><td className="p-2 text-right text-red-600">-5.2%</td><td className="p-2">PC/Server Chips</td></tr>
                  <tr className="border-b"><td className="p-2">Oracle (ORCL)</td><td className="p-2 text-right">1.4%</td><td className="p-2 text-right text-green-600">12.8%</td><td className="p-2">Databases, Cloud</td></tr>
                  <tr><td className="p-2">Corning (GLW)</td><td className="p-2 text-right">3.2%</td><td className="p-2 text-right text-green-600">7.8%</td><td className="p-2">Materials, Optical</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Tech Dividend Stock Watchlist"
          description="25+ technology dividend stocks with analysis, valuations, and buy targets"
          buttonText="Download Watchlist"
          source="tech_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Tech Dividend Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>$25K Tech + Dividend Portfolio</CardTitle>
            <CardDescription>Growth focus with dividend cushion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Microsoft (MSFT)</span>
                <span>$8,000 | 32%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Apple (AAPL)</span>
                <span>$6,000 | 24%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Broadcom (AVGO)</span>
                <span>$5,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Texas Instruments (TXN)</span>
                <span>$3,500 | 14%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Cisco (CSCO)</span>
                <span>$2,500 | 10%</span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Total</p>
                  <p className="font-semibold">$25,000</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Year 1 Income</p>
                  <p className="font-semibold">$269</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">1.1%</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Low current yield but dividends growing 10%+ annually. In 10 years, your yield-on-cost could be 3-4%.
                Plus stock price appreciation likely 8-12% annually.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Explore Tech Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Technology dividend stocks offer the best of both worlds: growth potential from innovation plus
              steadily increasing income. Perfect for investors who want tech exposure without pure speculation.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/msft">
                <Button className="w-full" size="lg">
                  Calculate Tech Returns →
                </Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Tech Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks</CardTitle>
                <CardDescription>More fast-growing dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Start with proven performers</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Yield vs Growth Strategy</CardTitle>
                <CardDescription>Where tech fits in</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide</CardTitle>
                <CardDescription>Optimize your tech holdings</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
