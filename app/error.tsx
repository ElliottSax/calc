'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw, Home, Bug } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)

    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
        error_name: error.name,
        error_digest: error.digest,
      })
    }

    // You could also send to Sentry or another error tracking service
    // if (window.Sentry) {
    //   window.Sentry.captureException(error)
    // }
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <Card className="max-w-2xl w-full p-8 space-y-6">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="p-4 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-full">
              <AlertCircle className="w-16 h-16 text-red-600 dark:text-red-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 p-2 bg-white dark:bg-slate-900 rounded-full shadow-lg">
              <Bug className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
            Oops! Something went wrong
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We encountered an unexpected error while processing your request.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Don't worry - your calculations and data are safe. This error has been logged and we'll look into it.
          </p>
        </div>

        {/* Error Details (in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Bug className="w-4 h-4" />
              Debug Information
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold">Error:</span> {error.name}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold">Message:</span> {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">Digest:</span> {error.digest}
                </p>
              )}
              {error.stack && (
                <details className="cursor-pointer">
                  <summary className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Stack Trace
                  </summary>
                  <pre className="text-xs overflow-auto mt-2 p-2 bg-slate-50 dark:bg-slate-900 rounded text-slate-600 dark:text-slate-400">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>

          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Button>
        </div>

        {/* Help Section */}
        <div className="pt-6 border-t space-y-3">
          <p className="text-sm text-center text-slate-500 dark:text-slate-400">
            If this problem persists, please try:
          </p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
              <span>Refreshing the page (Ctrl/Cmd + R)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
              <span>Clearing your browser cache</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
              <span>Checking your internet connection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
              <span>
                Contacting support at{' '}
                <a
                  href="mailto:support@dividendcalculator.pro"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  support@dividendcalculator.pro
                </a>
              </span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  )
}