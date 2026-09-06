'use client'

import { Shield, Award, Users, Lock } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function TrustSignals() {
  const trustBadges = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit SSL encryption',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      icon: Award,
      title: 'Transparent Math',
      description: 'Every formula and assumption is shown, not hidden',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Users,
      title: 'No Signup',
      description: 'Runs entirely in your browser',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
  ]

  // Testimonials removed 2026-08-18: three invented people, flagged `verified: true`,
  // one claiming a $50K -> $250K portfolio result. Fabricated endorsements violate
  // FTC 16 CFR 255 and are the top affiliate-network rejection signal.
  const testimonials: never[] = []

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {trustBadges.map((badge, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <div className={`${badge.bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <badge.icon className={`w-6 h-6 ${badge.color}`} />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {badge.description}
                </p>
              </Card>
            ))}
          </div>

          {/* A "$2.4B+ Total Value Calculated" / "523,456 Calculations This Month"
              counter used to sit here -- both invented. Fake activity counters are
              exactly the FTC/affiliate-network compliance risk flagged sitewide
              (see Footer.tsx, lib/schemas/index.ts); removed rather than replaced,
              since there's no real usage metric to show honestly in its place. */}
          <Card className="p-6 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full">
                  <Lock className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    100%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Runs in your browser — nothing you enter is sent to a server
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}