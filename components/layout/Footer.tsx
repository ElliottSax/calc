'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp, Mail, Twitter, Linkedin, Youtube, Facebook,
  Shield, Award, Users, Star, ExternalLink, ArrowRight,
  Calculator, BookOpen, BarChart3, Newspaper, Download, Heart
} from 'lucide-react'

const FOOTER_LINKS = {
  calculators: [
    { label: 'DRIP Calculator', href: '/#calculator' },
    { label: 'Yield Calculator', href: '/#calculator' },
    { label: 'Growth Calculator', href: '/#calculator' },
    { label: 'Comparison Tool', href: '/#calculator' },
    { label: 'Retirement Planner', href: '/#calculator' },
  ],
  resources: [
    { label: 'Stock Screener', href: '/resources' },
    { label: 'Portfolio Analyzer', href: '/resources' },
    { label: 'Educational Guides', href: '/resources' },
    { label: 'Market Data', href: '/resources' },
    { label: 'Free Downloads', href: '/resources' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Success Stories', href: '#' },
    { label: 'Affiliate Program', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'GDPR', href: '/gdpr' },
  ],
}

const SOCIAL_LINKS = [
  { icon: Twitter, href: 'https://twitter.com/dividendcalcpro', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/dividendcalcpro', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@dividendcalcpro', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com/dividendcalcpro', label: 'Facebook' },
]

const TRUST_BADGES = [
  { icon: Shield, text: 'SSL Secured' },
  { icon: Award, text: '10,000+ Users' },
  { icon: Star, text: '4.9/5 Rating' },
  { icon: Users, text: 'Trusted Daily' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Join 25,000+ Smart Investors
            </h3>
            <p className="text-blue-100 mb-6">
              Get weekly dividend picks, market analysis, and exclusive strategies delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90"
              >
                Subscribe Free →
              </Button>
            </form>
            <p className="text-xs text-blue-100 mt-3">
              100% free • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <TrendingUp className="h-10 w-10 text-blue-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    Dividend<span className="text-blue-500">Pro</span>
                  </h1>
                  <span className="text-xs text-slate-400">
                    Build Wealth Through Dividends
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 mb-6">
                Professional-grade dividend calculators and investment tools to help you achieve financial independence through smart dividend investing.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold mb-4">Calculators</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.calculators.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.text} className="flex items-center justify-center gap-2">
                  <badge.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-slate-400">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Featured In */}
            <div className="text-center mb-8">
              <p className="text-xs text-slate-500 mb-3">AS FEATURED IN</p>
              <div className="flex flex-wrap justify-center gap-6 opacity-50">
                {['Forbes', 'WSJ', 'Bloomberg', 'CNBC', 'MarketWatch'].map(brand => (
                  <span key={brand} className="text-slate-400 font-semibold">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} DividendPro. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span>Made with <Heart className="inline w-4 h-4 text-red-500" /> for investors</span>
                <span>•</span>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
                <span>•</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
              <p className="text-xs text-slate-500 text-center">
                <strong>Disclaimer:</strong> This website provides financial calculators and educational content for informational purposes only.
                We are not financial advisors. Always consult with a qualified financial professional before making investment decisions.
                Past performance does not guarantee future results. Investing involves risk, including potential loss of principal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="bg-slate-950 py-4 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <p className="text-xs text-slate-500 text-center">
            Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
            This helps us maintain free tools and content. Thank you for your support!
            <Link href="/affiliate-disclosure" className="text-blue-400 hover:text-blue-300 ml-1">
              Learn more →
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}