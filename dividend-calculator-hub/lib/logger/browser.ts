/**
 * Browser-safe logger for client-side logging
 * Uses console methods in development and sends logs to server in production
 */

const isDevelopment = process.env.NODE_ENV === 'development'

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error'
  message: string
  data?: any
  timestamp: string
  domain?: string
}

class BrowserLogger {
  private buffer: LogEntry[] = []
  private flushInterval: NodeJS.Timeout | null = null

  constructor() {
    if (!isDevelopment) {
      // Flush logs every 5 seconds in production
      this.flushInterval = setInterval(() => this.flush(), 5000)
    }
  }

  private log(level: LogEntry['level'], message: string, data?: any, domain?: string) {
    const entry: LogEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
      domain
    }

    if (isDevelopment) {
      // In development, use console methods
      const consoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log'
      console[consoleMethod](`[${domain || 'app'}]`, message, data || '')
    } else {
      // In production, buffer logs
      this.buffer.push(entry)
      
      // Flush immediately for errors
      if (level === 'error') {
        this.flush()
      }
    }
  }

  private async flush() {
    if (this.buffer.length === 0) return

    const logs = [...this.buffer]
    this.buffer = []

    try {
      await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logs })
      })
    } catch (error) {
      // If logging fails, don't throw - just console error in dev
      if (isDevelopment) {
        console.error('Failed to send logs to server:', error)
      }
    }
  }

  debug(message: string, data?: any, domain?: string) {
    this.log('debug', message, data, domain)
  }

  info(message: string, data?: any, domain?: string) {
    this.log('info', message, data, domain)
  }

  warn(message: string, data?: any, domain?: string) {
    this.log('warn', message, data, domain)
  }

  error(message: string, data?: any, domain?: string) {
    this.log('error', message, data, domain)
  }

  // Clean up on unmount
  destroy() {
    if (this.flushInterval) {
      clearInterval(this.flushInterval)
      this.flush() // Final flush
    }
  }
}

export const browserLogger = new BrowserLogger()

// Domain-specific browser loggers
export const calculatorBrowserLogger = {
  debug: (message: string, data?: any) => browserLogger.debug(message, data, 'calculator'),
  info: (message: string, data?: any) => browserLogger.info(message, data, 'calculator'),
  warn: (message: string, data?: any) => browserLogger.warn(message, data, 'calculator'),
  error: (message: string, data?: any) => browserLogger.error(message, data, 'calculator')
}

export const apiBrowserLogger = {
  debug: (message: string, data?: any) => browserLogger.debug(message, data, 'api'),
  info: (message: string, data?: any) => browserLogger.info(message, data, 'api'),
  warn: (message: string, data?: any) => browserLogger.warn(message, data, 'api'),
  error: (message: string, data?: any) => browserLogger.error(message, data, 'api')
}