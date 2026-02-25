import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Download, Mail, Calculator, BookOpen, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You - Your Guide is Ready to Download',
  description: 'Download the Dividend Investor\'s Toolkit and start building your portfolio today.',
  robots: 'noindex, nofollow'
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">You're All Set!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Check your email for the download link. It should arrive within 2-3 minutes.
          </p>
        </div>

        {/* Download Card */}
        <Card className="mb-8 border-2 border-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Download Your Guide</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Can't wait? Download the Dividend Investor's Toolkit directly:
                </p>
                <Button size="lg" className="bg-blue-600">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Now (3.2 MB)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Check */}
        <Card className="mb-12 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Don't See the Email?</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Check your spam/promotions folder</li>
                  <li>• Add noreply@calc-app.com to your contacts</li>
                  <li>• Wait 2-3 minutes for delivery</li>
                  <li>• Still nothing? Email us at support@calc-app.com</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">What to Do Next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Read the Guide</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Start with Chapter 1 to understand DRIP investing fundamentals
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Use the Calculators</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Model your exact portfolio scenario with our free tools
                  </p>
                  <Link href="/calculators/drip">
                    <Button variant="outline" size="sm">Try DRIP Calculator</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Choose a Broker</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Compare top DRIP brokers and get signup bonuses
                  </p>
                  <Link href="/tools/compare">
                    <Button variant="outline" size="sm">Compare Brokers</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Resources */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Recommended Reading</h3>
            <div className="space-y-3">
              <Link href="/blog/drip-investing-for-beginners-2026" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold mb-1">DRIP Investing for Beginners 2026</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete starting guide with step-by-step instructions</p>
              </Link>
              <Link href="/blog/dividend-aristocrats-complete-list-2026" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold mb-1">Dividend Aristocrats Complete List 2026</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">68 stocks with 25+ years of dividend growth</p>
              </Link>
              <Link href="/blog/best-drip-brokers-comparison-2026" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold mb-1">Best DRIP Brokers Comparison 2026</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the perfect broker for your dividend strategy</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Know someone who needs this guide?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Share it with a friend who wants to start dividend investing
          </p>
          <Button variant="outline">
            Share This Guide
          </Button>
        </div>
      </main>
    </>
  )
}
