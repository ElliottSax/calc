'use client'

import React, { useState, useEffect } from 'react'
import { X, Download, Gift, TrendingUp, BookOpen, Calculator, Shield, Star, Users, Clock, CheckCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface EmailCaptureModalProps {
  trigger?: 'exit' | 'scroll' | 'time' | 'manual'
  onClose?: () => void
  variant?: 'default' | 'mega' | 'quiz'
}

export function EmailCaptureModal({ trigger = 'exit', onClose, variant = 'mega' }: EmailCaptureModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({})

  useEffect(() => {
    if (trigger === 'exit') {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !localStorage.getItem('emailCaptured')) {
          setIsOpen(true)
        }
      }
      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave', handleMouseLeave)
    } else if (trigger === 'scroll') {
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        if (scrollPercent > 50 && !localStorage.getItem('emailCaptured')) {
          setIsOpen(true)
          window.removeEventListener('scroll', handleScroll)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else if (trigger === 'time') {
      const timer = setTimeout(() => {
        if (!localStorage.getItem('emailCaptured')) {
          setIsOpen(true)
        }
      }, 30000) // 30 seconds
      return () => clearTimeout(timer)
    }
  }, [trigger])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    localStorage.setItem('emailCaptured', 'true')
    localStorage.setItem('userEmail', email)

    setIsSuccess(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setIsOpen(false)
      onClose?.()
    }, 3000)
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const quizQuestions = [
    {
      question: "What's your investment experience level?",
      options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    },
    {
      question: "What's your primary investment goal?",
      options: ['Retirement Income', 'Wealth Building', 'Passive Income', 'Financial Freedom']
    },
    {
      question: "How much do you plan to invest monthly?",
      options: ['$100-500', '$500-1000', '$1000-5000', '$5000+']
    },
    {
      question: "What's your target annual dividend income?",
      options: ['$1,000-5,000', '$5,000-10,000', '$10,000-50,000', '$50,000+']
    }
  ]

  const leadMagnets = [
    {
      title: '📊 Dividend Portfolio Tracker',
      description: 'Professional Excel template to track all your dividend investments',
      value: '$97',
      downloads: '5,234'
    },
    {
      title: '📈 50 Best Dividend Stocks 2025',
      description: 'In-depth analysis of top dividend-paying companies',
      value: '$67',
      downloads: '8,123'
    },
    {
      title: '🎓 DRIP Investing Masterclass',
      description: '3-hour video course on dividend reinvestment strategies',
      value: '$297',
      downloads: '3,456'
    },
    {
      title: '💰 Tax Optimization Guide',
      description: 'Save thousands on dividend taxes with proven strategies',
      value: '$127',
      downloads: '6,789'
    },
    {
      title: '📱 Dividend Calculator App',
      description: 'Mobile app for iOS/Android with advanced features',
      value: '$47',
      downloads: '12,345'
    }
  ]

  if (variant === 'quiz') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Get Your Personalized Dividend Strategy
            </DialogTitle>
            <DialogDescription>
              Answer 4 quick questions to receive custom recommendations
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Question {quizStep + 1} of 4</span>
                <span>{Math.round(((quizStep + 1) / 4) * 100)}% Complete</span>
              </div>
              <Progress value={((quizStep + 1) / 4) * 100} />
            </div>

            {quizStep < 4 ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{quizQuestions[quizStep].question}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={quizAnswers[quizStep] === option ? 'default' : 'outline'}
                      className="justify-start"
                      onClick={() => {
                        setQuizAnswers({ ...quizAnswers, [quizStep]: option })
                        if (quizStep < 3) {
                          setTimeout(() => setQuizStep(quizStep + 1), 300)
                        } else {
                          setQuizStep(4)
                        }
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    ✅ Your personalized strategy is ready!
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Based on your answers, we've created a custom dividend investing plan
                  </p>
                </div>

                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? 'Sending...' : isSuccess ? '✅ Check Your Email!' : 'Get My Free Strategy →'}
                </Button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  if (variant === 'mega') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={handleClose}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="text-center space-y-4">
              {/* Urgency Banner */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                  Limited Time: 87% OFF Everything
                </span>
              </div>

              <DialogTitle className="text-4xl font-black">
                Get <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">$752 Worth</span> of Premium Resources
              </DialogTitle>

              <DialogDescription className="text-lg">
                Join 10,000+ successful dividend investors and get instant access to our complete toolkit
              </DialogDescription>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900 dark:text-white">2,847</span> people joined this week
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Left Side - What You Get */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Gift className="w-5 h-5 text-green-600" />
                What You'll Get Instantly:
              </h3>

              <div className="space-y-3">
                {leadMagnets.map((magnet, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium">{magnet.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{magnet.description}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500 line-through">{magnet.value}</span>
                        <Badge variant="secondary" className="text-xs">FREE</Badge>
                        <span className="text-xs text-slate-500">• {magnet.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  ⚡ Plus: Weekly market updates & exclusive investment opportunities
                </p>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="space-y-4">
              <Card className="p-6 border-2 border-blue-200 dark:border-blue-800">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-lg text-center mb-4">
                    Claim Your Free Resources Now
                  </h3>

                  <div className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Your First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Your Best Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Interest Selection */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">I'm interested in: (select all that apply)</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['Dividend Stocks', 'REITs', 'ETFs', 'Tax Strategies'].map(interest => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded"
                            checked={selectedInterests.includes(interest)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedInterests([...selectedInterests, interest])
                              } else {
                                setSelectedInterests(selectedInterests.filter(i => i !== interest))
                              }
                            }}
                          />
                          <span className="text-sm">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg"
                    size="lg"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Success! Check Your Email
                      </span>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-2" />
                        Get Instant Access →
                      </>
                    )}
                  </Button>

                  <div className="space-y-2 text-center">
                    <p className="text-xs text-slate-500">
                      <Shield className="w-3 h-3 inline mr-1" />
                      Your information is 100% secure. We never share or sell data.
                    </p>
                    <p className="text-xs text-slate-500">
                      By signing up, you agree to receive helpful emails about dividend investing.
                      Unsubscribe anytime.
                    </p>
                  </div>
                </form>
              </Card>

              {/* Testimonials */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  What others are saying:
                </h4>
                {[
                  { name: 'Robert M.', text: 'The tax guide alone saved me $3,000 last year!' },
                  { name: 'Linda S.', text: 'Finally understand how to build a dividend portfolio properly.' }
                ].map((testimonial, index) => (
                  <div key={index} className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      "{testimonial.text}"
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      - {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Default variant
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={handleClose}
          >
            <X className="w-4 h-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-center">
            Don't Leave Empty-Handed! 🎁
          </DialogTitle>
          <DialogDescription className="text-center">
            Get our exclusive dividend tracker spreadsheet (worth $97) absolutely FREE
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? 'Sending...' : isSuccess ? '✅ Check Your Email!' : 'Get Free Tracker →'}
          </Button>

          <p className="text-xs text-center text-slate-500">
            No spam. Unsubscribe anytime. Your data is secure.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}