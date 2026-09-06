"use client"

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '/calculators', label: 'Calculators' },
  { href: '/aristocrats', label: 'Aristocrats' },
  { href: '/blog', label: 'Learn' },
]

export function Header() {
  // The hamburger button previously had no onClick and no menu markup at all --
  // below the md breakpoint the <nav> links are hidden (`hidden md:flex`) and
  // this button did nothing, so mobile visitors had no way to reach
  // Calculators/Aristocrats/Learn/DRIP from the header.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            {/* Brand is a span, not an h1 — otherwise every page (esp. blog
                articles) has the brand as its primary H1, burying the real
                topic heading and weakening on-page relevance. */}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Dividend Calculator Hub
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/calculators">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
                Calculators
              </Button>
            </Link>
            <Link href="/aristocrats">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
                Aristocrats
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
                Learn
              </Button>
            </Link>
            <Link href="/calculators/drip">
              <Button variant="default">
                DRIP Calculator
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-nav" className="md:hidden pb-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/calculators/drip" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" className="w-full mt-2">
                DRIP Calculator
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}