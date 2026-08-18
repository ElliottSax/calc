// Testimonials removed 2026-08-18.
//
// This file previously shipped four invented testimonials attributed to named
// people ("Sarah M., Retail Investor", "Michael Chen, Financial Analyst", ...)
// making specific financial claims — one said they were living off $4,200/month
// in dividend income "thanks to" these tools. None of those people or results
// exist.
//
// Fabricated endorsements are a direct FTC problem (16 CFR 255 governs
// endorsements and testimonials), they are the top rejection signal in affiliate
// network review, and inventing investment outcomes on a YMYL finance site is
// the worst version of it.
//
// Both exports are kept as no-op renders so every existing import keeps working;
// when real, permissioned testimonials exist, they can be restored here.

export function Testimonials() {
  return null
}

export function CompactTestimonials() {
  return null
}
