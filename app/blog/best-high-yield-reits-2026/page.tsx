import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, TrendingUp, DollarSign, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best High-Yield REITs 2026: 5-10% Dividend Income',
  description: 'Discover the top REITs paying 5-10% yields with monthly dividends. Includes retail, industrial, healthcare, and residential real estate picks for passive income.',
}

export default function BestHighYieldREITs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Building2 className="h-3 w-3 mr-1" />
          Real Estate Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best High-Yield REITs 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Earn 5-10% yields from real estate without being a landlord.
          These REITs pay monthly or quarterly dividends from rental income.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>What is a REIT?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            <strong>REIT = Real Estate Investment Trust.</strong> Think of it as a mutual fund that owns
            buildings instead of stocks. REITs collect rent from tenants and must pay out <strong>90% of
            profits as dividends</strong> by law. This creates high, consistent yields.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white dark:bg-slate-900 rounded">
              <CheckCircle2 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold mb-1">No Landlord Hassles</p>
              <p className="text-slate-600 dark:text-slate-400">Professional managers handle tenants, repairs, leases</p>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded">
              <CheckCircle2 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold mb-1">High Dividends</p>
              <p className="text-slate-600 dark:text-slate-400">90% payout requirement = 5-10% yields typical</p>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded">
              <CheckCircle2 className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold mb-1">Diversification</p>
              <p className="text-slate-600 dark:text-slate-400">Own pieces of 100+ properties with one stock</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 High-Yield REITs</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. Realty Income (O)</CardTitle>
                  <CardDescription>Retail REIT | "The Monthly Dividend Company"</CardDescription>
                </div>
                <Badge className="bg-green-600">5.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">12,400+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Tenants</p>
                  <p className="font-semibold">1,400+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Occupancy</p>
                  <p className="font-semibold">99.0%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Frequency</p>
                  <p className="font-semibold">Monthly</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The gold standard of REITs. Owns retail properties leased to drugstores, dollar stores, convenience
                stores, and grocery stores. 29 years of consecutive dividend increases. Pays monthly. S&P 500 member.
                Most reliable REIT for income investors.
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-green-600">Very Safe</Badge>
                <Badge variant="outline">Monthly Dividends</Badge>
                <Badge variant="outline">S&P 500</Badge>
              </div>

              <Link href="/stocks/o">
                <Button variant="outline" size="sm">Calculate O Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. STAG Industrial (STAG)</CardTitle>
                  <CardDescription>Industrial REIT | E-commerce warehouses</CardDescription>
                </div>
                <Badge className="bg-blue-600">4.3% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">550+ warehouses</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Square Feet</p>
                  <p className="font-semibold">110M+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Occupancy</p>
                  <p className="font-semibold">98.2%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Frequency</p>
                  <p className="font-semibold">Monthly</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Benefiting massively from e-commerce boom. Owns warehouses that Amazon, FedEx, and others
                need for distribution. High occupancy, strong tenant demand, monthly dividends. One of the
                best-positioned REITs for the next decade.
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-blue-600">E-Commerce Play</Badge>
                <Badge variant="outline">Monthly Dividends</Badge>
                <Badge variant="outline">Growth Potential</Badge>
              </div>

              <Link href="/stocks/stag">
                <Button variant="outline" size="sm">Calculate STAG Returns →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. W. P. Carey (WPC)</CardTitle>
                  <CardDescription>Net Lease REIT | Diversified commercial</CardDescription>
                </div>
                <Badge className="bg-purple-600">5.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">1,400+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Lease Length</p>
                  <p className="font-semibold">11 years avg</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Occupancy</p>
                  <p className="font-semibold">98.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold">27 years</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Diversified net lease REIT. Tenants pay property taxes, insurance, and maintenance ("net lease").
                WPC collects rent with minimal expenses. 27 years of consecutive increases. Quarterly dividends
                but very reliable. Global portfolio across U.S. and Europe.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-purple-600">High Yield</Badge>
                <Badge variant="outline">27 Years Growth</Badge>
                <Badge variant="outline">Global</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. Medical Properties Trust (MPW)</CardTitle>
                  <CardDescription>Healthcare REIT | Hospitals and medical facilities</CardDescription>
                </div>
                <Badge className="bg-teal-600">10.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">440+ facilities</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Type</p>
                  <p className="font-semibold">Hospitals</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Countries</p>
                  <p className="font-semibold">9</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Risk</p>
                  <p className="font-semibold text-yellow-600">Moderate</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Extremely high 10% yield attracts income seekers. Owns hospitals leased to operators. Had tenant
                issues in 2023 (some hospital operators struggled post-COVID) but recovering. High risk/high reward.
                Aging population = long-term tailwind for healthcare real estate.
              </p>

              <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 mt-3">
                <CardContent className="pt-3">
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    Proceed with caution
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                    10% yield signals higher risk. Dividend cut possible if tenant issues worsen. Only for
                    experienced investors comfortable with volatility.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. National Storage Affiliates (NSA)</CardTitle>
                  <CardDescription>Self-storage REIT | Storage units nationwide</CardDescription>
                </div>
                <Badge className="bg-orange-600">5.9% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">1,100+ facilities</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Units</p>
                  <p className="font-semibold">750,000+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Occupancy</p>
                  <p className="font-semibold">92.5%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Frequency</p>
                  <p className="font-semibold">Quarterly</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Self-storage is recession-resistant (people need storage during moves, downsizing). NSA operates
                under various local brands. High margins, low capital expenditures, sticky customers. 5.9% yield
                with room for dividend growth. Solid business model.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-orange-600">High Yield</Badge>
                <Badge variant="outline">Recession-Resistant</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top 10 High-Yield REITs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">REIT</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Realty Income (O)</td><td className="p-2">Retail</td><td className="p-2 text-right">5.2%</td><td className="p-2">Monthly</td></tr>
                  <tr className="border-b"><td className="p-2">STAG Industrial (STAG)</td><td className="p-2">Industrial</td><td className="p-2 text-right">4.3%</td><td className="p-2">Monthly</td></tr>
                  <tr className="border-b"><td className="p-2">W. P. Carey (WPC)</td><td className="p-2">Net Lease</td><td className="p-2 text-right">5.8%</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">Medical Properties (MPW)</td><td className="p-2">Healthcare</td><td className="p-2 text-right">10.2%</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">National Storage (NSA)</td><td className="p-2">Self-Storage</td><td className="p-2 text-right">5.9%</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">VICI Properties (VICI)</td><td className="p-2">Gaming/Casino</td><td className="p-2 text-right">5.4%</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">Iron Mountain (IRM)</td><td className="p-2">Data Centers</td><td className="p-2 text-right">3.9%</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">AGNC Investment (AGNC)</td><td className="p-2">Mortgage</td><td className="p-2 text-right">13.8%</td><td className="p-2">Monthly</td></tr>
                  <tr className="border-b"><td className="p-2">EPR Properties (EPR)</td><td className="p-2">Experiential</td><td className="p-2 text-right">7.1%</td><td className="p-2">Monthly</td></tr>
                  <tr><td className="p-2">LTC Properties (LTC)</td><td className="p-2">Senior Housing</td><td className="p-2 text-right">7.8%</td><td className="p-2">Monthly</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Complete REIT Investing Guide"
          description="30+ pages covering REIT types, tax treatment, portfolio allocation, and top picks"
          buttonText="Download Free REIT Guide"
          source="high_yield_reits_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">REIT Types Explained</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Retail REITs</CardTitle>
              <Badge variant="outline">Most Common</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Own shopping centers, strip malls, drugstores, grocery-anchored properties.
              </p>
              <p className="text-sm font-semibold mb-2">Examples: Realty Income, Agree Realty</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Pros:</strong> Stable tenants, monthly income, proven track records<br />
                <strong>Cons:</strong> E-commerce competition for some retail
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industrial REITs</CardTitle>
              <Badge variant="outline" className="text-green-600">Strong Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Warehouses, distribution centers, logistics facilities.
              </p>
              <p className="text-sm font-semibold mb-2">Examples: STAG, Prologis</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Pros:</strong> E-commerce tailwind, high demand, rent growth<br />
                <strong>Cons:</strong> Valuations high after recent run-up
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Healthcare REITs</CardTitle>
              <Badge variant="outline" className="text-blue-600">Demographic Play</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Hospitals, medical offices, senior housing, skilled nursing.
              </p>
              <p className="text-sm font-semibold mb-2">Examples: Welltower, Ventas</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Pros:</strong> Aging population, long-term demand<br />
                <strong>Cons:</strong> Operator risk, regulatory changes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mortgage REITs</CardTitle>
              <Badge variant="destructive">Higher Risk</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Don't own properties—own mortgages and mortgage-backed securities.
              </p>
              <p className="text-sm font-semibold mb-2">Examples: AGNC, NLY</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Pros:</strong> Very high yields (10-15%)<br />
                <strong>Cons:</strong> Frequent dividend cuts, interest rate sensitive
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Important: REIT Tax Treatment</h2>

        <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
              REITs Pay "Ordinary" Dividends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Unlike most stocks, REIT dividends are taxed as <strong>ordinary income</strong> (10-37% federal
              tax rate), not qualified dividends (0-20% rate). This makes REITs less tax-efficient in taxable
              accounts.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <p className="font-semibold text-green-600 mb-2">✓ Best Account: Roth IRA</p>
                <p className="text-sm">Put REITs in Roth IRA where dividends grow 100% tax-free forever.
                Maximize the benefit of high yields.</p>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <p className="font-semibold text-orange-600 mb-2">✗ Avoid: Taxable Accounts</p>
                <p className="text-sm">In a taxable account, you'll pay your full tax rate on REIT dividends
                every year. Use for qualified dividend stocks instead.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample REIT Portfolio ($50K)</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced REIT Income Portfolio</CardTitle>
            <CardDescription>Diversified across property types | 5.6% weighted average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Realty Income (O)</p>
                  <p className="text-xs text-slate-600">Retail | Monthly | Very safe</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$15,000</p>
                  <p className="text-xs">30% | 5.2% yield</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">STAG Industrial (STAG)</p>
                  <p className="text-xs text-slate-600">Warehouses | Monthly | Growth</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$12,500</p>
                  <p className="text-xs">25% | 4.3% yield</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">W. P. Carey (WPC)</p>
                  <p className="text-xs text-slate-600">Net lease | Quarterly | Stable</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$10,000</p>
                  <p className="text-xs">20% | 5.8% yield</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">National Storage (NSA)</p>
                  <p className="text-xs text-slate-600">Self-storage | Quarterly</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$7,500</p>
                  <p className="text-xs">15% | 5.9% yield</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">VICI Properties (VICI)</p>
                  <p className="text-xs text-slate-600">Gaming/Casino | Quarterly</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$5,000</p>
                  <p className="text-xs">10% | 5.4% yield</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Statistics:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Total Invested</p>
                  <p className="font-semibold">$50,000</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold text-green-600">$2,795</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold text-blue-600">5.6%</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                60% monthly payers for consistent cash flow. Diversified across 5 property types.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are REITs safe for retirement income?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Quality REITs like Realty Income and STAG are quite safe for retirement income. They have
                recession-tested business models and long dividend histories. However, avoid mortgage REITs
                and stick with property-owning REITs. Diversify across 5-10 REITs, not just one.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why do REITs have such high yields?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                By law, REITs must distribute 90% of taxable income as dividends. This leaves little cash
                for growth, pushing yields higher. It's not necessarily a warning sign—it's built into
                the REIT structure. Compare to 2-3% yields from corporations that reinvest more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I use a REIT ETF or individual REITs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Both work. REIT ETFs (like VNQ or SCHH) give instant diversification but include lower-quality
                REITs. Individual REITs let you cherry-pick the best but require more research. A hybrid approach
                works: 50-60% in top individual REITs + 40-50% in a REIT ETF for diversification.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do REITs grow dividends like stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, but slower. Quality REITs grow dividends 3-5% annually (vs 8-12% for dividend growth stocks).
                Realty Income has increased dividends for 29 consecutive years. Focus on REITs with 10+ year
                histories of increases for dividend growth potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Earning REIT Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              REITs offer an easy way to earn real estate income without the hassles of being a landlord.
              Start with quality names like Realty Income and STAG, keep them in tax-advantaged accounts,
              and enjoy the monthly cash flow.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/o">
                <Button className="w-full" size="lg">
                  Calculate REIT Returns →
                </Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare REITs →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-monthly-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Monthly Dividend Stocks</CardTitle>
                <CardDescription>REITs + other monthly payers</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>REIT tax treatment explained</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build $1,000/Month Portfolio</CardTitle>
                <CardDescription>REITs as part of income strategy</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Where REITs fit in your strategy</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
