import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Factory } from 'lucide-react'

export const metadata = {
  title: 'Best Industrial Dividend Stocks 2026: Infrastructure Income',
  description: 'Top industrial stocks with growing dividends. Caterpillar, 3M, Honeywell, and manufacturing leaders paying 2-4% yields with steady growth.',
}

export default function BestIndustrialDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Factory className="h-3 w-3 mr-1" />
          Manufacturing & Infrastructure
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Industrial Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Manufacturing powerhouses paying reliable dividends. Benefit from
          infrastructure spending and global growth while earning 2-4% yields.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 8 Industrial Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. Caterpillar (CAT)</CardTitle>
                <CardDescription>Construction equipment leader | 30 years of increases</CardDescription>
              </div>
              <Badge className="bg-green-600">1.9% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$160B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">30 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">35%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">7%/yr</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              World's largest construction equipment manufacturer. Yellow machines dominate mining, construction, and
              infrastructure worldwide. 30 years of dividend increases. Huge beneficiary of U.S. infrastructure bill
              and global mining demand. Services business (parts/maintenance) provides 30%+ margins and recurring
              revenue. Lower yield but fastest dividend growth in industrials. Best pick for growth investors.
            </p>

            <Link href="/stocks/cat">
              <Button variant="outline" size="sm">Calculate CAT Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. 3M Company (MMM)</CardTitle>
                <CardDescription>Diversified manufacturer | Dividend aristocrat</CardDescription>
              </div>
              <Badge className="bg-blue-600">5.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$65B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">65 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Products</p>
                <p className="font-semibold">60,000+</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Countries</p>
                <p className="font-semibold">200</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Makes 60,000+ products from Post-it Notes to N95 masks. 65 consecutive years of dividend increases
              (aristocrat). High yield reflects legal challenges over PFAS chemicals and hearing protection. Company
              spinning off healthcare division to focus on core manufacturing. Turnaround opportunity with 5.8%
              yield—highest in industrials. Higher risk but potential for capital appreciation plus income.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. Honeywell (HON)</CardTitle>
                <CardDescription>Aerospace & automation | Premium quality</CardDescription>
              </div>
              <Badge className="bg-purple-600">2.1% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Diversified conglomerate in aerospace (60% of profit), building technologies, performance materials, and
              safety products. 14 consecutive years of dividend increases. Benefits from commercial aerospace recovery
              post-pandemic. Warehouse automation business growing rapidly (e-commerce tailwind). Premium quality with
              consistent 20%+ operating margins. Best-run company in industrials.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Industrial Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Focus</th>
                    <th className="text-left p-2">Years</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Caterpillar (CAT)</td><td className="p-2 text-right">1.9%</td><td className="p-2">Construction Equipment</td><td className="p-2">30</td></tr>
                  <tr className="border-b"><td className="p-2">3M Company (MMM)</td><td className="p-2 text-right">5.8%</td><td className="p-2">Diversified Mfg</td><td className="p-2">65</td></tr>
                  <tr className="border-b"><td className="p-2">Honeywell (HON)</td><td className="p-2 text-right">2.1%</td><td className="p-2">Aerospace/Auto</td><td className="p-2">14</td></tr>
                  <tr className="border-b"><td className="p-2">Lockheed Martin (LMT)</td><td className="p-2 text-right">2.6%</td><td className="p-2">Defense</td><td className="p-2">21</td></tr>
                  <tr className="border-b"><td className="p-2">Raytheon (RTX)</td><td className="p-2 text-right">2.3%</td><td className="p-2">Defense/Aerospace</td><td className="p-2">19</td></tr>
                  <tr className="border-b"><td className="p-2">General Dynamics (GD)</td><td className="p-2 text-right">2.2%</td><td className="p-2">Defense</td><td className="p-2">32</td></tr>
                  <tr className="border-b"><td className="p-2">Emerson Electric (EMR)</td><td className="p-2 text-right">2.0%</td><td className="p-2">Automation</td><td className="p-2">67</td></tr>
                  <tr><td className="p-2">Illinois Tool Works (ITW)</td><td className="p-2 text-right">2.3%</td><td className="p-2">Diversified Mfg</td><td className="p-2">61</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Industrial Sector Breakdown</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Construction & Mining</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Heavy equipment manufacturers. Examples: CAT, Deere (DE)
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Infrastructure spending tailwind</li>
                <li>• Global mining demand</li>
                <li>• High-margin services revenue</li>
                <li>• Pricing power</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Cyclical earnings</li>
                <li>• Lower yields (2-3%)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aerospace & Defense</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Aircraft parts and military contractors. Examples: HON, LMT, RTX
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Government contracts (stable)</li>
                <li>• Commercial aerospace recovery</li>
                <li>• Long-term production backlogs</li>
                <li>• High barriers to entry</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Geopolitical risk</li>
                <li>• Budget constraints</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diversified Manufacturers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Multi-industry conglomerates. Examples: 3M, ITW, EMR
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Revenue diversification</li>
                <li>• Long dividend histories (60+ years)</li>
                <li>• Steady dividend growth</li>
                <li>• Global reach</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Conglomerate discount</li>
                <li>• Complexity</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Cyclical vs Defensive Industrials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Cyclical Industrials</CardTitle>
              <Badge variant="outline" className="text-orange-600">Higher Risk/Reward</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Earnings fluctuate with economic cycles. Profit when economy expands, suffer in recessions.
              </p>

              <p className="text-sm font-semibold mb-2">Examples:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• <strong>Caterpillar (CAT)</strong> - Construction equipment</li>
                <li>• <strong>Deere (DE)</strong> - Agricultural equipment</li>
                <li>• <strong>Boeing (BA)</strong> - Commercial aircraft</li>
              </ul>

              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <p className="text-xs font-semibold mb-1">Best For:</p>
                <p className="text-xs">Growth investors who can handle volatility. Buy during recessions when yields
                spike.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Defensive Industrials</CardTitle>
              <Badge variant="outline" className="text-green-600">Lower Risk</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                More stable earnings through cycles. Government contracts or essential products.
              </p>

              <p className="text-sm font-semibold mb-2">Examples:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• <strong>Lockheed Martin (LMT)</strong> - Defense contracts</li>
                <li>• <strong>Waste Management (WM)</strong> - Trash collection</li>
                <li>• <strong>Republic Services (RSG)</strong> - Waste services</li>
              </ul>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="text-xs font-semibold mb-1">Best For:</p>
                <p className="text-xs">Income investors wanting stability. Dividends safer through recessions.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Industrial Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced Industrial Income Portfolio</CardTitle>
            <CardDescription>$30K investment | 2.6% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Honeywell (HON)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Quality core holding</span>
                </div>
                <span>$8,000 | 27%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Caterpillar (CAT)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Infrastructure play</span>
                </div>
                <span>$7,000 | 23%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Lockheed Martin (LMT)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Defense stability</span>
                </div>
                <span>$6,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">3M Company (MMM)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">High yield, turnaround</span>
                </div>
                <span>$5,000 | 17%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Emerson Electric (EMR)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Automation growth</span>
                </div>
                <span>$4,000 | 13%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$780</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">2.6%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expected Growth</p>
                  <p className="font-semibold">6-8%/yr</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Build Your Industrial Dividend Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Industrial stocks offer dividend growth that benefits from infrastructure spending and global expansion.
              Start with HON for quality, add CAT for growth, mix in defense for stability.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/cat">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Industrials →</Button>
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
                <CardTitle className="text-lg">Dividend Growth Stocks</CardTitle>
                <CardDescription>Fastest growing dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-energy-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Energy Dividend Stocks</CardTitle>
                <CardDescription>Another cyclical sector</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
