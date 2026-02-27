import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, DollarSign, TrendingUp, CheckCircle2, AlertTriangle, ArrowRight, Star, Target, BarChart3, Building2, Landmark, Award, Percent } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Safest Dividend Stocks: 15 Ultra-Reliable Picks (2026)',
  description: 'The 15 safest dividend stocks with rock-solid payout ratios, strong cash flow coverage, and decades of recession-tested reliability. Sleep-well-at-night income.',
  keywords: ['safest dividend stocks', 'most reliable dividend stocks', 'safe dividend stocks 2026', 'low risk dividend stocks', 'dividend stocks that never cut', 'ultra safe dividend stocks'],
}

const safestStocks = [
  { symbol: 'JNJ', name: 'Johnson & Johnson', yield: '3.0%', payoutRatio: '48%', cashFlowCoverage: '2.1x', debtToEquity: '0.4', creditRating: 'AAA', yearsRaised: 62, sector: 'Healthcare', safetyScore: 99, description: 'One of only two US companies with an AAA credit rating (the other is Microsoft). JNJ has paid increasing dividends for 62 consecutive years through every recession, pandemic, and market crash since 1962. The diversified healthcare business generates $20B+ in annual free cash flow.' },
  { symbol: 'PG', name: 'Procter & Gamble', yield: '2.4%', payoutRatio: '60%', cashFlowCoverage: '1.7x', debtToEquity: '0.7', creditRating: 'AA-', yearsRaised: 68, sector: 'Consumer Staples', safetyScore: 98, description: 'The longest active dividend increase streak among major consumer companies at 68 years. PG sells essential household products (Tide, Pampers, Gillette) with pricing power that protects margins during inflation. Free cash flow of $15B+ easily covers the $9B annual dividend.' },
  { symbol: 'MSFT', name: 'Microsoft', yield: '0.8%', payoutRatio: '25%', cashFlowCoverage: '4.0x', debtToEquity: '0.3', creditRating: 'AAA', yearsRaised: 21, sector: 'Technology', safetyScore: 99, description: 'The other AAA-rated company in America. Microsoft generates $65B+ in annual free cash flow and pays out only 25% as dividends. The dividend could quadruple tomorrow and still be sustainable. Cloud and AI revenue provide secular growth with extraordinary predictability.' },
  { symbol: 'KO', name: 'Coca-Cola', yield: '3.0%', payoutRatio: '75%', cashFlowCoverage: '1.3x', debtToEquity: '1.5', creditRating: 'A+', yearsRaised: 62, sector: 'Consumer Staples', safetyScore: 95, description: 'Warren Buffett has owned Coca-Cola since 1988 and collects $700M+ in annual dividends. The 75% payout ratio is higher than ideal, but the brand is so durable that cash flow has never fallen below dividend requirements in 62 years. Global distribution in 200+ countries provides unmatched stability.' },
  { symbol: 'WMT', name: 'Walmart', yield: '1.4%', payoutRatio: '35%', cashFlowCoverage: '2.9x', debtToEquity: '0.6', creditRating: 'AA', yearsRaised: 51, sector: 'Retail', safetyScore: 97, description: 'Walmart actually performs better during recessions as consumers trade down. The 35% payout ratio is ultra-conservative for a consumer staple. With $26B+ in annual free cash flow, Walmart could triple its dividend. The recent 9% dividend increase signals management confidence.' },
  { symbol: 'V', name: 'Visa', yield: '0.8%', payoutRatio: '21%', cashFlowCoverage: '4.8x', debtToEquity: '0.5', creditRating: 'AA-', yearsRaised: 16, sector: 'Financials', safetyScore: 98, description: 'Visa earns fees on every electronic transaction with zero credit risk (merchants and banks bear the risk). At 21% payout ratio, the dividend is virtually guaranteed for decades. Even during the 2020 pandemic when spending plummeted, Visa raised its dividend 7%.' },
  { symbol: 'EPD', name: 'Enterprise Products Partners', yield: '7.0%', payoutRatio: '60%', cashFlowCoverage: '1.7x', debtToEquity: '0.9', creditRating: 'BBB+', yearsRaised: 25, sector: 'Midstream', safetyScore: 93, description: 'The gold standard of high-yield safety. Enterprise Products has raised its distribution for 25 consecutive years, including through the 2020 oil price collapse. Fee-based pipeline revenue is not directly tied to commodity prices. The 1.7x distribution coverage ratio provides a thick margin of safety.' },
  { symbol: 'NEE', name: 'NextEra Energy', yield: '2.5%', payoutRatio: '55%', cashFlowCoverage: '1.8x', debtToEquity: '1.2', creditRating: 'A-', yearsRaised: 29, sector: 'Utilities', safetyScore: 94, description: 'The largest electric utility in the US, combining the regulated stability of Florida Power & Light with the growth of NextEra Energy Resources (world\'s largest solar and wind operator). Regulated rate increases fund 10% annual dividend growth, far above the utility average of 3%.' },
  { symbol: 'O', name: 'Realty Income', yield: '5.5%', payoutRatio: '75%', cashFlowCoverage: '1.3x', debtToEquity: '0.7', creditRating: 'A-', yearsRaised: 29, sector: 'REIT', safetyScore: 93, description: 'The Monthly Dividend Company has made 650+ consecutive monthly dividend payments and raised 125+ times since its 1994 IPO. Triple-net leases mean tenants pay all expenses. 89% of rental revenue comes from recession-resistant or non-discretionary tenants like Walgreens, Dollar General, and FedEx.' },
  { symbol: 'PEP', name: 'PepsiCo', yield: '2.7%', payoutRatio: '65%', cashFlowCoverage: '1.5x', debtToEquity: '2.0', creditRating: 'A+', yearsRaised: 51, sector: 'Consumer Staples', safetyScore: 95, description: 'PepsiCo\'s Frito-Lay snack division is the real star, generating more profit than beverages. Snack food demand is remarkably recession-proof -- Frito-Lay volume grew 3% during the 2008 crisis. 51 consecutive years of increases qualifies PepsiCo as a Dividend King.' },
  { symbol: 'LOW', name: 'Lowe\'s', yield: '2.0%', payoutRatio: '35%', cashFlowCoverage: '2.9x', debtToEquity: 'N/A', creditRating: 'BBB+', yearsRaised: 62, sector: 'Retail', safetyScore: 94, description: 'The second-longest active dividend streak in the S&P 500 at 62 years. Lowe\'s has maintained a 35% payout ratio despite raising dividends 15% annually for 5 years. The housing stock is aging (average US home is 40+ years old), driving structural demand for home improvement.' },
  { symbol: 'ABT', name: 'Abbott Laboratories', yield: '1.8%', payoutRatio: '40%', cashFlowCoverage: '2.5x', debtToEquity: '0.4', creditRating: 'AA-', yearsRaised: 52, sector: 'Healthcare', safetyScore: 96, description: 'Abbott\'s 52-year streak is remarkable because it span both the pre-2013 combined company and the post-spinoff focused medical device/diagnostics company. The FreeStyle Libre continuous glucose monitor is growing 20%+ annually, providing durable earnings growth to fund dividend increases.' },
  { symbol: 'MCD', name: 'McDonald\'s', yield: '2.2%', payoutRatio: '55%', cashFlowCoverage: '1.8x', debtToEquity: 'N/A', creditRating: 'BBB+', yearsRaised: 48, sector: 'Consumer Discretionary', safetyScore: 94, description: 'McDonald\'s franchise model is a cash flow machine -- 93% of restaurants are franchised, generating high-margin royalty fees. During 2008, same-store sales grew 6.9% while the broader market collapsed. The company actually benefits from recessions as consumers trade down from restaurants.' },
  { symbol: 'HD', name: 'Home Depot', yield: '2.3%', payoutRatio: '50%', cashFlowCoverage: '2.0x', debtToEquity: 'N/A', creditRating: 'A', yearsRaised: 14, sector: 'Retail', safetyScore: 93, description: 'Home Depot generates $17B+ in annual free cash flow, making the $8B+ dividend easily sustainable. The company dominates the $900B home improvement market with 17% share. Professional contractors (50% of revenue) provide stable demand regardless of housing market conditions.' },
  { symbol: 'UNP', name: 'Union Pacific', yield: '2.3%', payoutRatio: '45%', cashFlowCoverage: '2.2x', debtToEquity: '1.5', creditRating: 'A-', yearsRaised: 18, sector: 'Industrials', safetyScore: 92, description: 'Union Pacific operates an irreplaceable railroad network across the western United States. You cannot build a competing railroad -- the rights-of-way are physically impossible to replicate. This creates a legal monopoly with pricing power. Freight volume correlates with GDP, providing predictable cash flow.' },
]

