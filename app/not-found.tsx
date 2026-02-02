import { Metadata } from 'next'
import Link from 'next/link'
import { Search, Home, Calculator, TrendingUp, BookOpen, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-4xl w-full space-y-8">
        {/* 404 Visual */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <h1 className="text-[150px] font-black text-slate-200 dark:text-slate-800 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full">
                <Search className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Home className="w-4 h-4" />
              Go to Homepage
            </Button>
          </Link>
          <Link href="/#calculator">
            <Button variant="outline" className="gap-2">
              <Calculator className="w-4 h-4" />
              Try Our Calculators
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <Link href="/#calculator">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="space-y-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Dividend Calculators
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Access our suite of 5 powerful dividend investment calculators
                </p>
              </div>
            </Card>
          </Link>

          <Link href="/tools">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="space-y-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Investment Tools
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Explore stock screeners, portfolio analyzers, and more
                </p>
              </div>
            </Card>
          </Link>

          <Link href="/resources">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="space-y-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Learning Resources
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Browse guides, tutorials, and educational content
                </p>
              </div>
            </Card>
          </Link>
        </div>

        {/* Search Box */}
        <Card className="p-6 mt-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search Our Site
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const query = (e.target as HTMLInputElement).value
                    window.location.href = `/?search=${encodeURIComponent(query)}`
                  }
                }}
              />
              <Button
                onClick={() => {
                  const input = document.querySelector('input[type="text"]') as HTMLInputElement
                  if (input?.value) {
                    window.location.href = `/?search=${encodeURIComponent(input.value)}`
                  }
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </Card>

        {/* Help Section */}
        <div className="text-center pt-8 border-t">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Need help? Contact us at{' '}
            <a
              href="mailto:support@dividendcalculator.pro"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              support@dividendcalculator.pro
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}