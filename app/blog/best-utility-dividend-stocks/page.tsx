import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, Shield } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Utility Dividend Stocks 2026: Safe 3-5% Yields',
  description: 'Top utility stocks with defensive dividends. NEE, DUK, SO, D—regulated monopolies providing safe passive income through recessions.',
}

export default function BestUtilityDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Shield className="h-3 w-3 mr-1" />
          Defensive Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Utility Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Regulated monopolies paying safe 3-5% dividends. Electric and gas
          utilities that never cut during recessions—perfect for defensive income.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Utility Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. NextEra Energy (NEE)</CardTitle>
                <CardDescription>Largest utility | Renewable energy leader</CardDescription>
              </div>
              <Badge className="bg-green-600">2.6% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$140B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">10.5%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">55%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Years</p>
                <p className="font-semibold">29</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Largest electric utility in U.S. Parent of Florida Power & Light (FPL) and NextEra Energy Resources
              (world's largest producer of wind and solar energy). 29 consecutive years of dividend increases with
              10.5% average annual growth—fastest growing utility dividend. Lower current yield but superior growth.
              Best utility stock for growth-oriented dividend investors.
            </p>

            <Link href="/stocks/nee">
              <Button variant="outline" size="sm">Calculate NEE Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Duke Energy (DUK)</CardTitle>
                <CardDescription>Southeast monopoly | 98 years of dividends</CardDescription>
              </div>
              <Badge className="bg-blue-600">4.2% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$85B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">History</p>
                <p className="font-semibold">98 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Customers</p>
                <p className="font-semibold">8.2M</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Safety</p>
                <p className="font-semibold text-green-600">A</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Serves 8.2 million customers across 6 Southeast states (Carolinas, Florida, Indiana, Ohio, Kentucky).
              98 consecutive years of dividends—never missed a payment since 1926. Regulated monopoly = guaranteed
              returns on capital. Steady 2-3% annual dividend growth. Rock-solid for conservative income investors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. Southern Company (SO)</CardTitle>
                <CardDescription>Deep South utility | Dividend aristocrat</CardDescription>
              </div>
              <Badge className="bg-purple-600">3.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Electric utility serving Georgia, Alabama, Mississippi, and parts of Florida and Illinois. 9 million
              customers. Dividend aristocrat with 23 consecutive years of increases. Conservative management focused
              on dividend safety. Major nuclear power operator. Ideal for income-focused retirees.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top Utility Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Region</th>
                    <th className="text-left p-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">NextEra Energy (NEE)</td><td className="p-2 text-right">2.6%</td><td className="p-2">Florida</td><td className="p-2"><Badge variant="outline" className="text-green-600">Fast</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Duke Energy (DUK)</td><td className="p-2 text-right">4.2%</td><td className="p-2">Southeast</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Southern Company (SO)</td><td className="p-2 text-right">3.8%</td><td className="p-2">Deep South</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Dominion Energy (D)</td><td className="p-2 text-right">4.9%</td><td className="p-2">Mid-Atlantic</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">American Electric (AEP)</td><td className="p-2 text-right">3.7%</td><td className="p-2">Midwest</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Exelon (EXC)</td><td className="p-2 text-right">3.5%</td><td className="p-2">Northeast</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Xcel Energy (XEL)</td><td className="p-2 text-right">3.3%</td><td className="p-2">Plains</td><td className="p-2"><Badge variant="outline" className="text-green-600">Fast</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">WEC Energy (WEC)</td><td className="p-2 text-right">3.6%</td><td className="p-2">Wisconsin</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Consolidated Edison (ED)</td><td className="p-2 text-right">3.4%</td><td className="p-2">New York</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr><td className="p-2">Public Service Enterprise (PEG)</td><td className="p-2 text-right">3.1%</td><td className="p-2">New Jersey</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Complete Utility Stock Analysis"
          description="20 utilities ranked by dividend safety, growth, and yield with buy/sell recommendations"
          buttonText="Download Free Guide"
          source="utility_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Utilities for Dividend Income?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Regulated Monopolies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Utilities have government-granted monopolies in their service territories. Only one company can provide
                electricity to your home. No competition = stable profits.
              </p>
              <p className="text-sm font-semibold mb-2">Benefits:</p>
              <ul className="text-xs space-y-1">
                <li>• Guaranteed profit margins (10-12%)</li>
                <li>• Predictable revenue streams</li>
                <li>• Low bankruptcy risk</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recession-Proof</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                People need electricity and heat in good times and bad. Utilities never cut dividends in 2008 or 2020
                recessions. Usage barely declined.
              </p>
              <p className="text-sm font-semibold mb-2">Track Record:</p>
              <ul className="text-xs space-y-1">
                <li>• 0 dividend cuts in 2008-2009</li>
                <li>• 0 dividend cuts in 2020 pandemic</li>
                <li>• 50+ year payment histories common</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inflation Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Utilities can pass rising costs to customers through regulatory rate increases. Inflation = higher
                dividends over time.
              </p>
              <p className="text-sm font-semibold mb-2">Rate Mechanisms:</p>
              <ul className="text-xs space-y-1">
                <li>• 2-3% annual rate increases typical</li>
                <li>• Fuel cost pass-through clauses</li>
                <li>• Dividend growth keeps pace with inflation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Growth vs Income: Which Utilities?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Growth-Focused Utilities</CardTitle>
              <Badge variant="outline" className="text-green-600">Faster Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Lower current yields (2.5-3.5%) but faster dividend growth (7-10% annually). Best for investors
                with 10+ year time horizons who want growing income.
              </p>

              <p className="text-sm font-semibold mb-2">Top Picks:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>NextEra Energy (NEE)</span>
                  <span className="text-green-600">10.5% growth</span>
                </li>
                <li className="flex justify-between">
                  <span>Xcel Energy (XEL)</span>
                  <span className="text-green-600">6.8% growth</span>
                </li>
                <li className="flex justify-between">
                  <span>WEC Energy (WEC)</span>
                  <span className="text-green-600">7.2% growth</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Example: NEE's 2.6% yield grows to 6.7% yield-on-cost in 10 years at 10% growth rate.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Income-Focused Utilities</CardTitle>
              <Badge variant="outline" className="text-blue-600">Higher Yield</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Higher current yields (4-5%) but slower dividend growth (2-3% annually). Best for retirees who need
                income now and want safety.
              </p>

              <p className="text-sm font-semibold mb-2">Top Picks:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>Dominion Energy (D)</span>
                  <span className="text-blue-600">4.9% yield</span>
                </li>
                <li className="flex justify-between">
                  <span>Duke Energy (DUK)</span>
                  <span className="text-blue-600">4.2% yield</span>
                </li>
                <li className="flex justify-between">
                  <span>Southern Company (SO)</span>
                  <span className="text-blue-600">3.8% yield</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Example: DUK's 4.2% yield provides $4,200 annual income on $100K investment immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Utility Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced Utility Income Portfolio</CardTitle>
            <CardDescription>$40K investment | 3.6% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">NextEra Energy (NEE)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Growth leader</span>
                </div>
                <span>$12,000 | 30%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Duke Energy (DUK)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">High yield</span>
                </div>
                <span>$10,000 | 25%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Southern Company (SO)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Aristocrat safety</span>
                </div>
                <span>$8,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">American Electric (AEP)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Midwest exposure</span>
                </div>
                <span>$6,000 | 15%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Xcel Energy (XEL)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Renewable growth</span>
                </div>
                <span>$4,000 | 10%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$1,440</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">3.6%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expected Growth</p>
                  <p className="font-semibold">5.5%/yr</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Build Your Defensive Dividend Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Utility stocks provide recession-proof dividends that grow with inflation. Start with NEE for growth,
              add DUK for yield, diversify across regions. Perfect core holdings for any dividend portfolio.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/nee">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Utilities →</Button>
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
                <CardDescription>Start with safe dividend payers</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Growth Stocks</CardTitle>
                <CardDescription>Fastest growing utility dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
