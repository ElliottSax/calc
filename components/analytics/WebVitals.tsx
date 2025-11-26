'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { performanceThresholds } from '@/lib/config/performance'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      const body = JSON.stringify(metric)
      const url = '/api/analytics/vitals'

      // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body)
      } else {
        fetch(url, { body, method: 'POST', keepalive: true })
      }

      // Send to Google Analytics if available
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(
            metric.name === 'CLS' ? metric.value * 1000 : metric.value
          ),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }

      // Check against thresholds and log warnings
      const threshold = performanceThresholds[metric.name.toLowerCase() as keyof typeof performanceThresholds]
      if (threshold && metric.value > threshold) {
        console.warn(
          `Performance warning: ${metric.name} (${Math.round(metric.value)}) exceeds threshold (${threshold})`
        )
      }
    }
  })

  return null
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
