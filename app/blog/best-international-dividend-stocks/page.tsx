import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Globe } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best International Dividend Stocks 2026: Global Income',
  description: 'Top foreign dividend stocks with high yields. European, Asian, and emerging market companies paying 4-8% dividends for global diversification.',
}

export default function BestInternationalDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Globe className="h-3 w-3 mr-1" />
          Global Dividend Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best International Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          High-yield foreign stocks for global diversification. European, Asian,
          and emerging market companies paying 4-8% dividends with currency exposure.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 International Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. Nestlé (NSRGY)</CardTitle>
                <CardDescription>Swiss consumer goods | 27 years of increases</CardDescription>
              </div>
              <Badge className="bg-green-600">3.2% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$310B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Country</p>
                <p className="font-semibold">Switzerland</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">27 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Brands</p>
                <p className="font-semibold">2,000+</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              World's largest food company with 2,000+ brands including Nescafé, KitKat, Gerber, Purina, Poland Spring,
              DiGiorno. 27 consecutive years of dividend increases. Operates in 186 countries—true global diversification.
              Swiss franc exposure hedges USD weakness. Recession-proof consumer staples business. ADR trades on U.S.
              exchanges (ticker: NSRGY). Best international dividend stock for conservative investors.
            </p>

            <Link href="/stocks/nsrgy">
              <Button variant="outline" size="sm">Calculate NSRGY Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Unilever (UL)</CardTitle>
                <CardDescription>British-Dutch consumer goods | Global brands</CardDescription>
              </div>
              <Badge className="bg-blue-600">3.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$145B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Countries</p>
                <p className="font-semibold">190</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Daily Reach</p>
                <p className="font-semibold">3.4B people</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Emerging Mkts</p>
                <p className="font-semibold">58%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Global consumer goods giant with brands like Dove, Hellmann's, Ben & Jerry's, Axe, Lipton, Vaseline.
              Reaches 3.4 billion people daily across 190 countries. 58% of revenue from emerging markets (growth
              tailwind). Higher yield than U.S. consumer staples. Dual-listed in UK and Netherlands. ADR on NYSE
              (ticker: UL). Excellent geographic diversification.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. BP plc (BP)</CardTitle>
                <CardDescription>British oil major | High yield</CardDescription>
              </div>
              <Badge className="bg-purple-600">5.2% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              One of world's largest oil companies alongside Shell, ExxonMobil, and Chevron. Integrated energy company
              with exploration, production, refining, and retail. Recovered dividend after 2020 cut—now paying 5.2%.
              Investing heavily in renewables (offshore wind, hydrogen, EV charging). Higher yield than U.S. energy
              majors. Good value play with energy transition upside.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: International Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Country</th>
                    <th className="text-left p-2">Sector</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Nestlé (NSRGY)</td><td className="p-2 text-right">3.2%</td><td className="p-2">Switzerland</td><td className="p-2">Consumer Staples</td></tr>
                  <tr className="border-b"><td className="p-2">Unilever (UL)</td><td className="p-2 text-right">3.8%</td><td className="p-2">UK/Netherlands</td><td className="p-2">Consumer Staples</td></tr>
                  <tr className="border-b"><td className="p-2">BP plc (BP)</td><td className="p-2 text-right">5.2%</td><td className="p-2">UK</td><td className="p-2">Energy</td></tr>
                  <tr className="border-b"><td className="p-2">Shell (SHEL)</td><td className="p-2 text-right">4.0%</td><td className="p-2">UK</td><td className="p-2">Energy</td></tr>
                  <tr className="border-b"><td className="p-2">TotalEnergies (TTE)</td><td className="p-2 text-right">4.8%</td><td className="p-2">France</td><td className="p-2">Energy</td></tr>
                  <tr className="border-b"><td className="p-2">Diageo (DEO)</td><td className="p-2 text-right">2.5%</td><td className="p-2">UK</td><td className="p-2">Beverages</td></tr>
                  <tr className="border-b"><td className="p-2">HSBC (HSBC)</td><td className="p-2 text-right">6.8%</td><td className="p-2">UK</td><td className="p-2">Banking</td></tr>
                  <tr className="border-b"><td className="p-2">BHP Group (BHP)</td><td className="p-2 text-right">5.4%</td><td className="p-2">Australia</td><td className="p-2">Mining</td></tr>
                  <tr className="border-b"><td className="p-2">Rio Tinto (RIO)</td><td className="p-2 text-right">6.2%</td><td className="p-2">UK/Australia</td><td className="p-2">Mining</td></tr>
                  <tr><td className="p-2">British American Tobacco (BTI)</td><td className="p-2 text-right">7.8%</td><td className="p-2">UK</td><td className="p-2">Tobacco</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our International Dividend Watchlist"
          description="30+ foreign stocks analyzed with yields, currency risks, and tax implications"
          buttonText="Download Watchlist"
          source="international_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why International Dividend Stocks?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Higher Yields</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Foreign stocks often yield 1-3% more than U.S. equivalents. European stocks average 3-5% vs 2-3% for
                U.S. HSBC yields 6.8% vs 3% for U.S. banks. British American Tobacco yields 7.8%.
              </p>
              <p className="text-sm font-semibold mb-2">Examples:</p>
              <ul className="text-xs space-y-1">
                <li>• HSBC: 6.8% (vs JPM 2.4%)</li>
                <li>• Shell: 4.0% (vs XOM 3.3%)</li>
                <li>• Unilever: 3.8% (vs PG 2.4%)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Geographic Diversification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Reduce portfolio concentration in U.S. economy and dollar. International stocks provide exposure to
                European, Asian, and emerging market growth.
              </p>
              <p className="text-sm font-semibold mb-2">Benefits:</p>
              <ul className="text-xs space-y-1">
                <li>• Currency diversification</li>
                <li>• Different economic cycles</li>
                <li>• Emerging market growth</li>
                <li>• Geopolitical hedging</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Many international dividend payers are world-class companies with global operations. Nestlé, Unilever,
                Shell are as high-quality as any U.S. stock.
              </p>
              <p className="text-sm font-semibold mb-2">Quality Metrics:</p>
              <ul className="text-xs space-y-1">
                <li>• 20+ year dividend histories</li>
                <li>• Fortress balance sheets</li>
                <li>• Global brand portfolios</li>
                <li>• Recession-tested</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Considerations for U.S. Investors</h2>

        <Card className="border-2 border-yellow-300 dark:border-yellow-700">
          <CardHeader>
            <CardTitle>Foreign Dividend Withholding Tax</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold mb-2">Withholding Rates by Country</p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>UK:</strong> 0% withholding (tax treaty)</li>
                  <li>• <strong>Canada:</strong> 15% withholding</li>
                  <li>• <strong>Germany:</strong> 15% withholding</li>
                  <li>• <strong>France:</strong> 12.8% withholding</li>
                  <li>• <strong>Switzerland:</strong> 15% withholding (reducible to 0% with form)</li>
                  <li>• <strong>Australia:</strong> 0% withholding (treaty)</li>
                  <li>• <strong>Japan:</strong> 10% withholding</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2">Foreign Tax Credit</p>
                <p>U.S. investors can claim foreign tax credit on Form 1116 to recover withheld taxes. Hold
                international stocks in taxable accounts (not IRAs) to claim the credit.</p>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Best Countries for U.S. Investors</p>
                <p><strong>UK and Australia:</strong> Zero withholding = no tax drag. British stocks like BP, Shell,
                HSBC, Unilever pay full dividends to U.S. investors. Australia similar (BHP, Rio Tinto).</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample International Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Global Diversified Income Portfolio</CardTitle>
            <CardDescription>$35K investment | 4.2% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Nestlé (NSRGY)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Swiss quality, consumer staples</span>
                </div>
                <span>$10,000 | 29%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Shell (SHEL)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">UK energy, 0% withholding</span>
                </div>
                <span>$7,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">HSBC (HSBC)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">UK bank, 6.8% yield</span>
                </div>
                <span>$7,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">BHP Group (BHP)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Australian mining, commodities</span>
                </div>
                <span>$6,000 | 17%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Diageo (DEO)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">UK spirits, premium brands</span>
                </div>
                <span>$5,000 | 14%</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold mb-2">Portfolio Stats:</p>
                <div className="text-sm space-y-1">
                  <p>Annual Income: <span className="font-semibold">$1,470</span></p>
                  <p>Average Yield: <span className="font-semibold">4.2%</span></p>
                  <p>Countries: <span className="font-semibold">5</span></p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold mb-2">Currency Exposure:</p>
                <div className="text-sm space-y-1">
                  <p>USD: <span className="font-semibold">0%</span></p>
                  <p>GBP: <span className="font-semibold">40%</span></p>
                  <p>CHF/EUR/AUD: <span className="font-semibold">60%</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Go Global with Your Dividends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              International stocks offer higher yields and geographic diversification. Start with Nestlé for safety,
              add UK stocks for zero withholding, mix in emerging market exposure. Perfect for reducing U.S. dollar
              concentration.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/nsrgy">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare International Stocks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-canadian-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Canadian Dividend Stocks</CardTitle>
                <CardDescription>High-yield neighbors to the north</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide</CardTitle>
                <CardDescription>Foreign tax credits explained</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
