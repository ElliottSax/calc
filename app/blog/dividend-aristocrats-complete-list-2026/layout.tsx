import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dividend Aristocrats List 2026: All 68 Stocks Ranked by Yield & Streak',
  description: 'Complete list of all 68 Dividend Aristocrats with 25+ years of consecutive dividend increases. Sortable by yield, sector, and streak length. Expert analysis and top picks.',
  keywords: 'dividend aristocrats, dividend aristocrats list, dividend kings, best dividend stocks, 25 year dividend growth, reliable dividend stocks',
  openGraph: {
    title: 'Dividend Aristocrats 2026: Complete List of All 68 Stocks',
    description: 'All 68 S&P 500 Dividend Aristocrats ranked by yield, sector, and growth streak. Find the most reliable dividend stocks with 25+ year track records.',
    type: 'article',
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
