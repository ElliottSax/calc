/**
 * Automated testing scripts for core functionality
 * Run with: npm run test:functionality
 */

import { expect } from '@jest/globals'
import { MOCK_STOCK_DATA, MOCK_DIVIDEND_DATA, mockFMPClient } from '../testing/mock-api'

// Calculator testing utilities
export class CalculatorTests {
  
  // Test DRIP calculator mathematics
  static testDRIPCalculation() {
    const testCases = [
      {
        name: 'Basic DRIP Calculation',
        input: {
          initialInvestment: 10000,
          monthlyContribution: 500,
          investmentYears: 20,
          currentYield: 0.04,
          dividendGrowthRate: 0.05,
          stockPrice: 100
        },
        expectedRange: {
          totalValue: { min: 400000, max: 500000 },
          totalShares: { min: 2000, max: 3000 }
        }
      },
      {
        name: 'Zero Growth DRIP',
        input: {
          initialInvestment: 5000,
          monthlyContribution: 0,
          investmentYears: 10,
          currentYield: 0.03,
          dividendGrowthRate: 0,
          stockPrice: 50
        },
        expectedRange: {
          totalValue: { min: 6500, max: 8000 },
          totalShares: { min: 100, max: 150 }
        }
      }
    ]
    
    return testCases.map(testCase => {
      const result = this.calculateDRIP(testCase.input)
      return {
        name: testCase.name,
        passed: (
          result.totalValue >= testCase.expectedRange.totalValue.min &&
          result.totalValue <= testCase.expectedRange.totalValue.max &&
          result.totalShares >= testCase.expectedRange.totalShares.min &&
          result.totalShares <= testCase.expectedRange.totalShares.max
        ),
        result,
        expected: testCase.expectedRange
      }
    })
  }
  
  // DRIP calculation logic for testing
  private static calculateDRIP(input: any) {
    const {
      initialInvestment,
      monthlyContribution,
      investmentYears,
      currentYield,
      dividendGrowthRate,
      stockPrice
    } = input
    
    let totalShares = initialInvestment / stockPrice
    let currentDividend = stockPrice * currentYield
    let totalValue = initialInvestment
    
    // Simple annual calculation for testing
    for (let year = 1; year <= investmentYears; year++) {
      // Add monthly contributions
      const yearlyContribution = monthlyContribution * 12
      const contributionShares = yearlyContribution / stockPrice
      totalShares += contributionShares
      
      // Calculate dividends and reinvest
      const dividendIncome = totalShares * currentDividend
      const dividendShares = dividendIncome / stockPrice
      totalShares += dividendShares
      
      // Grow dividend for next year
      currentDividend *= (1 + dividendGrowthRate)
      
      // Update total value
      totalValue = totalShares * stockPrice
    }
    
    return {
      totalValue,
      totalShares,
      finalDividendRate: currentDividend / stockPrice
    }
  }
  
  // Test dividend yield calculation
  static testYieldCalculation() {
    const testCases = [
      {
        stockPrice: 100,
        annualDividend: 4,
        expectedYield: 0.04
      },
      {
        stockPrice: 50,
        annualDividend: 1.5,
        expectedYield: 0.03
      },
      {
        stockPrice: 25,
        annualDividend: 2,
        expectedYield: 0.08
      }
    ]
    
    return testCases.map(testCase => {
      const calculatedYield = testCase.annualDividend / testCase.stockPrice
      return {
        ...testCase,
        calculatedYield,
        passed: Math.abs(calculatedYield - testCase.expectedYield) < 0.0001
      }
    })
  }
}

// API testing utilities
export class APITests {
  
  static async testMockAPIResponses() {
    const testResults = []
    
    try {
      // Test stock quote
      const jnjQuote = await mockFMPClient.getQuote('JNJ')
      testResults.push({
        test: 'JNJ Quote',
        passed: jnjQuote?.[0]?.symbol === 'JNJ',
        data: jnjQuote?.[0]
      })
      
      // Test dividend history
      const jnjDividends = await mockFMPClient.getHistoricalDividend('JNJ')
      testResults.push({
        test: 'JNJ Dividends',
        passed: jnjDividends?.symbol === 'JNJ' && Array.isArray(jnjDividends.historical),
        data: jnjDividends
      })
      
      // Test financial metrics
      const jnjMetrics = await mockFMPClient.getFinancialMetrics('JNJ')
      testResults.push({
        test: 'JNJ Metrics',
        passed: jnjMetrics?.[0]?.symbol === 'JNJ',
        data: jnjMetrics?.[0]
      })
      
      // Test aristocrats data
      const aristocrats = await mockFMPClient.getDividendAristocrats()
      testResults.push({
        test: 'Aristocrats Data',
        passed: Array.isArray(aristocrats) && aristocrats.length > 0,
        data: aristocrats
      })
      
    } catch (error) {
      testResults.push({
        test: 'API Error',
        passed: false,
        error: error instanceof Error ? error.message : String(error)
      })
    }
    
    return testResults
  }
}

// SEO testing utilities
export class SEOTests {
  
  static validateStructuredData(jsonLd: any) {
    const validationResults = []
    
    // Check basic schema structure
    if (jsonLd['@context'] && jsonLd['@type']) {
      validationResults.push({
        test: 'Basic Schema Structure',
        passed: true,
        message: `Valid ${jsonLd['@type']} schema`
      })
    } else {
      validationResults.push({
        test: 'Basic Schema Structure',
        passed: false,
        message: 'Missing @context or @type'
      })
    }
    
    // Validate specific schema types
    switch (jsonLd['@type']) {
      case 'Corporation':
        validationResults.push({
          test: 'Corporation Schema',
          passed: !!(jsonLd.name && jsonLd.tickerSymbol),
          message: 'Corporation requires name and tickerSymbol'
        })
        break
        
      case 'Article':
        validationResults.push({
          test: 'Article Schema',
          passed: !!(jsonLd.headline && jsonLd.author && jsonLd.datePublished),
          message: 'Article requires headline, author, and datePublished'
        })
        break
        
      case 'WebApplication':
        validationResults.push({
          test: 'WebApplication Schema',
          passed: !!(jsonLd.name && jsonLd.applicationCategory),
          message: 'WebApplication requires name and applicationCategory'
        })
        break
    }
    
    return validationResults
  }
  
  static validateMetaTags(metaTags: Record<string, string>) {
    const requirements = {
      'title': 'Page title is required',
      'description': 'Meta description is required',
      'og:title': 'Open Graph title is required',
      'og:description': 'Open Graph description is required',
      'og:image': 'Open Graph image is required',
      'twitter:card': 'Twitter card type is required'
    }
    
    return Object.entries(requirements).map(([tag, message]) => ({
      test: `Meta Tag: ${tag}`,
      passed: !!metaTags[tag],
      message: metaTags[tag] ? `Present: ${metaTags[tag]}` : message
    }))
  }
}

// Performance testing utilities
export class PerformanceTests {
  
  static measurePageLoadMetrics() {
    if (typeof window === 'undefined') {
      return { error: 'Performance tests require browser environment' }
    }
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const paint = performance.getEntriesByType('paint')
    
    const metrics = {
      // Navigation timing
      domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
      loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
      
      // Paint timing
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      
      // Resource counts
      totalResources: performance.getEntriesByType('resource').length,
      
      // Memory usage (if available)
      memoryUsage: (performance as any).memory ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      } : null
    }
    
    // Performance thresholds
    const thresholds = {
      firstContentfulPaint: 1800, // 1.8s
      domContentLoaded: 2000, // 2s
      loadComplete: 3000 // 3s
    }
    
    return {
      metrics,
      evaluation: {
        fcpGood: metrics.firstContentfulPaint < thresholds.firstContentfulPaint,
        dclGood: metrics.domContentLoaded < thresholds.domContentLoaded,
        loadGood: metrics.loadComplete < thresholds.loadComplete
      }
    }
  }
  
  static async measureCoreWebVitals() {
    return new Promise((resolve) => {
      const vitals: any = {}
      
      // This would integrate with the actual web-vitals library
      // For now, return mock measurements
      setTimeout(() => {
        resolve({
          lcp: 2200, // Largest Contentful Paint
          fid: 85,   // First Input Delay
          cls: 0.08, // Cumulative Layout Shift
          fcp: 1600, // First Contentful Paint
          ttfb: 200  // Time to First Byte
        })
      }, 100)
    })
  }
}

// Accessibility testing utilities
export class AccessibilityTests {
  
  static checkKeyboardNavigation() {
    if (typeof document === 'undefined') {
      return { error: 'Accessibility tests require DOM environment' }
    }
    
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    
    const results = {
      totalFocusableElements: focusableElements.length,
      elementsWithTabIndex: 0,
      elementsWithAriaLabels: 0,
      elementsWithoutAccessibleName: 0
    }
    
    focusableElements.forEach(element => {
      if (element.hasAttribute('tabindex')) {
        results.elementsWithTabIndex++
      }
      
      if (element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby')) {
        results.elementsWithAriaLabels++
      }
      
      // Check for accessible name
      const hasAccessibleName = (
        element.hasAttribute('aria-label') ||
        element.hasAttribute('aria-labelledby') ||
        element.textContent?.trim() ||
        (element as HTMLInputElement).placeholder
      )
      
      if (!hasAccessibleName) {
        results.elementsWithoutAccessibleName++
      }
    })
    
    return results
  }
  
  static checkColorContrast() {
    // Basic color contrast check
    // This would integrate with actual contrast calculation libraries
    return {
      message: 'Color contrast should be manually verified with tools like aXe or Lighthouse',
      recommendation: 'Ensure WCAG AA compliance (4.5:1 ratio for normal text)'
    }
  }
}

// Test runner
export class TestRunner {
  
  static async runAllTests() {
    console.log('🧪 Starting comprehensive test suite...')
    
    const results = {
      calculator: CalculatorTests.testDRIPCalculation(),
      yield: CalculatorTests.testYieldCalculation(),
      api: await APITests.testMockAPIResponses(),
      performance: PerformanceTests.measurePageLoadMetrics(),
      accessibility: AccessibilityTests.checkKeyboardNavigation(),
      webVitals: await PerformanceTests.measureCoreWebVitals()
    }
    
    // Calculate overall pass rate
    const allTests = [
      ...results.calculator,
      ...results.yield,
      ...results.api
    ]
    
    const passedTests = allTests.filter(test => test.passed).length
    const totalTests = allTests.length
    const passRate = (passedTests / totalTests) * 100
    
    console.log(`✅ Test Results: ${passedTests}/${totalTests} tests passed (${passRate.toFixed(1)}%)`)
    
    return {
      summary: {
        total: totalTests,
        passed: passedTests,
        failed: totalTests - passedTests,
        passRate: passRate
      },
      details: results
    }
  }
}

// Export for use in test files
export { mockFMPClient } from '../testing/mock-api'