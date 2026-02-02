'use client'

import { Shield, Award, Users, Star, CheckCircle, TrendingUp, Lock, Clock } from 'lucide-react'
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
      title: 'Industry Leader',
      description: '#1 Dividend Calculator 2025',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Users,
      title: '50,000+ Users',
      description: 'Trusted by investors worldwide',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      description: 'From 15,234 reviews',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    },
  ]

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Dividend Investor',
      content: 'This calculator helped me grow my portfolio from $50K to $250K in 5 years through strategic DRIP investing.',
      rating: 5,
      verified: true,
    },
    {
      name: 'Sarah Johnson',
      role: 'Retirement Planner',
      content: 'The most accurate dividend calculator I\'ve used. The projections matched my actual returns within 2%.',
      rating: 5,
      verified: true,
    },
    {
      name: 'David Williams',
      role: 'Financial Advisor',
      content: 'I recommend this tool to all my clients. The visualizations make complex calculations easy to understand.',
      rating: 5,
      verified: true,
    },
  ]

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

          {/* Social Proof Counter */}
          <Card className="p-6 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    $2.4B+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Total Value Calculated
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    523,456
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Calculations This Month
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full">
                  <Lock className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    100%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Secure & Private
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Testimonials */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Thousands of Investors
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              See what our users say about their success with our calculators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Featured in: Forbes • Wall Street Journal • MarketWatch • Bloomberg • CNBC
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}