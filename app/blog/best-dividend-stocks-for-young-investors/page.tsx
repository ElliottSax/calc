import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, CheckCircle2, ArrowRight, Star, Target, BarChart3, Zap, Clock, Award, LineChart, Percent } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Dividend Stocks for Young Investors in Their 20s (2026)',
  description: 'The best dividend stocks for young investors who want to start building passive income early. Growth + dividends picks with 30-40 year compounding potential.',
  keywords: ['dividend stocks for young investors', 'best dividend stocks 20s', 'dividend investing young', 'dividend stocks for beginners', 'young investor dividend portfolio', 'starting dividend investing early'],
}

const youngInvestorPicks = [
  { symbol: 'MSFT', name: 'Microsoft', yield: '0.8%', growth: '10.2%', years: 21, payoutRatio: '25%', category: 'Growth + Dividend', reason: 'Azure cloud and AI leadership drive earnings growth. At only 25% payout ratio, the dividend will grow for decades. A $1,000 investment at 0.8% yield growing 10% annually pays $187/year in dividends by year 30.' },
  { symbol: 'AVGO', name: 'Broadcom', yield: '1.8%', growth: '18.5%', years: 14, payoutRatio: '48%', category: 'Growth + Dividend', reason: 'The fastest dividend grower in tech. An 18.5% annual growth rate means the dividend doubles every 4 years. Starting at 1.8% yield, your yield on cost reaches 8.2% in just 10 years and 44% in 20 years.' },
  { symbol: 'V', name: 'Visa', yield: '0.8%', growth: '17.0%', years: 16, payoutRatio: '21%', category: 'Growth + Dividend', reason: 'The global shift from cash to digital payments has decades of runway left. Visa earns fees on every transaction with zero credit risk. At 17% dividend growth, your yield on cost hits 12% in 15 years.' },
  { symbol: 'AAPL', name: 'Apple', yield: '0.5%', growth: '7.8%', years: 12, payoutRatio: '15%', category: 'Growth + Dividend', reason: 'Apple\'s 15% payout ratio is absurdly low, meaning the company could triple its dividend overnight and still be conservative. The ecosystem lock-in effect means customers keep paying for iPhones, services, and accessories for life.' },
  { symbol: 'HD', name: 'Home Depot', yield: '2.3%', growth: '14.0%', years: 14, payoutRatio: '50%', category: 'Growth + Dividend', reason: 'Home improvement demand is structural due to aging housing stock. Home Depot has raised its dividend 14% annually for 14 years. A strong starting yield of 2.3% combined with double-digit growth is the ideal young investor combo.' },
  { symbol: 'LOW', name: 'Lowe\'s', yield: '2.0%', growth: '15.0%', years: 62, payoutRatio: '35%', category: 'Dividend King', reason: 'A Dividend King with 62 consecutive years of increases and 15% annual growth. Lowe\'s has more dividend growth runway than Home Depot due to its lower 35% payout ratio. The longest streak in retail.' },
  { symbol: 'UNH', name: 'UnitedHealth Group', yield: '1.4%', growth: '13.5%', years: 14, payoutRatio: '28%', category: 'Growth + Dividend', reason: 'Healthcare spending grows regardless of the economy. UnitedHealth combines insurance and Optum services for consistent double-digit earnings growth. The 28% payout ratio ensures decades of dividend increases ahead.' },
  { symbol: 'COST', name: 'Costco', yield: '0.6%', growth: '13.0%', years: 21, payoutRatio: '28%', category: 'Growth + Dividend', reason: 'Costco\'s membership model creates predictable revenue with 93% renewal rates. Plus, the company pays special dividends every few years ($15/share in 2023). Regular dividend plus specials makes the true yield higher than it appears.' },
  { symbol: 'JPM', name: 'JPMorgan Chase', yield: '2.4%', growth: '8.5%', years: 13, payoutRatio: '30%', category: 'Growth + Dividend', reason: 'America\'s best-run bank with Jamie Dimon\'s leadership. At 2.4% starting yield with 8.5% growth, you hit 5.3% yield on cost in 10 years. Strong capital position means the dividend is rock solid.' },
  { symbol: 'TXN', name: 'Texas Instruments', yield: '2.9%', growth: '12.0%', years: 20, payoutRatio: '60%', category: 'Growth + Dividend', reason: 'Analog semiconductors are essential in every electronic device. TXN has the best combination of current yield (2.9%) and growth rate (12%) on this list. Your yield on cost reaches 9% in just 10 years.' },
]

