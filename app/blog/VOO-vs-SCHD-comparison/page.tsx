import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, ArrowRight, Target, PieChart, LineChart, Zap, Calendar, AlertTriangle } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'VOO vs SCHD: S&P 500 Index vs Dividend ETF Comparison (2026)',
  description: 'Comprehensive VOO vs SCHD comparison covering total returns, dividend income, risk metrics, tax efficiency, and which ETF is better for your investment goals in 2026.',
  keywords: ['VOO vs SCHD', 'S&P 500 vs dividend ETF', 'VOO or SCHD', 'index fund vs dividend fund', 'VOO SCHD comparison', 'best ETF 2026'],
}

export default function VOOvsSCHDComparison() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          ETF Head-to-Head
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          VOO vs SCHD: S&P 500 Index vs Dividend ETF
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Total market growth or dividend income? This is the most important portfolio decision
          many investors face. Here is how VOO and SCHD stack up across every metric.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>16 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Quick Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-blue-600">VOO</CardTitle>
            <CardDescription>Vanguard S&P 500 ETF</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-bold">0.03%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Yield</span><span className="font-bold">1.30%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Holdings</span><span className="font-bold">503</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">10-Year Return</span><span className="font-bold text-green-600">12.5%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AUM</span><span className="font-bold">$480B+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Strategy</span><span className="font-bold">Total Market</span></div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-green-600">SCHD</CardTitle>
            <CardDescription>Schwab U.S. Dividend Equity ETF</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-bold">0.06%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Yield</span><span className="font-bold">3.45%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Holdings</span><span className="font-bold">103</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">10-Year Return</span><span className="font-bold text-green-600">11.1%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AUM</span><span className="font-bold">$63B+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Strategy</span><span className="font-bold">Dividend Quality</span></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Verdict */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-2">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">The Quick Verdict</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Choose VOO If:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You are 10+ years from retirement</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want maximum total returns</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You do not need current income</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want broad market exposure</span></li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Choose SCHD If:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You want growing passive income</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You are building toward retirement income</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You prefer lower-volatility investments</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You want quality-screened companies</span></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Total Return Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Total Return Comparison</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Over the past decade, VOO has outperformed SCHD on total returns due to the massive
          tech rally. But the gap narrows significantly when you focus on income generation
          and risk-adjusted returns.
        </p>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Metric</th>
                    <th className="text-right py-3 font-semibold text-blue-600">VOO</th>
                    <th className="text-right py-3 font-semibold text-green-600">SCHD</th>
                    <th className="text-right py-3 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: '1-Year Total Return', voo: '12.4%', schd: '8.2%', winner: 'VOO' },
                    { metric: '5-Year Total Return', voo: '13.8%', schd: '11.5%', winner: 'VOO' },
                    { metric: '10-Year Total Return', voo: '12.5%', schd: '11.1%', winner: 'VOO' },
                    { metric: 'Current Dividend Yield', voo: '1.30%', schd: '3.45%', winner: 'SCHD' },
                    { metric: '5-Year Dividend Growth', voo: '6.2%', schd: '12.1%', winner: 'SCHD' },
                    { metric: 'Expense Ratio', voo: '0.03%', schd: '0.06%', winner: 'VOO' },
                    { metric: 'Max Drawdown (5yr)', voo: '-25.4%', schd: '-19.8%', winner: 'SCHD' },
                    { metric: 'Sharpe Ratio (5yr)', voo: '0.68', schd: '0.72', winner: 'SCHD' },
                    { metric: 'Beta', voo: '1.00', schd: '0.82', winner: 'SCHD' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.metric}</td>
                      <td className="py-3 text-right">{row.voo}</td>
                      <td className="py-3 text-right">{row.schd}</td>
                      <td className={`py-3 text-right font-bold ${row.winner === 'VOO' ? 'text-blue-600' : 'text-green-600'}`}>{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Important Context:</strong> VOO&apos;s outperformance has been heavily driven by mega-cap tech
            stocks (Apple, Microsoft, NVIDIA, etc.) that do not meet SCHD&apos;s dividend quality criteria.
            If tech underperforms going forward, the return gap could narrow or even reverse.
          </p>
        </div>
      </section>

      {/* Income Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Income Generation: The Real Difference</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          This is where the VOO vs SCHD debate gets interesting. While VOO wins on total returns,
          SCHD generates dramatically more income -- and the gap widens every year.
        </p>
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold mb-4">Annual Dividend Income on $100,000 Investment</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Year</th>
                    <th className="text-right py-3 font-semibold text-blue-600">VOO Income</th>
                    <th className="text-right py-3 font-semibold text-green-600">SCHD Income</th>
                    <th className="text-right py-3 font-semibold">SCHD Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: 'Year 1', voo: '$1,300', schd: '$3,450', adv: '+$2,150' },
                    { year: 'Year 5', voo: '$1,740', schd: '$6,110', adv: '+$4,370' },
                    { year: 'Year 10', voo: '$2,330', schd: '$10,830', adv: '+$8,500' },
                    { year: 'Year 15', voo: '$3,120', schd: '$19,200', adv: '+$16,080' },
                    { year: 'Year 20', voo: '$4,180', schd: '$34,050', adv: '+$29,870' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.year}</td>
                      <td className="py-3 text-right">{row.voo}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{row.schd}</td>
                      <td className="py-3 text-right text-green-700 font-bold">{row.adv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Assumes 6.2% annual dividend growth for VOO and 12.1% for SCHD, with dividends reinvested. Projections are illustrative.</p>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          After 20 years, SCHD could generate over 8x the annual income of VOO from the same initial
          investment. This is the power of starting with a higher yield and compounding it with faster
          dividend growth. For anyone planning to live off their portfolio income, this difference is life-changing.
        </p>
      </section>

      <InlineSignup />

      {/* Sector Differences */}
      <section className="mb-16 mt-16">
        <h2 className="text-3xl font-bold mb-6">Sector Allocation Differences</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The sector differences between VOO and SCHD explain their performance gap and highlight
          the different bets you are making with each fund.
        </p>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Sector</th>
                    <th className="text-right py-3 font-semibold text-blue-600">VOO</th>
                    <th className="text-right py-3 font-semibold text-green-600">SCHD</th>
                    <th className="text-right py-3 font-semibold">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sector: 'Technology', voo: '31.2%', schd: '11.7%', diff: '-19.5%' },
                    { sector: 'Financials', voo: '13.1%', schd: '18.2%', diff: '+5.1%' },
                    { sector: 'Healthcare', voo: '12.4%', schd: '15.8%', diff: '+3.4%' },
                    { sector: 'Consumer Staples', voo: '5.8%', schd: '13.4%', diff: '+7.6%' },
                    { sector: 'Energy', voo: '3.6%', schd: '10.5%', diff: '+6.9%' },
                    { sector: 'Consumer Disc.', voo: '10.5%', schd: '7.8%', diff: '-2.7%' },
                    { sector: 'Industrials', voo: '8.2%', schd: '12.1%', diff: '+3.9%' },
                    { sector: 'Telecom', voo: '8.8%', schd: '6.3%', diff: '-2.5%' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.sector}</td>
                      <td className="py-3 text-right">{row.voo}</td>
                      <td className="py-3 text-right">{row.schd}</td>
                      <td className={`py-3 text-right font-medium ${row.diff.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          VOO is essentially a 31% bet on technology, while SCHD is a more balanced value-oriented approach.
          When tech leads the market (as it has since 2010), VOO wins. When value sectors outperform
          (as they did in 2022), SCHD pulls ahead.
        </p>
      </section>

      {/* The Best of Both Worlds */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Best of Both Worlds: Hold Both</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Many investors make the mistake of thinking they must choose one. In reality, a VOO + SCHD
          combination can be extremely effective.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Growth Phase (Age 25-45)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">70% VOO / 30% SCHD</p>
              <p className="text-xs text-slate-500">Maximize total return while building a dividend base</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Transition (Age 45-55)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">50% VOO / 50% SCHD</p>
              <p className="text-xs text-slate-500">Balance growth and income as retirement approaches</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Income Phase (Age 55+)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">30% VOO / 70% SCHD</p>
              <p className="text-xs text-slate-500">Prioritize income while maintaining some growth</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tax Considerations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Considerations</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">VOO is More Tax-Efficient in Taxable Accounts</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    VOO&apos;s lower 1.3% yield means less taxable income distributed each year. More of your
                    return comes from unrealized capital gains, which you control when to realize.
                    SCHD&apos;s 3.45% yield generates more mandatory tax events.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Both ETFs Pay Qualified Dividends</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Nearly all dividends from both VOO and SCHD qualify for the lower long-term capital
                    gains tax rate (0%, 15%, or 20% depending on your income bracket), rather than
                    being taxed as ordinary income.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Target className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Optimal Account Placement</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Consider holding SCHD in tax-advantaged accounts (IRA, 401k) where dividend taxes
                    are deferred or eliminated, and VOO in taxable accounts where its lower yield
                    creates fewer tax events.
                  </p>
                </div>
              </div>
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
              q: 'Should I buy VOO or SCHD in 2026?',
              a: 'It depends on your goals. If you are focused on maximum long-term total returns and do not need current income, VOO is likely better. If you want growing passive income or are approaching retirement, SCHD is the stronger choice. Many investors benefit from holding both.'
            },
            {
              q: 'Can VOO and SCHD be held together?',
              a: 'Absolutely. VOO and SCHD have only about 30% overlap in holdings, so they complement each other well. VOO provides growth through tech exposure while SCHD provides income and defensive quality. A 50/50 split is a common starting point.'
            },
            {
              q: 'Which ETF is safer during a market crash?',
              a: 'SCHD has historically fallen less during market downturns. During the 2022 bear market, SCHD declined about 5% less than VOO. Its quality-focused, dividend-paying companies tend to hold up better because they have stronger balance sheets and more predictable cash flows.'
            },
            {
              q: 'Is VOO or SCHD better for a Roth IRA?',
              a: 'SCHD is arguably the better Roth IRA holding because its higher dividend yield benefits most from tax-free growth. All that dividend income compounds without ever being taxed. VOO is better suited for taxable accounts where its lower yield creates fewer annual tax events.'
            },
            {
              q: 'Will SCHD ever outperform VOO on total returns?',
              a: 'It already has in some periods. In 2022, SCHD outperformed VOO by about 13 percentage points. Over full market cycles that include value rotations, SCHD can match or beat VOO. The key variable is whether tech continues to dominate or the market broadens.'
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
        <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Compare Your Investment Scenarios</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our calculators to model VOO vs SCHD side-by-side. See how dividend reinvestment,
              growth rates, and time horizon affect your final wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary">
                  Investment Return Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
            { title: 'Best S&P 500 Dividend ETFs Ranked', href: '/blog/best-sp500-dividend-etfs', badge: 'Rankings' },
            { title: 'Dividend ETFs vs Index Funds', href: '/blog/dividend-ETFs-vs-index-funds', badge: 'Guide' },
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
