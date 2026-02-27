import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Star,
  Target,
  Percent,
  Building2,
  Landmark,
  PieChart,
  Calendar,
  Clock,
  Zap,
  Award,
  LineChart
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Is Walmart (WMT) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Walmart (WMT) dividend: 51-year Dividend King with ~1.4% yield. Covers recession-proof business model, e-commerce growth, Walmart+ membership, and whether the low yield is worth it.',
  keywords: ['walmart dividend', 'WMT dividend', 'walmart stock analysis', 'dividend king stocks', 'walmart dividend yield', 'is walmart a good investment', 'consumer staples dividend stocks'],
}

const dividendHistory = [
  { year: 2026, dividend: '$0.85', increase: '9.0%' },
  { year: 2025, dividend: '$0.78', increase: '9.2%' },
  { year: 2024, dividend: '$0.71', increase: '8.8%' },
  { year: 2023, dividend: '$0.65', increase: '1.9%' },
  { year: 2022, dividend: '$0.64', increase: '1.6%' },
  { year: 2021, dividend: '$0.63', increase: '1.9%' },
  { year: 2020, dividend: '$0.62', increase: '1.9%' },
  { year: 2019, dividend: '$0.61', increase: '1.9%' },
  { year: 2018, dividend: '$0.60', increase: '2.0%' },
  { year: 2017, dividend: '$0.59', increase: '2.0%' },
]

const peerComparison = [
  { company: 'Walmart (WMT)', yield: '1.4%', growth5yr: '5.8%', payout: '35%', streak: 51, pe: '32x', safety: '96/100' },
  { company: 'Costco (COST)', yield: '0.5%', growth5yr: '12.5%', payout: '25%', streak: 20, pe: '52x', safety: '95/100' },
  { company: 'Target (TGT)', yield: '3.2%', growth5yr: '12.0%', payout: '55%', streak: 56, pe: '14x', safety: '82/100' },
  { company: 'Kroger (KR)', yield: '2.5%', growth5yr: '10.0%', payout: '35%', streak: 18, pe: '12x', safety: '80/100' },
  { company: 'Dollar General (DG)', yield: '2.8%', growth5yr: '15.0%', payout: '40%', streak: 9, pe: '15x', safety: '72/100' },
]

