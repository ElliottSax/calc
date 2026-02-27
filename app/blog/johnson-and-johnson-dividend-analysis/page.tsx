import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { Activity, AlertCircle, ArrowRight, Award, BarChart3, Building2, CheckCircle2, Clock, Crown, DollarSign, HeartPulse, J, LineChart, Percent, PieChart, Pill, Scale, ShieldCheck, Target, TrendingDown, TrendingUp, Users, XCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Johnson & Johnson Dividend Analysis: 62 Years of Increases (2026)',
  description: 'Complete analysis of Johnson & Johnson (JNJ) dividend: 62-year Dividend King with 3.0% yield. Covers Kenvue spinoff impact, pharmaceutical pipeline, litigation risks, and dividend safety score.',
  keywords: 'Johnson and Johnson dividend, JNJ dividend, Johnson and Johnson stock, JNJ dividend yield, dividend king stocks, healthcare dividend stocks, pharmaceutical stocks',
  openGraph: {
    title: 'Johnson & Johnson Dividend: Ultimate Sleep-Well-At-Night Stock',
    description: '62 consecutive years of dividend increases. Deep analysis of yield, growth, Kenvue impact, and why JNJ is the ultimate defensive dividend stock.',
    type: 'article',
  }
}

interface DividendYear {
  year: number
  dividend: string
  increase: string
}

const historicalDividends: DividendYear[] = [
  { year: 2026, dividend: '$4.84', increase: '5.2%' },
  { year: 2025, dividend: '$4.60', increase: '4.8%' },
  { year: 2024, dividend: '$4.39', increase: '5.3%' },
  { year: 2023, dividend: '$4.16', increase: '5.1%' },
  { year: 2022, dividend: '$4.04', increase: '6.6%' },
  { year: 2021, dividend: '$3.80', increase: '5.0%' },
  { year: 2020, dividend: '$3.62', increase: '6.3%' },
  { year: 2019, dividend: '$3.40', increase: '5.6%' },
  { year: 2018, dividend: '$3.22', increase: '7.1%' },
  { year: 2017, dividend: '$3.01', increase: '6.4%' },
  { year: 2016, dividend: '$2.83', increase: '7.1%' },
  { year: 2015, dividend: '$2.64', increase: '7.3%' },
]

const productPipeline = [
  {
    name: 'Darzalex (daratumumab)',
    category: 'Oncology',
    indication: 'Multiple myeloma',
    revenue2025: '$8.2B',
    growth: '15%',
    status: 'Blockbuster - expanding indications',
  },
  {
    name: 'Stelara (ustekinumab)',
    category: 'Immunology',
    indication: 'Crohn\'s, psoriasis, ulcerative colitis',
    revenue2025: '$9.8B',
    growth: '8%',
    status: 'Market leader - biosimilar risk 2025+',
  },
  {
    name: 'Tremfya (guselkumab)',
    category: 'Immunology',
    indication: 'Psoriasis, Crohn\'s disease',
    revenue2025: '$3.8B',
    growth: '28%',
    status: 'Fast-growing - Stelara successor',
  },
  {
    name: 'Erleada (apalutamide)',
    category: 'Oncology',
    indication: 'Prostate cancer',
    revenue2025: '$2.1B',
    growth: '12%',
    status: 'Growing - competitive market',
  },
  {
    name: 'Carvykti (ciltacabtagene)',
    category: 'Oncology',
    indication: 'CAR-T therapy for multiple myeloma',
    revenue2025: '$950M',
    growth: '85%',
    status: 'Next-generation therapy - huge potential',
  },
]

const segmentBreakdown = [
  {
    segment: 'Innovative Medicine (Pharmaceuticals)',
    revenue: '~$54B (60%)',
    margin: '~38%',
    growth: '6-8%',
    description: 'Blockbuster drugs in oncology, immunology, cardiovascular, neuroscience. Patent-protected with strong pipeline.',
  },
  {
    segment: 'MedTech (Medical Devices)',
    revenue: '~$27B (30%)',
    margin: '~25%',
    growth: '5-7%',
    description: 'Surgery (orthopedics, robotics), interventional solutions (electrophysiology), vision (contact lenses, cataract surgery).',
  },
  {
    segment: 'Consumer Health (Kenvue - Spun Off)',
    revenue: '$0 (Previously 10%)',
    margin: 'N/A',
    growth: 'N/A',
    description: 'Brands like Tylenol, Listerine, Band-Aid, Neutrogena spun off as Kenvue (KVUE) in 2023. JNJ shareholders received stock.',
  },
]

