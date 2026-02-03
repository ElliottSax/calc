import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart } from 'lucide-react'

export const metadata = {
  title: 'Best Healthcare Dividend Stocks 2026: Defensive Income',
  description: 'Top healthcare stocks with reliable dividends. Johnson & Johnson, AbbVie, Pfizer, and more recession-resistant picks for stable passive income.',
}

export default function BestHealthcareDividendStocks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Heart className="h-3 w-3 mr-1" />
          Recession-Resistant Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best Healthcare Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          People need healthcare in good times and bad. These stocks provide
          defensive dividends that weather any economic storm.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top 8 Healthcare Dividend Stocks</h2>

        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. Johnson & Johnson (JNJ)</CardTitle>
                <CardDescription>Pharma, medical devices, consumer health | 62 years of increases</CardDescription>
              </div>
              <Badge className="bg-green-600">3.0% Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              The gold standard of healthcare dividends. 62 consecutive years of increases. Diversified across
              pharmaceuticals (cancer, immunology), medical devices (surgical equipment), and consumer (Band-Aid, Tylenol).
              Never cut dividend in 2008 or 2020. AAA credit rating. Perfect for conservative investors.
            </p>
            <Link href="/stocks/jnj"><Button variant="outline" size="sm">Calculate JNJ Returns →</Button></Link>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Healthcare Dividend Leaders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">Focus</th>
                    <th className="text-left p-2">Years</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Johnson & Johnson (JNJ)</td><td className="p-2 text-right">3.0%</td><td className="p-2">Diversified</td><td className="p-2">62</td></tr>
                  <tr className="border-b"><td className="p-2">AbbVie (ABBV)</td><td className="p-2 text-right">3.5%</td><td className="p-2">Pharma</td><td className="p-2">52</td></tr>
                  <tr className="border-b"><td className="p-2">Pfizer (PFE)</td><td className="p-2 text-right">5.9%</td><td className="p-2">Pharma</td><td className="p-2">14</td></tr>
                  <tr className="border-b"><td className="p-2">Merck (MRK)</td><td className="p-2 text-right">2.7%</td><td className="p-2">Pharma</td><td className="p-2">13</td></tr>
                  <tr className="border-b"><td className="p-2">Bristol Myers (BMY)</td><td className="p-2 text-right">4.5%</td><td className="p-2">Pharma</td><td className="p-2">16</td></tr>
                  <tr className="border-b"><td className="p-2">Amgen (AMGN)</td><td className="p-2 text-right">3.3%</td><td className="p-2">Biotech</td><td className="p-2">13</td></tr>
                  <tr className="border-b"><td className="p-2">Gilead Sciences (GILD)</td><td className="p-2 text-right">4.2%</td><td className="p-2">Biotech</td><td className="p-2">10</td></tr>
                  <tr><td className="p-2">CVS Health (CVS)</td><td className="p-2 text-right">4.8%</td><td className="p-2">Pharmacy</td><td className="p-2">22</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Healthcare for Dividends?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recession-Proof</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">People need medicine, surgeries, and medical devices regardless of economy. Healthcare stocks held up better than most sectors in 2008 and 2020.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aging Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Baby Boomers are 60-80 years old. Older people need more healthcare. This demographic tailwind lasts decades.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing Power</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Life-saving drugs and devices can command premium prices. Patients and insurers pay. Supports profit margins and dividends.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Build Your Healthcare Income Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">Healthcare stocks provide defensive dividends that survive recessions. Start with JNJ for safety, add ABBV for yield, mix in pharma for growth.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/jnj"><Button className="w-full" size="lg">Calculate Healthcare Returns →</Button></Link>
              <Link href="/tools/compare"><Button variant="outline" className="w-full" size="lg">Compare Healthcare Stocks →</Button></Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-dividend-stocks-for-beginners">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Best Stocks for Beginners</CardTitle>
                <CardDescription>Safe dividend payers</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/blog/best-dividend-growth-stocks-2026">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Dividend Growth Stocks</CardTitle>
                <CardDescription>Fast-growing healthcare dividends</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
