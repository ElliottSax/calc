import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, TrendingUp, Shield, DollarSign, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'

export const metadata = {
  title: 'Best Bank Dividend Stocks: Financial Sector Income Picks 2026',
  description: 'Discover the top bank dividend stocks for 2026. Expert analysis of JPMorgan, Bank of America, Wells Fargo, and 12 more banks with dividend yields, safety ratings, and growth potential.',
  keywords: 'best bank dividend stocks, bank stocks dividends, financial sector dividends, bank dividend yields, JPM dividend, BAC dividend, bank stock investing',
}

export default function BestBankDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Building2 className="h-3 w-3 mr-1" />
          Banking Sector Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Bank Dividend Stocks: Financial Sector Income Picks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Top bank stocks paying 2.5-5% dividends with strong growth potential.
          Benefit from rising interest rates, fortress balance sheets, and proven dividend track records.
        </p>
      </div>

      {/* TL;DR Summary */}
      <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            TL;DR: Quick Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Best Overall:</strong> JPMorgan Chase (JPM) - 2.4% yield, 13+ years of dividend growth, fortress balance sheet
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Highest Yield:</strong> Regional banks like Truist (TFC) and U.S. Bancorp (USB) offer 4-5% yields
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Fast Growth:</strong> Bank of America (BAC) leads with 9%+ annual dividend growth
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>2026 Outlook:</strong> Banks benefit from higher interest rates, strong capital ratios, and returning $150B+ to shareholders
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2 text-sm">
            <a href="#top-banks" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Top 15 Bank Dividend Stocks</a>
            <a href="#comparison-table" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Quick Comparison Table</a>
            <a href="#why-banks-2026" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Why Bank Stocks in 2026?</a>
            <a href="#bank-types" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Bank Types Explained</a>
            <a href="#dividend-safety" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Bank Dividend Safety Analysis</a>
            <a href="#interest-rates" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Interest Rate Sensitivity</a>
            <a href="#regulations" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Regulatory Environment</a>
            <a href="#portfolio-examples" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Sample Bank Portfolios</a>
            <a href="#how-to-buy" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ How to Buy Bank Stocks</a>
            <a href="#faq" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400">→ Frequently Asked Questions</a>
          </nav>
        </CardContent>
      </Card>

      {/* Introduction */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Bank dividend stocks represent one of the most compelling opportunities for income investors in 2026.
          After years of regulatory constraints following the 2008 financial crisis, major U.S. banks have built
          <strong> fortress balance sheets</strong> with capital ratios 2-3x higher than pre-crisis levels. Combined
          with rising interest rates that boost profit margins, banks are now returning over $150 billion annually
          to shareholders through dividends and buybacks.
        </p>
        <p>
          This comprehensive guide covers the <strong>15 best bank dividend stocks</strong> across money center banks,
          regional banks, and specialized financial institutions. You'll learn which banks offer the safest dividends,
          fastest growth, and highest yields—plus how to build a diversified banking portfolio that generates reliable
          passive income.
        </p>
      </div>

      {/* Top 15 Banks */}
      <section id="top-banks" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 15 Bank Dividend Stocks for 2026</h2>

        <div className="space-y-6">
          {/* JPMorgan Chase */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">1. JPMorgan Chase (JPM)</CardTitle>
                  <CardDescription>America's largest bank | 13+ years of dividend growth</CardDescription>
                </div>
                <Badge className="bg-green-600">2.4% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$620B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">8.5%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">28%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$3.9T</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                JPMorgan Chase is the gold standard of bank dividend stocks. With $3.9 trillion in assets, JPM dominates
                investment banking, commercial banking, credit cards (Chase), and wealth management. The bank has increased
                dividends for 13 consecutive years with an 8.5% average annual growth rate. CEO Jamie Dimon built a fortress
                balance sheet with a CET1 capital ratio above 14%—well above regulatory minimums.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                JPM survived and thrived during the 2008 financial crisis by acquiring Bear Stearns and Washington Mutual at
                distressed prices. The bank benefits enormously from higher interest rates, with net interest income up 49%
                from 2021-2023. Low 28% payout ratio leaves substantial room for future dividend increases. Best overall pick
                for quality-focused dividend investors.
              </p>

              <div className="flex gap-3 mt-4">
                <Link href="/stocks/jpm">
                  <Button variant="outline" size="sm">Calculate JPM Returns →</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Bank of America */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">2. Bank of America (BAC)</CardTitle>
                  <CardDescription>Second-largest bank | Highest dividend growth</CardDescription>
                </div>
                <Badge className="bg-blue-600">2.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$340B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">9.2%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">25%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Deposits</p>
                  <p className="font-semibold">$1.9T</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Bank of America combines size, dividend growth, and rate sensitivity. With $1.9 trillion in low-cost deposits,
                BAC benefits more than any other bank from rising interest rates. The massive retail branch network provides
                stable, sticky deposits that cost far less than wholesale funding. Merrill Lynch integration is complete,
                creating a powerful wealth management platform.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                BAC leads major banks in dividend growth at 9.2% annually—faster than JPM. The ultralow 25% payout ratio
                means dividends are exceptionally safe with ample room for increases. Best bank stock for investors seeking
                dividend growth over current yield. Warren Buffett's Berkshire Hathaway owns 1 billion shares (10% stake).
              </p>
            </CardContent>
          </Card>

          {/* Wells Fargo */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">3. Wells Fargo (WFC)</CardTitle>
                  <CardDescription>Turnaround story | Recovering dividend growth</CardDescription>
                </div>
                <Badge className="bg-purple-600">3.0% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$230B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-orange-600">Rebuilding</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">32%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Valuation</p>
                  <p className="font-semibold">0.9x Book</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">A-</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Wells Fargo is the classic turnaround play. After the 2016 fake accounts scandal and regulatory penalties,
                WFC cut its dividend 80% during the 2020 pandemic. Under new CEO Charlie Scharf, the bank has rebuilt capital,
                resolved regulatory issues, and resumed dividend increases and share buybacks.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Trading at 0.9x book value (vs 1.4x for JPM), WFC offers value investors an opportunity. The 3% yield is
                higher than JPM/BAC, with significant dividend growth potential as the turnaround progresses. Higher risk
                than JPM/BAC but potentially higher reward. Best for investors comfortable with turnaround situations.
              </p>
            </CardContent>
          </Card>

          {/* Citigroup */}
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">4. Citigroup (C)</CardTitle>
                  <CardDescription>Global banking leader | Undervalued</CardDescription>
                </div>
                <Badge className="bg-indigo-600">3.6% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$145B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-blue-600">5.5%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">35%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Presence</p>
                  <p className="font-semibold">95+ countries</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Citigroup offers the highest yield among money center banks at 3.6%. Unlike domestic-focused JPM/BAC,
                Citi operates in 95+ countries with unique strength in emerging markets and institutional banking. CEO
                Jane Fraser is executing a strategic simplification—exiting 14 consumer markets to focus on profitable
                institutional and wealth management businesses.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Trading at just 0.6x book value, Citi is deeply undervalued. The 35% payout ratio provides dividend safety
                with growth potential. Higher complexity and regulatory challenges make this less suitable for beginners,
                but experienced investors recognize the value opportunity.
              </p>
            </CardContent>
          </Card>

          {/* U.S. Bancorp */}
          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">5. U.S. Bancorp (USB)</CardTitle>
                  <CardDescription>Best regional bank | Premium quality</CardDescription>
                </div>
                <Badge className="bg-teal-600">4.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$75B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">14 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">48%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">ROE</p>
                  <p className="font-semibold">13.5%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                U.S. Bancorp is the crown jewel of regional banking. Known for superior profitability (13.5% ROE vs 10%
                industry average), USB operates the fifth-largest bank in America with a Midwest and West Coast footprint.
                The 4.2% dividend yield is significantly higher than money center banks while maintaining comparable quality.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                USB has increased dividends for 14 consecutive years. Conservative lending standards and strong credit
                underwriting mean lower loan losses than peers. Best pick for investors wanting regional bank yields with
                money center bank quality.
              </p>
            </CardContent>
          </Card>

          {/* Truist Financial */}
          <Card className="border-l-4 border-l-pink-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">6. Truist Financial (TFC)</CardTitle>
                  <CardDescription>Southeast regional leader | High yield</CardDescription>
                </div>
                <Badge className="bg-pink-600">4.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$58B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-blue-600">8 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">55%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$535B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">A-</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Truist was formed in 2019 from the merger of BB&T and SunTrust, creating the sixth-largest U.S. bank.
                Concentrated in the fast-growing Southeast (North Carolina to Florida), TFC combines the dividend traditions
                of both legacy banks. The 4.8% yield is among the highest for investment-grade regional banks.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Post-merger integration is 95% complete, with $1.6 billion in annual cost savings realized. Strong presence
                in high-growth markets like Charlotte, Atlanta, and Raleigh. Best for income investors willing to accept
                slightly lower safety for materially higher yield.
              </p>
            </CardContent>
          </Card>

          {/* PNC Financial */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">7. PNC Financial Services (PNC)</CardTitle>
                  <CardDescription>Mid-Atlantic leader | Balanced profile</CardDescription>
                </div>
                <Badge className="bg-orange-600">3.8% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$82B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">13 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">42%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$560B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                PNC is the seventh-largest bank with strong positions in Pennsylvania, Ohio, and North Carolina. The 2021
                acquisition of BBVA USA's operations expanded PNC into Texas, Arizona, and California—adding $100 billion
                in assets. This geographic diversification reduces concentration risk versus pure regional banks.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                PNC combines a healthy 3.8% yield with 13 years of dividend growth and moderate 42% payout ratio. Strong
                corporate banking and wealth management franchises provide diversified revenue. Well-balanced choice for
                investors seeking quality regional exposure.
              </p>
            </CardContent>
          </Card>

          {/* Fifth Third Bancorp */}
          <Card className="border-l-4 border-l-lime-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">8. Fifth Third Bancorp (FITB)</CardTitle>
                  <CardDescription>Midwest regional | Value play</CardDescription>
                </div>
                <Badge className="bg-lime-600">4.1% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$28B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-blue-600">11 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">45%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">P/E Ratio</p>
                  <p className="font-semibold">9.5x</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Fifth Third operates primarily in Ohio, Michigan, Illinois, and Indiana with strong Midwest market share.
                The unusual name comes from its 1908 merger of the Fifth National Bank and Third National Bank of Cincinnati.
                FITB offers compelling value at just 9.5x earnings—well below peer averages.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The 4.1% yield is attractive for a bank with 11 consecutive years of dividend increases. Geographic
                concentration in the Midwest creates both risk (economic dependence) and opportunity (local expertise).
                Best for value investors seeking regional bank yields at bargain valuations.
              </p>
            </CardContent>
          </Card>

          {/* M&T Bank */}
          <Card className="border-l-4 border-l-cyan-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">9. M&T Bank Corporation (MTB)</CardTitle>
                  <CardDescription>Northeast regional | Conservative lender</CardDescription>
                </div>
                <Badge className="bg-cyan-600">3.5% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$35B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">8 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">38%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">NPL Ratio</p>
                  <p className="font-semibold">0.4%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-green-600">A</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                M&T Bank is known for exceptionally conservative lending with a 0.4% nonperforming loan ratio—among the
                lowest in banking. Concentrated in New York, Maryland, Pennsylvania, and New Jersey, MTB acquired People's
                United Financial in 2022, expanding into New England and strengthening market positions.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Warren Buffett has owned M&T shares for decades, praising its disciplined underwriting culture. Lower
                3.5% yield reflects premium quality and safety. Best for conservative investors prioritizing dividend
                safety over current yield.
              </p>
            </CardContent>
          </Card>

          {/* Huntington Bancshares */}
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">10. Huntington Bancshares (HBAN)</CardTitle>
                  <CardDescription>Midwest regional | High dividend growth</CardDescription>
                </div>
                <Badge className="bg-emerald-600">4.6% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$24B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">10.5%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">52%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$185B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Huntington combines high current yield (4.6%) with exceptional dividend growth (10.5% annually).
                Concentrated in Ohio, Michigan, Pennsylvania, and Illinois, the 2021 TCF Financial acquisition doubled
                Huntington's size and expanded into Minnesota and Colorado.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Strong commercial banking relationships and consumer-friendly policies (no overdraft fees) drive deposit
                growth. Best regional bank for investors seeking both high yield and dividend growth—a rare combination.
              </p>
            </CardContent>
          </Card>

          {/* KeyCorp */}
          <Card className="border-l-4 border-l-rose-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">11. KeyCorp (KEY)</CardTitle>
                  <CardDescription>Regional bank | Recovering yield</CardDescription>
                </div>
                <Badge className="bg-rose-600">5.2% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$18B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-blue-600">7 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">68%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$190B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                KeyCorp offers the highest yield on this list at 5.2%, reflecting market concerns about asset quality and
                exposure to commercial real estate. Operating primarily in Ohio, New York, and the Pacific Northwest, KEY
                is restructuring its commercial real estate portfolio and focusing on fee-based businesses.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Higher risk profile due to 68% payout ratio and CRE exposure. Best for experienced investors seeking
                maximum yield who understand and accept elevated risk. Not recommended for conservative investors.
              </p>
            </CardContent>
          </Card>

          {/* Regions Financial */}
          <Card className="border-l-4 border-l-violet-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">12. Regions Financial (RF)</CardTitle>
                  <CardDescription>Southeast regional | Solid fundamentals</CardDescription>
                </div>
                <Badge className="bg-violet-600">4.3% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$22B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">9 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">47%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$155B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Regions Financial operates across the Southeast (Alabama, Florida, Georgia, Tennessee, Texas) with
                leadership positions in many markets. The 4.3% yield is attractive with a comfortable 47% payout ratio
                suggesting dividend sustainability and growth potential.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Strong focus on relationship banking and fee income generation. Benefits from fast-growing Southeast
                demographics and business migration. Solid choice for diversifying regional bank exposure beyond the
                Midwest and Northeast.
              </p>
            </CardContent>
          </Card>

          {/* Citizens Financial Group */}
          <Card className="border-l-4 border-l-fuchsia-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">13. Citizens Financial Group (CFG)</CardTitle>
                  <CardDescription>Northeast regional | Quality operations</CardDescription>
                </div>
                <Badge className="bg-fuchsia-600">3.9% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$19B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-blue-600">7 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">41%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$220B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Citizens operates primarily across New England and the Mid-Atlantic with strength in Rhode Island,
                Massachusetts, Pennsylvania, and Ohio. The bank has transformed from a sleepy RBS subsidiary into an
                efficiently run regional powerhouse focused on digital banking and commercial relationships.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Conservative 41% payout ratio provides dividend safety and growth runway. Strong technology investments
                position CFG well for digital competition. Good regional bank choice for quality-focused investors.
              </p>
            </CardContent>
          </Card>

          {/* Comerica */}
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">14. Comerica (CMA)</CardTitle>
                  <CardDescription>Texas-focused | Rate-sensitive</CardDescription>
                </div>
                <Badge className="bg-amber-600">4.5% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$8B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div History</p>
                  <p className="font-semibold text-green-600">15 years</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">44%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$87B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Comerica is concentrated in Texas, California, and Michigan with particularly strong Texas market share.
                The bank is highly sensitive to interest rates due to its large corporate loan book and deposit base.
                This creates volatility but also opportunity when rates rise.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Impressive 15-year dividend growth streak despite challenges. The 4.5% yield and 44% payout ratio offer
                attractive income with sustainability. Best for investors bullish on Texas growth and comfortable with
                interest rate sensitivity.
              </p>
            </CardContent>
          </Card>

          {/* Zions Bancorporation */}
          <Card className="border-l-4 border-l-sky-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">15. Zions Bancorporation (ZION)</CardTitle>
                  <CardDescription>Western regional | High ROE</CardDescription>
                </div>
                <Badge className="bg-sky-600">4.0% Yield</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$8B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">ROE</p>
                  <p className="font-semibold text-green-600">12.8%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">39%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Assets</p>
                  <p className="font-semibold">$90B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-blue-600">B+</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Zions operates across the Western U.S. (Utah, Idaho, Nevada, Arizona, Colorado, New Mexico, Washington,
                Oregon) through regional brands. The bank maintains one of the highest returns on equity (12.8%) among
                regional banks through disciplined lending and expense control.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Low 39% payout ratio provides substantial dividend growth potential. Exposure to fast-growing Western
                markets with strong demographics. Best for investors seeking regional bank exposure in high-growth
                Western markets.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section id="comparison-table" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Quick Comparison: Top 15 Bank Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Ticker</th>
                    <th className="text-left p-2">Bank Name</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-right p-2">Payout</th>
                    <th className="text-right p-2">5yr Growth</th>
                    <th className="text-left p-2">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2 font-mono">JPM</td><td className="p-2">JPMorgan Chase</td><td className="p-2 text-right">2.4%</td><td className="p-2 text-right">28%</td><td className="p-2 text-right text-green-600">8.5%</td><td className="p-2">Money Center</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">BAC</td><td className="p-2">Bank of America</td><td className="p-2 text-right">2.8%</td><td className="p-2 text-right">25%</td><td className="p-2 text-right text-green-600">9.2%</td><td className="p-2">Money Center</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">WFC</td><td className="p-2">Wells Fargo</td><td className="p-2 text-right">3.0%</td><td className="p-2 text-right">32%</td><td className="p-2 text-right text-blue-600">4.5%</td><td className="p-2">Money Center</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">C</td><td className="p-2">Citigroup</td><td className="p-2 text-right">3.6%</td><td className="p-2 text-right">35%</td><td className="p-2 text-right text-blue-600">5.5%</td><td className="p-2">Money Center</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">USB</td><td className="p-2">U.S. Bancorp</td><td className="p-2 text-right">4.2%</td><td className="p-2 text-right">48%</td><td className="p-2 text-right text-green-600">7.2%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">TFC</td><td className="p-2">Truist Financial</td><td className="p-2 text-right">4.8%</td><td className="p-2 text-right">55%</td><td className="p-2 text-right text-blue-600">5.8%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">PNC</td><td className="p-2">PNC Financial</td><td className="p-2 text-right">3.8%</td><td className="p-2 text-right">42%</td><td className="p-2 text-right text-blue-600">6.5%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">FITB</td><td className="p-2">Fifth Third Bancorp</td><td className="p-2 text-right">4.1%</td><td className="p-2 text-right">45%</td><td className="p-2 text-right text-blue-600">6.8%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">MTB</td><td className="p-2">M&T Bank</td><td className="p-2 text-right">3.5%</td><td className="p-2 text-right">38%</td><td className="p-2 text-right text-blue-600">5.2%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">HBAN</td><td className="p-2">Huntington Bancshares</td><td className="p-2 text-right">4.6%</td><td className="p-2 text-right">52%</td><td className="p-2 text-right text-green-600">10.5%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">KEY</td><td className="p-2">KeyCorp</td><td className="p-2 text-right">5.2%</td><td className="p-2 text-right">68%</td><td className="p-2 text-right text-blue-600">4.2%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">RF</td><td className="p-2">Regions Financial</td><td className="p-2 text-right">4.3%</td><td className="p-2 text-right">47%</td><td className="p-2 text-right text-blue-600">6.1%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">CFG</td><td className="p-2">Citizens Financial</td><td className="p-2 text-right">3.9%</td><td className="p-2 text-right">41%</td><td className="p-2 text-right text-blue-600">5.8%</td><td className="p-2">Regional</td></tr>
                  <tr className="border-b"><td className="p-2 font-mono">CMA</td><td className="p-2">Comerica</td><td className="p-2 text-right">4.5%</td><td className="p-2 text-right">44%</td><td className="p-2 text-right text-blue-600">6.4%</td><td className="p-2">Regional</td></tr>
                  <tr><td className="p-2 font-mono">ZION</td><td className="p-2">Zions Bancorporation</td><td className="p-2 text-right">4.0%</td><td className="p-2 text-right">39%</td><td className="p-2 text-right text-blue-600">5.9%</td><td className="p-2">Regional</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
              Data as of February 2026. Yields and growth rates are subject to change. Past performance does not guarantee future results.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Bank Dividend Stock Rankings"
          description="Complete analysis of 30+ bank stocks with dividend safety scores, growth projections, and buy recommendations"
          buttonText="Download Free Rankings"
          source="bank_dividend_blog"
        />
      </div>

      {/* Why Banks in 2026 */}
      <section id="why-banks-2026" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Bank Stocks Are Attractive in 2026</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Higher Interest Rates Boost Profitability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Banks earn money from the spread between what they pay depositors (low rates) and charge borrowers
                (high rates). This "net interest margin" expands when interest rates rise. From 2021-2024, the Federal
                Reserve raised rates from near-zero to 5.25%, creating the best environment for bank profitability in
                15 years.
              </p>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg mb-3">
                <p className="text-sm font-semibold mb-2">JPMorgan Example:</p>
                <ul className="text-sm space-y-1">
                  <li>• 2021 net interest income: $52 billion</li>
                  <li>• 2023 net interest income: $78 billion</li>
                  <li>• <strong>49% increase in just 2 years</strong></li>
                </ul>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Even if the Fed cuts rates modestly in 2026, banks will maintain wider spreads than the 2015-2020
                period. This supports strong earnings and dividend growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Fortress Balance Sheets Post-2008 Reforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Banks operating today are fundamentally different—and safer—than pre-2008 crisis banks. Regulatory
                reforms require:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Capital Requirements</p>
                  <ul className="text-xs space-y-1">
                    <li>• Pre-2008: 4-6% capital ratios</li>
                    <li>• Today: 10-14% capital ratios</li>
                    <li>• 2-3x more capital cushion</li>
                    <li>• Can absorb major losses without failure</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Stress Testing</p>
                  <ul className="text-xs space-y-1">
                    <li>• Annual CCAR stress tests</li>
                    <li>• Scenario: 10% unemployment + recession</li>
                    <li>• Must maintain capital even in crisis</li>
                    <li>• Failed tests = dividend restrictions</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mt-3">
                These reforms mean bank dividends are far safer today. Major banks maintained dividends through the
                2020 pandemic—something unthinkable in 2008.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-600" />
                Massive Capital Return Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                With strong capital ratios and profits, banks are returning record amounts to shareholders:
              </p>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg mb-3">
                <p className="text-sm font-semibold mb-2">2025 Capital Returns (Estimated):</p>
                <ul className="text-sm space-y-1">
                  <li>• JPMorgan: $35 billion (dividends + buybacks)</li>
                  <li>• Bank of America: $28 billion</li>
                  <li>• Wells Fargo: $18 billion</li>
                  <li>• Citigroup: $15 billion</li>
                  <li>• <strong>Industry total: $150+ billion</strong></li>
                </ul>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                Low payout ratios (25-35% for major banks) mean dividends consume only one-third of earnings. The
                rest funds buybacks, which reduce share count and boost per-share dividends over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bank Types Explained */}
      <section id="bank-types" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Bank Types Explained: Money Center vs Regional</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Money Center Banks</CardTitle>
              <Badge variant="outline" className="text-green-600">JPM, BAC, WFC, C</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                The four largest U.S. banks with nationwide and global operations. Called "money center" because
                they're headquartered in major financial centers (New York, Charlotte, San Francisco).
              </p>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Characteristics:</p>
                <ul className="text-xs space-y-1">
                  <li>• $500B - $3.9T in assets</li>
                  <li>• Diversified revenue streams</li>
                  <li>• Investment banking + commercial banking</li>
                  <li>• International operations</li>
                  <li>• Lower yields (2.4-3.6%)</li>
                  <li>• Faster dividend growth (5-9%/yr)</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-semibold mb-1">Best For:</p>
                <p className="text-xs">
                  Conservative investors wanting maximum safety, dividend growth, and willingness to accept lower
                  current yields. Think: "own forever" stocks.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Regional Banks</CardTitle>
              <Badge variant="outline" className="text-blue-600">USB, TFC, PNC, FITB, MTB</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Medium-sized banks focused on specific geographic regions. Operate primarily through branch networks
                serving consumers and local businesses.
              </p>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Characteristics:</p>
                <ul className="text-xs space-y-1">
                  <li>• $50B - $600B in assets</li>
                  <li>• Regional concentration (Midwest, Southeast, etc.)</li>
                  <li>• Commercial + consumer lending focus</li>
                  <li>• Limited international exposure</li>
                  <li>• Higher yields (3.5-5.2%)</li>
                  <li>• Moderate dividend growth (5-7%/yr)</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm font-semibold mb-1">Best For:</p>
                <p className="text-xs">
                  Income-focused investors wanting higher current yields, willing to accept geographic concentration
                  risk. Think: "income now" stocks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Which Type Should You Choose?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Conservative Approach (Recommended for Beginners)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  70% money center banks (JPM, BAC) + 30% quality regional (USB). Prioritizes safety and dividend
                  growth over current yield.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Balanced Approach</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  50% money center + 50% regional. Balances yield and growth. Example: JPM, BAC, USB, TFC in equal
                  weights.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="font-semibold mb-2">Income-Focused Approach</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  30% money center + 70% regional. Maximizes current yield. Example: JPM for anchor, then TFC, USB,
                  HBAN, KEY for yield.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dividend Safety Analysis */}
      <section id="dividend-safety" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Bank Dividend Safety: How to Evaluate</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Key Metrics for Bank Dividend Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-l-green-500 bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2">1. Payout Ratio (Target: Under 50%)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Percentage of earnings paid as dividends. Lower is safer with more room for increases.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Very Safe:</strong> Under 35% (JPM 28%, BAC 25%)</li>
                  <li>• <strong>Safe:</strong> 35-50% (most regionals)</li>
                  <li>• <strong>Moderate:</strong> 50-65% (TFC 55%, KEY 68%)</li>
                  <li>• <strong>Risky:</strong> Over 65% (limits growth, cut risk)</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-l-blue-500 bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2">2. Capital Ratios (CET1 Target: Above 10%)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Common Equity Tier 1 ratio measures capital cushion. Higher means more resilience.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Fortress:</strong> 13%+ (JPM 14.2%, BAC 11.8%)</li>
                  <li>• <strong>Strong:</strong> 10-13% (most large banks)</li>
                  <li>• <strong>Adequate:</strong> 8-10% (regulatory minimum 7%)</li>
                  <li>• <strong>Concerning:</strong> Below 8%</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-l-purple-500 bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2">3. Dividend History (Target: 5+ Years)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Years of consecutive dividend increases. Longer history = stronger commitment.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Elite:</strong> 10+ years (JPM 13, BAC 11, CMA 15)</li>
                  <li>• <strong>Proven:</strong> 5-10 years (most quality regionals)</li>
                  <li>• <strong>Rebuilding:</strong> Under 5 years (WFC recovering)</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-l-orange-500 bg-slate-50 dark:bg-slate-900">
                <p className="font-semibold mb-2">4. Asset Quality (NPL Ratio Target: Under 1%)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Nonperforming loans as % of total loans. Lower means better lending quality.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Excellent:</strong> Under 0.5% (MTB 0.4%, USB 0.3%)</li>
                  <li>• <strong>Good:</strong> 0.5-1.0% (most major banks)</li>
                  <li>• <strong>Acceptable:</strong> 1.0-2.0%</li>
                  <li>• <strong>Warning:</strong> Above 2.0%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dividend Safety Rankings (February 2026)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <div>
                  <p className="font-semibold">Safest Dividends (A+ Rating)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Virtually no cut risk, room for growth</p>
                </div>
                <div className="text-sm">
                  JPM, BAC, USB, MTB
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div>
                  <p className="font-semibold">Very Safe (A Rating)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Strong fundamentals, low cut risk</p>
                </div>
                <div className="text-sm">
                  PNC, FITB, CFG
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <div>
                  <p className="font-semibold">Safe with Caveats (A- to B+ Rating)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Generally safe but monitor closely</p>
                </div>
                <div className="text-sm">
                  WFC, TFC, HBAN, RF, ZION, CMA
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <div>
                  <p className="font-semibold">Moderate Risk (B Rating)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Higher payout ratios or challenges</p>
                </div>
                <div className="text-sm">
                  C, KEY
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interest Rate Sensitivity */}
      <section id="interest-rates" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Interest Rate Sensitivity: Which Banks Benefit Most?</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How Interest Rates Affect Bank Dividends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Banks make money from net interest margin (NIM)—the difference between loan interest earned and deposit
              interest paid. When rates rise, margins generally expand because:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold text-sm mb-2">Loan Rates Adjust Quickly</p>
                <ul className="text-xs space-y-1">
                  <li>• Variable-rate loans reprice immediately</li>
                  <li>• Credit cards and HELOCs track prime rate</li>
                  <li>• New loans priced at higher rates</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold text-sm mb-2">Deposit Rates Lag Behind</p>
                <ul className="text-xs space-y-1">
                  <li>• Checking accounts pay near-zero</li>
                  <li>• Savings rates increase slowly</li>
                  <li>• Customer inertia benefits banks</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Result: Profit margins expand, boosting earnings and dividends. However, banks vary significantly in
              rate sensitivity based on their deposit mix and loan portfolio.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Most Rate-Sensitive Banks (Biggest Winners from Rising Rates)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-l-green-500 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold">Bank of America (BAC)</p>
                  <Badge className="bg-green-600">Highest Sensitivity</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  $1.9 trillion in low-cost deposits—the largest U.S. deposit base. Many are checking accounts
                  paying 0.01%. When rates rise, BAC reprices loans quickly but deposits slowly, creating massive
                  margin expansion.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Rate Impact:</strong> Each 1% rate increase adds ~$5-6 billion annual profit
                </p>
              </div>

              <div className="p-4 border-l-4 border-l-blue-500 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold">Comerica (CMA)</p>
                  <Badge className="bg-blue-600">High Sensitivity</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Large corporate loan book with variable rates. Minimal consumer deposits mean lower funding costs.
                  Benefits enormously when Fed raises rates.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Trade-off:</strong> Also suffers most when rates fall
                </p>
              </div>

              <div className="p-4 border-l-4 border-l-purple-500 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold">Citizens Financial (CFG)</p>
                  <Badge className="bg-purple-600">High Sensitivity</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  High percentage of variable-rate commercial loans. Disclosed net interest income sensitivity of
                  $500M+ per 1% rate change.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Least Rate-Sensitive Banks (More Stable Through Cycles)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-l-slate-500 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold">JPMorgan Chase (JPM)</p>
                  <Badge variant="outline">Balanced</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Diversified revenue streams reduce rate dependency. Investment banking, wealth management, and credit
                  card fees provide income regardless of rates. Still benefits from rising rates but less dramatically
                  than pure lending banks.
                </p>
              </div>

              <div className="p-4 border-l-4 border-l-slate-500 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold">M&T Bank (MTB)</p>
                  <Badge variant="outline">Balanced</Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Conservative fixed-rate mortgage portfolio limits rate sensitivity. Slower to benefit from rising
                  rates but also protected when rates fall.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Regulations */}
      <section id="regulations" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Understanding Bank Regulations and Dividends</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Key Regulations Affecting Bank Dividends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2">CCAR (Comprehensive Capital Analysis and Review)</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Annual stress test for banks with $100B+ assets. Fed simulates severe recession scenario:
                </p>
                <ul className="text-xs space-y-1 mb-2">
                  <li>• 10% unemployment rate</li>
                  <li>• 40% stock market crash</li>
                  <li>• 25% home price decline</li>
                  <li>• Banks must maintain minimum capital ratios through scenario</li>
                </ul>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Impact on dividends:</strong> Banks can only pay dividends if they pass stress tests. This
                  ensures dividends are sustainable even in severe downturns.
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold mb-2">Dodd-Frank Act</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Post-2008 banking reform requiring:
                </p>
                <ul className="text-xs space-y-1 mb-2">
                  <li>• Higher capital requirements (CET1 minimums)</li>
                  <li>• Liquidity coverage ratios (30-day stress scenario)</li>
                  <li>• Enhanced risk management and governance</li>
                  <li>• "Living wills" for orderly failure</li>
                </ul>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Impact on dividends:</strong> Banks must hold more capital, reducing leverage but making
                  dividends much safer. Current bank dividends are more reliable than any time in history.
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <p className="font-semibold mb-2">Basel III International Standards</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Global banking regulations establishing:
                </p>
                <ul className="text-xs space-y-1 mb-2">
                  <li>• Minimum CET1 ratio: 7% (U.S. banks typically hold 10-14%)</li>
                  <li>• Leverage ratio minimums</li>
                  <li>• Liquidity requirements</li>
                </ul>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Impact on dividends:</strong> Sets floor for capital levels globally, ensuring U.S. banks
                  compete on level playing field.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What Regulations Mean for Dividend Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Much Safer Than Pre-2008</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Banks must prove dividends are sustainable even in worst-case scenarios. Regulators can block
                    dividend increases if capital falls too low.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Slower Growth Than Possible</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Capital requirements mean banks can't pay out as much as they technically could. This creates
                    safety but limits dividend payout ratios to 25-55% range.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Annual Predictability</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    CCAR results released in June each year. Banks announce dividend increases and buyback plans
                    immediately after passing. Creates predictable annual "catalyst" for bank stocks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Failure Still Means Dividend Cuts</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    If a bank fails stress tests, regulators restrict dividends and buybacks until capital improves.
                    This happened to some banks in 2020. Check CCAR results before investing.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Portfolio Examples */}
      <section id="portfolio-examples" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Bank Dividend Portfolios</h2>

        <div className="space-y-6">
          {/* Conservative Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle>Conservative Portfolio: Safety First</CardTitle>
              <CardDescription>$50,000 investment | 2.9% average yield | Lowest risk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">JPMorgan Chase (JPM)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Best overall quality, 2.4% yield</span>
                  </div>
                  <span>$20,000 | 40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Bank of America (BAC)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Fast growth, 2.8% yield</span>
                  </div>
                  <span>$15,000 | 30%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">U.S. Bancorp (USB)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Premium regional, 4.2% yield</span>
                  </div>
                  <span>$10,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">M&T Bank (MTB)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Ultra-safe lender, 3.5% yield</span>
                  </div>
                  <span>$5,000 | 10%</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-bold mb-2">Portfolio Stats:</p>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                    <p className="font-semibold">$1,450</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                    <p className="font-semibold">2.9%</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Growth</p>
                    <p className="font-semibold">7.5%/yr</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
                    <p className="font-semibold text-green-600">Low</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                <strong>Best for:</strong> Retirees, beginners, or anyone prioritizing capital preservation. Can sleep
                well through market volatility.
              </p>
            </CardContent>
          </Card>

          {/* Balanced Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle>Balanced Portfolio: Growth and Income</CardTitle>
              <CardDescription>$50,000 investment | 3.6% average yield | Moderate risk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">JPMorgan Chase (JPM)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Quality anchor, 2.4% yield</span>
                  </div>
                  <span>$12,500 | 25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Bank of America (BAC)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Growth leader, 2.8% yield</span>
                  </div>
                  <span>$12,500 | 25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Truist Financial (TFC)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">High yield, 4.8% yield</span>
                  </div>
                  <span>$10,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">PNC Financial (PNC)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Well-rounded, 3.8% yield</span>
                  </div>
                  <span>$7,500 | 15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Huntington Bancshares (HBAN)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Growth + yield, 4.6% yield</span>
                  </div>
                  <span>$7,500 | 15%</span>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-bold mb-2">Portfolio Stats:</p>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                    <p className="font-semibold">$1,800</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                    <p className="font-semibold">3.6%</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Growth</p>
                    <p className="font-semibold">7.2%/yr</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
                    <p className="font-semibold text-blue-600">Moderate</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                <strong>Best for:</strong> Investors seeking balance between current income and dividend growth.
                Comfortable with moderate volatility.
              </p>
            </CardContent>
          </Card>

          {/* Income-Focused Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle>Income-Focused Portfolio: Maximum Yield</CardTitle>
              <CardDescription>$50,000 investment | 4.3% average yield | Higher risk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">KeyCorp (KEY)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Highest yield, 5.2% yield</span>
                  </div>
                  <span>$10,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Truist Financial (TFC)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Southeast leader, 4.8% yield</span>
                  </div>
                  <span>$10,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Huntington Bancshares (HBAN)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Growth + income, 4.6% yield</span>
                  </div>
                  <span>$10,000 | 20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Comerica (CMA)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Texas-focused, 4.5% yield</span>
                  </div>
                  <span>$7,500 | 15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">Regions Financial (RF)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Southeast regional, 4.3% yield</span>
                  </div>
                  <span>$7,500 | 15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                  <div>
                    <span className="font-semibold block">JPMorgan Chase (JPM)</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Safety anchor, 2.4% yield</span>
                  </div>
                  <span>$5,000 | 10%</span>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <p className="font-bold mb-2">Portfolio Stats:</p>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                    <p className="font-semibold">$2,150</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                    <p className="font-semibold">4.3%</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg Growth</p>
                    <p className="font-semibold">6.5%/yr</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Risk Level</p>
                    <p className="font-semibold text-orange-600">Higher</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                <strong>Best for:</strong> Income investors needing maximum current yield. Must monitor holdings more
                actively and tolerate higher volatility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DRIP Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Calculate Your Bank Dividend Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Use our DRIP calculator to see how reinvesting bank dividends grows your wealth over time. Small
              investments compound into substantial portfolios through dividend reinvestment.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Try DRIP Calculator
                </Button>
              </Link>
              <Link href="/stocks/jpm">
                <Button variant="outline" className="w-full" size="lg">
                  Calculate JPM Returns →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Buy Bank Dividend Stocks</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Step-by-Step Guide for Beginners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold mb-1">Open a Brokerage Account</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Choose a broker that offers commission-free stock trading and DRIP (Dividend Reinvestment Plan)
                    enrollment. Popular options include Fidelity, Charles Schwab, and Robinhood.
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Tip:</strong> Look for brokers with fractional shares so you can buy partial shares of
                    expensive stocks like JPM ($160/share).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold mb-1">Fund Your Account</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Transfer money from your bank account. Start with whatever you can afford—even $100-500 is enough
                    to begin building a dividend portfolio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold mb-1">Research and Select Banks</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Use this guide to choose 3-5 banks matching your goals. Beginners should start with JPM, BAC, or
                    USB for safety. More aggressive investors can add higher-yielding regionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <p className="font-semibold mb-1">Place Your Order</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Search for the stock ticker (JPM, BAC, USB, etc.) and enter the number of shares you want to buy.
                    Use market orders during trading hours (9:30am-4pm ET) for instant execution.
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Tip:</strong> Don't try to time the market perfectly. Consistency matters more than entry
                    price for long-term dividend investing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <p className="font-semibold mb-1">Enroll in DRIP</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Most brokers offer automatic dividend reinvestment. Enable this feature to automatically purchase
                    more shares when dividends are paid. This is how you compound wealth over decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <p className="font-semibold mb-1">Add Regularly (Dollar-Cost Averaging)</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Set up automatic monthly investments of $100-500+. Buying consistently through all market conditions
                    reduces timing risk and builds wealth steadily.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <BrokerComparisonTable />
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are bank dividends safe in 2026?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Yes, bank dividends are significantly safer today than any time in the past 50 years. Post-2008
                regulatory reforms require banks to hold 2-3x more capital and pass annual stress tests simulating
                severe recessions. Major banks like JPMorgan and Bank of America maintained dividends through the
                2020 pandemic, demonstrating newfound resilience. Low payout ratios (25-35% for money center banks)
                provide substantial safety margins. However, individual bank risk varies—stick to banks with strong
                capital ratios, low payout ratios, and proven dividend histories.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Which bank has the best dividend?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                "Best" depends on your priorities. <strong>JPMorgan Chase (JPM)</strong> offers the best combination
                of quality, safety, and growth—ideal for conservative investors. <strong>Bank of America (BAC)</strong>
                leads in dividend growth (9.2% annually) for growth-focused investors. <strong>U.S. Bancorp (USB)</strong>
                balances regional bank yields (4.2%) with money center bank quality. <strong>Truist (TFC)</strong>
                offers the highest yield among quality banks at 4.8%. For maximum current income,
                <strong> KeyCorp (KEY)</strong> yields 5.2% but carries higher risk. Most investors should start with
                JPM or BAC as core holdings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do bank stocks do well when interest rates rise?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Yes, most banks benefit significantly from rising interest rates through expanding net interest margins.
                Banks earn the spread between loan rates (which rise quickly) and deposit rates (which rise slowly).
                From 2021-2023, JPMorgan's net interest income jumped 49% as the Fed raised rates from 0% to 5.25%.
                However, benefits vary by bank. <strong>Bank of America</strong> is most rate-sensitive due to its
                massive deposit base. <strong>Comerica</strong> benefits strongly from its variable-rate commercial
                loans. Banks with more fee-based revenue (like JPMorgan's investment banking) are less rate-dependent.
                When rates eventually fall, bank profits may decline but will remain well above the 2015-2020 zero-rate
                environment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I buy money center banks or regional banks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Own both for diversification, but prioritize money center banks (JPM, BAC, WFC, C) if you're a beginner
                or conservative investor. Money center banks offer superior safety, faster dividend growth, and
                diversified revenue streams. Regional banks (USB, TFC, PNC) provide higher current yields (3.5-5% vs
                2.4-3%) but carry geographic concentration risk and slower growth. A balanced approach: allocate 60-70%
                to money center banks for safety and growth, 30-40% to quality regionals for yield boost. Avoid
                lower-quality regionals with CRE exposure or weak capital ratios unless you're an experienced investor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much of my portfolio should be bank stocks?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Bank stocks should represent <strong>10-25% of a diversified dividend portfolio</strong>. Banks are
                cyclical and sensitive to economic conditions, so over-concentration creates risk. A well-balanced
                dividend portfolio includes: 25-30% consumer staples (PG, KO), 20-25% healthcare (JNJ, ABBV),
                10-25% financials (JPM, BAC), 10-15% utilities, 10-15% industrials, and 5-10% technology dividends.
                Within your financial allocation, split between 2-4 banks for diversification. Example: 15% financial
                allocation = 6% JPM, 5% BAC, 4% USB. Retirees dependent on income might increase financial exposure to
                20-25% for higher yields.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What happens to bank dividends in a recession?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Modern banks are far more resilient than pre-2008. In the 2020 pandemic recession, major banks
                maintained dividends despite temporary regulatory restrictions on increases. However, banks typically
                underperform during severe recessions due to: rising loan defaults (reduces earnings), economic
                uncertainty (limits lending), and potential regulatory restrictions. Quality matters enormously—
                <strong>JPMorgan and U.S. Bancorp</strong> have never cut dividends in modern history, while weaker
                banks cut during 2008-2009. Regional banks with high CRE exposure or weak capital ratios face higher
                cut risk. To protect against recession risk: focus on banks with sub-40% payout ratios, 12%+ capital
                ratios, and proven stress test performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are bank stocks good for retirement income?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Yes, but allocate conservatively. Banks offer attractive yields (2.5-5%) with dividend growth that
                protects purchasing power against inflation. The combination of current income and 5-10% annual dividend
                growth makes banks excellent long-term retirement holdings. However, bank stocks are more volatile than
                bonds or utilities, so limit exposure to 15-25% of retirement portfolios. Prioritize safety: JPMorgan,
                Bank of America, and U.S. Bancorp over higher-yielding but riskier regional banks. Pair bank stocks with
                defensive sectors (consumer staples, healthcare, utilities) for balanced retirement income. Consider
                holding banks in tax-advantaged accounts (IRA/401k) since qualified dividends receive preferential tax
                treatment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How often do banks pay dividends?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                All major U.S. banks pay dividends <strong>quarterly</strong> (four times per year). Typical schedule:
                dividends are declared in January, April, July, and October, with payment about 3-4 weeks later. Banks
                announce annual dividend increases in June following CCAR stress test results. Unlike monthly dividend
                stocks (some REITs), quarterly payments mean you'll receive four dividend checks per year per bank. To
                create more frequent income, build a diversified portfolio of 8-12 banks with staggered payment dates.
                Most brokers offer automatic dividend reinvestment (DRIP) which immediately reinvests quarterly dividends
                to purchase additional shares, accelerating compound growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Building Your Bank Dividend Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Bank stocks offer compelling dividend opportunities in 2026 with fortress balance sheets, rising
              profitability, and massive capital return programs. Start with quality money center banks like JPMorgan
              and Bank of America, add high-quality regionals for yield, and reinvest dividends for compound growth.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">
                  Calculate Returns
                </Button>
              </Link>
              <Link href="/stocks/jpm">
                <Button variant="outline" className="w-full" size="lg">
                  Analyze JPM
                </Button>
              </Link>
              <Link href="/stocks/bac">
                <Button variant="outline" className="w-full" size="lg">
                  Analyze BAC
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              The best time to start was 10 years ago. The second best time is today.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-financial-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Financial Dividend Stocks</CardTitle>
                <CardDescription>Banks, insurance, and asset managers</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Stocks for Beginners</CardTitle>
                <CardDescription>Start your dividend journey</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks 2026</CardTitle>
                <CardDescription>Fastest growing dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/how-to-analyze-dividend-safety">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">How to Analyze Dividend Safety</CardTitle>
                <CardDescription>Evaluate dividend sustainability</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
