/**
 * Three-layer logging architecture using Pino
 *
 * Layer 1: Core Logger - Base Pino configuration
 * Layer 2: Context Logger - Adds contextual information (user, request, etc.)
 * Layer 3: Domain Logger - Specific loggers for different parts of the application
 */

import pino from 'pino'
import { pinoOptions } from './config'

// Only use pino logger on server side
// On client side, use console
const isServer = typeof window === 'undefined'

// pino's production `redact` option (lib/logger/config.ts) is implemented by
// fast-redact, which builds its redaction function via `new Function(...)` at
// runtime. Cloudflare Workers' V8 isolate disallows dynamic code generation,
// so that constructor throws there (surfaces as a confusing "redact paths
// array contains an invalid path" error) and takes down every route that
// imports this module with it. `navigator.userAgent === 'Cloudflare-Workers'`
// is Cloudflare's documented way to detect the Workers runtime at request
// time. Fall back to the same console-based logger already used client-side;
// wrapped in try/catch too as a second line of defense for any other
// runtime pino can't run under.
const isCloudflareWorkers =
  typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers'

const consoleLogger = {
  info: console.log,
  error: console.error,
  warn: console.warn,
  debug: console.debug,
  child: () => consoleLogger
} as any

function createLogger() {
  if (!isServer || isCloudflareWorkers) return consoleLogger
  try {
    return pino(pinoOptions)
  } catch {
    return consoleLogger
  }
}

// Layer 1: Core Logger
export const logger = createLogger()

// Layer 2: Context Logger Factory
export function createContextLogger(context: {
  userId?: string
  requestId?: string
  service?: string
  [key: string]: any
}) {
  return logger.child(context)
}

// Layer 3: Domain-specific loggers
export const apiLogger = logger.child({ domain: 'api' })
export const calculatorLogger = logger.child({ domain: 'calculator' })
export const authLogger = logger.child({ domain: 'auth' })
export const dbLogger = logger.child({ domain: 'database' })

// Helper function to log calculation events
export function logCalculation(
  type: string,
  inputs: Record<string, any>,
  result: any,
  userId?: string
) {
  calculatorLogger.info({
    type,
    inputs,
    result,
    userId,
    timestamp: new Date().toISOString()
  }, `${type} calculation completed`)
}

// Helper function to log API calls
export function logAPICall(
  method: string,
  endpoint: string,
  status: number,
  duration: number,
  error?: any
) {
  const level = status >= 400 ? 'error' : 'info'
  apiLogger[level]({
    method,
    endpoint,
    status,
    duration,
    error
  }, `API ${method} ${endpoint} - ${status}`)
}

// Export types for TypeScript
export type Logger = typeof logger
export type ContextLogger = ReturnType<typeof createContextLogger>