/**
 * Progressive Web App Hook
 */

import { useEffect, useState, useCallback } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

// Extend Navigator interface for iOS standalone mode
declare global {
  interface Navigator {
    standalone?: boolean
  }
}

interface PWAStatus {
  isInstallable: boolean
  isInstalled: boolean
  isOffline: boolean
  isUpdating: boolean
  updateAvailable: boolean
  installPrompt: BeforeInstallPromptEvent | null
}

export function usePWA() {
  const [status, setStatus] = useState<PWAStatus>({
    isInstallable: false,
    isInstalled: false,
    isOffline: !navigator.onLine,
    isUpdating: false,
    updateAvailable: false,
    installPrompt: null
  })

  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    // Register service worker
    const registerSW = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        })
        setRegistration(reg)

        // Check for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setStatus(prev => ({ ...prev, updateAvailable: true }))
              }
            })
          }
        })

        // Check for updates periodically (with cleanup)
        const updateInterval = setInterval(() => {
          reg.update()
        }, 60000) // Every minute

        console.log('Service Worker registered successfully')

        return updateInterval
      } catch (error) {
        console.error('Service Worker registration failed:', error)
        return null
      }
    }

    const intervalPromise = registerSW()

    // Listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      const event = e as BeforeInstallPromptEvent
      setStatus(prev => ({
        ...prev,
        isInstallable: true,
        installPrompt: event
      }))
    }

    // Listen for app installed
    const handleAppInstalled = () => {
      setStatus(prev => ({
        ...prev,
        isInstalled: true,
        isInstallable: false,
        installPrompt: null
      }))
    }

    // Listen for online/offline status
    const handleOnline = () => {
      setStatus(prev => ({ ...prev, isOffline: false }))
    }

    const handleOffline = () => {
      setStatus(prev => ({ ...prev, isOffline: true }))
    }

    // Check if already installed
    const checkInstalled = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      const isInWebAppiOS = navigator.standalone === true
      setStatus(prev => ({
        ...prev,
        isInstalled: isStandalone || isInWebAppiOS
      }))
    }

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    checkInstalled()

    // Cleanup
    return () => {
      intervalPromise.then(interval => {
        if (interval) clearInterval(interval)
      })
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Install PWA
  const install = useCallback(async () => {
    if (!status.installPrompt) {
      console.warn('Install prompt not available')
      return false
    }

    try {
      await status.installPrompt.prompt()
      const { outcome } = await status.installPrompt.userChoice

      if (outcome === 'accepted') {
        console.log('PWA installed successfully')
        return true
      } else {
        console.log('PWA installation dismissed')
        return false
      }
    } catch (error) {
      console.error('Error installing PWA:', error)
      return false
    }
  }, [status.installPrompt])

  // Update service worker
  const update = useCallback(() => {
    if (!registration) {
      console.warn('Service worker not registered')
      return
    }

    setStatus(prev => ({ ...prev, isUpdating: true }))

    // Skip waiting and reload
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' })

    // Listen for controlling change
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload()
    })
  }, [registration])

  // Clear cache
  const clearCache = useCallback(async () => {
    if (!registration) {
      console.warn('Service worker not registered')
      return false
    }

    try {
      // Send message to service worker to clear cache
      registration.active?.postMessage({ type: 'CLEAR_CACHE' })

      // Also clear browser caches
      if ('caches' in window) {
        const cacheNames = await caches.keys()
        await Promise.all(cacheNames.map(name => caches.delete(name)))
      }

      console.log('Cache cleared successfully')
      return true
    } catch (error) {
      console.error('Error clearing cache:', error)
      return false
    }
  }, [registration])

  // Get cache size
  const getCacheSize = useCallback(async (): Promise<number> => {
    if (!('storage' in navigator && 'estimate' in navigator.storage)) {
      return 0
    }

    try {
      const estimate = await navigator.storage.estimate()
      return estimate.usage || 0
    } catch (error) {
      console.error('Error getting cache size:', error)
      return 0
    }
  }, [])

  // Request persistent storage
  const requestPersistentStorage = useCallback(async (): Promise<boolean> => {
    if (!('storage' in navigator && 'persist' in navigator.storage)) {
      return false
    }

    try {
      const isPersisted = await navigator.storage.persist()
      console.log(`Persistent storage ${isPersisted ? 'granted' : 'denied'}`)
      return isPersisted
    } catch (error) {
      console.error('Error requesting persistent storage:', error)
      return false
    }
  }, [])

  // Share content
  const share = useCallback(async (data: ShareData): Promise<boolean> => {
    if (!('share' in navigator)) {
      console.warn('Web Share API not supported')
      return false
    }

    try {
      await navigator.share(data)
      console.log('Content shared successfully')
      return true
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error)
      }
      return false
    }
  }, [])

  // Check for notification permission
  const requestNotificationPermission = useCallback(async (): Promise<NotificationPermission> => {
    if (!('Notification' in window)) {
      console.warn('Notifications not supported')
      return 'denied'
    }

    try {
      const permission = await Notification.requestPermission()
      console.log(`Notification permission: ${permission}`)
      return permission
    } catch (error) {
      console.error('Error requesting notification permission:', error)
      return 'denied'
    }
  }, [])

  // Send notification
  const sendNotification = useCallback(async (title: string, options?: NotificationOptions): Promise<boolean> => {
    if (!('Notification' in window)) {
      console.warn('Notifications not supported')
      return false
    }

    if (Notification.permission !== 'granted') {
      console.warn('Notification permission not granted')
      return false
    }

    try {
      if (registration?.showNotification) {
        await registration.showNotification(title, options)
      } else {
        new Notification(title, options)
      }
      return true
    } catch (error) {
      console.error('Error sending notification:', error)
      return false
    }
  }, [registration])

  return {
    ...status,
    install,
    update,
    clearCache,
    getCacheSize,
    requestPersistentStorage,
    share,
    requestNotificationPermission,
    sendNotification,
    registration
  }
}