import { EmailCapture } from '@/components/EmailCapture'

export function EmailCaptureHero() {
  return (
    <EmailCapture
      site="calc"
      supabaseUrl="https://jznljskfvhlqlshofkvd.supabase.co"
      headline="Get Weekly Dividend Investing Strategies"
      subheading="Join 8,000+ dividend investors. Weekly tips on dividend stocks, portfolio growth, and wealth building."
      bgGradient="from-green-600 to-green-800"
      theme="green"
    />
  )
}
