import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Fuel, TrendingUp, DollarSign, AlertTriangle, CheckCircle2, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'

export const metadata = {
  title: 'Best Oil and Gas Dividend Stocks: Energy Sector Income 2026',
  description: 'Top oil and gas stocks paying 3-8% dividends. ExxonMobil, Chevron, ConocoPhillips, pipeline MLPs, and refiners. Analysis of sustainability, risks, and energy transition.',
}

export default function BestOilAndGasDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Fuel className="h-3 w-3 mr-1" />
          Energy Sector Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Oil and Gas Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Energy companies paying 3-8% yields with commodity leverage.
          Navigate oil price volatility and energy transition while earning steady income.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle>Oil & Gas Sector Quick Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-green-600 mb-2">Best For</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>• Inflation protection</li>
                <li>• Commodity diversification</li>
                <li>• Higher yields (4-7%)</li>
                <li>• Dividend growth potential</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-600 mb-2">Key Risks</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>• Oil price volatility</li>
                <li>• Energy transition headwinds</li>
                <li>• Geopolitical disruption</li>
                <li>• Regulatory pressures</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-2">2026 Outlook</h3>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>• Oil: $70-85/barrel range</li>
                <li>• Strong cash flows</li>
                <li>• Record buybacks</li>
                <li>• Moderate dividend growth</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 15 Oil & Gas Dividend Stocks</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Integrated Majors (Safest)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Global giants doing everything from drilling to refining to retail. Most stable dividends in the sector.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. ExxonMobil (XOM)</CardTitle>
                  <CardDescription>Largest U.S. oil company | Dividend aristocrat</CardDescription>
                </div>
                <Badge className="bg-green-600">3.4% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$425B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">41 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">45%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold">2.5%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The gold standard of oil and gas dividend investing. 41 consecutive years of dividend increases
                (dividend aristocrat)—including through 2020 oil crash when crude went negative. Produces 3.7 million
                barrels/day across upstream, downstream, and chemicals. Permian Basin positions ensure low-cost
                production. Investing $20B+ in low-carbon solutions (carbon capture, hydrogen, biofuels). Most
                reliable energy dividend with fortress balance sheet. Perfect core holding for conservative investors
                seeking energy exposure.
              </p>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-sm mb-3">
                <p className="font-semibold mb-1">Why XOM Leads:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Breakeven oil price: $35/barrel (among lowest in industry)</li>
                  <li>• $15B+ free cash flow at $75 oil</li>
                  <li>• Never cut dividend in 100+ year history</li>
                  <li>• Returns 40-50% of operating cash flow to shareholders</li>
                </ul>
              </div>

              <Link href="/stocks/xom">
                <Button variant="outline" size="sm">Calculate XOM Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. Chevron (CVX)</CardTitle>
                  <CardDescription>Integrated oil & gas | Strongest balance sheet</CardDescription>
                </div>
                <Badge className="bg-blue-600">3.6% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$280B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">37 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">52%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                  <p className="font-semibold">3.1%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Second-largest U.S. oil company with 37-year dividend growth streak. Cleaner balance sheet than Exxon
                with lower debt-to-equity. Produces 3.1 million barrels/day. World-class assets in Permian Basin,
                Kazakhstan (Tengiz field), and Australia LNG. Leading position in renewable diesel and renewable
                natural gas. Often trades at discount to XOM despite similar quality. Higher current yield makes it
                attractive for income investors. Returned $26B to shareholders in 2025 via dividends and buybacks.
              </p>

              <Link href="/stocks/cvx">
                <Button variant="outline" size="sm">Calculate CVX Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. Shell (SHEL)</CardTitle>
                  <CardDescription>European major | LNG leader</CardDescription>
                </div>
                <Badge className="bg-purple-600">4.0% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$215B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Production</p>
                  <p className="font-semibold">3.0M bbl/day</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">48%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Buybacks</p>
                  <p className="font-semibold">$23B (2025)</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                World's largest LNG trader and leading integrated energy company. Higher yield than U.S. majors.
                Simplified structure after moving headquarters to UK. Aggressively pivoting to LNG and low-carbon
                energy. Quarterly dividend policy provides flexibility but less predictability than XOM/CVX.
                Massive buyback program ($20-30B annually) complements dividend. Best for investors wanting higher
                current yield with growth optionality.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 mb-8">
          <h3 className="text-2xl font-bold mb-4">Pure E&P Companies (Growth)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Exploration & production only. Highest leverage to oil prices, faster dividend growth, more volatile.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. ConocoPhillips (COP)</CardTitle>
                  <CardDescription>Largest independent E&P | Best growth</CardDescription>
                </div>
                <Badge className="bg-teal-600">3.3% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$138B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Div Growth</p>
                  <p className="font-semibold text-green-600">26%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">35%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Production</p>
                  <p className="font-semibold">1.8M boe/day</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Pure-play E&P with fastest dividend growth in oil sector—26% annually over 5 years. Returns 75%+
                of operating cash flow to shareholders via ordinary dividends (3.3% yield) plus variable dividends
                and massive buybacks. Pristine balance sheet with investment-grade credit rating. Low-cost portfolio
                averaging $35-40 breakeven. Produces in Lower 48, Alaska, Canada, Europe, Asia. Variable dividend
                structure means higher payouts when oil prices spike. Best growth potential among major producers.
              </p>

              <div className="p-3 bg-teal-50 dark:bg-teal-950 rounded text-sm">
                <p className="font-semibold mb-1">COP's Shareholder Returns Model:</p>
                <p className="text-xs">Base dividend (3.3%) + Variable dividend (1-3%) + Buybacks ($10-20B/year) =
                Total return of 75-80% of operating cash flow. Industry-leading capital return framework.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. EOG Resources (EOG)</CardTitle>
                  <CardDescription>Premium independent | Permian leader</CardDescription>
                </div>
                <Badge className="bg-orange-600">3.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$72B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">5-Yr Div Growth</p>
                  <p className="font-semibold text-green-600">15%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">38%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">ROCE</p>
                  <p className="font-semibold text-green-600">18%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Highest-quality independent with premium returns on capital (18% ROCE vs 10-12% peers). Low-cost
                Permian Basin and Eagle Ford operator. Special dividend policy pays extra in strong years. Known as
                "Apple of oil industry" for operational excellence and capital discipline. Smaller than COP but
                higher quality. Sustainable dividend growth even at $60 oil. Best for quality-focused investors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">6. Devon Energy (DVN)</CardTitle>
                  <CardDescription>Variable dividend pioneer</CardDescription>
                </div>
                <Badge className="bg-indigo-600">5.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$28B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Base Yield</p>
                  <p className="font-semibold">2.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Variable Yield</p>
                  <p className="font-semibold">3.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout</p>
                  <p className="font-semibold">60-70%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Pioneered variable dividend model where 50% of free cash flow returns to shareholders quarterly.
                Total yield fluctuates with oil prices (4-8% range). Delaware Basin leader. Hedges protect downside.
                Higher risk/reward than COP or EOG. Variable dividends mean bigger payouts at $85 oil, smaller at
                $65 oil. Best for investors comfortable with income volatility in exchange for oil price leverage.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 mb-8">
          <h3 className="text-2xl font-bold mb-4">Refiners (Defensive)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Turn crude oil into gasoline, diesel, jet fuel. Benefit from crack spreads, less commodity price risk.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">7. Phillips 66 (PSX)</CardTitle>
                  <CardDescription>Diversified refiner | Midstream assets</CardDescription>
                </div>
                <Badge className="bg-amber-600">4.3% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$58B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">13 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">55%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Refining Cap</p>
                  <p className="font-semibold">1.9M bbl/day</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Largest independent refiner in U.S. with 1.9 million barrels/day capacity. Owns midstream pipelines
                (DCP Midstream partnership) and chemicals (CPChem JV with Chevron). Less volatile than pure E&P
                companies. Benefits from strong gasoline demand and tight refining capacity. Dividend aristocrat track
                record since 2012 spinoff from ConocoPhillips. Renewable diesel investments provide growth optionality.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">8. Marathon Petroleum (MPC)</CardTitle>
                  <CardDescription>Largest U.S. refiner | Retail network</CardDescription>
                </div>
                <Badge className="bg-red-600">2.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$62B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Refining Cap</p>
                  <p className="font-semibold">3.0M bbl/day</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">32%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Buybacks</p>
                  <p className="font-semibold">$15B (2025)</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Nation's largest refiner with 3 million barrels/day capacity and 16 refineries. Owns Speedway gas
                station brand. Massive $15B buyback program (9% of market cap) complements modest dividend. Low payout
                ratio (32%) provides huge dividend growth runway. Best refining footprint in industry with Gulf Coast,
                Midwest, and West Coast exposure. Prioritizes buybacks over dividend currently.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">9. Valero Energy (VLO)</CardTitle>
                  <CardDescription>International refiner | Renewable diesel</CardDescription>
                </div>
                <Badge className="bg-yellow-600">3.9% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$45B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Refining Cap</p>
                  <p className="font-semibold">3.2M bbl/day</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">48%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Renewable Cap</p>
                  <p className="font-semibold">680M gal/yr</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Largest global independent refiner with operations in U.S., Canada, UK, and Caribbean. Leader in
                renewable diesel with 680 million gallons/year capacity. Strong ethanol business provides
                diversification. 14 consecutive years of dividend increases. Higher yield than MPC with similar
                quality. Best for income-focused refining exposure with renewable energy upside.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 mb-8">
          <h3 className="text-2xl font-bold mb-4">Midstream/Pipelines (High Yield)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Transport and store oil & gas. Fee-based income, less commodity exposure, higher yields. Some are MLPs with K-1 tax forms.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">10. Kinder Morgan (KMI)</CardTitle>
                  <CardDescription>Largest pipeline network | Natural gas focus</CardDescription>
                </div>
                <Badge className="bg-green-600">6.5% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$55B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Pipeline</p>
                  <p className="font-semibold">83,000 miles</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">62%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Structure</p>
                  <p className="font-semibold">C-Corp</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                America's largest energy infrastructure company with 83,000 miles of pipelines. Transports 40% of
                U.S. natural gas. Converted from MLP to C-Corp in 2015 (regular 1099 tax form, not K-1). Fee-based
                model provides stable cash flows regardless of commodity prices. Recovering from 2016 dividend cut—now
                growing 2-3% annually. LNG export terminal investments drive future growth. Best for investors wanting
                high current yield with moderate growth.
              </p>

              <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded text-sm">
                <p className="font-semibold mb-1 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Risk Note:
                </p>
                <p className="text-xs">Cut dividend 75% in 2016 during oil crash. Debt remains elevated. Less safe than
                integrated majors but yield compensates for added risk. Size and diversification provide some protection.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">11. Enterprise Products Partners (EPD)</CardTitle>
                  <CardDescription>Premier MLP | 25-year growth streak</CardDescription>
                </div>
                <Badge className="bg-blue-600">7.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$68B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">25 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Coverage Ratio</p>
                  <p className="font-semibold">1.7x</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Structure</p>
                  <p className="font-semibold text-orange-600">MLP (K-1)</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Highest-quality MLP with 25 consecutive years of distribution increases. Largest midstream company by
                asset value. Diverse portfolio: NGL pipelines, crude storage, natural gas processing, petrochemical
                services. 1.7x distribution coverage ratio (generates $1.70 for every $1 paid out). Investment-grade
                credit rating rare among MLPs. Never cut distribution—even in 2020. Issues K-1 tax form (complex for
                IRAs). Best MLP for conservative income investors willing to handle K-1 complexity.
              </p>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded text-sm">
                <p className="font-semibold mb-1">MLP Tax Considerations:</p>
                <p className="text-xs">EPD sends K-1 form (not 1099). More complex taxes. Avoid in IRAs due to UBTI
                concerns. Best held in taxable accounts. Distribution is tax-deferred initially but reduces cost basis.
                Consult tax advisor.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">12. Energy Transfer (ET)</CardTitle>
                  <CardDescription>Diversified MLP | Highest yield</CardDescription>
                </div>
                <Badge className="bg-purple-600">7.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$52B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Pipeline</p>
                  <p className="font-semibold">130,000 miles</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Coverage Ratio</p>
                  <p className="font-semibold">1.8x</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Structure</p>
                  <p className="font-semibold text-orange-600">MLP (K-1)</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Massive diversified midstream MLP with 130,000 miles of pipelines across oil, natural gas, NGLs, and
                refined products. Highest yield among quality midstream names. Strong 1.8x coverage ratio supports
                distribution. Permian Basin exposure drives growth. More leveraged than EPD but improving balance sheet.
                Grew distribution 3-4% annually post-2020. K-1 tax form complexity. Best for aggressive income investors
                seeking maximum yield with acceptable risk.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">13. Williams Companies (WMB)</CardTitle>
                  <CardDescription>Natural gas infrastructure</CardDescription>
                </div>
                <Badge className="bg-teal-600">5.9% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$62B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">7 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">58%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Structure</p>
                  <p className="font-semibold">C-Corp</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Pure-play natural gas infrastructure company. Processes 30% of U.S. natural gas. C-Corp structure
                (regular 1099, not K-1). Provides natural gas transportation and processing from major basins (Permian,
                Haynesville, Marcellus). Cut dividend 69% in 2016 but restored growth. Benefits from LNG export demand.
                Lower yield than MLPs but simpler taxes. Best midstream pick for tax-averse investors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">14. MPLX (MPLX)</CardTitle>
                  <CardDescription>Marathon-sponsored MLP</CardDescription>
                </div>
                <Badge className="bg-indigo-600">8.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$48B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Sponsor</p>
                  <p className="font-semibold">Marathon (MPC)</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Coverage Ratio</p>
                  <p className="font-semibold">1.6x</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Structure</p>
                  <p className="font-semibold text-orange-600">MLP (K-1)</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Marathon Petroleum-sponsored MLP focused on gathering, processing, and transportation. Guaranteed
                cash flows from parent company MPC. 8%+ yield with 1.6x coverage. Midwest and Gulf Coast footprint.
                Benefits from MPC's refining operations. Higher risk than EPD but backed by investment-grade parent.
                K-1 tax form. Best for yield-hungry investors comfortable with MLP complexity and sponsor dynamics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-rose-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">15. ONEOK (OKE)</CardTitle>
                  <CardDescription>NGL & natural gas pipelines</CardDescription>
                </div>
                <Badge className="bg-rose-600">5.1% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$58B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">12 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">54%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Structure</p>
                  <p className="font-semibold">C-Corp</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Leading NGL (natural gas liquids) pipeline and storage company. Absorbed MLP into C-Corp (regular
                1099 taxes). 12 consecutive years of dividend increases. Permian Basin and Mid-Continent exposure.
                Lower yield than pure MLPs but cleaner structure and better balance sheet. Dividend aristocrat potential.
                Best for investors wanting midstream exposure without MLP tax complexity.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Comparison: All 15 Oil & Gas Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Company (Ticker)</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Safety</th>
                    <th className="text-left p-2">Tax Form</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">ExxonMobil (XOM)</td><td className="p-2 text-right">3.4%</td><td className="p-2">Integrated</td><td className="p-2"><Badge variant="outline" className="text-green-600">Excellent</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Chevron (CVX)</td><td className="p-2 text-right">3.6%</td><td className="p-2">Integrated</td><td className="p-2"><Badge variant="outline" className="text-green-600">Excellent</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Shell (SHEL)</td><td className="p-2 text-right">4.0%</td><td className="p-2">Integrated</td><td className="p-2"><Badge variant="outline" className="text-green-600">Excellent</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">ConocoPhillips (COP)</td><td className="p-2 text-right">3.3%</td><td className="p-2">E&P</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">EOG Resources (EOG)</td><td className="p-2 text-right">3.2%</td><td className="p-2">E&P</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Devon Energy (DVN)</td><td className="p-2 text-right">5.8%</td><td className="p-2">E&P</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Phillips 66 (PSX)</td><td className="p-2 text-right">4.3%</td><td className="p-2">Refining</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Marathon Petroleum (MPC)</td><td className="p-2 text-right">2.8%</td><td className="p-2">Refining</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Valero Energy (VLO)</td><td className="p-2 text-right">3.9%</td><td className="p-2">Refining</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Kinder Morgan (KMI)</td><td className="p-2 text-right">6.5%</td><td className="p-2">Midstream</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">Enterprise Products (EPD)</td><td className="p-2 text-right">7.2%</td><td className="p-2">Midstream</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">K-1</td></tr>
                  <tr className="border-b"><td className="p-2">Energy Transfer (ET)</td><td className="p-2 text-right">7.8%</td><td className="p-2">Midstream</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td><td className="p-2">K-1</td></tr>
                  <tr className="border-b"><td className="p-2">Williams Companies (WMB)</td><td className="p-2 text-right">5.9%</td><td className="p-2">Midstream</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                  <tr className="border-b"><td className="p-2">MPLX (MPLX)</td><td className="p-2 text-right">8.2%</td><td className="p-2">Midstream</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td><td className="p-2">K-1</td></tr>
                  <tr><td className="p-2">ONEOK (OKE)</td><td className="p-2 text-right">5.1%</td><td className="p-2">Midstream</td><td className="p-2"><Badge variant="outline" className="text-blue-600">Good</Badge></td><td className="p-2">1099</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Energy Dividend Watchlist"
          description="Complete analysis of 25+ oil & gas stocks with yields, payout ratios, oil price sensitivity, and buy targets"
          buttonText="Download Free Watchlist"
          source="oil_gas_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Oil & Gas Subsector Breakdown</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Integrated Majors</CardTitle>
              <Badge variant="outline" className="text-green-600">Lowest Risk</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Do everything: exploration, production, refining, marketing, chemicals. Diversified revenue streams
                smooth out oil price swings.
              </p>
              <p className="text-sm font-semibold mb-2">Examples:</p>
              <p className="text-sm mb-3">XOM, CVX, SHEL</p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Safest dividends in sector</li>
                <li>• Aristocrat track records (40+ years)</li>
                <li>• Vertically integrated cushion</li>
                <li>• Investment-grade credit</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Lower yields (3-4%)</li>
                <li>• Slower dividend growth (2-4%)</li>
                <li>• Less leverage to oil prices</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>E&P Companies</CardTitle>
              <Badge variant="outline" className="text-blue-600">Growth Focused</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Exploration & production only—drill wells, pump oil/gas, sell to market. Pure commodity price
                leverage.
              </p>
              <p className="text-sm font-semibold mb-2">Examples:</p>
              <p className="text-sm mb-3">COP, EOG, DVN</p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Fastest dividend growth (15-25%)</li>
                <li>• Massive cash generation at $75+ oil</li>
                <li>• Variable dividends boost yields</li>
                <li>• Low-cost operators thrive</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Volatile earnings</li>
                <li>• Dividend cuts in downturns</li>
                <li>• Oil price dependent</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle>Refiners</CardTitle>
              <Badge variant="outline" className="text-purple-600">Defensive</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Turn crude oil into usable products (gasoline, diesel, jet fuel). Profit from crack spreads, not
                absolute oil prices.
              </p>
              <p className="text-sm font-semibold mb-2">Examples:</p>
              <p className="text-sm mb-3">PSX, MPC, VLO</p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Benefit from wide crack spreads</li>
                <li>• Less oil price correlation</li>
                <li>• Strong 2020-2026 period</li>
                <li>• Renewable diesel optionality</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Cyclical margins</li>
                <li>• Long-term demand concerns (EVs)</li>
                <li>• Refining capacity oversupply risk</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Midstream/Pipelines</CardTitle>
              <Badge variant="outline" className="text-orange-600">High Yield</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Transport and store oil, natural gas, NGLs, refined products. Earn fees on volumes, not commodity
                prices.
              </p>
              <p className="text-sm font-semibold mb-2">Examples:</p>
              <p className="text-sm mb-3">KMI, EPD, ET, WMB</p>
              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Highest yields (5-8%)</li>
                <li>• Stable fee-based cash flows</li>
                <li>• Less commodity price exposure</li>
                <li>• Long-term contracts</li>
              </ul>
              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• K-1 tax forms (many MLPs)</li>
                <li>• High leverage</li>
                <li>• Past dividend cuts (2015-2016)</li>
                <li>• Volume risk (production declines)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Oil Price Sensitivity Analysis</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Dividend Safety by Oil Price</CardTitle>
            <CardDescription>How different oil prices affect dividend sustainability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock Type</th>
                    <th className="text-center p-2">$60 Oil</th>
                    <th className="text-center p-2">$75 Oil</th>
                    <th className="text-center p-2">$90 Oil</th>
                    <th className="text-left p-2">Breakeven</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Integrated Majors</td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2">$35-40/bbl</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Premium E&P (COP, EOG)</td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-yellow-600">Caution</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2">$40-45/bbl</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Variable Div E&P (DVN)</td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-orange-600">Risk</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-yellow-600">Caution</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2">$50-55/bbl</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Refiners</td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-blue-600">Good</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-blue-600">Good</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-yellow-600">Caution</Badge></td>
                    <td className="p-2">Spread-dependent</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Midstream</td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-blue-600">Good</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2 text-center"><Badge variant="outline" className="text-green-600">Safe</Badge></td>
                    <td className="p-2">Volume-dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
              Note: "Safe" means dividend fully covered by cash flow. "Caution" means covered but with thin margins.
              "Risk" means potential for cuts. Refiners paradoxically struggle at very high oil prices (high input costs).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What Drives Different Oil Prices?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-1">Bull Case ($85-100/bbl):</p>
                <p className="text-xs">OPEC+ production cuts, strong Asian demand, underinvestment in new supply,
                geopolitical disruptions, economic boom</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-1">Base Case ($70-85/bbl):</p>
                <p className="text-xs">Balanced supply/demand, moderate global growth, OPEC+ maintains discipline,
                U.S. shale production steady, China stable</p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                <p className="font-semibold mb-1">Bear Case ($50-65/bbl):</p>
                <p className="text-xs">Global recession, OPEC+ production surge, demand destruction, rapid EV adoption,
                Saudi market share grab, Libya/Iran production returns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Energy Transition Risks & Opportunities</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Long-Term Headwinds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">EV Adoption:</span> Electric vehicles reducing gasoline demand.
                    20% of new car sales by 2030, 50% by 2035.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Renewable Energy:</span> Solar and wind replacing natural gas
                    power generation in some markets.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Regulatory Pressure:</span> Carbon taxes, emissions caps, drilling
                    restrictions in some jurisdictions.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">ESG Divestment:</span> Institutional investors reducing fossil
                    fuel allocations, limiting capital access.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Peak Demand Risk:</span> Global oil demand potentially peaks
                    2030-2035, then structural decline.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Counter-Arguments & Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Emerging Market Demand:</span> India, Africa, Southeast Asia
                    growing oil consumption as middle class expands.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Petrochemicals Growth:</span> Plastics, chemicals, aviation fuel
                    still need oil—not easily replaced.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">LNG Expansion:</span> Natural gas replacing coal globally, growing
                    demand through 2040+.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Energy Pivot:</span> Majors investing in carbon capture, hydrogen,
                    renewable diesel, geothermal.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold min-w-[20px]">•</span>
                  <div>
                    <span className="font-semibold">Underinvestment:</span> Low capex 2015-2025 means supply could
                    tighten, supporting prices for survivors.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How to Position for Energy Transition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Conservative Approach (Hold 10-20 years):</p>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Focus on integrated majors (XOM, CVX) with diversification into chemicals and low-carbon solutions.
                  Their dividends are safe for your investment horizon even with declining oil demand. Think of them
                  as cash cows returning capital while they can.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Income Approach (Need yield now, 5-10 year horizon):</p>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Mix of refiners (PSX, VLO) and midstream C-Corps (KMI, WMB, OKE) for 4-6% yields. Avoid MLPs
                  unless in taxable accounts. Accept that 10-year total return may lag broader market but income
                  remains stable.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Growth Approach (Longer time horizon, accept volatility):</p>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Premium E&P companies (COP, EOG) that will maximize shareholder returns while oil remains profitable.
                  Fast dividend growth and buybacks. Higher beta but potential for outsized returns if oil stays
                  $70-90.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Hedged Approach:</p>
                <p className="text-slate-700 dark:text-slate-300">
                  Own energy stocks (20-30% of dividend portfolio) while also owning renewable energy stocks, electric
                  utilities, and other sectors. This balances energy transition risk—one side wins either way. Use
                  energy dividends to dollar-cost-average into renewable positions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Oil & Gas Portfolios</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Conservative Energy Portfolio</CardTitle>
              <CardDescription>$30,000 investment | 3.8% average yield | Low risk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">ExxonMobil (XOM)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Core holding, aristocrat</span>
                  </div>
                  <span>$12,000 | 40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Chevron (CVX)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Quality, higher yield</span>
                  </div>
                  <span>$9,000 | 30%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">ConocoPhillips (COP)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Growth component</span>
                  </div>
                  <span>$6,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Phillips 66 (PSX)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Refining diversification</span>
                  </div>
                  <span>$3,000 | 10%</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold mb-2">Portfolio Stats:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                    <p className="font-semibold">$1,140</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                    <p className="font-semibold">3.8%</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Breakeven Oil</p>
                    <p className="font-semibold">~$40/bbl</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                    <p className="font-semibold text-green-600">A</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>High-Yield Energy Portfolio</CardTitle>
              <CardDescription>$30,000 investment | 6.2% average yield | Higher risk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Chevron (CVX)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Safe anchor</span>
                  </div>
                  <span>$7,500 | 25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Devon Energy (DVN)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Variable dividend</span>
                  </div>
                  <span>$6,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Kinder Morgan (KMI)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Pipeline yield</span>
                  </div>
                  <span>$6,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Enterprise Products (EPD)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Quality MLP (K-1)</span>
                  </div>
                  <span>$6,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Valero Energy (VLO)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Refining exposure</span>
                  </div>
                  <span>$4,500 | 15%</span>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold mb-2">Portfolio Stats:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                    <p className="font-semibold">$1,860</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                    <p className="font-semibold">6.2%</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">K-1 Tax Forms</p>
                    <p className="font-semibold">1 (EPD)</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                    <p className="font-semibold text-blue-600">B+</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Balanced Energy Portfolio</CardTitle>
            <CardDescription>$50,000 investment | 4.6% average yield | Moderate risk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">ExxonMobil (XOM) - Safety anchor</span>
                <span>$12,500 | 25%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Chevron (CVX) - Quality income</span>
                <span>$10,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">ConocoPhillips (COP) - Dividend growth</span>
                <span>$7,500 | 15%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">EOG Resources (EOG) - Premium E&P</span>
                <span>$5,000 | 10%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Phillips 66 (PSX) - Refining</span>
                <span>$5,000 | 10%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">Williams Companies (WMB) - Midstream</span>
                <span>$5,000 | 10%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <span className="font-semibold">ONEOK (OKE) - NGL infrastructure</span>
                <span>$5,000 | 10%</span>
              </div>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$2,300</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">4.6%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Diversification</p>
                  <p className="font-semibold">4 subsectors</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">K-1 Forms</p>
                  <p className="font-semibold">None</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                Combines safety (XOM, CVX), growth (COP, EOG), and income (WMB, OKE, PSX) across all major energy
                subsectors. No MLPs = simpler taxes. Rebalance annually or when oil prices move dramatically.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Investing in Energy Dividends?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Oil and gas stocks offer some of the market's highest yields with commodity leverage. Start with
              integrated majors for safety, add E&P for growth, and consider midstream for extra yield. Use our
              calculator to model your energy portfolio returns.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/xom">
                <Button className="w-full" size="lg">
                  Calculate XOM Returns →
                </Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Energy Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Compare Top Brokers for Energy Stocks</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Start earning energy dividends with a broker that supports fractional shares, automatic DRIP, and
          commission-free trading. Compare features, fees, and sign-up bonuses below.
        </p>
        <BrokerComparisonTable />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are oil and gas dividends safe in the long term?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on the company and time horizon. Integrated majors like Exxon and Chevron have paid
                dividends for 40+ years through multiple cycles and are likely safe for another 10-20 years minimum.
                They're diversifying into low-carbon energy to extend longevity. Smaller E&P companies face more
                risk from energy transition but offer higher yields and growth now. Consider your investment horizon:
                5-10 years? Very safe. 20-30 years? More uncertain, but majors will adapt.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What oil price do these companies need to sustain dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Integrated majors (XOM, CVX, SHEL) can sustain dividends at $40-45 oil due to diversified operations.
                Premium E&P companies (COP, EOG) need $45-50 oil. Variable dividend E&P stocks (DVN) cut payouts
                below $55-60 oil. Refiners depend on crack spreads, not absolute prices. Midstream companies are
                least sensitive—they earn fees on volumes. With oil at $70-85 in 2026, all dividends are very safe.
                Even a crash to $50-55 wouldn't threaten the top tier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I avoid MLPs because of K-1 tax forms?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not necessarily. MLPs like Enterprise Products (EPD) and Energy Transfer (ET) offer 7-8% yields—much
                higher than alternatives. K-1 forms are more complex than 1099s, delaying tax filing and requiring
                extra accounting. But for taxable accounts, the tax deferral benefits and high yields often justify
                the hassle. Avoid MLPs in IRAs due to UBTI (unrelated business taxable income) complications. If you
                want midstream exposure without K-1s, stick to C-Corps: KMI, WMB, OKE. Consult a tax advisor if unsure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much of my dividend portfolio should be in energy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                10-25% is typical for diversified dividend investors. Energy provides inflation protection, commodity
                exposure, and higher yields than most sectors. But it's cyclical and faces energy transition headwinds.
                Conservative investors: 10-15% (XOM, CVX only). Moderate risk: 15-20% (add COP, PSX). Aggressive:
                20-25% (include DVN, midstream). Don't exceed 30%—too concentrated in one sector. Rebalance when oil
                prices spike to lock in gains.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What's the difference between E&P and integrated oil companies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Integrated companies (XOM, CVX, SHEL) do everything: drill oil, refine it into gasoline, sell it at
                gas stations, make chemicals. They're diversified—when oil prices fall, refining margins often rise,
                offsetting losses. E&P companies (COP, EOG, DVN) only explore for and produce oil/gas. They're pure
                plays on commodity prices—higher leverage, faster growth, but more volatile. Integrated = safer
                dividends, slower growth. E&P = faster dividend growth, higher risk. Most investors own both for balance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do energy stocks perform well during inflation?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, historically energy is one of the best inflation hedges. Oil and gas prices often rise with
                inflation (or cause it). Energy companies pass costs to customers quickly. During 2021-2023 inflation
                spike, energy stocks surged 40-80% while bonds crashed. Dividends also grow faster in inflationary
                environments as commodity prices support earnings. However, severe inflation can trigger recession,
                hurting demand. Best performance in moderate inflation (3-5%) with strong economy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">When is the best time to buy oil and gas dividend stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Historically, the best buying opportunities come during oil crashes when sentiment is most negative:
                2016 ($26 oil), 2020 (negative oil prices), late 2022 (recession fears). Stocks trade at 5-7% yields
                during panics vs 3-4% normally. If you believe oil will recover to $60-80, crashes are gold mines. For
                dollar-cost averaging, monthly purchases smooth out volatility. Avoid chasing oil above $90—valuations
                get stretched. Best practice: build positions gradually at $65-75 oil, add aggressively below $60,
                trim above $85.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I reinvest energy dividends or take cash?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Depends on your goals and oil prices. DRIP (dividend reinvestment) works best during down cycles—buying
                more shares at low prices accelerates compounding. When oil crashes below $60, definitely reinvest. At
                $80-90 oil, consider taking cash to deploy elsewhere or rebalance. For long-term wealth building (10+
                years), reinvesting maximizes returns. For income needs, take cash. Hybrid approach: reinvest 75%
                during normal markets, 100% during crashes, 50% during booms. Use our DRIP calculator to model
                different scenarios.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Start Earning Oil & Gas Dividends Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Energy stocks offer attractive yields, inflation protection, and decades of dividend history. Start
              with Exxon or Chevron for safety, add ConocoPhillips for growth, and consider midstream for extra
              income. The sector faces transition challenges, but cash flows remain strong through 2030+.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/cvx">
                <Button className="w-full" size="lg">
                  Calculate Chevron Returns →
                </Button>
              </Link>
              <Link href="/stocks/cop">
                <Button variant="outline" className="w-full" size="lg">
                  Calculate ConocoPhillips Returns →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-energy-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Energy Dividend Stocks</CardTitle>
                <CardDescription>Broader energy sector including renewables</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks 2026</CardTitle>
                <CardDescription>Top dividend payers across all sectors</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-dividend-stocks-over-5-percent">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield Dividend Stocks</CardTitle>
                <CardDescription>5%+ yields for income investors</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Start your dividend journey safely</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
