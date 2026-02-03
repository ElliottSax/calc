import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, CheckCircle, DollarSign } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Reinvest Dividends for Maximum Growth (2026 Guide)',
  description: 'DRIP vs manual reinvestment strategies. Learn when to reinvest, when to take cash, and how to maximize long-term wealth from dividend compounding.',
}

export default function HowToReinvestDividendsForMaximumGrowth() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <TrendingUp className="h-3 w-3 mr-1" />
          Reinvestment Strategy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Reinvest Dividends for Maximum Growth
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Master dividend reinvestment strategies. Learn DRIP vs manual methods,
          when to reinvest vs take cash, and how to compound wealth faster.
        </p>
      </div>

      <Card className="mb-16 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>DRIP vs manual reinvestment - which builds wealth faster</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>When to reinvest vs when to take cash (life stages)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Tax implications of different reinvestment methods</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Real math: $10k invested with vs without reinvestment (30 years)</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Power of Dividend Reinvestment</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Compounding in Action</CardTitle>
            <CardDescription>See the dramatic difference reinvestment makes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              When you reinvest dividends, you buy more shares. Those new shares generate dividends. You reinvest those
              too. This snowball effect is called compounding—and it's magical over decades.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded border-l-4 border-l-red-500">
                <p className="font-semibold mb-2 text-red-700 dark:text-red-400">Without Reinvestment</p>
                <div className="text-sm space-y-1 mb-3">
                  <p>Initial: $10,000</p>
                  <p>Yield: 4%/year</p>
                  <p>Years: 30</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">(Taking $400/year as cash)</p>
                </div>
                <div className="border-t pt-2">
                  <p className="font-bold text-lg">Final: $22,000</p>
                  <p className="text-xs">$10k investment + $12k cash dividends</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded border-l-4 border-l-green-500">
                <p className="font-semibold mb-2 text-green-700 dark:text-green-400">With Reinvestment</p>
                <div className="text-sm space-y-1 mb-3">
                  <p>Initial: $10,000</p>
                  <p>Yield: 4%/year</p>
                  <p>Years: 30</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">(Reinvesting all dividends)</p>
                </div>
                <div className="border-t pt-2">
                  <p className="font-bold text-lg text-green-700 dark:text-green-400">Final: $32,434</p>
                  <p className="text-xs">Growth from dividend compounding</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded">
              <p className="font-semibold mb-2 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Difference: $10,434 (47% more wealth!)
              </p>
              <p className="text-sm">Same initial investment, same stocks, but reinvesting dividends created $10k+ extra
                wealth. That's the power of compounding.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">DRIP vs Manual Reinvestment</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>DRIP (Automatic)</CardTitle>
              <Badge variant="outline" className="text-blue-600">Set & Forget</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Dividend Reinvestment Plan. Broker automatically uses dividends to buy more shares of the same stock.
                Zero effort required.
              </p>

              <div className="mb-3">
                <p className="font-semibold text-sm mb-2">Pros:</p>
                <ul className="text-xs space-y-1">
                  <li>• 100% automatic - never forget</li>
                  <li>• Buy fractional shares</li>
                  <li>• No trading commissions</li>
                  <li>• Forces discipline</li>
                  <li>• Dollar-cost averaging</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-sm mb-2">Cons:</p>
                <ul className="text-xs space-y-1">
                  <li>• Can't choose which stock to buy</li>
                  <li>• May over-concentrate</li>
                  <li>• Tracking cost basis harder</li>
                  <li>• Still owe taxes on dividends</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Manual Reinvestment</CardTitle>
              <Badge variant="outline" className="text-green-600">More Control</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Dividends deposited as cash. You manually choose when and where to reinvest. More work but more
                flexibility.
              </p>

              <div className="mb-3">
                <p className="font-semibold text-sm mb-2">Pros:</p>
                <ul className="text-xs space-y-1">
                  <li>• Choose which stocks to buy</li>
                  <li>• Rebalance portfolio</li>
                  <li>• Buy when stocks are cheap</li>
                  <li>• Add to underweight positions</li>
                  <li>• Can buy new positions</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-sm mb-2">Cons:</p>
                <ul className="text-xs space-y-1">
                  <li>• Requires regular attention</li>
                  <li>• May hold cash too long</li>
                  <li>• Temptation to spend</li>
                  <li>• Need to remember to reinvest</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Which Method Should You Use?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-1">Use DRIP If:</p>
                <ul className="text-sm space-y-1">
                  <li>• You have under 10 stocks (simple portfolio)</li>
                  <li>• You're a beginner investor</li>
                  <li>• You want completely passive investing</li>
                  <li>• You're in accumulation phase (10+ years from retirement)</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-1">Use Manual If:</p>
                <ul className="text-sm space-y-1">
                  <li>• You have 15+ stocks (need rebalancing)</li>
                  <li>• You want to control allocation</li>
                  <li>• You enjoy active management</li>
                  <li>• Your dividends are large enough ($100+ per month)</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="font-semibold mb-1">Hybrid Approach (Best of Both):</p>
                <p className="text-sm">Use DRIP for core holdings (JNJ, PG, KO). Manual reinvest for positions you're
                  actively managing. This gives automation where you want it, control where you need it.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our DRIP Strategy Guide"
          description="Free PDF: Complete guide to setting up automatic dividend reinvestment with major brokers"
          buttonText="Download Guide"
          source="drip_reinvestment_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">When to Reinvest vs Take Cash</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Life Stage Strategy</CardTitle>
            <CardDescription>Your reinvestment strategy should evolve with age</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-green-700 dark:text-green-400">Age 20-40: 100% Reinvestment</p>
                  <Badge className="bg-green-600">Accumulation Phase</Badge>
                </div>
                <p className="text-sm mb-2">You don't need income now. Let compounding work its magic. Reinvest every
                  penny.</p>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="text-xs font-semibold mb-1">Strategy:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Turn on DRIP for all holdings</li>
                    <li>• Focus on dividend growth stocks</li>
                    <li>• Don't even look at dividend income</li>
                    <li>• Maximize compounding runway</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-blue-700 dark:text-blue-400">Age 40-55: Mostly Reinvestment (80-90%)</p>
                  <Badge className="bg-blue-600">Building Phase</Badge>
                </div>
                <p className="text-sm mb-2">Still accumulating but can selectively take some cash for specific goals.
                  Reinvest most.</p>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="text-xs font-semibold mb-1">Strategy:</p>
                  <ul className="text-xs space-y-1">
                    <li>• DRIP most positions</li>
                    <li>• Manually manage to rebalance</li>
                    <li>• Take some cash for specific goals (vacation, etc.)</li>
                    <li>• Start building high-yield positions</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-yellow-700 dark:text-yellow-400">Age 55-65: Transition (50-70%
                    reinvestment)</p>
                  <Badge className="bg-yellow-600">Pre-Retirement</Badge>
                </div>
                <p className="text-sm mb-2">Shift from growth to income. Still reinvest majority but start using some
                  dividends as income.</p>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="text-xs font-semibold mb-1">Strategy:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Gradually turn off DRIP</li>
                    <li>• Use dividends to reduce portfolio risk</li>
                    <li>• Shift to higher-yield stocks</li>
                    <li>• Test living on dividend income</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-purple-700 dark:text-purple-400">Age 65+: Minimal Reinvestment (0-30%)</p>
                  <Badge className="bg-purple-600">Income Phase</Badge>
                </div>
                <p className="text-sm mb-2">Live off dividends. Reinvest only what you don't need to spend. Goal is
                  income, not growth.</p>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="text-xs font-semibold mb-1">Strategy:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Turn off all DRIPs</li>
                    <li>• Use dividends to supplement Social Security</li>
                    <li>• Only reinvest excess (if any)</li>
                    <li>• Prioritize dividend safety over growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Considerations</h2>

        <Card className="border-2 border-yellow-300 dark:border-yellow-700">
          <CardHeader>
            <CardTitle>Important: You Pay Taxes Whether You Reinvest or Not</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold mb-2">Common Misconception:</p>
                <p className="text-sm">"If I reinvest dividends, I don't pay taxes on them."</p>
                <p className="text-sm font-semibold mt-2 text-red-600">✗ FALSE</p>
                <p className="text-sm mt-1">You owe taxes on dividends whether you take cash or reinvest. The IRS doesn't
                  care what you do with the money—it's still taxable income.</p>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Qualified vs Ordinary Dividends:</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Qualified:</strong> Taxed at 0%, 15%, or 20% (capital gains rates)</li>
                  <li><strong>Ordinary:</strong> Taxed at your income tax rate (up to 37%)</li>
                </ul>
                <p className="text-xs mt-2">Most dividends from U.S. stocks held 60+ days are qualified.</p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2">Tax-Advantaged Accounts:</p>
                <p className="text-sm">In Roth IRA or 401(k), dividends grow tax-free. Perfect place for high-yield
                  stocks. Reinvest freely without tax concerns.</p>
              </div>

              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="font-semibold mb-2">Cost Basis Tracking:</p>
                <p className="text-sm">DRIP makes cost basis complex—you're buying at different prices all the time.
                  Most brokers track this automatically, but keep good records.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Advanced Reinvestment Strategies</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Selective Reinvestment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Don't blindly reinvest everything. Use dividend income strategically to improve portfolio.
              </p>
              <ul className="text-sm space-y-2">
                <li><strong>When stock is overvalued:</strong> Take cash, invest elsewhere</li>
                <li><strong>When position is overweight:</strong> Don't DRIP, buy underweight stocks</li>
                <li><strong>When better opportunities exist:</strong> Redirect dividends to higher-return investments</li>
                <li><strong>When rebalancing needed:</strong> Use dividends to adjust allocation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accumulation Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Let dividends accumulate until you have enough for full share purchase. Useful for expensive stocks.
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-xs font-semibold mb-1">Example:</p>
                <p className="text-xs">Receive $50/month dividends. Save for 3 months = $150. Use to buy 1 share of $150
                  stock. More control than fractional DRIP shares.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>New Position Building</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Use dividends from entire portfolio to build new positions. Diversify without adding new capital.
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <p className="text-xs font-semibold mb-1">Strategy:</p>
                <p className="text-xs">Turn off all DRIPs. Accumulate dividends for 1-2 months. Use total ($200-500) to
                  start position in new stock. Gradually build portfolio to 20-25 stocks using only dividend income.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Reinvesting Smarter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Reinvesting dividends is the key to building long-term wealth. Whether you use DRIP or manual methods,
              consistent reinvestment during accumulation years compounds into significant wealth by retirement.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
                <Button className="w-full" size="lg">Build Income Portfolio →</Button>
              </Link>
              <Link href="/blog/dividend-tax-guide-2026">
                <Button variant="outline" className="w-full" size="lg">Tax Guide →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-track-your-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Track Your Portfolio</CardTitle>
                <CardDescription>Monitor dividends and performance</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-monthly-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Monthly Dividend Stocks</CardTitle>
                <CardDescription>Get paid 12 times per year</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
