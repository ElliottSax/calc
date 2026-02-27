import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Gift, DollarSign, CheckCircle2, AlertTriangle, TrendingUp, Building2, Calendar, Calculator } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: "Special Dividends vs Regular Dividends: What's the Difference? (2026)",
  description: 'Learn the key differences between special dividends and regular dividends, including tax treatment, famous examples from Costco and Microsoft, and how to spot special dividend opportunities.',
  keywords: 'special dividend, special dividends vs regular dividends, special dividend tax, one-time dividend, Costco special dividend, Microsoft special dividend, extra dividend',
}

export default function SpecialDividendsVsRegularDividends() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Gift className="h-3 w-3 mr-1" />
          Dividend Education
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Special Dividends vs Regular Dividends
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          A regular dividend is your steady paycheck. A special dividend is an unexpected bonus.
          Here is everything you need to know about both.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
              <p className="font-semibold text-blue-600 mb-2">Regular Dividend</p>
              <ul className="text-sm space-y-1">
                <li>Paid on a consistent schedule (quarterly, monthly)</li>
                <li>Same or growing amount each period</li>
                <li>Reflects ongoing profitability</li>
                <li>Investors expect and depend on it</li>
              </ul>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <Gift className="h-8 w-8 text-purple-600 mb-2" />
              <p className="font-semibold text-purple-600 mb-2">Special Dividend</p>
              <ul className="text-sm space-y-1">
                <li>One-time or irregular payment</li>
                <li>Often much larger than regular dividends</li>
                <li>Triggered by specific events (asset sale, excess cash)</li>
                <li>No expectation it will repeat</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is a Regular Dividend?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>The Predictable Income Stream</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              A regular dividend is a recurring cash payment that a company distributes to
              shareholders from its earnings. Most US companies pay regular dividends quarterly
              (four times per year), though some pay monthly or semi-annually.
            </p>

            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Key Characteristics:</p>
                <ul className="space-y-1 ml-4">
                  <li>Set by the board of directors each quarter</li>
                  <li>Typically maintained or increased over time</li>
                  <li>Cutting a regular dividend is seen as a major red flag</li>
                  <li>Investors use these for retirement income planning</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <strong>Example:</strong> Johnson & Johnson has paid a regular quarterly dividend
                for over 60 years and has raised it for 62 consecutive years. In 2026, it pays
                roughly $1.24 per share each quarter ($4.96/year).
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is a Special Dividend?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>The One-Time Windfall</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              A special dividend (also called an extra dividend or one-time dividend) is a
              non-recurring payment that is separate from the regular dividend schedule. Companies
              issue special dividends when they have accumulated excess cash they want to return
              to shareholders.
            </p>

            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Common Triggers for Special Dividends:</p>
                <ul className="space-y-1 ml-4">
                  <li>Company sells a division or major asset</li>
                  <li>Exceptionally profitable year</li>
                  <li>Large cash reserve with no better use for it</li>
                  <li>Tax law changes that make returning cash more attractive</li>
                  <li>Settling a major lawsuit and distributing proceeds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg text-sm border border-amber-300 dark:border-amber-700">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Important Distinction
          </p>
          <p>
            A special dividend is <strong>not</strong> a sign the company will start paying more
            regularly. It is a one-time event. Do not buy a stock expecting repeated special dividends.
            If you want reliable income, focus on companies with consistent regular dividend histories.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Famous Special Dividend Examples</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle>Costco (COST)</CardTitle>
                  <CardDescription>The serial special dividend payer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Costco is famous for issuing massive special dividends every few years when their
                cash reserves grow too large. They view it as returning excess capital to shareholders
                rather than making wasteful acquisitions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded flex justify-between">
                  <span>December 2012:</span>
                  <span className="font-bold text-green-600">$7.00 per share</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded flex justify-between">
                  <span>February 2015:</span>
                  <span className="font-bold text-green-600">$5.00 per share</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded flex justify-between">
                  <span>May 2017:</span>
                  <span className="font-bold text-green-600">$7.00 per share</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded flex justify-between">
                  <span>December 2020:</span>
                  <span className="font-bold text-green-600">$10.00 per share</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded flex justify-between">
                  <span>January 2024:</span>
                  <span className="font-bold text-green-600">$15.00 per share</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                If you owned 100 shares during the 2024 special dividend, you received $1,500 in a
                single payment -- on top of your regular quarterly dividends.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Microsoft (MSFT)</CardTitle>
                  <CardDescription>The largest special dividend in history</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                In November 2004, Microsoft paid a <strong>$3.00 per share</strong> special dividend,
                distributing approximately <strong>$32 billion</strong> to shareholders. At the time,
                it was the largest one-time dividend payment in history. Microsoft had accumulated
                over $60 billion in cash and decided returning it to shareholders was better than
                sitting on it.
              </p>
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded text-sm">
                <strong>Impact:</strong> If you owned 1,000 shares, you received a $3,000 check.
                Bill Gates alone received approximately $3.3 billion from this single payment.
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-green-600" />
                <div>
                  <CardTitle>Ford Motor Company (F)</CardTitle>
                  <CardDescription>Special dividends from strong earnings</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Ford has occasionally paid special dividends during particularly strong profit years.
                In March 2023, Ford paid a $0.65 per share supplemental dividend on top of its
                regular quarterly payment, reflecting strong truck and SUV sales.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This pattern is common in cyclical industries like automotive and energy, where
                earnings fluctuate significantly from year to year.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Treatment: Special vs Regular</h2>

        <Card>
          <CardHeader>
            <CardTitle>The Tax Implications</CardTitle>
            <CardDescription>Both types can be qualified or ordinary</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The tax treatment for special dividends follows the same rules as regular dividends.
              Whether a dividend qualifies for the lower capital gains tax rate depends on
              <strong> how long you held the stock</strong>, not whether it is regular or special.
            </p>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Qualified Rate (0%, 15%, or 20%)
                </p>
                <p>
                  You held the stock for more than 60 days during the 121-day period surrounding
                  the ex-dividend date. This applies to both regular and special dividends from
                  US companies and qualified foreign corporations.
                </p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <p className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Ordinary Rate (up to 37%)
                </p>
                <p>
                  You held the stock for fewer than 61 days, or the dividend comes from a REIT,
                  MLP, or certain foreign companies. Taxed at your marginal income tax rate.
                </p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-300 dark:border-amber-700">
                <p className="font-semibold mb-2">Special Consideration for Large Special Dividends:</p>
                <p>
                  If a special dividend equals 10% or more of the stock value, the IRS may
                  extend the holding period requirement. The 61-day counter pauses during the
                  ex-dividend period and resumes after. This prevents buying a stock solely to
                  capture a large special dividend at the lower tax rate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Special Dividend Alerts"
          description="Get notified when major companies announce special dividends so you never miss a windfall"
          buttonText="Get Alerts"
          source="special_dividends_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Spot Special Dividend Opportunities</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Look for Cash-Rich Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Companies with large and growing cash balances relative to their market cap are
                prime candidates. Check the balance sheet for cash and short-term investments.
                If cash exceeds 10-15% of market cap with no major acquisitions planned, a special
                dividend becomes more likely.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Companies like Apple, Alphabet, and Berkshire Hathaway sit on enormous cash piles,
                though they tend to prefer buybacks over special dividends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                Watch for Asset Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                When a company sells a major division, subsidiary, or real estate portfolio, the
                proceeds often get distributed as a special dividend. Monitor press releases from
                companies in your watchlist for announcements of divestitures or asset sales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Track Serial Payers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Some companies, like Costco, have an established pattern of paying special dividends
                every 2-3 years. While there is no guarantee, these patterns can help you anticipate
                future payments.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Other frequent special dividend payers include select REITs, family-controlled
                companies, and firms in industries with cyclical cash flows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Year-End Tax Planning Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Special dividends are more common in the fourth quarter as companies assess their
                annual earnings and tax situations. Watch for announcements in October through
                December, especially when tax law changes are anticipated.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Impact on Stock Price</h2>

        <Card>
          <CardHeader>
            <CardTitle>What Happens When a Special Dividend Is Announced?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Announcement Day:</p>
                <p>The stock typically rises by less than the dividend amount as investors buy in.
                  The full dividend is not immediately priced in because of the time value and uncertainty
                  until the ex-date.</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Between Announcement and Ex-Date:</p>
                <p>The stock may drift higher as more investors learn about the special dividend.
                  Trading volume usually increases during this period.</p>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold mb-1">Ex-Dividend Date:</p>
                <p>The stock price drops by approximately the special dividend amount, just like with
                  regular dividends. For a $10 special dividend, expect the stock to open about $10
                  lower. This can be dramatic for large special dividends.</p>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-1">After Payment:</p>
                <p>The stock gradually recovers if the company remains fundamentally strong.
                  Long-term shareholders are not harmed because they received the cash distribution.</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              Use our{' '}
              <Link href="/calculators/drip" className="text-blue-600 underline font-semibold">
                DRIP Calculator
              </Link>{' '}
              to model how reinvesting both regular and special dividends accelerates your portfolio growth.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are special dividends better than regular dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not necessarily. Regular dividends provide dependable income you can plan around.
                Special dividends are nice bonuses but you cannot rely on them. For income-focused
                investors, consistent regular dividends are more valuable. Think of regular dividends
                as your salary and special dividends as a year-end bonus.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I buy a stock just for its special dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Generally no. The stock price drops by the dividend amount on the ex-date, so you
                do not gain free money. If you did not already own the stock, buying solely for the
                special dividend is essentially a dividend capture trade, which rarely works out
                after taxes and the price adjustment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do special dividends affect the dividend yield shown online?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on the data provider. Some include special dividends in the trailing
                12-month yield, which can make the yield look artificially high. Always check whether
                a reported yield includes one-time payments. If a stock shows an unusually high yield,
                it may include a special dividend that will not repeat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can a company pay a special dividend and still increase its regular dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes. Costco, for example, regularly increases its quarterly dividend while also
                paying periodic special dividends. The two are independent decisions. However, if
                a company pays a very large special dividend, it may have less cash available for
                future regular dividend increases.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Model Your Dividend Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Whether you receive regular dividends, special dividends, or both, reinvesting them
              creates powerful compounding. Use our calculators to see how your dividends can grow
              over time.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  Dividend Growth Calculator
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
                <CardDescription>The date that determines who gets paid</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Qualified vs ordinary tax rates</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-income-vs-capital-gains">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Income vs Capital Gains</CardTitle>
                <CardDescription>Tax efficiency comparison</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top Dividend Aristocrats 2026</CardTitle>
                <CardDescription>25+ years of consecutive increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
