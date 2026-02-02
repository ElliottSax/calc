import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals'

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals'

function getConnectionSpeed() {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const conn = (navigator as any).connection
    return conn?.effectiveType || 'unknown'
  }
  return 'unknown'
}

interface AnalyticsOptions {
  params: { [key: string]: any }
  path: string
  analyticsId?: string
  debug?: boolean
}

function sendToAnalytics(metric: Metric, options: AnalyticsOptions) {
  const { name, delta, value, id, entries } = metric
  const { analyticsId, debug = false } = options

  if (debug) {
    console.log('[Web Vitals]', name, value, metric)
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      metric_id: id,
      metric_delta: delta,
      metric_value: value,
      event_category: 'Web Vitals',
      event_label: id,
      non_interaction: true,
    })
  }

  // Send to Vercel Analytics if configured
  if (analyticsId) {
    const body = {
      dsn: analyticsId,
      id,
      page: options.path,
      href: location.href,
      event_name: name,
      value: value.toString(),
      speed: getConnectionSpeed(),
    }

    const blob = new Blob([JSON.stringify(body)], {
      type: 'application/json',
    })

    if (navigator.sendBeacon) {
      navigator.sendBeacon(vitalsUrl, blob)
    } else {
      fetch(vitalsUrl, {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).catch(console.error)
    }
  }

  // Custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: name,
        value,
        delta,
        id,
        page: options.path,
        timestamp: Date.now(),
        connection: getConnectionSpeed(),
      }),
    }).catch(() => {
      // Fail silently
    })
  }
}

export function reportWebVitals(options: AnalyticsOptions) {
  try {
    onCLS((metric) => sendToAnalytics(metric, options))
    onFID((metric) => sendToAnalytics(metric, options))
    onFCP((metric) => sendToAnalytics(metric, options))
    onLCP((metric) => sendToAnalytics(metric, options))
    onTTFB((metric) => sendToAnalytics(metric, options))
    onINP((metric) => sendToAnalytics(metric, options))
  } catch (err) {
    console.error('[Web Vitals] Failed to report metrics', err)
  }
}

// Performance monitoring utilities
export function measurePerformance(name: string) {
  if (typeof window === 'undefined' || !window.performance) return

  const startMark = `${name}-start`
  const endMark = `${name}-end`
  const measureName = `${name}-duration`

  performance.mark(startMark)

  return {
    end: () => {
      performance.mark(endMark)
      performance.measure(measureName, startMark, endMark)

      const measure = performance.getEntriesByName(measureName)[0]
      const duration = measure ? measure.duration : 0

      // Clean up marks and measures
      performance.clearMarks(startMark)
      performance.clearMarks(endMark)
      performance.clearMeasures(measureName)

      // Log if in debug mode
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`)
      }

      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name,
          value: Math.round(duration),
          event_category: 'Performance',
        })
      }

      return duration
    },
  }
}

// Resource hints
export function addResourceHints() {
  if (typeof document === 'undefined') return

  const head = document.head

  // Preconnect to critical third-party origins
  const preconnectOrigins = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
  ]

  preconnectOrigins.forEach((origin) => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = origin
    link.crossOrigin = 'anonymous'
    head.appendChild(link)
  })

  // DNS prefetch for other domains
  const dnsPrefetchOrigins = [
    'https://cdn.jsdelivr.net',
    'https://unpkg.com',
  ]

  dnsPrefetchOrigins.forEach((origin) => {
    const link = document.createElement('link')
    link.rel = 'dns-prefetch'
    link.href = origin
    head.appendChild(link)
  })
}

// Lazy load scripts
export function lazyLoadScript(src: string, options?: {
  defer?: boolean
  async?: boolean
  onLoad?: () => void
  onError?: () => void
}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src

    if (options?.defer) script.defer = true
    if (options?.async) script.async = true

    script.onload = () => {
      options?.onLoad?.()
      resolve(true)
    }

    script.onerror = () => {
      options?.onError?.()
      reject(new Error(`Failed to load script: ${src}`))
    }

    document.body.appendChild(script)
  })
}

// Optimize for Core Web Vitals
export function optimizeForCoreWebVitals() {
  if (typeof window === 'undefined') return

  // Add resource hints
  addResourceHints()

  // Optimize images loading
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]')
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement
      imgElement.src = imgElement.dataset.src!
      imgElement.removeAttribute('data-src')
    })
  }

  // Optimize fonts loading
  if ('fonts' in document) {
    (document as any).fonts.ready.then(() => {
      document.body.classList.add('fonts-loaded')
    })
  }
}