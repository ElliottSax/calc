import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Award, DollarSign, TrendingUp, CheckCircle2, ArrowRight, Star, Target, BarChart3, Shield, Crown } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Dividend Aristocrats vs Kings vs Champions: What\'s the Difference?',
  description: 'Understand the difference between Dividend Aristocrats, Dividend Kings, and Dividend Champions. Definitions, examples, overlap, and which matters most for your portfolio.',
  keywords: ['dividend aristocrats vs kings', 'dividend champions vs aristocrats', 'dividend kings list', 'dividend aristocrats explained', 'dividend champions list', 'difference dividend aristocrats kings champions'],
}

const aristocratExamples = [
  { symbol: 'JNJ', name: 'Johnson & Johnson', years: 62, yield: '3.0%', category: 'King + Aristocrat + Champion' },
  { symbol: 'PG', name: 'Procter & Gamble', years: 68, yield: '2.4%', category: 'King + Aristocrat + Champion' },
  { symbol: 'KO', name: 'Coca-Cola', years: 62, yield: '3.0%', category: 'King + Aristocrat + Champion' },
  { symbol: 'MMM', name: '3M Company', years: 65, yield: '5.8%', category: 'King + Aristocrat + Champion' },
  { symbol: 'ABT', name: 'Abbott Laboratories', years: 52, yield: '1.8%', category: 'King + Aristocrat + Champion' },
  { symbol: 'EMR', name: 'Emerson Electric', years: 67, yield: '2.0%', category: 'King + Aristocrat + Champion' },
]

const aristocratOnlyExamples = [
  { symbol: 'ABBV', name: 'AbbVie', years: 11, yield: '3.8%', note: 'Inherited streak from Abbott spin-off (2013)' },
  { symbol: 'NEE', name: 'NextEra Energy', years: 29, yield: '2.5%', note: 'Not yet at 50-year King status' },
  { symbol: 'CAT', name: 'Caterpillar', years: 30, yield: '2.0%', note: '30 years, well above 25-year minimum' },
  { symbol: 'CTAS', name: 'Cintas', years: 41, yield: '0.8%', note: 'Strong growth, approaching King territory' },
]

const kingOnlyExamples = [
  { symbol: 'AWR', name: 'American States Water', years: 69, yield: '2.1%', note: 'Longest active streak of any US stock' },
  { symbol: 'DOV', name: 'Dover Corp', years: 68, yield: '1.2%', note: 'Industrial diversified manufacturer' },
  { symbol: 'NWN', name: 'Northwest Natural', years: 68, yield: '4.5%', note: 'Small-cap utility, too small for S&P 500' },
  { symbol: 'SWK', name: 'Stanley Black & Decker', years: 56, yield: '3.8%', note: 'Tool maker, not in S&P 500 Aristocrats' },
]

