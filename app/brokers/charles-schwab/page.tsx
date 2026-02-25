import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Charles Schwab Review 2026 - Best for Comprehensive Services',
  description: 'Charles Schwab review: full-service broker with banking, $0 commissions, excellent research, and local branches. $100 bonus available.',
  keywords: ['charles schwab review', 'schwab dividend investing', 'full service broker']
}

export default function CharlesSchwabPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-600">BEST FULL-SERVICE</Badge>
          <h1 className="text-5xl font-bold mb-4">Charles Schwab Review 2026</h1>
          <p className="text-xl text-gray-600 mb-6">
            The complete financial services powerhouse. Banking, investing, and retirement planning all in one place.
          </p>
          <Button size="lg" className="bg-blue-600">Open Charles Schwab Account →</Button>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Why Schwab Stands Out</h2>
          <p>With $8+ trillion in client assets, Schwab is one of the largest and most trusted names in financial services.</p>
          <h3>Key Benefits</h3>
          <ul>
            <li>$0 commissions on stocks, ETFs, and options</li>
            <li>Schwab Intelligent Portfolios (robo-advisor) - free</li>
            <li>300+ local branches for in-person support</li>
            <li>Integrated banking with no ATM fees worldwide</li>
            <li>thinkorswim platform for advanced traders</li>
            <li>Excellent research and educational resources</li>
          </ul>
        </div>
      </main>
    </>
  )
}
