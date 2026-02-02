/**
 * Advanced Performance Monitoring and Optimization System
 */

import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals'

// Performance metrics thresholds (in milliseconds)
const THRESHOLDS = {
  FCP: { good: 1800, needs_improvement: 3000 },
  LCP: { good: 2500, needs_improvement: 4000 },
  FID: { good: 100, needs_improvement: 300 },
  INP: { good: 200, needs_improvement: 500 },
  CLS: { good: 0.1, needs_improvement: 0.25 },
  TTFB: { good: 800, needs_improvement: 1800 }
}

interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric[]> = new Map()
  private observers: Map<string, PerformanceObserver> = new Map()
  private callbacks: Set<(metrics: Map<string, PerformanceMetric[]>) => void> = new Set()
  private initialized = false
  private memoryCheckInterval: NodeJS.Timeout | null = null

  initialize() {
    if (this.initialized || typeof window === 'undefined') return
    this.initialized = true

    // Core Web Vitals
    onFCP(metric => this.recordMetric('FCP', metric.value))
    onLCP(metric => this.recordMetric('LCP', metric.value))
    onFID(metric => this.recordMetric('FID', metric.value))
    onINP(metric => this.recordMetric('INP', metric.value))
    onCLS(metric => this.recordMetric('CLS', metric.value))
    onTTFB(metric => this.recordMetric('TTFB', metric.value))

    // Custom Performance Metrics
    this.setupCustomMetrics()

    // Resource Timing
    this.setupResourceTiming()

    // Long Tasks
    this.setupLongTaskMonitoring()

    // Memory Usage
    this.setupMemoryMonitoring()

    // Network Information
    this.setupNetworkMonitoring()
  }

  private recordMetric(name: string, value: number) {
    const rating = this.getRating(name, value)
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now()
    }

    if (!this.metrics.has(name)) {
      this.metrics.set(name, [])
    }
    this.metrics.get(name)!.push(metric)

    // Log poor performance
    if (rating === 'poor') {
      console.warn(`Poor ${name} performance: ${value}ms`)
    }

    // Notify callbacks
    this.callbacks.forEach(cb => cb(this.metrics))

    // Send to analytics
    this.sendToAnalytics(metric)
  }

  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS]
    if (!threshold) return 'good'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.needs_improvement) return 'needs-improvement'
    return 'poor'
  }

  private setupCustomMetrics() {
    // Time to Interactive
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('TTI', entry.startTime)
            }
          })
        })
        observer.observe({ entryTypes: ['paint'] })
        this.observers.set('paint', observer)
      } catch (e) {
        console.error('Failed to setup custom metrics:', e)
      }
    }
  }

  private setupResourceTiming() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            const resource = entry as PerformanceResourceTiming
            if (resource.duration > 1000) {
              console.warn(`Slow resource: ${resource.name} took ${resource.duration}ms`)
            }
          })
        })
        observer.observe({ entryTypes: ['resource'] })
        this.observers.set('resource', observer)
      } catch (e) {
        console.error('Failed to setup resource timing:', e)
      }
    }
  }

  private setupLongTaskMonitoring() {
    if ('PerformanceObserver' in window && 'PerformanceLongTaskTiming' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            console.warn(`Long task detected: ${entry.duration}ms`)
            this.recordMetric('LongTask', entry.duration)
          })
        })
        observer.observe({ entryTypes: ['longtask'] })
        this.observers.set('longtask', observer)
      } catch (e) {
        // Long task API not supported
      }
    }
  }

  private setupMemoryMonitoring() {
    if ('memory' in performance) {
      this.memoryCheckInterval = setInterval(() => {
        const memory = (performance as any).memory
        if (memory) {
          const usedJSHeapSize = memory.usedJSHeapSize / 1048576 // Convert to MB
          const totalJSHeapSize = memory.totalJSHeapSize / 1048576
          const limit = memory.jsHeapSizeLimit / 1048576

          if (usedJSHeapSize > limit * 0.9) {
            console.warn(`High memory usage: ${usedJSHeapSize.toFixed(2)}MB / ${limit.toFixed(2)}MB`)
          }

          this.recordMetric('MemoryUsage', usedJSHeapSize)
        }
      }, 10000) // Check every 10 seconds
    }
  }

  private setupNetworkMonitoring() {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        connection.addEventListener('change', () => {
          const effectiveType = connection.effectiveType
          const downlink = connection.downlink
          console.log(`Network changed: ${effectiveType} (${downlink}Mbps)`)
        })
      }
    }
  }

  private sendToAnalytics(metric: PerformanceMetric) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance', {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating
      })
    }
  }

  subscribe(callback: (metrics: Map<string, PerformanceMetric[]>) => void) {
    this.callbacks.add(callback)
  }

  unsubscribe(callback: (metrics: Map<string, PerformanceMetric[]>) => void) {
    this.callbacks.delete(callback)
  }

  getMetrics() {
    return this.metrics
  }

  getAverageMetric(name: string): number | null {
    const metrics = this.metrics.get(name)
    if (!metrics || metrics.length === 0) return null

    const sum = metrics.reduce((acc, m) => acc + m.value, 0)
    return sum / metrics.length
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers.clear()
    this.callbacks.clear()
    this.metrics.clear()

    // Clear memory monitoring interval
    if (this.memoryCheckInterval) {
      clearInterval(this.memoryCheckInterval)
      this.memoryCheckInterval = null
    }

    this.initialized = false
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor()

// Optimization utilities
export const optimizationUtils = {
  /**
   * Lazy load images with Intersection Observer
   */
  lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src!
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        })
      }, {
        rootMargin: '50px 0px'
      })

      images.forEach(img => imageObserver.observe(img))
    }
  },

  /**
   * Prefetch critical resources
   */
  prefetchCriticalResources(urls: string[]) {
    urls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = url
      document.head.appendChild(link)
    })
  },

  /**
   * Debounce function for expensive operations
   */
  debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: NodeJS.Timeout
    return ((...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }) as T
  },

  /**
   * Throttle function for rate limiting
   */
  throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
    let inThrottle: boolean
    return ((...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }) as T
  },

  /**
   * Request Idle Callback wrapper
   */
  whenIdle(callback: () => void, timeout = 2000) {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout })
    } else {
      setTimeout(callback, 0)
    }
  },

  /**
   * Virtual scrolling for large lists
   */
  createVirtualScroller(container: HTMLElement, items: any[], renderItem: (item: any) => HTMLElement) {
    const itemHeight = 50 // Assume fixed height
    const visibleItems = Math.ceil(container.clientHeight / itemHeight)
    const totalHeight = items.length * itemHeight

    const viewport = document.createElement('div')
    viewport.style.height = `${totalHeight}px`
    viewport.style.position = 'relative'

    const renderVisibleItems = () => {
      const scrollTop = container.scrollTop
      const startIndex = Math.floor(scrollTop / itemHeight)
      const endIndex = Math.min(startIndex + visibleItems + 1, items.length)

      // Clear previous items
      viewport.innerHTML = ''

      // Render visible items
      for (let i = startIndex; i < endIndex; i++) {
        const itemEl = renderItem(items[i])
        itemEl.style.position = 'absolute'
        itemEl.style.top = `${i * itemHeight}px`
        viewport.appendChild(itemEl)
      }
    }

    container.addEventListener('scroll', optimizationUtils.throttle(renderVisibleItems, 16))
    container.appendChild(viewport)
    renderVisibleItems()
  }
}

// Auto-initialize on load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => performanceMonitor.initialize())
  } else {
    performanceMonitor.initialize()
  }
}