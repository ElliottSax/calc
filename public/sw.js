/**
 * Service Worker for Advanced Caching and Offline Support
 */

const CACHE_NAME = 'dividend-calc-v2.0.0'
const STATIC_CACHE = 'static-v2.0.0'
const DYNAMIC_CACHE = 'dynamic-v2.0.0'
const API_CACHE = 'api-v2.0.0'

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/_next/static/css/app.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/pages/_app.js',
  '/_next/static/chunks/pages/index.js'
]

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
}

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installing...')

  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[ServiceWorker] Caching critical resources')
      return cache.addAll(CRITICAL_RESOURCES).catch(err => {
        console.error('[ServiceWorker] Failed to cache:', err)
      })
    }).then(() => {
      console.log('[ServiceWorker] Skip waiting')
      return self.skipWaiting()
    })
  )
})

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activating...')

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== STATIC_CACHE && name !== DYNAMIC_CACHE && name !== API_CACHE)
          .map(name => {
            console.log('[ServiceWorker] Deleting old cache:', name)
            return caches.delete(name)
          })
      )
    }).then(() => {
      console.log('[ServiceWorker] Claiming clients')
      return self.clients.claim()
    })
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-http(s) requests
  if (!url.protocol.startsWith('http')) return

  // Determine caching strategy based on request
  const strategy = getCacheStrategy(url, request)

  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      event.respondWith(cacheFirst(request))
      break
    case CACHE_STRATEGIES.NETWORK_FIRST:
      event.respondWith(networkFirst(request))
      break
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      event.respondWith(staleWhileRevalidate(request))
      break
    case CACHE_STRATEGIES.NETWORK_ONLY:
      event.respondWith(networkOnly(request))
      break
    case CACHE_STRATEGIES.CACHE_ONLY:
      event.respondWith(cacheOnly(request))
      break
    default:
      event.respondWith(networkFirst(request))
  }
})

// Cache strategies implementation
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request)
    if (cached) {
      console.log('[ServiceWorker] Cache hit:', request.url)
      return cached
    }

    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.error('[ServiceWorker] Cache first failed:', error)
    return createOfflineResponse()
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    const cached = await caches.match(request)
    if (cached) {
      console.log('[ServiceWorker] Fallback to cache:', request.url)
      return cached
    }
    return createOfflineResponse()
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request)

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      const cache = caches.open(DYNAMIC_CACHE)
      cache.then(c => c.put(request, response.clone()))
    }
    return response
  }).catch(() => null)

  return cached || fetchPromise || createOfflineResponse()
}

async function networkOnly(request) {
  try {
    return await fetch(request)
  } catch (error) {
    return createOfflineResponse()
  }
}

async function cacheOnly(request) {
  const cached = await caches.match(request)
  return cached || createOfflineResponse()
}

// Determine cache strategy based on request
function getCacheStrategy(url, request) {
  // Static assets - cache first
  if (/\.(js|css|woff2?|ttf|otf|eot|svg|png|jpg|jpeg|gif|webp|ico)$/i.test(url.pathname)) {
    return CACHE_STRATEGIES.CACHE_FIRST
  }

  // API calls - network first with cache fallback
  if (url.pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.NETWORK_FIRST
  }

  // HTML pages - stale while revalidate
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE
  }

  // Next.js specific paths
  if (url.pathname.startsWith('/_next/')) {
    if (url.pathname.includes('static')) {
      return CACHE_STRATEGIES.CACHE_FIRST
    }
    return CACHE_STRATEGIES.NETWORK_FIRST
  }

  // Default strategy
  return CACHE_STRATEGIES.NETWORK_FIRST
}

// Create offline response
function createOfflineResponse() {
  return new Response(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline - Dividend Calculator</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          h1 { font-size: 2.5rem; margin-bottom: 1rem; }
          p { font-size: 1.2rem; opacity: 0.9; }
          button {
            margin-top: 2rem;
            padding: 0.75rem 2rem;
            font-size: 1rem;
            border: none;
            border-radius: 50px;
            background: white;
            color: #667eea;
            cursor: pointer;
            transition: transform 0.2s;
          }
          button:hover { transform: scale(1.05); }
        </style>
      </head>
      <body>
        <h1>📡 You're Offline</h1>
        <p>The calculator needs an internet connection to work properly.</p>
        <button onclick="location.reload()">Try Again</button>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  })
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('[ServiceWorker] Background sync:', event.tag)

  if (event.tag === 'sync-calculations') {
    event.waitUntil(syncCalculations())
  }
})

async function syncCalculations() {
  // Sync any offline calculations when back online
  try {
    const cache = await caches.open('offline-calculations')
    const requests = await cache.keys()

    for (const request of requests) {
      try {
        const response = await fetch(request)
        if (response.ok) {
          await cache.delete(request)
        }
      } catch (error) {
        console.error('[ServiceWorker] Failed to sync:', error)
      }
    }
  } catch (error) {
    console.error('[ServiceWorker] Sync failed:', error)
  }
}

// Push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open Calculator',
        icon: '/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/xmark.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Dividend Calculator', options)
  )
})

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Message handling
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(names => Promise.all(
        names.map(name => caches.delete(name))
      ))
    )
  }
})