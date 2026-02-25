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
  Shield,
  Search,
  Calculator,
  LineChart,
  FileText,
  Eye,
  TrendingDown,
  Percent,
  Building2,
  Lightbulb
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Pick Dividend Stocks: 7-Step Selection Process (2026 Guide)',
  description: 'Master dividend stock selection with our proven 7-step framework. Learn to evaluate yield, payout ratio, growth, safety metrics, and red flags. Includes real stock examples and analysis tools.',
  keywords: 'how to pick dividend stocks, dividend stock selection, dividend stock criteria, payout ratio, dividend yield, dividend safety, dividend growth stocks, stock analysis',
  openGraph: {
    title: 'How to Pick Dividend Stocks: Complete 7-Step Selection Process',
    description: 'Systematic framework for selecting high-quality dividend stocks. Avoid traps and build a portfolio that generates reliable passive income.',
    type: 'article',
  }
}

export default function HowToPickDividendStocksPage() {
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
                <Badge className="mb-4">Stock Selection Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Pick Dividend Stocks: The Complete 7-Step Selection Process
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Stop guessing and start investing systematically. Learn the exact framework professional
                  investors use to find high-quality dividend stocks that pay reliably and grow over time.
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
                      <span><strong>Good dividend stocks have:</strong> 3-6% yield, 30-60% payout ratio, 10+ year dividend growth history, strong balance sheet (debt-to-equity below 1.0)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Avoid these red flags:</strong> Yield above 8%, payout ratio over 80%, declining revenue, excessive debt, inconsistent dividend history</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>7-Step Process:</strong> Screen for yield → Check payout sustainability → Verify growth → Analyze financials → Assess competitive moat → Review dividend history → Calculate safety score</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#why-systematic-approach" className="text-blue-600 hover:underline">Why You Need a System</a></li>
                    <li><a href="#7-step-process" className="text-blue-600 hover:underline">The 7-Step Selection Process</a></li>
                    <li><a href="#step1-yield" className="text-blue-600 hover:underline">Step 1: Screen for Yield</a></li>
                    <li><a href="#step2-payout" className="text-blue-600 hover:underline">Step 2: Payout Ratio Check</a></li>
                    <li><a href="#step3-growth" className="text-blue-600 hover:underline">Step 3: Dividend Growth History</a></li>
                    <li><a href="#step4-financials" className="text-blue-600 hover:underline">Step 4: Financial Health Analysis</a></li>
                    <li><a href="#step5-moat" className="text-blue-600 hover:underline">Step 5: Competitive Moat</a></li>
                    <li><a href="#step6-history" className="text-blue-600 hover:underline">Step 6: Dividend Track Record</a></li>
                    <li><a href="#step7-safety" className="text-blue-600 hover:underline">Step 7: Safety Score Calculation</a></li>
                    <li><a href="#red-flags" className="text-blue-600 hover:underline">Critical Red Flags to Avoid</a></li>
                    <li><a href="#real-examples" className="text-blue-600 hover:underline">Real Stock Examples</a></li>
                    <li><a href="#tools" className="text-blue-600 hover:underline">Selection Tools & Calculators</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Why Systematic Approach */}
                <section id="why-systematic-approach">
                  <h2 className="flex items-center gap-2">
                    <Search className="h-7 w-7 text-blue-600" />
                    Why You Need a Systematic Approach
                  </h2>
                  <p>
                    Picking dividend stocks without a proven system is like navigating without a map. You might
                    get lucky occasionally, but you'll make costly mistakes:
                  </p>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Common Mistakes Cost Thousands</h4>
                          <p className="text-sm mb-0">Chasing high yields leads to dividend cuts (GE cut 50% in 2018). Ignoring payout ratios means buying unsustainable dividends (AT&T cut 47% in 2022). Not checking debt gets you into trouble (Frontier Communications bankruptcy in 2020).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p>
                    A systematic approach eliminates emotional decisions and focuses on <strong>quantifiable metrics</strong>
                    that predict dividend safety and growth. This is how professional dividend fund managers do it.
                  </p>

                  <h3>What Makes a Great Dividend Stock?</h3>
                  <p>
                    The best dividend stocks combine four critical elements:
                  </p>
                  <ul>
                    <li><strong>Attractive Yield:</strong> 3-6% range (sweet spot for safety + income)</li>
                    <li><strong>Sustainable Payout:</strong> Payout ratio 30-60% (room to maintain and grow)</li>
                    <li><strong>Consistent Growth:</strong> 10+ years of dividend increases (proven track record)</li>
                    <li><strong>Financial Strength:</strong> Low debt, stable earnings, strong cash flow (crisis resilience)</li>
                  </ul>
                </section>

                {/* 7-Step Process Overview */}
                <section id="7-step-process">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-purple-600" />
                    The 7-Step Selection Process
                  </h2>
                  <p>
                    This proven framework takes you from initial screening to final buy decision. Each step
                    filters out risky stocks and identifies quality dividend payers.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">1</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Screen for Yield (3-6%)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Find stocks with attractive but sustainable yields</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">2</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Check Payout Ratio (30-60%)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Ensure dividends are sustainable from earnings</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Verify Dividend Growth History (10+ years)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Look for consistent annual increases</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">4</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Analyze Financial Health</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Review debt levels, profit margins, cash flow</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">5</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Assess Competitive Moat</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Evaluate business durability and competitive advantages</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">6</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Review Dividend Track Record</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Check for consistency through recessions</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">7</div>
                          <div>
                            <h4 className="font-bold text-base mb-0">Calculate Safety Score</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">Combine all factors into final rating</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 1: Yield Screening */}
                <section id="step1-yield">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-green-600" />
                    Step 1: Screen for Dividend Yield (3-6% Sweet Spot)
                  </h2>
                  <p>
                    Start by filtering for stocks with yields in the <strong>3-6% range</strong>. This is where you
                    find the best balance between income and safety.
                  </p>

                  <h3>Why 3-6% is the Sweet Spot</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Yield Range</th>
                          <th className="border p-3 text-left">Characteristics</th>
                          <th className="border p-3 text-center">Risk Level</th>
                          <th className="border p-3 text-left">Verdict</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Below 2%</td>
                          <td className="border p-3">Growth stocks, low income</td>
                          <td className="border p-3 text-center text-green-600">Low</td>
                          <td className="border p-3">Skip - insufficient income</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">2-3%</td>
                          <td className="border p-3">Conservative, stable companies</td>
                          <td className="border p-3 text-center text-green-600">Low</td>
                          <td className="border p-3">Good for stability</td>
                        </tr>
                        <tr className="bg-green-50 dark:bg-green-950/50">
                          <td className="border p-3 font-semibold text-green-700">3-6%</td>
                          <td className="border p-3">Quality dividend payers</td>
                          <td className="border p-3 text-center text-green-600">Low-Moderate</td>
                          <td className="border p-3 font-bold">IDEAL RANGE ✓</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">6-8%</td>
                          <td className="border p-3">REITs, high-yield sectors</td>
                          <td className="border p-3 text-center text-yellow-600">Moderate</td>
                          <td className="border p-3">Proceed with caution</td>
                        </tr>
                        <tr className="bg-red-50 dark:bg-red-950/50">
                          <td className="border p-3 font-semibold text-red-700">Above 8%</td>
                          <td className="border p-3">Distressed, dividend traps</td>
                          <td className="border p-3 text-center text-red-600">High</td>
                          <td className="border p-3 font-bold">DANGER ZONE ✗</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Warning: High Yields Can Be Traps</h4>
                          <p className="text-sm mb-0">Yields above 8% are often red flags. They result from falling stock prices due to business problems, not generosity. Examples: AT&T yielded 9% before cutting dividends 47% in 2022. GE yielded 5% before slashing 50% in 2018.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Calculate Dividend Yield</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="font-mono text-center text-lg mb-4">
                        Dividend Yield = (Annual Dividend ÷ Stock Price) × 100
                      </p>
                      <div className="text-sm space-y-2">
                        <p><strong>Example:</strong> Stock trading at $50 pays $2.00/year in dividends</p>
                        <p className="font-mono">($2.00 ÷ $50.00) × 100 = 4.0% yield</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 2: Payout Ratio */}
                <section id="step2-payout">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-orange-600" />
                    Step 2: Check Payout Ratio (30-60% is Safe)
                  </h2>
                  <p>
                    The <strong>payout ratio</strong> reveals whether a company can afford its dividend. It measures
                    what percentage of earnings goes to dividends vs being retained for growth and emergencies.
                  </p>

                  <h3>Payout Ratio Guidelines</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Payout Ratio</th>
                          <th className="border p-3 text-left">What It Means</th>
                          <th className="border p-3 text-center">Safety</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">0-30%</td>
                          <td className="border p-3">Conservative, room to grow dividends</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Excellent</td>
                        </tr>
                        <tr className="bg-green-50 dark:bg-green-950/50">
                          <td className="border p-3 font-semibold text-green-700">30-60%</td>
                          <td className="border p-3">Balanced approach, sustainable</td>
                          <td className="border p-3 text-center text-green-600 font-bold">IDEAL ✓</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">60-80%</td>
                          <td className="border p-3">High payout, limited flexibility</td>
                          <td className="border p-3 text-center text-yellow-600">Caution</td>
                        </tr>
                        <tr className="bg-red-50 dark:bg-red-950/50">
                          <td className="border p-3 font-semibold text-red-700">Above 80%</td>
                          <td className="border p-3">Risky, vulnerable to cuts</td>
                          <td className="border p-3 text-center text-red-600 font-bold">DANGER ✗</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold text-red-700">Above 100%</td>
                          <td className="border p-3">Paying more than earned - unsustainable</td>
                          <td className="border p-3 text-center text-red-600 font-bold">AVOID ✗✗</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>How to Calculate Payout Ratio</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <p className="font-mono text-center text-lg mb-4">
                        Payout Ratio = (Annual Dividend ÷ Earnings Per Share) × 100
                      </p>
                      <div className="text-sm space-y-2">
                        <p><strong>Example:</strong> Company earns $4.00 EPS, pays $2.00 dividend</p>
                        <p className="font-mono">($2.00 ÷ $4.00) × 100 = 50% payout ratio</p>
                        <p className="text-green-700 dark:text-green-400 font-semibold">✓ Safe - retains 50% for growth and cushion</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Industry Variations</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <p className="mb-3"><strong>Different industries have different norms:</strong></p>
                      <ul className="space-y-2 text-sm">
                        <li><strong>REITs:</strong> 80-90% payout (required by law to distribute 90% of income)</li>
                        <li><strong>Utilities:</strong> 60-70% payout (stable, regulated businesses)</li>
                        <li><strong>Consumer Staples:</strong> 50-60% payout (predictable earnings)</li>
                        <li><strong>Tech/Growth:</strong> 20-40% payout (prioritize reinvestment)</li>
                        <li><strong>Industrials:</strong> 40-50% payout (cyclical, need flexibility)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 3: Dividend Growth */}
                <section id="step3-growth">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    Step 3: Verify Dividend Growth History (10+ Years)
                  </h2>
                  <p>
                    A long track record of <strong>annual dividend increases</strong> proves management's commitment
                    and the business's durability. Look for at least 10 consecutive years of growth.
                  </p>

                  <h3>Why Dividend Growth Matters</h3>
                  <ul>
                    <li><strong>Inflation Protection:</strong> Growing dividends maintain purchasing power (inflation averages 3%/year)</li>
                    <li><strong>Business Quality Signal:</strong> Only healthy companies can raise dividends consistently</li>
                    <li><strong>Compound Returns:</strong> Reinvested growing dividends accelerate wealth building</li>
                    <li><strong>Recession Resilience:</strong> Companies that maintained dividends through 2008 and 2020 prove durability</li>
                  </ul>

                  <h3>Dividend Aristocrats vs Champions</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Category</th>
                          <th className="border p-3 text-center">Years Required</th>
                          <th className="border p-3 text-center">Number of Stocks</th>
                          <th className="border p-3 text-left">Additional Requirements</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Aristocrats</td>
                          <td className="border p-3 text-center">25+ years</td>
                          <td className="border p-3 text-center">~65 stocks</td>
                          <td className="border p-3">S&P 500 member, $3B+ market cap</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Dividend Champions</td>
                          <td className="border p-3 text-center">25+ years</td>
                          <td className="border p-3 text-center">~150 stocks</td>
                          <td className="border p-3">Includes smaller companies</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Contenders</td>
                          <td className="border p-3 text-center">10-24 years</td>
                          <td className="border p-3 text-center">~300 stocks</td>
                          <td className="border p-3">Emerging quality dividend payers</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Dividend Challengers</td>
                          <td className="border p-3 text-center">5-9 years</td>
                          <td className="border p-3 text-center">~500 stocks</td>
                          <td className="border p-3">Newer but growing track records</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Aristocrats Are Gold Standard</h4>
                          <p className="text-sm mb-2">These 65 companies raised dividends for 25+ consecutive years through multiple recessions. Examples: Coca-Cola (61 years), Johnson & Johnson (62 years), Procter & Gamble (67 years).</p>
                          <p className="text-sm mb-0 font-semibold">Average yield: 2.8% | Average 5-year growth: 6.2% annually</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>What to Look For</h3>
                  <ul>
                    <li><strong>Consecutive Years:</strong> No skipped years or freezes (raises every single year)</li>
                    <li><strong>Growth Rate:</strong> 5-10% annual dividend growth is ideal</li>
                    <li><strong>Consistency:</strong> Similar raise amounts each year (not erratic)</li>
                    <li><strong>Recession Performance:</strong> Maintained or grew dividends in 2008 and 2020</li>
                  </ul>
                </section>

                {/* Step 4: Financial Health */}
                <section id="step4-financials">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Step 4: Analyze Financial Health
                  </h2>
                  <p>
                    Strong financials mean a company can weather economic storms without cutting dividends.
                    Check these five critical metrics:
                  </p>

                  <h3>1. Debt-to-Equity Ratio (Target: Below 1.0)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <p className="mb-3"><strong>What it measures:</strong> How much debt relative to shareholder equity</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Formula:</strong> Total Debt ÷ Total Equity</p>
                        <p className="text-green-700 dark:text-green-400">✓ Below 0.5 = Conservative, low risk</p>
                        <p className="text-green-700 dark:text-green-400">✓ 0.5-1.0 = Moderate, acceptable</p>
                        <p className="text-yellow-700 dark:text-yellow-400">⚠ 1.0-2.0 = High leverage, caution</p>
                        <p className="text-red-700 dark:text-red-400">✗ Above 2.0 = Danger zone, avoid</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>2. Interest Coverage Ratio (Target: Above 5x)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <p className="mb-3"><strong>What it measures:</strong> Ability to pay interest on debt</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Formula:</strong> EBIT ÷ Interest Expense</p>
                        <p className="text-green-700 dark:text-green-400">✓ Above 10x = Excellent coverage</p>
                        <p className="text-green-700 dark:text-green-400">✓ 5-10x = Good coverage</p>
                        <p className="text-yellow-700 dark:text-yellow-400">⚠ 2-5x = Concerning</p>
                        <p className="text-red-700 dark:text-red-400">✗ Below 2x = Distressed</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>3. Free Cash Flow (Must Be Positive)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <p className="mb-3"><strong>What it measures:</strong> Cash left after capital expenditures</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Formula:</strong> Operating Cash Flow - Capital Expenditures</p>
                        <p className="text-green-700 dark:text-green-400">✓ Growing FCF = Healthy business</p>
                        <p className="text-yellow-700 dark:text-yellow-400">⚠ Flat FCF = Monitor closely</p>
                        <p className="text-red-700 dark:text-red-400">✗ Negative or declining FCF = Red flag</p>
                      </div>
                      <p className="text-sm mt-3"><strong>Critical:</strong> Free cash flow should exceed dividend payments by 30%+</p>
                    </CardContent>
                  </Card>

                  <h3>4. Profit Margins (Industry Comparison)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-2 text-sm">
                        <p><strong>Net Profit Margin = Net Income ÷ Revenue</strong></p>
                        <p>Compare to industry averages:</p>
                        <ul className="ml-4 mt-2 space-y-1">
                          <li>Software/Tech: 15-25%+ (high margins)</li>
                          <li>Healthcare: 10-20% (above average)</li>
                          <li>Consumer Staples: 5-10% (moderate)</li>
                          <li>Retail: 2-5% (low margins)</li>
                          <li>Utilities: 8-12% (stable)</li>
                        </ul>
                        <p className="text-green-700 dark:text-green-400 mt-2">✓ Expanding margins = improving efficiency</p>
                        <p className="text-red-700 dark:text-red-400">✗ Shrinking margins = competitive pressure</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>5. Revenue Growth (Look for Stability)</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <p className="mb-3"><strong>What to check:</strong> 5-year revenue trend</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-green-700 dark:text-green-400">✓ Steady growth (5-10%/year) = Healthy</p>
                        <p className="text-green-700 dark:text-green-400">✓ Stable/flat revenue = Acceptable for mature companies</p>
                        <p className="text-red-700 dark:text-red-400">✗ Declining revenue = Major red flag</p>
                        <p className="text-red-700 dark:text-red-400">✗ Erratic swings = Unpredictable business</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 5: Competitive Moat */}
                <section id="step5-moat">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-purple-600" />
                    Step 5: Assess Competitive Moat
                  </h2>
                  <p>
                    A <strong>competitive moat</strong> is a sustainable advantage that protects profits from competitors.
                    Companies with strong moats can maintain and grow dividends for decades.
                  </p>

                  <h3>Types of Competitive Moats</h3>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          Brand Power
                        </h4>
                        <p className="text-sm mb-2">Customers pay premium prices for trusted brands.</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Coca-Cola, Apple, Nike, Disney, McDonald's</p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          Regulatory Protection
                        </h4>
                        <p className="text-sm mb-2">Licenses or regulations create barriers to entry.</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Utilities (regulated monopolies), waste management, railroads</p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-blue-600" />
                          Cost Advantages
                        </h4>
                        <p className="text-sm mb-2">Superior efficiency or scale enables lower prices.</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Walmart, Costco, Amazon, UPS</p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-blue-600" />
                          Network Effects
                        </h4>
                        <p className="text-sm mb-2">Product becomes more valuable as more people use it.</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Visa/Mastercard payment networks, Microsoft Office</p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600" />
                          Switching Costs
                        </h4>
                        <p className="text-sm mb-2">High cost/hassle to change to competitors.</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Examples: Banks (checking accounts), software (Adobe, Salesforce), insurance</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Evaluate Moat Strength</h3>
                  <ul>
                    <li><strong>Market Share:</strong> Dominant position in industry (20%+ market share)</li>
                    <li><strong>Pricing Power:</strong> Can raise prices without losing customers</li>
                    <li><strong>Competitor Turnover:</strong> Same top competitors for 10+ years (stable industry)</li>
                    <li><strong>Return on Equity (ROE):</strong> Consistently above 15% (efficient profit generation)</li>
                  </ul>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">The Warren Buffett Test</h4>
                          <p className="text-sm mb-0">Ask: "Could a competitor with unlimited money replicate this business?" If the answer is "no" or "extremely difficult," you've found a strong moat. Example: No amount of money can replicate Coca-Cola's 135-year brand legacy.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 6: Dividend History */}
                <section id="step6-history">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-indigo-600" />
                    Step 6: Review Dividend Track Record
                  </h2>
                  <p>
                    Past performance doesn't guarantee future results, but it reveals management priorities and
                    business resilience. Check how the stock performed during past crises.
                  </p>

                  <h3>What to Research</h3>

                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm mb-1">2008 Financial Crisis Performance</h4>
                          <p className="text-sm mb-0">Did they maintain or grow dividends during the worst recession since the Great Depression?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm mb-1">2020 COVID Pandemic Response</h4>
                          <p className="text-sm mb-0">How did they handle the sudden economic shutdown? Maintained, cut, or suspended?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm mb-1">Dividend Payment Frequency</h4>
                          <p className="text-sm mb-0">Quarterly (standard), monthly (REITs, some stocks), or annual (rare in US)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm mb-1">Special Dividends</h4>
                          <p className="text-sm mb-0">One-time payments (don't count on them repeating)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm mb-1">Dividend Announcement History</h4>
                          <p className="text-sm mb-0">Consistent timing and transparent communication</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Red Flags in Dividend History</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-2">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm mb-0"><strong>Dividend Cuts:</strong> Any cut in last 10 years is major concern</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm mb-0"><strong>Frozen Dividends:</strong> No raises for 3+ years suggests problems</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm mb-0"><strong>Erratic Patterns:</strong> Unpredictable raise amounts or timing</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm mb-0"><strong>Recent Initiation:</strong> Less than 3 years of dividend history (unproven)</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Step 7: Safety Score */}
                <section id="step7-safety">
                  <h2 className="flex items-center gap-2">
                    <Eye className="h-7 w-7 text-teal-600" />
                    Step 7: Calculate Dividend Safety Score
                  </h2>
                  <p>
                    Combine all factors into a final safety rating. This systematic scoring prevents emotional
                    decisions and creates consistency in your analysis.
                  </p>

                  <h3>The Safety Score Framework (0-100 Points)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">Max Points</th>
                          <th className="border p-3 text-left">How to Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Yield</td>
                          <td className="border p-3 text-center">15 pts</td>
                          <td className="border p-3">3-6%: 15pts | 2-3% or 6-8%: 10pts | Other: 0pts</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Payout Ratio</td>
                          <td className="border p-3 text-center">20 pts</td>
                          <td className="border p-3">30-60%: 20pts | 20-30% or 60-70%: 15pts | 70-80%: 5pts | Above 80%: 0pts</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Dividend Growth</td>
                          <td className="border p-3 text-center">20 pts</td>
                          <td className="border p-3">25+ years: 20pts | 10-24 years: 15pts | 5-9 years: 10pts | Less: 5pts</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Debt-to-Equity</td>
                          <td className="border p-3 text-center">15 pts</td>
                          <td className="border p-3">Below 0.5: 15pts | 0.5-1.0: 10pts | 1.0-2.0: 5pts | Above 2.0: 0pts</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Free Cash Flow</td>
                          <td className="border p-3 text-center">10 pts</td>
                          <td className="border p-3">Growing: 10pts | Stable: 7pts | Flat: 4pts | Declining: 0pts</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Competitive Moat</td>
                          <td className="border p-3 text-center">10 pts</td>
                          <td className="border p-3">Wide moat: 10pts | Narrow moat: 6pts | No moat: 2pts</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Recession Performance</td>
                          <td className="border p-3 text-center">10 pts</td>
                          <td className="border p-3">Maintained 2008+2020: 10pts | Cut once: 5pts | Cut both: 0pts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="mt-8">Safety Score Interpretation</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/50 rounded">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                          <div>
                            <p className="font-bold">80-100 Points: Excellent</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">High-quality dividend stock - Strong buy</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/50 rounded">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-blue-600" />
                          <div>
                            <p className="font-bold">60-79 Points: Good</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Solid dividend stock - Consider buying</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/50 rounded">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-6 w-6 text-yellow-600" />
                          <div>
                            <p className="font-bold">40-59 Points: Fair</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Moderate quality - Additional research needed</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/50 rounded">
                        <div className="flex items-center gap-3">
                          <XCircle className="h-6 w-6 text-red-600" />
                          <div>
                            <p className="font-bold">Below 40 Points: Poor</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">High risk - Avoid or wait for improvement</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Red Flags */}
                <section id="red-flags">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    Critical Red Flags to Avoid
                  </h2>
                  <p>
                    These warning signs indicate serious problems. If you spot any of these, move on to another stock.
                  </p>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-2 border-red-300 dark:border-red-800">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Declining Revenue Trend</h4>
                          <p className="text-sm mb-0">Revenue falling 2+ consecutive years = dying business. Examples: Newspaper companies, traditional retail (Macy's, Kohl's), cable TV providers.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Percent className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Payout Ratio Above 100%</h4>
                          <p className="text-sm mb-0">Paying more dividends than earned = mathematically unsustainable. Will be cut within 6-18 months. Recent examples: AT&T (2021), Kinder Morgan (2016).</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <DollarSign className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Yields Above 10%</h4>
                          <p className="text-sm mb-0">Almost always dividend traps. High yield from falling stock price, not generosity. Exception: Some business development companies (BDCs) and mortgage REITs - research carefully.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Excessive Debt Load</h4>
                          <p className="text-sm mb-0">Debt-to-equity above 3.0 means company owes 3x its net worth. Vulnerable to interest rate increases and recessions. Limits dividend flexibility.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <TrendingDown className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Recent Dividend Cut</h4>
                          <p className="text-sm mb-0">Once a company cuts dividends, trust is broken. Often takes 3-5 years to restore investor confidence. Better opportunities exist elsewhere.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <LineChart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Negative Free Cash Flow</h4>
                          <p className="text-sm mb-0">Burning cash instead of generating it. Dividends funded by debt or asset sales = unsustainable. Check last 3 years of cash flow statements.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Building2 className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dying Industry</h4>
                          <p className="text-sm mb-0">Structural decline in entire sector. Examples: Coal producers, legacy newspapers, taxi medallions. No dividend is safe in a dying industry.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Eye className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Accounting Red Flags</h4>
                          <p className="text-sm mb-0">Frequent restatements, complex structures, auditor changes, or SEC investigations. If you can't understand the financials, don't invest.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Real Examples */}
                <section id="real-examples">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-indigo-600" />
                    Real Stock Examples: Good vs Bad
                  </h2>
                  <p>
                    Let's apply the 7-step process to real stocks to see how it works in practice.
                  </p>

                  <h3>Example 1: Johnson & Johnson (JNJ) - Excellent (Score: 95/100)</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-bold mb-2">Fundamentals (Feb 2026)</p>
                          <ul className="space-y-1">
                            <li><strong>Yield:</strong> 3.1% (15/15 pts) ✓</li>
                            <li><strong>Payout Ratio:</strong> 48% (20/20 pts) ✓</li>
                            <li><strong>Dividend Growth:</strong> 62 consecutive years (20/20 pts) ✓</li>
                            <li><strong>Debt-to-Equity:</strong> 0.55 (10/15 pts) ✓</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Quality Metrics</p>
                          <ul className="space-y-1">
                            <li><strong>Free Cash Flow:</strong> Growing (10/10 pts) ✓</li>
                            <li><strong>Competitive Moat:</strong> Wide - Brand power in healthcare (10/10 pts) ✓</li>
                            <li><strong>Recession Performance:</strong> Raised dividends 2008 & 2020 (10/10 pts) ✓</li>
                            <li><strong>5-Year Dividend Growth:</strong> 5.8% annually</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-lg text-green-700 dark:text-green-400">Total Score: 95/100 - EXCELLENT</p>
                        <p className="text-sm mt-1">Verdict: Textbook quality dividend stock. Safe, reliable, growing income for long-term portfolios.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 2: Realty Income (O) - Good (Score: 75/100)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-bold mb-2">Fundamentals (Feb 2026)</p>
                          <ul className="space-y-1">
                            <li><strong>Yield:</strong> 5.5% (15/15 pts) ✓</li>
                            <li><strong>Payout Ratio:</strong> 88% AFFO (10/20 pts) ⚠ (REIT exception)</li>
                            <li><strong>Dividend Growth:</strong> 29 consecutive years (20/20 pts) ✓</li>
                            <li><strong>Debt-to-Equity:</strong> 1.4 (5/15 pts) ⚠</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Quality Metrics</p>
                          <ul className="space-y-1">
                            <li><strong>Free Cash Flow:</strong> Stable FFO (7/10 pts) ✓</li>
                            <li><strong>Competitive Moat:</strong> Narrow - Scale advantages (6/10 pts)</li>
                            <li><strong>Recession Performance:</strong> Maintained 2008 & 2020 (10/10 pts) ✓</li>
                            <li><strong>Monthly Dividends:</strong> Pays 12x per year (bonus)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-lg text-blue-700 dark:text-blue-400">Total Score: 75/100 - GOOD</p>
                        <p className="text-sm mt-1">Verdict: Solid REIT with high yield and monthly payments. Higher leverage typical for sector. Good for income-focused portfolios.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 3: AT&T (T) - Poor (Score: 25/100)</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-bold mb-2">Fundamentals (2021 - Before Cut)</p>
                          <ul className="space-y-1">
                            <li><strong>Yield:</strong> 9.2% (0/15 pts) ✗ Danger zone</li>
                            <li><strong>Payout Ratio:</strong> 145% (0/20 pts) ✗ Unsustainable</li>
                            <li><strong>Dividend Growth:</strong> 35+ years (20/20 pts) ✓ (Then cut)</li>
                            <li><strong>Debt-to-Equity:</strong> 2.8 (0/15 pts) ✗ Excessive</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Warning Signs</p>
                          <ul className="space-y-1">
                            <li><strong>Free Cash Flow:</strong> Declining (0/10 pts) ✗</li>
                            <li><strong>Competitive Moat:</strong> Eroding - Wireless competition (2/10 pts)</li>
                            <li><strong>Revenue Trend:</strong> Flat to declining</li>
                            <li><strong>2022 Result:</strong> Cut dividend 47% ✗✗</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-lg text-red-700 dark:text-red-400">Total Score: 25/100 - POOR (Classic Dividend Trap)</p>
                        <p className="text-sm mt-1">Verdict: High yield masked serious problems. Payout ratio above 100% guaranteed eventual cut. This is why systematic analysis matters.</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Tools Section */}
                <section id="tools">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-purple-600" />
                    Selection Tools & Calculators
                  </h2>
                  <p>
                    Use these calculators to model dividend stocks and evaluate their long-term potential:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="border-2 border-purple-200 dark:border-purple-800">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Payout Ratio Calculator</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Calculate dividend sustainability by comparing dividends to earnings and free cash flow.
                        </p>
                        <Link href="/calculators/payout-ratio">
                          <Button className="w-full gap-2">
                            <Calculator className="h-4 w-4" />
                            Calculate Payout Ratio
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Dividend Safety Score</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Score any stock using our 7-step framework. Get instant buy/hold/avoid recommendation.
                        </p>
                        <Link href="/calculators/dividend-safety">
                          <Button className="w-full gap-2">
                            <Shield className="h-4 w-4" />
                            Check Safety Score
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-200 dark:border-green-800">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">DRIP Calculator</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Model dividend reinvestment growth over decades. See how compounding builds wealth.
                        </p>
                        <Link href="/calculators/drip">
                          <Button className="w-full gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Model DRIP Growth
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-orange-200 dark:border-orange-800">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Yield on Cost Tracker</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          Track how dividend growth increases your effective yield over time vs original cost.
                        </p>
                        <Link href="/calculators/yield-on-cost">
                          <Button className="w-full gap-2">
                            <Percent className="h-4 w-4" />
                            Track Yield on Cost
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Action Plan */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Your Action Plan: Start Picking Stocks Today</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0">1</div>
                          <p className="text-blue-100">Screen for stocks with 3-6% yields using your broker's screener or free tools like Finviz</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                          <p className="text-blue-100">Check payout ratios on financial sites (Yahoo Finance, Seeking Alpha, Morningstar)</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                          <p className="text-blue-100">Verify 10+ year dividend growth history and recession performance</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0">4</div>
                          <p className="text-blue-100">Calculate your safety score using our framework (aim for 60+ points)</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0">5</div>
                          <p className="text-blue-100">Start small with 1-2 high-scoring stocks, then diversify to 15-20 positions over time</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-safety">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Shield className="h-5 w-5" />
                            Safety Score Tool
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Stock Investing</h2>
                  <p>
                    Ready to start buying dividend stocks? Choose a broker that supports dividend reinvestment (DRIP),
                    offers commission-free trades, and provides quality research tools:
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. ETFs: Which Strategy Wins?
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026
                    </Link>
                    <Link href="/blog/payout-ratio-explained" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Payout Ratio Explained: Complete Guide
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
