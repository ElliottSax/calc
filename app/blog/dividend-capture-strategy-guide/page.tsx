import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CheckCircle2, XCircle, DollarSign, TrendingDown, Clock, Calculator } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Dividend Capture Strategy: Does It Actually Work? (2026 Guide)',
  description: 'Honest analysis of the dividend capture strategy. Learn how it works, tax implications, why it often fails, who it works for, and better alternatives for income investors.',
  keywords: 'dividend capture strategy, dividend capture, ex-dividend strategy, dividend stripping, buy before ex-dividend date, dividend trading strategy',
}

export default function DividendCaptureStrategyGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <DollarSign className="h-3 w-3 mr-1" />
          Strategy Deep Dive
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Dividend Capture Strategy: Does It Actually Work?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Buy before the ex-dividend date, collect the dividend, sell immediately.
          Sounds easy, right? Here is the honest truth most articles will not tell you.
        </p>
      </div>

      <Card className="mb-12 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-2 border-amber-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Honest Verdict</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold mb-4">
            Dividend capture <strong>rarely beats a simple buy-and-hold strategy</strong> after
            accounting for taxes, commissions, and the stock price drop on ex-date.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
              <p className="font-semibold text-green-600 mb-2">Sounds great on paper:</p>
              <p className="text-sm">Collect dividends from dozens of stocks every quarter without long-term commitment</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <p className="font-semibold text-red-600 mb-2">Reality check:</p>
              <p className="text-sm">Stock drops by the dividend amount, taxes eat your profits, and transaction costs add up</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What Is the Dividend Capture Strategy?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>The Basic Concept</CardTitle>
            <CardDescription>A short-term trading approach to collect dividends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Dividend capture is a trading strategy where you buy a stock just before its
              ex-dividend date, hold it long enough to receive the dividend, and then sell it shortly after.
              The idea is to collect the cash payout without holding the stock long-term.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <p className="font-semibold text-sm">Buy 1-2 days before ex-dividend date</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Stock is at $100, pays $1.00 dividend</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <p className="font-semibold text-sm">Hold through the ex-dividend date</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Stock opens at ~$99 (drops by dividend amount)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <p className="font-semibold text-sm">Sell within a few days</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Hopefully the stock recovers to $100 and you keep the $1.00 dividend</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <p className="font-semibold text-sm">Repeat with the next stock going ex-dividend</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Rotate through dozens of stocks each quarter</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-sm">
          <p className="font-semibold mb-2">Key Concept: The Ex-Dividend Date</p>
          <p>
            The ex-dividend date is the cutoff. You must own the stock <strong>before</strong> this
            date to receive the dividend. For a complete explanation, read our{' '}
            <Link href="/blog/ex-dividend-date-explained" className="text-blue-600 underline font-semibold">
              ex-dividend date guide
            </Link>.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Dividend Capture Often Does Not Work</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-6 w-6 text-red-600" />
                Problem #1: The Price Drop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                On the ex-dividend date, the stock price drops by approximately the dividend amount.
                This is not a coincidence -- the exchange adjusts the opening price downward because
                new buyers will not receive the dividend.
              </p>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded text-sm">
                <strong>Example:</strong> You buy XYZ at $50. It pays a $0.50 dividend. On ex-date,
                the stock opens at ~$49.50. You received $0.50 in dividends but lost $0.50 in stock value.
                Net gain: $0.00 before taxes and commissions.
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-red-600" />
                Problem #2: Tax Treatment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                This is the strategy killer. To qualify for the lower dividend tax rate (0%, 15%, or 20%),
                you must hold the stock for at least <strong>61 days</strong> during the 121-day period
                surrounding the ex-dividend date.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                  <p className="font-semibold text-green-600 mb-1">Qualified Dividend (61+ days):</p>
                  <p>Taxed at 0%, 15%, or 20% depending on income</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                  <p className="font-semibold text-red-600 mb-1">Ordinary Dividend (under 61 days):</p>
                  <p>Taxed at your regular income rate -- up to 37%</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-3">
                With dividend capture, you hold for just a few days. That means your dividends are taxed as
                <strong> ordinary income</strong> at your marginal rate. A 3% dividend yield becomes roughly
                1.9% after a 37% tax hit.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-red-600" />
                Problem #3: Transaction Costs and Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Even with commission-free brokers, you face hidden costs:
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Bid-ask spread:</strong> You lose a few cents per share on each buy and sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Capital tied up:</strong> Money sitting in positions waiting for ex-dates cannot earn returns elsewhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Market risk:</strong> Stock could drop more than the dividend during the holding period</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Research time:</strong> Tracking dozens of ex-dates and executing trades takes real effort</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">A Real-World Math Example</h2>

        <Card>
          <CardHeader>
            <CardTitle>Dividend Capture on Coca-Cola (KO)</CardTitle>
            <CardDescription>Running the numbers honestly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="font-semibold mb-1">Setup:</p>
                <ul className="space-y-1 ml-4">
                  <li>Buy 1,000 shares of KO at $62.00 = $62,000 invested</li>
                  <li>Quarterly dividend: $0.485 per share</li>
                  <li>Total dividend received: $485.00</li>
                </ul>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold mb-1">Costs:</p>
                <ul className="space-y-1 ml-4">
                  <li>Stock drops ~$0.485 on ex-date = -$485 paper loss</li>
                  <li>Bid-ask spread (buy + sell): ~$0.02 x 1,000 x 2 = -$40</li>
                  <li>Tax at 32% marginal rate (ordinary income): -$155</li>
                </ul>
              </div>

              <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded border border-amber-300 dark:border-amber-700">
                <p className="font-semibold mb-1">Net Result:</p>
                <ul className="space-y-1 ml-4">
                  <li>Dividend received: +$485</li>
                  <li>Stock price drop: -$485</li>
                  <li>Spread cost: -$40</li>
                  <li>Taxes on dividend: -$155</li>
                  <li className="font-bold text-red-600 pt-1 border-t">Net loss: -$195</li>
                </ul>
              </div>

              <p className="text-slate-600 dark:text-slate-400">
                Even if the stock recovers to its pre-ex-date price within a few days (not guaranteed),
                you still lost $155 in taxes plus $40 in spread costs. The dividend does not create
                free money -- it comes out of the stock price.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Smarter Dividend Strategies"
          description="Weekly analysis of dividend strategies that actually work, backed by real math and tax considerations"
          buttonText="Subscribe Free"
          source="dividend_capture_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">When Dividend Capture Can Work</h2>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          While it usually underperforms, there are narrow scenarios where dividend capture
          might make sense:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Tax-Advantaged Accounts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                In an IRA or 401(k), dividends are not taxed when received. This eliminates the
                biggest cost. However, you still face the price drop and bid-ask spreads, so the
                strategy is at best break-even.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Stocks That Recover Quickly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Some stocks in strong uptrends recover the ex-date drop within 1-2 days.
                If you can identify these reliably (which is difficult), you may profit. But this
                is really a momentum trade, not a dividend strategy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Institutional Traders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Large firms with tax advantages, low transaction costs, and sophisticated
                hedging (like using options to offset the price drop) can sometimes extract
                small profits at scale. This is not practical for individual investors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Very High Dividend Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Stocks paying unusually large dividends (5%+ per quarter) offer bigger
                margins to absorb costs. But these yields often signal distressed companies,
                adding significant downside risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Better Alternatives for Income Investors</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Buy and Hold Dividend Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Instead of chasing individual ex-dates, buy quality dividend stocks and hold them.
                You collect every quarterly dividend, qualify for the lower tax rate, and benefit
                from long-term price appreciation. Dividend Aristocrats have raised their dividends
                for 25+ consecutive years.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Expected return: 8-12% annually (dividends + growth) with minimal effort.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>DRIP (Dividend Reinvestment)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Automatically reinvest dividends to buy more shares. This creates a compounding
                engine that accelerates your income growth over time. A 3% yield with 7% dividend
                growth can produce a 10%+ yield on cost within 15 years.
              </p>
              <Link href="/calculators/drip" className="text-blue-600 underline text-sm font-semibold">
                Try our DRIP Calculator to see the compounding effect
              </Link>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Dividend Growth Investing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Focus on companies that consistently increase their dividends. A stock yielding
                2.5% today that grows its dividend 10% annually will yield 6.5% on your original
                cost in 10 years -- without any additional trading.
              </p>
              <p className="text-sm font-semibold text-green-600">
                This is the strategy that actually builds wealth for individual investors.
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
              <CardTitle className="text-lg">Can I make money with dividend capture?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Technically yes, but studies consistently show it underperforms buy-and-hold after
                taxes and transaction costs. Academic research from the Journal of Financial Economics
                found that the ex-date price drop almost perfectly offsets the dividend, leaving
                little profit for capture traders.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What about using options to hedge the price drop?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Some traders buy protective puts or sell covered calls around ex-dates. However,
                options pricing already accounts for expected dividends. The put will be more
                expensive before ex-date, and the call premium will be lower. The market is efficient
                enough that there is rarely a free lunch here.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is dividend capture illegal?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No, it is perfectly legal. The IRS is aware of the strategy, which is exactly why
                they created the 61-day holding requirement for qualified dividend tax rates. They
                effectively discourage it by taxing short-term dividend captures at ordinary income rates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How many trades would I need for meaningful income?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                With average quarterly dividends of $0.50-$1.00 per share, you would need to execute
                dozens of trades per month with large position sizes ($50,000+) to generate even
                $500/month. The time and capital requirements are better spent on a long-term
                dividend portfolio.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">The Bottom Line</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Dividend capture sounds appealing but the math rarely works in your favor. The stock
              price drop, ordinary income taxes, and transaction costs eat most or all of the
              dividend. For the vast majority of investors, buying quality dividend stocks and
              holding them long-term produces better results with less effort and lower taxes.
            </p>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Focus your energy on finding great companies with growing dividends, reinvest those
              dividends, and let compounding do the heavy lifting.
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
                <CardDescription>Master the timing that matters</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Qualified vs ordinary dividend rates</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>The compounding strategy that works</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-avoid-dividend-cuts">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Avoid Dividend Cuts</CardTitle>
                <CardDescription>Protect your income stream</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
