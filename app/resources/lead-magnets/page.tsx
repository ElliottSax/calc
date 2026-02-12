import { Metadata } from 'next'
import { LeadMagnetsPage } from './LeadMagnetsPage'

export const metadata: Metadata = {
  title: 'Free Investing Guides & Ebooks | Download Now',
  description:
    'Download free investing guides on financial freedom, wealth building, and smart decision-making. ' +
    'Expert-written content to help you build lasting wealth through dividend investing.',
  keywords: [
    'free investing guide',
    'financial freedom ebook',
    'wealth building guide',
    'dividend investing guide',
    'free financial education',
    'investing for beginners',
    'compound interest guide',
  ],
  openGraph: {
    title: 'Free Investing Guides -- Build Wealth with Expert Knowledge',
    description:
      'Download expert-written guides on financial freedom, wealth building, and investing psychology. 100% free.',
    images: ['/og-lead-magnets.png'],
  },
}

export default function Page() {
  return <LeadMagnetsPage />
}
