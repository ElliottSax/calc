'use client'

import { useEffect, useState } from 'react'

export function SkipLinks() {
  const [sections, setSections] = useState<Array<{ id: string; label: string }>>([])

  useEffect(() => {
    // Dynamically find main content sections
    const mainSections = [
      { id: 'main-content', label: 'Skip to main content' },
      { id: 'calculator', label: 'Skip to calculator' },
      { id: 'navigation', label: 'Skip to navigation' },
      { id: 'footer', label: 'Skip to footer' },
    ]

    const availableSections = mainSections.filter(section =>
      document.getElementById(section.id)
    )

    setSections(availableSections)
  }, [])

  return (
    <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-0 focus-within:left-0 focus-within:z-[9999] focus-within:p-4 focus-within:bg-white focus-within:shadow-xl">
      <nav aria-label="Skip links">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(section.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    element.focus({ preventScroll: true })
                  }
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}