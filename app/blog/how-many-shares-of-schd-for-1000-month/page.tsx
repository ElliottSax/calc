import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, DollarSign, TrendingUp, Calculator, CheckCircle2, AlertTriangle, ArrowRight, Target, PieChart, Calendar } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How Many Shares of SCHD for $1,000/Month in Dividends? (2026)',
  description: 'Calculate exactly how many shares of SCHD you need to earn $1,000 per month in dividends. Current dividend data, cost breakdown, DCA timelines, and portfolio strategies.',
  keywords: ['how many shares of SCHD', 'SCHD dividend income', 'SCHD 1000 per month', 'SCHD dividend per share', 'SCHD dividend calculator'],
}

export default function HowManySCHDSharesFor1000Month() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          SCHD Analysis 2026
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How Many Shares of SCHD for $1,000/Month?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          Quick answer: approximately 4,615 shares of SCHD (~$120,000) at the current dividend rate.
          Here is the detailed breakdown with DCA timelines and alternative strategies.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Updated February 2026 | 10 min read
        </p>
      </div>

      {/* Quick Answer Card */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Quick Answer: SCHD Shares Needed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <p className="text-sm text-slate-500">SCHD Price (Feb 2026)</p>
                <p className="text-3xl font-bold">~$26.00</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <p className="text-sm text-slate-500">Annual Dividend Per Share</p>
                <p className="text-3xl font-bold">~$2.60</p>
                <p className="text-xs text-slate-500">($0.65/quarter)</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <p className="text-sm text-slate-500">Current Yield</p>
                <p className="text-3xl font-bold text-blue-600">~3.5%</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                <p className="text-sm text-slate-500">Target: $1,000/Month = $12,000/Year</p>
                <p className="text-3xl font-bold text-green-600">4,615 Shares</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">$12,000 / $2.60 per share</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                <p className="text-sm text-slate-500">Total Investment Needed</p>
                <p className="text-3xl font-bold">~$120,000</p>
                <p className="text-xs text-slate-500">4,615 shares x $26.00</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
            <p className="text-sm font-semibold mb-1">The Formula:</p>
            <p className="text-lg font-mono font-bold text-blue-600">
              Shares Needed = Annual Income Target / Annual Dividend Per Share
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              $12,000 / $2.60 = 4,615 shares x $26.00/share = $120,000
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Income at Different Share Counts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">SCHD Income at Different Share Counts</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Monthly Dividend Income by Number of Shares</CardTitle>
            <CardDescription>Based on $2.60 annual dividend per share</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Shares Owned</th>
                    <th className="text-right p-3">Investment Cost</th>
                    <th className="text-right p-3">Annual Dividends</th>
                    <th className="text-right p-3">Monthly Income</th>
                    <th className="text-right p-3">Daily Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">100 shares</td>
                    <td className="p-3 text-right">$2,600</td>
                    <td className="p-3 text-right">$260</td>
                    <td className="p-3 text-right">$21.67</td>
                    <td className="p-3 text-right">$0.71</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">500 shares</td>
                    <td className="p-3 text-right">$13,000</td>
                    <td className="p-3 text-right">$1,300</td>
                    <td className="p-3 text-right">$108.33</td>
                    <td className="p-3 text-right">$3.56</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">1,000 shares</td>
                    <td className="p-3 text-right">$26,000</td>
                    <td className="p-3 text-right">$2,600</td>
                    <td className="p-3 text-right">$216.67</td>
                    <td className="p-3 text-right">$7.12</td>
                  </tr>
                  <tr className="border-b bg-blue-50 dark:bg-blue-950">
                    <td className="p-3 font-semibold">2,308 shares</td>
                    <td className="p-3 text-right font-semibold">$60,000</td>
                    <td className="p-3 text-right font-semibold">$6,000</td>
                    <td className="p-3 text-right font-semibold text-blue-600">$500.00</td>
                    <td className="p-3 text-right">$16.44</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">3,000 shares</td>
                    <td className="p-3 text-right">$78,000</td>
                    <td className="p-3 text-right">$7,800</td>
                    <td className="p-3 text-right">$650.00</td>
                    <td className="p-3 text-right">$21.37</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-bold">4,615 shares</td>
                    <td className="p-3 text-right font-bold">$120,000</td>
                    <td className="p-3 text-right font-bold">$12,000</td>
                    <td className="p-3 text-right font-bold text-green-600">$1,000.00</td>
                    <td className="p-3 text-right font-bold">$32.88</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Important Note
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                SCHD pays dividends quarterly, not monthly. Your $1,000/month would actually arrive as approximately $3,000 every three months. You can split this into monthly portions or pair SCHD with monthly-paying investments for smoother cash flow.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why SCHD */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why SCHD Is a Top Choice for Dividend Income</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-6 w-6 text-blue-600" />
              SCHD at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Expense ratio:</strong> 0.06% ($0.60 per $1,000/year)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Holdings:</strong> ~100 quality U.S. dividend stocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>10-year dividend growth:</strong> ~12% annually</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Index tracked:</strong> Dow Jones U.S. Dividend 100</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Dividend frequency:</strong> Quarterly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Tax efficiency:</strong> Mostly qualified dividends</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>5-year total return:</strong> ~55%+ (with reinvestment)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Top holdings:</strong> Broadcom, Merck, Home Depot, Coca-Cola</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm font-semibold mb-2">The SCHD Advantage: Dividend Growth</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                SCHD does not just pay dividends -- it grows them. Over the past decade, SCHD increased its per-share dividend by approximately 12% annually. This means your 4,615 shares generating $1,000/month today could generate $1,762/month in 5 years and $3,106/month in 10 years, without buying a single additional share.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* DCA Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">DCA Timeline: Building to 4,615 Shares</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Dollar-Cost Averaging Into SCHD
            </CardTitle>
            <CardDescription>How long to accumulate 4,615 shares at different investment rates (assuming 8% annual total return including dividend reinvestment)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Monthly Investment</th>
                    <th className="text-right p-3">Shares/Month (avg)</th>
                    <th className="text-right p-3">Years to 4,615 Shares</th>
                    <th className="text-right p-3">Total Invested</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">$500/month</td>
                    <td className="p-3 text-right">~19</td>
                    <td className="p-3 text-right">12.5 years</td>
                    <td className="p-3 text-right">$75,000</td>
                  </tr>
                  <tr className="border-b bg-blue-50 dark:bg-blue-950">
                    <td className="p-3 font-semibold">$1,000/month</td>
                    <td className="p-3 text-right">~38</td>
                    <td className="p-3 text-right">8.2 years</td>
                    <td className="p-3 text-right">$98,400</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">$1,500/month</td>
                    <td className="p-3 text-right">~58</td>
                    <td className="p-3 text-right">6.1 years</td>
                    <td className="p-3 text-right">$109,800</td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-semibold">$2,000/month</td>
                    <td className="p-3 text-right">~77</td>
                    <td className="p-3 text-right font-bold text-green-600">4.8 years</td>
                    <td className="p-3 text-right">$115,200</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">$3,000/month</td>
                    <td className="p-3 text-right">~115</td>
                    <td className="p-3 text-right">3.4 years</td>
                    <td className="p-3 text-right">$122,400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg mb-4">
              <p className="text-sm font-semibold text-green-600 mb-2">Key Insight: DRIP Accelerates Your Timeline</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                At $1,000/month invested, DRIP (reinvesting dividends) saves you approximately 1.5 years compared to investing only your cash contributions. As your share count grows, the reinvested dividends buy more and more shares automatically, creating a snowball effect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/investment-return">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Investment Return Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SCHD Dividend Growth Projection */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">SCHD Dividend Growth Projection</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              If You Hold 4,615 Shares (No Additional Purchases)
            </CardTitle>
            <CardDescription>Assuming SCHD continues its historical 10% annual dividend growth rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Dividend/Share</th>
                    <th className="text-right p-3">Annual Income</th>
                    <th className="text-right p-3">Monthly Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">2026 (Now)</td>
                    <td className="p-3 text-right">$2.60</td>
                    <td className="p-3 text-right">$12,000</td>
                    <td className="p-3 text-right font-semibold">$1,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2029 (+3 years)</td>
                    <td className="p-3 text-right">$3.46</td>
                    <td className="p-3 text-right">$15,972</td>
                    <td className="p-3 text-right font-semibold">$1,331</td>
                  </tr>
                  <tr className="border-b bg-blue-50 dark:bg-blue-950">
                    <td className="p-3">2031 (+5 years)</td>
                    <td className="p-3 text-right">$4.19</td>
                    <td className="p-3 text-right">$19,326</td>
                    <td className="p-3 text-right font-semibold text-blue-600">$1,611</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2036 (+10 years)</td>
                    <td className="p-3 text-right">$6.74</td>
                    <td className="p-3 text-right">$31,117</td>
                    <td className="p-3 text-right font-semibold text-green-600">$2,593</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-bold">2046 (+20 years)</td>
                    <td className="p-3 text-right font-bold">$17.49</td>
                    <td className="p-3 text-right font-bold">$80,726</td>
                    <td className="p-3 text-right font-bold text-green-600">$6,727</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              This is the compounding power of dividend growth. Your $1,000/month could become $6,727/month in 20 years without buying a single additional share. The portfolio value would also appreciate significantly alongside the growing dividends.
            </p>

            <p className="text-xs text-slate-500 mt-3">
              Projections assume 10% annual dividend growth, consistent with SCHD historical average. Actual results will vary. Past performance does not guarantee future results.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup />
      </div>

      {/* SCHD Alternatives */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">SCHD Alternatives: Diversify for Better Results</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Do Not Put All $120K in SCHD Alone</CardTitle>
            <CardDescription>Consider a blended approach for smoother income and better risk management</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              While SCHD is excellent, concentrating $120K in a single fund exposes you to one index methodology, one fund provider, and one style of dividend investing. Here is a diversified alternative that still generates $1,000/month:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Fund</th>
                    <th className="text-right p-3">Allocation</th>
                    <th className="text-right p-3">Yield</th>
                    <th className="text-right p-3">Annual Income</th>
                    <th className="text-right p-3">Pays</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">SCHD (Quality Dividend)</td>
                    <td className="p-3 text-right">$48,000</td>
                    <td className="p-3 text-right">3.5%</td>
                    <td className="p-3 text-right">$1,680</td>
                    <td className="p-3 text-right">Quarterly</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">VYM (Broad High Dividend)</td>
                    <td className="p-3 text-right">$30,000</td>
                    <td className="p-3 text-right">3.0%</td>
                    <td className="p-3 text-right">$900</td>
                    <td className="p-3 text-right">Quarterly</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">JEPI (Covered Call Income)</td>
                    <td className="p-3 text-right">$18,000</td>
                    <td className="p-3 text-right">7.5%</td>
                    <td className="p-3 text-right">$1,350</td>
                    <td className="p-3 text-right">Monthly</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">O (Realty Income REIT)</td>
                    <td className="p-3 text-right">$14,000</td>
                    <td className="p-3 text-right">5.5%</td>
                    <td className="p-3 text-right">$770</td>
                    <td className="p-3 text-right">Monthly</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">DGRO (Dividend Growth)</td>
                    <td className="p-3 text-right">$15,000</td>
                    <td className="p-3 text-right">2.3%</td>
                    <td className="p-3 text-right">$345</td>
                    <td className="p-3 text-right">Quarterly</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-bold">Total</td>
                    <td className="p-3 text-right font-bold">$125,000</td>
                    <td className="p-3 text-right font-bold text-green-600">4.0%</td>
                    <td className="p-3 text-right font-bold text-green-600">$5,045</td>
                    <td className="p-3 text-right font-bold">Mixed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="text-sm font-semibold text-green-600 mb-1">Blended Monthly Income: ~$420/month from quarterly payers + ~$177/month from monthly payers</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                By mixing quarterly and monthly dividend payers, you create smoother monthly income. JEPI and Realty Income pay monthly, helping bridge the gaps between SCHD quarterly payments. You also get exposure to real estate, covered call premiums, and different dividend growth rates.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is SCHD a good long-term investment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Yes, for dividend-focused investors.</strong> SCHD tracks 100 high-quality U.S. dividend stocks screened for financial strength, dividend consistency, and dividend growth. Its 0.06% expense ratio is among the lowest in the industry. Since inception in 2011, SCHD has delivered competitive total returns with lower volatility than the S&P 500 during downturns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I buy fractional shares of SCHD?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Yes, at most brokers.</strong> Fidelity, Schwab, and M1 Finance all support fractional shares of ETFs including SCHD. This means you do not need to buy whole shares at $26 each. You can invest any dollar amount (even $5) and own a fraction of a share with full dividend rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How often does SCHD pay dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Quarterly</strong> -- typically in March, June, September, and December. The exact ex-dividend dates and payment dates vary. At $1,000/month target income, you would receive approximately $3,000 every quarter. If you need monthly income, consider pairing SCHD with monthly dividend payers like JEPI or Realty Income (O).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">SCHD vs VYM: Which is better for $1,000/month?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>SCHD has historically outperformed VYM</strong> in both total return and dividend growth. However, VYM is more diversified (400+ holdings vs ~100) and can be a better complement alongside SCHD. Many investors use both: SCHD for quality and growth, VYM for broader exposure. Using both together reduces your concentration risk significantly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Will SCHD dividends keep growing?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Historically, yes.</strong> SCHD has increased its dividend every year since inception. The companies in the index are screened for 10+ years of consecutive dividend payments and strong financial health. However, past performance does not guarantee future results. Economic downturns could temporarily slow growth, though SCHD held up well during 2020 and 2022 market declines.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your SCHD Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
              Use our calculators to model your SCHD accumulation plan. Input your monthly investment, expected return, and time horizon to see when you will reach 4,615 shares and $1,000/month in dividend income.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Growth Calculator
                </Button>
              </Link>
              <Link href="/calculators/yield-on-cost">
                <Button variant="outline" className="w-full" size="lg">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Yield on Cost
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              This article is for educational purposes only. It is not financial advice. SCHD data is approximate and subject to change. Consult a financial advisor before making investment decisions.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-much-to-invest-for-500-month-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How Much to Invest for $500/Month?</CardTitle>
                <CardDescription>Portfolio sizes needed at every yield level</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/SCHD-vs-VYM-comparison">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">SCHD vs VYM: Complete Comparison</CardTitle>
                <CardDescription>Head-to-head analysis of the two most popular dividend ETFs</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/average-dividend-portfolio-returns">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Average Dividend Portfolio Returns</CardTitle>
                <CardDescription>Historical data from 1926 to 2026</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>How to maximize dividend reinvestment returns</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
