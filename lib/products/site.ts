import { SITE as MAIN } from '@/lib/site';

/** Settings for the products section (cxworks.com/products/). Override with environment variables (see .env.example). */
export const BASE_PATH = '/products/';

export const SITE = {
  name: 'CXWorks Products',
  url: MAIN.url,
  /** Sent with form sign-ups as `source` / `utm_source`. */
  host: new URL(MAIN.url).host + '/products',
  title: 'CXWorks Products — NUARK & QueryPrism',
  description:
    'NUARK, the chat-based AI agent for ecommerce teams, and QueryPrism, SEO, AEO and GEO content intelligence. Built by CXWorks.',
  locale: MAIN.locale,
  themeColor: MAIN.themeColor,
  searchConsoleVerification: MAIN.searchConsoleVerification,
};

/** Links and form endpoints the pages use (passed to the page logic as props). */
export const PRODUCT_LINKS = {
  queryPrismTrialUrl: process.env.NEXT_PUBLIC_QUERYPRISM_TRIAL_URL || 'https://app.queryprism.ai',
  nuarkUrl: process.env.NEXT_PUBLIC_NUARK_URL || 'https://nuark.ai/',
  queryPrismSignupEndpoint: process.env.NEXT_PUBLIC_QUERYPRISM_SIGNUP_ENDPOINT || 'https://formspree.io/f/moeeqbyr',
  nuarkWaitlistEndpoint: process.env.NEXT_PUBLIC_NUARK_WAITLIST_ENDPOINT || 'https://formspree.io/f/moeeqbyr',
  contactUrl: '/contact-us/',
  insightsUrl: '/insights/',
};

/** In-page sections that also have their own URL (e.g. /products/about/ scrolls the products home to #about). */
export const SECTION_ROUTES = {
  home: ['products', 'showcase', 'ecosystem', 'about', 'compare', 'waitlist'],
  nuark: ['agents', 'interface', 'workflow', 'architecture', 'nuark-waitlist'],
  'query-prism': ['how', 'app', 'fanout', 'coverage', 'serp', 'clusters', 'recovery', 'trial'],
} as const;
