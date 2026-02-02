'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Award,
  BarChart3,
  ArrowRight,
  X
} from 'lucide-react'
import { DIVIDEND_ARISTOCRATS, DividendStock } from '@/lib/data/dividend-aristocrats'

export default function CompareStocksPage() {
  const [selectedStocks, setSelectedStocks] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStocks = DIVIDEND_ARISTOCRATS.filter(stock =>
    stock.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 10) // Limit dropdown results

  const comparedStocks = selectedStocks
    .map(ticker => DIVIDEND_ARISTOCRATS.find(s => s.ticker === ticker))
    .filter((s): s is DividendStock => s !== undefined)

  const addStock = (ticker: string) => {
    if (selectedStocks.length < 3 && !selectedStocks.includes(ticker)) {
      setSelectedStocks([...selectedStocks, ticker])
      setSearchQuery('')
    }
  }

  const removeStock = (ticker: string) => {
    setSelectedStocks(selectedStocks.filter(t => t !== ticker))
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <section className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge className="mb-4">Comparison Tool</Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Compare Dividend Stocks
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Compare up to 3 dividend stocks side-by-side. See yields, growth rates, history,
                  and make better investment decisions.
                </p>
              </div>

              {/* Stock Selector */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Select Stocks to Compare (Max 3)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search by ticker or company name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />

                    {searchQuery && filteredStocks.length > 0 && (
                      <div className="mt-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 max-h-60 overflow-y-auto">
                        {filteredStocks.map(stock => (
                          <button
                            key={stock.ticker}
                            onClick={() => addStock(stock.ticker)}
                            disabled={selectedStocks.includes(stock.ticker) || selectedStocks.length >= 3}
                            className="w-full px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed border-b border-slate-100 dark:border-slate-700 last:border-0"
                          >
                            <div className="font-semibold">{stock.ticker}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{stock.name}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Selected Stocks */}
                  {selectedStocks.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedStocks.map(ticker => {
                        const stock = DIVIDEND_ARISTOCRATS.find(s => s.ticker === ticker)
                        return (
                          <Badge key={ticker} variant="secondary" className="px-3 py-1 text-sm">
                            {stock?.ticker} - {stock?.name}
                            <button
                              onClick={() => removeStock(ticker)}
                              className="ml-2 hover:text-red-600"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        )
                      })}
                    </div>
                  )}

                  {/* Quick Presets */}
                  <div className="mt-6">
                    <div className="text-sm font-semibold mb-2">Quick Presets:</div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedStocks(['JNJ', 'PG', 'KO'])}
                      >
                        Classic Aristocrats
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedStocks(['MO', 'VZ', 'MMM'])}
                      >
                        High Yield
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedStocks(['AVGO', 'UNH', 'COST'])}
                      >
                        Fast Growth
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedStocks(['AAPL', 'MSFT', 'IBM'])}
                      >
                        Tech Dividends
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Results */}
              {comparedStocks.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Select 2-3 stocks above to compare them side-by-side
                    </p>
                    <p className="text-sm text-slate-500">
                      Try a quick preset or search for your favorite dividend stocks
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Key Metrics Comparison */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Metrics Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                              <th className="text-left py-3 px-4 font-semibold">Metric</th>
                              {comparedStocks.map(stock => (
                                <th key={stock.ticker} className="text-center py-3 px-4 font-semibold">
                                  {stock.ticker}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <ComparisonRow
                              label="Company"
                              values={comparedStocks.map(s => s.name)}
                            />
                            <ComparisonRow
                              label="Sector"
                              values={comparedStocks.map(s => s.sector)}
                            />
                            <ComparisonRow
                              label="Current Price"
                              values={comparedStocks.map(s => `$${s.price.toFixed(2)}`)}
                            />
                            <ComparisonRow
                              label="Dividend Yield"
                              values={comparedStocks.map(s => `${s.yield.toFixed(2)}%`)}
                              highlight="max"
                              highlightColor="green"
                            />
                            <ComparisonRow
                              label="Annual Dividend"
                              values={comparedStocks.map(s => `$${s.annualDividend.toFixed(2)}`)}
                            />
                            <ComparisonRow
                              label="5Y Dividend Growth"
                              values={comparedStocks.map(s => `${s.dividendGrowth5Year.toFixed(1)}%`)}
                              highlight="max"
                              highlightColor="blue"
                            />
                            <ComparisonRow
                              label="Years of Growth"
                              values={comparedStocks.map(s => `${s.yearsOfGrowth} years`)}
                              highlight="max"
                              highlightColor="purple"
                            />
                            <ComparisonRow
                              label="Payout Ratio"
                              values={comparedStocks.map(s => s.payoutRatio ? `${s.payoutRatio}%` : 'N/A')}
                            />
                            <ComparisonRow
                              label="Market Cap"
                              values={comparedStocks.map(s => s.marketCap ? `$${(s.marketCap / 1000000000).toFixed(0)}B` : 'N/A')}
                            />
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Visual Comparison */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          Dividend Yield
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {comparedStocks.map(stock => (
                          <div key={stock.ticker} className="mb-4 last:mb-0">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">{stock.ticker}</span>
                              <span className="text-green-600 font-bold">{stock.yield.toFixed(2)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="bg-green-600 h-3 rounded-full"
                                style={{ width: `${(stock.yield / Math.max(...comparedStocks.map(s => s.yield))) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                          Dividend Growth
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {comparedStocks.map(stock => (
                          <div key={stock.ticker} className="mb-4 last:mb-0">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">{stock.ticker}</span>
                              <span className="text-blue-600 font-bold">{stock.dividendGrowth5Year.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="bg-blue-600 h-3 rounded-full"
                                style={{ width: `${(stock.dividendGrowth5Year / Math.max(...comparedStocks.map(s => s.dividendGrowth5Year))) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-purple-600" />
                          Track Record
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {comparedStocks.map(stock => (
                          <div key={stock.ticker} className="mb-4 last:mb-0">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">{stock.ticker}</span>
                              <span className="text-purple-600 font-bold">{stock.yearsOfGrowth}yr</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="bg-purple-600 h-3 rounded-full"
                                style={{ width: `${(stock.yearsOfGrowth / Math.max(...comparedStocks.map(s => s.yearsOfGrowth))) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Winner Summary */}
                  <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-6 w-6 text-yellow-600" />
                        Category Winners
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Highest Yield</div>
                          <div className="text-2xl font-bold text-green-600">
                            {comparedStocks.reduce((max, stock) => stock.yield > max.yield ? stock : max).ticker}
                          </div>
                          <div className="text-sm">
                            {comparedStocks.reduce((max, stock) => stock.yield > max.yield ? stock : max).yield.toFixed(2)}%
                          </div>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Fastest Growth</div>
                          <div className="text-2xl font-bold text-blue-600">
                            {comparedStocks.reduce((max, stock) => stock.dividendGrowth5Year > max.dividendGrowth5Year ? stock : max).ticker}
                          </div>
                          <div className="text-sm">
                            {comparedStocks.reduce((max, stock) => stock.dividendGrowth5Year > max.dividendGrowth5Year ? stock : max).dividendGrowth5Year.toFixed(1)}%
                          </div>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Longest History</div>
                          <div className="text-2xl font-bold text-purple-600">
                            {comparedStocks.reduce((max, stock) => stock.yearsOfGrowth > max.yearsOfGrowth ? stock : max).ticker}
                          </div>
                          <div className="text-sm">
                            {comparedStocks.reduce((max, stock) => stock.yearsOfGrowth > max.yearsOfGrowth ? stock : max).yearsOfGrowth} years
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Calculators */}
                  <Card>
                    <CardHeader>
                      <CardTitle>View Individual Stock Calculators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {comparedStocks.map(stock => (
                          <Link key={stock.ticker} href={`/stocks/${stock.ticker.toLowerCase()}`}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                              <CardContent className="pt-6">
                                <div className="text-center">
                                  <div className="text-2xl font-bold mb-1">{stock.ticker}</div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                    {stock.name}
                                  </div>
                                  <Button className="w-full">
                                    View Calculator <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// Comparison Row Component
function ComparisonRow({
  label,
  values,
  highlight,
  highlightColor
}: {
  label: string
  values: string[]
  highlight?: 'max' | 'min'
  highlightColor?: 'green' | 'blue' | 'purple'
}) {
  const colorClasses = {
    green: 'bg-green-50 dark:bg-green-900/20 font-bold',
    blue: 'bg-blue-50 dark:bg-blue-900/20 font-bold',
    purple: 'bg-purple-50 dark:bg-purple-900/20 font-bold'
  }

  const numericValues = values.map(v => parseFloat(v.replace(/[^0-9.]/g, '')))
  const maxIndex = highlight === 'max' ? numericValues.indexOf(Math.max(...numericValues)) : -1
  const minIndex = highlight === 'min' ? numericValues.indexOf(Math.min(...numericValues)) : -1

  return (
    <tr className="border-b border-slate-100 dark:border-slate-800">
      <td className="py-3 px-4 font-medium text-slate-700 dark:text-slate-300">{label}</td>
      {values.map((value, index) => (
        <td
          key={index}
          className={`py-3 px-4 text-center ${
            (index === maxIndex || index === minIndex) && highlightColor
              ? colorClasses[highlightColor]
              : ''
          }`}
        >
          {value}
        </td>
      ))}
    </tr>
  )
}
