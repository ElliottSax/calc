import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Star,
  Target,
  Percent,
  Building2,
  Landmark,
  PieChart,
  Calendar,
  Clock,
  Zap,
  Award,
  LineChart
} from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Is AbbVie (ABBV) a Good Dividend Stock? 2026 Analysis',
  description: 'Complete analysis of AbbVie (ABBV) dividend: 52 consecutive years of increases (including Abbott history), ~3.5% yield, Humira biosimilar impact, Skyrizi/Rinvoq growth, and pharma dividend safety.',
  keywords: ['abbvie dividend', 'ABBV dividend', 'abbvie stock analysis', 'abbvie dividend yield', 'is abbvie a good investment', 'pharmaceutical dividend stocks', 'humira biosimilar impact'],
}

const dividendHistory = [
  { year: 2026, dividend: '$6.56', increase: '5.8%' },
  { year: 2025, dividend: '$6.20', increase: '5.1%' },
  { year: 2024, dividend: '$5.90', increase: '4.7%' },
  { year: 2023, dividend: '$5.64', increase: '4.6%' },
  { year: 2022, dividend: '$5.40', increase: '8.5%' },
  { year: 2021, dividend: '$4.98', increase: '8.7%' },
  { year: 2020, dividend: '$4.58', increase: '10.2%' },
  { year: 2019, dividend: '$4.28', increase: '10.3%' },
  { year: 2018, dividend: '$3.84', increase: '11.5%' },
  { year: 2017, dividend: '$3.36', increase: '10.8%' },
]

const keyDrugs = [
  { name: 'Skyrizi (risankizumab)', indication: 'Psoriasis, Crohn\'s disease, ulcerative colitis', revenue: '$14.2B', growth: '+42%', status: 'Mega-blockbuster -- now AbbVie\'s largest drug' },
  { name: 'Rinvoq (upadacitinib)', indication: 'Rheumatoid arthritis, atopic dermatitis, Crohn\'s', revenue: '$7.8B', growth: '+35%', status: 'Rapid growth across 8 approved indications' },
  { name: 'Humira (adalimumab)', indication: 'Rheumatoid arthritis, psoriasis, Crohn\'s', revenue: '$8.0B', growth: '-40%', status: 'Declining from biosimilar competition (was $21B peak)' },
  { name: 'Botox (onabotulinumtoxinA)', indication: 'Migraines, cosmetic, overactive bladder', revenue: '$5.8B', growth: '+8%', status: 'Stable cash cow, no biosimilar risk until 2030s' },
  { name: 'Vraylar (cariprazine)', indication: 'Bipolar disorder, schizophrenia, depression', revenue: '$3.2B', growth: '+15%', status: 'Growing in psychiatry with new depression indication' },
]

const peerComparison = [
  { company: 'AbbVie (ABBV)', yield: '3.5%', growth5yr: '7.8%', payout: '52%', pipeline: 'Strong', safety: '85/100' },
  { company: 'Johnson & Johnson (JNJ)', yield: '3.0%', growth5yr: '5.8%', payout: '48%', pipeline: 'Very Strong', safety: '95/100' },
  { company: 'Pfizer (PFE)', yield: '6.5%', growth5yr: '2.0%', payout: '90%', pipeline: 'Moderate', safety: '60/100' },
  { company: 'Merck (MRK)', yield: '3.2%', growth5yr: '8.5%', payout: '45%', pipeline: 'Strong', safety: '87/100' },
  { company: 'Amgen (AMGN)', yield: '3.0%', growth5yr: '10.0%', payout: '55%', pipeline: 'Strong', safety: '83/100' },
]

