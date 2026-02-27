import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import { AlertTriangle, ArrowRight, Award, BarChart3, Building2, CheckCircle2, Clock, Crown, DollarSign, LineChart, O, Percent, PieChart, ShieldCheck, Star, Target, TrendingUp, XCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is Coca-Cola (KO) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Coca-Cola (KO) as a dividend stock: 62 consecutive years of increases, ~3.1% yield, dividend safety score, payout ratio analysis, and comparison with PepsiCo.',
  keywords: 'coca cola dividend, KO dividend, coca cola stock, KO dividend yield, coca cola dividend history, is coca cola a good dividend stock, dividend king stocks',
  openGraph: {
    title: 'Is Coca-Cola (KO) a Good Dividend Stock? Complete 2026 Analysis',
    description: '62 consecutive years of dividend increases. Deep analysis of KO yield, growth rate, payout ratio, business moat, and why Buffett loves this stock.',
    type: 'article',
  }
}

const historicalDividends = [
  { year: 2026, dividend: '$1.94', increase: '5.4%' },
  { year: 2025, dividend: '$1.84', increase: '5.1%' },
  { year: 2024, dividend: '$1.75', increase: '5.4%' },
  { year: 2023, dividend: '$1.84', increase: '5.7%' },
  { year: 2022, dividend: '$1.76', increase: '4.8%' },
  { year: 2021, dividend: '$1.68', increase: '2.4%' },
  { year: 2020, dividend: '$1.64', increase: '2.5%' },
  { year: 2019, dividend: '$1.60', increase: '2.6%' },
  { year: 2018, dividend: '$1.56', increase: '5.4%' },
  { year: 2017, dividend: '$1.48', increase: '5.7%' },
  { year: 2016, dividend: '$1.40', increase: '6.1%' },
  { year: 2015, dividend: '$1.32', increase: '8.2%' },
]

const comparisonStocks = [
  {
    symbol: 'KO',
    name: 'Coca-Cola',
    yield: '3.1%',
    growth5yr: '4.1%',
    payoutRatio: '72%',
    yearsIncreasing: 62,
    dividendSafety: '92/100',
    moat: 'Very Wide',
  },
  {
    symbol: 'PEP',
    name: 'PepsiCo',
    yield: '3.0%',
    growth5yr: '6.8%',
    payoutRatio: '68%',
    yearsIncreasing: 52,
    dividendSafety: '90/100',
    moat: 'Wide',
  },
  {
    symbol: 'KDP',
    name: 'Keurig Dr Pepper',
    yield: '2.6%',
    growth5yr: '7.5%',
    payoutRatio: '55%',
    yearsIncreasing: 6,
    dividendSafety: '78/100',
    moat: 'Moderate',
  },
  {
    symbol: 'MNST',
    name: 'Monster Beverage',
    yield: '0.0%',
    growth5yr: 'N/A',
    payoutRatio: '0%',
    yearsIncreasing: 0,
    dividendSafety: 'N/A',
    moat: 'Moderate',
  },
  {
    symbol: 'STZ',
    name: 'Constellation Brands',
    yield: '1.7%',
    growth5yr: '12.5%',
    payoutRatio: '32%',
    yearsIncreasing: 9,
    dividendSafety: '85/100',
    moat: 'Moderate',
  },
]

const segmentBreakdown = [
  {
    segment: 'Sparkling Beverages',
    percentage: '~44%',
    brands: 'Coca-Cola, Sprite, Fanta, Diet Coke, Coca-Cola Zero Sugar',
    growth: '3-5%',
  },
  {
    segment: 'Juice, Dairy, Plant-Based',
    percentage: '~13%',
    brands: 'Minute Maid, Simply, fairlife, Topo Chico Hard Seltzer',
    growth: '5-8%',
  },
  {
    segment: 'Water, Sports, Coffee, Tea',
    percentage: '~22%',
    brands: 'Dasani, SmartWater, Powerade, BodyArmor, Costa Coffee, Gold Peak',
    growth: '6-9%',
  },
  {
    segment: 'Bottling Investments & Other',
    percentage: '~21%',
    brands: 'Global bottling partnerships, fountain equipment, licensing',
    growth: '2-4%',
  },
]

export default function IsCocaColaGoodDividendStockPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-red-600 to-red-800">
                  <Crown className="h-3 w-3 mr-1" />
                  Dividend King - 62 Years
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is Coca-Cola (KO) a Good Dividend Stock? 2026 Analysis
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Warren Buffett&apos;s favorite stock has raised its dividend for 62 consecutive years.
                  With a 3.1% yield, iconic global brands, and one of the widest economic moats in business,
                  KO is the quintessential dividend stock. Here&apos;s our complete analysis for 2026.
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
              <Card className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-200 dark:border-red-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-red-600" />
                    Quick Verdict: Coca-Cola Dividend Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend King Status:</strong> 62 consecutive years of increases (since 1964) — one of the longest streaks in the market</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield:</strong> 3.1% ($1.94 annual dividend) — above the S&P 500 average of ~1.6%</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout Ratio:</strong> 72% of earnings — sustainable for a mature, capital-light business</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Buffett&apos;s Stamp:</strong> Berkshire Hathaway holds 400M+ shares, collecting $776M/year in KO dividends</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Our Rating:</strong> BUY for income investors — 92/100 dividend safety score</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">62-Year Dividend History</a></li>
                    <li><a href="#current-metrics" className="text-blue-600 hover:underline">Current Dividend Metrics</a></li>
                    <li><a href="#buffett" className="text-blue-600 hover:underline">Warren Buffett&apos;s KO Position</a></li>
                    <li><a href="#business-moat" className="text-blue-600 hover:underline">Business Moat Analysis</a></li>
                    <li><a href="#segments" className="text-blue-600 hover:underline">Revenue Segments</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety Score</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks to Consider</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">KO vs. Beverage Peers</a></li>
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
                    <Crown className="h-7 w-7 text-red-600" />
                    The World&apos;s Most Iconic Dividend Stock
                  </h2>
                  <p>
                    Coca-Cola (NYSE: KO) isn&apos;t just a beverage company — it&apos;s the gold standard of dividend investing.
                    With 62 consecutive years of dividend increases, a brand portfolio recognized by 94% of the world&apos;s
                    population, and Warren Buffett&apos;s largest and longest-held position, KO represents everything
                    dividend investors want in a stock.
                  </p>
                  <p>
                    The company sells 2.2 billion servings of beverages every single day across 200+ countries. That
                    kind of scale creates pricing power, operational efficiency, and cash flow stability that few
                    businesses can match. Coca-Cola doesn&apos;t need to innovate like a tech company — it needs to
                    keep billions of people drinking its products, which it has done for 138 years.
                  </p>
                  <p>
                    Today, KO offers a 3.1% dividend yield with mid-single-digit growth, a sustainable payout ratio,
                    and virtually zero risk of a dividend cut. For income-focused investors who value reliability over
                    excitement, Coca-Cola remains one of the best dividend stocks you can buy.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-green-600" />
                    62 Years of Consecutive Dividend Increases
                  </h2>
                  <p>
                    Coca-Cola has raised its dividend every single year since 1964. Through the Vietnam War,
                    the oil crises of the 1970s, Black Monday 1987, the dot-com bubble, the 2008 financial crisis,
                    the COVID-19 pandemic, and the 2022 inflation spike — KO never missed an increase.
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
                        Average annual increase (2015-2026): 4.9%. Note the dip to ~2.5% during 2019-2021 COVID era, followed by acceleration.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    The dividend has grown at roughly 5% per year over the past decade. While not as fast as some
                    growth-oriented dividend stocks, this consistency is the entire point. Coca-Cola doesn&apos;t give
                    you surprises — it gives you predictable, inflation-beating income growth year after year.
                  </p>
                  <p>
                    A $10,000 investment in KO in 2015 would have generated $330 in annual dividends that year.
                    By 2026, the same shares produce $485 in annual income — a 47% increase in cash flow with
                    zero additional investment.
                  </p>
                </section>

                {/* Current Metrics */}
                <section id="current-metrics">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Current Dividend Metrics (2026)
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-red-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Yield</p>
                            <p className="text-3xl font-bold">3.1%</p>
                          </div>
                          <Percent className="h-8 w-8 text-red-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Based on stock price ~$62. Quarterly payment of $0.485 per share.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividend</p>
                            <p className="text-3xl font-bold">$1.94</p>
                          </div>
                          <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Paid quarterly (Apr, Jul, Oct, Dec). 5.4% increase from 2025.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">5-Year CAGR</p>
                            <p className="text-3xl font-bold">4.1%</p>
                          </div>
                          <TrendingUp className="h-8 w-8 text-purple-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Compound annual growth from 2021-2026. Acceleration visible from 2022 forward.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-3xl font-bold">72%</p>
                          </div>
                          <PieChart className="h-8 w-8 text-orange-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Higher than average but sustainable for asset-light, high-margin business model.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    The 72% payout ratio may look elevated compared to stocks like JNJ (48%) or MSFT (25%), but
                    context matters. Coca-Cola is a capital-light franchise model — it licenses its brand to bottlers
                    who handle manufacturing and distribution. KO itself needs minimal reinvestment, so paying out
                    72% of earnings while still growing is entirely sustainable.
                  </p>
                  <p>
                    On a free cash flow basis, the coverage is even better. KO generates approximately $10-11 billion
                    in annual free cash flow against $8.4 billion in dividend payments, giving a comfortable 1.2-1.3x
                    FCF coverage ratio.
                  </p>
                </section>

                {/* Buffett Section */}
                <section id="buffett">
                  <h2 className="flex items-center gap-2">
                    <Star className="h-7 w-7 text-yellow-600" />
                    Warren Buffett&apos;s Love Affair with Coca-Cola
                  </h2>
                  <p>
                    Warren Buffett first purchased Coca-Cola stock in 1988, investing $1.3 billion to acquire
                    400 million shares. He has never sold a single share in 38 years. Today, Berkshire Hathaway&apos;s
                    KO position is worth approximately $25 billion — a 19x return on the original investment.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 border-l-4 border-l-yellow-500">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Buffett&apos;s KO Position by the Numbers</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Original Investment</p>
                          <p className="font-bold text-lg">$1.3B</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Current Value</p>
                          <p className="font-bold text-lg">~$25B</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Annual Dividends</p>
                          <p className="font-bold text-lg">$776M</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Yield on Cost</p>
                          <p className="font-bold text-lg text-green-600">~60%</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Buffett earns a 60% annual return on his original cost basis through dividends alone.
                        He collects more in dividends each year than he paid for the entire position.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    This is the ultimate demonstration of long-term dividend investing. Buffett doesn&apos;t care
                    about the 3.1% current yield — he cares about the yield on his original cost. At 60%+ annual
                    return on cost basis, his $1.3B investment now generates $776M per year in pure passive income.
                  </p>
                  <p>
                    When asked why he never sells, Buffett simply says: &quot;Why would I sell a business that keeps
                    sending me more money every year?&quot; This philosophy perfectly captures why Coca-Cola is the
                    ideal forever-hold dividend stock.
                  </p>
                </section>

                {/* Business Moat */}
                <section id="business-moat">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-blue-600" />
                    The Coca-Cola Moat: Why It&apos;s Nearly Unbreakable
                  </h2>
                  <p>
                    Coca-Cola possesses one of the widest economic moats in business history. The moat has four
                    reinforcing layers that make it virtually impossible for competitors to replicate:
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">1. Brand Power</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Coca-Cola is the most recognized brand on Earth, valued at $97 billion (Interbrand 2025).
                          The brand alone generates a price premium of 30-50% over generic alternatives. Consumers
                          buy Coca-Cola not because it&apos;s the cheapest option but because of emotional attachment
                          built over 138 years of marketing.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">2. Global Distribution Network</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          KO&apos;s distribution reaches 200+ countries through partnerships with bottlers who have
                          invested billions in manufacturing and logistics infrastructure. A competitor would need
                          decades and hundreds of billions to replicate this network. Coca-Cola products are available
                          within arm&apos;s reach of virtually every human on the planet.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">3. Pricing Power</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Coca-Cola has consistently raised prices above inflation without losing material volume.
                          In 2022-2023, KO raised prices 10-12% while volume remained flat or grew slightly. This
                          pricing power comes from brand loyalty — consumers pay more rather than switching to generics.
                          It is the ultimate inflation hedge.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">4. Asset-Light Franchise Model</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          KO doesn&apos;t own most of its bottling operations. It sells concentrate and licenses
                          its brands to independent bottlers who handle capital-intensive manufacturing and distribution.
                          This model generates 60%+ gross margins and requires minimal capital expenditure, maximizing
                          cash available for dividends.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Revenue Segments */}
                <section id="segments">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Revenue Breakdown by Segment
                  </h2>
                  <p>
                    While most people think of Coca-Cola as a single-product company, the reality is far more
                    diversified. KO owns 200+ brands across sparkling beverages, water, sports drinks, juice,
                    dairy, coffee, and tea. This diversification reduces risk and opens new growth vectors.
                  </p>

                  <div className="space-y-4 my-6">
                    {segmentBreakdown.map((segment) => (
                      <Card key={segment.segment} className="border-l-4 border-l-red-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{segment.segment}</h3>
                            <Badge className="bg-red-600">{segment.percentage}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-2 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Key Brands</p>
                              <p className="font-semibold text-xs">{segment.brands}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Growth Rate</p>
                              <p className="font-semibold text-green-600">{segment.growth}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    The fastest-growing segments are water, sports drinks, and coffee — categories where health-conscious
                    consumers are spending more. KO&apos;s acquisition of Costa Coffee (2019) and BodyArmor (2021) positions
                    it to capture these trends. Meanwhile, Coca-Cola Zero Sugar has grown double digits for 7 consecutive
                    years, proving the core brand can evolve.
                  </p>
                </section>

                {/* InlineSignup */}
                <div className="not-prose">
                  <InlineSignup />
                </div>

                {/* Dividend Safety */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-green-600" />
                    Dividend Safety Score: 92/100 (Excellent)
                  </h2>
                  <p>
                    We rate Coca-Cola&apos;s dividend safety at 92 out of 100 — an excellent score indicating near-zero
                    risk of a dividend cut under any foreseeable economic scenario.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Safety Factor Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">62-Year Track Record (Perfect)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Never cut or frozen through 8 recessions and 62 years of market turbulence.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Free Cash Flow Coverage: 1.25x (Strong)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              $10-11B FCF vs. $8.4B dividends. Cash-based coverage exceeds earnings-based.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Recession Resistance: Exceptional</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Beverages are staples. Volume declined only 2% during COVID (2020) and recovered in one quarter.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Credit Rating: A+ (Strong Investment Grade)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Manageable debt levels with a net debt to EBITDA of ~2.5x. Interest well-covered by cash flows.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Payout Ratio: 72% (Moderate Concern)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Higher than ideal, limiting buffer for growth. Manageable for capital-light model but leaves less margin for error.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The only factor preventing a higher score is the elevated payout ratio. At 72%, KO has less
                    margin for error than a stock like JNJ (48%) or MSFT (25%). However, the asset-light franchise
                    model means KO needs far less retained capital for growth than capital-intensive businesses,
                    making 72% sustainable over the long term.
                  </p>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                    Risks to Consider Before Buying KO
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Bull Case
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Unmatched brand:</strong> $97B brand value that appreciates over time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Emerging markets:</strong> 4B+ consumers in Africa, Asia, Latin America with growing disposable income</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Zero Sugar growth:</strong> Coca-Cola Zero has grown 10%+ for 7 straight years</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Pricing power:</strong> Consistently raises prices above inflation without losing volume</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Portfolio evolution:</strong> Coffee, sports drinks, and health beverages expanding TAM</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Bear Case
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Sugar backlash:</strong> Health trends and sugar taxes could pressure core product demand</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>GLP-1 drugs:</strong> Ozempic, Wegovy usage reduces appetite and beverage consumption</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Currency headwinds:</strong> Strong US dollar reduces value of international earnings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Slow growth:</strong> Mature industry limits EPS growth to mid-single digits</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Premium valuation:</strong> P/E of 24-26x means limited upside potential</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    The GLP-1 drug risk deserves special mention. As Ozempic, Wegovy, and similar weight-loss drugs
                    become more widespread, some analysts worry about reduced snack and beverage consumption. However,
                    KO management has noted no material volume impact from GLP-1 adoption so far, and the company&apos;s
                    zero-sugar products actually align with health-conscious trends.
                  </p>
                </section>

                {/* Comparison */}
                <section id="comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    Coca-Cola vs. Beverage Peers
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
                          <th className="text-left p-3 border">Moat</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonStocks.map((stock) => (
                          <tr key={stock.symbol} className={stock.symbol === 'KO' ? 'bg-red-50 dark:bg-red-950 font-semibold' : ''}>
                            <td className="p-3 border">{stock.name} ({stock.symbol})</td>
                            <td className="text-right p-3 border">{stock.yield}</td>
                            <td className="text-right p-3 border text-green-600">{stock.growth5yr}</td>
                            <td className="text-right p-3 border">{stock.payoutRatio}</td>
                            <td className="text-right p-3 border">{stock.yearsIncreasing} yrs</td>
                            <td className="text-right p-3 border font-semibold">{stock.dividendSafety}</td>
                            <td className="text-left p-3 border">{stock.moat}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>KO vs. PEP:</strong> The eternal debate. PepsiCo offers faster dividend growth (6.8% vs. 4.1%)
                    and greater diversification through its Frito-Lay snack business. However, KO has a 10-year longer
                    dividend streak and arguably a stronger brand moat. For pure income, KO wins; for growth, PEP wins.
                  </p>
                  <p>
                    <strong>KO vs. KDP:</strong> Keurig Dr Pepper grows faster (7.5%) with a lower payout ratio (55%), but
                    it has only 6 years of increases — untested through recessions. KO&apos;s 62-year track record cannot be
                    replicated.
                  </p>
                </section>

                {/* DRIP Example */}
                <section id="drip-example">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    30-Year DRIP Compounding Example
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 KO Investment with DRIP Reinvestment</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Assumptions: 3.1% starting yield, 4.5% annual dividend growth, 7% annual stock price appreciation, all dividends reinvested.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 1 (2026):</span>
                          <span className="text-slate-600">Value: $10,700 | Income: $310</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 5 (2030):</span>
                          <span className="text-slate-600">Value: $15,200 | Income: $430</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 10 (2035):</span>
                          <span className="text-slate-600">Value: $24,100 | Income: $680</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 20 (2045):</span>
                          <span className="text-slate-600">Value: $61,500 | Income: $1,740</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-100 dark:bg-green-950 rounded border-2 border-green-500">
                          <span className="font-bold">Year 30 (2055):</span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            Value: $152,000 | Income: $4,310
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="text-sm font-semibold mb-2">Key Takeaway:</p>
                        <p className="text-xs">
                          Your $10,000 becomes $152,000 (15.2x return) with annual income of $4,310 — a yield-on-cost
                          of 43.1%. You earn more in dividends each year than you originally invested every 2.3 years.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Verdict */}
                <section id="verdict">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Final Verdict: BUY for Income Investors
                  </h2>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Income Investors</p>
                          <p className="text-2xl font-black text-green-600">BUY</p>
                          <p className="text-xs mt-1">Reliable, growing income stream</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Growth Investors</p>
                          <p className="text-2xl font-black text-yellow-600">HOLD</p>
                          <p className="text-xs mt-1">Limited capital appreciation upside</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Retirees</p>
                          <p className="text-2xl font-black text-green-600">STRONG BUY</p>
                          <p className="text-xs mt-1">Perfect for income stability</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <p>
                    Coca-Cola is the textbook dividend stock. You will not get rich quickly owning KO, and that&apos;s
                    the point. You will get steadily richer through 62+ years of dividend growth, compounding,
                    and one of the most durable business moats in capitalism. Buy it, reinvest the dividends, and
                    let time do the heavy lifting.
                  </p>
                </section>

                {/* Calculator CTA */}
                <section id="calculators" className="not-prose">
                  <Card className="bg-gradient-to-br from-red-600 to-red-800 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Coca-Cola Dividend Income</h3>
                      <p className="mb-6 text-red-100">
                        Model your KO investment with our free calculators. See how much dividend income you&apos;ll
                        generate over 10, 20, or 30 years with DRIP reinvestment.
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
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Where to Buy Coca-Cola Stock</h2>
                  <p>
                    Buy KO shares commission-free with automatic dividend reinvestment. All brokers below offer
                    zero commissions, free DRIP, and fractional shares starting at $1.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Coca-Cola a good dividend stock for beginners?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, KO is one of the best dividend stocks for beginners. With 62 consecutive years of increases,
                          a 3.1% yield, and near-zero risk of a dividend cut, it&apos;s the ultimate &quot;set it and forget
                          it&quot; investment. Warren Buffett himself has held KO for 38 years without selling a share.
                          Start with fractional shares (as little as $1) and reinvest dividends through DRIP.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much do I need to invest in KO to earn $100/month in dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          At a 3.1% dividend yield, you need approximately $38,700 invested in KO to generate $1,200/year
                          ($100/month) in dividend income. That&apos;s about 624 shares at ~$62 per share. You can build this
                          position over time through regular purchases and DRIP reinvestment — it doesn&apos;t need to happen
                          all at once.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Will GLP-1 weight loss drugs hurt Coca-Cola&apos;s sales?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          GLP-1 drugs like Ozempic and Wegovy reduce appetite and could theoretically lower beverage
                          consumption. However, KO management reports no material volume impact as of early 2026.
                          Additionally, Coca-Cola Zero Sugar (no calories) has been growing double-digits and is
                          well-positioned for health-conscious consumers. The company&apos;s portfolio diversification
                          into water, coffee, and sports drinks also mitigates this risk.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I buy KO or PEP for dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Both are excellent choices. KO offers a slightly higher yield (3.1% vs 3.0%) and a longer
                          dividend streak (62 vs 52 years). PEP offers faster dividend growth (6.8% vs 4.1%) and
                          greater diversification through Frito-Lay snacks. For pure income and safety, choose KO.
                          For growth and diversification, choose PEP. Many dividend investors own both.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is Coca-Cola&apos;s dividend payout schedule?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Coca-Cola pays dividends quarterly, typically in April, July, October, and December. The
                          current quarterly payment is $0.485 per share ($1.94 annually). Ex-dividend dates are
                          usually about 2-3 weeks before the payment date. Set up automatic DRIP through your
                          broker to reinvest each payment into additional shares for free.
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
                    <Link href="/blog/is-pepsi-good-dividend-stock" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Is PepsiCo (PEP) a Good Dividend Stock? 2026 Analysis
                    </Link>
                    <Link href="/blog/best-consumer-staples-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Consumer Staples Dividend Stocks
                    </Link>
                    <Link href="/blog/dividend-kings-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete List of Dividend Kings 2026
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
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
