import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Dividend Calculator Pro',
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-4">By using Dividend Calculator Pro you agree to these terms.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Use of the tools</h2>
      <p className="text-muted-foreground mb-4">The calculators are provided free, as-is, for informational and educational purposes. You may use exported results for personal or professional analysis. You may not scrape, resell, or misrepresent the site as your own.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">No financial advice</h2>
      <p className="text-muted-foreground mb-4">Nothing on this site is investment, tax, or legal advice. Projections are arithmetic applied to assumptions you choose — they are not predictions, and dividends can be cut, suspended, or taxed differently than modeled. Consult a qualified professional before acting.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Liability</h2>
      <p className="text-muted-foreground mb-4">To the maximum extent permitted by law, we are not liable for decisions made or losses incurred based on the tools or content on this site.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Changes</h2>
      <p className="text-muted-foreground mb-4">We may update these terms; continued use after changes constitutes acceptance. Material changes will be reflected in the date below.</p>
      <p className="text-sm text-muted-foreground mt-10">Last updated: August 18, 2026 · Questions: <a href="mailto:support@dividendcalculator.pro" className="underline">support@dividendcalculator.pro</a></p>
    </div>
  )
}
