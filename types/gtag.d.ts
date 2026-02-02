declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent' | 'set',
      targetId: string | { [key: string]: any },
      config?: {
        page_path?: string
        page_title?: string
        page_location?: string
        send_page_view?: boolean
        [key: string]: any
      }
    ) => void
    dataLayer?: any[]
  }
}

export {}