'use client'

import { useState } from 'react'
import { LeadMagnetCard } from '@/components/lead-generation/LeadMagnetCard'
import { LEAD_MAGNETS, getFeaturedLeadMagnets } from '@/lib/data/lead-magnets'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  Download,
  Shield,
  Mail,
  TrendingUp,
  Sparkles,
  Star,
  CheckCircle2,
} from 'lucide-react'

/**
 * Lead Magnets Landing Page
 *
 * Cross-project integration: BookCLI (content) -> Calc (distribution)
 *
 * Displays BookCLI-generated nonfiction book previews as gated lead magnets.
 * Users provide email to download free preview chapters, building the
 * subscriber list for the Calc affiliate site's email nurture sequence.
 *
 * Revenue model:
 *   Visitor -> Email capture (lead magnet) -> Email nurture -> Affiliate CTA -> Commission
 *   Expected: 3-5% capture rate, 5% affiliate conversion, $50-200 CPA
 */

type FilterTag = 'all' | 'financial-freedom' | 'investing' | 'decision-making' | 'entrepreneurship'

const FILTER_TAGS: { value: FilterTag; label: string }[] = [
  { value: 'all', label: 'All Guides' },
  { value: 'financial-freedom', label: 'Financial Freedom' },
  { value: 'investing', label: 'Investing' },
  { value: 'decision-making', label: 'Decision Making' },
  { value: 'entrepreneurship', label: 'Entrepreneurship' },
]

export function LeadMagnetsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all')

  const featured = getFeaturedLeadMagnets()
  const filteredMagnets =
    activeFilter === 'all'
      ? LEAD_MAGNETS
      : LEAD_MAGNETS.filter((lm) => lm.tags.some((t) => t.includes(activeFilter)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 dark:from-blue-950/20 dark:via-green-950/20 dark:to-purple-950/20" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 mb-6">
              <Download className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                Free Expert-Written Guides
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
                Free Investing Guides
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Download expert-written guides on financial freedom, wealth building, and investing
              psychology. Get free preview chapters -- no credit card required.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>
                  <strong>{LEAD_MAGNETS.length}</strong> Guides Available
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span>
                  <strong>
                    {LEAD_MAGNETS.reduce((sum, lm) => sum + lm.previewWords, 0).toLocaleString()}
                  </strong>{' '}
                  Words of Free Content
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Shield className="w-4 h-4 text-purple-600" />
                <span>100% Free, No Spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Most Popular Guides</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Our most downloaded guides for building long-term wealth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featured.map((lm) => (
            <LeadMagnetCard key={lm.id} leadMagnet={lm} />
          ))}
        </div>
      </section>

      {/* All Guides with Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">All Free Guides</h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag.value}
                onClick={() => setActiveFilter(tag.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === tag.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMagnets.map((lm) => (
            <LeadMagnetCard key={lm.id} leadMagnet={lm} />
          ))}
        </div>

        {filteredMagnets.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No guides found for this filter. Try "All Guides".</p>
          </div>
        )}
      </section>

      {/* Why Download Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Our Guides Are Different</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Written by experts who practice what they teach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Research-Backed</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Every strategy is grounded in behavioral economics and real-world financial data. No
                fluff, no hype.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Actionable Steps</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Each guide includes specific action items you can implement today. Not just theory
                -- real steps with real results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Comparable Quality</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Written to the same standard as bestselling titles like "The Psychology of Money"
                and "The Simple Path to Wealth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-blue-100" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building Wealth Today
          </h2>
          <p className="text-lg text-blue-100 mb-4 max-w-2xl mx-auto">
            Download any guide above to get started. Each one is packed with actionable strategies
            you can implement immediately.
          </p>
          <p className="text-sm text-blue-200">
            Join thousands of investors who have already downloaded our free guides.
          </p>
        </div>
      </section>
    </div>
  )
}
