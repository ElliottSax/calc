import { NextRequest, NextResponse } from 'next/server'
import { requireAdminAuth } from '@/lib/auth-admin'
import { applyRateLimit, RateLimitPresets } from '@/lib/rate-limit'

interface PerformanceMetric {
  name: string
  value: number
  unit: string
  timestamp: number
  category: string
}

interface SystemHealth {
  status: 'healthy' | 'degraded' | 'down'
  uptime: number
  responseTime: number
  errorRate: number
  requestsPerMinute: number
  memoryUsage: number
  cpuUsage: number
}

// In-memory metrics storage (replace with database in production)
const metricsStore: PerformanceMetric[] = []
const requestMetrics = new Map<string, number[]>()

// System health check
function getSystemHealth(): SystemHealth {
  const now = Date.now()
  const recentRequests = Array.from(requestMetrics.values())
    .flat()
    .filter(t => t > now - 60000)

  const avgResponseTime = recentRequests.length > 0
    ? recentRequests.reduce((a, b) => a + b, 0) / recentRequests.length
    : 0

  const errorRate = metricsStore
    .filter(m => m.category === 'error' && m.timestamp > now - 60000)
    .length / Math.max(recentRequests.length, 1)

  return {
    status: errorRate > 0.1 ? 'degraded' : 'healthy',
    uptime: process.uptime(),
    responseTime: avgResponseTime,
    errorRate: errorRate * 100,
    requestsPerMinute: recentRequests.length,
    memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024, // MB
    cpuUsage: process.cpuUsage().user / 1000000, // seconds
  }
}

// Get metrics endpoint (ADMIN ONLY)
export async function GET(request: NextRequest) {
  // Require admin authentication for viewing metrics
  const authError = requireAdminAuth(request)
  if (authError) return authError

  // Apply rate limiting
  const rateLimitError = applyRateLimit(request, 'metrics-get', RateLimitPresets.MONITORING)
  if (rateLimitError) return rateLimitError
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const timeRange = parseInt(searchParams.get('range') || '3600000') // Default 1 hour

  const now = Date.now()
  const startTime = now - timeRange

  let metrics = metricsStore.filter(m => m.timestamp > startTime)

  if (category) {
    metrics = metrics.filter(m => m.category === category)
  }

  // Aggregate metrics by name
  const aggregated = metrics.reduce((acc, metric) => {
    if (!acc[metric.name]) {
      acc[metric.name] = {
        name: metric.name,
        category: metric.category,
        unit: metric.unit,
        values: [],
        min: Infinity,
        max: -Infinity,
        avg: 0,
        count: 0,
      }
    }

    acc[metric.name].values.push({
      value: metric.value,
      timestamp: metric.timestamp,
    })
    acc[metric.name].min = Math.min(acc[metric.name].min, metric.value)
    acc[metric.name].max = Math.max(acc[metric.name].max, metric.value)
    acc[metric.name].count++

    return acc
  }, {} as Record<string, any>)

  // Calculate averages
  Object.values(aggregated).forEach((metric: any) => {
    const sum = metric.values.reduce((a: number, b: any) => a + b.value, 0)
    metric.avg = sum / metric.count
  })

  // Get system health
  const health = getSystemHealth()

  // Core Web Vitals
  const webVitals = {
    lcp: aggregated['LCP'] || { avg: 0, values: [] },
    fid: aggregated['FID'] || { avg: 0, values: [] },
    cls: aggregated['CLS'] || { avg: 0, values: [] },
    fcp: aggregated['FCP'] || { avg: 0, values: [] },
    ttfb: aggregated['TTFB'] || { avg: 0, values: [] },
    inp: aggregated['INP'] || { avg: 0, values: [] },
  }

  return NextResponse.json({
    health,
    metrics: Object.values(aggregated),
    webVitals,
    summary: {
      totalMetrics: metrics.length,
      timeRange: `${timeRange / 1000}s`,
      categories: [...new Set(metrics.map(m => m.category))],
    },
  })
}

