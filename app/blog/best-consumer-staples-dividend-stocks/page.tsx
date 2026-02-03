import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'Best Consumer Staples Dividend Stocks 2026: Recession-Proof Income',
  description: 'Top consumer staples stocks with reliable dividends. Procter & Gamble, Coca-Cola, PepsiCo, and more recession-resistant brands paying 2-4% yields.',
}

export default function BestConsumerStaplesDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <ShoppingCart className="h-3 w-3 mr-1" />
          Defensive Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Consumer Staples Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Recession-proof brands paying reliable dividends. People buy toothpaste,
          soda, and food regardless of the economy—perfect for defensive income.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Consumer Staples Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. Procter & Gamble (PG)</CardTitle>
                <CardDescription>Dividend king | 68 years of increases</CardDescription>
              </div>
              <Badge className="bg-green-600">2.4% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$385B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold text-green-600">68 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">55%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Brands</p>
                <p className="font-semibold">65+</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              The gold standard of consumer staples investing. 68 consecutive years of dividend increases (dividend
              king). Owns iconic brands: Tide, Pampers, Gillette, Crest, Bounty, Charmin, Dawn, Febreze. People need
              these products in good times and bad. Never cut dividend—even during 2008 crisis. Pricing power allows
              passing inflation to customers. Perfect for conservative dividend investors wanting safety and steady
              growth.
            </p>

            <Link href="/stocks/pg">
              <Button variant="outline" size="sm">Calculate PG Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Coca-Cola (KO)</CardTitle>
                <CardDescription>Dividend aristocrat | 62 years of increases</CardDescription>
              </div>
              <Badge className="bg-blue-600">3.0% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$265B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">62 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Daily Servings</p>
                <p className="font-semibold">1.9B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Countries</p>
                <p className="font-semibold">200+</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              World's largest beverage company serving 1.9 billion drinks daily across 200+ countries. 62 years of
              dividend increases. Warren Buffett's largest holding since 1988. Owns Coke, Sprite, Fanta, Dasani, Minute
              Maid, Powerade, Smartwater. Global recession-proof business with unmatched distribution. Higher yield than
              PG with similar safety profile.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. PepsiCo (PEP)</CardTitle>
                <CardDescription>Dividend aristocrat | Snacks + beverages</CardDescription>
              </div>
              <Badge className="bg-purple-600">2.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              More diversified than Coca-Cola with snacks (Frito-Lay, Quaker, Doritos) generating 55% of revenue.
              Beverages include Pepsi, Gatorade, Tropicana, Mountain Dew. 51 consecutive years of dividend increases.
              Snacks provide better margins and growth than beverages. Less cyclical than pure beverage play. Growing
              dividend faster than KO in recent years.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Consumer Staples Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Category</th>
                    <th className="text-left p-2">Years</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Procter & Gamble (PG)</td><td className="p-2 text-right">2.4%</td><td className="p-2">Household</td><td className="p-2">68</td></tr>
                  <tr className="border-b"><td className="p-2">Coca-Cola (KO)</td><td className="p-2 text-right">3.0%</td><td className="p-2">Beverages</td><td className="p-2">62</td></tr>
                  <tr className="border-b"><td className="p-2">PepsiCo (PEP)</td><td className="p-2 text-right">2.8%</td><td className="p-2">Snacks/Beverages</td><td className="p-2">51</td></tr>
                  <tr className="border-b"><td className="p-2">Colgate-Palmolive (CL)</td><td className="p-2 text-right">2.3%</td><td className="p-2">Household</td><td className="p-2">61</td></tr>
                  <tr className="border-b"><td className="p-2">Kimberly-Clark (KMB)</td><td className="p-2 text-right">3.5%</td><td className="p-2">Paper Products</td><td className="p-2">52</td></tr>
                  <tr className="border-b"><td className="p-2">Mondelez (MDLZ)</td><td className="p-2 text-right">2.4%</td><td className="p-2">Snacks</td><td className="p-2">12</td></tr>
                  <tr className="border-b"><td className="p-2">General Mills (GIS)</td><td className="p-2 text-right">3.6%</td><td className="p-2">Packaged Foods</td><td className="p-2">124</td></tr>
                  <tr className="border-b"><td className="p-2">Kraft Heinz (KHC)</td><td className="p-2 text-right">4.5%</td><td className="p-2">Packaged Foods</td><td className="p-2">5</td></tr>
                  <tr className="border-b"><td className="p-2">Clorox (CLX)</td><td className="p-2 text-right">3.2%</td><td className="p-2">Cleaning</td><td className="p-2">47</td></tr>
                  <tr><td className="p-2">Hormel Foods (HRL)</td><td className="p-2 text-right">3.1%</td><td className="p-2">Meat/Packaged</td><td className="p-2">57</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Consumer Staples for Dividends?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recession-Resistant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                People buy toothpaste, toilet paper, and food regardless of economy. Consumer staples sales barely
                decline in recessions. PG revenue grew during 2008 crisis.
              </p>
              <p className="text-sm font-semibold mb-2">Track Record:</p>
              <ul className="text-xs space-y-1">
                <li>• Zero dividend cuts in 2008-2009</li>
                <li>• Zero cuts in 2020 pandemic</li>
                <li>• 50+ year payment histories common</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing Power</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Strong brands command premium prices. Customers pay extra for Tide vs generic detergent. Allows
                companies to pass inflation to customers without losing sales.
              </p>
              <p className="text-sm font-semibold mb-2">Brand Examples:</p>
              <ul className="text-xs space-y-1">
                <li>• Tide detergent (PG)</li>
                <li>• Coca-Cola soda (KO)</li>
                <li>• Lay's chips (PEP)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Long Dividend Histories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Consumer staples dominate dividend aristocrats and kings lists. General Mills has paid for 124
                consecutive years. PG for 68 years. Reliability you can count on.
              </p>
              <p className="text-sm font-semibold mb-2">Aristocrats/Kings:</p>
              <ul className="text-xs space-y-1">
                <li>• PG: 68 years (King)</li>
                <li>• KO: 62 years (Aristocrat)</li>
                <li>• PEP: 51 years (Aristocrat)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Growth vs Income: Which Staples?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Quality Growth Stocks</CardTitle>
              <Badge variant="outline" className="text-green-600">Lower Yield, Better Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Lower current yields (2-2.5%) but premium quality and steady dividend growth (6-8% annually). Best for
                long-term growth investors.
              </p>

              <p className="text-sm font-semibold mb-2">Top Picks:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>Procter & Gamble (PG)</span>
                  <span className="text-green-600">2.4% yield</span>
                </li>
                <li className="flex justify-between">
                  <span>Colgate-Palmolive (CL)</span>
                  <span className="text-green-600">2.3% yield</span>
                </li>
                <li className="flex justify-between">
                  <span>Mondelez (MDLZ)</span>
                  <span className="text-green-600">2.4% yield</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                These are dividend kings/aristocrats with fortress balance sheets. Own them forever.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Income-Focused Stocks</CardTitle>
              <Badge variant="outline" className="text-blue-600">Higher Yield, Slower Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Higher current yields (3.5-4.5%) but slower growth or turnaround stories. Best for retirees needing
                income now.
              </p>

              <p className="text-sm font-semibold mb-2">Top Picks:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>Kraft Heinz (KHC)</span>
                  <span className="text-blue-600">4.5% yield</span>
                </li>
                <li className="flex justify-between">
                  <span>General Mills (GIS)</span>
                  <span className="text-blue-600">3.6% yield</span>
                </li>
                <li className="flex justify-between">
                  <span>Kimberly-Clark (KMB)</span>
                  <span className="text-blue-600">3.5% yield</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Higher risk but income starts immediately. Good for supplementing Social Security.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Consumer Staples Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Recession-Proof Income Portfolio</CardTitle>
            <CardDescription>$25K investment | 2.8% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Procter & Gamble (PG)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Core holding, dividend king</span>
                </div>
                <span>$8,000 | 32%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Coca-Cola (KO)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Higher yield, global reach</span>
                </div>
                <span>$6,000 | 24%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">PepsiCo (PEP)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Snacks diversification</span>
                </div>
                <span>$5,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Kimberly-Clark (KMB)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">3.5% yield boost</span>
                </div>
                <span>$4,000 | 16%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Mondelez (MDLZ)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">International snacks growth</span>
                </div>
                <span>$2,000 | 8%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$700</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">2.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expected Growth</p>
                  <p className="font-semibold">5-7%/yr</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Build Your Recession-Proof Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Consumer staples provide the most reliable dividends. Start with PG for quality, add KO for yield, mix
              in PEP for growth. Perfect defensive holdings that never cut dividends.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/pg">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Staples →</Button>
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
                <CardDescription>Safe dividend payers to start</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-healthcare-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Healthcare Dividend Stocks</CardTitle>
                <CardDescription>Another defensive sector</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
