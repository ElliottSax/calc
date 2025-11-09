"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Mail, Download, CheckCircle } from 'lucide-react'

interface EmailCaptureFormProps {
  variant?: 'inline' | 'modal' | 'banner'
  onSuccess?: () => void
}

export function EmailCaptureForm({ variant = 'inline', onSuccess }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)

    try {
      // In production, this would send to your email service (e.g., ConvertKit, Mailchimp)
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, leadMagnet: 'dividend-aristocrats-portfolio' })
      })

      if (response.ok) {
        setSubmitted(true)
        toast({
          title: "Success!",
          description: "Check your email for your free Dividend Aristocrats Portfolio guide."
        })
        
        // Track conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 0
          })
        }

        onSuccess?.()
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted && variant === 'inline') {
    return (
      <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <p className="font-medium">Success! Check your email for your free guide.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-8 w-8" />
            <div>
              <h3 className="font-bold">Free Dividend Aristocrats Portfolio</h3>
              <p className="text-sm opacity-90">Get our curated list of top dividend stocks</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
            <Button type="submit" variant="secondary" disabled={loading}>
              {loading ? 'Sending...' : 'Get Free Guide'}
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Free Dividend Aristocrats Starter Portfolio
        </CardTitle>
        <CardDescription>
          Get our expertly curated portfolio of 10 high-yield dividend aristocrats with detailed analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name (Optional)</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs text-gray-600">You&apos;ll receive:</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ 10 carefully selected dividend aristocrats</li>
              <li>✓ Detailed analysis of each stock</li>
              <li>✓ Portfolio allocation recommendations</li>
              <li>✓ Monthly dividend investing tips</li>
            </ul>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Processing...' : 'Get Your Free Portfolio'}
          </Button>

          <p className="text-xs text-center text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}