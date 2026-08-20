import type { Metadata } from 'next'
import Link from 'next/link'
import { DividendTaxCalculator } from '@/components/calculators/DividendTaxCalculator'

const url = 'https://dividendengines.com/calculators/dividend-tax'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Tax Calculator — Qualified vs Ordinary (2026) | Dividend Engines' },
  description:
    'Free dividend tax calculator. Estimate tax on qualified and non-qualified dividends using 2026 brackets, plus the 3.8% NIIT, your total tax, effective rate, and after-tax income.',
  keywords: ['dividend tax calculator', 'qualified dividend tax calculator', 'dividend tax rate calculator', 'how are dividends taxed', 'net investment income tax calculator', 'ordinary vs qualified dividends'],
  alternates: { canonical: url },
  openGraph: { title: 'Dividend Tax Calculator', description: 'Estimate tax on qualified and non-qualified dividends, including NIIT.', type: 'website', url },
}

const faqs = [
  { q: 'How are qualified dividends taxed in 2026?', a: 'Qualified dividends are taxed at the long-term capital gains rates — 0%, 15%, or 20% — based on your taxable income and filing status. For 2026, a single filer pays 0% up to $49,450, 15% up to $545,500, and 20% above that; married-filing-jointly thresholds are $98,900 and $613,700 (source: IRS Revenue Procedure 2025-32).' },
  { q: 'What is the difference between qualified and non-qualified dividends?', a: 'Qualified dividends meet IRS holding-period rules and get the lower capital gains rates. Non-qualified (ordinary) dividends — including most REIT and money-market payouts — are taxed at your ordinary income marginal rate, which can be much higher.' },
  { q: 'What is the 3.8% NIIT on dividends?', a: 'The Net Investment Income Tax adds 3.8% on investment income (including dividends) once your modified adjusted gross income exceeds $200,000 (single) or $250,000 (married filing jointly). This calculator adds it automatically when your income crosses those thresholds.' },
  { q: 'How can I lower the tax on my dividends?', a: 'Hold dividend stocks long enough to qualify for the lower rates, keep high-yield or REIT holdings in tax-advantaged accounts like an IRA or 401(k), and be mindful of the income thresholds that push you into the 15%/20% brackets or trigger NIIT.' },
]

export default function DividendTaxPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', name: 'Dividend Tax Calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, url },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Dividend Tax Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">Dividend Tax Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Estimate the tax on your dividend income. Enter your qualified and non-qualified dividends,
          filing status, and income to see your total tax, effective rate, and after-tax income —
          including the 3.8% NIIT. Free, no signup.
        </p>

        <DividendTaxCalculator />

        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold mb-1">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border p-5">
            <p className="font-medium mb-2">Keep going</p>
            <p className="text-muted-foreground mb-3 text-sm">
              See what your dividends are worth after reinvesting, or shelter them from tax in a retirement account.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/drip" className="text-primary hover:underline">DRIP Calculator →</Link>
              <Link href="/calculators/ira" className="text-primary hover:underline">IRA Calculator →</Link>
              <Link href="/calculators/dividend-yield" className="text-primary hover:underline">Dividend Yield Calculator →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
