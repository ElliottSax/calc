import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Star,
  Target,
  Percent,
  Building2,
  Landmark,
  PieChart,
  Calendar,
  Clock,
  Zap,
  Award,
  LineChart
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Is JPMorgan Chase (JPM) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of JPMorgan Chase (JPM) dividend: the largest US bank by assets, ~2.3% yield, strong dividend growth, Jamie Dimon leadership, and financial sector outlook for 2026.',
  keywords: ['jpmorgan dividend', 'JPM dividend', 'jpmorgan stock analysis', 'bank dividend stocks', 'jpmorgan chase dividend yield', 'is jpmorgan a good investment', 'financial sector dividends 2026'],
}

const dividendHistory = [
  { year: 2026, dividend: '$5.20', increase: '8.3%' },
  { year: 2025, dividend: '$4.80', increase: '9.1%' },
  { year: 2024, dividend: '$4.40', increase: '10.0%' },
  { year: 2023, dividend: '$4.00', increase: '5.3%' },
  { year: 2022, dividend: '$3.80', increase: '5.6%' },
  { year: 2021, dividend: '$3.60', increase: '11.1%' },
  { year: 2020, dividend: '$3.24', increase: '0.0%' },
  { year: 2019, dividend: '$3.24', increase: '12.5%' },
  { year: 2018, dividend: '$2.88', increase: '42.9%' },
  { year: 2017, dividend: '$2.12', increase: '15.2%' },
]

const businessSegments = [
  { name: 'Consumer & Community Banking', revenue: '$72B', margin: '35%', description: 'Chase retail banking, credit cards, mortgages, auto loans. 82M consumer accounts, #1 card issuer.' },
  { name: 'Corporate & Investment Banking', revenue: '$55B', margin: '45%', description: '#1 global investment bank. Advisory, capital markets, trading. Leading in M&A and equity underwriting.' },
  { name: 'Commercial Banking', revenue: '$17B', margin: '50%', description: 'Middle-market lending, treasury services, real estate banking for businesses with $20M-$500M revenue.' },
  { name: 'Asset & Wealth Management', revenue: '$21B', margin: '30%', description: '$3.9 trillion in client assets. Private banking for ultra-high-net-worth and institutional investors.' },
]

const peerComparison = [
  { company: 'JPMorgan Chase (JPM)', yield: '2.3%', growth5yr: '8.5%', payout: '27%', rote: '21%', safety: '90/100' },
  { company: 'Bank of America (BAC)', yield: '2.5%', growth5yr: '10.0%', payout: '32%', rote: '14%', safety: '82/100' },
  { company: 'Wells Fargo (WFC)', yield: '2.8%', growth5yr: '15.0%', payout: '35%', rote: '13%', safety: '75/100' },
  { company: 'Goldman Sachs (GS)', yield: '2.5%', growth5yr: '20.0%', payout: '25%', rote: '12%', safety: '80/100' },
  { company: 'Morgan Stanley (MS)', yield: '3.5%', growth5yr: '12.0%', payout: '45%', rote: '16%', safety: '83/100' },
]

