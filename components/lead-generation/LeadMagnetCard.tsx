'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DollarSign,
  TrendingUp,
  Rocket,
  Brain,
  BookOpen,
  Download,
  CheckCircle2,
  Clock,
  Star,
  Lock,
  Mail,
} from 'lucide-react'
import type { LeadMagnet } from '@/lib/data/lead-magnets'

/**
 * Icon mapping for lead magnet themes.
 */
const ICON_MAP = {
  DollarSign,
  TrendingUp,
  Rocket,
  Brain,
} as const

/**
 * Theme color classes for lead magnet cards.
 */
const THEME_CLASSES = {
  blue: {
    gradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
    border: 'border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    iconColor: 'text-blue-600 dark:text-blue-400',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    accent: 'text-blue-600',
  },
  green: {
    gradient: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
    border: 'border-green-200 dark:border-green-800',
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    iconColor: 'text-green-600 dark:text-green-400',
    buttonBg: 'bg-green-600 hover:bg-green-700',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    accent: 'text-green-600',
  },
  purple: {
    gradient: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30',
    border: 'border-purple-200 dark:border-purple-800',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    iconColor: 'text-purple-600 dark:text-purple-400',
    buttonBg: 'bg-purple-600 hover:bg-purple-700',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    accent: 'text-purple-600',
  },
  orange: {
    gradient: 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30',
    border: 'border-orange-200 dark:border-orange-800',
    iconBg: 'bg-orange-100 dark:bg-orange-900/50',
    iconColor: 'text-orange-600 dark:text-orange-400',
    buttonBg: 'bg-orange-600 hover:bg-orange-700',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    accent: 'text-orange-600',
  },
} as const

interface LeadMagnetCardProps {
  leadMagnet: LeadMagnet
  /** Compact mode hides the benefits list */
  compact?: boolean
}

export function LeadMagnetCard({ leadMagnet, compact = false }: LeadMagnetCardProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const theme = THEME_CLASSES[leadMagnet.theme]
  const IconComponent = ICON_MAP[leadMagnet.icon]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      // Subscribe via existing newsletter API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          leadMagnet: leadMagnet.id,
          timestamp: Date.now(),
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      // Track the lead magnet download
      if (typeof window !== 'undefined' && (window as any).posthog) {
        ;(window as any).posthog.capture('lead_magnet_download', {
          lead_magnet_id: leadMagnet.id,
          lead_magnet_title: leadMagnet.title,
          source: 'lead_magnet_card',
        })
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className={`border-2 ${theme.border} overflow-hidden`}>
        <CardContent className="pt-8 pb-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
            Your Guide Is Ready!
          </h3>
          <p className="text-green-700 dark:text-green-200 mb-6">
            Check your inbox for "{leadMagnet.title}" -- it should arrive in the next few minutes.
          </p>
          <a
            href={`/api/lead-magnet?id=${leadMagnet.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Read Online Now
            </Button>
          </a>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`border-2 ${theme.border} overflow-hidden transition-all duration-300 hover:shadow-xl`}>
      {/* Header with gradient */}
      <CardHeader className={`bg-gradient-to-br ${theme.gradient} pb-4`}>
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl ${theme.iconBg}`}>
            <IconComponent className={`w-8 h-8 ${theme.iconColor}`} />
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className={theme.badge}>
              <BookOpen className="w-3 h-3 mr-1" />
              {leadMagnet.previewChapters} Free Chapters
            </Badge>
            {leadMagnet.featured && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>
        </div>

        <CardTitle className="text-xl mt-4">{leadMagnet.title}</CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
          {leadMagnet.subtitle}
        </p>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {leadMagnet.description}
        </p>

        {/* Value proposition */}
        <div className={`text-sm font-semibold ${theme.accent}`}>
          {leadMagnet.valueProposition}
        </div>

        {/* Benefits list (hide in compact mode) */}
        {!compact && (
          <ul className="space-y-2">
            {leadMagnet.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme.iconColor}`} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Stats bar */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-b py-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{leadMagnet.readTimeMinutes} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{leadMagnet.previewWords.toLocaleString()} words</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" />
            <span>{leadMagnet.totalChapters - leadMagnet.previewChapters} more in full book</span>
          </div>
        </div>

        {/* Comparable titles */}
        {!compact && leadMagnet.comparableTitles.length > 0 && (
          <p className="text-xs text-slate-400 dark:text-slate-500">
            If you liked {leadMagnet.comparableTitles.slice(0, 2).join(' or ')}, you will love this.
          </p>
        )}

        {/* Email capture form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className={`${theme.buttonBg} text-white whitespace-nowrap`}
            >
              {loading ? (
                'Sending...'
              ) : (
                <>
                  <Download className="w-4 h-4 mr-1" />
                  Get Free Guide
                </>
              )}
            </Button>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <p className="text-xs text-slate-400 text-center">
            Free download. No spam. Unsubscribe anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
