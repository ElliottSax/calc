import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { InlineSignup } from '@/components/email/InlineSignup'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Star,
  Shield,
  Percent,
  Building2,
  Landmark,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Dividend Stocks for Retirement: 15 Safe Picks (2026)',
  description: 'The 15 safest dividend stocks for retirement income in 2026. Focused on consistency, moderate yield, and recession-proof sectors like healthcare, utilities, and consumer staples.',
  keywords: 'best dividend stocks retirement, safe dividend stocks, retirement dividend stocks, dividend stocks for retirees, reliable dividend stocks, defensive dividend stocks 2026',
  openGraph: {
    title: 'Best Dividend Stocks for Retirement: 15 Safe Picks',
    description: '15 battle-tested dividend stocks for safe, growing retirement income. Healthcare, utilities, and consumer staples picks.',
    type: 'article',
  }
}

export default function BestDividendStocksForRetirementPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">Stock Picks</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Best Dividend Stocks for Retirement: 15 Safe Picks
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Safety first. These 15 dividend stocks have survived recessions, pandemics, and market crashes
                  while consistently raising their payouts. The foundation of any retirement income portfolio.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>Updated: February 2026</span>
                  <span>-</span>
                  <span>16 min read</span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Picks
                  </span>
                </div>
              </div>

              {/* Selection Criteria */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Our Selection Criteria
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>10+ years</strong> of consecutive dividend increases</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payout ratio under 75%</strong> for safety margin</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>2.5%+ current yield</strong> for meaningful income</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Maintained dividends</strong> during 2020 COVID crash</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Strong credit rating</strong> (BBB+ or higher)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Recession-resistant</strong> business model</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Healthcare Picks */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Shield className="h-7 w-7 text-red-600" />
                    Healthcare (3 Picks)
                  </h2>
                  <p>
                    People need medicine and healthcare regardless of the economy. These stocks provide
                    recession-proof income with strong dividend growth.
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">1. Johnson & Johnson (JNJ)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Dividend King</Badge>
                              <Badge variant="outline">62 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">3.1%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 5.9%</div>
                          <div><strong>Payout Ratio:</strong> 44%</div>
                          <div><strong>Credit Rating:</strong> AAA</div>
                          <div><strong>Sector:</strong> Pharma/MedTech</div>
                        </div>
                        <p className="text-sm mb-0">
                          The gold standard of dividend safety. One of only two U.S. companies with an AAA credit
                          rating. JNJ has raised its dividend for 62 consecutive years through every recession,
                          pandemic, and market crash. The 2023 Kenvue spinoff refocused JNJ on higher-growth pharma
                          and medical devices.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">2. AbbVie (ABBV)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Dividend Aristocrat</Badge>
                              <Badge variant="outline">52 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">3.4%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 8.5%</div>
                          <div><strong>Payout Ratio:</strong> 48%</div>
                          <div><strong>Credit Rating:</strong> BBB+</div>
                          <div><strong>Sector:</strong> Pharma</div>
                        </div>
                        <p className="text-sm mb-0">
                          AbbVie offers higher yield plus faster dividend growth than most healthcare stocks.
                          Despite Humira patent expiration concerns, the company has successfully transitioned
                          to Skyrizi and Rinvoq, which are growing rapidly. The 52-year dividend streak
                          (including Abbott Labs history) demonstrates rock-solid commitment to shareholders.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">3. UnitedHealth Group (UNH)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">14 Years of Raises</Badge>
                              <Badge variant="outline">Best-in-Class Growth</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">1.5%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 14.5%</div>
                          <div><strong>Payout Ratio:</strong> 30%</div>
                          <div><strong>Credit Rating:</strong> A+</div>
                          <div><strong>Sector:</strong> Health Insurance</div>
                        </div>
                        <p className="text-sm mb-0">
                          Lower yield but explosive dividend growth. UNH has raised its dividend 14-16% annually
                          for over a decade. The 30% payout ratio means massive room for future raises. At this
                          growth rate, a 1.5% starting yield becomes 6% yield-on-cost in just 10 years. A
                          must-own for the growth portion of your retirement portfolio.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Consumer Staples */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-blue-600" />
                    Consumer Staples (4 Picks)
                  </h2>
                  <p>
                    People buy food, toothpaste, and laundry detergent in good times and bad. Consumer staples
                    are the ultimate recession-proof dividend stocks.
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">4. Procter & Gamble (PG)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Dividend King</Badge>
                              <Badge variant="outline">68 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">2.4%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 6.2%</div>
                          <div><strong>Payout Ratio:</strong> 60%</div>
                          <div><strong>Credit Rating:</strong> AA-</div>
                          <div><strong>Sector:</strong> Consumer Staples</div>
                        </div>
                        <p className="text-sm mb-0">
                          Owns Tide, Pampers, Gillette, Crest, and Bounty. These brands have pricing power
                          that lets PG raise prices (and dividends) even during inflation. 68 consecutive
                          years of dividend increases is nearly unmatched. A cornerstone holding for any
                          retirement portfolio.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">5. PepsiCo (PEP)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Dividend King</Badge>
                              <Badge variant="outline">52 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">2.8%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 7.1%</div>
                          <div><strong>Payout Ratio:</strong> 66%</div>
                          <div><strong>Credit Rating:</strong> A+</div>
                          <div><strong>Sector:</strong> Beverages/Snacks</div>
                        </div>
                        <p className="text-sm mb-0">
                          More diversified than Coca-Cola thanks to Frito-Lay snack brands (Doritos, Cheetos, Lay's).
                          Snacks generate higher margins and growth than beverages alone. PepsiCo provides slightly
                          higher yield and faster dividend growth than KO, making it the better pick for most retirees.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">6. Coca-Cola (KO)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Dividend King</Badge>
                              <Badge variant="outline">62 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">2.9%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 3.8%</div>
                          <div><strong>Payout Ratio:</strong> 73%</div>
                          <div><strong>Credit Rating:</strong> A+</div>
                          <div><strong>Sector:</strong> Beverages</div>
                        </div>
                        <p className="text-sm mb-0">
                          Warren Buffett's favorite dividend stock. Coca-Cola sells beverages in 200+ countries
                          and has raised its dividend for 62 straight years. Slightly higher payout ratio than PEP,
                          but the brand power is unmatched. Recession proof: people buy Coke no matter what the
                          economy does.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">7. Colgate-Palmolive (CL)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Dividend King</Badge>
                              <Badge variant="outline">61 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">2.2%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 3.2%</div>
                          <div><strong>Payout Ratio:</strong> 56%</div>
                          <div><strong>Credit Rating:</strong> AA-</div>
                          <div><strong>Sector:</strong> Consumer Staples</div>
                        </div>
                        <p className="text-sm mb-0">
                          The ultimate defensive stock. Colgate toothpaste holds 42% global market share. People
                          brush their teeth in recessions, pandemics, and wars. Lower yield but exceptional
                          stability -- CL dropped just 12% during the 2020 crash while the S&P 500 fell 34%.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Email Signup */}
                <section className="not-prose my-12">
                  <InlineSignup />
                </section>

                {/* Utilities */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Utilities (3 Picks)
                  </h2>
                  <p>
                    Regulated utilities provide essential services with government-approved rate increases.
                    Predictable earnings translate to predictable, growing dividends.
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">8. Duke Energy (DUK)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">19 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">4.2%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 2.1%</div>
                          <div><strong>Payout Ratio:</strong> 72%</div>
                          <div><strong>Credit Rating:</strong> A-</div>
                          <div><strong>Sector:</strong> Electric Utility</div>
                        </div>
                        <p className="text-sm mb-0">
                          One of America's largest electric utilities serving 8.2 million customers. Regulated
                          business model means predictable earnings and dividend raises. Investing heavily in
                          renewable energy and grid modernization, positioning for decades of rate base growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">9. Southern Company (SO)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">23 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">3.9%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 3.1%</div>
                          <div><strong>Payout Ratio:</strong> 68%</div>
                          <div><strong>Credit Rating:</strong> A-</div>
                          <div><strong>Sector:</strong> Electric/Gas Utility</div>
                        </div>
                        <p className="text-sm mb-0">
                          Serves 9 million customers across the Southeast United States. Benefits from population
                          growth in Sun Belt states. The completion of Plant Vogtle nuclear expansion adds reliable
                          baseload generation for decades. Higher yield than most utilities with solid growth.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">10. NextEra Energy (NEE)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">29 Years of Raises</Badge>
                              <Badge variant="outline">Growth Leader</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">2.8%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 10.2%</div>
                          <div><strong>Payout Ratio:</strong> 58%</div>
                          <div><strong>Credit Rating:</strong> A-</div>
                          <div><strong>Sector:</strong> Renewable Energy</div>
                        </div>
                        <p className="text-sm mb-0">
                          The world's largest generator of wind and solar energy. Combines regulated utility
                          stability (Florida Power & Light) with renewable energy growth. Has raised its dividend
                          10%+ per year for over a decade -- rare for a utility. Best utility for dividend growth
                          in retirement.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* REITs */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Landmark className="h-7 w-7 text-purple-600" />
                    REITs (3 Picks)
                  </h2>
                  <p>
                    Real estate investment trusts must pay 90% of taxable income as dividends. They provide
                    high yields with built-in inflation protection through rising rents.
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">11. Realty Income (O)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Monthly Dividends</Badge>
                              <Badge variant="outline">29 Years of Raises</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">5.5%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 2.8%</div>
                          <div><strong>Payout Ratio:</strong> 92%</div>
                          <div><strong>Credit Rating:</strong> A-</div>
                          <div><strong>Sector:</strong> Net Lease REIT</div>
                        </div>
                        <p className="text-sm mb-0">
                          The "Monthly Dividend Company" pays dividends every single month (not quarterly). Owns
                          15,000+ commercial properties leased to tenants like Walgreens, Dollar General, and FedEx
                          on long-term triple-net leases. Has paid 650+ consecutive monthly dividends and raised
                          108 times since going public in 1994.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">12. VICI Properties (VICI)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">100% Rent Collection</Badge>
                              <Badge variant="outline">Fast Growing</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">5.8%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 4.2%</div>
                          <div><strong>Payout Ratio:</strong> 90%</div>
                          <div><strong>Credit Rating:</strong> BBB+</div>
                          <div><strong>Sector:</strong> Gaming REIT</div>
                        </div>
                        <p className="text-sm mb-0">
                          Owns iconic properties like Caesars Palace, MGM Grand, and The Venetian on Las Vegas
                          Strip. Gaming REITs benefit from triple-net leases with built-in rent escalators (CPI-linked).
                          VICI maintained 100% rent collection even during COVID when casinos were closed. Faster
                          dividend growth than most REITs.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">13. W.P. Carey (WPC)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">Diversified REIT</Badge>
                              <Badge variant="outline">Global Portfolio</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">6.0%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 1.5%</div>
                          <div><strong>Payout Ratio:</strong> 88%</div>
                          <div><strong>Credit Rating:</strong> BBB+</div>
                          <div><strong>Sector:</strong> Diversified REIT</div>
                        </div>
                        <p className="text-sm mb-0">
                          Owns 1,400+ properties across industrial, warehouse, retail, and office sectors in
                          the U.S. and Europe. Geographic and sector diversification reduces risk. CPI-linked
                          rent escalators provide natural inflation protection. One of the higher-yielding
                          investment-grade REITs available.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Other Picks */}
                <section>
                  <h2 className="flex items-center gap-2">
                    <Star className="h-7 w-7 text-indigo-600" />
                    Other Essential Picks (2 More)
                  </h2>

                  <div className="space-y-4 my-6">
                    <Card className="border-l-4 border-l-indigo-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">14. Enterprise Products Partners (EPD)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">26 Years of Raises</Badge>
                              <Badge variant="outline">MLP</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">7.2%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 3.1%</div>
                          <div><strong>Payout Ratio:</strong> 85%</div>
                          <div><strong>Credit Rating:</strong> A-</div>
                          <div><strong>Sector:</strong> Midstream Energy</div>
                        </div>
                        <p className="text-sm mb-0">
                          America's largest midstream energy company with 50,000 miles of pipelines. EPD
                          earns fee-based revenue (toll-booth model) largely unaffected by oil price swings.
                          26 consecutive years of distribution increases. Note: MLPs issue K-1 tax forms
                          and distributions are mostly return of capital (tax-deferred).
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-indigo-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">15. BlackRock (BLK)</h3>
                            <div className="flex gap-2">
                              <Badge variant="outline">15 Years of Raises</Badge>
                              <Badge variant="outline">Asset Manager</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-green-600">2.4%</p>
                            <p className="text-xs text-slate-500">Yield</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
                          <div><strong>5Y Div Growth:</strong> 11.2%</div>
                          <div><strong>Payout Ratio:</strong> 42%</div>
                          <div><strong>Credit Rating:</strong> AA-</div>
                          <div><strong>Sector:</strong> Financials</div>
                        </div>
                        <p className="text-sm mb-0">
                          The world's largest asset manager with $10+ trillion under management. Owns iShares
                          (the dominant ETF brand). As retirement assets grow globally, BlackRock collects fees
                          on an ever-larger asset base. Exceptional dividend growth (11%+/year) with a low 42%
                          payout ratio means decades of raises ahead.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Summary Table */}
                <section>
                  <h2>Complete Summary Table</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="border p-2 text-left">#</th>
                          <th className="border p-2 text-left">Stock</th>
                          <th className="border p-2 text-center">Yield</th>
                          <th className="border p-2 text-center">5Y Growth</th>
                          <th className="border p-2 text-center">Streak</th>
                          <th className="border p-2 text-center">Sector</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">1</td><td className="border p-2 font-semibold">JNJ</td><td className="border p-2 text-center">3.1%</td><td className="border p-2 text-center">5.9%</td><td className="border p-2 text-center">62 yr</td><td className="border p-2 text-center">Healthcare</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">2</td><td className="border p-2 font-semibold">ABBV</td><td className="border p-2 text-center">3.4%</td><td className="border p-2 text-center">8.5%</td><td className="border p-2 text-center">52 yr</td><td className="border p-2 text-center">Healthcare</td></tr>
                        <tr><td className="border p-2">3</td><td className="border p-2 font-semibold">UNH</td><td className="border p-2 text-center">1.5%</td><td className="border p-2 text-center">14.5%</td><td className="border p-2 text-center">14 yr</td><td className="border p-2 text-center">Healthcare</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">4</td><td className="border p-2 font-semibold">PG</td><td className="border p-2 text-center">2.4%</td><td className="border p-2 text-center">6.2%</td><td className="border p-2 text-center">68 yr</td><td className="border p-2 text-center">Staples</td></tr>
                        <tr><td className="border p-2">5</td><td className="border p-2 font-semibold">PEP</td><td className="border p-2 text-center">2.8%</td><td className="border p-2 text-center">7.1%</td><td className="border p-2 text-center">52 yr</td><td className="border p-2 text-center">Staples</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">6</td><td className="border p-2 font-semibold">KO</td><td className="border p-2 text-center">2.9%</td><td className="border p-2 text-center">3.8%</td><td className="border p-2 text-center">62 yr</td><td className="border p-2 text-center">Staples</td></tr>
                        <tr><td className="border p-2">7</td><td className="border p-2 font-semibold">CL</td><td className="border p-2 text-center">2.2%</td><td className="border p-2 text-center">3.2%</td><td className="border p-2 text-center">61 yr</td><td className="border p-2 text-center">Staples</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">8</td><td className="border p-2 font-semibold">DUK</td><td className="border p-2 text-center">4.2%</td><td className="border p-2 text-center">2.1%</td><td className="border p-2 text-center">19 yr</td><td className="border p-2 text-center">Utility</td></tr>
                        <tr><td className="border p-2">9</td><td className="border p-2 font-semibold">SO</td><td className="border p-2 text-center">3.9%</td><td className="border p-2 text-center">3.1%</td><td className="border p-2 text-center">23 yr</td><td className="border p-2 text-center">Utility</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">10</td><td className="border p-2 font-semibold">NEE</td><td className="border p-2 text-center">2.8%</td><td className="border p-2 text-center">10.2%</td><td className="border p-2 text-center">29 yr</td><td className="border p-2 text-center">Utility</td></tr>
                        <tr><td className="border p-2">11</td><td className="border p-2 font-semibold">O</td><td className="border p-2 text-center">5.5%</td><td className="border p-2 text-center">2.8%</td><td className="border p-2 text-center">29 yr</td><td className="border p-2 text-center">REIT</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">12</td><td className="border p-2 font-semibold">VICI</td><td className="border p-2 text-center">5.8%</td><td className="border p-2 text-center">4.2%</td><td className="border p-2 text-center">6 yr</td><td className="border p-2 text-center">REIT</td></tr>
                        <tr><td className="border p-2">13</td><td className="border p-2 font-semibold">WPC</td><td className="border p-2 text-center">6.0%</td><td className="border p-2 text-center">1.5%</td><td className="border p-2 text-center">25 yr</td><td className="border p-2 text-center">REIT</td></tr>
                        <tr className="bg-slate-50 dark:bg-slate-900/50"><td className="border p-2">14</td><td className="border p-2 font-semibold">EPD</td><td className="border p-2 text-center">7.2%</td><td className="border p-2 text-center">3.1%</td><td className="border p-2 text-center">26 yr</td><td className="border p-2 text-center">Energy</td></tr>
                        <tr><td className="border p-2">15</td><td className="border p-2 font-semibold">BLK</td><td className="border p-2 text-center">2.4%</td><td className="border p-2 text-center">11.2%</td><td className="border p-2 text-center">15 yr</td><td className="border p-2 text-center">Financial</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">How many dividend stocks should a retiree own?</h3>
                        <p className="text-sm mb-0">
                          15-25 individual stocks across at least 5 sectors provides optimal diversification.
                          Fewer than 10 stocks creates concentration risk. More than 30 becomes difficult to
                          monitor. Supplement with 2-3 dividend ETFs (like SCHD) for broader exposure.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Are these stocks safe from dividend cuts?</h3>
                        <p className="text-sm mb-0">
                          No stock is 100% guaranteed, but these 15 picks have the highest probability of
                          maintaining and raising dividends. They survived 2008, 2020, and the 2022 bear market
                          without cuts. The key is diversification -- even if one stock cuts, the other 14
                          keep paying and raising.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">Should I buy these stocks or just buy SCHD?</h3>
                        <p className="text-sm mb-0">
                          Both work. SCHD gives instant diversification across 100+ dividend stocks for zero
                          effort. Individual stocks let you overweight the highest-quality names and customize
                          your yield. The best approach: 40-50% in SCHD/VIG for the core, plus 50-60% in your
                          top individual picks from this list.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-base mb-2">What yield should a retiree target?</h3>
                        <p className="text-sm mb-0">
                          3.5-4.5% blended yield is ideal for most retirees. Below 3% means you need a very
                          large portfolio. Above 5% introduces dividend cut risk and limited growth. The stocks
                          in this list range from 1.5% to 7.2%, blending to roughly 3.8% weighted average with
                          excellent growth potential.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Build Your Retirement Dividend Portfolio</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to model these stocks in your portfolio and project
                        your future dividend income.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/yield-on-cost">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <Percent className="h-5 w-5" />
                            Yield-on-Cost Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section>
                  <h2 id="brokers">Best Brokers for Retirement Dividend Investing</h2>
                  <p>
                    Open an account with a broker that offers free DRIP, zero commissions, and strong
                    retirement account options.
                  </p>
                  <BrokerComparisonTable />
                </section>
              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/how-much-to-retire-on-dividends" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How Much Do You Need to Retire on Dividends?
                    </Link>
                    <Link href="/blog/dividend-income-in-retirement" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Income in Retirement: Complete Strategy Guide
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-roth-ira" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Roth IRA
                    </Link>
                    <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete List of Dividend Aristocrats (2026)
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
