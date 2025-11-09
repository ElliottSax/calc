"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, Download, TrendingUp, BookOpen } from 'lucide-react'
import { getUserBehavior, trackLeadCapture, updateBehaviorMetrics } from '@/lib/analytics/tracking'
import { useToast } from '@/hooks/use-toast'
import type { UserBehaviorTrigger, LeadSegment } from '@/types/monetization'

const LEAD_SEGMENTS: LeadSegment[] = [
  {
    id: 'beginner',
    name: 'Beginner Investor',
    description: 'Just starting with dividend investing',
    tags: ['education', 'basics', 'getting-started'],
    leadMagnet: {
      id: 'beginner-guide',
      title: 'Dividend Investing Starter Guide',
      description: 'Complete 30-page guide to dividend investing basics',
      type: 'pdf',
      deliveryMethod: 'instant',
      segmentId: 'beginner'
    }
  },
  {
    id: 'growth',
    name: 'Growth-Focused',
    description: 'Looking for dividend growth opportunities',
    tags: ['growth', 'aristocrats', 'compounding'],
    leadMagnet: {
      id: 'growth-portfolio',
      title: '10 High-Growth Dividend Stocks',
      description: 'Curated list of dividend growers with 10%+ annual increases',
      type: 'pdf',
      deliveryMethod: 'instant',
      segmentId: 'growth'
    }
  },
  {
    id: 'income',
    name: 'Income Seeker',
    description: 'Focused on high-yield dividend stocks',
    tags: ['income', 'yield', 'monthly-dividends'],
    leadMagnet: {
      id: 'income-portfolio',
      title: 'High-Yield Monthly Dividend Portfolio',
      description: 'Build consistent monthly income with these dividend picks',
      type: 'pdf',
      deliveryMethod: 'instant',
      segmentId: 'income'
    }
  },
  {
    id: 'retirement',
    name: 'Retirement Planner',
    description: 'Building dividend income for retirement',
    tags: ['retirement', 'passive-income', 'financial-freedom'],
    leadMagnet: {
      id: 'retirement-calculator',
      title: 'Retirement Income Calculator + Guide',
      description: 'Excel calculator and guide for dividend retirement planning',
      type: 'excel',
      deliveryMethod: 'instant',
      segmentId: 'retirement'
    }
  }
]

const BEHAVIOR_TRIGGERS: UserBehaviorTrigger[] = [
  {
    type: 'time-on-page',
    threshold: 60, // 60 seconds
    action: 'show-popup',
    targetSegment: 'beginner'
  },
  {
    type: 'scroll-depth',
    threshold: 75, // 75% scroll
    action: 'show-popup',
    targetSegment: 'growth'
  },
  {
    type: 'calculation-completed',
    threshold: 2, // 2 calculations
    action: 'show-popup',
    targetSegment: 'income'
  },
  {
    type: 'exit-intent',
    threshold: 1,
    action: 'show-popup',
    targetSegment: 'retirement'
  }
]

export function BehaviorTriggeredPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSegment, setSelectedSegment] = useState<LeadSegment | null>(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [segment, setSegment] = useState('')
  const [loading, setLoading] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if popup was already shown this session
    if (sessionStorage.getItem('popupShown') === 'true') {
      setHasShown(true)
      return
    }

    // Set up behavior tracking
    const trackingInterval = setInterval(() => {
      updateBehaviorMetrics()
      checkTriggers()
    }, 5000) // Check every 5 seconds

    // Set up exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        triggerPopup('exit-intent')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearInterval(trackingInterval)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const checkTriggers = () => {
    if (hasShown) return

    const behavior = getUserBehavior()

    for (const trigger of BEHAVIOR_TRIGGERS) {
      let shouldTrigger = false

      switch (trigger.type) {
        case 'time-on-page':
          shouldTrigger = behavior.timeOnPage >= trigger.threshold
          break
        case 'scroll-depth':
          shouldTrigger = behavior.scrollDepth >= trigger.threshold
          break
        case 'calculation-completed':
          shouldTrigger = behavior.calculationsCompleted >= trigger.threshold
          break
        case 'page-views':
          shouldTrigger = behavior.pageViews >= trigger.threshold
          break
      }

      if (shouldTrigger) {
        triggerPopup(trigger.type, trigger.targetSegment)
        break
      }
    }
  }

  const triggerPopup = (triggerType: string, targetSegment?: string) => {
    if (hasShown) return

    const segment = targetSegment 
      ? LEAD_SEGMENTS.find(s => s.id === targetSegment)
      : LEAD_SEGMENTS[0]

    setSelectedSegment(segment || LEAD_SEGMENTS[0])
    setIsOpen(true)
    setHasShown(true)
    sessionStorage.setItem('popupShown', 'true')

    // Track popup impression
    trackEvent('lead_popup_shown', {
      trigger_type: triggerType,
      segment: segment?.id
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !segment) {
      toast({
        title: "Please complete all fields",
        variant: "destructive"
      })
      return
    }

    setLoading(true)

    try {
      const selectedSegmentData = LEAD_SEGMENTS.find(s => s.id === segment)
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          segment,
          leadMagnet: selectedSegmentData?.leadMagnet.id
        })
      })

      if (response.ok) {
        trackLeadCapture({
          leadMagnet: selectedSegmentData?.leadMagnet.id || 'unknown',
          segment,
          source: 'behavior-popup'
        })

        toast({
          title: "Success!",
          description: `Check your email for your ${selectedSegmentData?.leadMagnet.title}`
        })

        setIsOpen(false)
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

  if (!selectedSegment) return null

  const Icon = segment === 'beginner' ? BookOpen : 
                segment === 'growth' ? TrendingUp : 
                Download

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon className="h-6 w-6 text-blue-600" />
            Free Resource for You!
          </DialogTitle>
        </DialogHeader>

        <Card className="border-0 shadow-none">
          <CardContent className="p-0 pt-4">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {selectedSegment.leadMagnet.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedSegment.leadMagnet.description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="popup-name">Name (Optional)</Label>
                  <Input
                    id="popup-name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="popup-email">Email Address</Label>
                  <Input
                    id="popup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="popup-segment">I&apos;m interested in...</Label>
                  <Select value={segment} onValueChange={setSegment} required>
                    <SelectTrigger id="popup-segment">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {LEAD_SEGMENTS.map((seg) => (
                        <SelectItem key={seg.id} value={seg.id}>
                          {seg.name} - {seg.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Get My Free Resource'}
                </Button>

                <p className="text-xs text-center text-gray-500">
                  We&apos;ll also send you weekly dividend investing tips.
                  Unsubscribe anytime.
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

// Helper to track events
function trackEvent(name: string, params?: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params)
  }
}