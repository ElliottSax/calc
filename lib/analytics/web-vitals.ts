/**
 * Core Web Vitals monitoring and performance tracking
 */

import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

// Global type extensions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    va?: (event: string, ...args: any[]) => void
  }
}

// Metric names for tracking
export type MetricName = 'CLS' | 'INP' | 'FCP' | 'LCP' | 'TTFB'

// Metric thresholds for classification
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 }
}

// Metric rating classification
function getMetricRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name]
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

// Send metric to analytics
function sendToAnalytics(metric: any) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag!('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      custom_map: {
        metric_rating: getMetricRating(metric.name as MetricName, metric.value),
        metric_delta: metric.delta,
        metric_id: metric.id
      }
    })
  }

  // Send to performance monitoring service (e.g., Vercel Analytics)
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', 'Web Vitals', {
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: getMetricRating(metric.name as MetricName, metric.value),
      page_url: window.location.pathname
    })
  }

  // Send to custom endpoint for detailed analysis
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: getMetricRating(metric.name as MetricName, metric.value),
        delta: metric.delta,
        id: metric.id,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        connectionType: (navigator as any).connection?.effectiveType
      })
    }).catch(console.error)
  }
}

// Initialize Web Vitals monitoring
export function initWebVitals() {
  try {
    // Core Web Vitals
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics)
    onLCP(sendToAnalytics)

    // Other important metrics
    onFCP(sendToAnalytics)
    onTTFB(sendToAnalytics)

    console.log('Web Vitals monitoring initialized')
  } catch (error) {
    console.error('Failed to initialize Web Vitals:', error)
  }
}

// Manual performance measurement for custom events
export function measureCustomMetric(name: string, startTime?: number) {
  const endTime = performance.now()
  const value = startTime ? endTime - startTime : endTime
  
  // Send custom metric
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag!('event', 'custom_metric', {
      event_category: 'Performance',
      event_label: name,
      value: Math.round(value),
      non_interaction: true
    })
  }
  
  return value
}

// Performance observer for custom monitoring
export function observePerformance() {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
    return
  }

  // Observe navigation timing
  try {
    const navObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          
          // Track key navigation timings
          const metrics = {
            'DNS Lookup': navEntry.domainLookupEnd - navEntry.domainLookupStart,
            'TCP Connect': navEntry.connectEnd - navEntry.connectStart,
            'TLS Setup': navEntry.connectEnd - navEntry.secureConnectionStart,
            'Request': navEntry.responseStart - navEntry.requestStart,
            'Response': navEntry.responseEnd - navEntry.responseStart,
            'DOM Processing': navEntry.domContentLoadedEventStart - navEntry.responseEnd
          }
          
          Object.entries(metrics).forEach(([name, value]) => {
            if (value > 0) {
              measureCustomMetric(name, performance.now() - value)
            }
          })
        }
      }
    })
    
    navObserver.observe({ entryTypes: ['navigation'] })
  } catch (error) {
    console.error('Navigation observer failed:', error)
  }

  // Observe resource loading
  try {
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming
          
          // Track slow resources (>1s)
          if (resourceEntry.duration > 1000) {
            if (typeof window !== 'undefined' && window.gtag) {
    window.gtag!('event', 'slow_resource', {
                event_category: 'Performance',
                event_label: resourceEntry.name,
                value: Math.round(resourceEntry.duration),
                non_interaction: true
              })
            }
          }
        }
      }
    })
    
    resourceObserver.observe({ entryTypes: ['resource'] })
  } catch (error) {
    console.error('Resource observer failed:', error)
  }
}

// Detect performance issues
export function detectPerformanceIssues() {
  if (typeof window === 'undefined') return
  
  // Memory usage monitoring
  if ('memory' in performance) {
    const memory = (performance as any).memory
    const memoryUsage = {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    }
    
    // Alert if memory usage is high
    const usagePercentage = (memoryUsage.used / memoryUsage.limit) * 100
    if (usagePercentage > 80) {
      console.warn('High memory usage detected:', usagePercentage + '%')
      
      if (typeof window !== 'undefined' && window.gtag) {
    window.gtag!('event', 'high_memory_usage', {
          event_category: 'Performance',
          value: Math.round(usagePercentage),
          non_interaction: true
        })
      }
    }
  }
  
  // Long task detection
  if (window.PerformanceObserver) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn('Long task detected:', entry.duration + 'ms')
          
          if (typeof window !== 'undefined' && window.gtag) {
    window.gtag!('event', 'long_task', {
              event_category: 'Performance',
              value: Math.round(entry.duration),
              non_interaction: true
            })
          }
        }
      })
      
      longTaskObserver.observe({ entryTypes: ['longtask'] })
    } catch (error) {
      console.error('Long task observer failed:', error)
    }
  }
}

// Performance improvement suggestions
export function getPerformanceSuggestions(): string[] {
  const suggestions: string[] = []
  
  // Check for common issues
  if (typeof window !== 'undefined') {
    // Check for too many DOM elements
    const domElements = document.getElementsByTagName('*').length
    if (domElements > 1500) {
      suggestions.push('Consider reducing DOM complexity (current: ' + domElements + ' elements)')
    }
    
    // Check for unoptimized images
    const images = document.getElementsByTagName('img')
    let unoptimizedImages = 0
    for (const img of images) {
      if (!img.loading || !img.srcset) {
        unoptimizedImages++
      }
    }
    if (unoptimizedImages > 0) {
      suggestions.push(`Optimize ${unoptimizedImages} images with lazy loading and responsive images`)
    }
    
    // Check for blocking resources
    const scripts = document.getElementsByTagName('script')
    let blockingScripts = 0
    for (const script of scripts) {
      if (!script.async && !script.defer && script.src) {
        blockingScripts++
      }
    }
    if (blockingScripts > 0) {
      suggestions.push(`Consider async/defer for ${blockingScripts} blocking scripts`)
    }
  }
  
  return suggestions
}

// Export for use in _app.tsx
export { onCLS, onFCP, onINP, onLCP, onTTFB }