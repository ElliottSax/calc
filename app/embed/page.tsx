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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-16 pt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                FREE WIDGET FOR YOUR WEBSITE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Embed Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Calculator
              </span>
              {' '}on Your Site
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Add professional dividend calculators to your website for free. Just copy, paste, and go!
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Embed Generator Card with Premium Styling */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-30"></div>

          <div className="relative">
            <CalculatorEmbedGenerator />
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-slate-200/50 dark:border-slate-800/50 shadow-xl p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Instant Setup
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Copy the code and paste it into your website. No signup, no API keys, no hassle.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-slate-200/50 dark:border-slate-800/50 shadow-xl p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Fully Responsive
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Works perfectly on desktop, tablet, and mobile. Adapts to any screen size.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-2 border-slate-200/50 dark:border-slate-800/50 shadow-xl p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                100% Free Forever
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                No hidden fees, no premium tiers. Use it on as many sites as you want.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
