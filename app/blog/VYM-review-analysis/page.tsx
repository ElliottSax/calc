import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, ArrowRight, Star, Target, PieChart, Award, Calendar, Building2, Landmark } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'VYM ETF Review: Vanguard High Dividend Yield Analysis (2026)',
  description: 'Complete VYM ETF review with performance data, top holdings, sector allocation, dividend history, expense ratio analysis, and who should invest. Vanguard High Dividend Yield ETF deep dive.',
  keywords: ['VYM ETF review', 'VYM analysis', 'Vanguard High Dividend Yield ETF', 'VYM holdings', 'VYM dividend yield', 'VYM performance', 'best dividend ETF'],
}

export default function VYMReviewAnalysis() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Star className="h-3 w-3 mr-1" />
          ETF Deep Dive
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          VYM ETF Review: Vanguard High Dividend Yield Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Vanguard&apos;s flagship dividend ETF offers broad exposure to 500+ high-yield U.S. stocks
          at rock-bottom costs. Here is our complete breakdown.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>14 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">$55B+</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Assets Under Management</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">2.85%</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Current Yield</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">0.06%</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Expense Ratio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <PieChart className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">550+</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Total Holdings</p>
          </CardContent>
        </Card>
      </div>

      {/* What is VYM */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is VYM?</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Vanguard High Dividend Yield ETF (VYM) tracks the FTSE High Dividend Yield Index, which
          selects U.S. stocks forecasted to have above-average dividend yields. With over 550 holdings,
          VYM provides one of the broadest dividend-focused exposures available in a single ETF.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          Launched in November 2006, VYM has nearly two decades of track record and has weathered the
          2008 financial crisis, the COVID crash, and multiple market corrections. Its Vanguard pedigree
          means investors benefit from industry-leading cost efficiency and a shareholder-first philosophy.
        </p>
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">VYM at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Fund Name</span><span className="font-medium">Vanguard High Dividend Yield ETF</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Ticker</span><span className="font-medium">VYM</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception Date</span><span className="font-medium">November 10, 2006</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-medium">0.06%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Yield</span><span className="font-medium">2.85%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Frequency</span><span className="font-medium">Quarterly</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Index Tracked</span><span className="font-medium">FTSE High Dividend Yield</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Number of Holdings</span><span className="font-medium">553</span></div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Investment Strategy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How VYM Selects Stocks</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          VYM uses a straightforward yield-based methodology. The FTSE High Dividend Yield Index ranks
          all eligible U.S. stocks by their forecasted 12-month dividend yield and includes the top half
          by yield (excluding REITs). This simple approach results in a massive, diversified portfolio.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Screen Universe</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start with all U.S. common stocks, excluding REITs, that pay dividends
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Rank by Yield</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Rank all stocks by their forecasted 12-month forward dividend yield
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-bold mb-2">Select Top Half</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Include the top 50% of stocks by yield, weighted by market capitalization
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mt-6">
          The market-cap weighting means the largest companies (like JPMorgan, Broadcom, and ExxonMobil)
          have the most influence on fund performance. This naturally tilts VYM toward established,
          financially stable blue-chip companies.
        </p>
      </section>

      {/* Top Holdings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Holdings</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Company</th>
                    <th className="text-left py-3 font-semibold">Ticker</th>
                    <th className="text-right py-3 font-semibold">Weight</th>
                    <th className="text-right py-3 font-semibold">Sector</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Broadcom', ticker: 'AVGO', weight: '4.21%', sector: 'Technology' },
                    { name: 'JPMorgan Chase', ticker: 'JPM', weight: '3.85%', sector: 'Financials' },
                    { name: 'ExxonMobil', ticker: 'XOM', weight: '3.12%', sector: 'Energy' },
                    { name: 'Procter & Gamble', ticker: 'PG', weight: '2.54%', sector: 'Consumer Staples' },
                    { name: 'Johnson & Johnson', ticker: 'JNJ', weight: '2.38%', sector: 'Healthcare' },
                    { name: 'Home Depot', ticker: 'HD', weight: '2.21%', sector: 'Consumer Disc.' },
                    { name: 'AbbVie', ticker: 'ABBV', weight: '2.15%', sector: 'Healthcare' },
                    { name: 'Walmart', ticker: 'WMT', weight: '1.98%', sector: 'Consumer Staples' },
                    { name: 'Chevron', ticker: 'CVX', weight: '1.87%', sector: 'Energy' },
                    { name: 'Merck & Co.', ticker: 'MRK', weight: '1.82%', sector: 'Healthcare' },
                  ].map((holding, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{holding.name}</td>
                      <td className="py-3 text-blue-600">{holding.ticker}</td>
                      <td className="py-3 text-right">{holding.weight}</td>
                      <td className="py-3 text-right text-slate-600 dark:text-slate-400">{holding.sector}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Top 10 holdings represent approximately 26.1% of total fund assets. Holdings as of Q1 2026.</p>
          </CardContent>
        </Card>
      </section>

      {/* Performance */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Performance Track Record</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Period</th>
                    <th className="text-right py-3 font-semibold">VYM Return</th>
                    <th className="text-right py-3 font-semibold">S&P 500 Return</th>
                    <th className="text-right py-3 font-semibold">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: '1-Year', vym: '9.8%', sp: '12.4%', diff: '-2.6%' },
                    { period: '3-Year', vym: '7.2%', sp: '10.1%', diff: '-2.9%' },
                    { period: '5-Year', vym: '10.4%', sp: '13.8%', diff: '-3.4%' },
                    { period: '10-Year', vym: '10.2%', sp: '12.5%', diff: '-2.3%' },
                    { period: 'Since Inception (2006)', vym: '9.1%', sp: '10.7%', diff: '-1.6%' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.period}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{row.vym}</td>
                      <td className="py-3 text-right">{row.sp}</td>
                      <td className="py-3 text-right text-slate-500">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Returns are annualized total returns including reinvested dividends. Past performance does not guarantee future results.</p>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          VYM has historically trailed the S&P 500 by 1-3% annually, which is expected since it excludes
          many high-growth tech stocks that do not pay dividends. However, VYM has provided meaningful
          income and lower drawdowns during market corrections, making it attractive for income-focused investors.
        </p>
      </section>

      {/* Sector Allocation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sector Allocation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { sector: 'Financials', weight: '21.4%', color: 'bg-blue-500' },
            { sector: 'Healthcare', weight: '13.2%', color: 'bg-green-500' },
            { sector: 'Consumer Staples', weight: '12.8%', color: 'bg-yellow-500' },
            { sector: 'Energy', weight: '11.5%', color: 'bg-red-500' },
            { sector: 'Industrials', weight: '10.7%', color: 'bg-orange-500' },
            { sector: 'Technology', weight: '10.3%', color: 'bg-purple-500' },
            { sector: 'Utilities', weight: '7.2%', color: 'bg-teal-500' },
            { sector: 'Consumer Discretionary', weight: '5.8%', color: 'bg-pink-500' },
            { sector: 'Telecom', weight: '4.1%', color: 'bg-indigo-500' },
            { sector: 'Materials', weight: '3.0%', color: 'bg-amber-500' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className={`w-4 h-4 rounded ${s.color}`} />
              <span className="flex-1 font-medium">{s.sector}</span>
              <span className="text-slate-600 dark:text-slate-400">{s.weight}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          Financials dominate VYM at over 21%, reflecting the sector&apos;s historically strong dividend payouts.
          The fund also has meaningful utilities and materials exposure that you will not find in SCHD,
          providing even broader diversification across dividend-paying sectors.
        </p>
      </section>

      <InlineSignup />

      {/* Dividend History */}
      <section className="mb-16 mt-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Growth History</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Year</th>
                    <th className="text-right py-3 font-semibold">Annual Dividend</th>
                    <th className="text-right py-3 font-semibold">YoY Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2020', div: '$2.9061', growth: '-2.5%' },
                    { year: '2021', div: '$3.0961', growth: '6.5%' },
                    { year: '2022', div: '$3.2518', growth: '5.0%' },
                    { year: '2023', div: '$3.4378', growth: '5.7%' },
                    { year: '2024', div: '$3.5842', growth: '4.3%' },
                    { year: '2025', div: '$3.7916', growth: '5.8%' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.year}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{row.div}</td>
                      <td className="py-3 text-right">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Insight:</strong> VYM&apos;s dividend growth rate of approximately 5-6% annually is more
            modest than SCHD&apos;s 12%, but it starts from a broader, more diversified base. For investors who
            prioritize diversification over maximum dividend growth, VYM&apos;s steady trajectory is appealing.
          </p>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Pros and Cons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Massive diversification with 550+ holdings reduces single-stock risk</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Industry-leading 0.06% expense ratio from Vanguard</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Nearly 20-year track record through multiple market cycles</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">High liquidity with tight bid-ask spreads</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Simple, transparent yield-based methodology</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Lower dividend growth (~5-6%) compared to quality-screened alternatives</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">No quality screening may include some lower-quality dividend payers</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Heavy financial sector concentration (21%+)</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Lags S&P 500 total returns by 2-3% annually in growth markets</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">U.S. only -- no international dividend stock exposure</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Should Buy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Who Should Buy VYM?</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Landmark className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Set-and-Forget Dividend Investors</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  With 550+ holdings and automatic rebalancing, VYM requires zero maintenance. Buy it once,
                  reinvest dividends, and let it compound for decades.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Building2 className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Investors Who Want Maximum Diversification</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  If you are uncomfortable with a concentrated 100-stock portfolio like SCHD, VYM&apos;s
                  550+ holdings across all major sectors provides peace of mind.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Shield className="h-8 w-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Vanguard Loyalists</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  If you already hold your investments at Vanguard, VYM integrates seamlessly with your
                  existing portfolio and benefits from Vanguard&apos;s unique mutual ownership structure.
                </p>
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
              q: 'Is VYM a good investment for retirees?',
              a: 'Yes, VYM is well-suited for retirees who want reliable quarterly income with broad diversification. Its 2.85% yield provides meaningful income, and its 550+ holdings reduce the risk of any single dividend cut significantly impacting your income stream.'
            },
            {
              q: 'How does VYM compare to SCHD?',
              a: 'VYM offers broader diversification (550+ vs. 100 holdings) but lower dividend growth (~5-6% vs. ~12% for SCHD). SCHD uses quality screens while VYM selects purely on yield. Both charge 0.06%. Choose SCHD for growth, VYM for diversification.'
            },
            {
              q: 'Does VYM include REITs?',
              a: 'No, VYM excludes REITs from its index. The FTSE High Dividend Yield Index specifically removes REITs, which means VYM dividends are predominantly qualified dividends taxed at the lower capital gains rate.'
            },
            {
              q: 'What is the minimum investment for VYM?',
              a: 'You can buy a single share of VYM (approximately $120-130 in early 2026) through any brokerage. Most major brokerages including Vanguard, Fidelity, and Schwab also offer fractional shares starting from $1.'
            },
            {
              q: 'Can I hold VYM in a Roth IRA?',
              a: 'Absolutely. Holding VYM in a Roth IRA is an excellent strategy because all dividend income and capital gains grow tax-free. Since VYM produces regular dividend income, the tax-free compounding benefit is significant over time.'
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
        <Card className="bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Model Your VYM Dividend Income</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              See how VYM&apos;s dividends could compound over time with our free calculators.
              Model DRIP reinvestment, income projections, and retirement scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Retirement Income Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
            { title: 'SCHD vs VYM: Which Dividend ETF is Better?', href: '/blog/SCHD-vs-VYM-comparison', badge: 'Comparison' },
            { title: 'Best Vanguard Dividend ETFs: Complete Guide', href: '/blog/best-vanguard-dividend-etfs', badge: 'Guide' },
            { title: 'SCHD ETF Review: Complete Analysis', href: '/blog/SCHD-review-analysis', badge: 'Review' },
            { title: 'Best S&P 500 Dividend ETFs Ranked', href: '/blog/best-sp500-dividend-etfs', badge: 'Rankings' },
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
