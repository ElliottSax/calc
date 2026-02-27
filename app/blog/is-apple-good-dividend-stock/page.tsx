import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import { AlertTriangle, ArrowRight, Award, BarChart3, Building2, CheckCircle2, Clock, DollarSign, L, Landmark, LineChart, Percent, PieChart, ShieldCheck, Star, Target, TrendingUp, XCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is Apple (AAPL) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Apple (AAPL) as a dividend stock: 12+ years of increases, ~0.5% yield, $100B+ in buybacks, iPhone ecosystem moat, and why Apple is a total return machine that happens to pay dividends.',
  keywords: 'apple dividend, AAPL dividend, apple stock dividend, AAPL dividend yield, apple dividend history, is apple a good dividend stock, apple stock analysis 2026',
  openGraph: {
    title: 'Is Apple (AAPL) a Good Dividend Stock? Complete 2026 Analysis',
    description: '12 years of increases, 0.5% yield, but $100B+ in annual buybacks. Deep analysis of why Apple is the world\'s greatest capital return machine.',
    type: 'article',
  }
}

const historicalDividends = [
  { year: 2026, dividend: '$1.02', increase: '4.1%' },
  { year: 2025, dividend: '$0.98', increase: '4.3%' },
  { year: 2024, dividend: '$0.96', increase: '4.3%' },
  { year: 2023, dividend: '$0.92', increase: '4.5%' },
  { year: 2022, dividend: '$0.88', increase: '4.8%' },
  { year: 2021, dividend: '$0.85', increase: '7.3%' },
  { year: 2020, dividend: '$0.80', increase: '6.5%' },
  { year: 2019, dividend: '$0.75', increase: '5.5%' },
  { year: 2018, dividend: '$0.68', increase: '15.9%' },
  { year: 2017, dividend: '$0.60', increase: '10.5%' },
  { year: 2016, dividend: '$0.55', increase: '9.6%' },
  { year: 2015, dividend: '$0.49', increase: '10.6%' },
]

const capitalReturnHistory = [
  { year: '2026E', dividends: '$15.6B', buybacks: '$95B', total: '$110.6B' },
  { year: '2025', dividends: '$15.2B', buybacks: '$90B', total: '$105.2B' },
  { year: '2024', dividends: '$14.8B', buybacks: '$95B', total: '$109.8B' },
  { year: '2023', dividends: '$14.5B', buybacks: '$77B', total: '$91.5B' },
  { year: '2022', dividends: '$14.3B', buybacks: '$90B', total: '$104.3B' },
  { year: '2021', dividends: '$14.0B', buybacks: '$85B', total: '$99.0B' },
  { year: '2020', dividends: '$13.7B', buybacks: '$72B', total: '$85.7B' },
]

const revenueSegments = [
  {
    segment: 'iPhone',
    percentage: '~52%',
    revenue: '~$205B',
    growth: '3-6%',
    description: 'The foundation. 1.5B+ active devices globally. Annual upgrade cycle + emerging market penetration drive steady growth.',
  },
  {
    segment: 'Services',
    percentage: '~24%',
    revenue: '~$96B',
    growth: '14-18%',
    description: 'App Store, Apple Music, iCloud, Apple TV+, Apple Pay, Apple Care, Apple Arcade. 1B+ paid subscriptions. 70%+ gross margin.',
  },
  {
    segment: 'Mac',
    percentage: '~8%',
    revenue: '~$32B',
    growth: '3-5%',
    description: 'MacBook, iMac, Mac Pro, Mac mini. Apple Silicon (M-series chips) driving enterprise adoption and ASP increases.',
  },
  {
    segment: 'iPad',
    percentage: '~6%',
    revenue: '~$24B',
    growth: '2-4%',
    description: 'iPad, iPad Air, iPad Pro, iPad mini. Mature category but sticky within the ecosystem.',
  },
  {
    segment: 'Wearables, Home & Accessories',
    percentage: '~10%',
    revenue: '~$40B',
    growth: '4-7%',
    description: 'Apple Watch, AirPods, HomePod, Apple Vision Pro, Beats. Watch is the #1 wearable globally.',
  },
]

const comparisonStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple',
    yield: '0.5%',
    divGrowth: '5.8%',
    buybackYield: '3.8%',
    totalYield: '4.3%',
    payoutRatio: '15%',
    dividendSafety: '98/100',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft',
    yield: '0.8%',
    divGrowth: '10.3%',
    buybackYield: '0.8%',
    totalYield: '1.6%',
    payoutRatio: '25%',
    dividendSafety: '99/100',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet',
    yield: '0.5%',
    divGrowth: 'N/A (new)',
    buybackYield: '2.5%',
    totalYield: '3.0%',
    payoutRatio: '10%',
    dividendSafety: '95/100',
  },
  {
    symbol: 'KO',
    name: 'Coca-Cola',
    yield: '3.1%',
    divGrowth: '4.1%',
    buybackYield: '0.5%',
    totalYield: '3.6%',
    payoutRatio: '72%',
    dividendSafety: '92/100',
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom',
    yield: '1.3%',
    divGrowth: '14.2%',
    buybackYield: '1.0%',
    totalYield: '2.3%',
    payoutRatio: '40%',
    dividendSafety: '85/100',
  },
]

export default function IsAppleGoodDividendStockPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-gray-700 to-gray-900">
                  <Zap className="h-3 w-3 mr-1" />
                  Capital Return Machine
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is Apple (AAPL) a Good Dividend Stock? 2026 Analysis
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Apple&apos;s 0.5% dividend yield looks terrible on paper. But when you add $90-100 billion
                  in annual share buybacks, Apple returns more capital to shareholders than any company in
                  history. With 12+ years of dividend increases, $100B+ in annual free cash flow, and the
                  most loyal customer base in tech, here&apos;s why Apple is the ultimate total return stock.
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
                    <Landmark className="h-4 w-4" />
                    Technology
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 border-2 border-gray-300 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    Quick Verdict: Apple Dividend Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend Streak:</strong> 12+ consecutive years of increases since restarting dividends in 2012</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield:</strong> 0.5% ($1.02 annual) — lowest among mega-cap dividend payers</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Buyback Yield:</strong> 3.8% ($90-100B/year) — the real shareholder return is 4.3% total</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout Ratio:</strong> Only 15% of earnings — room to 6x the dividend without stress</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Our Rating:</strong> BUY for total return investors — 98/100 dividend safety score</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">12-Year Dividend History</a></li>
                    <li><a href="#buybacks" className="text-blue-600 hover:underline">The Buyback Story</a></li>
                    <li><a href="#current-metrics" className="text-blue-600 hover:underline">Current Metrics</a></li>
                    <li><a href="#ecosystem" className="text-blue-600 hover:underline">Ecosystem Moat</a></li>
                    <li><a href="#services" className="text-blue-600 hover:underline">Services Revenue Growth</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety (98/100)</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">AAPL vs. Peers</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks to Consider</a></li>
                    <li><a href="#drip-example" className="text-blue-600 hover:underline">15-Year DRIP Projection</a></li>
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
                    <Zap className="h-7 w-7 text-gray-700" />
                    The World&apos;s Greatest Capital Return Machine
                  </h2>
                  <p>
                    Apple (NASDAQ: AAPL) is not a traditional dividend stock — and that is exactly why it
                    deserves a place in every dividend investor&apos;s portfolio. While the 0.5% yield looks
                    anemic next to a 3% Coca-Cola or 3% JNJ, Apple&apos;s total shareholder return tells a
                    completely different story.
                  </p>
                  <p>
                    In fiscal year 2025, Apple returned $105 billion to shareholders — $15.2 billion in
                    dividends plus $90 billion in share buybacks. No other company in history has returned
                    this much capital. Apple has repurchased over $700 billion of its own stock since 2012,
                    reducing the share count from 6.6 billion to approximately 15.4 billion shares (pre-split
                    adjusted). Fewer shares means your ownership percentage grows every year, which is
                    economically identical to receiving extra dividends.
                  </p>
                  <p>
                    Think of Apple as a company that pays a 4.3% &quot;total yield&quot; — 0.5% in dividends
                    plus 3.8% in buyback yield. The buyback portion is actually more tax-efficient than dividends
                    because you don&apos;t owe taxes until you sell shares. Apple is the sophisticated dividend
                    investor&apos;s choice.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-green-600" />
                    12 Years of Dividend Growth (Since 2012 Restart)
                  </h2>
                  <p>
                    Apple discontinued its dividend in 1995 when the company was near bankruptcy under
                    CEO Gil Amelio. Steve Jobs returned and famously eliminated the dividend to conserve
                    cash. Tim Cook restarted dividend payments in 2012, and Apple has increased the payout
                    every year since.
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
                        Note the deceleration from 10-16% increases (2015-2018) to 4-5% (2022-2026). Apple has
                        shifted capital allocation toward buybacks, which are more tax-efficient.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    The slowing dividend growth rate does not signal trouble — it reflects a deliberate
                    strategic choice. Apple prefers buybacks over dividends because buybacks are tax-deferred
                    (no tax until you sell shares) while dividends are taxed immediately. By repurchasing
                    $90B+ in stock annually, Apple effectively returns more to shareholders in a tax-advantaged
                    way.
                  </p>
                </section>

                {/* Buyback Story */}
                <section id="buybacks">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    The $700 Billion Buyback Machine
                  </h2>
                  <p>
                    Apple&apos;s share buyback program is the largest in corporate history. Since initiating
                    buybacks in 2012, Apple has repurchased over $700 billion of its own stock — more than
                    the entire market capitalization of 99% of publicly traded companies.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Apple Capital Return History</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Year</th>
                              <th className="text-right p-2">Dividends</th>
                              <th className="text-right p-2">Buybacks</th>
                              <th className="text-right p-2 font-bold">Total Return</th>
                            </tr>
                          </thead>
                          <tbody>
                            {capitalReturnHistory.map((year) => (
                              <tr key={year.year} className="border-b">
                                <td className="p-2">{year.year}</td>
                                <td className="text-right p-2">{year.dividends}</td>
                                <td className="text-right p-2">{year.buybacks}</td>
                                <td className="text-right p-2 font-bold text-green-600">{year.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Apple returns $100-110B annually to shareholders. Buybacks outnumber dividends 6:1.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Why buybacks matter for dividend investors:</strong> When Apple repurchases $90B
                    in stock, it reduces the share count by roughly 3-4% per year. This means your percentage
                    ownership of Apple increases annually without buying additional shares. If Apple earns $7
                    per share this year, the same earnings distributed over fewer shares next year will be
                    $7.28 per share — automatic EPS growth that drives future dividend increases.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Total Shareholder Yield: The Real Picture</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Yield</p>
                          <p className="text-2xl font-bold">0.5%</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Buyback Yield</p>
                          <p className="text-2xl font-bold">3.8%</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Total Shareholder Yield</p>
                          <p className="text-2xl font-bold text-green-600">4.3%</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Apple&apos;s 4.3% total shareholder yield exceeds Coca-Cola&apos;s 3.6% (3.1% dividend + 0.5% buyback).
                        The difference is that Apple&apos;s return is mostly tax-deferred through buybacks.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Current Metrics */}
                <section id="current-metrics">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Current Dividend Metrics (2026)
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-gray-700">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Yield</p>
                            <p className="text-3xl font-bold">0.5%</p>
                          </div>
                          <Percent className="h-8 w-8 text-gray-700" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Based on stock price ~$210. Low yield reflects premium valuation, not stinginess.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividend</p>
                            <p className="text-3xl font-bold">$1.02</p>
                          </div>
                          <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Paid quarterly ($0.255 per share). Usually increased each May.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-3xl font-bold">15%</p>
                          </div>
                          <PieChart className="h-8 w-8 text-purple-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Lowest payout ratio among major dividend payers. Room to 6x the dividend.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Free Cash Flow</p>
                            <p className="text-3xl font-bold">$110B+</p>
                          </div>
                          <TrendingUp className="h-8 w-8 text-orange-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Annual FCF exceeds entire market cap of 95% of S&P 500 companies.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Ecosystem Moat */}
                <section id="ecosystem">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-blue-600" />
                    The Ecosystem Moat: 2.2 Billion Active Devices
                  </h2>
                  <p>
                    Apple&apos;s competitive moat is not any single product — it is the interconnected
                    ecosystem of hardware, software, and services that makes switching nearly impossible.
                    With 2.2 billion active devices worldwide and a 97%+ customer retention rate, Apple
                    has arguably the stickiest customer base in technology.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Apple Ecosystem Lock-In</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Active Devices</p>
                          <p className="font-bold text-lg">2.2B+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Paid Subscriptions</p>
                          <p className="font-bold text-lg">1B+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Customer Retention</p>
                          <p className="font-bold text-lg">97%+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Brand Value</p>
                          <p className="font-bold text-lg">#1 Global</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Once you own an iPhone, you buy AirPods (they work best with iPhone), Apple Watch
                    (requires iPhone), Mac (AirDrop, Handoff, Universal Clipboard), and iCloud storage.
                    Then you subscribe to Apple Music, Apple TV+, Apple Arcade, and Apple Care. Each product
                    increases switching costs exponentially. Leaving Apple means replacing 5-10 products and
                    losing years of photos, messages, and app purchases.
                  </p>
                  <p>
                    This ecosystem generates massive recurring revenue. Apple&apos;s Services segment
                    ($96B+ annually) grows 14-18% with 70%+ gross margins — far more profitable than
                    hardware. Every iPhone sold creates a decade of services revenue.
                  </p>
                </section>

                {/* Services Revenue */}
                <section id="services">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Revenue Segments: Hardware + Services Flywheel
                  </h2>

                  <div className="space-y-4 my-6">
                    {revenueSegments.map((segment) => (
                      <Card key={segment.segment} className="border-l-4 border-l-gray-600">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{segment.segment}</h3>
                            <Badge className="bg-gray-700">{segment.percentage}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Revenue</p>
                              <p className="font-semibold">{segment.revenue}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Growth</p>
                              <p className="font-semibold text-green-600">{segment.growth}</p>
                            </div>
                          </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300">{segment.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    <strong>Services is the dividend growth engine.</strong> At $96B+ with 70%+ margins, Services
                    generates more profit than iPhone despite being less than half the revenue. As Services grows
                    from 24% to 30%+ of revenue over the next 5 years, Apple&apos;s overall margin expands,
                    creating more cash flow for dividends and buybacks.
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
                    Dividend Safety Score: 98/100 (Exceptional)
                  </h2>

                  <Card className="my-6 bg-green-50 dark:bg-green-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Why Apple&apos;s Dividend Is Nearly Risk-Free</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Payout Ratio: 15% (Ultra-Safe)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Apple pays only 15% of earnings as dividends. Even an 85% drop in earnings would not
                              force a dividend cut. This is the safest payout ratio among dividend-paying stocks.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Free Cash Flow: $110B+ (Extraordinary)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              FCF covers dividends ($15.6B) by 7x. Apple generates more free cash flow than any
                              public company in the world.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Net Cash: $50B+ (Fortress)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Despite spending $700B+ on buybacks, Apple still holds a net cash position. The
                              balance sheet is virtually indestructible.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Customer Lock-In: 97% Retention (Unmatched)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              2.2B active devices create recurring revenue that persists through recessions. iPhone
                              revenue dipped only 8% in 2020 COVID and recovered within two quarters.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Shorter Streak: 12 Years (Deduction)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Only 12 years of increases (since 2012 restart). Not tested through as many recessions
                              as Dividend Kings. Historically cut the dividend in 1995 (different era/management).
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Comparison Table */}
                <section id="comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    AAPL vs. Peers: Total Shareholder Yield
                  </h2>
                  <p>
                    Traditional yield comparisons mislead with Apple. The true comparison is total
                    shareholder yield — dividends plus buyback yield combined.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="text-left p-3 border">Stock</th>
                          <th className="text-right p-3 border">Div. Yield</th>
                          <th className="text-right p-3 border">Div. Growth</th>
                          <th className="text-right p-3 border">Buyback Yield</th>
                          <th className="text-right p-3 border font-bold">Total Yield</th>
                          <th className="text-right p-3 border">Payout</th>
                          <th className="text-right p-3 border">Safety</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonStocks.map((stock) => (
                          <tr key={stock.symbol} className={stock.symbol === 'AAPL' ? 'bg-gray-100 dark:bg-gray-900 font-semibold' : ''}>
                            <td className="p-3 border">{stock.name} ({stock.symbol})</td>
                            <td className="text-right p-3 border">{stock.yield}</td>
                            <td className="text-right p-3 border text-green-600">{stock.divGrowth}</td>
                            <td className="text-right p-3 border">{stock.buybackYield}</td>
                            <td className="text-right p-3 border font-bold text-green-600">{stock.totalYield}</td>
                            <td className="text-right p-3 border">{stock.payoutRatio}</td>
                            <td className="text-right p-3 border">{stock.dividendSafety}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    When measured by total shareholder yield, Apple (4.3%) beats Coca-Cola (3.6%) and is
                    competitive with every traditional dividend stock. The difference is that most of Apple&apos;s
                    return comes through tax-deferred buybacks rather than immediately-taxable dividends.
                  </p>
                  <p>
                    <strong>AAPL vs. MSFT for dividends:</strong> Microsoft is the better pure dividend stock
                    (higher yield, faster dividend growth, longer streak). But Apple returns more total capital
                    through buybacks ($90B vs. $20B). Choose MSFT for dividend growth; choose AAPL for
                    total capital returns and tax efficiency.
                  </p>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                    Risks to Consider
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
                            <span>Services growing 14-18% with 70%+ margins</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>2.2B active devices = massive installed base</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>$100B+ annual buybacks shrink float 3-4%/year</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Apple Intelligence / AI features driving upgrades</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>India and emerging markets growth opportunity</span>
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
                            <span>iPhone saturation in developed markets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Antitrust: App Store fees under EU/US regulatory pressure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>China risk: 18% of revenue from geopolitically sensitive market</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Premium valuation (30-33x P/E) limits margin of safety</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Slow dividend growth (4-5%) vs. MSFT (10%+)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    The biggest risk for Apple as a dividend stock is that management continues to prioritize
                    buybacks over dividend growth. If you need growing dividend income, MSFT is the better
                    choice. If you want maximum total capital returns in a tax-efficient wrapper, AAPL wins.
                  </p>
                </section>

                {/* DRIP Example */}
                <section id="drip-example">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    15-Year Total Return Projection
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 Apple Investment with DRIP</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Assumptions: 0.5% starting yield, 5% dividend growth, 10% stock appreciation (includes buyback effect), dividends reinvested.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 1 (2026):</span>
                          <span className="text-slate-600">Value: $11,000 | Income: $50</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 5 (2030):</span>
                          <span className="text-slate-600">Value: $17,100 | Income: $82</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 10 (2035):</span>
                          <span className="text-slate-600">Value: $30,200 | Income: $160</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-100 dark:bg-green-950 rounded border-2 border-green-500">
                          <span className="font-bold">Year 15 (2040):</span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            Value: $53,400 | Income: $315
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="text-sm font-semibold mb-2">Key Insight: Capital Gains Drive Apple&apos;s Value</p>
                        <p className="text-xs">
                          Apple&apos;s value comes from capital appreciation (5.3x in 15 years), not dividend income
                          ($315/year). The dividend is the cherry on top of a growth engine. If you need income,
                          sell 2-3% of shares annually — it is equivalent to a 2-3% yield with lower taxes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Verdict */}
                <section id="verdict">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Final Verdict: BUY for Total Return, WATCH for Income
                  </h2>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Total Return Investors</p>
                          <p className="text-2xl font-black text-green-600">STRONG BUY</p>
                          <p className="text-xs mt-1">$100B+/year capital returns</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Dividend Growth Investors</p>
                          <p className="text-2xl font-black text-yellow-600">HOLD</p>
                          <p className="text-xs mt-1">Slow 4-5% div growth vs MSFT 10%</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Income-Now Investors</p>
                          <p className="text-2xl font-black text-red-600">WATCH</p>
                          <p className="text-xs mt-1">0.5% yield insufficient for income</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <p>
                    Apple is the worst traditional dividend stock and the best total return machine in the market.
                    If you measure success by dividend yield alone, skip AAPL — buy KO or JNJ instead. But if you
                    understand that buybacks are tax-advantaged dividends and that total shareholder yield is the
                    true metric, Apple&apos;s 4.3% total yield, $110B FCF, and 98/100 safety make it a core
                    portfolio holding for any long-term investor.
                  </p>
                </section>

                {/* Calculator CTA */}
                <section id="calculators" className="not-prose">
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Apple Investment Returns</h3>
                      <p className="mb-6 text-gray-300">
                        Model your AAPL investment. See how buyback-powered growth compounds $10,000
                        into life-changing wealth over 15-30 years.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/investment-return">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Investment Return Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            DRIP Calculator
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
                  <h2>Where to Buy Apple Stock</h2>
                  <p>
                    Buy AAPL shares commission-free with automatic dividend reinvestment. All brokers below
                    offer fractional shares, so you can invest any amount in Apple.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Apple a good dividend stock?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Apple is not a good traditional dividend stock if you need current income — the 0.5%
                          yield is too low. However, Apple is an excellent total return stock that happens to
                          pay dividends. The $90-100B in annual buybacks plus $15B in dividends equals a 4.3%
                          total shareholder yield — higher than Coca-Cola. For long-term wealth building with
                          growing income, Apple is one of the best stocks you can own.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Why doesn&apos;t Apple pay a higher dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Apple deliberately prioritizes buybacks over dividends because buybacks are more
                          tax-efficient. Dividends are taxed immediately at 15-20% (or higher). Buybacks are
                          tax-deferred — you only pay capital gains tax when you sell shares, which could be
                          decades later. Both return cash to shareholders, but buybacks put more money in your
                          pocket after taxes. Apple&apos;s 15% payout ratio also gives them maximum flexibility.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much Apple stock do I need for $100/month in dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          At a 0.5% yield, you need approximately $240,000 invested in AAPL to generate $1,200/year
                          ($100/month) in dividends. That is about 1,143 shares at ~$210. However, a smarter
                          approach is to hold Apple for total return and sell 1-2% of shares annually for income
                          — this effectively creates a 1-2% &quot;yield&quot; on top of the 0.5% dividend with lower
                          tax rates.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I buy Apple or Microsoft for dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Microsoft is the better pure dividend stock: higher yield (0.8% vs 0.5%), much faster
                          dividend growth (10.3% vs 5.8%), and a longer streak (22 vs 12 years). Apple is better
                          for total capital returns and tax efficiency thanks to massive buybacks ($90B vs $20B).
                          Both are excellent stocks. The ideal portfolio includes both — MSFT for growing income
                          and AAPL for total return and buyback compounding.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">When does Apple pay dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Apple pays dividends quarterly in February, May, August, and November. The current
                          quarterly payment is $0.255 per share ($1.02 annually). Apple typically announces its
                          annual dividend increase in late April or early May alongside Q2 earnings. The ex-dividend
                          date is usually about 10 days before the payment date.
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
                    <Link href="/blog/is-microsoft-good-dividend-stock" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Is Microsoft (MSFT) a Good Dividend Stock? 2026 Analysis
                    </Link>
                    <Link href="/blog/best-technology-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Technology Dividend Stocks 2026
                    </Link>
                    <Link href="/blog/growth-stocks-vs-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Growth Stocks vs. Dividend Stocks: Which Is Better?
                    </Link>
                    <Link href="/blog/dividend-income-vs-capital-gains" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Income vs. Capital Gains: Complete Comparison
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
