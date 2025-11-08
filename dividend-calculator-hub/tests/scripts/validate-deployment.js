#!/usr/bin/env node
/**
 * Deployment validation script
 * Run with: node tests/scripts/validate-deployment.js <URL>
 */

const https = require('https')
const http = require('http')
const { URL } = require('url')

class DeploymentValidator {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.results = []
  }
  
  async validateDeployment() {
    console.log(`\n🚀 Validating deployment at: ${this.baseUrl}`)
    console.log('=' .repeat(60))
    
    // Test critical pages
    const criticalPages = [
      '/',
      '/aristocrats',
      '/stocks/jnj',
      '/blog',
      '/learn',
      '/sitemap.xml',
      '/robots.txt'
    ]
    
    for (const page of criticalPages) {
      await this.testPage(page)
    }
    
    // Test API endpoints
    await this.testAPI('/api/vitals', 'POST', { name: 'test', value: 100 })
    
    // Test Open Graph image generation
    await this.testPage('/api/og?title=Test&type=stock&symbol=JNJ')
    
    // Generate report
    this.generateReport()
  }
  
  async testPage(path) {
    const url = this.baseUrl + path
    
    try {
      const response = await this.makeRequest(url)
      const isSuccess = response.statusCode >= 200 && response.statusCode < 300
      const loadTime = response.loadTime
      
      this.results.push({
        type: 'page',
        url,
        status: response.statusCode,
        success: isSuccess,
        loadTime,
        contentLength: response.body?.length || 0,
        hasMetaTags: this.checkMetaTags(response.body),
        hasStructuredData: this.checkStructuredData(response.body)
      })
      
      const statusIcon = isSuccess ? '✅' : '❌'
      const timeIcon = loadTime < 3000 ? '⚡' : '🐌'
      console.log(`${statusIcon} ${timeIcon} ${path} - ${response.statusCode} (${loadTime}ms)`)
      
    } catch (error) {
      this.results.push({
        type: 'page',
        url,
        success: false,
        error: error.message
      })
      console.log(`❌ ${path} - Error: ${error.message}`)
    }
  }
  
  async testAPI(path, method = 'GET', body = null) {
    const url = this.baseUrl + path
    
    try {
      const response = await this.makeRequest(url, method, body)
      const isSuccess = response.statusCode >= 200 && response.statusCode < 300
      
      this.results.push({
        type: 'api',
        url,
        method,
        status: response.statusCode,
        success: isSuccess,
        loadTime: response.loadTime
      })
      
      const statusIcon = isSuccess ? '✅' : '❌'
      console.log(`${statusIcon} API ${method} ${path} - ${response.statusCode} (${response.loadTime}ms)`)
      
    } catch (error) {
      this.results.push({
        type: 'api',
        url,
        method,
        success: false,
        error: error.message
      })
      console.log(`❌ API ${method} ${path} - Error: ${error.message}`)
    }
  }
  
  makeRequest(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now()
      const parsedUrl = new URL(url)
      const requestModule = parsedUrl.protocol === 'https:' ? https : http
      
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + parsedUrl.search,
        method,
        headers: {
          'User-Agent': 'DeploymentValidator/1.0',
          'Accept': 'text/html,application/json,*/*'
        }
      }
      
      if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(body))
      }
      
      const req = requestModule.request(options, (res) => {
        let responseBody = ''
        
        res.on('data', (chunk) => {
          responseBody += chunk
        })
        
        res.on('end', () => {
          const loadTime = Date.now() - startTime
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: responseBody,
            loadTime
          })
        })
      })
      
      req.on('error', (error) => {
        reject(error)
      })
      
      if (body) {
        req.write(JSON.stringify(body))
      }
      
      req.end()
    })
  }
  
  checkMetaTags(html) {
    if (!html) return false
    
    const requiredTags = [
      '<title>',
      'name="description"',
      'property="og:title"',
      'property="og:description"',
      'name="twitter:card"'
    ]
    
    return requiredTags.every(tag => html.includes(tag))
  }
  
  checkStructuredData(html) {
    if (!html) return false
    return html.includes('application/ld+json') && html.includes('@context')
  }
  
  generateReport() {
    console.log('\n' + '=' .repeat(60))
    console.log('📈 DEPLOYMENT VALIDATION REPORT')
    console.log('=' .repeat(60))
    
    const pageResults = this.results.filter(r => r.type === 'page')
    const apiResults = this.results.filter(r => r.type === 'api')
    
    // Page summary
    const successfulPages = pageResults.filter(r => r.success).length
    const totalPages = pageResults.length
    const avgLoadTime = pageResults
      .filter(r => r.loadTime)
      .reduce((sum, r) => sum + r.loadTime, 0) / pageResults.length
    
    console.log(`\n📊 Page Performance:`)
    console.log(`  ✅ Successful: ${successfulPages}/${totalPages}`)
    console.log(`  ⏱️  Average Load Time: ${Math.round(avgLoadTime)}ms`)
    console.log(`  📝 SEO Meta Tags: ${pageResults.filter(r => r.hasMetaTags).length}/${totalPages}`)
    console.log(`  🔍 Structured Data: ${pageResults.filter(r => r.hasStructuredData).length}/${totalPages}`)
    
    // API summary
    if (apiResults.length > 0) {
      const successfulAPIs = apiResults.filter(r => r.success).length
      console.log(`\n🔌 API Endpoints:`)
      console.log(`  ✅ Successful: ${successfulAPIs}/${apiResults.length}`)
    }
    
    // Performance grades
    console.log(`\n🏆 Performance Grades:`)
    console.log(`  Load Time: ${this.gradeLoadTime(avgLoadTime)}`)
    console.log(`  Success Rate: ${this.gradeSuccessRate(successfulPages / totalPages)}`)
    console.log(`  SEO Compliance: ${this.gradeSEO(pageResults)}`)
    
    // Recommendations
    this.generateRecommendations()
    
    // Overall status
    const overallSuccess = (successfulPages / totalPages) >= 0.9 && avgLoadTime < 5000
    console.log(`\n${overallSuccess ? '✅' : '❌'} Overall Status: ${overallSuccess ? 'PASS' : 'FAIL'}`)
    
    return {
      success: overallSuccess,
      summary: {
        pages: { successful: successfulPages, total: totalPages },
        apis: { successful: apiResults.filter(r => r.success).length, total: apiResults.length },
        avgLoadTime,
        seoCompliance: pageResults.filter(r => r.hasMetaTags).length / totalPages
      }
    }
  }
  
  gradeLoadTime(avgTime) {
    if (avgTime < 2000) return 'A+ (Excellent)'
    if (avgTime < 3000) return 'A (Good)'
    if (avgTime < 5000) return 'B (Acceptable)'
    if (avgTime < 8000) return 'C (Poor)'
    return 'F (Unacceptable)'
  }
  
  gradeSuccessRate(rate) {
    if (rate >= 0.95) return 'A+ (Excellent)'
    if (rate >= 0.90) return 'A (Good)'
    if (rate >= 0.80) return 'B (Acceptable)'
    if (rate >= 0.70) return 'C (Poor)'
    return 'F (Unacceptable)'
  }
  
  gradeSEO(pageResults) {
    const metaCompliance = pageResults.filter(r => r.hasMetaTags).length / pageResults.length
    const structuredCompliance = pageResults.filter(r => r.hasStructuredData).length / pageResults.length
    const avgCompliance = (metaCompliance + structuredCompliance) / 2
    
    return this.gradeSuccessRate(avgCompliance)
  }
  
  generateRecommendations() {
    console.log(`\n💡 Recommendations:`)
    
    const failedPages = this.results.filter(r => !r.success)
    if (failedPages.length > 0) {
      console.log(`  ⚠️  Fix ${failedPages.length} failed page(s)`)
    }
    
    const slowPages = this.results.filter(r => r.loadTime && r.loadTime > 3000)
    if (slowPages.length > 0) {
      console.log(`  ⚡ Optimize ${slowPages.length} slow loading page(s)`)
    }
    
    const missingMeta = this.results.filter(r => r.hasMetaTags === false)
    if (missingMeta.length > 0) {
      console.log(`  📝 Add missing meta tags to ${missingMeta.length} page(s)`)
    }
    
    const missingStructured = this.results.filter(r => r.hasStructuredData === false)
    if (missingStructured.length > 0) {
      console.log(`  🔍 Add structured data to ${missingStructured.length} page(s)`)
    }
    
    if (failedPages.length === 0 && slowPages.length === 0) {
      console.log(`  ✨ All systems operational!`)
    }
  }
}

// CLI usage
if (require.main === module) {
  const baseUrl = process.argv[2]
  
  if (!baseUrl) {
    console.error('Usage: node validate-deployment.js <BASE_URL>')
    console.error('Example: node validate-deployment.js https://your-site.vercel.app')
    process.exit(1)
  }
  
  const validator = new DeploymentValidator(baseUrl)
  validator.validateDeployment()
    .then(() => {
      console.log('\n🏁 Validation complete!')
    })
    .catch(error => {
      console.error('\n❌ Validation failed:', error)
      process.exit(1)
    })
}

module.exports = DeploymentValidator