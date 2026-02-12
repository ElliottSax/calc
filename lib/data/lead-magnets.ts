/**
 * Lead Magnet Data -- Cross-Project Integration
 *
 * This data is sourced from BookCLI's nonfiction book pipeline.
 * BookCLI generates full-length books; this file contains metadata
 * and preview excerpts packaged as gated lead magnets for email capture.
 *
 * Source: /mnt/e/projects/bookcli/scripts/package_lead_magnets.py
 * Integration: BookCLI (content generation) -> Calc (affiliate site)
 *
 * Each lead magnet offers 2-3 free preview chapters in exchange for
 * an email address. The full book drives readers to affiliate links
 * or to purchase from Amazon KDP.
 */

export interface LeadMagnet {
  id: string
  title: string
  subtitle: string
  description: string
  descriptionLong: string
  previewChapters: number
  totalChapters: number
  previewWords: number
  totalWords: number
  readTimeMinutes: number
  keywords: string[]
  tags: string[]
  audience: string
  comparableTitles: string[]
  /** Value proposition shown on the card */
  valueProposition: string
  /** What the reader gets */
  benefits: string[]
  /** Color theme for the card */
  theme: 'blue' | 'green' | 'purple' | 'orange'
  /** Icon name from lucide-react */
  icon: 'DollarSign' | 'TrendingUp' | 'Rocket' | 'Brain'
  /** Whether this is featured prominently */
  featured: boolean
}

