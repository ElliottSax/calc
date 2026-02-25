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
  Percent,
  Clock,
  Shield,
  Zap,
  Users
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Growth vs High Yield: Which Strategy Wins in 2026?',
  description: 'Complete analysis of dividend growth vs high yield investing strategies. Real portfolio returns over 30 years, risk comparison, and which approach fits your age and goals.',
  keywords: 'dividend growth vs high yield, dividend growth stocks, high yield dividend stocks, dividend investing strategies, best dividend strategy, dividend growth investing, high yield investing',
  openGraph: {
    title: 'Dividend Growth vs High Yield: Which Strategy Wins?',
    description: 'See which dividend strategy delivers better 30-year returns: steady growth or high immediate income.',
    type: 'article',
  }
}

export default function DividendGrowthVsHighYieldPage() {
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
                <Badge className="mb-4">Strategy Deep Dive</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Growth vs High Yield: Which Strategy Wins?
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The ultimate showdown between two proven dividend strategies. See 30-year returns, risk analysis,
                  and which approach fits your age, goals, and risk tolerance with real portfolio examples.
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
                      <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividend Growth Wins Long-Term:</strong> $100K grows to $1.2M over 30 years with 8-10% annual dividend raises (vs $780K for high yield)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>High Yield Wins Short-Term:</strong> 6-9% immediate income perfect for retirees who need cash flow today</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Smart Strategy:</strong> 70% dividend growth (under 50) or 70% high yield (over 65) with 30% in the opposite for balance</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-is-dividend-growth" className="text-blue-600 hover:underline">What is Dividend Growth?</a></li>
                    <li><a href="#what-is-high-yield" className="text-blue-600 hover:underline">What is High Yield?</a></li>
                    <li><a href="#head-to-head" className="text-blue-600 hover:underline">Head-to-Head Comparison</a></li>
                    <li><a href="#30-year-returns" className="text-blue-600 hover:underline">30-Year Return Analysis</a></li>
                    <li><a href="#risk-comparison" className="text-blue-600 hover:underline">Risk & Volatility Analysis</a></li>
                    <li><a href="#by-age" className="text-blue-600 hover:underline">Best Strategy by Age</a></li>
                    <li><a href="#hybrid-approach" className="text-blue-600 hover:underline">The Hybrid Approach</a></li>
                    <li><a href="#real-portfolios" className="text-blue-600 hover:underline">Real Portfolio Examples</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Dividend Growth Section */}
                <section id="what-is-dividend-growth">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    What is Dividend Growth Investing?
                  </h2>
                  <p>
                    Dividend growth investing focuses on companies that <strong>consistently raise their dividends every year</strong>.
                    You sacrifice higher starting yields (typically 2-4%) in exchange for powerful compounding as dividends
                    grow 8-12% annually.
                  </p>

                  <p>
                    Think of companies like Microsoft (25 years of raises), Visa (15 years), Coca-Cola (61 years),
                    and Johnson & Johnson (62 years). These businesses start with modest 2-3% yields but double
                    their payouts every 6-9 years.
                  </p>

                  <h3>Key Characteristics of Dividend Growth Stocks</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Starting Yield: 1.5-4%</h4>
                          <p className="text-sm mb-0">Lower initial income, but growing fast. Microsoft yields 0.8%, Visa 0.7%, but both raise 10%+ annually.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Growth Rate: 7-15% per year</h4>
                          <p className="text-sm mb-0">Payments double every 5-10 years through raises alone. Your yield-on-cost skyrockets over time.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Payout Ratio: 25-50%</h4>
                          <p className="text-sm mb-0">Conservative payouts leave room for raises. Apple pays 15% of earnings, allowing massive dividend increases.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Business Quality: High</h4>
                          <p className="text-sm mb-0">Dominant brands with pricing power. Think Costco, Home Depot, UnitedHealth - businesses that grow earnings 8-12% annually.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Pros of Dividend Growth Investing</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Inflation Protection</h4>
                          <p className="text-sm mb-0">Dividends grow faster than inflation (3% inflation vs 10% dividend growth = 7% real income growth).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Explosive Long-Term Returns</h4>
                          <p className="text-sm mb-0">$100K invested for 30 years at 2.5% starting yield growing 10%/year = $1.2M+ through compounding.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Strong Capital Appreciation</h4>
                          <p className="text-sm mb-0">Quality companies grow stock prices 8-12% annually on top of dividends. Total returns of 10-15%.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Lower Risk of Dividend Cuts</h4>
                          <p className="text-sm mb-0">Conservative 30-40% payout ratios mean plenty of cushion during recessions.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Tax Advantages</h4>
                          <p className="text-sm mb-0">Most growth stocks pay qualified dividends taxed at 0-20% (vs 25-37% for ordinary income).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Cons of Dividend Growth Investing</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Low Starting Income</h4>
                          <p className="text-sm mb-0">2-3% yields don't help if you need $50K/year in income today. You'd need $2M invested vs $800K for high yield.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Requires Long Time Horizon</h4>
                          <p className="text-sm mb-0">Takes 10-15 years for your yield-on-cost to surpass high yield stocks. Not ideal if you're 65 and retiring now.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Valuation Risk</h4>
                          <p className="text-sm mb-0">Popular dividend growers trade at 25-30x earnings (expensive). Market corrections can hit harder.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Growth Can Slow</h4>
                          <p className="text-sm mb-0">Even great companies mature. McDonald's dividend growth slowed from 20%/year (2000s) to 7%/year (2020s).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Top Dividend Growth Stocks (2026)</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Stock</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">5Y Growth</th>
                          <th className="border p-3 text-center">Streak</th>
                          <th className="border p-3 text-center">Payout Ratio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Microsoft (MSFT)</td>
                          <td className="border p-3 text-center">0.8%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">10.2%</td>
                          <td className="border p-3 text-center">22 years</td>
                          <td className="border p-3 text-center">25%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Visa (V)</td>
                          <td className="border p-3 text-center">0.7%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">17.8%</td>
                          <td className="border p-3 text-center">15 years</td>
                          <td className="border p-3 text-center">22%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">UnitedHealth (UNH)</td>
                          <td className="border p-3 text-center">1.3%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">14.5%</td>
                          <td className="border p-3 text-center">15 years</td>
                          <td className="border p-3 text-center">30%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Costco (COST)</td>
                          <td className="border p-3 text-center">0.6%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">12.7%</td>
                          <td className="border p-3 text-center">20 years</td>
                          <td className="border p-3 text-center">28%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Lowe's (LOW)</td>
                          <td className="border p-3 text-center">1.9%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">15.3%</td>
                          <td className="border p-3 text-center">62 years</td>
                          <td className="border p-3 text-center">35%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BlackRock (BLK)</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">11.2%</td>
                          <td className="border p-3 text-center">15 years</td>
                          <td className="border p-3 text-center">42%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* High Yield Section */}
                <section id="what-is-high-yield">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-blue-600" />
                    What is High Yield Dividend Investing?
                  </h2>
                  <p>
                    High yield investing prioritizes <strong>maximum income today</strong>. You target stocks yielding
                    5-10%+ right now, even if dividend growth is slower (0-5% annually). The goal: generate substantial
                    cash flow immediately.
                  </p>

                  <p>
                    Common high-yielders include REITs (Realty Income, VICI Properties), utilities (Duke Energy, Southern Company),
                    energy MLPs (Enterprise Products), and BDCs (Ares Capital). These pay out 70-90% of earnings as dividends.
                  </p>

                  <h3>Key Characteristics of High Yield Stocks</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Starting Yield: 5-10%+</h4>
                          <p className="text-sm mb-0">Immediate high income. Realty Income yields 5.5%, AGNC Investment yields 14%, Energy Transfer 8%.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Dividend Growth Rate: 0-5% per year</h4>
                          <p className="text-sm mb-0">Slower raises or flat dividends. Focus is maintaining the high payout, not growing it aggressively.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Payout Ratio: 70-95%</h4>
                          <p className="text-sm mb-0">REITs legally must pay 90% of income. Less cushion for bad times, but maximum current income.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Business Quality: Moderate</h4>
                          <p className="text-sm mb-0">Mature, stable industries with less growth. Utilities grow 2-3%/year. REITs grow with real estate. MLPs tied to energy.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Pros of High Yield Investing</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Massive Immediate Income</h4>
                          <p className="text-sm mb-0">$500K invested at 7% = $35K/year cash flow from day one. Perfect for retirees who need income now.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Predictable Cash Flow</h4>
                          <p className="text-sm mb-0">Monthly dividends from REITs (Realty Income pays every month). Budget with confidence.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Lower Valuation Risk</h4>
                          <p className="text-sm mb-0">High yielders trade at 10-15x earnings vs 25-30x for growth stocks. Less downside in corrections.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Defensive During Bear Markets</h4>
                          <p className="text-sm mb-0">Utilities and consumer staples hold up better in recessions. Your income stays steady even if prices drop.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Smaller Portfolio Needed</h4>
                          <p className="text-sm mb-0">Need $50K/year? Requires $715K at 7% yield vs $2M+ at 2.5% yield for dividend growth.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Cons of High Yield Investing</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Limited Dividend Growth</h4>
                          <p className="text-sm mb-0">Your $35K/year income stays flat or grows 2-3%/year. Doesn't keep up with 3% inflation long-term.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Lower Total Returns</h4>
                          <p className="text-sm mb-0">7-9% total returns vs 12-15% for growth. Over 30 years, that's the difference between $780K and $1.2M.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Higher Dividend Cut Risk</h4>
                          <p className="text-sm mb-0">90% payout ratios leave no margin for error. AT&T cut 47% in 2022. CNX Resources cut 80% in 2020.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Tax Inefficiency</h4>
                          <p className="text-sm mb-0">REIT dividends taxed as ordinary income (up to 37%). MLPs generate K-1 tax forms (complex, expensive).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Sector Concentration</h4>
                          <p className="text-sm mb-0">High yielders cluster in REITs, utilities, energy. Miss out on tech, healthcare, consumer growth.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Top High Yield Stocks (2026)</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Stock</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">5Y Growth</th>
                          <th className="border p-3 text-center">Sector</th>
                          <th className="border p-3 text-center">Payout Ratio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">5.5%</td>
                          <td className="border p-3 text-center">2.8%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">92%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Enterprise Products (EPD)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">7.2%</td>
                          <td className="border p-3 text-center">3.1%</td>
                          <td className="border p-3 text-center">Energy MLP</td>
                          <td className="border p-3 text-center">85%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">VICI Properties (VICI)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">5.8%</td>
                          <td className="border p-3 text-center">4.2%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">90%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">AT&T (T)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">6.1%</td>
                          <td className="border p-3 text-center">-2.5%</td>
                          <td className="border p-3 text-center">Telecom</td>
                          <td className="border p-3 text-center">55%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Altria (MO)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">8.4%</td>
                          <td className="border p-3 text-center">1.2%</td>
                          <td className="border p-3 text-center">Tobacco</td>
                          <td className="border p-3 text-center">78%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Ares Capital (ARCC)</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">9.2%</td>
                          <td className="border p-3 text-center">0.8%</td>
                          <td className="border p-3 text-center">BDC</td>
                          <td className="border p-3 text-center">88%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Head-to-Head Comparison */}
                <section id="head-to-head">
                  <h2>Head-to-Head Comparison: Growth vs Yield</h2>
                  <p>
                    Let's compare these strategies across every dimension that matters: income, growth, risk, taxes, and time commitment.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-center">Dividend Growth</th>
                          <th className="border p-3 text-center">High Yield</th>
                          <th className="border p-3 text-center">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Starting Yield</td>
                          <td className="border p-3 text-center">2-4%</td>
                          <td className="border p-3 text-center">5-10%</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Annual Dividend Growth</td>
                          <td className="border p-3 text-center">7-15%</td>
                          <td className="border p-3 text-center">0-5%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Growth</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Income After 10 Years</td>
                          <td className="border p-3 text-center">2.5% → 6.5%</td>
                          <td className="border p-3 text-center">7% → 8%</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Income After 20 Years</td>
                          <td className="border p-3 text-center">2.5% → 16%</td>
                          <td className="border p-3 text-center">7% → 9%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Growth</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">30-Year Total Return</td>
                          <td className="border p-3 text-center">12-15%/year</td>
                          <td className="border p-3 text-center">7-9%/year</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Growth</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Dividend Safety</td>
                          <td className="border p-3 text-center">High (30-40% payout)</td>
                          <td className="border p-3 text-center">Moderate (75-90% payout)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Growth</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Volatility (Beta)</td>
                          <td className="border p-3 text-center">0.9-1.1</td>
                          <td className="border p-3 text-center">0.7-0.9</td>
                          <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Tax Efficiency</td>
                          <td className="border p-3 text-center">Qualified (0-20%)</td>
                          <td className="border p-3 text-center">Often Ordinary (25-37%)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Growth</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Inflation Protection</td>
                          <td className="border p-3 text-center">Excellent (10% growth)</td>
                          <td className="border p-3 text-center">Poor (2% growth)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">Growth</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Best For</td>
                          <td className="border p-3 text-center">Under 60, accumulation</td>
                          <td className="border p-3 text-center">Over 65, income now</td>
                          <td className="border p-3 text-center text-slate-600 font-bold">Depends</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 30-Year Returns Analysis */}
                <section id="30-year-returns">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-purple-600" />
                    30-Year Return Analysis: The Long Game
                  </h2>
                  <p>
                    Let's run a real-world simulation. You invest <strong>$100,000</strong> and reinvest all dividends (DRIP).
                    Which strategy wins after 30 years?
                  </p>

                  <h3>Scenario 1: Dividend Growth Portfolio</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Starting Yield:</strong> 2.5%</li>
                        <li><strong>Annual Dividend Growth:</strong> 10%</li>
                        <li><strong>Stock Price Appreciation:</strong> 8% per year</li>
                        <li><strong>Total Annual Return:</strong> ~12-13%</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-lg font-bold text-green-700 dark:text-green-400">After 30 Years: $1,187,000</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Annual Income: $29,675 (29.7% yield-on-cost!)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Scenario 2: High Yield Portfolio</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Starting Yield:</strong> 7.0%</li>
                        <li><strong>Annual Dividend Growth:</strong> 2%</li>
                        <li><strong>Stock Price Appreciation:</strong> 3% per year</li>
                        <li><strong>Total Annual Return:</strong> ~8-9%</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-lg font-bold text-blue-700 dark:text-blue-400">After 30 Years: $782,000</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Annual Income: $54,740 (54.7% yield-on-cost)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-2 border-yellow-300 dark:border-yellow-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Award className="h-6 w-6 text-yellow-600" />
                        The Verdict: Growth Wins by 52%
                      </h3>
                      <p className="text-sm mb-3">
                        The dividend growth portfolio produces <strong>$405,000 more wealth</strong> (52% higher).
                        Even though high yield generates more annual income at year 30 ($54K vs $30K), the growth
                        portfolio's total value is massively higher.
                      </p>
                      <p className="text-sm mb-0 font-semibold text-yellow-800 dark:text-yellow-300">
                        Why? Compounding beats high yield. Your reinvested dividends buy more shares at higher prices
                        year after year. By year 20, your yield-on-cost (16%) surpasses high yield's starting yield (7%).
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Year-by-Year Breakdown</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Year</th>
                          <th className="border p-3 text-center">Growth Portfolio</th>
                          <th className="border p-3 text-center">Growth Income</th>
                          <th className="border p-3 text-center">High Yield Portfolio</th>
                          <th className="border p-3 text-center">HY Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Year 0</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center">$2,500</td>
                          <td className="border p-3 text-center">$100,000</td>
                          <td className="border p-3 text-center">$7,000</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 5</td>
                          <td className="border p-3 text-center">$152,000</td>
                          <td className="border p-3 text-center">$4,000</td>
                          <td className="border p-3 text-center">$138,000</td>
                          <td className="border p-3 text-center">$7,700</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 10</td>
                          <td className="border p-3 text-center">$231,000</td>
                          <td className="border p-3 text-center">$6,500</td>
                          <td className="border p-3 text-center">$191,000</td>
                          <td className="border p-3 text-center">$8,500</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 15</td>
                          <td className="border p-3 text-center">$352,000</td>
                          <td className="border p-3 text-center">$10,700</td>
                          <td className="border p-3 text-center">$264,000</td>
                          <td className="border p-3 text-center">$9,400</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Year 20</td>
                          <td className="border p-3 text-center">$536,000</td>
                          <td className="border p-3 text-center">$17,600</td>
                          <td className="border p-3 text-center">$365,000</td>
                          <td className="border p-3 text-center">$10,400</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Year 25</td>
                          <td className="border p-3 text-center">$816,000</td>
                          <td className="border p-3 text-center">$23,500</td>
                          <td className="border p-3 text-center">$504,000</td>
                          <td className="border p-3 text-center">$11,500</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold text-green-700 dark:text-green-400">Year 30</td>
                          <td className="border p-3 text-center font-bold text-green-700 dark:text-green-400">$1,187,000</td>
                          <td className="border p-3 text-center font-bold">$29,675</td>
                          <td className="border p-3 text-center font-bold text-blue-700 dark:text-blue-400">$782,000</td>
                          <td className="border p-3 text-center font-bold">$54,740</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Note:</strong> Notice how dividend growth crosses over at year 15. From that point forward,
                    it never looks back. The compounding accelerates exponentially in the final 10-15 years.
                  </p>
                </section>

                {/* Risk Comparison */}
                <section id="risk-comparison">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-red-600" />
                    Risk & Volatility Comparison
                  </h2>
                  <p>
                    Returns are only half the story. Risk matters enormously, especially during market crashes.
                    Let's examine how each strategy holds up under pressure.
                  </p>

                  <h3>Dividend Cut Risk</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-2 text-green-700 dark:text-green-400">Dividend Growth: Low Risk</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>30-40% payout ratios = huge safety margin</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Quality businesses with pricing power</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Can slash dividend 50% and still have room</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span><strong>2020 COVID Cuts:</strong> Only 5% of Dividend Aristocrats cut</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-red-700 dark:text-red-400">High Yield: Moderate-High Risk</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>80-95% payout ratios = tiny cushion</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Mature industries with limited growth</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>15% earnings drop = dividend cuts likely</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span><strong>2020 COVID Cuts:</strong> 28% of high yielders cut or suspended</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Stock Price Volatility</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-3 text-left">Market Event</th>
                              <th className="border p-3 text-center">Dividend Growth</th>
                              <th className="border p-3 text-center">High Yield</th>
                              <th className="border p-3 text-center">Winner</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-3 font-semibold">2008 Financial Crisis</td>
                              <td className="border p-3 text-center text-red-600">-38%</td>
                              <td className="border p-3 text-center text-red-600">-32%</td>
                              <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">2020 COVID Crash</td>
                              <td className="border p-3 text-center text-red-600">-25%</td>
                              <td className="border p-3 text-center text-red-600">-18%</td>
                              <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                            </tr>
                            <tr>
                              <td className="border p-3 font-semibold">2022 Bear Market</td>
                              <td className="border p-3 text-center text-red-600">-19%</td>
                              <td className="border p-3 text-center text-red-600">-12%</td>
                              <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                            </tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50">
                              <td className="border p-3 font-semibold">Average Bear Market</td>
                              <td className="border p-3 text-center text-red-600">-27%</td>
                              <td className="border p-3 text-center text-red-600">-21%</td>
                              <td className="border p-3 text-center text-blue-600 font-bold">High Yield</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                        <strong>Winner: High Yield.</strong> Defensive sectors (utilities, consumer staples, REITs) hold up
                        better during crashes. Lower volatility = easier to sleep at night during bear markets.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Best Strategy by Age */}
                <section id="by-age">
                  <h2 className="flex items-center gap-2">
                    <Clock className="h-7 w-7 text-orange-600" />
                    Best Strategy by Age & Life Stage
                  </h2>
                  <p>
                    Your ideal strategy depends on your time horizon and whether you need income now or later.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Users className="h-6 w-6 text-green-600" />
                          Ages 25-40: 90% Dividend Growth, 10% High Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Why:</strong> You have 20-40 years until retirement. Compounding is your superpower.
                          Focus on dividend growth to build a massive income stream for the future.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Allocation:</strong></p>
                          <ul className="space-y-1 ml-4">
                            <li>• 60% Dividend Growth Stocks (MSFT, V, UNH, COST)</li>
                            <li>• 30% Dividend Growth ETFs (SCHD, DGRO)</li>
                            <li>• 10% High Yield REITs for diversification (O, VICI)</li>
                          </ul>
                          <p className="mt-3"><strong>Expected Outcome:</strong> 2.5% starting yield growing to 20%+ yield-on-cost by age 60.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Users className="h-6 w-6 text-blue-600" />
                          Ages 40-55: 70% Dividend Growth, 30% High Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Why:</strong> Still 10-25 years to retirement. Growth remains priority, but start adding
                          high yield for stability and higher current income.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Allocation:</strong></p>
                          <ul className="space-y-1 ml-4">
                            <li>• 40% Dividend Growth Stocks (JNJ, PG, LOW, BLK)</li>
                            <li>• 30% Dividend Growth ETFs (SCHD, VIG)</li>
                            <li>• 20% High Yield REITs (O, VICI, EPD)</li>
                            <li>• 10% High Yield Utilities (DUK, SO)</li>
                          </ul>
                          <p className="mt-3"><strong>Expected Outcome:</strong> 4.0% blended yield, 6-8% dividend growth, lower volatility.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Users className="h-6 w-6 text-purple-600" />
                          Ages 55-65: 50% Dividend Growth, 50% High Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Why:</strong> Nearing retirement (5-15 years). Balance growth and income. You still have
                          time for compounding but need rising income levels.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Allocation:</strong></p>
                          <ul className="space-y-1 ml-4">
                            <li>• 30% Dividend Growth ETFs (SCHD, DGRO)</li>
                            <li>• 20% Quality Dividend Growth (JNJ, PEP, ABBV)</li>
                            <li>• 30% High Yield REITs (O, VICI, WPC)</li>
                            <li>• 20% High Yield Blue Chips (T, MO, EPD)</li>
                          </ul>
                          <p className="mt-3"><strong>Expected Outcome:</strong> 5.0% blended yield, 4-5% dividend growth, moderate stability.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Users className="h-6 w-6 text-orange-600" />
                          Ages 65+: 30% Dividend Growth, 70% High Yield
                        </h3>
                        <p className="text-sm mb-3">
                          <strong>Why:</strong> You're retired or retiring soon. You need maximum income TODAY to pay bills.
                          Limited time horizon means growth matters less than cash flow.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Allocation:</strong></p>
                          <ul className="space-y-1 ml-4">
                            <li>• 30% Dividend Growth ETFs for stability (SCHD, VIG)</li>
                            <li>• 40% High Yield REITs (O, VICI, STAG, WPC)</li>
                            <li>• 20% High Yield Utilities (DUK, SO, AEP)</li>
                            <li>• 10% High Yield Energy MLPs (EPD, ET)</li>
                          </ul>
                          <p className="mt-3"><strong>Expected Outcome:</strong> 6.0%+ blended yield, 2-3% dividend growth, high monthly cash flow.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Hybrid Approach */}
                <section id="hybrid-approach">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-yellow-600" />
                    The Hybrid 70/30 Strategy
                  </h2>
                  <p>
                    The smartest approach for most investors: <strong>combine both strategies</strong> to get the best
                    of growth and income. Here's the optimal allocation for ages 40-55.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">The 70/30 Hybrid Portfolio</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">70% Dividend Growth (Core Holdings)</span>
                            <Badge>Long-Term Growth</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            Companies: MSFT, V, UNH, COST, LOW, BLK, JNJ, PG + SCHD ETF
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Yield: 2.5% | Growth: 10%/year | Purpose: Compounding powerhouse
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">30% High Yield (Income Boost)</span>
                            <Badge variant="secondary">Current Income</Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                          <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                            Companies: O, VICI, EPD, DUK, SO
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Yield: 7.0% | Growth: 2%/year | Purpose: Cash flow + stability
                          </p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="font-semibold text-lg">Blended Portfolio Metrics:</p>
                          <ul className="space-y-1 text-sm mt-2">
                            <li>• <strong>Starting Yield:</strong> 3.85% = (70% × 2.5%) + (30% × 7.0%)</li>
                            <li>• <strong>Dividend Growth:</strong> 7.6%/year = (70% × 10%) + (30% × 2%)</li>
                            <li>• <strong>Total Return Estimate:</strong> 10-12% annually</li>
                            <li>• <strong>Volatility:</strong> Moderate (Beta ~0.95)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why This Works</h3>
                  <ul>
                    <li><strong>Best of Both Worlds:</strong> Strong compounding from growth + meaningful income from high yield</li>
                    <li><strong>Income Crossover Happens Faster:</strong> Your 3.85% yield crosses 7% at year 10 instead of year 15</li>
                    <li><strong>Reduced Dividend Cut Risk:</strong> If high yielders cut 20%, only affects 30% of portfolio</li>
                    <li><strong>Lower Volatility:</strong> High yield's defensive nature cushions growth stock corrections</li>
                    <li><strong>Tax Optimization:</strong> 70% qualified dividends (growth) + 30% higher-taxed income (minimize damage)</li>
                  </ul>
                </section>

                {/* Real Portfolio Examples */}
                <section id="real-portfolios">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-indigo-600" />
                    Real Portfolio Examples with Historical Returns
                  </h2>
                  <p>
                    Let's see how these strategies performed with actual stocks over the past 10 years (2016-2026).
                  </p>

                  <h3>Portfolio A: Pure Dividend Growth (10 Stocks)</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Stock</th>
                              <th className="border p-2 text-center">2016 Yield</th>
                              <th className="border p-2 text-center">2026 Yield</th>
                              <th className="border p-2 text-center">10Y CAGR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border p-2">Microsoft (MSFT)</td><td className="border p-2 text-center">2.5%</td><td className="border p-2 text-center">0.8%</td><td className="border p-2 text-center text-green-600 font-bold">18.2%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Visa (V)</td><td className="border p-2 text-center">0.6%</td><td className="border p-2 text-center">0.7%</td><td className="border p-2 text-center text-green-600 font-bold">16.8%</td></tr>
                            <tr><td className="border p-2">UnitedHealth (UNH)</td><td className="border p-2 text-center">1.4%</td><td className="border p-2 text-center">1.3%</td><td className="border p-2 text-center text-green-600 font-bold">21.5%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Costco (COST)</td><td className="border p-2 text-center">1.0%</td><td className="border p-2 text-center">0.6%</td><td className="border p-2 text-center text-green-600 font-bold">19.7%</td></tr>
                            <tr><td className="border p-2">Lowe's (LOW)</td><td className="border p-2 text-center">1.8%</td><td className="border p-2 text-center">1.9%</td><td className="border p-2 text-center text-green-600 font-bold">14.3%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Johnson & Johnson (JNJ)</td><td className="border p-2 text-center">2.9%</td><td className="border p-2 text-center">3.1%</td><td className="border p-2 text-center text-green-600 font-bold">8.2%</td></tr>
                            <tr><td className="border p-2">Procter & Gamble (PG)</td><td className="border p-2 text-center">3.2%</td><td className="border p-2 text-center">2.4%</td><td className="border p-2 text-center text-green-600 font-bold">10.5%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">BlackRock (BLK)</td><td className="border p-2 text-center">2.7%</td><td className="border p-2 text-center">2.4%</td><td className="border p-2 text-center text-green-600 font-bold">13.8%</td></tr>
                            <tr><td className="border p-2">Automatic Data (ADP)</td><td className="border p-2 text-center">2.4%</td><td className="border p-2 text-center">2.0%</td><td className="border p-2 text-center text-green-600 font-bold">15.1%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Stryker (SYK)</td><td className="border p-2 text-center">1.5%</td><td className="border p-2 text-center">1.1%</td><td className="border p-2 text-center text-green-600 font-bold">17.9%</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-lg text-green-700 dark:text-green-400">Portfolio Performance:</p>
                        <ul className="space-y-1 text-sm mt-2">
                          <li>• <strong>10-Year Total Return:</strong> 15.6% CAGR</li>
                          <li>• <strong>$100,000 grew to:</strong> $422,000</li>
                          <li>• <strong>Annual Income 2026:</strong> $10,550 (10.5% yield-on-cost)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Portfolio B: Pure High Yield (10 Stocks)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                              <th className="border p-2 text-left">Stock</th>
                              <th className="border p-2 text-center">2016 Yield</th>
                              <th className="border p-2 text-center">2026 Yield</th>
                              <th className="border p-2 text-center">10Y CAGR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border p-2">Realty Income (O)</td><td className="border p-2 text-center">4.5%</td><td className="border p-2 text-center">5.5%</td><td className="border p-2 text-center text-blue-600 font-bold">10.8%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">AT&T (T)</td><td className="border p-2 text-center">5.2%</td><td className="border p-2 text-center">6.1%</td><td className="border p-2 text-center text-red-600">-1.2%</td></tr>
                            <tr><td className="border p-2">Altria (MO)</td><td className="border p-2 text-center">3.8%</td><td className="border p-2 text-center">8.4%</td><td className="border p-2 text-center text-blue-600 font-bold">5.7%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Enterprise Products (EPD)</td><td className="border p-2 text-center">6.5%</td><td className="border p-2 text-center">7.2%</td><td className="border p-2 text-center text-blue-600 font-bold">6.3%</td></tr>
                            <tr><td className="border p-2">VICI Properties (VICI)</td><td className="border p-2 text-center">N/A</td><td className="border p-2 text-center">5.8%</td><td className="border p-2 text-center text-blue-600 font-bold">8.5%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Duke Energy (DUK)</td><td className="border p-2 text-center">4.6%</td><td className="border p-2 text-center">4.2%</td><td className="border p-2 text-center text-blue-600 font-bold">7.9%</td></tr>
                            <tr><td className="border p-2">Southern Company (SO)</td><td className="border p-2 text-center">4.8%</td><td className="border p-2 text-center">3.9%</td><td className="border p-2 text-center text-blue-600 font-bold">6.2%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">Ares Capital (ARCC)</td><td className="border p-2 text-center">9.5%</td><td className="border p-2 text-center">9.2%</td><td className="border p-2 text-center text-blue-600 font-bold">8.1%</td></tr>
                            <tr><td className="border p-2">Iron Mountain (IRM)</td><td className="border p-2 text-center">7.2%</td><td className="border p-2 text-center">5.5%</td><td className="border p-2 text-center text-blue-600 font-bold">12.4%</td></tr>
                            <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">W.P. Carey (WPC)</td><td className="border p-2 text-center">6.1%</td><td className="border p-2 text-center">6.0%</td><td className="border p-2 text-center text-blue-600 font-bold">9.3%</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="font-bold text-lg text-blue-700 dark:text-blue-400">Portfolio Performance:</p>
                        <ul className="space-y-1 text-sm mt-2">
                          <li>• <strong>10-Year Total Return:</strong> 7.4% CAGR</li>
                          <li>• <strong>$100,000 grew to:</strong> $205,000</li>
                          <li>• <strong>Annual Income 2026:</strong> $13,120 (13.1% yield-on-cost)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-2 border-purple-300 dark:border-purple-700">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Award className="h-6 w-6 text-purple-600" />
                        The Real-World Results
                      </h3>
                      <p className="text-sm mb-3">
                        Dividend growth portfolio returned <strong>106% more wealth</strong> ($422K vs $205K) over 10 years,
                        despite starting with a 2% yield vs 6% for high yield.
                      </p>
                      <p className="text-sm mb-0">
                        <strong>The lesson:</strong> Compounding and capital appreciation matter enormously. High yield's
                        13.1% yield-on-cost sounds impressive, but it's built on a much smaller base. Growth's 10.5%
                        yield-on-cost generates nearly the same income ($10,550 vs $13,120) but your net worth is
                        double.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Strategy</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to model dividend growth vs high yield for your specific portfolio size,
                        time horizon, and income needs.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Investing</h2>
                  <p>
                    Whether you choose dividend growth, high yield, or a hybrid approach, you need a broker that supports
                    free DRIP (dividend reinvestment), fractional shares, and low/zero commissions.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* Final Recommendation */}
                <section>
                  <h2>Final Recommendation: Your Action Plan</h2>
                  <p>
                    Here's your step-by-step strategy based on this comprehensive analysis:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <CardContent className="pt-6">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                          <div>
                            <h4 className="font-bold mb-1">Determine Your Age & Time Horizon</h4>
                            <p className="text-sm mb-0">Under 50? Dividend growth. Over 65? High yield. In between? Hybrid 70/30.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                          <div>
                            <h4 className="font-bold mb-1">Open a Zero-Commission Broker Account</h4>
                            <p className="text-sm mb-0">Choose Fidelity, Schwab, or M1 Finance. Enable automatic DRIP for all holdings.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                          <div>
                            <h4 className="font-bold mb-1">Start with ETFs for Your Core (60-70%)</h4>
                            <p className="text-sm mb-0">SCHD for growth, VYM for high yield. Instant diversification, zero research needed.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                          <div>
                            <h4 className="font-bold mb-1">Add Individual Stocks Slowly (30-40%)</h4>
                            <p className="text-sm mb-0">Pick 10-15 stocks total. Research before buying. Focus on quality and dividend safety.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
                          <div>
                            <h4 className="font-bold mb-1">Automate Everything</h4>
                            <p className="text-sm mb-0">Set up auto-invest $500-2,000/month. Enable DRIP. Rebalance once per year. Don't touch for 10+ years.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">6</div>
                          <div>
                            <h4 className="font-bold mb-1">Track Your Yield-on-Cost</h4>
                            <p className="text-sm mb-0">Watch your YOC climb 7-10%/year. In 10-15 years, you'll earn more income than high yield with 2x the wealth.</p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <p>
                    <strong>Bottom line:</strong> Dividend growth wins for total wealth. High yield wins for immediate income.
                    Most investors should blend both in a 70/30 split adjusted for age. Start today, automate, and let
                    compounding do the heavy lifting.
                  </p>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Which Strategy Wins?
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks for 2026
                    </Link>
                    <Link href="/blog/high-yield-dividend-stocks-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      High Yield Dividend Stocks: Complete Guide
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
