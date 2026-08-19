'use client'

import dynamic from 'next/dynamic'

// chart.js touches the DOM on load, which trips static prerendering if it's
// server-rendered. ssr:false has to live in a Client Component, hence this
// thin wrapper instead of calling next/dynamic directly from the page.
export const FourZeroOneKCalculatorLazy = dynamic(
  () => import('./FourZeroOneKCalculator').then(m => m.FourZeroOneKCalculator),
  { ssr: false }
)
