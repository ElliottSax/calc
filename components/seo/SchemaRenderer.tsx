'use client';

/**
 * Schema Renderer Components for Calc Site
 * Renders JSON-LD schema markup for SEO
 */

/**
 * Generic Schema Renderer
 * Place in <head> of your page using Next.js Head or layout
 */
export function SchemaRenderer({ schema }: { schema: Record<string, any> }) {
  if (!schema || Object.keys(schema).length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
      suppressHydrationWarning
    />
  );
}

/**
 * SoftwareApplication Schema Component
 * Use for calculator tools
 */
export function SoftwareApplicationSchema({
  name,
  description,
  url,
  image,
  applicationCategory,
  ratingValue,
  reviewCount,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  applicationCategory: 'FinanceApplication' | 'Productivity' | 'Utilities';
  ratingValue?: number;
  reviewCount?: number;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: url,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    applicationCategory: `https://schema.org/${applicationCategory}`,
    operatingSystem: 'Web',
    ...(ratingValue &&
      reviewCount && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: ratingValue.toString(),
          reviewCount: reviewCount.toString(),
          bestRating: '5',
          worstRating: '1',
        },
      }),
    author: {
      '@type': 'Organization',
      name: 'Dividend Calculator Pro',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * HowTo Schema Component
 * Use for step-by-step guides and calculator instructions
 */
export function HowToSchema({
  name,
  description,
  image,
  steps,
  estimatedTime,
}: {
  name: string;
  description: string;
  image?: string;
  steps: Array<{
    name: string;
    description: string;
    image?: string;
  }>;
  estimatedTime?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
        width: 1200,
        height: 630,
      },
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.description,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image,
          width: 800,
          height: 600,
        },
      }),
    })),
    ...(estimatedTime && {
      totalTime: estimatedTime,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * Article Schema Component
 * Use for blog posts
 */
export function ArticleSchema({
  title,
  description,
  body,
  author,
  datePublished,
  dateModified,
  image,
  url,
  keywords,
  articleSection,
}: {
  title: string;
  description: string;
  body: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  keywords?: string[];
  articleSection?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image || 'https://dividendcalculator.pro/og-image.jpg',
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dividend Calculator Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dividendcalculator.pro/logo.png',
        width: 250,
        height: 60,
      },
    },
    articleBody: body,
    keywords: keywords?.join(', ') || title,
    ...(articleSection && {
      articleSection: articleSection,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * FAQPage Schema Component
 * Use for FAQ pages
 */
export function FAQPageSchema({
  faqs,
}: {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * Guide Schema Component
 * Use for comprehensive guides
 */
export function GuideSchema({
  title,
  description,
  url,
  image,
  datePublished,
  author,
  steps,
  estimatedTime,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  author: string;
  steps: Array<{
    position: number;
    name: string;
    text: string;
  }>;
  estimatedTime?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Guide',
    name: title,
    description: description,
    url: url,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
        width: 1200,
        height: 630,
      },
    }),
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dividend Calculator Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dividendcalculator.pro/logo.png',
      },
    },
    ...(estimatedTime && {
      timeRequired: estimatedTime,
    }),
    step: steps,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * Organization Schema Component
 * Use on homepage or in layout
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Dividend Calculator Pro',
    url: 'https://dividendcalculator.pro',
    logo: 'https://dividendcalculator.pro/logo.png',
    description: 'Free dividend calculator suite with 5 powerful tools for dividend investing.',
    sameAs: [
      'https://twitter.com/dividendcalcpro',
      'https://facebook.com/dividendcalculator',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@dividendcalculator.pro',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3200',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * BreadcrumbList Schema Component
 * Use for navigation trails
 */
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `https://dividendcalculator.pro${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * WebSite Schema Component
 * Use on layout
 */
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://dividendcalculator.pro',
    name: 'Dividend Calculator Pro',
    description: 'Free dividend calculator suite with 5 powerful tools.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dividendcalculator.pro/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

/**
 * AggregateRating Schema Component
 * Use for overall ratings
 */
export function AggregateRatingSchema({
  itemName,
  ratingValue,
  reviewCount,
  url,
}: {
  itemName: string;
  ratingValue: number;
  reviewCount: number;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: itemName,
      url: url,
    },
    ratingValue: ratingValue.toFixed(1),
    bestRating: '5',
    worstRating: '1',
    reviewCount: reviewCount.toString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
