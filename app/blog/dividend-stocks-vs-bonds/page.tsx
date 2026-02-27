import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Scale, TrendingUp, Shield, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Dividend Stocks vs Bonds: Which Generates Better Income? (2026)',
  description: 'Compare dividend stocks vs bonds for income investing. Covers yield comparison, risk differences, inflation protection, tax treatment, and which is best for your age and goals.',
  keywords: ['dividend stocks vs bonds', 'stocks vs bonds for income', 'dividend income vs bond income', 'best income investments', 'bonds vs dividend stocks retirement'],
}

export default function DividendStocksVsBonds() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Scale className="h-3 w-3 mr-1" />
          Income Investing Showdown
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend Stocks vs Bonds
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Both pay you regular income, but they work very differently.
          Here is an honest comparison to help you decide which belongs in your portfolio.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Quick Answer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Neither is universally "better." The right choice depends on your age, risk tolerance, and goals:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <p className="font-bold text-lg text-blue-600 mb-2">Dividend Stocks</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Higher long-term returns, income grows over time, but more volatile. Best for investors
                with 10+ year horizons who can tolerate price swings.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <p className="font-bold text-lg text-green-600 mb-2">Bonds</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Predictable income, lower risk, capital preservation. Best for retirees, short-term goals,
                and the stability portion of any portfolio.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Head-to-Head Comparison</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Dividend Stocks vs Bonds at a Glance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-bold">Factor</th>
                    <th className="text-left p-3 font-bold text-blue-600">Dividend Stocks</th>
                    <th className="text-left p-3 font-bold text-green-600">Bonds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Current Yield (2026)</td>
                    <td className="p-3">2-6% (varies by stock)</td>
                    <td className="p-3">4-5.5% (Treasury/Corporate)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Income Growth</td>
                    <td className="p-3 text-blue-600">Grows 5-10% annually</td>
                    <td className="p-3 text-red-600">Fixed (never increases)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Price Volatility</td>
                    <td className="p-3">High (20-40% swings)</td>
                    <td className="p-3">Low to moderate (5-15%)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Capital Appreciation</td>
                    <td className="p-3 text-blue-600">Strong long-term growth</td>
                    <td className="p-3 text-slate-500">Minimal (return of face value)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Inflation Protection</td>
                    <td className="p-3 text-blue-600">Good (dividends grow)</td>
                    <td className="p-3 text-red-600">Poor (fixed payments lose value)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Tax Treatment</td>
                    <td className="p-3">0-20% (qualified dividends)</td>
                    <td className="p-3">10-37% (ordinary income)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Risk of Loss</td>
                    <td className="p-3">Can lose principal</td>
                    <td className="p-3">Very low if held to maturity</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Payment Guarantee</td>
                    <td className="p-3 text-red-600">None (can be cut)</td>
                    <td className="p-3 text-green-600">Contractual obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Yield Comparison: Who Pays More?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              Current Income Yields (2026)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">10-Year U.S. Treasury Bond</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Risk-free benchmark</p>
                </div>
                <Badge className="bg-green-600 text-lg px-3">~4.3%</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Investment-Grade Corporate Bonds</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">High-quality company bonds</p>
                </div>
                <Badge className="bg-green-600 text-lg px-3">~5.2%</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">S&P 500 Dividend Yield</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Average of all S&P 500 companies</p>
                </div>
                <Badge className="bg-blue-600 text-lg px-3">~1.4%</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Dividend Aristocrats Average</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">25+ years of dividend increases</p>
                </div>
                <Badge className="bg-blue-600 text-lg px-3">~2.8%</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">High-Yield Dividend Stocks</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">REITs, utilities, telecoms</p>
                </div>
                <Badge className="bg-blue-600 text-lg px-3">~4-7%</Badge>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Today's Yield Is Only Part of the Story
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Bonds may yield more today, but dividend stocks grow their payments over time.
                A stock yielding 3% today with 7% annual dividend growth will yield 5.9% on your original
                investment in 10 years and 11.6% in 20 years. A bond's 5% yield stays at 5% forever.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Risk: The Critical Difference</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Dividend Stock Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                  <p className="font-semibold text-red-600">Price Volatility</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Stocks can drop 20-50% in a recession. In 2022, even stable dividend stocks
                    fell 10-15%. You could temporarily lose significant principal.
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                  <p className="font-semibold text-red-600">Dividend Cuts</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Companies can reduce or eliminate dividends. During COVID, hundreds of
                    companies cut payments. There is no contractual guarantee.
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold text-green-600">Upside: Growth Potential</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Stocks historically return 8-10% annually (dividends + price appreciation).
                    Dividend growth compounds your income significantly over decades.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Bond Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                  <p className="font-semibold text-orange-600">Interest Rate Risk</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    When rates rise, existing bond prices fall. In 2022, bonds had their worst year
                    in decades as the Fed raised rates aggressively.
                  </p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                  <p className="font-semibold text-orange-600">Inflation Risk</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Fixed payments lose purchasing power over time. A 5% bond yield with 3% inflation
                    gives you only 2% real return. Over 20 years, inflation erodes your income significantly.
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold text-green-600">Upside: Predictability</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    If held to maturity, you get your principal back plus all interest payments.
                    Treasury bonds are backed by the U.S. government with near-zero default risk.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Inflation Protection: Stocks Win</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How $1,000/Year in Income Changes Over 20 Years</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold text-blue-600 mb-3">Dividend Stocks (7% Growth)</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Year 1:</span><span className="font-semibold">$1,000</span></div>
                  <div className="flex justify-between"><span>Year 5:</span><span className="font-semibold">$1,403</span></div>
                  <div className="flex justify-between"><span>Year 10:</span><span className="font-semibold">$1,967</span></div>
                  <div className="flex justify-between"><span>Year 15:</span><span className="font-semibold">$2,759</span></div>
                  <div className="flex justify-between"><span>Year 20:</span><span className="font-semibold text-blue-600">$3,870</span></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Your income nearly quadruples, easily outpacing inflation.
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold text-green-600 mb-3">Bonds (Fixed Rate)</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Year 1:</span><span className="font-semibold">$1,000</span></div>
                  <div className="flex justify-between"><span>Year 5:</span><span className="font-semibold">$1,000</span></div>
                  <div className="flex justify-between"><span>Year 10:</span><span className="font-semibold">$1,000</span></div>
                  <div className="flex justify-between"><span>Year 15:</span><span className="font-semibold">$1,000</span></div>
                  <div className="flex justify-between"><span>Year 20:</span><span className="font-semibold text-red-600">$1,000</span></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Same payment forever. With 3% inflation, $1,000 in year 20 buys what $554 buys today.
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded text-sm">
              <p className="font-semibold mb-1">The Inflation Math</p>
              <p className="text-slate-700 dark:text-slate-300">
                At 3% average inflation, your cost of living doubles every 24 years. A $50,000 retirement
                budget today becomes $100,000 in 24 years. Fixed bond income cannot keep up, but dividend
                growth from quality stocks can. This is the strongest argument for including dividend
                stocks in long-term portfolios.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Free Income Portfolio Builder Guide"
          description="Learn how to combine dividend stocks and bonds for optimal income at every age. Includes sample portfolios."
          buttonText="Get Free Guide"
          source="stocks_vs_bonds_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Treatment: Stocks Have an Edge</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>After-Tax Income Comparison</CardTitle>
            <CardDescription>Same $10,000 in annual income, different tax treatment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold text-blue-600 mb-2">Qualified Dividends</p>
                <p className="text-sm mb-1">Income: $10,000</p>
                <p className="text-sm mb-1">Tax rate: 15% (most taxpayers)</p>
                <p className="text-sm mb-1">Tax owed: $1,500</p>
                <p className="text-sm font-bold text-blue-600">After-tax income: $8,500</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold text-green-600 mb-2">Bond Interest</p>
                <p className="text-sm mb-1">Income: $10,000</p>
                <p className="text-sm mb-1">Tax rate: 24% (ordinary income)</p>
                <p className="text-sm mb-1">Tax owed: $2,400</p>
                <p className="text-sm font-bold text-green-600">After-tax income: $7,600</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded text-sm">
              <p className="font-semibold mb-1">Exceptions to Know</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>- <strong>Municipal bonds:</strong> Interest is federal tax-free (and sometimes state tax-free)</li>
                <li>- <strong>REIT dividends:</strong> Taxed as ordinary income, similar to bonds</li>
                <li>- <strong>Tax-advantaged accounts:</strong> IRAs and 401(k)s make the tax difference irrelevant</li>
                <li>- <strong>Treasury bonds:</strong> Exempt from state and local taxes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Best Allocation by Age</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Ages 20-35: Heavy on Dividend Stocks</CardTitle>
              <CardDescription>Long time horizon favors growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-blue-200 dark:bg-blue-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">85% Stocks</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-green-200 dark:bg-green-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">15% Bonds</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                At this age, you have decades for dividend growth to compound. Focus on dividend growth stocks
                (companies raising dividends 8-12% annually). A small bond allocation provides stability during
                market crashes without sacrificing too much long-term growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle>Ages 35-50: Balanced Approach</CardTitle>
              <CardDescription>Mix of growth and stability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-blue-200 dark:bg-blue-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">70% Stocks</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-green-200 dark:bg-green-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">30% Bonds</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Gradually increase bond allocation as you approach retirement. Focus on higher-yielding
                dividend stocks while adding investment-grade bonds for stability. Consider a bond ladder
                (bonds maturing at different dates) for predictable income.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Ages 50-65: Income Focus</CardTitle>
              <CardDescription>Shifting toward reliability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-blue-200 dark:bg-blue-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">50% Stocks</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-green-200 dark:bg-green-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">50% Bonds</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Equal split provides good income with lower volatility. Your stock portion should focus
                on Dividend Aristocrats and blue-chip dividend payers. Bond portion provides a safety net
                for early retirement spending and protects against sequence-of-returns risk.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Ages 65+: Capital Preservation</CardTitle>
              <CardDescription>Safety first, but keep some growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-blue-200 dark:bg-blue-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '35%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">35% Stocks</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 bg-green-200 dark:bg-green-800 rounded-full h-4 relative overflow-hidden">
                  <div className="bg-green-600 h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-bold w-32">65% Bonds</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Higher bond allocation protects principal and ensures stable income. But keep 30-40% in
                dividend stocks for inflation protection. Retirement can last 30+ years, and you still
                need income growth. Focus on the safest dividend payers with 25+ year track records.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800 text-sm">
          <p className="font-semibold flex items-center gap-2 mb-1">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            These Are Guidelines, Not Rules
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Your specific allocation depends on your risk tolerance, other income sources (pension, Social Security),
            health, and spending needs. Some 70-year-olds can handle 60% stocks; some 30-year-olds should
            hold more bonds if they panic during market drops.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I replace bonds entirely with dividend stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Some investors do this, but it is risky. In a severe recession, dividend stocks can lose 30-50% of
                their value while bonds typically hold steady or even appreciate. Bonds provide crucial portfolio
                stability during crashes and give you assets to sell (or rebalance from) without locking in stock losses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What about high-yield bonds vs high-yield dividend stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                High-yield ("junk") bonds offer 6-8% yields but carry more default risk, similar to high-yield
                stocks. In a recession, both suffer. If you want higher yields, diversify across both asset
                classes rather than concentrating in one. High-yield bonds and dividend stocks often have
                correlated risks during economic downturns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I hold bonds in a taxable or retirement account?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Generally, hold bonds in tax-advantaged accounts (IRA, 401k) because bond interest is taxed
                as ordinary income. Hold dividend stocks in taxable accounts to benefit from the lower qualified
                dividend tax rate. Municipal bonds are the exception, as they are already tax-free in taxable accounts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are Treasury I Bonds a good alternative to dividend stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                I Bonds are excellent for inflation protection since their rate adjusts with CPI. However,
                you can only buy $10,000 per year, they must be held for at least one year, and they don't
                provide regular income payments. They are a great complement to both dividend stocks and
                traditional bonds but cannot fully replace either.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Model Your Retirement Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use our retirement income calculator to see how different stock/bond allocations
              affect your income over 20-30 years. Compare scenarios with different dividend growth
              rates, bond yields, and inflation assumptions.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/retirement-income">
                <Button className="w-full" size="lg">
                  Retirement Income Calculator
                </Button>
              </Link>
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  DRIP Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/dividend-income-vs-capital-gains">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Income vs Capital Gains</CardTitle>
                <CardDescription>Understanding total return investing</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-portfolio-allocation-by-age">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Portfolio Allocation by Age</CardTitle>
                <CardDescription>How to adjust your portfolio over time</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-live-off-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Live Off Dividends</CardTitle>
                <CardDescription>Build enough income to cover expenses</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>Start with these proven performers</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
