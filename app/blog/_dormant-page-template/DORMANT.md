# Dormant: blog page-template

**Moved here:** 2026-09-06, during a dead-code sweep.

`page-template.tsx` is not a Next.js route file (it isn't named `page.tsx`), and
nothing imports it. It only exists as a hand-authored reference template for
the `lib/blog/_dormant-legacy-system/articles-manifest.ts` blog system — a
parallel blog pipeline that was never wired into the live site. The live blog
is served by `app/blog/[id]/page.tsx` from `content/blog/*.md`.

**Decision needed:** finish-and-launch (build a real route around this
template + the manifest data, if the "50 SEO articles" content it references
is ever revived) or delete both this file and
`lib/blog/_dormant-legacy-system/`. Until decided, leave dormant — do not
delete outright.
