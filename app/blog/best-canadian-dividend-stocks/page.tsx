import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'

export const metadata = {
  title: 'Best Canadian Dividend Stocks 2026: High-Yield TSX Picks',
  description: 'Top Canadian dividend stocks with 4-7% yields. Big 5 banks, telecoms, pipelines, and REITs for USD investors seeking international diversification.',
}

export default function BestCanadianDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <MapPin className="h-3 w-3 mr-1" />
          International Dividend Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Canadian Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          High yields from stable Canadian companies. Big 5 banks, telecom oligopolies,
          and energy infrastructure providing 4-7% dividends with monthly payments.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Canadian Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. Royal Bank of Canada (RY)</CardTitle>
                <CardDescription>Largest Canadian bank | 154 years of dividends</CardDescription>
              </div>
              <Badge className="bg-green-600">3.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$175B CAD</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">48%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">5-Yr Growth</p>
                <p className="font-semibold text-green-600">7.2%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Safety</p>
                <p className="font-semibold text-green-600">A+</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Canada's largest bank with 17 million clients. Dominant in retail banking, wealth management, and
              capital markets. 154 consecutive years of dividend payments (since 1870). Canadian banks are protected
              by strict regulations and oligopoly structure—only 5 major banks control 90% of market. Rock-solid
              dividend history with steady 7% annual growth.
            </p>

            <Link href="/stocks/ry">
              <Button variant="outline" size="sm">Calculate RY Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Toronto-Dominion Bank (TD)</CardTitle>
                <CardDescription>Big U.S. presence | 166 years of dividends</CardDescription>
              </div>
              <Badge className="bg-blue-600">4.5% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Second-largest Canadian bank. Unique among Big 5 banks with massive U.S. retail presence—over 1,200
              U.S. branches on East Coast. 166 years of dividends. Higher yield than RY due to recent regulatory
              issues (good entry point for long-term investors). Diversified revenue: 30% from U.S. retail, 40%
              Canadian retail, 30% wholesale banking.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. Enbridge (ENB)</CardTitle>
                <CardDescription>Largest pipeline network | Monthly dividends</CardDescription>
              </div>
              <Badge className="bg-purple-600">6.5% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              North America's largest pipeline company—transports 30% of North American crude oil and 20% of natural
              gas consumed in U.S. Monthly dividends (12 payments/year). 29 consecutive years of increases. Regulated
              utility-like business with long-term contracts. Transitioning to renewable energy (offshore wind,
              renewable natural gas). Perfect for income investors wanting stable monthly cash flow.
            </p>
            <Link href="/stocks/enb">
              <Button variant="outline" size="sm">Calculate ENB Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top Canadian Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Sector</th>
                    <th className="text-left p-2">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Royal Bank (RY)</td><td className="p-2 text-right">3.8%</td><td className="p-2">Banking</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">TD Bank (TD)</td><td className="p-2 text-right">4.5%</td><td className="p-2">Banking</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">Enbridge (ENB)</td><td className="p-2 text-right">6.5%</td><td className="p-2">Pipeline</td><td className="p-2">Monthly</td></tr>
                  <tr className="border-b"><td className="p-2">Bank of Nova Scotia (BNS)</td><td className="p-2 text-right">5.8%</td><td className="p-2">Banking</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">BCE Inc (BCE)</td><td className="p-2 text-right">7.2%</td><td className="p-2">Telecom</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">Telus (TU)</td><td className="p-2 text-right">6.8%</td><td className="p-2">Telecom</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">TC Energy (TRP)</td><td className="p-2 text-right">6.9%</td><td className="p-2">Pipeline</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">Canadian Utilities (CU)</td><td className="p-2 text-right">5.2%</td><td className="p-2">Utilities</td><td className="p-2">Quarterly</td></tr>
                  <tr className="border-b"><td className="p-2">Fortis (FTS)</td><td className="p-2 text-right">4.1%</td><td className="p-2">Utilities</td><td className="p-2">Quarterly</td></tr>
                  <tr><td className="p-2">Manulife (MFC)</td><td className="p-2 text-right">4.6%</td><td className="p-2">Insurance</td><td className="p-2">Quarterly</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Canadian Dividend Stocks?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Higher Yields</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Canadian stocks often yield 1-2% more than U.S. equivalents. Banks yield 4-6% vs 3-4% for U.S. banks.
                Telecoms yield 6-8% vs 4-5% for U.S. carriers. More income per dollar invested.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Oligopoly Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Canada has only 5 major banks, 3 major telecoms, few pipeline operators. Government protects these
                oligopolies from foreign competition. Pricing power = stable dividends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Currency Diversification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                CAD exposure hedges against USD weakness. Resource-rich economy benefits from commodity cycles.
                International diversification reduces portfolio risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tax Implications for U.S. Investors</h2>

        <Card className="border-2 border-yellow-300 dark:border-yellow-700">
          <CardHeader>
            <CardTitle>Important: Canadian Dividend Tax</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded">
                <p className="font-semibold mb-2">15% Withholding Tax</p>
                <p>Canada withholds 15% tax on dividends paid to U.S. investors (25% for non-treaty countries). This
                happens automatically—you receive 85% of the dividend.</p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold mb-2">Foreign Tax Credit</p>
                <p>U.S. investors can claim foreign tax credit on Form 1116. This recovers most or all of the 15%
                withheld. Still pays U.S. tax, but avoids double taxation.</p>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="font-semibold mb-2">Hold in Taxable Accounts</p>
                <p>Canadian dividends in IRAs/401(k)s cannot claim foreign tax credit—15% is lost forever. Always
                hold Canadian stocks in taxable accounts to claim the credit.</p>
              </div>

              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="font-semibold mb-2">Net Yield After Tax</p>
                <p>Example: BCE yields 7.2%. After 15% withholding = 6.1% net. Still higher than most U.S. dividend
                stocks. High initial yields compensate for tax drag.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Canadian Dividend Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Diversified Canadian Income Portfolio</CardTitle>
            <CardDescription>$25K investment | 5.4% average yield (4.6% after withholding)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Royal Bank (RY)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Banking safety</span>
                </div>
                <span>$7,000 | 28%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Enbridge (ENB)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Monthly income</span>
                </div>
                <span>$6,000 | 24%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">BCE Inc (BCE)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">High yield telecom</span>
                </div>
                <span>$5,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">TD Bank (TD)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">U.S. exposure</span>
                </div>
                <span>$4,000 | 16%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Fortis (FTS)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Utility stability</span>
                </div>
                <span>$3,000 | 12%</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold mb-2">Before Tax:</p>
                <div className="text-sm space-y-1">
                  <p>Annual Income: <span className="font-semibold">$1,350</span></p>
                  <p>Average Yield: <span className="font-semibold">5.4%</span></p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold mb-2">After 15% Withholding:</p>
                <div className="text-sm space-y-1">
                  <p>Net Annual Income: <span className="font-semibold">$1,148</span></p>
                  <p>Net Yield: <span className="font-semibold">4.6%</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Building Canadian Dividend Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Canadian stocks offer higher yields than U.S. equivalents. Start with Big 5 banks for safety, add
              pipelines for monthly income, mix in telecoms for 7%+ yields. Remember to hold in taxable accounts
              for tax credit eligibility.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link href="/stocks/ry">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Canadian Stocks →</Button>
              </Link>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              U.S. investors can buy Canadian stocks through any major broker. Look for stocks on NYSE (U.S. listings)
              or Toronto Stock Exchange (TSX). Most brokers charge same commission as U.S. stocks.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-monthly-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Monthly Dividend Stocks</CardTitle>
                <CardDescription>Get paid 12 times per year</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide</CardTitle>
                <CardDescription>Minimize taxes on dividend income</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
