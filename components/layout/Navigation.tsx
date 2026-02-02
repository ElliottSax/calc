'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  TrendingUp, Menu, X, Calculator, BookOpen, BarChart3, Users,
  TrendingDown, Home, FileText, Zap, Shield, ChevronDown,
  PieChart, Target, Award, Newspaper, Download, Search, Sun, Moon
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

const NAVIGATION = [
  {
    label: 'Calculators',
    icon: Calculator,
    href: '/#calculator',
    items: [
      { label: 'DRIP Calculator', href: '/#calculator', badge: 'Popular' },
      { label: 'Yield Calculator', href: '/#calculator' },
      { label: 'Growth Calculator', href: '/#calculator' },
      { label: 'Comparison Tool', href: '/#calculator' },
      { label: 'Retirement Planner', href: '/#calculator', badge: 'New' },
    ]
  },
  {
    label: 'Resources',
    icon: BookOpen,
    href: '/resources',
    items: [
      { label: 'Stock Screener', href: '/resources', badge: 'Hot' },
      { label: 'Portfolio Analyzer', href: '/resources' },
      { label: 'Market Data', href: '/resources' },
      { label: 'Educational Guides', href: '/resources' },
      { label: 'Free Downloads', href: '/resources' },
    ]
  },
  {
    label: 'Blog',
    icon: Newspaper,
    href: '/blog',
    badge: 'New',
  },
  {
    label: 'Compare',
    icon: BarChart3,
    href: '/#brokers',
    items: [
      { label: 'Brokers', href: '/#brokers' },
      { label: 'Robo-Advisors', href: '/#brokers' },
      { label: 'Dividend ETFs', href: '/#brokers' },
    ]
  },
  {
    label: 'Community',
    icon: Users,
    href: '#',
    items: [
      { label: 'Achievements', href: '#', badge: 'Beta' },
      { label: 'Leaderboard', href: '#' },
      { label: 'Forum', href: '#' },
      { label: 'Success Stories', href: '#' },
    ]
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check for dark mode preference
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(darkMode)
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      {/* Top Bar - Promotional */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          <span className="font-semibold">Limited Time:</span>
          <span>Get $752 in FREE Resources - No Credit Card Required!</span>
          <Link href="#email-capture">
            <Badge variant="secondary" className="ml-2 cursor-pointer hover:bg-white/90">
              Claim Now →
            </Badge>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`bg-white dark:bg-slate-900 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  Dividend<span className="text-blue-600">Pro</span>
                </h1>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Build Wealth Daily
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAVIGATION.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="gap-1">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                          {item.badge && (
                            <Badge variant="secondary" className="ml-1 text-xs">
                              {item.badge}
                            </Badge>
                          )}
                          <ChevronDown className="w-3 h-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {item.items.map((subItem, index) => (
                          <React.Fragment key={subItem.label}>
                            {index > 0 && index % 3 === 0 && <DropdownMenuSeparator />}
                            <DropdownMenuItem asChild>
                              <Link href={subItem.href} className="flex items-center justify-between">
                                <span>{subItem.label}</span>
                                {subItem.badge && (
                                  <Badge variant="outline" className="ml-2 text-xs">
                                    {subItem.badge}
                                  </Badge>
                                )}
                              </Link>
                            </DropdownMenuItem>
                          </React.Fragment>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={item.href}>
                      <Button variant="ghost" className="gap-1">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                        {item.badge && (
                          <Badge variant="secondary" className="ml-1 text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="w-5 h-5" />
              </Button>

              {/* Dark Mode Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* CTA Button */}
              <Link href="/#calculator">
                <Button className="hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {NAVIGATION.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between py-2 px-3 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </span>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center justify-between py-2 px-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{subItem.label}</span>
                            {subItem.badge && (
                              <Badge variant="outline" className="text-xs">
                                {subItem.badge}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2 px-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t">
                <Link href="/#calculator" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Calculating Now →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Market Ticker (Optional) */}
      {pathname === '/' && (
        <div className="bg-slate-50 dark:bg-slate-800/50 py-2 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 text-sm overflow-x-auto">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Markets:</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">S&P 500</span>
                <span className="text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +0.78%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">DOW</span>
                <span className="text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +0.48%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">NASDAQ</span>
                <span className="text-red-600 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  -0.44%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">VIX</span>
                <span className="text-red-600 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  -5.82%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}