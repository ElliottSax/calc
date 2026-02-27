import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ArrowRight, Award, Calendar, DollarSign, Shield, StockCard, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top 10 Dividend Aristocrats for 2026 - Complete Analysis & Rankings',
  description: 'Discover the best dividend aristocrats with 25+ years of consecutive dividend increases. Complete analysis of yields, growth rates, and safety scores for 2026.',
  keywords: 'dividend aristocrats, best dividend stocks 2026, reliable dividends, dividend kings, passive income stocks',
}

export default function DividendAristocratsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-12">
                <Badge className="mb-4">Stock Analysis • Updated February 2026</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Top 10 Dividend Aristocrats for 2026
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  The ultimate list of stocks with 25+ years of consecutive dividend increases.
                  Battle-tested companies that pay you more every single year.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>10 min read</span>
                  <span>•</span>
                  <span>Expert analysis</span>
                </div>
              </div>

              {/* What Are Dividend Aristocrats */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <h2 className="flex items-center gap-2">
                  <Award className="h-7 w-7 text-yellow-600" />
                  What Are Dividend Aristocrats?
                </h2>
                <p>
                  Dividend Aristocrats are elite companies in the S&P 500 that have increased their
                  dividends for at least 25 consecutive years. These aren't just companies that pay
                  dividends - they're companies that prove year after year that their business is
                  strong enough to pay shareholders MORE.
                </p>

                <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-3">Why Aristocrats Matter</h3>
                    <ul className="space-y-2 mb-0">
                      <li><strong>Proven resilience:</strong> Survived multiple recessions while still increasing dividends</li>
                      <li><strong>Compound growth:</strong> Your income grows automatically every year</li>
                      <li><strong>Lower volatility:</strong> Aristocrats are 20-30% less volatile than the S&P 500</li>
                      <li><strong>Better returns:</strong> Aristocrats have outperformed the S&P 500 historically</li>
                    </ul>
                  </CardContent>
                </Card>

                <h2>Our Selection Criteria</h2>
                <p>We ranked aristocrats based on:</p>
                <ol>
                  <li><strong>Dividend Safety (40%):</strong> Payout ratio, cash flow, debt levels</li>
                  <li><strong>Dividend Growth (30%):</strong> 5-year dividend growth rate</li>
                  <li><strong>Current Yield (20%):</strong> Income generation today</li>
                  <li><strong>Business Quality (10%):</strong> Competitive moat, market position</li>
                </ol>
              </div>

              {/* Top 10 List */}
              <div className="space-y-8 mb-12">
                <h2 className="text-3xl font-bold">Top 10 Dividend Aristocrats</h2>

                {/* #1 */}
                <StockCard
                  rank={1}
                  ticker="PG"
                  name="Procter & Gamble"
                  years={68}
                  yield={2.40}
                  growth={4.5}
                  safety="A+"
                  description="The king of dividend aristocrats with 68 consecutive years of increases. P&G owns iconic brands like Tide, Pampers, and Gillette that people buy in good times and bad."
                  pros={[
                    "Longest track record (68 years)",
                    "Recession-resistant consumer staples",
                    "Global diversification (180+ countries)",
                    "Strong pricing power"
                  ]}
                  cons={[
                    "Modest yield compared to some peers",
                    "Slower revenue growth",
                    "Stock can be expensive during bull markets"
                  ]}
                />

                {/* #2 */}
                <StockCard
                  rank={2}
                  ticker="JNJ"
                  name="Johnson & Johnson"
                  years={62}
                  yield={2.94}
                  growth={5.9}
                  safety="A+"
                  description="Healthcare giant with 62 years of dividend growth. Triple threat: Pharmaceuticals, medical devices, and consumer health products."
                  pros={[
                    "Diversified healthcare exposure",
                    "Strong pharmaceutical pipeline",
                    "AAA credit rating",
                    "Consistent 5-6% dividend growth"
                  ]}
                  cons={[
                    "Legal liabilities from talc litigation",
                    "Patent cliffs on some drugs",
                    "Consumer health spin-off changes structure"
                  ]}
                />

                {/* #3 */}
                <StockCard
                  rank={3}
                  ticker="KO"
                  name="The Coca-Cola Company"
                  years={62}
                  yield={3.08}
                  growth={3.2}
                  safety="A"
                  description="The world's most recognized beverage brand. Coca-Cola has been paying dividends since 1920 and increasing them for 62 straight years."
                  pros={[
                    "Unmatched global brand recognition",
                    "3%+ yield with steady growth",
                    "Pricing power in inflationary environments",
                    "Adapting to healthier beverage trends"
                  ]}
                  cons={[
                    "Slower growth as mature company",
                    "Sugar tax risks in some markets",
                    "Shift away from sugary drinks",
                    "Currency headwinds from strong dollar"
                  ]}
                />

                {/* #4 */}
                <StockCard
                  rank={4}
                  ticker="MMM"
                  name="3M Company"
                  years={66}
                  yield={5.71}
                  safety="B+"
                  growth={1.5}
                  description="Industrial conglomerate with the highest yield on our list at 5.71%. Known for Post-it Notes, Scotch Tape, and thousands of industrial products."
                  pros={[
                    "Highest yield among aristocrats (5.71%)",
                    "66 years of dividend increases",
                    "Diversified across 50+ industries",
                    "Strong innovation culture (60,000+ patents)"
                  ]}
                  cons={[
                    "Legal issues (PFAS 'forever chemicals')",
                    "Slower dividend growth recently",
                    "High payout ratio",
                    "Stock down significantly from highs"
                  ]}
                />

                {/* #5 */}
                <StockCard
                  rank={5}
                  ticker="ABBV"
                  name="AbbVie Inc."
                  years={52}
                  yield={3.54}
                  growth={10.5}
                  safety="A-"
                  description="Pharmaceutical powerhouse spun off from Abbott Labs. Known for Humira (world's top-selling drug) and strong pipeline."
                  pros={[
                    "High dividend growth (10.5% 5-year avg)",
                    "Strong drug pipeline beyond Humira",
                    "3.5%+ yield",
                    "Consistent cash flow generation"
                  ]}
                  cons={[
                    "Humira patent expiration (biosimilar competition)",
                    "High debt from acquisitions",
                    "Pharmaceutical pricing pressure",
                    "Concentrated revenue in few drugs"
                  ]}
                />

                {/* #6 */}
                <StockCard
                  rank={6}
                  ticker="LOW"
                  name="Lowe's Companies"
                  years={61}
                  yield={1.77}
                  growth={15.2}
                  safety="A"
                  description="Home improvement retailer with 61 years of increases and the fastest dividend growth on our list at 15.2%."
                  pros={[
                    "Fastest dividend growth (15.2%!)",
                    "Housing market tailwinds",
                    "E-commerce growth",
                    "Professional contractor focus"
                  ]}
                  cons={[
                    "Lower starting yield (1.77%)",
                    "Cyclical business tied to housing",
                    "Competition from Home Depot",
                    "Economic sensitivity"
                  ]}
                />

                {/* #7 */}
                <StockCard
                  rank={7}
                  ticker="CAT"
                  name="Caterpillar Inc."
                  years={31}
                  yield={1.46}
                  growth={6.8}
                  safety="A-"
                  description="Heavy equipment manufacturer benefiting from infrastructure spending globally. The yellow machines you see at every construction site."
                  pros={[
                    "Infrastructure spending tailwinds",
                    "Global market leader",
                    "Aftermarket parts (high margin)",
                    "Energy transition opportunities"
                  ]}
                  cons={[
                    "Cyclical industry",
                    "Lower yield (1.46%)",
                    "Economic downturn sensitivity",
                    "Geographic concentration risk"
                  ]}
                />

                {/* #8 */}
                <StockCard
                  rank={8}
                  ticker="PEP"
                  name="PepsiCo Inc."
                  years={52}
                  yield={2.89}
                  growth={7.2}
                  safety="A"
                  description="More than just Pepsi - owns Frito-Lay, Gatorade, Quaker, and Tropicana. 52 years of dividend growth with better balance than Coca-Cola."
                  pros={[
                    "Diversified beyond beverages (snacks are 55% of revenue)",
                    "Strong dividend growth (7.2%)",
                    "Nearly 3% yield",
                    "Less sugar-dependent than Coca-Cola"
                  ]}
                  cons={[
                    "Health trends against sugary/salty products",
                    "Currency headwinds",
                    "Intense competition",
                    "Slower revenue growth"
                  ]}
                />

                {/* #9 */}
                <StockCard
                  rank={9}
                  ticker="HD"
                  name="The Home Depot"
                  years={14}
                  yield={2.17}
                  growth={12.5}
                  safety="A"
                  description="Not officially an aristocrat yet (only 14 years), but growing dividends faster than almost anyone at 12.5% annually."
                  pros={[
                    "Exceptional dividend growth (12.5%)",
                    "Housing market leader",
                    "Professional contractor focus",
                    "Best-in-class execution"
                  ]}
                  cons={[
                    "Not yet a true aristocrat (14 years vs 25+)",
                    "Cyclical housing exposure",
                    "High valuation at times",
                    "Interest rate sensitivity"
                  ]}
                />

                {/* #10 */}
                <StockCard
                  rank={10}
                  ticker="ITW"
                  name="Illinois Tool Works"
                  years={61}
                  yield={2.12}
                  growth={6.5}
                  safety="A"
                  description="Industrial products manufacturer with 61 years of increases. Makes everything from automotive fasteners to food equipment."
                  pros={[
                    "61 years of dividend increases",
                    "Strong margin improvement",
                    "Diversified end markets",
                    "Disciplined capital allocation"
                  ]}
                  cons={[
                    "Lower yield (2.12%)",
                    "Industrial cyclicality",
                    "Slower revenue growth",
                    "Acquisition integration risks"
                  ]}
                />
              </div>

              {/* Portfolio Strategy */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <h2>How to Build a Dividend Aristocrat Portfolio</h2>

                <h3>Strategy 1: The Income Portfolio</h3>
                <p><strong>Goal:</strong> Maximum current income</p>
                <p><strong>Allocation:</strong></p>
                <ul>
                  <li>30% - MMM (5.71% yield)</li>
                  <li>25% - ABBV (3.54% yield)</li>
                  <li>20% - KO (3.08% yield)</li>
                  <li>15% - JNJ (2.94% yield)</li>
                  <li>10% - PEP (2.89% yield)</li>
                </ul>
                <p><strong>Portfolio Yield:</strong> ~3.8%</p>

                <h3>Strategy 2: The Growth Portfolio</h3>
                <p><strong>Goal:</strong> Fastest dividend growth</p>
                <p><strong>Allocation:</strong></p>
                <ul>
                  <li>25% - LOW (15.2% growth)</li>
                  <li>25% - HD (12.5% growth)</li>
                  <li>20% - ABBV (10.5% growth)</li>
                  <li>15% - PEP (7.2% growth)</li>
                  <li>15% - CAT (6.8% growth)</li>
                </ul>
                <p><strong>5-Year Dividend CAGR:</strong> ~11%</p>

                <h3>Strategy 3: The Balanced Portfolio</h3>
                <p><strong>Goal:</strong> Balance of yield and growth</p>
                <p><strong>Allocation:</strong> Equal weight in all 10 stocks (10% each)</p>
                <p><strong>Portfolio Yield:</strong> ~2.8%</p>
                <p><strong>5-Year Dividend CAGR:</strong> ~7%</p>

                <Card className="my-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Pro Tip: Dollar-Cost Average
                    </h4>
                    <p className="mb-0">
                      Don't buy all 10 at once. Spread purchases over 6-12 months to average out your
                      entry price. Buy 1-2 stocks per month with your investment budget.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Calculate Your Returns */}
              <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                <CardContent className="pt-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Calculate Your Dividend Returns</h2>
                  <p className="mb-6 max-w-2xl mx-auto">
                    Use our free calculators to project your returns with any of these dividend
                    aristocrats. See exactly how much income you'll generate over 5, 10, or 20 years.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/stocks/pg">
                      <Button size="lg">
                        Calculate P&G Returns <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/stocks">
                      <Button size="lg" variant="outline">
                        Browse All 100 Stocks
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Final Thoughts */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Final Thoughts</h2>
                <p>
                  Dividend Aristocrats aren't just good stocks - they're businesses that have proven
                  they can thrive through recessions, wars, market crashes, and every other challenge
                  thrown at them for 25+ years.
                </p>
                <p>
                  <strong>The best time to buy aristocrats?</strong> During market downturns when everyone
                  else is panicking. That's when you get quality companies at discounted prices with
                  higher yields.
                </p>
                <p>
                  <strong>The second-best time?</strong> Right now. These companies compound wealth over
                  decades. Every year you wait is a year of missed dividend growth.
                </p>

                <h3>Start Simple</h3>
                <p>Don't overthink it. Pick 3-5 aristocrats from different sectors:</p>
                <ul>
                  <li>1 Consumer Staple (PG, KO, or PEP)</li>
                  <li>1 Healthcare (JNJ or ABBV)</li>
                  <li>1 Industrial (MMM, CAT, or ITW)</li>
                  <li>1 Retailer (HD or LOW)</li>
                  <li>1 Your Choice (based on personal preference)</li>
                </ul>

                <p>
                  Enable DRIP. Invest monthly. Check quarterly. In 20 years, you'll have a dividend
                  income stream that grows every year without you doing anything.
                </p>

                <p className="text-lg font-semibold">
                  That's the power of dividend aristocrats.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

// Stock Card Component
function StockCard({
  rank,
  ticker,
  name,
  years,
  yield: yieldPercent,
  growth,
  safety,
  description,
  pros,
  cons
}: {
  rank: number
  ticker: string
  name: string
  years: number
  yield: number
  growth: number
  safety: string
  description: string
  pros: string[]
  cons: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-black opacity-50">#{rank}</div>
            <div>
              <div className="text-2xl font-bold">{ticker}</div>
              <div className="text-blue-100">{name}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100">Safety Score</div>
            <div className="text-2xl font-bold">{safety}</div>
          </div>
        </div>
      </div>

      <CardContent className="pt-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Years</div>
            <div className="text-2xl font-bold flex items-center justify-center gap-1">
              <Calendar className="h-5 w-5" />
              {years}
            </div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Yield</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center gap-1">
              <DollarSign className="h-5 w-5" />
              {yieldPercent.toFixed(2)}%
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Growth</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1">
              <TrendingUp className="h-5 w-5" />
              {growth.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          {description}
        </p>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">Pros</h4>
            <ul className="space-y-2">
              {pros.map((pro, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">Cons</h4>
            <ul className="space-y-2">
              {cons.map((con, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">⚠️</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <Link href={`/stocks/${ticker.toLowerCase()}`}>
          <Button className="w-full">
            Calculate {ticker} Returns <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
