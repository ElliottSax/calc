import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { CalculatorEmbedGenerator } from '@/components/viral/CalculatorEmbed'

export const metadata: Metadata = {
  title: 'Embed Dividend Calculator - Free Widget for Your Website',
  description: 'Add a free, responsive dividend calculator to your website. No signup required. Just copy and paste our embed code.',
  keywords: ['calculator embed', 'widget', 'dividend calculator widget', 'free calculator', 'website tools'],
}

export default function EmbedPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <CalculatorEmbedGenerator />
      </main>
    </div>
  )
}
