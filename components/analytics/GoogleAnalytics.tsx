'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'

// Global type extensions for Google Analytics
declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Initialize gtag
function initializeGoogleAnalytics() {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer?.push(args)
  }
  window.gtag?.('js', new Date())
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll manually send page views
    cookie_flags: 'SameSite=None;Secure',
  })

  // Set up enhanced ecommerce
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    custom_map: {
      dimension1: 'user_type',
      dimension2: 'calculator_type',
      dimension3: 'broker_clicked',
      dimension4: 'content_category',
      metric1: 'calculation_value',
      metric2: 'time_on_calculator',
    },
  })
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !pathname) return

    const searchParamsString = searchParams?.toString() ?? ''
    const pagePath = searchParamsString ? `${pathname}?${searchParamsString}` : pathname

    // Send page view
    window.gtag?.('event', 'page_view', {
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [pathname, searchParams])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}

// Analytics event tracking functions
export const analytics = {
  // Track custom events
  event: (action: string, parameters?: Record<string, any>) => {
    if (typeof window === 'undefined' || !(window as any).gtag) return

    (window as any).gtag('event', action, parameters)
  },

  // Track calculator usage
  trackCalculator: (type: string, inputs: Record<string, any>, result: number) => {
    analytics.event('calculator_use', {
      event_category: 'Calculator',
      calculator_type: type,
      initial_investment: inputs.initialInvestment,
      result_value: result,
      custom_dimension_2: type,
      custom_metric_1: result,
    })
  },

  // Track affiliate clicks
  trackAffiliateClick: (broker: string, position?: string) => {
    analytics.event('affiliate_click', {
      event_category: 'Affiliate',
      broker_name: broker,
      click_position: position,
      custom_dimension_3: broker,
    })

    // Enhanced ecommerce tracking
    analytics.event('select_promotion', {
      promotions: [{
        id: broker,
        name: broker,
        creative_name: position || 'unknown',
        creative_slot: position,
      }],
    })
  },

  // Track conversions
  trackConversion: (type: string, value?: number) => {
    analytics.event('conversion', {
      event_category: 'Conversion',
      conversion_type: type,
      value: value || 0,
      currency: 'USD',
    })

    // Send conversion to Google Ads if configured
    if ((window as any).gtag && process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${type}`,
        value: value || 0,
        currency: 'USD',
      })
    }
  },

  // Track email signups
  trackEmailSignup: (source: string) => {
    analytics.event('sign_up', {
      event_category: 'Lead Generation',
      method: 'email',
      source: source,
    })
  },

  // Track engagement time
  trackEngagement: (seconds: number, page: string) => {
    analytics.event('user_engagement', {
      event_category: 'Engagement',
      engagement_time_msec: seconds * 1000,
      page: page,
      custom_metric_2: seconds,
    })
  },

  // Track scroll depth
  trackScrollDepth: (percentage: number) => {
    analytics.event('scroll', {
      event_category: 'Engagement',
      percent_scrolled: percentage,
    })
  },

  // Track search
  trackSearch: (term: string, results: number) => {
    analytics.event('search', {
      search_term: term,
      results_count: results,
    })
  },

  // Track downloads
  trackDownload: (file: string, type: string) => {
    analytics.event('file_download', {
      event_category: 'Download',
      file_name: file,
      file_type: type,
    })
  },

  // Track video engagement
  trackVideo: (action: 'play' | 'pause' | 'complete', videoId: string, duration?: number) => {
    analytics.event(`video_${action}`, {
      event_category: 'Video',
      video_id: videoId,
      video_duration: duration,
    })
  },

  // Track form interactions
  trackForm: (action: 'start' | 'complete' | 'abandon', formName: string) => {
    analytics.event(`form_${action}`, {
      event_category: 'Form',
      form_name: formName,
    })
  },

  // Track errors
  trackError: (error: string, fatal: boolean = false) => {
    analytics.event('exception', {
      description: error,
      fatal: fatal,
    })
  },

  // Set user properties
  setUserProperties: (properties: Record<string, any>) => {
    if (typeof window === 'undefined' || !(window as any).gtag) return

    (window as any).gtag('set', 'user_properties', properties)
  },

  // Track timing
  trackTiming: (category: string, variable: string, value: number) => {
    analytics.event('timing_complete', {
      event_category: category,
      name: variable,
      value: Math.round(value),
    })
  },
}