"use client"

import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Dividend Calculator Hub
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
                DRIP Calculator
              </Button>
            </Link>
            <Link href="/aristocrats">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
                Aristocrats
              </Button>
            </Link>
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
              Learn
            </Button>
            <Button variant="default">
              Sign In
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}