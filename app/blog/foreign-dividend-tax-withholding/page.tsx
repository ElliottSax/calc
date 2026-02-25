import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  Globe,
  DollarSign,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calculator,
  Percent,
  Building2,
  FileText,
  TrendingDown,
  Shield,
  Receipt,
  CreditCard,
  Clock,
  Flag
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Foreign Dividend Tax Withholding: Complete Guide to Reclaiming Taxes (2026)',
  description: 'Complete guide to foreign dividend tax withholding rates by country (15-35%), how to reclaim taxes with Form 1116, W-8BEN forms, tax treaties, and account type differences.',
  keywords: 'foreign dividend tax withholding, international dividend taxes, Form 1116, foreign tax credit, W-8BEN form, tax treaty benefits, withholding tax rates by country, IRA foreign dividends',
  openGraph: {
    title: 'Foreign Dividend Tax Withholding: Complete Tax Reclaim Guide',
    description: 'Learn how to minimize and reclaim foreign dividend withholding taxes. Country-by-country rates, Form 1116 instructions, and account optimization.',
    type: 'article',
  }
}

export default function ForeignDividendTaxWithholdingPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">International Tax Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Foreign Dividend Tax Withholding: Complete Guide to Reclaiming Taxes
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Foreign countries automatically withhold 15-35% of your international dividend income. Here's everything
                  you need to know about withholding rates by country, how to reclaim taxes, and which account types minimize
                  the tax drag.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>22 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Tax Expert Analysis
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
                      <TrendingDown className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Automatic Withholding:</strong> Foreign countries withhold 15-35% of dividends before you receive them (UK 0%, Canada 15%, Switzerland 35%)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Form 1116 Recovery:</strong> Taxable accounts can reclaim withheld taxes via foreign tax credit - reduces U.S. tax dollar-for-dollar</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>IRA Tax Trap:</strong> IRAs can't claim foreign tax credits - you permanently lose 15-30% of foreign dividends. Huge tax drag!</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Strategy:</strong> Hold UK/Australia stocks (0% withholding) or use taxable accounts for countries with treaties (15% withholding, fully recoverable)</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#what-is-withholding" className="text-blue-600 hover:underline">What is Foreign Tax Withholding?</a></li>
                    <li><a href="#country-rates" className="text-blue-600 hover:underline">Withholding Rates by Country</a></li>
                    <li><a href="#form-1116" className="text-blue-600 hover:underline">Form 1116: How to Reclaim Taxes</a></li>
                    <li><a href="#w8ben-form" className="text-blue-600 hover:underline">W-8BEN Forms & Treaty Benefits</a></li>
                    <li><a href="#account-differences" className="text-blue-600 hover:underline">Taxable vs IRA vs Roth</a></li>
                    <li><a href="#real-examples" className="text-blue-600 hover:underline">Real Tax Impact Examples</a></li>
                    <li><a href="#optimization" className="text-blue-600 hover:underline">Minimizing Withholding Tax</a></li>
                    <li><a href="#special-countries" className="text-blue-600 hover:underline">Country-Specific Quirks</a></li>
                    <li><a href="#calculator" className="text-blue-600 hover:underline">Tax Impact Calculator</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQs</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* What is Foreign Tax Withholding */}
                <section id="what-is-withholding">
                  <h2 className="flex items-center gap-2">
                    <Globe className="h-7 w-7 text-blue-600" />
                    What is Foreign Dividend Tax Withholding?
                  </h2>
                  <p>
                    When you invest in international stocks, <strong>the foreign country automatically withholds a percentage
                    of your dividend income before you receive it.</strong> This isn't your broker's fault or a mistake - it's
                    how foreign governments tax dividend income.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Receipt className="h-5 w-5 text-yellow-600" />
                        Real-World Example: How Withholding Works
                      </h3>
                      <div className="space-y-3 text-sm">
                        <p className="mb-3">You own $10,000 of Canadian bank stock (TD Bank) paying a 5% dividend:</p>
                        <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <div className="flex justify-between">
                            <span>Gross Dividend (5% of $10,000):</span>
                            <span className="font-bold">$500</span>
                          </div>
                          <div className="flex justify-between text-red-600">
                            <span>Canadian Withholding Tax (15%):</span>
                            <span className="font-bold">-$75</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-semibold">You Actually Receive:</span>
                            <span className="font-bold text-green-600">$425</span>
                          </div>
                        </div>
                        <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                          Canada withheld $75 before the money reached your account. Your broker shows the gross dividend
                          ($500) and the withholding tax ($75) separately on your 1099-DIV form.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Why Countries Withhold Taxes</h3>
                  <p>
                    Foreign governments view dividends paid by their companies as income earned in their country - even if
                    you're a U.S. investor. The withholding tax is their way of collecting revenue on that income. Think of
                    it like a sales tax that happens automatically before you get paid.
                  </p>

                  <h3>The Good News: Most Taxes Are Recoverable</h3>
                  <p>
                    <strong>If you hold foreign stocks in a taxable account</strong>, you can claim the foreign tax credit
                    on Form 1116. This gives you a dollar-for-dollar credit against your U.S. taxes, essentially recovering
                    the withheld amount. We'll cover exactly how to do this later in this guide.
                  </p>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        The Big IRA Problem
                      </h3>
                      <p className="text-sm">
                        <strong>IRAs cannot claim the foreign tax credit.</strong> If you hold international stocks in a
                        Traditional or Roth IRA, the withheld taxes are gone forever. This creates a permanent 15-30% tax
                        drag on your foreign dividend income. This is one of the biggest hidden costs of holding international
                        stocks in retirement accounts.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Country Rates */}
                <section id="country-rates">
                  <h2 className="flex items-center gap-2">
                    <Flag className="h-7 w-7 text-purple-600" />
                    Foreign Dividend Withholding Rates by Country
                  </h2>
                  <p>
                    Withholding rates vary dramatically by country, ranging from 0% (UK, Australia) to 35% (Switzerland before
                    reclaim). Here's the complete breakdown for U.S. investors under current tax treaties:
                  </p>

                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">2026 Withholding Tax Rates (U.S. Treaty Rates)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                              <th className="p-3 text-left">Country</th>
                              <th className="p-3 text-center">Withholding Rate</th>
                              <th className="p-3 text-left">Popular Stocks</th>
                              <th className="p-3 text-left">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t bg-green-50 dark:bg-green-950/30">
                              <td className="p-3 font-semibold">United Kingdom</td>
                              <td className="p-3 text-center"><Badge className="bg-green-600">0%</Badge></td>
                              <td className="p-3">BP, Shell, HSBC, Unilever</td>
                              <td className="p-3 text-xs">Best for U.S. investors - zero tax drag</td>
                            </tr>
                            <tr className="border-t bg-green-50 dark:bg-green-950/30">
                              <td className="p-3 font-semibold">Australia</td>
                              <td className="p-3 text-center"><Badge className="bg-green-600">0%</Badge></td>
                              <td className="p-3">BHP, Rio Tinto, Fortescue</td>
                              <td className="p-3 text-xs">Zero withholding under treaty</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Canada</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">15%</Badge></td>
                              <td className="p-3">TD, RY, ENB, CNQ, BCE</td>
                              <td className="p-3 text-xs">Fully recoverable via Form 1116</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Germany</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">15%</Badge></td>
                              <td className="p-3">SAP, Siemens, Allianz</td>
                              <td className="p-3 text-xs">26.375% initial, reduced to 15% with W-8BEN</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">France</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">15%</Badge></td>
                              <td className="p-3">TotalEnergies, LVMH, Sanofi</td>
                              <td className="p-3 text-xs">Was 30%, reduced to 15% with treaty</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Switzerland</td>
                              <td className="p-3 text-center"><Badge className="bg-orange-600">35%</Badge></td>
                              <td className="p-3">Nestlé, Novartis, Roche</td>
                              <td className="p-3 text-xs">Can reclaim to 15% but complex process</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Japan</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">10%</Badge></td>
                              <td className="p-3">Toyota, Sony, Mitsubishi UFJ</td>
                              <td className="p-3 text-xs">Lower rate than most countries</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Netherlands</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">15%</Badge></td>
                              <td className="p-3">ASML, ING, Shell (dual-listed)</td>
                              <td className="p-3 text-xs">Standard treaty rate</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Spain</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">15%</Badge></td>
                              <td className="p-3">Telefonica, Iberdrola, Santander</td>
                              <td className="p-3 text-xs">Reduced from 19% with treaty</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Italy</td>
                              <td className="p-3 text-center"><Badge className="bg-blue-600">15%</Badge></td>
                              <td className="p-3">Enel, ENI, Intesa Sanpaolo</td>
                              <td className="p-3 text-xs">Standard treaty rate</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3 font-semibold">Ireland</td>
                              <td className="p-3 text-center"><Badge className="bg-green-600">0%</Badge></td>
                              <td className="p-3">Many U.S. companies domiciled</td>
                              <td className="p-3 text-xs">Zero withholding for treaty benefits</td>
                            </tr>
                            <tr className="border-t bg-red-50 dark:bg-red-950/30">
                              <td className="p-3 font-semibold">China</td>
                              <td className="p-3 text-center"><Badge className="bg-red-600">10%</Badge></td>
                              <td className="p-3">Limited ADR availability</td>
                              <td className="p-3 text-xs">Lower rate, but forex control issues</td>
                            </tr>
                            <tr className="border-t bg-red-50 dark:bg-red-950/30">
                              <td className="p-3 font-semibold">Brazil</td>
                              <td className="p-3 text-center"><Badge className="bg-red-600">0%</Badge></td>
                              <td className="p-3">Vale, Petrobras, Itau</td>
                              <td className="p-3 text-xs">Zero withholding but currency volatility</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        *Rates assume proper W-8BEN form filed with broker. Without treaty certification, rates can be
                        significantly higher (e.g., Germany 26.375%, France 30%, Switzerland 35%).
                      </p>
                    </CardContent>
                  </Card>

                  <h3>Key Takeaways from the Rate Table</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Best Countries: UK & Australia (0% Withholding)</h4>
                          <p className="text-sm mb-0">
                            British and Australian stocks pay full dividends to U.S. investors with zero withholding. This
                            makes stocks like BP, Shell, HSBC, BHP, and Rio Tinto extremely tax-efficient for Americans.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Most Countries: 15% Standard Rate</h4>
                          <p className="text-sm mb-0">
                            Canada, Germany, France, Netherlands, Spain, Italy all withhold 15% under U.S. tax treaties.
                            This is recoverable via Form 1116 in taxable accounts.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Switzerland: 35% Initial Withholding</h4>
                          <p className="text-sm mb-0">
                            Swiss stocks (Nestlé, Novartis, Roche) face brutal 35% withholding. You can reclaim down to 15%
                            but it requires filing Swiss tax forms - complex and slow process.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Japan: 10% (Better Than Average)</h4>
                          <p className="text-sm mb-0">
                            Japanese stocks only withhold 10%, making them more tax-efficient than European alternatives.
                            Good for Toyota, Sony, and Japanese dividend investors.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Form 1116 */}
                <section id="form-1116">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-green-600" />
                    Form 1116: How to Reclaim Foreign Taxes
                  </h2>
                  <p>
                    <strong>Form 1116 (Foreign Tax Credit)</strong> is how you recover withheld foreign taxes on your U.S.
                    tax return. It provides a dollar-for-dollar credit against your U.S. tax liability, effectively refunding
                    the foreign taxes paid.
                  </p>

                  <h3>How Form 1116 Works</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">The Foreign Tax Credit Formula:</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <p className="mb-2"><strong>Step 1:</strong> Calculate foreign taxes paid (shown on your 1099-DIV Box 7)</p>
                          <p className="mb-2"><strong>Step 2:</strong> Calculate U.S. tax owed on that same foreign income</p>
                          <p className="mb-2"><strong>Step 3:</strong> Credit = Lesser of foreign taxes paid or U.S. tax owed</p>
                        </div>
                        <p className="font-semibold text-green-700 dark:text-green-400 mt-3">
                          In most cases, you recover 100% of the foreign withholding tax because U.S. tax rates (15-37%)
                          exceed foreign withholding rates (10-15%).
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Real Example: Form 1116 in Action</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Canadian Dividend Example
                      </h4>
                      <div className="space-y-3 text-sm">
                        <p>You received $1,000 in Canadian dividends. Canada withheld 15% ($150). You're in the 24% U.S. tax bracket:</p>
                        <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-lg">
                          <div className="flex justify-between">
                            <span>Gross Canadian Dividends:</span>
                            <span className="font-bold">$1,000</span>
                          </div>
                          <div className="flex justify-between text-red-600">
                            <span>Canadian Tax Withheld (15%):</span>
                            <span className="font-bold">-$150</span>
                          </div>
                          <div className="flex justify-between">
                            <span>You Received:</span>
                            <span className="font-bold">$850</span>
                          </div>
                          <div className="border-t pt-2 mt-2"></div>
                          <div className="flex justify-between">
                            <span>U.S. Tax Owed (15% qualified div rate):</span>
                            <span className="font-bold text-orange-600">$150</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Foreign Tax Credit (Form 1116):</span>
                            <span className="font-bold">-$150</span>
                          </div>
                          <div className="flex justify-between border-t pt-2 font-bold">
                            <span>Net U.S. Tax After Credit:</span>
                            <span className="text-green-600">$0</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                          Result: You paid $150 to Canada and got a $150 credit against your U.S. taxes. The foreign
                          withholding cost you nothing! You paid the same total tax as if you owned a U.S. stock.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Step-by-Step: Filing Form 1116</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <ol className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 1</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Gather Your 1099-DIV Forms</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              Your broker sends a 1099-DIV showing foreign dividends (Box 1a) and foreign taxes paid
                              (Box 7). You need both numbers for Form 1116.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 2</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Complete Form 1116 for Each Country</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              You must file a separate Form 1116 for each country (one for Canada, one for UK, etc.).
                              Enter foreign income and taxes paid. The IRS has a simplified version if foreign taxes
                              are under $300 ($600 married).
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 3</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Calculate Your Credit</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              Form 1116 walks through the calculation. In most cases, your credit equals the foreign
                              taxes shown on Box 7 of your 1099-DIV.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 4</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Apply Credit to Form 1040</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              The foreign tax credit from Form 1116 transfers to Schedule 3 (Form 1040), Line 1. This
                              reduces your total U.S. tax owed dollar-for-dollar.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Badge className="mt-1">Step 5</Badge>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1">Carryover Unused Credits</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              If your foreign tax credit exceeds your U.S. tax liability, you can carry back 1 year or
                              carry forward 10 years. This rarely happens with dividend income.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-purple-600" />
                        Pro Tip: Small Amount Exception
                      </h3>
                      <p className="text-sm">
                        If your total foreign taxes are <strong>under $300 ($600 if married)</strong>, you can skip Form 1116
                        and claim the credit directly on Schedule 3. This makes the process much simpler for small investors.
                        Most tax software handles this automatically.
                      </p>
                    </CardContent>
                  </Card>

                  <h3>When Form 1116 Doesn't Work</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">IRAs Cannot Claim Foreign Tax Credits</h4>
                          <p className="text-sm mb-0">
                            Traditional IRAs and Roth IRAs are tax-exempt entities. They don't pay U.S. taxes, so they
                            can't claim credits. Foreign withholding taxes in IRAs are lost forever.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Zero U.S. Tax Liability</h4>
                          <p className="text-sm mb-0">
                            If you're in the 0% capital gains bracket (income under $47,025 single / $94,050 married), you
                            owe no U.S. tax on dividends. Since you have no tax to credit against, you can't use Form 1116.
                            The foreign withholding becomes a real cost.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">AMT Limitations</h4>
                          <p className="text-sm mb-0">
                            If you're subject to Alternative Minimum Tax, foreign tax credits may be limited or disallowed.
                            This is rare for dividend investors but can happen with very high incomes.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* W-8BEN Form */}
                <section id="w8ben-form">
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-blue-600" />
                    W-8BEN Form: Unlocking Treaty Benefits
                  </h2>
                  <p>
                    <strong>Form W-8BEN (Certificate of Foreign Status)</strong> is the key to getting reduced withholding
                    rates under tax treaties. Without this form, foreign countries withhold at their statutory rate (often
                    25-35%) instead of the lower treaty rate (usually 15% or less).
                  </p>

                  <h3>What is Form W-8BEN?</h3>
                  <p>
                    Form W-8BEN tells foreign companies and governments that you're a U.S. person eligible for treaty benefits.
                    It's like showing your passport to get the lower "treaty rate" instead of the higher "non-resident rate."
                  </p>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-3">W-8BEN Impact: Germany Example</h3>
                      <div className="space-y-3 text-sm">
                        <p>German stocks normally withhold 26.375% (25% income tax + 5.5% solidarity surcharge):</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-red-100 dark:bg-red-950 p-4 rounded-lg">
                            <h4 className="font-bold mb-2 text-red-700 dark:text-red-400">WITHOUT W-8BEN</h4>
                            <div className="space-y-1">
                              <p>€1,000 dividend from SAP</p>
                              <p className="text-red-600 font-bold">-€263.75 withheld (26.375%)</p>
                              <p className="font-bold">You receive: €736.25</p>
                            </div>
                          </div>
                          <div className="bg-green-100 dark:bg-green-950 p-4 rounded-lg">
                            <h4 className="font-bold mb-2 text-green-700 dark:text-green-400">WITH W-8BEN</h4>
                            <div className="space-y-1">
                              <p>€1,000 dividend from SAP</p>
                              <p className="text-orange-600 font-bold">-€150 withheld (15%)</p>
                              <p className="font-bold">You receive: €850</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                          <p className="font-bold">W-8BEN saves you €113.75 per €1,000 dividend (11.375% more income)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>How to File Form W-8BEN</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold mb-1">Most Brokers Handle This Automatically</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              When you open an account at Fidelity, Schwab, Vanguard, or Interactive Brokers, they ask for
                              your tax status. They file the W-8BEN forms with foreign governments on your behalf. You don't
                              have to do anything in most cases.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold mb-1">Form is Valid for 3 Years</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              W-8BEN forms expire after 3 years. Your broker will remind you to recertify. If you don't
                              recertify, withholding automatically jumps to the statutory rate.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold mb-1">Check Your Broker's Foreign Tax Section</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              Log into your brokerage account and look for "Tax Forms" or "International Tax Certification."
                              Verify that your W-8BEN is on file and up-to-date. If not, you can submit it electronically
                              in minutes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Country-Specific W-8BEN Benefits</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                              <th className="p-2 text-left">Country</th>
                              <th className="p-2 text-center">Without W-8BEN</th>
                              <th className="p-2 text-center">With W-8BEN</th>
                              <th className="p-2 text-center">Savings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="p-2">Germany</td>
                              <td className="p-2 text-center text-red-600 font-bold">26.375%</td>
                              <td className="p-2 text-center text-green-600 font-bold">15%</td>
                              <td className="p-2 text-center">11.375%</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2">France</td>
                              <td className="p-2 text-center text-red-600 font-bold">30%</td>
                              <td className="p-2 text-center text-green-600 font-bold">15%</td>
                              <td className="p-2 text-center">15%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2">Switzerland</td>
                              <td className="p-2 text-center text-red-600 font-bold">35%</td>
                              <td className="p-2 text-center text-orange-600 font-bold">35%*</td>
                              <td className="p-2 text-center text-xs">*Must reclaim separately</td>
                            </tr>
                            <tr className="border-t bg-slate-50 dark:bg-slate-900">
                              <td className="p-2">Spain</td>
                              <td className="p-2 text-center text-red-600 font-bold">19%</td>
                              <td className="p-2 text-center text-green-600 font-bold">15%</td>
                              <td className="p-2 text-center">4%</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-2">Italy</td>
                              <td className="p-2 text-center text-red-600 font-bold">26%</td>
                              <td className="p-2 text-center text-green-600 font-bold">15%</td>
                              <td className="p-2 text-center">11%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Account Type Differences */}
                <section id="account-differences">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-orange-600" />
                    Foreign Dividends: Taxable vs IRA vs Roth IRA
                  </h2>
                  <p>
                    <strong>Account type makes a MASSIVE difference</strong> for foreign dividend taxes. The same Canadian
                    stock yielding 5% can cost you nothing extra in a taxable account, but permanently lose 15% in an IRA.
                    Here's the full breakdown:
                  </p>

                  <h3>Taxable Account: Best for Foreign Dividends</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Full Foreign Tax Credit via Form 1116</h4>
                          <p className="text-sm mb-0">
                            Taxable accounts can claim the foreign tax credit, recovering 100% of withheld taxes in most
                            cases. The 15% Canadian withholding becomes zero net cost because you get a $0.15 credit for
                            every $1 of foreign dividend.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Same Net Tax as U.S. Stocks</h4>
                          <p className="text-sm mb-0">
                            After the foreign tax credit, your total tax (foreign + U.S. - credit) equals what you'd pay
                            on a U.S. stock with qualified dividends. Foreign stocks are NOT more expensive in taxable accounts.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Works for Any Withholding Rate</h4>
                          <p className="text-sm mb-0">
                            Whether it's 10% (Japan), 15% (Canada/Europe), or even 35% (Switzerland), you get credit for
                            the full amount. The higher the foreign withholding, the bigger the credit.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Traditional IRA: Worst for Foreign Dividends</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Cannot Claim Foreign Tax Credit</h4>
                          <p className="text-sm mb-0">
                            IRAs are tax-exempt entities that don't file tax returns. Since they pay no U.S. taxes, they
                            can't claim foreign tax credits. The 15% foreign withholding is a permanent loss.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Double Tax Problem</h4>
                          <p className="text-sm mb-0">
                            You lose 15% to foreign withholding, then pay ordinary income tax (22-37%) when you withdraw
                            from the Traditional IRA. Total tax burden: 15% + (85% × 24%) = 35.4%. Much worse than the
                            15% you'd pay in a taxable account!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Destroys High-Yield Returns</h4>
                          <p className="text-sm mb-0">
                            A 7% yielding Canadian stock becomes 5.95% after 15% withholding in an IRA. That's a 1.05%
                            permanent drag on returns. Over 30 years, this costs tens of thousands of dollars.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Roth IRA: Also Bad for Foreign Dividends</h3>
                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Same Problem: No Foreign Tax Credit</h4>
                          <p className="text-sm mb-0">
                            Roth IRAs also can't claim Form 1116 credits. The 15% withholding is lost forever. While Roth
                            IRAs are fantastic for U.S. dividends (tax-free!), they're suboptimal for foreign dividends.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Better Than Traditional IRA, Worse Than Taxable</h4>
                          <p className="text-sm mb-0">
                            At least Roth withdrawals are tax-free, so you avoid the double-tax problem of Traditional IRAs.
                            But you still lose 15% to withholding vs 0% net loss in a taxable account with Form 1116.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-1">Exception: UK/Australia Stocks (0% Withholding)</h4>
                          <p className="text-sm mb-0">
                            If you stick to UK and Australian stocks with zero withholding, Roth IRAs work great. BP, Shell,
                            HSBC, BHP pay full dividends with no foreign tax. These become 100% tax-free in a Roth!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Account Type Comparison Table</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                              <th className="p-3 text-left">Account Type</th>
                              <th className="p-3 text-center">Foreign Withholding</th>
                              <th className="p-3 text-center">Form 1116 Credit</th>
                              <th className="p-3 text-center">U.S. Tax</th>
                              <th className="p-3 text-center">Total Tax</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t bg-green-50 dark:bg-green-950/30">
                              <td className="p-3 font-semibold">Taxable Account</td>
                              <td className="p-3 text-center">15%</td>
                              <td className="p-3 text-center text-green-600 font-bold">-15%</td>
                              <td className="p-3 text-center">15%</td>
                              <td className="p-3 text-center font-bold text-green-600">15%</td>
                            </tr>
                            <tr className="border-t bg-orange-50 dark:bg-orange-950/30">
                              <td className="p-3 font-semibold">Roth IRA</td>
                              <td className="p-3 text-center">15%</td>
                              <td className="p-3 text-center text-red-600 font-bold">N/A</td>
                              <td className="p-3 text-center">0%</td>
                              <td className="p-3 text-center font-bold text-orange-600">15%</td>
                            </tr>
                            <tr className="border-t bg-red-50 dark:bg-red-950/30">
                              <td className="p-3 font-semibold">Traditional IRA</td>
                              <td className="p-3 text-center">15%</td>
                              <td className="p-3 text-center text-red-600 font-bold">N/A</td>
                              <td className="p-3 text-center">24%</td>
                              <td className="p-3 text-center font-bold text-red-600">35.4%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                        *Example assumes 15% Canadian withholding, 15% qualified dividend rate (taxable), 24% ordinary
                        income bracket (Traditional IRA withdrawal). Traditional IRA total tax = 15% + (85% × 24%) = 35.4%.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Real Tax Examples */}
                <section id="real-examples">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-indigo-600" />
                    Real Tax Impact Examples
                  </h2>
                  <p>
                    Let's see the actual dollar impact of foreign withholding taxes across different account types and
                    countries. These examples show 30-year results with dividend reinvestment.
                  </p>

                  <h3>Example 1: $25,000 Canadian Stock Portfolio (5% Yield, 15% Withholding)</h3>
                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-sm font-semibold">Stock: Enbridge (ENB) - Canadian pipeline company paying 5% yield</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-green-500">
                            <h4 className="font-bold text-sm mb-2 text-green-600">Taxable Account (Winner)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$1,250</span></p>
                              <p>Canadian Withholding: <span className="text-red-600">-$188</span></p>
                              <p>Received: <span className="font-bold">$1,062</span></p>
                              <p>Form 1116 Credit: <span className="text-green-600">+$188</span></p>
                              <p>U.S. Tax (15%): <span className="text-orange-600">-$188</span></p>
                              <p className="border-t pt-1 mt-2">Net After-Tax: <span className="font-bold text-lg text-green-600">$1,062</span></p>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Effective tax: 15% total</p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-orange-500">
                            <h4 className="font-bold text-sm mb-2 text-orange-600">Roth IRA</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$1,250</span></p>
                              <p>Canadian Withholding: <span className="text-red-600">-$188</span></p>
                              <p>Received: <span className="font-bold">$1,062</span></p>
                              <p>Form 1116 Credit: <span className="text-red-600">Not Available</span></p>
                              <p>U.S. Tax: <span className="text-green-600">$0</span></p>
                              <p className="border-t pt-1 mt-2">Net After-Tax: <span className="font-bold text-lg text-orange-600">$1,062</span></p>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Effective tax: 15% permanent loss</p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-red-500">
                            <h4 className="font-bold text-sm mb-2 text-red-600">Traditional IRA (Worst)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$1,250</span></p>
                              <p>Canadian Withholding: <span className="text-red-600">-$188</span></p>
                              <p>Received: <span className="font-bold">$1,062</span></p>
                              <p>Form 1116 Credit: <span className="text-red-600">Not Available</span></p>
                              <p>U.S. Tax at Withdrawal (24%): <span className="text-red-600">-$255</span></p>
                              <p className="border-t pt-1 mt-2">Net After-Tax: <span className="font-bold text-lg text-red-600">$807</span></p>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Effective tax: 35.4% total</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                          <p className="font-bold text-sm mb-2">30-Year Impact (with dividend reinvestment at 7% annual growth):</p>
                          <ul className="text-sm space-y-1">
                            <li>Taxable Account: <span className="font-bold text-green-600">$190,459</span></li>
                            <li>Roth IRA: <span className="font-bold text-orange-600">$161,890</span> (lose $28,569 to permanent withholding)</li>
                            <li>Traditional IRA: <span className="font-bold text-red-600">$122,926</span> (lose $67,533 to double taxation)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 2: $50,000 UK Stock Portfolio (4% Yield, 0% Withholding)</h3>
                  <Card className="my-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-sm font-semibold">Stock: BP plc - British oil major with 0% withholding for U.S. investors</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-blue-600">Taxable Account</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$2,000</span></p>
                              <p>UK Withholding: <span className="text-green-600">$0 (treaty)</span></p>
                              <p>U.S. Tax (15%): <span className="text-orange-600">-$300</span></p>
                              <p className="border-t pt-1 mt-2">Net After-Tax: <span className="font-bold text-lg">$1,700</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-green-500">
                            <h4 className="font-bold text-sm mb-2 text-green-600">Roth IRA (Best!)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$2,000</span></p>
                              <p>UK Withholding: <span className="text-green-600">$0 (treaty)</span></p>
                              <p>U.S. Tax: <span className="text-green-600">$0 (Roth)</span></p>
                              <p className="border-t pt-1 mt-2">Net After-Tax: <span className="font-bold text-lg text-green-600">$2,000</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-orange-600">Traditional IRA</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$2,000</span></p>
                              <p>UK Withholding: <span className="text-green-600">$0 (treaty)</span></p>
                              <p>U.S. Tax at Withdrawal (24%): <span className="text-red-600">-$480</span></p>
                              <p className="border-t pt-1 mt-2">Net After-Tax: <span className="font-bold text-lg">$1,520</span></p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                          <p className="font-bold text-sm">Key Insight: UK Stocks Are Perfect for Roth IRAs</p>
                          <p className="text-sm mt-1">
                            With 0% UK withholding, Roth IRAs become the best account - you get 100% tax-free dividends. BP,
                            Shell, HSBC, Unilever all have this advantage. This is the rare case where Roth beats taxable for
                            international stocks.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 3: $30,000 Swiss Stock (3.5% Yield, 35% Initial Withholding)</h3>
                  <Card className="my-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-sm font-semibold">Stock: Nestlé (NSRGY) - Swiss consumer goods with brutal 35% withholding</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-blue-600">Taxable (Can Reclaim)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$1,050</span></p>
                              <p>Swiss Withholding (35%): <span className="text-red-600">-$368</span></p>
                              <p>Received Initially: <span className="font-bold">$682</span></p>
                              <p className="text-xs text-green-600 mt-2">Can reclaim 20% via Swiss tax forms (slow, complex process)</p>
                              <p>Reclaim Amount: <span className="text-green-600">+$210</span></p>
                              <p className="border-t pt-1 mt-2">Effective Withholding: <span className="font-bold">15% ($158)</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-red-500">
                            <h4 className="font-bold text-sm mb-2 text-red-600">Roth IRA (Disaster)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$1,050</span></p>
                              <p>Swiss Withholding (35%): <span className="text-red-600">-$368</span></p>
                              <p>Received: <span className="font-bold">$682</span></p>
                              <p className="text-xs text-red-600 mt-2">Cannot reclaim - 35% permanent loss</p>
                              <p className="border-t pt-1 mt-2">Effective Tax: <span className="font-bold text-lg text-red-600">35%</span></p>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-red-500">
                            <h4 className="font-bold text-sm mb-2 text-red-600">Traditional IRA (Worse)</h4>
                            <div className="space-y-1 text-sm">
                              <p>Annual Dividend: <span className="font-bold">$1,050</span></p>
                              <p>Swiss Withholding (35%): <span className="text-red-600">-$368</span></p>
                              <p>Received: <span className="font-bold">$682</span></p>
                              <p>U.S. Tax (24% on gross): <span className="text-red-600">-$252</span></p>
                              <p className="border-t pt-1 mt-2">Net: <span className="font-bold text-lg text-red-600">$430</span></p>
                              <p className="text-xs">Effective tax: 59% total!</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                          <p className="font-bold text-sm text-red-700 dark:text-red-400">Warning: Avoid Swiss Stocks in IRAs</p>
                          <p className="text-sm mt-1">
                            Swiss stocks like Nestlé, Novartis, and Roche withhold 35% with no IRA reclaim option. This makes
                            them extremely tax-inefficient in retirement accounts. Only hold Swiss stocks in taxable accounts
                            where you can file Swiss reclaim forms.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Optimization Strategies */}
                <section id="optimization">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    Strategies to Minimize Foreign Withholding Tax
                  </h2>
                  <p>
                    Smart investors use these strategies to reduce or eliminate foreign withholding taxes on international
                    dividend income:
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Priority Ranking: Account & Country Strategy</h3>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-purple-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-purple-600 mt-1">Strategy 1</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Focus on UK & Australia (0% Withholding)</h4>
                              <p className="text-sm mb-2">
                                Prioritize stocks from countries with zero withholding. UK and Australian stocks pay full
                                dividends with no foreign tax drag.
                              </p>
                              <p className="text-sm font-semibold mb-1">Top Zero-Withholding Stocks:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>UK: BP (5.2%), Shell (4.0%), HSBC (6.8%), Unilever (3.8%), GSK (4.2%)</li>
                                <li>Australia: BHP (5.4%), Rio Tinto (6.2%), Fortescue Metals (8.5%)</li>
                                <li>Ireland: Certain REITs and pharma companies (0% withholding)</li>
                              </ul>
                              <p className="text-sm mt-2 text-green-700 dark:text-green-400">
                                <strong>Best for:</strong> Roth IRAs and Traditional IRAs where you can't use Form 1116
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-blue-600 mt-1">Strategy 2</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Use Taxable Accounts for 15% Countries</h4>
                              <p className="text-sm mb-2">
                                Canada, Germany, France, Netherlands all withhold 15% but it's fully recoverable via Form
                                1116 in taxable accounts. Don't avoid these stocks - just use the right account.
                              </p>
                              <p className="text-sm font-semibold mb-1">High-Quality 15% Withholding Stocks:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>Canada: TD Bank (4.8%), Enbridge (6.7%), Royal Bank (4.2%)</li>
                                <li>France: TotalEnergies (4.8%), Sanofi (3.9%), Air Liquide (1.9%)</li>
                                <li>Germany: Allianz (5.1%), SAP (1.3%), Deutsche Telekom (3.8%)</li>
                              </ul>
                              <p className="text-sm mt-2 text-blue-700 dark:text-blue-400">
                                <strong>Best for:</strong> Taxable accounts where Form 1116 makes withholding cost = $0
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-orange-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-orange-600 mt-1">Strategy 3</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Avoid High-Withholding Countries in IRAs</h4>
                              <p className="text-sm mb-2">
                                Never hold Swiss (35%), Spanish (15%+), or Italian (15%+) stocks in IRAs. The permanent
                                tax loss destroys returns. Save IRA space for U.S. stocks or UK/Australia.
                              </p>
                              <p className="text-sm font-semibold mb-1">Stocks to AVOID in IRAs:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>Switzerland: Nestlé (35%), Novartis (35%), Roche (35%) - brutal loss</li>
                                <li>Nordic countries: Often 15-30% withholding, complex reclaim</li>
                                <li>Emerging markets: Variable rates, forex risks, difficult reclaims</li>
                              </ul>
                              <p className="text-sm mt-2 text-orange-700 dark:text-orange-400">
                                <strong>Rule:</strong> If withholding is over 15% or country has no U.S. treaty, keep it
                                out of retirement accounts
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-indigo-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-indigo-600 mt-1">Strategy 4</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">Use U.S.-Listed International ETFs Strategically</h4>
                              <p className="text-sm mb-2">
                                International ETFs like VXUS, VEU, and EFA hold foreign stocks and face withholding taxes.
                                BUT some ETFs are more tax-efficient than others.
                              </p>
                              <p className="text-sm font-semibold mb-1">ETF Tax Efficiency Tips:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>Vanguard ETFs can claim foreign tax credits at fund level (you still see withholding)</li>
                                <li>Your 1099-DIV shows foreign taxes paid - you can claim Form 1116 on the passthrough</li>
                                <li>Avoid international ETFs in IRAs unless heavily weighted to UK/Australia/Ireland</li>
                              </ul>
                              <p className="text-sm mt-2 text-indigo-700 dark:text-indigo-400">
                                <strong>Best Practice:</strong> Hold broad international ETFs in taxable, individual foreign
                                stocks in IRAs only if 0% withholding
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-teal-500">
                          <div className="flex items-start gap-3">
                            <Badge className="bg-teal-600 mt-1">Strategy 5</Badge>
                            <div className="flex-1">
                              <h4 className="font-bold mb-2">File W-8BEN Forms for All Accounts</h4>
                              <p className="text-sm mb-2">
                                Even if your broker auto-files, verify your W-8BEN is on file and current (expires every 3
                                years). Without it, you face statutory rates 10-20% higher.
                              </p>
                              <p className="text-sm font-semibold mb-1">W-8BEN Verification Checklist:</p>
                              <ul className="text-sm space-y-1 ml-4">
                                <li>Log into brokerage account → Tax Forms → International Tax Certification</li>
                                <li>Verify status is "Active" and expiration is not within 6 months</li>
                                <li>If expired, recertify electronically (takes 5 minutes)</li>
                                <li>Check that treaty country is "United States" and residency is correct</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Sample Optimized International Portfolio</h3>
                  <Card className="my-6">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">$100,000 Tax-Optimized Global Dividend Portfolio</h4>
                      <div className="space-y-3 mb-6">
                        <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Roth IRA: $30,000 (0% Withholding Stocks Only)</h4>
                            <Badge variant="secondary">30% of total</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>$12,000 - BP plc (UK) - 5.2% yield, 0% withholding</p>
                            <p>$10,000 - HSBC (UK) - 6.8% yield, 0% withholding</p>
                            <p>$8,000 - BHP Group (Australia) - 5.4% yield, 0% withholding</p>
                            <p className="font-bold text-green-600 mt-2">Annual Dividends: $1,836 (100% TAX-FREE)</p>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Taxable Account: $50,000 (15% Countries - Full Credit)</h4>
                            <Badge variant="secondary">50% of total</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>$15,000 - Enbridge (Canada) - 6.7% yield, 15% withholding</p>
                            <p>$15,000 - TotalEnergies (France) - 4.8% yield, 15% withholding</p>
                            <p>$10,000 - SAP (Germany) - 1.3% yield, 15% withholding</p>
                            <p>$10,000 - TD Bank (Canada) - 4.8% yield, 15% withholding</p>
                            <p className="font-bold text-blue-600 mt-2">Annual Dividends: $2,615 (15% withheld, 100% recoverable via Form 1116)</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Net cost after foreign tax credit: $0</p>
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Traditional 401k: $20,000 (U.S. Stocks Only - No Foreign)</h4>
                            <Badge variant="secondary">20% of total</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>$20,000 - VTI (Total U.S. Market) - 1.5% yield, 0% foreign withholding</p>
                            <p className="font-bold text-green-600 mt-2">Avoid international stocks in Traditional 401k due to double-tax problem</p>
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border-2 border-green-500">
                          <h4 className="font-bold mb-2">Portfolio Summary:</h4>
                          <div className="text-sm space-y-1">
                            <p>Total Annual Dividends: ~$4,751</p>
                            <p>Foreign Taxes Withheld: $392 (on taxable account)</p>
                            <p>Foreign Tax Credit (Form 1116): -$392</p>
                            <p className="font-bold text-green-600 mt-2">Net Foreign Tax Cost: $0</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                              By using Roth for UK/Australia, taxable for 15% countries, and avoiding foreign stocks in
                              Traditional 401k, you completely eliminate foreign withholding tax drag.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Country-Specific Quirks */}
                <section id="special-countries">
                  <h2 className="flex items-center gap-2">
                    <Flag className="h-7 w-7 text-orange-600" />
                    Country-Specific Tax Quirks and Gotchas
                  </h2>
                  <p>
                    Each country has unique rules and complications beyond basic withholding rates. Here are the important
                    country-specific details:
                  </p>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          Switzerland: The 35% → 15% Reclaim Process
                        </h3>
                        <p className="text-sm mb-3">
                          Swiss stocks (Nestlé, Novartis, Roche) withhold 35% initially. U.S. treaty rate is 15%, but
                          reclaiming the extra 20% is complex:
                        </p>
                        <ul className="text-sm space-y-2 ml-4">
                          <li><strong>Timeline:</strong> 3-12 months for Swiss tax authority to process reclaim</li>
                          <li><strong>Forms:</strong> DA-1 form (obtainable from Swiss Federal Tax Administration)</li>
                          <li><strong>Process:</strong> Must mail physical forms with IRS certification to Swiss tax office</li>
                          <li><strong>Minimum:</strong> Often not worth it for small amounts (under $500 withheld)</li>
                          <li><strong>Alternative:</strong> Some brokers (Interactive Brokers) offer reclaim services for a fee</li>
                        </ul>
                        <p className="text-sm mt-3 text-orange-700 dark:text-orange-400">
                          <strong>Recommendation:</strong> Hold Swiss stocks in taxable accounts only, or avoid entirely if
                          the 35% → 15% reclaim hassle isn't worth it. In IRAs, the 35% is permanent - absolutely avoid.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          Canada: Fully Automated, Investor-Friendly
                        </h3>
                        <p className="text-sm mb-3">
                          Canada is the easiest foreign country for U.S. dividend investors:
                        </p>
                        <ul className="text-sm space-y-2 ml-4">
                          <li><strong>15% flat rate:</strong> Automatically withheld at source, no reclaim needed</li>
                          <li><strong>W-8BEN automatic:</strong> Most brokers handle certification automatically</li>
                          <li><strong>1099-DIV reporting:</strong> Foreign taxes shown in Box 7, easy Form 1116</li>
                          <li><strong>ADR availability:</strong> Major Canadian banks/pipelines trade as ADRs (TD, RY, ENB)</li>
                          <li><strong>No forex issues:</strong> CAD/USD pairs are liquid and stable</li>
                        </ul>
                        <p className="text-sm mt-3 text-green-700 dark:text-green-400">
                          <strong>Recommendation:</strong> Canadian dividend stocks are great for taxable accounts. The 15%
                          withholding is fully recoverable and the process is seamless. Avoid in IRAs unless yield is exceptional.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          Germany: Two-Step Withholding System
                        </h3>
                        <p className="text-sm mb-3">
                          Germany has a 26.375% statutory rate (25% + 5.5% solidarity surcharge) that reduces to 15% with W-8BEN:
                        </p>
                        <ul className="text-sm space-y-2 ml-4">
                          <li><strong>Automatic reduction:</strong> W-8BEN on file = 15% withholding automatically</li>
                          <li><strong>Without W-8BEN:</strong> 26.375% withheld, must file German reclaim forms (slow)</li>
                          <li><strong>Church tax:</strong> Germany adds church tax for residents (doesn't apply to U.S. investors)</li>
                          <li><strong>ADRs available:</strong> SAP, Siemens, Allianz trade as ADRs on U.S. exchanges</li>
                        </ul>
                        <p className="text-sm mt-3 text-blue-700 dark:text-blue-400">
                          <strong>Recommendation:</strong> Ensure W-8BEN is filed to get 15% rate. In taxable accounts, fully
                          recoverable. In IRAs, 15% permanent loss - consider UK alternatives instead.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          France: Reformed to 15% (Was 30%)
                        </h3>
                        <p className="text-sm mb-3">
                          France historically withheld 30% but now honors 15% treaty rate automatically:
                        </p>
                        <ul className="text-sm space-y-2 ml-4">
                          <li><strong>Current rate:</strong> 15% with W-8BEN on file (down from 30% pre-2019)</li>
                          <li><strong>Social charges:</strong> 17.2% French social charges DO NOT apply to non-residents</li>
                          <li><strong>Popular ADRs:</strong> TotalEnergies (TTE), LVMH, Sanofi (SNY), Air Liquide (AIQUY)</li>
                          <li><strong>Tax treaty:</strong> U.S.-France treaty prevents double taxation effectively</li>
                        </ul>
                        <p className="text-sm mt-3 text-blue-700 dark:text-blue-400">
                          <strong>Recommendation:</strong> French stocks are now as tax-efficient as Canadian stocks. Hold in
                          taxable accounts for full Form 1116 recovery. Great dividend payers like TotalEnergies (4.8% yield).
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          Japan: Favorable 10% Rate
                        </h3>
                        <p className="text-sm mb-3">
                          Japan offers a lower 10% withholding rate under the U.S. treaty:
                        </p>
                        <ul className="text-sm space-y-2 ml-4">
                          <li><strong>10% treaty rate:</strong> Lower than most countries, making Japanese stocks attractive</li>
                          <li><strong>W-8BEN required:</strong> Without it, 20.42% statutory rate (20% + 2.1% reconstruction tax)</li>
                          <li><strong>ADR availability:</strong> Toyota (TM), Sony (SONY), Mitsubishi UFJ (MUFG), Honda (HMC)</li>
                          <li><strong>Lower yields:</strong> Japanese stocks typically yield 2-4% vs 5-8% for European alternatives</li>
                        </ul>
                        <p className="text-sm mt-3 text-green-700 dark:text-green-400">
                          <strong>Recommendation:</strong> Japanese stocks are tax-efficient due to 10% rate. In taxable accounts,
                          fully recoverable. Even in IRAs, 10% loss is more tolerable than 15% (but still avoid if possible).
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Flag className="h-5 w-5" />
                          Brazil: 0% Withholding, But Forex Risk
                        </h3>
                        <p className="text-sm mb-3">
                          Brazil has zero withholding on dividends for U.S. investors, but currency volatility is extreme:
                        </p>
                        <ul className="text-sm space-y-2 ml-4">
                          <li><strong>0% withholding:</strong> Best rate globally - no foreign taxes at all</li>
                          <li><strong>BRL volatility:</strong> Brazilian real can swing 20-40% per year vs USD</li>
                          <li><strong>ADRs available:</strong> Vale (VALE), Petrobras (PBR), Itau (ITUB), Ambev (ABEV)</li>
                          <li><strong>High yields:</strong> 6-10% common, but quality varies widely</li>
                          <li><strong>Political risk:</strong> Government intervention, policy changes affect dividends</li>
                        </ul>
                        <p className="text-sm mt-3 text-orange-700 dark:text-orange-400">
                          <strong>Recommendation:</strong> 0% withholding is attractive, but forex and political risks often
                          outweigh tax benefits. Only for risk-tolerant investors. Can work in any account type since no withholding.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Calculator Section */}
                <section id="calculator" className="not-prose">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h2 className="text-3xl font-bold mb-4 text-white">Calculate Your Foreign Tax Impact</h2>
                      <p className="mb-6 text-blue-100">
                        Use our dividend calculators to model the exact tax impact of foreign withholding across different
                        account types. See how much you'll really keep after foreign and U.S. taxes.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <Calculator className="h-5 w-5" />
                            DRIP Calculator (with foreign tax modeling)
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <TrendingDown className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <CreditCard className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/yield-on-cost">
                          <Button size="lg" variant="secondary" className="gap-2 w-full">
                            <Percent className="h-5 w-5" />
                            Yield-on-Cost Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for International Dividend Investing</h2>
                  <p>
                    Choose a broker that handles foreign tax withholding efficiently, provides clear 1099-DIV reporting with
                    Box 7 foreign taxes, and offers W-8BEN certification. These top brokers excel at international investing:
                  </p>
                  <BrokerComparisonTable />
                  <Card className="mt-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">What to Look for in a Broker for Foreign Dividends:</h3>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>1099-DIV Box 7 accuracy:</strong> Foreign taxes must be correctly reported for Form 1116</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>W-8BEN automation:</strong> Broker should file and renew W-8BEN forms automatically</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>Wide ADR selection:</strong> Access to major international stocks via American Depositary Receipts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>Foreign exchange:</strong> Ability to trade on foreign exchanges (advanced) with competitive FX rates</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span><strong>Tax support:</strong> Clear documentation and customer service for foreign tax questions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

              </div>

              {/* FAQ Section */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900" id="faq">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Can I avoid foreign dividend tax withholding entirely?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Yes, by investing exclusively in UK and Australian stocks which have 0% withholding for U.S.
                        investors. Stocks like BP, Shell, HSBC, BHP, and Rio Tinto pay full dividends with no foreign tax.
                        Alternatively, hold foreign stocks in taxable accounts and use Form 1116 to recover all withheld
                        taxes, making the net cost zero.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Is Form 1116 difficult to file?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Not at all. Most tax software (TurboTax, H&R Block, TaxAct) auto-generates Form 1116 from your
                        1099-DIV. You just import your 1099-DIV and the software handles the rest. If foreign taxes are
                        under $300 ($600 married), you can skip Form 1116 and claim the credit directly on Schedule 3.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Can I claim foreign tax credits on dividends received in my Roth IRA?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        No. Roth IRAs are tax-exempt entities that don't pay U.S. taxes, so they can't claim tax credits.
                        Foreign withholding taxes on dividends in a Roth IRA are lost forever. This makes Roth IRAs
                        suboptimal for foreign stocks except those with 0% withholding (UK, Australia).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What happens if I don't file Form W-8BEN with my broker?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Foreign countries will withhold at their statutory rate instead of the treaty rate. For example,
                        Germany withholds 26.375% without W-8BEN vs 15% with it. France withholds 30% vs 15%. You lose
                        10-15% more of your dividends. Most brokers auto-file W-8BEN when you open an account, but verify
                        it's on file and current (expires every 3 years).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Are ADRs and foreign stocks taxed differently?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        No. American Depositary Receipts (ADRs) are U.S.-traded securities representing foreign stocks. The
                        foreign withholding tax is identical whether you buy the ADR (e.g., BP on NYSE) or the underlying
                        stock (BP on London Stock Exchange). ADRs are simply more convenient for U.S. investors - same tax
                        treatment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Should I hold international dividend ETFs in my IRA or taxable account?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Taxable account is better. International ETFs like VXUS, VEU, and VYMI hold foreign stocks that face
                        withholding taxes. In a taxable account, the ETF passes through foreign taxes to you via 1099-DIV
                        Box 7, allowing you to claim Form 1116. In an IRA, those taxes are lost with no credit. The tax drag
                        is typically 0.3-0.7% annually in IRAs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How long does it take to reclaim Swiss withholding taxes?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Swiss tax reclaims typically take 3-12 months. You must file form DA-1 with the Swiss Federal Tax
                        Administration, get IRS certification, and mail physical documents to Switzerland. It's slow and
                        bureaucratic. For small amounts (under $500 withheld), it may not be worth the hassle. Some brokers
                        like Interactive Brokers offer reclaim services for a fee.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What's the best account type for Canadian dividend stocks?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Taxable account is best. Canadian stocks withhold 15%, but it's fully recoverable via Form 1116 in
                        taxable accounts. In an IRA, the 15% is lost forever. Canadian banks (TD, RY, BMO) and pipelines
                        (ENB, TRP) are excellent dividend payers, but hold them in taxable accounts to avoid permanent tax loss.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Do I need to file foreign tax forms in the foreign country?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Usually not. For most countries with U.S. tax treaties (Canada, UK, Germany, France, Japan), the
                        withholding is automatic and final - no foreign tax filing required. Switzerland is the major
                        exception where you must file Swiss forms to reclaim the 35% → 15% difference. Your U.S. tax return
                        (Form 1116) is typically the only filing needed.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Are there any countries with zero withholding besides UK and Australia?</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Yes. Ireland has 0% withholding under the U.S. treaty. Brazil also has 0% withholding but comes with
                        extreme currency risk (Brazilian real volatility). Hong Kong has 0% withholding as well. Some Middle
                        Eastern countries (UAE) have zero withholding but limited publicly-traded dividend stocks available
                        to U.S. investors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/best-international-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best International Dividend Stocks 2026
                    </Link>
                    <Link href="/blog/best-canadian-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Canadian Dividend Stocks (15% Withholding)
                    </Link>
                    <Link href="/blog/best-account-for-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Account for Dividend Stocks: Roth vs Taxable vs 401k
                    </Link>
                    <Link href="/blog/dividend-tax-guide-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Dividend Tax Guide 2026
                    </Link>
                    <Link href="/blog/qualified-vs-ordinary-dividends-explained" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Qualified vs Ordinary Dividends Explained
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
