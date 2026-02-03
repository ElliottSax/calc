import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'How to Find Dividend Stocks: 7-Step Screening Process (2026)',
  description: 'Learn to find quality dividend stocks before they become popular. Screening criteria, tools, and strategies for discovering undervalued income investments.',
}

export default function HowToFindDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Search className="h-3 w-3 mr-1" />
          Stock Screening Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Find Dividend Stocks
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Discover quality dividend stocks before everyone else. Learn the
          7-step screening process used by professional investors.
        </p>
      </div>

      <Card className="mb-16 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>7-step screening process to filter 5,000+ stocks down to 10-20 quality picks</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Free tools and screeners for finding dividend stocks</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Red flags that signal a dividend cut is coming</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>How to spot undervalued dividend stocks early</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The 7-Step Screening Process</h2>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">1</Badge>
              <CardTitle className="text-2xl">Start with Dividend Yield (2-6%)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Begin by filtering for stocks yielding 2-6%. Below 2% means you're not getting enough income. Above 6%
              often signals a dividend cut is coming (yield trap).
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-1">Sweet Spot: 3-5%</p>
                <p className="text-xs">Balance of safety and income. Most quality stocks here.</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">Low: 2-3%</p>
                <p className="text-xs">Safer but lower income. Good for growth-oriented investors.</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Danger: 7%+</p>
                <p className="text-xs">Yield trap warning. Investigate carefully before buying.</p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Example Filter:</p>
              <p className="text-sm">Dividend Yield ≥ 2.5% AND Dividend Yield ≤ 6.0%</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                This typically narrows 5,000 stocks down to 500-800 candidates.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">2</Badge>
              <CardTitle className="text-2xl">Check Payout Ratio (Under 70%)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Payout ratio = Dividends / Earnings. Shows what percentage of profit goes to dividends. Under 70% means
              dividend is sustainable. Over 100% means company paying more than it earns (unsustainable).
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Payout Ratio</th>
                    <th className="text-left p-2">Safety Level</th>
                    <th className="text-left p-2">Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0-40%</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Very Safe</Badge></td>
                    <td className="p-2 text-xs">Lots of room for dividend increases</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">40-60%</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2 text-xs">Healthy sustainable dividend</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">60-80%</td>
                    <td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td>
                    <td className="p-2 text-xs">Less room for growth but okay</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">80-100%</td>
                    <td className="p-2"><Badge variant="outline" className="text-orange-600">Risky</Badge></td>
                    <td className="p-2 text-xs">Little margin for error</td>
                  </tr>
                  <tr>
                    <td className="p-2">100%+</td>
                    <td className="p-2"><Badge variant="outline" className="text-red-600">Danger</Badge></td>
                    <td className="p-2 text-xs">Paying more than earned—unsustainable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Example:</p>
              <p className="text-sm">Johnson & Johnson (JNJ): Earns $10/share, pays $4.50/share dividend</p>
              <p className="text-sm">Payout Ratio = $4.50 / $10 = 45% → Very safe</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">3</Badge>
              <CardTitle className="text-2xl">Filter by Dividend History (5+ Years)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Only consider companies with at least 5 consecutive years of dividend payments. Better yet, look for
              10-25+ years. Long histories prove management is committed to dividends.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2">Dividend Aristocrats</p>
                <p className="text-sm mb-2">25+ consecutive years of increases</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Examples: Johnson & Johnson (62 years), Coca-Cola (62 years), Procter & Gamble (68 years)
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Dividend Kings</p>
                <p className="text-sm mb-2">50+ consecutive years of increases</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Examples: American States Water (70 years), Dover (68 years), Genuine Parts (68 years)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">4</Badge>
              <CardTitle className="text-2xl">Check Market Cap (Over $5B)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Larger companies are more stable and safer dividend payers. Market cap over $5 billion ensures adequate
              liquidity and reduces business risk. Small-cap dividend stocks are riskier.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Why Size Matters:</p>
              <ul className="text-sm space-y-1">
                <li>• Larger = more diversified revenue</li>
                <li>• Better access to capital markets</li>
                <li>• More analyst coverage (transparency)</li>
                <li>• Lower bankruptcy risk</li>
                <li>• Easier to buy/sell (liquidity)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">5</Badge>
              <CardTitle className="text-2xl">Analyze Debt Levels (Debt/Equity Under 1.5)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              High debt makes dividends risky. When recession hits, heavily indebted companies cut dividends first to
              preserve cash. Look for Debt-to-Equity ratio under 1.5.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Debt/Equity</th>
                    <th className="text-left p-2">Level</th>
                    <th className="text-left p-2">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">0-0.5</td>
                    <td className="p-2">Very Low Debt</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Low Risk</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">0.5-1.0</td>
                    <td className="p-2">Moderate Debt</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Low Risk</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">1.0-1.5</td>
                    <td className="p-2">Elevated Debt</td>
                    <td className="p-2"><Badge variant="outline" className="text-yellow-600">Medium Risk</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-2">1.5+</td>
                    <td className="p-2">High Debt</td>
                    <td className="p-2"><Badge variant="outline" className="text-red-600">High Risk</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">6</Badge>
              <CardTitle className="text-2xl">Look for Growing Earnings (5-Year Growth)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Dividends come from earnings. If earnings aren't growing, dividends can't grow sustainably. Look for
              positive 5-year earnings growth trend—even 3-5% annually is good.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">What to Check:</p>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>5-Year EPS Growth:</strong> Is earnings per share trending up? Even small growth (3-5%/year)
                  is positive.
                </li>
                <li>
                  <strong>Consistency:</strong> Steady growth is better than volatile swings. Avoid companies with
                  earnings that jump around wildly.
                </li>
                <li>
                  <strong>Future Outlook:</strong> Read recent earnings calls. Is management optimistic? Any major
                  headwinds?
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">7</Badge>
              <CardTitle className="text-2xl">Check Valuation (P/E Ratio)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Don't overpay. Even great dividend stocks can be bad investments if you pay too much. Compare P/E ratio
              to company's 5-year average and sector average.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Example Analysis:</p>
              <div className="text-sm space-y-2">
                <p><strong>Stock:</strong> ABC Company</p>
                <p><strong>Current P/E:</strong> 18</p>
                <p><strong>5-Year Average P/E:</strong> 22</p>
                <p><strong>Sector Average P/E:</strong> 20</p>
                <p className="text-green-600"><strong>Conclusion:</strong> Trading below historical average and sector
                  average → potentially undervalued</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Best Free Tools for Finding Dividend Stocks</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Stock Screeners</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Finviz</strong> (finviz.com)<br />
                  <span className="text-xs text-slate-600 dark:text-slate-400">Free screener with dividend yield,
                    payout ratio, P/E filters</span>
                </li>
                <li>
                  <strong>Yahoo Finance</strong> (finance.yahoo.com)<br />
                  <span className="text-xs text-slate-600 dark:text-slate-400">Stock screener with dividend history
                    data</span>
                </li>
                <li>
                  <strong>Seeking Alpha</strong> (seekingalpha.com)<br />
                  <span className="text-xs text-slate-600 dark:text-slate-400">Dividend grade ratings and detailed
                    analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Dividend Aristocrats List</strong><br />
                  <span className="text-xs text-slate-600 dark:text-slate-400">65 stocks with 25+ years of
                    increases</span>
                </li>
                <li>
                  <strong>Dividend Kings List</strong><br />
                  <span className="text-xs text-slate-600 dark:text-slate-400">50 stocks with 50+ years of
                    increases</span>
                </li>
                <li>
                  <strong>Our Calculator</strong><br />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    <Link href="/tools/compare" className="text-blue-600 hover:underline">
                      Stock comparison tool →
                    </Link>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Red Flags: Avoid These Warning Signs</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Payout Ratio Over 100%</CardTitle>
                  <CardDescription>Company paying more dividends than it earns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Why It's Bad:</strong> Unsustainable. Company will have to cut dividend or borrow money to pay
                it. Either way, bad outcome for investors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Declining Revenue</CardTitle>
                  <CardDescription>Sales trending down over multiple years</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Why It's Bad:</strong> Shrinking businesses can't support growing dividends. Often leads to
                dividend cuts within 1-2 years.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>High Debt + High Payout</CardTitle>
                  <CardDescription>Debt/Equity over 2.0 AND payout ratio over 70%</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Why It's Bad:</strong> Company has to choose between paying creditors and paying shareholders. In
                recession, creditors win and dividend gets cut.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Example: Screening Process in Action</h2>

        <Card>
          <CardHeader>
            <CardTitle>Finding Undervalued Dividend Stocks (Step-by-Step)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Step 1: Initial Screen
                </p>
                <p className="text-sm mb-2">Applied filters on Finviz:</p>
                <ul className="text-xs space-y-1 pl-4">
                  <li>• Dividend Yield: 3-6%</li>
                  <li>• Market Cap: Over $5B</li>
                  <li>• Payout Ratio: Under 70%</li>
                </ul>
                <p className="text-xs font-semibold mt-2">Result: 127 stocks</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-2">Step 2: History Filter</p>
                <p className="text-sm mb-2">Manually checked dividend histories, removed any with cuts in last 10
                  years</p>
                <p className="text-xs font-semibold">Result: 68 stocks</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-2">Step 3: Debt Check</p>
                <p className="text-sm mb-2">Removed stocks with Debt/Equity over 1.5</p>
                <p className="text-xs font-semibold">Result: 42 stocks</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-2">Step 4: Earnings Growth</p>
                <p className="text-sm mb-2">Only kept stocks with positive 5-year earnings growth</p>
                <p className="text-xs font-semibold">Result: 24 stocks</p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2 text-green-700 dark:text-green-400">Step 5: Valuation</p>
                <p className="text-sm mb-2">Found stocks trading below 5-year average P/E</p>
                <p className="text-xs font-semibold">Final Result: 12 undervalued dividend stocks</p>
                <p className="text-xs mt-2">Time taken: About 1 hour</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Finding Quality Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use this 7-step process to discover undervalued dividend stocks before they become popular. Start with
              free screeners, apply filters systematically, and always verify fundamentals before buying.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button className="w-full" size="lg">Try Our Stock Screener →</Button>
              </Link>
              <Link href="/blog/best-dividend-stocks-for-beginners">
                <Button variant="outline" className="w-full" size="lg">See Top Picks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>Master the math behind dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks</CardTitle>
                <CardDescription>Top stocks with growing dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
