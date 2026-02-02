import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, PieChart, DollarSign, Shield, CheckCircle2, AlertTriangle } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Top 10 Dividend ETFs for 2026: Best Passive Income Funds',
  description: 'Discover the best dividend ETFs offering diversification, low fees, and reliable income. Compare yields, expense ratios, and dividend growth for top-performing funds.',
}

export default function TopDividendETFs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <PieChart className="h-3 w-3 mr-1" />
          Instant Diversification
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Top 10 Dividend ETFs for 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Get exposure to hundreds of dividend-paying stocks with a single purchase.
          Lower risk, lower effort, consistent passive income.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <PieChart className="h-10 w-10 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Stocks in top ETFs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">2-4%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Typical yield range</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-10 w-10 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold">0.03%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Lowest expense ratio</p>
          </CardContent>
        </Card>
      </div>

      {/* Why ETFs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Dividend ETFs Over Individual Stocks?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Instant Diversification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                One ETF purchase gives you exposure to 50-500+ dividend stocks. No need to research
                and buy dozens of individual companies. Dramatically reduces single-stock risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Professional Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                ETF providers continuously monitor holdings, rebalance portfolios, and remove
                underperforming stocks. You benefit from professional oversight without paying
                advisor fees.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Lower Effort</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                No need to track dozens of ex-dividend dates, earnings reports, or dividend
                announcements. The ETF handles everything. Perfect for passive investors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Automatic Reinvestment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Enable DRIP and dividends automatically buy more ETF shares. With fractional shares,
                every penny gets reinvested—no cash sitting idle.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">💡 Real Example:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Buying shares of the top 10 dividend aristocrats individually would require 10 trades
              and ~$1,500 minimum investment. One share of VIG (dividend growth ETF) gives you exposure
              to 300+ dividend growers for ~$180. That's instant diversification at a fraction of the cost.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Top 10 ETFs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Dividend ETFs for 2026</h2>

        <div className="space-y-8">
          {/* VYM */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. Vanguard High Dividend Yield (VYM)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Best overall dividend ETF - low cost, broad diversification
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-green-600">
                  2.8% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expense Ratio</p>
                  <p className="font-semibold">0.06%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Holdings</p>
                  <p className="font-semibold">500+ stocks</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$54B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Frequency</p>
                  <p className="font-semibold">Quarterly</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's #1:</strong> VYM is the gold standard for dividend ETFs. It tracks 500+
                high-yielding U.S. stocks with proven track records. Ultra-low 0.06% expense ratio means
                you keep almost all returns. Broad diversification across sectors. Perfect core holding.
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Top Holdings:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• Broadcom (3.8%) - Tech dividend</li>
                  <li>• JPMorgan Chase (3.5%) - Financial</li>
                  <li>• Exxon Mobil (3.2%) - Energy</li>
                  <li>• Johnson & Johnson (2.8%) - Healthcare</li>
                  <li>• Procter & Gamble (2.4%) - Consumer staples</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-green-600 border-green-600">Best Overall</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">Low Cost</Badge>
                <Badge variant="outline">High Volume</Badge>
              </div>
            </CardContent>
          </Card>

          {/* SCHD */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. Schwab U.S. Dividend Equity (SCHD)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Best for dividend growth - quality + yield focus
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-blue-600">
                  3.5% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expense Ratio</p>
                  <p className="font-semibold">0.06%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Holdings</p>
                  <p className="font-semibold">100 stocks</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$62B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">10-Yr CAGR</p>
                  <p className="font-semibold text-green-600">13.2%</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> SCHD focuses on high-quality dividend growers, not just
                high yields. Screens for financial strength, dividend consistency, and profitability.
                Has outperformed VYM and SPY over the past decade. Higher yield than VYM with similar safety.
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Quality Criteria:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• 10+ consecutive years of dividend payments</li>
                  <li>• Strong cash flow to dividend ratio</li>
                  <li>• High return on equity (ROE)</li>
                  <li>• Low debt levels</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-blue-600 border-blue-600">Dividend Growth</Badge>
                <Badge variant="outline" className="text-green-600 border-green-600">High Quality</Badge>
                <Badge variant="outline">Top Performer</Badge>
              </div>
            </CardContent>
          </Card>

          {/* VIG */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. Vanguard Dividend Appreciation (VIG)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Best for dividend growth - 10+ years of increases required
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-purple-600">
                  2.0% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expense Ratio</p>
                  <p className="font-semibold">0.06%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Holdings</p>
                  <p className="font-semibold">330+ stocks</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$82B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Div Growth</p>
                  <p className="font-semibold text-green-600">9.5%/year</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> VIG only includes stocks with 10+ consecutive years of
                dividend increases. Lower current yield but much faster dividend growth. Best for younger
                investors building long-term income. Essentially holds dividend aristocrat candidates.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-purple-600 border-purple-600">Growth Focus</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">Quality Screened</Badge>
                <Badge variant="outline">Large Fund</Badge>
              </div>
            </CardContent>
          </Card>

          {/* DGRO */}
          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. iShares Core Dividend Growth (DGRO)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Best balanced approach - quality + growth + yield
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-teal-600">
                  2.4% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expense Ratio</p>
                  <p className="font-semibold">0.08%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Holdings</p>
                  <p className="font-semibold">400+ stocks</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$30B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Min History</p>
                  <p className="font-semibold">5 years</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> DGRO requires only 5 years of dividend growth (vs 10 for VIG),
                allowing inclusion of faster-growing younger companies. Good middle ground between yield-focused
                and growth-focused approaches. Solid diversification with 400+ holdings.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-teal-600 border-teal-600">Balanced</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">Broad Holdings</Badge>
              </div>
            </CardContent>
          </Card>

          {/* SDY */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. SPDR S&P Dividend (SDY)</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Best for dividend aristocrat exposure - 20+ years required
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1 bg-orange-600">
                  2.6% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expense Ratio</p>
                  <p className="font-semibold">0.35%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Holdings</p>
                  <p className="font-semibold">130 stocks</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$21B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Min History</p>
                  <p className="font-semibold">20 years</p>
                </div>
              </div>

              <p className="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Why it's great:</strong> SDY has the strictest requirements—20+ consecutive years of
                dividend increases. Essentially holds near-aristocrats and aristocrats. Most conservative
                dividend ETF. Higher expense ratio than Vanguard/Schwab but ultra-safe holdings.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-orange-600 border-orange-600">Ultra-Safe</Badge>
                <Badge variant="outline" className="text-green-600 border-green-600">Aristocrat Focus</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Comparison Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Comparison: Top 10 Dividend ETFs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">ETF</th>
                    <th className="text-left p-2">Ticker</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">Expense</th>
                    <th className="text-left p-2">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Vanguard High Dividend</td><td className="p-2 font-mono">VYM</td><td className="p-2 text-right">2.8%</td><td className="p-2 text-right">0.06%</td><td className="p-2">Overall best</td></tr>
                  <tr className="border-b"><td className="p-2">Schwab Dividend Equity</td><td className="p-2 font-mono">SCHD</td><td className="p-2 text-right">3.5%</td><td className="p-2 text-right">0.06%</td><td className="p-2">Quality + yield</td></tr>
                  <tr className="border-b"><td className="p-2">Vanguard Dividend Appreciation</td><td className="p-2 font-mono">VIG</td><td className="p-2 text-right">2.0%</td><td className="p-2 text-right">0.06%</td><td className="p-2">Growth</td></tr>
                  <tr className="border-b"><td className="p-2">iShares Dividend Growth</td><td className="p-2 font-mono">DGRO</td><td className="p-2 text-right">2.4%</td><td className="p-2 text-right">0.08%</td><td className="p-2">Balanced</td></tr>
                  <tr className="border-b"><td className="p-2">SPDR S&P Dividend</td><td className="p-2 font-mono">SDY</td><td className="p-2 text-right">2.6%</td><td className="p-2 text-right">0.35%</td><td className="p-2">Safety</td></tr>
                  <tr className="border-b"><td className="p-2">Vanguard Dividend Yield</td><td className="p-2 font-mono">VYM</td><td className="p-2 text-right">2.8%</td><td className="p-2 text-right">0.06%</td><td className="p-2">Low cost</td></tr>
                  <tr className="border-b"><td className="p-2">iShares Select Dividend</td><td className="p-2 font-mono">DVY</td><td className="p-2 text-right">3.4%</td><td className="p-2 text-right">0.38%</td><td className="p-2">High yield</td></tr>
                  <tr className="border-b"><td className="p-2">ProShares S&P 500 Dividend</td><td className="p-2 font-mono">NOBL</td><td className="p-2 text-right">2.1%</td><td className="p-2 text-right">0.35%</td><td className="p-2">Aristocrats only</td></tr>
                  <tr className="border-b"><td className="p-2">WisdomTree U.S. Quality</td><td className="p-2 font-mono">DGRW</td><td className="p-2 text-right">1.8%</td><td className="p-2 text-right">0.28%</td><td className="p-2">Quality growth</td></tr>
                  <tr><td className="p-2">First Trust Value Line</td><td className="p-2 font-mono">FVD</td><td className="p-2 text-right">2.9%</td><td className="p-2 text-right">0.70%</td><td className="p-2">Value focus</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email CTA */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Free ETF Comparison Guide"
          description="Complete analysis of 25+ dividend ETFs with performance data and portfolio recommendations"
          buttonText="Download Free Guide"
          source="dividend_etf_blog"
        />
      </div>

      {/* How to Choose */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Choose the Right Dividend ETF</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>By Age & Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Ages 20-40 (Building Wealth)</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Focus on dividend <strong>growth</strong>, not current yield. You want dividends that
                    increase 8-10% annually over decades.
                  </p>
                  <p className="text-sm font-semibold">Recommended: VIG or DGRO</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Ages 40-55 (Accumulation)</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Balance between current yield and growth. You're getting closer to needing income
                    but still have time for compounding.
                  </p>
                  <p className="text-sm font-semibold">Recommended: SCHD or DGRO</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Ages 55-70 (Pre-Retirement)</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Shift toward higher current yield while maintaining quality. You'll start drawing
                    income soon, so reliability matters more than growth.
                  </p>
                  <p className="text-sm font-semibold">Recommended: VYM or SDY</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Ages 70+ (Retirement)</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Maximize safe income. Prioritize stable, high-quality dividends over growth.
                    Capital preservation is key.
                  </p>
                  <p className="text-sm font-semibold">Recommended: SDY or VYM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>By Portfolio Size</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Under $10K:</strong> Start with one core ETF (VYM or SCHD). Simple and effective.</li>
                <li><strong>$10K-$50K:</strong> 2-3 ETFs. Core holding (70%) + growth/specialty (30%).</li>
                <li><strong>$50K-$100K:</strong> 3-5 ETFs. Mix growth, yield, and sector-specific.</li>
                <li><strong>$100K+:</strong> Can add individual stocks alongside ETFs for customization.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample Portfolios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample ETF Portfolios</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>The Simplest Portfolio</CardTitle>
              <CardDescription>One ETF, maximum simplicity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-semibold">100% SCHD</span>
                  <span className="text-slate-600">3.5% yield</span>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Perfect for beginners or hands-off investors. SCHD offers quality, yield, and growth
                in one package. Just buy, enable DRIP, and forget about it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Growth Portfolio</CardTitle>
              <CardDescription>Younger investors (under 45)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>60% VIG (Dividend Growth)</span>
                  <span className="text-slate-600">2.0% yield</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>30% SCHD (Quality + Yield)</span>
                  <span className="text-slate-600">3.5% yield</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>10% NOBL (Aristocrats)</span>
                  <span className="text-slate-600">2.1% yield</span>
                </div>
              </div>
              <p className="text-sm font-semibold mb-2">Portfolio Yield: 2.4%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Emphasizes dividend growth over current yield. Your income will compound significantly
                over 20-30 years as dividends increase 8-10% annually.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Balanced Portfolio</CardTitle>
              <CardDescription>Ages 45-60</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>40% VYM (High Yield)</span>
                  <span className="text-slate-600">2.8% yield</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>40% SCHD (Quality)</span>
                  <span className="text-slate-600">3.5% yield</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>20% VIG (Growth)</span>
                  <span className="text-slate-600">2.0% yield</span>
                </div>
              </div>
              <p className="text-sm font-semibold mb-2">Portfolio Yield: 2.9%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Good mix of current income and future growth. Provides reliable cash flow today while
                still building for retirement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Income Portfolio</CardTitle>
              <CardDescription>Retirees and income-focused</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>50% VYM (High Yield)</span>
                  <span className="text-slate-600">2.8% yield</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>30% SDY (Safety)</span>
                  <span className="text-slate-600">2.6% yield</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>20% DVY (Select Dividend)</span>
                  <span className="text-slate-600">3.4% yield</span>
                </div>
              </div>
              <p className="text-sm font-semibold mb-2">Portfolio Yield: 2.9%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Maximizes current income while maintaining safety. All ETFs focus on established,
                reliable dividend payers. Lower growth but very stable.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ETFs vs Individual Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Should You Use ETFs, Individual Stocks, or Both?</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>100% ETFs</CardTitle>
              <Badge variant="outline" className="ml-2">Best for most investors</Badge>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Pros:</p>
                  <ul className="text-sm space-y-1">
                    <li>✓ Minimal effort required</li>
                    <li>✓ Automatic diversification</li>
                    <li>✓ Lower single-stock risk</li>
                    <li>✓ Professional management</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-600 mb-2">Cons:</p>
                  <ul className="text-sm space-y-1">
                    <li>✗ Small annual expense fees</li>
                    <li>✗ Less control over holdings</li>
                    <li>✗ Can't avoid specific companies</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best for:</strong> Beginners, busy professionals, hands-off investors, small portfolios under $50K.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>100% Individual Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Pros:</p>
                  <ul className="text-sm space-y-1">
                    <li>✓ Complete control</li>
                    <li>✓ No expense ratios</li>
                    <li>✓ Can customize exactly</li>
                    <li>✓ Tax-loss harvest individual positions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-600 mb-2">Cons:</p>
                  <ul className="text-sm space-y-1">
                    <li>✗ Much more research required</li>
                    <li>✗ Higher single-stock risk</li>
                    <li>✗ Need 20-30 stocks to diversify</li>
                    <li>✗ Constant monitoring needed</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best for:</strong> Experienced investors, those who enjoy research, large portfolios $100K+.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500">
            <CardHeader>
              <CardTitle>Hybrid Approach (80% ETFs + 20% Stocks)</CardTitle>
              <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-600">Sweet spot</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                Use ETFs as your core foundation (80%), then add individual dividend aristocrats you
                personally believe in (20%). This gives you diversification and simplicity while allowing
                some customization.
              </p>
              <p className="text-sm font-semibold mb-2">Example $100K Portfolio:</p>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>• $50K in SCHD (50%)</li>
                <li>• $30K in VYM (30%)</li>
                <li>• $5K each in JNJ, PG, KO, ABBV (20% individual stocks)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Risks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-8 w-8 text-yellow-600" />
          What Could Go Wrong?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle>Market Downturns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividend ETFs still drop 30-50% during bear markets. They're less volatile than growth stocks
                but not immune. The dividends help cushion losses but don't prevent them.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle>Dividend Cuts During Recessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Even quality dividend ETFs saw 10-20% dividend reductions during COVID and 2008.
                Companies cut dividends to preserve cash. It's temporary but painful if you rely on the income.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle>Sector Concentration Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Many dividend ETFs overweight financials, utilities, and consumer staples. If these sectors
                underperform, your entire portfolio suffers. Check sector allocation before buying.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Lower Total Returns Than S&P 500</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dividend ETFs often underperform the S&P 500 during bull markets (no FAANG exposure).
                You're trading some growth potential for more consistent income. That's the tradeoff.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brokers */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-2xl">Best Brokers for Dividend ETFs</CardTitle>
            <CardDescription>All offer $0 commissions on ETF trades</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Since ETFs trade like stocks, any broker with $0 commissions works great. Key features to look for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>$0 commissions on all ETFs (now standard)</li>
              <li>Automatic DRIP for fractional shares</li>
              <li>No account minimums</li>
              <li>Good research tools for comparing ETFs</li>
            </ul>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">M1 Finance</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best for automatic ETF investing + fractional shares</p>
                </div>
                <Link href="/brokers/m1-finance">
                  <Button>Open Account →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Fidelity</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best ETF research tools and screeners</p>
                </div>
                <Link href="/brokers/fidelity">
                  <Button variant="outline">Open Account →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Charles Schwab</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Most comprehensive platform</p>
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
              <CardTitle className="text-lg">What's the best dividend ETF for beginners?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>SCHD</strong> is the best starting point. It offers a good balance of yield (3.5%), quality screening,
                low costs (0.06%), and has outperformed most alternatives over the past decade. If you can only buy one,
                make it SCHD.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are dividend ETFs good for retirement accounts?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, excellent. In a Roth IRA or traditional IRA, dividends grow tax-free or tax-deferred. You can
                reinvest dividends without paying taxes each year, maximizing compounding. Just make sure to use DRIP
                to automatically reinvest.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much should I invest in dividend ETFs vs growth stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A common approach: <strong>Your age in dividend ETFs, rest in growth</strong>. So at age 30, 30% dividend
                ETFs + 70% growth. At age 60, 60% dividend ETFs + 40% growth. This gradually shifts from growth to income
                as you approach retirement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do expense ratios really matter?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Absolutely. A 0.50% expense ratio vs 0.06% costs you <strong>$4,400 per $100K over 30 years</strong>
                (assuming 7% returns). Stick with Vanguard, Schwab, and iShares Core ETFs that charge 0.03-0.08%.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Avoid actively managed dividend ETFs charging 0.50%+ unless they consistently outperform by more than
                the fee difference (most don't).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I live off dividend ETF income?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, but you need significant capital. At 3% yield, you need about <strong>$1 million to generate
                $30,000/year</strong> in dividends. At 4% yield, $750K for $30K annually. Many retirees combine dividend
                income with Social Security and pensions to cover expenses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Building Dividend Income?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Dividend ETFs offer an easy way to build passive income without picking individual stocks. Start with
              SCHD or VYM, enable DRIP, and let compounding do the heavy lifting. Even small monthly investments
              can grow into substantial income streams over decades.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">
                  Compare Dividend Strategies →
                </Button>
              </Link>
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Browse Individual Dividend Stocks →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-monthly-dividend-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Monthly Dividend Stocks 2026</CardTitle>
                <CardDescription>Get paid 12 times per year instead of 4</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/high-yield-vs-growth-dividends">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">High-Yield vs Growth Dividends</CardTitle>
                <CardDescription>Which strategy wins over 20 years?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Automate your wealth building</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend Aristocrats</CardTitle>
                <CardDescription>25+ years of consecutive increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
