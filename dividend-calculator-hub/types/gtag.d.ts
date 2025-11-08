/**
 * Google Analytics type definitions
 */

interface Window {
  gtag?: (
    command: 'event' | 'config' | 'set' | 'js',
    targetId: string,
    config?: {
      currency?: string
      value?: number
      [key: string]: any
    }
  ) => void
}