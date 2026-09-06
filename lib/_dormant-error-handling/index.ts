/**
 * Advanced Error Handling and Validation System
 */

import { z } from 'zod'

// Error types
export enum ErrorType {
  VALIDATION = 'VALIDATION',
  NETWORK = 'NETWORK',
  CALCULATION = 'CALCULATION',
  PERMISSION = 'PERMISSION',
  RATE_LIMIT = 'RATE_LIMIT',
  DATA_INTEGRITY = 'DATA_INTEGRITY',
  BROWSER_COMPATIBILITY = 'BROWSER_COMPATIBILITY',
  QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',
  UNKNOWN = 'UNKNOWN'
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

// Custom error class
export class AppError extends Error {
  public readonly type: ErrorType
  public readonly severity: ErrorSeverity
  public readonly code: string
  public readonly context?: Record<string, any>
  public readonly timestamp: Date
  public readonly id: string
  public readonly recoverable: boolean

  constructor(
    message: string,
    type: ErrorType = ErrorType.UNKNOWN,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    code: string = 'UNKNOWN_ERROR',
    context?: Record<string, any>,
    recoverable: boolean = true
  ) {
    super(message)
    this.name = 'AppError'
    this.type = type
    this.severity = severity
    this.code = code
    this.context = context
    this.timestamp = new Date()
    this.id = generateErrorId()
    this.recoverable = recoverable

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON() {
    return {
      id: this.id,
      message: this.message,
      type: this.type,
      severity: this.severity,
      code: this.code,
      context: this.context,
      timestamp: this.timestamp,
      recoverable: this.recoverable,
      stack: this.stack
    }
  }
}

// Error ID generator
function generateErrorId(): string {
  return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Global error handler
export class ErrorHandler {
  private static instance: ErrorHandler
  private errorLog: AppError[] = []
  private handlers: Map<ErrorType, ((error: AppError) => void)[]> = new Map()
  private maxLogSize = 100

  private constructor() {
    this.setupGlobalHandlers()
  }

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  private setupGlobalHandlers() {
    if (typeof window !== 'undefined') {
      // Unhandled errors
      window.addEventListener('error', (event) => {
        this.handle(new AppError(
          event.message,
          ErrorType.UNKNOWN,
          ErrorSeverity.HIGH,
          'UNHANDLED_ERROR',
          {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
          }
        ))
      })

      // Unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        this.handle(new AppError(
          event.reason?.message || 'Unhandled promise rejection',
          ErrorType.UNKNOWN,
          ErrorSeverity.HIGH,
          'UNHANDLED_REJECTION',
          { reason: event.reason }
        ))
      })
    }
  }

  handle(error: AppError | Error) {
    const appError = error instanceof AppError
      ? error
      : new AppError(error.message, ErrorType.UNKNOWN, ErrorSeverity.MEDIUM)

    // Log error
    this.logError(appError)

    // Execute type-specific handlers
    const handlers = this.handlers.get(appError.type) || []
    handlers.forEach(handler => {
      try {
        handler(appError)
      } catch (handlerError) {
        console.error('Error in error handler:', handlerError)
      }
    })

    // Severity-based actions
    this.handleBySeverity(appError)

    // Send to monitoring service
    this.sendToMonitoring(appError)

    // Show user notification if needed
    if (appError.severity >= ErrorSeverity.HIGH) {
      this.notifyUser(appError)
    }

    return appError
  }

  private logError(error: AppError) {
    this.errorLog.push(error)

    // Maintain log size
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog.shift()
    }

    // Console logging based on severity
    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
      case ErrorSeverity.HIGH:
        console.error(`[${error.severity}] ${error.code}:`, error.message, error.context)
        break
      case ErrorSeverity.MEDIUM:
        console.warn(`[${error.severity}] ${error.code}:`, error.message, error.context)
        break
      case ErrorSeverity.LOW:
        console.log(`[${error.severity}] ${error.code}:`, error.message, error.context)
        break
    }
  }

  private handleBySeverity(error: AppError) {
    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
        // Critical errors might require app restart
        if (!error.recoverable) {
          this.initiateRecovery()
        }
        break
      case ErrorSeverity.HIGH:
        // High severity errors need immediate attention
        this.alertDevelopers(error)
        break
    }
  }

  private sendToMonitoring(error: AppError) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        error_id: error.id,
        error_type: error.type,
        error_severity: error.severity,
        fatal: error.severity === ErrorSeverity.CRITICAL
      })
    }

    // Could also send to Sentry, LogRocket, etc.
  }

  private notifyUser(error: AppError) {
    if (typeof window !== 'undefined') {
      // Log to console for now - should be replaced with React toast notification
      // Usage: Import { toast } from your toast provider and call toast.error()
      console.error('[User Notification]', {
        title: 'An error occurred',
        message: error.message,
        recoverable: error.recoverable,
        errorId: error.id
      })

      // Dispatch custom event that React components can listen to
      window.dispatchEvent(new CustomEvent('app-error', {
        detail: {
          message: error.message,
          recoverable: error.recoverable,
          severity: error.severity,
          errorId: error.id
        }
      }))
    }
  }

  private alertDevelopers(error: AppError) {
    // In production, this would send alerts to developers
    console.error('ALERT: High severity error detected', error)
  }

  private initiateRecovery() {
    console.error('Initiating recovery procedures...')
    // Clear corrupted data
    if (typeof localStorage !== 'undefined') {
      localStorage.clear()
    }
    // Reload after delay
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  registerHandler(type: ErrorType, handler: (error: AppError) => void) {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, [])
    }
    this.handlers.get(type)!.push(handler)
  }

  getErrors(type?: ErrorType): AppError[] {
    if (type) {
      return this.errorLog.filter(e => e.type === type)
    }
    return this.errorLog
  }

  clearErrors() {
    this.errorLog = []
  }
}

