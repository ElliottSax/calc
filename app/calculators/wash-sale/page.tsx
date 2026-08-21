import type { Metadata } from 'next'
import Link from 'next/link'
import { WashSaleCalculator } from '@/components/calculators/WashSaleCalculator'

const url = 'https://dividendengines.com/calculators/wash-sale'

export const metadata: Metadata = {
  title: { absolute: 'Wash Sale Calculator — Tax-Loss Harvesting Checker | Dividend Engines' },
  description:
    'Free wash sale calculator. Enter your buys and sells to see which losses IRC §1091 disallows, the adjusted cost basis on your replacement shares, and your net deductible loss after the $3,000 cap.',
  keywords: [
    'wash sale calculator',
    'wash sale rule calculator',
    'tax loss harvesting calculator',
    '30 day wash sale rule',
    'disallowed loss calculator',
    'capital loss carryover calculator',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Wash Sale Calculator',
    description: 'Check your trades against the 61-day wash sale window and see your adjusted cost basis and net deductible loss.',
    type: 'website',
    url,
  },
}

const faqs = [
  {
    q: 'What is the wash sale rule?',
    a: 'Under IRC §1091, if you sell a stock or security at a loss and buy a substantially identical security within 30 days before or 30 days after the sale — a 61-day window total — the loss is disallowed for tax purposes. The disallowed amount is added to the cost basis of the replacement shares, so the loss is deferred rather than lost, and reduces your taxable gain (or increases your loss) whenever you eventually sell the replacement shares.',
  },
  {
    q: 'Does the wash sale window count calendar days or trading days?',
    a: 'Calendar days, not trading days — weekends and holidays count. This calculator measures the window as the absolute difference in calendar days between the sale date and the purchase date, and flags any repurchase within 30 days in either direction (source: IRC §1091; IRS Publication 550).',
  },
  {
    q: 'What happens if I only buy back some of the shares I sold?',
    a: "The disallowance is proportional. If you sell 100 shares at a loss and buy back only 40 within the window, 40 shares' worth of the loss is disallowed and added to the basis of those 40 replacement shares; the loss on the other 60 shares is fully deductible as usual. This calculator computes that split automatically per lot.",
  },
  {
    q: "How much of a capital loss can I deduct against ordinary income?",
    a: 'Up to $3,000 per year ($1,500 if married filing separately) of net capital losses can offset ordinary income; any excess carries forward indefinitely to future tax years (source: IRS Topic 409, IRS Publication 550). This calculator applies that cap to your net result automatically.',
  },
  {
    q: 'Does buying the same stock in an IRA trigger a wash sale?',
    a: "Yes — the IRS treats a purchase in any account you control, including an IRA or your spouse's account, as a replacement purchase for wash-sale purposes. Worse, if the replacement shares are bought in an IRA, the disallowed loss cannot be added to that account's basis at all (IRA basis isn't tracked the same way), so the loss is permanently lost rather than deferred. This calculator assumes all trades are in the same taxable account; it does not model cross-account or IRA wash sales.",
  },
  {
    q: 'Is a dividend reinvestment (DRIP) purchase a wash sale trigger?',
    a: 'Yes. An automatic dividend reinvestment that buys more shares of the same stock counts as a purchase for wash-sale purposes just like a manual buy order. If you sell shares of a dividend stock at a loss while its DRIP is still reinvesting nearby dividends, that reinvestment purchase can trigger a wash sale — a common surprise for dividend investors tax-loss harvesting a position they still hold in a DRIP plan.',
  },
]

export default function WashSalePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Wash Sale Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url,
      },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/calculators" className="hover:underline">Calculators</Link> / <span>Wash Sale Calculator</span>
        </nav>
        <h1 className="text-4xl font-bold mb-3">Wash Sale Calculator</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Enter the buys and sells for a position — a dividend stock you're tax-loss harvesting is
          the common case — and see exactly which losses IRC §1091 disallows, the adjusted cost
          basis on your replacement shares, and your net deductible loss after the $3,000 annual
          cap. Free, no signup, nothing leaves your browser.
        </p>

        <WashSaleCalculator />

        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How the calculation works</h2>
          <p className="text-muted-foreground mb-4">
            The default example: 100 shares bought at $50, sold at $40 (a $1,000 loss), then 100
            replacement shares bought two weeks later at $42 — within the 61-day window, so the
            entire $1,000 loss is disallowed and added to the replacement lot's basis, making its
            true cost basis $52/share ($42 + $10 disallowed loss per share). If those replacement
            shares are later sold at $60, the taxable gain is $8/share ($800 total), not $18/share —
            the deferred loss reduced it, exactly as intended by the rule.
          </p>
          <p className="text-muted-foreground mb-4">
            Sales are matched to purchase lots first-in-first-out (FIFO), and losses are matched to
            replacement purchases nearest in time first. Both are standard, defensible conventions
            when the IRS's own rules don't specify an exact matching order for a given set of trades
            — your broker's actual 1099-B is the figure that gets reported to the IRS and may use
            specific-lot identification instead of FIFO if you elected it.
          </p>
        </div>

        <div className="mt-10 max-w-2xl">
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
              See what you owe on the dividends you keep, or find a broker to hold your next tax-loss harvest.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/calculators/dividend-tax" className="text-primary hover:underline">Dividend Tax Calculator →</Link>
              <Link href="/calculators/dividend-growth" className="text-primary hover:underline">Dividend Growth Calculator →</Link>
              <Link href="/brokers" className="text-primary hover:underline">Compare Brokers →</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
          This calculator performs arithmetic on the trades you enter and does not access your
          brokerage account or any market data. It is not tax advice; consult a tax professional
          and your broker's 1099-B before filing.
        </p>
      </div>
    </div>
  )
}
