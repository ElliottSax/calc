import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { Wifi, Signal, TrendingUp, AlertTriangle, ShieldCheck, Globe, Radio } from 'lucide-react'

export const metadata = {
  title: 'Best Telecom Dividend Stocks: High-Yield Communication Picks 2026',
  description: 'Top telecom dividend stocks with 4-8% yields. AT&T, Verizon, T-Mobile, BCE, Telus analysis. 5G investment impact, dividend safety, and debt concerns explained.',
  keywords: 'best telecom dividend stocks, telecom stocks high yield, AT&T dividend, Verizon dividend, T-Mobile stock, BCE dividend, wireless carrier stocks, 5G stocks',
}

export default function BestTelecomDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Signal className="h-3 w-3 mr-1" />
          High-Yield Communication
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Telecom Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          High yields from essential communication networks. Wireless carriers and infrastructure
          providers paying 4-8% dividends, with 5G monetization driving future growth.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Telecom Dividend Stocks</h2>

        <Card className="border-l-4 border-l-red-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. AT&T (T)</CardTitle>
                <CardDescription>Largest U.S. carrier | Post-spinoff stability</CardDescription>
              </div>
              <Badge className="bg-red-600">5.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$145B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">58%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Debt/Equity</p>
                <p className="font-semibold text-orange-600">1.1x</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">5G Coverage</p>
                <p className="font-semibold">290M</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              America's largest carrier with 240+ million wireless connections. After spinning off WarnerMedia in 2022,
              AT&T cut dividend 47% to focus on paying down debt and investing in fiber/5G. Current dividend is STABLE
              at $1.11/year (5.8% yield). Debt declining from $170B to $125B target. Fiber expansion (25M passings by 2025)
              and FirstNet government contract provide growth. Conservative investors: wait for 2-3 years of dividend
              increases before buying. Yield seekers: 5.8% looks safe now with improving financials.
            </p>

            <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg mb-3">
              <p className="text-xs font-semibold mb-1 text-orange-800 dark:text-orange-200">Dividend Cut History Alert:</p>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                AT&T cut dividend from $2.08 to $1.11 in 2022 after WarnerMedia spinoff. This was necessary debt
                reduction, not business failure. Management committed to maintaining current $1.11 dividend and growing
                it once leverage targets hit. Track net debt/EBITDA ratio (target: 2.5x by end 2025).
              </p>
            </div>

            <Link href="/stocks/t">
              <Button variant="outline" size="sm">Calculate T Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Verizon (VZ)</CardTitle>
                <CardDescription>Premium network | Stable dividend aristocrat</CardDescription>
              </div>
              <Badge className="bg-blue-600">6.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$175B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">63%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold text-green-600">18 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Debt/Equity</p>
                <p className="font-semibold text-orange-600">1.8x</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Most reliable U.S. network with premium pricing power. 18 consecutive years of dividend increases
              (paused growth 2023-2025 to reduce C-band debt). 143M wireless connections plus business/fiber customers.
              Higher debt than AT&T ($140B) from $50B+ 5G spectrum purchases. Plans to resume dividend growth in 2026
              after debt paydown. 6.8% yield is highest among quality telecoms. Best for: income investors who want
              current yield over growth. Network quality moat keeps churn low (0.8% monthly).
            </p>

            <Link href="/stocks/vz">
              <Button variant="outline" size="sm">Calculate VZ Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. T-Mobile (TMUS)</CardTitle>
                <CardDescription>Growth leader | No dividend (yet)</CardDescription>
              </div>
              <Badge className="bg-purple-600">0% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Only major U.S. carrier without a dividend—but don't dismiss it. T-Mobile is GROWING subscribers
              (120M+ connections, adding 1M+ quarterly) while AT&T/VZ shrink. Sprint merger created 5G capacity
              advantage (mid-band spectrum leadership). Lower debt than competitors ($66B). Management hinted at
              potential dividend initiation in 2026-2027 after hitting leverage targets. Total return investors:
              TMUS may outperform high-yielders through price appreciation. Income investors: skip for now, revisit
              when dividend announced.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">4. BCE Inc (BCE)</CardTitle>
                <CardDescription>Canadian telecom giant | 7%+ yield</CardDescription>
              </div>
              <Badge className="bg-green-600">7.5% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$36B CAD</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">110%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">16 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Share</p>
                <p className="font-semibold">33%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Canada's largest telecom (Bell) with 10M+ wireless, 3M+ internet, 2.5M TV subscribers. 7.5% yield
              from protected oligopoly—only 3 major carriers in Canada. Government blocks foreign competition.
              WARNING: 110% payout ratio means dividend paid from asset sales, not earnings. Cut risk in 2026-2027
              if business doesn't improve. U.S. investors face 15% Canadian withholding tax (6.4% net yield). High
              yield compensates for cut risk. Diversified into media (CTV, TSN) but struggling with cord-cutting.
            </p>

            <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg mb-3">
              <p className="text-xs font-semibold mb-1 text-yellow-800 dark:text-yellow-200">Tax Note for U.S. Investors:</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300">
                Canadian stocks withhold 15% tax on dividends. Hold BCE in taxable accounts to claim foreign tax
                credit on Form 1116. In IRAs, the 15% withholding is lost forever. Net yield: 6.4% after withholding.
              </p>
            </div>

            <Link href="/stocks/bce">
              <Button variant="outline" size="sm">Calculate BCE Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-teal-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">5. Telus Corporation (TU)</CardTitle>
                <CardDescription>Canadian growth telecom | 6.8% yield</CardDescription>
              </div>
              <Badge className="bg-teal-600">6.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Canada's #2 carrier with better fundamentals than BCE. Growing wireless subscribers (9.5M+), expanding
              fiber (3.5M passings), plus Telus Health and Agriculture divisions. 24 consecutive years of dividend
              increases—longest streak among telecoms globally. 85% payout ratio (safer than BCE's 110%). Management
              targets 7-10% annual dividend growth. Same oligopoly protection as BCE but with growth focus. Debt
              manageable at 2.9x EBITDA. Best Canadian telecom for dividend growth investors.
            </p>

            <Link href="/stocks/tu">
              <Button variant="outline" size="sm">Calculate TU Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Telecom Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">Payout</th>
                    <th className="text-left p-2">Safety</th>
                    <th className="text-left p-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">AT&T (T)</td>
                    <td className="p-2 text-right">5.8%</td>
                    <td className="p-2 text-right">58%</td>
                    <td className="p-2">Stable</td>
                    <td className="p-2">Paused</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Verizon (VZ)</td>
                    <td className="p-2 text-right">6.8%</td>
                    <td className="p-2 text-right">63%</td>
                    <td className="p-2">Safe</td>
                    <td className="p-2">Paused</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">T-Mobile (TMUS)</td>
                    <td className="p-2 text-right">0%</td>
                    <td className="p-2 text-right">0%</td>
                    <td className="p-2">N/A</td>
                    <td className="p-2">Future</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">BCE Inc (BCE)</td>
                    <td className="p-2 text-right">7.5%</td>
                    <td className="p-2 text-right">110%</td>
                    <td className="p-2">At Risk</td>
                    <td className="p-2">Minimal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Telus (TU)</td>
                    <td className="p-2 text-right">6.8%</td>
                    <td className="p-2 text-right">85%</td>
                    <td className="p-2">Safe</td>
                    <td className="p-2">7-10%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Telefónica (TEF)</td>
                    <td className="p-2 text-right">8.2%</td>
                    <td className="p-2 text-right">75%</td>
                    <td className="p-2">Moderate</td>
                    <td className="p-2">Stable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Vodafone (VOD)</td>
                    <td className="p-2 text-right">10.1%</td>
                    <td className="p-2 text-right">80%</td>
                    <td className="p-2">Cut Risk</td>
                    <td className="p-2">Turnaround</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Orange (ORAN)</td>
                    <td className="p-2 text-right">7.8%</td>
                    <td className="p-2 text-right">72%</td>
                    <td className="p-2">Safe</td>
                    <td className="p-2">Stable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Deutsche Telekom (DTEGY)</td>
                    <td className="p-2 text-right">3.2%</td>
                    <td className="p-2 text-right">45%</td>
                    <td className="p-2">Very Safe</td>
                    <td className="p-2">Growing</td>
                  </tr>
                  <tr>
                    <td className="p-2">América Móvil (AMX)</td>
                    <td className="p-2 text-right">2.8%</td>
                    <td className="p-2 text-right">35%</td>
                    <td className="p-2">Safe</td>
                    <td className="p-2">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">International Telecom Dividend Stocks</h2>

        <Card className="border-l-4 border-l-orange-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">6. Telefónica (TEF)</CardTitle>
                <CardDescription>Spanish telecom | Latin America exposure</CardDescription>
              </div>
              <Badge className="bg-orange-600">8.2% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Spain's largest telecom operating across Europe and Latin America (Brazil, Argentina, Chile, Peru).
              273M+ global connections. 8.2% yield from stable European operations plus high-growth LatAm markets.
              Debt reduction priority: €37B down from €50B in 2020. Dividend covered at 75% payout ratio. ADR
              trades on NYSE for easy U.S. access. Currency risk: Euro and LatAm exposure hedges USD concentration.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">7. Vodafone Group (VOD)</CardTitle>
                <CardDescription>UK giant | Turnaround story | 10% yield</CardDescription>
              </div>
              <Badge className="bg-red-600">10.1% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$23B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">80%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Debt/EBITDA</p>
                <p className="font-semibold text-red-600">4.2x</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Markets</p>
                <p className="font-semibold">21 countries</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Europe's largest mobile operator with 300M+ connections across 21 countries. 10.1% yield screams
              dividend cut risk—and management CUT 50% in 2024 (from €0.09 to €0.045 per share). New CEO focuses on
              debt reduction, network quality, operational efficiency. Asset sales (Spain, Italy discussions) to pay
              down €40B debt. High-risk, high-reward play. Only for aggressive income investors who can stomach
              volatility and potential further cuts. 10% yield compensates risk—if dividend holds.
            </p>

            <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg mb-3">
              <p className="text-xs font-semibold mb-1 text-red-800 dark:text-red-200">High Risk Warning:</p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Vodafone cut dividend 50% in 2024. High debt (4.2x EBITDA) and competitive European markets create
                further cut risk. 10% yield reflects market skepticism. Speculative only—not for conservative portfolios.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">8. Orange S.A. (ORAN)</CardTitle>
                <CardDescription>French telecom | Stable European operations</CardDescription>
              </div>
              <Badge className="bg-blue-600">7.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              France's leading telecom with 287M customers across Europe, Middle East, Africa. More stable than
              Vodafone—maintained dividend since 2015 at €0.70/share. 72% payout ratio provides cushion. Fiber
              expansion (25M+ French homes) plus mobile growth in Africa. Government owns 23% stake (stability signal).
              7.8% yield, lower debt than VOD. Trades as ADR on NYSE. Best international telecom for risk-averse
              income investors wanting European exposure.
            </p>

            <Link href="/stocks/oran">
              <Button variant="outline" size="sm">Calculate ORAN Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">9. Deutsche Telekom (DTEGY)</CardTitle>
                <CardDescription>T-Mobile parent | Dividend growth leader</CardDescription>
              </div>
              <Badge className="bg-purple-600">3.2% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Germany's telecom giant owning 50%+ of T-Mobile US (its crown jewel). Lower 3.2% yield BUT growing
              10%+ annually as T-Mobile success translates to parent dividend increases. 45% payout ratio = room for
              aggressive growth. Best telecom for dividend growth investors who want exposure to T-Mobile's U.S.
              success plus stable European cash flow. €71B market cap, manageable debt (2.6x EBITDA). Trades as
              ADR DTEGY on OTC markets.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">10. América Móvil (AMX)</CardTitle>
                <CardDescription>Latin America leader | Growth potential</CardDescription>
              </div>
              <Badge className="bg-green-600">2.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Carlos Slim's telecom empire dominating Latin America. 290M+ wireless subscribers across Mexico,
              Brazil, Colombia, Central America, Caribbean. Lower 2.8% yield but 15-20% dividend growth from
              expanding middle-class connectivity. 35% payout ratio leaves room for growth. Trades on NYSE as AMX.
              Emerging market risk (currency, politics, regulation) offset by dominant market positions. Best for:
              growth investors wanting telecom exposure to developing economies.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Telecom Stocks for Dividends?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                Essential Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Wireless and internet are utilities now. People cut cable TV, not cell phones. Average American uses
                20GB+ data monthly. Subscription revenue model = predictable cash flow for dividends.
              </p>
              <p className="text-sm font-semibold mb-2">Recession Performance:</p>
              <ul className="text-xs space-y-1">
                <li>• 2008 crisis: Verizon grew subscribers</li>
                <li>• 2020 pandemic: Data usage surged</li>
                <li>• Churn rates stay low (0.8-1.2%)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Oligopoly Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                U.S. has only 3 national carriers (T, VZ, TMUS). Canada has 3 (BCE, TU, Rogers). High spectrum costs
                ($80B+ invested) prevent new entrants. Government blocks foreign competition in most markets.
              </p>
              <p className="text-sm font-semibold mb-2">Barriers to Entry:</p>
              <ul className="text-xs space-y-1">
                <li>• $20B+ to build national network</li>
                <li>• Spectrum licenses regulated/limited</li>
                <li>• Existing infrastructure advantage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                High Current Yields
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Telecom stocks yield 2-3x the S&P 500 average. VZ at 6.8%, BCE at 7.5%, VOD at 10.1%. Income
                starts immediately. Perfect for retirees needing cash flow today.
              </p>
              <p className="text-sm font-semibold mb-2">Yield Comparison:</p>
              <ul className="text-xs space-y-1">
                <li>• S&P 500 average: 1.5%</li>
                <li>• U.S. telecoms: 5-7%</li>
                <li>• International telecoms: 7-10%</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Telecom Dividend Risks to Understand</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Debt Burden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Telecoms carry massive debt from spectrum purchases and network buildouts. AT&T: $125B. Verizon:
                $140B. High interest rates (5%+) make debt service expensive, squeezing dividend growth.
              </p>

              <p className="text-sm font-semibold mb-2">Debt Impact:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>AT&T debt/EBITDA:</span>
                  <span className="text-orange-600">2.8x (improving)</span>
                </li>
                <li className="flex justify-between">
                  <span>Verizon debt/EBITDA:</span>
                  <span className="text-red-600">3.1x (high)</span>
                </li>
                <li className="flex justify-between">
                  <span>T-Mobile debt/EBITDA:</span>
                  <span className="text-green-600">2.4x (good)</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Watch debt reduction progress. AT&T and VZ paused dividend growth to pay down debt. Track
                net debt/EBITDA quarterly. Target: below 2.5x is healthy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-orange-600" />
                5G Investment Drag
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Carriers spent $50B+ on 5G spectrum, plus $100B+ on network equipment and deployment. Verizon paid
                $45B for C-band alone. Heavy capex (20-25% of revenue) limits free cash flow for dividends.
              </p>

              <p className="text-sm font-semibold mb-2">5G Timeline:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">2020-2024:</span>
                  <span>Build phase (high capex, low returns)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">2025-2027:</span>
                  <span>Monetization ramp (IoT, enterprise, fixed wireless)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2028+:</span>
                  <span>Dividend growth resumption as capex normalizes</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Good news: 5G build mostly complete. Bad news: revenue growth from 5G slower than expected.
                Consumers don't pay premium for 5G speeds. Enterprise/IoT adoption takes time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-yellow-600" />
                Limited Growth Potential
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Developed markets are saturated—100%+ wireless penetration. Growth comes from stealing competitors'
                customers (zero-sum) or raising prices (inflation-only). U.S. wireless revenue growing 2-3% annually
                (inflation pace).
              </p>

              <p className="text-sm font-semibold mb-2">Revenue Growth Outlook:</p>
              <ul className="text-xs space-y-1">
                <li>• Wireless service: 2-3% (price increases)</li>
                <li>• Fixed wireless broadband: 10-15% (growing from small base)</li>
                <li>• Business/enterprise: 4-6% (5G, IoT, private networks)</li>
                <li>• Overall: 3-5% revenue growth next 5 years</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                International Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                European telecoms face intense competition (4-6 carriers per country vs. U.S. 3). Regulators prevent
                consolidation and force price cuts. Currency risk (EUR/GBP weakness vs. USD). Vodafone down 60%
                over 5 years despite 10% yield.
              </p>

              <p className="text-sm font-semibold mb-2">International Headwinds:</p>
              <ul className="text-xs space-y-1">
                <li>• EU regulatory pressure on pricing</li>
                <li>• 4th carrier mandates increase competition</li>
                <li>• Currency depreciation vs. USD</li>
                <li>• Lower ARPU (average revenue per user)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">U.S. vs Canadian vs International Telecoms</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>U.S. Carriers</CardTitle>
              <Badge variant="outline" className="text-blue-600">5-7% Yield, Moderate Safety</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                AT&T and Verizon offer 5.8-6.8% yields with debt paydown focus. Dividend growth paused 2023-2026
                but likely resumes 2027+. T-Mobile has no dividend yet but may initiate in 2026-2027.
              </p>

              <p className="text-sm font-semibold mb-2">Best For:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>Income now:</span>
                  <span className="text-blue-600">Verizon (6.8%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Balanced:</span>
                  <span className="text-blue-600">AT&T (5.8%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Growth:</span>
                  <span className="text-blue-600">T-Mobile (0%)</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Choose U.S. carriers for: Lower currency risk, eventual dividend growth resumption, fiber/fixed
                wireless upside, English financial reporting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Canadian Carriers</CardTitle>
              <Badge variant="outline" className="text-green-600">7-8% Yield, Tax Complexity</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                BCE and Telus yield 6.8-7.5% from protected oligopoly. Only 3 national carriers. Government blocks
                foreign competition. Higher yields compensate for 15% withholding tax and slower growth.
              </p>

              <p className="text-sm font-semibold mb-2">Top Picks:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>High yield (risky):</span>
                  <span className="text-green-600">BCE (7.5%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Dividend growth:</span>
                  <span className="text-green-600">Telus (6.8%)</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Remember 15% Canadian withholding tax. 7.5% BCE yield = 6.4% after tax. Hold in taxable accounts
                to claim foreign tax credit. Never in IRA/401(k).
              </p>

              <div className="p-2 bg-yellow-50 dark:bg-yellow-950 rounded text-xs">
                <span className="font-semibold">Risk:</span> BCE's 110% payout ratio creates cut risk. Telus safer
                at 85% payout.
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle>International Carriers</CardTitle>
              <Badge variant="outline" className="text-purple-600">8-10% Yield, Higher Risk</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                European and LatAm telecoms offer 7-10% yields but face intense competition, regulatory pressure,
                currency risk, and political instability. Vodafone already cut dividend 50% in 2024.
              </p>

              <p className="text-sm font-semibold mb-2">Risk Spectrum:</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex justify-between">
                  <span>Safest:</span>
                  <span className="text-green-600">Orange (7.8%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Growth play:</span>
                  <span className="text-blue-600">Deutsche Telekom (3.2%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Speculation:</span>
                  <span className="text-red-600">Vodafone (10.1%)</span>
                </li>
              </ul>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Choose international for: Portfolio diversification, currency hedge, exposure to emerging market
                growth (AMX), or speculation on turnarounds (VOD). Not for conservative income portfolios.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Telecom Dividend Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced Telecom Income Portfolio</CardTitle>
            <CardDescription>$25K investment | 6.2% average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Verizon (VZ)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Core U.S. holding, highest yield</span>
                </div>
                <span>$8,000 | 32%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">AT&T (T)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Fiber growth potential</span>
                </div>
                <span>$6,000 | 24%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Telus (TU)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Canadian growth leader</span>
                </div>
                <span>$5,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Deutsche Telekom (DTEGY)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Dividend growth via T-Mobile</span>
                </div>
                <span>$4,000 | 16%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Orange (ORAN)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">European diversification</span>
                </div>
                <span>$2,000 | 8%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$1,550</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">6.2%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Dividend Growth</p>
                  <p className="font-semibold">2-4%/yr</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-xs font-semibold mb-1 text-blue-800 dark:text-blue-200">Portfolio Notes:</p>
              <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                <li>• 64% U.S. exposure (VZ, T, DTEGY via T-Mobile stake) for stability</li>
                <li>• 20% Canadian (TU) for yield boost and oligopoly protection</li>
                <li>• 16% European (ORAN, DTEGY) for diversification and currency hedge</li>
                <li>• Mix of high current yield (VZ, T, TU, ORAN) + growth (DTEGY)</li>
                <li>• Avoided highest-risk names (BCE, VOD) despite tempting yields</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Telecom Dividend Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Telecom stocks offer 5-8% yields with essential service stability. Use our dividend calculator to
              project returns from AT&T, Verizon, BCE, or international carriers. Model DRIP compounding, compare
              dividend growth scenarios, and build your high-yield telecom portfolio.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">Dividend Calculator →</Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">Growth Calculator →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Best Brokers for Telecom Dividend Stocks</h2>
        <BrokerComparisonTable />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Are AT&T and Verizon dividends safe after their debt issues?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, current dividends are safe but growth is paused. AT&T cut dividend 47% in 2022 to stabilize after
                WarnerMedia spinoff—current $1.11/year dividend is sustainable at 58% payout ratio. Verizon maintained
                dividend but paused growth 2023-2025 to pay down $140B debt from 5G spectrum. Both companies prioritize
                debt reduction before resuming dividend increases. VZ targets debt/EBITDA below 2.5x by 2026, T by 2025.
                Expect dividend growth to resume 2027+ once leverage targets achieved. Current yields (5.8% T, 6.8% VZ)
                are safe for income investors comfortable with flat payments for 2-3 years.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Should I buy AT&T after the dividend cut?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your goals. AT&T is NOT for dividend growth investors who want annual increases—growth
                paused until 2026+. AT&T IS for yield investors who want 5.8% current income and can tolerate flat
                payments. The 2022 dividend cut was strategic debt reduction, not business failure. Positives: Fiber
                expansion (25M homes by 2025), FirstNet government contract, wireless network quality improving, debt
                declining. Negatives: High debt still ($125B), intense competition from T-Mobile, slow revenue growth.
                Conservative approach: Wait for 2-3 years of dividend increases before buying. Aggressive approach:
                Buy now for 5.8% yield and potential appreciation when dividend growth resumes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Why do Canadian telecoms yield more than U.S. carriers?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Higher yields reflect different business models and risks. Canadian telecoms (BCE 7.5%, Telus 6.8%)
                operate in protected oligopoly—only 3 national carriers, government blocks foreign competition, less
                price competition. BUT they have slower growth (saturated market), smaller scale (38M Canadians vs
                335M Americans), currency risk (CAD weakness), and 15% withholding tax for U.S. investors. U.S.
                carriers yield less (5-7%) but offer larger markets, potential dividend growth resumption, fiber/fixed
                wireless upside, and no tax complications. Higher Canadian yields compensate for these disadvantages.
                After 15% withholding tax, BCE's 7.5% becomes 6.4%—only slightly higher than VZ's 6.8% with no tax drag.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Will 5G lead to higher telecom dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Eventually yes, but not immediately. 5G requires massive investment (2020-2025: $50B spectrum + $100B
                network buildout) that drains free cash flow now. Verizon spent $45B on C-band spectrum alone. High
                capex forces carriers to pause dividend growth and prioritize debt paydown. Revenue from 5G is
                ramping slower than expected—consumers don't pay premium for faster speeds. Real 5G monetization
                comes from enterprise (private networks), IoT (billions of connected devices), and fixed wireless
                broadband (home internet replacement). Timeline: 2020-2024 was build phase (heavy spending), 2025-2027
                is monetization ramp, 2028+ should see dividend growth resumption as capex normalizes to 15-18% of
                revenue (from current 20-25%). Patience required—5G dividend payoff is 3-5 years away.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Are international telecom dividends worth the risks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Only for diversification and aggressive income seekers. European telecoms (Vodafone 10.1%, Orange 7.8%,
                Telefónica 8.2%) offer higher yields but face intense competition (4-6 carriers per country), regulatory
                price pressure, currency depreciation, and slower growth. Vodafone already cut dividend 50% in 2024.
                Latin American telecoms (América Móvil 2.8%) have growth potential but political/currency risks. Safest
                international play: Deutsche Telekom (3.2% yield) which owns 50%+ of T-Mobile—essentially a T-Mobile
                proxy with European diversification and 10%+ dividend growth. Conservative investors: stick to U.S./Canadian
                carriers. Aggressive investors: limit international to 20% of telecom allocation, favor Orange (stable)
                or Deutsche Telekom (growth) over Vodafone (turnaround speculation).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Should I buy T-Mobile even though it doesn't pay a dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, if you want total return over current income. T-Mobile is the only growing U.S. carrier—adding 1M+
                subscribers quarterly while AT&T/Verizon shrink. Sprint merger gave T-Mobile massive mid-band 5G spectrum
                advantage. Lower debt ($66B) than VZ ($140B) or T ($125B) provides financial flexibility. Management
                hinted at dividend initiation in 2026-2027 after hitting leverage targets. Stock has outperformed AT&T/VZ
                by 100%+ over 5 years through price appreciation. Best for: Growth investors under 50 who don't need
                income today. T-Mobile could become dividend growth leader if it initiates at low payout ratio and grows
                10-15% annually. Income investors needing cash now: Skip TMUS, buy VZ. Total return investors: TMUS may
                deliver better 10-year returns than high-yielding competitors despite 0% current yield.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How should I allocate between telecom and other dividend sectors?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Limit telecoms to 10-15% of dividend portfolio due to sector concentration risk and debt concerns.
                Diversify across sectors: 20-25% financials (banks, insurance), 15-20% consumer staples (PG, KO),
                15-20% healthcare (JNJ, ABBV), 10-15% utilities, 10-15% telecoms, 10-15% REITs, 5-10% energy. Within
                telecom allocation, split between 2-3 positions for diversification: Core holding (40-50%): Verizon
                for highest U.S. yield; Secondary holding (30-40%): AT&T for fiber growth or Telus for dividend growth;
                Diversifier (10-20%): Deutsche Telekom or Orange for international exposure. Never go all-in on telecoms—
                sector faces secular headwinds (debt, saturated markets, limited pricing power). Use telecoms for yield
                boost, not portfolio core.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">What payout ratio is safe for telecom stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Under 75% is safe for quality telecoms with low debt. AT&T at 58%, Verizon at 63%, Telus at 85%, Orange
                at 72% are all sustainable. RED FLAG: BCE at 110% means dividend exceeds earnings—company paying from
                asset sales, not operations. This creates cut risk if business doesn't improve. Vodafone at 80% already
                cut 50% in 2024 despite seemingly safe ratio—because high debt (4.2x EBITDA) required cash for deleveraging.
                Key insight: payout ratio alone isn't enough for telecoms. Also check: (1) Debt/EBITDA under 3.0x,
                (2) Free cash flow coverage (dividend should be 70-80% of FCF), (3) Multi-year trend (payout ratio
                rising = warning sign). Safe telecom dividend combines: sub-75% payout + sub-3x debt + stable/growing FCF.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks 2026</CardTitle>
                <CardDescription>Top 50 dividend payers across all sectors</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-canadian-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Canadian Dividend Stocks</CardTitle>
                <CardDescription>High-yield TSX picks with 4-7% yields</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-monthly-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Monthly Dividend Stocks</CardTitle>
                <CardDescription>Get paid 12 times per year</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-high-yield-reits-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best High-Yield REITs 2026</CardTitle>
                <CardDescription>Real estate income with 5-9% yields</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
