/**
 * Google Analytics type definitions
 */

declare global {
  function gtag(
    command: 'event' | 'config' | 'set' | 'js',
    targetId: string,
    config?: {
      currency?: string
      value?: number
      [key: string]: any
    }
  ): void

  interface Window {
    gtag?: typeof gtag
    va?: any
  }
}

export {}