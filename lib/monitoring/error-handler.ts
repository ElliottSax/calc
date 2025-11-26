/**
 * Global error handling and monitoring utilities
 */

interface ErrorContext {
  userId?: string
  page?: string
  action?: string
  [key: string]: any
}

export class ErrorMonitor {
  private static instance: ErrorMonitor
  private isProduction = process.env.NODE_ENV === 'production'

  private constructor() {
    if (typeof window !== 'undefined') {
      this.setupGlobalErrorHandlers()
    }
  }

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor()
    }
    return ErrorMonitor.instance
  }

  private setupGlobalErrorHandlers() {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError(event.reason, {
        type: 'unhandledRejection',
        promise: event.promise,
      })
    })

    // Handle global errors
    window.addEventListener('error', (event) => {
      this.captureError(event.error, {
        type: 'globalError',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      })
    })
  }

  captureError(error: Error | unknown, context?: ErrorContext) {
    const errorData = {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      context,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    }

    // Log to console in development
    if (!this.isProduction) {
      console.error('Error captured:', errorData)
      return
    }

    // Send to error tracking service in production
    this.sendToErrorService(errorData)
  }

  private async sendToErrorService(errorData: any) {
    try {
      // Send to your error tracking service (Sentry, LogRocket, etc.)
      if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
        // Sentry integration would go here
        console.log('Sending to Sentry:', errorData)
      }

      // Also send to custom API endpoint
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
      }).catch(console.error)
    } catch (err) {
      // Fail silently in production to not impact user experience
      console.error('Failed to send error to monitoring service:', err)
    }
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: ErrorContext) {
    const logData = {
      message,
      level,
      context,
      timestamp: new Date().toISOString(),
    }

    if (!this.isProduction) {
      console.log(`[${level.toUpperCase()}]`, logData)
      return
    }

    // Send to logging service
    this.sendToErrorService(logData)
  }
}

// Export singleton instance
export const errorMonitor = ErrorMonitor.getInstance()

// Convenience functions
export const captureError = (error: Error | unknown, context?: ErrorContext) => {
  errorMonitor.captureError(error, context)
}

export const captureMessage = (message: string, level?: 'info' | 'warning' | 'error', context?: ErrorContext) => {
  errorMonitor.captureMessage(message, level, context)
}
