'use client'

import { useState, useMemo } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  TrendingUp,
  TrendingDown,
  Award,
  DollarSign,
  BarChart3,
  Filter,
  ArrowUpDown
} from 'lucide-react'
import { DIVIDEND_ARISTOCRATS, DividendStock } from '@/lib/data/dividend-aristocrats'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export default function StocksIndexPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSector, setSelectedSector] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'yield' | 'growth' | 'years' | 'name'>('yield')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  // Get unique sectors
  const sectors = useMemo(() => {
    const sectorSet = new Set(DIVIDEND_ARISTOCRATS.map(stock => stock.sector))
    return ['all', ...Array.from(sectorSet).sort()]
  }, [])

  // Filter and sort stocks
  const filteredStocks = useMemo(() => {
    let filtered = DIVIDEND_ARISTOCRATS.filter(stock => {
      const matchesSearch =
        stock.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSector = selectedSector === 'all' || stock.sector === selectedSector

      return matchesSearch && matchesSector
    })

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'yield':
          comparison = a.yield - b.yield
          break
        case 'growth':
          comparison = a.dividendGrowth5Year - b.dividendGrowth5Year
          break
        case 'years':
          comparison = a.yearsOfGrowth - b.yearsOfGrowth
          break
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
      }
      return sortDirection === 'desc' ? -comparison : comparison
    })

    return filtered
  }, [searchQuery, selectedSector, sortBy, sortDirection])

  const toggleSort = (newSortBy: typeof sortBy) => {
    if (sortBy === newSortBy) {
      setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc')
    } else {
      setSortBy(newSortBy)
      setSortDirection('desc')
    }
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                {DIVIDEND_ARISTOCRATS.length} Dividend Stocks
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Dividend Stock
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Calculator Library
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Pre-filled calculators for top dividend-paying stocks. Calculate your returns with
                real dividend data, growth rates, and DRIP projections.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{DIVIDEND_ARISTOCRATS.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Stocks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {DIVIDEND_ARISTOCRATS.filter(s => s.yearsOfGrowth >= 25).length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Aristocrats</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{sectors.length - 1}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Sectors</div>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <Card className="max-w-6xl mx-auto mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search stocks (e.g., Apple, AAPL, Johnson & Johnson...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Sector Filter */}
                  <div className="flex gap-2">
                    <select
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    >
                      {sectors.map(sector => (
                        <option key={sector} value={sector}>
                          {sector === 'all' ? 'All Sectors' : sector}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort Options */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                    <Filter className="h-4 w-4 mr-1" />
                    Sort by:
                  </span>
                  <Button
                    variant={sortBy === 'yield' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSort('yield')}
                  >
                    Yield {sortBy === 'yield' && <ArrowUpDown className="ml-1 h-3 w-3" />}
                  </Button>
                  <Button
                    variant={sortBy === 'growth' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSort('growth')}
                  >
                    Growth {sortBy === 'growth' && <ArrowUpDown className="ml-1 h-3 w-3" />}
                  </Button>
                  <Button
                    variant={sortBy === 'years' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSort('years')}
                  >
                    History {sortBy === 'years' && <ArrowUpDown className="ml-1 h-3 w-3" />}
                  </Button>
                  <Button
                    variant={sortBy === 'name' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSort('name')}
                  >
                    Name {sortBy === 'name' && <ArrowUpDown className="ml-1 h-3 w-3" />}
                  </Button>
                </div>

                {/* Results Count */}
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  Showing {filteredStocks.length} of {DIVIDEND_ARISTOCRATS.length} stocks
                </div>
              </CardContent>
            </Card>

            {/* Stock Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStocks.map((stock) => (
                  <StockCard key={stock.ticker} stock={stock} />
                ))}
              </div>

              {/* No Results */}
              {filteredStocks.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    No stocks found matching your criteria
                  </p>
                  <Button onClick={() => { setSearchQuery(''); setSelectedSector('all') }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Building Your Dividend Portfolio
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose from our curated list of dividend stocks and see how your investments can grow
              with the power of compound dividend reinvestment.
            </p>
            <Link href="/about">
              <Button size="lg" variant="secondary">
                Learn More About Our Tools
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// Stock Card Component
function StockCard({ stock }: { stock: DividendStock }) {
  const isDividendAristocrat = stock.yearsOfGrowth >= 25
  const isHighYield = stock.yield >= 4
  const isHighGrowth = stock.dividendGrowth5Year >= 10

  return (
    <Link href={`/stocks/${stock.ticker.toLowerCase()}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {stock.ticker}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stock.name}
              </div>
            </div>
            {isDividendAristocrat && (
              <span title="Dividend Aristocrat">
                <Award className="h-5 w-5 text-yellow-500" />
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1 mt-2">
            <Badge variant="outline" className="text-xs">
              {stock.sector}
            </Badge>
            {isHighYield && (
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                High Yield
              </Badge>
            )}
            {isHighGrowth && (
              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Fast Growth
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-1">
                <DollarSign className="h-3 w-3" />
                Yield
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {stock.yield.toFixed(2)}%
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-1">
                <TrendingUp className="h-3 w-3" />
                5Y Growth
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stock.dividendGrowth5Year.toFixed(1)}%
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-1">
                <BarChart3 className="h-3 w-3" />
                Price
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">
                ${stock.price.toFixed(2)}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-1">
                <Award className="h-3 w-3" />
                History
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">
                {stock.yearsOfGrowth}yr
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Annual Dividend: <span className="font-semibold text-slate-900 dark:text-white">
                ${stock.annualDividend.toFixed(2)}
              </span>
            </div>
          </div>

          <Button className="w-full mt-4" variant="outline">
            View Calculator →
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
