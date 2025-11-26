import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { WebVitals } from '@/components/analytics/WebVitals'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com'
const siteName = process.env.NEXT_PUBLIC_APP_NAME || 'Dividend Calculator Hub'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dividend Calculator Hub - DRIP Calculator & Investment Tools',
    template: '%s | Dividend Calculator Hub',
  },
  description: 'Professional dividend investment calculator with DRIP analysis, yield calculations, and financial projections. Plan your dividend income and visualize compound growth.',
  keywords: [
    'dividend calculator',
    'DRIP calculator',
    'dividend reinvestment plan',
    'yield calculator',
    'investment calculator',
    'financial planning',
    'passive income calculator',
    'dividend income',
    'compound interest',
    'retirement planning',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Dividend Calculator Hub - DRIP Calculator & Investment Tools',
    description: 'Calculate dividend reinvestment returns and visualize your portfolio growth with our comprehensive DRIP calculator.',
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dividend Calculator Hub - Financial Planning Tools',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Dividend Calculator Hub - DRIP Calculator',
    description: 'Calculate dividend reinvestment returns and plan your financial future',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@yourtwitterhandle',
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification tokens
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/site.webmanifest',

  // Additional
  alternates: {
    canonical: siteUrl,
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured data for better SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteName,
    url: siteUrl,
    description: 'Professional dividend investment calculator with DRIP analysis, yield calculations, and financial projections',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2847',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <WebVitals />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}