export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    id: 'financial-freedom-blueprint',
    title: 'Financial Freedom Blueprint',
    subtitle: 'Your Step-by-Step Path to Wealth, Starting Today',
    description:
      'Stop dreaming of financial freedom. This blueprint shows you exactly how to achieve it, no matter what you earn.',
    descriptionLong:
      'Master the psychology of wealth, demolish debt strategically, and build a compounding wealth engine. ' +
      'Based on behavioral economics and proven strategies used by those who achieved financial independence from middle-class starts.',
    previewChapters: 3,
    totalChapters: 10,
    previewWords: 3863,
    totalWords: 27123,
    readTimeMinutes: 15,
    keywords: [
      'financial independence',
      'debt free',
      'budgeting',
      'personal finance',
      'wealth building',
    ],
    tags: ['financial-freedom', 'wealth-building', 'personal-finance'],
    audience: 'dividend investors',
    comparableTitles: [
      'The Total Money Makeover by Dave Ramsey',
      'I Will Teach You to Be Rich by Ramit Sethi',
      'The Simple Path to Wealth by JL Collins',
    ],
    valueProposition: 'The exact system used by those who built wealth from scratch',
    benefits: [
      'Rewire your brain for wealth with proven mindset shifts',
      'Get a clear Financial X-Ray of your current situation',
      'Deploy the Debt Demolition Strategy to eliminate debt fast',
      'Build your Income Acceleration Engine for compound growth',
    ],
    theme: 'blue',
    icon: 'DollarSign',
    featured: true,
  },
  {
    id: 'the-wealth-equation',
    title: 'The Wealth Equation',
    subtitle: 'Unlock the Proven Formula for Financial Freedom',
    description:
      'Stop guessing with money. Master the timeless principles and modern systems to build lasting wealth, automatically.',
    descriptionLong:
      'A complete system that combines the right wealth mindset with proven financial architecture. ' +
      'From mastering cash flow to automating your compounding wealth engine, this is the formula that turns abstract principles into actionable strategies.',
    previewChapters: 3,
    totalChapters: 10,
    previewWords: 4235,
    totalWords: 26120,
    readTimeMinutes: 17,
    keywords: [
      'wealth building',
      'financial freedom',
      'personal finance',
      'investing for beginners',
      'compound interest',
    ],
    tags: ['wealth-building', 'investing', 'compound-interest'],
    audience: 'beginner investors',
    comparableTitles: [
      'The Psychology of Money by Morgan Housel',
      'I Will Teach You to Be Rich by Ramit Sethi',
      'The Simple Path to Wealth by JL Collins',
    ],
    valueProposition: 'The complete equation for building wealth on autopilot',
    benefits: [
      'Understand the psychology that separates wealthy from broke',
      'Master your personal cash flow like a CFO',
      'Learn the strategic use of debt (yes, good debt exists)',
      'Build an automated compounding wealth engine',
    ],
    theme: 'green',
    icon: 'TrendingUp',
    featured: true,
  },
  {
    id: 'the-decision-architect',
    title: 'The Decision Architect',
    subtitle: 'Design Better Choices and Build a Sharper Mind',
    description:
      'Stop letting hidden biases sabotage your investment decisions. Learn the mental models used by top investors.',
    descriptionLong:
      'Every investment decision you make is silently influenced by cognitive biases. ' +
      'This book reveals the hidden mental traps that cause bad trades and teaches you the mental models used by the best analytical thinkers.',
    previewChapters: 2,
    totalChapters: 10,
    previewWords: 3852,
    totalWords: 24018,
    readTimeMinutes: 15,
    keywords: [
      'cognitive biases',
      'decision making',
      'mental models',
      'critical thinking',
      'behavioral economics',
    ],
    tags: ['decision-making', 'investing-psychology', 'mental-models'],
    audience: 'analytical thinkers',
    comparableTitles: [
      'Thinking, Fast and Slow by Daniel Kahneman',
      'Super Thinking by Gabriel Weinberg',
      'The Great Mental Models by Shane Parrish',
    ],
    valueProposition: 'The cognitive toolkit that transforms how you invest',
    benefits: [
      'Identify the 12 biases that cost investors the most money',
      'Build a personal decision framework for every trade',
      'Learn when to trust intuition vs. when to analyze deeply',
      'Apply mental models used by Buffett, Munger, and Dalio',
    ],
    theme: 'purple',
    icon: 'Brain',
    featured: false,
  },
  {
    id: 'zero-to-scale',
    title: 'Zero to Scale',
    subtitle: 'The Proven Path from Startup Idea to Market Leader',
    description:
      'Go from zero to market dominance with a proven, step-by-step framework for building a business that customers need.',
    descriptionLong:
      '75% of startups fail because they build something nobody wants. ' +
      'This book provides the battlefield-tested framework to validate your idea, find your first 100 customers, and scale predictably.',
    previewChapters: 2,
    totalChapters: 10,
    previewWords: 3823,
    totalWords: 26339,
    readTimeMinutes: 15,
    keywords: [
      'business startup',
      'entrepreneurship',
      'scale business',
      'lean startup',
      'business growth',
    ],
    tags: ['entrepreneurship', 'business-growth', 'startup'],
    audience: 'entrepreneurs',
    comparableTitles: [
      'The Lean Startup by Eric Ries',
      'Traction by Gabriel Weinberg',
      '$100M Offers by Alex Hormozi',
    ],
    valueProposition: 'The startup playbook that turns ideas into income',
    benefits: [
      'Validate your business idea before spending a dollar',
      'Find your first 100 paying customers in 30 days',
      'Build systems that scale without burning out',
      'Learn the guerrilla marketing tactics that work in 2026',
    ],
    theme: 'orange',
    icon: 'Rocket',
    featured: false,
  },
]

/**
 * Get lead magnets filtered by tag
 */
export function getLeadMagnetsByTag(tag: string): LeadMagnet[] {
  return LEAD_MAGNETS.filter((lm) => lm.tags.includes(tag))
}

/**
 * Get featured lead magnets
 */
export function getFeaturedLeadMagnets(): LeadMagnet[] {
  return LEAD_MAGNETS.filter((lm) => lm.featured)
}

/**
 * Get a single lead magnet by ID
 */
export function getLeadMagnetById(id: string): LeadMagnet | undefined {
  return LEAD_MAGNETS.find((lm) => lm.id === id)
}
