'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, Gift, CheckCircle2 } from 'lucide-react'

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const dismissed = localStorage.getItem('exit-popup-dismissed')
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport
      if (e.clientY < 10 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    // Delay adding listener to avoid false positives
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000) // Wait 5 seconds before enabling

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('exit-popup-dismissed', 'true')
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
          source: 'exit_intent_popup'
        })
      }

      setSuccess(true)
      localStorage.setItem('exit-popup-dismissed', 'true')

      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } catch (err) {
      console.error('Subscription error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto max-w-lg w-full animate-in fade-in zoom-in duration-300">
          <Card className="border-2 border-blue-500 shadow-2xl">
            <CardContent className="pt-6 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-6 w-6" />
              </button>

              {success ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Check your email for the Dividend Investing Starter Kit.
                  </p>
                </div>
              ) : (
                <>
                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Gift className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black mb-2">
                      Wait! Don't Miss This...
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                      Get our <strong>free Dividend Investing Starter Kit</strong> before you go!
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6 space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Complete beginner's guide to dividend investing (24 pages)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>List of 100+ dividend aristocrats with analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>3 proven portfolio templates to copy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Weekly dividend stock analysis & tips</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-center text-lg"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg"
                      disabled={loading}
                    >
                      {loading ? 'Sending Your Guide...' : 'Send Me The Free Guide'}
                    </Button>
                  </form>

                  <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
                    100% free. Unsubscribe anytime. No spam, ever.
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
