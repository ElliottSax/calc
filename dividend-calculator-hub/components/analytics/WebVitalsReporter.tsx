"use client"

import { useEffect } from 'react'
import { initWebVitals, observePerformance, detectPerformanceIssues } from '@/lib/analytics/web-vitals'

/**
 * Web Vitals Reporter Component
 * Initialize Core Web Vitals monitoring on the client side
 */
export function WebVitalsReporter() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return
    
    // Initialize Core Web Vitals monitoring
    initWebVitals()
    
    // Set up performance observers
    observePerformance()
    
    // Detect performance issues
    detectPerformanceIssues()
    
    // Log initialization
    console.log('Web Vitals monitoring initialized')
    
  }, [])
  
  // This component doesn't render anything
  return null
}

/**
 * Performance Debug Panel (for development)
 * Shows real-time performance metrics
 */
export function PerformanceDebugPanel() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }
  
  useEffect(() => {
    // Add debug styles
    const style = document.createElement('style')
    style.textContent = `
      .perf-debug {
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 12px;
        z-index: 9999;
        max-width: 300px;
      }
      .perf-metric {
        margin: 5px 0;
      }
      .perf-good { color: #4ade80; }
      .perf-needs-improvement { color: #fbbf24; }
      .perf-poor { color: #f87171; }
    `
    document.head.appendChild(style)
    
    // Create debug panel
    const panel = document.createElement('div')
    panel.className = 'perf-debug'
    panel.innerHTML = `
      <div><strong>Performance Metrics</strong></div>
      <div class="perf-metric">Loading...</div>
    `
    document.body.appendChild(panel)
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(style)
      document.body.removeChild(panel)
    }
  }, [])
  
  return null
}