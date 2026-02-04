import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Target, DollarSign, Calculator, CheckCircle2, AlertTriangle } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'How to Build a $1,000/Month Dividend Portfolio in 2026',
  description: 'Step-by-step guide to creating a dividend portfolio that generates $1,000+ monthly passive income. Learn capital requirements, stock selection, and portfolio strategies.',
}

export default function Build1000MonthPortfolio() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Target className="h-3 w-3 mr-1" />
          Complete Roadmap
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to Build a $1,000/Month Dividend Portfolio
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          The exact blueprint to generate $12,000+ in annual dividend income.
          Learn how much to invest, which stocks to buy, and how to get started today.
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="text-2xl">The Quick Answer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <strong>To generate $1,000/month ($12,000/year) in dividends:</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 4% Yield</p>
                <p className="text-2xl font-bold text-blue-600">$300,000</p>
                <p className="text-xs text-slate-500 mt-1">Conservative approach</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 5% Yield</p>
                <p className="text-2xl font-bold text-green-600">$240,000</p>
                <p className="text-xs text-slate-500 mt-1">Balanced approach</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">At 6% Yield</p>
                <p className="text-2xl font-bold text-orange-600">$200,000</p>
                <p className="text-xs text-slate-500 mt-1">Higher risk</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 pt-3">
              This guide shows you exactly how to get there, whether you're starting with $10K or $200K.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Earning $1,000 per month in passive dividend income is a realistic goal for many investors.
          Whether you're saving for early retirement, supplementing your income, or building financial independence,
          this guide provides the exact roadmap to reach this milestone.
        </p>
        <p>
          We'll cover how much capital you need, which stocks to buy, how to allocate your portfolio, and most
          importantly—how to get started even if you don't have $200K+ saved yet.
        </p>
      </div>

      {/* Step 1: Calculate Your Target */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calculator className="h-8 w-8 text-blue-600" />
          Step 1: Understand the Math
        </h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>The Simple Formula</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg mb-4">
              <p className="text-center text-lg font-mono">
                Annual Income ÷ Yield = Required Capital
              </p>
              <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
                $12,000 ÷ 0.05 = $240,000
              </p>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              To earn $12,000/year at a 5% yield, you need $240,000 invested. But here's the thing:
              <strong> yield and risk are correlated</strong>. Let's compare different approaches:
            </p>

            <div className="space-y-4">
              <div className="p-4 border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950 rounded">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Conservative (3-4% Yield)</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Capital needed:</strong> $300,000-$400,000
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Strategy:</strong> Blue-chip dividend aristocrats (JNJ, PG, KO, PEP)
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Pros:</strong> Very safe, consistent dividend growth, sleep well at night<br />
                  <strong>Cons:</strong> Requires more capital, slower income growth initially
                </p>
              </div>

              <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950 rounded">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Balanced (4-6% Yield)</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Capital needed:</strong> $200,000-$300,000
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Strategy:</strong> Mix of dividend aristocrats + quality REITs + dividend ETFs
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Pros:</strong> Good balance of safety and yield, diversified<br />
                  <strong>Cons:</strong> Some volatility, requires ongoing monitoring
                </p>
              </div>

              <div className="p-4 border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-950 rounded">
                <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Aggressive (6-10% Yield)</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Capital needed:</strong> $120,000-$200,000
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Strategy:</strong> High-yield REITs, BDCs, mREITs, covered call ETFs
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Pros:</strong> Less capital required, high immediate income<br />
                  <strong>Cons:</strong> Higher risk, dividend cuts likely during recessions, more volatility
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Important: Don't Chase Yield
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              A 10% yield isn't "better" than a 4% yield if the company cuts dividends by 50% during the
              next recession. Focus on <strong>sustainable, growing dividends</strong> rather than just
              chasing the highest current yield. Most successful dividend investors target 4-6% yields.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Step 2: Portfolio Allocation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          Step 2: Build Your Portfolio (3 Strategies)
        </h2>

        <div className="space-y-8">
          {/* Conservative Portfolio */}
          <Card className="border-2 border-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">Conservative $1K/Month Portfolio</CardTitle>
                  <CardDescription className="text-base mt-1">
                    $300,000 capital | 4.0% average yield | Very low risk
                  </CardDescription>
                </div>
                <Badge className="bg-green-600">Safest</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Johnson & Johnson (JNJ)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">62 years of increases | Healthcare</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$40,000</p>
                    <p className="text-xs text-slate-600">13.3% | 3.0% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Procter & Gamble (PG)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">68 years of increases | Consumer</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$40,000</p>
                    <p className="text-xs text-slate-600">13.3% | 2.4% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Coca-Cola (KO)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">62 years of increases | Beverages</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$35,000</p>
                    <p className="text-xs text-slate-600">11.7% | 3.0% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">PepsiCo (PEP)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">52 years of increases | Food/Bev</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$30,000</p>
                    <p className="text-xs text-slate-600">10.0% | 2.9% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">AbbVie (ABBV)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">52 years combined | Pharma</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$30,000</p>
                    <p className="text-xs text-slate-600">10.0% | 3.5% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Realty Income (O)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Monthly payer | REIT</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$40,000</p>
                    <p className="text-xs text-slate-600">13.3% | 5.2% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Vanguard Dividend ETF (VYM)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">500+ holdings | Diversified</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$45,000</p>
                    <p className="text-xs text-slate-600">15.0% | 2.8% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Schwab Dividend ETF (SCHD)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">100 quality stocks | Growth focus</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$40,000</p>
                    <p className="text-xs text-slate-600">13.3% | 3.5% yield</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold text-lg mb-2">Annual Dividend Income: $12,015</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  <strong>Monthly Income: $1,001</strong> (varies slightly by month due to quarterly payments)
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Sector Diversification</p>
                    <p className="font-semibold">8 different sectors</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Average Div History</p>
                    <p className="font-semibold">40+ years</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
                    <p className="font-semibold text-green-600">Very Low</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
                <strong>Why this works:</strong> All stocks are proven dividend champions with decades of
                consecutive increases. During 2008-2009 recession, none of these cut dividends. Perfect for
                retirees or conservative investors who need reliable income.
              </p>
            </CardContent>
          </Card>

          {/* Balanced Portfolio */}
          <Card className="border-2 border-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">Balanced $1K/Month Portfolio</CardTitle>
                  <CardDescription className="text-base mt-1">
                    $240,000 capital | 5.0% average yield | Moderate risk
                  </CardDescription>
                </div>
                <Badge className="bg-blue-600">Recommended</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">SCHD ETF (Quality + Yield)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Core holding | 100 stocks</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$72,000</p>
                    <p className="text-xs text-slate-600">30% | 3.5% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Realty Income (O)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Monthly dividends | REIT</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$36,000</p>
                    <p className="text-xs text-slate-600">15% | 5.2% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">STAG Industrial (STAG)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Warehouses | Growth</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$28,800</p>
                    <p className="text-xs text-slate-600">12% | 4.3% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Main Street Capital (MAIN)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">BDC | Monthly + special divs</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$28,800</p>
                    <p className="text-xs text-slate-600">12% | 6.2% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">AbbVie (ABBV)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Pharma | High yield</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$24,000</p>
                    <p className="text-xs text-slate-600">10% | 3.5% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">VZ (Verizon)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Telecom | High yield</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$19,200</p>
                    <p className="text-xs text-slate-600">8% | 6.8% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">EPR Properties (EPR)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Experiential REIT | Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$16,800</p>
                    <p className="text-xs text-slate-600">7% | 7.1% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">VYM ETF (Diversification)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">500+ stocks | Safety</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$14,400</p>
                    <p className="text-xs text-slate-600">6% | 2.8% yield</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold text-lg mb-2">Annual Dividend Income: $12,042</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  <strong>Monthly Income: $1,004</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Monthly Payers</p>
                    <p className="font-semibold">40% of portfolio</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">ETF Allocation</p>
                    <p className="font-semibold">36% (safety)</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
                    <p className="font-semibold text-blue-600">Moderate</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mt-4">
                <strong>Why this works:</strong> Good balance between safety (36% in ETFs) and yield.
                Includes both quarterly and monthly payers for consistent cash flow. Sectors diversified
                across healthcare, real estate, finance, and consumer. This is the sweet spot for most investors.
              </p>
            </CardContent>
          </Card>

          {/* Aggressive Portfolio */}
          <Card className="border-2 border-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">Aggressive $1K/Month Portfolio</CardTitle>
                  <CardDescription className="text-base mt-1">
                    $150,000 capital | 8.0% average yield | Higher risk
                  </CardDescription>
                </div>
                <Badge variant="destructive">Higher Risk</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">AGNC Investment (AGNC)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">mREIT | Monthly | High yield</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$22,500</p>
                    <p className="text-xs text-slate-600">15% | 13.8% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Prospect Capital (PSEC)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">BDC | Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$22,500</p>
                    <p className="text-xs text-slate-600">15% | 10.1% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Main Street Capital (MAIN)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">BDC | Quality</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$22,500</p>
                    <p className="text-xs text-slate-600">15% | 6.2% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">EPR Properties (EPR)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">REIT | Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$15,000</p>
                    <p className="text-xs text-slate-600">10% | 7.1% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">LTC Properties (LTC)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Healthcare REIT</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$15,000</p>
                    <p className="text-xs text-slate-600">10% | 7.8% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Verizon (VZ)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Telecom | Stable</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$15,000</p>
                    <p className="text-xs text-slate-600">10% | 6.8% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">Realty Income (O)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Safety anchor</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$22,500</p>
                    <p className="text-xs text-slate-600">15% | 5.2% yield</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <p className="font-semibold">SCHD ETF (Balance)</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Quality buffer</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">$15,000</p>
                    <p className="text-xs text-slate-600">10% | 3.5% yield</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <p className="font-bold text-lg mb-2">Annual Dividend Income: $12,078</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  <strong>Monthly Income: $1,007</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Monthly Payers</p>
                    <p className="font-semibold">70% of portfolio</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">High-Yield (8%+)</p>
                    <p className="font-semibold">55% of portfolio</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
                    <p className="font-semibold text-orange-600">High</p>
                  </div>
                </div>
              </div>

              <Card className="mt-4 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2 text-red-700 dark:text-red-400">
                    <AlertTriangle className="h-5 w-5" />
                    Important Warnings
                  </p>
                  <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• mREITs (AGNC) can cut dividends 30-50% during financial crises</li>
                    <li>• Stock prices can drop 40-60% in bear markets</li>
                    <li>• Not suitable for retirees who depend on stable income</li>
                    <li>• Requires active monitoring and rebalancing</li>
                    <li>• Best for younger investors with high risk tolerance</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Your Free $1K/Month Portfolio Template"
          description="Downloadable spreadsheet with all 3 strategies, buying guide, and rebalancing calendar"
          buttonText="Download Portfolio Template"
          source="1000_month_portfolio_blog"
        />
      </div>

      {/* Step 3: How to Start */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step 3: Getting Started (Even With Less Capital)</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>If You Have $10,000-$50,000 Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                You won't hit $1,000/month immediately, but you can build toward it systematically:
              </p>

              <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-300 mb-6">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 min-w-[24px]">1.</span>
                  <span><strong>Start with SCHD or VYM</strong> - These ETFs give you instant diversification
                  for ~$180-200/share. Buy 1-2 shares per paycheck.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 min-w-[24px]">2.</span>
                  <span><strong>Add individual blue chips</strong> - Once you have 10-20 ETF shares, start
                  adding JNJ, PG, O. Target 3-5% of portfolio per stock.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 min-w-[24px]">3.</span>
                  <span><strong>Reinvest every dividend</strong> - Enable DRIP on all holdings. In the
                  accumulation phase, reinvest 100% of dividends.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 min-w-[24px]">4.</span>
                  <span><strong>Dollar-cost average</strong> - Invest a fixed amount every month regardless
                  of market conditions. $500-1,000/month builds wealth fast.</span>
                </li>
              </ol>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2">Example Path: $25K to $240K</p>
                <ul className="text-sm space-y-1">
                  <li>• Starting capital: $25,000 (4% yield = $1,000/year dividends)</li>
                  <li>• Monthly contribution: $1,000 ($12K/year)</li>
                  <li>• Annual dividend growth: 6%</li>
                  <li>• DRIP enabled (all dividends reinvested)</li>
                  <li>• <strong>Time to $240K: ~11 years</strong></li>
                  <li>• At that point: $12,000+/year dividend income ($1,000/month)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>If You Have $100,000-$200,000 Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                You're close! Here's how to reach $1,000/month faster:
              </p>

              <div className="space-y-3 text-sm">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold mb-1">With $100,000 at 5% yield:</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Current income: $5,000/year ($417/month)<br />
                    Add $800/month for 5 years + DRIP growth = <strong>$1,000/month achieved</strong>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold mb-1">With $150,000 at 5% yield:</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Current income: $7,500/year ($625/month)<br />
                    Add $600/month for 3 years + DRIP growth = <strong>$1,000/month achieved</strong>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <p className="font-semibold mb-1">With $200,000 at 5% yield:</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Current income: $10,000/year ($833/month)<br />
                    Add $400/month for 2 years + DRIP growth = <strong>$1,000/month achieved</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Brokers for Building Your Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You need a broker with $0 commissions, fractional shares, and automatic DRIP. These three
                are perfect:
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div>
                    <h4 className="font-bold">M1 Finance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Best for automatic investing + dividend reinvestment</p>
                    <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                      <li>✓ Fractional shares</li>
                      <li>✓ Auto-invest recurring deposits</li>
                      <li>✓ Dynamic rebalancing</li>
                    </ul>
                  </div>
                  <Link href="/brokers/m1-finance">
                    <Button>Open Account →</Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div>
                    <h4 className="font-bold">Fidelity</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Best research tools + dividend screeners</p>
                    <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                      <li>✓ Excellent dividend calendar</li>
                      <li>✓ Free fractional shares</li>
                      <li>✓ Top-tier customer service</li>
                    </ul>
                  </div>
                  <Link href="/brokers/fidelity">
                    <Button variant="outline">Open Account →</Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div>
                    <h4 className="font-bold">Charles Schwab</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Best all-around platform</p>
                    <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                      <li>✓ Fractional shares on S&P 500</li>
                      <li>✓ Dividend reinvestment</li>
                      <li>✓ Great mobile app</li>
                    </ul>
                  </div>
                  <Link href="/brokers/charles-schwab">
                    <Button variant="outline">Open Account →</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Questions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long does it take to build a $1,000/month portfolio?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your starting capital and monthly contributions. Starting from $0 with $1,500/month
                contributions: about 10-12 years. Starting with $100K and adding $800/month: about 5 years.
                Starting with $200K and adding $400/month: about 2-3 years. Use our <Link href="/stocks" className="text-blue-600 hover:underline">dividend calculator</Link> to model your specific situation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I focus on high-yield or dividend growth stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>It depends on your age and goals.</strong> If you're under 50 and building wealth, focus on
                dividend growth (4-6% yield with 8-10% annual increases). If you're retired and need income now,
                lean toward higher yields (5-7%) with proven safety. The balanced portfolio in this guide does both.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if I can't afford individual stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start with dividend ETFs like SCHD or VYM. Many brokers now offer fractional shares, so you can buy
                $50 of SCHD even though a full share costs $180. Build your ETF position first, then add individual
                stocks once you have more capital.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I pay taxes on dividends if I reinvest them?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, in taxable accounts. Even with DRIP, dividends are taxable the year received. However, if you
                build your portfolio in a Roth IRA, all dividends and growth are 100% tax-free forever. Max out your
                Roth IRA first ($7,000/year limit, $8,000 if 50+).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I use a Roth IRA or taxable account?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Both.</strong> Max out your Roth IRA first for tax-free growth. Put high-yield stocks (REITs,
                BDCs) in the Roth since they pay ordinary dividends. Once you max the Roth, use a taxable account
                and focus on qualified dividend stocks (JNJ, PG, KO) that get favorable 0-20% tax rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Action Plan */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-2xl">Your Action Plan: Start This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold">Calculate your target</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Decide: Conservative, Balanced, or Aggressive? Use the portfolio templates above.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold">Open a brokerage account</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    M1 Finance, Fidelity, or Schwab. Takes 10 minutes. Choose Roth IRA if eligible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold">Make your first purchase</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Start with SCHD or VYM if you're a beginner. Buy as much as you can afford.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold">Enable DRIP</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Set up automatic dividend reinvestment in your broker settings. Critical for compounding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="font-semibold">Set up automatic contributions</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Schedule $500-1,500/month auto-transfers from your bank. Make it automatic so you never skip.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <p className="font-semibold">Stay the course</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Review quarterly, rebalance annually, but otherwise don't touch it. Time + consistency = success.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Portfolio Strategies →
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

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Automate your dividend reinvestment</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Minimize taxes, keep more income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend Aristocrats</CardTitle>
                <CardDescription>25+ years of dividend increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
