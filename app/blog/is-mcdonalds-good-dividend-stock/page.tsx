import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
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
  Target,
  Percent,
  Building2,
  Calendar,
  Zap,
  Award,
  LineChart,
  PieChart,
  Clock
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata: Metadata = {
  title: "Is McDonald's (MCD) a Good Dividend Stock? 2026 Analysis",
  description: "Complete analysis of McDonald's (MCD) as a dividend investment. 48+ years of consecutive increases, ~2.3% yield, franchise model cash flow, global brand power, and safety analysis.",
  keywords: [
    'mcdonalds dividend',
    'MCD dividend stock',
    'mcdonalds stock analysis 2026',
    'mcdonalds dividend safety',
    'mcdonalds dividend aristocrat',
    'restaurant dividend stocks',
    'mcdonalds dividend history',
    'is mcdonalds a good investment'
  ],
}

export default function IsMcdonaldsGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4">
          <Building2 className="h-3 w-3 mr-1" />
          Stock Analysis
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is McDonald&apos;s (MCD) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          McDonald&apos;s has increased its dividend for 48 consecutive years, just 2 years from Dividend
          King status. With a franchise-heavy business model generating predictable cash flow and a
          ~2.3% yield, MCD is a cornerstone holding for many dividend portfolios.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
          <span>Updated: February 2026</span>
          <span>-</span>
          <span>12 min read</span>
          <span>-</span>
          <span className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            Expert Analysis
          </span>
        </div>
      </div>

      {/* Quick Verdict */}
      <Card className="mb-16 bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-950 dark:to-yellow-950 border-2 border-red-200 dark:border-red-800">
        <CardContent className="pt-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-red-600" />
            Quick Verdict: Should You Buy McDonald&apos;s for Dividends?
          </h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Track Record:</strong> 48 consecutive years of dividend increases. Will become a Dividend King (50+ years) in 2028.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Business Model:</strong> 95% franchised -- capital-light, high-margin, recession-resistant cash flow machine.</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Concern:</strong> Premium valuation (~25x earnings). Recent consumer pushback on menu price increases.</span>
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span><strong>Our Rating: BUY</strong> for long-term dividend investors. Best-in-class franchise model with decades of proven shareholder returns.</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-red-600" />
          McDonald&apos;s Dividend Snapshot (2026)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 rounded-lg">
                <Percent className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Current Yield</p>
                <p className="text-3xl font-bold text-red-600">~2.3%</p>
                <p className="text-xs text-slate-500 mt-1">Annual: $6.68/share</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 rounded-lg">
                <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Consecutive Increases</p>
                <p className="text-3xl font-bold text-yellow-600">48</p>
                <p className="text-xs text-slate-500 mt-1">Dividend King in 2028</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="text-3xl font-bold text-green-600">~57%</p>
                <p className="text-xs text-slate-500 mt-1">Comfortable range</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Key Facts</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Cap:</strong> ~$210 billion</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Restaurants:</strong> 40,000+ in 100+ countries</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Franchise Mix:</strong> ~95% franchised</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>10-Yr Dividend CAGR:</strong> ~8%</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ticker:</strong> MCD (NYSE)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Daily Customers:</strong> 69 million worldwide</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Franchise Model Explained */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          The Franchise Model: Why MCD Is a Cash Flow Machine
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Understanding McDonald&apos;s franchise model is essential to understanding why its dividend
          is so reliable. McDonald&apos;s is essentially a real estate and brand licensing company
          disguised as a restaurant chain.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-6 text-center">
              <Building2 className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Rent Collection</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                MCD owns or leases the land/building, then rents to franchisees at a markup.
                Rent is typically the greater of a base amount or a % of sales (~8.5-12%).
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="pt-6 text-center">
              <DollarSign className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Royalty Fees</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Franchisees pay ~4% of gross sales as royalties for the McDonald&apos;s brand, systems,
                and supply chain access. This is pure profit for MCD.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6 text-center">
              <PieChart className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Capital-Light Model</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Franchisees fund restaurant operations, equipment, and labor. MCD collects
                rent + royalties with minimal operating costs. Result: 40%+ operating margins.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-950 dark:to-yellow-950">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-3">Revenue Mix (2025 Estimated)</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">Franchised Restaurant Revenue (rent + royalties)</span>
                <span className="font-bold text-green-600">~$15.0B (60%)</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">Company-Operated Restaurant Revenue</span>
                <span className="font-bold">~$9.0B (36%)</span>
              </div>
              <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <span className="font-medium">Other Revenue</span>
                <span className="font-bold">~$1.0B (4%)</span>
              </div>
              <div className="flex justify-between p-3 bg-green-100 dark:bg-green-900 rounded">
                <span className="font-bold">Total Revenue</span>
                <span className="font-bold text-green-600">~$25.0B</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
              Key insight: Franchise revenue has ~80% margins vs ~15-20% for company-operated.
              This is why MCD generates enormous free cash flow despite modest total revenue.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* InlineSignup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-7 w-7 text-green-600" />
          McDonald&apos;s Dividend History (10-Year)
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-center p-3">Annual Dividend</th>
                    <th className="text-center p-3">YoY Growth</th>
                    <th className="text-center p-3">Approx. Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2016', div: '$3.61', growth: '+5.6%', yld: '~3.0%' },
                    { year: '2017', div: '$3.83', growth: '+6.1%', yld: '~2.2%' },
                    { year: '2018', div: '$4.19', growth: '+9.4%', yld: '~2.4%' },
                    { year: '2019', div: '$4.73', growth: '+12.9%', yld: '~2.4%' },
                    { year: '2020', div: '$5.04', growth: '+6.6%', yld: '~2.3%' },
                    { year: '2021', div: '$5.25', growth: '+4.2%', yld: '~2.0%' },
                    { year: '2022', div: '$5.66', growth: '+7.8%', yld: '~2.2%' },
                    { year: '2023', div: '$6.08', growth: '+7.4%', yld: '~2.2%' },
                    { year: '2024', div: '$6.38', growth: '+4.9%', yld: '~2.4%' },
                    { year: '2025', div: '$6.68', growth: '+4.7%', yld: '~2.3%' },
                  ].map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-center">{row.div}</td>
                      <td className="p-3 text-center text-green-600">{row.growth}</td>
                      <td className="p-3 text-center">{row.yld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-semibold text-sm mb-1">Consistency Is the Story</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                McDonald&apos;s has never cut or frozen its dividend in nearly 50 years. Growth ranges
                from 4-13% annually, averaging about 8% per year. This reliable mid-single-digit
                to low-double-digit growth combined with the starting yield makes MCD a classic
                &quot;sleep well at night&quot; dividend stock.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis
        </h2>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Dividend Safety Scorecard</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Payout Ratio (~57% of earnings)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Free Cash Flow Coverage (1.5x)</span>
                </div>
                <Badge className="bg-green-600">Safe</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Business Resilience (Recession-proof demand)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Franchise Model (Capital-light)</span>
                </div>
                <Badge className="bg-green-600">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium">Debt Level (~$37B long-term)</span>
                </div>
                <Badge className="bg-yellow-600">Moderate</Badge>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200">Overall: VERY SAFE (9/10)</p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                McDonald&apos;s dividend is among the safest in the market. The franchise model generates
                $8-9B in annual free cash flow with minimal capital requirements. Even during COVID-19
                lockdowns in 2020, MCD continued paying and raising its dividend. The company could
                sustain its dividend through virtually any economic scenario.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pros and Cons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-indigo-600" />
          Pros and Cons
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-green-300 dark:border-green-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Reasons to Buy
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>48-year dividend streak</strong> -- nearly half a century of consecutive increases</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Franchise model</strong> generates 40%+ operating margins with minimal capex requirements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Global brand power</strong> -- 40,000+ restaurants in 100+ countries, 69M daily customers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Recession-resistant</strong> -- consumers trade down to fast food during economic weakness</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Digital transformation</strong> -- loyalty program (150M+ members) drives higher frequency and spend</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-300 dark:border-red-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Risks to Consider
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Premium valuation</strong> (~25x P/E) -- limited margin of safety at current prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Consumer price backlash</strong> -- menu price increases sparking &quot;shrinkflation&quot; criticism</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>High debt</strong> (~$37B) used for buybacks, limiting balance sheet flexibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Health trends</strong> -- long-term shift toward healthier eating could impact demand</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Moderate starting yield</strong> (~2.3%) -- requires patience for compounding to work</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Is McDonald&apos;s a Dividend Aristocrat or Dividend King?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                McDonald&apos;s is currently a Dividend Aristocrat with 48 consecutive years of increases.
                It will achieve Dividend King status (50+ years) in 2028. Only about 50 companies in
                the entire market have achieved Dividend King status, so this milestone is significant.
                The 48-year streak includes increases through the 2001 recession, 2008 financial crisis,
                and 2020 pandemic -- demonstrating exceptional resilience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How safe is McDonald&apos;s dividend during a recession?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Extremely safe. McDonald&apos;s actually benefits from recessions as consumers trade down
                from casual dining to fast food. During 2008-2009, MCD&apos;s same-store sales grew while
                competitors struggled. During COVID-19 in 2020, the dividend was increased despite
                temporary restaurant closures. The franchise model means MCD has relatively fixed
                costs while franchisees bear the brunt of operational challenges. Even in a severe
                recession, MCD should comfortably maintain and grow its dividend.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Why is McDonald&apos;s yield only 2.3% -- is that enough?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The 2.3% starting yield reflects MCD&apos;s premium stock price, not a low dividend.
                The dividend has grown at ~8% annually for a decade. At that rate, your yield on cost
                doubles every 9 years. A $10,000 investment today yielding 2.3% ($230/year) would
                produce $496/year in 10 years and $1,070/year in 20 years. Combined with stock price
                appreciation, total returns have averaged 12-15% annually. For long-term investors,
                the lower starting yield is more than compensated by reliable growth.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Could consumer backlash on prices hurt the dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Short-term traffic softness is possible, but the dividend is not at risk. McDonald&apos;s
                has significant pricing power because it remains the value leader in fast food. Even
                after price increases, a Big Mac meal is cheaper than most alternatives. The company
                has responded to pushback with $5 meal deals and value promotions that drive traffic
                while protecting margins. Franchise revenue is based on a percentage of sales, so
                even moderate traffic declines are offset by higher average ticket sizes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Should I DRIP McDonald&apos;s shares?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, absolutely -- if you are in the wealth accumulation phase. McDonald&apos;s is an ideal
                DRIP candidate because the 8% dividend growth rate compounds powerfully over decades.
                Reinvesting dividends to buy more shares at a 2.3% yield with 8% growth creates a
                snowball effect that dramatically accelerates wealth building. If you are retired and
                need the income to spend, then take the cash. But for anyone with a 10+ year horizon,
                DRIP is the optimal strategy for MCD.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-red-600 to-yellow-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your McDonald&apos;s Dividend Returns</h3>
            <p className="mb-6 text-red-100">
              See how MCD&apos;s 8% annual dividend growth compounds over time. Model DRIP reinvestment
              and project your future income stream.
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
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="grid gap-3">
            <Link href="/blog/best-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              50 Best Dividend Stocks to Buy in 2026
            </Link>
            <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Aristocrats (2026)
            </Link>
            <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Analyze Dividend Safety (8-Point Checklist)
            </Link>
            <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete Guide to DRIP Investing
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