export default function IsWalmartGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <Award className="h-3 w-3 mr-1" />
          Dividend King - 51 Years
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is Walmart (WMT) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          Walmart has increased its dividend for 51 consecutive years -- earning elite Dividend King status.
          With unmatched recession-proof retail operations, booming e-commerce, and a growing advertising
          business, WMT is the gold standard for defensive dividend investing. But is the 1.4% yield too low?
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Updated February 2026</span>
          <span>|</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 16 min read</span>
        </div>
      </div>

      {/* Quick Summary Card */}
      <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Quick Verdict: Walmart Dividend Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend King:</strong> 51 consecutive years of increases -- one of only ~50 companies globally with this distinction</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~1.4% ($0.85 annually) -- low yield offset by accelerating 9%+ dividend growth</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Payout Ratio:</strong> Just 35% of earnings -- enormous room for continued double-digit raises</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Recession-Proof:</strong> Revenue grew during every recession since 1975 -- consumers trade down to Walmart in tough times</span>
            </p>
            <p className="flex items-start gap-2">
              <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Safety Score:</strong> 96/100 -- among the safest dividends in the entire market</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Company Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-7 w-7 text-blue-600" />
          Walmart: The World's Largest Retailer
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Walmart (NYSE: WMT) is the world's largest company by revenue, generating approximately $650 billion
            annually from 10,500+ stores in 19 countries and a rapidly growing e-commerce platform. With 2.1 million
            employees and 240 million weekly customer visits, Walmart's scale is unmatched in retail.
          </p>
          <p>
            The company's "Everyday Low Prices" strategy creates a powerful moat. Walmart's buying power
            allows it to negotiate the lowest costs from suppliers, passing savings to consumers. This creates a
            virtuous cycle: low prices attract more customers, more customers give Walmart more negotiating leverage,
            and lower costs enable even lower prices.
          </p>
          <p>
            In recent years, Walmart has evolved from a pure brick-and-mortar retailer into a tech-powered
            omnichannel giant. E-commerce sales exceeded $100 billion in 2025, Walmart+ membership grew to 30+ million
            subscribers, and the advertising division (Walmart Connect) now generates $4B+ in high-margin revenue.
            These growth engines are driving the acceleration in dividend increases.
          </p>
        </div>
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-green-600" />
          51-Year Dividend Growth History
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Annual Dividend</th>
                    <th className="text-right p-3">YoY Increase</th>
                  </tr>
                </thead>
                <tbody>
                  {dividendHistory.map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-right font-semibold">{row.dividend}</td>
                      <td className="p-3 text-right text-green-600">+{row.increase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Note: Walmart executed a 3-for-1 stock split in February 2024, which reduced the per-share
              dividend proportionally. The values above are adjusted for the split. The actual dollar amount
              paid to shareholders has only gone up.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            The most exciting trend is the acceleration. After years of token 1-2% raises (2017-2022), Walmart
            began delivering 9%+ increases in 2024. This shift reflects confidence from e-commerce profitability,
            advertising revenue growth, and the margin expansion from automation and technology investments.
          </p>
          <p>
            If Walmart sustains 8-10% annual dividend growth (management has signaled this is the target), the
            current 1.4% yield becomes much more attractive through compounding. At 9% growth, the dividend
            doubles every 8 years. An investor buying today at $0.85 would receive $1.70 by 2034 and $3.40 by 2042
            -- representing a yield-on-cost of 5.6% on today's purchase price.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          Current Dividend Metrics (2026)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Dividend Yield</p>
                  <p className="text-3xl font-bold">1.4%</p>
                </div>
                <Percent className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Low starting yield, but accelerating 9% growth rate quickly compounds.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Annual Dividend</p>
                  <p className="text-3xl font-bold">$0.85</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Post-split: $0.2125/quarter. Pre-split equivalent: $2.55/share.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Payout Ratio</p>
                  <p className="text-3xl font-bold">35%</p>
                </div>
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Ultra-conservative. Room for years of double-digit increases without stress.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">5-Year Dividend Growth</p>
                  <p className="text-3xl font-bold">5.8%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Accelerating from 1.9% (2017-2022) to 9%+ (2024-2026).</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Walmart is Recession-Proof */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          The Ultimate Recession-Proof Business
        </h2>

        <Card className="mb-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardHeader>
            <CardTitle className="text-lg">Walmart Revenue During Recessions</CardTitle>
            <CardDescription>Revenue growth when most companies are shrinking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">2001 Recession (Dot-Com Bust)</span>
                <Badge className="bg-green-600">+12% revenue growth</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">2008-2009 Financial Crisis</span>
                <Badge className="bg-green-600">+7% revenue growth</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">2020 COVID Pandemic</span>
                <Badge className="bg-green-600">+6.7% revenue growth</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">2022 Inflation Crisis</span>
                <Badge className="bg-green-600">+6.7% revenue growth</Badge>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Walmart benefits from the "trade-down effect": when consumers face economic pressure, they
              switch from premium retailers to Walmart's low prices.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Walmart's recession resistance makes it one of the most defensive stocks in existence. During economic
            downturns, consumers cut spending at department stores and specialty retailers but increase spending
            at Walmart. The company sells necessities -- groceries (56% of US revenue), household essentials,
            pharmacy -- that people buy regardless of economic conditions.
          </p>
          <p>
            This counter-cyclical dynamic is why Walmart's dividend has never been threatened. Even during the
            2008 financial crisis, when banks collapsed and unemployment hit 10%, Walmart grew revenue by 7%
            and increased its dividend by 15%. The business model converts economic pain into market share gains.
          </p>
        </div>
      </section>

      {/* InlineSignup midway */}
      <div className="mb-16">
        <InlineSignup />
      </div>

      {/* Growth Catalysts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          Growth Catalysts: Beyond Traditional Retail
        </h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">E-Commerce ($100B+ Revenue)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Walmart's e-commerce sales surpassed $100 billion in 2025, growing 20%+ annually. Curbside
                    pickup, same-day delivery, and the marketplace platform (100,000+ third-party sellers) drive
                    growth. E-commerce margins are improving rapidly as fulfillment automation reduces costs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Walmart+ Membership (30M+ Subscribers)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    At $98/year, Walmart+ generates $3B+ in recurring revenue. Members spend 2x more than
                    non-members and have higher retention rates. Benefits include free delivery, fuel discounts,
                    and streaming via Paramount+. Walmart+ is approaching Amazon Prime's stickiness.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Advertising (Walmart Connect - $4B+ Revenue)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Walmart's advertising business is a profit machine growing 25%+ annually with 50%+ margins.
                    Brands pay to promote products on Walmart.com and in-store displays. This high-margin revenue
                    stream directly boosts earnings and dividend coverage without additional capital investment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <Landmark className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">International Expansion ($120B Revenue)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Walmart International generates $120B+ in revenue across Mexico (Walmex), India (Flipkart),
                    China, Canada, and other markets. India's Flipkart alone is worth $35B+ and growing 30%
                    annually. International provides diversification and long-term growth beyond the mature US market.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Peer Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          Walmart vs. Retail Dividend Peers
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3">Company</th>
                    <th className="text-right p-3">Yield</th>
                    <th className="text-right p-3">5Y Growth</th>
                    <th className="text-right p-3">Payout</th>
                    <th className="text-right p-3">Streak</th>
                    <th className="text-right p-3">P/E</th>
                    <th className="text-right p-3">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  {peerComparison.map((stock) => (
                    <tr
                      key={stock.company}
                      className={`border-b ${stock.company.includes('Walmart') ? 'bg-blue-50 dark:bg-blue-950 font-semibold' : ''}`}
                    >
                      <td className="p-3">{stock.company}</td>
                      <td className="p-3 text-right">{stock.yield}</td>
                      <td className="p-3 text-right text-green-600">{stock.growth5yr}</td>
                      <td className="p-3 text-right">{stock.payout}</td>
                      <td className="p-3 text-right">{stock.streak} yrs</td>
                      <td className="p-3 text-right">{stock.pe}</td>
                      <td className="p-3 text-right">{stock.safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            <strong>Walmart vs. Costco:</strong> Both are exceptional companies, but they serve different investor needs.
            Costco offers faster growth but a tiny 0.5% yield. Walmart offers a higher starting yield (1.4%)
            with 9% growth and is a Dividend King. For income investors, Walmart wins. For total return, Costco
            may edge out over time.
          </p>
          <p>
            <strong>Walmart vs. Target:</strong> Target yields 3.2% and has a 56-year streak, but its payout
            ratio (55%) is much higher and the business is more discretionary (fashion, home goods). In
            recessions, Target struggles while Walmart thrives. For safety, Walmart is the clear winner.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is Walmart's 1.4% yield too low for income investors?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your time horizon. If you need income today, yes -- 1.4% is below average. You'd
                need $857,000 invested in Walmart to generate $1,000/month. However, if you have 10+ years,
                Walmart's accelerating 9% dividend growth means the yield-on-cost compounds rapidly. A $100
                investment today yielding 1.4% will yield 3.3% in 10 years and 7.8% in 20 years without any
                additional investment. Pair Walmart with higher-yield stocks (REITs, utilities) for balanced income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">How did the 2024 stock split affect Walmart's dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The 3-for-1 stock split in February 2024 reduced the per-share dividend proportionally. Before
                the split, the dividend was approximately $2.28/share. After, it became $0.76/share (adjusted).
                However, shareholders received 3 shares for every 1 they owned, so total dividend income was
                unchanged. The split made shares more accessible to retail investors at ~$60 instead of ~$170.
                The Dividend King streak was not affected.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Can Walmart compete with Amazon long-term?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, and it's already proving it. Walmart's e-commerce grew 20%+ in 2025, the marketplace expanded
                to 100,000+ sellers, and 90% of Americans live within 10 miles of a Walmart store -- giving it
                a physical delivery advantage Amazon cannot replicate. Walmart+ is approaching 30M subscribers
                vs. Amazon Prime's 200M, but the gap is closing. For groceries (56% of Walmart's US revenue),
                Walmart dominates Amazon. The two will coexist as the dual retail powers for decades.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is Walmart overvalued at a 32x P/E ratio?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Walmart's P/E of 32x is above its historical average of 20-25x, reflecting market enthusiasm for
                its e-commerce, advertising, and Walmart+ growth. Premium stocks carry premium valuations. The
                question is whether Walmart can sustain 8-10% earnings growth to justify the multiple. If growth
                decelerates to 4-5%, the stock could see multiple compression. For dividend investors, the 35%
                payout ratio and 96/100 safety score matter more than the P/E. Dollar-cost averaging reduces
                the risk of overpaying at any single entry point.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Will Walmart continue accelerating dividend growth?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Signs point to yes. The 35% payout ratio gives enormous headroom for increases. Management signaled
                a shift from token 1-2% raises to 8-10% annual growth, backed by e-commerce profitability and
                advertising revenue. As long as Walmart grows earnings 6-8% annually (achievable given current
                catalysts), dividend increases of 8-10% are sustainable for the foreseeable future. The company
                also returns capital through massive buybacks ($20B+ annually), further supporting per-share metrics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Walmart Dividend Returns</h3>
            <p className="mb-6 text-blue-100">
              Model Walmart's accelerating dividend growth with our free calculators. See how 9% annual
              increases compound your yield-on-cost over 10, 20, and 30 years.
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
                  <Percent className="h-5 w-5" />
                  Yield-on-Cost Calculator
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Retirement Income Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle>Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Consumer Staples Dividend Stocks for 2026
            </Link>
            <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Kings (2026)
            </Link>
            <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Growth Stocks for 2026
            </Link>
            <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Build a $1,000/Month Dividend Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
