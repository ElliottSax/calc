import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Percent,
  PieChart,
  Building2,
  Crown,
  LineChart,
  XCircle,
  AlertTriangle,
  Zap,
  Star,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is Procter & Gamble (PG) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Procter & Gamble (PG) as a dividend stock: 68 consecutive years of increases, Dividend King status, ~2.5% yield, premium brand portfolio, and dividend safety analysis.',
  keywords: 'procter gamble dividend, PG dividend, procter and gamble stock, PG dividend yield, procter gamble dividend history, dividend king stocks, consumer staples dividend',
  openGraph: {
    title: 'Is Procter & Gamble (PG) a Good Dividend Stock? Complete 2026 Analysis',
    description: '68 consecutive years of dividend increases — the longest active streak among Dividend Kings. Deep analysis of PG brands, margins, growth, and safety.',
    type: 'article',
  }
}

const historicalDividends = [
  { year: 2026, dividend: '$4.03', increase: '5.0%' },
  { year: 2025, dividend: '$3.84', increase: '5.5%' },
  { year: 2024, dividend: '$3.64', increase: '5.2%' },
  { year: 2023, dividend: '$3.46', increase: '3.0%' },
  { year: 2022, dividend: '$3.36', increase: '5.0%' },
  { year: 2021, dividend: '$3.20', increase: '10.0%' },
  { year: 2020, dividend: '$3.03', increase: '6.0%' },
  { year: 2019, dividend: '$2.86', increase: '4.0%' },
  { year: 2018, dividend: '$2.75', increase: '4.0%' },
  { year: 2017, dividend: '$2.64', increase: '3.0%' },
  { year: 2016, dividend: '$2.56', increase: '1.0%' },
  { year: 2015, dividend: '$2.53', increase: '3.0%' },
]

const brandPortfolio = [
  {
    category: 'Fabric & Home Care',
    percentage: '~35%',
    brands: 'Tide, Downy, Cascade, Dawn, Swiffer, Febreze, Mr. Clean',
    margin: '~28%',
    growth: '4-6%',
  },
  {
    category: 'Baby, Feminine & Family Care',
    percentage: '~25%',
    brands: 'Pampers, Always, Tampax, Bounty, Charmin, Luvs',
    margin: '~25%',
    growth: '3-5%',
  },
  {
    category: 'Health Care',
    percentage: '~13%',
    brands: 'Oral-B, Crest, Vicks, NyQuil, DayQuil, Metamucil, Pepto-Bismol',
    margin: '~26%',
    growth: '5-7%',
  },
  {
    category: 'Beauty',
    percentage: '~18%',
    brands: 'Olay, Pantene, Head & Shoulders, SK-II, Old Spice, Herbal Essences',
    margin: '~22%',
    growth: '4-6%',
  },
  {
    category: 'Grooming',
    percentage: '~9%',
    brands: 'Gillette, Venus, Braun, The Art of Shaving',
    margin: '~32%',
    growth: '2-4%',
  },
]

const comparisonStocks = [
  {
    symbol: 'PG',
    name: 'Procter & Gamble',
    yield: '2.5%',
    growth5yr: '5.7%',
    payoutRatio: '62%',
    yearsIncreasing: 68,
    dividendSafety: '95/100',
  },
  {
    symbol: 'CL',
    name: 'Colgate-Palmolive',
    yield: '2.2%',
    growth5yr: '3.5%',
    payoutRatio: '58%',
    yearsIncreasing: 61,
    dividendSafety: '90/100',
  },
  {
    symbol: 'KMB',
    name: 'Kimberly-Clark',
    yield: '3.5%',
    growth5yr: '2.8%',
    payoutRatio: '70%',
    yearsIncreasing: 52,
    dividendSafety: '80/100',
  },
  {
    symbol: 'CLX',
    name: 'Clorox',
    yield: '3.2%',
    growth5yr: '3.0%',
    payoutRatio: '75%',
    yearsIncreasing: 48,
    dividendSafety: '75/100',
  },
  {
    symbol: 'CHD',
    name: 'Church & Dwight',
    yield: '1.1%',
    growth5yr: '5.5%',
    payoutRatio: '35%',
    yearsIncreasing: 27,
    dividendSafety: '88/100',
  },
]

export default function IsProterGambleGoodDividendStockPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-blue-700 to-indigo-700">
                  <Crown className="h-3 w-3 mr-1" />
                  Dividend King - 68 Years
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is Procter & Gamble (PG) a Good Dividend Stock? 2026 Analysis
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  With 68 consecutive years of dividend increases — the longest active streak among major
                  Dividend Kings — Procter & Gamble is the ultimate defensive dividend stock. From Tide to
                  Pampers, PG&apos;s brands are used by 5 billion consumers daily. Here&apos;s our complete
                  2026 analysis.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>18 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    Consumer Staples
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Verdict: Procter & Gamble Dividend Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend King Status:</strong> 68 consecutive years of increases (since 1958) — longest active streak among large-cap Dividend Kings</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield:</strong> 2.5% ($4.03 annual dividend) with 5.7% five-year growth rate</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Brand Portfolio:</strong> 20+ billion-dollar brands used by 5 billion people daily worldwide</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout Ratio:</strong> 62% of earnings — very safe with strong free cash flow coverage</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Our Rating:</strong> BUY for safety-first investors — 95/100 dividend safety score</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">68-Year Dividend History</a></li>
                    <li><a href="#current-metrics" className="text-blue-600 hover:underline">Current Dividend Metrics</a></li>
                    <li><a href="#brand-portfolio" className="text-blue-600 hover:underline">Brand Portfolio Analysis</a></li>
                    <li><a href="#pricing-power" className="text-blue-600 hover:underline">Pricing Power & Margins</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety Score</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks & Challenges</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">vs. Household Peers</a></li>
                    <li><a href="#drip-example" className="text-blue-600 hover:underline">30-Year DRIP Example</a></li>
                    <li><a href="#verdict" className="text-blue-600 hover:underline">Buy / Hold / Watch Verdict</a></li>
                    <li><a href="#calculators" className="text-blue-600 hover:underline">Dividend Calculators</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Introduction */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Crown className="h-7 w-7 text-blue-700" />
                    The King of Dividend Kings: 68 Years and Counting
                  </h2>
                  <p>
                    Procter & Gamble (NYSE: PG) has raised its dividend every year since 1958. That is 68
                    consecutive years — predating the moon landing, the internet, and most countries&apos;
                    independence. No other major corporation has a longer unbroken streak of dividend increases.
                  </p>
                  <p>
                    This isn&apos;t just luck or accounting tricks. PG&apos;s dividend streak is built on
                    something far more durable: the everyday products that 5 billion people use without thinking.
                    Tide detergent, Pampers diapers, Gillette razors, Crest toothpaste, Charmin toilet paper —
                    these are products consumers buy in good economies and bad. Recessions don&apos;t stop
                    people from doing laundry or brushing their teeth.
                  </p>
                  <p>
                    Today, PG offers a 2.5% yield — lower than some peers — but compensates with superior
                    dividend growth (5.7% CAGR), an exceptionally safe 62% payout ratio, and one of the strongest
                    brand portfolios in business history. For investors who want the safest possible dividend
                    stock, PG is as close to guaranteed income as equities get.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-green-600" />
                    68 Consecutive Years of Dividend Increases
                  </h2>
                  <p>
                    PG&apos;s dividend growth history is a masterclass in consistency. The company has raised
                    its payout through the 1970s stagflation, the 1987 crash, the dot-com bubble, the 2008
                    financial crisis, the 2020 pandemic, and the 2022-2023 inflation crisis.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Growth History (Last 12 Years)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Year</th>
                              <th className="text-right p-2">Annual Dividend</th>
                              <th className="text-right p-2">Increase</th>
                            </tr>
                          </thead>
                          <tbody>
                            {historicalDividends.map((year) => (
                              <tr key={year.year} className="border-b">
                                <td className="p-2">{year.year}</td>
                                <td className="text-right p-2 font-semibold">{year.dividend}</td>
                                <td className="text-right p-2 text-green-600">{year.increase}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Note the acceleration from 1-3% increases in 2015-2017 to 5%+ in 2020-2026, driven by
                        portfolio restructuring and premium product focus.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    The story in the data is PG&apos;s transformation. From 2015-2017, dividend growth slowed to
                    1-3% as the company shed 100+ non-core brands to focus on 65 leading brands in 10 categories.
                    That painful restructuring paid off: since 2020, dividend growth has accelerated to 5-10%
                    annually as margins expanded and pricing power increased.
                  </p>
                  <p>
                    A $10,000 investment in PG in 2015 generated $253 in dividends that year. By 2026, the same
                    shares generate $403 — a 59% income increase from growth alone.
                  </p>
                </section>

                {/* Current Metrics */}
                <section id="current-metrics">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Current Dividend Metrics (2026)
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-blue-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Yield</p>
                            <p className="text-3xl font-bold">2.5%</p>
                          </div>
                          <Percent className="h-8 w-8 text-blue-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Based on stock price ~$161. Lower yield reflects premium valuation for quality.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividend</p>
                            <p className="text-3xl font-bold">$4.03</p>
                          </div>
                          <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Paid quarterly (~$1.01 per share). Typically increased each April.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">5-Year CAGR</p>
                            <p className="text-3xl font-bold">5.7%</p>
                          </div>
                          <TrendingUp className="h-8 w-8 text-purple-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Significant acceleration from the 2-3% growth era of 2015-2018.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-3xl font-bold">62%</p>
                          </div>
                          <PieChart className="h-8 w-8 text-orange-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Safe and sustainable. Lower than KO (72%) and KMB (70%). Leaves 38% for reinvestment.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    The 2.5% yield is lower than some competitors, but this reflects the market&apos;s premium
                    valuation for PG&apos;s quality. When you combine 2.5% yield + 5.7% growth, the total
                    expected return from the dividend alone is 8.2% — competitive with higher-yielding but
                    slower-growing alternatives.
                  </p>
                </section>

                {/* Brand Portfolio */}
                <section id="brand-portfolio">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-indigo-600" />
                    Brand Portfolio: 20+ Billion-Dollar Brands
                  </h2>
                  <p>
                    Procter & Gamble owns 20+ brands that each generate over $1 billion in annual sales.
                    These are category leaders with dominant market shares that consumers purchase habitually.
                  </p>

                  <div className="space-y-4 my-6">
                    {brandPortfolio.map((category) => (
                      <Card key={category.category} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{category.category}</h3>
                            <Badge className="bg-blue-600">{category.percentage}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Op. Margin</p>
                              <p className="font-semibold">{category.margin}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Growth</p>
                              <p className="font-semibold text-green-600">{category.growth}</p>
                            </div>
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300">
                            <strong>Key Brands:</strong> {category.brands}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    The genius of PG&apos;s portfolio is that these products are consumable necessities. Unlike
                    durable goods (appliances, cars) that face cyclical demand, detergent, diapers, and toothpaste
                    are replaced monthly. This creates a recurring revenue stream that persists through recessions.
                  </p>
                  <p>
                    PG&apos;s 2014-2017 restructuring (selling 100+ brands to focus on 65 core brands) was a
                    pivotal strategic decision. The remaining brands are all category leaders with #1 or #2
                    market share, creating a leaner, higher-margin, faster-growing company.
                  </p>
                </section>

                {/* InlineSignup */}
                <div className="not-prose">
                  <InlineSignup />
                </div>

                {/* Pricing Power */}
                <section id="pricing-power">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Pricing Power: The Inflation Hedge
                  </h2>
                  <p>
                    PG&apos;s greatest competitive advantage is its ability to raise prices without losing
                    customers. During the 2022-2023 inflation period, PG raised prices 8-10% across its portfolio
                    while maintaining or growing volume. Consumers grumbled but kept buying Tide, Pampers, and
                    Gillette because switching to generic alternatives feels like a downgrade.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 border-l-4 border-l-yellow-500">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">PG&apos;s Pricing Power Track Record</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="p-3 bg-white dark:bg-slate-900 rounded">
                          <p className="text-slate-600 dark:text-slate-400">FY 2023 Price Increases</p>
                          <p className="font-bold text-lg">+9%</p>
                          <p className="text-xs text-green-600">Volume held flat</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 rounded">
                          <p className="text-slate-600 dark:text-slate-400">FY 2024 Price Increases</p>
                          <p className="font-bold text-lg">+4%</p>
                          <p className="text-xs text-green-600">Volume grew 2%</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 rounded">
                          <p className="text-slate-600 dark:text-slate-400">FY 2025 Gross Margin</p>
                          <p className="font-bold text-lg">52.4%</p>
                          <p className="text-xs text-green-600">Near all-time high</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    This pricing power is the foundation of dividend safety. When input costs rise (raw
                    materials, energy, logistics), PG passes those costs to consumers. Margins stay stable,
                    earnings grow, and the dividend keeps increasing. It is a self-reinforcing cycle.
                  </p>
                </section>

                {/* Dividend Safety */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-green-600" />
                    Dividend Safety Score: 95/100 (Exceptional)
                  </h2>

                  <Card className="my-6 bg-green-50 dark:bg-green-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Safety Factor Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">68-Year Streak (Best in Class)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              The longest active dividend growth streak among major corporations globally.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Payout Ratio: 62% (Very Safe)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Retains 38% of earnings for growth and buffer. Could sustain dividend through 40%+ earnings decline.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Free Cash Flow: $16-17B annually (Excellent)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              FCF comfortably covers $9.5B in dividends (1.7x coverage). One of the highest FCF generators in staples.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">AA- Credit Rating (Strong)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Among the highest credit ratings in consumer staples. Debt/EBITDA of ~1.8x is conservative.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Necessity Products (Maximum Stability)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Detergent, diapers, toothpaste, and toilet paper are purchased regardless of economic conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    PG earns a 95/100 safety score — tied with JNJ for the highest among consumer staples stocks.
                    The combination of a 68-year track record, 62% payout ratio, $16B+ FCF, and necessity
                    products makes this one of the safest dividends in the entire market.
                  </p>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                    Risks and Challenges
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Strengths
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>68-year streak — longest among Dividend Kings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>20+ billion-dollar brands with #1/#2 market share</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>$16-17B annual FCF — massive cash generation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Proven pricing power through 2022-2023 inflation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Accelerating dividend growth (5%+ since 2020)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Risks
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Premium P/E (25-27x) limits capital gains upside</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Lower yield (2.5%) vs. peers like KMB (3.5%)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Private label / store brand competition growing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Currency headwinds from 50%+ international revenue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Mature market: organic growth limited to mid-single digits</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    The biggest risk for PG investors is not a dividend cut — it is overpaying for safety.
                    At 25-27x earnings, PG trades at a significant premium to the market average. If the P/E
                    compresses to 22x during a selloff, you could lose 10-15% on paper even as the dividend
                    keeps growing. Dollar-cost averaging mitigates this risk.
                  </p>
                </section>

                {/* Comparison */}
                <section id="comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    PG vs. Household Products Peers
                  </h2>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="text-left p-3 border">Stock</th>
                          <th className="text-right p-3 border">Yield</th>
                          <th className="text-right p-3 border">5Y Growth</th>
                          <th className="text-right p-3 border">Payout</th>
                          <th className="text-right p-3 border">Streak</th>
                          <th className="text-right p-3 border">Safety</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonStocks.map((stock) => (
                          <tr key={stock.symbol} className={stock.symbol === 'PG' ? 'bg-blue-50 dark:bg-blue-950 font-semibold' : ''}>
                            <td className="p-3 border">{stock.name} ({stock.symbol})</td>
                            <td className="text-right p-3 border">{stock.yield}</td>
                            <td className="text-right p-3 border text-green-600">{stock.growth5yr}</td>
                            <td className="text-right p-3 border">{stock.payoutRatio}</td>
                            <td className="text-right p-3 border">{stock.yearsIncreasing} yrs</td>
                            <td className="text-right p-3 border font-semibold">{stock.dividendSafety}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    PG dominates on safety (95/100) and growth (5.7%). While Kimberly-Clark offers a higher
                    yield at 3.5%, its slower growth (2.8%) and higher payout ratio (70%) make PG the better
                    long-term choice. After 10 years of compounding, PG&apos;s growing dividend will exceed
                    KMB&apos;s flat-ish yield.
                  </p>
                </section>

                {/* DRIP Example */}
                <section id="drip-example">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    30-Year DRIP Compounding Example
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 PG Investment with DRIP</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Assumptions: 2.5% starting yield, 5.5% annual dividend growth, 7% stock appreciation, all dividends reinvested.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 1 (2026):</span>
                          <span className="text-slate-600">Value: $10,700 | Income: $250</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 10 (2035):</span>
                          <span className="text-slate-600">Value: $22,800 | Income: $595</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 20 (2045):</span>
                          <span className="text-slate-600">Value: $55,000 | Income: $1,680</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-100 dark:bg-green-950 rounded border-2 border-green-500">
                          <span className="font-bold">Year 30 (2055):</span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            Value: $131,000 | Income: $4,750
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="text-sm font-semibold mb-2">Key Insight:</p>
                        <p className="text-xs">
                          Despite starting with a lower yield than KMB or CLX, PG&apos;s faster dividend growth
                          means it produces more income after year 12 — and the gap widens every year after that.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Verdict */}
                <section id="verdict">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Final Verdict: BUY for Safety-First Investors
                  </h2>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Safety-First Investors</p>
                          <p className="text-2xl font-black text-green-600">STRONG BUY</p>
                          <p className="text-xs mt-1">Highest safety in the sector</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Income Investors</p>
                          <p className="text-2xl font-black text-green-600">BUY</p>
                          <p className="text-xs mt-1">2.5% yield + 5.7% growth</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Value Investors</p>
                          <p className="text-2xl font-black text-yellow-600">HOLD</p>
                          <p className="text-xs mt-1">Premium P/E limits upside</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <p>
                    Procter & Gamble is the safest dividend stock in consumer staples. You sacrifice some yield
                    compared to peers, but you gain unmatched reliability: 68 years of increases, 95/100 safety,
                    and brands that 5 billion people use daily. PG is a forever stock — buy it, reinvest
                    dividends, and let the 68-year compounding machine do its work.
                  </p>
                </section>

                {/* Calculator CTA */}
                <section id="calculators" className="not-prose">
                  <Card className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your PG Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Model your Procter & Gamble investment. See how 5.7% dividend growth compounds your income
                        over decades.
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

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Where to Buy Procter & Gamble Stock</h2>
                  <p>
                    Buy PG shares commission-free with automatic dividend reinvestment. All brokers below offer
                    zero commissions, free DRIP, and fractional shares.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Procter & Gamble a Dividend King?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes. PG is not just a Dividend King — it holds the longest active dividend increase streak
                          among major corporations at 68 consecutive years (since 1958). To qualify as a Dividend King,
                          a company needs 50+ years of consecutive increases. PG exceeds that by 18 years and shows
                          no signs of the streak ending.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Why is PG&apos;s dividend yield only 2.5%?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          PG&apos;s yield is lower because the stock price has appreciated faster than dividend growth,
                          trading at a premium P/E of 25-27x. This premium reflects PG&apos;s exceptional quality and
                          safety. The total return (2.5% yield + 5.7% growth + 4-6% price appreciation) is actually
                          competitive at 12-14% annually. Yield alone doesn&apos;t tell the whole story.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How does PG compare to Coca-Cola for dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          PG offers a longer streak (68 vs. 62 years), faster growth (5.7% vs. 4.1%), and a lower
                          payout ratio (62% vs. 72%). However, KO offers a higher yield (3.1% vs. 2.5%) and arguably
                          a wider moat in beverages. Both are excellent — PG is better for safety and growth, KO is
                          better for current income. Many portfolios include both.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is PG a good stock for retirees?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          PG is an excellent retirement stock for safety-first retirees who prioritize dividend
                          reliability over high current yield. The 2.5% yield provides stable income, the 5.7%
                          growth rate keeps pace with inflation, and the 95/100 safety score means virtually
                          no risk of a cut. If you need higher immediate income, pair PG with higher-yielding
                          stocks like REITs or utility companies.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Can store brands threaten Procter & Gamble&apos;s business?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Private label competition is real but manageable. Store brands have captured 20-25% market share
                          in some categories, but PG&apos;s premium brands maintain loyalty through perceived quality
                          differences. PG&apos;s response includes innovation (better products), tiering (premium and
                          value options), and marketing ($8B+ annual ad spend). During 2022-2023 inflation, PG
                          actually gained market share despite raising prices.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/is-coca-cola-good-dividend-stock" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Is Coca-Cola (KO) a Good Dividend Stock? 2026 Analysis
                    </Link>
                    <Link href="/blog/johnson-and-johnson-dividend-analysis" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Johnson & Johnson Dividend Analysis: 62 Years of Increases
                    </Link>
                    <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Consumer Staples Dividend Stocks
                    </Link>
                    <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete List of Dividend Kings 2026
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