export default function IsJPMorganGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-slate-700 to-blue-700">
          <Landmark className="h-3 w-3 mr-1" />
          America's Largest Bank
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is JPMorgan Chase (JPM) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          JPMorgan Chase is the largest bank in the United States by assets, consistently ranked
          #1 in investment banking, credit cards, and wealth management. With a growing 2.3% yield,
          aggressive 8-10% dividend increases, and the legendary Jamie Dimon at the helm, JPM is
          the premier financial sector dividend stock. Here is the full analysis.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Updated February 2026</span>
          <span>|</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 17 min read</span>
        </div>
      </div>

      {/* Quick Summary */}
      <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Quick Verdict: JPMorgan Dividend Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Yield:</strong> ~2.3% ($5.20 annually) with 8-10% annual dividend growth -- the best combo in banking</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Payout Ratio:</strong> Just 27% -- lowest among major banks, enormous room for continued increases</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dominance:</strong> #1 in investment banking, #1 in credit cards (Chase Sapphire), #1 in assets ($4T+)</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Banking sector cyclicality, credit losses in recession, regulatory capital requirements</span>
            </p>
            <p className="flex items-start gap-2">
              <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Safety Score:</strong> 90/100 -- the safest dividend among large US banks by a wide margin</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Company Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-7 w-7 text-blue-600" />
          JPMorgan Chase: The Best-Run Bank in America
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            JPMorgan Chase (NYSE: JPM) is a financial colossus with $4+ trillion in assets, $165 billion
            in annual revenue, and operations spanning consumer banking, investment banking, commercial
            lending, and wealth management. The bank serves nearly half of all US households through its
            Chase retail franchise and dominates Wall Street through its J.P. Morgan institutional business.
          </p>
          <p>
            Under CEO Jamie Dimon's 20+ year leadership, JPMorgan has delivered best-in-class returns.
            The bank's return on tangible equity (ROTE) consistently exceeds 20% -- far above the 10-14%
            typical of large banks. This operational excellence translates directly into shareholder returns:
            JPMorgan has grown its dividend from $0.20/share in 2010 to $5.20/share in 2026, a 26x increase.
          </p>
          <p>
            The bank emerged from the 2008 financial crisis in the strongest position of any major bank,
            acquiring Bear Stearns and Washington Mutual at distressed prices. During the 2023 regional banking
            crisis, JPMorgan acquired First Republic Bank -- again demonstrating its role as the sector's "buyer
            of last resort." Each crisis makes JPMorgan stronger while weakening competitors.
          </p>
        </div>
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-green-600" />
          Dividend Growth History
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Annual Dividend</th>
                    <th className="text-right p-3">YoY Increase</th>
                  </tr>
                </thead>
                <tbody>
                  {dividendHistory.map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-right font-semibold">{row.dividend}</td>
                      <td className="p-3 text-right">
                        {row.increase === '0.0%' ? (
                          <span className="text-yellow-600">Flat (COVID freeze)</span>
                        ) : (
                          <span className="text-green-600">+{row.increase}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              JPMorgan's dividend was frozen in 2020 at the Fed's request during COVID. Once the freeze lifted,
              the bank resumed aggressive double-digit increases. The 2009 financial crisis forced a cut from
              $1.52 to $0.20, which took 10 years to fully recover from -- an important reminder of banking risk.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            The growth trajectory is remarkable. From the $0.20 trough in 2009-2010, JPMorgan has increased
            its dividend by 2,500% in just 16 years. No other mega-cap bank has matched this pace. The 2018
            increase of 42.9% was driven by the Tax Cuts and Jobs Act, which lowered the corporate tax rate
            from 35% to 21%, directly boosting bank earnings.
          </p>
          <p>
            Going forward, management has signaled 8-10% annual increases as sustainable, supported by
            earnings growth, share buybacks (reducing the share count and increasing per-share dividends),
            and the ultra-low 27% payout ratio. At this pace, the dividend doubles every 7-9 years.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          Current Dividend Metrics (2026)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Dividend Yield</p>
                  <p className="text-3xl font-bold">2.3%</p>
                </div>
                <Percent className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Based on ~$226 share price. Quarterly payment of $1.30/share.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Payout Ratio</p>
                  <p className="text-3xl font-bold">27%</p>
                </div>
                <PieChart className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Lowest among big banks. Retains 73% of earnings for growth and capital buffers.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Return on Tangible Equity</p>
                  <p className="text-3xl font-bold">21%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Best-in-class. Average large bank returns 10-14%. JPM consistently above 20%.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Net Income (2025)</p>
                  <p className="text-3xl font-bold">$52B</p>
                </div>
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Most profitable bank in the world. Earnings support massive buybacks + dividends.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Segments */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Four Pillars of Profitability
        </h2>

        <div className="space-y-4">
          {businessSegments.map((segment) => (
            <Card key={segment.name} className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">{segment.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-slate-500">Annual Revenue</p>
                    <p className="font-semibold">{segment.revenue}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Operating Margin</p>
                    <p className="font-semibold">{segment.margin}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            This four-pillar structure gives JPMorgan unmatched diversification within financial services.
            When investment banking fees decline (as in 2022), consumer banking and wealth management pick up
            the slack. When interest rates rise, net interest income surges. When rates fall, trading and
            advisory revenues increase. No single business line dominates, making earnings -- and dividends --
            more predictable.
          </p>
        </div>
      </section>

      {/* InlineSignup midway */}
      <div className="mb-16">
        <InlineSignup />
      </div>

      {/* Jamie Dimon Leadership */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Award className="h-7 w-7 text-yellow-600" />
          The Jamie Dimon Factor
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            No analysis of JPMorgan is complete without discussing CEO Jamie Dimon, widely considered the
            most influential banker of his generation. Dimon has led JPMorgan since 2006, navigating the
            2008 crisis, COVID, and the 2023 regional bank failures with remarkable skill.
          </p>
        </div>

        <Card className="my-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-4">Dimon's Track Record</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm"><strong>Stock Price:</strong> From $40 in 2006 to $226+ in 2026 -- a 465% return excluding dividends</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm"><strong>Crisis Management:</strong> Acquired Bear Stearns (2008), Washington Mutual (2008), and First Republic (2023) at distressed prices -- each accretive to shareholders</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm"><strong>Capital Allocation:</strong> Returned $200B+ to shareholders via dividends and buybacks during his tenure</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm"><strong>Succession Risk:</strong> Dimon is 70 years old. While multiple internal candidates are being groomed, his eventual departure creates uncertainty. This is the single biggest risk to JPMorgan's premium valuation.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis: 90/100
        </h2>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Ultra-Low Payout Ratio: 27% (Best-in-Class)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    JPMorgan could sustain its dividend even if earnings fell 70%. No other large bank has
                    this level of cushion. Bank of America pays out 32%, Wells Fargo 35%, Morgan Stanley 45%.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Fortress Balance Sheet</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    CET1 capital ratio of 15%+ exceeds regulatory minimums by 300+ basis points. JPMorgan
                    voluntarily holds excess capital as a buffer against unexpected losses.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Diversified Earnings (Excellent)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Four business segments prevent over-reliance on any single revenue source. Consumer
                    banking, investment banking, commercial, and wealth management create natural hedges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Stress Test Performance (Outstanding)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Consistently passes Fed stress tests with the highest marks. Even in the "severely adverse"
                    scenario (unemployment 10%, markets crash 55%), JPM maintains adequate capital.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Banking Sector Cyclicality (Moderate Risk)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Banks are cyclical. JPM cut its dividend 87% in 2009 during the financial crisis. While
                    JPM is far stronger today, a severe recession with major credit losses could force a freeze
                    (as in 2020) or modest cut. This is why the safety score is 90, not 98.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Peer Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          JPMorgan vs. Big Bank Peers
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3">Bank</th>
                    <th className="text-right p-3">Yield</th>
                    <th className="text-right p-3">5Y Growth</th>
                    <th className="text-right p-3">Payout</th>
                    <th className="text-right p-3">ROTE</th>
                    <th className="text-right p-3">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  {peerComparison.map((stock) => (
                    <tr
                      key={stock.company}
                      className={`border-b ${stock.company.includes('JPMorgan') ? 'bg-blue-50 dark:bg-blue-950 font-semibold' : ''}`}
                    >
                      <td className="p-3">{stock.company}</td>
                      <td className="p-3 text-right">{stock.yield}</td>
                      <td className="p-3 text-right text-green-600">{stock.growth5yr}</td>
                      <td className="p-3 text-right">{stock.payout}</td>
                      <td className="p-3 text-right">{stock.rote}</td>
                      <td className="p-3 text-right">{stock.safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            <strong>JPMorgan vs. Bank of America:</strong> BAC offers a slightly higher yield (2.5%) and faster recent
            dividend growth (10%), but JPMorgan's 21% ROTE crushes BAC's 14%. JPM's lower payout ratio and
            higher profitability provide a wider margin of safety. For the best risk-adjusted bank dividend, JPMorgan wins.
          </p>
          <p>
            <strong>JPMorgan vs. Wells Fargo:</strong> Wells Fargo yields 2.8% with 15% dividend growth, but
            that growth comes from recovering after a 2020 dividend cut (from $2.04 to $0.40). WFC still
            operates under an asset cap from the fake-accounts scandal. JPMorgan has no such regulatory constraints.
          </p>
          <p>
            <strong>JPMorgan vs. Morgan Stanley:</strong> MS offers the highest yield (3.5%) but with a 45% payout
            ratio and more volatile wealth management and trading revenue. JPMorgan's diversification and lower
            payout ratio make it more resilient through economic cycles.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is JPMorgan Chase a good dividend stock for retirement?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                JPMorgan is an excellent dividend stock for retirement portfolios when combined with more
                defensive holdings. The 2.3% yield provides moderate income, while 8-10% annual growth
                ensures your income keeps pace with (and exceeds) inflation. However, banks are cyclical --
                JPMorgan cut its dividend 87% in 2009. For retirees who cannot tolerate any dividend cuts,
                pair JPM with consumer staples (Procter & Gamble, Walmart) and utilities that are less cyclical.
                Limit JPM to 5-7% of a retirement portfolio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">What happens to JPMorgan's dividend when Jamie Dimon retires?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dimon's succession is the most-watched leadership transition in banking. Several internal candidates
                (Marianne Lake, Jennifer Piepszak, Daniel Pinto) have been groomed for years. JPMorgan's culture
                of operational excellence and risk management should outlast any single CEO. The dividend policy
                (grow 8-10% annually with a 25-30% payout ratio) is institutional, not personal. Expect modest
                volatility around the transition announcement, but the long-term dividend trajectory should continue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Could JPMorgan cut its dividend in a recession?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                In a normal recession, no. JPMorgan's 27% payout ratio and $300B+ in loss-absorbing capital
                provide enormous cushion. During COVID (2020), the Fed froze bank dividends as a precaution,
                but JPMorgan's dividend was not cut. In a severe financial crisis (2008-level), a cut is possible
                but far less likely than in 2008 because JPMorgan holds 3x more capital today. The real risk is
                a Fed-mandated freeze, not a voluntary cut. Even frozen at $5.20, the yield would remain attractive.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">How does interest rate environment affect JPMorgan's dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Higher interest rates boost JPMorgan's net interest income (NII) -- the spread between what it
                earns on loans and pays on deposits. NII reached $90B+ in 2024-2025 with rates above 5%. When
                rates eventually decline, NII will compress, but investment banking and trading revenue typically
                increase in lower-rate environments (more deal-making, more bond trading). JPMorgan's diversification
                means it performs reasonably well in any rate environment, supporting consistent dividend growth.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is JPMorgan stock expensive at current valuations?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                JPMorgan trades at approximately 12x forward earnings and 2.2x tangible book value -- above
                its historical average of 10x earnings and 1.7x book. The premium reflects JPM's superior ROTE
                (21% vs. 12-14% for peers) and Dimon's leadership. While not cheap, JPMorgan earns its premium.
                Dollar-cost averaging over time is the best approach -- trying to time bank stock entries based
                on valuation often means missing out on strong dividend growth years.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your JPM Dividend Returns</h3>
            <p className="mb-6 text-blue-100">
              Model your JPMorgan investment with our free calculators. See how 8-10% annual dividend growth
              compounds your income over decades, and calculate your retirement income from bank stocks.
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
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary" className="gap-2">
                  <LineChart className="h-5 w-5" />
                  Investment Return Calculator
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

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle>Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <Link href="/blog/best-financial-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Financial Sector Dividend Stocks for 2026
            </Link>
            <Link href="/blog/best-bank-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Bank Dividend Stocks to Buy Now
            </Link>
            <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Growth Stocks for 2026
            </Link>
            <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Build a $1,000/Month Dividend Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
