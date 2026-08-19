import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | Dividend Engines',
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <p className="text-muted-foreground mb-4">Dividend Engines provides educational tools, not financial advice.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Projections are hypothetical</h2>
      <p className="text-muted-foreground mb-4">Every result is a hypothetical illustration produced from the growth rates, yields, and timelines you enter. Historical averages do not guarantee future results. Real returns vary with markets, fees, taxes, and dividend policy changes.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Accuracy</h2>
      <p className="text-muted-foreground mb-4">We work to keep formulas correct and clearly documented, but we cannot guarantee the site is error-free. If a calculation looks wrong, please report it to <a href="mailto:hello@dividendengines.com" className="underline">hello@dividendengines.com</a> — corrections are our highest priority.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Not a fiduciary</h2>
      <p className="text-muted-foreground mb-4">We are an independent website with no knowledge of your personal situation. Before investing, consider consulting a licensed financial advisor, and never invest money you cannot afford to lose.</p>
      <p className="text-sm text-muted-foreground mt-10">Last updated: August 18, 2026 · Questions: <a href="mailto:hello@dividendengines.com" className="underline">hello@dividendengines.com</a></p>
    </div>
  )
}
