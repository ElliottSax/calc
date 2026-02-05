/**
 * Advanced Data Export and Sharing System
 */

import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

// Export formats
export enum ExportFormat {
  PDF = 'PDF',
  EXCEL = 'EXCEL',
  CSV = 'CSV',
  JSON = 'JSON',
  PNG = 'PNG',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

// Export data types
export interface CalculationData {
  type: 'drip' | 'retirement' | 'growth' | 'yield' | 'coffee'
  inputs: Record<string, any>
  results: {
    summary: Record<string, any>
    yearlyBreakdown?: any[]
    charts?: ChartData[]
  }
  metadata: {
    calculatedAt: Date
    version: string
    userId?: string
  }
}

export interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'area'
  title: string
  data: any[]
  config?: Record<string, any>
}

export class DataExporter {
  private static instance: DataExporter

  static getInstance(): DataExporter {
    if (!DataExporter.instance) {
      DataExporter.instance = new DataExporter()
    }
    return DataExporter.instance
  }

  /**
   * Export data in specified format
   */
  async export(
    data: CalculationData,
    format: ExportFormat,
    options?: Record<string, any>
  ): Promise<Blob | string> {
    switch (format) {
      case ExportFormat.PDF:
        return this.exportPDF(data, options)
      case ExportFormat.EXCEL:
        return this.exportExcel(data, options)
      case ExportFormat.CSV:
        return this.exportCSV(data, options)
      case ExportFormat.JSON:
        return this.exportJSON(data, options)
      case ExportFormat.PNG:
        return this.exportPNG(data, options)
      case ExportFormat.HTML:
        return this.exportHTML(data, options)
      case ExportFormat.MARKDOWN:
        return this.exportMarkdown(data, options)
      default:
        throw new Error(`Unsupported export format: ${format}`)
    }
  }

  /**
   * Export as PDF with charts and formatting
   */
  private async exportPDF(data: CalculationData, options?: any): Promise<Blob> {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    // Add header
    doc.setFontSize(20)
    doc.setTextColor(15, 23, 42) // slate-900
    doc.text('Dividend Investment Analysis', 20, 20)

    // Add timestamp
    doc.setFontSize(10)
    doc.setTextColor(100, 116, 139) // slate-500
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 28)

    // Add calculation type badge
    doc.setFillColor(59, 130, 246) // blue-500
    doc.roundedRect(20, 35, 40, 8, 2, 2, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.text(data.type.toUpperCase() + ' Calculator', 22, 40)

    // Reset text color
    doc.setTextColor(0, 0, 0)

    // Add inputs section
    doc.setFontSize(14)
    doc.setTextColor(15, 23, 42)
    doc.text('Input Parameters', 20, 55)

    let yPosition = 65
    doc.setFontSize(10)
    doc.setTextColor(71, 85, 105) // slate-600

    Object.entries(data.inputs).forEach(([key, value]) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      const formattedValue = typeof value === 'number'
        ? value.toLocaleString()
        : String(value)

      doc.text(`${formattedKey}:`, 25, yPosition)
      doc.text(formattedValue, 100, yPosition)
      yPosition += 7
    })

    // Add results section
    yPosition += 10
    doc.setFontSize(14)
    doc.setTextColor(15, 23, 42)
    doc.text('Results Summary', 20, yPosition)

    yPosition += 10
    doc.setFontSize(10)
    doc.setTextColor(71, 85, 105)

