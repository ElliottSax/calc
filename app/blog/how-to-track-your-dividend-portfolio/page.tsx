import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, CheckCircle } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Track Your Dividend Portfolio: Tools & Methods (2026)',
  description: 'Best ways to track dividend income, reinvestments, and portfolio performance. Spreadsheets, apps, and broker tools compared.',
}

export default function HowToTrackYourDividendPortfolio() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <BarChart3 className="h-3 w-3 mr-1" />
          Portfolio Management
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Track Your Dividend Portfolio
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Monitor dividend income, reinvestments, and performance with the right
          tools. Compare spreadsheets, apps, and automated tracking methods.
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
              <span>5 methods for tracking dividend income (from simple to advanced)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Best apps and tools for dividend tracking</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>How to calculate forward dividend income and yield on cost</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Free spreadsheet template you can copy</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">5 Methods to Track Dividends</h2>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600">Method 1</Badge>
                <CardTitle className="text-2xl">Broker Statements (Easiest)</CardTitle>
              </div>
              <Badge variant="outline" className="text-green-600">Best for Beginners</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Your broker automatically tracks all dividends received. Check monthly/quarterly statements or online
              dashboard. Zero effort required.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2 text-green-700 dark:text-green-400">Pros:</p>
                <ul className="text-xs space-y-1">
                  <li>• Completely automatic</li>
                  <li>• 100% accurate</li>
                  <li>• No setup needed</li>
                  <li>• Free</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                <p className="font-semibold mb-2 text-red-700 dark:text-red-400">Cons:</p>
                <ul className="text-xs space-y-1">
                  <li>• Only shows past dividends</li>
                  <li>• Can't forecast future income</li>
                  <li>• Limited if you have multiple brokers</li>
                  <li>• No custom reporting</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Best Broker Dashboards:</p>
              <ul className="text-sm space-y-2">
                <li><strong>Fidelity:</strong> "Income" tab shows monthly dividend history and projections</li>
                <li><strong>Schwab:</strong> "Dividends & Capital Gains" report with calendar view</li>
                <li><strong>M1 Finance:</strong> "Dividends" page shows yield on cost and projected income</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600">Method 2</Badge>
                <CardTitle className="text-2xl">Simple Spreadsheet (Recommended)</CardTitle>
              </div>
              <Badge variant="outline" className="text-blue-600">Best Balance</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Track holdings in Google Sheets or Excel. Calculate forward dividend income and yield on cost. Update
              monthly or quarterly.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Shares</th>
                    <th className="text-right p-2">Cost Basis</th>
                    <th className="text-right p-2">Annual Div</th>
                    <th className="text-right p-2">Forward Income</th>
                    <th className="text-right p-2">YOC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">JNJ</td>
                    <td className="p-2 text-right">50</td>
                    <td className="p-2 text-right">$7,500</td>
                    <td className="p-2 text-right">$4.76</td>
                    <td className="p-2 text-right">$238</td>
                    <td className="p-2 text-right">3.2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">PG</td>
                    <td className="p-2 text-right">40</td>
                    <td className="p-2 text-right">$6,000</td>
                    <td className="p-2 text-right">$3.76</td>
                    <td className="p-2 text-right">$150</td>
                    <td className="p-2 text-right">2.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">KO</td>
                    <td className="p-2 text-right">100</td>
                    <td className="p-2 text-right">$5,500</td>
                    <td className="p-2 text-right">$1.94</td>
                    <td className="p-2 text-right">$194</td>
                    <td className="p-2 text-right">3.5%</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="p-2">Total</td>
                    <td className="p-2 text-right">190</td>
                    <td className="p-2 text-right">$19,000</td>
                    <td className="p-2 text-right">-</td>
                    <td className="p-2 text-right">$582</td>
                    <td className="p-2 text-right">3.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
              <p className="font-semibold mb-2">Key Formulas:</p>
              <ul className="text-sm space-y-1 font-mono">
                <li>Forward Income = Shares × Annual Dividend</li>
                <li>Yield on Cost (YOC) = Forward Income / Cost Basis</li>
                <li>Portfolio Yield = Total Income / Total Cost Basis</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600">Method 3</Badge>
                <CardTitle className="text-2xl">Dividend Tracking Apps</CardTitle>
              </div>
              <Badge variant="outline" className="text-purple-600">Most Features</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Dedicated apps designed specifically for dividend investors. Automatic dividend updates, portfolio
              analysis, and projections.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold">DivTracker (Free)</p>
                  <Badge variant="outline" className="text-green-600">Recommended</Badge>
                </div>
                <p className="text-sm mb-2">Best free dividend tracker. Calendar view of upcoming dividends, portfolio
                  analysis, dividend safety scores.</p>
                <ul className="text-xs space-y-1">
                  <li>• iOS and Android apps</li>
                  <li>• Automatic dividend updates</li>
                  <li>• Forward income projections</li>
                  <li>• Portfolio diversification analysis</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold">Seeking Alpha ($20/month)</p>
                  <Badge variant="outline" className="text-blue-600">Premium</Badge>
                </div>
                <p className="text-sm mb-2">Professional-grade portfolio tracker with dividend analysis, alerts, and
                  research.</p>
                <ul className="text-xs space-y-1">
                  <li>• Portfolio tracker with dividend projections</li>
                  <li>• Dividend safety ratings (A-F)</li>
                  <li>• Alerts for dividend cuts/increases</li>
                  <li>• Access to analyst research</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Simply Safe Dividends ($10/month)</p>
                <p className="text-sm mb-2">Focused on dividend safety analysis. Portfolio tracker with risk scores.</p>
                <ul className="text-xs space-y-1">
                  <li>• Portfolio safety score</li>
                  <li>• Dividend sustainability ratings</li>
                  <li>• Income projections</li>
                  <li>• Watchlist alerts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600">Method 4</Badge>
              <CardTitle className="text-2xl">Portfolio Trackers (Mint, Personal Capital)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              General investment apps that sync with your broker. Track dividends alongside other investments.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2">Personal Capital (Free)</p>
                <ul className="text-xs space-y-1">
                  <li>• Syncs with all major brokers</li>
                  <li>• Shows total dividend income</li>
                  <li>• Portfolio allocation analysis</li>
                  <li>• Net worth tracking</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Empower (Free)</p>
                <ul className="text-xs space-y-1">
                  <li>• Automatic broker sync</li>
                  <li>• Income tracking by month</li>
                  <li>• Investment checkup tool</li>
                  <li>• Retirement planner</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600">Method 5</Badge>
              <CardTitle className="text-2xl">Advanced Spreadsheet with Macros</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              For power users. Automated spreadsheet that pulls live stock prices and dividend data. Full control and
              customization.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Features:</p>
              <ul className="text-sm space-y-1">
                <li>• Google Finance/Yahoo Finance API integration</li>
                <li>• Automatic price updates</li>
                <li>• Dividend history tracking</li>
                <li>• Custom calculations (CAGR, IRR, etc.)</li>
                <li>• Charts and visualizations</li>
              </ul>
            </div>

            <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
              <p className="text-sm"><strong>Setup Time:</strong> 2-4 hours initial setup, but worth it for serious
                investors with 20+ holdings</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free Dividend Tracking Template"
          description="Google Sheets template with formulas for forward income, YOC, and portfolio analysis"
          buttonText="Download Template"
          source="dividend_tracking_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Metrics to Track</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Forward Dividend Income</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                How much dividend income you'll receive over the next 12 months based on current holdings and dividend
                rates.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded">
                <p className="text-xs font-semibold mb-1">Formula:</p>
                <p className="text-xs font-mono">Forward Income = Σ(Shares × Annual Dividend)</p>
                <p className="text-xs mt-2">Example: 50 shares JNJ × $4.76 = $238/year</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Yield on Cost (YOC)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Dividend yield based on your purchase price, not current price. Shows true return on your investment.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded">
                <p className="text-xs font-semibold mb-1">Formula:</p>
                <p className="text-xs font-mono">YOC = (Annual Dividend / Cost Basis) × 100</p>
                <p className="text-xs mt-2">Example: $4.76 / $150 = 3.2% YOC</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dividend Growth Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                How fast your dividend income is growing year-over-year. Track by stock and portfolio-wide.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded">
                <p className="text-xs font-semibold mb-1">Example:</p>
                <p className="text-xs">2024 Income: $2,500</p>
                <p className="text-xs">2025 Income: $2,750</p>
                <p className="text-xs">Growth Rate: 10%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Diversification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Track what percentage of income comes from each sector and stock. Avoid over-concentration.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded">
                <p className="text-xs font-semibold mb-1">Guidelines:</p>
                <ul className="text-xs space-y-1">
                  <li>• No single stock over 10% of income</li>
                  <li>• No sector over 30% of income</li>
                  <li>• 15-25 stocks ideal for diversification</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Setting Up Your Tracking System</h2>

        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Setup Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="bg-blue-600 mr-3 mt-1">1</Badge>
                <div>
                  <p className="font-semibold mb-1">Choose Your Method</p>
                  <p className="text-sm">Beginners: Broker statements. Serious investors: Spreadsheet or app.</p>
                </div>
              </div>

              <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="bg-blue-600 mr-3 mt-1">2</Badge>
                <div>
                  <p className="font-semibold mb-1">Record Current Holdings</p>
                  <p className="text-sm">List all dividend stocks with: ticker, shares, purchase price, purchase
                    date.</p>
                </div>
              </div>

              <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="bg-blue-600 mr-3 mt-1">3</Badge>
                <div>
                  <p className="font-semibold mb-1">Add Current Dividend Rates</p>
                  <p className="text-sm">Look up annual dividend for each stock. Update quarterly when dividends
                    increase.</p>
                </div>
              </div>

              <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="bg-blue-600 mr-3 mt-1">4</Badge>
                <div>
                  <p className="font-semibold mb-1">Calculate Forward Income</p>
                  <p className="text-sm">Multiply shares by annual dividend for each stock. Sum for total portfolio
                    income.</p>
                </div>
              </div>

              <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <Badge className="bg-blue-600 mr-3 mt-1">5</Badge>
                <div>
                  <p className="font-semibold mb-1">Set Update Schedule</p>
                  <p className="text-sm">Update monthly (add new purchases) or quarterly (after dividend increases
                    announced).</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Tracking Mistakes</h2>

        <div className="space-y-3">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">Not Tracking Reinvested Dividends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">If you DRIP (automatically reinvest), your share count increases. Update your
                tracker after each reinvestment or you'll underestimate forward income.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">Forgetting to Update After Dividend Increases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Companies announce dividend increases quarterly. If you don't update, your
                projections will be low. Set calendar reminders for earnings season.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">Tracking Too Many Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Start simple. Track forward income and YOC. Add complexity later if needed. Over-tracking leads to abandoning the system.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Tracking Your Dividends Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Choose the tracking method that fits your needs. Start simple with broker statements, then upgrade to
              spreadsheet or app as your portfolio grows. Consistent tracking helps you stay motivated and make better
              investment decisions.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button className="w-full" size="lg">Analyze Your Portfolio →</Button>
              </Link>
              <Link href="/blog/how-to-reinvest-dividends-for-maximum-growth">
                <Button variant="outline" className="w-full" size="lg">Reinvestment Strategies →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build a $1000/Month Portfolio</CardTitle>
                <CardDescription>Calculate how much you need</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-analyze-dividend-safety">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Analyze Dividend Safety</CardTitle>
                <CardDescription>Protect your income stream</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