const comparisonStocks = [
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    yield: '3.0%',
    growth5yr: '5.8%',
    payoutRatio: '48%',
    yearsIncreasing: 62,
    dividendSafety: '95/100',
    businessRisk: 'Very Low',
  },
  {
    symbol: 'ABT',
    name: 'Abbott Laboratories',
    yield: '1.8%',
    growth5yr: '8.5%',
    payoutRatio: '40%',
    yearsIncreasing: 52,
    dividendSafety: '90/100',
    businessRisk: 'Low',
  },
  {
    symbol: 'MDT',
    name: 'Medtronic',
    yield: '3.5%',
    growth5yr: '4.5%',
    payoutRatio: '55%',
    yearsIncreasing: 46,
    dividendSafety: '85/100',
    businessRisk: 'Low',
  },
  {
    symbol: 'PFE',
    name: 'Pfizer',
    yield: '6.2%',
    growth5yr: '2.0%',
    payoutRatio: '85%',
    yearsIncreasing: 14,
    dividendSafety: '65/100',
    businessRisk: 'Medium',
  },
  {
    symbol: 'ABBV',
    name: 'AbbVie',
    yield: '3.8%',
    growth5yr: '8.2%',
    payoutRatio: '45%',
    yearsIncreasing: 11,
    dividendSafety: '82/100',
    businessRisk: 'Medium',
  },
]

