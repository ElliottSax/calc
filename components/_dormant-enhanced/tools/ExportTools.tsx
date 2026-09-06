'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Download, FileText, FileSpreadsheet, Camera, Share2, Printer, Mail, Calendar } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface ExportData {
  portfolioValue: number
  annualDividends: number
  totalReturn: number
  years: number
  monthlyContribution: number
  initialInvestment: number
  strategy: string
}

export function ExportTools({ data }: { data?: ExportData }) {
  const [isExporting, setIsExporting] = useState<string | null>(null)
  const [exportHistory, setExportHistory] = useState<string[]>([])

  const generateCSV = () => {
    if (!data) return

    const csvContent = [
      ['Metric', 'Value'],
      ['Initial Investment', `$${data.initialInvestment.toLocaleString()}`],
      ['Monthly Contribution', `$${data.monthlyContribution.toLocaleString()}`],
      ['Investment Period', `${data.years} years`],
      ['Final Portfolio Value', `$${data.portfolioValue.toLocaleString()}`],
      ['Annual Dividend Income', `$${data.annualDividends.toLocaleString()}`],
      ['Total Return', `${data.totalReturn.toFixed(1)}%`],
      ['Strategy', data.strategy],
      ['Generated On', new Date().toLocaleDateString()]
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `dividend-analysis-${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const generatePDF = () => {
    if (!data) return

    // Create a simple PDF-like HTML document
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Dividend Investment Analysis Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
          .header { text-align: center; border-bottom: 3px solid #4f46e5; padding-bottom: 20px; margin-bottom: 30px; }
          .title { font-size: 28px; color: #4f46e5; margin: 0; }
          .subtitle { color: #6b7280; margin: 5px 0 0 0; }
          .section { margin: 30px 0; }
          .metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .metric-card { border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; }
          .metric-label { font-size: 14px; color: #6b7280; margin-bottom: 5px; }
          .metric-value { font-size: 24px; font-weight: bold; color: #1f2937; }
          .highlight { color: #059669; }
          .footer { margin-top: 50px; text-align: center; color: #9ca3af; font-size: 12px; }
          @media print {
            body { margin: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">🎯 Dividend Investment Analysis</h1>
          <p class="subtitle">Comprehensive Portfolio Projection Report</p>
        </div>
        
        <div class="section">
          <h2>Investment Summary</h2>
          <div class="metric-grid">
            <div class="metric-card">
              <div class="metric-label">Initial Investment</div>
              <div class="metric-value">$${data.initialInvestment.toLocaleString()}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Monthly Contribution</div>
              <div class="metric-value">$${data.monthlyContribution.toLocaleString()}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Investment Period</div>
              <div class="metric-value">${data.years} years</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Strategy</div>
              <div class="metric-value">${data.strategy}</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h2>Projected Results</h2>
          <div class="metric-grid">
            <div class="metric-card">
              <div class="metric-label">Final Portfolio Value</div>
              <div class="metric-value highlight">$${data.portfolioValue.toLocaleString()}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Annual Dividend Income</div>
              <div class="metric-value highlight">$${data.annualDividends.toLocaleString()}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Total Return</div>
              <div class="metric-value highlight">${data.totalReturn.toFixed(1)}%</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Monthly Passive Income</div>
              <div class="metric-value highlight">$${Math.round(data.annualDividends / 12).toLocaleString()}</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h3>Key Insights</h3>
          <ul>
            <li><strong>Wealth Multiplication:</strong> Your initial $${data.initialInvestment.toLocaleString()} could grow to $${data.portfolioValue.toLocaleString()}</li>
            <li><strong>Passive Income:</strong> Generate $${data.annualDividends.toLocaleString()} annually in dividends</li>
            <li><strong>Monthly Freedom:</strong> Earn $${Math.round(data.annualDividends / 12).toLocaleString()} per month without working</li>
            <li><strong>Power of Compounding:</strong> Consistent investing over ${data.years} years creates significant wealth</li>
          </ul>
        </div>
        
        <div class="footer">
          <p>Generated on ${new Date().toLocaleDateString()} • Dividend Empire Builder</p>
          <p>This analysis is for educational purposes. Past performance doesn't guarantee future results.</p>
        </div>
      </body>
      </html>
    `

    const newWindow = window.open('', '_blank')
    if (newWindow) {
      newWindow.document.write(htmlContent)
      newWindow.document.close()
      setTimeout(() => {
        newWindow.print()
      }, 500)
    }
  }

  const shareResults = async () => {
    if (!data) return

    const shareText = `🚀 My Dividend Investment Plan:
    
💰 Starting: $${data.initialInvestment.toLocaleString()}
📈 Target: $${data.portfolioValue.toLocaleString()}
⏰ Timeline: ${data.years} years
💵 Future Income: $${data.annualDividends.toLocaleString()}/year

The power of compound investing! 📊

#DividendInvesting #WealthBuilding #PassiveIncome`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Dividend Investment Analysis',
          text: shareText,
          url: window.location.href
        })
      } catch (error) {
        console.log('Share cancelled or failed')
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText)
      alert('Results copied to clipboard!')
    }
  }

  const exportAction = async (type: string, action: () => void) => {
    setIsExporting(type)
    try {
      action()
      setExportHistory(prev => [...prev, `${type} export at ${new Date().toLocaleTimeString()}`])
      setTimeout(() => setIsExporting(null), 1500)
    } catch (error) {
      console.error('Export failed:', error)
      setIsExporting(null)
    }
  }

  const exportOptions = [
    {
      id: 'pdf',
      name: 'PDF Report',
      description: 'Professional report for presentations',
      icon: <FileText className="h-5 w-5" />,
      color: 'from-red-500 to-red-600',
      action: generatePDF
    },
    {
      id: 'csv',
      name: 'Excel/CSV',
      description: 'Data for spreadsheet analysis',
      icon: <FileSpreadsheet className="h-5 w-5" />,
      color: 'from-green-500 to-green-600',
      action: generateCSV
    },
    {
      id: 'share',
      name: 'Share Results',
      description: 'Share on social media or messaging',
      icon: <Share2 className="h-5 w-5" />,
      color: 'from-blue-500 to-blue-600',
      action: shareResults
    },
    {
      id: 'print',
      name: 'Print Summary',
      description: 'Quick printable summary',
      icon: <Printer className="h-5 w-5" />,
      color: 'from-purple-500 to-purple-600',
      action: () => window.print()
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-blue-500" />
            Export & Share Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!data ? (
            <Alert>
              <AlertDescription>
                Run a calculation first to enable export features.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              {/* Quick Stats Preview */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">${data.portfolioValue.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Final Value</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">${data.annualDividends.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Annual Dividends</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{data.totalReturn.toFixed(1)}%</p>
                      <p className="text-xs text-muted-foreground">Total Return</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">{data.years}</p>
                      <p className="text-xs text-muted-foreground">Years</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Export Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exportOptions.map((option, index) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <Button
                          onClick={() => exportAction(option.id, option.action)}
                          disabled={isExporting === option.id}
                          className={`w-full h-auto p-6 bg-gradient-to-r ${option.color} hover:opacity-90 text-white`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-full">
                              {isExporting === option.id ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                              ) : (
                                option.icon
                              )}
                            </div>
                            <div className="text-left">
                              <h3 className="font-semibold text-lg">{option.name}</h3>
                              <p className="text-sm opacity-90">{option.description}</p>
                            </div>
                          </div>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Export History */}
              {exportHistory.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Recent Exports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {exportHistory.slice(-5).reverse().map((item, index) => (
                        <div key={index} className="text-sm text-muted-foreground p-2 bg-muted rounded">
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tips */}
              <Alert>
                <AlertDescription>
                  💡 <strong>Pro Tips:</strong> Use PDF for presentations, CSV for detailed analysis, 
                  and Share for social media. All exports include your calculation assumptions and results.
                </AlertDescription>
              </Alert>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}