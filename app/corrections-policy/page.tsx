import { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corrections Policy - Dividend Engines',
  description: 'How to report errors and corrections in Dividend Engines calculators. We take accuracy seriously and quickly verify and address all reported issues.',
  keywords: [
    'corrections policy',
    'error reporting',
    'calculator accuracy',
    'data corrections',
    'feedback'
  ],
  openGraph: {
    title: 'Corrections Policy - Dividend Engines',
    description: 'Transparent process for reporting and addressing calculator errors',
    type: 'website',
    url: 'https://dividendengines.com/corrections-policy',
  },
  alternates: {
    canonical: 'https://dividendengines.com/corrections-policy'
  }
}

export default function CorrectionsPolicyPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 pt-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-300/50 dark:border-blue-700/50 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                QUALITY ASSURANCE
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              Corrections{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              We're committed to providing the most accurate calculators and financial information available.
              If you find an error or have a correction, we want to hear from you immediately and will address it promptly.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Full Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Community-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* How to Report */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How to Report an Error</CardTitle>
                <CardDescription>We make it easy to submit corrections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Email Your Report</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        Send an email to <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm">corrections@dividendengines.com</span>
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        Include: calculator name, specific error, how to reproduce it, and your correction suggestion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Provide Details</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        The more details you provide, the faster we can verify and fix the issue.
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        Example: "DRIP Calculator shows incorrect results for dividend growth rate"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">We Verify</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        Our team will verify your report against official sources within 24 hours.
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        You'll receive an email confirming receipt and initial assessment
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">We Fix & Report</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        Confirmed errors are fixed within 48 hours. Updates are posted publicly.
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        You'll be credited for the correction if you'd like
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Types of Corrections */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Types of Corrections We Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-semibold text-green-900 dark:text-green-100">Calculation Errors</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Incorrect formulas, mathematical errors, or wrong results in any calculator
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Data Accuracy</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Outdated IRS limits, incorrect Treasury rates, or wrong market data
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100">Documentation Issues</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Misleading explanations, unclear instructions, or missing information
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100">Assumption Problems</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Invalid default values, unrealistic assumptions, or outdated guidelines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Review Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Hours 0-1: Initial Assessment
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 ml-7">
                      We log your report and perform an initial review to understand the issue.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Hours 1-4: Verification
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 ml-7">
                      We verify the issue against official sources (IRS, Treasury, SEC, etc.). You receive acknowledgment.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Hours 4-24: Decision
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 ml-7">
                      We determine if the issue is valid and prepare a fix or explanation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Hours 24-48: Implementation
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 ml-7">
                      Confirmed errors are fixed and deployed. A public correction notice is posted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Day 2+: Transparency
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 ml-7">
                      The correction is documented in our corrections log with full details and the reporter's name (if desired).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Happens to Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What Happens to Your Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Error Confirmed
                    </h3>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      We fix the issue, update the calculator, and post a public correction notice crediting you
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Already Correct
                    </h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      We explain our methodology and data sources. Your feedback helps us improve documentation
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Needs Clarification
                    </h3>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      We ask follow-up questions to better understand your concern and verify the issue
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Minor Issue
                    </h3>
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      We document minor issues and address them in future updates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Corrections Log */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Corrections Log</CardTitle>
                <CardDescription>Transparency in action</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  All confirmed corrections are logged publicly. Here's what we track:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 space-y-3 font-mono text-sm">
                  <div className="space-y-1 text-slate-700 dark:text-slate-300">
                    <p>• <strong>Date:</strong> When the issue was reported and confirmed</p>
                    <p>• <strong>Calculator:</strong> Which calculator was affected</p>
                    <p>• <strong>Issue Type:</strong> Calculation error, data, documentation, etc.</p>
                    <p>• <strong>Description:</strong> What was wrong and how it was fixed</p>
                    <p>• <strong>Reporter:</strong> Name and email (with permission)</p>
                    <p>• <strong>Status:</strong> Fixed, In Progress, Documentation Updated</p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Link href="/data-sources" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                    View Corrections Log →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Credit */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Your Privacy & Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Your Privacy</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    Your email address is never shared or used for marketing. We only use it to respond to your correction.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>You control whether your name appears in the corrections log</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>We never sell or share your contact information</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Your full report is kept private unless you consent to publication</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-white">Giving You Credit</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    For significant corrections, we can:
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Credit you by name in the corrections log</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Add you to our Accuracy Contributors list (with permission)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Feature your correction in our monthly accuracy report</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-2 border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20">
              <CardHeader>
                <CardTitle>Found an Error?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  Help us maintain the highest standards of accuracy. Report any issues you find.
                </p>
                <div className="flex gap-3">
                  <a
                    href="mailto:corrections@dividendengines.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Email Correction
                  </a>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  Expected response time: Within 24 hours
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
