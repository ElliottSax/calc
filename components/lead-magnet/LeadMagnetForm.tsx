'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Download, Loader2 } from 'lucide-react'

export function LeadMagnetForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  // When the form first rendered. The server compares against this to spot bots;
  // sending Date.now() at submit time (as this did) made the gap always ~0ms and
  // flagged every real person as a bot.
  const renderedAt = useRef(Date.now())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !agreedToTerms) return

    setIsSubmitting(true)

    try {
      // Call the email subscription API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          leadMagnet: 'dividend-toolkit',
          renderedAt: renderedAt.current,
        }),
      })

      if (!response.ok) {
        // Log it, but do not stop here. The guide is free and already sitting in
        // /public; holding it hostage to our mailing list working would punish the
        // reader for our outage. Previously any failure showed an alert() and the
        // reader got nothing at all.
        console.error('Subscription failed', await response.text().catch(() => ''))
      }
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
      // Always deliver.
      window.location.href = `/free-guide/thank-you?email=${encodeURIComponent(email)}`
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Check Your Email!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          We've sent your download link to {email}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">First Name (Optional)</Label>
        <Input
          id="name"
          type="text"
          placeholder="John"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1"
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="terms"
          checked={agreedToTerms}
          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
          className="mt-1"
        />
        <Label htmlFor="terms" className="text-sm leading-tight cursor-pointer">
          I agree to receive helpful dividend investing tips via email. I can unsubscribe anytime.
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={!email || !agreedToTerms || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Download className="mr-2 h-5 w-5" />
            Download Free Guide
          </>
        )}
      </Button>
    </form>
  )
}
