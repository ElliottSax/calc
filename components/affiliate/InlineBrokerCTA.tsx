"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TrendingUp, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import { formatCurrency } from '@/lib/utils/calculations'

interface InlineBrokerCTAProps {
  finalPortfolioValue: number
  finalDividendIncome?: number
  variant?: 'default' | 'compact' | 'featured'
  calculatorType?: string
  className?: string
}

export function InlineBrokerCTA({
  finalPortfolioValue,
  finalDividendIncome,
  variant = 'default',
  calculatorType = 'calculator',
  className = ''
}: InlineBrokerCTAProps) {

  const scrollToBrokers = () => {
    const brokersSection = document.getElementById('brokers')
    if (brokersSection) {
      brokersSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Track CTA click
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'inline_broker_cta_click', {
          calculator: calculatorType,
          portfolio_value: finalPortfolioValue,
          source: 'calculator_results'
        })
      }
    }
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={className}
      >
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 cursor-pointer"
          onClick={scrollToBrokers}
        >
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Ready to start building?</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">See top-rated brokers</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
        </Card>
      </motion.div>
    )
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className={className}
      >
        <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 text-white border-0 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50" />

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="relative p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-black">You're On Track!</h3>
                  <p className="text-blue-200">Now let's make it happen</p>
                </div>
              </div>
            </div>

            {/* Main Value Prop */}
            <div className="mb-6">
              <p className="text-lg text-white/90 mb-3">
                You just calculated a path to{' '}
                <span className="font-black text-2xl text-green-400">
                  {formatCurrency(finalPortfolioValue)}
                </span>
                {finalDividendIncome && (
                  <span>
                    {' '}generating{' '}
                    <span className="font-black text-xl text-blue-400">
                      {formatCurrency(finalDividendIncome)}/year
                    </span>
                    {' '}in passive income
                  </span>
                )}
              </p>
              <p className="text-white/80 text-base">
                The next step is choosing the right broker to start building your portfolio.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-sm text-white/80">Quick Setup</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-sm text-white/80">FDIC Insured</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-sm text-white/80">No Minimums</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToBrokers}
              size="lg"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Compare Top Brokers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-center text-xs text-white/60 mt-3">
              Trusted by thousands of dividend investors
            </p>
          </div>
        </Card>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      <Card className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 dark:from-green-950 dark:via-emerald-950 dark:to-green-950 border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left side - Message */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Ready to Make This Real?
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-1">
                Start building your{' '}
                <span className="font-bold text-green-700 dark:text-green-400">
                  {formatCurrency(finalPortfolioValue)}
                </span>
                {' '}portfolio today
              </p>
              {finalDividendIncome && (
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Generate {formatCurrency(finalDividendIncome)}/year in dividend income
                </p>
              )}
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col gap-2">
              <Button
                onClick={scrollToBrokers}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                See Best Brokers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                Free accounts • No minimums • Get started in minutes
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
