/**
 * Performance configuration and utilities for production optimization
 */

// Lazy load heavy components
export const lazyLoadConfig = {
  // Delay before loading non-critical components
  delay: 100,
  // Intersection observer options for lazy loading
  intersectionOptions: {
    rootMargin: '50px',
    threshold: 0.01,
  },
}

// Cache configuration
export const cacheConfig = {
  // Static assets cache duration (1 year)
  staticAssets: 31536000,
  // API responses cache duration (5 minutes)
  apiResponses: 300,
  // Page cache duration (1 hour)
  pages: 3600,
}

// Performance monitoring thresholds
export const performanceThresholds = {
  // First Contentful Paint (ms)
  fcp: 1800,
  // Largest Contentful Paint (ms)
  lcp: 2500,
  // First Input Delay (ms)
  fid: 100,
  // Cumulative Layout Shift
  cls: 0.1,
  // Time to Interactive (ms)
  tti: 3800,
}

// Feature flags for conditional loading
export const featureFlags = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableAds: process.env.NEXT_PUBLIC_ENABLE_ADS === 'true',
  enableEmailCapture: process.env.NEXT_PUBLIC_ENABLE_EMAIL_CAPTURE === 'true',
}
