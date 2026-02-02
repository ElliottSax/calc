'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, Mail, TrendingUp } from 'lucide-react'

export function StickyEmailBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Check if user has dismissed
    const dismissed = localStorage.getItem('sticky-bar-dismissed')
    if (dismissed) return

    // Show after scrolling down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('sticky-bar-dismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Replace with your email service API
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('email_signup', {
          source: 'sticky_bottom_bar'
        })
      }

      setSuccess(true)
      localStorage.setItem('sticky-bar-dismissed', 'true')

      // Auto-hide after 2 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    } catch (err) {
      console.error('Subscription error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom duration-300">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {success ? (
              <div className="flex-1 text-center py-1">
                <p className="font-semibold">
                  ✓ Success! Check your email for the free guide.
                </p>
              </div>
            ) : (
              <>
                {/* Message */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 flex-shrink-0 hidden sm:block" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">
                      Get Free Dividend Investing Guide
                    </p>
                    <p className="text-xs text-blue-100 hidden sm:block">
                      Join 2,500+ investors building passive income
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex gap-2 flex-1 max-w-md"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-slate-900"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    disabled={loading}
                    className="whitespace-nowrap"
                  >
                    {loading ? 'Sending...' : 'Get Guide'}
                  </Button>
                </form>
              </>
            )}

            {/* Close */}
            <button
              onClick={handleClose}
              className="text-white hover:text-blue-200 flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
