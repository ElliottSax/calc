import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, AlertTriangle, CheckCircle2, Clock } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Ex-Dividend Date Explained: How to Get Paid (2026 Guide)',
  description: 'Master ex-dividend dates to ensure you receive dividends. Learn declaration date, record date, payment date, and the T+2 settlement rule with examples.',
}

export default function ExDividendDateExplained() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calendar className="h-3 w-3 mr-1" />
          Timing is Everything
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Ex-Dividend Date Explained
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Buy the stock before this date to get paid. Miss it by one day,
          and you get nothing. Here's exactly how it works.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-2 border-red-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Golden Rule</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold mb-4">
            To receive a dividend, you must own the stock <strong>BEFORE</strong> the ex-dividend date.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
              <p className="font-semibold text-green-600 mb-2">You GET the dividend if:</p>
              <p className="text-sm">You buy on or before the day <strong>before</strong> ex-dividend date</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <p className="font-semibold text-red-600 mb-2">You DON'T get it if:</p>
              <p className="text-sm">You buy on or after the ex-dividend date</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The 4 Important Dates</h2>

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
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The board of directors announces they'll pay a dividend. They tell you:
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• How much: $0.50 per share</li>
                <li>• Ex-dividend date: When you must own it by</li>
                <li>• Record date: Official ownership check</li>
                <li>• Payment date: When money hits your account</li>
              </ul>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded text-sm">
                <strong>Example:</strong> January 15, 2026 - Apple announces $0.25/share dividend,
                ex-date February 12, payment date February 23.
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <div>
                  <CardTitle>Ex-Dividend Date</CardTitle>
                  <CardDescription className="text-red-600 font-semibold">MOST IMPORTANT DATE</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The cutoff date. If you buy the stock on or after this date, <strong>you don't get the dividend</strong>.
                The previous owner gets it instead.
              </p>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800 mb-4">
                <p className="font-semibold mb-2">Critical Rule:</p>
                <p className="text-sm">You must buy <strong>at least 1 business day before</strong> the ex-dividend date
                due to T+2 settlement (trades take 2 business days to settle).</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded border border-green-500">
                  <p className="font-semibold text-green-600">✓ You GET the dividend:</p>
                  <p>Buy Monday, ex-date is Tuesday → You get paid</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950 rounded border border-red-500">
                  <p className="font-semibold text-red-600">✗ You DON'T get the dividend:</p>
                  <p>Buy Tuesday (ex-date) → You miss it</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <div>
                  <CardTitle>Record Date</CardTitle>
                  <CardDescription>Company checks who owns the stock</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Usually 1 business day after ex-dividend date. The company looks at its official records
                and says "whoever owned the stock before ex-date gets paid."
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You don't need to do anything on this date. It's just administrative.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                <div>
                  <CardTitle>Payment Date</CardTitle>
                  <CardDescription>Money hits your account</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Usually 2-4 weeks after record date. The dividend appears in your brokerage account.
                You can take it as cash or reinvest it (DRIP).
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-sm">
                <strong>Example:</strong> You own 100 shares of JNJ paying $1.19/share. On payment date,
                $119 appears in your account.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Example: Johnson & Johnson</h2>

        <Card>
          <CardHeader>
            <CardTitle>JNJ Dividend Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-32">
                  <Badge variant="outline">Jan 15, 2026</Badge>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Declaration Date</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    JNJ announces $1.19 dividend, ex-date Feb 12
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-32">
                    <Badge className="bg-red-600">Feb 11, 2026</Badge>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-red-600">LAST DAY TO BUY</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Buy by end of day Feb 11 to receive dividend
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-32">
                    <Badge className="bg-orange-600">Feb 12, 2026</Badge>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-orange-600">Ex-Dividend Date</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Too late! Buy today = you don't get this dividend
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-32">
                  <Badge variant="outline">Feb 13, 2026</Badge>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Record Date</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    JNJ checks records, confirms who gets paid
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-32">
                  <Badge className="bg-green-600">Mar 5, 2026</Badge>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-green-600">Payment Date</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Money hits your account ($1.19 per share)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="text-sm font-semibold mb-2">Your Action Items:</p>
              <ul className="text-sm space-y-1">
                <li>✓ Buy JNJ by Feb 11 close → Get $1.19/share on Mar 5</li>
                <li>✗ Buy JNJ on Feb 12 or later → Miss this dividend (but get the next one in 3 months)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Never Miss a Dividend Payment"
          description="Get our dividend calendar with all major ex-dates + reminders sent to your inbox"
          buttonText="Get Dividend Calendar"
          source="ex_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #1: Buying on Ex-Dividend Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You see JNJ goes ex-dividend today, so you buy it thinking you'll get paid.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> You're one day too late. The previous owner gets the dividend, not you.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Buy the day BEFORE ex-dividend date at the latest.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #2: Selling Too Early
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You buy before ex-date, then sell the same day thinking you "locked in" the dividend.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> This can work but usually loses money due to the stock price drop on ex-date
                (see next section). Plus taxes eat profits.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Hold dividend stocks for years, not days. You need 61+ days to get qualified tax treatment anyway.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Mistake #3: Ignoring the Price Drop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> Stock is $50 before ex-date, you buy thinking it's a deal. Next day it's $49.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> Stock prices typically drop by the dividend amount on ex-date. If dividend
                is $1, expect stock to open $1 lower. You didn't lose money—you got the $1 dividend—but don't be surprised.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Understand this is normal. Focus on total return (dividend + price) over years, not days.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Does the Stock Price Drop on Ex-Date?</h2>

        <Card>
          <CardHeader>
            <CardTitle>The Dividend Adjustment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              On ex-dividend date, the stock opens lower by approximately the dividend amount. This is automatic
              and expected. Here's why:
            </p>

            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Day Before Ex-Date:</p>
                <p>Stock worth $100. Company will pay $2 dividend. Buying at $100 means you get:</p>
                <p className="ml-4">• Stock worth $98 (after cash leaves company)</p>
                <p className="ml-4">• $2 cash dividend</p>
                <p className="ml-4">• <strong>Total value: $100</strong></p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Ex-Dividend Date:</p>
                <p>Stock opens at $98. Buying at $98 means you get:</p>
                <p className="ml-4">• Stock worth $98</p>
                <p className="ml-4">• $0 dividend (you missed it)</p>
                <p className="ml-4">• <strong>Total value: $98</strong></p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              The $2 price drop reflects that new buyers don't get the dividend. By afternoon, normal trading
              resumes and the stock can go up or down based on market conditions.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Find Ex-Dividend Dates</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Free Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Your broker:</strong> Most show ex-dates in stock details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Company investor relations:</strong> Official source</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Yahoo Finance:</strong> Listed under "Dividends" tab</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Nasdaq.com:</strong> Dividend calendar tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Our calculator:</strong> Shows next ex-date for 100+ stocks</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Set Calendar Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Most dividend stocks pay quarterly on a predictable schedule:
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Example: JNJ</strong> - Ex-dates around Feb 12, May 12, Aug 12, Nov 12
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded">
                  <strong>Example: PG</strong> - Ex-dates around Jan 15, Apr 15, Jul 15, Oct 15
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                Once you know the pattern, set recurring reminders. Dates may shift by a few days each quarter.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">If I buy after ex-date, do I ever get dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes! You just missed <em>this quarter's</em> dividend. Hold the stock until the next ex-dividend
                date (usually 3 months later) and you'll get the next payment. Ex-dates repeat every quarter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I sell on ex-dividend date and still get paid?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, technically. Once ex-dividend date arrives, you're "locked in" for the dividend even if you sell
                that day. However, this "dividend capture" strategy rarely works due to the price drop and taxes.
                Better to hold long-term.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if ex-date falls on a weekend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Ex-dates are always business days (Mon-Fri). If the planned date is Saturday, it moves to Friday.
                If Sunday, it moves to Monday. Your broker shows the correct business day.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I need to hold until payment date to get the dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. You only need to own the stock through the ex-dividend date. You can sell the day after ex-date
                and still receive payment on payment date. The dividend is "yours" once you make it past ex-date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why is record date different from ex-dividend date?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Because of T+2 settlement—trades take 2 business days to officially transfer ownership. Ex-date is
                set 1 day before record date to account for this. Most investors can ignore record date and just
                focus on ex-date.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Track Ex-Dates for Your Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Understanding ex-dividend dates ensures you never miss a payment. Set reminders, check dates before
              buying, and plan purchases accordingly. Our calculator shows upcoming ex-dates for 100+ dividend stocks.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Check Ex-Dates →
                </Button>
              </Link>
              <Link href="/blog/best-dividend-stocks-for-beginners">
                <Button variant="outline" className="w-full" size="lg">
                  Find Dividend Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>Master the math</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Auto-reinvest on payment date</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Reliable dividend payers</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Tax implications of dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
