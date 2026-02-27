import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DollarSign, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, RefreshCw } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How Do Dividend Payments Work? Step-by-Step Process (2026)',
  description: 'Learn exactly how dividend payments work: declaration date, ex-dividend date, record date, and payment date. Covers cash vs stock dividends, tax implications, and DRIP reinvestment.',
  keywords: ['how dividends work', 'how do dividend payments work', 'dividend payment process', 'cash dividends', 'stock dividends', 'dividend reinvestment', 'DRIP'],
}

export default function HowDoDividendPaymentsWork() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BookOpen className="h-3 w-3 mr-1" />
          Beginner Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How Do Dividend Payments Work?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          From board announcement to cash in your account, here is the complete
          step-by-step process of how dividends get paid to you.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl">The 30-Second Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            When a company earns profits, the board of directors can choose to share some of those profits
            with shareholders. This payment is called a dividend. Here is the process:
          </p>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mx-auto mb-2">1</div>
              <p className="font-semibold">Declare</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Board announces dividend</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mx-auto mb-2">2</div>
              <p className="font-semibold">Ex-Date</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Cutoff to qualify</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mx-auto mb-2">3</div>
              <p className="font-semibold">Record</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Ownership verified</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mx-auto mb-2">4</div>
              <p className="font-semibold">Payment</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Cash hits your account</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 1: The Company Declares a Dividend</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-blue-600" />
              Where Dividends Come From
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Not all companies pay dividends. A company must be profitable enough to share earnings with
              shareholders. When the board of directors approves a dividend, they issue a formal announcement
              called a "declaration" that includes:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold text-sm mb-1">Dividend Amount</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">How much per share (e.g., $0.50/share)</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold text-sm mb-1">Ex-Dividend Date</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Last day to buy and qualify for payment</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold text-sm mb-1">Record Date</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Date the company checks ownership records</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold text-sm mb-1">Payment Date</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">When money actually hits your account</p>
              </div>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded text-sm">
              <strong>Real Example:</strong> On January 28, 2026, Apple's board declares a $0.25 per share
              quarterly dividend. Ex-date: February 14. Record date: February 17. Payment date: February 28.
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 2: The Ex-Dividend Date (Critical!)</h2>

        <Card className="border-2 border-red-300 dark:border-red-700 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-6 w-6" />
              The Most Important Date for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The ex-dividend date is your deadline. To receive the dividend, you must own the stock
              <strong> before</strong> this date. Here is the rule:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-500">
                <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
                <p className="font-bold text-green-600 mb-1">You GET the Dividend</p>
                <p className="text-sm">Buy the stock at least 1 business day before ex-dividend date</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Example: Ex-date is Wednesday. Buy by Tuesday close.
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-500">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                <p className="font-bold text-red-600 mb-1">You MISS the Dividend</p>
                <p className="text-sm">Buy the stock on or after the ex-dividend date</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Example: Ex-date is Wednesday. Buy Wednesday or later = no dividend.
                </p>
              </div>
            </div>

            <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800 text-sm">
              <p className="font-semibold flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Why Does the Stock Price Drop on Ex-Date?
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                On the ex-dividend date, the stock price typically drops by roughly the dividend amount.
                If a stock is $50 and pays a $1 dividend, it will open near $49 on ex-date. This is normal:
                the cash is leaving the company and going to shareholders. You are not losing money; the value
                simply shifts from stock price to cash in your account.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 3: Record Date and Verification</h2>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The record date is typically 1 business day after the ex-dividend date. On this day, the company
              reviews its shareholder records to confirm who owned the stock before the ex-date.
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              You do not need to do anything on the record date. If you bought before the ex-date,
              you are already in the system. This is purely an administrative step for the company.
            </p>
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded text-sm">
              <p className="font-semibold mb-1">Why Does This Date Exist?</p>
              <p className="text-slate-600 dark:text-slate-400">
                Because of trade settlement times. When you buy a stock, the transaction settles (officially transfers ownership)
                in 1 business day (T+1 since 2024). The record date gives the settlement system time to process
                all trades made before the ex-date.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 4: Payment Date (You Get Paid!)</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              Cash Arrives in Your Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Typically 2-4 weeks after the record date, the dividend is deposited into your brokerage account.
              The payment shows up as cash, and you have two choices:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-bold mb-2">Take It as Cash</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>- Cash sits in your brokerage account</li>
                  <li>- Transfer to bank for spending</li>
                  <li>- Use for other investments</li>
                  <li>- Good for retirees needing income</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <p className="font-bold mb-2 text-green-600">Reinvest via DRIP</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>- Automatically buys more shares</li>
                  <li>- Compounds your investment</li>
                  <li>- No commission fees</li>
                  <li>- Best for building wealth over time</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="font-semibold text-sm mb-2">Example: 500 Shares of Coca-Cola</p>
              <div className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <p>Quarterly dividend: $0.485 per share</p>
                <p>Your payment: 500 x $0.485 = <strong className="text-green-600">$242.50</strong></p>
                <p>Annual total: $242.50 x 4 = <strong className="text-green-600">$970.00</strong></p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  With DRIP enabled, $242.50 automatically buys ~3.9 more shares at $62/share.
                  Next quarter you own 503.9 shares and earn even more.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Free Dividend Income Tracker Spreadsheet"
          description="Track all your dividend payments, see your yield on cost, and project future income"
          buttonText="Get Free Tracker"
          source="how_dividends_work_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Cash Dividends vs Stock Dividends</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Cash Dividends
              </CardTitle>
              <CardDescription>Most common type</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The company sends you actual cash. This is what 95%+ of dividend-paying companies do.
                You get dollars deposited into your brokerage account.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Flexible: spend, save, or reinvest</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Taxable in the year received</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Can be regular (recurring) or special (one-time)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-blue-600" />
                Stock Dividends
              </CardTitle>
              <CardDescription>Less common</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Instead of cash, you receive additional shares of the company. For example, a 5% stock dividend
                means you get 5 new shares for every 100 you own.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>No cash received, only more shares</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Share price adjusts downward proportionally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Often not taxed until shares are sold</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Implications of Dividends</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Two Types of Dividend Taxation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">Qualified Dividends</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">Lower Tax</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Taxed at the lower capital gains rate (0%, 15%, or 20% depending on income).
                  Most dividends from U.S. companies held for 61+ days qualify.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  2026 rates: 0% if taxable income under $47,025 (single) / $94,050 (married filing jointly)
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">Ordinary (Non-Qualified) Dividends</p>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">Higher Tax</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Taxed at your regular income tax rate (10% to 37%). This applies to REIT dividends,
                  dividends from stocks held less than 61 days, and foreign stock dividends.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Tip: Hold REITs in tax-advantaged accounts (IRA, 401k) to avoid higher tax rates.
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 rounded border border-yellow-200 dark:border-yellow-800 text-sm">
              <p className="font-semibold flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Dividends Are Taxed Even When Reinvested
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Using DRIP does not avoid taxes. Even if your dividends are automatically reinvested into
                more shares, you still owe taxes on the dividend amount in the year it was paid.
                Your broker sends a 1099-DIV form each January.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">DRIP: The Power of Reinvesting Dividends</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-green-600" />
              Dividend Reinvestment Plans (DRIP)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Instead of taking dividends as cash, DRIP automatically uses them to buy more shares.
              This creates a compounding snowball effect that can dramatically grow your portfolio over time.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg mb-4">
              <p className="font-semibold mb-3">Example: DRIP vs Cash Over 20 Years</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-white dark:bg-slate-800 rounded">
                  <p className="font-bold text-slate-500 mb-2">Without DRIP (Take Cash)</p>
                  <p>Start: $10,000 invested, 4% yield</p>
                  <p>Annual dividends: $400 (taken as cash)</p>
                  <p>After 20 years: $10,000 in stock + $8,000 in cash</p>
                  <p className="font-bold mt-2">Total: $18,000</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900 rounded border border-green-500">
                  <p className="font-bold text-green-600 mb-2">With DRIP (Reinvest)</p>
                  <p>Start: $10,000 invested, 4% yield</p>
                  <p>Dividends buy more shares each quarter</p>
                  <p>After 20 years: Compounded portfolio</p>
                  <p className="font-bold mt-2 text-green-600">Total: ~$21,911</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                DRIP generated nearly $4,000 more through the power of compounding. With dividend growth
                factored in, the difference becomes even larger.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/calculators/drip">
                <Button size="sm">
                  <ArrowRight className="h-4 w-4 mr-1" />
                  Try DRIP Calculator
                </Button>
              </Link>
              <Link href="/blog/drip-investing-guide">
                <Button variant="outline" size="sm">
                  Full DRIP Guide
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I know if a stock pays dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Check the stock's profile on your broker or financial sites like Yahoo Finance. Look for
                "Dividend Yield" or "Annual Dividend." If the yield is 0% or says "N/A," the stock does
                not currently pay a dividend. About 80% of S&P 500 companies pay dividends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can a company stop paying dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. Companies can cut or eliminate dividends at any time, usually when facing financial
                difficulty. During the 2020 pandemic, many companies suspended dividends. This is why
                it is important to invest in companies with strong financials and long dividend track records.
                Dividend Aristocrats have increased payments for 25+ consecutive years.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I need to own shares for a full quarter to get paid?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. You only need to own the stock before the ex-dividend date. You could buy the day before
                and still receive the full quarterly payment. However, to get the favorable "qualified dividend"
                tax rate, you need to hold the stock for at least 61 days around the ex-date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What happens to dividends in a Roth IRA?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividends earned inside a Roth IRA are completely tax-free, both now and when you withdraw
                them in retirement. This makes Roth IRAs excellent for dividend stocks, especially REITs
                that pay higher-taxed ordinary dividends. Traditional IRAs defer taxes until withdrawal.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much money do I need to start earning dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You can start with any amount. Many brokers offer fractional shares, so you can invest as little
                as $1 in dividend stocks. With $100 invested in a stock yielding 4%, you would earn $4 per year
                ($1 per quarter). It is small, but with consistent investing and DRIP, it grows over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">See Your Dividend Growth Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Now that you understand how dividends work, use our DRIP calculator to project how your
              dividend income grows with reinvestment. Enter your investment amount, yield, and growth rate
              to see year-by-year projections.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  Try DRIP Calculator
                </Button>
              </Link>
              <Link href="/blog/best-dividend-stocks-for-beginners">
                <Button variant="outline" className="w-full" size="lg">
                  Best Stocks for Beginners
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-often-are-dividends-paid">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How Often Are Dividends Paid?</CardTitle>
                <CardDescription>Quarterly, monthly, and other schedules explained</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/ex-dividend-date-explained">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Ex-Dividend Date Explained</CardTitle>
                <CardDescription>The critical date every investor must know</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-calculate-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Calculate Dividend Yield</CardTitle>
                <CardDescription>The formula and real examples</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Qualified vs ordinary dividends and how to minimize taxes</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
