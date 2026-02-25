import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Percent,
  Shield,
  Zap,
  Building2,
  Smartphone,
  Wifi,
  Activity,
  X,
  Scale
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is AT&T Stock a Good Dividend Investment in 2026? Deep Analysis',
  description: 'Comprehensive analysis of AT&T stock as a dividend investment. Current 6.5% yield, 2022 dividend cut details, debt reduction progress, business recovery, and comparison with Verizon.',
  keywords: 'is AT&T stock a good investment, AT&T dividend, AT&T stock analysis 2026, AT&T dividend cut, T stock dividend safety, AT&T vs Verizon, wireless dividend stocks',
  openGraph: {
    title: 'Is AT&T Stock a Good Dividend Investment in 2026? Deep Analysis',
    description: 'Full analysis of AT&T\'s 6.5% dividend yield, recovery since the 2022 cut, debt reduction progress, and whether it\'s safe for income investors.',
    type: 'article',
  }
}

export default function IsATTStockGoodDividendInvestmentPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">
                  <Activity className="h-3 w-3 mr-1" />
                  Stock Analysis
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Is AT&T Stock a Good Dividend Investment in 2026?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Complete analysis of AT&T's 6.5% dividend yield, the 2022 dividend cut from $2.08 to $1.11,
                  debt reduction progress, wireless and fiber business strength, and whether this telecom giant
                  is safe for income investors after its dramatic restructuring.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>14 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    Expert Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Answer: Is AT&T Stock a Good Investment?
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>For Current Income:</strong> Yes, with caution. 6.5% yield is attractive and appears sustainable at 50% payout ratio. Dividend is now stable after 2022 reset.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>For Dividend Growth:</strong> No. AT&T cut dividends by 47% in 2022. Only 2 consecutive years of increases. Better options exist for growth.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Key Risk:</strong> $130B debt load despite $30B reduction. Intense wireless competition and heavy 5G investment requirements threaten margins.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Improvement:</strong> Fiber business growing 20%+ annually, free cash flow improving, debt-to-EBITDA declining from 3.5x to 2.8x target.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#current-metrics" className="text-blue-600 hover:underline">Current Dividend Metrics</a></li>
                    <li><a href="#dividend-cut" className="text-blue-600 hover:underline">The 2022 Dividend Cut Explained</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety Analysis</a></li>
                    <li><a href="#business-analysis" className="text-blue-600 hover:underline">Business Segment Performance</a></li>
                    <li><a href="#debt-reduction" className="text-blue-600 hover:underline">Debt Reduction Progress</a></li>
                    <li><a href="#pros-cons" className="text-blue-600 hover:underline">Pros vs Cons Comparison</a></li>
                    <li><a href="#historical-chart" className="text-blue-600 hover:underline">Historical Dividend Chart</a></li>
                    <li><a href="#vs-verizon" className="text-blue-600 hover:underline">AT&T vs Verizon Comparison</a></li>
                    <li><a href="#who-should-buy" className="text-blue-600 hover:underline">Who Should Buy AT&T?</a></li>
                    <li><a href="#calculate" className="text-blue-600 hover:underline">Calculate Your Returns</a></li>
                    <li><a href="#brokers" className="text-blue-600 hover:underline">Best Brokers to Buy</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Current Metrics */}
                <section id="current-metrics">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    AT&T Stock: Current Dividend Metrics (2026)
                  </h2>
                  <p>
                    AT&T trades around $17-19 per share with a forward dividend yield of approximately 6.5%.
                    After the dramatic 2022 restructuring that spun off WarnerMedia to create Warner Bros. Discovery,
                    AT&T is now a focused wireless and fiber connectivity company.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
                          <Percent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm text-slate-600 dark:text-slate-400">Current Yield</p>
                          <p className="text-3xl font-bold text-blue-600">6.5%</p>
                          <p className="text-xs text-slate-500 mt-1">Annual: $1.11/share</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                          <p className="text-3xl font-bold text-green-600">~50%</p>
                          <p className="text-xs text-slate-500 mt-1">Sustainable range</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
                          <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                          <p className="text-sm text-slate-600 dark:text-slate-400">Years Increasing</p>
                          <p className="text-3xl font-bold text-orange-600">2</p>
                          <p className="text-xs text-slate-500 mt-1">Since 2022 reset</p>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <h3 className="text-lg font-bold mb-3">Key Facts</h3>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Market Cap:</strong> $135 billion</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Payment Frequency:</strong> Quarterly</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Ex-Dividend Dates:</strong> Feb, May, Aug, Nov</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Sector:</strong> Telecommunications</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Ticker:</strong> T (NYSE)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Dividend Tax:</strong> Qualified</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* The Dividend Cut */}
                <section id="dividend-cut">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-600" />
                    The 2022 Dividend Cut: What Happened?
                  </h2>
                  <p>
                    On April 8, 2022, AT&T completed the spin-off of WarnerMedia (HBO Max, CNN, Warner Bros.) to
                    Discovery, creating Warner Bros. Discovery as a separate public company. Existing AT&T shareholders
                    received 0.24 shares of the new WBD for each T share they owned.
                  </p>
                  <p>
                    The restructuring forced AT&T to slash its annual dividend from $2.08 per share to $1.11 per share—a
                    reduction of 46.6%. This was one of the largest dividend cuts by a major company in modern history,
                    affecting millions of retirees and income investors.
                  </p>

                  <Card className="my-6 border-2 border-red-300 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                        Dividend Cut Timeline
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950 rounded">
                          <div className="w-24 flex-shrink-0 font-bold">2021</div>
                          <div className="text-sm">
                            <p className="font-semibold">Annual Dividend: $2.08</p>
                            <p className="text-slate-600 dark:text-slate-400">Quarterly: $0.52 × 4 quarters</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950 rounded">
                          <div className="w-24 flex-shrink-0 font-bold">Q1 2022</div>
                          <div className="text-sm">
                            <p className="font-semibold">Last Full Dividend: $0.52</p>
                            <p className="text-slate-600 dark:text-slate-400">Paid February 2022 (pre-spinoff)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                          <div className="w-24 flex-shrink-0 font-bold">April 2022</div>
                          <div className="text-sm">
                            <p className="font-semibold">WarnerMedia Spinoff</p>
                            <p className="text-slate-600 dark:text-slate-400">Shareholders receive WBD shares</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded">
                          <div className="w-24 flex-shrink-0 font-bold">Q2 2022+</div>
                          <div className="text-sm">
                            <p className="font-semibold">New Dividend: $0.2775 quarterly</p>
                            <p className="text-slate-600 dark:text-slate-400">Annual: $1.11 (46.6% reduction)</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="font-semibold text-sm mb-2">Impact Example:</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          An investor with 1,000 shares received $2,080/year before the cut. After April 2022,
                          they received $1,110/year from AT&T + small WBD dividend. Combined yield still fell
                          significantly. Many income-focused investors sold their positions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why Did AT&T Cut the Dividend?</h3>
                  <p>
                    AT&T's management argued the cut was necessary to focus on core wireless and fiber businesses
                    while reducing crushing debt loads accumulated from acquisitions:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Building2 className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Debt Reduction Priority</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              AT&T carried $180B+ in debt from Time Warner, DirecTV acquisitions. Management committed
                              to reducing debt to $130B by 2026 rather than supporting an unsustainable dividend.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">5G Investment Requirements</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              AT&T needed $24B annually for capital expenditures to build out 5G network, fiber infrastructure,
                              and compete with Verizon and T-Mobile. The old dividend consumed most free cash flow.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Activity className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Media Business Distraction</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              AT&T's foray into media (DirectTV, Time Warner/HBO) was a strategic failure. Spinning off
                              WarnerMedia allowed focus on connectivity businesses with better margins and growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Dividend Safety Analysis */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-green-600" />
                    Is AT&T's Dividend Safe Now?
                  </h2>
                  <p>
                    The new $1.11 annual dividend appears significantly safer than the pre-2022 payout. AT&T now
                    operates with a sustainable ~50% payout ratio and improving free cash flow coverage.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-medium">Payout Ratio (50%)</span>
                          </div>
                          <Badge className="bg-green-600">Safe</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-medium">Free Cash Flow Coverage (2.0x)</span>
                          </div>
                          <Badge className="bg-green-600">Safe</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <div className="flex items-center gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                            <span className="font-medium">Debt Level ($130B)</span>
                          </div>
                          <Badge className="bg-yellow-600">Moderate Risk</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-medium">Business Stability (Wireless/Fiber)</span>
                          </div>
                          <Badge className="bg-green-600">Safe</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <div className="flex items-center gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                            <span className="font-medium">Competitive Pressure</span>
                          </div>
                          <Badge className="bg-yellow-600">Moderate Risk</Badge>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                        <p className="font-bold text-green-800 dark:text-green-200">Overall Assessment: SAFE</p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          AT&T's dividend is sustainable at current levels. Free cash flow of $16B+ annually covers
                          the $8B dividend with room for debt reduction and capex. Another cut is unlikely unless
                          wireless industry faces major disruption.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Free Cash Flow Analysis</h3>
                  <p>
                    AT&T generates approximately $16-17 billion in annual free cash flow (after capital expenditures).
                    The dividend requires roughly $8 billion annually, leaving ~$8-9 billion for debt reduction and
                    strategic investments.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">2025 Free Cash Flow Breakdown (Estimated)</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 border-b">
                          <span>Operating Cash Flow</span>
                          <span className="font-semibold text-green-600">$38.0B</span>
                        </div>
                        <div className="flex justify-between p-2 border-b">
                          <span>Capital Expenditures</span>
                          <span className="font-semibold text-red-600">-$22.0B</span>
                        </div>
                        <div className="flex justify-between p-2 border-b border-2">
                          <span className="font-bold">Free Cash Flow</span>
                          <span className="font-bold text-green-600">$16.0B</span>
                        </div>
                        <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-950">
                          <span>Dividend Payments</span>
                          <span className="font-semibold">-$8.0B</span>
                        </div>
                        <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950">
                          <span className="font-bold">Cash After Dividend</span>
                          <span className="font-bold text-green-600">$8.0B</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                        Used for debt reduction, share buybacks, and business investments
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Business Analysis */}
                <section id="business-analysis">
                  <h2 className="flex items-center gap-2">
                    <Smartphone className="h-7 w-7 text-purple-600" />
                    Business Segment Performance
                  </h2>
                  <p>
                    Post-spinoff AT&T operates two main business segments: Mobility (wireless) and Consumer Wireline
                    (fiber internet). Together they generate ~$120B in annual revenue with improving margins.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Smartphone className="h-8 w-8 text-purple-600" />
                          <div>
                            <h3 className="text-lg font-bold">Mobility (Wireless)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">~70% of revenue</p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-semibold mb-1">Subscribers</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              • 73M postpaid phone connections<br />
                              • 24M prepaid Cricket/AT&T Prepaid<br />
                              • Total: 239M connections (including connected devices)
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Strengths</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              • FirstNet contract (exclusive public safety network for first responders)<br />
                              • Strong business/enterprise customer base<br />
                              • 5G network covering 290M+ Americans
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Challenges</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              • T-Mobile taking share with aggressive pricing<br />
                              • Heavy promotional activity squeezing margins<br />
                              • High 5G capex requirements ($15B+ annually)
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950 rounded">
                          <p className="font-semibold text-sm">2025 Performance</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Added 1.2M postpaid phone subscribers. ARPU (average revenue per user) growing 2-3%
                            annually. Churn rates stable at industry-leading 0.8% monthly.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Wifi className="h-8 w-8 text-blue-600" />
                          <div>
                            <h3 className="text-lg font-bold">Consumer Wireline (Fiber)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">~30% of revenue</p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-semibold mb-1">Subscribers</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              • 8.1M fiber internet subscribers<br />
                              • 28M fiber passings (homes accessible)<br />
                              • Target: 30M+ passings by end of 2025
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Strengths</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              • Fastest-growing segment (20%+ annual subscriber growth)<br />
                              • Higher margins than wireless (fiber requires less capex over time)<br />
                              • Bundling with wireless creates customer stickiness
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Opportunities</p>
                            <p className="text-slate-600 dark:text-slate-400">
                              • Cable competition declining (Comcast, Charter losing share)<br />
                              • Fixed wireless alternative (AT&T has 2M+ customers)<br />
                              • Potential for price increases as fiber becomes essential utility
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded">
                          <p className="font-semibold text-sm">Growth Driver</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Fiber is AT&T's best business. Penetration rate only 28% (8.1M / 28M passings),
                            suggesting years of growth ahead. Each fiber customer generates $70-80 monthly revenue.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>HBO Max Spinoff Impact</h3>
                  <p>
                    The 2022 WarnerMedia spinoff removed HBO Max, CNN, Warner Bros. studios, and DC Comics from AT&T's
                    portfolio. While these assets generated $40B+ in revenue, they also carried significant content costs,
                    debt, and strategic complexity.
                  </p>

                  <Card className="my-6 border-2 border-blue-300 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">What AT&T Lost vs. Gained</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold mb-2 text-red-600">Lost Assets</p>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                            <li>• HBO Max streaming service</li>
                            <li>• Warner Bros. movie studio</li>
                            <li>• CNN, TBS, TNT cable networks</li>
                            <li>• DC Comics franchise</li>
                            <li>• $40B+ annual media revenue</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2 text-green-600">Gained Benefits</p>
                          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                            <li>• Simplified business focus</li>
                            <li>• Reduced capital requirements</li>
                            <li>• Lower content spending risk</li>
                            <li>• WBD shares distributed to shareholders</li>
                            <li>• Management focus on wireless/fiber</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Debt Reduction */}
                <section id="debt-reduction">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-green-600" />
                    Debt Reduction Progress
                  </h2>
                  <p>
                    AT&T's biggest financial challenge is its massive debt load—a legacy of aggressive acquisitions
                    (DirecTV for $67B in 2015, Time Warner for $85B in 2018). Since the spinoff, management has
                    prioritized debt reduction over dividend growth.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Debt Reduction Timeline</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">2021 (Pre-Spinoff)</span>
                          <span className="text-red-600 font-bold">$180B total debt</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">2022 (Post-Spinoff)</span>
                          <span className="text-orange-600 font-bold">$160B total debt</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">2024</span>
                          <span className="text-yellow-600 font-bold">$140B total debt</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                          <span className="font-semibold">Early 2026 (Current)</span>
                          <span className="text-green-600 font-bold">$130B total debt</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded border-2 border-green-300 dark:border-green-700">
                          <span className="font-bold">2026 Target</span>
                          <span className="text-green-600 font-bold">$130B (ACHIEVED)</span>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="font-semibold mb-2">Debt-to-EBITDA Ratio Progress</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Improved from 3.5x in 2021 to 2.8x in early 2026. Management targets low-2x range
                          by 2028, which would put AT&T in line with Verizon's leverage. Uses ~$6-8B annually
                          from free cash flow for debt paydown.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>What Happens After Debt Target Is Reached?</h3>
                  <p>
                    AT&T has stated that once debt reaches the low-2x EBITDA range (likely 2027-2028), the company
                    will shift priorities from debt reduction to capital returns. This could mean:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Dividend Growth Resumes</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Management could raise dividend 2-4% annually starting 2027-2028. With $8B in post-dividend
                              free cash flow, AT&T has room for modest increases while maintaining conservative payout ratio.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Activity className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Share Buyback Program</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              AT&T could allocate $3-5B annually to buybacks, reducing share count 2-3% yearly. This
                              boosts earnings per share and provides additional shareholder returns without raising dividend.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Strategic Investments</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Accelerated fiber buildout beyond 30M passings, 5G network densification, or potential
                              acquisition of smaller fiber operators to expand footprint.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Pros and Cons */}
                <section id="pros-cons">
                  <h2 className="flex items-center gap-2">
                    <Scale className="h-7 w-7 text-indigo-600" />
                    AT&T Stock: Pros vs Cons
                  </h2>
                  <p>
                    Every dividend stock has trade-offs. Here's an honest assessment of AT&T's strengths and weaknesses
                    as an income investment in 2026.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-2 border-green-300 dark:border-green-700">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6" />
                          Pros (Why Buy AT&T)
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">High Current Yield (6.5%)</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Among highest yields in S&P 500. Generates significant income for retirees.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Sustainable Payout Ratio (50%)</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Post-cut dividend appears safe. Room for modest growth once debt targets met.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Essential Service Business</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Wireless and fiber internet are utility-like services. Customers don't cancel in recessions.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Fiber Growth Opportunity</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Only 28% penetration on fiber passings. Can grow subscribers 15-20% annually for years.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Debt Reduction Success</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Reduced debt by $50B since 2021. On track to reach low-2x EBITDA target by 2028.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Quarterly Payments</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Regular dividend schedule makes budgeting easy for income investors.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Undervalued Stock Price</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Trading near 52-week lows. High yield compensates for past disappointments.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-red-300 dark:border-red-700">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                          <X className="h-6 w-6" />
                          Cons (Risks to Consider)
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Recent Dividend Cut History</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                47% cut in 2022 destroyed trust. Income investors remember and remain cautious.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Massive Debt Load ($130B)</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Still one of most indebted companies in America. Interest expense limits financial flexibility.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Limited Dividend Growth Potential</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Only 2 years of increases post-cut. Don't expect 5-10% annual raises like Johnson & Johnson.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Intense Wireless Competition</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                T-Mobile aggressively taking market share. Price wars squeeze margins and ARPU growth.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">High Capital Requirements</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                $22B+ annual capex for 5G, fiber buildout. Limits cash available for shareholders.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Management Execution Risk</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                DirecTV, Time Warner acquisitions were strategic failures. Can investors trust leadership?
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">Stock Price Stagnation</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                Down 40%+ from 2019 highs. Total returns lag S&P 500 significantly over 5-year period.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Historical Chart */}
                <section id="historical-chart">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-orange-600" />
                    AT&T Dividend History (2018-2026)
                  </h2>
                  <p>
                    Visualizing AT&T's dividend history makes the 2022 cut crystal clear. The chart below shows
                    annual dividend per share from 2018 through 2026.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 text-center">Annual Dividend Per Share</h3>

                      <div className="relative h-64 flex items-end justify-around gap-2 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-green-500 rounded-t" style={{height: '85%'}}></div>
                          <p className="text-xs font-bold mt-2">$2.00</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2018</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-green-500 rounded-t" style={{height: '88%'}}></div>
                          <p className="text-xs font-bold mt-2">$2.04</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2019</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-green-500 rounded-t" style={{height: '90%'}}></div>
                          <p className="text-xs font-bold mt-2">$2.08</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2020</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-green-500 rounded-t" style={{height: '90%'}}></div>
                          <p className="text-xs font-bold mt-2">$2.08</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2021</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-red-500 rounded-t" style={{height: '48%'}}></div>
                          <p className="text-xs font-bold mt-2 text-red-600">$1.11</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2022</p>
                          <Badge className="mt-1 bg-red-600 text-[10px]">-47%</Badge>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-blue-500 rounded-t" style={{height: '48%'}}></div>
                          <p className="text-xs font-bold mt-2">$1.11</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2023</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-blue-500 rounded-t" style={{height: '48%'}}></div>
                          <p className="text-xs font-bold mt-2">$1.11</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2024</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-blue-500 rounded-t" style={{height: '48%'}}></div>
                          <p className="text-xs font-bold mt-2">$1.11</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2025</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-full bg-green-400 rounded-t" style={{height: '50%'}}></div>
                          <p className="text-xs font-bold mt-2">$1.14</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">2026</p>
                          <Badge className="mt-1 bg-green-600 text-[10px]">+2.7%</Badge>
                        </div>
                      </div>

                      <div className="mt-6 grid md:grid-cols-3 gap-4">
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-center">
                          <p className="text-xs text-slate-600 dark:text-slate-400">Pre-Cut Peak</p>
                          <p className="text-xl font-bold text-green-600">$2.08</p>
                          <p className="text-xs">(2020-2021)</p>
                        </div>
                        <div className="p-3 bg-red-50 dark:bg-red-950 rounded text-center">
                          <p className="text-xs text-slate-600 dark:text-slate-400">Post-Cut Low</p>
                          <p className="text-xl font-bold text-red-600">$1.11</p>
                          <p className="text-xs">(2022-2025)</p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded text-center">
                          <p className="text-xs text-slate-600 dark:text-slate-400">Recovery</p>
                          <p className="text-xl font-bold text-blue-600">46.6%</p>
                          <p className="text-xs">Below 2021 level</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* AT&T vs Verizon */}
                <section id="vs-verizon">
                  <h2 className="flex items-center gap-2">
                    <Activity className="h-7 w-7 text-cyan-600" />
                    AT&T vs Verizon: Which Is Better?
                  </h2>
                  <p>
                    The two telecom giants compete head-to-head in wireless and fiber. Both offer high dividend
                    yields above 6%, but their financial health and growth prospects differ significantly.
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b-2">
                              <th className="text-left p-3">Metric</th>
                              <th className="text-center p-3">AT&T (T)</th>
                              <th className="text-center p-3">Verizon (VZ)</th>
                              <th className="text-center p-3">Winner</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Dividend Yield</td>
                              <td className="p-3 text-center">6.5%</td>
                              <td className="p-3 text-center">6.8%</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr className="border-b bg-slate-50 dark:bg-slate-900">
                              <td className="p-3 font-medium">Payout Ratio</td>
                              <td className="p-3 text-center">50%</td>
                              <td className="p-3 text-center">55%</td>
                              <td className="p-3 text-center"><Badge className="bg-red-600">T</Badge></td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Years of Increases</td>
                              <td className="p-3 text-center">2 (post-cut)</td>
                              <td className="p-3 text-center">18</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr className="border-b bg-slate-50 dark:bg-slate-900">
                              <td className="p-3 font-medium">Total Debt</td>
                              <td className="p-3 text-center">$130B</td>
                              <td className="p-3 text-center">$145B</td>
                              <td className="p-3 text-center"><Badge className="bg-red-600">T</Badge></td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Debt/EBITDA</td>
                              <td className="p-3 text-center">2.8x</td>
                              <td className="p-3 text-center">2.4x</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr className="border-b bg-slate-50 dark:bg-slate-900">
                              <td className="p-3 font-medium">Wireless Subscribers</td>
                              <td className="p-3 text-center">73M postpaid</td>
                              <td className="p-3 text-center">93M postpaid</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Fiber Subscribers</td>
                              <td className="p-3 text-center">8.1M (+20% YoY)</td>
                              <td className="p-3 text-center">3.8M (+15% YoY)</td>
                              <td className="p-3 text-center"><Badge className="bg-red-600">T</Badge></td>
                            </tr>
                            <tr className="border-b bg-slate-50 dark:bg-slate-900">
                              <td className="p-3 font-medium">Free Cash Flow</td>
                              <td className="p-3 text-center">$16B</td>
                              <td className="p-3 text-center">$18B</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">5-Year Stock Return</td>
                              <td className="p-3 text-center text-red-600">-32%</td>
                              <td className="p-3 text-center text-red-600">-18%</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr className="border-b bg-slate-50 dark:bg-slate-900">
                              <td className="p-3 font-medium">Recent Dividend Cut?</td>
                              <td className="p-3 text-center text-red-600">Yes (2022)</td>
                              <td className="p-3 text-center text-green-600">No</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <p className="font-bold mb-2">Verdict: Verizon Edges Out AT&T</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Verizon wins on dividend reliability (18 years of increases vs. 2), slightly higher yield,
                          and no recent dividend cut. However, AT&T's fiber growth is superior and debt reduction
                          progress is impressive. <strong>For conservative income investors prioritizing safety,
                          Verizon is the better choice. For contrarian investors willing to bet on AT&T's recovery,
                          the current valuation offers upside potential.</strong>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Who Should Buy */}
                <section id="who-should-buy">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-purple-600" />
                    Who Should Buy AT&T Stock?
                  </h2>
                  <p>
                    AT&T isn't for everyone. The dividend cut history makes it unsuitable for conservative retirees
                    who can't afford volatility. But certain investor profiles may find value.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-2 border-green-300 dark:border-green-700">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4">
                          Good Fit For:
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">High-Yield Seekers</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Need 6%+ yield to meet income goals. Willing to accept risk for current cash flow.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Diversification Seekers</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Already own quality dividend aristocrats. Adding 5-10% AT&T for yield boost in portfolio.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Value Investors</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Believe stock is oversold. Betting on debt reduction success and fiber growth driving recovery.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Tax-Advantaged Accounts</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Hold AT&T in Roth IRA where high yield isn't taxed. Maximize tax-free income.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Patient Contrarians</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                5-10 year time horizon. Believe turnaround story will play out by 2028-2030.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-red-300 dark:border-red-700">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4">
                          Not Suitable For:
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Dividend Growth Investors</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Only 2 years of increases. Won't compound income like JNJ, PG, or V over 20 years.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Conservative Retirees</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Can't afford another dividend cut. Better options: Realty Income, utilities, REITs.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Growth-Oriented Portfolios</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                AT&T stock is dead money. -32% over 5 years. Growth investors should avoid entirely.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">ESG-Focused Investors</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                AT&T scores poorly on governance due to failed acquisitions and dividend cut.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Large Portfolio Allocation</p>
                              <p className="text-slate-600 dark:text-slate-400">
                                Don't put 20%+ of portfolio in AT&T. Too much concentration risk. 5-10% max.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section id="calculate" className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your AT&T Dividend Returns</h3>
                      <p className="mb-6 text-blue-100">
                        See how much income AT&T could generate in your portfolio. Calculate total returns with
                        DRIP reinvestment, compare with Verizon, and project 10-20 year income scenarios.
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
                            Yield on Cost Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Best Brokers for Buying AT&T Stock</h2>
                  <p>
                    To buy AT&T commission-free with automatic dividend reinvestment (DRIP), you need a quality
                    brokerage account. Here are the top-rated brokers for dividend investors in 2026.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ Section */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is AT&T's dividend safe after the 2022 cut?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, the current $1.11 annual dividend appears sustainable. AT&T generates $16B+ in free cash
                          flow and pays out only $8B in dividends (50% payout ratio). This is a healthy level that leaves
                          room for debt reduction and capital investment. The company has stated the dividend is a priority
                          and should grow modestly (2-4% annually) once debt targets are reached in 2027-2028. Another cut
                          is unlikely unless the wireless industry faces massive disruption.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Why did AT&T cut its dividend in 2022?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          AT&T cut the dividend by 47% (from $2.08 to $1.11 annually) as part of the WarnerMedia spinoff
                          that created Warner Bros. Discovery. The media assets were spun off to shareholders, and AT&T
                          reset the dividend to focus on debt reduction and 5G/fiber investment. Management argued the old
                          $2.08 dividend was unsustainable with $180B+ in debt and required $24B annual capex. The cut was
                          painful for income investors but improved AT&T's financial flexibility.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Will AT&T raise its dividend in 2026 or 2027?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          AT&T raised the quarterly dividend by 2% in 2024 and again in 2025. Modest increases of 2-4%
                          annually are likely in 2026-2027 as debt reduction progresses. However, don't expect aggressive
                          raises until the debt-to-EBITDA ratio reaches the low-2x range (likely 2027-2028). Management
                          prioritizes deleveraging over dividend growth in the near term. Once the balance sheet is healthier,
                          AT&T could accelerate raises to 5-7% annually to rebuild investor trust.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is AT&T stock a better buy than Verizon?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          It depends on your goals. Verizon (VZ) is safer with 18 consecutive years of dividend increases
                          and no recent cuts. However, AT&T offers a better recovery story—fiber growing 20% annually,
                          debt declining faster than expected, and stock trading near 5-year lows (potential upside). If
                          you're conservative and need reliability, buy Verizon. If you're willing to bet on AT&T's
                          turnaround for potential price appreciation plus 6.5% yield, AT&T offers better risk/reward at
                          current prices. Many investors split the difference and own both.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much debt does AT&T have and is it manageable?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          AT&T carries approximately $130 billion in total debt as of early 2026, down from $180B+ in 2021.
                          While this is still one of the highest debt loads in corporate America, it's manageable because
                          AT&T generates massive cash flow ($38B operating cash flow annually). The debt-to-EBITDA ratio
                          has improved from 3.5x to 2.8x and is targeting low-2x by 2028. AT&T dedicates $6-8B per year
                          to debt paydown. The debt is investment-grade rated and spread across long maturities, so
                          refinancing risk is low.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What happened to AT&T shareholders after the WarnerMedia spinoff?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          On April 8, 2022, AT&T spun off WarnerMedia (HBO Max, CNN, Warner Bros.) and merged it with
                          Discovery to create Warner Bros. Discovery (WBD). AT&T shareholders received 0.24 shares of WBD
                          for each share of AT&T they owned. Example: If you owned 100 shares of AT&T, you received 24 shares
                          of WBD. Your AT&T position remained intact but the dividend was cut to $1.11. WBD initially paid
                          a small dividend but suspended it in 2023 to focus on debt reduction. Most income investors sold
                          their WBD shares and either kept AT&T or sold both.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I use DRIP with AT&T stock?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, if you're building a position long-term and don't need the income. AT&T's 6.5% yield
                          compounds powerfully when reinvested. DRIP (Dividend Reinvestment Plan) automatically buys more
                          AT&T shares each quarter without commissions. Over 10-20 years, this accelerates wealth building
                          significantly. However, if you're retired and depend on the dividend income for living expenses,
                          turn off DRIP and spend the cash. Also consider that AT&T has disappointed shareholders before—
                          some investors prefer to take the cash and deploy it into higher-quality dividend growers.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is AT&T's fiber business growing fast enough?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, fiber is AT&T's strongest growth driver. The company has 8.1M fiber subscribers out of 28M
                          homes passed (29% penetration rate). Subscribers grew 20% year-over-year in 2025. AT&T targets
                          30M+ passings by end of 2025 and could eventually reach 35-40M as fiber becomes the preferred
                          broadband technology. Each fiber customer generates $70-80 monthly revenue at high margins.
                          This business should add $1-2B in annual revenue for the next 5 years, helping offset wireless
                          margin pressure.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What's AT&T's 5G coverage like compared to competitors?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          AT&T's 5G network covers 290M+ Americans, similar to Verizon and T-Mobile. The company has invested
                          heavily in C-band spectrum for fast mid-band 5G speeds. AT&T's 5G is competitive but not clearly
                          superior to rivals. The FirstNet contract (exclusive public safety network) gives AT&T an advantage
                          with government and enterprise customers. Consumers generally see equivalent performance across
                          all three major carriers. The wireless business is mature and commoditized—growth comes from
                          modest ARPU increases and connected devices (cars, IoT), not revolutionary technology.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Could AT&T cut the dividend again?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Unlikely, but not impossible. AT&T cut once in 2022, which destroyed investor trust. Management
                          knows another cut would be catastrophic for the stock. The current 50% payout ratio is sustainable
                          even in a recession—wireless and fiber are essential services that customers don't cancel. The
                          main risk would be a major industry disruption (e.g., new technology making 5G obsolete, massive
                          price war that collapses margins). But absent a black swan event, the $1.11 dividend should be
                          safe through 2026-2030. AT&T has publicly committed to dividend stability and growth.
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
                    <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      50 Best Dividend Stocks to Buy in 2026
                    </Link>
                    <Link href="/blog/best-monthly-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Monthly Dividend Stocks (Get Paid 12x Per Year)
                    </Link>
                    <Link href="/blog/dividend-aristocrats-complete-list" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete List of Dividend Aristocrats
                    </Link>
                    <Link href="/blog/is-realty-income-good-investment" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Is Realty Income a Good Investment? (5.5% Monthly Dividends)
                    </Link>
                    <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a $1,000/Month Dividend Portfolio
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
