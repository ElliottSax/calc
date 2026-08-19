import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Mail, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Dividend Engines',
  description:
    'Who runs Dividend Engines, why the tools are free, and how the site is funded.',
}

// Honest by design. This page previously presented invented audience statistics
// (user counts, demographic splits, "75% have brokerage accounts") as a media kit.
// Fabricated numbers are worse than none: they are the top rejection signal in
// affiliate-network reviews and a deceptive claim to would-be partners. Everything
// below is verifiable or plainly an opinion.
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About Dividend Engines</h1>

      <p className="text-lg text-muted-foreground mb-8">
        Dividend Engines is an independent suite of free dividend-investing
        calculators — DRIP compounding, yield, growth projection, position comparison,
        and retirement income planning. No signup, no paywall; the tools run in your
        browser.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5" /> Why it exists
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Most dividend calculators either oversimplify (ignoring DRIP timing, fees,
            and tax drag) or sit behind brokerage logins. These tools aim to be the
            ones we wanted ourselves: transparent assumptions you can change, and
            results you can export.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" /> Who runs it
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            The site is built and maintained by <strong>Elliott Saxton</strong>, an
            independent developer. It is not affiliated with any brokerage, fund
            provider, or financial advisor, and nothing here is personalized financial
            advice.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5" /> How it&apos;s funded
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            The calculators are free. If we add partner links to brokerages or
            financial tools, they are clearly disclosed and never change our numbers —
            see the <a href="/affiliate-disclosure" className="underline">affiliate
            disclosure</a>. We do not sell user data; the calculators do not require
            an account.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" /> Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Corrections, questions, or partnership inquiries:{' '}
            <a href="mailto:hello@dividendengines.com" className="underline">
              hello@dividendengines.com
            </a>
            . We prioritize correction reports — if a formula or assumption looks
            wrong, we want to know.
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        All projections are estimates based on the assumptions you enter. Markets
        don&apos;t guarantee past growth rates. See the{' '}
        <a href="/disclaimer" className="underline">disclaimer</a> before making
        investment decisions.
      </p>
    </div>
  )
}