export default function BestDividendStocksForYoungInvestors() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-purple-100 text-purple-800">
          <Zap className="h-3 w-3 mr-1" />
          Young Investors
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Best Dividend Stocks for Young Investors in Their 20s (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Your biggest advantage is time. A 25-year-old investing in dividend growth stocks today can build a
          six-figure passive income stream by retirement. Here are 10 stocks that combine growth with dividends
          to maximize your 30-40 year compounding window.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>11 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Long-term focus
          </span>
        </div>
      </div>

      {/* The Time Advantage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Clock className="h-7 w-7 text-blue-600" />
          The Power of Starting Early
        </h2>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 mb-6">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">$5,000 Invested at Age 25 vs. Age 35</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Assuming a 2% starting yield, 12% annual dividend growth, and all dividends reinvested:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                <p className="font-bold text-green-600 mb-2">Starting at Age 25</p>
                <p className="text-sm">Annual dividend income at age 65: <strong className="text-2xl text-green-700">$14,840</strong></p>
                <p className="text-xs text-slate-500 mt-1">40 years of compounding, portfolio worth $185,000+</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                <p className="font-bold text-orange-600 mb-2">Starting at Age 35</p>
                <p className="text-sm">Annual dividend income at age 65: <strong className="text-2xl text-orange-700">$4,780</strong></p>
                <p className="text-xs text-slate-500 mt-1">30 years of compounding, portfolio worth $55,000+</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
              Those extra 10 years of compounding mean <strong>3x more income</strong> in retirement from the
              same $5,000 investment. That is why starting in your 20s is the single most powerful financial
              decision you can make.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Why Dividend Growth Beats High Yield for Young Investors</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-red-600 mb-2">High Yield Strategy (6% yield, 2% growth)</p>
                <p>Year 1 income on $10,000: $600</p>
                <p>Year 10 income: $731</p>
                <p>Year 20 income: $891</p>
                <p>Year 30 income: $1,086</p>
              </div>
              <div>
                <p className="font-bold text-green-600 mb-2">Dividend Growth Strategy (2% yield, 12% growth)</p>
                <p>Year 1 income on $10,000: $200</p>
                <p>Year 10 income: $621</p>
                <p>Year 20 income: $1,929</p>
                <p className="font-bold">Year 30 income: $5,995</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              The growth strategy earns less in years 1-8 but dramatically outpaces high yield long-term.
              By year 30, it generates 5.5x more income.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stock Picks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          10 Best Dividend Growth Stocks for Your 20s
        </h2>

        <div className="space-y-6">
          {youngInvestorPicks.map((stock, idx) => (
            <Card key={stock.symbol} className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                    <Badge variant="outline" className="mt-1">{stock.category}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-600">{stock.yield} Yield</Badge>
                    <Badge className="bg-green-600">{stock.growth} Growth</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Current Yield</p>
                    <p className="font-bold">{stock.yield}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">5yr Div Growth</p>
                    <p className="font-bold text-green-600">{stock.growth}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Consecutive Raises</p>
                    <p className="font-bold">{stock.years} years</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Payout Ratio</p>
                    <p className="font-bold">{stock.payoutRatio}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">{stock.reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* How to Get Started */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-indigo-600" />
          Getting Started: A Step-by-Step Plan
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg">Open a Roth IRA ($0 minimum at most brokers)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    A Roth IRA is the best account for young dividend investors. You contribute after-tax dollars,
                    but ALL future dividends and growth are 100% tax-free forever. At your age, the decades of
                    tax-free compounding is worth hundreds of thousands of dollars.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg">Start with $50-100/month (consistency beats amount)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    You do not need thousands to start. Buy fractional shares of 3-5 stocks from this list each month.
                    $100/month invested in dividend growth stocks for 40 years at 10% total return becomes $632,000.
                    The habit of consistent investing matters more than the amount.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg">Turn on DRIP (Dividend Reinvestment)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    At every brokerage, you can enable automatic dividend reinvestment. Every dividend payment
                    automatically buys more shares. This is the engine of compounding. Do NOT take cash dividends
                    in your 20s and 30s -- let them compound.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-lg">Focus on dividend GROWTH, not yield</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    At age 25, a 1% yielding stock growing dividends at 15% per year will generate far more income
                    by age 65 than a 7% yielding stock growing at 2%. Prioritize companies with low payout ratios
                    and high growth rates. The yield will come with time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-lg">Increase contributions as your income grows</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Every time you get a raise, increase your monthly investment by at least half the raise amount.
                    Going from $100/month to $200/month doubles your future income. Going to $500/month makes early
                    retirement from dividend income a realistic possibility.
                  </p>
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
              <h3 className="font-bold mb-2">Should young investors buy dividend stocks or growth stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The best approach is buying growth stocks that also pay dividends -- exactly what this list provides.
                Companies like Microsoft, Visa, and Broadcom offer both stock price appreciation AND growing dividends.
                You do not have to choose one or the other. Avoid pure growth stocks with no dividend; they give you
                no income foundation for the future.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">I only have $500 to invest. Is dividend investing worth it?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Absolutely. $500 at a 2% yield earns just $10 in year one, but with 12% annual growth and
                reinvestment, that $10 becomes $96 per year by year 20 and $298 per year by year 30. Add monthly
                contributions and the numbers get exciting fast. Every dollar you invest in your 20s is worth
                roughly 10x more than a dollar invested in your 50s.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I use a Roth IRA or taxable account for dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start with a Roth IRA (up to $7,000/year contribution limit in 2026). All dividends and capital gains
                grow tax-free and withdrawals in retirement are tax-free. After maxing the Roth, open a taxable
                brokerage account. In taxable accounts, qualified dividends are taxed at 0% for income under $47,025
                (single) -- meaning most young investors pay zero tax on dividends anyway.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How many dividend stocks should a beginner own?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start with 3-5 stocks and build to 10-15 over time. Quality over quantity. It is better to own 5
                well-researched stocks from this list than 30 random dividend payers. As your portfolio grows past
                $10,000, add more positions for diversification. At $50,000+, consider holding 15-20 stocks across
                8+ sectors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">When can I start living off my dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                It depends on your investment rate and target income. Investing $500/month in dividend growth stocks
                starting at age 25 could generate $3,000-5,000/month in dividend income by age 55-60, potentially
                enabling early retirement. The exact timeline depends on market returns and dividend growth rates.
                Use our DRIP calculator to model your specific scenario.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Model Your 30-Year Dividend Growth</h3>
            <p className="mb-6 text-purple-100">
              See how these dividend growth stocks compound over your investing lifetime. Input your age,
              monthly contribution, and watch the numbers explode.
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
            <Link href="/blog/dividend-investing-for-beginners-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Dividend Investing for Beginners: Complete 2026 Guide
            </Link>
            <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete Guide to DRIP Investing
            </Link>
            <Link href="/blog/best-dividend-stocks-under-20" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Stocks Under $20: Affordable Income
            </Link>
            <Link href="/blog/roth-ira-vs-taxable-for-dividend-investing" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Roth IRA vs Taxable Account for Dividend Investing
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
