import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, DollarSign, TrendingUp, CheckCircle2, ArrowRight, Star, Target, BarChart3, Shield, Percent, Calendar, Clock, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: '15 Dividend Investing Mistakes That Cost You Money (2026)',
  description: 'Avoid these 15 common dividend investing mistakes that destroy returns. Real examples of losses, yield traps, tax blunders, and how to fix each one.',
  keywords: ['dividend investing mistakes', 'dividend investing errors', 'common dividend mistakes', 'dividend yield trap', 'dividend tax mistakes', 'dividend portfolio mistakes'],
}

const mistakes = [
  {
    number: 1,
    title: 'Chasing the Highest Yield',
    severity: 'Critical',
    severityColor: 'red',
    icon: 'AlertTriangle',
    costExample: 'Investors who bought Lumen Technologies (LUMN) at 9% yield in 2022 lost 60% when the dividend was cut to zero in November 2022.',
    explanation: 'A yield above 7-8% is often a warning sign, not a gift. When a stock\'s price drops sharply (due to business problems), the yield mathematically increases. This creates a "yield trap" that lures investors into failing companies. The high yield is the market telling you the dividend is about to be cut.',
    fix: 'Never buy a stock solely because of high yield. Check the payout ratio (under 70%), free cash flow coverage (over 1.5x), and whether the yield is high because of dividend growth or stock price decline. If the stock price dropped 50%+ in the past year, the yield is likely a trap.',
  },
  {
    number: 2,
    title: 'Ignoring the Payout Ratio',
    severity: 'Critical',
    severityColor: 'red',
    icon: 'Percent',
    costExample: 'AT&T\'s payout ratio exceeded 100% for several quarters before it cut its dividend 47% in 2022, destroying $70B+ in market cap.',
    explanation: 'The payout ratio (dividends / earnings) tells you whether the dividend is sustainable. A company earning $4 per share and paying $3.50 in dividends has an 87% payout ratio. One bad quarter and the dividend is at risk. Many investors never check this number.',
    fix: 'Look up the payout ratio before buying any dividend stock. Safe ranges: under 50% for most companies, under 70% for utilities and REITs. Check both earnings payout ratio AND free cash flow payout ratio. If either exceeds 90%, proceed with extreme caution.',
  },
  {
    number: 3,
    title: 'Not Diversifying Across Sectors',
    severity: 'High',
    severityColor: 'orange',
    icon: 'BarChart3',
    costExample: 'Investors heavily concentrated in bank stocks during 2008 saw dividends cut across the entire sector simultaneously. Citigroup, Bank of America, and Wells Fargo all slashed dividends within months.',
    explanation: 'Owning 10 dividend stocks is not diversified if they are all in the same sector. During sector-specific downturns (financials in 2008, energy in 2020, tech in 2022), concentrated portfolios lose both income and principal. A "diversified" portfolio of 15 REITs is still dangerously concentrated.',
    fix: 'Own dividend stocks across at least 6-8 sectors: consumer staples, healthcare, technology, industrials, utilities, financials, energy, and real estate. No single sector should exceed 25% of your dividend portfolio. Review sector weights quarterly.',
  },
  {
    number: 4,
    title: 'Selling During Market Crashes',
    severity: 'Critical',
    severityColor: 'red',
    icon: 'TrendingUp',
    costExample: 'Investors who panic-sold Procter & Gamble at $50 during the 2020 crash missed the recovery to $150+ and 4 years of growing dividends. Total missed return: 200%+.',
    explanation: 'When stocks drop 30-40%, the instinct is to sell and stop the pain. But dividend investors who sell during crashes lock in losses AND lose their income stream. Meanwhile, the companies on this list kept paying and raising dividends throughout every crash in the past 50 years.',
    fix: 'During market crashes, focus on your dividend income, not stock prices. If JNJ is still paying its dividend (and raising it), the business is fine regardless of the stock price. In fact, crashes are the best time to BUY more shares at discounted prices with higher yields.',
  },
  {
    number: 5,
    title: 'Not Reinvesting Dividends (When You Should Be)',
    severity: 'High',
    severityColor: 'orange',
    icon: 'DollarSign',
    costExample: '$10,000 invested in the S&P 500 in 1990 with dividends reinvested = $210,000 by 2024. Without reinvestment = $95,000. DRIP doubled total returns.',
    explanation: 'Taking dividend cash when you do not need it for living expenses is one of the most costly mistakes. Every dividend check you spend instead of reinvest is a lost compounding opportunity. The difference over 30 years is enormous.',
    fix: 'Enable DRIP (Dividend Reinvestment Plan) at your brokerage for every holding. Only turn off DRIP when you actually need the income for living expenses (typically in retirement). Until then, reinvest every cent.',
  },
  {
    number: 6,
    title: 'Holding Dividend Stocks in the Wrong Account',
    severity: 'Moderate',
    severityColor: 'yellow',
    icon: 'Calendar',
    costExample: 'Holding REIT dividends (taxed at 37% as ordinary income) in a taxable account instead of an IRA costs a high earner roughly $3,700 per $10,000 of REIT income annually.',
    explanation: 'Qualified dividends from US stocks are taxed at 0-20%, but REIT, MLP, and foreign stock dividends are often taxed as ordinary income (up to 37%). Many investors hold the wrong assets in the wrong accounts, paying thousands more in taxes than necessary.',
    fix: 'Hold REITs, MLPs, and bond-like dividend stocks in tax-advantaged accounts (IRA, 401k). Hold qualified dividend stocks (most US companies) in taxable accounts to benefit from the lower tax rates. This "asset location" strategy can save 1-2% annually in taxes.',
  },
  {
    number: 7,
    title: 'Buying Right Before the Ex-Dividend Date',
    severity: 'Low',
    severityColor: 'green',
    icon: 'Calendar',
    costExample: 'A stock trading at $100 paying a $1 dividend drops to $99 on the ex-date. You receive $1 in dividends but lose $1 in stock price. Net gain: zero (minus taxes on the dividend).',
    explanation: 'Some new investors rush to buy stocks just before the ex-dividend date to "capture" the dividend. But the stock price drops by the dividend amount on the ex-date, making it a wash. Worse, you now owe taxes on the dividend payment. It is a lose-lose strategy.',
    fix: 'Buy dividend stocks based on long-term value, not to capture a single payment. If you are a long-term investor, the ex-dividend date does not matter -- you will collect hundreds of future dividends. Timing purchases around dividend dates is a waste of energy.',
  },
  {
    number: 8,
    title: 'Confusing Dividend Yield with Total Return',
    severity: 'High',
    severityColor: 'orange',
    icon: 'BarChart3',
    costExample: 'AT&T yielded 7%+ for years but the total return (dividend + price change) was negative over the past decade. Meanwhile, Microsoft\'s 1% yield delivered 400%+ total return.',
    explanation: 'A high yield means nothing if the stock price is declining. Total return = dividend income + stock price appreciation. A 7% yield with a 10% annual price decline gives you a -3% total return. You are losing money despite the income.',
    fix: 'Always evaluate total return, not just yield. The best dividend stocks offer moderate yields (2-4%) with solid price appreciation (5-10% annually) for total returns of 7-14%. Use our investment return calculator to compare total returns across stocks.',
  },
  {
    number: 9,
    title: 'Ignoring Dividend Growth Rate',
    severity: 'High',
    severityColor: 'orange',
    icon: 'TrendingUp',
    costExample: 'A $10,000 investment in Visa (0.8% yield, 17% growth) generates $400/yr in dividends after 10 years. The same $10,000 in Verizon (6.8% yield, 2% growth) generates $830/yr. But by year 20, Visa generates $2,370/yr vs Verizon\'s $1,010/yr.',
    explanation: 'Most investors fixate on current yield and ignore growth rate. But a stock growing its dividend 15% annually will massively outpace a high-yield, low-growth stock within 8-12 years. The growth rate determines your future income.',
    fix: 'Always check the 5-year dividend growth rate alongside yield. For investors with 10+ year time horizons, prioritize growth over current yield. A stock with 2% yield and 12% growth beats a stock with 5% yield and 2% growth within about 8 years.',
  },
  {
    number: 10,
    title: 'Failing to Monitor for Dividend Cut Warnings',
    severity: 'High',
    severityColor: 'orange',
    icon: 'AlertTriangle',
    costExample: 'General Electric showed warning signs for 2+ years before cutting its dividend in 2017: rising payout ratio, declining cash flow, credit downgrades. Investors who ignored the signs lost 75% of their investment.',
    explanation: 'Companies rarely cut dividends without warning. There are almost always signs: payout ratio creeping above 90%, declining free cash flow for multiple quarters, credit rating downgrades, management hedging language on earnings calls. Most investors do not monitor these metrics.',
    fix: 'Set up a quarterly review for each dividend holding. Check: (1) payout ratio trend, (2) free cash flow trend, (3) any credit rating changes, (4) management commentary on the dividend. If 2+ warning signs appear simultaneously, consider reducing your position.',
  },
  {
    number: 11,
    title: 'Overweighting a Single Stock',
    severity: 'Moderate',
    severityColor: 'yellow',
    icon: 'Shield',
    costExample: 'An investor with 40% of their portfolio in Intel lost 60% when the stock crashed and the dividend was cut 66% in 2023. A diversified portfolio with 5% in Intel would have barely noticed.',
    explanation: 'Falling in love with a single dividend stock and making it 20-40% of your portfolio is extremely dangerous. No matter how safe the dividend appears, any company can face unexpected challenges. Concentration amplifies both gains and losses.',
    fix: 'Limit any single stock to 5-8% of your total dividend portfolio. If a position grows above 10% due to price appreciation, trim it back. This rule applies even to "untouchable" stocks like JNJ and PG. Rebalance annually.',
  },
  {
    number: 12,
    title: 'Buying Dividend Stocks on Margin',
    severity: 'Critical',
    severityColor: 'red',
    icon: 'AlertTriangle',
    costExample: 'An investor using 50% margin to buy a 5% yield stock earns 10% on their capital. But a 30% market drop triggers a margin call, forcing a sale at the worst possible time. The leveraged investor loses 60% vs 30% for the cash investor.',
    explanation: 'Using borrowed money (margin) to amplify dividend income seems clever but is extremely dangerous. During market drops, margin calls force you to sell your dividend stocks at depressed prices, permanently destroying your income stream. The extra income is not worth the risk.',
    fix: 'Never use margin for dividend investing. The entire philosophy of dividend investing is built on patience and compounding. Margin introduces forced-selling risk that is antithetical to the strategy. If you want higher income, buy higher-yielding stocks or invest more capital.',
  },
  {
    number: 13,
    title: 'Neglecting Foreign Dividend Tax Withholding',
    severity: 'Moderate',
    severityColor: 'yellow',
    icon: 'DollarSign',
    costExample: 'A US investor buying Canadian dividend stocks (like Enbridge or BCE) in a Roth IRA loses 15% of every dividend to Canadian withholding tax with no way to recover it. On a $50,000 position, that is $525/year lost permanently.',
    explanation: 'Foreign countries withhold 15-30% of dividends paid to US investors. In a taxable account, you can claim a foreign tax credit on your US return. But in an IRA or Roth IRA, the foreign tax is lost forever because retirement accounts do not file tax returns.',
    fix: 'Hold foreign dividend stocks (Canadian, European, Australian) in taxable accounts where you can claim the foreign tax credit. Hold US dividend stocks in your IRA and Roth IRA. Exception: UK stocks have 0% withholding, so they work fine in IRAs.',
  },
  {
    number: 14,
    title: 'Chasing "Special" One-Time Dividends',
    severity: 'Low',
    severityColor: 'green',
    icon: 'Star',
    costExample: 'Costco paid a $15 special dividend in 2023. Investors who bought specifically to capture it saw the stock drop $15 on the ex-date. They received $15 in taxable income and lost $15 in stock value. Net result: a tax bill.',
    explanation: 'Special dividends are one-time payments that are not recurring. Buying a stock to capture a special dividend is identical to the ex-dividend date trap -- the price adjusts downward. You gain nothing and may owe more in taxes. Special dividends benefit long-term holders, not short-term traders.',
    fix: 'Ignore special dividends when evaluating a stock. Focus on the regular, recurring dividend and its growth rate. If you already own the stock, the special dividend is a nice bonus. If you do not own it, the special dividend is not a reason to buy.',
  },
  {
    number: 15,
    title: 'Starting Too Late',
    severity: 'Critical',
    severityColor: 'red',
    icon: 'Clock',
    costExample: '$200/month invested in dividend growth stocks starting at age 25 grows to $53,000/year in dividend income by age 65. Starting at age 35 yields only $17,000/year. Starting at age 45 yields just $5,600/year. Every decade of delay costs ~65% of your income.',
    explanation: 'The single biggest mistake is waiting to start. Dividend compounding is exponential -- the last 10 years contribute more than the first 20 years combined. Every year you wait costs you disproportionately more future income. There is no "catching up" with compound growth.',
    fix: 'Start today, even with a small amount. $50/month is infinitely better than $0/month. Enable DRIP, buy quality dividend growth stocks, and let time do the work. The best time to start dividend investing was 20 years ago. The second best time is right now.',
  },
]

