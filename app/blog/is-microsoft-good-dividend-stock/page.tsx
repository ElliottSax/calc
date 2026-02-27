import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import { AlertTriangle, ArrowRight, Award, BarChart3, Building2, CheckCircle2, Clock, DollarSign, Landmark, LineChart, Percent, PieChart, ShieldCheck, Star, T, Target, TrendingUp, XCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is Microsoft (MSFT) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of Microsoft (MSFT) as a dividend stock: 22 years of consecutive increases, ~0.8% yield, massive dividend growth, Azure cloud dominance, and why MSFT combines growth and income.',
  keywords: 'microsoft dividend, MSFT dividend, microsoft stock dividend, MSFT dividend yield, microsoft dividend history, is microsoft a good dividend stock, tech dividend stocks',
  openGraph: {
    title: 'Is Microsoft (MSFT) a Good Dividend Stock? Complete 2026 Analysis',
    description: '22 consecutive dividend increases with 10%+ annual growth. Azure, AI, and $70B+ in annual FCF make MSFT the ultimate growth-plus-income stock.',
    type: 'article',
  }
}

const historicalDividends = [
  { year: 2026, dividend: '$3.32', increase: '10.3%' },
  { year: 2025, dividend: '$3.01', increase: '10.7%' },
  { year: 2024, dividend: '$2.72', increase: '10.2%' },
  { year: 2023, dividend: '$2.48', increase: '10.2%' },
  { year: 2022, dividend: '$2.42', increase: '9.7%' },
  { year: 2021, dividend: '$2.18', increase: '10.7%' },
  { year: 2020, dividend: '$2.04', increase: '9.8%' },
  { year: 2019, dividend: '$1.84', increase: '10.9%' },
  { year: 2018, dividend: '$1.68', increase: '9.5%' },
  { year: 2017, dividend: '$1.56', increase: '7.7%' },
  { year: 2016, dividend: '$1.44', increase: '8.3%' },
  { year: 2015, dividend: '$1.24', increase: '16.8%' },
]

const revenueSegments = [
  {
    segment: 'Intelligent Cloud (Azure)',
    percentage: '~43%',
    revenue: '~$105B',
    growth: '22-28%',
    description: 'Azure cloud (45%+ growth), SQL Server, Windows Server, GitHub, Visual Studio. Azure is the #2 cloud platform behind AWS and closing the gap.',
  },
  {
    segment: 'Productivity & Business Processes',
    percentage: '~33%',
    revenue: '~$80B',
    growth: '12-15%',
    description: 'Microsoft 365 (400M+ paid seats), LinkedIn ($16B+), Dynamics 365 ERP/CRM. The stickiest recurring revenue in software.',
  },
  {
    segment: 'More Personal Computing',
    percentage: '~24%',
    revenue: '~$58B',
    growth: '8-12%',
    description: 'Windows, Xbox/Gaming (Activision Blizzard), Surface, Search (Bing + AI). Gaming is now a $22B+ business post-Activision.',
  },
]

const comparisonStocks = [
  {
    symbol: 'MSFT',
    name: 'Microsoft',
    yield: '0.8%',
    growth5yr: '10.3%',
    payoutRatio: '25%',
    yearsIncreasing: 22,
    totalReturn5yr: '~18%',
    dividendSafety: '99/100',
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    yield: '0.5%',
    growth5yr: '5.8%',
    payoutRatio: '15%',
    yearsIncreasing: 12,
    totalReturn5yr: '~22%',
    dividendSafety: '98/100',
  },
  {
    symbol: 'KO',
    name: 'Coca-Cola',
    yield: '3.1%',
    growth5yr: '4.1%',
    payoutRatio: '72%',
    yearsIncreasing: 62,
    totalReturn5yr: '~8%',
    dividendSafety: '92/100',
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    yield: '3.0%',
    growth5yr: '5.8%',
    payoutRatio: '48%',
    yearsIncreasing: 62,
    totalReturn5yr: '~7%',
    dividendSafety: '95/100',
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom',
    yield: '1.3%',
    growth5yr: '14.2%',
    payoutRatio: '40%',
    yearsIncreasing: 14,
    totalReturn5yr: '~32%',
    dividendSafety: '85/100',
  },
]

export default function IsMicrosoftGoodDividendStockPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-sky-600 to-blue-700">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Growth + Income
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is Microsoft (MSFT) a Good Dividend Stock? 2026 Analysis
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Most people think of Microsoft as a growth stock — and it is. But MSFT has also raised its
                  dividend for 22 consecutive years, growing payouts at 10%+ annually. With Azure dominating
                  cloud, AI integration driving new revenue, and $70B+ in annual free cash flow, Microsoft
                  is the rare stock that offers both massive growth and growing income.
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
              <Card className="mb-12 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950 dark:to-blue-950 border-2 border-sky-200 dark:border-sky-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-sky-600" />
                    Quick Verdict: Microsoft Dividend Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend Streak:</strong> 22 consecutive years of increases with 10.3% five-year CAGR</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield:</strong> 0.8% ($3.32 annual) — low yield, but the stock has returned 18%+ annually</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout Ratio:</strong> Only 25% of earnings — the most conservative payout in mega-cap tech</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Cash Machine:</strong> $70B+ annual free cash flow, AAA credit rating (one of only two in the US)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Our Rating:</strong> STRONG BUY for total return + growing income — 99/100 dividend safety</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">22-Year Dividend History</a></li>
                    <li><a href="#yield-debate" className="text-blue-600 hover:underline">The 0.8% Yield Debate</a></li>
                    <li><a href="#business-segments" className="text-blue-600 hover:underline">Revenue Segments</a></li>
                    <li><a href="#azure-ai" className="text-blue-600 hover:underline">Azure & AI Growth Engine</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety (99/100)</a></li>
                    <li><a href="#total-return" className="text-blue-600 hover:underline">Total Return vs. Yield Stocks</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">MSFT vs. Peers</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks to Consider</a></li>
                    <li><a href="#drip-example" className="text-blue-600 hover:underline">20-Year DRIP Projection</a></li>
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
                    <Zap className="h-7 w-7 text-sky-600" />
                    The Best of Both Worlds: Growth and Dividends
                  </h2>
                  <p>
                    Microsoft (NASDAQ: MSFT) breaks the traditional dividend investor&apos;s mold. At 0.8% yield,
                    most income investors skip right past it. That is a mistake. MSFT has generated 18%+ annualized
                    total returns over the past five years — dwarfing the 7-10% returns of traditional dividend
                    stocks like KO or JNJ.
                  </p>
                  <p>
                    The key is what that 0.8% yield hides. Microsoft&apos;s dividend grows at 10%+ per year.
                    At that rate, the dividend doubles every 7 years. An investor who bought MSFT in 2015 at $47
                    now earns a 7.1% yield on their original cost basis — more than most high-yield stocks.
                  </p>
                  <p>
                    But the real story is the cash flow fortress. Microsoft generates $70 billion+ in annual free
                    cash flow — more than Coca-Cola, Johnson & Johnson, and Procter & Gamble combined. It holds
                    one of only two AAA credit ratings in the United States (the other being JNJ). The dividend
                    consumes only 25% of earnings, leaving massive headroom for buybacks, AI investment, and
                    accelerated dividend growth.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-green-600" />
                    22 Years of Double-Digit Dividend Growth
                  </h2>

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
                        Average annual increase: 10.3%. The dividend has grown 2.7x in 12 years — from $1.24 to $3.32.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    That table tells a powerful story. Every single year, Microsoft has delivered a 9-11% dividend
                    increase. There is no slow year, no pause, no excuses. This consistency reflects the underlying
                    business: recurring revenue from Microsoft 365 and Azure makes cash flow highly predictable.
                  </p>
                  <p>
                    The dividend has grown from $1.24 in 2015 to $3.32 in 2026 — a 168% increase. An investor
                    who bought MSFT at $47 in January 2015 now earns a yield-on-cost of 7.1%. By 2035, that
                    same investor will likely earn a 15%+ yield on their original cost.
                  </p>
                </section>

                {/* The Yield Debate */}
                <section id="yield-debate">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-orange-600" />
                    The 0.8% Yield Debate: Why It Doesn&apos;t Matter
                  </h2>
                  <p>
                    Traditional dividend investors often dismiss MSFT because of the sub-1% yield. &quot;I can
                    get 3% from Coca-Cola,&quot; they say. Let&apos;s run the math on why that logic fails:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 Investment: MSFT vs. KO After 15 Years</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded border-l-4 border-l-sky-500">
                          <h4 className="font-bold text-sky-700 dark:text-sky-400 mb-3">Microsoft (MSFT)</h4>
                          <ul className="text-sm space-y-1">
                            <li>Starting Yield: 0.8%</li>
                            <li>Dividend Growth: 10%/year</li>
                            <li>Stock Growth: 12%/year</li>
                            <li className="font-bold pt-2 border-t mt-2">Year 15 Income: $1,345/year</li>
                            <li className="font-bold">Year 15 Value: $54,700</li>
                            <li className="font-bold text-sky-700 dark:text-sky-400">Total Return: 447%</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 rounded border-l-4 border-l-red-500">
                          <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">Coca-Cola (KO)</h4>
                          <ul className="text-sm space-y-1">
                            <li>Starting Yield: 3.1%</li>
                            <li>Dividend Growth: 4%/year</li>
                            <li>Stock Growth: 6%/year</li>
                            <li className="font-bold pt-2 border-t mt-2">Year 15 Income: $706/year</li>
                            <li className="font-bold">Year 15 Value: $24,000</li>
                            <li className="font-bold text-red-700 dark:text-red-400">Total Return: 140%</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        Despite starting with 4x less yield, MSFT generates 90% more income AND 2.3x more total value after 15 years.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    The math is clear: a 0.8% yield growing at 10%+ overtakes a 3.1% yield growing at 4%
                    within 12-13 years. After that, the gap widens exponentially. Microsoft generates both
                    more income and more capital gains than traditional dividend stocks over any 15+ year horizon.
                  </p>
                </section>

                {/* Business Segments */}
                <section id="business-segments">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Revenue Segments: Three Growth Engines
                  </h2>

                  <div className="space-y-4 my-6">
                    {revenueSegments.map((segment) => (
                      <Card key={segment.segment} className="border-l-4 border-l-sky-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{segment.segment}</h3>
                            <Badge className="bg-sky-600">{segment.percentage}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Revenue</p>
                              <p className="font-semibold">{segment.revenue}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Growth Rate</p>
                              <p className="font-semibold text-green-600">{segment.growth}</p>
                            </div>
                          </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300">{segment.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    The key insight: 90%+ of Microsoft&apos;s revenue is recurring (subscriptions, cloud services,
                    enterprise licenses). This creates incredibly predictable cash flow — which is exactly what
                    you want backing a dividend. Unlike hardware companies or cyclical businesses, Microsoft&apos;s
                    revenue doesn&apos;t crater during recessions because businesses cannot turn off email, cloud
                    storage, or enterprise software.
                  </p>
                </section>

                {/* Azure & AI */}
                <section id="azure-ai">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-purple-600" />
                    Azure & AI: The Next Decade of Dividend Growth
                  </h2>
                  <p>
                    Azure cloud and artificial intelligence are the twin engines that will power Microsoft&apos;s
                    dividend growth for the next 10-20 years. Azure is growing 25-30% annually and has
                    not yet reached peak margin (currently ~45% operating margin, heading toward 55-60%).
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-l-4 border-l-purple-500">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">AI Revenue Impact</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Copilot Revenue (FY2026)</p>
                          <p className="font-bold text-lg">$10B+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">Azure AI Services</p>
                          <p className="font-bold text-lg">$15B+</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">OpenAI Partnership Value</p>
                          <p className="font-bold text-lg">$13B invested</p>
                        </div>
                        <div>
                          <p className="text-slate-600 dark:text-slate-400">AI Growth Rate</p>
                          <p className="font-bold text-lg text-green-600">100%+</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Microsoft&apos;s AI strategy is uniquely positioned to generate dividend-fueling cash flow.
                    Copilot is embedded across Microsoft 365 (400M+ paid seats), each paying $30/month extra
                    for AI features. Azure hosts the majority of enterprise AI workloads. GitHub Copilot has
                    become essential for software developers. Every AI dollar flows through Microsoft&apos;s
                    already-dominant platforms.
                  </p>
                  <p>
                    This is why analysts project Microsoft&apos;s earnings to grow 15-18% annually through 2030.
                    At that rate, the 10%+ dividend growth is easily sustainable — and could accelerate
                    to 12-15% as AI revenue scales.
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
                    Dividend Safety Score: 99/100 (Near Perfect)
                  </h2>

                  <Card className="my-6 bg-green-50 dark:bg-green-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Why MSFT Has the Safest Dividend in Tech</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Payout Ratio: 25% (Ultra-Conservative)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Only pays out 25% of earnings. Could maintain the dividend even if earnings fell 75%.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Free Cash Flow: $70B+ annually (Massive)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              FCF covers dividends ($21B) by 3.3x. More FCF than KO, JNJ, and PG combined.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">AAA Credit Rating (Best Possible)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              One of only two US companies with AAA rating. Stronger balance sheet than the US government.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">90%+ Recurring Revenue (Predictable)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Subscription-based model eliminates revenue volatility. Customers locked into multi-year contracts.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Net Cash Position: $40B+ (Fortress)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Even after the $69B Activision acquisition, MSFT maintains a net cash position. Zero debt risk.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    At 99/100, Microsoft has arguably the safest dividend of any stock, period. The 25% payout
                    ratio means MSFT could quadruple its dividend overnight and still be at a 100% payout ratio.
                    The only reason it doesn&apos;t score a perfect 100 is the relatively short 22-year dividend
                    streak — it hasn&apos;t been tested through as many recessions as a 60-year Dividend King.
                  </p>
                </section>

                {/* Total Return Comparison */}
                <section id="total-return">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    Total Return: Growth Stocks vs. Dividend Stocks
                  </h2>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 Invested in 2016 — Value in 2026</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-sky-50 dark:bg-sky-950 rounded border-l-4 border-l-sky-500">
                          <span className="font-bold">Microsoft (MSFT)</span>
                          <span className="font-bold text-sky-700 dark:text-sky-400">$67,500</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span className="font-semibold">Broadcom (AVGO)</span>
                          <span className="font-semibold">$82,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span className="font-semibold">Apple (AAPL)</span>
                          <span className="font-semibold">$71,200</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span className="font-semibold">S&P 500 (SPY)</span>
                          <span className="font-semibold">$28,400</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span className="font-semibold">Coca-Cola (KO)</span>
                          <span className="font-semibold">$21,600</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded">
                          <span className="font-semibold">Johnson & Johnson (JNJ)</span>
                          <span className="font-semibold">$19,400</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    Microsoft turned $10,000 into $67,500 over 10 years — versus $21,600 for Coca-Cola and
                    $19,400 for JNJ. The total return gap is massive because Microsoft combines capital
                    appreciation AND dividend growth, while traditional dividend stocks rely primarily on
                    income and modest price gains.
                  </p>
                </section>

                {/* Comparison Table */}
                <section id="comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    MSFT vs. Dividend Stock Peers
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
                          <th className="text-right p-3 border">5Y Return</th>
                          <th className="text-right p-3 border">Safety</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonStocks.map((stock) => (
                          <tr key={stock.symbol} className={stock.symbol === 'MSFT' ? 'bg-sky-50 dark:bg-sky-950 font-semibold' : ''}>
                            <td className="p-3 border">{stock.name} ({stock.symbol})</td>
                            <td className="text-right p-3 border">{stock.yield}</td>
                            <td className="text-right p-3 border text-green-600">{stock.growth5yr}</td>
                            <td className="text-right p-3 border">{stock.payoutRatio}</td>
                            <td className="text-right p-3 border">{stock.yearsIncreasing} yrs</td>
                            <td className="text-right p-3 border">{stock.totalReturn5yr}</td>
                            <td className="text-right p-3 border font-semibold">{stock.dividendSafety}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                    Risks to Consider
                  </h2>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">Valuation Risk</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          MSFT trades at 33-36x earnings — well above the S&P 500 average of 20-22x. A compression
                          to 28x (still premium) would represent a 15-20% drawdown. The stock could stagnate for
                          1-2 years while earnings catch up to the price.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">Antitrust & Regulation</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Microsoft&apos;s dominance in cloud, productivity software, and AI could attract regulatory
                          scrutiny. The EU and FTC have investigated the Activision acquisition and cloud bundling
                          practices. Breakup risk is low but regulatory fines could be meaningful.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">AI Investment Returns Uncertain</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Microsoft is spending $50B+ annually on AI infrastructure (data centers, chips, OpenAI partnership).
                          If AI adoption is slower than expected or competitors close the gap, ROI on these investments
                          could disappoint, potentially slowing earnings and dividend growth.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* DRIP Example */}
                <section id="drip-example">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    20-Year DRIP Projection
                  </h2>

                  <Card className="my-6 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 MSFT Investment with DRIP</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Assumptions: 0.8% starting yield, 10% annual dividend growth, 12% stock price appreciation, dividends reinvested.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 1 (2026):</span>
                          <span className="text-slate-600">Value: $11,200 | Income: $80</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 5 (2030):</span>
                          <span className="text-slate-600">Value: $18,800 | Income: $165</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 10 (2035):</span>
                          <span className="text-slate-600">Value: $37,200 | Income: $420</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 15 (2040):</span>
                          <span className="text-slate-600">Value: $73,500 | Income: $1,060</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-100 dark:bg-green-950 rounded border-2 border-green-500">
                          <span className="font-bold">Year 20 (2045):</span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            Value: $145,000 | Income: $2,680
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="text-sm font-semibold mb-2">The Power of Growth + Income:</p>
                        <p className="text-xs">
                          $10,000 becomes $145,000 (14.5x) with $2,680 in annual income. The yield-on-cost
                          reaches 26.8% — all from a stock that started at 0.8% yield. Growth is the ultimate
                          income accelerator.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Verdict */}
                <section id="verdict">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Final Verdict: STRONG BUY for Total Return
                  </h2>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Growth + Income Investors</p>
                          <p className="text-2xl font-black text-green-600">STRONG BUY</p>
                          <p className="text-xs mt-1">Best of both worlds</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Young Investors (20-40)</p>
                          <p className="text-2xl font-black text-green-600">STRONG BUY</p>
                          <p className="text-xs mt-1">Decades for growth to compound</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Income-Now Retirees</p>
                          <p className="text-2xl font-black text-yellow-600">HOLD</p>
                          <p className="text-xs mt-1">0.8% yield too low for current income needs</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <p>
                    Microsoft is the best stock for investors who want both growth and growing income. The 0.8%
                    current yield is misleading — this is a 10%+ dividend grower backed by $70B in FCF, a AAA
                    balance sheet, and the AI megatrend. If you have a 10+ year time horizon, MSFT will generate
                    more total income than traditional 3% yielders. The only reason not to buy is if you need
                    high current income today.
                  </p>
                </section>

                {/* Calculator CTA */}
                <section id="calculators" className="not-prose">
                  <Card className="bg-gradient-to-br from-sky-600 to-blue-700 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your MSFT Dividend Income</h3>
                      <p className="mb-6 text-sky-100">
                        See how 10%+ dividend growth transforms a 0.8% yield into a cash flow machine. Model your
                        MSFT investment over any time horizon.
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
                        <Link href="/calculators/investment-return">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            Investment Return Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Where to Buy Microsoft Stock</h2>
                  <p>
                    Buy MSFT shares commission-free with automatic dividend reinvestment. All brokers below offer
                    fractional shares, so you can invest any amount (even $10) in Microsoft.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Microsoft a good dividend stock despite the low yield?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes — and it&apos;s actually a better income stock long-term than most high yielders. Microsoft
                          grows its dividend at 10%+ per year, doubling your income every 7 years. An investor who
                          bought at $47 in 2015 now earns a 7.1% yield on cost. Meanwhile, the stock has appreciated
                          8x. MSFT delivers both growing income and massive capital gains — the best of both worlds.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How safe is Microsoft&apos;s dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Microsoft&apos;s dividend has a 99/100 safety score — the highest possible for a tech stock.
                          The 25% payout ratio means MSFT retains 75% of earnings. It generates $70B+ in free cash
                          flow against $21B in dividends (3.3x coverage). It holds one of only two AAA credit ratings
                          in the US. This dividend would survive even a catastrophic scenario.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How does Microsoft&apos;s dividend compare to Apple&apos;s?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Microsoft beats Apple on every dividend metric: higher yield (0.8% vs 0.5%), faster growth
                          (10.3% vs 5.8%), and longer streak (22 vs 12 years). Apple compensates with massive share
                          buybacks ($90B+/year), but for pure dividend income growth, MSFT is the clear winner among
                          mega-cap tech stocks.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">When does Microsoft pay dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Microsoft pays dividends quarterly in March, June, September, and December. The current
                          quarterly payment is $0.83 per share ($3.32 annually). MSFT typically announces its annual
                          dividend increase in September, effective for the December payment. The ex-dividend date
                          is usually about 2 weeks before the payment date.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should retirees buy Microsoft for dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          It depends on your income needs. If you need 3%+ yield today to pay bills, MSFT&apos;s
                          0.8% yield is insufficient — pair it with higher-yielding stocks. But if you have 5-10+
                          years before needing the income, MSFT is excellent because the 10% dividend growth will
                          deliver more income than a 3% yielder within 12-13 years. Many retirees hold MSFT as a
                          growth engine alongside higher-yielding KO or JNJ for current income.
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
                    <Link href="/blog/is-apple-good-dividend-stock" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Is Apple (AAPL) a Good Dividend Stock? 2026 Analysis
                    </Link>
                    <Link href="/blog/best-technology-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Technology Dividend Stocks 2026
                    </Link>
                    <Link href="/blog/growth-stocks-vs-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Growth Stocks vs. Dividend Stocks: Which Is Better?
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
