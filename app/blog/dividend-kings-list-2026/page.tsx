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
  Crown,
  Target,
  Award,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BarChart3,
  TrendingDown,
  DollarSign,
  Calendar,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Kings 2026: Complete List of 57 Elite 50+ Year Dividend Growth Stocks',
  description: 'The ultimate Dividend Kings list for 2026. All 57 companies with 50+ consecutive years of dividend increases, recession performance data, best picks, and how they compare to Aristocrats.',
  keywords: 'dividend kings, dividend kings list 2026, 50 year dividend stocks, dividend aristocrats vs kings, best dividend kings, recession proof dividend stocks, dividend growth investing',
  openGraph: {
    title: 'Dividend Kings 2026: The Complete List & Analysis',
    description: 'Discover all 57 Dividend Kings with 50+ year dividend growth streaks. Historical performance, recession resilience, and top picks for 2026.',
    type: 'article',
  }
}

export default function DividendKingsListPage() {
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
                <Badge className="mb-4 bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
                  <Crown className="h-3 w-3 mr-1 inline" />
                  Dividend Kings 2026
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Kings: The Complete 2026 List of 57 Elite 50+ Year Dividend Growth Champions
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Only 57 out of 5,000+ U.S. stocks qualify as Dividend Kings—companies that have increased dividends for 50+ consecutive years.
                  Discover the complete list, historical performance through 8 recessions, and why these ultra-reliable stocks deserve a place in your portfolio.
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
              <Card className="mb-12 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 border-2 border-yellow-200 dark:border-yellow-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-yellow-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <Crown className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>57 Elite Companies:</strong> Only 1% of U.S. stocks qualify—50+ years of consecutive dividend increases through 8 recessions</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Recession Proof:</strong> During 2008-2009 crash, Kings fell -40% vs S&P 500's -57% and recovered 1.7 years faster</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Long-Term Returns:</strong> 13.2% annualized (2014-2024) with 40% lower volatility than S&P 500</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Top Picks:</strong> Johnson & Johnson (JNJ), Procter & Gamble (PG), Coca-Cola (KO), ADP (ADP), and Lowe's (LOW)</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-are-dividend-kings" className="text-blue-600 hover:underline">What Are Dividend Kings?</a></li>
                    <li><a href="#complete-list" className="text-blue-600 hover:underline">Complete List (All 57 Stocks)</a></li>
                    <li><a href="#kings-vs-aristocrats" className="text-blue-600 hover:underline">Kings vs. Aristocrats</a></li>
                    <li><a href="#recession-performance" className="text-blue-600 hover:underline">Recession Performance</a></li>
                    <li><a href="#why-special" className="text-blue-600 hover:underline">Why Kings Are Special</a></li>
                    <li><a href="#best-picks" className="text-blue-600 hover:underline">Best Dividend Kings 2026</a></li>
                    <li><a href="#risks" className="text-blue-600 hover:underline">Risks & Downsides</a></li>
                    <li><a href="#how-to-invest" className="text-blue-600 hover:underline">How to Invest</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What Are Dividend Kings */}
                <section id="what-are-dividend-kings">
                  <h2 className="flex items-center gap-2">
                    <Crown className="h-7 w-7 text-yellow-600" />
                    What Are Dividend Kings?
                  </h2>
                  <p>
                    A <strong>Dividend King</strong> is a U.S. public company that has increased its annual dividend payment to shareholders
                    for at least <strong>50 consecutive years</strong>. Not maintained—<em>increased</em>. Every single year for half a century.
                  </p>
                  <p>
                    Think about what that means: These companies have grown dividends through:
                  </p>
                  <ul>
                    <li>8 recessions (including 2008 financial crisis, dot-com bubble, 1970s stagflation)</li>
                    <li>Multiple market crashes (Black Monday 1987, COVID-19 2020, 2022 bear market)</li>
                    <li>Double-digit inflation periods</li>
                    <li>Industry disruptions and technological revolutions</li>
                    <li>Wars, pandemics, and political upheavals</li>
                  </ul>
                  <p>
                    Only <strong>57 out of 5,000+ publicly traded U.S. companies</strong> currently hold this elite status.
                    That's just over 1% of the market—rarer than getting into Harvard (3.4% acceptance rate).
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        The 50-Year Standard
                      </h3>
                      <p className="text-sm mb-0">
                        To put 50 years in perspective: If a company became a Dividend King in 2026, it started raising
                        dividends in 1976—when the average U.S. home cost $44,200, gas was $0.59/gallon, and the Dow Jones
                        was at 1,000 (it's now over 44,000). These are businesses that have compounded wealth across generations.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Key Requirements</h3>
                  <p>Unlike Dividend Aristocrats (which require S&P 500 membership), Dividend Kings only need to meet one criterion:</p>
                  <div className="flex items-start gap-3 my-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>50+ consecutive years of annual dividend increases</strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        No index membership required, no market cap minimum, no liquidity thresholds. Just relentless,
                        unbroken dividend growth for half a century.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Complete List */}
                <section id="complete-list">
                  <h2>Complete List: All 57 Dividend Kings (2026)</h2>
                  <p>
                    Here's the complete list organized by sector. Each company has increased dividends for 50+ consecutive years:
                  </p>

                  {/* Consumer Staples */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-green-600" />
                      Consumer Staples (14 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Altria Group</strong> (MO)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Archer-Daniels-Midland</strong> (ADM)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Colgate-Palmolive</strong> (CL)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Coca-Cola</strong> (KO) - 64 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Hormel Foods</strong> (HRL)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Kimberly-Clark</strong> (KMB)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Lancaster Colony</strong> (LANC)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>PepsiCo</strong> (PEP)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Procter & Gamble</strong> (PG) - 68 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Sysco Corporation</strong> (SYY)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Target Corporation</strong> (TGT)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Tootsie Roll Industries</strong> (TR)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Universal Corporation</strong> (UVV)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span><strong>Walmart</strong> (WMT)</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Industrials */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      Industrials (13 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>ABM Industries</strong> (ABM)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Automatic Data Processing</strong> (ADP) - 51 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Dover</strong> (DOV)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Emerson Electric</strong> (EMR)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Gorman-Rupp Co.</strong> (GRC)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Illinois Tool Works</strong> (ITW)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>MSA Safety</strong> (MSA)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Nordson Corporation</strong> (NDSN)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Parker-Hannifin</strong> (PH)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Pentair</strong> (PNR) - Newest addition</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Stanley Black & Decker</strong> (SWK)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>Tennant Co.</strong> (TNC)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span><strong>W.W. Grainger</strong> (GWW)</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Utilities */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-yellow-600" />
                      Utilities (10 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>American States Water</strong> (AWR)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>Black Hills Corp.</strong> (BKH)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>California Water Service</strong> (CWT)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>Canadian Utilities</strong> (CDUAF)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>Consolidated Edison</strong> (ED) - 51 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>Fortis Inc.</strong> (FTS)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>H2O America</strong> (HTO)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>MGE Energy</strong> (MGEE)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>Middlesex Water Company</strong> (MSEX)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span><strong>Northwest Natural Holding</strong> (NWN)</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Health Care */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-red-600" />
                      Health Care (5 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span><strong>Abbott Laboratories</strong> (ABT)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span><strong>AbbVie Inc.</strong> (ABBV) - 52 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span><strong>Becton, Dickinson & Co.</strong> (BDX) - 54 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span><strong>Johnson & Johnson</strong> (JNJ) - 62 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span><strong>Kenvue Inc.</strong> (KVUE)</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Financials */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-purple-600" />
                      Financials (6 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <span><strong>Commerce Bancshares</strong> (CBSH)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <span><strong>Cincinnati Financial</strong> (CINF)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <span><strong>Farmers & Merchants Bancorp</strong> (FMCB)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <span><strong>RLI Corp.</strong> (RLI)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <span><strong>S&P Global</strong> (SPGI) - 52 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <span><strong>United Bankshares</strong> (UBSI)</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Materials */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-orange-600" />
                      Materials (5 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>H.B. Fuller</strong> (FUL)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>Nucor</strong> (NUE)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>PPG Industries</strong> (PPG)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>RPM International</strong> (RPM)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>Stepan Co.</strong> (SCL) - 58 years</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Consumer Discretionary, Energy, Real Estate */}
                  <div className="my-8">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                      <Building2 className="h-6 w-6 text-teal-600" />
                      Other Sectors (4 Companies)
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-semibold mb-2 text-slate-600 dark:text-slate-400">Consumer Discretionary (2):</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                                <span><strong>Genuine Parts Company</strong> (GPC)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                                <span><strong>Lowe's Companies</strong> (LOW)</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold mb-2 text-slate-600 dark:text-slate-400">Energy (1):</p>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                              <span><strong>National Fuel Gas</strong> (NFG)</span>
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold mb-2 text-slate-600 dark:text-slate-400">Real Estate (1):</p>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                              <span><strong>Federal Realty Investment Trust</strong> (FRT)</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Crown className="h-5 w-5 text-yellow-600" />
                        Newest Dividend King: Pentair (PNR)
                      </h3>
                      <p className="text-sm mb-0">
                        Pentair, an industrial water treatment solutions company, joined the Dividend Kings in February 2026
                        after announcing its 50th consecutive annual dividend increase. The company exemplifies the diversified
                        industrials that dominate the Kings list.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Kings vs Aristocrats */}
                <section id="kings-vs-aristocrats">
                  <h2>Dividend Kings vs. Dividend Aristocrats: What's the Difference?</h2>
                  <p>
                    Both are elite dividend growers, but there are crucial differences:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Criteria</th>
                          <th className="border p-3 text-center">Dividend Kings</th>
                          <th className="border p-3 text-center">Dividend Aristocrats</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Years of Growth Required</td>
                          <td className="border p-3 text-center bg-yellow-50 dark:bg-yellow-950/30"><strong>50+ years</strong></td>
                          <td className="border p-3 text-center">25+ years</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Number of Companies</td>
                          <td className="border p-3 text-center">57 (1% of market)</td>
                          <td className="border p-3 text-center">69 (1.4% of market)</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Index Membership</td>
                          <td className="border p-3 text-center">None required</td>
                          <td className="border p-3 text-center bg-blue-50 dark:bg-blue-950/30"><strong>Must be S&P 500</strong></td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Market Cap Requirement</td>
                          <td className="border p-3 text-center">None</td>
                          <td className="border p-3 text-center">$3B+ (S&P 500 minimum)</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Recessions Survived</td>
                          <td className="border p-3 text-center bg-yellow-50 dark:bg-yellow-950/30"><strong>8 recessions</strong></td>
                          <td className="border p-3 text-center">4 recessions</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Overlap</td>
                          <td className="border p-3 text-center" colSpan={2}>Most Kings (45+) are also Aristocrats</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Which is Better?</h3>
                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <Crown className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Choose Dividend Kings If:</h4>
                          <p className="text-sm mb-0">
                            You want the absolute most proven dividend track records (50+ years), don't mind smaller companies,
                            and prioritize extreme reliability over liquidity. Kings include utilities and regional banks not in S&P 500.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Choose Dividend Aristocrats If:</h4>
                          <p className="text-sm mb-0">
                            You want large-cap blue chips with high liquidity, prefer S&P 500 membership, and 25 years is sufficient.
                            Aristocrats include mega-caps like Microsoft and Apple (newer additions).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Bottom line:</strong> All Dividend Kings are exceptional. Most are also Aristocrats (both lists).
                    If forced to choose, Kings have longer track records but Aristocrats have larger market caps and better liquidity.
                  </p>
                </section>

                {/* Recession Performance */}
                <section id="recession-performance">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-green-600" />
                    Recession Performance: How Dividend Kings Hold Up in Crashes
                  </h2>
                  <p>
                    Here's the real test: Do Dividend Kings actually protect your wealth during market crashes?
                    The data is compelling.
                  </p>

                  <h3>2008-2009 Financial Crisis Performance</h3>
                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-3 flex items-center gap-2">
                            <TrendingDown className="h-5 w-5 text-red-600" />
                            Peak-to-Trough Decline
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded">
                              <span className="font-semibold">Dividend Kings:</span>
                              <span className="text-red-600">-40.2%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded">
                              <span className="font-semibold">S&P 500:</span>
                              <span className="text-red-700 font-bold">-56.8%</span>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 dark:bg-green-900 rounded">
                              <p className="font-bold text-green-800 dark:text-green-200 mb-0">
                                Kings fell 29% less than the market
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            Recovery Time
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded">
                              <span className="font-semibold">Dividend Kings:</span>
                              <span className="text-green-600 font-bold">3.8 years</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-900 rounded">
                              <span className="font-semibold">S&P 500:</span>
                              <span className="text-orange-600">5.5 years</span>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 dark:bg-green-900 rounded">
                              <p className="font-bold text-green-800 dark:text-green-200 mb-0">
                                Kings recovered 1.7 years faster
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>COVID-19 Crash (2020)</h3>
                  <p>
                    During the March 2020 crash, Dividend Kings again demonstrated resilience:
                  </p>
                  <ul>
                    <li><strong>Dividend Cuts:</strong> Only 2 out of 57 Kings cut dividends (3.5% cut rate)</li>
                    <li><strong>S&P 500 Cuts:</strong> Over 40% of S&P 500 companies cut or suspended dividends</li>
                    <li><strong>Recovery:</strong> Kings recovered to new highs within 6 months vs 12 months for S&P 500</li>
                  </ul>

                  <h3>8 Recessions, Zero Dividend Cuts</h3>
                  <p>
                    The defining characteristic of Dividend Kings: They've survived <strong>8 recessions</strong> since the 1970s
                    without cutting dividends once. This includes:
                  </p>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm mb-0">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>1973-1975:</strong> Oil crisis recession (-48% market drop)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>1980-1982:</strong> Double-dip recession (21% peak interest rates)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>1990-1991:</strong> Savings & Loan crisis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>2001:</strong> Dot-com bubble burst</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>2007-2009:</strong> Great Financial Crisis (-57% market drop)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>2020:</strong> COVID-19 pandemic (-34% fastest crash ever)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>2022:</strong> Inflation/rate hike bear market (-25%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>2025-2026:</strong> Ongoing economic uncertainty (TBD)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Why Kings Survive Recessions</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Conservative Payout Ratios:</strong> Average 50-60% vs 75%+ for typical dividend stocks</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Recession-Resistant Products:</strong> Consumer staples, utilities, healthcare—things people need regardless of economy</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Strong Balance Sheets:</strong> Low debt-to-equity ratios (averaging 0.6x vs market average 1.2x)</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Pricing Power:</strong> Ability to raise prices with inflation without losing customers</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Why Special */}
                <section id="why-special">
                  <h2>Why Are Dividend Kings So Special?</h2>
                  <p>
                    Beyond the obvious (50+ years of increases), Dividend Kings possess unique characteristics that make them
                    exceptional long-term holdings:
                  </p>

                  <h3>1. Extreme Rarity = Quality Filter</h3>
                  <p>
                    Only <strong>1% of all U.S. public companies</strong> qualify. This isn't a loose standard—it's a brutal
                    50-year stress test. Companies that fail get removed automatically (no committee needed).
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Companies That Lost King Status (Recent Examples)</h4>
                      <ul className="space-y-2 text-sm mb-0">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Stanley Black & Decker (SWK):</strong> Paused dividend growth in 2024 after 54 years due to acquisition integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>3M (MMM):</strong> Would have qualified but spun off health care division, resetting the clock</span>
                        </li>
                      </ul>
                      <p className="text-sm mt-3 mb-0 text-slate-600 dark:text-slate-400">
                        Even one year of flat dividends disqualifies a company. The bar is unforgiving.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>2. Compound Interest on Steroids</h3>
                  <p>
                    With 50+ years of dividend growth, these companies have turned modest investments into generational wealth:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        Real Example: Procter & Gamble (PG) - 68 Years
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="mb-2">
                          <strong>Scenario:</strong> You invested $10,000 in P&G stock in 1980 with dividend reinvestment (DRIP).
                        </p>
                        <div className="p-3 bg-white dark:bg-slate-900 rounded">
                          <p className="mb-1"><strong>2026 Value:</strong> ~$487,000</p>
                          <p className="mb-1"><strong>Annual Dividend Income:</strong> ~$11,200/year (14% yield-on-cost)</p>
                          <p className="mb-1"><strong>Total Return:</strong> 4,770%</p>
                          <p className="mb-0 text-xs text-slate-600 dark:text-slate-400">Source: Morningstar total return data, assumes DRIP</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>3. Inflation Protection Built-In</h3>
                  <p>
                    Dividend Kings have averaged <strong>~5% annual dividend growth</strong> over the past decade,
                    outpacing average inflation of 2-3%. Your income rises faster than your cost of living.
                  </p>

                  <h3>4. Lower Volatility Than Market</h3>
                  <p>
                    Dividend Kings deliver similar long-term returns to the S&P 500 but with <strong>40% lower volatility</strong>.
                    This means:
                  </p>
                  <ul>
                    <li>Smaller drawdowns during crashes (sleep better at night)</li>
                    <li>Faster recovery times (get back to even quicker)</li>
                    <li>Less emotional stress (easier to hold long-term)</li>
                  </ul>

                  <h3>5. Shareholder-Friendly Management</h3>
                  <p>
                    Companies that prioritize 50+ years of dividend growth aren't chasing get-rich-quick schemes.
                    They have disciplined capital allocation, conservative balance sheets, and long-term thinking.
                  </p>
                </section>

                {/* Best Picks */}
                <section id="best-picks">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    Best Dividend Kings to Buy in 2026
                  </h2>
                  <p>
                    Not all Dividend Kings are equal. Here are our top 5 picks based on growth potential, yield,
                    financial strength, and valuation:
                  </p>

                  {/* Top 5 Picks */}
                  <div className="space-y-6 my-8">
                    {/* 1. Johnson & Johnson */}
                    <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">1. Johnson & Johnson (JNJ)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">62 years of dividend growth • Health Care</p>
                          </div>
                          <Badge className="bg-red-600 text-white">Top Pick</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Yield</p>
                            <p className="text-lg font-bold">3.0%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">5-Yr Dividend Growth</p>
                            <p className="text-lg font-bold">5.8%/year</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Payout Ratio</p>
                            <p className="text-lg font-bold">44%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-2">
                          <strong>Why we like it:</strong> Healthcare giant with diversified revenue (pharma, medical devices, consumer health).
                          Recently spun off Kenvue (consumer brands) to focus on higher-margin pharmaceuticals. Strong pipeline of drugs,
                          recession-resistant demand, and one of the highest credit ratings (AAA).
                        </p>
                        <p className="text-sm mb-0 text-slate-600 dark:text-slate-400">
                          <strong>Risk:</strong> Patent cliffs, litigation (talc lawsuits), regulatory pressure on drug pricing.
                        </p>
                      </CardContent>
                    </Card>

                    {/* 2. Procter & Gamble */}
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">2. Procter & Gamble (PG)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">68 years of dividend growth • Consumer Staples</p>
                          </div>
                          <Badge variant="secondary">Reliable</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Yield</p>
                            <p className="text-lg font-bold">2.4%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">5-Yr Dividend Growth</p>
                            <p className="text-lg font-bold">6.2%/year</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Payout Ratio</p>
                            <p className="text-lg font-bold">58%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-2">
                          <strong>Why we like it:</strong> Ultimate consumer staples play—owns brands like Tide, Pampers, Gillette, Crest.
                          People buy these products in good times and bad. Strong pricing power, global distribution, and consistent
                          earnings growth. One of Warren Buffett's favorite holdings.
                        </p>
                        <p className="text-sm mb-0 text-slate-600 dark:text-slate-400">
                          <strong>Risk:</strong> Mature markets, private label competition, slower growth in developed markets.
                        </p>
                      </CardContent>
                    </Card>

                    {/* 3. Coca-Cola */}
                    <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">3. Coca-Cola (KO)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">64 years of dividend growth • Consumer Staples</p>
                          </div>
                          <Badge variant="secondary">Global</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Yield</p>
                            <p className="text-lg font-bold">3.1%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">5-Yr Dividend Growth</p>
                            <p className="text-lg font-bold">4.1%/year</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Payout Ratio</p>
                            <p className="text-lg font-bold">73%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-2">
                          <strong>Why we like it:</strong> Global beverage empire with 500+ brands and distribution in 200+ countries.
                          Recession-proof demand, pricing power, and transition to healthier beverages (water, tea, sports drinks).
                          Warren Buffett's largest holding in Berkshire Hathaway.
                        </p>
                        <p className="text-sm mb-0 text-slate-600 dark:text-slate-400">
                          <strong>Risk:</strong> Declining soda consumption in developed markets, health concerns, higher payout ratio limits growth.
                        </p>
                      </CardContent>
                    </Card>

                    {/* 4. Automatic Data Processing */}
                    <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">4. Automatic Data Processing (ADP)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">51 years of dividend growth • Industrials</p>
                          </div>
                          <Badge variant="secondary">Growth</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Yield</p>
                            <p className="text-lg font-bold">2.2%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">5-Yr Dividend Growth</p>
                            <p className="text-lg font-bold">12.4%/year</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Payout Ratio</p>
                            <p className="text-lg font-bold">56%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-2">
                          <strong>Why we like it:</strong> Payroll processing leader with sticky recurring revenue (90%+ client retention).
                          Benefits from every new job created in the economy. High margins (20%+), strong cash flow, and fastest dividend
                          growth among our top picks. Tech-adjacent without tech volatility.
                        </p>
                        <p className="text-sm mb-0 text-slate-600 dark:text-slate-400">
                          <strong>Risk:</strong> Competition from newer HR tech platforms, cyclical exposure to employment trends.
                        </p>
                      </CardContent>
                    </Card>

                    {/* 5. Lowe's */}
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">5. Lowe's Companies (LOW)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">63 years of dividend growth • Consumer Discretionary</p>
                          </div>
                          <Badge variant="secondary">Value</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Yield</p>
                            <p className="text-lg font-bold">2.0%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">5-Yr Dividend Growth</p>
                            <p className="text-lg font-bold">15.1%/year</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Payout Ratio</p>
                            <p className="text-lg font-bold">37%</p>
                          </div>
                        </div>
                        <p className="text-sm mb-2">
                          <strong>Why we like it:</strong> Home improvement retailer benefiting from aging housing stock (median home age: 40 years)
                          and millennials buying houses. Aggressive share buybacks, improving margins, and massive dividend growth runway
                          (lowest payout ratio in our top 5).
                        </p>
                        <p className="text-sm mb-0 text-slate-600 dark:text-slate-400">
                          <strong>Risk:</strong> Housing market slowdowns, competition from Amazon/Home Depot, cyclical consumer spending.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">Honorable Mentions</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="font-semibold mb-1">Abbott Laboratories (ABT)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-0">Medical devices, diagnostics, nutrition. 51 years. Yield: 2.0%</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">PepsiCo (PEP)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-0">Snacks + beverages (Frito-Lay, Gatorade). 52 years. Yield: 2.9%</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Consolidated Edison (ED)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-0">NYC utility monopoly. 51 years. Yield: 3.2%</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Emerson Electric (EMR)</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-0">Industrial automation. 68 years. Yield: 2.2%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Risks */}
                <section id="risks">
                  <h2 className="flex items-center gap-2">
                    <XCircle className="h-7 w-7 text-red-600" />
                    Risks & Downsides of Dividend Kings
                  </h2>
                  <p>
                    Dividend Kings aren't perfect. Here are the legitimate risks and downsides:
                  </p>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">1. Lower Growth Than Tech/Growth Stocks</h4>
                          <p className="text-sm mb-0">
                            From 2014-2024, Dividend Kings returned 13.2% annualized vs 15.8% for Nasdaq (heavy tech exposure).
                            If you want maximum capital appreciation, Kings lag high-growth stocks.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">2. Sector Concentration</h4>
                          <p className="text-sm mb-0">
                            47% of Kings are in Consumer Staples and Utilities—defensive sectors with slower growth.
                            Only 1 energy company, 1 real estate, 0 tech pure-plays. You're overweight boring, underweight exciting.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">3. Dividend Traps Exist</h4>
                          <p className="text-sm mb-0">
                            Just because a company raised dividends for 50 years doesn't mean it will for 51. Altria (tobacco)
                            faces existential regulatory risk. Stanley Black & Decker paused growth in 2024. Past ≠ guaranteed future.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">4. Tax Inefficiency in Taxable Accounts</h4>
                          <p className="text-sm mb-0">
                            Dividends are taxable income (15-20% for most investors). If held in taxable accounts, you pay taxes
                            annually even if reinvesting. Growth stocks defer taxes until you sell.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">5. Illiquidity in Smaller Names</h4>
                          <p className="text-sm mb-0">
                            Not all Kings are S&P 500 companies. Smaller utilities and regional banks (Middlesex Water, Farmers & Merchants Bancorp)
                            have low trading volume. Spreads can be wide.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">6. Valuation Risk</h4>
                          <p className="text-sm mb-0">
                            Dividend Kings trade at premium P/E ratios (average 22x vs S&P 500's 20x) due to their quality reputation.
                            If you overpay, even great companies deliver mediocre returns.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Bottom line:</strong> Dividend Kings are excellent for stability, income, and recession protection.
                    They're NOT ideal for aggressive growth, tax efficiency in taxable accounts, or tech exposure. Know what you're buying.
                  </p>
                </section>

                {/* How to Invest */}
                <section id="how-to-invest">
                  <h2>How to Invest in Dividend Kings</h2>
                  <p>
                    You have three main approaches to gain exposure to Dividend Kings:
                  </p>

                  <h3>Option 1: Buy Individual Stocks</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Best For: Investors with $25,000+ who want control
                      </h4>
                      <p className="text-sm mb-3">
                        <strong>Strategy:</strong> Build a diversified portfolio of 10-20 Dividend Kings across sectors.
                        Focus on our top picks plus your own research.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Pros:</strong> Full control, no fees, tax-loss harvesting, higher yields</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Cons:</strong> Requires research, rebalancing, and concentration risk if under-diversified</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Option 2: Dividend Aristocrats ETF (Proxy for Kings)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        Best For: Passive investors who want instant diversification
                      </h4>
                      <p className="text-sm mb-3">
                        <strong>Note:</strong> There's no ETF exclusively tracking Dividend Kings. The closest proxy is:
                      </p>
                      <div className="bg-white dark:bg-slate-900 p-4 rounded mb-3">
                        <p className="font-bold mb-2">ProShares S&P 500 Dividend Aristocrats ETF (NOBL)</p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Yield</p>
                            <p className="font-bold">2.1%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Expense Ratio</p>
                            <p className="font-bold">0.35%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Holdings</p>
                            <p className="font-bold">69 stocks</p>
                          </div>
                        </div>
                        <p className="text-xs mt-2 mb-0 text-slate-600 dark:text-slate-400">
                          Tracks S&P 500 Dividend Aristocrats (25+ years). Most Dividend Kings are included.
                        </p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Pros:</strong> Instant diversification, automatic rebalancing, no research needed</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Cons:</strong> 0.35% fee, lower yield than individual stocks, includes 25-year Aristocrats (not just 50-year Kings)</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Option 3: Hybrid Approach (Recommended)</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-purple-600" />
                        Best For: Most investors seeking balance
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">60% NOBL ETF (Core Holdings)</span>
                            <Badge>Stability</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            Provides diversification across all Dividend Aristocrats/Kings
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">40% Individual Dividend Kings (Satellite)</span>
                            <Badge variant="secondary">Higher Yield</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-purple-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            5-8 hand-picked Kings (JNJ, PG, KO, ADP, LOW, etc.) for higher yields
                          </p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="font-semibold mb-2">Why This Works:</p>
                          <ul className="space-y-1 text-sm mb-0">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>NOBL provides diversification and autopilot management</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Individual stocks boost overall yield and let you overweight favorites</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Balanced approach = better risk-adjusted returns</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Getting Started Checklist</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <ol className="space-y-2 text-sm list-decimal list-inside mb-0">
                        <li><strong>Choose a brokerage</strong> with commission-free stock/ETF trades (see our recommendations below)</li>
                        <li><strong>Fund your account</strong> with at least $1,000 to start (ideally $10,000+ for diversification)</li>
                        <li><strong>Enable DRIP</strong> (Dividend Reinvestment Plan) to automatically buy more shares with dividends</li>
                        <li><strong>Start with 1-3 positions</strong> from our top picks, then add over time (dollar-cost average)</li>
                        <li><strong>Rebalance annually</strong> or when a position exceeds 15% of portfolio</li>
                        <li><strong>Hold for decades</strong>—Dividend Kings reward patience (10+ year time horizon)</li>
                      </ol>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                        <Crown className="h-7 w-7" />
                        Model Your Dividend King Returns with DRIP Calculator
                      </h3>
                      <p className="mb-6 text-yellow-100">
                        See how reinvesting dividends from Dividend Kings can compound into generational wealth.
                        Our DRIP calculator shows exact projections based on historical dividend growth rates.
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
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Buying Dividend Kings</h2>
                  <p>
                    To invest in Dividend Kings, you need a brokerage account with commission-free stock trading and DRIP support.
                    Here are the top-rated brokers:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ */}
                <section>
                  <h2>Frequently Asked Questions (FAQ)</h2>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How many Dividend Kings are there?</h3>
                        <p className="text-sm mb-0">
                          As of February 2026, there are <strong>57 Dividend Kings</strong> (including 2 unofficial Kings that qualify
                          depending on methodology). The list changes annually as companies reach 50 years or lose their streak.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What's the difference between Dividend Kings and Aristocrats?</h3>
                        <p className="text-sm mb-0">
                          <strong>Kings:</strong> 50+ years of dividend growth, no index requirement (57 stocks).
                          <br />
                          <strong>Aristocrats:</strong> 25+ years of dividend growth, must be in S&P 500 (69 stocks).
                          <br />
                          Most Dividend Kings are also Aristocrats, but Kings have double the track record.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is the average dividend yield of Dividend Kings?</h3>
                        <p className="text-sm mb-0">
                          The average yield is approximately <strong>2.8-3.2%</strong>, slightly higher than the S&P 500 average (1.4%)
                          but lower than high-yield dividend stocks (5-7%). Kings prioritize dividend growth over high initial yields.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Can Dividend Kings cut dividends?</h3>
                        <p className="text-sm mb-0">
                          Yes. While extremely rare, Dividend Kings can and have cut/paused dividends. Examples: Stanley Black & Decker
                          paused growth in 2024. However, during COVID-19 (2020), only 2 out of 57 Kings cut dividends (3.5% rate) vs
                          40%+ of S&P 500 companies.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Are Dividend Kings good for retirement income?</h3>
                        <p className="text-sm mb-0">
                          <strong>Yes.</strong> Dividend Kings are excellent for retirement portfolios because: (1) reliable income that
                          grows with inflation, (2) lower volatility than market, (3) recession-tested for 50+ years, and (4) minimal
                          maintenance required. Ideal for retirees who need predictable cash flow.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Which Dividend King has the longest streak?</h3>
                        <p className="text-sm mb-0">
                          <strong>Procter & Gamble (PG)</strong> holds the longest streak at <strong>68 consecutive years</strong> of
                          dividend increases (as of 2026). Close behind are Emerson Electric (EMR) at 68 years and Coca-Cola (KO) at 64 years.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I buy Dividend Kings or a dividend ETF?</h3>
                        <p className="text-sm mb-0">
                          It depends on your portfolio size and preferences:
                          <br />
                          <strong>Individual Kings:</strong> Best if you have $25,000+, want higher yields, and enjoy stock picking.
                          <br />
                          <strong>Dividend ETF (NOBL):</strong> Best for passive investors, smaller portfolios ($1,000-25,000), and those who want instant diversification.
                          <br />
                          <strong>Hybrid (recommended):</strong> 60% ETF + 40% individual Kings combines benefits of both.
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
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. Dividend ETFs: Complete Comparison
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
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
