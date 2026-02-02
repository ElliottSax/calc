import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, TrendingUp, Shield, DollarSign, CheckCircle2, AlertTriangle, BookOpen } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best Dividend Stocks for Beginners in 2026: Start Here',
  description: 'New to dividend investing? Start with these 10 beginner-friendly stocks with proven track records, safe dividends, and easy-to-understand businesses.',
}

export default function BestDividendStocksForBeginners() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <GraduationCap className="h-3 w-3 mr-1" />
          Complete Beginner's Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Dividend Stocks for Beginners
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Start your dividend investing journey with these 10 proven, easy-to-understand
          companies. Safe, reliable, and perfect for first-time investors.
        </p>
      </div>

      {/* What Makes a Good Beginner Stock */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>What Makes a Stock "Beginner-Friendly"?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Easy-to-understand business</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  You use their products every day. No complex technology or financial services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Long dividend history</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  25+ years of paying and increasing dividends. Proven track record through recessions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Financial stability</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Strong balance sheet, low debt, consistent profits. Can handle economic downturns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Moderate yield (2-5%)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Not too low (boring) or too high (risky). Sweet spot for sustainable growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Large, established company</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Multi-billion dollar market cap. Not going bankrupt anytime soon.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Your first dividend stocks should be companies you understand, trust, and can hold through
          market ups and downs. This guide features 10 <strong>dividend aristocrats</strong> (25+ years
          of consecutive increases) with simple business models and rock-solid financials.
        </p>
        <p>
          These aren't the highest-yielding stocks, but they're the <em>safest</em> and most
          <em> beginner-friendly</em>. Perfect for learning how dividend investing works without
          taking unnecessary risks.
        </p>
      </div>

      {/* Top 10 Beginner Stocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 10 Dividend Stocks for Beginners</h2>

        <div className="space-y-8">

          {/* Johnson & Johnson */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">1. Johnson & Johnson (JNJ)</CardTitle>
                    <Badge className="bg-green-600">Perfect First Stock</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Healthcare products you use every day | 62 years of dividend increases
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  3.0% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Price</p>
                  <p className="font-semibold">~$160/share</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$390B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">46%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                  <p className="font-semibold text-green-600">A+</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Why it's perfect for beginners:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• <strong>You know the products:</strong> Band-Aid, Tylenol, Listerine, Johnson's Baby, Neutrogena</li>
                  <li>• <strong>Recession-proof:</strong> People buy healthcare products in good times and bad</li>
                  <li>• <strong>62 years of increases:</strong> Has raised dividends every year since 1963</li>
                  <li>• <strong>Never cut:</strong> Maintained dividends through 2008 crisis, COVID, every recession</li>
                  <li>• <strong>Simple to understand:</strong> Makes stuff that helps people stay healthy</li>
                </ul>
              </div>

              <Card className="bg-blue-50 dark:bg-blue-950 mb-4">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold mb-2">💡 Beginner Tip:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Walk through a drugstore and count how many J&J products you see. That's your competitive advantage—
                    you understand this business better than Wall Street analysts who've never shopped for Band-Aids.
                  </p>
                </CardContent>
              </Card>

              <Link href="/stocks/jnj">
                <Button variant="outline" size="sm">
                  Calculate Your JNJ Returns →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Procter & Gamble */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">2. Procter & Gamble (PG)</CardTitle>
                    <Badge className="bg-blue-600">Ultra Safe</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Consumer products in every home | 68 years of dividend increases
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  2.4% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Price</p>
                  <p className="font-semibold">~$170/share</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$400B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">58%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                  <p className="font-semibold text-green-600">A+</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Why it's perfect for beginners:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• <strong>Brands you use daily:</strong> Tide, Pampers, Gillette, Crest, Dawn, Bounty</li>
                  <li>• <strong>68 years of increases:</strong> Longest dividend growth streak of any company</li>
                  <li>• <strong>Global reach:</strong> Sells in 180+ countries, not dependent on U.S. economy</li>
                  <li>• <strong>Pricing power:</strong> Can raise prices during inflation without losing customers</li>
                  <li>• <strong>Defensive:</strong> People still brush teeth and wash clothes during recessions</li>
                </ul>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                <strong>Fun fact:</strong> If you bought $10,000 of P&G in 1990 and reinvested dividends, you'd have
                over $100,000 today. That's the power of consistent dividend growth compounding.
              </p>

              <Link href="/stocks/pg">
                <Button variant="outline" size="sm">
                  Calculate Your PG Returns →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Coca-Cola */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">3. Coca-Cola (KO)</CardTitle>
                    <Badge className="bg-green-600">Warren Buffett's Favorite</Badge>
                  </div>
                  <CardDescription className="text-base">
                    World's most valuable beverage brand | 62 years of increases
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  3.0% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Price</p>
                  <p className="font-semibold">~$46/share</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$198B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">72%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Why it's perfect for beginners:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• <strong>Simplest business ever:</strong> Sells sugary drinks. That's it. Easy to understand.</li>
                  <li>• <strong>Global dominance:</strong> 2.2 billion servings consumed daily in 200+ countries</li>
                  <li>• <strong>Affordable:</strong> At $46/share, you can buy multiple shares with less capital</li>
                  <li>• <strong>Warren Buffett owns it:</strong> Berkshire Hathaway has held KO since 1988</li>
                  <li>• <strong>Emotional moat:</strong> People have deep connections to the Coke brand</li>
                </ul>
              </div>

              <Card className="bg-purple-50 dark:bg-purple-950 mb-4">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold mb-2">📖 Beginner Lesson:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Coca-Cola demonstrates the importance of <strong>brand power</strong>. Despite hundreds of cola
                    competitors, Coke maintains pricing power and customer loyalty. This is called an "economic moat"—
                    a competitive advantage that protects profits.
                  </p>
                </CardContent>
              </Card>

              <Link href="/stocks/ko">
                <Button variant="outline" size="sm">
                  Calculate Your KO Returns →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* PepsiCo */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">4. PepsiCo (PEP)</CardTitle>
                    <Badge className="bg-blue-600">More Diversified than Coke</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Beverages + Snacks (Frito-Lay) | 52 years of increases
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  2.9% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Price</p>
                  <p className="font-semibold">~$47/share</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$202B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">67%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Why it's perfect for beginners:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• <strong>You know the brands:</strong> Pepsi, Gatorade, Quaker, Doritos, Lay's, Cheetos</li>
                  <li>• <strong>Better diversification:</strong> 55% revenue from snacks, 45% from beverages</li>
                  <li>• <strong>Snacks growing faster:</strong> Frito-Lay has better margins than soft drinks</li>
                  <li>• <strong>Similar price to Coke:</strong> Easy to own both ($46-47/share each)</li>
                  <li>• <strong>International growth:</strong> Expanding in emerging markets</li>
                </ul>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                <strong>Coke vs Pepsi for beginners:</strong> Both are excellent. PEP has slightly better diversification
                (snacks), KO has slightly stronger brand value. Many investors own both for diversification.
              </p>

              <Link href="/stocks/pep">
                <Button variant="outline" size="sm">
                  Calculate Your PEP Returns →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* McDonald's */}
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">5. McDonald's (MCD)</CardTitle>
                    <Badge className="bg-yellow-600">Real Estate Play</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Fast food + real estate landlord | 48 years of increases
                  </CardDescription>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  2.2% Yield
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Price</p>
                  <p className="font-semibold">~$290/share</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$205B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">58%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Why it's perfect for beginners:</p>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• <strong>Everyone knows McDonald's:</strong> 40,000+ restaurants worldwide</li>
                  <li>• <strong>Not just burgers:</strong> Owns land and leases it to franchisees—real estate play</li>
                  <li>• <strong>Recession-resistant:</strong> People eat cheap fast food when times are tough</li>
                  <li>• <strong>High margins:</strong> Franchisees take most risk, MCD collects steady royalties</li>
                  <li>• <strong>Digital transformation:</strong> Mobile ordering growing fast</li>
                </ul>
              </div>

              <Card className="bg-yellow-50 dark:bg-yellow-950 mb-4">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold mb-2">🏢 Hidden Gem:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    McDonald's makes more money from <strong>real estate</strong> than hamburgers. They own the land
                    under most franchises and collect rent. This makes MCD more stable than typical restaurants.
                  </p>
                </CardContent>
              </Card>

              <Link href="/stocks/mcd">
                <Button variant="outline" size="sm">
                  Calculate Your MCD Returns →
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>

        {/* Quick Reference Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Comparison: Top 10 for Beginners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Company</th>
                    <th className="text-left p-2">Ticker</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">Years</th>
                    <th className="text-left p-2">What They Do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Johnson & Johnson</td><td className="p-2 font-mono">JNJ</td><td className="p-2 text-right">3.0%</td><td className="p-2 text-right">62</td><td className="p-2">Healthcare products</td></tr>
                  <tr className="border-b"><td className="p-2">Procter & Gamble</td><td className="p-2 font-mono">PG</td><td className="p-2 text-right">2.4%</td><td className="p-2 text-right">68</td><td className="p-2">Consumer goods</td></tr>
                  <tr className="border-b"><td className="p-2">Coca-Cola</td><td className="p-2 font-mono">KO</td><td className="p-2 text-right">3.0%</td><td className="p-2 text-right">62</td><td className="p-2">Beverages</td></tr>
                  <tr className="border-b"><td className="p-2">PepsiCo</td><td className="p-2 font-mono">PEP</td><td className="p-2 text-right">2.9%</td><td className="p-2 text-right">52</td><td className="p-2">Beverages + snacks</td></tr>
                  <tr className="border-b"><td className="p-2">McDonald's</td><td className="p-2 font-mono">MCD</td><td className="p-2 text-right">2.2%</td><td className="p-2 text-right">48</td><td className="p-2">Fast food + real estate</td></tr>
                  <tr className="border-b"><td className="p-2">3M Company</td><td className="p-2 font-mono">MMM</td><td className="p-2 text-right">6.2%</td><td className="p-2 text-right">66</td><td className="p-2">Industrial products</td></tr>
                  <tr className="border-b"><td className="p-2">Walmart</td><td className="p-2 font-mono">WMT</td><td className="p-2 text-right">1.4%</td><td className="p-2 text-right">51</td><td className="p-2">Retail</td></tr>
                  <tr className="border-b"><td className="p-2">Target</td><td className="p-2 font-mono">TGT</td><td className="p-2 text-right">2.9%</td><td className="p-2 text-right">56</td><td className="p-2">Retail</td></tr>
                  <tr className="border-b"><td className="p-2">Colgate-Palmolive</td><td className="p-2 font-mono">CL</td><td className="p-2 text-right">2.3%</td><td className="p-2 text-right">62</td><td className="p-2">Oral care + home</td></tr>
                  <tr><td className="p-2">Kimberly-Clark</td><td className="p-2 font-mono">KMB</td><td className="p-2 text-right">3.6%</td><td className="p-2 text-right">52</td><td className="p-2">Kleenex, Huggies</td></tr>
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
          title="Get Our Free Beginner's Dividend Investing Guide"
          description="Step-by-step walkthrough: opening account, placing first order, enabling DRIP, tracking dividends"
          buttonText="Send Me The Beginner Guide"
          source="beginner_stocks_blog"
        />
      </div>

      {/* Common Beginner Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">5 Mistakes Every Beginner Makes (And How to Avoid Them)</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Mistake #1: Chasing High Yields</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You see a stock yielding 10% and think "that's way better than 3%!"
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> High yields often signal high risk. The stock price has fallen
                (pushing yield up) because investors expect a dividend cut.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Stick with 2-4% yields from dividend aristocrats for your first 10 stocks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Mistake #2: Buying Only 1-2 Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> "I'll just buy Johnson & Johnson and call it a day."
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> Even safe stocks can have bad years. JNJ fell 20% in 2022.
                If that's your only holding, it hurts.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Own 10-20 dividend stocks across different sectors (healthcare, consumer, financials).
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Mistake #3: Not Reinvesting Dividends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You take dividend payments as cash and spend them.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> Reinvesting dividends (DRIP) is how you build wealth. Missing
                out on 20-30 years of compounding costs you hundreds of thousands.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Enable DRIP (automatic reinvestment) on every stock. Turn it off only in retirement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Mistake #4: Panic Selling During Downturns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> Market drops 20%, your stocks are down, you sell to "avoid losing more."
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> Dividends don't stop during downturns. You lock in losses by selling.
                The best returns come from buying MORE when prices are low.
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Focus on dividends, not stock prices. If JNJ still pays $4/share, nothing changed.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Mistake #5: Forgetting About Taxes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The trap:</strong> You invest in a taxable brokerage account and get hit with unexpected taxes.
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                <strong>The reality:</strong> Dividends are taxable income. Even with DRIP, you owe taxes on dividends
                received (except in retirement accounts).
              </p>
              <p className="text-sm font-semibold text-green-600">
                ✓ Solution: Start with a Roth IRA if eligible ($7,000/year limit). Dividends grow 100% tax-free forever.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Your First Week as a Dividend Investor</h2>

        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Action Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Mon
                </div>
                <div>
                  <p className="font-semibold">Open a brokerage account</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Choose M1 Finance, Fidelity, or Schwab. Use Roth IRA if eligible (tax-free growth).
                    Takes 10-15 minutes to open online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Tue
                </div>
                <div>
                  <p className="font-semibold">Fund your account</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Transfer $1,000-5,000 from your bank (or whatever you're comfortable investing).
                    Takes 2-3 days to clear.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Wed
                </div>
                <div>
                  <p className="font-semibold">Research your first 3 stocks</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Pick 3 from this list. Read about them. Use our calculators to see projected returns.
                    Good starter combo: JNJ, KO, PG.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Thu
                </div>
                <div>
                  <p className="font-semibold">Place your first orders</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Buy equal amounts of each ($333 each if you have $1,000). Use "market order" during
                    market hours (9:30am-4pm ET). Don't overthink it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Fri
                </div>
                <div>
                  <p className="font-semibold">Enable DRIP on all holdings</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Go to account settings → Dividend Reinvestment → Enable for all stocks.
                    This makes dividends automatically buy more shares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Sat
                </div>
                <div>
                  <p className="font-semibold">Set up automatic monthly investments</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Schedule $200-500/month auto-transfers and auto-investments. This is the secret to
                    building wealth—consistency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  Sun
                </div>
                <div>
                  <p className="font-semibold">Track your first dividend payment</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Check when your stocks pay dividends (most are quarterly). Mark your calendar for the
                    first payment. It's exciting to see money appear!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Best Brokers */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Best Brokers for Beginners</CardTitle>
            <CardDescription>All offer $0 commissions, fractional shares, and DRIP</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">M1 Finance</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best for automatic investing (set it and forget it)</p>
                  <p className="text-xs text-green-600 mt-1">Perfect for beginners who want full automation</p>
                </div>
                <Link href="/brokers/m1-finance">
                  <Button>Open Account →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Fidelity</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best research tools + excellent customer service</p>
                  <p className="text-xs text-green-600 mt-1">Great for beginners who want to learn</p>
                </div>
                <Link href="/brokers/fidelity">
                  <Button variant="outline">Open Account →</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div>
                  <h4 className="font-bold">Charles Schwab</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Best all-around platform with great mobile app</p>
                  <p className="text-xs text-green-600 mt-1">Solid choice for long-term investors</p>
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
        <h2 className="text-3xl font-bold mb-6">Beginner FAQs</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much money do I need to start?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Minimum: $500-1,000.</strong> With fractional shares, you can technically start with $100,
                but $500-1,000 lets you diversify across 3-5 stocks immediately. Many investors start with
                $3,000-5,000 to buy 10 different stocks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long until I see dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Most stocks pay quarterly (every 3 months). If you buy JNJ today and they pay in 2 months,
                you'll see your first dividend in 2 months. Your second dividend comes 3 months after that.
                Set calendar reminders to track them!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I buy all 10 stocks at once or slowly?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Start with 3-5 stocks, then add one per month.</strong> This spreads out your entry points
                and helps you learn. Example: Month 1 buy JNJ/KO/PG, Month 2 add PEP, Month 3 add MCD, etc.
                By Month 10 you'll have a full portfolio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if the stock price drops after I buy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This is normal and expected. Stock prices fluctuate daily. <strong>Focus on the dividend, not
                the price.</strong> If you bought JNJ at $160 and it drops to $140, your dividend didn't change—
                you still collect $4/share per year. In fact, now's a good time to buy MORE at the lower price.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do I need to pick the "perfect" time to buy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No. Timing the market is impossible. It's better to buy a great stock at a "good enough" price
                today than to wait for the "perfect" price that never comes. With dividend aristocrats, you're
                holding for 20-30 years—the entry price barely matters long-term.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">You're Ready to Start</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              These 10 stocks are battle-tested through decades of recessions, wars, and market crashes.
              They're not exciting or "get rich quick," but they're proven, reliable, and perfect for
              beginners building long-term wealth. Start with 3-5 of them this week.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks">
                <Button className="w-full" size="lg">
                  Calculate Your Returns →
                </Button>
              </Link>
              <Link href="/blog/drip-investing-guide">
                <Button variant="outline" className="w-full" size="lg">
                  Learn About DRIP →
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 text-center">
              Remember: The best time to start was 20 years ago. The second best time is today.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/drip-investing-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Complete DRIP Investing Guide</CardTitle>
                <CardDescription>Essential reading for beginners</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-build-1000-month-dividend-portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Build a $1,000/Month Portfolio</CardTitle>
                <CardDescription>Your long-term roadmap</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-tax-guide-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Tax Guide 2026</CardTitle>
                <CardDescription>Save money on taxes from day one</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/top-dividend-aristocrats-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Top 10 Dividend Aristocrats</CardTitle>
                <CardDescription>More 25+ year dividend growers</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