export default function AristocratsVsKingsVsChampions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-yellow-100 text-yellow-800">
          <Award className="h-3 w-3 mr-1" />
          Educational Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Dividend Aristocrats vs Kings vs Champions: What's the Difference?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The dividend investing world has three elite clubs: Aristocrats, Kings, and Champions. Each requires a
          different consecutive dividend increase streak. Understanding the differences helps you choose the right
          stocks for your portfolio.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>9 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            Definitive comparison
          </span>
        </div>
      </div>

      {/* Quick Definitions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-blue-600" />
          Quick Definitions
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="border-2 border-blue-200 bg-blue-50 dark:bg-blue-950">
            <CardContent className="pt-6 text-center">
              <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-black text-blue-800 mb-2">Dividend Aristocrat</h3>
              <p className="text-3xl font-black text-blue-700 mb-2">25+ Years</p>
              <p className="text-sm text-slate-600">
                S&P 500 members with 25+ consecutive years of dividend increases. Maintained by S&P Dow Jones Indices.
              </p>
              <Badge className="mt-3 bg-blue-600">~67 stocks (2026)</Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
            <CardContent className="pt-6 text-center">
              <Star className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-xl font-black text-yellow-800 mb-2">Dividend King</h3>
              <p className="text-3xl font-black text-yellow-700 mb-2">50+ Years</p>
              <p className="text-sm text-slate-600">
                Any US stock with 50+ consecutive years of dividend increases. No S&P 500 membership required.
              </p>
              <Badge className="mt-3 bg-yellow-600">~54 stocks (2026)</Badge>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-6 text-center">
              <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-black text-green-800 mb-2">Dividend Champion</h3>
              <p className="text-3xl font-black text-green-700 mb-2">25+ Years</p>
              <p className="text-sm text-slate-600">
                Any US stock with 25+ consecutive years of dividend increases. Not limited to S&P 500.
              </p>
              <Badge className="mt-3 bg-green-600">~140+ stocks (2026)</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Differences Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          Side-by-Side Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left p-3 font-bold">Criteria</th>
                <th className="text-left p-3 font-bold text-blue-600">Aristocrats</th>
                <th className="text-left p-3 font-bold text-yellow-600">Kings</th>
                <th className="text-left p-3 font-bold text-green-600">Champions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Minimum Years</td>
                <td className="p-3">25 years</td>
                <td className="p-3">50 years</td>
                <td className="p-3">25 years</td>
              </tr>
              <tr className="border-b bg-slate-50 dark:bg-slate-900">
                <td className="p-3 font-semibold">S&P 500 Required?</td>
                <td className="p-3 text-blue-600 font-bold">Yes</td>
                <td className="p-3">No</td>
                <td className="p-3">No</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Market Cap Minimum</td>
                <td className="p-3">~$14 billion+</td>
                <td className="p-3">None</td>
                <td className="p-3">None</td>
              </tr>
              <tr className="border-b bg-slate-50 dark:bg-slate-900">
                <td className="p-3 font-semibold">Number of Stocks</td>
                <td className="p-3">~67</td>
                <td className="p-3">~54</td>
                <td className="p-3">~140+</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Maintained By</td>
                <td className="p-3">S&P Dow Jones</td>
                <td className="p-3">Community tracking</td>
                <td className="p-3">DRIP Investing Resource</td>
              </tr>
              <tr className="border-b bg-slate-50 dark:bg-slate-900">
                <td className="p-3 font-semibold">ETF Available?</td>
                <td className="p-3 text-green-600">Yes (NOBL)</td>
                <td className="p-3 text-red-600">No dedicated ETF</td>
                <td className="p-3 text-red-600">No dedicated ETF</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Avg. Yield</td>
                <td className="p-3">~2.5%</td>
                <td className="p-3">~2.8%</td>
                <td className="p-3">~2.6%</td>
              </tr>
              <tr className="border-b bg-slate-50 dark:bg-slate-900">
                <td className="p-3 font-semibold">Includes Small Caps?</td>
                <td className="p-3 text-red-600">No</td>
                <td className="p-3 text-green-600">Yes</td>
                <td className="p-3 text-green-600">Yes</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Most Prestigious?</td>
                <td className="p-3">Most recognized</td>
                <td className="p-3 text-yellow-600 font-bold">Most elite</td>
                <td className="p-3">Most inclusive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The Overlap */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          Stocks in Multiple Categories
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Many stocks qualify for multiple lists. A Dividend King with 50+ years that is also in the S&P 500 earns all
          three titles simultaneously. Here are the most elite stocks that hold every designation.
        </p>

        <h3 className="text-xl font-bold mb-4">Triple-Crown: King + Aristocrat + Champion</h3>
        <div className="space-y-3 mb-8">
          {aristocratExamples.map((stock) => (
            <Card key={stock.symbol} className="border-l-4 border-l-yellow-500">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-bold">{stock.name} ({stock.symbol})</span>
                    <span className="text-sm text-slate-500 ml-2">{stock.years} consecutive years</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-yellow-600 text-xs">King</Badge>
                    <Badge className="bg-blue-600 text-xs">Aristocrat</Badge>
                    <Badge className="bg-green-600 text-xs">Champion</Badge>
                    <Badge variant="outline">{stock.yield}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Aristocrats (Not Yet Kings)</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          These stocks are in the S&P 500 and have 25+ years of increases, but have not yet reached the 50-year King threshold.
        </p>
        <div className="space-y-3 mb-8">
          {aristocratOnlyExamples.map((stock) => (
            <Card key={stock.symbol}>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-bold">{stock.name} ({stock.symbol})</span>
                    <span className="text-sm text-slate-500 ml-2">{stock.years} years</span>
                  </div>
                  <Badge className="bg-blue-600 text-xs">Aristocrat Only</Badge>
                </div>
                <p className="text-xs text-slate-500 mt-1">{stock.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Kings NOT in the Aristocrats</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          These stocks have 50+ years of consecutive increases but are NOT in the S&P 500, so they cannot be Aristocrats.
          Some are small-cap or mid-cap companies.
        </p>
        <div className="space-y-3">
          {kingOnlyExamples.map((stock) => (
            <Card key={stock.symbol}>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-bold">{stock.name} ({stock.symbol})</span>
                    <span className="text-sm text-slate-500 ml-2">{stock.years} years</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-yellow-600 text-xs">King</Badge>
                    <Badge variant="outline">{stock.yield}</Badge>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">{stock.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Which Matters Most */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-indigo-600" />
          Which Designation Matters Most?
        </h2>

        <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2 border-indigo-200">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Our Recommendation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              The designation itself matters less than the underlying business quality. A 26-year Aristocrat
              like Caterpillar is not automatically better than a 24-year near-miss. Focus on these fundamentals instead:
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Payout ratio under 70%</strong> -- room to maintain the dividend during downturns</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Dividend growth rate above inflation</strong> -- your income keeps up with rising costs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Competitive moat</strong> -- the business can sustain earnings for decades</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Free cash flow coverage</strong> -- earnings and cash flow cover the dividend with margin</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2 text-blue-600">Best Use for Aristocrats</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The Aristocrat list is best for investors who want large-cap, liquid, S&P 500 companies. The NOBL
                ETF makes it easy to own all of them. Perfect for a "set it and forget it" core holding.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2 text-yellow-600">Best Use for Kings</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The Kings list is best for ultra-conservative income investors who want the longest possible
                track records. These companies have survived recessions, wars, and pandemics for 50+ years.
                Maximum reliability for retirement portfolios.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2 text-green-600">Best Use for Champions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The Champions list is best for value hunters. It includes smaller companies not in the S&P 500
                that often trade at lower valuations. Hidden gems with 25-49 year streaks that fly under the
                radar of most investors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Tiers */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-slate-600" />
          Bonus: Contenders and Challengers
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Beyond the three main categories, the DRIP Investing Resource also tracks two more tiers:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-2 border-orange-200">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-black text-orange-700 mb-2">Dividend Contenders</h3>
              <p className="text-3xl font-black text-orange-600 mb-2">10-24 Years</p>
              <p className="text-sm text-slate-600">
                Companies with 10 to 24 years of consecutive dividend increases. The "farm team" for future
                Champions. About 350+ stocks qualify.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-slate-200">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-black text-slate-700 mb-2">Dividend Challengers</h3>
              <p className="text-3xl font-black text-slate-600 mb-2">5-9 Years</p>
              <p className="text-sm text-slate-600">
                Companies with 5 to 9 years of consecutive increases. Newer dividend growers that may become
                future Contenders and Champions. About 250+ stocks qualify.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Can a stock be a King but not an Aristocrat?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes! Aristocrat status requires S&P 500 membership and minimum liquidity. Companies like American
                States Water (AWR) have 69 consecutive years of dividend increases (King status) but are too
                small for the S&P 500, so they do not qualify as Aristocrats. About 20 Kings are not Aristocrats.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">What happens when an Aristocrat cuts its dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It gets removed from the index immediately. This happened to AT&T in 2022 when it cut its
                dividend after the WarnerMedia spinoff. The NOBL ETF sells the stock, which can create
                additional downward price pressure. Getting kicked off the list is a significant reputational
                blow that companies try hard to avoid.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Is the NOBL ETF a good way to invest in Aristocrats?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                NOBL (ProShares S&P 500 Dividend Aristocrats ETF) is the most popular way to own all Aristocrats
                with a 0.35% expense ratio. It equal-weights all holdings and rebalances quarterly. Performance
                has roughly matched the S&P 500 with lower volatility. It is a solid core holding for conservative
                dividend investors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Do Dividend Kings outperform Aristocrats?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Historically, the difference is small. Kings tend to be more defensive (utilities, consumer staples)
                with higher yields but lower growth. Aristocrats include more growth-oriented companies with lower
                yields but faster dividend increases. Over 20+ year periods, total returns are similar, but Kings
                provide slightly more current income.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How many new Aristocrats are added each year?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Typically 2-5 companies reach the 25-year milestone and join the Aristocrats list annually. The
                list is reviewed each January. Recent additions include companies like Nordson (NDSN) and Church
                & Dwight (CHD). Conversely, 1-3 companies are usually removed each year due to dividend cuts,
                freezes, or being acquired.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Model Aristocrat & King Returns</h3>
            <p className="mb-6 text-yellow-100">
              Use our calculators to project how Dividend Aristocrats and Kings grow your income over 10, 20, or 30 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary" className="gap-2">
                  <TrendingUp className="h-5 w-5" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Dividend Growth Calculator
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Yield on Cost Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="grid gap-3">
            <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Aristocrats 2026
            </Link>
            <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Kings 2026
            </Link>
            <Link href="/blog/best-recession-proof-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Recession-Proof Dividend Stocks: 12 Safe Havens
            </Link>
            <Link href="/blog/safest-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Safest Dividend Stocks: 15 Ultra-Reliable Picks (2026)
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
