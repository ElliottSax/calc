"use client"

import { motion } from 'framer-motion'
import {
  TrendingUp,
  Zap,
  LineChart,
  Share2,
  Calculator,
  Target,
  BarChart3,
  DollarSign,
  ArrowUpRight
} from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Calculator,
    title: "Advanced DRIP Calculations",
    description: "Precise dividend reinvestment calculations with compound growth modeling",
    color: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    icon: LineChart,
    title: "Interactive Visualizations",
    description: "Beautiful charts showing your portfolio growth over time",
    color: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: Share2,
    title: "One-Click Sharing",
    description: "Share your results on social media and inspire others",
    color: "from-green-500 to-emerald-500",
    delay: 0.3
  },
  {
    icon: Target,
    title: "Goal Planning",
    description: "Set retirement goals and see exactly how to achieve them",
    color: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    icon: DollarSign,
    title: "Income Projections",
    description: "Calculate your future passive dividend income streams",
    color: "from-yellow-500 to-orange-500",
    delay: 0.5
  },
  {
    icon: BarChart3,
    title: "Comparison Tools",
    description: "Compare DRIP vs non-DRIP strategies side-by-side",
    color: "from-indigo-500 to-purple-500",
    delay: 0.6
  }
]

export function FeaturesShowcase() {
  return (
    <div className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                POWERFUL FEATURES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Everything You Need to Plan
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Dividend Future
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Professional-grade tools that were previously only available to financial advisors.
              Now free for everyone.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
              >
                <Card className="group relative overflow-hidden h-full p-6 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500/20 bg-white dark:bg-slate-900">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5" />
              <span>Start Using These Features Now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
