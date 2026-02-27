import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Award, BarChart3, CheckCircle2, DollarSign, LineChart, O, Percent, PieChart, Shield, Target, TrendingUp, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'DGRO vs SCHD: Dividend Growth ETF Showdown (2026)',
  description: 'Complete DGRO vs SCHD comparison covering dividend growth rates, total returns, holdings, sector allocation, expense ratios, and which dividend growth ETF is right for you in 2026.',
  keywords: ['DGRO vs SCHD', 'DGRO or SCHD', 'iShares dividend growth ETF', 'Schwab dividend ETF', 'best dividend growth ETF 2026', 'DGRO review', 'dividend growth ETF comparison'],
}

export default function DGROvsSCHDComparison() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          ETF Head-to-Head
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          DGRO vs SCHD: Dividend Growth ETF Showdown
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Two of the best dividend growth ETFs take different paths to the same goal. iShares goes
          broad, Schwab goes concentrated. Here is which approach wins.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>14 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Side-by-Side Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="border-2 border-teal-200 dark:border-teal-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-teal-600">DGRO</CardTitle>
            <CardDescription>iShares Core Dividend Growth ETF</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-bold">0.08%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Yield</span><span className="font-bold">2.32%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Holdings</span><span className="font-bold">420+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">10-Year Return</span><span className="font-bold text-green-600">11.3%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AUM</span><span className="font-bold">$28B+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception</span><span className="font-bold">June 2014</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Div Growth (5Y)</span><span className="font-bold">10.2%</span></div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-blue-600">SCHD</CardTitle>
            <CardDescription>Schwab U.S. Dividend Equity ETF</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-bold">0.06%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Yield</span><span className="font-bold">3.45%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Holdings</span><span className="font-bold">103</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">10-Year Return</span><span className="font-bold text-green-600">11.1%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AUM</span><span className="font-bold">$63B+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception</span><span className="font-bold">October 2011</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Div Growth (5Y)</span><span className="font-bold">12.1%</span></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Verdict */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 border-2">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">The Quick Verdict</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Choose DGRO If:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>You want maximum diversification (420+ stocks)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>You prefer more tech exposure for growth</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>You are building long-term wealth (not taking income)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>You hold in a taxable account (lower yield = fewer taxes)</span></li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Choose SCHD If:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want higher current income (3.45% vs 2.32%)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You value quality screening over broad exposure</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want faster dividend growth (12% vs 10%)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You are approaching or in retirement</span></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Methodology Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Each Fund Selects Stocks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-teal-600 mb-4">DGRO Methodology</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>5+ years of consecutive dividend growth</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Payout ratio below 75% (sustainability check)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Market-cap weighted with sector caps</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Includes growth companies that have started paying dividends recently</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Broad universe: any market cap qualifies</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-blue-600 mb-4">SCHD Methodology</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>10+ years of consecutive dividend payments</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Cash flow to debt ratio (financial strength)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Return on equity (profitability)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Dividend yield (income potential)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>5-year dividend growth rate</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mt-6">
          The key philosophical difference: DGRO casts a wide net and applies basic sustainability
          screens, while SCHD is highly selective with multi-factor quality ranking. DGRO&apos;s approach
          captures more companies (including newer dividend payers like Apple and Microsoft), while
          SCHD focuses on proven, financially strong dividend champions.
        </p>
      </section>

      {/* Performance Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Performance Comparison</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Metric</th>
                    <th className="text-right py-3 font-semibold text-teal-600">DGRO</th>
                    <th className="text-right py-3 font-semibold text-blue-600">SCHD</th>
                    <th className="text-right py-3 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: '1-Year Total Return', dgro: '10.8%', schd: '8.2%', winner: 'DGRO' },
                    { metric: '3-Year Total Return', dgro: '8.5%', schd: '7.8%', winner: 'DGRO' },
                    { metric: '5-Year Total Return', dgro: '10.8%', schd: '11.5%', winner: 'SCHD' },
                    { metric: 'Since Overlap (2014-2026)', dgro: '11.3%', schd: '11.1%', winner: 'DGRO' },
                    { metric: 'Current Dividend Yield', dgro: '2.32%', schd: '3.45%', winner: 'SCHD' },
                    { metric: '5-Year Dividend Growth', dgro: '10.2%', schd: '12.1%', winner: 'SCHD' },
                    { metric: 'Expense Ratio', dgro: '0.08%', schd: '0.06%', winner: 'SCHD' },
                    { metric: 'Max Drawdown (5yr)', dgro: '-22.8%', schd: '-19.8%', winner: 'SCHD' },
                    { metric: 'Number of Holdings', dgro: '420+', schd: '103', winner: 'DGRO' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.metric}</td>
                      <td className="py-3 text-right">{row.dgro}</td>
                      <td className="py-3 text-right">{row.schd}</td>
                      <td className={`py-3 text-right font-bold ${
                        row.winner === 'DGRO' ? 'text-teal-600' : 'text-blue-600'
                      }`}>{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          The total return battle is remarkably close, with DGRO slightly ahead in recent years due to its
          higher tech allocation benefiting from the AI rally. However, SCHD wins decisively on current yield
          and dividend growth rate, making it the better choice for income investors.
        </p>
      </section>

      {/* Sector Differences */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sector Allocation Differences</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Sector</th>
                    <th className="text-right py-3 font-semibold text-teal-600">DGRO</th>
                    <th className="text-right py-3 font-semibold text-blue-600">SCHD</th>
                    <th className="text-right py-3 font-semibold">Notable Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sector: 'Technology', dgro: '18.4%', schd: '11.7%', note: 'DGRO has much more tech' },
                    { sector: 'Financials', dgro: '17.2%', schd: '18.2%', note: 'Similar' },
                    { sector: 'Healthcare', dgro: '16.8%', schd: '15.8%', note: 'Similar' },
                    { sector: 'Industrials', dgro: '11.2%', schd: '12.1%', note: 'Similar' },
                    { sector: 'Consumer Staples', dgro: '9.4%', schd: '13.4%', note: 'SCHD more defensive' },
                    { sector: 'Energy', dgro: '8.1%', schd: '10.5%', note: 'SCHD overweight' },
                    { sector: 'Consumer Disc.', dgro: '6.8%', schd: '7.8%', note: 'Similar' },
                    { sector: 'Utilities', dgro: '5.3%', schd: '0%', note: 'DGRO includes utilities' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.sector}</td>
                      <td className="py-3 text-right">{row.dgro}</td>
                      <td className="py-3 text-right">{row.schd}</td>
                      <td className="py-3 text-right text-xs text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          DGRO&apos;s 18.4% technology allocation (including Apple, Microsoft, and Broadcom) gives it
          a meaningful growth tilt compared to SCHD&apos;s 11.7%. DGRO also includes utilities, which SCHD
          excludes entirely. Meanwhile, SCHD has heavier consumer staples and energy exposure for more
          defensive positioning.
        </p>
      </section>

      <InlineSignup />

      {/* Holdings Overlap */}
      <section className="mb-16 mt-16">
        <h2 className="text-3xl font-bold mb-6">Holdings Overlap</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-black text-teal-600">420+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">DGRO Holdings</p>
              </div>
              <div>
                <p className="text-4xl font-black text-purple-600">~65%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Overlap (SCHD in DGRO)</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-600">103</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">SCHD Holdings</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-6">
              Approximately 65% of SCHD&apos;s holdings also appear in DGRO, since DGRO&apos;s broad 420-stock
              universe captures most of SCHD&apos;s quality names. However, the weights differ significantly:
              SCHD concentrates more in its top holdings while DGRO spreads the weight more evenly.
              This makes holding both somewhat redundant -- choose one based on your priorities.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Income Projection */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Income Growth Projection: $100,000 Investment</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Year</th>
                    <th className="text-right py-3 font-semibold text-teal-600">DGRO Income</th>
                    <th className="text-right py-3 font-semibold text-blue-600">SCHD Income</th>
                    <th className="text-right py-3 font-semibold">Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: 'Year 1', dgro: '$2,320', schd: '$3,450', gap: '$1,130' },
                    { year: 'Year 5', dgro: '$3,760', schd: '$6,110', gap: '$2,350' },
                    { year: 'Year 10', dgro: '$6,090', schd: '$10,830', gap: '$4,740' },
                    { year: 'Year 15', dgro: '$9,860', schd: '$19,200', gap: '$9,340' },
                    { year: 'Year 20', dgro: '$15,960', schd: '$34,050', gap: '$18,090' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.year}</td>
                      <td className="py-3 text-right text-teal-600 font-medium">{row.dgro}</td>
                      <td className="py-3 text-right text-blue-600 font-medium">{row.schd}</td>
                      <td className="py-3 text-right text-slate-500">{row.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Assumes 10.2% dividend growth (DGRO) and 12.1% (SCHD), dividends reinvested. Projections are illustrative.</p>
          </CardContent>
        </Card>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Insight:</strong> Despite only a 2% difference in annual dividend growth rate (10.2%
            vs 12.1%), SCHD generates more than double DGRO&apos;s income by year 20. This is because SCHD
            starts with 49% higher yield AND grows faster. The compounding difference is enormous.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is DGRO or SCHD better for beginners?',
              a: 'Both are excellent for beginners. DGRO is slightly simpler conceptually (buy companies growing their dividends, broadly diversified) while SCHD requires understanding its quality-factor approach. If you want "set it and forget it" diversification, DGRO edges ahead. If you want higher income, SCHD wins.'
            },
            {
              q: 'Can I hold both DGRO and SCHD?',
              a: 'You can, but there is significant overlap (~65%). You are essentially double-weighting the stocks that appear in both funds. Unless you specifically want to tilt toward both broad diversification and quality concentration, picking one is simpler and more efficient.'
            },
            {
              q: 'Which ETF is better in a bear market?',
              a: 'SCHD has historically held up better during market downturns. Its quality screening and value tilt provide a natural defensive buffer. In 2022, SCHD fell about 3% less than DGRO. SCHD\'s lower beta (0.82 vs 0.88) confirms its more defensive character.'
            },
            {
              q: 'Does DGRO hold Apple and Microsoft?',
              a: 'Yes, DGRO holds both Apple (~3.5% weight) and Microsoft (~3.2% weight) as top holdings since both have established consistent dividend growth histories. SCHD does not hold either because they do not meet its higher yield threshold. This is a key differentiator.'
            },
            {
              q: 'Which has lower taxes in a taxable account?',
              a: 'DGRO generates less taxable income due to its lower 2.32% yield (vs SCHD\'s 3.45%). Both pay primarily qualified dividends taxed at preferential rates. For taxable accounts where you want to minimize annual tax drag, DGRO has a slight advantage.'
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
        <Card className="bg-gradient-to-br from-teal-600 to-blue-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Model Your Dividend Growth Journey</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Compare how DGRO and SCHD dividends compound over time using our free calculators.
              See the long-term impact of different growth rates on your income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="secondary">
                  Dividend Growth Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
            { title: 'VOO vs SCHD: Index vs Dividend ETF', href: '/blog/VOO-vs-SCHD-comparison', badge: 'Comparison' },
            { title: 'Best S&P 500 Dividend ETFs Ranked', href: '/blog/best-sp500-dividend-etfs', badge: 'Rankings' },
            { title: 'Best Dividend Growth Stocks for 2026', href: '/blog/best-dividend-growth-stocks-2026', badge: 'Picks' },
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
