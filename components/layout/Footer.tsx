'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp, Mail, Twitter, Linkedin, Youtube, Facebook,
  Shield, Award, Users, Star, ArrowRight,
  Calculator, BookOpen, BarChart3, Newspaper, Download, Heart
} from 'lucide-react'

const FOOTER_LINKS = {
  // All five of these pointed at '/#calculator' -- one anchor on the homepage,
  // five different labels. The dedicated routes exist and return 200; sending
  // every label to the same anchor wasted the internal linking and gave a reader
  // clicking "Yield Calculator" the homepage instead.
  calculators: [
    { label: 'DRIP Calculator', href: '/calculators/drip' },
    { label: 'Yield Calculator', href: '/calculators/dividend-yield' },
    { label: 'Growth Calculator', href: '/calculators/dividend-growth' },
    { label: 'Income Calculator', href: '/calculators/dividend-income' },
    { label: 'Retirement (FIRE)', href: '/calculators/fire' },
    { label: 'All calculators', href: '/calculators' },
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
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ],
}

// Social accounts intentionally absent: linking handles that do not exist reads as
// fabrication to users and network reviewers alike. Re-add entries when real.
const SOCIAL_LINKS: { icon: typeof Twitter; href: string; label: string }[] = []

// Only claims that are true by construction. The previous set ("10,000+ Users",
// "4.9/5 Rating") was invented -- fabricated social proof is an FTC problem and
// the top rejection signal in affiliate-network reviews.
const TRUST_BADGES = [
  { icon: Shield, text: 'SSL Secured' },
  { icon: Calculator, text: 'Free — No Signup' },
  { icon: Users, text: 'Runs in Your Browser' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
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
                    Dividend<span className="text-blue-500">Engines</span>
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

            {/* An "AS FEATURED IN" strip used to sit here listing Forbes, WSJ,
                Bloomberg, CNBC and MarketWatch. None of them has ever mentioned this
                site. Fabricated press credentials naming real publications are not
                puffery -- they are a false statement of fact that those outlets
                themselves could act on, quite apart from the FTC. Restore this only
                with a link to the actual article. */}

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Dividend Engines. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span>Made with <Heart className="inline w-4 h-4 text-red-500" /> for investors</span>
                <span>•</span>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
                {/* A "GitHub" link pointed at https://github.com -- the site's own
                    homepage, not any repository of ours. Same category as the fake
                    social accounts removed from this file: a link that implies
                    something exists when it does not. Restore it with a real repo
                    URL if the code is ever published. */}
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