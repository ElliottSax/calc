import type { LoggerOptions } from 'pino'
import pino from 'pino'

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

// Base configuration for Pino
export const pinoOptions: LoggerOptions = {
  level: process.env.LOG_LEVEL || (isDevelopment ? 'debug' : 'info'),

  // Disable pretty transport to avoid worker thread issues
  // Use pretty print in development (disabled due to worker thread compatibility)
  // transport: isDevelopment ? {
  //   target: 'pino-pretty',
  //   options: {
  //     colorize: true,
  //     levelFirst: true,
  //     translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l',
  //     ignore: 'pid,hostname'
  //   }
  // } : undefined,

  // Production optimizations
  ...(isProduction && {
    redact: {
      paths: ['req.headers.authorization', 'req.headers.cookie', '*.password', '*.email', '*.token'],
      remove: true
    },
    serializers: {
      req: (req) => ({
        id: req.id,
        method: req.method,
        url: req.url,
        query: req.query,
        params: req.params,
        headers: {
          'user-agent': req.headers['user-agent'],
          'content-type': req.headers['content-type']
        }
      }),
      res: (res) => ({
        statusCode: res.statusCode,
        headers: res.getHeaders()
      }),
      err: pino.stdSerializers.err
    }
  }),

  // Base properties for all logs
  base: {
    env: process.env.NODE_ENV,
    revision: process.env.VERCEL_GIT_COMMIT_SHA,
  },

  // Timestamp configuration
  timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,

  // Format for message
  messageKey: 'message',
  
  // Error serialization
  errorKey: 'error',
  
  // Custom hooks
  hooks: {
    logMethod(inputArgs, method) {
      // Add performance timing to all logs
      if (inputArgs.length >= 2 && typeof inputArgs[1] === 'object') {
        inputArgs[1].logTime = Date.now()
      }
      return method.apply(this, inputArgs)
    }
  }
}

// Log levels configuration
export const LOG_LEVELS = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
} as const

// Helper to check if a log level is enabled
export function isLogLevelEnabled(level: keyof typeof LOG_LEVELS): boolean {
  const currentLevel = LOG_LEVELS[process.env.LOG_LEVEL as keyof typeof LOG_LEVELS] || LOG_LEVELS.info
  return LOG_LEVELS[level] >= currentLevel
}