export default function JohnsonAndJohnsonDividendAnalysisPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Crown className="h-3 w-3 mr-1" />
                  Dividend King - 62 Years
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Johnson & Johnson Dividend Analysis: 62 Years of Increases
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Complete analysis of JNJ's legendary dividend track record. From Dividend King status
                  to the Kenvue spinoff impact, pharmaceutical pipeline strength, litigation risks,
                  and why this remains the ultimate "sleep well at night" dividend stock for 2026.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>22 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <HeartPulse className="h-4 w-4" />
                    Healthcare
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Answer: Johnson & Johnson Dividend Summary
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend King Status:</strong> 62 consecutive years of increases (since 1964) - one of only 54 Dividend Kings globally</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Current Yield:</strong> 3.0% ($4.84 annual) with 5-6% average growth rate - beats inflation consistently</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout Ratio:</strong> 48% - highly sustainable with room for continued growth even in recessions</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Business Mix:</strong> 60% Pharmaceuticals (high margin) + 30% MedTech (recession-resistant) = perfect diversification</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend Safety Score:</strong> 95/100 - among the safest dividends in the entire market</span>
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
                    <li><a href="#kenvue-spinoff" className="text-blue-600 hover:underline">Kenvue Spinoff Impact</a></li>
                    <li><a href="#business-segments" className="text-blue-600 hover:underline">Business Segment Analysis</a></li>
                    <li><a href="#pharmaceutical-pipeline" className="text-blue-600 hover:underline">Pharmaceutical Pipeline</a></li>
                    <li><a href="#litigation-risks" className="text-blue-600 hover:underline">Litigation & Legal Risks</a></li>
                    <li><a href="#dividend-safety" className="text-blue-600 hover:underline">Dividend Safety Analysis</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">vs. Healthcare Peers</a></li>
                    <li><a href="#growth-projection" className="text-blue-600 hover:underline">40-Year DRIP Example</a></li>
                    <li><a href="#pros-cons" className="text-blue-600 hover:underline">Pros & Cons</a></li>
                    <li><a href="#calculators" className="text-blue-600 hover:underline">Dividend Calculators</a></li>
                    <li><a href="#brokers" className="text-blue-600 hover:underline">Where to Buy JNJ</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Introduction */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Crown className="h-7 w-7 text-yellow-600" />
                    The Ultimate Dividend King: 62 Years and Counting
                  </h2>
                  <p>
                    Johnson & Johnson (NYSE: JNJ) stands as one of the most reliable dividend stocks in history.
                    With 62 consecutive years of dividend increases, JNJ has raised its payout through every
                    recession, market crash, and economic crisis since 1964.
                  </p>
                  <p>
                    That includes the 1970s stagflation, the 2000 dot-com crash, the 2008 financial crisis,
                    the 2020 COVID pandemic, and the 2022 bear market. Through wars, recessions, and panics,
                    JNJ has never missed a dividend increase.
                  </p>
                  <p>
                    This isn't just consistency—it's reliability engineered into the business model. JNJ's
                    diversification across pharmaceuticals (60%) and medical devices (30%) creates recession-proof
                    cash flow. People need cancer drugs and hip replacements regardless of GDP growth.
                  </p>
                  <p>
                    But the story changed in 2023 with the Kenvue spinoff. JNJ split off its consumer health
                    division (Tylenol, Band-Aid, Neutrogena) to focus on higher-margin pharma and MedTech.
                    This reduced revenue but increased profit margins and growth potential.
                  </p>
                  <p>
                    Today, JNJ offers a 3.0% yield with 5-6% annual growth, a 48% payout ratio, and a
                    pharmaceutical pipeline worth tens of billions. For dividend investors seeking reliability
                    over excitement, JNJ remains the gold standard.
                  </p>
                </section>

                {/* Dividend History */}
                <section id="dividend-history">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-green-600" />
                    62-Year Dividend History: The Chart That Never Dips
                  </h2>
                  <p>
                    Johnson & Johnson has increased its dividend every single year since 1964. That's 62
                    consecutive years without a single freeze, cut, or pause. Only 54 companies globally can
                    make this claim—the exclusive Dividend Kings club.
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
                        Average annual increase (2015-2026): 5.9% - consistently beats inflation by 2-3%
                      </p>
                    </CardContent>
                  </Card>

                  <p>
                    Notice the consistency: increases of 5-7% annually, with occasional years above 7% when earnings
                    accelerate. JNJ targets dividend growth slightly above earnings growth to maintain the payout ratio.
                  </p>
                  <p>
                    The 2023 Kenvue spinoff didn't interrupt the streak. JNJ maintained the dividend on the smaller
                    post-spinoff entity, and shareholders received Kenvue stock as a special dividend. Total shareholder
                    income actually increased.
                  </p>
                  <p>
                    Looking back 20 years, the 2006 dividend was $1.62. The 2026 dividend is $4.84. That's a 199%
                    total increase, or 5.6% compounded annually for two decades. A $10,000 investment in 2006 now
                    generates nearly 3x the income.
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
                            <p className="text-3xl font-bold">3.0%</p>
                          </div>
                          <Percent className="h-8 w-8 text-blue-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Based on stock price ~$161. Quarterly payment of $1.21 per share.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividend</p>
                            <p className="text-3xl font-bold">$4.84</p>
                          </div>
                          <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Paid quarterly: $1.21 per share every 3 months (Feb, May, Aug, Nov).
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">5-Year Growth Rate</p>
                            <p className="text-3xl font-bold">5.8%</p>
                          </div>
                          <TrendingUp className="h-8 w-8 text-purple-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          CAGR from 2021-2026. Consistent mid-single-digit growth beats inflation.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                            <p className="text-3xl font-bold">48%</p>
                          </div>
                          <PieChart className="h-8 w-8 text-orange-600" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Dividends as % of earnings. Ultra-safe with 52% retained for growth.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    These metrics tell a simple story: safety and reliability. A 3.0% yield places JNJ above the
                    S&P 500 average (1.6%) but below high-risk yield traps. The 5.8% growth rate means your income
                    doubles every 12 years through dividend raises alone.
                  </p>
                  <p>
                    The 48% payout ratio is the crown jewel. JNJ could maintain this dividend even if earnings
                    fell 50% overnight. That's why JNJ never cuts during recessions—there's always a massive
                    cushion of retained earnings to protect the payout.
                  </p>
                </section>

                {/* Kenvue Spinoff */}
                <section id="kenvue-spinoff">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-indigo-600" />
                    The Kenvue Spinoff: What Happened and Why It Matters
                  </h2>
                  <p>
                    In August 2023, Johnson & Johnson completed one of the largest corporate spinoffs in history.
                    The consumer health division—brands like Tylenol, Listerine, Band-Aid, Neutrogena, and Aveeno—became
                    an independent company called Kenvue (NYSE: KVUE).
                  </p>
                  <p>
                    JNJ shareholders received 0.78 shares of Kenvue for every JNJ share owned. If you owned 100 shares
                    of JNJ pre-spinoff, you now own 100 shares of JNJ plus 78 shares of Kenvue.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Before and After the Spinoff</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Before Spinoff (Pre-2023)</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Revenue: $95B (100%)</li>
                            <li>• Pharma: $54B (57%)</li>
                            <li>• MedTech: $27B (28%)</li>
                            <li>• Consumer: $14B (15%)</li>
                            <li>• Operating Margin: ~28%</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">After Spinoff (2024+)</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Revenue: $81B (100%)</li>
                            <li>• Pharma: $54B (67%)</li>
                            <li>• MedTech: $27B (33%)</li>
                            <li>• Consumer: $0 (spun off)</li>
                            <li>• Operating Margin: ~32%</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Why did JNJ do this?</strong> Three strategic reasons:
                  </p>
                  <ul>
                    <li><strong>Higher margins:</strong> Consumer products had 18-20% margins vs. 35-40% for pharma. Shedding low-margin revenue increases overall profitability.</li>
                    <li><strong>Faster growth:</strong> Pharma grows 6-8% annually with blockbuster drugs. Consumer grew 3-4% in mature markets. JNJ can now focus capital on high-return R&D.</li>
                    <li><strong>Litigation isolation:</strong> Most talc lawsuits targeted consumer products. The spinoff legally separates these liabilities from the core JNJ entity.</li>
                  </ul>

                  <p>
                    <strong>Impact on the dividend:</strong> JNJ maintained its $4.24 annual dividend post-spinoff
                    on the smaller revenue base. This actually increased the yield from 2.7% to 3.0%. Plus, Kenvue
                    pays its own 3.4% dividend, so total income to shareholders increased.
                  </p>
                  <p>
                    Think of it like a stock split for income. You went from owning one company paying $4.24 to
                    owning two companies paying a combined $5.50+ in dividends. The Dividend King streak continues
                    uninterrupted.
                  </p>
                </section>

                {/* Business Segments */}
                <section id="business-segments">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    Business Segment Analysis: Pharma + MedTech
                  </h2>
                  <p>
                    Post-Kenvue, Johnson & Johnson is a pure-play healthcare company focused on two high-margin,
                    high-growth segments: Innovative Medicine (pharmaceuticals) and MedTech (medical devices).
                  </p>

                  <div className="space-y-4 my-6">
                    {segmentBreakdown.map((segment) => (
                      <Card key={segment.segment} className="border-l-4 border-l-purple-500">
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-bold mb-2">{segment.segment}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Annual Revenue</p>
                              <p className="font-semibold">{segment.revenue}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Operating Margin</p>
                              <p className="font-semibold">{segment.margin}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Growth Rate</p>
                              <p className="font-semibold text-green-600">{segment.growth}</p>
                            </div>
                          </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {segment.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    The magic is in the mix. Pharmaceuticals provide high margins (35-40%) and recurring revenue
                    from chronic conditions requiring lifelong treatment. MedTech offers recession resistance—hip
                    replacements and cataract surgeries aren't optional for aging populations.
                  </p>
                  <p>
                    Together, these segments create a cash flow machine. JNJ generates $18-20B in annual free cash
                    flow, of which only $13-14B goes to dividends. The remaining $5-6B funds R&D, acquisitions,
                    and buybacks.
                  </p>
                  <p>
                    This is why the dividend never stops growing. Even in a recession, healthcare spending remains
                    stable. Cancer patients don't delay chemotherapy. Diabetics don't stop buying insulin. JNJ's
                    revenue stream is as reliable as they come.
                  </p>
                </section>

                {/* Pharmaceutical Pipeline */}
                <section id="pharmaceutical-pipeline">
                  <h2 className="flex items-center gap-2">
                    <Pill className="h-7 w-7 text-red-600" />
                    Pharmaceutical Pipeline: The Growth Engine
                  </h2>
                  <p>
                    JNJ's pharmaceutical division drives dividend growth through blockbuster drugs protected by
                    patents. The current pipeline includes cancer immunotherapies, next-generation biologics, and
                    CAR-T cell therapies worth billions in future revenue.
                  </p>

                  <div className="space-y-4 my-6">
                    {productPipeline.map((product) => (
                      <Card key={product.name} className="border-l-4 border-l-red-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-bold">{product.name}</h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{product.category} - {product.indication}</p>
                            </div>
                            <Badge className="bg-red-600">{product.growth} Growth</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">2025 Revenue</p>
                              <p className="font-semibold">{product.revenue2025}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Annual Growth</p>
                              <p className="font-semibold text-green-600">{product.growth}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Status</p>
                              <p className="font-semibold text-xs">{product.status}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p>
                    <strong>Darzalex</strong> is the crown jewel—an $8B+ blockbuster growing 15% annually. It's
                    becoming the standard of care for multiple myeloma, with new indications expanding the addressable
                    market. Patent protection runs through 2031.
                  </p>
                  <p>
                    <strong>Tremfya</strong> represents the next generation. As Stelara faces biosimilar competition
                    after 2025, Tremfya is positioned as the superior replacement with better efficacy and dosing.
                    The 28% growth rate shows physician adoption accelerating.
                  </p>
                  <p>
                    <strong>Carvykti</strong> is the moonshot. This CAR-T therapy rewrites immune cells to attack
                    cancer. At $475,000 per treatment, it only needs 2,000 patients to generate $950M in revenue.
                    Early approval for earlier-stage cancer could create a $5B+ blockbuster by 2030.
                  </p>
                  <p>
                    The pipeline extends beyond these five. JNJ has 50+ drugs in Phase 2 or Phase 3 trials across
                    oncology, immunology, neuroscience, and cardiovascular disease. The R&D budget of $15B annually
                    ensures a steady stream of future blockbusters.
                  </p>
                </section>

                {/* Litigation Risks */}
                <section id="litigation-risks">
                  <h2 className="flex items-center gap-2">
                    <Scale className="h-7 w-7 text-yellow-600" />
                    Litigation Risks: Talc, Opioids, and Ring-Fencing
                  </h2>
                  <p>
                    No analysis of JNJ is complete without addressing litigation. The company faces billions in
                    potential liabilities from talc-based baby powder lawsuits and opioid-related claims. But the
                    risk to the dividend is lower than headlines suggest.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Major Litigation Issues
                      </h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">Talc Lawsuits (60,000+ Claims)</p>
                          <p className="text-slate-600 dark:text-slate-400">
                            Claims that talc-based baby powder caused ovarian cancer and mesothelioma. JNJ placed
                            these liabilities in a subsidiary (LTL Management) and filed bankruptcy—a legal strategy
                            called "Texas Two-Step" to cap settlements at $8-10B.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Opioid Litigation ($5B Settlement)</p>
                          <p className="text-slate-600 dark:text-slate-400">
                            JNJ agreed to pay $5B over 9 years to settle claims it contributed to the opioid crisis
                            through marketing of Duragesic and Nucynta. Annual payments of ~$550M are manageable
                            against $18B+ free cash flow.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Other Product Liability</p>
                          <p className="text-slate-600 dark:text-slate-400">
                            Ongoing claims related to Risperdal, surgical mesh, and hip implants. Total exposure
                            estimated at $2-3B over multiple years. JNJ has already reserved cash for these settlements.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>The key question:</strong> Can litigation bankrupt JNJ or force a dividend cut? The
                    answer is almost certainly no. Here's why:
                  </p>
                  <ul>
                    <li><strong>Ring-fencing via bankruptcy:</strong> The Texas Two-Step strategy isolates talc liabilities in a separate entity. Courts have upheld this approach, capping JNJ's exposure at $8-10B paid over 25+ years (~$400M annually).</li>
                    <li><strong>Cash reserves:</strong> JNJ holds $15B in cash and generates $18-20B in annual free cash flow. Even paying $2B/year in litigation costs, there's $16B+ left for dividends, R&D, and buybacks.</li>
                    <li><strong>Insurance coverage:</strong> JNJ carries extensive liability insurance that covers portions of settlement costs. The company's out-of-pocket costs are lower than headline numbers suggest.</li>
                    <li><strong>Historical precedent:</strong> JNJ has faced major lawsuits for decades (Risperdal, DePuy hips, Xarelto bleeding) and never missed a dividend increase. Management prioritizes shareholder returns above all else.</li>
                  </ul>

                  <p>
                    Bottom line: Litigation is a risk to monitor, not a reason to avoid the stock. JNJ's balance
                    sheet can absorb tens of billions in settlements without impairing the dividend. The 62-year
                    streak isn't ending because of talc powder.
                  </p>
                </section>

                {/* Dividend Safety */}
                <section id="dividend-safety">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-green-600" />
                    Dividend Safety Score: 95/100 (Exceptional)
                  </h2>
                  <p>
                    We rate JNJ's dividend safety at 95 out of 100—among the highest scores in the entire stock market.
                    Only a handful of companies (Microsoft, Apple, Berkshire Hathaway) earn similar ratings.
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Dividend Safety Factors</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Payout Ratio: 48% (Excellent)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Retains 52% of earnings for growth and safety buffer. Could sustain dividend through
                              50% earnings decline.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Free Cash Flow Coverage: 1.4x (Strong)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Generates $18-20B FCF vs. $13-14B dividend payments. Cash-based coverage prevents
                              accounting gimmicks.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Recession Performance: Never Cut (Outstanding)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Raised dividends through 1973-74, 1980-82, 1990-91, 2000-02, 2008-09, 2020 recessions.
                              Healthcare is recession-proof.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Balance Sheet: AAA Credit Rating (Best Possible)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              One of only two U.S. companies with AAA rating (the other is Microsoft). Debt/EBITDA
                              of 1.2x is extremely conservative.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Business Diversification: Two Segments (Ideal)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Pharma (60%) + MedTech (30%) protect against single-product risk. Pipeline of 50+ drugs
                              ensures future growth.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Management Commitment: Dividend King Culture</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              62-year track record signals management will defend dividend at all costs. Board compensation
                              tied to dividend growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    The only factor preventing a perfect 100/100 score is litigation overhang. While we believe the
                    risks are manageable, a catastrophic legal outcome could theoretically impact capital allocation.
                    This represents perhaps 5% downside risk to the safety score.
                  </p>
                  <p>
                    For perspective, JNJ's safety score of 95/100 compares to:
                  </p>
                  <ul>
                    <li>Pfizer: 65/100 (high payout ratio, COVID revenue cliff)</li>
                    <li>AbbVie: 82/100 (Humira biosimilar pressure)</li>
                    <li>Abbott: 90/100 (excellent diversification)</li>
                    <li>Medtronic: 85/100 (medical device cyclicality)</li>
                  </ul>
                  <p>
                    If you want to sleep well at night knowing your dividend is safe through any economic storm,
                    JNJ is as good as it gets. This is the stock you buy and never sell.
                  </p>
                </section>

                {/* Comparison */}
                <section id="comparison">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    vs. Healthcare Dividend Peers
                  </h2>
                  <p>
                    How does JNJ stack up against other healthcare dividend stocks? Let's compare the top 5 options
                    for dividend investors in the healthcare sector.
                  </p>

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
                          <th className="text-left p-3 border">Risk</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonStocks.map((stock) => (
                          <tr key={stock.symbol} className={stock.symbol === 'JNJ' ? 'bg-blue-50 dark:bg-blue-950 font-semibold' : ''}>
                            <td className="p-3 border">{stock.name} ({stock.symbol})</td>
                            <td className="text-right p-3 border">{stock.yield}</td>
                            <td className="text-right p-3 border text-green-600">{stock.growth5yr}</td>
                            <td className="text-right p-3 border">{stock.payoutRatio}</td>
                            <td className="text-right p-3 border">{stock.yearsIncreasing} yrs</td>
                            <td className="text-right p-3 border font-semibold">{stock.dividendSafety}</td>
                            <td className="text-left p-3 border">{stock.businessRisk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>Johnson & Johnson (JNJ)</strong> offers the best balance of yield, safety, and growth.
                    The 3.0% yield beats high-yield Pfizer on safety (PFE's 85% payout ratio is concerning). The
                    62-year streak doubles Abbott's 52 years.
                  </p>
                  <p>
                    <strong>Abbott (ABT)</strong> is the closest competitor with 8.5% dividend growth vs. JNJ's 5.8%.
                    But ABT's 1.8% starting yield means you wait years to match JNJ's current income. Better for
                    younger investors prioritizing growth over yield.
                  </p>
                  <p>
                    <strong>Medtronic (MDT)</strong> offers higher yield (3.5%) but slower growth (4.5%). Medical
                    device companies face more cyclicality than pharma. Good for income today, less for income growth.
                  </p>
                  <p>
                    <strong>Pfizer (PFE)</strong> yields 6.2% but the 85% payout ratio and post-COVID revenue
                    challenges make this a value trap. The dividend may survive but don't expect meaningful growth.
                  </p>
                  <p>
                    <strong>AbbVie (ABBV)</strong> combines high yield (3.8%) with strong growth (8.2%), but Humira
                    biosimilar pressure creates near-term uncertainty. More aggressive than JNJ, suitable for investors
                    accepting higher risk.
                  </p>
                  <p>
                    Bottom line: If you can only own one healthcare dividend stock, JNJ is the unanimous choice. If
                    you're building a diversified portfolio, pair JNJ's safety with ABT's growth and ABBV's yield.
                  </p>
                </section>

                {/* DRIP Example */}
                <section id="growth-projection">
                  <h2 className="flex items-center gap-2">
                    <LineChart className="h-7 w-7 text-purple-600" />
                    40-Year DRIP Compounding Example
                  </h2>
                  <p>
                    The true magic of JNJ isn't the 3.0% yield today—it's the compounding over decades. Let's run a
                    real example showing what happens when you buy JNJ stock and reinvest dividends for 40 years.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">$10,000 Investment → 40 Years of DRIP</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Assumptions: $10,000 initial investment, 5.8% annual dividend growth (JNJ's historical average),
                        6% annual stock price growth (conservative for JNJ), all dividends reinvested.
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 1 (2026):</span>
                          <span className="text-slate-600">Total Value: $10,600 | Annual Income: $300</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 5 (2030):</span>
                          <span className="text-slate-600">Total Value: $14,100 | Annual Income: $465</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 10 (2035):</span>
                          <span className="text-slate-600">Total Value: $20,800 | Annual Income: $810</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 20 (2045):</span>
                          <span className="text-slate-600">Total Value: $49,200 | Annual Income: $2,640</span>
                        </div>
                        <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                          <span className="font-semibold">Year 30 (2055):</span>
                          <span className="text-slate-600">Total Value: $109,400 | Annual Income: $8,550</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-100 dark:bg-green-950 rounded border-2 border-green-500">
                          <span className="font-bold">Year 40 (2065):</span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            Total Value: $237,600 | Annual Income: $26,400
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded">
                        <p className="text-sm font-semibold mb-2">Key Insights:</p>
                        <ul className="text-xs space-y-1">
                          <li>• Your $10,000 becomes $237,600 (23.8x return)</li>
                          <li>• Annual income grows from $300 to $26,400 (88x increase)</li>
                          <li>• Yield-on-cost reaches 264% ($26,400 income / $10,000 invested)</li>
                          <li>• At age 65, you earn $2,200/month in dividends from this single $10,000 investment</li>
                          <li>• This assumes zero additional contributions—just reinvest dividends</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    This is why Dividend Kings like JNJ are retirement planners' favorites. You buy the stock in
                    your 20s or 30s, reinvest dividends, and by retirement you're generating life-changing passive income.
                  </p>
                  <p>
                    The example above uses conservative 6% stock appreciation. JNJ's actual historical total return
                    (dividends + price gains) is 9-10% annually. At 10% total return, that $10,000 grows to $452,000
                    in 40 years with $35,000+ in annual dividend income.
                  </p>
                  <p>
                    Want to run your own numbers? Use our DRIP calculator below to model JNJ with your specific
                    investment amount, timeframe, and assumptions.
                  </p>
                </section>

                {/* Pros and Cons */}
                <section id="pros-cons">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-orange-600" />
                    Pros and Cons: Is JNJ Right for You?
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Pros: Why Buy JNJ
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>62-year Dividend King:</strong> Unmatched reliability through every recession and crisis since 1964</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Superior Safety:</strong> 48% payout ratio, AAA credit rating, $18B+ free cash flow</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Recession-Proof Business:</strong> Healthcare demand doesn't decline during economic downturns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Balanced Yield + Growth:</strong> 3.0% current income plus 5-6% annual increases</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Strong Pipeline:</strong> 50+ drugs in development ensure future revenue growth</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Low Volatility:</strong> Beta of 0.65 means JNJ moves less than the market—perfect for retirees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Kenvue Bonus:</strong> Spinoff created two dividend streams instead of one</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Sleep-Well-At-Night Stock:</strong> You'll never worry about this dividend being cut</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Cons: Potential Drawbacks
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Moderate Yield:</strong> 3.0% is good but not great—REITs and pipelines yield 6-7%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Slower Growth:</strong> 5-6% dividend increases trail tech stocks growing 10-15% annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Litigation Overhang:</strong> Talc and opioid lawsuits create headline risk even if financially manageable</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Patent Cliffs:</strong> Stelara faces biosimilar competition starting 2025—losing $2B+ in revenue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Regulatory Risk:</strong> Drug pricing reforms could compress pharma margins over time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Boring Returns:</strong> Won't double overnight—this is a slow-and-steady wealth builder</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Valuation Premium:</strong> P/E of 15-17x trades above market average of 18-20x for safety</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span><strong>R&D Execution Risk:</strong> Pipeline drugs must succeed in trials—failure rate is 70-80%</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    <strong>Who should buy JNJ?</strong> Conservative dividend investors prioritizing safety and
                    reliability over maximum yield or growth. Retirees living on dividends. Young investors building
                    a core portfolio position they'll hold forever.
                  </p>
                  <p>
                    <strong>Who should avoid JNJ?</strong> Aggressive investors seeking 6%+ yields or 10%+ dividend
                    growth. Traders looking for quick gains. Anyone who panics over lawsuit headlines without understanding
                    the financials.
                  </p>
                </section>

                {/* Calculator CTA */}
                <section id="calculators" className="not-prose">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your JNJ Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Model your Johnson & Johnson investment with our free calculators. See exactly how much
                        dividend income you'll generate over 10, 20, or 40 years with DRIP reinvestment.
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
                  <h2>Where to Buy Johnson & Johnson Stock</h2>
                  <p>
                    To buy JNJ shares commission-free with automatic dividend reinvestment (DRIP), you need a
                    brokerage account. Here are the top-rated brokers for dividend investors in 2026.
                  </p>
                  <p>
                    All of these brokers offer zero commissions on stock trades, free dividend reinvestment plans,
                    and fractional shares (so you can invest $100 instead of buying a full share at $161).
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ Section */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is Johnson & Johnson stock a good dividend investment?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, JNJ is one of the best dividend stocks available. With 62 consecutive years of increases,
                          a 3.0% yield, 48% payout ratio, and AAA credit rating, JNJ offers exceptional safety and
                          reliability. It's the ultimate "sleep well at night" dividend stock for conservative investors
                          and retirees. The only stocks with comparable dividend safety are Microsoft, Coca-Cola, and
                          Procter & Gamble.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How did the Kenvue spinoff affect JNJ's dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          The 2023 Kenvue spinoff did not reduce JNJ's dividend. JNJ maintained its $4.24 annual dividend
                          post-spinoff, and shareholders received 0.78 shares of Kenvue (yielding 3.4%) for every JNJ
                          share owned. This created two dividend streams instead of one. Total shareholder income actually
                          increased because Kenvue pays its own dividend. The Dividend King streak continues uninterrupted.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is JNJ's dividend yield and payout ratio?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          JNJ currently yields 3.0% with an annual dividend of $4.84 per share (as of February 2026).
                          The payout ratio is 48%, meaning JNJ pays out 48% of earnings as dividends and retains 52%
                          for R&D, acquisitions, and safety buffer. This ultra-low payout ratio is why JNJ has never cut
                          its dividend—there's enormous cushion to sustain payments even if earnings fall 50%.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Are JNJ's talc lawsuits a risk to the dividend?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          The talc lawsuits are a manageable risk, not a dividend threat. JNJ used the "Texas Two-Step"
                          bankruptcy strategy to cap talc liabilities at $8-10B paid over 25+ years (~$400M annually).
                          JNJ generates $18-20B in annual free cash flow, so $400M represents just 2% of cash flow. The
                          company has already reserved billions for settlements. While headlines are scary, the financial
                          impact is minor relative to JNJ's size.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How does JNJ compare to Abbott and Medtronic?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          JNJ offers the best balance of yield (3.0%), safety (95/100 score), and track record (62 years).
                          Abbott (ABT) has faster dividend growth (8.5% vs. 5.8%) but lower starting yield (1.8%), making
                          it better for younger investors. Medtronic (MDT) yields 3.5% but grows slower (4.5%) and faces
                          more cyclicality in medical devices. For maximum safety and reliability, JNJ is the clear winner.
                          For aggressive growth, choose Abbott.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">When does Johnson & Johnson pay dividends?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          JNJ pays dividends quarterly in February, May, August, and November. The current quarterly
                          payment is $1.21 per share ($4.84 annual). Dividend dates follow a consistent pattern:
                          declaration in late December/March/June/September, ex-dividend about 2 weeks later, and payment
                          about 3 weeks after that. Set up automatic DRIP to reinvest these payments into more shares.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What is JNJ's pharmaceutical pipeline worth?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          JNJ's pipeline includes 50+ drugs in Phase 2 or Phase 3 trials worth tens of billions in potential
                          revenue. Key products: Darzalex ($8.2B, growing 15%), Tremfya ($3.8B, growing 28%), and Carvykti
                          ($950M, growing 85%). Carvykti alone could become a $5B+ blockbuster by 2030 if approved for
                          earlier-stage cancer treatment. The $15B annual R&D budget ensures a steady stream of future
                          blockbusters to offset patent expirations like Stelara in 2025.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I reinvest JNJ dividends or take cash?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Reinvest dividends (DRIP) if you don't need the income today. Over 20-40 years, DRIP can double
                          or triple your total returns through compounding. A $10,000 investment with DRIP grows to $237,600
                          in 40 years, generating $26,400 in annual income. Once you retire and need cash flow, turn off
                          DRIP and spend the dividends. This is how dividend investors build life-changing passive income.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Is JNJ overvalued at current prices?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          JNJ trades at a P/E of 15-17x, roughly in line with its 10-year average. This is a reasonable
                          valuation for a Dividend King with AAA credit and recession-proof business. Quality has a price—JNJ
                          rarely trades "cheap" because investors value the safety. Dollar-cost averaging over time (buying
                          monthly or quarterly) eliminates valuation timing risk. JNJ is a stock you buy and hold forever,
                          not a trading vehicle.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What percentage of my portfolio should be in JNJ?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          For a diversified dividend portfolio, limit individual stocks to 3-7% each. JNJ can be at the
                          higher end (5-7%) due to its exceptional safety. Conservative retirees might hold 8-10% in JNJ
                          as a core position. Pair JNJ with other Dividend Kings (PG, KO) and growth healthcare stocks
                          (ABT, ABBV) for balance. Never put more than 10% in any single stock regardless of quality—
                          diversification protects against unforeseen company-specific risks.
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
                    <Link href="/blog/best-healthcare-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Healthcare Dividend Stocks 2026
                    </Link>
                    <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      50 Best Dividend Stocks to Buy in 2026
                    </Link>
                    <Link href="/blog/dividend-kings-complete-list" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete List of Dividend Kings (50+ Years)
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Retirement Income
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
