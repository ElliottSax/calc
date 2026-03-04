import { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Sources - Dividend Engines',
  description: 'Complete list of financial data sources used in all Dividend Engines calculators. IRS publications, Treasury data, and market data verified as of March 3, 2026.',
  keywords: [
    'data sources',
    'IRS publication',
    'Treasury data',
    'financial data',
    'market data sources',
    'dividend data'
  ],
  openGraph: {
    title: 'Data Sources & References - Dividend Engines',
    description: 'Transparent documentation of all data sources used in our calculations',
    type: 'website',
    url: 'https://dividendengines.com/data-sources',
  },
  alternates: {
    canonical: 'https://dividendengines.com/data-sources'
  }
}

interface DataSource {
  name: string
  url: string
  category: string
  description: string
  lastVerified: string
  reliability: 'Primary' | 'Secondary' | 'Reference'
}

const dataSources: DataSource[] = [
  // Government Sources
  {
    name: 'IRS Publication 17: Your Federal Income Tax',
    url: 'https://www.irs.gov/pub/irs-pdf/p17.pdf',
    category: 'IRS/Tax',
    description: 'Federal income tax rates, deductions, and filing requirements',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'IRS Publication 550: Investment Income and Expenses',
    url: 'https://www.irs.gov/pub/irs-pdf/p550.pdf',
    category: 'IRS/Tax',
    description: 'Dividend taxation, capital gains treatment, and investment expense deductions',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'IRS Publication 590-A: Contributions to Individual Retirement Arrangements',
    url: 'https://www.irs.gov/pub/irs-pdf/p590a.pdf',
    category: 'IRS/Retirement',
    description: 'IRA contribution limits, eligibility rules, and tax treatment',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'IRS Publication 560: Retirement Plans for the Self-Employed',
    url: 'https://www.irs.gov/pub/irs-pdf/p560.pdf',
    category: 'IRS/Retirement',
    description: 'Solo 401(k) and SEP IRA rules and contribution limits',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'U.S. Treasury: Daily Treasury Yield Curve Rates',
    url: 'https://www.treasury.gov/resource-center/data-chart-center/interest-rates/pages/default.aspx',
    category: 'Treasury/Market',
    description: 'Current and historical Treasury bond yields and rates',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'Federal Reserve Economic Data (FRED)',
    url: 'https://fred.stlouisfed.org/',
    category: 'Fed/Economic',
    description: 'Historical inflation rates, interest rates, and economic indicators',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },

  // Financial Market Data
  {
    name: 'Yahoo Finance - Historical Stock Data',
    url: 'https://finance.yahoo.com/',
    category: 'Market Data',
    description: 'Daily stock prices, dividends, and historical performance data',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'S&P Global Market Intelligence',
    url: 'https://www.spglobal.com/marketintelligence/',
    category: 'Market Research',
    description: 'Dividend history, company fundamentals, and dividend sustainability analysis',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'Morningstar - Dividend Information',
    url: 'https://www.morningstar.com/',
    category: 'Market Research',
    description: 'Historical dividend yields, growth rates, and dividend sustainability ratings',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'Seeking Alpha - Dividend Data',
    url: 'https://seekingalpha.com/',
    category: 'Market Research',
    description: 'Current dividend yields, payout dates, and dividend announcements',
    lastVerified: 'March 3, 2026',
    reliability: 'Secondary'
  },

  // Reference & Educational
  {
    name: 'Dividend Aristocrats Official List',
    url: 'https://www.spglobal.com/spdji/en/indices/equity/sp-500-dividend-aristocrats/',
    category: 'Reference',
    description: 'Official list of companies with 25+ consecutive years of dividend increases',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'SEC EDGAR - Company Filings (10-K, 10-Q)',
    url: 'https://www.sec.gov/edgar/',
    category: 'Reference',
    description: 'Official company financial statements and dividend information',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  },
  {
    name: 'Federal Reserve Board - Consumer Finance',
    url: 'https://www.federalreserve.gov/',
    category: 'Reference',
    description: 'Federal funds rate, banking regulations, and financial system information',
    lastVerified: 'March 3, 2026',
    reliability: 'Primary'
  }
]

export default function DataSourcesPage() {
  const primarySources = dataSources.filter(s => s.reliability === 'Primary')
  const secondarySources = dataSources.filter(s => s.reliability === 'Secondary')
  const referenceSources = dataSources.filter(s => s.reliability === 'Reference')

  const groupedByCategory = dataSources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {} as Record<string, DataSource[]>)

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 pt-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                DATA TRANSPARENCY
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              Data{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sources
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Every number on Dividend Engines comes from verified, authoritative sources. We exclusively use
              government, IRS, Treasury, and major financial institution data—never speculation or guesses.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>IRS & Treasury Sources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Verified March 3, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources by Category */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">

            {/* Reliability Overview */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20">
              <CardHeader>
                <CardTitle>Data Source Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Badge className="bg-green-600">Primary</Badge>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Direct government sources, official SEC filings, and major financial institutions. Most reliable.
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {primarySources.length} sources
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-blue-600">Secondary</Badge>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Reputable financial data providers that aggregate official sources.
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {secondarySources.length} sources
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-slate-600">Reference</Badge>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Supporting sources for context and validation.
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {referenceSources.length} sources
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sources by Category */}
            {Object.entries(groupedByCategory).map(([category, sources]) => (
              <div key={category} className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category}</h2>
                <div className="grid gap-4">
                  {sources.map((source, idx) => (
                    <Card key={idx} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                                {source.name}
                              </h3>
                              <Badge variant={
                                source.reliability === 'Primary' ? 'default' :
                                source.reliability === 'Secondary' ? 'secondary' :
                                'outline'
                              }>
                                {source.reliability}
                              </Badge>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">
                              {source.description}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                              Last Verified: {source.lastVerified}
                            </p>
                          </div>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors flex-shrink-0"
                          >
                            Visit
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Data Update Frequency */}
            <Card>
              <CardHeader>
                <CardTitle>Data Update Frequency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Real-Time Updates</h3>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Stock prices (updated every 15 minutes)</li>
                      <li>• Dividend announcements (as published)</li>
                      <li>• Market indices and ETF data</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Daily Updates</h3>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Treasury yields</li>
                      <li>• Federal funds rate</li>
                      <li>• Economic indicators</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Annual Updates</h3>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• IRS tax rates and limits</li>
                      <li>• Contribution limits</li>
                      <li>• Tax bracket adjustments</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Quarterly Updates</h3>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Company earnings data</li>
                      <li>• Dividend policy changes</li>
                      <li>• SEC filings (10-Q)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Accuracy */}
            <Card>
              <CardHeader>
                <CardTitle>Data Accuracy Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  We follow these principles to ensure accuracy:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Primary Sources Only:</strong> Direct data from government and official sources</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Cross-Verification:</strong> Critical data verified against multiple sources</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Timestamp Tracking:</strong> All data includes source and update date</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Error Reporting:</strong> We accept corrections and verify all updates</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Transparency:</strong> All sources are publicly listed and verifiable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
