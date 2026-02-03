import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, TrendingUp } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Financial Dividend Stocks 2026: Banks & Insurance Income',
  description: 'Top financial stocks paying 3-5% dividends. JPMorgan, Bank of America, Wells Fargo, and insurance companies for stable passive income.',
}

export default function BestFinancialDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Building2 className="h-3 w-3 mr-1" />
          Financial Sector Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Financial Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Banks, insurance, and asset managers paying 3-5% yields. Benefit from
          rising interest rates while earning reliable dividends.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Financial Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. JPMorgan Chase (JPM)</CardTitle>
                <CardDescription>Largest U.S. bank | 13 years of dividend growth</CardDescription>
              </div>
              <Badge className="bg-green-600">2.4% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$575B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">8.5%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">28%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Safety</p>
                <p className="font-semibold text-green-600">A</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              America's largest bank with $3.9 trillion in assets. Leader in investment banking, commercial banking,
              credit cards, and wealth management. 13 consecutive years of dividend increases. Survived 2008 financial
              crisis better than peers—acquired Bear Stearns and Washington Mutual. Benefits from higher interest rates
              with fortress balance sheet. Best-in-class bank dividend for growth-oriented investors.
            </p>

            <Link href="/stocks/jpm">
              <Button variant="outline" size="sm">Calculate JPM Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Bank of America (BAC)</CardTitle>
                <CardDescription>Second-largest bank | High sensitivity to rates</CardDescription>
              </div>
              <Badge className="bg-blue-600">2.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$320B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Deposit Base</p>
                <p className="font-semibold">$1.9T</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">9.2%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">25%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Second-largest U.S. bank with massive retail presence. Benefits most from rising rates due to huge
              low-cost deposit base ($1.9T). Merrill Lynch integration complete—now a wealth management powerhouse.
              Higher dividend growth than JPM (9.2% vs 8.5%). Lower payout ratio = more room for increases. Best bank
              stock for dividend growth potential.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. Wells Fargo (WFC)</CardTitle>
                <CardDescription>Turnaround story | Recovering dividend growth</CardDescription>
              </div>
              <Badge className="bg-purple-600">3.0% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Third-largest U.S. bank recovering from 2016 fake accounts scandal. Cut dividend 80% during pandemic but
              rebuilt capital. Now resuming buybacks and dividend increases under new management. Trading below book
              value = opportunity. Turnaround play with 3% yield and improving fundamentals. Higher risk but higher
              reward potential.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Financial Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">JPMorgan Chase (JPM)</td><td className="p-2 text-right">2.4%</td><td className="p-2">Money Center Bank</td><td className="p-2"><Badge variant="outline" className="text-green-600">Fast</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Bank of America (BAC)</td><td className="p-2 text-right">2.8%</td><td className="p-2">Money Center Bank</td><td className="p-2"><Badge variant="outline" className="text-green-600">Fast</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Wells Fargo (WFC)</td><td className="p-2 text-right">3.0%</td><td className="p-2">Money Center Bank</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Citigroup (C)</td><td className="p-2 text-right">3.6%</td><td className="p-2">Money Center Bank</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">U.S. Bancorp (USB)</td><td className="p-2 text-right">4.2%</td><td className="p-2">Regional Bank</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Truist Financial (TFC)</td><td className="p-2 text-right">4.8%</td><td className="p-2">Regional Bank</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">MetLife (MET)</td><td className="p-2 text-right">3.2%</td><td className="p-2">Life Insurance</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Prudential (PRU)</td><td className="p-2 text-right">4.5%</td><td className="p-2">Life Insurance</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Steady</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">BlackRock (BLK)</td><td className="p-2 text-right">2.5%</td><td className="p-2">Asset Manager</td><td className="p-2"><Badge variant="outline" className="text-green-600">Fast</Badge></td></tr>
                  <tr><td className="p-2">Morgan Stanley (MS)</td><td className="p-2 text-right">3.1%</td><td className="p-2">Investment Bank</td><td className="p-2"><Badge variant="outline" className="text-green-600">Fast</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Financial Sector Analysis"
          description="25+ banks and financial stocks ranked by dividend safety, growth potential, and valuation"
          buttonText="Download Free Report"
          source="financial_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Financial Sector Breakdown</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Money Center Banks</CardTitle>
              <Badge variant="outline" className="text-green-600">Best Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Largest U.S. banks: JPM, BAC, C, WFC. Diversified revenue from lending, trading, wealth management.
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Fastest dividend growth (8-10%/yr)</li>
                <li>• Benefit from rate increases</li>
                <li>• Too big to fail protection</li>
                <li>• Fortress balance sheets</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Lower current yields (2-3%)</li>
                <li>• More regulatory scrutiny</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Banks</CardTitle>
              <Badge variant="outline" className="text-blue-600">Higher Yield</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Mid-size banks: USB, TFC, PNC. Focus on specific regions with strong deposit franchises.
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Higher yields (4-5%)</li>
                <li>• Simpler business models</li>
                <li>• Strong local presence</li>
                <li>• Less regulation than big banks</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Slower dividend growth</li>
                <li>• Geographic concentration risk</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance & Asset Managers</CardTitle>
              <Badge variant="outline" className="text-purple-600">Diversification</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Life insurers (MET, PRU) and asset managers (BLK, MS). Different risk profiles than banks.
              </p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Diversify away from bank risk</li>
                <li>• Benefit from market growth</li>
                <li>• Strong cash generation</li>
                <li>• Less cyclical than banks</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Variable yields (2-4.5%)</li>
                <li>• Sensitivity to long-term rates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Financial Stocks Now?</h2>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle>Interest Rate Environment Favors Banks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Higher Net Interest Margins
                </p>
                <p className="text-sm">
                  Banks earn the spread between what they pay depositors and charge borrowers. Higher rates = wider
                  spreads = more profit. JPM's net interest income up 49% in 2023 vs 2021.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2">Post-2008 Strength</p>
                <p className="text-sm">
                  Banks required to hold 2-3x more capital than before financial crisis. Stress-tested annually. Can
                  withstand severe recession without cutting dividends. Much safer than 2006-era banks.
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <p className="font-semibold mb-2">Capital Return Programs</p>
                <p className="text-sm">
                  Major banks returning $100B+ annually via dividends + buybacks. Low payout ratios (25-35%) mean
                  plenty of room for dividend growth. Expect 8-10% annual increases for years.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Financial Sector Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Diversified Financial Income Portfolio</CardTitle>
            <CardDescription>$30K investment | 3.0% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">JPMorgan Chase (JPM)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Largest bank, best quality</span>
                </div>
                <span>$10,000 | 33%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Bank of America (BAC)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Rate sensitivity + growth</span>
                </div>
                <span>$7,000 | 23%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">U.S. Bancorp (USB)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Regional bank, higher yield</span>
                </div>
                <span>$5,000 | 17%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">BlackRock (BLK)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Asset manager diversification</span>
                </div>
                <span>$5,000 | 17%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Prudential (PRU)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Insurance, 4.5% yield</span>
                </div>
                <span>$3,000 | 10%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$900</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">3.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expected Growth</p>
                  <p className="font-semibold">8.5%/yr</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Earning Bank Dividends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Financial stocks offer dividend growth that keeps pace with inflation. Start with JPM for quality, add
              BAC for growth, diversify with regional banks and insurers. Perfect for rising rate environment.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/jpm">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Banks →</Button>
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
                <CardDescription>Fastest growing dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
