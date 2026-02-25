import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Robinhood Review 2026 - Best for Beginners & Mobile Trading',
  description: 'Robinhood review: ultra-simple mobile app, fractional shares, crypto trading, and $0 commissions. Perfect for first-time investors.',
  keywords: ['robinhood review', 'beginner investing app', 'mobile trading']
}

export default function RobinhoodPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-600">BEST FOR BEGINNERS</Badge>
          <h1 className="text-5xl font-bold mb-4">Robinhood Review 2026</h1>
          <p className="text-xl text-gray-600 mb-6">
            The easiest way to start investing. Clean mobile-first design with $0 commissions and fractional shares.
          </p>
          <Button size="lg" className="bg-green-600">Open Robinhood Account - Free Stock →</Button>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Investing Made Simple</h2>
          <p>Robinhood pioneered commission-free trading and brought 23+ million users to the stock market with their intuitive mobile app.</p>
          <h3>Perfect for New Investors</h3>
          <ul>
            <li>Ultra-simple mobile-first interface</li>
            <li>$0 minimums to start</li>
            <li>Fractional shares (buy $1 of any stock)</li>
            <li>Zero commissions on stocks, ETFs, and crypto</li>
            <li>Instant deposits up to $1,000</li>
            <li>Extended hours trading</li>
          </ul>
          <h3>Limitations</h3>
          <ul>
            <li>No automatic dividend reinvestment (DRIP)</li>
            <li>Limited research tools</li>
            <li>Basic customer support</li>
            <li>Not ideal for serious dividend investors</li>
          </ul>
        </div>
      </main>
    </>
  )
}