    Object.entries(data.results.summary).forEach(([key, value]) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      const formattedValue = typeof value === 'number'
        ? value.toLocaleString()
        : String(value)

      doc.text(`${formattedKey}:`, 25, yPosition)
      doc.setFont('helvetica', 'bold')
      doc.text(formattedValue, 100, yPosition)
      doc.setFont('helvetica', 'normal')
      yPosition += 7
    })

    // Add yearly breakdown table if available
    if (data.results.yearlyBreakdown && data.results.yearlyBreakdown.length > 0) {
      doc.addPage()
      doc.setFontSize(14)
      doc.setTextColor(15, 23, 42)
      doc.text('Yearly Breakdown', 20, 20)

      const tableData = data.results.yearlyBreakdown.map((year: any) => [
        year.year,
        `$${year.portfolio?.toLocaleString() || '0'}`,
        `$${year.dividends?.toLocaleString() || '0'}`,
        `$${year.totalDividends?.toLocaleString() || '0'}`,
        `${year.yield?.toFixed(2) || '0'}%`
      ])

      ;(doc as any).autoTable({
        head: [['Year', 'Portfolio', 'Annual Dividends', 'Total Dividends', 'Yield']],
        body: tableData,
        startY: 30,
        theme: 'grid',
        headStyles: {
          fillColor: [15, 23, 42],
          textColor: [255, 255, 255]
        },
        styles: {
          fontSize: 9,
          cellPadding: 3
        }
      })
    }

    // Add footer
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(148, 163, 184) // slate-400
      doc.text(
        `Page ${i} of ${pageCount} | Professional Dividend Calculator`,
        doc.internal.pageSize.width / 2,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      )
    }

    return doc.output('blob')
  }

  /**
   * Export as Excel spreadsheet
   * TODO: Implement real Excel export with xlsx library: npm install xlsx
   * For now, falls back to CSV format with proper Excel compatibility
   */
  private async exportExcel(data: CalculationData, options?: any): Promise<Blob> {
    // Use CSV format with Excel-compatible encoding
    const csvContent = this.exportCSV(data, options)

    // Add UTF-8 BOM for Excel compatibility
    const BOM = '\uFEFF'
    return new Blob([BOM + csvContent], {
      type: 'text/csv;charset=utf-8;'
    })
  }

  /**
   * Export as CSV
   */
  private exportCSV(data: CalculationData, options?: any): string {
    const rows = []

    // Add headers
    rows.push(['Dividend Investment Analysis'])
    rows.push([`Calculator Type: ${data.type.toUpperCase()}`])
    rows.push([`Generated: ${new Date().toLocaleDateString()}`])
    rows.push([])

    // Add inputs
    rows.push(['INPUT PARAMETERS'])
    Object.entries(data.inputs).forEach(([key, value]) => {
      rows.push([
        key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
        String(value)
      ])
    })
    rows.push([])

    // Add results
    rows.push(['RESULTS SUMMARY'])
    Object.entries(data.results.summary).forEach(([key, value]) => {
      rows.push([
        key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
        String(value)
      ])
    })
    rows.push([])

    // Add yearly breakdown
    if (data.results.yearlyBreakdown && data.results.yearlyBreakdown.length > 0) {
      rows.push(['YEARLY BREAKDOWN'])
      rows.push(['Year', 'Portfolio Value', 'Annual Dividends', 'Total Dividends', 'Yield %'])
      data.results.yearlyBreakdown.forEach((year: any) => {
        rows.push([
          year.year,
          year.portfolio || '0',
          year.dividends || '0',
          year.totalDividends || '0',
          year.yield ? year.yield.toFixed(2) : '0'
        ])
      })
    }

    // Convert to CSV string
    return rows.map(row => row.map(cell => {
      // Escape quotes and wrap in quotes if contains comma
      const escaped = String(cell).replace(/"/g, '""')
      return escaped.includes(',') ? `"${escaped}"` : escaped
    }).join(',')).join('\n')
  }

  /**
   * Export as JSON
   */
  private exportJSON(data: CalculationData, options?: any): string {
    return JSON.stringify(data, null, 2)
  }

  /**
   * Export chart as PNG
   */
  private async exportPNG(data: CalculationData, options?: any): Promise<Blob> {
    // Get chart canvas element
    const canvas = document.querySelector('canvas') as HTMLCanvasElement

    if (!canvas) {
      throw new Error('No chart found to export')
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob)
        } else {
          reject(new Error('Failed to export chart as PNG'))
        }
      }, 'image/png')
    })
  }

  /**
   * Export as HTML report
   */
  private exportHTML(data: CalculationData, options?: any): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dividend Investment Analysis - ${data.type.toUpperCase()}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      background: linear-gradient(to bottom, #f8fafc, #ffffff);
      padding: 2rem;
    }
    .container { max-width: 800px; margin: 0 auto; }
    .header {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 2rem;
      border-radius: 1rem;
      margin-bottom: 2rem;
    }
    .header h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    .header .date { opacity: 0.9; }
    .section {
      background: white;
      border-radius: 0.5rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .section h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: #0f172a;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 0.5rem;
    }
    .data-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .data-item {
      padding: 0.75rem;
      background: #f8fafc;
      border-radius: 0.25rem;
    }
    .data-label {
      font-size: 0.875rem;
      color: #64748b;
      margin-bottom: 0.25rem;
    }
    .data-value {
      font-size: 1.25rem;
      font-weight: 600;
      color: #0f172a;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    th {
      background: #f8fafc;
      font-weight: 600;
    }
    .footer {
      text-align: center;
      color: #94a3b8;
      font-size: 0.875rem;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Dividend Investment Analysis</h1>
      <div class="type">${data.type.toUpperCase()} Calculator</div>
      <div class="date">Generated: ${new Date().toLocaleDateString()}</div>
    </div>

    <div class="section">
      <h2>Input Parameters</h2>
      <div class="data-grid">
        ${Object.entries(data.inputs).map(([key, value]) => `
          <div class="data-item">
            <div class="data-label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
            <div class="data-value">${typeof value === 'number' ? value.toLocaleString() : value}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>Results Summary</h2>
      <div class="data-grid">
        ${Object.entries(data.results.summary).map(([key, value]) => `
          <div class="data-item">
            <div class="data-label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
            <div class="data-value">${typeof value === 'number' ? value.toLocaleString() : value}</div>
          </div>
        `).join('')}
      </div>
    </div>

    ${data.results.yearlyBreakdown ? `
      <div class="section">
        <h2>Yearly Breakdown</h2>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Portfolio Value</th>
              <th>Annual Dividends</th>
              <th>Total Dividends</th>
              <th>Yield %</th>
            </tr>
          </thead>
          <tbody>
            ${data.results.yearlyBreakdown.map((year: any) => `
              <tr>
                <td>${year.year}</td>
                <td>$${(year.portfolio || 0).toLocaleString()}</td>
                <td>$${(year.dividends || 0).toLocaleString()}</td>
                <td>$${(year.totalDividends || 0).toLocaleString()}</td>
                <td>${(year.yield || 0).toFixed(2)}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : ''}

    <div class="footer">
      <p>Professional Dividend Calculator Suite</p>
      <p>© ${new Date().getFullYear()} All rights reserved</p>
    </div>
  </div>
</body>
</html>
    `
  }

  /**
   * Export as Markdown
   */
  private exportMarkdown(data: CalculationData, options?: any): string {
    const lines = []

    // Header
    lines.push('# Dividend Investment Analysis')
    lines.push(`**Calculator Type:** ${data.type.toUpperCase()}`)
    lines.push(`**Generated:** ${new Date().toLocaleDateString()}`)
    lines.push('')

    // Inputs
    lines.push('## Input Parameters')
    lines.push('')
    Object.entries(data.inputs).forEach(([key, value]) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      lines.push(`- **${formattedKey}:** ${value}`)
    })
    lines.push('')

    // Results
    lines.push('## Results Summary')
    lines.push('')
    Object.entries(data.results.summary).forEach(([key, value]) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      const formattedValue = typeof value === 'number' ? value.toLocaleString() : value
      lines.push(`- **${formattedKey}:** ${formattedValue}`)
    })
    lines.push('')

    // Yearly breakdown
    if (data.results.yearlyBreakdown && data.results.yearlyBreakdown.length > 0) {
      lines.push('## Yearly Breakdown')
      lines.push('')
      lines.push('| Year | Portfolio Value | Annual Dividends | Total Dividends | Yield % |')
      lines.push('|------|----------------|------------------|-----------------|---------|')

      data.results.yearlyBreakdown.forEach((year: any) => {
        lines.push(
          `| ${year.year} | $${(year.portfolio || 0).toLocaleString()} | $${(year.dividends || 0).toLocaleString()} | $${(year.totalDividends || 0).toLocaleString()} | ${(year.yield || 0).toFixed(2)}% |`
        )
      })
    }

    lines.push('')
    lines.push('---')
    lines.push('*Generated by Professional Dividend Calculator Suite*')

    return lines.join('\n')
  }

  /**
   * Download file with proper filename
   */
  download(content: Blob | string, filename: string, format: ExportFormat) {
    const blob = typeof content === 'string'
      ? new Blob([content], { type: this.getMimeType(format) })
      : content

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url

    // Use appropriate file extension
    const extension = format === ExportFormat.EXCEL ? 'csv' : format.toLowerCase()
    a.download = `${filename}_${new Date().toISOString().split('T')[0]}.${extension}`

    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  /**
   * Get MIME type for format
   */
  private getMimeType(format: ExportFormat): string {
    const mimeTypes = {
      [ExportFormat.PDF]: 'application/pdf',
      [ExportFormat.EXCEL]: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      [ExportFormat.CSV]: 'text/csv',
      [ExportFormat.JSON]: 'application/json',
      [ExportFormat.PNG]: 'image/png',
      [ExportFormat.HTML]: 'text/html',
      [ExportFormat.MARKDOWN]: 'text/markdown'
    }
    return mimeTypes[format] || 'application/octet-stream'
  }
}

// Export singleton instance
export const dataExporter = DataExporter.getInstance()