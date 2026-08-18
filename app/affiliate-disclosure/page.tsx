import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | Dividend Calculator Pro',
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
      <p className="text-muted-foreground mb-4">Some links on Dividend Calculator Pro may be affiliate links to brokerages or financial products. If you open an account or make a purchase through one, we may earn a commission at no additional cost to you.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">What this means in practice</h2>
      <p className="text-muted-foreground mb-4">Commissions fund the free calculators. They never change a calculator&apos;s output, and we only list partners whose products are directly relevant to dividend investing. When no partnership exists, links are plain links.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">FTC compliance</h2>
      <p className="text-muted-foreground mb-4">This disclosure is made in accordance with the U.S. Federal Trade Commission&apos;s 16 CFR Part 255 (&quot;Guides Concerning the Use of Endorsements and Testimonials in Advertising&quot;).</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Our independence</h2>
      <p className="text-muted-foreground mb-4">Partner relationships do not grant editorial influence. A partner cannot pay to change how a calculator works, what a comparison shows, or what we write about them.</p>
      <p className="text-sm text-muted-foreground mt-10">Last updated: August 18, 2026 · Questions: <a href="mailto:support@dividendcalculator.pro" className="underline">support@dividendcalculator.pro</a></p>
    </div>
  )
}
