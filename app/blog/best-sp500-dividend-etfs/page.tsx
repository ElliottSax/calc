import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, ArrowRight, Star, Target, Award, PieChart, Percent, Calendar } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best S&P 500 Dividend ETFs: Top 7 Funds Ranked (2026)',
  description: 'Comprehensive ranking of the best S&P 500 dividend ETFs for 2026 including SDY, SPYD, NOBL, DVY, SCHD, and more. Compare yields, expense ratios, holdings, and strategies.',
  keywords: ['S&P 500 dividend ETF', 'best dividend ETF 2026', 'SDY ETF', 'SPYD ETF', 'NOBL ETF', 'DVY ETF', 'dividend aristocrats ETF', 'high yield S&P 500 ETF'],
}

export default function BestSP500DividendETFs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Award className="h-3 w-3 mr-1" />
          Rankings
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best S&P 500 Dividend ETFs: Top 7 Funds Ranked
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Not all S&P 500 dividend ETFs are created equal. We ranked the top 7 by yield, quality,
          performance, and cost to help you pick the right one.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>18 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Ranking Overview Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison: All 7 ETFs</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Rank</th>
                    <th className="text-left py-3 font-semibold">ETF</th>
                    <th className="text-right py-3 font-semibold">Yield</th>
                    <th className="text-right py-3 font-semibold">Expense</th>
                    <th className="text-right py-3 font-semibold">Holdings</th>
                    <th className="text-right py-3 font-semibold">5Y Return</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rank: '1', name: 'SCHD', yield: '3.45%', expense: '0.06%', holdings: '103', return5y: '11.5%' },
                    { rank: '2', name: 'NOBL', yield: '2.05%', expense: '0.35%', holdings: '68', return5y: '10.2%' },
                    { rank: '3', name: 'SDY', yield: '2.52%', expense: '0.35%', holdings: '136', return5y: '9.8%' },
                    { rank: '4', name: 'SPYD', yield: '4.35%', expense: '0.07%', holdings: '80', return5y: '8.4%' },
                    { rank: '5', name: 'DVY', yield: '3.62%', expense: '0.38%', holdings: '100', return5y: '8.9%' },
                    { rank: '6', name: 'DGRO', yield: '2.32%', expense: '0.08%', holdings: '420', return5y: '10.8%' },
                    { rank: '7', name: 'RDVY', yield: '1.72%', expense: '0.50%', holdings: '50', return5y: '13.1%' },
                  ].map((etf, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3">
                        <Badge variant={i === 0 ? 'default' : 'outline'} className="text-xs">
                          #{etf.rank}
                        </Badge>
                      </td>
                      <td className="py-3 font-bold text-blue-600">{etf.name}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{etf.yield}</td>
                      <td className="py-3 text-right">{etf.expense}</td>
                      <td className="py-3 text-right">{etf.holdings}</td>
                      <td className="py-3 text-right font-medium">{etf.return5y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Data as of Q1 2026. Returns are annualized total returns including reinvested dividends.</p>
          </CardContent>
        </Card>
      </section>

      {/* #1 SCHD */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-lg font-black text-yellow-900">1</span>
          </div>
          <h2 className="text-3xl font-bold">SCHD - Schwab U.S. Dividend Equity ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">3.45%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.06%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$63B+</p></div>
              <div><p className="text-xs text-slate-500">Div Growth</p><p className="font-bold text-blue-600">12.1%</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              SCHD earns the top spot through its exceptional combination of quality screening, dividend growth,
              and rock-bottom costs. Its Dow Jones U.S. Dividend 100 Index methodology filters for cash flow,
              ROE, yield, and 5-year dividend growth, resulting in a portfolio of financially strong companies.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">Quality Focused</Badge>
              <Badge variant="outline">Best Dividend Growth</Badge>
              <Badge variant="outline">Ultra-Low Cost</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* #2 NOBL */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
            <span className="text-lg font-black text-slate-700">2</span>
          </div>
          <h2 className="text-3xl font-bold">NOBL - ProShares S&P 500 Dividend Aristocrats</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">2.05%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.35%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$12B+</p></div>
              <div><p className="text-xs text-slate-500">Min Streak</p><p className="font-bold text-blue-600">25 Years</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              NOBL holds only S&P 500 companies that have increased their dividend for at least 25 consecutive
              years. This elite group of &quot;Dividend Aristocrats&quot; includes names like Johnson & Johnson, Coca-Cola,
              Procter & Gamble, and 3M. Equal weighting prevents any single stock from dominating.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">25+ Year Streaks</Badge>
              <Badge variant="outline">Equal Weighted</Badge>
              <Badge variant="outline">Highest Quality</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* #3 SDY */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
            <span className="text-lg font-black text-white">3</span>
          </div>
          <h2 className="text-3xl font-bold">SDY - SPDR S&P Dividend ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">2.52%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.35%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$22B+</p></div>
              <div><p className="text-xs text-slate-500">Min Streak</p><p className="font-bold text-blue-600">20 Years</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              SDY tracks the S&P High Yield Dividend Aristocrats Index, requiring 20+ years of consecutive
              dividend increases. Unlike NOBL, SDY weight stocks by yield rather than equally, which gives
              higher yields but more concentration in slower-growth sectors. With 136 holdings, it also
              includes some mid-cap companies that NOBL excludes.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">20+ Year Streaks</Badge>
              <Badge variant="outline">Yield-Weighted</Badge>
              <Badge variant="outline">Mid-Cap Exposure</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* #4 SPYD */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-lg font-black text-white">4</span>
          </div>
          <h2 className="text-3xl font-bold">SPYD - SPDR Portfolio S&P 500 High Dividend</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">4.35%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.07%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$7.5B+</p></div>
              <div><p className="text-xs text-slate-500">Strategy</p><p className="font-bold text-blue-600">Top 80 Yield</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              SPYD takes the simplest approach: select the 80 highest-yielding stocks in the S&P 500 and
              equal-weight them. This produces the highest yield of any S&P 500 dividend ETF at 4.35%, with
              a rock-bottom 0.07% expense ratio. The trade-off is no quality screening, which means some
              yield traps may sneak in.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">Highest Yield</Badge>
              <Badge variant="outline">Equal Weighted</Badge>
              <Badge variant="outline">Ultra-Low Cost</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <InlineSignup />

      {/* #5 DVY */}
      <section className="mb-16 mt-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-lg font-black text-white">5</span>
          </div>
          <h2 className="text-3xl font-bold">DVY - iShares Select Dividend ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">3.62%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.38%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$19B+</p></div>
              <div><p className="text-xs text-slate-500">Min Streak</p><p className="font-bold text-blue-600">5 Years</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              DVY selects 100 stocks based on dividend yield, payout ratio, and 5-year dividend growth.
              It has a strong tilt toward utilities (28%) and financials (20%), which provides high income
              but has historically lagged on total returns. The 0.38% expense ratio is one of the highest
              in this group.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">High Yield</Badge>
              <Badge variant="outline">Utility-Heavy</Badge>
              <Badge variant="outline">Income-Focused</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* #6 DGRO */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
            <span className="text-lg font-black text-white">6</span>
          </div>
          <h2 className="text-3xl font-bold">DGRO - iShares Core Dividend Growth ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">2.32%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.08%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$28B+</p></div>
              <div><p className="text-xs text-slate-500">Holdings</p><p className="font-bold text-blue-600">420</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              DGRO focuses on companies with at least 5 years of consecutive dividend growth and
              sustainable payout ratios. With 420 holdings and a 0.08% expense ratio, it provides
              broad, cost-effective exposure to dividend growers. Its tech allocation (~18%) is higher
              than most dividend ETFs, giving it more growth potential.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">Dividend Growth</Badge>
              <Badge variant="outline">Broad Exposure</Badge>
              <Badge variant="outline">Low Cost</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* #7 RDVY */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-lg font-black text-white">7</span>
          </div>
          <h2 className="text-3xl font-bold">RDVY - First Trust Rising Dividend Achievers ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">1.72%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.50%</p></div>
              <div><p className="text-xs text-slate-500">AUM</p><p className="font-bold">$10B+</p></div>
              <div><p className="text-xs text-slate-500">Strategy</p><p className="font-bold text-blue-600">Growth + Div</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              RDVY takes a unique approach, selecting 50 stocks based on rising dividends, earnings growth,
              and low debt. Despite the lowest yield on this list (1.72%), it has delivered the best total
              returns at 13.1% annualized over 5 years. The 0.50% expense ratio is the highest, but
              performance has justified the cost for growth-oriented dividend investors.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">Best Total Return</Badge>
              <Badge variant="outline">Growth + Income</Badge>
              <Badge variant="outline">Concentrated</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How to Choose */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Choose the Right One</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Want Maximum Current Yield?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Choose <strong>SPYD</strong> (4.35%) or <strong>DVY</strong> (3.62%)</p>
              <p className="text-xs text-slate-500">Best for retirees needing income now</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Want Best Dividend Growth?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Choose <strong>SCHD</strong> (12.1% annual growth)</p>
              <p className="text-xs text-slate-500">Best for long-term income compounding</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Want Highest Quality?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Choose <strong>NOBL</strong> (25+ year streaks only)</p>
              <p className="text-xs text-slate-500">Best for safety-first investors</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Want Best Total Returns?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Choose <strong>RDVY</strong> (13.1% 5Y return) or <strong>SCHD</strong> (11.5%)</p>
              <p className="text-xs text-slate-500">Best for total wealth building</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is the best S&P 500 dividend ETF overall?',
              a: 'SCHD ranks as the best overall S&P 500 dividend ETF due to its exceptional combination of quality screening, strong dividend growth (12%+), competitive yield (3.45%), and ultra-low expense ratio (0.06%). It consistently balances income, growth, and risk management.'
            },
            {
              q: 'Which S&P 500 dividend ETF has the highest yield?',
              a: 'SPYD (SPDR Portfolio S&P 500 High Dividend) offers the highest yield at approximately 4.35%. It achieves this by holding the 80 highest-yielding S&P 500 stocks. However, higher yield comes with lower total returns and no quality screening.'
            },
            {
              q: 'Are S&P 500 dividend ETFs good for retirement?',
              a: 'Yes, S&P 500 dividend ETFs are excellent retirement building blocks. They provide regular income, inflation protection through dividend growth, lower volatility than the broad market, and exposure to financially stable companies. Most retirees benefit from a combination of dividend ETFs.'
            },
            {
              q: 'Should I own multiple S&P 500 dividend ETFs?',
              a: 'Generally no. Most S&P 500 dividend ETFs have significant overlap (30-60% shared holdings). Owning two or three adds complexity without much diversification benefit. Instead, pair one S&P 500 dividend ETF with international or bond ETFs for true diversification.'
            },
            {
              q: 'How much can I earn from $100,000 in dividend ETFs?',
              a: 'At current yields: SPYD generates ~$4,350/year, SCHD ~$3,450, DVY ~$3,620, SDY ~$2,520, DGRO ~$2,320, NOBL ~$2,050, and RDVY ~$1,720. These amounts grow annually as companies raise dividends.'
            },
          ].map((faq, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Dividend ETF Income</h2>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Model how any of these ETFs could grow your dividend income over 10, 20, or 30 years
              with our free DRIP calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Dividend Growth Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'SCHD ETF Review: Complete Analysis', href: '/blog/SCHD-review-analysis', badge: 'Review' },
            { title: 'DGRO vs SCHD: Dividend Growth Showdown', href: '/blog/DGRO-vs-SCHD-comparison', badge: 'Comparison' },
            { title: 'VOO vs SCHD: Index vs Dividend ETF', href: '/blog/VOO-vs-SCHD-comparison', badge: 'Comparison' },
            { title: 'Best Vanguard Dividend ETFs Guide', href: '/blog/best-vanguard-dividend-etfs', badge: 'Guide' },
          ].map((article, i) => (
            <Link key={i} href={article.href}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <Badge variant="outline" className="mb-2">{article.badge}</Badge>
                  <h3 className="font-bold text-blue-600 dark:text-blue-400">{article.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
