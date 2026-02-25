import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, TrendingUp, DollarSign, AlertTriangle, Award } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'

export const metadata = {
  title: 'Best Insurance Dividend Stocks: Steady Income from Insurers 2026',
  description: 'Top insurance dividend stocks paying 2-5% yields. Property & casualty, life insurance, and reinsurance companies providing reliable passive income through underwriting cycles.',
  keywords: 'best insurance dividend stocks, insurance stocks, P&C insurance dividends, life insurance stocks, reinsurance dividend stocks, Berkshire Hathaway, Progressive, Travelers',
}

export default function BestInsuranceDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Shield className="h-3 w-3 mr-1" />
          Insurance Sector Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Insurance Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Property & casualty, life insurance, and reinsurance companies paying 2-5% yields.
          Benefit from underwriting discipline and investment income while earning reliable dividends.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 12 Insurance Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. Berkshire Hathaway B (BRK.B)</CardTitle>
                <CardDescription>Warren Buffett's conglomerate | Massive insurance operations</CardDescription>
              </div>
              <Badge className="bg-slate-600">No Dividend*</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$975B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Insurance Float</p>
                <p className="font-semibold">$167B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">ROE</p>
                <p className="font-semibold text-green-600">12.8%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Type</p>
                <p className="font-semibold">Diversified</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              World's largest property-casualty insurer with GEICO, Berkshire Hathaway Reinsurance, and General Re.
              Warren Buffett doesn't pay dividends—instead reinvests at 10%+ returns. Owns $167B insurance float
              invested in stocks (Apple, Bank of America) and wholly-owned businesses (BNSF Railway, utilities).
              Best insurance exposure for growth investors who don't need current income. Book value up 19.8% annually
              since 1965.
            </p>

            <Link href="/stocks/brk.b">
              <Button variant="outline" size="sm">Calculate BRK.B Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. Progressive (PGR)</CardTitle>
                <CardDescription>Auto insurance leader | Best-in-class underwriting</CardDescription>
              </div>
              <Badge className="bg-blue-600">1.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$145B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Combined Ratio</p>
                <p className="font-semibold text-green-600">89.7%</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">22.5%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">15%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Dominant auto insurer with superior data analytics and pricing. Combined ratio of 89.7% means they make
              $10.30 profit on every $100 in premiums—before investment income. 14 consecutive years of dividend
              increases with 22.5% annual growth. Tiny 15% payout ratio leaves massive room for expansion. Best growth
              stock in insurance sector. Flo commercials drive brand awareness while telematics (Snapshot) optimizes pricing.
            </p>

            <Link href="/stocks/pgr">
              <Button variant="outline" size="sm">Calculate PGR Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. Travelers (TRV)</CardTitle>
                <CardDescription>Commercial P&C leader | 19 years of dividend growth</CardDescription>
              </div>
              <Badge className="bg-purple-600">2.3% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$53B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">19 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">6.8%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">23%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Leading commercial property-casualty insurer with deep expertise in business insurance. 19 consecutive
              years of dividend increases. Strong underwriting culture—profitable in 16 of last 18 years including
              during hurricanes and COVID. Dow Jones component. Conservative payout ratio of 23% protected dividend
              through 2008 crisis and 2020 pandemic. Returns capital via dividends + aggressive buybacks.
            </p>

            <Link href="/stocks/trv">
              <Button variant="outline" size="sm">Calculate TRV Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">4. Chubb (CB)</CardTitle>
                <CardDescription>Global P&C leader | Premium underwriting</CardDescription>
              </div>
              <Badge className="bg-orange-600">1.7% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$115B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">31 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">5.2%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">18%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              World's largest publicly traded P&C insurer by market cap. Insures high-net-worth individuals and complex
              commercial risks globally. 31 consecutive years of dividend increases. Premium underwriting standards—walks
              away from unprofitable business. Strong in cyber insurance, a fast-growing segment. Investment-grade balance
              sheet withstands catastrophes. Best quality in P&C insurance sector.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">5. Allstate (ALL)</CardTitle>
                <CardDescription>Personal lines leader | Strong brand recognition</CardDescription>
              </div>
              <Badge className="bg-red-600">2.5% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$52B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">13 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">11.8%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">9%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Second-largest personal auto insurer after State Farm. "You're in good hands" brand recognition drives
              customer acquisition. 13 consecutive years of dividend growth with 11.8% annual increases. Ultra-low 9%
              payout ratio = huge safety margin and growth runway. Transforming from agents-only to direct-to-consumer
              (Esurance acquisition). High exposure to auto insurance rate increases in 2026.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-teal-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">6. Aflac (AFL)</CardTitle>
                <CardDescription>Supplemental insurance leader | Japan exposure</CardDescription>
              </div>
              <Badge className="bg-teal-600">2.8% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$58B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div History</p>
                <p className="font-semibold">42 years</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                <p className="font-semibold text-green-600">5.3%/yr</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                <p className="font-semibold">25%</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Dividend aristocrat with 42 consecutive years of increases. Specializes in supplemental insurance (cancer,
              accident, hospital indemnity) that pays cash benefits directly to policyholders. 70% of revenue from Japan
              where 25% of households have Aflac policies. Conservative payout ratio. Iconic duck advertising mascot.
              Benefits from aging demographics in Japan and U.S.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Insurance Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Company</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-right p-2">Div Growth</th>
                    <th className="text-right p-2">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Berkshire B (BRK.B)</td><td className="p-2 text-right">0%</td><td className="p-2">Diversified</td><td className="p-2 text-right">—</td><td className="p-2 text-right">0%</td></tr>
                  <tr className="border-b"><td className="p-2">Progressive (PGR)</td><td className="p-2 text-right">1.8%</td><td className="p-2">Auto P&C</td><td className="p-2 text-right">22.5%</td><td className="p-2 text-right">15%</td></tr>
                  <tr className="border-b"><td className="p-2">Travelers (TRV)</td><td className="p-2 text-right">2.3%</td><td className="p-2">Commercial P&C</td><td className="p-2 text-right">6.8%</td><td className="p-2 text-right">23%</td></tr>
                  <tr className="border-b"><td className="p-2">Chubb (CB)</td><td className="p-2 text-right">1.7%</td><td className="p-2">Global P&C</td><td className="p-2 text-right">5.2%</td><td className="p-2 text-right">18%</td></tr>
                  <tr className="border-b"><td className="p-2">Allstate (ALL)</td><td className="p-2 text-right">2.5%</td><td className="p-2">Auto P&C</td><td className="p-2 text-right">11.8%</td><td className="p-2 text-right">9%</td></tr>
                  <tr className="border-b"><td className="p-2">Aflac (AFL)</td><td className="p-2 text-right">2.8%</td><td className="p-2">Supplemental</td><td className="p-2 text-right">5.3%</td><td className="p-2 text-right">25%</td></tr>
                  <tr className="border-b"><td className="p-2">MetLife (MET)</td><td className="p-2 text-right">3.1%</td><td className="p-2">Life Insurance</td><td className="p-2 text-right">4.8%</td><td className="p-2 text-right">32%</td></tr>
                  <tr className="border-b"><td className="p-2">Prudential (PRU)</td><td className="p-2 text-right">4.9%</td><td className="p-2">Life Insurance</td><td className="p-2 text-right">3.5%</td><td className="p-2 text-right">42%</td></tr>
                  <tr className="border-b"><td className="p-2">Lincoln Nat'l (LNC)</td><td className="p-2 text-right">5.2%</td><td className="p-2">Life Insurance</td><td className="p-2 text-right">2.8%</td><td className="p-2 text-right">38%</td></tr>
                  <tr className="border-b"><td className="p-2">Principal (PFG)</td><td className="p-2 text-right">4.1%</td><td className="p-2">Life/Retirement</td><td className="p-2 text-right">3.2%</td><td className="p-2 text-right">35%</td></tr>
                  <tr className="border-b"><td className="p-2">Reinsurance Grp (RGA)</td><td className="p-2 text-right">2.4%</td><td className="p-2">Life Reinsurance</td><td className="p-2 text-right">4.5%</td><td className="p-2 text-right">28%</td></tr>
                  <tr><td className="p-2">Everest Group (EG)</td><td className="p-2 text-right">2.1%</td><td className="p-2">Reinsurance</td><td className="p-2 text-right">6.0%</td><td className="p-2 text-right">20%</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="Get Our Insurance Sector Analysis"
          description="20+ insurance stocks ranked by dividend safety, underwriting quality, and growth potential"
          buttonText="Download Free Report"
          source="insurance_dividend_blog"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Property & Casualty vs Life Insurance Dividends</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Property & Casualty (P&C)</CardTitle>
              <Badge variant="outline" className="text-blue-600">Lower Yield, Better Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Auto, home, commercial property insurance. Examples: PGR, TRV, CB, ALL
              </p>
              <p className="text-sm font-semibold mb-2">Typical Yields:</p>
              <p className="text-sm mb-3">1.5-3.0%</p>

              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Faster dividend growth (6-22%/yr)</li>
                <li>• Underwriting profit + investment income</li>
                <li>• Benefit from rate increases in hard markets</li>
                <li>• Low payout ratios (9-25%)</li>
                <li>• Strong competitive moats (data, brand)</li>
              </ul>

              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Catastrophe risk (hurricanes, wildfires)</li>
                <li>• Cyclical underwriting profits</li>
                <li>• Lower current yields</li>
                <li>• Auto insurance competition intense</li>
              </ul>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="text-xs font-semibold mb-1">Best For:</p>
                <p className="text-xs">Growth-oriented investors under age 55 who can accept 1.5-2.5% yields in exchange for 10-20% annual dividend growth</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Life Insurance</CardTitle>
              <Badge variant="outline" className="text-purple-600">Higher Yield, Slower Growth</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Life insurance, annuities, retirement products. Examples: MET, PRU, LNC, PFG
              </p>
              <p className="text-sm font-semibold mb-2">Typical Yields:</p>
              <p className="text-sm mb-3">3.0-5.2%</p>

              <p className="text-sm font-semibold mb-2">Pros:</p>
              <ul className="text-xs space-y-1 mb-3">
                <li>• Higher current yields (3-5%)</li>
                <li>• Long-duration predictable liabilities</li>
                <li>• Benefit from aging demographics</li>
                <li>• Fee income from asset management</li>
                <li>• Rising rates boost investment returns</li>
              </ul>

              <p className="text-sm font-semibold mb-2">Cons:</p>
              <ul className="text-xs space-y-1">
                <li>• Slower dividend growth (3-5%/yr)</li>
                <li>• Complex actuarial assumptions</li>
                <li>• Interest rate sensitivity</li>
                <li>• Secular decline in life insurance demand</li>
                <li>• Higher payout ratios (32-42%)</li>
              </ul>

              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950 rounded">
                <p className="text-xs font-semibold mb-1">Best For:</p>
                <p className="text-xs">Income-focused investors over 55 who need 3-5% current yields and can accept slower 3-4% dividend growth</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Understanding Insurance Business Economics</h2>

        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <CardTitle>The Combined Ratio: Key Profitability Metric</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="font-semibold mb-2 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  What Is Combined Ratio?
                </p>
                <p className="text-sm mb-3">
                  Combined Ratio = (Claims Paid + Operating Expenses) / Premiums Collected
                </p>
                <p className="text-sm">
                  Below 100% = underwriting profit. Above 100% = underwriting loss. Progressive's 89.7% combined
                  ratio means they profit $10.30 per $100 in premiums before investment income. Industry average
                  is 96-98%.
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="font-semibold mb-2 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                  Investment Income: The Hidden Profit Driver
                </p>
                <p className="text-sm">
                  Insurers collect premiums upfront and pay claims later (often years later). They invest this "float"
                  in bonds and stocks. Berkshire has generated $167 billion in float—essentially free capital to invest.
                  With 10-year Treasuries at 4.5%, insurers earn billions in investment income beyond underwriting profits.
                  This dual income stream (underwriting + investments) makes insurance attractive.
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <p className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                  Catastrophe Risk and Reserve Adequacy
                </p>
                <p className="text-sm">
                  P&C insurers face catastrophe exposure—hurricanes cost $50-100 billion in claims. Reinsurance spreads
                  this risk globally. Reserve adequacy matters: insurers must set aside enough to pay future claims.
                  Under-reserving boosts short-term profits but creates losses later. Look for conservative reserve
                  development history. Travelers and Chubb excel here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Underwriting Cycles: Hard Markets vs Soft Markets</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
                  <h3 className="font-bold text-lg">Hard Market (2023-2026)</h3>
                </div>
                <p className="text-sm mb-3">
                  Insurance companies raise rates 5-15% annually after catastrophic losses or low profitability.
                  Underwriting discipline returns. Capacity tightens.
                </p>
                <p className="text-sm font-semibold mb-2">Characteristics:</p>
                <ul className="text-xs space-y-1 mb-3">
                  <li>• Rising premiums across all lines</li>
                  <li>• Improving combined ratios</li>
                  <li>• Higher underwriting profits</li>
                  <li>• Stock prices outperform</li>
                  <li>• Dividend growth accelerates</li>
                </ul>
                <p className="text-xs text-green-800 dark:text-green-200 font-semibold">
                  Best time to own insurance stocks. We're in a hard market now through 2026.
                </p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
                  <h3 className="font-bold text-lg">Soft Market (2015-2019)</h3>
                </div>
                <p className="text-sm mb-3">
                  After years of profitability, insurers compete aggressively for market share. Rates decline or
                  flatten. Underwriting discipline weakens.
                </p>
                <p className="text-sm font-semibold mb-2">Characteristics:</p>
                <ul className="text-xs space-y-1 mb-3">
                  <li>• Flat or declining premiums</li>
                  <li>• Worsening combined ratios</li>
                  <li>• Lower underwriting profits</li>
                  <li>• Stock prices underperform</li>
                  <li>• Dividend growth slows</li>
                </ul>
                <p className="text-xs text-red-800 dark:text-red-200 font-semibold">
                  Riskier time for insurance stocks. Best insurers maintain discipline and outperform.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <p className="font-semibold mb-2">2026 Market Conditions:</p>
              <p className="text-sm">
                We're in a hard market following 2020-2022 catastrophe losses (COVID, hurricanes, social inflation).
                Auto insurance rates up 10-20% in 2024-2025. Commercial property up 8-12%. Homeowners up 15-25% in
                catastrophe-prone states. This pricing power drives record profitability. Progressive, Allstate,
                Travelers, and Chubb all benefiting. Expect strong earnings and dividend growth through 2026-2027.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Additional Top Insurance Dividend Stocks</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-indigo-500">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">7. MetLife (MET)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Life insurance & employee benefits leader</p>
                </div>
                <Badge className="bg-indigo-600">3.1% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$62B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">4.8%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">32%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years</p>
                  <p className="font-semibold">13</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Largest life insurer in U.S. by assets. Strong in group life/dental/disability through employer
                benefits. 13 years of dividend growth. Spun off Brighthouse Financial (variable annuities) to reduce
                market risk. Benefits from rising interest rates on investment portfolio. Trades at 0.8x book value—
                attractive valuation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-pink-500">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">8. Prudential Financial (PRU)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Life insurance & retirement solutions</p>
                </div>
                <Badge className="bg-pink-600">4.9% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$43B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">3.5%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">42%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years</p>
                  <p className="font-semibold">16</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Second-largest life insurer with strong retirement business (annuities, 401(k) management). 16 years
                of dividend increases. Higher yield (4.9%) but slower growth than P&C insurers. International operations
                in Japan and Asia diversify revenue. Asset management arm (PGIM) manages $1.4 trillion. Good value at
                0.6x book value.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-cyan-500">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">9. Lincoln National (LNC)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Life insurance & annuities specialist</p>
                </div>
                <Badge className="bg-cyan-600">5.2% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$6.5B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold">2.8%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">38%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Safety</p>
                  <p className="font-semibold text-orange-600">B</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                High-yield life insurer focused on annuities and group protection. 5.2% yield attracts income investors
                but slower growth (2.8%/yr). Faced earnings pressure from low rates but recovering as rates rise.
                Smaller than MetLife/Prudential = higher risk. Best for aggressive income seekers willing to accept
                volatility.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">10. Principal Financial (PFG)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Retirement & insurance solutions</p>
                </div>
                <Badge className="bg-amber-600">4.1% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$20B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">3.2%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">35%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years</p>
                  <p className="font-semibold">15</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Balanced between retirement services (401(k), pension management) and insurance. 15 years of dividend
                increases with 4.1% yield. Less volatile than pure life insurers due to fee-based retirement business.
                Strong in small/medium business market. Benefits from shift to defined contribution retirement plans.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-500">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">11. Reinsurance Group of America (RGA)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Life reinsurance specialist</p>
                </div>
                <Badge className="bg-emerald-600">2.4% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$12B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">4.5%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">28%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years</p>
                  <p className="font-semibold">12</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Pure-play life reinsurer—they insure other life insurance companies. Diversifies risk globally across
                70+ countries. Benefits from aging demographics worldwide. Lower yield but solid dividend growth. Less
                exposed to U.S. market volatility than direct writers. Conservative payout ratio provides safety.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-violet-500">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">12. Everest Group (EG)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Global reinsurance & insurance</p>
                </div>
                <Badge className="bg-violet-600">2.1% Yield</Badge>
              </div>
              <div className="grid md:grid-cols-4 gap-3 mb-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                  <p className="font-semibold">$16B</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Div Growth</p>
                  <p className="font-semibold text-green-600">6.0%/yr</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                  <p className="font-semibold">20%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Years</p>
                  <p className="font-semibold">10</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Property-casualty reinsurer benefiting from hard market. Reinsures catastrophe risk for primary insurers.
                Strong underwriting discipline—combined ratio consistently below 95%. Low payout ratio (20%) supports
                accelerating dividend growth. Benefits most from current hard market pricing environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample Insurance Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>Balanced Insurance Income Portfolio</CardTitle>
            <CardDescription>$30K investment | 2.6% average yield | Diversified across P&C and life</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Progressive (PGR)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Auto P&C leader, 22.5% div growth</span>
                </div>
                <span>$8,000 | 27%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Chubb (CB)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Premium P&C, global diversification</span>
                </div>
                <span>$7,000 | 23%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Travelers (TRV)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Commercial P&C specialist</span>
                </div>
                <span>$6,000 | 20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">Aflac (AFL)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Supplemental insurance, 42-yr streak</span>
                </div>
                <span>$5,000 | 17%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">MetLife (MET)</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Life insurance, higher yield</span>
                </div>
                <span>$4,000 | 13%</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$780</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">2.6%</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Expected Growth</p>
                  <p className="font-semibold">9.5%/yr</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                70% P&C (PGR, CB, TRV) for growth + 30% life/supplemental (AFL, MET) for yield. Balanced approach
                with room for dividend growth while earning decent current income.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Start Building Your Insurance Dividend Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Insurance stocks offer a compelling combination of dividend growth and defensive characteristics.
              Start with Progressive or Travelers for growth, add Chubb for quality, and blend in Aflac or MetLife
              for higher current yield. Take advantage of the current hard market while pricing power is strong.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button className="w-full" size="lg">Calculate DRIP Returns →</Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">Dividend Growth Calculator →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Best Brokers for Buying Insurance Stocks</h2>
        <p className="mb-6 text-slate-700 dark:text-slate-300">
          To buy insurance dividend stocks commission-free with automatic dividend reinvestment (DRIP), you need a
          quality brokerage account. Here are the top-rated brokers for dividend investors in 2026.
        </p>
        <BrokerComparisonTable />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Are insurance stocks good for dividend investing?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, especially property-casualty insurers like Progressive, Travelers, and Chubb. P&C insurers
                combine low payout ratios (9-25%) with strong dividend growth (5-22% annually). They generate profits
                from both underwriting and investment income. During hard markets (like now through 2026), pricing
                power drives record profitability and accelerating dividend growth. Life insurers offer higher yields
                (3-5%) but slower growth, making them better for income-focused investors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">What's the difference between P&C and life insurance dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Property-casualty insurers (PGR, TRV, CB, ALL) pay lower yields (1.5-3%) but grow dividends faster
                (5-22%/yr) with payout ratios of 9-25%. They benefit from underwriting cycles and current hard market
                pricing. Life insurers (MET, PRU, LNC, PFG) pay higher yields (3-5%) but grow slower (3-5%/yr) with
                higher payout ratios (32-42%). Life insurers are more interest-rate sensitive but provide steadier
                income. Choose P&C for growth, life for current income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Why doesn't Berkshire Hathaway pay a dividend?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Warren Buffett believes he can reinvest Berkshire's earnings at higher returns than shareholders could
                achieve with dividends. Berkshire's book value has grown 19.8% annually since 1965, far exceeding
                typical dividend + growth returns. The company owns $167 billion in insurance float invested in stocks
                (Apple, Bank of America) and wholly-owned businesses (BNSF Railway, utilities, energy). If you need
                current income, skip BRK.B. If you want maximum long-term growth, Berkshire is the best insurance
                exposure despite zero dividends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">What is a hard market in insurance and why does it matter?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A hard market occurs when insurers raise premiums 5-15% annually following catastrophic losses or
                periods of low profitability. We're currently in a hard market (2023-2026) after COVID losses,
                hurricanes, wildfires, and social inflation. Auto rates up 10-20%, homeowners up 15-25%, commercial
                property up 8-12%. This pricing power drives record profitability—Progressive's combined ratio improved
                from 95% to 89.7%. Hard markets are the best time to own insurance stocks. Expect strong earnings and
                accelerating dividend growth through 2026-2027.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How do rising interest rates affect insurance stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Property-casualty insurers benefit significantly from rising rates. They invest premiums (float) in
                bonds and earn higher yields. With 10-year Treasuries at 4.5% vs. 1.5% in 2020, investment income
                soared 150-200%. Life insurers face mixed effects: higher rates boost investment returns but can reduce
                demand for annuities as alternatives (bonds, CDs) become more attractive. Overall, 2024-2026 rate
                environment favors P&C insurers (PGR, TRV, CB) over life insurers (MET, PRU).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">What is the combined ratio and why is it important?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Combined ratio = (Claims + Expenses) / Premiums. Below 100% = underwriting profit. Above 100% =
                underwriting loss. Progressive's 89.7% combined ratio means they profit $10.30 per $100 in premiums
                before investment income. Industry average is 96-98%. Best insurers consistently achieve sub-95% ratios
                through superior pricing (telematics data), risk selection, and claims management. Look for multi-year
                trends below 95%. Avoid insurers with sustained ratios above 100%—they're losing money on underwriting
                and relying entirely on investment income.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Should I invest in individual insurance stocks or an insurance ETF?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Individual insurance stocks offer higher dividend growth (PGR at 22.5%, ALL at 11.8%) but require
                research and monitoring of underwriting cycles. Insurance ETFs like KIE provide diversification across
                50+ insurers but dilute the best performers with mediocre ones and charge fees (0.35%). Best approach:
                own 4-6 top-quality insurers (PGR, TRV, CB, AFL, MET, BRK.B) to capture 80% of sector upside with
                adequate diversification. Skip ETFs unless you want zero-effort exposure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">How much of my portfolio should be in insurance stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Insurance should be 5-15% of a diversified dividend portfolio. While defensive, insurance stocks face
                catastrophe risk and underwriting cycles. Combine insurance (5-15%) with other financial stocks like
                banks (10-15%), plus consumer staples, healthcare, utilities, and industrials for proper sector balance.
                If you're bullish on the current hard market, you can overweight to 15-20% through 2026, then trim as
                the cycle peaks. Never exceed 25% in any single sector.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-financial-dividend-stocks">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Financial Dividend Stocks</CardTitle>
                <CardDescription>Banks, insurance, and asset managers for income</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Safe dividend payers to start your journey</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Dividend Growth Stocks</CardTitle>
                <CardDescription>10%+ annual dividend increases</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/dividend-stocks-vs-etfs-complete-guide">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Stocks vs ETFs</CardTitle>
                <CardDescription>Which strategy is right for you?</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
