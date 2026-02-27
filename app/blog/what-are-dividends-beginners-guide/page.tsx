import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, DollarSign, Calendar, TrendingUp, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'What Are Dividends? Complete Beginner\'s Guide to Dividend Investing (2026)',
  description: 'Learn what dividends are, how they work, types of dividends, ex-dividend dates, and how to start earning passive income from dividend stocks. The complete beginner\'s guide.',
  keywords: ['what are dividends', 'dividends explained', 'how do dividends work', 'dividend investing for beginners', 'types of dividends', 'ex-dividend date', 'dividend payment dates', 'passive income dividends'],
}

export default function WhatAreDividendsBeginnerGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BookOpen className="h-3 w-3 mr-1" />
          Beginner&apos;s Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          What Are Dividends?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The complete beginner&apos;s guide to understanding dividends, how they
          work, and how you can earn passive income from the stocks you own.
        </p>
      </div>

      {/* What Are Dividends */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividends Explained Simply</h2>
        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <CardTitle className="text-xl">The Short Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              A <strong>dividend</strong> is a cash payment that a company makes to its shareholders, typically
              every quarter (four times per year). When a company earns profits, it can either reinvest that
              money back into the business or distribute some of it to the people who own its stock. That
              distribution is called a dividend.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Think of it like owning a rental property: you own the asset (the stock), and it pays you
              regular income (the dividend) just for holding it. You don&apos;t have to sell anything to
              receive this income &mdash; it shows up automatically in your brokerage account.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <CardTitle className="text-xl">Quick Example: Your First Dividend</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>Say you invest <strong>$10,000</strong> in a stock that pays a <strong>3% dividend yield</strong>.</p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <p>Investment: $10,000</p>
                <p>Dividend Yield: 3.0%</p>
                <p className="border-t pt-2 mt-2 font-bold text-green-600">Annual Dividends: $300/year</p>
                <p className="text-green-600">Quarterly Payments: $75 every 3 months</p>
              </div>
              <p>
                You receive <strong>$300 per year</strong> ($75 every quarter) deposited directly into your
                account &mdash; without selling a single share. And if the company raises its dividend over
                time, your income grows even if you never invest another dollar.
              </p>
              <Link href="/calculators/drip">
                <Button variant="outline" size="sm" className="mt-2">
                  Calculate Your Dividend Income <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How Dividends Work */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How Do Dividends Work?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          When you buy shares of a dividend-paying stock, you become a part owner of that company.
          The company&apos;s board of directors decides how much profit to return to shareholders as
          dividends. Here is the step-by-step process:
        </p>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-blue-600 text-white mt-1">1</Badge>
                <div>
                  <CardTitle>Board Declares the Dividend</CardTitle>
                  <CardDescription>The company&apos;s board of directors announces the dividend amount per share</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                For example, the board might declare a quarterly dividend of $0.50 per share. This is a
                formal announcement that tells shareholders exactly how much they will receive and when. Most
                blue-chip companies increase this amount every year, which is why &ldquo;Dividend Aristocrats&rdquo;
                (companies with 25+ years of consecutive increases) are so prized by income investors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-blue-600 text-white mt-1">2</Badge>
                <div>
                  <CardTitle>Ex-Dividend Date</CardTitle>
                  <CardDescription>The cutoff date for eligibility &mdash; you must own shares before this date</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The ex-dividend date is typically one business day before the record date. If you buy the stock
                on or after the ex-dividend date, you will <strong>not</strong> receive the upcoming dividend payment.
                You must own the stock at least one day before the ex-dividend date. On the ex-date, the stock
                price usually drops by roughly the dividend amount, since new buyers won&apos;t receive the payment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-blue-600 text-white mt-1">3</Badge>
                <div>
                  <CardTitle>Record Date</CardTitle>
                  <CardDescription>The company confirms who is on the shareholder list</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The record date is when the company checks its books to see who officially owns shares. Due to
                the T+1 settlement process (trades settle one business day after purchase), you need to have
                bought shares at least one business day before the record date &mdash; which is why the ex-dividend
                date matters more for investors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-blue-600 text-white mt-1">4</Badge>
                <div>
                  <CardTitle>Payment Date</CardTitle>
                  <CardDescription>Cash hits your brokerage account</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The payment date is when the dividend is actually deposited into your brokerage account. This
                is usually 2-4 weeks after the record date. You can either take the cash or set up a DRIP
                (Dividend Reinvestment Plan) to automatically buy more shares with your dividends, which is
                how compound growth really accelerates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Dates Visual */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <CardTitle>Key Dividend Dates at a Glance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-bold">Date</th>
                    <th className="text-left p-2 font-bold">What Happens</th>
                    <th className="text-left p-2 font-bold">What You Need to Do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Declaration Date</td>
                    <td className="p-2">Company announces dividend</td>
                    <td className="p-2">Nothing &mdash; just be aware</td>
                  </tr>
                  <tr className="border-b bg-yellow-50 dark:bg-yellow-950">
                    <td className="p-2 font-medium">Ex-Dividend Date</td>
                    <td className="p-2">Cutoff for eligibility</td>
                    <td className="p-2 font-bold">Must own shares BEFORE this date</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Record Date</td>
                    <td className="p-2">Company checks shareholder list</td>
                    <td className="p-2">Nothing &mdash; automatic</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Payment Date</td>
                    <td className="p-2">Cash deposited in your account</td>
                    <td className="p-2">Collect your dividend!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Types of Dividends */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Types of Dividends</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Not all dividends are the same. Companies can distribute profits to shareholders in several ways.
          Here are the most common types:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Cash Dividends</CardTitle>
              <CardDescription>The most common type</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A direct cash payment per share. If you own 100 shares and the company pays $0.50 per share
                quarterly, you receive $50 in cash every three months. This is what most people mean when they
                say &ldquo;dividends.&rdquo; The vast majority of dividend-paying stocks use cash dividends.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Stock Dividends</CardTitle>
              <CardDescription>Paid in additional shares</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Instead of cash, the company gives you more shares. A 5% stock dividend means you receive
                5 additional shares for every 100 you own. This does not change the total value of your
                holdings immediately (share price adjusts), but it increases your share count, which means
                more dividend income in the future.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle>Special Dividends</CardTitle>
              <CardDescription>One-time bonus payments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A one-time, non-recurring payment usually triggered by a windfall event like a major asset
                sale, exceptional earnings, or accumulated cash reserves. Costco, for example, has issued
                several large special dividends over the years. These are bonuses on top of regular dividends
                and should not be counted on as regular income.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Preferred Dividends</CardTitle>
              <CardDescription>Fixed payments on preferred stock</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Preferred stockholders receive fixed dividend payments before common shareholders get anything.
                Preferred dividends act more like bond interest payments &mdash; the amount is set when the
                preferred stock is issued. If the company faces financial trouble, preferred dividends must be
                paid before any common stock dividends.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Qualified vs Ordinary */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Qualified vs. Ordinary Dividends: Tax Treatment</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          How your dividends are taxed depends on whether they are classified as &ldquo;qualified&rdquo;
          or &ldquo;ordinary.&rdquo; This distinction can make a significant difference in your after-tax income.
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-bold">Feature</th>
                    <th className="text-left p-3 font-bold">Qualified Dividends</th>
                    <th className="text-left p-3 font-bold">Ordinary Dividends</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Tax Rate</td>
                    <td className="p-3 text-green-600 font-medium">0%, 15%, or 20% (capital gains rates)</td>
                    <td className="p-3 text-red-600 font-medium">Your regular income tax rate (up to 37%)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Holding Period</td>
                    <td className="p-3">Must hold stock 60+ days during 121-day window</td>
                    <td className="p-3">No minimum holding period</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Company Type</td>
                    <td className="p-3">U.S. companies, qualified foreign corps</td>
                    <td className="p-3">REITs, MLPs, money market funds, etc.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tax on $1,000</td>
                    <td className="p-3 text-green-600">$0 - $200 depending on income</td>
                    <td className="p-3 text-red-600">$100 - $370 depending on bracket</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <CardTitle className="text-lg">Pro Tip: Hold for 61 Days</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              To receive the lower qualified dividend tax rate, hold your shares for at least 61 days during the
              121-day period surrounding the ex-dividend date. Most long-term investors meet this automatically,
              but day traders and frequent traders often miss out on the tax advantage. If you are a buy-and-hold
              investor, you almost certainly qualify.
            </p>
            <Link href="/blog/dividend-tax-guide-2026">
              <Button variant="link" size="sm" className="mt-2 p-0">
                Read our complete dividend tax guide <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Why Companies Pay Dividends */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Do Companies Pay Dividends?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Attract Investors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Dividends attract income-focused investors like retirees, pension funds, and endowments who
                need regular cash flow. This creates a stable, loyal shareholder base that is less likely to
                sell during market downturns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Signal Financial Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A consistent or growing dividend signals that management is confident about the company&apos;s
                future earnings. Cutting a dividend is seen as a serious red flag. Companies only commit to
                dividends when they believe they can sustain the payments long-term.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Return Excess Cash</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Mature companies (like utilities, consumer staples, and healthcare firms) generate more cash
                than they need to reinvest. Rather than letting cash sit idle or making risky acquisitions,
                they return it to shareholders. It is disciplined capital allocation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dividend Yield Explained */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Dividend Yield: The Key Metric</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How to Calculate Dividend Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4 font-mono text-center text-lg">
              Dividend Yield = (Annual Dividend per Share / Stock Price) x 100
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              For example, if a stock pays $2.00 per share annually and the share price is $50, the
              dividend yield is 4% ($2.00 / $50 = 0.04 = 4%). This tells you how much income you
              earn relative to what you paid for the stock.
            </p>
            <div className="bg-white dark:bg-slate-900 border rounded-lg p-4">
              <p className="font-medium mb-2">Real-World Examples:</p>
              <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <p><strong>Johnson & Johnson:</strong> ~$4.96 annual dividend / ~$165 price = 3.0% yield</p>
                <p><strong>Coca-Cola:</strong> ~$1.94 annual dividend / ~$62 price = 3.1% yield</p>
                <p><strong>Apple:</strong> ~$1.00 annual dividend / ~$230 price = 0.4% yield</p>
                <p><strong>Realty Income:</strong> ~$3.08 annual dividend / ~$56 price = 5.5% yield</p>
              </div>
            </div>
            <Link href="/blog/what-is-a-good-dividend-yield">
              <Button variant="outline" size="sm" className="mt-4">
                What is a Good Dividend Yield? <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* DRIP Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">DRIP: Reinvesting Dividends for Compound Growth</h2>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <CardTitle>What Is a DRIP?</CardTitle>
            <CardDescription>Dividend Reinvestment Plan</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              A DRIP automatically uses your dividend payments to buy more shares of the same stock. Instead
              of receiving $75 in cash, your broker buys $75 worth of additional shares (including fractional
              shares). Those new shares then earn dividends too, creating a powerful snowball effect.
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              The math is compelling: $10,000 invested in a stock yielding 3% with 7% dividend growth,
              reinvested via DRIP over 20 years, could grow to over $50,000 &mdash; with more than $20,000
              of that coming from reinvested dividends and their compounding effect.
            </p>
            <Link href="/calculators/drip">
              <Button size="sm">
                Try the DRIP Calculator <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <CardTitle className="text-lg">DRIP Pros</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>Compound growth accelerates over time</li>
                <li>No commission fees on reinvested shares</li>
                <li>Fractional shares mean every cent is invested</li>
                <li>Dollar-cost averaging happens automatically</li>
                <li>Hands-off &mdash; no decisions required</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <CardTitle className="text-lg">DRIP Cons</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                <li>You still owe taxes on dividends even if reinvested</li>
                <li>Can over-concentrate in one stock over time</li>
                <li>No control over purchase price/timing</li>
                <li>May buy more shares at elevated prices</li>
                <li>Less flexibility than taking cash</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Start Investing in Dividends</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-green-600 text-white mt-1">Step 1</Badge>
                <div>
                  <CardTitle>Open a Brokerage Account</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                You need a brokerage account to buy stocks. Major brokers like Fidelity, Charles Schwab, and
                Vanguard all offer commission-free stock trading, fractional shares, and automatic DRIP.
                Opening an account takes about 10 minutes. You can start with any amount &mdash; even $100.
              </p>
              <Link href="/blog/how-to-choose-dividend-broker">
                <Button variant="link" size="sm" className="mt-2 p-0">
                  How to choose the best broker for dividends <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-green-600 text-white mt-1">Step 2</Badge>
                <div>
                  <CardTitle>Choose Your First Dividend Stocks or ETFs</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                For beginners, dividend ETFs like SCHD (Schwab U.S. Dividend Equity), VYM (Vanguard High Dividend
                Yield), or DGRO (iShares Core Dividend Growth) provide instant diversification across dozens or
                hundreds of dividend-paying stocks. If you prefer individual stocks, start with Dividend
                Aristocrats &mdash; companies with 25+ years of consecutive dividend increases.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Link href="/blog/best-dividend-stocks-for-beginners">
                  <Button variant="outline" size="sm">Best Stocks for Beginners</Button>
                </Link>
                <Link href="/blog/top-dividend-etfs-2026">
                  <Button variant="outline" size="sm">Top Dividend ETFs 2026</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-green-600 text-white mt-1">Step 3</Badge>
                <div>
                  <CardTitle>Enable DRIP and Let Compounding Work</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Turn on dividend reinvestment in your brokerage settings. This is usually a single toggle in your
                account preferences. Then let time and compounding do the heavy lifting. The key is consistency:
                keep adding to your positions over months and years. Even small amounts grow dramatically over a
                10-20 year horizon.
              </p>
              <Link href="/calculators/dividend-growth">
                <Button variant="link" size="sm" className="mt-2 p-0">
                  See how your dividends can grow over time <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Badge className="bg-green-600 text-white mt-1">Step 4</Badge>
                <div>
                  <CardTitle>Track Your Progress</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Monitor your portfolio&apos;s annual dividend income, not daily stock price movements. The beauty of
                dividend investing is that your income stream grows even during bear markets (as long as
                companies maintain their dividends). Focus on growing your annual income from dividends month
                over month and year over year.
              </p>
              <Link href="/blog/how-to-track-your-dividend-portfolio">
                <Button variant="link" size="sm" className="mt-2 p-0">
                  How to track your dividend portfolio <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Myths */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">5 Common Dividend Myths, Debunked</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">&ldquo;Dividend stocks are only for retirees&rdquo;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>False.</strong> Young investors benefit even more from dividends because they have decades for
                compounding to work. A 25-year-old who starts reinvesting dividends has 40 years for the snowball
                effect to build. Many of the wealthiest investors in history built their fortunes through decades
                of dividend reinvestment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">&ldquo;High yield is always better&rdquo;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>False.</strong> A very high yield (above 6-8%) is often a warning sign that the stock price has
                crashed or the dividend is unsustainable. This is called a &ldquo;yield trap.&rdquo; A 3% yield that
                grows 10% annually will produce far more income over 10 years than an 8% yield that gets cut.
                Safety and growth matter more than headline yield.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">&ldquo;You need a lot of money to start&rdquo;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>False.</strong> Thanks to fractional shares, you can start dividend investing with as little as
                $1. Many brokers now allow fractional share purchases, so you can own a piece of any
                dividend stock regardless of its share price. Starting small and building consistently is
                far more powerful than waiting until you have a large lump sum.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">&ldquo;Dividends are double-taxed&rdquo;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Partially true, but manageable.</strong> While companies do pay corporate tax before distributing
                dividends, qualified dividends are taxed at favorable capital gains rates (0-20%), not ordinary
                income rates. And in a Roth IRA, your dividends grow and are withdrawn completely tax-free.
                Proper account placement makes the tax burden very manageable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">&ldquo;Growth stocks always beat dividend stocks&rdquo;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>False.</strong> Studies by Hartford Funds and Ned Davis Research show that dividend growers and
                initiators have outperformed non-payers over most long-term periods since 1973. Dividends
                provide a real return even when stock prices go nowhere. Over the last 90+ years, reinvested
                dividends have accounted for roughly 40% of the S&P 500&apos;s total return.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-2xl">Start Your Dividend Journey Today</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              The best time to start investing in dividends was 20 years ago. The second best time is today. Use our
              free calculators to see how your money can grow through the power of dividend compounding.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">DRIP Calculator <ArrowRight className="h-4 w-4 ml-1" /></Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">Dividend Growth Calculator <ArrowRight className="h-4 w-4 ml-1" /></Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/blog/what-is-a-good-dividend-yield">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">What Is a Good Dividend Yield?</CardTitle>
                <CardDescription>Benchmarks by sector and safety analysis</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>Safe, reliable picks to start with</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">DRIP Investing Guide</CardTitle>
                <CardDescription>Maximize compound growth with reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