export default function IsAbbVieGoodDividendStock() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <Award className="h-3 w-3 mr-1" />
          Dividend Aristocrat - 52 Years
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Is AbbVie (ABBV) a Good Dividend Stock? 2026 Analysis
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
          AbbVie has increased its dividend for 52 consecutive years -- counting its legacy as part of
          Abbott Laboratories before the 2013 spinoff. With the Humira patent cliff now in the rearview
          mirror and Skyrizi/Rinvoq surging past $22 billion in combined revenue, AbbVie is proving
          the bears wrong. Here is why this pharma powerhouse deserves a spot in your dividend portfolio.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Updated February 2026</span>
          <span>|</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</span>
        </div>
      </div>

      {/* Quick Summary */}
      <Card className="mb-16 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-purple-600" />
            Quick Verdict: AbbVie Dividend Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dividend Aristocrat:</strong> 52 consecutive years of increases (counting pre-spinoff Abbott Laboratories history)</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Current Yield:</strong> ~3.5% ($6.56 annually) with 5-8% growth rate -- strong income plus growth combo</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Humira Transition:</strong> Successfully navigating the patent cliff -- Skyrizi + Rinvoq already exceeding lost Humira revenue</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Key Risk:</strong> Heavy reliance on immunology franchise (75%+ of pharma revenue), regulatory pricing pressure</span>
            </p>
            <p className="flex items-start gap-2">
              <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <span><strong>Safety Score:</strong> 85/100 -- strong but not elite due to patent concentration and pharma-specific risks</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Company Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-7 w-7 text-purple-600" />
          AbbVie: From Abbott Spinoff to Pharma Powerhouse
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            AbbVie (NYSE: ABBV) was spun off from Abbott Laboratories in January 2013 as a research-based
            pharmaceutical company. Since then, it has become one of the most successful biopharma companies
            in the world, generating approximately $56 billion in annual revenue with a focus on immunology,
            oncology, neuroscience, and aesthetics.
          </p>
          <p>
            The AbbVie story is dominated by one drug: Humira. The anti-inflammatory biologic became the
            best-selling drug in pharmaceutical history, peaking at $21.2 billion in US revenue in 2022.
            When biosimilar competition finally arrived in 2023, many analysts predicted a catastrophic
            decline. Instead, AbbVie had spent years preparing successors -- Skyrizi and Rinvoq -- which
            have more than offset the Humira decline.
          </p>
          <p>
            The 2020 Allergan acquisition ($63B) added Botox, the world's most recognized aesthetics brand,
            plus a neuroscience portfolio including Vraylar for bipolar disorder. This diversification
            reduces AbbVie's dependence on any single drug and provides multiple growth engines for the
            next decade.
          </p>
        </div>
      </section>

      {/* Dividend History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="h-7 w-7 text-green-600" />
          52-Year Dividend Growth History
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Annual Dividend</th>
                    <th className="text-right p-3">YoY Increase</th>
                  </tr>
                </thead>
                <tbody>
                  {dividendHistory.map((row) => (
                    <tr key={row.year} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900">
                      <td className="p-3 font-medium">{row.year}</td>
                      <td className="p-3 text-right font-semibold">{row.dividend}</td>
                      <td className="p-3 text-right text-green-600">+{row.increase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              AbbVie counts its dividend streak from the Abbott Laboratories era (pre-2013 spinoff), giving it
              52 consecutive years of increases. Since the 2013 spinoff, AbbVie has nearly tripled its
              dividend from $1.60 to $6.56 -- a 10.8% compound annual growth rate over 13 years.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            Notice the growth deceleration from 10-11% (2017-2020) to 4-6% (2023-2026). This reflects the
            Humira revenue decline, which temporarily compressed earnings. However, as Skyrizi and Rinvoq
            approach their full revenue potential ($30B+ combined by 2027), dividend growth should reaccelerate
            to 7-10% annually. Management has explicitly guided for a return to "high single digit" dividend
            growth by 2027.
          </p>
          <p>
            The 52-year streak (including the Abbott legacy) gives AbbVie Dividend Aristocrat status with
            room to spare. At the current growth trajectory, AbbVie will reach Dividend King status (50 years
            as a standalone) by the early 2060s -- though the combined Abbott/AbbVie streak already exceeds 50.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          Current Dividend Metrics (2026)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-purple-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Dividend Yield</p>
                  <p className="text-3xl font-bold">3.5%</p>
                </div>
                <Percent className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Based on ~$188 share price. Quarterly payment of $1.64/share.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Annual Dividend</p>
                  <p className="text-3xl font-bold">$6.56</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Paid quarterly in Feb, May, Aug, Nov. 310% increase since 2013 spinoff.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Payout Ratio</p>
                  <p className="text-3xl font-bold">52%</p>
                </div>
                <PieChart className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Elevated from Humira decline, but improving as new drugs grow. Target: 45%.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">Free Cash Flow</p>
                  <p className="text-3xl font-bold">$22B+</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Covers $11.5B dividend with a comfortable 1.9x coverage ratio.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Drug Pipeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-7 w-7 text-yellow-600" />
          Key Drug Portfolio: Beyond Humira
        </h2>

        <div className="space-y-4">
          {keyDrugs.map((drug) => (
            <Card key={drug.name} className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{drug.name}</h3>
                    <p className="text-sm text-slate-500">{drug.indication}</p>
                  </div>
                  <Badge className={drug.growth.startsWith('-') ? 'bg-red-600' : 'bg-green-600'}>
                    {drug.growth}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">2025 Revenue</p>
                    <p className="font-semibold">{drug.revenue}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Status</p>
                    <p className="font-semibold text-xs">{drug.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            The narrative around AbbVie has shifted dramatically. In 2022, bears predicted catastrophe as
            Humira's US patent expired. They argued that a 40-50% revenue decline from the $21B flagship
            drug would crush earnings and force a dividend cut. Instead, Skyrizi and Rinvoq have delivered
            one of the most successful drug transitions in pharmaceutical history.
          </p>
          <p>
            <strong>Skyrizi</strong> is now AbbVie's largest drug at $14.2 billion, growing 42% annually. It treats
            psoriasis, Crohn's disease, and ulcerative colitis with best-in-class efficacy. Peak revenue
            estimates are $20B+ by 2029. <strong>Rinvoq</strong>, at $7.8 billion and growing 35%, addresses 8
            approved indications across immunology. Combined, these two drugs are projected to exceed $30
            billion by 2027 -- more than replacing peak Humira revenue.
          </p>
          <p>
            <strong>Botox</strong> ($5.8B) from the Allergan acquisition provides a unique moat. As a cosmetic and
            medical product with no biosimilar competition until the 2030s, Botox generates predictable,
            growing cash flow that diversifies AbbVie beyond immunology.
          </p>
        </div>
      </section>

      {/* InlineSignup midway */}
      <div className="mb-16">
        <InlineSignup />
      </div>

      {/* Humira Transition Deep Dive */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          The Humira Patent Cliff: How AbbVie Survived
        </h2>

        <Card className="mb-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardHeader>
            <CardTitle className="text-lg">Humira Decline vs. New Drug Growth</CardTitle>
            <CardDescription>Revenue replacement timeline (billions USD)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Year</th>
                    <th className="text-right p-3">Humira US</th>
                    <th className="text-right p-3">Skyrizi</th>
                    <th className="text-right p-3">Rinvoq</th>
                    <th className="text-right p-3">Combined New</th>
                    <th className="text-right p-3">Net Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">2022 (Peak)</td>
                    <td className="p-3 text-right">$21.2B</td>
                    <td className="p-3 text-right">$5.3B</td>
                    <td className="p-3 text-right">$2.5B</td>
                    <td className="p-3 text-right text-green-600">$7.8B</td>
                    <td className="p-3 text-right text-red-600">-$13.4B gap</td>
                  </tr>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900">
                    <td className="p-3">2023</td>
                    <td className="p-3 text-right">$14.4B</td>
                    <td className="p-3 text-right">$7.8B</td>
                    <td className="p-3 text-right">$4.0B</td>
                    <td className="p-3 text-right text-green-600">$11.8B</td>
                    <td className="p-3 text-right text-red-600">-$2.6B gap</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2024</td>
                    <td className="p-3 text-right">$10.8B</td>
                    <td className="p-3 text-right">$10.6B</td>
                    <td className="p-3 text-right">$5.8B</td>
                    <td className="p-3 text-right text-green-600">$16.4B</td>
                    <td className="p-3 text-right text-green-600">+$5.6B surplus</td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-950">
                    <td className="p-3 font-semibold">2025</td>
                    <td className="p-3 text-right">$8.0B</td>
                    <td className="p-3 text-right">$14.2B</td>
                    <td className="p-3 text-right">$7.8B</td>
                    <td className="p-3 text-right text-green-600 font-semibold">$22.0B</td>
                    <td className="p-3 text-right text-green-600 font-semibold">+$14.0B surplus</td>
                  </tr>
                  <tr className="border-b bg-green-100 dark:bg-green-900">
                    <td className="p-3 font-semibold">2027 (Est.)</td>
                    <td className="p-3 text-right">$5.0B</td>
                    <td className="p-3 text-right">$18.0B</td>
                    <td className="p-3 text-right">$12.0B</td>
                    <td className="p-3 text-right text-green-600 font-bold">$30.0B</td>
                    <td className="p-3 text-right text-green-600 font-bold">+$25.0B surplus</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              By 2024, Skyrizi + Rinvoq combined revenue exceeded the total Humira decline. By 2027,
              the new drugs will generate more than peak Humira alone. The patent cliff has been fully navigated.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Dividend Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="h-7 w-7 text-green-600" />
          Dividend Safety Analysis: 85/100
        </h2>

        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Free Cash Flow Coverage: 1.9x (Strong)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    $22B+ FCF comfortably covers $11.5B in annual dividends. Improving as Skyrizi/Rinvoq
                    scale and Allergan acquisition debt declines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Successful Drug Transition (Outstanding)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Skyrizi + Rinvoq revenue ($22B) now exceeds lost Humira revenue. This is the most
                    successful patent cliff navigation in pharma history. Dividend is on firmer ground than ever.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Diversified Revenue (Good)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Botox ($5.8B), Vraylar ($3.2B), and oncology drugs provide revenue diversification
                    beyond immunology. No single drug exceeds 25% of total revenue.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">52-Year Streak (Excellent)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Management treats the dividend streak as sacrosanct. The 52-year history (including
                    Abbott) represents institutional commitment that transcends any single executive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Debt Load: $60B (Moderate Risk)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Allergan acquisition debt remains elevated at ~$60B. Debt-to-EBITDA of 2.5x is manageable
                    but limits financial flexibility. Rapid deleveraging expected through 2028.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Next Patent Cliff: Skyrizi/Rinvoq (2030s)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Skyrizi patent protection extends to 2035, Rinvoq to 2033. AbbVie must develop
                    next-generation replacements before then. History suggests they will, but it's a risk.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Peer Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-purple-600" />
          AbbVie vs. Pharma Dividend Peers
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3">Company</th>
                    <th className="text-right p-3">Yield</th>
                    <th className="text-right p-3">5Y Growth</th>
                    <th className="text-right p-3">Payout</th>
                    <th className="text-left p-3">Pipeline</th>
                    <th className="text-right p-3">Safety</th>
                  </tr>
                </thead>
                <tbody>
                  {peerComparison.map((stock) => (
                    <tr
                      key={stock.company}
                      className={`border-b ${stock.company.includes('AbbVie') ? 'bg-purple-50 dark:bg-purple-950 font-semibold' : ''}`}
                    >
                      <td className="p-3">{stock.company}</td>
                      <td className="p-3 text-right">{stock.yield}</td>
                      <td className="p-3 text-right text-green-600">{stock.growth5yr}</td>
                      <td className="p-3 text-right">{stock.payout}</td>
                      <td className="p-3">{stock.pipeline}</td>
                      <td className="p-3 text-right">{stock.safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p>
            <strong>AbbVie vs. Johnson & Johnson:</strong> JNJ offers superior safety (95/100 vs. 85/100) and
            a longer streak (62 years), but AbbVie delivers higher yield (3.5% vs. 3.0%) and faster growth
            (7.8% vs. 5.8%). For aggressive income investors, AbbVie is the better pick. For
            ultra-conservative portfolios, JNJ wins. Many investors own both.
          </p>
          <p>
            <strong>AbbVie vs. Pfizer:</strong> Pfizer's 6.5% yield looks attractive until you see the 90% payout
            ratio and 2.0% growth rate. Pfizer faces a more severe patent cliff (Eliquis, Paxlovid decline)
            without clear replacements. AbbVie's successful Humira transition makes it the far safer pharma
            dividend at comparable or better total return potential.
          </p>
          <p>
            <strong>AbbVie vs. Merck:</strong> Merck offers slightly lower yield (3.2%) but faster growth (8.5%)
            driven by Keytruda dominance in oncology. Merck faces its own patent cliff (Keytruda in 2028),
            making the comparison nuanced. AbbVie has already proven it can navigate a patent cliff; Merck
            has not yet been tested.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Landmark className="h-7 w-7 text-indigo-600" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Is AbbVie's dividend safe despite the Humira decline?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, the dividend is safe. Skyrizi and Rinvoq combined revenue ($22B in 2025) has fully
                replaced lost Humira revenue. Free cash flow of $22B+ covers the $11.5B dividend with a
                1.9x coverage ratio. The payout ratio is declining from its peak as new drug revenue scales.
                AbbVie's management has explicitly stated that maintaining and growing the dividend is a top
                capital allocation priority. A dividend cut is extremely unlikely unless multiple blockbuster
                drugs fail simultaneously -- an improbable scenario.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Will AbbVie accelerate dividend growth back to 10%+?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Management has guided for a return to "high single digit" (7-9%) dividend growth by 2027-2028
                as Skyrizi and Rinvoq reach peak revenue and Allergan acquisition debt is paid down. The
                2023-2026 deceleration to 4-6% was expected during the Humira transition trough. With the
                pipeline now delivering, earnings growth should accelerate to 10-12% annually, supporting
                8-10% dividend increases. Return to sustained 10%+ growth is possible but depends on pipeline
                success and no major drug setbacks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">How does AbbVie count 52 years of dividend increases?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                AbbVie was spun off from Abbott Laboratories in January 2013. Before the spinoff, Abbott
                had been increasing its dividend annually since 1973. AbbVie inherited this streak and has
                continued increasing every year since the spinoff. The combined track record -- Abbott
                (1973-2012) plus AbbVie (2013-2026) -- gives a total of 52 consecutive years. This is the
                standard industry convention and is recognized by S&P for Dividend Aristocrat status. Abbott
                Laboratories (ABT) separately has its own post-spinoff streak of 13 years.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">What are AbbVie's biggest risks going forward?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The three main risks are: (1) Next patent cliff -- Skyrizi patent protection runs to 2035 and
                Rinvoq to 2033, so AbbVie needs to develop next-generation drugs before then. (2) Drug pricing
                regulation -- the Inflation Reduction Act allows Medicare to negotiate drug prices, which could
                reduce revenue on selected drugs by 25-60%. (3) Pipeline execution -- AbbVie's R&D must
                continue producing blockbusters; the 70-80% clinical trial failure rate means not every bet
                pays off. However, AbbVie's track record of successful drug development mitigates this risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Should I buy AbbVie or Johnson & Johnson for dividends?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Both are excellent pharma dividend stocks, but they serve different needs. Choose AbbVie if you
                want higher yield (3.5% vs. 3.0%), faster growth (7.8% vs. 5.8%), and are comfortable with
                moderate pharmaceutical risk. Choose JNJ if you want maximum safety (95/100 score), the longest
                streak (62 years), and a lower-volatility stock (beta 0.65). The ideal approach for many
                investors is to own both -- JNJ as the defensive anchor and ABBV as the growth-oriented
                complement. A 60/40 JNJ/ABBV split balances safety with income growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your AbbVie Dividend Returns</h3>
            <p className="mb-6 text-purple-100">
              Model AbbVie's 3.5% yield and dividend growth with our free calculators. See how
              reinvesting dividends in a pharma powerhouse compounds your wealth over decades.
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
                  Yield-on-Cost Calculator
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
        <CardHeader>
          <CardTitle>Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <Link href="/blog/best-healthcare-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Healthcare Dividend Stocks for 2026
            </Link>
            <Link href="/blog/johnson-and-johnson-dividend-analysis" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Johnson & Johnson Dividend Analysis: 62 Years of Increases
            </Link>
            <Link href="/blog/dividend-aristocrats-complete-list-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Complete List of Dividend Aristocrats (2026)
            </Link>
            <Link href="/blog/how-to-analyze-dividend-safety" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              How to Analyze Dividend Safety: Complete Guide
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
