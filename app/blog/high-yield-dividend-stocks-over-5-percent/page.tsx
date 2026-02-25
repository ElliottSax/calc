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
  XCircle,
  ArrowRight,
  BarChart3,
  ShieldAlert,
  TrendingDown,
  Building2,
  Activity,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'High-Yield Dividend Stocks Over 5%: Safe Income Picks for 2026',
  description: '30 high-yield dividend stocks paying 5%+ yields. Learn how to identify safe high-yield stocks vs dividend traps. Complete safety analysis, sector breakdown, and risk warnings.',
  keywords: 'high yield dividend stocks, dividend stocks over 5%, safe high yield stocks, best high yield dividends, dividend traps, 5% dividend yield, high yield income stocks',
  openGraph: {
    title: 'High-Yield Dividend Stocks Over 5%: Safe Income Picks for 2026',
    description: 'Discover 30 high-yield dividend stocks with 5%+ yields. Safety analysis, dividend trap warnings, and sector breakdown included.',
    type: 'article',
  }
}

export default function HighYieldDividendStocksPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">High-Yield Income</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  High-Yield Dividend Stocks Over 5%: Safe Income Picks
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  30 high-yield dividend stocks paying 5%+ yields with comprehensive safety analysis.
                  Learn how to identify legitimate income opportunities vs dangerous dividend traps that can destroy your wealth.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>High Yields Exist:</strong> 30+ quality stocks yield 5-10%, but require careful analysis to avoid dividend traps</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Safest Sectors:</strong> REITs, utilities, and BDCs dominate high-yield space with sustainable business models</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ShieldAlert className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Warning Signs:</strong> Payout ratios over 80%, declining revenue, and yields above 10% often signal danger</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Strategy:</strong> Diversify across 15-20 high-yielders in different sectors, reinvest dividends, monitor quarterly</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Critical Warning */}
              <Card className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-300 dark:border-red-700">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-700 dark:text-red-400">
                    <ShieldAlert className="h-6 w-6" />
                    Critical Warning: Dividend Traps Are Real
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>High yields don't guarantee high returns. A 10% yield means nothing if the stock drops 30% and cuts the dividend.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Many high-yield stocks are high-yield because the market expects a dividend cut. Price drops first, yield rises mechanically.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>This guide focuses on SUSTAINABLE high yields backed by real cash flow, not manipulated distributions.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-is-high-yield" className="text-blue-600 hover:underline">What Qualifies as High Yield?</a></li>
                    <li><a href="#safety-framework" className="text-blue-600 hover:underline">Safety Analysis Framework</a></li>
                    <li><a href="#top-30-stocks" className="text-blue-600 hover:underline">30 High-Yield Stocks</a></li>
                    <li><a href="#sector-breakdown" className="text-blue-600 hover:underline">Sector Breakdown</a></li>
                    <li><a href="#dividend-traps" className="text-blue-600 hover:underline">How to Spot Dividend Traps</a></li>
                    <li><a href="#portfolio-strategy" className="text-blue-600 hover:underline">Portfolio Construction</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What is High Yield Section */}
                <section id="what-is-high-yield">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    What Qualifies as High-Yield?
                  </h2>
                  <p>
                    In the dividend investing world, "high-yield" typically means dividend yields of <strong>5% or higher</strong>.
                    This compares to the S&P 500's average yield of around 1.5% and "dividend growth" stocks that often yield 2-3%.
                  </p>

                  <h3>Yield Spectrum: Understanding the Categories</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Low Yield: 0-2%</span>
                            <Badge variant="secondary">Growth Focus</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Examples: Apple (0.5%), Microsoft (0.8%), Amazon (0%). Focus is capital appreciation, not income.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Moderate Yield: 2-4%</span>
                            <Badge>Balanced</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Examples: Johnson & Johnson (3.2%), Coca-Cola (3.1%), Procter & Gamble (2.5%). Sweet spot for many investors.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">High Yield: 5-8%</span>
                            <Badge className="bg-green-600">Income Focus</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Examples: REITs, utilities, BDCs. Sustainable if backed by cash flow. This is our focus range.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Ultra-High Yield: 8%+</span>
                            <Badge variant="destructive">Danger Zone</Badge>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Requires extreme caution. Often dividend traps, distressed companies, or unsustainable distributions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why High Yields Exist (The Trade-Offs)</h3>
                  <p>
                    High yields don't appear by magic. There are always trade-offs:
                  </p>
                  <ul>
                    <li><strong>Regulatory Requirements:</strong> REITs must distribute 90% of taxable income, creating structurally high yields</li>
                    <li><strong>Slower Growth:</strong> Mature companies with limited growth opportunities return more cash to shareholders</li>
                    <li><strong>Higher Risk:</strong> Some high yields compensate for business risk, cyclicality, or leverage</li>
                    <li><strong>Tax Inefficiency:</strong> High income means higher taxes for investors in taxable accounts</li>
                  </ul>
                </section>

                {/* Safety Framework Section */}
                <section id="safety-framework">
                  <h2 className="flex items-center gap-2">
                    <ShieldAlert className="h-7 w-7 text-blue-600" />
                    Safety Analysis Framework: 5 Key Metrics
                  </h2>
                  <p>
                    Not all 5%+ yields are created equal. Use this framework to separate safe income from dividend traps:
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          1. Payout Ratio (Most Critical)
                        </h4>
                        <p className="text-sm mb-2">
                          Percentage of earnings (or FFO for REITs) paid as dividends.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                            <div className="font-semibold text-green-700 dark:text-green-400">Safe: &lt;70%</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Room for growth, recession buffer</div>
                          </div>
                          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded">
                            <div className="font-semibold text-yellow-700 dark:text-yellow-400">Caution: 70-90%</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Monitor closely, limited buffer</div>
                          </div>
                          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                            <div className="font-semibold text-red-700 dark:text-red-400">Danger: 90%+</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Unsustainable, cut likely</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          2. Dividend History
                        </h4>
                        <p className="text-sm">
                          Track record matters. Look for: 5+ years of consistent payments, ideally with growth.
                          Recent cuts or freezes are red flags.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          3. Free Cash Flow Coverage
                        </h4>
                        <p className="text-sm">
                          Dividends should be paid from free cash flow, not debt. Calculate: Free Cash Flow ÷ Dividends Paid.
                          Target: 1.2x or higher.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          4. Debt Levels
                        </h4>
                        <p className="text-sm">
                          High debt + high dividends = disaster in recessions. Check: Debt-to-Equity ratio under 2.0,
                          interest coverage ratio above 3.0.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          5. Business Model Sustainability
                        </h4>
                        <p className="text-sm">
                          Ask: Is the core business growing, stable, or declining? Regulated utilities = stable.
                          Dying retail = declining. Growth trend matters more than current snapshot.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Top 30 Stocks Section */}
                <section id="top-30-stocks">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    30 High-Yield Dividend Stocks Over 5%
                  </h2>
                  <p>
                    This curated list includes stocks across multiple sectors, ranked by safety score (combination of the 5 metrics above).
                    <strong>Note:</strong> Yields and metrics as of February 2026. Always verify current data before investing.
                  </p>

                  <h3>Tier 1: Safest High-Yielders (5.0-6.5% Yield)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Stock</th>
                              <th className="text-left p-2">Sector</th>
                              <th className="text-center p-2">Yield</th>
                              <th className="text-center p-2">Payout Ratio</th>
                              <th className="text-center p-2">Safety</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Realty Income (O)</div>
                                <div className="text-xs text-slate-600">The Monthly Dividend Company</div>
                              </td>
                              <td className="p-2">Retail REIT</td>
                              <td className="p-2 text-center font-semibold text-green-600">5.4%</td>
                              <td className="p-2 text-center">78% FFO</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Verizon (VZ)</div>
                                <div className="text-xs text-slate-600">Leading Telecom Provider</div>
                              </td>
                              <td className="p-2">Telecom</td>
                              <td className="p-2 text-center font-semibold text-green-600">6.2%</td>
                              <td className="p-2 text-center">62%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">AT&T (T)</div>
                                <div className="text-xs text-slate-600">Telecom & Media</div>
                              </td>
                              <td className="p-2">Telecom</td>
                              <td className="p-2 text-center font-semibold text-green-600">5.8%</td>
                              <td className="p-2 text-center">58%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Iron Mountain (IRM)</div>
                                <div className="text-xs text-slate-600">Storage & Data Management REIT</div>
                              </td>
                              <td className="p-2">Specialty REIT</td>
                              <td className="p-2 text-center font-semibold text-green-600">5.6%</td>
                              <td className="p-2 text-center">75% FFO</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">AGNC Investment (AGNC)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-green-600">6.5%</td>
                              <td className="p-2 text-center">85% EPS</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">W.P. Carey (WPC)</div>
                                <div className="text-xs text-slate-600">Diversified Net Lease REIT</div>
                              </td>
                              <td className="p-2">REIT</td>
                              <td className="p-2 text-center font-semibold text-green-600">5.9%</td>
                              <td className="p-2 text-center">72% FFO</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Bristol Myers Squibb (BMY)</div>
                                <div className="text-xs text-slate-600">Pharmaceutical Giant</div>
                              </td>
                              <td className="p-2">Healthcare</td>
                              <td className="p-2 text-center font-semibold text-green-600">5.1%</td>
                              <td className="p-2 text-center">64%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Medical Properties Trust (MPW)</div>
                                <div className="text-xs text-slate-600">Healthcare REIT</div>
                              </td>
                              <td className="p-2">Healthcare REIT</td>
                              <td className="p-2 text-center font-semibold text-green-600">6.3%</td>
                              <td className="p-2 text-center">80% FFO</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Enterprise Products (EPD)</div>
                                <div className="text-xs text-slate-600">Midstream Energy MLP</div>
                              </td>
                              <td className="p-2">Energy</td>
                              <td className="p-2 text-center font-semibold text-green-600">6.1%</td>
                              <td className="p-2 text-center">68%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2">
                                <div className="font-semibold">Enbridge (ENB)</div>
                                <div className="text-xs text-slate-600">Canadian Energy Infrastructure</div>
                              </td>
                              <td className="p-2">Energy</td>
                              <td className="p-2 text-center font-semibold text-green-600">6.4%</td>
                              <td className="p-2 text-center">70%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-green-600">A</Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        <strong>Why These Are Safest:</strong> Payout ratios under 85%, 10+ year dividend histories, strong balance sheets,
                        recession-resistant business models. Ideal for conservative income investors.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Tier 2: Solid High-Yielders (6.5-8.5% Yield)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Stock</th>
                              <th className="text-left p-2">Sector</th>
                              <th className="text-center p-2">Yield</th>
                              <th className="text-center p-2">Payout Ratio</th>
                              <th className="text-center p-2">Safety</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Ares Capital (ARCC)</div>
                                <div className="text-xs text-slate-600">Business Development Co</div>
                              </td>
                              <td className="p-2">BDC</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">7.8%</td>
                              <td className="p-2 text-center">82% NII</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Main Street Capital (MAIN)</div>
                                <div className="text-xs text-slate-600">Monthly Paying BDC</div>
                              </td>
                              <td className="p-2">BDC</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">6.9%</td>
                              <td className="p-2 text-center">80% NII</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">B. Riley Financial (RILY)</div>
                                <div className="text-xs text-slate-600">Investment Bank</div>
                              </td>
                              <td className="p-2">Financial</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">8.2%</td>
                              <td className="p-2 text-center">45%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Omega Healthcare (OHI)</div>
                                <div className="text-xs text-slate-600">Skilled Nursing REIT</div>
                              </td>
                              <td className="p-2">Healthcare REIT</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">7.5%</td>
                              <td className="p-2 text-center">83% FFO</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Annaly Capital (NLY)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">7.6%</td>
                              <td className="p-2 text-center">88% EPS</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Starwood Property Trust (STWD)</div>
                                <div className="text-xs text-slate-600">Commercial Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">7.9%</td>
                              <td className="p-2 text-center">85% EPS</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">STAG Industrial (STAG)</div>
                                <div className="text-xs text-slate-600">Industrial REIT</div>
                              </td>
                              <td className="p-2">Industrial REIT</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">6.8%</td>
                              <td className="p-2 text-center">76% FFO</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">MPLX LP (MPLX)</div>
                                <div className="text-xs text-slate-600">Midstream Energy MLP</div>
                              </td>
                              <td className="p-2">Energy</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">8.1%</td>
                              <td className="p-2 text-center">72%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Energy Transfer (ET)</div>
                                <div className="text-xs text-slate-600">Diversified Energy MLP</div>
                              </td>
                              <td className="p-2">Energy</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">7.4%</td>
                              <td className="p-2 text-center">68%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B+</Badge>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2">
                                <div className="font-semibold">Williams Companies (WMB)</div>
                                <div className="text-xs text-slate-600">Natural Gas Infrastructure</div>
                              </td>
                              <td className="p-2">Energy</td>
                              <td className="p-2 text-center font-semibold text-yellow-600">6.7%</td>
                              <td className="p-2 text-center">64%</td>
                              <td className="p-2 text-center">
                                <Badge className="bg-yellow-600">B+</Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        <strong>Trade-Off:</strong> Higher yields but with increased business complexity (BDCs, mREITs) or sector cyclicality
                        (energy MLPs). Still solid for diversified portfolios.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Tier 3: Aggressive High-Yielders (8.5%+ Yield)</h3>
                  <Card className="my-6 border-orange-300 dark:border-orange-700">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Stock</th>
                              <th className="text-left p-2">Sector</th>
                              <th className="text-center p-2">Yield</th>
                              <th className="text-center p-2">Payout Ratio</th>
                              <th className="text-center p-2">Safety</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Altria Group (MO)</div>
                                <div className="text-xs text-slate-600">Tobacco Products</div>
                              </td>
                              <td className="p-2">Consumer</td>
                              <td className="p-2 text-center font-semibold text-orange-600">8.9%</td>
                              <td className="p-2 text-center">78%</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">B</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Orchid Island Capital (ORC)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">9.2%</td>
                              <td className="p-2 text-center">92% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Chimera Investment (CIM)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">8.8%</td>
                              <td className="p-2 text-center">89% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Two Harbors Investment (TWO)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">9.5%</td>
                              <td className="p-2 text-center">94% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Global Net Lease (GNL)</div>
                                <div className="text-xs text-slate-600">Net Lease REIT</div>
                              </td>
                              <td className="p-2">REIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">9.1%</td>
                              <td className="p-2 text-center">88% FFO</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C+</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Armour Residential (ARR)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">10.2%</td>
                              <td className="p-2 text-center">96% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Invesco Mortgage Capital (IVR)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">9.8%</td>
                              <td className="p-2 text-center">93% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">New York Mortgage Trust (NYMT)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">9.4%</td>
                              <td className="p-2 text-center">91% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C</Badge>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">
                                <div className="font-semibold">Dynex Capital (DX)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">9.7%</td>
                              <td className="p-2 text-center">95% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="secondary">C</Badge>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2">
                                <div className="font-semibold">AG Mortgage Investment (MITT)</div>
                                <div className="text-xs text-slate-600">Mortgage REIT</div>
                              </td>
                              <td className="p-2">mREIT</td>
                              <td className="p-2 text-center font-semibold text-orange-600">10.5%</td>
                              <td className="p-2 text-center">98% EPS</td>
                              <td className="p-2 text-center">
                                <Badge variant="destructive">C-</Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <Card className="mt-4 bg-orange-50 dark:bg-orange-950/50 border-orange-300 dark:border-orange-700">
                        <CardContent className="pt-4">
                          <p className="text-sm flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>WARNING:</strong> These ultra-high yields come with significant risk. Mortgage REITs are sensitive to interest rate changes,
                              tobacco faces regulatory pressure. Payout ratios near 100% leave zero margin for error. Only suitable for experienced investors
                              who understand the risks and can afford potential dividend cuts or principal losses.
                            </span>
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </section>

                {/* Sector Breakdown Section */}
                <section id="sector-breakdown">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-purple-600" />
                    High-Yield Sector Breakdown
                  </h2>
                  <p>
                    Understanding sector dynamics is critical. Here's why certain sectors dominate the high-yield space:
                  </p>

                  <div className="grid gap-6 my-8">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Building2 className="h-6 w-6 text-blue-600" />
                          REITs (Real Estate Investment Trusts)
                        </h3>
                        <div className="space-y-3 text-sm">
                          <p><strong>Why High Yields:</strong> Required by law to distribute 90% of taxable income to shareholders.</p>
                          <p><strong>Typical Yield Range:</strong> 5-8% for equity REITs, 7-12% for mortgage REITs</p>
                          <p><strong>Sub-Sectors:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Retail REITs:</strong> Shopping centers, malls (Realty Income, Simon Property)</li>
                            <li><strong>Healthcare REITs:</strong> Medical offices, hospitals (Welltower, Medical Properties)</li>
                            <li><strong>Industrial REITs:</strong> Warehouses, logistics (STAG Industrial, Prologis)</li>
                            <li><strong>Mortgage REITs:</strong> Mortgage-backed securities (AGNC, Annaly) - HIGHEST yields but HIGHEST risk</li>
                          </ul>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge>Best For: Long-term income</Badge>
                            <Badge variant="secondary">Risk: Interest rate sensitivity</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Zap className="h-6 w-6 text-yellow-600" />
                          Utilities & Telecoms
                        </h3>
                        <div className="space-y-3 text-sm">
                          <p><strong>Why High Yields:</strong> Mature, slow-growth businesses with stable cash flows and regulatory protections.</p>
                          <p><strong>Typical Yield Range:</strong> 4-7%</p>
                          <p><strong>Examples:</strong> Verizon (6.2%), AT&T (5.8%), Duke Energy (4.5%), Southern Company (4.8%)</p>
                          <p><strong>Pros:</strong> Recession-resistant, essential services, predictable dividends</p>
                          <p><strong>Cons:</strong> Limited growth, regulatory risk, high debt levels</p>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge>Best For: Conservative income</Badge>
                            <Badge variant="secondary">Risk: Regulatory changes</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Activity className="h-6 w-6 text-green-600" />
                          Energy MLPs (Master Limited Partnerships)
                        </h3>
                        <div className="space-y-3 text-sm">
                          <p><strong>Why High Yields:</strong> Tax-advantaged structure requires distributing most cash flow to unitholders.</p>
                          <p><strong>Typical Yield Range:</strong> 6-9%</p>
                          <p><strong>Examples:</strong> Enterprise Products (6.1%), Energy Transfer (7.4%), MPLX (8.1%)</p>
                          <p><strong>Pros:</strong> Midstream infrastructure (pipelines, storage) less volatile than oil prices, tax benefits</p>
                          <p><strong>Cons:</strong> K-1 tax forms (complex), energy sector exposure, distribution cuts during oil crashes</p>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge>Best For: Tax-advantaged accounts</Badge>
                            <Badge variant="secondary">Risk: Commodity price exposure</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-6 w-6 text-indigo-600" />
                          BDCs (Business Development Companies)
                        </h3>
                        <div className="space-y-3 text-sm">
                          <p><strong>Why High Yields:</strong> Similar to REITs - must distribute 90% of taxable income. Lend to mid-market companies.</p>
                          <p><strong>Typical Yield Range:</strong> 7-11%</p>
                          <p><strong>Examples:</strong> Ares Capital (7.8%), Main Street Capital (6.9%), Hercules Capital (9.5%)</p>
                          <p><strong>Pros:</strong> High income, monthly payments (some), exposure to private credit</p>
                          <p><strong>Cons:</strong> Credit risk, recession vulnerability, complex NAV calculations</p>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge>Best For: Sophisticated investors</Badge>
                            <Badge variant="secondary">Risk: Credit defaults</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3>Recommended Sector Allocation</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <p className="text-sm mb-4">For a balanced high-yield portfolio of $100,000:</p>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="font-semibold">REITs (Equity)</span>
                            <span>30% = $30,000</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="font-semibold">Utilities & Telecoms</span>
                            <span>25% = $25,000</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="font-semibold">Energy MLPs</span>
                            <span>20% = $20,000</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="font-semibold">BDCs</span>
                            <span>15% = $15,000</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="font-semibold">Mortgage REITs</span>
                            <span>10% = $10,000 (Optional - Higher Risk)</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
                        <strong>Expected Portfolio Yield:</strong> 6.5-7.5% | <strong>Risk Level:</strong> Moderate-High |
                        <strong>Diversification:</strong> 15-20 individual holdings
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Dividend Traps Section */}
                <section id="dividend-traps">
                  <h2 className="flex items-center gap-2">
                    <ShieldAlert className="h-7 w-7 text-red-600" />
                    How to Spot Dividend Traps (Avoid These!)
                  </h2>
                  <p>
                    A "dividend trap" is a stock with a tempting high yield that's actually a value trap in disguise.
                    The high yield exists because the stock price has fallen (yield = dividend ÷ price), often signaling
                    fundamental problems that will lead to dividend cuts.
                  </p>

                  <h3>5 Red Flags That Scream "Dividend Trap"</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">1. Payout Ratio Over 100%</h4>
                          <p className="text-sm mb-2">
                            Paying out more than you earn = unsustainable. Example: If earnings are $1.00/share but dividend is $1.20/share,
                            that's 120% payout ratio. Math doesn't work long-term.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Exception:</strong> Temporary spike due to one-time charges IF the company has strong free cash flow.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">2. Declining Revenue/Earnings Trends</h4>
                          <p className="text-sm mb-2">
                            If revenue drops 3 years in a row, the business is dying. Dividends follow earnings, not hope.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Example:</strong> Traditional retail (Macy's, Kohl's) - declining sales made high yields into traps.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">3. Rising Debt Levels</h4>
                          <p className="text-sm mb-2">
                            Debt-to-equity over 3.0 + high dividends = recipe for disaster. When refinancing gets expensive, dividends get cut.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Warning Sign:</strong> Debt-funded dividends. Check if free cash flow covers dividends or if they're borrowing to pay.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">4. Stock Price in Free Fall</h4>
                          <p className="text-sm mb-2">
                            Down 50%+ in last year? The market knows something. High yield is often mechanical result of price collapse,
                            not generous management.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Math:</strong> $5 dividend on $100 stock = 5% yield. Stock drops to $50, same $5 dividend = 10% yield.
                            Yield doubled but nothing improved!
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">5. Insider Selling</h4>
                          <p className="text-sm mb-2">
                            If executives are dumping shares, they know trouble is coming. Check SEC Form 4 filings.
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong>Red Flag:</strong> Multiple C-level executives selling large portions of holdings within short timeframe.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Real-World Dividend Trap Examples</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4 text-sm">
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-bold mb-1">General Electric (GE) - 2017</h4>
                          <p className="mb-2">
                            <strong>The Trap:</strong> Yielded 4.5% (seemed safe for blue-chip). Stock at $30.
                          </p>
                          <p className="mb-2">
                            <strong>What Happened:</strong> Cut dividend 50% in late 2017, another 50% in 2018. Stock dropped to $6.
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            <strong>Lesson:</strong> Even "safe" dividend aristocrats can implode if business fundamentals deteriorate.
                            GE had hidden accounting issues, declining power division, and excessive debt.
                          </p>
                        </div>

                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-bold mb-1">Frontier Communications (FTR) - 2018</h4>
                          <p className="mb-2">
                            <strong>The Trap:</strong> Yielded 18% (looked amazing!). Stock at $5.
                          </p>
                          <p className="mb-2">
                            <strong>What Happened:</strong> Suspended dividend entirely. Declared bankruptcy. Stock went to $0.
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            <strong>Lesson:</strong> Ultra-high yields (10%+) are almost always warning signs. Declining telecom business couldn't
                            support debt load + dividends. Payout ratio was over 200% (paying $2 for every $1 earned).
                          </p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                          <h4 className="font-bold mb-1">Kinder Morgan (KMI) - 2015</h4>
                          <p className="mb-2">
                            <strong>The Trap:</strong> Yielded 10%+ during oil crash. MLP structure seemed "safe."
                          </p>
                          <p className="mb-2">
                            <strong>What Happened:</strong> Cut dividend 75% from $2.00 to $0.50. Stock dropped from $40 to $12.
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            <strong>Lesson:</strong> Energy MLPs aren't immune to commodity crashes. High debt + oil price collapse =
                            distribution cuts. Stock has recovered since, but original investors lost years of income.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Yield vs Safety Comparison */}
                <section>
                  <h2>Yield vs. Safety: The Trade-Off Matrix</h2>
                  <p>
                    Every dividend stock exists on a spectrum between yield and safety. Here's how to think about the trade-offs:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Yield Range</th>
                          <th className="border p-3 text-left">Safety Level</th>
                          <th className="border p-3 text-left">Best Use Case</th>
                          <th className="border p-3 text-left">Portfolio %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">5.0-6.0%</td>
                          <td className="border p-3">
                            <Badge className="bg-green-600">Safest</Badge>
                          </td>
                          <td className="border p-3">Core holdings, retirees, conservative investors</td>
                          <td className="border p-3 text-center">50-70%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">6.0-7.5%</td>
                          <td className="border p-3">
                            <Badge className="bg-yellow-600">Moderate</Badge>
                          </td>
                          <td className="border p-3">Satellite positions, yield boost, diversification</td>
                          <td className="border p-3 text-center">20-30%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">7.5-10%</td>
                          <td className="border p-3">
                            <Badge className="bg-orange-600">Higher Risk</Badge>
                          </td>
                          <td className="border p-3">Aggressive income, speculative positions</td>
                          <td className="border p-3 text-center">0-20%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">10%+</td>
                          <td className="border p-3">
                            <Badge variant="destructive">Danger Zone</Badge>
                          </td>
                          <td className="border p-3">Avoid unless expert (likely dividend traps)</td>
                          <td className="border p-3 text-center">0-10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Example: $100K Portfolio Construction</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span><strong>$60K (60%):</strong> Tier 1 Stocks - 5.0-6.5% yield (A-rated safety)</span>
                          <span className="text-green-600 font-semibold">= $3,300/year income</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span><strong>$25K (25%):</strong> Tier 2 Stocks - 6.5-8.5% yield (B-rated safety)</span>
                          <span className="text-yellow-600 font-semibold">= $1,875/year income</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span><strong>$15K (15%):</strong> Tier 3 Stocks - 8.5%+ yield (C-rated safety)</span>
                          <span className="text-orange-600 font-semibold">= $1,425/year income</span>
                        </div>
                        <div className="pt-3 border-t">
                          <div className="flex justify-between items-center font-bold text-base">
                            <span>Total Annual Dividend Income:</span>
                            <span className="text-blue-600">$6,600 (6.6% yield)</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400 mt-1">
                            <span>Monthly Income:</span>
                            <span>$550/month</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Portfolio Strategy Section */}
                <section id="portfolio-strategy">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Building Your High-Yield Portfolio
                  </h2>
                  <p>
                    Strategic steps to construct a sustainable high-yield dividend portfolio:
                  </p>

                  <div className="grid gap-6 my-8">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">1</span>
                          Set Your Income Goal
                        </h3>
                        <p className="text-sm mb-3">
                          Work backwards from desired monthly income. Want $1,000/month? That's $12,000/year. At 6% average yield,
                          you need ~$200,000 invested.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-sm">
                          <p className="font-mono mb-2">Monthly Income Goal: $1,000</p>
                          <p className="font-mono mb-2">Annual Income Needed: $12,000</p>
                          <p className="font-mono mb-2">Target Yield: 6.0%</p>
                          <p className="font-mono text-blue-600 font-semibold">Required Investment: $200,000</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">2</span>
                          Diversify Across 15-20 Holdings
                        </h3>
                        <p className="text-sm mb-3">
                          Never put more than 5-7% in any single stock. Even "safe" dividends can be cut (see GE example).
                        </p>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>5-7 REITs:</strong> Mix of retail, healthcare, industrial (avoid all mortgage REITs)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>3-5 Utilities/Telecoms:</strong> Different geographies (VZ, T, Duke Energy, Southern Co)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>3-4 Energy MLPs:</strong> Midstream infrastructure (EPD, ET, ENB, WMB)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>2-3 BDCs:</strong> Top-tier only (ARCC, MAIN, HTGC)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">3</span>
                          Reinvest Dividends in Growth Phase
                        </h3>
                        <p className="text-sm mb-3">
                          Enable DRIP (Dividend Reinvestment Plans) until you hit your target portfolio size. Compound growth is powerful:
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-4 rounded text-sm">
                          <p className="mb-2"><strong>Scenario: $50K initial investment at 6.5% yield</strong></p>
                          <ul className="space-y-1 text-xs">
                            <li>• Year 1: $3,250 dividends → reinvested → $53,250 total</li>
                            <li>• Year 5: $68,400 total (+37% from compounding)</li>
                            <li>• Year 10: $93,100 total (+86% from compounding)</li>
                            <li>• Year 20: $173,000 total (+246% from compounding)</li>
                          </ul>
                          <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">
                            Same $50K without reinvestment: Only $65K after 20 years
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">4</span>
                          Monitor Quarterly (Not Daily)
                        </h3>
                        <p className="text-sm mb-3">
                          Review your portfolio every quarter when earnings come out. Check:
                        </p>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Did any company cut/suspend dividends? (Sell immediately if cut more than 25%)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Are payout ratios rising above 90%? (Warning sign - consider selling)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Is revenue/FFO growing or declining? (3 quarters of decline = red flag)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Any dividend raises announced? (Reinvest in those winners)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">5</span>
                          Tax Optimization Strategies
                        </h3>
                        <p className="text-sm mb-3">
                          High-yield stocks are tax-inefficient. Optimize placement:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded">
                            <h4 className="font-bold mb-2 text-green-700 dark:text-green-400">Tax-Advantaged Accounts (IRA, 401k)</h4>
                            <ul className="space-y-1 text-xs">
                              <li>• REITs (non-qualified dividends)</li>
                              <li>• BDCs (non-qualified dividends)</li>
                              <li>• MLPs (K-1 complexity avoided in IRA)</li>
                              <li>• Highest yielders (8%+)</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded">
                            <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-400">Taxable Accounts</h4>
                            <ul className="space-y-1 text-xs">
                              <li>• Qualified dividend payers (utilities, telecoms)</li>
                              <li>• Lower yielders (5-6%)</li>
                              <li>• Canadian stocks (15% withholding vs 30% in IRA)</li>
                              <li>• Tax-loss harvesting opportunities</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                          <strong>Tax Impact Example:</strong> $10K in REIT dividends taxed at 32% = $3,200 tax bill.
                          Same in IRA = $0 current tax, grows tax-deferred.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your High-Yield Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free dividend calculators to model your high-yield portfolio and project income based on your specific
                        investment amount, time horizon, and DRIP strategy.
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
                <section>
                  <h2 id="brokers">Best Brokers for High-Yield Dividend Investing</h2>
                  <p>
                    To execute this strategy, you need a broker with commission-free trades, automatic dividend reinvestment (DRIP),
                    and ideally fractional shares to diversify across 15-20 holdings even with smaller portfolios.
                  </p>
                  <BrokerComparisonTable />
                  <Card className="mt-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3 text-sm">Top Broker for High-Yield Investors:</h3>
                      <p className="text-sm mb-3">
                        <strong>Charles Schwab</strong> wins for high-yield dividend investors because:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Free dividend reinvestment on all stocks (no transaction fees)</li>
                        <li>• Fractional shares available (build positions with any dollar amount)</li>
                        <li>• Excellent stock screener for finding 5%+ yielders</li>
                        <li>• Monthly dividend calendar tool</li>
                        <li>• Tax-loss harvesting tools (offset high dividend tax burden)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Final Summary */}
                <section>
                  <h2>Final Thoughts: High-Yield Done Right</h2>
                  <p>
                    High-yield dividend investing is a legitimate wealth-building strategy - when done correctly.
                    The 30 stocks in this guide offer 5-10% yields with varying degrees of safety. Your job is to:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Prioritize safety over yield.</strong> A reliable 5.5% beats an unstable 9% that gets cut to 4%.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Diversify ruthlessly.</strong> 15-20 stocks across 4-5 sectors. No single position over 7%.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Reinvest dividends until retirement.</strong> Compounding turns $50K into $173K over 20 years.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Monitor quarterly, not daily.</strong> Check earnings reports, payout ratios, and revenue trends every 90 days.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Avoid dividend traps.</strong> If yield seems too good to be true (10%+), it probably is. Do the analysis.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Optimize for taxes.</strong> Keep REITs and BDCs in IRAs, qualified dividends in taxable accounts.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <p>
                    The path to $1,000/month in dividend income is straightforward: Invest consistently, reinvest dividends,
                    avoid traps, and give compound interest time to work. Start with the Tier 1 stocks (5-6.5% yields, A-rated safety),
                    add Tier 2 for yield boost (6.5-8.5%, B-rated), and only touch Tier 3 if you're experienced and can afford the risk.
                  </p>

                  <p className="font-semibold text-lg mt-6">
                    Remember: The goal isn't the highest yield. It's the highest <em>sustainable</em> yield that grows over time.
                  </p>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. Dividend ETFs: Complete Comparison
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks for 2026
                    </Link>
                    <Link href="/blog/best-high-yield-reits-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best High-Yield REITs for 2026
                    </Link>
                    <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Analyze Dividend Safety (5-Step Framework)
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
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
