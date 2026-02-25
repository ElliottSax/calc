import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Wealthfront Review 2026 - Best Robo-Advisor for Passive Investors',
  description: 'Wealthfront review: automated investing, tax-loss harvesting, and high-yield cash account. Perfect for hands-off investors. $200 bonus.',
  keywords: ['wealthfront review', 'robo advisor', 'automated investing']
}

export default function WealthfrontPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600">BEST ROBO-ADVISOR</Badge>
          <h1 className="text-5xl font-bold mb-4">Wealthfront Review 2026</h1>
          <p className="text-xl text-gray-600 mb-6">
            Set it and forget it. Automated portfolio management with tax-loss harvesting and 5.00% APY cash account.
          </p>
          <Button size="lg" className="bg-blue-600">Open Wealthfront Account - $200 Bonus →</Button>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Perfect for Hands-Off Investors</h2>
          <p>Wealthfront manages $30+ billion for 500,000+ clients. Their robo-advisor automatically builds and maintains a diversified portfolio based on your risk tolerance.</p>
          <h3>Key Features</h3>
          <ul>
            <li>Automated tax-loss harvesting (save thousands annually)</li>
            <li>5.00% APY high-yield cash account</li>
            <li>0.25% management fee (first $10K free)</li>
            <li>Auto-rebalancing and dividend reinvestment</li>
            <li>No trading commissions</li>
          </ul>
        </div>
      </main>
    </>
  )
}
