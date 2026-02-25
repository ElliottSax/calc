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
  Calculator,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  FileText,
  Globe,
  Percent,
  Target,
  Info
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Tax Rates 2026: Complete Guide with Tax Tables & Examples',
  description: 'Ultimate guide to dividend tax rates 2026. Complete federal tax brackets, qualified vs ordinary dividends, state taxes, foreign dividends, and planning strategies with real examples.',
  keywords: 'dividend tax rate, dividend tax rate 2026, qualified dividend tax rate, ordinary dividend tax rate, dividend tax brackets, dividend taxes, how are dividends taxed',
  openGraph: {
    title: 'Dividend Tax Rates 2026: Complete Guide with Examples',
    description: 'Everything you need to know about dividend taxes in 2026. Complete tax tables, qualified vs ordinary dividends, and tax-saving strategies.',
    type: 'article',
  }
}

export default function DividendTaxRate2026Page() {
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
                <Badge className="mb-4">Tax Planning 2026</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Dividend Tax Rates 2026: Complete Guide with Examples
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Everything you need to know about dividend taxes in 2026. Complete federal tax brackets,
                  qualified vs ordinary dividends, state taxes, foreign dividends, and strategies to minimize
                  your tax bill. Includes real-world examples at every income level.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Tax Expert Reviewed
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Answer: What Are Dividend Tax Rates in 2026?
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Qualified Dividends:</strong> 0%, 15%, or 20% federal tax based on your income bracket (same as long-term capital gains)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Ordinary Dividends:</strong> Taxed at your regular income tax rate (10-37%)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Most Common:</strong> If you're married filing jointly earning under $94,050, you pay 0% on qualified dividends. Above that: 15% until $583,750, then 20%.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't Forget:</strong> High earners pay an additional 3.8% Net Investment Income Tax (NIIT) on dividends</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#how-dividends-taxed" className="text-blue-600 hover:underline">How Dividends Are Taxed</a></li>
                    <li><a href="#qualified-vs-ordinary" className="text-blue-600 hover:underline">Qualified vs Ordinary</a></li>
                    <li><a href="#2026-tax-brackets" className="text-blue-600 hover:underline">2026 Tax Brackets</a></li>
                    <li><a href="#qualified-dividend-rates" className="text-blue-600 hover:underline">Qualified Dividend Rates</a></li>
                    <li><a href="#ordinary-dividend-rates" className="text-blue-600 hover:underline">Ordinary Dividend Rates</a></li>
                    <li><a href="#examples" className="text-blue-600 hover:underline">Real-World Examples</a></li>
                    <li><a href="#state-taxes" className="text-blue-600 hover:underline">State Dividend Taxes</a></li>
                    <li><a href="#niit" className="text-blue-600 hover:underline">3.8% NIIT Surtax</a></li>
                    <li><a href="#foreign-dividends" className="text-blue-600 hover:underline">Foreign Dividends</a></li>
                    <li><a href="#tax-strategies" className="text-blue-600 hover:underline">Tax Minimization Strategies</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* How Dividends Are Taxed */}
                <section id="how-dividends-taxed">
                  <h2 className="flex items-center gap-2">
                    <FileText className="h-7 w-7 text-blue-600" />
                    How Are Dividends Taxed?
                  </h2>
                  <p>
                    Dividends are cash payments companies distribute to shareholders from their profits. The IRS
                    treats dividends as taxable income, but the tax rate you pay depends on two critical factors:
                  </p>
                  <ol>
                    <li><strong>Type of dividend:</strong> Qualified vs. Ordinary (Non-Qualified)</li>
                    <li><strong>Your income level:</strong> Determines which tax bracket applies</li>
                  </ol>
                  <p>
                    Unlike regular wages (which are always taxed at ordinary income rates), <strong>qualified
                    dividends get preferential tax treatment</strong> with rates as low as 0% for lower-income
                    investors. This is why dividend investing can be so tax-efficient when structured properly.
                  </p>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Info className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Key Tax Forms You'll Receive</h4>
                          <p className="text-sm mb-2"><strong>Form 1099-DIV:</strong> Your broker sends this by January 31st showing all dividends received in the previous year. Box 1a shows total ordinary dividends. Box 1b shows the portion that qualifies for lower qualified dividend rates.</p>
                          <p className="text-sm mb-0"><strong>Form 1040:</strong> Report dividends on Schedule B if over $1,500 total, or directly on Form 1040, line 3b.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Qualified vs Ordinary */}
                <section id="qualified-vs-ordinary">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-purple-600" />
                    Qualified vs. Ordinary Dividends: The Critical Difference
                  </h2>
                  <p>
                    This is the most important concept in dividend taxation. The difference between qualified and
                    ordinary dividends can mean paying 0-20% vs. 10-37% tax on the same dividend income.
                  </p>

                  <h3>Qualified Dividends (Lower Tax Rates: 0%, 15%, 20%)</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-3">A dividend is "qualified" if it meets ALL three requirements:</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">1. Paid by U.S. Corporation or Qualified Foreign Corporation</h4>
                            <p className="text-sm mb-0">Most stocks you own qualify: Apple, Microsoft, Johnson & Johnson, etc. Includes foreign stocks listed on major U.S. exchanges.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">2. Holding Period: 60 Days During 121-Day Window</h4>
                            <p className="text-sm mb-0">You must hold the stock for at least 61 days during the 121-day period that begins 60 days before the ex-dividend date. This prevents tax arbitrage from buying right before the dividend.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-base mb-1">3. Not Listed as Non-Qualified by IRS</h4>
                            <p className="text-sm mb-0">Excludes: REIT dividends, master limited partnerships (MLPs), employee stock options, dividends from tax-exempt companies, capital gain distributions.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Ordinary (Non-Qualified) Dividends (Higher Tax Rates: 10-37%)</h3>
                  <Card className="my-6 bg-red-50 dark:bg-red-950/50">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-3">These dividends are taxed at your regular income tax rate:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>REIT dividends:</strong> Real estate investment trusts (99% of REIT dividends are ordinary income)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>MLP distributions:</strong> Master limited partnerships in oil/gas</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Money market fund dividends:</strong> Technically interest, not dividends</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Short-term holdings:</strong> Stocks held less than 61 days (day traders beware!)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Dividends on shorted stock:</strong> Payments in lieu of dividends</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Real-World Example: REIT vs. Stock Dividend</h4>
                          <p className="text-sm mb-2"><strong>Scenario:</strong> You're in the 24% federal tax bracket and receive $5,000 in dividends:</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li><strong>Realty Income (REIT):</strong> $5,000 × 24% = $1,200 tax (ordinary dividend)</li>
                            <li><strong>Apple (Tech Stock):</strong> $5,000 × 15% = $750 tax (qualified dividend)</li>
                            <li><strong>Tax Savings:</strong> $450 by choosing qualified dividend stock over REIT</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* 2026 Tax Brackets */}
                <section id="2026-tax-brackets">
                  <h2>2026 Federal Income Tax Brackets (Ordinary Income)</h2>
                  <p>
                    First, let's establish the ordinary income tax brackets for 2026. These apply to wages, ordinary
                    dividends, short-term capital gains, and most other income. The IRS adjusts these annually for
                    inflation.
                  </p>

                  <h3>Single Filers - 2026 Tax Brackets</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Taxable Income Range</th>
                          <th className="border p-3 text-left">Base Tax + % on Excess</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">10%</td>
                          <td className="border p-3">$0 to $11,600</td>
                          <td className="border p-3">$0 + 10%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">12%</td>
                          <td className="border p-3">$11,601 to $47,150</td>
                          <td className="border p-3">$1,160 + 12%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">22%</td>
                          <td className="border p-3">$47,151 to $100,525</td>
                          <td className="border p-3">$5,426 + 22%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">24%</td>
                          <td className="border p-3">$100,526 to $191,950</td>
                          <td className="border p-3">$17,168.50 + 24%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">32%</td>
                          <td className="border p-3">$191,951 to $243,725</td>
                          <td className="border p-3">$39,110.50 + 32%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">35%</td>
                          <td className="border p-3">$243,726 to $609,350</td>
                          <td className="border p-3">$55,678.50 + 35%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">37%</td>
                          <td className="border p-3">$609,351+</td>
                          <td className="border p-3">$183,647.25 + 37%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Married Filing Jointly - 2026 Tax Brackets</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Taxable Income Range</th>
                          <th className="border p-3 text-left">Base Tax + % on Excess</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">10%</td>
                          <td className="border p-3">$0 to $23,200</td>
                          <td className="border p-3">$0 + 10%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">12%</td>
                          <td className="border p-3">$23,201 to $94,300</td>
                          <td className="border p-3">$2,320 + 12%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">22%</td>
                          <td className="border p-3">$94,301 to $201,050</td>
                          <td className="border p-3">$10,852 + 22%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">24%</td>
                          <td className="border p-3">$201,051 to $383,900</td>
                          <td className="border p-3">$34,337 + 24%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">32%</td>
                          <td className="border p-3">$383,901 to $487,450</td>
                          <td className="border p-3">$78,221 + 32%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">35%</td>
                          <td className="border p-3">$487,451 to $731,200</td>
                          <td className="border p-3">$111,357 + 35%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">37%</td>
                          <td className="border p-3">$731,201+</td>
                          <td className="border p-3">$196,669.50 + 37%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>Head of Household - 2026 Tax Brackets</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Taxable Income Range</th>
                          <th className="border p-3 text-left">Base Tax + % on Excess</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">10%</td>
                          <td className="border p-3">$0 to $16,550</td>
                          <td className="border p-3">$0 + 10%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">12%</td>
                          <td className="border p-3">$16,551 to $63,100</td>
                          <td className="border p-3">$1,655 + 12%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">22%</td>
                          <td className="border p-3">$63,101 to $100,500</td>
                          <td className="border p-3">$7,241 + 22%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">24%</td>
                          <td className="border p-3">$100,501 to $191,950</td>
                          <td className="border p-3">$15,469 + 24%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">32%</td>
                          <td className="border p-3">$191,951 to $243,700</td>
                          <td className="border p-3">$37,417 + 32%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">35%</td>
                          <td className="border p-3">$243,701 to $609,350</td>
                          <td className="border p-3">$53,977 + 35%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">37%</td>
                          <td className="border p-3">$609,351+</td>
                          <td className="border p-3">$181,954.50 + 37%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Qualified Dividend Rates */}
                <section id="qualified-dividend-rates">
                  <h2 className="flex items-center gap-2">
                    <Award className="h-7 w-7 text-green-600" />
                    Qualified Dividend Tax Rates 2026
                  </h2>
                  <p>
                    Qualified dividends receive preferential tax treatment at 0%, 15%, or 20% rates - the same as
                    long-term capital gains. Your rate depends on your taxable income and filing status.
                  </p>

                  <h3>Qualified Dividend Tax Rate Table - 2026</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-100 dark:bg-green-900">
                          <th className="border p-3 text-left">Tax Rate</th>
                          <th className="border p-3 text-left">Single</th>
                          <th className="border p-3 text-left">Married Filing Jointly</th>
                          <th className="border p-3 text-left">Head of Household</th>
                          <th className="border p-3 text-left">Married Filing Separately</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-bold text-green-600">0%</td>
                          <td className="border p-3">$0 - $47,025</td>
                          <td className="border p-3">$0 - $94,050</td>
                          <td className="border p-3">$0 - $63,000</td>
                          <td className="border p-3">$0 - $47,025</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-bold text-blue-600">15%</td>
                          <td className="border p-3">$47,026 - $518,900</td>
                          <td className="border p-3">$94,051 - $583,750</td>
                          <td className="border p-3">$63,001 - $551,350</td>
                          <td className="border p-3">$47,026 - $291,850</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-bold text-red-600">20%</td>
                          <td className="border p-3">$518,901+</td>
                          <td className="border p-3">$583,751+</td>
                          <td className="border p-3">$551,351+</td>
                          <td className="border p-3">$291,851+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">Key Insights:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>0% Rate Sweet Spot:</strong> If you're retired/semi-retired with income under $94K (married), you can receive qualified dividends TAX-FREE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>15% Rate Most Common:</strong> Covers the vast majority of middle and upper-middle class investors ($94K-$584K for couples)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>20% Only for High Earners:</strong> Only kicks in above $584K for married couples - still better than 37% ordinary income rate</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Ordinary Dividend Rates */}
                <section id="ordinary-dividend-rates">
                  <h2>Ordinary Dividend Tax Rates 2026</h2>
                  <p>
                    Ordinary (non-qualified) dividends are taxed at your regular income tax rates: 10%, 12%, 22%,
                    24%, 32%, 35%, or 37%. See the complete tax bracket tables in the section above for your exact
                    rate based on income and filing status.
                  </p>

                  <h3>Quick Reference: Ordinary Dividend Rates by Income</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-red-100 dark:bg-red-900">
                          <th className="border p-3 text-left">Your Tax Bracket</th>
                          <th className="border p-3 text-left">Ordinary Dividend Rate</th>
                          <th className="border p-3 text-left">Single Income Range</th>
                          <th className="border p-3 text-left">Married Filing Jointly</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">10%</td>
                          <td className="border p-3 font-bold text-red-600">10%</td>
                          <td className="border p-3">$0 - $11,600</td>
                          <td className="border p-3">$0 - $23,200</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">12%</td>
                          <td className="border p-3 font-bold text-red-600">12%</td>
                          <td className="border p-3">$11,601 - $47,150</td>
                          <td className="border p-3">$23,201 - $94,300</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">22%</td>
                          <td className="border p-3 font-bold text-red-600">22%</td>
                          <td className="border p-3">$47,151 - $100,525</td>
                          <td className="border p-3">$94,301 - $201,050</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">24%</td>
                          <td className="border p-3 font-bold text-red-600">24%</td>
                          <td className="border p-3">$100,526 - $191,950</td>
                          <td className="border p-3">$201,051 - $383,900</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">32%</td>
                          <td className="border p-3 font-bold text-red-600">32%</td>
                          <td className="border p-3">$191,951 - $243,725</td>
                          <td className="border p-3">$383,901 - $487,450</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">35%</td>
                          <td className="border p-3 font-bold text-red-600">35%</td>
                          <td className="border p-3">$243,726 - $609,350</td>
                          <td className="border p-3">$487,451 - $731,200</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">37%</td>
                          <td className="border p-3 font-bold text-red-600">37%</td>
                          <td className="border p-3">$609,351+</td>
                          <td className="border p-3">$731,201+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Why REIT Dividends Can Hurt</h4>
                          <p className="text-sm mb-2">REITs (Real Estate Investment Trusts) are legally required to distribute 90% of taxable income as dividends. This results in high yields (5-8%), but nearly all REIT dividends are ordinary income taxed at your full marginal rate.</p>
                          <p className="text-sm mb-0"><strong>Example:</strong> If you're in the 32% bracket and receive $10,000 in REIT dividends, you'll pay $3,200 in federal tax vs. only $1,500 (15%) if they were qualified dividends - a $1,700 difference.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Real-World Examples */}
                <section id="examples">
                  <h2 className="flex items-center gap-2">
                    <Calculator className="h-7 w-7 text-blue-600" />
                    Real-World Examples: What You'll Actually Pay
                  </h2>
                  <p>
                    Let's walk through real-world scenarios at different income levels to see exactly how dividend
                    taxes work in practice.
                  </p>

                  <h3>Example 1: Young Professional (Single, $75,000 Income)</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Profile:</strong> Single filer, $75,000 salary, $3,000 qualified dividends, $500 REIT dividends</p>
                        <div className="border-t pt-3">
                          <p className="font-semibold mb-2">Tax Calculation:</p>
                          <ul className="space-y-1 ml-4">
                            <li><strong>Ordinary Income Tax Bracket:</strong> 22% (income $47,151-$100,525)</li>
                            <li><strong>Qualified Dividend Rate:</strong> 15% (income over $47,025)</li>
                            <li><strong>Qualified Dividend Tax:</strong> $3,000 × 15% = $450</li>
                            <li><strong>REIT Dividend Tax:</strong> $500 × 22% = $110</li>
                            <li className="font-bold pt-2 border-t"><strong>Total Dividend Tax:</strong> $560</li>
                            <li className="text-green-600"><strong>Effective Rate:</strong> 16% on $3,500 total dividends</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 2: Married Couple (Both Working, $150,000 Combined)</h3>
                  <Card className="my-6 bg-purple-50 dark:bg-purple-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Profile:</strong> Married filing jointly, $150,000 salary, $8,000 qualified dividends, $2,000 REIT dividends</p>
                        <div className="border-t pt-3">
                          <p className="font-semibold mb-2">Tax Calculation:</p>
                          <ul className="space-y-1 ml-4">
                            <li><strong>Ordinary Income Tax Bracket:</strong> 22% (income $94,301-$201,050)</li>
                            <li><strong>Qualified Dividend Rate:</strong> 15% (income $94,051-$583,750)</li>
                            <li><strong>Qualified Dividend Tax:</strong> $8,000 × 15% = $1,200</li>
                            <li><strong>REIT Dividend Tax:</strong> $2,000 × 22% = $440</li>
                            <li className="font-bold pt-2 border-t"><strong>Total Dividend Tax:</strong> $1,640</li>
                            <li className="text-green-600"><strong>Effective Rate:</strong> 16.4% on $10,000 total dividends</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 3: Retiree (Living on Dividends, $60,000 Total Income)</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Profile:</strong> Married filing jointly, $30,000 Social Security + $30,000 qualified dividends + $5,000 pension</p>
                        <div className="border-t pt-3">
                          <p className="font-semibold mb-2">Tax Calculation:</p>
                          <ul className="space-y-1 ml-4">
                            <li><strong>Taxable Income:</strong> ~$50,000 (after standard deduction and partial SS exclusion)</li>
                            <li><strong>Ordinary Income Tax Bracket:</strong> 12%</li>
                            <li><strong>Qualified Dividend Rate:</strong> 0% (income under $94,050!)</li>
                            <li><strong>Qualified Dividend Tax:</strong> $30,000 × 0% = $0</li>
                            <li><strong>Pension Tax:</strong> $5,000 × 12% = $600</li>
                            <li className="font-bold pt-2 border-t text-green-600"><strong>Total Dividend Tax: $0</strong></li>
                            <li className="text-green-600"><strong>Tax Savings:</strong> $4,500 vs. if dividends were ordinary income</li>
                          </ul>
                        </div>
                        <Card className="mt-3 bg-green-100 dark:bg-green-900">
                          <CardContent className="pt-4 pb-4">
                            <p className="text-xs mb-0"><strong>Key Insight:</strong> This is the HUGE advantage of qualified dividends for retirees. By keeping total income under $94K, you pay ZERO tax on qualified dividends. This is why dividend portfolios are so powerful for retirement income.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Example 4: High Earner (Single, $600,000 Income)</h3>
                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Profile:</strong> Single filer, $550,000 salary, $50,000 qualified dividends</p>
                        <div className="border-t pt-3">
                          <p className="font-semibold mb-2">Tax Calculation:</p>
                          <ul className="space-y-1 ml-4">
                            <li><strong>Ordinary Income Tax Bracket:</strong> 37% (income over $609,350)</li>
                            <li><strong>Qualified Dividend Rate:</strong> 20% (income over $518,900)</li>
                            <li><strong>Qualified Dividend Tax:</strong> $50,000 × 20% = $10,000</li>
                            <li><strong>Net Investment Income Tax (NIIT):</strong> $50,000 × 3.8% = $1,900</li>
                            <li className="font-bold pt-2 border-t"><strong>Total Dividend Tax:</strong> $11,900</li>
                            <li className="text-yellow-600"><strong>Effective Rate:</strong> 23.8% (20% + 3.8% NIIT)</li>
                            <li className="text-green-600"><strong>Still Better Than:</strong> 37% if ordinary income - saves $6,550</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* State Taxes */}
                <section id="state-taxes">
                  <h2 className="flex items-center gap-2">
                    <Globe className="h-7 w-7 text-purple-600" />
                    State Dividend Taxes: Don't Forget Your State
                  </h2>
                  <p>
                    Federal taxes are only part of the story. Most states also tax dividend income. State tax rates
                    range from 0% (no income tax states) to 13.3% (California). Your total tax burden is federal +
                    state combined.
                  </p>

                  <h3>States With No Income Tax (0% State Dividend Tax)</h3>
                  <Card className="my-6 bg-green-50 dark:bg-green-950/50">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Alaska</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Florida</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Nevada</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>South Dakota</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Tennessee</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Texas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Washington</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Wyoming</span>
                        </div>
                      </div>
                      <p className="text-sm mt-4 mb-0"><strong>Advantage:</strong> Living in these states means you only pay federal taxes on dividends. For someone in the 15% federal qualified dividend bracket, their total tax is just 15% vs. 20-28% in high-tax states.</p>
                    </CardContent>
                  </Card>

                  <h3>High-Tax States (Highest State Dividend Tax Rates)</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-red-100 dark:bg-red-900">
                          <th className="border p-3 text-left">State</th>
                          <th className="border p-3 text-left">Top Rate</th>
                          <th className="border p-3 text-left">Federal 15% + State</th>
                          <th className="border p-3 text-left">Total Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">California</td>
                          <td className="border p-3">13.3%</td>
                          <td className="border p-3">15% + 13.3%</td>
                          <td className="border p-3 font-bold">28.3%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">New York</td>
                          <td className="border p-3">10.9%</td>
                          <td className="border p-3">15% + 10.9%</td>
                          <td className="border p-3 font-bold">25.9%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">New Jersey</td>
                          <td className="border p-3">10.75%</td>
                          <td className="border p-3">15% + 10.75%</td>
                          <td className="border p-3 font-bold">25.75%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Oregon</td>
                          <td className="border p-3">9.9%</td>
                          <td className="border p-3">15% + 9.9%</td>
                          <td className="border p-3 font-bold">24.9%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Minnesota</td>
                          <td className="border p-3">9.85%</td>
                          <td className="border p-3">15% + 9.85%</td>
                          <td className="border p-3 font-bold">24.85%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Tax Arbitrage: Where You Live Matters</h4>
                          <p className="text-sm mb-2">If you're living off $100,000 in qualified dividends:</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li><strong>Texas/Florida:</strong> $15,000 tax (15% federal only)</li>
                            <li><strong>California:</strong> $28,300 tax (15% + 13.3%)</li>
                            <li><strong>Annual Savings:</strong> $13,300 by living in no-tax state</li>
                            <li><strong>10-Year Savings:</strong> $133,000+ (with compounding)</li>
                          </ul>
                          <p className="text-sm mt-2 mb-0">This is why so many retirees and dividend investors move to Florida, Texas, or Nevada.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>States That Don't Tax Qualified Dividends (Even With Income Tax)</h3>
                  <p className="text-sm">
                    A few states have income tax but specifically exempt qualified dividends or treat them favorably:
                  </p>
                  <ul className="text-sm">
                    <li><strong>New Hampshire:</strong> Only taxes interest and dividends over $2,400 (for now - being phased out)</li>
                  </ul>
                </section>

                {/* NIIT Section */}
                <section id="niit">
                  <h2 className="flex items-center gap-2">
                    <AlertCircle className="h-7 w-7 text-orange-600" />
                    The 3.8% Net Investment Income Tax (NIIT)
                  </h2>
                  <p>
                    High-income investors face an additional 3.8% tax on dividend income (and other investment income)
                    called the Net Investment Income Tax (NIIT) or Medicare surtax. This was added by the Affordable
                    Care Act in 2013 and remains in effect.
                  </p>

                  <h3>Who Pays the 3.8% NIIT?</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-orange-100 dark:bg-orange-900">
                          <th className="border p-3 text-left">Filing Status</th>
                          <th className="border p-3 text-left">NIIT Threshold (2026)</th>
                          <th className="border p-3 text-left">What's Taxed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Single</td>
                          <td className="border p-3">$200,000</td>
                          <td className="border p-3">Investment income above threshold</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Married Filing Jointly</td>
                          <td className="border p-3">$250,000</td>
                          <td className="border p-3">Investment income above threshold</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Married Filing Separately</td>
                          <td className="border p-3">$125,000</td>
                          <td className="border p-3">Investment income above threshold</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Head of Household</td>
                          <td className="border p-3">$200,000</td>
                          <td className="border p-3">Investment income above threshold</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>What Income is Subject to NIIT?</h3>
                  <ul>
                    <li>Qualified dividends</li>
                    <li>Ordinary dividends</li>
                    <li>Capital gains (short and long-term)</li>
                    <li>Interest income</li>
                    <li>Rental income (passive)</li>
                    <li>Royalties and annuities</li>
                  </ul>

                  <h3>Combined Federal Tax Rates (Including NIIT) for High Earners</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Income Type</th>
                          <th className="border p-3 text-left">Base Rate</th>
                          <th className="border p-3 text-left">+ NIIT</th>
                          <th className="border p-3 text-left">Total Federal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">Qualified Dividends (Top Bracket)</td>
                          <td className="border p-3">20%</td>
                          <td className="border p-3">+3.8%</td>
                          <td className="border p-3 font-bold">23.8%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Ordinary Dividends (Top Bracket)</td>
                          <td className="border p-3">37%</td>
                          <td className="border p-3">+3.8%</td>
                          <td className="border p-3 font-bold">40.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-orange-50 dark:bg-orange-950/50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-3">NIIT Calculation Example:</h4>
                      <p className="text-sm mb-2"><strong>Scenario:</strong> Married couple with $280,000 total income ($200,000 salary + $80,000 qualified dividends)</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li><strong>NIIT Threshold:</strong> $250,000</li>
                        <li><strong>Income Above Threshold:</strong> $280,000 - $250,000 = $30,000</li>
                        <li><strong>Investment Income:</strong> $80,000 dividends</li>
                        <li><strong>NIIT Applied To:</strong> Lesser of $30,000 or $80,000 = $30,000</li>
                        <li><strong>NIIT Tax:</strong> $30,000 × 3.8% = $1,140</li>
                        <li className="font-bold pt-2 border-t">Plus base dividend tax: $80,000 × 15% = $12,000</li>
                        <li className="font-bold text-orange-600">Total Federal Dividend Tax: $13,140</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Foreign Dividends */}
                <section id="foreign-dividends">
                  <h2 className="flex items-center gap-2">
                    <Globe className="h-7 w-7 text-blue-600" />
                    Foreign Dividend Taxes: International Investing
                  </h2>
                  <p>
                    If you invest in foreign stocks or international dividend ETFs, you face an additional layer of
                    complexity: foreign withholding taxes and the foreign tax credit.
                  </p>

                  <h3>How Foreign Dividends Are Taxed</h3>
                  <ol>
                    <li><strong>Foreign Withholding Tax (Paid First):</strong> The foreign country withholds tax before sending you the dividend. Common rates: 15% (Canada), 15-30% (Europe), 10-20% (Asia).</li>
                    <li><strong>U.S. Tax (Paid on Full Amount):</strong> You still owe U.S. taxes on the gross dividend amount (before foreign withholding).</li>
                    <li><strong>Foreign Tax Credit:</strong> You can claim a credit for foreign taxes paid to avoid double taxation.</li>
                  </ol>

                  <h3>Example: Canadian Dividend Stock</h3>
                  <Card className="my-6 bg-blue-50 dark:bg-blue-950/50">
                    <CardContent className="pt-6">
                      <div className="space-y-2 text-sm">
                        <p><strong>Scenario:</strong> You receive $1,000 dividend from Royal Bank of Canada (RY)</p>
                        <ul className="space-y-1 ml-4">
                          <li><strong>Gross Dividend:</strong> $1,000</li>
                          <li><strong>Canadian Withholding (15%):</strong> -$150</li>
                          <li><strong>You Receive:</strong> $850</li>
                          <li className="border-t pt-2"><strong>U.S. Tax Calculation (15% qualified rate):</strong> $1,000 × 15% = $150</li>
                          <li><strong>Foreign Tax Credit:</strong> -$150 (offsets Canadian tax)</li>
                          <li className="font-bold text-blue-600"><strong>Additional U.S. Tax Owed:</strong> $0</li>
                        </ul>
                        <p className="pt-2 border-t mb-0"><strong>Result:</strong> No double taxation! The foreign tax credit exactly offsets the Canadian withholding since both rates are 15%.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Countries With Tax Treaties (Reduced Withholding)</h3>
                  <p className="text-sm">
                    The U.S. has tax treaties with 60+ countries that reduce withholding rates. Common treaty rates:
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Country</th>
                          <th className="border p-3 text-left">Standard Rate</th>
                          <th className="border p-3 text-left">Treaty Rate</th>
                          <th className="border p-3 text-left">Net to You</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">Canada</td>
                          <td className="border p-3">25%</td>
                          <td className="border p-3">15%</td>
                          <td className="border p-3">85%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">United Kingdom</td>
                          <td className="border p-3">20%</td>
                          <td className="border p-3">15%</td>
                          <td className="border p-3">85%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Germany</td>
                          <td className="border p-3">26.375%</td>
                          <td className="border p-3">15%</td>
                          <td className="border p-3">85%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3">Australia</td>
                          <td className="border p-3">30%</td>
                          <td className="border p-3">15%</td>
                          <td className="border p-3">85%</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Japan</td>
                          <td className="border p-3">20.315%</td>
                          <td className="border p-3">10%</td>
                          <td className="border p-3">90%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Info className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-base mb-2">Special Case: IRA and Foreign Dividends</h4>
                          <p className="text-sm mb-2"><strong>Problem:</strong> Foreign countries still withhold taxes on dividends paid to your IRA, but you CANNOT claim the foreign tax credit for IRA accounts (since IRAs are tax-deferred).</p>
                          <p className="text-sm mb-0"><strong>Solution:</strong> Hold foreign stocks in taxable accounts (where you can claim the credit) and U.S. stocks in IRAs for maximum tax efficiency.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <h3>Form 1116: Claiming Foreign Tax Credit</h3>
                  <p className="text-sm">
                    If you paid foreign taxes on dividends, you'll need to file Form 1116 with your tax return to
                    claim the foreign tax credit. Your broker reports foreign taxes withheld on Form 1099-DIV (Box 7).
                    Most tax software handles this automatically.
                  </p>
                </section>

                {/* Tax Strategies */}
                <section id="tax-strategies">
                  <h2 className="flex items-center gap-2">
                    <Target className="h-7 w-7 text-green-600" />
                    10 Strategies to Minimize Dividend Taxes
                  </h2>
                  <p>
                    Smart investors use these proven strategies to legally reduce their dividend tax bills. Many can
                    save you thousands per year.
                  </p>

                  <div className="space-y-6 my-8">
                    {/* Strategy 1 */}
                    <Card className="border-l-4 border-l-green-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">1. Hold Dividend Stocks in Tax-Advantaged Accounts</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Ordinary dividends (REITs, MLPs, high-yield preferred stocks)</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Dividends in Traditional IRAs, Roth IRAs, and 401(k)s are not taxed annually. For Roth IRAs, they're never taxed.</p>
                        <p className="text-sm mb-0"><strong>Savings:</strong> A REIT yielding 6% in a Roth IRA saves you 24-37% annually vs taxable account (depending on bracket)</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 2 */}
                    <Card className="border-l-4 border-l-blue-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">2. Focus on Qualified Dividends in Taxable Accounts</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> High-income investors in 32-37% tax brackets</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Choose dividend aristocrats and blue-chip stocks that pay qualified dividends (15-20% rate) over REITs and bonds (ordinary income)</p>
                        <p className="text-sm mb-0"><strong>Savings:</strong> 17% tax difference (37% ordinary vs 20% qualified) = $1,700 per $10K dividends</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 3 */}
                    <Card className="border-l-4 border-l-purple-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">3. Harvest Tax Losses to Offset Dividend Income</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> All investors in taxable accounts</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Sell losing positions to generate capital losses. Losses offset capital gains first, then up to $3,000 of ordinary income (including dividends) annually.</p>
                        <p className="text-sm mb-0"><strong>Savings:</strong> $3,000 loss × 24% bracket = $720 tax savings per year</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 4 */}
                    <Card className="border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">4. Stay Under the 0% Qualified Dividend Threshold in Retirement</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Early retirees and those with flexible income</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Keep taxable income under $94,050 (married) or $47,025 (single) to pay 0% on qualified dividends</p>
                        <p className="text-sm mb-0"><strong>Savings:</strong> $50,000 dividends × 15% = $7,500 saved annually</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 5 */}
                    <Card className="border-l-4 border-l-red-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">5. Time Capital Gains/Roth Conversions Around Dividend Income</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Investors near tax bracket thresholds</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Realize capital gains or do Roth conversions in years with lower dividend income to stay under 0% or 15% thresholds</p>
                        <p className="text-sm mb-0"><strong>Example:</strong> If expecting $80K dividends next year (near $94K threshold), delay Roth conversion to following year</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 6 */}
                    <Card className="border-l-4 border-l-yellow-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">6. Consider Municipal Bonds Instead of Taxable Bonds</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> High-income investors seeking income (24%+ brackets)</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Municipal bond interest is federally tax-free (and state tax-free if in-state). Compare tax-equivalent yield.</p>
                        <p className="text-sm mb-0"><strong>Example:</strong> 4% muni yield = 6.25% taxable equivalent in 37% bracket (4% ÷ 0.63)</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 7 */}
                    <Card className="border-l-4 border-l-indigo-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">7. Meet the 60-Day Holding Period Rule</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Active traders and dividend capture strategies</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Hold stocks at least 61 days during the 121-day period around ex-dividend date to qualify for lower rates</p>
                        <p className="text-sm mb-0"><strong>Warning:</strong> Short-term dividend capture doesn't work if you don't meet this rule - you'll pay ordinary rates</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 8 */}
                    <Card className="border-l-4 border-l-pink-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">8. Use Qualified Dividend ETFs Instead of High-Yield Funds</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Investors wanting diversification with tax efficiency</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Choose dividend aristocrat ETFs (SCHD, NOBL, VIG) over high-yield funds that hold REITs/bonds</p>
                        <p className="text-sm mb-0"><strong>Example:</strong> SCHD (3.5% yield, 100% qualified) vs. JEPI (7% yield, mostly ordinary income)</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 9 */}
                    <Card className="border-l-4 border-l-teal-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">9. Donate Appreciated Dividend Stocks to Charity</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Charitable donors with large unrealized gains</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Donate stock directly (not cash). Avoid capital gains tax and get full FMV deduction.</p>
                        <p className="text-sm mb-0"><strong>Savings:</strong> $10K stock with $5K gain: Save $750-1,000 in capital gains tax + get $10K deduction</p>
                      </CardContent>
                    </Card>

                    {/* Strategy 10 */}
                    <Card className="border-l-4 border-l-cyan-600">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">10. Consider Moving to No-Income-Tax State in Retirement</h3>
                        <p className="text-sm mb-2"><strong>Best For:</strong> Retirees with significant dividend income in high-tax states</p>
                        <p className="text-sm mb-2"><strong>How It Works:</strong> Establish residency in FL, TX, NV, WA, TN, SD, WY, or AK to eliminate state tax on dividends</p>
                        <p className="text-sm mb-0"><strong>Savings:</strong> $100K dividends × 10% state rate = $10,000 annual savings</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Calculator CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your After-Tax Dividend Returns</h3>
                      <p className="mb-6 text-blue-100">
                        Use our calculators to model your dividend income after taxes and see how different strategies
                        affect your take-home returns. Factor in federal, state, and NIIT taxes.
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
                            <Calculator className="h-5 w-5" />
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

                {/* FAQ Section */}
                <section>
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: What is the dividend tax rate for 2026?</h3>
                        <p className="text-sm mb-0">A: Qualified dividends are taxed at 0%, 15%, or 20% depending on your income (married: 0% under $94K, 15% up to $584K, 20% above). Ordinary dividends are taxed at regular income rates (10-37%). Most stock dividends are qualified if held 60+ days.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: How can I avoid paying taxes on dividends?</h3>
                        <p className="text-sm mb-0">A: Hold dividend stocks in Roth IRAs (tax-free forever), keep taxable income under $94K (married) for 0% qualified rate, or invest in tax-exempt municipal bonds instead. You cannot legally avoid all dividend taxes in taxable accounts, but these strategies minimize them.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: Are REIT dividends qualified?</h3>
                        <p className="text-sm mb-0">A: No. 99% of REIT dividends are ordinary income taxed at your full marginal rate (10-37%). However, you may qualify for the 20% QBI (Qualified Business Income) deduction on REIT dividends, reducing effective tax rate. REITs are best held in IRAs.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: Do I pay state taxes on dividends?</h3>
                        <p className="text-sm mb-0">A: Most states tax dividends as ordinary income at your state tax rate (0-13.3%). Eight states have no income tax: AK, FL, NV, SD, TN, TX, WA, WY. New Hampshire only taxes dividends over $2,400 (being phased out).</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: What is the 3.8% NIIT surtax?</h3>
                        <p className="text-sm mb-0">A: The Net Investment Income Tax (NIIT) is an additional 3.8% tax on investment income (including dividends) for high earners. It applies if your income exceeds $200K (single) or $250K (married). Top earners pay 23.8% total on qualified dividends (20% + 3.8%).</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: When do I receive Form 1099-DIV?</h3>
                        <p className="text-sm mb-0">A: Brokers must mail Form 1099-DIV by January 31st for the previous tax year. It shows total ordinary dividends (Box 1a), qualified dividends (Box 1b), capital gain distributions (Box 2a), and foreign taxes paid (Box 7).</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: Can I reinvest dividends tax-free?</h3>
                        <p className="text-sm mb-0">A: No. Dividends are taxable in the year received whether you take them in cash or reinvest them through DRIP (dividend reinvestment plans). The only exception is dividends in tax-deferred accounts (IRA, 401k) or Roth accounts.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Q: How are foreign dividends taxed?</h3>
                        <p className="text-sm mb-0">A: Foreign countries withhold tax (typically 15-30%) before sending dividends. You owe U.S. tax on the gross amount but can claim a foreign tax credit to avoid double taxation. File Form 1116 with your tax return. Foreign dividends can still be qualified if from approved countries.</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Tax-Efficient Dividend Investing</h2>
                  <p>
                    The right broker can make dividend tax management easier with automated tax-loss harvesting,
                    detailed 1099 forms, and tax-lot tracking. Here are the top-rated brokers for dividend investors:
                  </p>
                  <BrokerComparisonTable />
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing (Tax Implications)
                    </Link>
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs ETFs: Tax Efficiency Comparison
                    </Link>
                    <Link href="/blog/retirement-dividend-portfolio-strategy" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Building a Tax-Efficient Retirement Dividend Portfolio
                    </Link>
                    <Link href="/blog/reit-investing-tax-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      REIT Dividend Taxes: Complete Guide
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
