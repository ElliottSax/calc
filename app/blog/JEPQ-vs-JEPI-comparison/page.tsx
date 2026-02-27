import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, ArrowRight, BarChart3, Calendar, CheckCircle2, DollarSign, I, LineChart, Percent, PieChart, Shield, Target, TrendingUp, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'JEPQ vs JEPI: Which JPMorgan Income ETF is Better? (2026)',
  description: 'Head-to-head comparison of JEPQ vs JEPI covering yields, total returns, risk profiles, tax efficiency, and which JPMorgan premium income ETF is better for your portfolio in 2026.',
  keywords: ['JEPQ vs JEPI', 'JEPQ or JEPI', 'JPMorgan income ETF comparison', 'JEPQ review', 'JEPI vs JEPQ', 'best income ETF 2026', 'covered call ETF comparison'],
}

export default function JEPQvsJEPIComparison() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          ETF Head-to-Head
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          JEPQ vs JEPI: Which JPMorgan Income ETF is Better?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          JPMorgan offers two premium income ETFs -- one based on the S&P 500, the other on the
          NASDAQ-100. Here is how they compare and which one fits your goals.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>15 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Side-by-Side Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-blue-600">JEPQ</CardTitle>
            <CardDescription>Nasdaq Equity Premium Income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Benchmark</span><span className="font-bold">NASDAQ-100</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-bold">0.35%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Distribution Yield</span><span className="font-bold text-green-600">~9.2%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AUM</span><span className="font-bold">$19B+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception</span><span className="font-bold">May 2022</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Frequency</span><span className="font-bold">Monthly</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Focus</span><span className="font-bold">Tech + Growth</span></div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-green-600">JEPI</CardTitle>
            <CardDescription>Equity Premium Income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Benchmark</span><span className="font-bold">S&P 500</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Expense Ratio</span><span className="font-bold">0.35%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Distribution Yield</span><span className="font-bold text-green-600">~7.5%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AUM</span><span className="font-bold">$36B+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Inception</span><span className="font-bold">May 2020</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Frequency</span><span className="font-bold">Monthly</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Focus</span><span className="font-bold">Broad Market</span></div>
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
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Choose JEPQ If:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want higher yield (~9% vs ~7.5%)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You are bullish on tech long-term</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want more growth potential alongside income</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You can tolerate higher volatility</span></li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Choose JEPI If:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You want broader sector diversification</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You prefer lower volatility</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You want a longer track record (2020 vs 2022)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You are more conservative and want less tech risk</span></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How They Work */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Both Funds Work</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          JEPQ and JEPI use the same covered call strategy -- they just apply it to different underlying
          benchmarks. Both generate income from two sources: stock dividends and options premium.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-blue-600 mb-4">JEPQ Strategy</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <strong>Equity:</strong> ~80-85% in NASDAQ-100 stocks selected by JPMorgan. Heavy in
                  Apple, Microsoft, NVIDIA, Meta, Amazon, Alphabet.
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  <strong>Options:</strong> ~15-20% in equity-linked notes (ELNs) tied to NASDAQ-100
                  call options. Higher tech volatility = higher premium income.
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-green-600 mb-4">JEPI Strategy</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <strong>Equity:</strong> ~80-85% in low-volatility S&P 500 stocks. More defensive
                  names like Progressive, UnitedHealth, AbbVie, Mastercard.
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <strong>Options:</strong> ~15-20% in equity-linked notes (ELNs) tied to S&P 500
                  call options. Broad market volatility drives premium.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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
                    <th className="text-right py-3 font-semibold text-blue-600">JEPQ</th>
                    <th className="text-right py-3 font-semibold text-green-600">JEPI</th>
                    <th className="text-right py-3 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: '2023 Total Return', jepq: '20.1%', jepi: '9.1%', winner: 'JEPQ' },
                    { metric: '2024 Total Return', jepq: '17.4%', jepi: '10.8%', winner: 'JEPQ' },
                    { metric: '2025 Total Return', jepq: '10.2%', jepi: '8.5%', winner: 'JEPQ' },
                    { metric: 'Current Distribution Yield', jepq: '~9.2%', jepi: '~7.5%', winner: 'JEPQ' },
                    { metric: 'Volatility (Std Dev)', jepq: '16.8%', jepi: '11.2%', winner: 'JEPI' },
                    { metric: 'Max Drawdown', jepq: '-18.2%', jepi: '-13.1%', winner: 'JEPI' },
                    { metric: 'Sharpe Ratio', jepq: '0.78', jepi: '0.72', winner: 'JEPQ' },
                    { metric: 'Number of Holdings', jepq: '~85', jepi: '~120', winner: 'JEPI' },
                    { metric: 'Expense Ratio', jepq: '0.35%', jepi: '0.35%', winner: 'Tie' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.metric}</td>
                      <td className="py-3 text-right">{row.jepq}</td>
                      <td className="py-3 text-right">{row.jepi}</td>
                      <td className={`py-3 text-right font-bold ${
                        row.winner === 'JEPQ' ? 'text-blue-600' : row.winner === 'JEPI' ? 'text-green-600' : 'text-slate-500'
                      }`}>{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          JEPQ has outperformed JEPI on both total return and yield since its 2022 launch, driven by the
          strong tech rally. However, it has also been more volatile with larger drawdowns. JEPQ&apos;s higher
          yield reflects the higher options premium collected from NASDAQ-100 volatility.
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
                    <th className="text-right py-3 font-semibold text-blue-600">JEPQ</th>
                    <th className="text-right py-3 font-semibold text-green-600">JEPI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sector: 'Technology', jepq: '52.3%', jepi: '14.8%' },
                    { sector: 'Consumer Discretionary', jepq: '15.1%', jepi: '8.2%' },
                    { sector: 'Telecom', jepq: '14.7%', jepi: '5.1%' },
                    { sector: 'Healthcare', jepq: '6.2%', jepi: '15.4%' },
                    { sector: 'Financials', jepq: '3.8%', jepi: '14.2%' },
                    { sector: 'Industrials', jepq: '3.1%', jepi: '12.5%' },
                    { sector: 'Consumer Staples', jepq: '2.4%', jepi: '11.8%' },
                    { sector: 'Energy', jepq: '0.5%', jepi: '6.3%' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.sector}</td>
                      <td className="py-3 text-right">{row.jepq}</td>
                      <td className="py-3 text-right">{row.jepi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          The sector differences are dramatic. JEPQ is over 50% technology while JEPI is broadly
          diversified across all sectors. This means JEPQ is essentially a bet that tech will continue
          to perform, while JEPI provides more balanced exposure to the overall economy.
        </p>
      </section>

      <InlineSignup />

      {/* Income Comparison */}
      <section className="mb-16 mt-16">
        <h2 className="text-3xl font-bold mb-6">Monthly Income Comparison</h2>
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold mb-4">Estimated Monthly Income by Portfolio Size</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Investment</th>
                    <th className="text-right py-3 font-semibold text-blue-600">JEPQ/month</th>
                    <th className="text-right py-3 font-semibold text-green-600">JEPI/month</th>
                    <th className="text-right py-3 font-semibold">Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { inv: '$50,000', jepq: '$383', jepi: '$312', diff: '+$71' },
                    { inv: '$100,000', jepq: '$767', jepi: '$625', diff: '+$142' },
                    { inv: '$250,000', jepq: '$1,917', jepi: '$1,562', diff: '+$355' },
                    { inv: '$500,000', jepq: '$3,833', jepi: '$3,125', diff: '+$708' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-medium">{row.inv}</td>
                      <td className="py-3 text-right text-blue-600 font-medium">{row.jepq}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{row.jepi}</td>
                      <td className="py-3 text-right font-bold">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Based on 9.2% yield (JEPQ) and 7.5% yield (JEPI). Actual distributions vary monthly.</p>
          </CardContent>
        </Card>
      </section>

      {/* When Each Outperforms */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">When Each ETF Outperforms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Zap className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-600 mb-3">JEPQ Wins When:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" /><span>Technology stocks are leading the market</span></li>
                <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" /><span>Volatility is high (higher options premium)</span></li>
                <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" /><span>Markets are in a moderate uptrend (not a raging bull)</span></li>
                <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" /><span>AI and digital transformation themes dominate</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-bold text-green-600 mb-3">JEPI Wins When:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Markets are flat or declining</span></li>
                <li className="flex gap-2"><Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Value sectors outperform tech</span></li>
                <li className="flex gap-2"><Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span>You want steady, lower-volatility income</span></li>
                <li className="flex gap-2"><Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Tech faces regulatory headwinds or corrections</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Strategy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Can You Hold Both JEPQ and JEPI?</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Yes, and many income investors do. Since they track different benchmarks (NASDAQ-100 vs S&P 500),
          they have limited overlap. A combined position diversifies your income sources across tech and
          value sectors.
        </p>
        <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-4">Sample Income Portfolio Allocations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Conservative Income</span>
                  <span className="text-sm text-slate-500">Estimated yield: ~7.8%</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">70% JEPI + 30% JEPQ</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Balanced Income</span>
                  <span className="text-sm text-slate-500">Estimated yield: ~8.3%</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">50% JEPI + 50% JEPQ</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Growth + Income</span>
                  <span className="text-sm text-slate-500">Estimated yield: ~8.7%</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">30% JEPI + 70% JEPQ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Why does JEPQ yield more than JEPI?',
              a: 'JEPQ\'s higher yield comes from selling options on the NASDAQ-100, which is more volatile than the S&P 500. Higher volatility means higher options premiums, which translates to more income. However, this also means JEPQ can have larger price swings.'
            },
            {
              q: 'Is JEPQ riskier than JEPI?',
              a: 'Yes. JEPQ is more volatile because the NASDAQ-100 is more concentrated in technology stocks. During tech selloffs, JEPQ will drop more than JEPI. For example, in a tech correction JEPQ might fall 15-18% while JEPI might only fall 10-13%.'
            },
            {
              q: 'Should I hold JEPQ or JEPI in a Roth IRA?',
              a: 'Both are excellent Roth IRA candidates since their distributions include short-term capital gains taxed as ordinary income. In a Roth IRA, all distributions grow and are withdrawn tax-free. If choosing one, pick based on your risk tolerance, not tax considerations.'
            },
            {
              q: 'Will JEPQ distributions stay at 9%?',
              a: 'No, JEPQ distributions fluctuate based on NASDAQ-100 volatility and options market conditions. The yield has ranged from about 7% to 12% since inception. Plan for some variability in your monthly income when budgeting.'
            },
            {
              q: 'Can JEPQ replace my growth ETF like QQQ?',
              a: 'Not really. JEPQ caps your upside through its options strategy. In a strong tech bull market, QQQ might return 30%+ while JEPQ returns 15-20%. JEPQ is designed to provide income, not maximum growth. Consider JEPQ as a complement to, not a replacement for, a growth position.'
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
            <h2 className="text-2xl font-bold mb-4">Model Your Monthly Income Strategy</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our calculators to see how much monthly income JEPQ, JEPI, or a combination
              could generate for your retirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="secondary">
                  Retirement Income Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Yield on Cost Calculator <ArrowRight className="ml-2 h-4 w-4" />
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
            { title: 'JEPI ETF Review: Complete Analysis', href: '/blog/JEPI-review-analysis', badge: 'Review' },
            { title: 'Covered Call Dividend Strategy Guide', href: '/blog/covered-call-dividend-strategy', badge: 'Strategy' },
            { title: 'SCHD ETF Review: Dividend Quality', href: '/blog/SCHD-review-analysis', badge: 'Review' },
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
