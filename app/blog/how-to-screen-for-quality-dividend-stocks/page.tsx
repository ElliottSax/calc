import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Filter, CheckCircle, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'How to Screen for Quality Dividend Stocks: Advanced Guide (2026)',
  description: 'Master advanced stock screening techniques. Find undervalued dividend stocks using multi-factor analysis and professional screening criteria.',
}

export default function HowToScreenForQualityDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Filter className="h-3 w-3 mr-1" />
          Advanced Screening
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Screen for Quality Dividend Stocks
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Advanced screening techniques to find undervalued dividend stocks.
          Go beyond basic filters with multi-factor analysis and scoring systems.
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
              <span>Multi-factor screening system that professionals use</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>How to build a custom scoring system for ranking stocks</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Advanced filters that separate great stocks from good ones</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Real screening workflow from 5,000 stocks to final 10</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Professional Screening Workflow</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Funnel Approach: 5,000 → 500 → 50 → 10</CardTitle>
            <CardDescription>Layer filters to narrow down systematically</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">Stage 1: Basic Filters</p>
                  <Badge>5,000 → 500 stocks</Badge>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Dividend Yield: 2.5-7%</li>
                  <li>• Market Cap: Over $2B</li>
                  <li>• Average Volume: Over 100k shares/day</li>
                  <li>• Listed on major exchange (NYSE, NASDAQ)</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">Stage 2: Quality Filters</p>
                  <Badge>500 → 50 stocks</Badge>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Payout Ratio: Under 70%</li>
                  <li>• Dividend History: 5+ years of payments</li>
                  <li>• Debt/Equity: Under 2.0</li>
                  <li>• Positive free cash flow</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">Stage 3: Excellence Filters</p>
                  <Badge>50 → 10 stocks</Badge>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• 5-year earnings growth: Positive</li>
                  <li>• Return on Equity: Over 15%</li>
                  <li>• Current ratio: Over 1.5</li>
                  <li>• Analyst sentiment: Hold or Buy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Advanced Screening Criteria</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Return on Equity (ROE)</CardTitle>
            <CardDescription>Measures how efficiently company uses shareholder money</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              ROE shows profit generated per dollar of shareholder equity. High ROE = efficient, profitable business.
              Essential for sustainable dividend growth.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">ROE = (Net Income / Shareholder Equity) × 100</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Example: $10B income / $50B equity = 20% ROE
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">ROE Range</th>
                    <th className="text-left p-2">Quality</th>
                    <th className="text-left p-2">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">20%+</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Excellent</Badge></td>
                    <td className="p-2 text-xs">Top-tier efficiency. Sustainable dividend growth.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">15-20%</td>
                    <td className="p-2"><Badge variant="outline" className="text-green-600">Good</Badge></td>
                    <td className="p-2 text-xs">Above average. Can support dividend increases.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">10-15%</td>
                    <td className="p-2"><Badge variant="outline" className="text-yellow-600">Average</Badge></td>
                    <td className="p-2 text-xs">Acceptable but not impressive.</td>
                  </tr>
                  <tr>
                    <td className="p-2">Under 10%</td>
                    <td className="p-2"><Badge variant="outline" className="text-red-600">Weak</Badge></td>
                    <td className="p-2 text-xs">Poor capital efficiency. Dividend at risk.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Free Cash Flow Margin</CardTitle>
            <CardDescription>Cash profitability - more reliable than earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Shows what percentage of revenue converts to free cash. High FCF margin = company generates lots of cash
              to pay dividends, invest, and buy back stock.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">FCF Margin = (Free Cash Flow / Revenue) × 100</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-1">15%+ Margin</p>
                <p className="text-xs">Cash machines. Tech and consumer staples often here.</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">8-15% Margin</p>
                <p className="text-xs">Solid. Most quality dividend stocks in this range.</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Under 8%</p>
                <p className="text-xs">Capital intensive. Be cautious with dividends.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Interest Coverage Ratio</CardTitle>
            <CardDescription>Can the company afford its debt?</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Measures how easily company can pay interest on debt. Low coverage = company struggles with debt →
              dividend at risk. Target: 3x or higher.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Formula:</p>
              <p className="text-sm font-mono">Interest Coverage = EBIT / Interest Expense</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Example: $10B EBIT / $1B interest = 10x coverage (very safe)
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-950 rounded">
                <span className="text-sm font-semibold">5x+</span>
                <span className="text-xs">Excellent - Can easily handle debt</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-950 rounded">
                <span className="text-sm font-semibold">2.5-5x</span>
                <span className="text-xs">Adequate - Manageable but monitor</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 dark:bg-red-950 rounded">
                <span className="text-sm font-semibold">Under 2.5x</span>
                <span className="text-xs">Danger - Dividend vulnerable to cuts</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Dividend Growth Streak</CardTitle>
            <CardDescription>Consistency matters more than you think</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Not just whether they pay dividends, but whether they increase every single year. Long streaks indicate
              management commitment and business quality.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="font-semibold mb-2">Why Streaks Matter:</p>
                <ul className="text-sm space-y-1">
                  <li>• Shows recession resilience</li>
                  <li>• Indicates management priorities</li>
                  <li>• Corporate culture of shareholder returns</li>
                  <li>• Board/CEO incentives aligned with dividends</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Screening Targets:</p>
                <ul className="text-sm space-y-1">
                  <li>• 10+ years: Good starting point</li>
                  <li>• 25+ years: Aristocrats (65 stocks)</li>
                  <li>• 50+ years: Kings (rare elite)</li>
                  <li>• Maintained through 2008 & 2020 crises</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Build a Scoring System</h2>

        <Card>
          <CardHeader>
            <CardTitle>Weighted Factor Scoring (10-Point Scale)</CardTitle>
            <CardDescription>Rank stocks objectively instead of gut feel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Factor</th>
                    <th className="text-center p-2">Weight</th>
                    <th className="text-center p-2">Excellent (2pts)</th>
                    <th className="text-center p-2">Good (1pt)</th>
                    <th className="text-center p-2">Poor (0pts)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Safety</td>
                    <td className="p-2 text-center">×3</td>
                    <td className="p-2 text-center text-xs">Payout &lt;50%</td>
                    <td className="p-2 text-center text-xs">50-70%</td>
                    <td className="p-2 text-center text-xs">&gt;70%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Yield</td>
                    <td className="p-2 text-center">×2</td>
                    <td className="p-2 text-center text-xs">4-6%</td>
                    <td className="p-2 text-center text-xs">3-4%</td>
                    <td className="p-2 text-center text-xs">&lt;3% or &gt;7%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Growth</td>
                    <td className="p-2 text-center">×2</td>
                    <td className="p-2 text-center text-xs">10%+/yr</td>
                    <td className="p-2 text-center text-xs">5-10%</td>
                    <td className="p-2 text-center text-xs">&lt;5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">History</td>
                    <td className="p-2 text-center">×2</td>
                    <td className="p-2 text-center text-xs">25+ years</td>
                    <td className="p-2 text-center text-xs">10-25 years</td>
                    <td className="p-2 text-center text-xs">&lt;10 years</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Valuation</td>
                    <td className="p-2 text-center">×1</td>
                    <td className="p-2 text-center text-xs">P/E &lt; 5yr avg</td>
                    <td className="p-2 text-center text-xs">P/E near avg</td>
                    <td className="p-2 text-center text-xs">P/E &gt; avg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="font-semibold mb-2">Example: Johnson & Johnson Score</p>
              <div className="text-sm space-y-1 mb-3">
                <p>Safety: 2 pts × 3 weight = 6 (payout ratio 45%)</p>
                <p>Yield: 1 pt × 2 weight = 2 (3.0% yield)</p>
                <p>Growth: 1 pt × 2 weight = 2 (6%/year div growth)</p>
                <p>History: 2 pts × 2 weight = 4 (62 year streak)</p>
                <p>Valuation: 1 pt × 1 weight = 1 (fair valued)</p>
              </div>
              <p className="text-sm font-semibold">Total Score: 15/20 (75%) - Buy</p>
            </div>

            <div className="mt-4 grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-center">
                <p className="font-semibold text-green-700 dark:text-green-400">15-20 points</p>
                <p className="text-xs">Strong Buy</p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded text-center">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400">10-14 points</p>
                <p className="text-xs">Consider</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded text-center">
                <p className="font-semibold text-red-700 dark:text-red-400">0-9 points</p>
                <p className="text-xs">Avoid</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Screening Example</h2>

        <Card>
          <CardHeader>
            <CardTitle>Finding Consumer Staples Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Step 1</Badge>
                  <p className="font-semibold">Start with Sector Filter</p>
                </div>
                <p className="text-sm">Filter: Sector = Consumer Staples</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Result: 210 stocks</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Step 2</Badge>
                  <p className="font-semibold">Apply Basic Filters</p>
                </div>
                <p className="text-sm">Yield 2-5%, Market Cap &gt;$10B, Div History &gt;10 years</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Result: 32 stocks</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Step 3</Badge>
                  <p className="font-semibold">Quality Filters</p>
                </div>
                <p className="text-sm">ROE &gt;15%, Payout &lt;60%, Debt/Equity &lt;1.0</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Result: 12 stocks</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">Step 4</Badge>
                  <p className="font-semibold">Manual Review & Scoring</p>
                </div>
                <p className="text-sm mb-2">Score each of 12 stocks on 5 factors. Top 5 scores:</p>
                <ul className="text-xs space-y-1">
                  <li>1. Procter & Gamble (PG) - 17/20</li>
                  <li>2. Colgate-Palmolive (CL) - 16/20</li>
                  <li>3. Coca-Cola (KO) - 16/20</li>
                  <li>4. PepsiCo (PEP) - 15/20</li>
                  <li>5. Mondelez (MDLZ) - 14/20</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Master Advanced Stock Screening</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use multi-factor analysis and scoring systems to find the best dividend stocks. Layer filters, analyze
              quality metrics, and rank objectively. This systematic approach beats gut-feel investing every time.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button className="w-full" size="lg">Screen Stocks Now →</Button>
              </Link>
              <Link href="/blog/how-to-find-dividend-stocks">
                <Button variant="outline" className="w-full" size="lg">Basic Screening Guide →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-analyze-dividend-safety">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Analyze Dividend Safety</CardTitle>
                <CardDescription>Deep dive on safety metrics</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks</CardTitle>
                <CardDescription>Our top picks for 2026</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
