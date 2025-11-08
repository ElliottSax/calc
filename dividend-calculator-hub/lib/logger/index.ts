/**
 * Three-layer logging architecture using Pino
 * 
 * Layer 1: Core Logger - Base Pino configuration
 * Layer 2: Context Logger - Adds contextual information (user, request, etc.)
 * Layer 3: Domain Logger - Specific loggers for different parts of the application
 */

import pino from 'pino'
import { pinoOptions } from './config'

// Layer 1: Core Logger
export const logger = pino(pinoOptions)

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