// Validation schemas
export const validationSchemas = {
  // DRIP Calculator inputs
  dripInputs: z.object({
    initialInvestment: z.number()
      .min(0, 'Initial investment must be positive')
      .max(10000000, 'Initial investment too large'),
    monthlyContribution: z.number()
      .min(0, 'Monthly contribution must be positive')
      .max(100000, 'Monthly contribution too large'),
    dividendYield: z.number()
      .min(0, 'Dividend yield must be positive')
      .max(100, 'Dividend yield cannot exceed 100%'),
    dividendGrowthRate: z.number()
      .min(-20, 'Dividend growth rate too low')
      .max(50, 'Dividend growth rate too high'),
    stockPriceAppreciation: z.number()
      .min(-50, 'Stock price appreciation too low')
      .max(100, 'Stock price appreciation too high'),
    yearsToInvest: z.number()
      .min(1, 'Investment period must be at least 1 year')
      .max(50, 'Investment period cannot exceed 50 years'),
    taxRate: z.number()
      .min(0, 'Tax rate must be positive')
      .max(100, 'Tax rate cannot exceed 100%'),
    reinvestDividends: z.boolean()
  }),

  // User preferences
  userPreferences: z.object({
    theme: z.enum(['light', 'dark', 'auto']),
    currency: z.string().length(3),
    locale: z.string(),
    notifications: z.boolean(),
    analytics: z.boolean()
  }),

  // API responses
  marketData: z.object({
    symbol: z.string(),
    price: z.number().positive(),
    change: z.number(),
    changePercent: z.number(),
    volume: z.number().nonnegative(),
    marketCap: z.number().positive().optional(),
    dividendYield: z.number().nonnegative().optional(),
    peRatio: z.number().optional()
  })
}

// Validation helper
export function validate<T>(
  data: unknown,
  schema: z.ZodSchema<T>,
  errorMessage?: string
): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const details = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
      throw new AppError(
        errorMessage || `Validation failed: ${details}`,
        ErrorType.VALIDATION,
        ErrorSeverity.LOW,
        'VALIDATION_ERROR',
        { errors: error.errors }
      )
    }
    throw error
  }
}

// Retry mechanism
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: {
    maxAttempts?: number
    delay?: number
    backoff?: number
    onRetry?: (attempt: number, error: Error) => void
  } = {}
): Promise<T> {
  const {
    maxAttempts = 3,
    delay = 1000,
    backoff = 2,
    onRetry
  } = options

  let lastError: Error

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error

      if (attempt < maxAttempts) {
        const waitTime = delay * Math.pow(backoff, attempt - 1)
        onRetry?.(attempt, lastError)
        await new Promise(resolve => setTimeout(resolve, waitTime))
      }
    }
  }

  throw new AppError(
    `Operation failed after ${maxAttempts} attempts: ${lastError!.message}`,
    ErrorType.NETWORK,
    ErrorSeverity.HIGH,
    'RETRY_EXHAUSTED',
    { attempts: maxAttempts, lastError: lastError! }
  )
}

// Circuit breaker pattern
export class CircuitBreaker {
  private failureCount = 0
  private lastFailureTime: number | null = null
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED'

  constructor(
    private readonly threshold = 5,
    private readonly timeout = 60000,
    private readonly onStateChange?: (state: string) => void
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime! > this.timeout) {
        this.state = 'HALF_OPEN'
        this.onStateChange?.('HALF_OPEN')
      } else {
        throw new AppError(
          'Circuit breaker is OPEN',
          ErrorType.RATE_LIMIT,
          ErrorSeverity.MEDIUM,
          'CIRCUIT_OPEN'
        )
      }
    }

    try {
      const result = await fn()

      if (this.state === 'HALF_OPEN') {
        this.state = 'CLOSED'
        this.failureCount = 0
        this.onStateChange?.('CLOSED')
      }

      return result
    } catch (error) {
      this.failureCount++
      this.lastFailureTime = Date.now()

      if (this.failureCount >= this.threshold) {
        this.state = 'OPEN'
        this.onStateChange?.('OPEN')
      }

      throw error
    }
  }

  reset() {
    this.failureCount = 0
    this.lastFailureTime = null
    this.state = 'CLOSED'
    this.onStateChange?.('CLOSED')
  }
}

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance()