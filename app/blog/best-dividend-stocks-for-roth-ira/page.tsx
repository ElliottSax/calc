import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Percent,
  Landmark,
  Star,
  Zap,
  BarChart3
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Dividend Stocks for Roth IRA: Tax-Free Income (2026)',
  description: 'The best dividend stocks to hold in your Roth IRA for maximum tax-free income. Why high-yield + growth stocks belong in Roth, specific picks, and compound tax-free strategies.',
  keywords: 'roth ira dividend stocks, best dividend stocks roth ira, tax free dividend income, roth ira investing, dividend growth roth ira, roth ira passive income',
  openGraph: {
    title: 'Best Dividend Stocks for Roth IRA: Tax-Free Income',
    description: 'Maximize tax-free dividend income in your Roth IRA. High-yield REITs, growth stocks, and compound strategies.',
    type: 'article',
  }
}

export default function BestDividendStocksForRothIRAPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Tax Strategy</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Best Dividend Stocks for Roth IRA: Tax-Free Income
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Your Roth IRA is the most tax-advantaged account you have. The right dividend stocks inside it
                  can generate tens of thousands in completely tax-free income in retirement. Here are the
                  best picks and why they belong in your Roth.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>15 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Picks
                  </span>
                </div>
              </div>

              {/* Quick Answer */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    Why This Matters
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Tax-free forever:</strong> All dividends and capital gains inside a Roth IRA are never taxed -- not at distribution, not ever. A $7,000/year Roth contribution growing for 30 years can produce $50,000+ in annual tax-free dividend income.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Put tax-inefficient assets here:</strong> REITs, BDCs, and high-yield stocks that generate ordinary income (taxed at 37%) belong in your Roth where they pay 0%.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Maximum growth too:</strong> Put your fastest dividend growers here so the compounding happens tax-free. A stock with 15% annual dividend growth is worth far more in a Roth.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#why-roth" className="text-blue-600 hover:underline">Why Dividends in a Roth IRA?</a></li>
                    <li><a href="#what-to-hold" className="text-blue-600 hover:underline">What to Hold in Roth vs Taxable</a></li>
                    <li><a href="#high-yield-picks" className="text-blue-600 hover:underline">Top High-Yield Roth Picks</a></li>
                    <li><a href="#growth-picks" className="text-blue-600 hover:underline">Top Growth Dividend Picks</a></li>
                    <li><a href="#model-portfolio" className="text-blue-600 hover:underline">Model Roth IRA Portfolio</a></li>
                    <li><a href="#compound-math" className="text-blue-600 hover:underline">The Tax-Free Compounding Math</a></li>
                    <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Why Roth */}
                <section id="why-roth">
                  <h2 className="flex items-center gap-2">
                    <Landmark className="h-7 w-7 text-green-600" />
                    Why Hold Dividends in a Roth IRA?
                  </h2>
                  <p>
                    A Roth IRA has two incredible tax advantages for dividend investors. First, all dividends
                    compound tax-free inside the account. Second, all withdrawals in retirement (including
                    dividends) are completely tax-free. This means no federal or state income tax on your
                    dividend income -- ever.
                  </p>

                  <h3>The Tax Savings Are Enormous</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Investment Type</th>
                          <th className="border p-3 text-center">Tax in Taxable Account</th>
                          <th className="border p-3 text-center">Tax in Roth IRA</th>
                          <th className="border p-3 text-center">Annual Savings (on $10K income)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">REITs (O, VICI, WPC)</td>
                          <td className="border p-3 text-center text-red-600">Up to 37% (ordinary)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">0%</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,200-$3,700</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BDCs (ARCC, MAIN)</td>
                          <td className="border p-3 text-center text-red-600">Up to 37% (ordinary)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">0%</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,200-$3,700</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Covered Call ETFs (JEPI)</td>
                          <td className="border p-3 text-center text-red-600">Up to 37% (ordinary)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">0%</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,200-$3,700</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Qualified Dividends (JNJ, PG)</td>
                          <td className="border p-3 text-center text-yellow-600">0-20% (qualified)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">0%</td>
                          <td className="border p-3 text-center">$0-$2,000</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Growth + Capital Gains</td>
                          <td className="border p-3 text-center text-yellow-600">0-20% (LTCG)</td>
                          <td className="border p-3 text-center text-green-600 font-bold">0%</td>
                          <td className="border p-3 text-center">$0-$2,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <Zap className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Key insight:</strong> REITs, BDCs, and covered call ETFs generate ordinary income (taxed at your highest rate, up to 37%). Putting these in a Roth IRA saves $2,200-$3,700 per $10,000 of income. This is the single biggest tax optimization move for dividend investors.</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* What to Hold */}
                <section id="what-to-hold">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                    What to Hold in Roth vs Taxable
                  </h2>
                  <p>
                    The general rule: put your most tax-inefficient investments in your Roth IRA,
                    and your most tax-efficient investments in your taxable account.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-green-50 dark:bg-green-950/50 border-2 border-green-200 dark:border-green-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-400">Hold in Roth IRA</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>REITs:</strong> O, VICI, WPC, STAG (ordinary income)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>BDCs:</strong> ARCC, MAIN, HTGC (ordinary income)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Covered Call ETFs:</strong> JEPI, JEPQ (mostly ordinary)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Fastest Growers:</strong> V, UNH, COST (max tax-free compounding)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>High-Yield Stocks:</strong> MO, T, AGNC (save on high tax bill)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">Hold in Taxable Account</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Dividend Aristocrats:</strong> JNJ, PG, KO, PEP (qualified divs, 0-15% tax)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Dividend Growth ETFs:</strong> SCHD, VIG, DGRO (mostly qualified)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>MLPs:</strong> EPD, ET (return of capital, natural tax deferral)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Low-Yield Growers:</strong> MSFT, BLK, ADP (small dividends, qualified)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Municipal Bond Funds:</strong> Already tax-exempt</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="my-6 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <p className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span><strong>MLP warning:</strong> Never hold MLPs (like EPD or ET) in a Roth IRA. If MLP distributions generate more than $1,000 in UBTI (unrelated business taxable income), your Roth IRA must file a separate tax return and pay taxes. Hold MLPs in taxable accounts only.</span>
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* High Yield Picks */}
                <section id="high-yield-picks">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-green-600" />
                    Top High-Yield Roth IRA Picks (2026)
                  </h2>
                  <p>
                    These high-yield investments generate the most tax savings inside a Roth IRA because
                    their income would otherwise be taxed at your highest marginal rate.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Stock/ETF</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Type</th>
                          <th className="border p-3 text-center">Tax Saved (per $10K)</th>
                          <th className="border p-3 text-center">Why It Belongs in Roth</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center font-bold text-green-600">5.5%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">$1,200-$2,000</td>
                          <td className="border p-3 text-center text-xs">REIT dividends = ordinary income</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">VICI Properties (VICI)</td>
                          <td className="border p-3 text-center font-bold text-green-600">5.8%</td>
                          <td className="border p-3 text-center">REIT</td>
                          <td className="border p-3 text-center">$1,300-$2,100</td>
                          <td className="border p-3 text-center text-xs">REIT dividends = ordinary income</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Ares Capital (ARCC)</td>
                          <td className="border p-3 text-center font-bold text-green-600">9.2%</td>
                          <td className="border p-3 text-center">BDC</td>
                          <td className="border p-3 text-center">$2,000-$3,400</td>
                          <td className="border p-3 text-center text-xs">BDC income = ordinary income</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">JEPI (Income ETF)</td>
                          <td className="border p-3 text-center font-bold text-green-600">7.2%</td>
                          <td className="border p-3 text-center">Covered Call ETF</td>
                          <td className="border p-3 text-center">$1,600-$2,700</td>
                          <td className="border p-3 text-center text-xs">Options premium = ordinary income</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">JEPQ (Nasdaq Income ETF)</td>
                          <td className="border p-3 text-center font-bold text-green-600">9.5%</td>
                          <td className="border p-3 text-center">Covered Call ETF</td>
                          <td className="border p-3 text-center">$2,100-$3,500</td>
                          <td className="border p-3 text-center text-xs">Options premium + tech growth</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Main Street Capital (MAIN)</td>
                          <td className="border p-3 text-center font-bold text-green-600">6.5%</td>
                          <td className="border p-3 text-center">BDC</td>
                          <td className="border p-3 text-center">$1,400-$2,400</td>
                          <td className="border p-3 text-center text-xs">Monthly BDC dividends</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* Growth Picks */}
                <section id="growth-picks">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-purple-600" />
                    Top Growth Dividend Picks for Roth
                  </h2>
                  <p>
                    The other smart Roth IRA play: fast-growing dividend stocks where tax-free compounding
                    has the most dramatic long-term impact. These stocks double their dividends every 5-7 years.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Stock</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">5Y Div Growth</th>
                          <th className="border p-3 text-center">Years to Double</th>
                          <th className="border p-3 text-center">YOC in 20 Years</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">Visa (V)</td>
                          <td className="border p-3 text-center">0.7%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">17.8%</td>
                          <td className="border p-3 text-center">4.2 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">17.6%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">UnitedHealth (UNH)</td>
                          <td className="border p-3 text-center">1.5%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">14.5%</td>
                          <td className="border p-3 text-center">5.1 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">22.2%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">Broadcom (AVGO)</td>
                          <td className="border p-3 text-center">1.3%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">15.8%</td>
                          <td className="border p-3 text-center">4.7 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">24.0%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Costco (COST)</td>
                          <td className="border p-3 text-center">0.6%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">12.7%</td>
                          <td className="border p-3 text-center">5.8 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">6.7%</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">8.5%</td>
                          <td className="border p-3 text-center">8.5 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">17.4%</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BlackRock (BLK)</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center text-green-600 font-bold">11.2%</td>
                          <td className="border p-3 text-center">6.5 years</td>
                          <td className="border p-3 text-center font-bold text-green-600">19.6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    YOC = Yield on Cost. This shows the dividend yield on your original purchase price after 20 years of dividend growth. All this income comes out of your Roth IRA completely tax-free.
                  </p>
                </section>

                {/* Model Portfolio */}
                <section id="model-portfolio">
                  <h2 className="flex items-center gap-2">
                    <Star className="h-7 w-7 text-indigo-600" />
                    Model Roth IRA Dividend Portfolio
                  </h2>
                  <p>
                    Here is the ideal Roth IRA allocation for maximum tax-free income, assuming you have
                    maxed out your Roth IRA for 10 years (~$70,000 in contributions, grown to approximately
                    $120,000-$150,000).
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Holding</th>
                          <th className="border p-3 text-center">Allocation</th>
                          <th className="border p-3 text-center">Amount ($120K)</th>
                          <th className="border p-3 text-center">Yield</th>
                          <th className="border p-3 text-center">Annual Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">JEPI (Income ETF)</td>
                          <td className="border p-3 text-center">20%</td>
                          <td className="border p-3 text-center">$24,000</td>
                          <td className="border p-3 text-center">7.2%</td>
                          <td className="border p-3 text-center">$1,728</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Realty Income (O)</td>
                          <td className="border p-3 text-center">15%</td>
                          <td className="border p-3 text-center">$18,000</td>
                          <td className="border p-3 text-center">5.5%</td>
                          <td className="border p-3 text-center">$990</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">VICI Properties (VICI)</td>
                          <td className="border p-3 text-center">12%</td>
                          <td className="border p-3 text-center">$14,400</td>
                          <td className="border p-3 text-center">5.8%</td>
                          <td className="border p-3 text-center">$835</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Ares Capital (ARCC)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$12,000</td>
                          <td className="border p-3 text-center">9.2%</td>
                          <td className="border p-3 text-center">$1,104</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">UnitedHealth (UNH)</td>
                          <td className="border p-3 text-center">13%</td>
                          <td className="border p-3 text-center">$15,600</td>
                          <td className="border p-3 text-center">1.5%</td>
                          <td className="border p-3 text-center">$234</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">Broadcom (AVGO)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$12,000</td>
                          <td className="border p-3 text-center">1.3%</td>
                          <td className="border p-3 text-center">$156</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">AbbVie (ABBV)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$12,000</td>
                          <td className="border p-3 text-center">3.4%</td>
                          <td className="border p-3 text-center">$408</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">BlackRock (BLK)</td>
                          <td className="border p-3 text-center">10%</td>
                          <td className="border p-3 text-center">$12,000</td>
                          <td className="border p-3 text-center">2.4%</td>
                          <td className="border p-3 text-center">$288</td>
                        </tr>
                        <tr className="font-bold bg-green-50 dark:bg-green-950/30">
                          <td className="border p-3">TOTAL</td>
                          <td className="border p-3 text-center">100%</td>
                          <td className="border p-3 text-center">$120,000</td>
                          <td className="border p-3 text-center text-green-600">4.8%</td>
                          <td className="border p-3 text-center text-green-600">$5,743</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Compound Math */}
                <section id="compound-math">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-orange-600" />
                    The Tax-Free Compounding Math
                  </h2>
                  <p>
                    Contributing $7,000/year to a Roth IRA and investing in this dividend portfolio creates
                    extraordinary long-term tax-free wealth.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-3 text-left">Years</th>
                          <th className="border p-3 text-center">Total Contributed</th>
                          <th className="border p-3 text-center">Portfolio Value</th>
                          <th className="border p-3 text-center">Annual Tax-Free Income</th>
                          <th className="border p-3 text-center">Monthly Tax-Free Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3 font-semibold">5 years</td>
                          <td className="border p-3 text-center">$35,000</td>
                          <td className="border p-3 text-center">$45,800</td>
                          <td className="border p-3 text-center">$2,200</td>
                          <td className="border p-3 text-center">$183</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">10 years</td>
                          <td className="border p-3 text-center">$70,000</td>
                          <td className="border p-3 text-center">$120,000</td>
                          <td className="border p-3 text-center">$5,760</td>
                          <td className="border p-3 text-center">$480</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">15 years</td>
                          <td className="border p-3 text-center">$105,000</td>
                          <td className="border p-3 text-center">$235,000</td>
                          <td className="border p-3 text-center">$11,280</td>
                          <td className="border p-3 text-center">$940</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">20 years</td>
                          <td className="border p-3 text-center">$140,000</td>
                          <td className="border p-3 text-center">$420,000</td>
                          <td className="border p-3 text-center">$20,160</td>
                          <td className="border p-3 text-center font-bold text-green-600">$1,680</td>
                        </tr>
                        <tr>
                          <td className="border p-3 font-semibold">25 years</td>
                          <td className="border p-3 text-center">$175,000</td>
                          <td className="border p-3 text-center">$710,000</td>
                          <td className="border p-3 text-center">$34,080</td>
                          <td className="border p-3 text-center font-bold text-green-600">$2,840</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <td className="border p-3 font-semibold">30 years</td>
                          <td className="border p-3 text-center">$210,000</td>
                          <td className="border p-3 text-center">$1,150,000</td>
                          <td className="border p-3 text-center font-bold text-green-600">$55,200</td>
                          <td className="border p-3 text-center font-bold text-green-600">$4,600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300 dark:border-green-700">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Award className="h-6 w-6 text-green-600" />
                        The Power of Tax-Free Compounding
                      </h4>
                      <p className="text-sm mb-0">
                        After 30 years, your $210,000 in total contributions has grown to <strong>$1.15 million</strong>,
                        generating <strong>$55,200/year ($4,600/month) in completely tax-free income</strong>. In a
                        taxable account at the 22% bracket, you would owe $12,144 in annual taxes on that income.
                        Over 20 years of retirement, that is $242,880 saved in taxes -- just from proper account placement.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How much can I contribute to a Roth IRA in 2026?</h3>
                        <p className="text-sm mb-0">
                          $7,000/year if under 50, $8,000/year if 50 or older (catch-up contribution). Income
                          limits apply: single filers earning over $161,000 or joint filers over $240,000 may need
                          to use the backdoor Roth IRA strategy.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Can I hold REITs in a traditional IRA instead?</h3>
                        <p className="text-sm mb-0">
                          Yes, but it is less optimal. Traditional IRA distributions are taxed as ordinary income
                          (up to 37%). In a Roth, REIT dividends are never taxed. If you have limited Roth space,
                          prioritize putting REITs and BDCs there first, then use traditional IRA for less
                          tax-inefficient investments.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Should I reinvest dividends in my Roth IRA?</h3>
                        <p className="text-sm mb-0">
                          Before retirement: absolutely yes. Turn on DRIP for all holdings. The tax-free
                          compounding is the whole point. In retirement: you can either take distributions
                          (tax-free) or continue reinvesting if you do not need the income yet.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">When can I withdraw Roth IRA dividends tax-free?</h3>
                        <p className="text-sm mb-0">
                          You can withdraw your contributions anytime tax-free and penalty-free. Earnings
                          (including dividends and growth) can be withdrawn tax-free and penalty-free after
                          age 59.5, provided the Roth has been open for at least 5 years. This is why
                          starting early matters.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Roth IRA Dividend Growth</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to project your Roth IRA growth and future
                        tax-free dividend income.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/ira">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Landmark className="h-5 w-5" />
                            IRA Calculator
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
                  <h2 id="brokers">Best Brokers for Roth IRA Dividend Investing</h2>
                  <p>
                    Choose a broker with zero-fee Roth IRA accounts, free DRIP, and fractional share support.
                  </p>
                  <BrokerComparisonTable />
                </section>
              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Roth IRA vs Taxable for Dividend Investing
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Retirement: 15 Safe Picks
                    </Link>
                    <Link href="/blog/dividend-tax-guide-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Tax Guide 2026
                    </Link>
                    <Link href="/blog/how-to-invest-100k-for-dividend-income" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Invest $100K for Dividend Income
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
