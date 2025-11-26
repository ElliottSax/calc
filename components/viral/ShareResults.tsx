"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  Download,
  Sparkles,
  TrendingUp,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { formatCurrency } from '@/lib/utils/calculations'

interface ShareResultsProps {
  results: {
    finalPortfolioValue: number
    finalDividendIncome: number
    totalDividendsEarned: number
    totalReturn: number
    yearsCalculated: number
    initialInvestment: number
    monthlyContribution: number
  }
  calculatorType?: 'drip' | 'retirement' | 'growth' | 'yield' | 'coffee'
  className?: string
}

export function ShareResults({ results, calculatorType, className = '' }: ShareResultsProps) {
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const shareText = generateShareText(results)

  // Build share URL with calculator type and key parameters
  const shareUrl = typeof window !== 'undefined' ? (() => {
    const baseUrl = window.location.origin
    const params = new URLSearchParams()

    if (calculatorType) {
      params.set('calc', calculatorType)
    }

    // Add key parameters to URL for pre-filling
    params.set('initial', Math.round(results.initialInvestment).toString())
    params.set('monthly', Math.round(results.monthlyContribution).toString())
    params.set('years', results.yearsCalculated.toString())

    return `${baseUrl}/?${params.toString()}`
  })() : ''

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=DividendInvesting,PassiveIncome,FIRE`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('My Dividend Portfolio Plan')}&summary=${encodeURIComponent(shareText)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)

      trackShare('copy_link')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShare = (platform: string, url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
    trackShare(platform)
  }

  const trackShare = (method: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share_results', {
        method,
        final_value: results.finalPortfolioValue,
        years: results.yearsCalculated
      })
    }
  }

  return (
    <div className={className}>
      {/* Share Preview Card */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-4"
          >
            <SharePreviewCard results={results} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Button */}
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setShowPreview(!showPreview)}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Share2 className="h-5 w-5 mr-2" />
            Share My Results
            <Sparkles className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="lg">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem
              onClick={() => handleShare('twitter', socialLinks.twitter)}
              className="cursor-pointer"
            >
              <Twitter className="h-4 w-4 mr-2 text-blue-400" />
              Share on Twitter
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handleShare('facebook', socialLinks.facebook)}
              className="cursor-pointer"
            >
              <Facebook className="h-4 w-4 mr-2 text-blue-600" />
              Share on Facebook
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handleShare('linkedin', socialLinks.linkedin)}
              className="cursor-pointer"
            >
              <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
              Share on LinkedIn
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={copyToClipboard}
              className="cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2 text-gray-600" />
                  Copy to Clipboard
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Social Proof Text */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
        💡 Share your results and inspire others to start their dividend journey!
      </p>
    </div>
  )
}

/**
 * Generate shareable text based on results
 */
function generateShareText(results: any): string {
  const {
    finalPortfolioValue,
    finalDividendIncome,
    yearsCalculated,
    monthlyContribution
  } = results

  const monthlyIncome = finalDividendIncome / 12

  // Create compelling share text
  const templates = [
    `🎯 Just calculated my dividend future!\n\n📈 Portfolio: ${formatCurrency(finalPortfolioValue)}\n💰 Annual Dividends: ${formatCurrency(finalDividendIncome)}\n⏰ In ${yearsCalculated} years\n\nCalculate yours FREE:`,

    `💸 My dividend plan could generate ${formatCurrency(monthlyIncome)}/month in passive income!\n\nStarting with just ${formatCurrency(monthlyContribution)}/month → ${formatCurrency(finalPortfolioValue)} portfolio\n\nCalculate your dividend retirement:`,

    `🚀 On track for ${formatCurrency(finalDividendIncome)}/year in dividend income!\n\nPortfolio Value: ${formatCurrency(finalPortfolioValue)}\nTime Horizon: ${yearsCalculated} years\n\nStart your dividend journey:`,
  ]

  // Pick template based on results (add variety)
  const templateIndex = Math.floor(finalPortfolioValue / 100000) % templates.length
  return templates[templateIndex]
}

/**
 * Beautiful preview card for social sharing
 */
function SharePreviewCard({ results }: { results: any }) {
  const {
    finalPortfolioValue,
    finalDividendIncome,
    yearsCalculated,
    totalReturn
  } = results

  const monthlyIncome = finalDividendIncome / 12

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white border-0 shadow-2xl">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">My Dividend Plan</h3>
                <p className="text-sm text-white/70">Calculated on DividendCalc</p>
              </div>
            </div>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                <p className="text-xs text-white/70 uppercase tracking-wide">Portfolio Value</p>
              </div>
              <p className="text-2xl font-bold">{formatCurrency(finalPortfolioValue)}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <p className="text-xs text-white/70 uppercase tracking-wide mb-2">Annual Dividends</p>
              <p className="text-2xl font-bold">{formatCurrency(finalDividendIncome)}</p>
            </motion.div>
          </div>

          {/* Secondary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-white/70 mb-1">Monthly Income</p>
                <p className="text-lg font-semibold">{formatCurrency(monthlyIncome)}</p>
              </div>
              <div>
                <p className="text-xs text-white/70 mb-1">Time Horizon</p>
                <p className="text-lg font-semibold">{yearsCalculated} years</p>
              </div>
              <div>
                <p className="text-xs text-white/70 mb-1">Total Return</p>
                <p className="text-lg font-semibold">{totalReturn.toFixed(1)}%</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center pt-4 border-t border-white/20">
            <p className="text-sm text-white/80 mb-2">
              Calculate your dividend future at
            </p>
            <p className="font-bold text-lg">DividendCalculator.com</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Floating share button that appears after calculation
 */
export function FloatingShareButton({ results }: ShareResultsProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Show after a short delay
  useState(() => {
    setTimeout(() => setIsVisible(true), 1000)
  })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <ShareResults results={results} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
