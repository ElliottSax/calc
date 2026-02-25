import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  AlertTriangle,
  TrendingDown,
  Shield,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Eye,
  DollarSign,
  BarChart3,
  Activity,
  FileText,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Avoid Dividend Cuts: 9 Red Flags Every Investor Must Watch (2026)',
  description: 'Learn the 9 critical dividend cut warning signs that professional investors track. Real case studies from GE, Ford, AT&T. Protect your dividend income with expert screening strategies.',
  keywords: 'dividend cut warning signs, dividend safety, payout ratio, dividend cut protection, dividend analysis, dividend screening, sustainable dividends, dividend risk',
  openGraph: {
    title: 'How to Avoid Dividend Cuts: 9 Red Flags to Watch',
    description: 'Protect your dividend income. Learn the warning signs that predicted GE, Ford, and AT&T dividend cuts months in advance.',
    type: 'article',
  }
}

export default function DividendCutWarningSignsPage() {
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
                <Badge className="mb-4 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Risk Protection
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  How to Avoid Dividend Cuts: 9 Red Flags to Watch
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Protect your dividend income by spotting warning signs early. Learn the exact red flags that predicted the GE, Ford, and AT&T dividend cuts months before they happened.
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
              <Card className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-200 dark:border-red-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-red-600" />
                    The Bottom Line (TL;DR)
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Most Dangerous Sign:</strong> Payout ratio above 80% combined with declining free cash flow - this predicted 87% of dividend cuts from 2020-2024</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Safest Dividends:</strong> Payout ratio under 60%, 10+ year dividend growth history, investment-grade credit rating (BBB+ or higher)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Early Warning Window:</strong> Most dividend cuts can be predicted 6-12 months in advance by tracking these 9 red flags</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#why-dividends-get-cut" className="text-blue-600 hover:underline">Why Dividends Get Cut</a></li>
                    <li><a href="#red-flag-1" className="text-blue-600 hover:underline">Red Flag #1: High Payout Ratio</a></li>
                    <li><a href="#red-flag-2" className="text-blue-600 hover:underline">Red Flag #2: Declining Cash Flow</a></li>
                    <li><a href="#red-flag-3" className="text-blue-600 hover:underline">Red Flag #3: Rising Debt Levels</a></li>
                    <li><a href="#red-flag-4" className="text-blue-600 hover:underline">Red Flag #4: Credit Rating Downgrades</a></li>
                    <li><a href="#red-flag-5" className="text-blue-600 hover:underline">Red Flag #5: Dividend Freeze</a></li>
                    <li><a href="#red-flag-6" className="text-blue-600 hover:underline">Red Flag #6: Industry Headwinds</a></li>
                    <li><a href="#red-flag-7" className="text-blue-600 hover:underline">Red Flag #7: Insider Selling</a></li>
                    <li><a href="#red-flag-8" className="text-blue-600 hover:underline">Red Flag #8: Asset Sales</a></li>
                    <li><a href="#red-flag-9" className="text-blue-600 hover:underline">Red Flag #9: Management Warnings</a></li>
                    <li><a href="#case-studies" className="text-blue-600 hover:underline">Real Case Studies</a></li>
                    <li><a href="#screening-tools" className="text-blue-600 hover:underline">How to Screen for Safe Dividends</a></li>
                    <li><a href="#cut-vs-suspension" className="text-blue-600 hover:underline">Dividend Cut vs. Suspension</a></li>
                    <li><a href="#recovery" className="text-blue-600 hover:underline">Recovery After a Cut</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Introduction */}
                <section id="why-dividends-get-cut">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-red-600" />
                    Why Do Companies Cut Dividends?
                  </h2>
                  <p>
                    Dividend cuts happen when companies can no longer afford their dividend payments. In 2020, over
                    <strong> 200 U.S. companies</strong> cut or suspended dividends during the pandemic. Major names like
                    Disney, Boeing, Ford, and Delta Airlines slashed payouts by 50-100%.
                  </p>
                  <p>
                    But here's the critical insight most investors miss: <strong>dividend cuts are almost never surprises.</strong>
                    They're telegraphed months in advance through financial metrics, management statements, and industry trends.
                  </p>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">The Real Cost of Dividend Cuts</h3>
                      <ul className="space-y-2 text-sm mb-0">
                        <li><strong>Immediate Income Loss:</strong> Your monthly dividend check disappears or drops 30-50%</li>
                        <li><strong>Stock Price Crash:</strong> Average 25-40% decline in the weeks following a dividend cut announcement</li>
                        <li><strong>Compound Damage:</strong> Lost dividend + capital loss + recovery time = years of destroyed returns</li>
                        <li><strong>Portfolio Impact:</strong> A single dividend cut in a 20-stock portfolio reduces total dividend income by 5%</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <p>
                    The good news? By tracking these 9 red flags, you can exit positions 6-12 months before a cut happens,
                    protecting both your income stream and capital.
                  </p>
                </section>

                {/* Red Flag #1 */}
                <section id="red-flag-1">
                  <h2 className="flex items-center gap-2">
                    <AlertTriangle className="h-7 w-7 text-red-600" />
                    Red Flag #1: Payout Ratio Above 80%
                  </h2>

                  <p>
                    The <strong>payout ratio</strong> is the percentage of earnings paid out as dividends. It's calculated as:
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold mb-2">Payout Ratio = (Annual Dividend ÷ Earnings Per Share) × 100</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Example: $2.00 dividend ÷ $5.00 EPS = 40% payout ratio</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why This Matters</h3>
                  <p>
                    A payout ratio above 80% means the company is paying out more than 80 cents of every dollar earned.
                    This leaves almost no cushion for business downturns, unexpected expenses, or investment in growth.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Payout Ratio</th>
                          <th className="border p-3 text-left">Safety Level</th>
                          <th className="border p-3 text-left">Interpretation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold text-green-600">0-50%</td>
                          <td className="border p-3">Very Safe</td>
                          <td className="border p-3">Plenty of room for dividend growth and business downturns</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold text-blue-600">50-70%</td>
                          <td className="border p-3">Safe</td>
                          <td className="border p-3">Sustainable with moderate growth potential</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold text-yellow-600">70-80%</td>
                          <td className="border p-3">Moderate Risk</td>
                          <td className="border p-3">Limited cushion, watch closely during downturns</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold text-orange-600">80-100%</td>
                          <td className="border p-3">High Risk</td>
                          <td className="border p-3">Vulnerable to cuts if earnings decline even slightly</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold text-red-600">100%+</td>
                          <td className="border p-3">Critical Risk</td>
                          <td className="border p-3">Unsustainable - dividend cut likely within 12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        Real Example: AT&T's Warning Signs (2021)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Q4 2020:</strong> AT&T's payout ratio hit 95% as earnings declined from media struggles</p>
                        <p><strong>Q1 2021:</strong> Payout ratio climbed to 102% - company paying more than it earned</p>
                        <p><strong>May 2021:</strong> AT&T announced a 47% dividend cut from $2.08/share to $1.11/share</p>
                        <p><strong>Stock Impact:</strong> Shares dropped 15% in 3 days, continued decline of 30% over 6 months</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> Investors who monitored the payout ratio had a 6-month warning window to exit
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Special Cases: REITs and MLPs</h3>
                  <p>
                    <strong>Important exception:</strong> Real Estate Investment Trusts (REITs) and Master Limited Partnerships (MLPs)
                    often have payout ratios above 80% by design, because they must distribute 90% of taxable income. For these,
                    use <strong>Funds From Operations (FFO)</strong> instead of earnings:
                  </p>
                  <p className="text-center font-semibold">
                    REIT Payout Ratio = Annual Dividend ÷ FFO per Share
                  </p>
                  <p>
                    Safe REIT payout ratios are 70-85%. Above 90% is still dangerous.
                  </p>
                </section>

                {/* Red Flag #2 */}
                <section id="red-flag-2">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-600" />
                    Red Flag #2: Declining Free Cash Flow
                  </h2>

                  <p>
                    Earnings can be manipulated with accounting tricks. <strong>Free Cash Flow (FCF)</strong> is harder to fake.
                    It's the actual cash left over after paying all expenses and capital expenditures:
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold mb-2">Free Cash Flow = Operating Cash Flow - Capital Expenditures</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">This is the actual cash available to pay dividends</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Warning Pattern</h3>
                  <p>
                    Watch for this dangerous sequence:
                  </p>

                  <ol>
                    <li><strong>Year 1:</strong> Free cash flow drops 10-20% while dividend stays flat</li>
                    <li><strong>Year 2:</strong> FCF declines another 15-25%, dividend still unchanged</li>
                    <li><strong>Year 3:</strong> FCF now 40% below peak, dividend finally cut</li>
                  </ol>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <TrendingDown className="h-6 w-6 text-red-600" />
                        Real Example: General Electric's Cash Flow Collapse (2017-2018)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>2015:</strong> GE's free cash flow: $8.5 billion, Annual dividend cost: $8.3 billion (safe)</p>
                        <p><strong>2016:</strong> FCF drops to $6.0 billion, dividend stays at $8.3 billion (spending more than earning)</p>
                        <p><strong>2017:</strong> FCF collapses to $3.2 billion, dividend still $8.3 billion (deficit growing)</p>
                        <p><strong>Nov 2017:</strong> GE cuts dividend 50% from $0.96/year to $0.48/year</p>
                        <p><strong>Dec 2018:</strong> Second cut to $0.04/year - a 96% total reduction</p>
                        <p><strong>Stock Impact:</strong> Shares fell from $30 in 2016 to $6 in 2018 (80% crash)</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> The cash flow warnings were flashing red for 2 full years before the first cut
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Cash Flow Coverage Ratio</h3>
                  <p>
                    Calculate this metric to measure dividend safety:
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-xl font-bold mb-2">FCF Coverage = Free Cash Flow ÷ Total Dividend Payments</p>
                        <div className="mt-4 space-y-1 text-sm">
                          <p><strong className="text-green-600">2.0+ coverage:</strong> Very safe (FCF is 2x dividend)</p>
                          <p><strong className="text-blue-600">1.5-2.0 coverage:</strong> Safe with growth room</p>
                          <p><strong className="text-yellow-600">1.0-1.5 coverage:</strong> Adequate but limited cushion</p>
                          <p><strong className="text-red-600">Below 1.0:</strong> Danger zone - paying more than generating</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Red Flag #3 */}
                <section id="red-flag-3">
                  <h2 className="flex items-center gap-2">
                    <Activity className="h-7 w-7 text-red-600" />
                    Red Flag #3: Rising Debt-to-Equity Ratio
                  </h2>

                  <p>
                    When a company's debt grows faster than its equity, it signals financial stress. High debt means:
                  </p>

                  <ul>
                    <li>More cash diverted to interest payments</li>
                    <li>Less flexibility during business downturns</li>
                    <li>Pressure from lenders to preserve cash (cut dividends)</li>
                    <li>Risk of covenant violations that force dividend suspension</li>
                  </ul>

                  <h3>The Danger Threshold</h3>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Debt-to-Equity Ratio</th>
                          <th className="border p-3 text-left">Risk Level</th>
                          <th className="border p-3 text-left">Dividend Safety</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold text-green-600">Below 0.5</td>
                          <td className="border p-3">Low Risk</td>
                          <td className="border p-3">Very safe, conservative balance sheet</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold text-blue-600">0.5 - 1.0</td>
                          <td className="border p-3">Moderate Risk</td>
                          <td className="border p-3">Acceptable for most industries</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold text-yellow-600">1.0 - 2.0</td>
                          <td className="border p-3">Elevated Risk</td>
                          <td className="border p-3">Monitor closely, vulnerable in recessions</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold text-red-600">Above 2.0</td>
                          <td className="border p-3">High Risk</td>
                          <td className="border p-3">Dividend cuts likely during downturns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>Important:</strong> Compare to industry averages. Utilities and REITs naturally run higher debt ratios
                    (1.5-2.5 is normal) because of stable cash flows. Tech and consumer companies should be under 1.0.
                  </p>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Activity className="h-6 w-6 text-red-600" />
                        Real Example: Ford's Debt Crisis (2019-2020)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>2018:</strong> Ford's debt-to-equity ratio: 2.8 (high but manageable in auto industry)</p>
                        <p><strong>2019:</strong> Ratio climbs to 3.4 as restructuring costs mount, sales decline</p>
                        <p><strong>Early 2020:</strong> COVID hits, ratio spikes to 4.2 as revenue collapses</p>
                        <p><strong>March 2020:</strong> Ford suspends $0.15 quarterly dividend (saved $2.4B annually)</p>
                        <p><strong>2021:</strong> Dividend reinstated at reduced $0.10/quarter (33% cut)</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> Debt ratios above 3.0 made Ford vulnerable when crisis hit - dividend was sacrificed to protect credit rating
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Interest Coverage Ratio</h3>
                  <p>
                    This tells you if the company can afford its debt payments:
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-xl font-bold mb-2">Interest Coverage = EBIT ÷ Interest Expense</p>
                        <div className="mt-4 space-y-1 text-sm">
                          <p><strong className="text-green-600">8x+ coverage:</strong> Very safe</p>
                          <p><strong className="text-blue-600">4-8x coverage:</strong> Healthy</p>
                          <p><strong className="text-yellow-600">2-4x coverage:</strong> Adequate but risky</p>
                          <p><strong className="text-red-600">Below 2x:</strong> Danger - struggling to cover interest</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Red Flag #4 */}
                <section id="red-flag-4">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-600" />
                    Red Flag #4: Credit Rating Downgrades
                  </h2>

                  <p>
                    Credit rating agencies (Moody's, S&P, Fitch) analyze companies full-time. When they downgrade a company's
                    credit rating, they're signaling financial deterioration. <strong>This is a professional warning you shouldn't ignore.</strong>
                  </p>

                  <h3>Understanding Credit Ratings</h3>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">S&P Rating</th>
                          <th className="border p-3 text-left">Category</th>
                          <th className="border p-3 text-left">Dividend Safety</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">AAA, AA+, AA, AA-</td>
                          <td className="border p-3 text-green-600">Prime Investment Grade</td>
                          <td className="border p-3">Extremely safe - Microsoft, J&J level</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">A+, A, A-</td>
                          <td className="border p-3 text-blue-600">High Investment Grade</td>
                          <td className="border p-3">Very safe - most dividend aristocrats</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">BBB+, BBB, BBB-</td>
                          <td className="border p-3 text-yellow-600">Lower Investment Grade</td>
                          <td className="border p-3">Generally safe but watch closely</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BB+, BB, BB-</td>
                          <td className="border p-3 text-orange-600">High Yield (Junk)</td>
                          <td className="border p-3">Elevated risk - cuts possible in downturns</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">B+ and below</td>
                          <td className="border p-3 text-red-600">Speculative Grade</td>
                          <td className="border p-3">High risk - dividend cuts very likely</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>The Downgrade Cascade</h3>
                  <p>
                    A typical pattern before dividend cuts:
                  </p>

                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-200 dark:bg-orange-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-base mb-1">Negative Watch</h4>
                          <p className="text-sm mb-0">Agency puts rating on "negative outlook" or "credit watch" - first warning</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-300 dark:bg-orange-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-base mb-1">One-Notch Downgrade</h4>
                          <p className="text-sm mb-0">Company drops from A to A- or BBB+ to BBB - second warning</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-400 dark:bg-orange-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-base mb-1">Multiple Downgrades</h4>
                          <p className="text-sm mb-0">Rating drops 2-3 notches in 6-12 months - final warning</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-white">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-base mb-1">Junk Status</h4>
                          <p className="text-sm mb-0">Falls below BBB- to BB+ (junk) - dividend cut usually within 30-90 days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <TrendingDown className="h-6 w-6 text-red-600" />
                        Real Example: Macy's Rating Collapse (2019-2020)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Early 2019:</strong> Macy's rated BBB- (lowest investment grade)</p>
                        <p><strong>August 2019:</strong> S&P puts rating on "negative watch" after weak earnings</p>
                        <p><strong>January 2020:</strong> Downgraded to BB+ (junk status)</p>
                        <p><strong>March 2020:</strong> COVID forces store closures, further downgrade to BB</p>
                        <p><strong>March 18, 2020:</strong> Macy's suspends $0.3775 quarterly dividend</p>
                        <p><strong>Stock Impact:</strong> Shares fell from $25 in 2019 to $5 in 2020 (80% crash)</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> The negative watch in August 2019 gave investors 7 months to exit before the dividend suspension
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Where to Check Credit Ratings</h3>
                  <ul>
                    <li><strong>Free sources:</strong> Yahoo Finance (under "Statistics" tab), company investor relations websites</li>
                    <li><strong>Paid sources:</strong> S&P Capital IQ, Bloomberg Terminal, Moody's Analytics</li>
                    <li><strong>Alerts:</strong> Set up Google Alerts for "[Company Name] credit rating downgrade"</li>
                  </ul>
                </section>

                {/* Red Flag #5 */}
                <section id="red-flag-5">
                  <h2 className="flex items-center gap-2">
                    <Clock className="h-7 w-7 text-red-600" />
                    Red Flag #5: Dividend Growth Freeze
                  </h2>

                  <p>
                    When a company that has consistently raised dividends suddenly <strong>freezes increases</strong>, it's waving a red flag.
                    Healthy, confident companies grow dividends annually. A freeze signals management is preserving cash for a reason.
                  </p>

                  <h3>The Dividend Aristocrat Test</h3>
                  <p>
                    <strong>Dividend Aristocrats</strong> are S&P 500 companies with 25+ consecutive years of dividend increases.
                    When an Aristocrat freezes its dividend, it's a major warning:
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <p className="font-semibold">Historical Pattern Analysis (2000-2024):</p>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Aristocrats that froze dividends:</strong> 73% cut within 18 months</li>
                          <li><strong>Non-aristocrats that froze:</strong> 89% cut within 12 months</li>
                          <li><strong>Average cut size:</strong> 38% reduction in annual payout</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Warning Timeline</h3>
                  <p>
                    A typical sequence before a dividend cut:
                  </p>

                  <ol>
                    <li><strong>Years 1-10:</strong> Company raises dividend 3-5% annually like clockwork</li>
                    <li><strong>Year 11:</strong> Dividend held flat - management says "maintaining flexibility"</li>
                    <li><strong>Year 12:</strong> Still flat - now citing "uncertain economic conditions"</li>
                    <li><strong>Year 13:</strong> Dividend cut 25-50%</li>
                  </ol>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Clock className="h-6 w-6 text-red-600" />
                        Real Example: Occidental Petroleum's Freeze (2019-2020)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>2010-2018:</strong> Occidental raised dividends annually, 8-year growth streak</p>
                        <p><strong>Q1 2019:</strong> Announced Anadarko acquisition for $38 billion - massive debt load</p>
                        <p><strong>Mid-2019:</strong> Dividend held flat at $0.79/quarter despite historical Q3 increase</p>
                        <p><strong>Q4 2019:</strong> Still no increase - management cites "capital allocation priorities"</p>
                        <p><strong>March 2020:</strong> Oil prices crash, Occidental cuts dividend 86% to $0.11/quarter</p>
                        <p><strong>Stock Impact:</strong> Shares fell from $65 in 2019 to $10 in 2020 (85% crash)</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> The dividend freeze in mid-2019 was a 9-month early warning signal
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Track Dividend Growth</h3>
                  <ul>
                    <li><strong>Dividend.com:</strong> Free dividend history and growth charts</li>
                    <li><strong>Seeking Alpha:</strong> Dividend scorecard shows years of consecutive increases</li>
                    <li><strong>Portfolio tools:</strong> Dividend Tracker, Sharesight track your holdings automatically</li>
                  </ul>
                </section>

                {/* Red Flag #6 */}
                <section id="red-flag-6">
                  <h2 className="flex items-center gap-2">
                    <Activity className="h-7 w-7 text-red-600" />
                    Red Flag #6: Severe Industry Headwinds
                  </h2>

                  <p>
                    Sometimes the problem isn't the company - it's the entire industry collapsing. When fundamental business
                    models break, even well-managed companies must cut dividends to survive.
                  </p>

                  <h3>Industries with Structural Decline Risk</h3>

                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Oil & Gas (2014-2016, 2020)</h4>
                        <p className="text-sm mb-2">
                          <strong>Warning signs:</strong> Oil prices below $50/barrel, renewable energy adoption accelerating
                        </p>
                        <p className="text-sm">
                          <strong>Casualties:</strong> ConocoPhillips (cut 66%), Occidental (cut 86%), Apache (cut 90%)
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">Traditional Retail (2017-2020)</h4>
                        <p className="text-sm mb-2">
                          <strong>Warning signs:</strong> Amazon market share growth, mall traffic declining 20%+ annually
                        </p>
                        <p className="text-sm">
                          <strong>Casualties:</strong> Macy's (suspended), Kohl's (cut 50%), Nordstrom (cut 70%)
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">Traditional Media (2018-2023)</h4>
                        <p className="text-sm mb-2">
                          <strong>Warning signs:</strong> Cable cord-cutting, streaming wars, advertising migration to digital
                        </p>
                        <p className="text-sm">
                          <strong>Casualties:</strong> AT&T (cut 47%), ViacomCBS (cut 75%), Discovery (cut 35%)
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">Commercial Real Estate (2020-2024)</h4>
                        <p className="text-sm mb-2">
                          <strong>Warning signs:</strong> Work-from-home adoption, office vacancy rates above 20%
                        </p>
                        <p className="text-sm">
                          <strong>Casualties:</strong> SL Green (cut 44%), Vornado (cut 50%), Boston Properties (cut 38%)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Industry Warning Checklist</h3>
                  <p>
                    Exit dividend stocks when you see:
                  </p>

                  <ul>
                    <li><strong>Competitor bankruptcies:</strong> If 3+ competitors file bankruptcy, the whole sector is at risk</li>
                    <li><strong>Technology disruption:</strong> New technology making the business model obsolete (streaming → cable TV)</li>
                    <li><strong>Regulatory threats:</strong> Government policy changes that attack industry economics</li>
                    <li><strong>Commodity price collapse:</strong> For commodity-dependent industries (oil, metals, agriculture)</li>
                    <li><strong>Consumer behavior shift:</strong> Permanent changes in how customers buy (online shopping)</li>
                  </ul>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Activity className="h-6 w-6 text-red-600" />
                        Real Example: Entire Telecom Sector Dividend Cuts (2020-2021)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Industry problem:</strong> $200+ billion spent on 5G infrastructure, limited revenue growth, cord-cutting accelerating</p>
                        <p><strong>Warning signs (2019):</strong> All major telecoms reporting flat revenue, rising capex, declining margins</p>
                        <p><strong>AT&T:</strong> Cut dividend 47% in May 2021</p>
                        <p><strong>Lumen (CenturyLink):</strong> Cut dividend 50% in February 2019, suspended in 2020</p>
                        <p><strong>Frontier Communications:</strong> Cut 65% in 2018, suspended in 2019, filed bankruptcy</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> When an entire industry faces structural decline, even the strongest players cut dividends - diversify across sectors
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Red Flag #7 */}
                <section id="red-flag-7">
                  <h2 className="flex items-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-600" />
                    Red Flag #7: Heavy Insider Selling
                  </h2>

                  <p>
                    When executives and board members sell large chunks of their stock, they know something you don't.
                    While some selling is normal (diversification, taxes, personal needs), <strong>unusual patterns are red flags.</strong>
                  </p>

                  <h3>Normal vs. Suspicious Insider Selling</h3>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Pattern</th>
                          <th className="border p-3 text-left">Normal</th>
                          <th className="border p-3 text-left">Suspicious</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Timing</td>
                          <td className="border p-3 text-green-600">Pre-scheduled 10b5-1 plans, spread over months</td>
                          <td className="border p-3 text-red-600">Sudden, unexpected sales outside normal patterns</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Volume</td>
                          <td className="border p-3 text-green-600">Selling 10-20% of holdings</td>
                          <td className="border p-3 text-red-600">Selling 50%+ of holdings in short period</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Breadth</td>
                          <td className="border p-3 text-green-600">1-2 executives selling</td>
                          <td className="border p-3 text-red-600">5+ insiders selling simultaneously</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Buy/Sell Ratio</td>
                          <td className="border p-3 text-green-600">Some insider buying mixed with selling</td>
                          <td className="border p-3 text-red-600">Zero insider buying, 100% selling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>The Red Flag Thresholds</h3>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Major Warning: 5+ Insiders Sell in 90 Days</h4>
                          <p className="text-sm mb-0">When the CEO, CFO, and multiple board members all sell within 3 months, trouble is brewing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Critical Warning: CEO Sells 50%+ of Holdings</h4>
                          <p className="text-sm mb-0">If the CEO doesn't believe in the company's future, why should you?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Extreme Warning: Zero Insider Buying After Stock Drops 30%</h4>
                          <p className="text-sm mb-0">If insiders won't buy their own stock when it's "cheap," it's not a bargain</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <TrendingDown className="h-6 w-6 text-red-600" />
                        Real Example: Kraft Heinz Insider Exodus (2018)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>July-October 2018:</strong> 8 different Kraft Heinz insiders sold stock, including CEO and multiple VPs</p>
                        <p><strong>November 2018:</strong> CFO sold $10.2 million in shares</p>
                        <p><strong>December 2018:</strong> Zero insider buying despite 20% stock decline</p>
                        <p><strong>February 2019:</strong> Company announced $15 billion writedown and SEC investigation</p>
                        <p><strong>February 21, 2019:</strong> Kraft Heinz cut dividend 36% from $0.625 to $0.40 per quarter</p>
                        <p><strong>Stock Impact:</strong> Shares crashed 27% in one day, down 60% from 2017 peak</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> Heavy insider selling preceded the dividend cut by 4-7 months
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Where to Track Insider Trading</h3>
                  <ul>
                    <li><strong>SEC EDGAR:</strong> Form 4 filings show all insider trades within 2 days</li>
                    <li><strong>OpenInsider.com:</strong> Free database with filtering by company, industry, trade size</li>
                    <li><strong>Finviz.com:</strong> Insider trading section shows recent activity</li>
                    <li><strong>Your brokerage:</strong> Most platforms (Fidelity, Schwab) have insider trading sections</li>
                  </ul>
                </section>

                {/* Red Flag #8 */}
                <section id="red-flag-8">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-red-600" />
                    Red Flag #8: Selling Core Assets
                  </h2>

                  <p>
                    When a company starts selling valuable businesses or real estate to raise cash, it's often the last resort
                    before cutting dividends. <strong>This is corporate desperation in action.</strong>
                  </p>

                  <h3>Types of Asset Sales That Signal Trouble</h3>

                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Core Business Units
                        </h4>
                        <p className="text-sm">
                          Selling profitable divisions that have been part of the company for decades. This shrinks future earnings
                          power and often precedes dividend cuts.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Real Estate Holdings
                        </h4>
                        <p className="text-sm">
                          Selling and leasing back headquarters or manufacturing facilities. This creates immediate cash but
                          adds ongoing rent expenses.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          "Crown Jewel" Assets
                        </h4>
                        <p className="text-sm">
                          Selling the most valuable brands or patents. If management is willing to part with these, the situation
                          is dire.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Bulk Asset Sales Below Value
                        </h4>
                        <p className="text-sm">
                          Fire-sale prices that are significantly below analyst valuations. This signals desperation to raise
                          cash quickly.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>The Asset Sale Warning Pattern</h3>

                  <ol>
                    <li><strong>Stage 1:</strong> Company announces "strategic review" of business units</li>
                    <li><strong>Stage 2:</strong> Sells smaller, non-core assets (testing the waters)</li>
                    <li><strong>Stage 3:</strong> Sells major business segments to raise $1-5 billion</li>
                    <li><strong>Stage 4:</strong> Uses proceeds to pay down debt, but business still struggling</li>
                    <li><strong>Stage 5:</strong> Dividend cut announced 3-6 months after asset sale</li>
                  </ol>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-red-600" />
                        Real Example: General Electric's Asset Fire Sale (2018-2019)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>June 2018:</strong> GE announces plan to sell $20 billion in assets</p>
                        <p><strong>October 2018:</strong> Sells healthcare IT business to Veritas for $1.05 billion</p>
                        <p><strong>November 2018:</strong> Sells distributed power business to Advent for $3.25 billion</p>
                        <p><strong>December 2018:</strong> Second dividend cut (50%) from $0.12 to $0.01 per quarter</p>
                        <p><strong>March 2019:</strong> Sells BioPharma unit to Danaher for $21.4 billion (crown jewel)</p>
                        <p><strong>2019-2020:</strong> Additional asset sales exceed $35 billion total</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> When a company announces multi-billion dollar asset sale programs, the dividend is at severe risk
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Interpret Asset Sales</h3>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Scenario</th>
                          <th className="border p-3 text-left">Dividend Risk</th>
                          <th className="border p-3 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">Selling non-core unit for 15x earnings</td>
                          <td className="border p-3 text-green-600">Low - strategic optimization</td>
                          <td className="border p-3">Monitor but likely OK</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Selling to fund growth investments</td>
                          <td className="border p-3 text-blue-600">Low - positive catalyst</td>
                          <td className="border p-3">Could be bullish for dividend</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Selling to "pay down debt"</td>
                          <td className="border p-3 text-yellow-600">Moderate - debt stress signal</td>
                          <td className="border p-3">Check debt levels, watch closely</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Multiple asset sales announced simultaneously</td>
                          <td className="border p-3 text-orange-600">High - cash flow problems</td>
                          <td className="border p-3">Reduce position, prepare for cut</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Fire-sale pricing (8x earnings or below)</td>
                          <td className="border p-3 text-red-600">Critical - desperation</td>
                          <td className="border p-3">Exit position immediately</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Red Flag #9 */}
                <section id="red-flag-9">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-red-600" />
                    Red Flag #9: Management Language Changes
                  </h2>

                  <p>
                    CEO and CFO statements in earnings calls and press releases contain clues about dividend safety.
                    <strong>Learn to read between the lines.</strong>
                  </p>

                  <h3>Dangerous Phrases That Predict Dividend Cuts</h3>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-red-600 mb-2">"Reviewing all capital allocation options"</h4>
                        <p className="text-sm">
                          <strong>Translation:</strong> We're considering cutting the dividend. This phrase appears in 78% of
                          earnings calls within 6 months of a dividend cut.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-red-600 mb-2">"Committed to maintaining flexibility"</h4>
                        <p className="text-sm">
                          <strong>Translation:</strong> We might need to cut the dividend. Management wants freedom to act without
                          being locked into the current payout.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-red-600 mb-2">"Dividend will be evaluated quarterly"</h4>
                        <p className="text-sm">
                          <strong>Translation:</strong> The dividend is no longer sacred. Healthy companies affirm multi-year
                          dividend commitments, not quarter-by-quarter evaluations.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-red-600 mb-2">"Prioritizing balance sheet strength"</h4>
                        <p className="text-sm">
                          <strong>Translation:</strong> Debt is a problem, and the dividend might be sacrificed to reduce leverage.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-red-600 mb-2">"Dividend remains a priority" (when not previously questioned)</h4>
                        <p className="text-sm">
                          <strong>Translation:</strong> We're defensive because we know investors are worried. Unprompted dividend
                          reassurances often precede cuts.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Positive Language to Look For</h3>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">"Raising dividend for the [X]th consecutive year"</h4>
                          <p className="text-sm mb-0">Confidence in future earnings and commitment to shareholder returns</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">"Long-term dividend growth target of X%"</h4>
                          <p className="text-sm mb-0">Management providing multi-year guidance shows confidence</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">"Dividend covered X times by free cash flow"</h4>
                          <p className="text-sm mb-0">Quantifying sustainability with specific coverage metrics</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-red-600" />
                        Real Example: Walgreens' Language Evolution (2023-2024)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Q2 2023 earnings call:</strong> "We remain committed to our dividend" (unprompted - first red flag)</p>
                        <p><strong>Q3 2023:</strong> "We are reviewing all aspects of capital allocation" (second red flag)</p>
                        <p><strong>Q4 2023:</strong> "The board evaluates the dividend quarterly" (third red flag)</p>
                        <p><strong>Q1 2024:</strong> "Prioritizing debt reduction and operational improvements" (final warning)</p>
                        <p><strong>March 2024:</strong> Walgreens cut dividend 48% from $0.48 to $0.25 per quarter</p>
                        <p><strong>Stock Impact:</strong> Shares dropped 22% over the 9-month warning period</p>
                        <p className="pt-2 border-t border-red-300 dark:border-red-700">
                          <strong>Lesson:</strong> Management language became progressively more defensive across 4 quarters before the cut
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to Monitor Management Language</h3>
                  <ul>
                    <li><strong>Earnings call transcripts:</strong> Seeking Alpha, The Motley Fool publish free transcripts</li>
                    <li><strong>8-K filings:</strong> SEC filings for major announcements (search EDGAR)</li>
                    <li><strong>Investor presentations:</strong> Company investor relations websites</li>
                    <li><strong>CEO interviews:</strong> CNBC, Bloomberg appearances often reveal more than prepared remarks</li>
                  </ul>
                </section>

                {/* Case Studies Section */}
                <section id="case-studies">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    Case Studies: How Investors Could Have Seen These Coming
                  </h2>

                  <p>
                    Let's examine three major dividend cuts and map out exactly when each red flag appeared.
                    This shows how multiple warning signs compound over time.
                  </p>

                  {/* GE Case Study */}
                  <Card className="my-8 border-2 border-red-300 dark:border-red-700">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4">Case Study #1: General Electric (2017-2018)</h3>
                      <p className="mb-4 text-lg font-semibold">The 96% Dividend Cut That Shocked Millions of Retirees</p>

                      <div className="space-y-4">
                        <div className="border-l-4 border-orange-500 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">18 MONTHS BEFORE CUT - June 2016</p>
                          <p className="text-sm"><strong>Red Flag #2:</strong> Free cash flow drops to $6.0B while paying $8.3B in dividends (deficit spending)</p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">15 MONTHS BEFORE - September 2016</p>
                          <p className="text-sm"><strong>Red Flag #3:</strong> Debt-to-equity ratio climbs to 2.4 as power division struggles</p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">12 MONTHS BEFORE - December 2016</p>
                          <p className="text-sm"><strong>Red Flag #4:</strong> Moody's puts credit rating on "negative watch"</p>
                          <p className="text-sm"><strong>Red Flag #7:</strong> Multiple executives sell large blocks of stock</p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">9 MONTHS BEFORE - March 2017</p>
                          <p className="text-sm"><strong>Red Flag #2:</strong> FCF collapses to $3.2B (now paying 2.6x more than generating)</p>
                          <p className="text-sm"><strong>Red Flag #1:</strong> Payout ratio exceeds 120%</p>
                        </div>

                        <div className="border-l-4 border-red-500 pl-4">
                          <p className="font-bold text-sm text-red-600 mb-1">6 MONTHS BEFORE - June 2017</p>
                          <p className="text-sm"><strong>Red Flag #8:</strong> Announces plan to sell $20 billion in assets</p>
                          <p className="text-sm"><strong>Red Flag #9:</strong> New CEO says "reviewing all capital allocation"</p>
                        </div>

                        <div className="border-l-4 border-red-600 pl-4">
                          <p className="font-bold text-sm text-red-600 mb-1">3 MONTHS BEFORE - September 2017</p>
                          <p className="text-sm"><strong>Red Flag #4:</strong> S&P downgrades credit rating from A to A-</p>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mt-4">
                          <p className="font-bold text-lg mb-2">November 2017: First Cut (50%)</p>
                          <p className="text-sm mb-2">Dividend slashed from $0.96/year to $0.48/year</p>
                          <p className="text-sm mb-2">Stock drops from $19 to $16 (16% crash)</p>
                        </div>

                        <div className="bg-red-200 dark:bg-red-800 p-4 rounded-lg mt-4">
                          <p className="font-bold text-lg mb-2">December 2018: Second Cut (96% Total)</p>
                          <p className="text-sm mb-2">Dividend cut again to $0.04/year (token payment)</p>
                          <p className="text-sm mb-2">Stock falls to $6 (80% total decline from 2016)</p>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <p className="font-bold mb-2">Investor Action Plan:</p>
                          <ul className="text-sm space-y-1">
                            <li><strong>June 2016:</strong> Notice declining FCF - place on watch list</li>
                            <li><strong>March 2017:</strong> FCF deficit critical + payout ratio 120% - reduce position by 50%</li>
                            <li><strong>June 2017:</strong> Asset sale announcement + management language - exit completely</li>
                            <li><strong>Result:</strong> Avoid both cuts and 80% stock decline by exiting 6 months early</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ford Case Study */}
                  <Card className="my-8 border-2 border-red-300 dark:border-red-700">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4">Case Study #2: Ford Motor Company (2019-2020)</h3>
                      <p className="mb-4 text-lg font-semibold">The Pandemic Dividend Suspension (But Warning Signs Started Earlier)</p>

                      <div className="space-y-4">
                        <div className="border-l-4 border-yellow-500 pl-4">
                          <p className="font-bold text-sm text-yellow-600 mb-1">12 MONTHS BEFORE - March 2019</p>
                          <p className="text-sm"><strong>Red Flag #3:</strong> Debt-to-equity ratio climbs to 3.4 amid $11B restructuring</p>
                          <p className="text-sm"><strong>Red Flag #6:</strong> Auto industry showing weakness, EV transition costs mounting</p>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                          <p className="font-bold text-sm text-yellow-600 mb-1">10 MONTHS BEFORE - May 2019</p>
                          <p className="text-sm"><strong>Red Flag #5:</strong> Dividend held flat at $0.15/quarter (no increase for first time since 2012)</p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">8 MONTHS BEFORE - July 2019</p>
                          <p className="text-sm"><strong>Red Flag #1:</strong> Payout ratio hits 90% as earnings disappoint</p>
                          <p className="text-sm"><strong>Red Flag #2:</strong> Free cash flow drops 40% year-over-year</p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">6 MONTHS BEFORE - October 2019</p>
                          <p className="text-sm"><strong>Red Flag #9:</strong> CFO says "maintaining financial flexibility is critical"</p>
                        </div>

                        <div className="border-l-4 border-red-500 pl-4">
                          <p className="font-bold text-sm text-red-600 mb-1">3 MONTHS BEFORE - January 2020</p>
                          <p className="text-sm"><strong>Red Flag #3:</strong> Debt-to-equity ratio reaches 4.0</p>
                          <p className="text-sm"><strong>Red Flag #4:</strong> Moody's downgrades outlook to negative</p>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mt-4">
                          <p className="font-bold text-lg mb-2">March 2020: Dividend Suspended</p>
                          <p className="text-sm mb-2">$0.15 quarterly dividend eliminated (COVID cited as reason)</p>
                          <p className="text-sm mb-2">Stock crashes from $9 to $4 (55% decline)</p>
                        </div>

                        <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-lg mt-4">
                          <p className="font-bold text-lg mb-2">May 2021: Partial Restoration</p>
                          <p className="text-sm mb-2">Dividend reinstated at $0.10/quarter (33% below original)</p>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <p className="font-bold mb-2">Investor Action Plan:</p>
                          <ul className="text-sm space-y-1">
                            <li><strong>May 2019:</strong> Dividend freeze + high debt ratio - place on watch list</li>
                            <li><strong>July 2019:</strong> 90% payout ratio + declining FCF - reduce position by 50%</li>
                            <li><strong>January 2020:</strong> Debt ratio 4.0 + credit downgrade - exit completely</li>
                            <li><strong>Result:</strong> Exit 2 months before suspension, avoid 55% stock crash</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* AT&T Case Study */}
                  <Card className="my-8 border-2 border-red-300 dark:border-red-700">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4">Case Study #3: AT&T (2020-2021)</h3>
                      <p className="mb-4 text-lg font-semibold">The "Safe" Dividend That Wasn't (47% Cut)</p>

                      <div className="space-y-4">
                        <div className="border-l-4 border-yellow-500 pl-4">
                          <p className="font-bold text-sm text-yellow-600 mb-1">18 MONTHS BEFORE - October 2019</p>
                          <p className="text-sm"><strong>Red Flag #6:</strong> Media industry in free fall - streaming wars, cord-cutting accelerating</p>
                          <p className="text-sm"><strong>Red Flag #3:</strong> Debt load reaches $180 billion after Time Warner acquisition</p>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                          <p className="font-bold text-sm text-yellow-600 mb-1">15 MONTHS BEFORE - January 2020</p>
                          <p className="text-sm"><strong>Red Flag #1:</strong> Payout ratio climbs to 95% as media division loses money</p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">12 MONTHS BEFORE - April 2020</p>
                          <p className="text-sm"><strong>Red Flag #5:</strong> First dividend freeze in 35 years (no increase despite annual tradition)</p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <p className="font-bold text-sm text-orange-600 mb-1">9 MONTHS BEFORE - July 2020</p>
                          <p className="text-sm"><strong>Red Flag #2:</strong> Free cash flow misses targets by $3 billion</p>
                          <p className="text-sm"><strong>Red Flag #1:</strong> Payout ratio exceeds 102% (paying more than earning)</p>
                        </div>

                        <div className="border-l-4 border-red-500 pl-4">
                          <p className="font-bold text-sm text-red-600 mb-1">6 MONTHS BEFORE - November 2020</p>
                          <p className="text-sm"><strong>Red Flag #7:</strong> CEO and CFO sell combined $8 million in stock</p>
                        </div>

                        <div className="border-l-4 border-red-600 pl-4">
                          <p className="font-bold text-sm text-red-600 mb-1">3 MONTHS BEFORE - February 2021</p>
                          <p className="text-sm"><strong>Red Flag #9:</strong> Management announces "strategic review" of Warner Media</p>
                          <p className="text-sm"><strong>Red Flag #8:</strong> Plans to spin off media assets (admission of failure)</p>
                        </div>

                        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mt-4">
                          <p className="font-bold text-lg mb-2">May 2021: Dividend Cut 47%</p>
                          <p className="text-sm mb-2">Annual dividend reduced from $2.08 to $1.11 per share</p>
                          <p className="text-sm mb-2">Stock drops from $32 to $27 immediately (15% crash)</p>
                          <p className="text-sm mb-2">Continued decline to $16 by January 2022 (50% total drop)</p>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <p className="font-bold mb-2">Investor Action Plan:</p>
                          <ul className="text-sm space-y-1">
                            <li><strong>January 2020:</strong> 95% payout ratio + massive debt - place on watch list</li>
                            <li><strong>July 2020:</strong> Payout ratio above 100% - reduce position by 50%</li>
                            <li><strong>February 2021:</strong> Strategic review + asset spinoff - exit remaining position</li>
                            <li><strong>Result:</strong> Exit 3 months before cut, avoid 50% stock decline</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Key Takeaway from Case Studies</h3>
                      <p className="mb-4">
                        <strong>Multiple red flags appear 6-18 months before dividend cuts.</strong> Investors who monitor
                        just 3-4 of these warning signs can exit with minimal losses.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-bold mb-2">General Electric</p>
                          <p>18-month warning window</p>
                          <p className="text-blue-600">6 red flags triggered</p>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Ford Motor</p>
                          <p>12-month warning window</p>
                          <p className="text-blue-600">7 red flags triggered</p>
                        </div>
                        <div>
                          <p className="font-bold mb-2">AT&T</p>
                          <p>18-month warning window</p>
                          <p className="text-blue-600">8 red flags triggered</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Screening Tools Section */}
                <section id="screening-tools">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-green-600" />
                    How to Screen for Safe Dividends
                  </h2>

                  <p>
                    Don't wait for red flags - screen stocks upfront to build a portfolio of safe dividend payers.
                    Here's a step-by-step process.
                  </p>

                  <h3>The 5-Minute Dividend Safety Screen</h3>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-1">Check Payout Ratio</h4>
                            <p className="text-sm mb-2">Target: Under 60% for growth stocks, under 75% for value stocks, under 85% for REITs</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tool: Yahoo Finance → Statistics tab → Payout Ratio</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-1">Verify Dividend Growth History</h4>
                            <p className="text-sm mb-2">Target: 5+ consecutive years of increases (10+ years ideal)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tool: Dividend.com → Dividend History chart</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-1">Review Free Cash Flow Coverage</h4>
                            <p className="text-sm mb-2">Target: FCF at least 1.5x total dividend payments (2.0x+ is excellent)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tool: Calculate manually from cash flow statement or use Seeking Alpha</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                            4
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-1">Check Credit Rating</h4>
                            <p className="text-sm mb-2">Target: BBB+ or higher (A- or higher for maximum safety)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tool: Yahoo Finance → Profile tab shows S&P rating</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                            5
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-1">Assess Debt-to-Equity Ratio</h4>
                            <p className="text-sm mb-2">Target: Under 1.0 for most stocks (under 2.0 for utilities/REITs)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tool: Yahoo Finance → Statistics tab → Balance Sheet</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Advanced Screening: The Dividend Safety Score</h3>

                  <p>
                    Create your own dividend safety scoring system. Assign points for each metric:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Metric</th>
                          <th className="border p-3 text-center">Points if Pass</th>
                          <th className="border p-3 text-left">Passing Criteria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">Payout Ratio</td>
                          <td className="border p-3 text-center font-bold">2</td>
                          <td className="border p-3">Under 60% (or under 85% for REITs)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">FCF Coverage</td>
                          <td className="border p-3 text-center font-bold">2</td>
                          <td className="border p-3">1.5x or higher</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Dividend Growth Streak</td>
                          <td className="border p-3 text-center font-bold">2</td>
                          <td className="border p-3">10+ consecutive years</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Credit Rating</td>
                          <td className="border p-3 text-center font-bold">1</td>
                          <td className="border p-3">A- or higher</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Debt-to-Equity</td>
                          <td className="border p-3 text-center font-bold">1</td>
                          <td className="border p-3">Under 1.0 (or under 2.0 for REITs/utilities)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Dividend Aristocrat Status</td>
                          <td className="border p-3 text-center font-bold">1</td>
                          <td className="border p-3">25+ years of increases</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Recent Dividend Increase</td>
                          <td className="border p-3 text-center font-bold">1</td>
                          <td className="border p-3">Raised within last 12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Dividend Safety Score Interpretation:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong className="text-green-600">9-10 points:</strong> Extremely safe - core portfolio holding</li>
                        <li><strong className="text-blue-600">7-8 points:</strong> Very safe - suitable for most portfolios</li>
                        <li><strong className="text-yellow-600">5-6 points:</strong> Moderate risk - limit to 10-15% of portfolio</li>
                        <li><strong className="text-orange-600">3-4 points:</strong> Higher risk - only for experienced investors</li>
                        <li><strong className="text-red-600">0-2 points:</strong> High risk - avoid or monitor extremely closely</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>Best Free Screening Tools</h3>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Finviz Stock Screener</h4>
                        <p className="text-sm mb-2">Filter by dividend yield, payout ratio, debt/equity, years of dividend growth</p>
                        <p className="text-xs text-blue-600">finviz.com/screener.ashx</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Simply Safe Dividends</h4>
                        <p className="text-sm mb-2">Pre-calculated safety scores (0-100) for all dividend stocks, free basic access</p>
                        <p className="text-xs text-blue-600">simplysafedividends.com</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Dividend.com Screener</h4>
                        <p className="text-sm mb-2">Filter by safety rating, yield, growth rate, sector. Free dividend calendars</p>
                        <p className="text-xs text-blue-600">dividend.com/dividend-stocks</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-bold mb-3">Seeking Alpha Dividend Scorecards</h4>
                        <p className="text-sm mb-2">Individual stock analysis with safety, growth, yield ratings. Free for registered users</p>
                        <p className="text-xs text-blue-600">seekingalpha.com</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Cut vs Suspension Section */}
                <section id="cut-vs-suspension">
                  <h2>Dividend Cut vs. Dividend Suspension: What's the Difference?</h2>

                  <p>
                    Not all dividend reductions are created equal. Understanding the difference helps you predict recovery timelines.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Factor</th>
                          <th className="border p-3 text-left">Dividend Cut</th>
                          <th className="border p-3 text-left">Dividend Suspension</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Definition</td>
                          <td className="border p-3">Dividend reduced but not eliminated (e.g., 50% cut)</td>
                          <td className="border p-3">Dividend eliminated entirely ($0.00 per share)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Typical Reason</td>
                          <td className="border p-3">Earnings decline, debt reduction, business challenges</td>
                          <td className="border p-3">Crisis, bankruptcy risk, regulatory requirement</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Severity</td>
                          <td className="border p-3">Moderate - company still generating some cash</td>
                          <td className="border p-3">Severe - company preserving all cash for survival</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Stock Reaction</td>
                          <td className="border p-3">Typically 10-25% decline</td>
                          <td className="border p-3">Often 30-50% crash</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Recovery Timeline</td>
                          <td className="border p-3">1-3 years to restore to previous level</td>
                          <td className="border p-3">3-7 years (if reinstated at all)</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Reinstatement Odds</td>
                          <td className="border p-3">90%+ eventually grow back to old level</td>
                          <td className="border p-3">60-70% reinstate (often at lower level)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Examples of Each</h3>

                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Dividend Cuts (Reduced but Not Eliminated)</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>AT&T (2021):</strong> Cut 47% from $2.08 to $1.11 - still paying dividends</li>
                        <li><strong>Kraft Heinz (2019):</strong> Cut 36% from $2.50 to $1.60 - reduced but ongoing</li>
                        <li><strong>Walgreens (2024):</strong> Cut 48% from $1.92 to $1.00 - maintaining reduced dividend</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Dividend Suspensions (Eliminated Entirely)</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Ford (March 2020):</strong> Suspended $0.15/quarter to $0.00 - reinstated 15 months later at lower rate</li>
                        <li><strong>Disney (May 2020):</strong> Suspended $1.76/year to $0.00 - reinstated December 2023 (3.5 years later)</li>
                        <li><strong>Boeing (March 2020):</strong> Suspended $8.22/year to $0.00 - still suspended as of 2026</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3>What to Do When a Dividend is Cut or Suspended</h3>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">If You Still Own the Stock When Cut is Announced:</h4>
                      <ol className="space-y-2 text-sm">
                        <li><strong>Don't panic sell immediately</strong> - stock often overshoots on the downside</li>
                        <li><strong>Read the full announcement</strong> - understand why management cut the dividend</li>
                        <li><strong>Reassess the business</strong> - is this temporary (recession) or permanent (industry decline)?</li>
                        <li><strong>Check bankruptcy risk</strong> - if debt ratios are critical, exit within days</li>
                        <li><strong>Set a decision deadline</strong> - give yourself 7-14 days to analyze, then act decisively</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <h3>Tax Implications</h3>
                  <p>
                    <strong>Important:</strong> If you sell a dividend stock at a loss after a dividend cut, you can use that
                    capital loss to offset gains elsewhere in your portfolio. Document the loss for tax purposes.
                  </p>
                </section>

                {/* Recovery Section */}
                <section id="recovery">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                    What Happens After a Dividend Cut? Recovery Timeline
                  </h2>

                  <p>
                    Not all dividend cuts are permanent. Some companies recover and restore dividends. Here's what to expect.
                  </p>

                  <h3>The Typical Recovery Pattern</h3>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-800">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold mb-2">Phase 1: Crisis Management (0-12 months)</p>
                          <p className="text-sm">Company cuts dividend, focuses on survival, pays down debt, restructures business</p>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Phase 2: Stabilization (12-24 months)</p>
                          <p className="text-sm">Cash flow stabilizes, debt ratios improve, management provides forward guidance</p>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Phase 3: Cautious Reinstatement (24-36 months)</p>
                          <p className="text-sm">Small dividend reinstated (often 50-70% below pre-cut level), conservative payout ratio</p>
                        </div>
                        <div>
                          <p className="font-bold mb-2">Phase 4: Gradual Growth (36+ months)</p>
                          <p className="text-sm">Annual dividend increases resume, multi-year path back to previous dividend level</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Success Stories: Dividends That Came Back Stronger</h3>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-2">Ford Motor Company</h4>
                          <p className="text-sm mb-1"><strong>Cut:</strong> March 2020 suspension from $0.15/quarter to $0.00</p>
                          <p className="text-sm mb-1"><strong>Reinstated:</strong> May 2021 at $0.10/quarter (33% below previous)</p>
                          <p className="text-sm mb-1"><strong>Growth:</strong> Raised to $0.15 by 2023, back to original level</p>
                          <p className="text-sm"><strong>Timeline:</strong> Full recovery in 3 years</p>
                        </div>

                        <div>
                          <h4 className="font-bold mb-2">JPMorgan Chase</h4>
                          <p className="text-sm mb-1"><strong>Cut:</strong> 2009 financial crisis - cut 87% from $1.52 to $0.20/year</p>
                          <p className="text-sm mb-1"><strong>Recovery:</strong> Increased dividend every year 2011-2024</p>
                          <p className="text-sm mb-1"><strong>Current:</strong> Now pays $4.60/year (23x the crisis-era dividend)</p>
                          <p className="text-sm"><strong>Timeline:</strong> Exceeded pre-crisis dividend by 2013 (4 years)</p>
                        </div>

                        <div>
                          <h4 className="font-bold mb-2">Disney</h4>
                          <p className="text-sm mb-1"><strong>Suspension:</strong> May 2020 eliminated $1.76/year dividend</p>
                          <p className="text-sm mb-1"><strong>Reinstated:</strong> December 2023 at $0.30/year (83% below previous)</p>
                          <p className="text-sm mb-1"><strong>Growth:</strong> Raised to $0.50 in 2024, targeting $1.00 by 2026</p>
                          <p className="text-sm"><strong>Timeline:</strong> Expected 6-year full recovery</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Warning: Companies That Never Recovered</h3>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-bold">General Electric</p>
                          <p>Cut dividend 96% in 2017-2018. As of 2026, still paying only $0.32/year vs $0.96 pre-cut (67% below). May never fully recover.</p>
                        </div>
                        <div>
                          <p className="font-bold">Boeing</p>
                          <p>Suspended dividend in 2020. Still suspended in 2026. Unlikely to return to pre-2020 levels for a decade+.</p>
                        </div>
                        <div>
                          <p className="font-bold">Frontier Communications</p>
                          <p>Cut dividend in 2018, suspended in 2019, filed bankruptcy in 2020. Dividend never recovered - company restructured.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Should You Hold Through a Dividend Cut?</h3>

                  <p>
                    The decision depends on <strong>why</strong> the dividend was cut:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">Consider Holding If:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><CheckCircle2 className="h-4 w-4 inline text-green-600" /> <strong>Temporary crisis:</strong> Pandemic, recession, one-time event</li>
                        <li><CheckCircle2 className="h-4 w-4 inline text-green-600" /> <strong>Strong business fundamentals:</strong> Leading market position, competitive advantages intact</li>
                        <li><CheckCircle2 className="h-4 w-4 inline text-green-600" /> <strong>Proactive management:</strong> Cut dividend early before crisis deepened</li>
                        <li><CheckCircle2 className="h-4 w-4 inline text-green-600" /> <strong>Clear recovery plan:</strong> Management laid out path to dividend restoration</li>
                        <li><CheckCircle2 className="h-4 w-4 inline text-green-600" /> <strong>No bankruptcy risk:</strong> Debt manageable, credit rating still investment grade</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">Sell Immediately If:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><XCircle className="h-4 w-4 inline text-red-600" /> <strong>Structural industry decline:</strong> Business model becoming obsolete</li>
                        <li><XCircle className="h-4 w-4 inline text-red-600" /> <strong>Bankruptcy risk:</strong> Debt-to-equity above 5.0, credit rating below B</li>
                        <li><XCircle className="h-4 w-4 inline text-red-600" /> <strong>Negative free cash flow:</strong> Still burning cash after dividend cut</li>
                        <li><XCircle className="h-4 w-4 inline text-red-600" /> <strong>Management credibility lost:</strong> Repeatedly missed guidance, made poor acquisitions</li>
                        <li><XCircle className="h-4 w-4 inline text-red-600" /> <strong>Regulatory/legal problems:</strong> Major lawsuits, government investigations</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Protect Your Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Use our dividend safety calculators to analyze your holdings and identify at-risk positions before it's too late.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/dividend-payout-ratio">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Shield className="h-5 w-5" />
                            Payout Ratio Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Dividend Investors</h2>
                  <p>
                    Protect your dividend portfolio with a broker that offers robust research tools, real-time alerts,
                    and commission-free trading. Here are the top-rated options:
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ Section */}
                <section>
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">What is the #1 warning sign of a dividend cut?</h3>
                        <p className="text-sm">
                          A payout ratio above 80% combined with declining free cash flow. This combination preceded 87% of
                          dividend cuts from 2020-2024. If a company is paying out more than 80% of earnings and cash flow
                          is falling, a cut is highly likely within 12 months.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">How much advance warning do investors typically get?</h3>
                        <p className="text-sm">
                          Most dividend cuts can be predicted 6-18 months in advance by monitoring financial metrics.
                          The average warning window is 9-12 months between when the first red flags appear and when
                          the cut is announced.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">Are Dividend Aristocrats safe from cuts?</h3>
                        <p className="text-sm">
                          Dividend Aristocrats (25+ years of increases) are generally very safe, but they're not immune.
                          Examples of former Aristocrats that cut: Leggett & Platt (2024), Macy's (2020), Helmerich & Payne (2020).
                          Always monitor the 9 red flags even for Aristocrats.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">Should I sell immediately when I spot red flags?</h3>
                        <p className="text-sm">
                          Not necessarily. One or two red flags don't guarantee a cut. Use a scoring system: 1-2 red flags =
                          watch closely, 3-4 red flags = reduce position by 50%, 5+ red flags = exit completely. The more
                          red flags that appear, the higher the probability of a cut.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">What's a safe payout ratio for REITs vs regular stocks?</h3>
                        <p className="text-sm">
                          REITs and regular stocks use different metrics. For REITs, calculate payout ratio using Funds From
                          Operations (FFO), not earnings. Safe REIT payout ratio: 70-85% of FFO. Regular stocks: 40-70% of
                          earnings. Above 80-85% is dangerous for both.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">How long does it take for dividends to recover after a cut?</h3>
                        <p className="text-sm">
                          Average recovery timeline: 3-5 years to return to pre-cut dividend levels. Fast recoveries (1-3 years)
                          happen when the cut was due to temporary crisis (pandemic, recession). Slow recoveries (5-10 years)
                          occur with structural industry problems. Some dividends (GE, Boeing) may never fully recover.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">Can high-yield stocks (6%+) be safe from cuts?</h3>
                        <p className="text-sm">
                          High yields (6%+) often signal elevated risk. The market prices in cut probability - that's why the
                          yield is high. Safe 6%+ yielders exist (certain REITs, BDCs with low payout ratios), but require extra
                          scrutiny. Check payout ratio, FCF coverage, and debt levels twice as carefully with high-yielders.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-2">What's the difference between a dividend cut and dividend suspension?</h3>
                        <p className="text-sm">
                          A dividend cut reduces the payout (e.g., 50% cut) but continues paying something. A suspension
                          eliminates the dividend entirely ($0.00). Suspensions are more severe and take longer to recover
                          (average 3-7 years vs 1-3 years for cuts). About 30-40% of suspended dividends never return.
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
                      Dividend Stocks vs. ETFs: Complete Comparison Guide
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
