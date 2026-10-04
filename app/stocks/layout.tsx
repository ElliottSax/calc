import type { Metadata } from 'next'

// app/stocks/page.tsx is a client component, so it cannot export metadata itself.
// Without this the stock index inherited the homepage canonical from the root layout.
// Individual /stocks/[symbol] pages set their own canonical in generateMetadata.
export const metadata: Metadata = {
  alternates: { canonical: 'https://dividendengines.com/stocks' },
}

export default function StocksLayout({ children }: { children: React.ReactNode }) {
  return children
}
