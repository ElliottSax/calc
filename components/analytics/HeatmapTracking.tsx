'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Heatmap tracking with multiple providers
export function HeatmapTracking() {
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID
  const hotjarVersion = process.env.NEXT_PUBLIC_HOTJAR_VERSION || 6
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  useEffect(() => {
    // Custom click tracking for heatmap data
    if (typeof window !== 'undefined') {
      const trackClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const data = {
          x: e.clientX,
          y: e.clientY,
          pageX: e.pageX,
          pageY: e.pageY,
          element: target.tagName,
          id: target.id,
          className: target.className,
          text: target.textContent?.substring(0, 50),
          href: (target as HTMLAnchorElement).href,
          timestamp: Date.now(),
          page: window.location.pathname,
        }

        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'heatmap_click', {
            event_category: 'Heatmap',
            click_x: data.x,
            click_y: data.y,
            element: data.element,
          })
        }

        // Store in session for batch sending
        const clicks = JSON.parse(sessionStorage.getItem('heatmap_clicks') || '[]')
        clicks.push(data)
        if (clicks.length > 50) {
          clicks.shift() // Keep only last 50 clicks
        }
        sessionStorage.setItem('heatmap_clicks', JSON.stringify(clicks))
      }

      const trackMovement = (() => {
        let movements: any[] = []
        let lastTime = Date.now()

        return (e: MouseEvent) => {
          const now = Date.now()
          if (now - lastTime < 100) return // Throttle to 10fps

          movements.push({
            x: e.clientX,
            y: e.clientY,
            t: now,
          })

          if (movements.length > 100) {
            movements.shift()
          }

          lastTime = now
        }
      })()

      document.addEventListener('click', trackClick)
      document.addEventListener('mousemove', trackMovement)

      return () => {
        document.removeEventListener('click', trackClick)
        document.removeEventListener('mousemove', trackMovement)
      }
    }
  }, [])

  return (
    <>
      {/* Hotjar Tracking */}
      {hotjarId && (
        <Script
          id="hotjar-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion}};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      )}

      {/* Microsoft Clarity */}
      {clarityId && (
        <Script
          id="clarity-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `,
          }}
        />
      )}

      {/* Custom Heatmap Visualization (for development) */}
      {process.env.NODE_ENV === 'development' && (
        <Script
          id="dev-heatmap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Development heatmap visualization
              if (window.location.hash === '#heatmap') {
                const canvas = document.createElement('canvas');
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.pointerEvents = 'none';
                canvas.style.zIndex = '999999';
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                document.body.appendChild(canvas);

                const ctx = canvas.getContext('2d');
                const clicks = JSON.parse(sessionStorage.getItem('heatmap_clicks') || '[]');

                clicks.forEach((click) => {
                  const gradient = ctx.createRadialGradient(click.x, click.y, 0, click.x, click.y, 50);
                  gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
                  gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
                  ctx.fillStyle = gradient;
                  ctx.fillRect(click.x - 50, click.y - 50, 100, 100);
                });
              }
            `,
          }}
        />
      )}
    </>
  )
}

// Session recording component
export function SessionRecording() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const events: any[] = []
    const startTime = Date.now()

    // Record DOM mutations
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        events.push({
          type: 'mutation',
          timestamp: Date.now() - startTime,
          target: (mutation.target as Element).className,
          added: mutation.addedNodes.length,
          removed: mutation.removedNodes.length,
        })
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    // Record scroll events
    const recordScroll = () => {
      events.push({
        type: 'scroll',
        timestamp: Date.now() - startTime,
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', recordScroll)

    // Send session data on page unload
    const sendSessionData = () => {
      if (events.length > 0) {
        const sessionData = {
          events,
          duration: Date.now() - startTime,
          page: window.location.pathname,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        }

        // Send via beacon API
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/analytics/session', JSON.stringify(sessionData))
        }
      }
    }

    window.addEventListener('beforeunload', sendSessionData)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', recordScroll)
      window.removeEventListener('beforeunload', sendSessionData)
    }
  }, [])

  return null
}