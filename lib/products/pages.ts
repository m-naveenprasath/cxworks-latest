import type { Metadata } from 'next';
import { SECTION_ROUTES, SITE } from '@/lib/products/site';

type PageKey = keyof typeof SECTION_ROUTES;

const PAGES: Record<PageKey, { path: string; title: string; description: string }> = {
  home: {
    path: '/products/',
    title: SITE.title,
    description: SITE.description,
  },
  nuark: {
    path: '/products/nuark/',
    title: 'NUARK — the chat-based AI agent for ecommerce teams',
    description:
      'One conversation to ask, analyse and act. NUARK brings 34 live agents across catalogue, commerce health, ads, content, SEO and pricing into a single chat. Join the waitlist.',
  },
  'query-prism': {
    path: '/products/query-prism/',
    title: 'QueryPrism — find the questions your site doesn’t answer yet',
    description:
      'QueryPrism fans a seed query out across intent, scores your coverage, and turns gaps into briefs and drafts that rank and get cited in AI search. Start a free trial.',
  },
};

/** Metadata for a product page. Section URLs (/products/nuark/agents/ …) point their canonical at the page itself. */
export function pageMetadata(key: PageKey): Metadata {
  const p = PAGES[key];
  return {
    title: key === 'home' ? { absolute: p.title } : p.title,
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: { url: p.path, title: p.title, description: p.description },
  };
}

export function sectionParams(key: PageKey) {
  return SECTION_ROUTES[key].map((section) => ({ section }));
}

export const PAGE_PATHS = Object.values(PAGES).map((p) => p.path);
