import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Download } from 'lucide-react'
import {
  GUIDE_TITLE,
  GUIDE_SUBTITLE,
  GUIDE_FRONT_MATTER,
  GUIDE_CHAPTERS,
  type GuideBlock,
} from '@/lib/guide/toolkit-content'

export const metadata: Metadata = {
  title: `${GUIDE_TITLE} | Read Online Free`,
  description:
    'The full Dividend Investor&apos;s Toolkit, free to read in your browser: dividend mechanics, yield traps, payout ratios, DRIP compounding, screening, tax treatment and the mistakes that cost most.',
}

// Renders the same content module the PDF is generated from, so the two can never
// disagree. This page is also why the funnel no longer depends on a download or a
// mail provider working -- there is always a way to actually read the thing.
function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{block.text}</p>
    case 'ul':
      return (
        <ul className="list-disc pl-6 space-y-2 mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          {block.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal pl-6 space-y-2 mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          {block.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    case 'formula':
      return (
        <div className="my-5 rounded-lg bg-blue-50 dark:bg-blue-900/20 px-5 py-4 text-center font-semibold text-blue-700 dark:text-blue-300">
          {block.text}
        </div>
      )
    case 'note':
      return (
        <div className="my-5 border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 leading-relaxed">
          {block.text}
        </div>
      )
    default:
      return null
  }
}

export default function ReadGuidePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{GUIDE_TITLE}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{GUIDE_SUBTITLE}</p>
          <a
            href="/dividend-investors-toolkit.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download as PDF
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Before you start</h2>
          {GUIDE_FRONT_MATTER.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>

        <nav className="mb-12 rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
          <h2 className="text-xl font-bold mb-4">Contents</h2>
          <ol className="space-y-2">
            {GUIDE_CHAPTERS.map((ch) => (
              <li key={ch.number}>
                <a href={`#chapter-${ch.number}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {ch.number}. {ch.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {GUIDE_CHAPTERS.map((ch) => (
          <section key={ch.number} id={`chapter-${ch.number}`} className="mb-12 scroll-mt-24">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Chapter {ch.number}
            </p>
            <h2 className="text-3xl font-bold mb-5 pb-3 border-b border-gray-200 dark:border-gray-700">
              {ch.title}
            </h2>
            {ch.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </section>
        ))}

        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Run the numbers on your own portfolio</h2>
          <p className="mb-5 opacity-90">
            Every calculator referenced in this guide is free and needs no account.
          </p>
          <Link
            href="/calculators"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
          >
            Open the calculators
          </Link>
        </div>
      </main>
    </>
  )
}
