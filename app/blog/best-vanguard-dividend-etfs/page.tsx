import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, ArrowRight, Star, Target, Award, PieChart, Building2, Landmark, Calendar } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Vanguard Dividend ETFs: Complete Guide (2026)',
  description: 'Comprehensive guide to the best Vanguard dividend ETFs for 2026 including VYM, VIG, VIGI, and VNQ. Compare yields, performance, holdings, strategies, and find the right Vanguard fund for your portfolio.',
  keywords: ['best Vanguard dividend ETF', 'VYM ETF', 'VIG ETF', 'VIGI ETF', 'VNQ ETF', 'Vanguard dividend fund', 'Vanguard high dividend yield', 'Vanguard dividend appreciation'],
}

export default function BestVanguardDividendETFs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Landmark className="h-3 w-3 mr-1" />
          Complete Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Vanguard Dividend ETFs: Complete Guide
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Vanguard offers some of the world&apos;s best dividend ETFs with industry-leading low costs.
          Here is every Vanguard dividend fund analyzed and compared.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span>17 min read</span>
          <span>-</span>
          <span>Updated February 2026</span>
        </div>
      </div>

      {/* Why Vanguard */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Vanguard for Dividend ETFs?</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Lowest Costs</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Vanguard&apos;s unique mutual ownership structure means profits go back to fund shareholders
                as lower expense ratios. Most Vanguard dividend ETFs charge 0.06-0.10%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Shield className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Trusted Brand</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Founded by Jack Bogle in 1975, Vanguard manages over $8 trillion in global assets.
                Their investor-first philosophy has earned unmatched trust among long-term investors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Tax Efficient</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Vanguard&apos;s patented ETF-mutual fund structure allows them to minimize capital gains
                distributions, making their funds among the most tax-efficient available.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Overview Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">All Vanguard Dividend ETFs at a Glance</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">ETF</th>
                    <th className="text-left py-3 font-semibold">Focus</th>
                    <th className="text-right py-3 font-semibold">Yield</th>
                    <th className="text-right py-3 font-semibold">Expense</th>
                    <th className="text-right py-3 font-semibold">Holdings</th>
                    <th className="text-right py-3 font-semibold">AUM</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'VYM', focus: 'High Yield (U.S.)', yield: '2.85%', expense: '0.06%', holdings: '553', aum: '$55B+' },
                    { name: 'VIG', focus: 'Div. Appreciation (U.S.)', yield: '1.75%', expense: '0.06%', holdings: '338', aum: '$82B+' },
                    { name: 'VIGI', focus: 'Div. Appreciation (Int\'l)', yield: '2.10%', expense: '0.15%', holdings: '534', aum: '$6B+' },
                    { name: 'VYMI', focus: 'High Yield (Int\'l)', yield: '4.25%', expense: '0.22%', holdings: '1,420', aum: '$8B+' },
                    { name: 'VNQ', focus: 'Real Estate (REITs)', yield: '3.85%', expense: '0.13%', holdings: '162', aum: '$35B+' },
                    { name: 'VXUS', focus: 'Total Int\'l (w/ divs)', yield: '3.15%', expense: '0.08%', holdings: '8,500+', aum: '$68B+' },
                  ].map((etf, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-bold text-blue-600">{etf.name}</td>
                      <td className="py-3">{etf.focus}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{etf.yield}</td>
                      <td className="py-3 text-right">{etf.expense}</td>
                      <td className="py-3 text-right">{etf.holdings}</td>
                      <td className="py-3 text-right">{etf.aum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* VYM Deep Dive */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">VYM - Vanguard High Dividend Yield ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">2.85%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.06%</p></div>
              <div><p className="text-xs text-slate-500">Holdings</p><p className="font-bold">553</p></div>
              <div><p className="text-xs text-slate-500">10Y Return</p><p className="font-bold text-blue-600">10.2%</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              VYM is Vanguard&apos;s flagship high-dividend-yield ETF, holding 553 U.S. stocks selected by
              forecasted yield. Tracking the FTSE High Dividend Yield Index, it provides the broadest
              dividend exposure of any Vanguard fund. Top holdings include Broadcom, JPMorgan Chase,
              ExxonMobil, and Procter & Gamble.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-600 mb-2">Best For:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Maximum diversification (550+ stocks)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Solid yield with ultra-low cost</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Core holding for income portfolios</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-500 mb-2">Top Sectors:</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Financials: 21.4%</li>
                  <li>Healthcare: 13.2%</li>
                  <li>Consumer Staples: 12.8%</li>
                  <li>Energy: 11.5%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* VIG Deep Dive */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">VIG - Vanguard Dividend Appreciation ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">1.75%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.06%</p></div>
              <div><p className="text-xs text-slate-500">Holdings</p><p className="font-bold">338</p></div>
              <div><p className="text-xs text-slate-500">10Y Return</p><p className="font-bold text-blue-600">11.8%</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              VIG is Vanguard&apos;s largest dividend ETF by assets ($82B+), focusing on companies with at
              least 10 consecutive years of dividend increases. Unlike VYM, VIG prioritizes dividend
              growth over current yield, resulting in a portfolio that tilts toward quality growth companies.
              Top holdings include Apple, Microsoft, Broadcom, JPMorgan, and UnitedHealth.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-blue-600 mb-2">Best For:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Long-term total return with growing income</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Investors who do not need high current yield</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Tax-efficient growth in taxable accounts</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-500 mb-2">Top Sectors:</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Technology: 24.8%</li>
                  <li>Financials: 15.4%</li>
                  <li>Healthcare: 14.6%</li>
                  <li>Industrials: 13.2%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>VIG vs VYM:</strong> VIG has outperformed VYM on total returns by about 1.5% annually over the
            past decade, largely due to its higher tech allocation. However, VYM generates 63% more income
            (2.85% vs 1.75% yield). Choose VIG for growth, VYM for income.
          </p>
        </div>
      </section>

      <InlineSignup />

      {/* VIGI Deep Dive */}
      <section className="mb-16 mt-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">VIGI - Vanguard International Dividend Appreciation ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">2.10%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.15%</p></div>
              <div><p className="text-xs text-slate-500">Holdings</p><p className="font-bold">534</p></div>
              <div><p className="text-xs text-slate-500">5Y Return</p><p className="font-bold text-blue-600">5.8%</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              VIGI is the international counterpart to VIG, holding non-U.S. companies with at least
              7 years of consecutive dividend growth. Top holdings include Novo Nordisk, Roche, SAP,
              Nestle, and ASML. It provides exposure to developed and emerging market dividend growers
              across 40+ countries.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-purple-600 mb-2">Best For:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>International dividend growth exposure</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Pairing with VIG for global coverage</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Currency diversification</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-500 mb-2">Top Countries:</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Switzerland: 14.2%</li>
                  <li>Japan: 11.8%</li>
                  <li>United Kingdom: 10.5%</li>
                  <li>Canada: 9.1%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* VYMI Deep Dive */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <Star className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">VYMI - Vanguard International High Dividend Yield ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">4.25%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.22%</p></div>
              <div><p className="text-xs text-slate-500">Holdings</p><p className="font-bold">1,420</p></div>
              <div><p className="text-xs text-slate-500">5Y Return</p><p className="font-bold text-blue-600">4.2%</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              VYMI is VYM&apos;s international sibling, offering the highest yield among Vanguard&apos;s dividend
              ETFs at 4.25%. With over 1,400 holdings across developed and emerging markets, it provides
              massive global income exposure. Top holdings include Nestle, Samsung, TotalEnergies,
              Shell, and HSBC.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-orange-600 mb-2">Best For:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Maximum international dividend income</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Pairing with VYM for global high-yield portfolio</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Emerging market dividend exposure</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-500 mb-2">Top Countries:</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>United Kingdom: 13.8%</li>
                  <li>Japan: 10.5%</li>
                  <li>Australia: 7.2%</li>
                  <li>Switzerland: 6.8%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* VNQ Deep Dive */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">VNQ - Vanguard Real Estate ETF</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4 text-center">
              <div><p className="text-xs text-slate-500">Yield</p><p className="font-bold text-green-600">3.85%</p></div>
              <div><p className="text-xs text-slate-500">Expense Ratio</p><p className="font-bold">0.13%</p></div>
              <div><p className="text-xs text-slate-500">Holdings</p><p className="font-bold">162</p></div>
              <div><p className="text-xs text-slate-500">10Y Return</p><p className="font-bold text-blue-600">5.8%</p></div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              VNQ provides exposure to U.S. REITs (Real Estate Investment Trusts), which are required
              by law to distribute at least 90% of taxable income as dividends. This makes VNQ one of
              the highest-yielding Vanguard ETFs. Top holdings include Prologis, American Tower,
              Equinix, Crown Castle, and Simon Property Group.
            </p>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Tax Note:</strong> REIT dividends are generally taxed as ordinary income (not qualified
                dividends), making VNQ most tax-efficient when held in IRAs or 401(k)s. The 20% QBI deduction
                can partially offset this for taxable accounts.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Model Portfolios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Model Vanguard Dividend Portfolios</h2>
        <div className="space-y-4">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Conservative Income Portfolio</h3>
                <Badge className="bg-green-100 text-green-800">~3.1% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VYM 50%</p>
                  <p className="text-xs text-slate-500">U.S. High Yield</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VYMI 20%</p>
                  <p className="text-xs text-slate-500">Int&apos;l High Yield</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VNQ 15%</p>
                  <p className="text-xs text-slate-500">Real Estate</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">BND 15%</p>
                  <p className="text-xs text-slate-500">Bonds</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">Best for: Retirees seeking reliable income with moderate growth</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Dividend Growth Portfolio</h3>
                <Badge className="bg-blue-100 text-blue-800">~2.2% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VIG 40%</p>
                  <p className="text-xs text-slate-500">U.S. Div Growth</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VYM 30%</p>
                  <p className="text-xs text-slate-500">U.S. High Yield</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VIGI 20%</p>
                  <p className="text-xs text-slate-500">Int&apos;l Div Growth</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VNQ 10%</p>
                  <p className="text-xs text-slate-500">Real Estate</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">Best for: Investors 10+ years from retirement building growing income</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Global Income Portfolio</h3>
                <Badge className="bg-purple-100 text-purple-800">~3.4% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VYM 30%</p>
                  <p className="text-xs text-slate-500">U.S. High Yield</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VYMI 30%</p>
                  <p className="text-xs text-slate-500">Int&apos;l High Yield</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VNQ 20%</p>
                  <p className="text-xs text-slate-500">Real Estate</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center">
                  <p className="font-bold">VIGI 20%</p>
                  <p className="text-xs text-slate-500">Int&apos;l Div Growth</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">Best for: Maximum income diversification across geographies and asset classes</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Performance Comparison</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">ETF</th>
                    <th className="text-right py-3 font-semibold">1Y Return</th>
                    <th className="text-right py-3 font-semibold">5Y Return</th>
                    <th className="text-right py-3 font-semibold">10Y Return</th>
                    <th className="text-right py-3 font-semibold">Yield</th>
                    <th className="text-right py-3 font-semibold">Div Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'VIG', y1: '11.2%', y5: '11.8%', y10: '11.8%', yield: '1.75%', growth: '9.5%' },
                    { name: 'VYM', y1: '9.8%', y5: '10.4%', y10: '10.2%', yield: '2.85%', growth: '5.8%' },
                    { name: 'VNQ', y1: '5.4%', y5: '4.2%', y10: '5.8%', yield: '3.85%', growth: '3.2%' },
                    { name: 'VIGI', y1: '6.1%', y5: '5.8%', y10: 'N/A', yield: '2.10%', growth: '8.2%' },
                    { name: 'VYMI', y1: '7.3%', y5: '4.2%', y10: 'N/A', yield: '4.25%', growth: '4.1%' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 font-bold text-blue-600">{row.name}</td>
                      <td className="py-3 text-right">{row.y1}</td>
                      <td className="py-3 text-right">{row.y5}</td>
                      <td className="py-3 text-right">{row.y10}</td>
                      <td className="py-3 text-right text-green-600 font-medium">{row.yield}</td>
                      <td className="py-3 text-right">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Returns are annualized total returns including reinvested dividends. Past performance does not guarantee future results.</p>
          </CardContent>
        </Card>
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          VIG has delivered the best total returns among Vanguard dividend ETFs, benefiting from its
          quality-growth tilt. VYM follows with strong risk-adjusted returns. International funds
          (VIGI, VYMI) have lagged due to the strong U.S. dollar and outperformance of U.S. markets,
          though they provide important diversification.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is the best Vanguard dividend ETF overall?',
              a: 'For most investors, VIG (Dividend Appreciation) is the best single choice due to its strong total returns, quality-focused methodology, and ultra-low 0.06% expense ratio. For investors who prioritize current income over growth, VYM (High Dividend Yield) is the better pick with its 2.85% yield.'
            },
            {
              q: 'Should I choose VIG or VYM?',
              a: 'Choose VIG if you are building wealth long-term and do not need high current income. VIG has higher total returns and more tech exposure. Choose VYM if you want more income now -- it yields 63% more (2.85% vs 1.75%). Many investors hold both: VIG in taxable accounts and VYM in tax-advantaged accounts.'
            },
            {
              q: 'Do I need international dividend ETFs (VIGI/VYMI)?',
              a: 'International diversification is recommended by most financial advisors. VIGI and VYMI provide access to high-quality dividend payers outside the U.S. that you cannot get from VIG or VYM. A 70/30 U.S./international split is a common allocation.'
            },
            {
              q: 'Is VNQ good for dividend income?',
              a: 'VNQ offers a strong 3.85% yield from REITs, but keep in mind that REIT dividends are taxed as ordinary income, not at the lower qualified dividend rate. VNQ is best held in tax-advantaged accounts (IRA, 401k). It also provides inflation protection since rents tend to rise with inflation.'
            },
            {
              q: 'How do Vanguard dividend ETFs compare to SCHD?',
              a: 'SCHD (Schwab) offers higher yield (3.45%) and faster dividend growth (12%) than VYM (2.85%, 5.8% growth) and VIG (1.75%, 9.5% growth). However, Vanguard offers international options (VIGI, VYMI) and REIT exposure (VNQ) that Schwab does not. Many investors combine SCHD with Vanguard international funds.'
            },
          ].map((faq, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-red-600 to-blue-600 text-white">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Build Your Vanguard Dividend Portfolio</h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Use our free calculators to model how Vanguard dividend ETFs could grow your wealth
              and income over time. Compare DRIP scenarios and retirement income projections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary">
                  DRIP Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Retirement Income Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'VYM ETF Review: Complete Analysis', href: '/blog/VYM-review-analysis', badge: 'Review' },
            { title: 'SCHD vs VYM: Which Dividend ETF?', href: '/blog/SCHD-vs-VYM-comparison', badge: 'Comparison' },
            { title: 'Best S&P 500 Dividend ETFs Ranked', href: '/blog/best-sp500-dividend-etfs', badge: 'Rankings' },
            { title: 'VOO vs SCHD: Index vs Dividend ETF', href: '/blog/VOO-vs-SCHD-comparison', badge: 'Comparison' },
          ].map((article, i) => (
            <Link key={i} href={article.href}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <Badge variant="outline" className="mb-2">{article.badge}</Badge>
                  <h3 className="font-bold text-blue-600 dark:text-blue-400">{article.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
