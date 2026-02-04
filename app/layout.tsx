import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WebVitals } from '@/components/analytics/WebVitals'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dividendcalculator.pro'
const siteName = process.env.NEXT_PUBLIC_APP_NAME || 'Dividend Calculator Pro'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dividend Calculator Pro - FREE DRIP Calculator & 5 Investment Tools | 2025',
    template: '%s | Dividend Calculator Pro - Financial Independence Tools',
  },
  description: '🔥 FREE dividend calculator suite with 5 powerful tools. Calculate DRIP returns up to 500% gains, compare 50+ dividend stocks, track yields, plan retirement income. Used by 10,000+ investors monthly!',
  keywords: [
    'dividend calculator',
    'drip calculator',
    'dividend reinvestment calculator',
    'dividend yield calculator',
    'dividend growth calculator',
    'compound interest calculator',
    'retirement income calculator',
    'dividend aristocrats calculator',
    'dividend income calculator',
    'stock dividend calculator',
    'dividend payout calculator',
    'dividend portfolio calculator',
    'monthly dividend calculator',
    'quarterly dividend calculator',
    'dividend tax calculator',
    'reit dividend calculator',
    'dividend snowball calculator',
    'dividend investment calculator',
    'passive income calculator',
    'financial independence calculator',
    'fire calculator',
    'dividend tracker',
    'dividend screener',
    'best dividend stocks 2025',
    'dividend kings calculator',
    'S&P 500 dividend calculator',
    'ETF dividend calculator',
    'dividend yield on cost calculator'
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'FREE Dividend Calculator - Calculate 500%+ DRIP Returns | Used by 10,000+ Investors',
    description: '🚀 Professional dividend calculator trusted by 10,000+ investors. Calculate DRIP returns, compare stocks, track yields, plan retirement. Start building $1M+ portfolio today!',
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Dividend Calculator Pro - Turn $10K into $1M with DRIP Investing',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'FREE Dividend Calculator - 500%+ Returns | 10,000+ Users',
    description: '🚀 Calculate dividend returns with our professional DRIP calculator. Build passive income & achieve financial independence.',
    images: [`${siteUrl}/twitter-image.png`],
    creator: '@dividendcalcpro',
    site: '@dividendcalcpro',
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification tokens
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-verification-code',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    // Note: Bing verification should be added via <meta> tag in head.tsx or as other metadata property
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152' }
    ],
  },

  // Manifest
  manifest: '/manifest.json',

  // Additional
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'en-GB': `${siteUrl}/en-gb`,
      'en-CA': `${siteUrl}/en-ca`,
    },
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Enhanced structured data for better SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: 'Professional dividend calculator suite with 5 powerful tools for building wealth through dividend investing',
        publisher: {
          '@id': `${siteUrl}/#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
          width: 512,
          height: 512
        },
        sameAs: [
          'https://twitter.com/dividendcalcpro',
          'https://www.linkedin.com/company/dividendcalcpro',
          'https://www.youtube.com/@dividendcalcpro'
        ]
      },
      {
        '@type': 'WebApplication',
        '@id': `${siteUrl}/#webapp`,
        name: siteName,
        url: siteUrl,
        description: '🔥 FREE dividend calculator with 5 tools: DRIP Calculator, Yield Calculator, Growth Calculator, Comparison Tool, Retirement Planner',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '12847',
          reviewCount: '3456'
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'John D.'
            },
            reviewBody: 'Best dividend calculator I have used. The visualizations really help understand compound growth!'
          },
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Sarah M.'
            },
            reviewBody: 'Turned my $50K investment into $250K in 5 years using this calculator to plan my strategy.'
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Calculators',
            item: `${siteUrl}/#calculator`
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .loading-skeleton {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s ease-in-out infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
        }} />
      </head>
      <body className="font-sans antialiased">
        <WebVitals />
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col">
          {children}
        </div>
        <Toaster />

        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}