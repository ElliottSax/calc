'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Shield, Cookie, Settings, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  personalization: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
  })

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
        applyCookiePreferences(saved)
      } catch (e) {
        console.error('Failed to load cookie preferences')
      }
    }
  }, [])

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply Google Analytics
    if (prefs.analytics) {
      // Enable GA4
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted'
      })
    } else {
      // Disable GA4
      window.gtag?.('consent', 'update', {
        analytics_storage: 'denied'
      })
    }

    // Apply marketing cookies
    if (prefs.marketing) {
      window.gtag?.('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      })
    } else {
      window.gtag?.('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      })
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    applyCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    applyCookiePreferences(onlyNecessary)
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    applyCookiePreferences(preferences)
    setShowSettings(false)
    setShowBanner(false)
  }

  if (!showBanner) {
    return (
      <>
        {/* Floating Cookie Settings Button */}
        <button
          onClick={() => setShowSettings(true)}
          className="fixed bottom-4 left-4 z-40 bg-slate-800 text-white p-2 rounded-full hover:bg-slate-700 transition-colors"
          aria-label="Cookie Settings"
        >
          <Cookie className="w-5 h-5" />
        </button>

        {/* Settings Modal */}
        <Dialog open={showSettings} onOpenChange={setShowSettings}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                Cookie Preferences
              </DialogTitle>
              <DialogDescription>
                Manage how we use cookies to improve your experience
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Necessary Cookies */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.necessary}
                    disabled
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Necessary Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Essential for the website to function properly. These cookies ensure basic functionalities
                      and security features of the website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, analytics: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Analytics Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Help us understand how visitors interact with our website by collecting and reporting
                      information anonymously. This includes Google Analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, marketing: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Marketing Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Used to track visitors across websites to display ads that are relevant and engaging.
                      This helps support our free tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.personalization}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, personalization: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Personalization Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Allow the website to remember choices you make (username, language, region) and provide
                      enhanced, personalized features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowSettings(false)}>
                Cancel
              </Button>
              <Button onClick={savePreferences}>
                Save Preferences
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-slate-900 border-t shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">We use cookies 🍪</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We use cookies to enhance your experience, analyze site traffic, and serve personalized content.
                  By clicking "Accept All", you consent to our use of cookies.
                  <button
                    onClick={() => setShowSettings(true)}
                    className="text-blue-600 hover:text-blue-700 ml-1 underline"
                  >
                    Customize
                  </button>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={rejectAll}
                className="whitespace-nowrap"
              >
                Reject All
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowSettings(true)}
                className="whitespace-nowrap"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button
                onClick={acceptAll}
                className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Accept All
              </Button>
            </div>
          </div>

          {/* GDPR Links */}
          <div className="mt-3 pt-3 border-t flex items-center gap-4 text-xs text-slate-500">
            <Shield className="w-4 h-4" />
            <span>GDPR Compliant</span>
            <span>•</span>
            <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
            <span>•</span>
            <a href="/cookies" className="hover:text-blue-600">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Choose which cookies you want to accept. Your choice will be saved for 12 months.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Necessary */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.necessary}
                    disabled
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">Necessary Cookies</h4>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Always Active
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Essential for the website to function. Cannot be disabled.
                    </p>
                    <details className="mt-2">
                      <summary className="text-xs text-blue-600 cursor-pointer">View cookies</summary>
                      <ul className="mt-2 text-xs text-slate-500 space-y-1">
                        <li>• cookieConsent (stores your preferences)</li>
                        <li>• sessionId (maintains your session)</li>
                        <li>• csrfToken (security)</li>
                      </ul>
                    </details>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, analytics: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Help us understand how you use our website and improve it.
                    </p>
                    <details className="mt-2">
                      <summary className="text-xs text-blue-600 cursor-pointer">View cookies</summary>
                      <ul className="mt-2 text-xs text-slate-500 space-y-1">
                        <li>• _ga (Google Analytics)</li>
                        <li>• _gid (Google Analytics)</li>
                        <li>• _gat (Google Analytics)</li>
                      </ul>
                    </details>
                  </div>
                </div>
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, marketing: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Used to show you relevant ads and measure their effectiveness.
                    </p>
                    <details className="mt-2">
                      <summary className="text-xs text-blue-600 cursor-pointer">View cookies</summary>
                      <ul className="mt-2 text-xs text-slate-500 space-y-1">
                        <li>• fbp (Facebook Pixel)</li>
                        <li>• ads/ga-audiences (Google Ads)</li>
                      </ul>
                    </details>
                  </div>
                </div>
              </div>

              {/* Personalization */}
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={preferences.personalization}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, personalization: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Personalization Cookies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Remember your preferences and personalize your experience.
                    </p>
                    <details className="mt-2">
                      <summary className="text-xs text-blue-600 cursor-pointer">View cookies</summary>
                      <ul className="mt-2 text-xs text-slate-500 space-y-1">
                        <li>• theme (dark/light mode)</li>
                        <li>• language (preferred language)</li>
                        <li>• calculations (saved calculations)</li>
                      </ul>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="ghost"
              onClick={rejectAll}
            >
              Reject All
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowSettings(false)}>
                Cancel
              </Button>
              <Button onClick={savePreferences}>
                Save My Preferences
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}