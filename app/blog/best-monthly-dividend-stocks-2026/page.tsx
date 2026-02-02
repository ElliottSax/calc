import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Calendar, DollarSign, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Monthly Dividend Stocks 2026: 12 Paychecks Per Year',
  description: 'Discover the top monthly dividend stocks that pay 12 times per year. Complete analysis of reliable monthly payers with yields up to 10%+ for consistent passive income.',
}

export default function BestMonthlyDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Calendar className="h-3 w-3 mr-1" />
          12 Paychecks Per Year
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Monthly Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Get paid every single month with these reliable monthly dividend payers.
          Build a portfolio that delivers 12 paychecks per year instead of 4.
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8 bg-slate-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg">Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li><a href="#why-monthly" className="text-blue-600 hover:underline">Why Monthly Dividends Matter</a></li>
            <li><a href="#top-picks" className="text-blue-600 hover:underline">Top 15 Monthly Dividend Stocks</a></li>
            <li><a href="#reits" className="text-blue-600 hover:underline">Monthly REITs</a></li>
            <li><a href="#bdc" className="text-blue-600 hover:underline">Business Development Companies</a></li>
            <li><a href="#build-portfolio" className="text-blue-600 hover:underline">Building Your Monthly Income Portfolio</a></li>
            <li><a href="#risks" className="text-blue-600 hover:underline">Risks to Watch</a></li>
          </ul>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Most dividend stocks pay quarterly—four times per year. But what if you could get paid <strong>every single month</strong>?
          Monthly dividend stocks provide 12 paychecks annually, creating more consistent cash flow for bills, reinvestment,
          or simply peace of mind.
        </p>
        <p>
          In this comprehensive guide, we'll explore the best monthly dividend payers for 2026, including REITs,
          Business Development Companies (BDCs), and traditional corporations that pay monthly. You'll learn which
          ones are safest, highest-yielding, and best for different investment goals.
        </p>
      </div>

      {/* Why Monthly Matters */}
      <section id="why-monthly" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="h-8 w-8 text-blue-600" />
          Why Monthly Dividends Matter
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Smoother Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Monthly payments align better with monthly bills like rent, mortgage, utilities.
                No waiting 2-3 months between dividend payments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Faster Compounding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Reinvesting monthly means your money goes to work immediately. Over decades,
                this can add thousands to your portfolio compared to quarterly dividends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Psychological Benefit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Seeing income every single month reinforces your investment discipline.
                It's easier to stay committed when you're getting regular "paychecks."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Better Budget Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Retirees especially benefit from predictable monthly income.
                Makes it easier to budget when you know exactly when income arrives.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">📊 Real Example:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              A $100,000 portfolio yielding 7% pays $7,000 annually. With quarterly dividends,
              you'd receive about $1,750 every 3 months. With monthly dividends, you receive
              $583 every month—much easier to budget around.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Top 15 Monthly Payers */}
      <section id="top-picks" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          Top 15 Monthly Dividend Stocks for 2026
        </h2>

        <div className="space-y-6">
          {/* Realty Income */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. Realty Income (O)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    "The Monthly Dividend Company" - Most famous monthly payer
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  5.2% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Sector</p>
                  <p className="font-semibold">REIT - Retail</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$44B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                  <p className="font-semibold">29 years, 122 increases</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> Realty Income literally calls itself "The Monthly Dividend Company."
                They own 12,400+ properties leased to retail and commercial tenants. Incredibly stable with
                29 consecutive years of dividend increases. The gold standard for monthly income investors.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-green-600 border-green-600">Very Safe</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">Dividend Achiever</Badge>
                <Badge variant="outline">S&P 500</Badge>
              </div>

              <Link href="/stocks/o">
                <Button variant="outline" size="sm">
                  Calculate Returns for Realty Income →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* STAG Industrial */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. STAG Industrial (STAG)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Industrial warehouse REIT benefiting from e-commerce
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  4.3% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Sector</p>
                  <p className="font-semibold">REIT - Industrial</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">550+ warehouses</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Occupancy</p>
                  <p className="font-semibold">98.2%</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> Industrial real estate is booming thanks to Amazon and e-commerce.
                STAG owns 550+ warehouses across the US. High occupancy rates, strong tenant quality, and
                consistent monthly dividends since 2011.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-green-600 border-green-600">Growth Potential</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">E-Commerce Play</Badge>
              </div>

              <Link href="/stocks/stag">
                <Button variant="outline" size="sm">
                  Calculate Returns for STAG →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Main Street Capital */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. Main Street Capital (MAIN)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Business Development Company with supplemental dividends
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-purple-600">
                  6.2% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Type</p>
                  <p className="font-semibold">BDC</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Portfolio</p>
                  <p className="font-semibold">180+ companies</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Dividend History</p>
                  <p className="font-semibold">14 years increasing</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> MAIN lends to small and medium-sized businesses, earning interest income
                that gets passed to shareholders. Unique among BDCs for actually <em>increasing</em> dividends consistently.
                Also pays semi-annual supplemental dividends on top of monthly payments.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-green-600 border-green-600">Dividend Growth</Badge>
                <Badge variant="outline" className="text-purple-600 border-purple-600">Higher Yield</Badge>
                <Badge variant="outline">Supplemental Payments</Badge>
              </div>

              <Link href="/stocks/main">
                <Button variant="outline" size="sm">
                  Calculate Returns for MAIN →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* EPR Properties */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. EPR Properties (EPR)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Experiential real estate - theaters, attractions, resorts
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-orange-600">
                  7.1% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Sector</p>
                  <p className="font-semibold">REIT - Experiential</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">350+ locations</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Recovery</p>
                  <p className="font-semibold">Post-COVID rebound</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> EPR owns experiential properties like movie theaters, ski resorts,
                waterparks, and entertainment venues. Hit hard during COVID but has fully recovered. Now offering
                a high 7%+ yield with monthly payments as entertainment spending rebounds.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-orange-600 border-orange-600">High Yield</Badge>
                <Badge variant="outline" className="text-yellow-600 border-yellow-600">Moderate Risk</Badge>
              </div>

              <Link href="/stocks/epr">
                <Button variant="outline" size="sm">
                  Calculate Returns for EPR →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* LTC Properties */}
          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. LTC Properties (LTC)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Healthcare REIT - senior housing and skilled nursing
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-teal-600">
                  7.8% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Sector</p>
                  <p className="font-semibold">REIT - Healthcare</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Properties</p>
                  <p className="font-semibold">200+ facilities</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Demographic Tailwind</p>
                  <p className="font-semibold">Aging population</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> LTC owns senior housing and skilled nursing facilities—a sector
                with massive demographic tailwinds as Baby Boomers age. High 7.8% yield paid monthly.
                Portfolio is recovering nicely post-pandemic.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-orange-600 border-orange-600">High Yield</Badge>
                <Badge variant="outline" className="text-teal-600 border-teal-600">Healthcare</Badge>
                <Badge variant="outline">Demographic Play</Badge>
              </div>

              <Button variant="outline" size="sm">
                Calculate Returns for LTC →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Summary Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Comparison: Top 15 Monthly Payers</CardTitle>
            <CardDescription>All stocks pay monthly dividends (12x per year)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-left p-2">Ticker</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Realty Income</td><td className="p-2 font-mono">O</td><td className="p-2 text-right">5.2%</td><td className="p-2">REIT</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">STAG Industrial</td><td className="p-2 font-mono">STAG</td><td className="p-2 text-right">4.3%</td><td className="p-2">REIT</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Main Street Capital</td><td className="p-2 font-mono">MAIN</td><td className="p-2 text-right">6.2%</td><td className="p-2">BDC</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">EPR Properties</td><td className="p-2 font-mono">EPR</td><td className="p-2 text-right">7.1%</td><td className="p-2">REIT</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">LTC Properties</td><td className="p-2 font-mono">LTC</td><td className="p-2 text-right">7.8%</td><td className="p-2">REIT</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Armour Residential</td><td className="p-2 font-mono">ARR</td><td className="p-2 text-right">14.2%</td><td className="p-2">mREIT</td><td className="p-2"><Badge variant="outline" className="text-red-600">Higher Risk</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">AGNC Investment</td><td className="p-2 font-mono">AGNC</td><td className="p-2 text-right">13.8%</td><td className="p-2">mREIT</td><td className="p-2"><Badge variant="outline" className="text-red-600">Higher Risk</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Prospect Capital</td><td className="p-2 font-mono">PSEC</td><td className="p-2 text-right">10.1%</td><td className="p-2">BDC</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Pembina Pipeline</td><td className="p-2 font-mono">PBA</td><td className="p-2 text-right">6.4%</td><td className="p-2">Energy</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Gladstone Capital</td><td className="p-2 font-mono">GLAD</td><td className="p-2 text-right">8.1%</td><td className="p-2">BDC</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">SL Green Realty</td><td className="p-2 font-mono">SLG</td><td className="p-2 text-right">9.3%</td><td className="p-2">REIT</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Horizon Technology</td><td className="p-2 font-mono">HRZN</td><td className="p-2 text-right">10.5%</td><td className="p-2">BDC</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Orchid Island Capital</td><td className="p-2 font-mono">ORC</td><td className="p-2 text-right">15.1%</td><td className="p-2">mREIT</td><td className="p-2"><Badge variant="outline" className="text-red-600">Higher Risk</Badge></td></tr>
                  <tr className="border-b"><td className="p-2">Stellus Capital</td><td className="p-2 font-mono">SCM</td><td className="p-2 text-right">11.2%</td><td className="p-2">BDC</td><td className="p-2"><Badge variant="outline" className="text-yellow-600">Moderate</Badge></td></tr>
                  <tr><td className="p-2">Pennant Group</td><td className="p-2 font-mono">PNTG</td><td className="p-2 text-right">5.9%</td><td className="p-2">Healthcare</td><td className="p-2"><Badge variant="outline" className="text-green-600">Safe</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free Monthly Dividend Stock Guide"
          description="Includes full analysis of 50+ monthly payers, safety ratings, and portfolio templates"
          buttonText="Send Me The Guide"
          source="monthly_dividend_blog"
        />
      </div>

      {/* Build Your Portfolio */}
      <section id="build-portfolio" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <DollarSign className="h-8 w-8 text-blue-600" />
          Building Your Monthly Income Portfolio
        </h2>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          <p>
            The key to monthly dividend success is <strong>diversification</strong>. Don't put all your eggs
            in one basket—spread across different sectors and risk levels.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conservative Monthly Portfolio (Lower Risk)</CardTitle>
              <CardDescription>Target: 5-6% yield, very stable</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li className="flex justify-between"><span>40% Realty Income (O)</span><span className="text-slate-600">5.2% yield</span></li>
                <li className="flex justify-between"><span>25% STAG Industrial (STAG)</span><span className="text-slate-600">4.3% yield</span></li>
                <li className="flex justify-between"><span>20% Main Street Capital (MAIN)</span><span className="text-slate-600">6.2% yield</span></li>
                <li className="flex justify-between"><span>15% Pembina Pipeline (PBA)</span><span className="text-slate-600">6.4% yield</span></li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Weighted Average Yield: 5.4%</strong> | Very low risk, proven track records
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Balanced Monthly Portfolio (Moderate Risk)</CardTitle>
              <CardDescription>Target: 7-8% yield, good balance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li className="flex justify-between"><span>30% Realty Income (O)</span><span className="text-slate-600">5.2% yield</span></li>
                <li className="flex justify-between"><span>25% Main Street Capital (MAIN)</span><span className="text-slate-600">6.2% yield</span></li>
                <li className="flex justify-between"><span>20% EPR Properties (EPR)</span><span className="text-slate-600">7.1% yield</span></li>
                <li className="flex justify-between"><span>15% LTC Properties (LTC)</span><span className="text-slate-600">7.8% yield</span></li>
                <li className="flex justify-between"><span>10% Gladstone Capital (GLAD)</span><span className="text-slate-600">8.1% yield</span></li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Weighted Average Yield: 6.7%</strong> | Mix of safety and higher yields
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aggressive Monthly Portfolio (Higher Risk)</CardTitle>
              <CardDescription>Target: 10%+ yield, accept more volatility</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li className="flex justify-between"><span>20% Main Street Capital (MAIN)</span><span className="text-slate-600">6.2% yield</span></li>
                <li className="flex justify-between"><span>20% Prospect Capital (PSEC)</span><span className="text-slate-600">10.1% yield</span></li>
                <li className="flex justify-between"><span>20% AGNC Investment (AGNC)</span><span className="text-slate-600">13.8% yield</span></li>
                <li className="flex justify-between"><span>20% Horizon Technology (HRZN)</span><span className="text-slate-600">10.5% yield</span></li>
                <li className="flex justify-between"><span>20% Stellus Capital (SCM)</span><span className="text-slate-600">11.2% yield</span></li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Weighted Average Yield: 10.4%</strong> | High income but expect dividend cuts
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Important Note on mREITs
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Mortgage REITs (ARR, AGNC, ORC) offer extremely high yields (13-15%+) but are much riskier.
              They use leverage and are sensitive to interest rate changes. Many have cut dividends significantly
              in the past. Only include these if you understand and accept the risks.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Risks Section */}
      <section id="risks" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-8 w-8 text-blue-600" />
          Risks to Watch with Monthly Dividend Stocks
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Higher Yields = Higher Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Many monthly payers are REITs and BDCs, which tend to offer higher yields because
                they're required to pay out 90% of income. This leaves less cushion for bad times.
                A 10%+ yield often signals elevated risk.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Dividend Cuts Happen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlike dividend aristocrats with 25+ years of increases, many monthly payers have
                cut dividends in recessions. Don't assume the current payment is permanent.
                Diversify to protect against cuts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-yellow-600 mb-2" />
              <CardTitle>Interest Rate Sensitivity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                REITs and BDCs are sensitive to interest rates. When rates rise, their borrowing costs
                increase and their stock prices often fall. However, this can also create buying opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Limited Capital Appreciation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Because these companies pay out most of their income, they retain less for growth.
                Don't expect massive stock price gains. You're primarily investing for income, not growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Brokers */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-2xl">Best Brokers for Monthly Dividend Stocks</CardTitle>
            <CardDescription>Choose a broker with free trades and automatic DRIP</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              To maximize your monthly dividend strategy, you need a broker that offers:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>$0 commissions (otherwise 12 monthly reinvestments get expensive)</li>
              <li>Automatic DRIP (dividend reinvestment plan)</li>
              <li>Fractional shares (reinvest small monthly payments efficiently)</li>
              <li>No account minimums</li>
            </ul>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">M1 Finance</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best for automatic dividend investing</p>
                </div>
                <Link href="/brokers/m1-finance">
                  <Button>Learn More →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Fidelity</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best research tools and reliability</p>
                </div>
                <Link href="/brokers/fidelity">
                  <Button variant="outline">Learn More →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Charles Schwab</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best all-around platform</p>
                </div>
                <Link href="/brokers/charles-schwab">
                  <Button variant="outline">Learn More →</Button>
                </Link>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6">
              See our complete <Link href="/blog/how-to-choose-dividend-broker" className="text-blue-600 hover:underline">broker comparison guide</Link> for detailed reviews.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are monthly dividend stocks safe?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on the stock. Conservative monthly payers like Realty Income (O) and STAG Industrial
                are very safe with long track records. However, many monthly payers are higher-risk REITs and
                BDCs that can and do cut dividends. Always diversify and research each stock's fundamentals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do monthly dividends compound faster than quarterly?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, slightly. If you reinvest dividends immediately, monthly compounding provides marginally
                better returns than quarterly over long periods. However, the difference is small—maybe 0.1-0.3%
                annually. The bigger benefit is psychological and cash flow management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much do I need to invest to get $1,000/month in dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                At a 6% average yield, you'd need about $200,000 to generate $12,000 annually ($1,000/month).
                At 8% yield, you'd need $150,000. At 10% yield, $120,000. Higher yields mean less capital needed,
                but also higher risk. Use our <Link href="/stocks" className="text-blue-600 hover:underline">dividend calculator</Link> to model your specific goals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I reinvest monthly dividends or take the cash?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If you're building wealth, reinvest via DRIP to compound faster. If you're retired and need income,
                take the cash. Many investors transition from reinvesting (accumulation phase) to taking cash
                (distribution phase) as they approach retirement. You can also do a hybrid approach.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What's the safest monthly dividend stock?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Realty Income (O) is widely considered the safest monthly payer. It's been paying and increasing
                dividends for 29 consecutive years with 122 consecutive increases. It's in the S&P 500 and has
                a $44B market cap. No monthly dividend stock is risk-free, but O is as close as it gets.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Earning Monthly Dividends?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Monthly dividend stocks provide the psychological benefit of regular paychecks, better cash flow
              management, and slightly faster compounding. Start with the safer options like Realty Income and
              STAG Industrial, then gradually add higher-yield positions as you become comfortable.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Monthly Dividend Stocks →
                </Button>
              </Link>
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Browse All 100 Dividend Stocks →
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              Remember: Diversify, research fundamentals, and never chase yield without understanding the risks.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend Aristocrats 2026</CardTitle>
                <CardDescription>25+ years of consecutive dividend increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which strategy is right for you?</CardDescription>
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

          <Link href="/blog/how-to-choose-dividend-broker">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Choose a Dividend Broker</CardTitle>
                <CardDescription>Find the perfect platform for dividend investing</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
