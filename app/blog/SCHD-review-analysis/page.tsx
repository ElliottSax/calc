import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, ArrowRight, Star, Target, PieChart, Award, Calendar } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'SCHD ETF Review: Is Schwab US Dividend Equity Worth It? (2026)',
  description: 'Complete SCHD ETF review covering performance, holdings, expense ratio, dividend growth, and strategy. Find out if Schwab US Dividend Equity ETF belongs in your portfolio in 2026.',
  keywords: ['SCHD ETF review', 'SCHD analysis', 'Schwab US Dividend Equity ETF', 'SCHD holdings', 'SCHD dividend yield', 'best dividend ETF 2026', 'SCHD performance'],
}

export default function SCHDReviewAnalysis() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Star className="h-3 w-3 mr-1" />
          ETF Deep Dive
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          SCHD ETF Review: Is Schwab US Dividend Equity Worth It?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          With over $60 billion in assets, SCHD has become the gold standard for dividend ETF investing.
          Here is everything you need to know before buying.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>15 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">$63B+</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Assets Under Management</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">3.45%</p>
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
            <p className="text-2xl font-bold">103</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Total Holdings</p>
          </CardContent>
        </Card>
      </div>

      {/* What is SCHD */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is SCHD?</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Schwab U.S. Dividend Equity ETF (SCHD) tracks the Dow Jones U.S. Dividend 100 Index, a
          carefully constructed benchmark that selects 100 high-quality dividend-paying U.S. stocks. Unlike
          simple high-yield funds, SCHD uses a multi-factor quality screen that filters for financial strength,
          not just the highest dividend payouts.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          Launched in October 2011, SCHD has grown into one of the most popular dividend ETFs in the world,
          consistently attracting billions in new investor capital each year. Its combination of a low 0.06%
          expense ratio, strong dividend growth, and quality-focused methodology has made it a core holding
          for income-focused portfolios.
        </p>
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">SCHD at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Fund Name</span><span className="font-medium">Schwab U.S. Dividend Equity ETF</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Ticker</span><span className="font-medium">SCHD</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception Date</span><span className="font-medium">October 20, 2011</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-medium">0.06%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Yield</span><span className="font-medium">3.45%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Dividend Frequency</span><span className="font-medium">Quarterly</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Index Tracked</span><span className="font-medium">Dow Jones U.S. Dividend 100</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Number of Holdings</span><span className="font-medium">103</span></div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Selection Methodology */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How SCHD Selects Stocks</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          SCHD does not simply buy the highest-yielding stocks. Its index methodology applies a rigorous
          four-factor quality screen that sets it apart from most dividend ETFs.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold mb-2">Cash Flow to Debt Ratio</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Companies must demonstrate strong cash generation relative to their total debt, ensuring
                they can sustain dividend payments even during downturns.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Target className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-bold mb-2">Return on Equity (ROE)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                High ROE indicates management efficiency and competitive advantages that support
                long-term dividend sustainability.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-bold mb-2">Dividend Yield</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Stocks must offer a meaningful yield above the market average, but the yield factor is
                balanced against quality metrics to avoid yield traps.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <BarChart3 className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-bold mb-2">5-Year Dividend Growth</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Companies must have a track record of growing their dividends over at least five consecutive
                years, proving commitment to shareholder returns.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-slate-700 dark:text-slate-300">
          To even be considered, a company must have paid dividends for at least 10 consecutive years and
          meet minimum market capitalization requirements. This pre-screening eliminates speculative
          high-yielders and ensures only established dividend payers make the cut.
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
                    { name: 'Cisco Systems', ticker: 'CSCO', weight: '4.52%', sector: 'Technology' },
                    { name: 'Bristol-Myers Squibb', ticker: 'BMY', weight: '4.38%', sector: 'Healthcare' },
                    { name: 'BlackRock', ticker: 'BLK', weight: '4.31%', sector: 'Financials' },
                    { name: 'Home Depot', ticker: 'HD', weight: '4.28%', sector: 'Consumer Disc.' },
                    { name: 'Chevron', ticker: 'CVX', weight: '4.15%', sector: 'Energy' },
                    { name: 'Verizon Communications', ticker: 'VZ', weight: '4.02%', sector: 'Telecom' },
                    { name: 'Texas Instruments', ticker: 'TXN', weight: '3.98%', sector: 'Technology' },
                    { name: 'AbbVie', ticker: 'ABBV', weight: '3.87%', sector: 'Healthcare' },
                    { name: 'PepsiCo', ticker: 'PEP', weight: '3.76%', sector: 'Consumer Staples' },
                    { name: 'Amgen', ticker: 'AMGN', weight: '3.65%', sector: 'Healthcare' },
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
            <p className="text-xs text-slate-500 mt-4">Top 10 holdings represent approximately 40.9% of total fund assets. Holdings as of Q1 2026.</p>
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
                    <th className="text-right py-3 font-semibold">SCHD Return</th>
                    <th className="text-right py-3 font-semibold">S&P 500 Return</th>
                    <th className="text-right py-3 font-semibold">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: '1-Year', schd: '8.2%', sp: '12.4%', diff: '-4.2%' },
                    { period: '3-Year', schd: '7.8%', sp: '10.1%', diff: '-2.3%' },
                    { period: '5-Year', schd: '11.5%', sp: '13.8%', diff: '-2.3%' },
                    { period: '10-Year', schd: '11.1%', sp: '12.5%', diff: '-1.4%' },
                    { period: 'Since Inception (2011)', schd: '12.8%', sp: '13.9%', diff: '-1.1%' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.period}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{row.schd}</td>
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
          While SCHD has slightly underperformed the S&P 500 on a total return basis (largely due to the
          tech-heavy bull market), it has done so with notably lower volatility. SCHD&apos;s beta of approximately
          0.82 means it captures about 82% of market movements, providing a smoother ride for investors
          who prioritize capital preservation alongside income.
        </p>
      </section>

      {/* Dividend Growth */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Growth History</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          SCHD&apos;s dividend growth is where this ETF truly shines. The fund has delivered a compound annual
          dividend growth rate of approximately 12% since inception -- far outpacing inflation and most
          competing dividend ETFs.
        </p>
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
                    { year: '2020', div: '$2.0284', growth: '15.5%' },
                    { year: '2021', div: '$2.2489', growth: '10.9%' },
                    { year: '2022', div: '$2.5615', growth: '13.9%' },
                    { year: '2023', div: '$2.6587', growth: '3.8%' },
                    { year: '2024', div: '$2.8194', growth: '6.0%' },
                    { year: '2025', div: '$3.0752', growth: '9.1%' },
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
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>Key Insight:</strong> A $10,000 investment in SCHD at inception would now generate
            approximately $1,100+ in annual dividend income, compared to about $350 from a starting
            yield of 3.5%. That is the power of dividend growth compounding over time.
          </p>
        </div>
      </section>

      {/* Sector Allocation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sector Allocation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { sector: 'Financials', weight: '18.2%', color: 'bg-blue-500' },
            { sector: 'Healthcare', weight: '15.8%', color: 'bg-green-500' },
            { sector: 'Consumer Staples', weight: '13.4%', color: 'bg-yellow-500' },
            { sector: 'Industrials', weight: '12.1%', color: 'bg-orange-500' },
            { sector: 'Technology', weight: '11.7%', color: 'bg-purple-500' },
            { sector: 'Energy', weight: '10.5%', color: 'bg-red-500' },
            { sector: 'Consumer Discretionary', weight: '7.8%', color: 'bg-pink-500' },
            { sector: 'Telecom', weight: '6.3%', color: 'bg-indigo-500' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className={`w-4 h-4 rounded ${s.color}`} />
              <span className="flex-1 font-medium">{s.sector}</span>
              <span className="text-slate-600 dark:text-slate-400">{s.weight}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          SCHD maintains a well-diversified sector allocation without over-concentration in any single area.
          Notably, it has less technology exposure than the S&P 500 but much more than typical high-yield
          funds, striking a balance between growth and income.
        </p>
      </section>

      <InlineSignup />

      {/* Pros and Cons */}
      <section className="mb-16 mt-16">
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
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Ultra-low 0.06% expense ratio saves you money long-term</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Exceptional 12%+ annual dividend growth rate since inception</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Quality-factor methodology avoids yield traps</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Lower volatility than broad market (beta ~0.82)</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Tax-efficient structure with mostly qualified dividends</span></li>
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
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Underperforms in strong tech-led bull markets</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">No international diversification (U.S. only)</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Concentrated portfolio of ~100 stocks vs. 500+ for index funds</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Lower current yield than high-yield alternatives like SPYD or JEPI</span></li>
                <li className="flex gap-2"><span className="text-red-600 mt-1 flex-shrink-0">-</span><span className="text-sm">Annual reconstitution can cause short-term disruption</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Should Buy SCHD */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Who Should Buy SCHD?</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Long-Term Dividend Growth Investors</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  If you are 10+ years from needing income and want to build a growing dividend stream,
                  SCHD&apos;s 12% dividend growth rate means your income roughly doubles every 6 years.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Target className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Retirees Seeking Reliable Income</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  SCHD&apos;s quality-focused approach and reasonable 3.45% yield make it suitable for retirees
                  who want dependable quarterly income with inflation protection through dividend growth.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex gap-4">
              <Shield className="h-8 w-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Conservative Investors Wanting Market Exposure</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  With lower volatility than the S&P 500 and a focus on financially strong companies, SCHD
                  provides equity market participation with a defensive tilt.
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
              q: 'Is SCHD a good long-term investment?',
              a: 'Yes. SCHD has delivered strong risk-adjusted returns since its 2011 inception, combining competitive total returns with exceptional dividend growth. Its quality-factor approach and ultra-low expense ratio make it well-suited for long-term buy-and-hold investors.'
            },
            {
              q: 'How often does SCHD pay dividends?',
              a: 'SCHD pays dividends quarterly, typically in late March, June, September, and December. The fund has increased its annual dividend payout in most years since inception, with a compound growth rate of approximately 12%.'
            },
            {
              q: 'Is SCHD better than VYM?',
              a: 'SCHD and VYM serve different purposes. SCHD offers higher dividend growth and a quality-focused approach with ~100 holdings, while VYM provides broader diversification with 500+ stocks and a slightly higher current yield. SCHD has generally outperformed VYM on total returns over the past decade.'
            },
            {
              q: 'What is the minimum investment for SCHD?',
              a: 'Since SCHD is an ETF trading on the NYSE, you can buy a single share (approximately $82-88 in early 2026). Many brokerages also offer fractional shares, allowing you to invest with as little as $1.'
            },
            {
              q: 'Does SCHD hold any REITs?',
              a: 'No. The Dow Jones U.S. Dividend 100 Index that SCHD tracks explicitly excludes REITs. This is actually a tax advantage since REIT dividends are typically taxed as ordinary income rather than at the lower qualified dividend rate.'
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
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">See How SCHD Could Grow Your Dividend Income</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our DRIP calculator to model how reinvesting SCHD dividends could compound your
              wealth over 10, 20, or 30 years.
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
            { title: 'SCHD vs VYM: Which Dividend ETF is Better?', href: '/blog/SCHD-vs-VYM-comparison', badge: 'Comparison' },
            { title: 'VOO vs SCHD: Index Fund vs Dividend ETF', href: '/blog/VOO-vs-SCHD-comparison', badge: 'Comparison' },
            { title: 'DGRO vs SCHD: Dividend Growth Showdown', href: '/blog/DGRO-vs-SCHD-comparison', badge: 'Comparison' },
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
