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
  DollarSign,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  PieChart,
  Building2,
  Zap,
  ShieldCheck,
  Percent,
  TrendingDown,
  Activity,
  Radio,
  Wifi,
  XCircle,
  MinusCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is Verizon Stock a Good Dividend Investment in 2026? - Expert Analysis',
  description: 'Complete analysis of Verizon (VZ) as a dividend investment. Current 6.7% yield, 19-year growth streak, debt analysis, 5G outlook, and comparison with AT&T. Expert verdict on dividend safety.',
  keywords: 'is Verizon stock a good investment, Verizon dividend, VZ stock analysis, Verizon dividend safety, Verizon vs AT&T, telecom dividend stocks, high yield stocks, 5G stocks',
  openGraph: {
    title: 'Is Verizon Stock a Good Dividend Investment in 2026?',
    description: 'Detailed analysis of Verizon\'s 6.7% dividend yield, sustainability, debt concerns, and whether it belongs in your portfolio.',
    type: 'article',
  }
}

export default function VerizonStockAnalysisPage() {
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
                  Is Verizon Stock a Good Dividend Investment in 2026?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Complete analysis of Verizon Communications (VZ) as a dividend stock. We examine the 6.7% yield,
                  19-year dividend growth streak, massive debt load, 5G network advantages, competitive threats,
                  and whether this telecom giant deserves a place in your income portfolio.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>15 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    Stock Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Answer: Should You Buy Verizon for Dividends?
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>The Yield:</strong> 6.7% is among the highest in the S&P 500 - 3x higher than the market average</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>The Track Record:</strong> 19 consecutive years of dividend increases (Dividend Achiever status)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>The Concern:</strong> $140+ billion in debt from 5G network buildout and spectrum purchases</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>The Growth:</strong> Dividend increases have slowed to 2% annually - barely keeping pace with inflation</span>
                    </p>
                    <p className="flex items-start gap-2 font-semibold">
                      <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Verdict:</strong> Good for income investors who need high current yield and accept minimal growth. Not ideal for dividend growth investors under 50.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#snapshot" className="text-blue-600 hover:underline">Verizon Stock Snapshot</a></li>
                    <li><a href="#dividend-history" className="text-blue-600 hover:underline">Dividend History & Yield</a></li>
                    <li><a href="#business-model" className="text-blue-600 hover:underline">Business Model Analysis</a></li>
                    <li><a href="#competitive-position" className="text-blue-600 hover:underline">Competitive Position</a></li>
                    <li><a href="#financial-health" className="text-blue-600 hover:underline">Financial Health & Debt</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety Analysis</a></li>
                    <li><a href="#growth-prospects" className="text-blue-600 hover:underline">Growth Prospects</a></li>
                    <li><a href="#vs-att" className="text-blue-600 hover:underline">Verizon vs AT&T</a></li>
                    <li><a href="#pros-cons" className="text-blue-600 hover:underline">Pros & Cons</a></li>
                    <li><a href="#who-should-buy" className="text-blue-600 hover:underline">Who Should Buy VZ?</a></li>
                    <li><a href="#calculator" className="text-blue-600 hover:underline">Calculate Your Returns</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Stock Snapshot */}
                <section id="snapshot">
                  <h2 className="flex items-center gap-2">
                    <Radio className="h-7 w-7 text-red-600" />
                    Verizon Stock Snapshot (February 2026)
                  </h2>
                  <p>
                    Verizon Communications (NYSE: VZ) is America's largest wireless carrier by subscribers, serving
                    115+ million connections on the nation's most reliable 5G network. The company also operates
                    a significant fiber-optic broadband business (Fios) serving residential and business customers.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Key Metrics at a Glance</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Price</p>
                          <p className="text-2xl font-bold">$42.50</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">52-Week Range: $37-48</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Dividend Yield</p>
                          <p className="text-2xl font-bold text-green-600">6.7%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Quarterly: $0.6775/share</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Market Cap</p>
                          <p className="text-2xl font-bold">$178B</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">S&P 500 Component</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Payout Ratio</p>
                          <p className="text-2xl font-bold">58%</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Moderately Safe</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">P/E Ratio</p>
                          <p className="text-2xl font-bold">8.2x</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Below Market Average</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Total Debt</p>
                          <p className="text-2xl font-bold text-yellow-600">$142B</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">High Leverage</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    At first glance, Verizon looks attractive for income investors: ultra-high yield, reasonable
                    payout ratio, and strong brand recognition. But the high debt load and mature market dynamics
                    require deeper analysis before committing capital.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    Dividend History: 19 Years of Increases (But Slowing)
                  </h2>
                  <p>
                    Verizon has increased its dividend for 19 consecutive years, earning Dividend Achiever status.
                    This track record demonstrates management's commitment to returning cash to shareholders through
                    multiple economic cycles including the 2008 financial crisis and 2020 pandemic.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Growth Timeline</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">2007-2012</span>
                          <span className="text-green-600">5-8% annual growth (healthy expansion)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">2013-2017</span>
                          <span className="text-green-600">3-4% annual growth (moderate)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">2018-2022</span>
                          <span className="text-blue-600">2-2.5% annual growth (slowing)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">2023-2026</span>
                          <span className="text-yellow-600">2% annual growth (minimal, just matches inflation)</span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded border-l-4 border-yellow-600">
                        <p className="font-semibold text-sm mb-1">Key Insight</p>
                        <p className="text-sm">
                          While the dividend has never been cut, growth has decelerated significantly. At 2% annual
                          increases, your income barely keeps pace with inflation. This is a "yield stock" not a
                          "dividend growth stock."
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Current Dividend Details</h3>
                  <ul>
                    <li><strong>Annual Dividend:</strong> $2.71 per share</li>
                    <li><strong>Quarterly Payment:</strong> $0.6775 (paid Feb, May, Aug, Nov)</li>
                    <li><strong>Dividend Yield:</strong> 6.7% at $42.50/share</li>
                    <li><strong>5-Year CAGR:</strong> 2.1% (compound annual growth rate)</li>
                    <li><strong>10-Year CAGR:</strong> 2.8%</li>
                  </ul>

                  <p>
                    For perspective, if you invest $10,000 in Verizon today, you'll receive approximately $670 in
                    annual dividend income. If the 2% growth rate continues, that income grows to just $816 after
                    10 years—a 22% total increase versus 119% if dividends grew at 8% annually.
                  </p>
                </section>

                {/* Business Model */}
                <section id="business-model">
                  <h2 className="flex items-center gap-2">
                    <Wifi className="h-7 w-7 text-blue-600" />
                    Business Model: Mature Cash Cow with Infrastructure Advantages
                  </h2>
                  <p>
                    Verizon operates two primary business segments that generate predictable, recurring revenue
                    from essential communication services.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Revenue Breakdown (2025)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">Wireless (Consumer)</span>
                            <span className="text-slate-600">$73B (52% of revenue)</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{width: '52%'}}></div>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            115M+ connections, premium network positioning, 5G Ultra Wideband expansion
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">Business/Enterprise</span>
                            <span className="text-slate-600">$32B (23% of revenue)</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{width: '23%'}}></div>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Enterprise wireless, cloud services, IoT solutions, higher margins
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">Fios Broadband/TV</span>
                            <span className="text-slate-600">$22B (16% of revenue)</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-purple-600 h-3 rounded-full" style={{width: '16%'}}></div>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Fiber-optic internet/TV in Northeast markets, strong customer retention
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">Other (Media, Prepaid)</span>
                            <span className="text-slate-600">$13B (9% of revenue)</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-orange-600 h-3 rounded-full" style={{width: '9%'}}></div>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Visible (prepaid brand), TracFone acquisition, declining media assets
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="font-semibold text-sm">Total 2025 Revenue: $140 billion</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Operating Margin: 22% | Free Cash Flow: $18.5B</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Key Business Strengths</h3>
                  <ul>
                    <li><strong>Network Quality Leadership:</strong> Consistently rated #1 in coverage, reliability, and speed by RootMetrics and J.D. Power</li>
                    <li><strong>Premium Positioning:</strong> Commands higher prices ($10-20/month more than T-Mobile) due to superior network quality</li>
                    <li><strong>Recurring Revenue Model:</strong> 85%+ of revenue is subscription-based with automatic monthly billing</li>
                    <li><strong>High Switching Costs:</strong> Customers keep phone numbers, have contract commitments, and value network reliability</li>
                    <li><strong>5G Infrastructure Advantage:</strong> $50B+ invested in nationwide 5G Ultra Wideband (C-Band spectrum)</li>
                    <li><strong>Fiber Assets:</strong> 500,000+ route miles of fiber supporting wireless backhaul and Fios broadband</li>
                  </ul>

                  <h3>Business Model Challenges</h3>
                  <ul>
                    <li><strong>Market Saturation:</strong> U.S. smartphone penetration exceeds 90%—limited room for subscriber growth</li>
                    <li><strong>Price Competition:</strong> T-Mobile and AT&T offer aggressive promotions, pressuring pricing power</li>
                    <li><strong>Capital Intensity:</strong> Network requires continuous multi-billion dollar investments to maintain leadership</li>
                    <li><strong>Cord-Cutting:</strong> Traditional Fios TV declining as customers shift to streaming services</li>
                    <li><strong>Regulatory Risk:</strong> FCC oversight on pricing, merger approvals, and spectrum allocation</li>
                  </ul>
                </section>

                {/* Competitive Position */}
                <section id="competitive-position">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-purple-600" />
                    Competitive Position: Leading Network, But Losing Pricing Power
                  </h2>
                  <p>
                    The U.S. wireless market is dominated by three national carriers—Verizon, AT&T, and T-Mobile—who
                    collectively control 98% market share. This oligopoly structure has historically supported pricing
                    discipline, but competitive dynamics shifted dramatically after the T-Mobile/Sprint merger in 2020.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Market Share & Positioning (2026)</h3>
                      <div className="space-y-4 text-sm">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-blue-600">
                          <div className="flex justify-between mb-2">
                            <span className="font-bold text-lg">Verizon (VZ)</span>
                            <Badge variant="default" className="bg-blue-600">38% Market Share</Badge>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 mb-2">
                            <strong>Strategy:</strong> Premium network quality justifies premium pricing
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Best network reliability
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Largest enterprise customer base
                            </div>
                            <div className="flex items-center gap-1">
                              <MinusCircle className="h-4 w-4 text-yellow-600" />
                              Highest prices (vulnerability)
                            </div>
                            <div className="flex items-center gap-1">
                              <MinusCircle className="h-4 w-4 text-yellow-600" />
                              Slowest subscriber growth
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-green-600">
                          <div className="flex justify-between mb-2">
                            <span className="font-bold text-lg">T-Mobile (TMUS)</span>
                            <Badge variant="default" className="bg-green-600">32% Market Share</Badge>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 mb-2">
                            <strong>Strategy:</strong> "Un-carrier" value positioning with aggressive promotions
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Fastest subscriber growth
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Strong 5G mid-band coverage
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Lower debt than rivals
                            </div>
                            <div className="flex items-center gap-1">
                              <AlertCircle className="h-4 w-4 text-yellow-600" />
                              Network still behind Verizon
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-orange-600">
                          <div className="flex justify-between mb-2">
                            <span className="font-bold text-lg">AT&T (T)</span>
                            <Badge variant="default" className="bg-orange-600">28% Market Share</Badge>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 mb-2">
                            <strong>Strategy:</strong> Fiber bundling and business services focus
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Extensive fiber network
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Similar yield to Verizon (6.5%)
                            </div>
                            <div className="flex items-center gap-1">
                              <AlertCircle className="h-4 w-4 text-yellow-600" />
                              Cut dividend 2022 (post-spinoffs)
                            </div>
                            <div className="flex items-center gap-1">
                              <MinusCircle className="h-4 w-4 text-yellow-600" />
                              High debt from past acquisitions
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Verizon's Competitive Moat</h3>
                  <p>
                    Verizon's primary competitive advantage is its superior network infrastructure built over 25+ years
                    and $150+ billion in cumulative capital investment. This moat has several dimensions:
                  </p>
                  <ul>
                    <li><strong>Coverage Density:</strong> More cell towers in more locations than any competitor</li>
                    <li><strong>Spectrum Holdings:</strong> $53B invested in C-Band spectrum (2021-2022) for 5G leadership</li>
                    <li><strong>Fiber Backhaul:</strong> Extensive fiber network connecting cell sites for low latency and high capacity</li>
                    <li><strong>Brand Trust:</strong> "Can You Hear Me Now?" legacy = reliability association in consumer minds</li>
                    <li><strong>Enterprise Relationships:</strong> Deep integration with Fortune 500 companies creates switching barriers</li>
                  </ul>

                  <p>
                    However, this moat is <strong>narrowing</strong>. T-Mobile's 5G mid-band network (from Sprint merger)
                    now rivals Verizon's coverage in many markets. The quality gap that once justified premium pricing
                    has compressed from "night and day" difference to "incrementally better" in most urban areas.
                  </p>
                </section>

                {/* Financial Health */}
                <section id="financial-health">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-yellow-600" />
                    Financial Health: Strong Cash Flow, But Debt is Concerning
                  </h2>
                  <p>
                    Verizon generates massive cash flow from its subscription-based business model. However, aggressive
                    5G network investments and C-Band spectrum purchases have pushed debt to uncomfortable levels for
                    a company in a competitive, maturing industry.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-l-4 border-yellow-600">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Key Financial Metrics (2025)</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-white dark:bg-slate-900 rounded">
                            <p className="text-xs text-slate-600 dark:text-slate-400">Revenue</p>
                            <p className="text-2xl font-bold">$140B</p>
                            <p className="text-xs text-green-600">+1.2% YoY (slow growth)</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-900 rounded">
                            <p className="text-xs text-slate-600 dark:text-slate-400">Operating Income</p>
                            <p className="text-2xl font-bold">$30.8B</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">22% margin</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-900 rounded">
                            <p className="text-xs text-slate-600 dark:text-slate-400">Free Cash Flow</p>
                            <p className="text-2xl font-bold text-green-600">$18.5B</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">13.2% FCF margin</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-900 rounded">
                            <p className="text-xs text-slate-600 dark:text-slate-400">Dividends Paid</p>
                            <p className="text-2xl font-bold">$11.4B</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">62% of FCF</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-900 rounded">
                            <p className="text-xs text-slate-600 dark:text-slate-400">Total Debt</p>
                            <p className="text-2xl font-bold text-red-600">$142B</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">High leverage</p>
                          </div>
                          <div className="p-3 bg-white dark:bg-slate-900 rounded">
                            <p className="text-xs text-slate-600 dark:text-slate-400">Debt/EBITDA</p>
                            <p className="text-2xl font-bold text-yellow-600">2.8x</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Above comfort zone</p>
                          </div>
                        </div>

                        <div className="p-4 bg-red-50 dark:bg-red-950 rounded border-l-4 border-red-600">
                          <p className="font-semibold text-sm mb-2">Debt Concern Analysis</p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Verizon's $142B debt load is manageable given its cash flow generation, but it limits
                            financial flexibility. Annual interest expense of $4.5B consumes 24% of free cash flow.
                            Management is prioritizing debt reduction over dividend growth, targeting 2.0-2.5x leverage
                            by 2028. Credit rating: BBB+ (still investment grade, but lower end).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Cash Flow Waterfall: Where the Money Goes</h3>
                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <span>Operating Cash Flow</span>
                          <span className="font-bold text-green-600">+$36.2B</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <span>Capital Expenditures (5G, fiber, maintenance)</span>
                          <span className="font-bold text-red-600">-$17.7B</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded font-semibold border-t-2 border-slate-300">
                          <span>Free Cash Flow</span>
                          <span className="text-blue-600">$18.5B</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <span>Dividend Payments</span>
                          <span className="font-bold text-red-600">-$11.4B (62%)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <span>Debt Reduction</span>
                          <span className="font-bold text-red-600">-$5.8B (31%)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <span>Share Buybacks</span>
                          <span className="font-bold text-slate-600">-$1.3B (7%)</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        This allocation shows management's priorities: maintain the dividend, reduce debt, minimal buybacks.
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Bottom line on financial health:</strong> Verizon can comfortably afford its current dividend
                    from free cash flow, even with heavy debt service. The risk is not imminent dividend cut, but rather
                    limited ability to grow the dividend meaningfully while simultaneously reducing debt to more conservative
                    levels. Expect 2% annual increases to continue for the foreseeable future.
                  </p>
                </section>

                {/* Dividend Safety */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-green-600" />
                    Dividend Safety Score: 7/10 (Moderately Safe)
                  </h2>
                  <p>
                    We assign Verizon a dividend safety score of 7 out of 10. The dividend is not at risk of being
                    cut in normal economic conditions, but growth will remain minimal as management balances debt
                    reduction with shareholder returns.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Payout Ratio (58% of FCF)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Sustainable, room for cuts if needed</p>
                          </div>
                          <Badge className="bg-green-600">9/10</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Cash Flow Stability</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Highly predictable recurring revenue</p>
                          </div>
                          <Badge className="bg-green-600">9/10</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Balance Sheet Strength</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">High debt but investment-grade rating</p>
                          </div>
                          <Badge className="bg-yellow-600">6/10</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Business Resilience</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Essential service, recession-resistant</p>
                          </div>
                          <Badge className="bg-green-600">8/10</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Competitive Position</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Leading but under pressure from T-Mobile</p>
                          </div>
                          <Badge className="bg-yellow-600">7/10</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Growth Outlook</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Limited by market maturity</p>
                          </div>
                          <Badge className="bg-yellow-600">5/10</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                          <div>
                            <p className="font-semibold">Dividend Track Record</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">19 years increases, never cut</p>
                          </div>
                          <Badge className="bg-green-600">8/10</Badge>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded border-l-4 border-blue-600">
                          <p className="font-bold text-lg">Overall Dividend Safety: 7.4/10</p>
                          <p className="text-sm mt-2">
                            <strong>Interpretation:</strong> The dividend is safe in the medium term but faces long-term
                            headwinds from debt obligations and competitive pressures. Unlikely to be cut but also
                            unlikely to grow significantly above inflation. Best suited for investors who need high
                            current yield and can accept minimal growth.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>What Could Force a Dividend Cut?</h3>
                  <p>
                    While we view the dividend as relatively safe, several scenarios could force management to reduce
                    or freeze the payout:
                  </p>
                  <ul>
                    <li><strong>Severe Recession:</strong> Deep economic downturn causing subscriber losses and reduced business spending</li>
                    <li><strong>Major Competitive Disruption:</strong> Continued market share losses to T-Mobile forcing price cuts</li>
                    <li><strong>Debt Downgrade:</strong> Credit rating falling below investment grade, raising borrowing costs</li>
                    <li><strong>Technology Disruption:</strong> New wireless technology (6G) requiring unexpected massive capex</li>
                    <li><strong>Regulatory Action:</strong> Government-mandated price controls or forced network sharing</li>
                  </ul>

                  <p>
                    None of these scenarios appear imminent as of February 2026, but they represent tail risks that
                    dividend investors should monitor.
                  </p>
                </section>

                {/* Growth Prospects */}
                <section id="growth-prospects">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-blue-600" />
                    Growth Prospects: Modest at Best
                  </h2>
                  <p>
                    Verizon operates in a mature market with limited organic growth drivers. Revenue is expected to
                    grow 1-3% annually over the next 3-5 years, primarily from price increases rather than subscriber
                    additions.
                  </p>

                  <h3>Potential Growth Drivers</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold flex items-center gap-2 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            Fixed Wireless Access (FWA)
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Using 5G for home internet is Verizon's fastest-growing segment. 3.5M+ customers as of
                            Q4 2025, targeting 4-5M by end of 2026. Competes with cable broadband without laying fiber.
                            Higher margins than traditional wireless. <strong>Impact: +$2-3B annual revenue potential</strong>
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold flex items-center gap-2 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            Enterprise 5G Solutions
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Private 5G networks for factories, warehouses, and campuses. IoT connectivity for smart
                            cities and industrial applications. Early stage but high potential. <strong>Impact: +$1-2B
                            by 2028</strong>
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold flex items-center gap-2 mb-2">
                            <AlertCircle className="h-5 w-5 text-blue-600" />
                            Unlimited Plan Upsells
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Migrating customers from legacy plans to premium unlimited plans at $80-90/month.
                            Bundling streaming services (Disney+, Netflix) to justify price. <strong>Impact: Maintains
                            ARPU (average revenue per user) despite competition</strong>
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold flex items-center gap-2 mb-2">
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                            TracFone Integration
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Acquired TracFone (prepaid brand) in 2021 for $6.25B. Adding 20M+ subscribers but at
                            lower margins. Integration savings of $500M annually by 2027. <strong>Impact: Neutral
                            to slightly positive</strong>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Growth Headwinds</h3>
                  <ul>
                    <li><strong>Market Saturation:</strong> U.S. has more mobile connections than people—no greenfield expansion</li>
                    <li><strong>Price Competition:</strong> T-Mobile's aggressive promotions force Verizon to match, limiting pricing power</li>
                    <li><strong>Cord-Cutting:</strong> Fios TV subscribers declining 5-8% annually as streaming dominates</li>
                    <li><strong>High Capex Requirements:</strong> Maintaining network leadership requires $17-18B/year ongoing investment</li>
                    <li><strong>Subscriber Churn:</strong> Customers switching more frequently due to device payment plans and BYOD trends</li>
                  </ul>

                  <p>
                    <strong>Realistic Growth Expectation:</strong> 1-2% revenue growth, 2-3% dividend growth through 2028.
                    Verizon is a mature utility-like business, not a growth stock. The appeal is yield, not capital appreciation.
                  </p>
                </section>

                {/* Verizon vs AT&T */}
                <section id="vs-att">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-purple-600" />
                    Verizon vs AT&T: Which Telecom Dividend is Better?
                  </h2>
                  <p>
                    Investors often compare Verizon and AT&T as interchangeable high-yield telecom stocks. Both offer
                    similar yields (~6.5-6.7%), operate in the same industry, and face similar challenges. However,
                    there are important differences that affect dividend safety and growth potential.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Head-to-Head Comparison</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                              <th className="text-left p-2">Metric</th>
                              <th className="text-left p-2">Verizon (VZ)</th>
                              <th className="text-left p-2">AT&T (T)</th>
                              <th className="text-left p-2">Winner</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                              <td className="p-2 font-semibold">Dividend Yield</td>
                              <td className="p-2">6.7%</td>
                              <td className="p-2">6.5%</td>
                              <td className="p-2"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Payout Ratio</td>
                              <td className="p-2">58%</td>
                              <td className="p-2">50%</td>
                              <td className="p-2"><Badge className="bg-orange-600">T</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Dividend Growth Streak</td>
                              <td className="p-2">19 years</td>
                              <td className="p-2">2 years (cut in 2022)</td>
                              <td className="p-2"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Total Debt</td>
                              <td className="p-2">$142B</td>
                              <td className="p-2">$130B</td>
                              <td className="p-2"><Badge className="bg-orange-600">T</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Free Cash Flow</td>
                              <td className="p-2">$18.5B</td>
                              <td className="p-2">$16.8B</td>
                              <td className="p-2"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Wireless Market Share</td>
                              <td className="p-2">38%</td>
                              <td className="p-2">28%</td>
                              <td className="p-2"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Network Quality Ranking</td>
                              <td className="p-2">#1 (RootMetrics)</td>
                              <td className="p-2">#3</td>
                              <td className="p-2"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Fiber Coverage</td>
                              <td className="p-2">9M homes passed</td>
                              <td className="p-2">18M+ homes passed</td>
                              <td className="p-2"><Badge className="bg-orange-600">T</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">P/E Ratio</td>
                              <td className="p-2">8.2x</td>
                              <td className="p-2">7.8x</td>
                              <td className="p-2"><Badge className="bg-orange-600">T</Badge></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">5-Year Stock Return</td>
                              <td className="p-2">-12%</td>
                              <td className="p-2">-15%</td>
                              <td className="p-2"><Badge className="bg-blue-600">VZ</Badge></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded border-l-4 border-blue-600">
                          <p className="font-bold mb-2">Choose Verizon If You Want:</p>
                          <ul className="text-xs space-y-1">
                            <li>✓ Best network quality and reliability</li>
                            <li>✓ Unbroken dividend growth history</li>
                            <li>✓ Stronger wireless market position</li>
                            <li>✓ No history of dividend cuts</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded border-l-4 border-orange-600">
                          <p className="font-bold mb-2">Choose AT&T If You Want:</p>
                          <ul className="text-xs space-y-1">
                            <li>✓ Lower payout ratio (more safety cushion)</li>
                            <li>✓ Superior fiber broadband footprint</li>
                            <li>✓ Slightly cheaper valuation</li>
                            <li>✓ Cleaner balance sheet post-spinoffs</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm mb-2">Our Take:</p>
                        <p className="text-sm">
                          <strong>Verizon has the edge</strong> for dividend investors due to its unbroken dividend
                          growth streak and superior wireless network. AT&T's 2022 dividend cut (post WarnerMedia/Discovery
                          spinoff) damages its credibility, even though the reset dividend appears sustainable. If you
                          want the absolute highest yield with slightly better safety, choose Verizon. If you prefer
                          lower payout ratio and fiber upside, AT&T is reasonable. Both are "yield now, minimal growth"
                          propositions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Pros and Cons */}
                <section id="pros-cons">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-indigo-600" />
                    Pros & Cons: Balanced Perspective
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                          Reasons to Buy Verizon
                        </h3>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Ultra-High Yield:</strong> 6.7% is 3x the S&P 500 average—instant income stream</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Reliable History:</strong> 19 consecutive years of dividend increases, never cut or frozen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Recession Resistant:</strong> Wireless service is essential—people cut vacations before phone plans</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Network Leadership:</strong> Best 5G coverage and reliability creates pricing power</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Sustainable Payout:</strong> 58% payout ratio leaves cushion for economic downturns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Predictable Cash Flow:</strong> Recurring subscription model with automatic billing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Cheap Valuation:</strong> 8.2x P/E is historically low—potential for multiple expansion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>FWA Growth:</strong> Fixed wireless access adding 1M+ customers annually without fiber costs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Qualified Dividends:</strong> Taxed at favorable 15-20% rates (vs 22-37% ordinary income)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <XCircle className="h-6 w-6 text-red-600" />
                          Reasons to Avoid Verizon
                        </h3>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Minimal Dividend Growth:</strong> 2% annual increases barely match inflation—income stagnates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Heavy Debt Load:</strong> $142B debt limits flexibility and growth investments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Market Saturation:</strong> No room for subscriber growth in 90%+ penetrated U.S. market</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>T-Mobile Threat:</strong> Aggressive competitor gaining market share with lower prices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Stock Price Decline:</strong> Down 12% over 5 years—yield from falling stock, not growth</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>High Capex:</strong> Must invest $17-18B annually just to maintain network parity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Regulatory Risk:</strong> Government could mandate network sharing or price controls</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>No Total Return:</strong> Dividend yield offset by stock depreciation = flat total returns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Better Alternatives:</strong> Other 6%+ yielders (REITs, pipelines) offer more growth</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Who Should Buy */}
                <section id="who-should-buy">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-blue-600" />
                    Who Should Buy Verizon Stock?
                  </h2>
                  <p>
                    Verizon is not a one-size-fits-all dividend stock. It works well for specific investor profiles
                    but is poorly suited for others. Here's how to know if VZ belongs in your portfolio.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 text-green-600">✓ Verizon is GOOD For:</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Retirees Needing High Current Income</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            If you're 65+ and need to generate $50,000/year from a $750,000 portfolio, Verizon's 6.7%
                            yield delivers immediate cash flow. The dividend is stable enough to fund retirement expenses
                            without selling shares. Pair with bonds and other high-yielders for a diversified income stream.
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Conservative Income Portfolios (20-30% Allocation)</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            As part of a diversified dividend portfolio, allocating 5-10% to Verizon provides yield boost
                            without excessive concentration risk. Balance with dividend growers (Microsoft, Visa) and other
                            high-yielders (REITs, utilities). Verizon anchors the "income now" portion of the portfolio.
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Investors in Low Tax Brackets</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Verizon pays qualified dividends taxed at 0-20% (vs bonds at 22-37% ordinary income rates).
                            If you're in the 15% qualified dividend bracket, the after-tax yield is 5.7%—excellent for
                            taxable accounts. Less attractive in IRAs where the tax advantage is wasted.
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Defensive Allocation During Uncertainty</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            In recessions or market volatility, defensive stocks like Verizon hold up better than cyclicals.
                            People don't cancel wireless service during downturns. Use as a defensive hedge (10-15%
                            allocation) when you expect economic weakness but want to stay invested.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 text-red-600">✗ Verizon is BAD For:</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Young Investors Building Wealth (Age 25-45)</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            If you have 20-40 years until retirement, Verizon's 2% dividend growth dramatically
                            underperforms dividend growers. Compare: $10,000 in Verizon growing at 2% reaches $14,859
                            in 20 years. The same in Visa (17% growth) reaches $231,376. You need compounding growth,
                            not current yield. Avoid Verizon until you're within 10 years of needing income.
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Dividend Growth Investors (DRIP Strategy)</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            DRIP (dividend reinvestment) works best with 8-15% annual dividend growth. Reinvesting
                            Verizon's slow-growing dividends produces minimal compounding. Better options: Home Depot
                            (14% growth), Visa (17%), Broadcom (18.5%). Save Verizon for when you need to spend the
                            dividends, not reinvest them.
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Total Return Seekers</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Verizon's 5-year total return is -12% (including reinvested dividends). The stock price
                            decline offsets the dividend yield. If you want 8-10% total returns, buy S&P 500 index
                            or dividend growers. Verizon is for income extraction, not wealth accumulation.
                          </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded">
                          <h4 className="font-bold mb-2">Growth-Oriented Portfolios</h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            Telecom is a mature, low-growth industry. Revenue grows 1-2% annually. If your portfolio
                            targets 15-20% annual returns through tech and growth stocks, Verizon doesn't fit. It's
                            defensive dead weight in a growth portfolio. Stick with your growth thesis or pivot to
                            income—don't mix strategies ineffectively.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg">
                    <h3 className="text-xl font-bold mb-3">The Bottom Line</h3>
                    <p className="mb-4">
                      <strong>Verizon is a "yield now, minimal growth" proposition.</strong> It's excellent for retirees
                      and conservative investors who need 6-7% current income and can accept 2% annual dividend increases.
                      It's terrible for anyone under 50 building wealth, anyone seeking total returns above 5%, or anyone
                      using a dividend growth strategy.
                    </p>
                    <p className="text-sm">
                      If you're 60+ and retired: Verizon deserves 5-10% of your portfolio. If you're 35 and accumulating:
                      skip it entirely and revisit in 20 years when you need the income.
                    </p>
                  </div>
                </section>

                {/* Calculator CTA */}
                <section id="calculator" className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Verizon Dividend Returns</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to project how much income you'd generate from Verizon stock over
                        10, 20, or 30 years. Model different scenarios with DRIP reinvestment, dividend growth rates,
                        and initial investment amounts.
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
                  <h2>Best Brokers to Buy Verizon Stock</h2>
                  <p>
                    To invest in Verizon with zero commissions and automatic dividend reinvestment (DRIP), you need
                    a quality brokerage account. Here are the top-rated brokers for dividend investors in 2026.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ Section */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Verizon's 6.7% dividend safe?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, the dividend is relatively safe in the medium term (3-5 years). Verizon's 58% payout ratio
                          provides cushion, and the company generates $18.5B in annual free cash flow versus $11.4B in
                          dividend payments. The main risk is long-term: high debt ($142B) and limited revenue growth
                          could eventually force a freeze or small cut, but not in the near term. The dividend is safer
                          than AT&T (which cut in 2022) but less safe than utilities or consumer staples aristocrats.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Why is Verizon's stock price falling despite the high dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          The stock is down because investors are pricing in slow growth and debt concerns. While the
                          dividend is stable, the business only grows 1-2% annually in a saturated market. T-Mobile's
                          aggressive competition pressures pricing power. The market values growth—Verizon doesn't have it.
                          As a result, the stock yields 6.7% not because the dividend is high, but because the stock price
                          has fallen from $60 to $42.50 over five years. This is a "yield trap" risk: high yield from
                          declining stock, not sustainable business growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How does Verizon's debt affect the dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Verizon's $142B debt is manageable but limits dividend growth. The company pays $4.5B annually
                          in interest, which consumes 24% of free cash flow. Management must balance debt reduction
                          (targeting 2.0-2.5x leverage by 2028) with dividend increases. This explains why dividend growth
                          has slowed to 2% annually—all excess cash goes to debt paydown, not shareholder returns. The debt
                          won't force a dividend cut unless there's a severe recession, but it caps growth potential.
                          Think of Verizon's dividend as "capped upside, stable base case, small downside risk."
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I buy Verizon or AT&T for dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Verizon is slightly better due to its unbroken dividend growth streak (19 years vs AT&T's 2
                          years after the 2022 cut). Verizon also has superior network quality and higher wireless market
                          share (38% vs 28%). However, AT&T has a lower payout ratio (50% vs 58%), broader fiber coverage,
                          and a cleaner balance sheet post-WarnerMedia spinoff. For pure dividend safety and reliability,
                          choose Verizon. For lower payout ratio and fiber upside potential, AT&T is defensible. Both are
                          mature, low-growth, high-yield telecoms—neither is ideal for investors under 50.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is Verizon's dividend growth rate?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Verizon's dividend has grown at approximately 2% annually over the past 5 years. This is far
                          below the historical 5-8% growth rates from 2007-2015. The slowdown reflects market saturation,
                          competitive pressure from T-Mobile, and management's focus on debt reduction. Looking ahead,
                          expect 2-3% annual increases through 2026-2028—just enough to offset inflation but not enough
                          to meaningfully grow purchasing power. This makes Verizon a "yield stock" rather than a "dividend
                          growth stock." For comparison, dividend aristocrats average 6-10% annual growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much will $10,000 invested in Verizon generate in dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          At the current $42.50 share price and 6.7% yield, a $10,000 investment in Verizon generates
                          $670 in annual dividend income (paid quarterly as ~$168 every 3 months). If you reinvest dividends
                          (DRIP) and the dividend grows 2% annually, after 10 years you'd have $11,970 in annual income—a
                          79% increase. After 20 years: $14,578 annual income (117% increase). This assumes stock price
                          remains flat. For comparison, $10,000 in a 10% dividend grower would produce $25,937 after 10
                          years and $67,275 after 20 years. Verizon works for current income, not long-term compounding.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Verizon a good stock for DRIP (dividend reinvestment)?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          No, Verizon is suboptimal for DRIP strategies. DRIP works best with 8-15% annual dividend growth
                          where reinvested dividends compound dramatically. At 2% growth, Verizon's reinvested dividends
                          grow slowly. Better DRIP candidates: Visa (17% growth), Home Depot (14%), UnitedHealth (13.5%),
                          Texas Instruments (12%). Use Verizon when you need to spend the dividend income (retirement),
                          not reinvest it (wealth accumulation phase). If you're under 50 and DRIPing, skip Verizon and
                          buy dividend growers that will compound income exponentially over decades.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Will 5G expansion help Verizon's dividend grow faster?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Unlikely to meaningfully accelerate dividend growth. Verizon spent $53B on C-Band spectrum
                          (2021-2022) and $18B annually on network buildout, but this investment primarily defends market
                          position rather than creates new growth. 5G enables fixed wireless access (FWA) for home internet—
                          Verizon has 3.5M+ FWA customers growing toward 5M. This adds $2-3B in revenue but requires ongoing
                          capex. The math: incremental revenue from 5G gets offset by the cost of deploying it. Result:
                          5G maintains competitive parity and enables modest revenue growth (1-2% annually) but doesn't
                          unlock the explosive growth needed for 5-10% dividend increases. 5G is defensive necessity, not
                          growth catalyst.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What percentage of my portfolio should be Verizon?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          For retirees needing income: 5-10% allocation is reasonable as part of a diversified income
                          portfolio (bonds, REITs, other dividend stocks, annuities). For pre-retirees (age 50-65): 3-5%
                          allocation maximum—enough to boost yield without sacrificing growth. For accumulators (under 50):
                          0% allocation—use dividend growers instead until you're within 10 years of needing income. Never
                          exceed 10% in a single stock regardless of age. Overconcentration in Verizon exposes you to
                          telecom-specific risks (regulatory changes, competitive disruption, technology obsolescence).
                          Diversification is more important than yield optimization.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Can Verizon maintain its dividend if T-Mobile keeps taking market share?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, in the medium term (3-5 years). Verizon would need to lose significant market share (5-10
                          percentage points) before the dividend is at risk. Currently at 38% market share, Verizon could
                          decline to 33-35% and still generate sufficient cash flow to cover the dividend. The bigger risk
                          is margin compression—if T-Mobile forces price wars, Verizon's profitability suffers even if
                          subscriber counts hold steady. Watch quarterly earnings for: (1) postpaid phone net adds (should
                          be positive), (2) ARPU trends (average revenue per user—should stay flat or grow), (3) free cash
                          flow generation (should exceed $16B annually). If all three deteriorate simultaneously, dividend
                          safety becomes questionable. For now, competitive pressure limits growth but doesn't threaten
                          the dividend base case.
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
                    <Link href="/blog/high-yield-dividend-stocks-over-5-percent" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      High-Yield Dividend Stocks Over 5% (Complete List)
                    </Link>
                    <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Analyze Dividend Safety (8-Point Checklist)
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Complete Comparison
                    </Link>
                    <Link href="/blog/how-to-avoid-dividend-cuts" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Avoid Dividend Cuts (Warning Signs)
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
