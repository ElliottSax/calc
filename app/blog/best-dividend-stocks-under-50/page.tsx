import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Shield, CheckCircle2, AlertTriangle } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Dividend Stocks Under $50 in 2026: Affordable Income Investing',
  description: 'Discover quality dividend stocks trading under $50 per share. Perfect for beginners and investors with smaller budgets. Includes yields, safety ratings, and growth potential.',
}

export default function BestDividendStocksUnder50() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <DollarSign className="h-3 w-3 mr-1" />
          Affordable Entry Points
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Dividend Stocks Under $50
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Quality dividend payers you can afford. Build a diversified portfolio
          even with a small budget. All picks are proven income producers.
        </p>
      </div>

      {/* Why Under $50 Matters */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Why This List Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <p>
              <strong>Share price doesn't determine quality</strong>—but it does determine accessibility.
              Many excellent dividend stocks trade under $50/share, making it easy to:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Diversify with less capital:</strong> Buy 10 different stocks with $5,000 instead of just 2-3 expensive ones</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Start investing sooner:</strong> Don't wait to save $10K—start with $500-1,000</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Dollar-cost average easier:</strong> Buy 5-10 shares per month instead of 0.5 shares of expensive stocks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Reinvest dividends efficiently:</strong> Smaller share prices mean dividend payments buy whole shares faster</span>
              </li>
            </ul>
            <p className="pt-3 font-semibold">
              Note: With fractional shares now available at most brokers, share price matters less—but this list
              is still useful for finding quality at accessible prices.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          You don't need $500/share stocks like Broadcom or $600/share stocks like Costco to build wealth
          through dividends. This curated list features 15 dividend stocks trading under $50 that offer
          solid yields, strong fundamentals, and proven track records.
        </p>
        <p>
          We've organized them by yield level (conservative, moderate, high) and safety rating to help you
          choose based on your risk tolerance and income needs.
        </p>
      </div>

      {/* Top 15 Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 15 Dividend Stocks Under $50 (2026)</h2>

        <div className="space-y-8">
          {/* Conservative Picks */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Conservative Picks (3-4% Yield, Very Safe)</h3>
            <div className="space-y-6">

              {/* Coca-Cola */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Coca-Cola (KO)</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">Safe</Badge>
                      </div>
                      <CardDescription>$46/share | Beverages | Dividend Aristocrat</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-green-600">
                      3.0% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                      <p className="font-semibold">62 years</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                      <p className="font-semibold">72%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                      <p className="font-semibold">$198B</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-green-600">A+</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's great:</strong> One of the most reliable dividend stocks ever. Coca-Cola
                    has paid and increased dividends for 62 consecutive years. Sells 2.2 billion servings per day
                    in 200+ countries. Recession-proof business model. Perfect core holding.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Dividend Aristocrat</Badge>
                    <Badge variant="outline">Global Brand</Badge>
                    <Badge variant="outline">Defensive</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* PepsiCo */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">PepsiCo (PEP)</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">Safe</Badge>
                      </div>
                      <CardDescription>$47/share | Food & Beverage | Dividend Aristocrat</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-green-600">
                      2.9% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                      <p className="font-semibold">52 years</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                      <p className="font-semibold">67%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                      <p className="font-semibold">$202B</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-green-600">A+</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's great:</strong> More diversified than Coca-Cola with Frito-Lay, Quaker,
                    Gatorade, and beverage brands. 52 years of dividend increases. Strong pricing power and
                    brand loyalty. Snacks division provides stability during beverage market weakness.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Dividend Aristocrat</Badge>
                    <Badge variant="outline">Diversified</Badge>
                    <Badge variant="outline">Pricing Power</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Ford */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Ford Motor Company (F)</CardTitle>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">Moderate</Badge>
                      </div>
                      <CardDescription>$11/share | Automotive | EV Growth Story</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-blue-600">
                      4.1% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                      <p className="font-semibold">Reinstated 2012</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                      <p className="font-semibold">42%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                      <p className="font-semibold">$44B</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-blue-600">B+</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's interesting:</strong> Super affordable at $11/share. Strong free cash flow
                    from F-150 trucks. Major EV investments (Mustang Mach-E, F-150 Lightning). Cut dividend
                    during 2008 crisis but has rebuilt. Higher risk but good value at current levels.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">EV Growth</Badge>
                    <Badge variant="outline">Value Play</Badge>
                    <Badge variant="outline">Affordable</Badge>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Moderate Yield Picks */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Moderate Yield Picks (4-6%, Good Balance)</h3>
            <div className="space-y-6">

              {/* Realty Income */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Realty Income (O)</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">Safe</Badge>
                      </div>
                      <CardDescription>$49/share | REIT - Retail | "The Monthly Dividend Company"</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-blue-600">
                      5.2% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend Frequency</p>
                      <p className="font-semibold">Monthly</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Div History</p>
                      <p className="font-semibold">29 years</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Properties</p>
                      <p className="font-semibold">12,400+</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-green-600">A</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's great:</strong> The gold standard for monthly dividend stocks. Pays dividends
                    12 times per year. Owns retail properties leased to 1,400+ tenants. 29 consecutive years of
                    increases with 122 consecutive quarterly increases. S&P 500 member. Perfect for income investors.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Monthly Dividends</Badge>
                    <Badge variant="outline">Dividend Achiever</Badge>
                    <Badge variant="outline">S&P 500</Badge>
                  </div>

                  <Link href="/stocks/o" className="mt-3 inline-block">
                    <Button variant="outline" size="sm">
                      Calculate Your Returns →
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* AT&T */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">AT&T (T)</CardTitle>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">Moderate</Badge>
                      </div>
                      <CardDescription>$18/share | Telecom | Recovering from spin-off</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-blue-600">
                      5.8% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                      <p className="font-semibold">Reset 2022</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                      <p className="font-semibold">58%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                      <p className="font-semibold">$130B</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-blue-600">B</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's interesting:</strong> Cut dividend in 2022 after spinning off Warner Media,
                    but is now focused on core telecom business. 5G buildout provides growth. Very cheap at $18/share.
                    Yield is attractive for those comfortable with the turnaround story. Not for ultra-conservative investors.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">5G Play</Badge>
                    <Badge variant="outline">Turnaround</Badge>
                    <Badge variant="outline">Very Affordable</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* STAG Industrial */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">STAG Industrial (STAG)</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">Safe</Badge>
                      </div>
                      <CardDescription>$31/share | REIT - Industrial | E-commerce warehouses</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-blue-600">
                      4.3% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend Frequency</p>
                      <p className="font-semibold">Monthly</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Properties</p>
                      <p className="font-semibold">550+ warehouses</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Occupancy</p>
                      <p className="font-semibold">98.2%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-green-600">A-</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's great:</strong> Benefiting from e-commerce boom. Owns 550+ industrial warehouses
                    across the U.S. High occupancy rates (98%+). Pays monthly dividends. Strong growth potential as
                    Amazon and others need more distribution space. Quality pick under $50.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Monthly Dividends</Badge>
                    <Badge variant="outline">E-Commerce Play</Badge>
                    <Badge variant="outline">Growth Potential</Badge>
                  </div>

                  <Link href="/stocks/stag" className="mt-3 inline-block">
                    <Button variant="outline" size="sm">
                      Calculate Your Returns →
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pfizer */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Pfizer (PFE)</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">Safe</Badge>
                      </div>
                      <CardDescription>$27/share | Pharma | Pipeline rebuilding post-COVID</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-blue-600">
                      5.9% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                      <p className="font-semibold">14 years increases</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                      <p className="font-semibold">82%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                      <p className="font-semibold">$152B</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-green-600">B+</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's interesting:</strong> Down from COVID-era highs, now trading at attractive
                    valuation with high 5.9% yield. Strong pipeline of drugs in development. Aging population
                    demographic tailwind. 14 years of dividend increases. Good value for patient investors.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Value Play</Badge>
                    <Badge variant="outline">Strong Pipeline</Badge>
                    <Badge variant="outline">Aging Demographics</Badge>
                  </div>

                  <Link href="/stocks/pfe" className="mt-3 inline-block">
                    <Button variant="outline" size="sm">
                      Calculate Your Returns →
                    </Button>
                  </Link>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* High Yield Picks */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">High Yield Picks (6%+, Higher Risk)</h3>

            <Card className="mb-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
              <CardContent className="pt-6">
                <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  High Yield Warning
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Yields above 6-7% often indicate higher risk. These stocks may have cyclical businesses,
                  higher payout ratios, or uncertain futures. They can work in a diversified portfolio but
                  shouldn't be your only holdings. Dividend cuts are possible during recessions.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">

              {/* Verizon */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Verizon (VZ)</CardTitle>
                        <Badge variant="outline" className="text-orange-600 border-orange-600">Moderate Risk</Badge>
                      </div>
                      <CardDescription>$38/share | Telecom | Mature business, high yield</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-orange-600">
                      6.8% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                      <p className="font-semibold">19 years increases</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                      <p className="font-semibold">60%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                      <p className="font-semibold">$160B</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-blue-600">B+</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's interesting:</strong> Best-in-class wireless network with strong customer
                    loyalty. High 6.8% yield attracts income investors. 5G buildout provides growth. Concerns about
                    competition and debt, but business is still generating solid cash flow. Reasonable payout ratio
                    suggests dividend is safe near-term.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">High Yield</Badge>
                    <Badge variant="outline">5G Growth</Badge>
                    <Badge variant="outline">Strong Network</Badge>
                  </div>

                  <Link href="/stocks/vz" className="mt-3 inline-block">
                    <Button variant="outline" size="sm">
                      Calculate Your Returns →
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Main Street Capital */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Main Street Capital (MAIN)</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">Quality BDC</Badge>
                      </div>
                      <CardDescription>$45/share | BDC | Monthly + supplemental dividends</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-orange-600">
                      6.2% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend Frequency</p>
                      <p className="font-semibold">Monthly</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Div History</p>
                      <p className="font-semibold">14 yrs increases</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Portfolio</p>
                      <p className="font-semibold">180+ companies</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-green-600">B+</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's great:</strong> Best-in-class BDC (Business Development Company). Lends to
                    small/medium businesses and passes interest income to shareholders. Unique among BDCs for actually
                    increasing dividends consistently (14 years). Also pays semi-annual supplemental dividends.
                    Monthly payments are great for cash flow.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Monthly Dividends</Badge>
                    <Badge variant="outline">Dividend Growth</Badge>
                    <Badge variant="outline">Supplemental Divs</Badge>
                  </div>

                  <Link href="/stocks/main" className="mt-3 inline-block">
                    <Button variant="outline" size="sm">
                      Calculate Your Returns →
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* EPR Properties */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">EPR Properties (EPR)</CardTitle>
                        <Badge variant="outline" className="text-orange-600 border-orange-600">Recovery Play</Badge>
                      </div>
                      <CardDescription>$43/share | REIT | Experiential properties (theaters, resorts)</CardDescription>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1 bg-orange-600">
                      7.1% Yield
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Dividend Frequency</p>
                      <p className="font-semibold">Monthly</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Properties</p>
                      <p className="font-semibold">350+ locations</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Recovery</p>
                      <p className="font-semibold">Post-COVID</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                      <p className="font-semibold text-yellow-600">B-</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Why it's interesting:</strong> Unique REIT focused on "experiential" properties—movie
                    theaters, ski resorts, waterparks, entertainment venues. Hit extremely hard during COVID but
                    has fully recovered. High 7% yield paid monthly. Higher risk due to cyclical nature, but good
                    for diversification and those bullish on entertainment spending.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Monthly Dividends</Badge>
                    <Badge variant="outline">High Yield</Badge>
                    <Badge variant="outline">Entertainment</Badge>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Complete Affordable Dividend Stock List"
          description="50+ dividend stocks under $50 with full analysis, safety ratings, and portfolio recommendations"
          buttonText="Download Free List"
          source="under_50_blog"
        />
      </div>

      {/* Building a Portfolio */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Portfolio: $5,000 Budget</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced Portfolio for Beginners</CardTitle>
            <CardDescription>Diversified across 8 stocks, all under $50/share</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Realty Income (O)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">20 shares @ $49 | Monthly</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$980</p>
                  <p className="text-xs text-slate-600">5.2% yield = $51/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Coca-Cola (KO)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">17 shares @ $46</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$782</p>
                  <p className="text-xs text-slate-600">3.0% yield = $23/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">PepsiCo (PEP)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">13 shares @ $47</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$611</p>
                  <p className="text-xs text-slate-600">2.9% yield = $18/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">STAG Industrial (STAG)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">20 shares @ $31 | Monthly</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$620</p>
                  <p className="text-xs text-slate-600">4.3% yield = $27/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Verizon (VZ)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">13 shares @ $38</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$494</p>
                  <p className="text-xs text-slate-600">6.8% yield = $34/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Pfizer (PFE)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">19 shares @ $27</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$513</p>
                  <p className="text-xs text-slate-600">5.9% yield = $30/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Main Street Capital (MAIN)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">11 shares @ $45 | Monthly</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$495</p>
                  <p className="text-xs text-slate-600">6.2% yield = $31/year</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <p className="font-semibold">Ford (F)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">46 shares @ $11</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">$506</p>
                  <p className="text-xs text-slate-600">4.1% yield = $21/year</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Total Invested</p>
                  <p className="text-xl font-bold">$5,001</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Annual Dividends</p>
                  <p className="text-xl font-bold text-green-600">$235</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Average Yield</p>
                  <p className="text-xl font-bold text-blue-600">4.7%</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Portfolio benefits:</strong> 8 different stocks across multiple sectors. 3 monthly payers
                for consistent cash flow. Mix of conservative (KO, PEP) and higher-yield (VZ, MAIN) positions.
                Total shares owned: 159 (easy to track).
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Best Brokers */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Best Brokers for Affordable Dividend Investing</CardTitle>
            <CardDescription>All offer $0 commissions + fractional shares</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              With fractional shares, you can buy $10 of any stock regardless of share price. But if you prefer
              owning whole shares for simplicity, these under-$50 stocks make it easy:
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">M1 Finance</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best for automatic dividend investing + fractional shares</p>
                  <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                    <li>✓ Build custom "pies" with any allocation</li>
                    <li>✓ Auto-invest dividends exactly how you want</li>
                  </ul>
                </div>
                <Link href="/brokers/m1-finance">
                  <Button>Open Account →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Fidelity</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best research + fractional shares on all stocks</p>
                  <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                    <li>✓ Amazing dividend screening tools</li>
                    <li>✓ Fractional shares on 7,000+ stocks</li>
                  </ul>
                </div>
                <Link href="/brokers/fidelity">
                  <Button variant="outline">Open Account →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Charles Schwab</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best all-around platform</p>
                  <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                    <li>✓ Fractional shares on S&P 500</li>
                    <li>✓ Excellent customer service</li>
                  </ul>
                </div>
                <Link href="/brokers/charles-schwab">
                  <Button variant="outline">Open Account →</Button>
                </Link>
              </div>
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
              <CardTitle className="text-lg">Does a lower share price mean a better deal?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. Share price alone doesn't determine value or quality. A $10 stock isn't "cheaper" than
                a $100 stock—you need to look at valuation metrics (P/E ratio, dividend yield, growth rates).
                However, lower share prices do make it easier to diversify with limited capital and to reinvest
                dividends efficiently.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I use fractional shares or buy whole shares?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Both work fine. Fractional shares let you invest any dollar amount ($50, $100, etc.) regardless
                of share price. Whole shares are easier to track mentally and feel more tangible. If your broker
                offers fractional shares, use them—but if you prefer the simplicity of whole shares, this list
                makes that affordable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are stocks under $50 riskier than expensive stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not necessarily. Coca-Cola at $46/share is much safer than many $200+ stocks. Share price is
                determined by the number of shares outstanding, not quality. Some companies do stock splits to
                keep share prices accessible. Focus on fundamentals (dividend history, payout ratio, business
                quality) rather than share price alone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How many different stocks should I own?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For individual stocks, 15-25 provides good diversification without being unmanageable. With
                under-$50 stocks, you could build a diversified 20-stock portfolio with just $10,000-15,000.
                If you have less capital, start with 5-10 stocks or use dividend ETFs like SCHD or VYM for
                instant diversification.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Building Your Dividend Portfolio Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              You don't need thousands of dollars to start dividend investing. With these quality stocks under
              $50, you can build a diversified portfolio with just $3,000-5,000. Start with the conservative
              picks (KO, PEP, O), add moderate-yield names (STAG, MAIN), and mix in 1-2 higher-yield positions
              if you're comfortable with the risk.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare These Stocks →
                </Button>
              </Link>
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Browse All 100 Dividend Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
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

          <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build a $1,000/Month Portfolio</CardTitle>
                <CardDescription>Complete roadmap to passive income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-etfs-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend ETFs 2026</CardTitle>
                <CardDescription>Instant diversification for beginners</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Automate your dividend reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
