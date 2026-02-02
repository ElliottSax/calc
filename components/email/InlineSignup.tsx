'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, TrendingUp, CheckCircle2 } from 'lucide-react'

interface InlineSignupProps {
  variant?: 'default' | 'compact' | 'featured'
  title?: string
  description?: string
  buttonText?: string
  source?: string
}

export function InlineSignup({
  variant = 'default',
  title,
  description,
  buttonText = 'Get Free Guide',
  source = 'inline'
}: InlineSignupProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const defaultTitle = 'Start Building Dividend Income Today'
  const defaultDescription = 'Get our free Dividend Investing Starter Kit + weekly tips delivered to your inbox'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      // TODO: Replace with your actual email service API
      // Example for ConvertKit:
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, source })
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Track signup
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('email_signup', {
          source,
          variant
        })
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
        <CardContent className="pt-6 text-center">
          <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
            Check Your Email!
          </h3>
          <p className="text-green-700 dark:text-green-200">
            We've sent you the Dividend Investing Starter Kit. Check your inbox (and spam folder) in the next few minutes.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>
    )
  }

  if (variant === 'featured') {
    return (
      <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <Mail className="h-16 w-16 mb-6 text-blue-100" />
            <h2 className="text-3xl font-black mb-4">
              {title || defaultTitle}
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              {description || defaultDescription}
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-slate-900"
                />
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  disabled={loading}
                  className="whitespace-nowrap"
                >
                  {loading ? 'Sending...' : buttonText}
                </Button>
              </div>
              {error && <p className="text-sm text-red-200 mt-2">{error}</p>}
            </form>

            <div className="mt-6 flex items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>No spam</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              {title || defaultTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {description || defaultDescription}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                {loading ? 'Subscribing...' : buttonText}
              </Button>
            </form>
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Join 2,500+ dividend investors. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
