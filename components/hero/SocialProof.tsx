"use client"

import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Early Retiree",
    avatar: "SJ",
    quote: "This calculator showed me I could retire 5 years earlier by reinvesting dividends. Life-changing!",
    rating: 5,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Michael Chen",
    role: "Financial Advisor",
    avatar: "MC",
    quote: "I use this with all my clients. The visualizations make dividend investing finally click for people.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Emily Rodriguez",
    role: "Dividend Investor",
    avatar: "ER",
    quote: "Calculated my path to $5,000/month passive income. Now I'm actually on track to hit it in 12 years!",
    rating: 5,
    color: "from-green-500 to-emerald-500"
  }
]

export function SocialProof() {
  return (
    <div className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-black mb-1">100K+</div>
              <div className="text-sm text-slate-400">Happy Users</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-black mb-1">$500M+</div>
              <div className="text-sm text-slate-400">Calculated Wealth</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-black mb-1">4.9/5</div>
              <div className="text-sm text-slate-400">Average Rating</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-black mb-1">#1</div>
              <div className="text-sm text-slate-400">Free Calculator</div>
            </div>
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Loved by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100,000+</span> Investors
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands who've transformed their financial future with our calculator
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="relative h-full p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-12 h-12" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-200 mb-6 leading-relaxed italic relative z-10">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center font-bold text-white`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Trusted by 100K+ investors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>100% free forever</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-white\/\[0\.02\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  )
}
