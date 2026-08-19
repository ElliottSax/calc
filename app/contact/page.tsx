import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// Icons limited to ones this repo's lucide-react version actually exports --
// a missing icon is only a build *warning* at compile, then a hard prerender crash.
import { AlertCircle, Mail, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Dividend Engines',
  description:
    'How to reach Dividend Engines: corrections, general questions, privacy requests, and partnership inquiries.',
}

// Same address already published on /about. One inbox, stated consistently --
// affiliate-network reviewers check that a contact route exists and resolves.
const EMAIL = 'hello@dividendengines.com'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-lg text-muted-foreground mb-8">
        The site is run by one person, so email is the only channel — there is no
        phone line and no live chat. Write to{' '}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>{' '}
        and it will be read.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="h-5 w-5" /> Corrections
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            These get priority. If a formula, default assumption, or figure in an
            article looks wrong, tell us which calculator or page and what you expected
            instead. We would rather fix it than defend it.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" /> Questions about the tools
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Happy to explain what a calculator does and what it assumes. What we
            can&apos;t do is tell you what to buy, review your portfolio, or give
            personalized financial advice — see the{' '}
            <a href="/disclaimer" className="underline">
              disclaimer
            </a>
            .
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" /> Privacy requests
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            To unsubscribe, or to ask what data we hold and have it deleted, email the
            address above. The calculators need no account and run in your browser; the{' '}
            <a href="/privacy" className="underline">
              privacy policy
            </a>{' '}
            sets out what is actually collected.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5" /> Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Brokerages, tool providers, and networks are welcome to get in touch. Any
            partner link is disclosed and never changes a calculator&apos;s output —
            our{' '}
            <a href="/affiliate-disclosure" className="underline">
              affiliate disclosure
            </a>{' '}
            explains the arrangement.
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        We are an independent site, not affiliated with any brokerage or fund provider.
        Please don&apos;t send account numbers, passwords, or other sensitive financial
        details by email — we never need them.
      </p>
    </div>
  )
}
