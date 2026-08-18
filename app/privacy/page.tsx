import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dividend Calculator Pro',
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Dividend Calculator Pro is designed to work without collecting personal information. The calculators run in your browser; the numbers you enter are not transmitted to or stored on our servers.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">What we collect</h2>
      <p className="text-muted-foreground mb-4">Standard, anonymized web analytics (pages visited, approximate region, device type) to understand which tools are used. We do not collect names, emails, or financial account information, and there are no user accounts.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>
      <p className="text-muted-foreground mb-4">The site may set functional cookies (for example, remembering your theme) and analytics cookies. You can block cookies in your browser without breaking the calculators.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Third parties</h2>
      <p className="text-muted-foreground mb-4">If you follow a partner link to a brokerage or financial service, that site&apos;s own privacy policy applies from that point. We recommend reading it. See our <a href="/affiliate-disclosure" className="underline">affiliate disclosure</a> for how partner links work.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Your rights (GDPR / CCPA)</h2>
      <p className="text-muted-foreground mb-4">Because we hold no personal data about you, there is generally nothing to access, correct, or delete. If you believe we hold something about you, email us and we will resolve it.</p>
      <p className="text-sm text-muted-foreground mt-10">Last updated: August 18, 2026 · Questions: <a href="mailto:support@dividendcalculator.pro" className="underline">support@dividendcalculator.pro</a></p>
    </div>
  )
}