export default function DividendInvestingMistakesToAvoid() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-red-100 text-red-800">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Must Read
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          15 Dividend Investing Mistakes That Cost You Money (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          These 15 common mistakes destroy dividend investing returns. From yield traps to tax blunders to
          behavioral errors, each one comes with a real-world example of how much it costs -- and exactly
          how to fix it.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>15 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            15 mistakes with real examples
          </span>
        </div>
      </div>

      {/* Severity Guide */}
      <section className="mb-16">
        <Card className="bg-slate-50 dark:bg-slate-900">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Severity Ratings</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-red-600">Critical</Badge>
                <span className="text-sm text-slate-600">Can destroy 50%+ of your returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-600">High</Badge>
                <span className="text-sm text-slate-600">Reduces returns by 20-50%</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-600">Moderate</Badge>
                <span className="text-sm text-slate-600">Costs 5-20% of potential returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600">Low</Badge>
                <span className="text-sm text-slate-600">Minor drag on performance</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* All 15 Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Target className="h-7 w-7 text-red-600" />
          The 15 Mistakes
        </h2>

        <div className="space-y-8">
          {mistakes.map((mistake) => (
            <Card key={mistake.number} className={`border-l-4 ${mistake.severityColor === 'red' ? 'border-l-red-500' : mistake.severityColor === 'orange' ? 'border-l-orange-500' : mistake.severityColor === 'yellow' ? 'border-l-yellow-500' : 'border-l-green-500'}`}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold">
                    Mistake #{mistake.number}: {mistake.title}
                  </h3>
                  <Badge className={mistake.severityColor === 'red' ? 'bg-red-600' : mistake.severityColor === 'orange' ? 'bg-orange-600' : mistake.severityColor === 'yellow' ? 'bg-yellow-600' : 'bg-green-600'}>
                    {mistake.severity}
                  </Badge>
                </div>

                <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-3 rounded mb-4">
                  <p className="text-sm">
                    <strong className="text-red-700">Real Cost:</strong> {mistake.costExample}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{mistake.explanation}</p>

                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-3 rounded">
                  <p className="text-sm">
                    <strong className="text-green-700">How to Fix It:</strong> {mistake.fix}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Mistake Checklist */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <CheckCircle2 className="h-7 w-7 text-green-600" />
          Quick Self-Assessment Checklist
        </h2>
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Answer honestly. Every "No" is costing you money:
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I check the payout ratio before buying any dividend stock</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>My dividend portfolio spans at least 6 different sectors</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>No single stock exceeds 10% of my portfolio</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I have DRIP enabled on all holdings (if I do not need the income)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I hold REITs/MLPs in tax-advantaged accounts</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I hold foreign dividend stocks in taxable accounts (for foreign tax credit)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I review payout ratios and free cash flow quarterly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I consider total return, not just dividend yield</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I do not use margin for dividend investing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>I focus on dividend growth rate alongside current yield</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded">
              <p className="font-bold text-sm">Score: 10/10 = Expert | 7-9 = Good | 4-6 = Needs work | Under 4 = Read this article again</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">What is the single worst mistake dividend investors make?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Chasing high yields without checking sustainability. Yield traps have destroyed more dividend
                investor wealth than any other mistake. If a stock yields 10%+ and the payout ratio exceeds 100%,
                a cut is virtually guaranteed. The dividend cut causes both income loss AND a 20-40% stock price crash.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How can I tell if a dividend cut is coming?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Watch for: payout ratio above 90%, free cash flow declining for 3+ quarters, credit rating
                downgrades, management hedging language about "reviewing capital allocation," and the dividend
                increase shrinking (from 8% to 3% to 1%). Two or more of these simultaneously is a strong
                warning to reduce your position.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Is dividend investing worth it for small amounts?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely. Dividend investing is one of the few strategies where small, consistent contributions
                create outsized long-term results. $100/month invested in dividend growth stocks for 30 years
                can generate $30,000+ per year in income. The amount matters less than the consistency and the
                time. Start with whatever you can afford.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I sell a dividend stock if the price drops 30%?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Not automatically. First, determine WHY the price dropped. If the business fundamentals are
                intact and the dividend is still safe (good payout ratio, strong cash flow), the drop is actually
                a buying opportunity. If the fundamentals have deteriorated and a dividend cut looks likely, then
                selling is prudent. Never sell on price alone -- sell on fundamentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate What You're Missing</h3>
            <p className="mb-6 text-red-100">
              Use our free calculators to see the true cost of these mistakes on your portfolio.
              Model the difference between chasing yield vs. growing dividends over 20+ years.
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
              <Link href="/calculators/yield-on-cost">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Percent className="h-5 w-5" />
                  Yield on Cost Calculator
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
            <Link href="/blog/safest-dividend-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Safest Dividend Stocks: 15 Ultra-Reliable Picks (2026)
            </Link>
            <Link href="/blog/highest-paying-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Highest Paying Dividend Stocks: Top 20 Yields
            </Link>
            <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Analyze Dividend Safety: Complete Guide
            </Link>
            <Link href="/blog/dividend-investing-for-beginners-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Dividend Investing for Beginners: Complete 2026 Guide
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