// Record metrics endpoint (rate limited but public for client-side metrics)
export async function POST(request: NextRequest) {
  // Apply strict rate limiting to prevent metric flooding
  const rateLimitError = applyRateLimit(request, 'metrics-post', RateLimitPresets.MONITORING)
  if (rateLimitError) return rateLimitError
  try {
    const body = await request.json()

    // Validate metric data
    if (!body.name || typeof body.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid metric data' },
        { status: 400 }
      )
    }

    const metric: PerformanceMetric = {
      name: body.name,
      value: body.value,
      unit: body.unit || 'ms',
      timestamp: Date.now(),
      category: body.category || 'custom',
    }

    // Store metric
    metricsStore.push(metric)

    // Keep only last 24 hours of metrics
    const dayAgo = Date.now() - 86400000
    while (metricsStore.length > 0 && metricsStore[0].timestamp < dayAgo) {
      metricsStore.shift()
    }

    // Track request metrics for health calculation
    if (metric.category === 'request') {
      const path = body.path || 'unknown'
      if (!requestMetrics.has(path)) {
        requestMetrics.set(path, [])
      }
      requestMetrics.get(path)!.push(metric.value)

      // Keep only recent request metrics
      const recent = requestMetrics.get(path)!.filter(t => t > dayAgo)
      requestMetrics.set(path, recent)
    }

    // Log critical metrics
    if (metric.category === 'error' || metric.value > 5000) {
      console.warn('Critical metric recorded:', metric)
    }

    return NextResponse.json({
      success: true,
      metric,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to record metric' },
      { status: 500 }
    )
  }
}

// Dashboard data endpoint (ADMIN ONLY)
export async function PUT(request: NextRequest) {
  // Require admin authentication
  const authError = requireAdminAuth(request)
  if (authError) return authError

  // Apply rate limiting
  const rateLimitError = applyRateLimit(request, 'metrics-dashboard', RateLimitPresets.MONITORING)
  if (rateLimitError) return rateLimitError
  const now = Date.now()
  const hour = 3600000
  const day = 86400000

  // Calculate various time-based metrics
  const lastHour = metricsStore.filter(m => m.timestamp > now - hour)
  const lastDay = metricsStore.filter(m => m.timestamp > now - day)

  // Error tracking
  const errors = {
    lastHour: lastHour.filter(m => m.category === 'error').length,
    lastDay: lastDay.filter(m => m.category === 'error').length,
    types: [...new Set(lastDay.filter(m => m.category === 'error').map(m => m.name))],
  }

  // Performance tracking
  const performance = {
    avgResponseTime: {
      lastHour: calculateAverage(lastHour.filter(m => m.name === 'response_time')),
      lastDay: calculateAverage(lastDay.filter(m => m.name === 'response_time')),
    },
    p95ResponseTime: {
      lastHour: calculatePercentile(lastHour.filter(m => m.name === 'response_time'), 95),
      lastDay: calculatePercentile(lastDay.filter(m => m.name === 'response_time'), 95),
    },
    requestCount: {
      lastHour: lastHour.filter(m => m.category === 'request').length,
      lastDay: lastDay.filter(m => m.category === 'request').length,
    },
  }

  // Top endpoints by response time
  const endpointMetrics = new Map<string, number[]>()
  lastHour
    .filter(m => m.category === 'request')
    .forEach(m => {
      const endpoint = (m as any).endpoint || 'unknown'
      if (!endpointMetrics.has(endpoint)) {
        endpointMetrics.set(endpoint, [])
      }
      endpointMetrics.get(endpoint)!.push(m.value)
    })

  const topEndpoints = Array.from(endpointMetrics.entries())
    .map(([endpoint, times]) => ({
      endpoint,
      avgTime: calculateAverage(times.map(t => ({ value: t }))),
      calls: times.length,
    }))
    .sort((a, b) => b.avgTime - a.avgTime)
    .slice(0, 10)

  return NextResponse.json({
    health: getSystemHealth(),
    errors,
    performance,
    topEndpoints,
    timestamp: now,
  })
}

// Helper functions
function calculateAverage(metrics: { value: number }[]): number {
  if (metrics.length === 0) return 0
  const sum = metrics.reduce((a, m) => a + m.value, 0)
  return sum / metrics.length
}

function calculatePercentile(metrics: { value: number }[], percentile: number): number {
  if (metrics.length === 0) return 0

  const sorted = metrics.map(m => m.value).sort((a, b) => a - b)
  const index = Math.ceil((percentile / 100) * sorted.length) - 1

  return sorted[index] || 0
}