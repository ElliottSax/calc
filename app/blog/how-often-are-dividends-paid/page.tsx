import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, CheckCircle2, AlertTriangle, Clock, DollarSign } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How Often Are Dividends Paid? Payment Schedules Explained (2026)',
  description: 'Learn how often dividends are paid: quarterly, monthly, semi-annual, and annual schedules. Includes ex-dividend dates, payment dates, and top monthly dividend stocks like O and STAG.',
  keywords: ['how often are dividends paid', 'dividend payment schedule', 'quarterly dividends', 'monthly dividend stocks', 'dividend payment frequency', 'ex-dividend date'],
}

export default function HowOftenAreDividendsPaid() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calendar className="h-3 w-3 mr-1" />
          Payment Schedules
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How Often Are Dividends Paid?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Most stocks pay quarterly, but some pay monthly, semi-annually, or annually.
          Here is everything you need to know about dividend payment schedules.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Short Answer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold mb-4">
            Most U.S. dividend stocks pay <strong>quarterly</strong> (4 times per year).
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="font-bold text-2xl text-blue-600 mb-1">73%</p>
              <p className="font-semibold">Quarterly</p>
              <p className="text-slate-600 dark:text-slate-400">Every 3 months</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="font-bold text-2xl text-green-600 mb-1">15%</p>
              <p className="font-semibold">Monthly</p>
              <p className="text-slate-600 dark:text-slate-400">Every month</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="font-bold text-2xl text-orange-600 mb-1">8%</p>
              <p className="font-semibold">Semi-Annual</p>
              <p className="text-slate-600 dark:text-slate-400">Twice per year</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <p className="font-bold text-2xl text-purple-600 mb-1">4%</p>
              <p className="font-semibold">Annual</p>
              <p className="text-slate-600 dark:text-slate-400">Once per year</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quarterly Dividends (Most Common)</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              The Standard: 4 Payments Per Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The vast majority of U.S. dividend stocks pay quarterly. You receive a payment every three months,
              typically in a predictable pattern. Companies set their own schedules, so different stocks pay in different months.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Coca-Cola (KO)</p>
                <p className="text-sm">Pays in January, April, July, October</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">~$0.485 per share each quarter ($1.94/year)</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Johnson & Johnson (JNJ)</p>
                <p className="text-sm">Pays in March, June, September, December</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">~$1.19 per share each quarter ($4.76/year)</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Procter & Gamble (PG)</p>
                <p className="text-sm">Pays in February, May, August, November</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">~$1.00 per share each quarter ($4.00/year)</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Pro Tip: Monthly Income with Quarterly Stocks
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                By owning stocks that pay in different months, you can create monthly income even with quarterly payers.
                For example, owning KO (Jan/Apr/Jul/Oct) + JNJ (Mar/Jun/Sep/Dec) + PG (Feb/May/Aug/Nov) gives you
                a dividend payment every single month.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Monthly Dividends (12 Payments Per Year)</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              Get Paid Every Single Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Some stocks pay dividends monthly, giving you 12 paychecks per year. These are especially popular
              with retirees and income investors who want cash flow that aligns with monthly bills.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-l-green-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold">Realty Income (O)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Known as "The Monthly Dividend Company." 29 years of consecutive increases.
                      REIT owning 12,400+ retail and commercial properties.
                    </p>
                  </div>
                  <Badge className="ml-2 flex-shrink-0">~5.2% Yield</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-l-blue-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold">STAG Industrial (STAG)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Industrial warehouse REIT benefiting from e-commerce growth.
                      550+ properties, 98%+ occupancy rate.
                    </p>
                  </div>
                  <Badge className="ml-2 flex-shrink-0">~4.3% Yield</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-l-purple-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold">Main Street Capital (MAIN)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Business Development Company lending to small businesses.
                      14 years of increasing dividends plus supplemental payments.
                    </p>
                  </div>
                  <Badge className="ml-2 flex-shrink-0">~6.2% Yield</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-l-orange-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold">AGNC Investment (AGNC)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Mortgage REIT with very high yield. More volatile and sensitive to
                      interest rate changes. Higher risk, higher reward.
                    </p>
                  </div>
                  <Badge className="ml-2 flex-shrink-0">~13.8% Yield</Badge>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-l-teal-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold">Pembina Pipeline (PBA)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Canadian energy infrastructure company. Steady cash flows from
                      long-term pipeline contracts. Solid dividend history.
                    </p>
                  </div>
                  <Badge className="ml-2 flex-shrink-0">~6.4% Yield</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm font-semibold mb-2">Why Do Some Companies Pay Monthly?</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Monthly payers are often REITs (Real Estate Investment Trusts) and BDCs (Business Development Companies).
                These entities collect rent or interest income monthly, so it makes sense to distribute it monthly.
                They are also required by law to pay out 90% of taxable income, which supports the frequent payments.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Semi-Annual and Annual Dividends</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Semi-Annual (Twice Per Year)</CardTitle>
              <CardDescription>Common in Europe and Asia</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Many non-U.S. companies pay dividends twice per year, typically with an "interim" dividend
                mid-year and a "final" dividend after the annual report.
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Nike (NKE)</strong> - One of few large U.S. companies paying semi-annually
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Most UK stocks</strong> - Standard payment schedule in the UK market
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Most Australian stocks</strong> - Interim + final dividend structure
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Annual (Once Per Year)</CardTitle>
              <CardDescription>Common in continental Europe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Some companies, particularly in Germany, France, and other European markets, pay dividends
                just once per year, usually after the annual shareholder meeting.
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Many European blue chips</strong> - Siemens, BMW, LVMH
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Costco (special)</strong> - Regular quarterly + occasional large annual special dividend
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                Annual payers are less common in the U.S. market, where quarterly payments are the standard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Dividend Payment Calendar"
          description="Free downloadable calendar with payment dates for the top 100 dividend stocks, updated quarterly"
          buttonText="Download Calendar"
          source="dividend_frequency_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Dates Every Dividend Investor Must Know</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <div>
                  <CardTitle>Declaration Date</CardTitle>
                  <CardDescription>Company announces the dividend</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The board of directors formally announces the dividend amount, the ex-dividend date, the record date,
                and the payment date. This is when you first learn the details of the upcoming payment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <div>
                  <CardTitle>Ex-Dividend Date</CardTitle>
                  <CardDescription>The most important date for investors</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                You must own the stock <strong>before</strong> this date to receive the dividend. If you buy on or after
                the ex-dividend date, the previous owner gets the payment instead.
              </p>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  Due to T+1 settlement (effective 2024), you must buy at least one business day before the ex-date.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <div>
                  <CardTitle>Record Date</CardTitle>
                  <CardDescription>Company verifies shareholders</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Usually 1 business day after the ex-dividend date. The company checks its official shareholder records
                to confirm who is eligible. This is purely administrative and requires no action from you.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                <div>
                  <CardTitle>Payment Date</CardTitle>
                  <CardDescription>Cash arrives in your account</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Typically 2-4 weeks after the record date. The dividend is deposited into your brokerage account.
                You can take it as cash or have it automatically reinvested through DRIP.
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-sm">
                <strong>Example:</strong> You own 200 shares of Realty Income (O) paying $0.263/month.
                On payment date, $52.60 appears in your account every single month.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Payment Frequency Comparison</h2>

        <Card>
          <CardHeader>
            <CardTitle>How Payment Frequency Affects Your Income</CardTitle>
            <CardDescription>Assuming $100,000 invested at 5% annual yield ($5,000/year)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Frequency</th>
                    <th className="text-right p-2">Per Payment</th>
                    <th className="text-right p-2">Payments/Year</th>
                    <th className="text-left p-2">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Monthly</td>
                    <td className="p-2 text-right">$416.67</td>
                    <td className="p-2 text-right">12</td>
                    <td className="p-2">Retirees, bill coverage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Quarterly</td>
                    <td className="p-2 text-right">$1,250.00</td>
                    <td className="p-2 text-right">4</td>
                    <td className="p-2">Most investors</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Semi-Annual</td>
                    <td className="p-2 text-right">$2,500.00</td>
                    <td className="p-2 text-right">2</td>
                    <td className="p-2">International diversification</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Annual</td>
                    <td className="p-2 text-right">$5,000.00</td>
                    <td className="p-2 text-right">1</td>
                    <td className="p-2">Long-term investors</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded text-sm">
              <p className="font-semibold mb-1">Compounding Advantage</p>
              <p className="text-slate-700 dark:text-slate-300">
                Monthly dividends reinvested via DRIP compound slightly faster than quarterly. Over 30 years,
                the difference can add up to 0.1-0.3% annually. The bigger advantage is cash flow management
                and psychological benefit of regular income.
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
              <CardTitle className="text-lg">Can a company change how often it pays dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. Companies can switch from quarterly to monthly, or vice versa. However, this is rare
                for established companies. A change in payment frequency is usually announced well in advance.
                The annual total typically stays similar even if the frequency changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do ETFs and mutual funds also pay dividends on a schedule?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. Most dividend ETFs like VYM, SCHD, and HDV pay quarterly. Some ETFs pay monthly.
                The fund collects dividends from all its holdings and distributes them to shareholders
                on a set schedule, usually quarterly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What happens if a dividend payment date falls on a weekend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Payment dates are always business days. If the scheduled date falls on a Saturday or Sunday,
                the payment is typically made on the preceding Friday or the following Monday, depending
                on the company's policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is it better to get monthly or quarterly dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your needs. Monthly dividends provide smoother cash flow and slightly faster
                compounding when reinvested. Quarterly dividends are more common, giving you a wider selection
                of high-quality stocks to choose from. Many investors build portfolios with a mix of both.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Dividend Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Whether your stocks pay monthly, quarterly, or annually, our DRIP calculator shows exactly
              how your dividends compound over time. See payment-by-payment projections and plan your income.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  Try DRIP Calculator
                </Button>
              </Link>
              <Link href="/blog/best-monthly-dividend-stocks-2026">
                <Button variant="outline" className="w-full" size="lg">
                  Best Monthly Dividend Stocks
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/ex-dividend-date-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Ex-Dividend Date Explained</CardTitle>
                <CardDescription>Never miss a dividend payment again</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-do-dividend-payments-work">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How Do Dividend Payments Work?</CardTitle>
                <CardDescription>Step-by-step process from declaration to payment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Auto-reinvest dividends for faster growth</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-monthly-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Monthly Dividend Stocks 2026</CardTitle>
                <CardDescription>12 paychecks per year from these stocks</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
