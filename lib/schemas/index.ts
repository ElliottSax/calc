/**
 * Comprehensive Schema.org Markup Library for Calc Site
 * Includes SoftwareApplication, HowTo, Article, FAQPage, AggregateRating schemas
 */

export interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  applicationCategory: 'FinanceApplication' | 'Productivity' | 'Utilities';
  operatingSystem: 'Web';
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  steps: Array<{
    name: string;
    description: string;
    image?: string;
    url?: string;
  }>;
  estimatedTime?: string;
  tools?: string[];
  supplies?: string[];
}

export interface ArticleSchemaProps {
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
}

export interface FAQPageSchemaProps {
  mainEntity?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface GuideSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  author: string;
  estimatedTime?: string;
  steps: Array<{
    position: number;
    name: string;
    text: string;
  }>;
}

/**
 * SoftwareApplication Schema - For Calculator Tools
 * Displays application info in search results and app listings
 */
export function generateSoftwareApplicationSchema(
  props: SoftwareApplicationSchemaProps
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    description: props.description,
    url: props.url,
    image: {
      '@type': 'ImageObject',
      url: props.image,
      width: 1200,
      height: 630,
    },
    applicationCategory: `https://schema.org/${props.applicationCategory}`,
    operatingSystem: props.operatingSystem,
    ...(props.offers && {
      offers: {
        '@type': 'Offer',
        price: props.offers.price || '0',
        priceCurrency: props.offers.priceCurrency || 'USD',
        availability: props.offers.availability || 'https://schema.org/InStock',
      },
    }),
    ...(props.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: props.aggregateRating.ratingValue.toString(),
        reviewCount: props.aggregateRating.reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    }),
    author: {
      '@type': 'Organization',
      name: 'Dividend Calculator Pro',
      url: 'https://dividendcalculator.pro',
    },
  };
}

/**
 * HowTo Schema - For Calculator Guides
 * Google displays HowTo snippets prominently in search results
 */
export function generateHowToSchema(props: HowToSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    ...(props.image && {
      image: {
        '@type': 'ImageObject',
        url: props.image,
        width: 1200,
        height: 630,
      },
    }),
    step: props.steps.map((step, index) => ({
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
      url: step.url,
    })),
    ...(props.estimatedTime && {
      totalTime: props.estimatedTime,
    }),
    ...(props.tools &&
      props.tools.length > 0 && {
        tool: props.tools.map((tool) => ({
          '@type': 'HowToTool',
          name: tool,
        })),
      }),
    ...(props.supplies &&
      props.supplies.length > 0 && {
        supply: props.supplies.map((supply) => ({
          '@type': 'HowToSupply',
          name: supply,
        })),
      }),
  };
}

/**
 * Article Schema - For Blog Posts and Guides
 * Helps Google display rich snippets and featured snippets
 */
export function generateArticleSchema(props: ArticleSchemaProps) {
  const wordCount = props.body.split(/\s+/).length;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': props.url,
    headline: props.title,
    alternativeHeadline: props.description.slice(0, 110),
    description: props.description,
    image: {
      '@type': 'ImageObject',
      url: props.image || 'https://dividendcalculator.pro/og-image.jpg',
      width: 1200,
      height: 630,
    },
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      '@type': 'Person',
      name: props.author,
      url: 'https://dividendcalculator.pro',
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
    mainEntity: {
      '@id': props.url,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Dividend Calculator Pro',
      url: 'https://dividendcalculator.pro',
    },
    inLanguage: 'en-US',
    wordCount: wordCount,
    articleBody: props.body,
    keywords: props.keywords?.join(', ') || props.title,
    ...(props.articleSection && {
      articleSection: props.articleSection,
    }),
    speakable: {
      '@type': 'SpeakableSpecification',
      xPath: ['/html/head/title', '/html/body/p[1]'],
    },
  };
}

/**
 * FAQPage Schema - For FAQ Pages
 * Google displays FAQ results directly in search results
 */
export function generateFAQPageSchema(props: FAQPageSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: {
      '@type': 'FAQPage',
      name: props.mainEntity || 'Frequently Asked Questions',
    },
    mainEntity: props.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Guide Schema - For Educational Guides
 * Displays in Knowledge Panels and featured snippets
 */
export function generateGuideSchema(props: GuideSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Guide',
    name: props.title,
    description: props.description,
    url: props.url,
    ...(props.image && {
      image: {
        '@type': 'ImageObject',
        url: props.image,
        width: 1200,
        height: 630,
      },
    }),
    datePublished: props.datePublished,
    author: {
      '@type': 'Person',
      name: props.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dividend Calculator Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dividendcalculator.pro/logo.png',
      },
    },
    ...(props.estimatedTime && {
      timeRequired: props.estimatedTime,
    }),
    step: props.steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.position,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Organization Schema - For Homepage
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://dividendcalculator.pro/#organization',
    name: 'Dividend Calculator Pro',
    alternateName: 'DividendCalc',
    url: 'https://dividendcalculator.pro',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dividendcalculator.pro/logo.png',
      width: 250,
      height: 60,
    },
    description: 'Free dividend calculator suite with 5 powerful tools for dividend investing and financial independence.',
    sameAs: [
      'https://twitter.com/dividendcalcpro',
      'https://facebook.com/dividendcalculator',
      'https://linkedin.com/company/dividend-calculator-pro',
      'https://instagram.com/dividendcalcpro',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'support@dividendcalculator.pro',
        availableLanguage: ['en'],
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3200',
      bestRating: '5',
      worstRating: '1',
    },
    foundingDate: '2024',
    knowsAbout: [
      'Dividend Investing',
      'Financial Independence',
      'Stock Market',
      'DRIP',
      'Retirement Planning',
      'Passive Income',
    ],
  };
}

/**
 * AggregateRating Schema - For Overall Ratings
 */
export function generateAggregateRatingSchema(
  itemName: string,
  ratingValue: number,
  reviewCount: number,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': `${url}#aggregate-rating`,
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
}

/**
 * BreadcrumbList Schema - For Navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
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
}

/**
 * WebSite Schema - For Site-wide Search
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://dividendcalculator.pro',
    name: 'Dividend Calculator Pro',
    description: 'Free dividend calculator suite with 5 powerful tools for dividend investing.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dividendcalculator.pro/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Tool/Widget Schema - For Interactive Tools
 */
export function generateToolSchema(
  name: string,
  description: string,
  url: string,
  ratingValue?: number,
  reviewCount?: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: url,
    applicationCategory: 'FinanceApplication',
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
  };
}