export default function SafestDividendStocks2026() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-green-100 text-green-800">
          <Shield className="h-3 w-3 mr-1" />
          Maximum Safety
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Safest Dividend Stocks: 15 Ultra-Reliable Picks (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          These 15 stocks have the strongest dividend safety profiles in the market: low payout ratios, high cash flow
          coverage, investment-grade credit ratings, and decades of recession-tested reliability. Sleep-well-at-night income.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>13 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            Safety-first analysis
          </span>
        </div>
      </div>

      {/* Safety Methodology */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-blue-600" />
          How We Measure Dividend Safety
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Every stock on this list was evaluated across five safety criteria. We assign a safety score from 0-100
          based on these weighted factors:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card className="border-green-200">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-bold mb-1">Payout Ratio (30%)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Under 50% is excellent. Under 70% is safe. Above 80% is a warning sign for most sectors.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardContent className="pt-6">
              <DollarSign className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-bold mb-1">Cash Flow Coverage (25%)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Free cash flow divided by dividends paid. Above 1.5x is safe. Above 2.0x is excellent.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-bold mb-1">Streak Length (20%)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Years of consecutive dividend increases. 25+ years means the company has survived multiple recessions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardContent className="pt-6">
              <Landmark className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-bold mb-1">Credit Rating (15%)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Investment-grade ratings (BBB- or above) indicate financial strength. AAA is the highest possible.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardContent className="pt-6">
              <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-bold mb-1">Balance Sheet (10%)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Debt-to-equity ratio and interest coverage. Lower debt means more flexibility during downturns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          Safety Scorecard at a Glance
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left p-2 font-bold">Stock</th>
                <th className="text-left p-2 font-bold">Yield</th>
                <th className="text-left p-2 font-bold">Payout</th>
                <th className="text-left p-2 font-bold">FCF Cover</th>
                <th className="text-left p-2 font-bold">Credit</th>
                <th className="text-left p-2 font-bold">Years</th>
                <th className="text-left p-2 font-bold">Score</th>
              </tr>
            </thead>
            <tbody>
              {safestStocks.map((stock, idx) => (
                <tr key={stock.symbol} className={idx % 2 === 0 ? '' : 'bg-slate-50 dark:bg-slate-900'}>
                  <td className="p-2 font-semibold">{stock.symbol}</td>
                  <td className="p-2 text-green-600">{stock.yield}</td>
                  <td className="p-2">{stock.payoutRatio}</td>
                  <td className="p-2">{stock.cashFlowCoverage}</td>
                  <td className="p-2">{stock.creditRating}</td>
                  <td className="p-2">{stock.yearsRaised}</td>
                  <td className="p-2">
                    <Badge className={stock.safetyScore >= 97 ? 'bg-green-700' : stock.safetyScore >= 94 ? 'bg-green-600' : 'bg-green-500'}>
                      {stock.safetyScore}/100
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Picks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          15 Safest Dividend Stocks: Detailed Analysis
        </h2>

        <div className="space-y-6">
          {safestStocks.map((stock, idx) => (
            <Card key={stock.symbol} className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                    <p className="text-sm text-slate-500">{stock.sector}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-600">{stock.yield} Yield</Badge>
                    <Badge className="bg-green-700">Safety: {stock.safetyScore}/100</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4 text-xs">
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded text-center">
                    <p className="text-green-600 font-medium">Payout</p>
                    <p className="font-bold">{stock.payoutRatio}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded text-center">
                    <p className="text-green-600 font-medium">FCF Cover</p>
                    <p className="font-bold">{stock.cashFlowCoverage}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded text-center">
                    <p className="text-green-600 font-medium">Credit</p>
                    <p className="font-bold">{stock.creditRating}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded text-center">
                    <p className="text-green-600 font-medium">D/E Ratio</p>
                    <p className="font-bold">{stock.debtToEquity}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded text-center">
                    <p className="text-green-600 font-medium">Yield</p>
                    <p className="font-bold">{stock.yield}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded text-center">
                    <p className="text-green-600 font-medium">Streak</p>
                    <p className="font-bold">{stock.yearsRaised} yrs</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">{stock.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Red Flags to Watch */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-red-600" />
          Red Flags That Signal a Dividend Cut
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Even safe dividend stocks can become unsafe. Watch for these warning signs:
        </p>

        <div className="space-y-3">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Payout ratio rising above 90%</p>
                  <p className="text-xs text-slate-500">When a company pays out nearly all earnings, one bad quarter can force a cut.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Credit rating downgrade</p>
                  <p className="text-xs text-slate-500">Downgrades increase borrowing costs and signal deteriorating financial health.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Free cash flow declining for 3+ consecutive quarters</p>
                  <p className="text-xs text-slate-500">Dividends are paid from cash, not earnings. Shrinking cash flow is the clearest danger sign.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Management stops talking about dividend growth</p>
                  <p className="text-xs text-slate-500">When dividend increases slow from 8% to 2% to 1%, a freeze or cut may follow.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Major debt-funded acquisition</p>
                  <p className="text-xs text-slate-500">When companies borrow heavily for acquisitions, dividends may be redirected to debt service.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Is any dividend truly 100% safe?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No dividend is guaranteed. Even General Electric, once considered the safest industrial dividend,
                cut its payout in 2017 after 100+ years. However, companies with AAA credit ratings (JNJ, MSFT),
                sub-50% payout ratios, and 50+ year streaks are as close to "certain" as stocks can get. The
                probability of these companies cutting is extremely low.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">What payout ratio is safest?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Under 50% is ideal for most companies -- it means earnings could be cut in half and the dividend
                would still be covered. REITs and utilities can safely sustain 70-80% due to their regulated,
                predictable cash flows. Technology companies should stay under 40% given their cyclical nature.
                Always look at CASH FLOW payout ratio, not just earnings payout ratio.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I prioritize safety over yield?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Always. A 3% yield that grows reliably for 20 years is worth far more than an 8% yield that gets
                cut in year 3. Dividend cuts cause both income loss AND a stock price crash (typically 20-40%).
                The stocks on this list average 2.5% yield with extreme safety -- and their dividend growth will
                push your yield on cost above 5% within a decade.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How often should I check my dividend stocks for safety?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Review quarterly earnings reports for each holding, focusing on payout ratio and free cash flow
                coverage. Set alerts for credit rating changes and dividend announcements. For the stocks on this
                list, quarterly reviews are sufficient. You do not need to check daily -- that is the whole point
                of owning ultra-safe dividend payers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Are safe dividend stocks boring investments?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, and that is the point. Boring is beautiful in dividend investing. Microsoft has returned
                900%+ over the past decade while paying growing dividends. Johnson & Johnson has turned $10,000
                into $200,000+ over 30 years with reinvested dividends. "Boring" stocks that compound quietly
                create more wealth than exciting stocks that crash and burn.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Safe Dividend Income Growth</h3>
            <p className="mb-6 text-green-100">
              Model how these ultra-safe dividend stocks compound your income over time. See the power of
              reliable 5-15% annual dividend growth over 20-30 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/calculators/drip">
                <Button size="lg" variant="secondary" className="gap-2">
                  <TrendingUp className="h-5 w-5" />
                  DRIP Calculator
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Dividend Growth Calculator
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button size="lg" variant="secondary" className="gap-2">
                  <DollarSign className="h-5 w-5" />
                  Retirement Income Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="grid gap-3">
            <Link href="/blog/best-recession-proof-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Recession-Proof Dividend Stocks: 12 Safe Havens
            </Link>
            <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Analyze Dividend Safety: Complete Guide
            </Link>
            <Link href="/blog/aristocrats-vs-kings-vs-champions" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Dividend Aristocrats vs Kings vs Champions
            </Link>
            <Link href="/blog/dividend-investing-mistakes-to-avoid" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              15 Dividend Investing Mistakes That Cost You Money
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
