/* eslint-disable */
// @ts-nocheck -- ported as-is from the original design's logic.
import React from 'react';
import { DCLogic } from '@/lib/products/dc-logic';
import { BASE_PATH, SITE } from '@/lib/products/site';

/**
 * All behaviour and content data for the products site: routing between Home / NUARK / QueryPrism,
 * demo animations, menus, and the sign-up forms (Formspree).
 *
 * Product copy that appears in lists (agents, demo chats, topics, comparison rows…) lives in the
 * UPPERCASE arrays below; edit it here. Headline copy lives in the components under components/views.
 * Endpoints and URLs arrive as props, set from environment variables in lib/site.ts.
 */
export class ProductsLogic extends DCLogic {
  // ---- Configuration (also exposed as props / Tweaks) ----
  cfg() {
    const p = this.props;
    return {
      QUERY_PRISM_TRIAL_URL: p.queryPrismTrialUrl || 'https://app.queryprism.ai',
      FORMSPREE_ENDPOINT: 'https://formspree.io/f/moeeqbyr',
      QUERY_PRISM_SIGNUP_ENDPOINT: p.queryPrismSignupEndpoint || 'https://formspree.io/f/moeeqbyr',
      NUARK_WAITLIST_ENDPOINT: p.nuarkWaitlistEndpoint || 'https://formspree.io/f/moeeqbyr',
      NUARK_URL: p.nuarkUrl || 'https://nuark.ai/',
      contactUrl:
        p.contactUrl ||
        'mailto:idris@cxworks.com,rithik@cxworks.com,sowmya@cxworks.com?subject=CXWorks%20Products%20enquiry',
      insightsUrl: p.insightsUrl ?? 'https://cxworks.com/',
      cxworksUrl: '/',
      freeDomains: [
        'gmail.com',
        'googlemail.com',
        'yahoo.com',
        'hotmail.com',
        'outlook.com',
        'icloud.com',
        'aol.com',
        'proton.me',
        'protonmail.com',
        'live.com',
        'msn.com',
      ],
    };
  }

  // ---- Product content (modular, edit independently) ----
  AGENTS = [
    {
      name: 'Data & Catalog',
      short: 'Catalog',
      count: 5,
      status: 'Live',
      mini: 'Catalogue always complete and marketplace-ready.',
      tagline: 'Your catalogue, always complete and marketplace-ready.',
      desc: 'The foundation layer. NUARK classifies products into the right categories, fills in missing attributes and maps product data into whatever format a marketplace or feed expects. It also produces catalogue images and product videos, so a listing can go live without waiting on a studio.',
      agents: [
        'Autoclassification',
        'Enrichment & Attributes',
        'Data Transformation Mapper',
        'Catalog Image Generator',
        'Product Video Generator',
      ],
    },
    {
      name: 'Commerce Health',
      short: 'Health',
      count: 7,
      status: 'Live',
      mini: 'Revenue leaks caught before they hit the bottom line.',
      tagline: 'Catch revenue leaks before they hit your bottom line.',
      desc: 'A standing audit of the storefront. These agents check taxonomy, facets and filters, image compliance, on-page and technical SEO, and landing pages. The AI Visibility Auditor checks how the brand shows up in AI answer engines — a surface most teams don\u2019t yet monitor.',
      agents: [
        'Data & Taxonomy Audit',
        'Facet & Filter Integrity',
        'Image Compliance Audit',
        'On-Page SEO Audit',
        'Technical SEO Audit',
        'AI Visibility Auditor',
        'Landing Page Analyst',
      ],
    },
    {
      name: 'Advertisement',
      short: 'Ads',
      count: 5,
      status: 'Live',
      mini: 'Competitive intel to live campaign assets.',
      tagline: 'From competitive intel to live campaign assets, without a brief cycle.',
      desc: 'From insight to live creative in one flow. NUARK generates ad copy, creatives and video, analyses which creatives perform, and watches competitor ads. Alert Buddy flags changes that need attention so nothing slips between reporting cycles.',
      agents: ['Ad Copy & Creative Gen', 'Creative Performance Analyst', 'Ad Watch', 'Ad Video', 'Alert Buddy'],
    },
    {
      name: 'Content Writing',
      short: 'Content',
      count: 6,
      status: 'Live',
      mini: 'Brand-accurate content at scale, every format.',
      tagline: 'Brand-accurate content at scale, across every format.',
      desc: 'Content that sounds like the brand, produced at volume. NUARK writes SEO copy and long-form articles, drafts content briefs, PR and FAQ material, plans social calendars and listens to what customers are saying on social channels.',
      agents: [
        'SEO Copywriting',
        'Automated Content Briefs',
        'Long-form Article Writer',
        'PR & FAQ Agent',
        'Social Media Planner',
        'Social Listener',
      ],
    },
    {
      name: 'Marketing & SEO',
      short: 'SEO',
      count: 6,
      status: 'Live',
      mini: 'Own the category on every search surface.',
      tagline: 'Outrank competitors and own your category across every search surface.',
      desc: 'Search strategy end to end: keyword research, SERP and topic-cluster analysis, competitor and backlink intelligence, local SEO, and regular reporting on what moved and why.',
      agents: [
        'Keyword Klarity',
        'SERP & Cluster Analyzer',
        'Competitor SEO Intelligence',
        'Backlink Intelligence',
        'Local SEO',
        'SEO Reporting',
      ],
    },
    {
      name: 'Pricing & Brand',
      short: 'Pricing',
      count: 5,
      status: 'Live',
      mini: 'Ahead of competitor moves, brand protected.',
      tagline: 'Stay ahead of competitor moves and protect your brand everywhere.',
      desc: 'Competitive defence. NUARK tracks competitor prices, spots gaps in the assortment, monitors unauthorised use of the brand and checks sellers against contract terms. The Data Analyst Agent answers ad-hoc business questions from the connected data.',
      agents: [
        'Pricing Intelligence',
        'Brand Protection Monitor',
        'Assortment Gap Analysis',
        'Data Analyst Agent',
        'Contract Compliance',
      ],
    },
  ];
  CHATS = [
    {
      tab: 'Data & Content Creation',
      agent: 'Catalog Enrichment',
      prompt: 'Enrich 1,240 SKUs missing attributes in our PIM.',
      meta: 'Analysed 193 resources · 3.5s',
      reply:
        'Auto-classified the SKUs, generated the missing attributes and shipped enriched listings to your PIM — in minutes, not weeks.',
      rid: 'RPT-DATA-01',
      head: '1,240 SKUs enriched · 12 attributes/SKU',
      kpis: [
        ['SKUs processed', '1,240'],
        ['Attributes generated', '14,880'],
        ['Confidence ≥ 0.9', '97.4%'],
        ['Time to PIM sync', '8m 12s'],
      ],
      cols: ['SKU', 'Attributes', 'Confidence', 'Status'],
      rows: [
        ['SKU-48211', 'Material, Fit, Care', '0.96', 'Synced'],
        ['SKU-48212', 'Color, Size, Season', '0.94', 'Synced'],
        ['SKU-48213', 'Origin, Weave, GSM', '0.91', 'Synced'],
        ['SKU-48214', 'Material, Heel, Sole', '0.88', 'Review'],
      ],
    },
    {
      tab: 'Marketing Operations',
      agent: 'Keyword Klarity',
      prompt: 'Map ranking opportunities across our top 50 SERPs.',
      meta: 'Analysed 282 resources · 5.1s',
      reply:
        'Mapped clusters across your SERPs, surfaced the ranking opportunities and briefed writers for the pages worth shipping.',
      rid: 'RPT-MARKETING-02',
      head: '47 opportunities · est. +18.2K monthly clicks',
      kpis: [
        ['Clusters mapped', '50'],
        ['Quick wins (pos 4–10)', '23'],
        ['Content gaps', '11'],
        ['Briefs ready', '47'],
      ],
      cols: ['Keyword', 'Position shift', 'Volume', 'Status'],
      rows: [
        ['best running shoes', '6 → 3', '8.4K', 'Brief ready'],
        ['trail runners 2026', '12 → 5', '3.2K', 'Brief ready'],
        ['cushioned daily trainer', '9 → 4', '2.7K', 'Drafting'],
        ['zero drop shoes', '—', '3.9K', 'Gap'],
      ],
    },
    {
      tab: 'Advertising & Creatives',
      agent: 'Creative Performance',
      prompt: 'Score this week\u2019s ad creatives against historical winners.',
      meta: 'Analysed 296 resources · 5.3s',
      reply:
        'Scored every creative against your historical winners, spun up variants and flagged the competitor angles worth reacting to.',
      rid: 'RPT-ADS-03',
      head: '32 creatives scored · 6 predicted winners',
      kpis: [
        ['Creatives analysed', '32'],
        ['Predicted ROAS ≥ 3.0', '6'],
        ['Variants suggested', '18'],
        ['Competitor angles', '9'],
      ],
      cols: ['Creative', 'Score', 'Pred. ROAS', 'Action'],
      rows: [
        ['CR-2261 · UGC hook', '94', '3.8x', 'Scale'],
        ['CR-2258 · Static price', '81', '2.9x', 'Iterate'],
        ['CR-2247 · Founder POV', '76', '2.4x', 'Iterate'],
        ['CR-2231 · Lifestyle reel', '52', '1.1x', 'Pause'],
      ],
    },
    {
      tab: 'Contract Lifecycle',
      agent: 'Contract Compliance',
      prompt: 'Review our vendor contracts for risks.',
      meta: 'Analysed 271 resources · 4.9s',
      reply: 'Checked every vendor agreement and flagged the clauses, renewals and missing SLAs that need action.',
      rid: 'RPT-CONTRACT-04',
      head: '84 contracts reviewed · 7 high-risk clauses',
      kpis: [
        ['Contracts scanned', '84'],
        ['High-risk clauses', '7'],
        ['Auto-renewals < 30d', '4'],
        ['Missing SLAs', '9'],
      ],
      cols: ['Vendor', 'Issue', 'Risk', 'Next step'],
      rows: [
        ['Acme Logistics', 'Auto-renew 12d', 'High', 'Notify owner'],
        ['Northwind 3PL', 'Unlimited liability', 'High', 'Redline'],
        ['Globex Cloud', 'No SLA defined', 'Medium', 'Request'],
        ['Initech SaaS', 'Price escalator 9%', 'Medium', 'Negotiate'],
      ],
    },
  ];
  FEED = [
    { a: 'Enrichment', t: '1,240 SKUs enriched · 12 attributes per SKU', s: 'Synced' },
    { a: 'Facets', t: 'Size filter broken on mobile category pages', s: 'Fixed' },
    { a: 'Keywords', t: '47 ranking opportunities · briefs ready', s: 'Ready' },
    { a: 'Creative', t: '6 predicted winners from 32 creatives', s: 'Scale' },
    { a: 'Pricing', t: 'Competitor cut prices on 12 hero SKUs', s: 'Flagged' },
    { a: 'Contracts', t: '7 high-risk clauses across 84 vendor contracts', s: 'Review' },
    { a: 'AI Visibility', t: 'Brand missing from 3 AI answers in category', s: 'Flagged' },
  ];
  APPROVALS = [
    { agent: 'Ads Agent', title: 'Apply 86 negative keywords', impact: 'Saves ~$3.2k per week' },
    { agent: 'Content Agent', title: 'Publish 12 category descriptions', impact: 'Answers 41 unanswered queries' },
    { agent: 'Catalog Agent', title: 'Push 224 enrichments to PIM', impact: 'Unblocks 3 filter facets' },
  ];
  WF = [
    {
      t: 'Ask',
      d: 'Teams ask in plain language — one simple conversation, no new dashboards to learn.',
      ex: '"Why did revenue dip on Running Shoes last week?"',
    },
    {
      t: 'Route',
      d: 'NUARK decides which skills and which connected data the task needs.',
      ex: 'Technical SEO Audit · Facet & Filter Integrity · Pricing Intelligence · Ad Watch',
    },
    {
      t: 'Analyse',
      d: 'Skills combine automatically when a task spans several functions.',
      ex: 'Broken mobile size filter + competitor price cut on 12 hero SKUs.',
    },
    {
      t: 'Act',
      d: 'One reply, with the work done or drafted — not six reports.',
      ex: 'Filter fix shipped · price response drafted · creative brief ready.',
    },
  ];
  ARCH = [
    { t: 'One interface', d: 'A simple conversation. No new dashboards to learn.' },
    { t: 'Connected data', d: 'Works on the team\u2019s real systems — not exports or copies.' },
    { t: 'Specialist depth', d: 'Each skill is designed for its job, from taxonomy audits to ad creative.' },
    { t: 'Coordination', d: 'Skills combine automatically when a task spans several functions.' },
  ];
  TOPICS = [
    {
      topic: 'bathroom and kitchen showroom',
      url: 'showroom.coburns.com/locations',
      intents: [
        {
          name: 'Define',
          subs: [
            [
              'what is a bathroom and kitchen showroom',
              'p',
              1300,
              'Welcome to the Coburn\u2019s Kitchen & Bath Showroom inspirational website.',
            ],
            ['what to expect at a kitchen and bath showroom', 'm', 880, ''],
          ],
        },
        {
          name: 'Segment',
          subs: [
            [
              'bathroom and kitchen showroom near me',
              'c',
              6600,
              'Find your nearest of 22 Coburn\u2019s Kitchen & Bath Showrooms across Texas, Louisiana, Mississippi, and Alabama.',
            ],
            ['kitchen and bath showroom hours', 'c', 1900, 'Open Monday through Friday during business hours.'],
          ],
        },
        {
          name: 'Evaluate',
          subs: [
            ['best bathroom and kitchen showrooms to visit', 'p', 2400, ''],
            ['showroom prices and product ranges', 'm', 720, ''],
          ],
        },
        {
          name: 'Compare',
          subs: [
            ['showroom vs online retailer', 'm', 390, ''],
            ['showroom vs big box store', 'm', 320, ''],
          ],
        },
        {
          name: 'How To',
          subs: [
            ['how to plan a remodel using a showroom', 'p', 590, ''],
            [
              'schedule a kitchen and bath design appointment',
              'c',
              1600,
              'After browsing, schedule an appointment with an experienced Showroom Consultant to make your dream a reality.',
            ],
          ],
        },
        {
          name: 'Adjacent',
          subs: [
            ['design consultation at a showroom', 'p', 480, ''],
            ['kitchen and bathroom showroom financing', 'm', 260, ''],
          ],
        },
      ],
    },
    {
      topic: 'running shoes for flat feet',
      url: 'yourstore.com/running/stability',
      intents: [
        {
          name: 'Define',
          subs: [
            ['what are stability shoes', 'c', 4400],
            ['what is overpronation', 'p', 6600],
          ],
        },
        {
          name: 'Segment',
          subs: [
            ['flat feet shoes for women', 'c', 5400],
            ['wide running shoes flat feet', 'm', 1900],
          ],
        },
        {
          name: 'Evaluate',
          subs: [
            ['best running shoes flat feet', 'c', 18000],
            ['are hoka good for flat feet', 'p', 3600],
          ],
        },
        {
          name: 'Compare',
          subs: [
            ['stability vs neutral shoes', 'p', 2400],
            ['motion control vs stability', 'm', 1300],
          ],
        },
        {
          name: 'How To',
          subs: [
            ['how to tell if you have flat feet', 'c', 8100],
            ['how to choose running shoes', 'm', 4400],
          ],
        },
        {
          name: 'Adjacent',
          subs: [
            ['insoles for flat feet running', 'p', 2900],
            ['shin splints flat feet', 'm', 2200],
          ],
        },
      ],
    },
    {
      topic: 'B2B ecommerce platform',
      url: 'yourcompany.com/platform',
      intents: [
        {
          name: 'Define',
          subs: [
            ['what is b2b ecommerce', 'c', 9900],
            ['what is a punchout catalog', 'm', 1600],
          ],
        },
        {
          name: 'Segment',
          subs: [
            ['b2b ecommerce for manufacturers', 'p', 1300],
            ['b2b platform for wholesale', 'c', 2400],
          ],
        },
        {
          name: 'Evaluate',
          subs: [
            ['best b2b ecommerce platform', 'c', 5400],
            ['b2b ecommerce platform pricing', 'p', 1900],
          ],
        },
        {
          name: 'Compare',
          subs: [
            ['b2b vs b2c ecommerce', 'c', 3600],
            ['headless vs monolithic b2b', 'm', 720],
          ],
        },
        {
          name: 'How To',
          subs: [
            ['how to launch b2b ecommerce', 'p', 1100],
            ['how to integrate erp with ecommerce', 'm', 1300],
          ],
        },
        {
          name: 'Adjacent',
          subs: [
            ['b2b customer specific pricing', 'p', 880],
            ['b2b site search', 'm', 590],
          ],
        },
      ],
    },
  ];
  FIX = {
    Define: 'Add a clear definition block near the top',
    Segment: 'Add a section for this audience or use case',
    Evaluate: 'Add selection criteria and a recommendation table',
    Compare: 'Add a side-by-side comparison',
    'How To': 'Add a step-by-step how-to with HowTo schema',
    Adjacent: 'Add a supporting section or link a related guide',
  };
  H2 = {
    Define: 'What is {t}?',
    Segment: 'Which {t} is right for you',
    Evaluate: 'How to choose the best {t}',
    Compare: '{T} compared',
    'How To': 'How-to guides',
    Adjacent: 'Related questions',
  };
  SERP = [
    ['independentreview.com', 'Buyer\u2019s guide', [1, 1, 1, 1, 0, 0], 3200, '{T}: the complete buyer\u2019s guide'],
    ['bigretailer.com', 'Category page', [0, 1, 1, 0, 0, 1], 900, 'Shop {t} — compare top picks'],
    ['brandsite.com', 'Blog post', [1, 0, 0, 1, 1, 0], 1800, '{T} explained: what to know first'],
    ['reddit.com', 'Forum thread', [0, 1, 1, 1, 0, 1], 2400, 'Which {t} should I get?'],
    ['youtube.com', 'Video', [0, 0, 0, 0, 1, 1], 0, '{T}: hands-on test and how-to'],
  ];
  CLUSTER_LINKS = [
    [0, 4],
    [1, 2],
    [2, 3],
    [3, 5],
    [4, 5],
    [0, 1],
  ];
  APP_ROWS = [
    {
      q: 'what is a bathroom and kitchen showroom',
      f: 'Define',
      intent: 'Informational',
      stage: 'Awareness',
      type: 'Informational article',
      why: 'User wants to understand what these showrooms offer.',
      cov: 'partial',
      qdp: 66,
      on: 'Calls itself a showroom but never defines one.',
      quote: 'Welcome to the Coburn\u2019s Kitchen & Bath Showroom inspirational website.',
      term: ['kitchen and bath showroom', 2400, 11],
    },
    {
      q: 'bathroom and kitchen showroom near me',
      f: 'Segment',
      intent: 'Local',
      also: 'Transactional',
      stage: 'Decision',
      type: 'Collection / category page',
      why: 'User wants to visit a physical showroom location.',
      cov: 'covered',
      qdp: 30,
      on: 'Answered directly by the location finder.',
      quote:
        'Find your nearest of 22 Coburn\u2019s Kitchen & Bath Showrooms across Texas, Louisiana, Mississippi, and Alabama.',
      term: ['kitchen and bath showroom near me', 1300, 8],
      cite: true,
    },
    {
      q: 'best bathroom and kitchen showrooms to visit',
      f: 'Evaluate',
      intent: 'Commercial',
      stage: 'Consideration',
      type: 'Buying guide',
      why: 'User comparing quality or reputation before choosing a showroom.',
      cov: 'missing',
      qdp: 100,
      on: 'Nothing evaluative or comparative on the page.',
      term: null,
    },
    {
      q: 'bathroom and kitchen showroom vs online retailer',
      f: 'Compare',
      intent: 'Commercial',
      also: 'Informational',
      stage: 'Consideration',
      type: 'Comparison article',
      why: 'User weighing the showroom experience against buying online.',
      cov: 'missing',
      qdp: 88,
      on: 'Never compares a showroom visit with buying online.',
      term: ['showroom vs online kitchen cabinets', 40, 3],
    },
    {
      q: 'how to plan a kitchen or bathroom remodel using a showroom',
      f: 'How-to',
      intent: 'Informational',
      also: 'Problem-solving',
      stage: 'Awareness',
      type: 'How-to guide',
      why: 'User wants guidance on using a showroom in their renovation.',
      cov: 'partial',
      qdp: 74,
      on: 'Mentions booking a consultant, but gives no planning steps.',
      quote:
        'After browsing, schedule an appointment with an experienced Showroom Consultant to make your dream a reality.',
      term: ['how to plan a kitchen remodel', 1900, 24],
    },
    {
      q: 'bathroom and kitchen showroom prices and product ranges',
      f: 'Evaluate',
      intent: 'Commercial',
      stage: 'Consideration',
      type: 'Buying guide',
      why: 'User researching cost and product availability before purchasing.',
      cov: 'missing',
      qdp: 86,
      on: 'No pricing, ranges or product lines mentioned.',
      term: ['kitchen and bath showroom prices', 90, 2],
    },
    {
      q: 'kitchen and bathroom design consultation at showroom',
      f: 'Adjacent',
      intent: 'Transactional',
      also: 'Commercial investigation',
      stage: 'Decision',
      type: 'Informational article',
      why: 'User interested in booking design services offered at showrooms.',
      cov: 'partial',
      qdp: 62,
      on: 'Links to an appointment, but never describes the consultation.',
      quote: 'Schedule an Appointment',
      term: ['kitchen design consultation', 320, 6],
    },
  ];
  APP_BRIEFS = {
    2: {
      title: 'Best Kitchen & Bath Showrooms to Visit in the Gulf South',
      meta: 'What makes a kitchen and bath showroom worth the trip — selection, design help, pricing and service. Compare your options before you visit.',
      slug: '/guides/best-kitchen-bath-showrooms',
      kw: 'best kitchen and bath showrooms',
      len: '1,800–2,200',
      schema: 'Article · FAQPage · ItemList',
      outline: [
        'What makes a showroom worth visiting',
        'Product ranges to look for',
        'Design help and consultations',
        'Pricing and quotes',
        'Showroom checklist before you go',
        'FAQ',
      ],
      links: ['/locations', '/schedule-appointment', '/kitchen-cabinets'],
    },
    3: {
      title: 'Kitchen & Bath Showroom vs Buying Online',
      meta: 'See, touch and get expert advice — or browse online? A side-by-side look at cost, choice, service and delivery.',
      slug: '/guides/showroom-vs-online',
      kw: 'showroom vs online kitchen cabinets',
      len: '1,400–1,800',
      schema: 'Article · FAQPage',
      outline: [
        'Side-by-side comparison',
        'Seeing finishes in person',
        'Expert design help',
        'Price and delivery',
        'When buying online makes sense',
        'FAQ',
      ],
      links: ['/locations', '/style-finder-quiz'],
    },
    4: {
      title: 'How to Plan a Kitchen or Bath Remodel Using a Showroom',
      meta: 'A step-by-step plan: measure, set a budget, book a consultation and choose finishes with a showroom consultant.',
      slug: '/guides/plan-remodel-showroom',
      kw: 'how to plan a kitchen remodel',
      len: '1,500–1,900',
      schema: 'HowTo · FAQPage',
      outline: [
        'Step 1: Measure your space',
        'Step 2: Set a budget',
        'Step 3: Book a showroom consultation',
        'Step 4: Choose fixtures and finishes',
        'Step 5: Review your quote',
        'What to bring to your appointment',
      ],
      links: ['/schedule-appointment', '/bathroom-vanities'],
    },
    5: {
      title: 'Kitchen & Bath Showroom Prices and Product Ranges',
      meta: 'What fixtures, vanities and cabinets cost at a showroom, and which brands and ranges you can see in person.',
      slug: '/guides/showroom-prices',
      kw: 'kitchen and bath showroom prices',
      len: '1,600–2,000',
      schema: 'Article · FAQPage',
      outline: [
        'Typical price ranges by category',
        'Brands and product lines',
        'Good, better, best options',
        'How quotes work',
        'Financing options',
        'FAQ',
      ],
      links: ['/kitchen-cabinets', '/bathroom-vanities'],
    },
  };
  APP_RUNS = [
    ['bathroom and kitchen showroom', 'Fan-out + coverage', 'Real search data', 7, 4, 'Today'],
    ['bathroom vanities', 'Fan-out only', 'Generic', 6, 3, '2 Oct'],
    ['kitchen cabinets', 'Fan-out + coverage', 'Real search data', 8, 5, '28 Sep'],
  ];
  APP_WS = ['showroom.coburns.com', 'coburns.com', 'powerboltandtool.com'];
  appSet(patch) {
    this.setState((st) => ({ app: { ...st.app, ...(typeof patch === 'function' ? patch(st.app) : patch) } }));
  }
  appToast(msg) {
    this.appSet({ toast: msg });
    clearTimeout(this.toastT);
    this.toastT = setTimeout(() => this.appSet({ toast: '' }), 2600);
  }
  appAddBriefs(ids) {
    const add = ids.filter((i) => !this.state.app.briefs.some((b) => b.i === i));
    this.appSet((a) => ({ briefs: [...a.briefs, ...add.map((i) => ({ i, stage: 'Backlog' }))], picked: [] }));
    this.appToast(
      add.length ? add.length + (add.length > 1 ? ' briefs' : ' brief') + ' added to Briefs' : 'Already in Briefs',
    );
  }
  appBriefData(i) {
    const r = this.APP_ROWS[i],
      b = this.APP_BRIEFS[i];
    if (b) return b;
    const cap = r.q.charAt(0).toUpperCase() + r.q.slice(1);
    return {
      title: cap + ' | Coburn\u2019s',
      meta: r.why + ' Answered by Coburn\u2019s showroom consultants.',
      slug: '/guides/' + r.q.replace(/[^a-z0-9]+/g, '-'),
      kw: r.term ? r.term[0] : r.q,
      len: '900–1,200',
      schema: 'Article · FAQPage',
      outline: ['Short answer', 'What to know', 'How Coburn\u2019s can help', 'FAQ'],
      links: ['/locations'],
    };
  }
  appExport(fmt) {
    const A = this.state.app,
      bb = A.briefs[A.briefOpen];
    if (!bb) return;
    const r = this.APP_ROWS[bb.i],
      d = this.appBriefData(bb.i);
    const md =
      '# ' +
      d.title +
      '\n\n**Primary keyword:** ' +
      d.kw +
      '\n**URL slug:** ' +
      d.slug +
      '\n**Meta description:** ' +
      d.meta +
      '\n**Page type:** ' +
      r.type +
      '\n**Target length:** ' +
      d.len +
      ' words\n**Schema:** ' +
      d.schema +
      '\n\n## Outline\n' +
      d.outline.map((o, k) => k + 1 + '. ' + o).join('\n') +
      '\n\n## Internal links\n' +
      d.links.map((l) => '- ' + l).join('\n') +
      '\n';
    const html =
      '<html><body>' +
      md
        .split('\n')
        .map((l) => '<p>' + l.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c]) + '</p>')
        .join('') +
      '</body></html>';
    const blob = new Blob([fmt === 'md' ? md : html], { type: fmt === 'md' ? 'text/markdown' : 'application/msword' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = d.slug.split('/').pop() + (fmt === 'md' ? '.md' : '.doc');
    document.body.appendChild(a);
    a.click();
    a.remove();
    this.appSet({ exportOpen: false });
    this.appToast('Brief exported');
  }
  appRun() {
    this.appSet({ running: true });
    setTimeout(() => {
      this.appSet({ running: false, screen: 'fanout', filter: 'all', open: null });
      this.appToast('Fan-out ready · 7 sub-queries');
    }, 1800);
  }
  AIQ = [
    {
      q: 'best cordless drill for professional contractors',
      seg: [
        ['For professional contractors, the most recommended options are the '],
        ['Ardent Pro 20V', 'comp'],
        [' for torque, the '],
        ['Kestrel K18 Brushless', 'brand'],
        [' for battery life on long shifts, and the '],
        ['Boltline Xtreme', 'comp'],
        [' for value across a fleet. Look for brushless motors and 4.0Ah+ batteries.'],
      ],
      cites: [
        ['toolreview.co', false],
        ['kestreltools.com/k18', true],
        ['contractormag.com', false],
      ],
      eng: [
        ['ChatGPT', true, 2, true],
        ['Perplexity', true, 1, true],
        ['Gemini', false, 0, false],
        ['AI Overviews', true, 3, false],
      ],
    },
    {
      q: 'brushless vs brushed drill which lasts longer',
      seg: [
        ['Brushless drills generally last longer because there are no carbon brushes to wear out. Brands such as '],
        ['Ardent', 'comp'],
        [' and '],
        ['Boltline', 'comp'],
        [' now offer brushless motors across their mid-range lines.'],
      ],
      cites: [
        ['wikipedia.org', false],
        ['ardent.com/brushless', false],
        ['diyforum.net', false],
      ],
      eng: [
        ['ChatGPT', false, 0, false],
        ['Perplexity', false, 0, false],
        ['Gemini', false, 0, false],
        ['AI Overviews', true, 4, false],
      ],
    },
    {
      q: 'where to buy cordless drills in bulk',
      seg: [
        ['For bulk orders, trade suppliers and manufacturer programs offer the best pricing. '],
        ['Kestrel', 'brand'],
        [' runs a trade account with tiered pricing, while '],
        ['Boltline', 'comp'],
        [' sells through national distributors.'],
      ],
      cites: [
        ['kestreltools.com/trade', true],
        ['tradesupply.com', false],
      ],
      eng: [
        ['ChatGPT', true, 1, true],
        ['Perplexity', true, 1, true],
        ['Gemini', true, 2, false],
        ['AI Overviews', false, 0, false],
      ],
    },
  ];
  LAYERS = [
    { t: 'Search data', d: 'Demand, trends and SERP features for every query in the set.' },
    { t: 'Query fan-out', d: 'The full tree of intents and sub-questions behind each topic.' },
    { t: 'Coverage', d: 'Which of those questions your pages actually answer.' },
    { t: 'AI visibility', d: 'How ChatGPT, Perplexity, Gemini and AI Overviews mention and cite you.' },
    { t: 'Competitive intelligence', d: 'Who wins the answers you are missing, and with which pages.' },
  ];
  PRIORITIES = [
    {
      t: 'Add a brushless vs brushed comparison to /cordless-drills',
      w: '3 unanswered queries · Ardent cited instead',
      uses: [0, 1, 2, 4],
    },
    {
      t: 'Publish a trade buying guide for bulk orders',
      w: 'Bulk queries cited to competitors in 2 of 4 engines',
      uses: [0, 1, 3, 4],
    },
    {
      t: 'Add a voltage & torque spec table to the K18 page',
      w: 'Not eligible for Gemini answers today',
      uses: [2, 3],
    },
  ];

  state = {
    route: { nuark: 'nuark', 'query-prism': 'qp' }[this.props.startPage] || 'home',
    pageVis: true,
    vw: 1280,
    scrolled: false,
    menuOpen: false,
    heroFocus: null,
    cardHover: null,
    showcase: 'nuark',
    scTab: 0,
    eco: null,
    agent: 0,
    agentManual: false,
    chat: 0,
    chatStage: 4,
    wfStep: 0,
    arch: 0,
    tick: 0,
    approvals: [0, 1, 2],
    resolved: 31,
    topic: 0,
    fanStage: 3,
    covUrl: '',
    covStep: 0,
    covState: 'idle',
    aiQuery: 0,
    aiStage: 5,
    layer: null,
    contactOpen: false,
    prodOpen: false,
    copied: '',
    inlineStatus: 'idle',
    qpInlineStatus: 'idle',
    homeStatus: 'idle',
    homeProds: [],
    homeDoneProds: [],
    app: {
      screen: 'fanout',
      view: 'list',
      filter: 'all',
      open: 0,
      picked: [],
      briefs: [{ i: 2, stage: 'In progress' }],
      briefOpen: null,
      briefStage: 'All',
      ws: 0,
      wsOpen: false,
      exportOpen: false,
      toast: '',
      notified: false,
      running: false,
      newData: 'search',
    },
    fanMode: 'data',
    qpStep: 0,
    genState: 'idle',
    genStep: 0,
    cluster: null,
    modal: null,
    modalIn: false,
    form: { name: '', email: '', company: '' },
    errors: {},
    role: '',
    interests: [],
    status: 'idle',
    countdown: 3,
  };
  stageRef = React.createRef();
  wfRef = React.createRef();
  wfBarRef = React.createRef();
  typeRef = React.createRef();
  timers = [];

  componentDidMount() {
    const r = this.parseHash();
    if ((window.location.hash || '').indexOf('#/') === 0 && this.canPush()) {
      try {
        history.replaceState(null, '', this.routeBase() + window.location.hash.slice(2));
      } catch (e) {}
    }
    const start = r.route || { nuark: 'nuark', 'query-prism': 'qp' }[this.props.startPage] || 'home';
    this.setState({ route: start, vw: window.innerWidth });
    if (start === 'qp') this.runFan();
    this.onScroll = () => {
      if (this.raf) return;
      this.raf = requestAnimationFrame(() => {
        this.raf = null;
        this.handleScroll();
      });
    };
    this.onResize = () => this.setState({ vw: window.innerWidth });
    this.onHash = () => this.handleRoute();
    this.onKey = (e) => {
      if (e.key === 'Escape' && (this.state.contactOpen || this.state.prodOpen)) {
        this.setState({ contactOpen: false, prodOpen: false });
        return;
      }
      if (e.key === 'Escape') {
        if (this.state.modal) this.closeModal();
        else if (this.state.menuOpen) this.setState({ menuOpen: false });
      }
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
    window.addEventListener('hashchange', this.onHash);
    window.addEventListener('popstate', this.onHash);
    window.addEventListener('keydown', this.onKey);
    this.iv = setInterval(() => {
      const s = this.state;
      if (s.route === 'qp') return;
      const up = { tick: s.tick + 1 };
      if (s.route === 'nuark' && !s.agentManual) up.agent = (s.agent + 1) % 6;
      this.setState(up);
    }, 3800);
    this.startTyping();
    setTimeout(() => {
      this.scanReveal();
      if (r.anchor) this.scrollToId(r.anchor);
    }, 120);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('hashchange', this.onHash);
    window.removeEventListener('popstate', this.onHash);
    window.removeEventListener('keydown', this.onKey);
    clearInterval(this.iv);
    clearInterval(this.typeIv);
    clearInterval(this.cdIv);
    this.clearTimers();
    document.body.style.overflow = '';
  }
  clearTimers() {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }
  later(fn, ms) {
    this.timers.push(setTimeout(fn, ms));
  }

  // ---- Routing ----
  // The products section lives at cxworks.com/products/, so every route is relative to that.
  routeBase() {
    return BASE_PATH;
  }
  canPush() {
    const pr = window.location.protocol;
    return pr === 'http:' || pr === 'https:';
  }
  parseHash() {
    let h = window.location.hash || '';
    if (h.indexOf('#/') === 0) h = h.slice(2);
    else h = window.location.pathname.slice(this.routeBase().length);
    const parts = h.split('/').filter(Boolean);
    const slug = parts[0] || '';
    const route = { '': null, home: 'home', nuark: 'nuark', 'query-prism': 'qp' }[slug];
    if (route === undefined) return { route: null, anchor: slug && slug.indexOf('.') === -1 ? slug : undefined };
    return { route, anchor: parts[1] };
  }
  go(slug, anchor) {
    // Trailing slashes match the site's canonical URLs (next.config.ts: trailingSlash).
    const url =
      this.routeBase() + (slug === 'home' ? (anchor ? anchor + '/' : '') : slug + '/' + (anchor ? anchor + '/' : ''));
    this.skipHash = true;
    try {
      if (this.canPush() && window.location.pathname !== url) history.pushState(null, '', url);
    } catch (e) {}
    setTimeout(() => {
      this.skipHash = false;
    }, 50);
    const route = { home: 'home', nuark: 'nuark', 'query-prism': 'qp' }[slug] || 'home';
    this.handleRoute({ route, anchor });
  }
  handleRoute(forced) {
    if (!forced && this.skipHash) return;
    const { route, anchor } = forced || this.parseHash();
    const target = route || 'home';
    this.setState({ menuOpen: false });
    if (target === this.state.route) {
      anchor ? this.scrollToId(anchor) : window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    this.setState({ pageVis: false });
    setTimeout(() => {
      this.setState({ route: target, pageVis: true, heroFocus: null, wfStep: 0 });
      window.scrollTo(0, 0);
      if (target === 'qp') this.runFan();
      if (target === 'nuark') this.runChat(0);
      setTimeout(() => {
        this.scanReveal();
        if (anchor) this.scrollToId(anchor);
      }, 80);
    }, 240);
  }
  scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) {
      setTimeout(() => {
        const e2 = document.getElementById(id);
        if (e2) window.scrollTo({ top: e2.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' });
      }, 300);
      return;
    }
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' });
  }
  handleScroll() {
    if (this.state.contactOpen || this.state.prodOpen) this.setState({ contactOpen: false, prodOpen: false });
    const scrolled = window.scrollY > 24;
    if (scrolled !== this.state.scrolled) this.setState({ scrolled });
    const el = this.wfRef.current;
    if (el && this.state.route === 'nuark' && this.state.vw >= 720) {
      const r = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - window.innerHeight)));
      if (this.wfBarRef.current) this.wfBarRef.current.style.width = p * 100 + '%';
      const step = Math.min(3, Math.floor(p * 4.2));
      if (step !== this.state.wfStep) this.setState({ wfStep: step });
    }
  }
  scanReveal() {
    if (this.props.reducedMotion) return;
    if (!this.io)
      this.io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.style.opacity = '1';
              e.target.style.transform = 'none';
              this.io.unobserve(e.target);
            }
          }),
        { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
      );
    document.querySelectorAll('[data-reveal]:not([data-rv])').forEach((el) => {
      el.setAttribute('data-rv', '1');
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)';
      this.io.observe(el);
    });
  }

  // ---- Demos ----
  startTyping() {
    const phrases = ['bathroom and kitchen showroom', 'running shoes for flat feet', 'B2B ecommerce platform'];
    let p = 0,
      i = 0,
      dir = 1,
      hold = 0;
    this.typeIv = setInterval(() => {
      const el = this.typeRef.current;
      if (!el) return;
      if (hold > 0) {
        hold--;
        return;
      }
      const w = phrases[p];
      i += dir;
      if (i >= w.length) {
        dir = -1;
        hold = 30;
      }
      if (i <= 0) {
        dir = 1;
        p = (p + 1) % phrases.length;
        hold = 4;
      }
      el.textContent = w.slice(0, Math.max(0, i));
    }, 70);
  }
  runFan() {
    this.clearTimers();
    this.setState({ fanStage: 0 });
    this.later(() => this.setState({ fanStage: 1 }), 250);
    this.later(() => this.setState({ fanStage: 2 }), 750);
    this.later(() => this.setState({ fanStage: 3 }), 1350);
  }
  runCoverage() {
    this.setState({ covState: 'running', covStep: 0 });
    [1, 2, 3, 4].forEach((n) =>
      this.later(() => this.setState(n === 4 ? { covStep: 4, covState: 'done' } : { covStep: n }), n * 650),
    );
  }
  runChat(i) {
    this.clearTimers();
    this.setState({ chat: i, chatStage: 0 });
    [1, 2, 3, 4].forEach((n) => this.later(() => this.setState({ chatStage: n }), [0, 350, 1000, 1600, 2200][n]));
  }
  runGen() {
    this.clearTimers();
    this.setState({ genState: 'running', genStep: 0 });
    [1, 2, 3, 4, 5, 6].forEach((n) =>
      this.later(() => this.setState(n === 6 ? { genStep: 6, genState: 'done' } : { genStep: n }), n * 520),
    );
  }
  runAI(i) {
    this.setState({ aiQuery: i, aiStage: 0 });
    [1, 2, 3, 4, 5].forEach((n) => this.later(() => this.setState({ aiStage: n }), n * 320));
  }

  // ---- Modals & forms ----
  openModal(type) {
    this.setState({ modal: type, modalIn: false, status: 'idle', errors: {}, menuOpen: false, countdown: 3 });
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ modalIn: true })));
  }
  closeModal() {
    clearInterval(this.cdIv);
    this.setState({ modalIn: false });
    setTimeout(() => {
      this.setState({ modal: null });
      document.body.style.overflow = '';
    }, 260);
  }
  // ---- Formspree submission ----
  // One clean, readable submission per sign-up. Formspree needs
  // Accept: application/json to answer an AJAX post with JSON instead of a redirect.
  async sendLead(endpoint, data) {
    const names = { nuark: 'NUARK waitlist', 'query-prism': 'QueryPrism free trial' };
    const prods = [].concat(data.product || []);
    const productLabel = prods.map((p) => names[p] || p).join(' + ');
    const body = {
      name: (data.name || '').trim(),
      email: (data.email || '').trim(),
      company: (data.company || '').trim(),
      product: productLabel,
      role: data.role || '',
      interests: Array.isArray(data.interests) ? data.interests.join(', ') : data.interests || '',
      form: data.form || '',
      page: data.page || '',
      source: data.source || SITE.host,
      submittedAt: data.submittedAt || new Date().toISOString(),
      _replyto: (data.email || '').trim(),
      _subject: 'New sign-up: ' + productLabel + ' — ' + (data.company || '').trim(),
    };
    if (!body.role) delete body.role;
    if (!body.interests) delete body.interests;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      let msg = 'HTTP ' + res.status;
      try {
        const j = await res.json();
        if (j && j.errors) msg = j.errors.map((e) => e.message).join('; ');
      } catch (_) {}
      throw new Error(msg);
    }
    return res;
  }
  validate(forceW) {
    const f = this.state.form,
      e = {},
      C = this.cfg();
    if (f.name.trim().length < 2) e.name = 'Please enter your name.';
    const em = f.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) e.email = 'Enter a valid email address.';
    else if (C.freeDomains.includes(em.split('@')[1])) e.email = 'Please use your work email.';
    if (f.company.trim().length < 2) e.company = 'Please enter your company.';
    if (forceW || this.state.modal === 'waitlist') {
      if (!this.state.role) e.role = 'Choose the role closest to yours.';
      if (!this.state.interests.length) e.interests = 'Pick at least one area.';
    }
    return e;
  }
  async submitInline(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    if (this.state.inlineStatus === 'loading') return;
    const errors = this.validate(true);
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    this.setState({ inlineStatus: 'loading' });
    const C = this.cfg(),
      s = this.state;
    const payload = {
      ...s.form,
      product: 'nuark',
      role: s.role,
      interests: s.interests,
      source: SITE.host,
      page: window.location.pathname || '/',
      submittedAt: new Date().toISOString(),
    };
    try {
      if (C.NUARK_WAITLIST_ENDPOINT) {
        await this.sendLead(C.NUARK_WAITLIST_ENDPOINT, { ...payload, form: 'NUARK page · waitlist section' });
      } else {
        await new Promise((r) => setTimeout(r, 1100));
        if (/\+fail@/i.test(s.form.email)) throw new Error('simulated');
      }
      this.setState({ inlineStatus: 'success' });
    } catch (err) {
      this.setState({ inlineStatus: 'error' });
    }
  }
  async submitHome(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    const s0 = this.state;
    if (s0.homeStatus === 'loading') return;
    const prods = s0.homeProds,
      wantN = prods.includes('nuark'),
      wantQ = prods.includes('qp');
    const errors = this.validate(wantN);
    if (!prods.length) errors.prods = 'Choose at least one product.';
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    this.setState({ homeStatus: 'loading' });
    const C = this.cfg(),
      s = this.state;
    const base = { ...s.form, source: SITE.host, page: 'home', submittedAt: new Date().toISOString() };
    try {
      const ep = (wantN ? C.NUARK_WAITLIST_ENDPOINT : '') || (wantQ ? C.QUERY_PRISM_SIGNUP_ENDPOINT : '');
      if (ep) {
        const product = [wantN ? 'nuark' : null, wantQ ? 'query-prism' : null].filter(Boolean);
        await this.sendLead(ep, {
          ...base,
          product,
          form: 'Home page · get started',
          ...(wantN ? { role: s.role, interests: s.interests } : {}),
        });
      } else {
        await new Promise((r) => setTimeout(r, 1100));
        if (/\+fail@/i.test(s.form.email)) throw new Error('simulated');
      }
      this.setState({ homeStatus: 'success', homeDoneProds: prods.slice() });
    } catch (err) {
      this.setState({ homeStatus: 'error' });
    }
  }
  async submitInlineQP(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    if (this.state.qpInlineStatus === 'loading') return;
    const errors = this.validate(false);
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    this.setState({ qpInlineStatus: 'loading' });
    const C = this.cfg(),
      s = this.state;
    const payload = {
      ...s.form,
      product: 'query-prism',
      source: SITE.host,
      page: window.location.pathname || '/',
      submittedAt: new Date().toISOString(),
    };
    try {
      if (C.QUERY_PRISM_SIGNUP_ENDPOINT) {
        await this.sendLead(C.QUERY_PRISM_SIGNUP_ENDPOINT, { ...payload, form: 'QueryPrism page · trial section' });
      } else {
        await new Promise((r) => setTimeout(r, 1100));
        if (/\+fail@/i.test(s.form.email)) throw new Error('simulated');
      }
      this.setState({ qpInlineStatus: 'success', countdown: 3 });
      clearInterval(this.cdIv);
      this.cdIv = setInterval(() => {
        const n = this.state.countdown - 1;
        if (n <= 0) {
          clearInterval(this.cdIv);
          this.redirectTrial();
        } else this.setState({ countdown: n });
      }, 1000);
    } catch (err) {
      this.setState({ qpInlineStatus: 'error' });
    }
  }
  async submit(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    if (this.state.status === 'loading') return;
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length) return;
    this.setState({ status: 'loading' });
    const C = this.cfg(),
      s = this.state,
      isW = s.modal === 'waitlist';
    const endpoint = isW ? C.NUARK_WAITLIST_ENDPOINT : C.QUERY_PRISM_SIGNUP_ENDPOINT;
    const payload = {
      ...s.form,
      product: isW ? 'nuark' : 'query-prism',
      ...(isW ? { role: s.role, interests: s.interests } : {}),
      source: SITE.host,
      page: window.location.pathname || '/',
      submittedAt: new Date().toISOString(),
    };
    try {
      if (endpoint) {
        await this.sendLead(endpoint, {
          ...payload,
          form: isW ? 'Pop-up · NUARK waitlist' : 'Pop-up · QueryPrism trial',
        });
      } else {
        await new Promise((r) => setTimeout(r, 1100));
        if (/\+fail@/i.test(s.form.email)) throw new Error('simulated');
      }
      this.setState({ status: 'success' });
      if (!isW && C.QUERY_PRISM_TRIAL_URL) {
        this.cdIv = setInterval(() => {
          const n = this.state.countdown - 1;
          if (n <= 0) {
            clearInterval(this.cdIv);
            this.redirectTrial();
          } else this.setState({ countdown: n });
        }, 1000);
      }
    } catch (err) {
      this.setState({ status: 'error' });
    }
  }
  openApp() {
    this.setState({ menuOpen: false });
    window.open(this.cfg().QUERY_PRISM_TRIAL_URL, '_blank', 'noopener');
  }
  redirectTrial() {
    const url = this.cfg().QUERY_PRISM_TRIAL_URL;
    if (!url) return;
    const f = this.state.form;
    const qs = new URLSearchParams({
      name: f.name.trim(),
      email: f.email.trim(),
      company: f.company.trim(),
      utm_source: SITE.host,
    }).toString();
    window.location.href = url + (url.includes('?') ? '&' : '?') + qs;
  }

  renderVals() {
    const s = this.state,
      C = this.cfg();
    const EMB = '#40C8E0',
      PRI = '#64A8FF',
      GOLD = '#40C8E0';
    const isNarrow = s.vw < 960,
      isMobile = s.vw < 720;
    const isHome = s.route === 'home',
      isNuark = s.route === 'nuark',
      isQP = s.route === 'qp';
    const COV = {
      c: { color: '#30D158', label: 'Covered' },
      p: { color: '#40C8E0', label: 'Partial' },
      m: { color: '#FF6961', label: 'Missing' },
    };
    const go = (slug, a) => () => this.go(slug, a);

    const navItems = [
      { label: 'Products', onClick: go('home', 'products'), active: false },
      { label: 'NUARK', onClick: go('nuark'), active: isNuark },
      { label: 'QueryPrism', onClick: go('query-prism'), active: isQP },
      { label: 'About', onClick: go('home', 'about'), active: false },
    ].map((n) => ({ ...n, color: n.active ? '#F5F5F7' : '#98989D' }));
    const navCta = isNuark
      ? { l: 'Join the Waitlist', bg: EMB, fn: () => this.openModal('waitlist') }
      : isQP
        ? { l: 'Try QueryPrism', bg: PRI, fn: () => this.openModal('trial') }
        : { l: 'Explore Products', bg: GOLD, fn: go('home', 'products') };

    // hero
    const f = s.heroFocus;
    const nPos = [20, 50],
      qPos = [80, 50];
    const nC = [
      ['Catalog', 12, 20],
      ['Health', 30, 14],
      ['Ads', 44, 25],
      ['Content', 12, 80],
      ['SEO', 30, 86],
      ['Pricing', 44, 75],
    ];
    const qC = [
      ['Fan-out', 58, 22],
      ['Coverage check', 72, 11],
      ['SERP analyser', 88, 21],
      ['Content brief', 57, 77],
      ['Cited SEO content', 70, 89],
      ['Query cluster map', 87, 79],
      ['Authority recovery', 80, 67],
    ];
    const chipOp = (t) => (f === t ? 1 : f ? (f === 'c' ? 0 : 0.06) : 0.38);
    const heroChips = [...nC.map((c, i) => ['n', c, i]), ...qC.map((c, i) => ['q', c, i])].map(([t, c, i]) => ({
      label: c[0],
      left: c[1] + '%',
      top: c[2] + '%',
      op: chipOp(t),
      t: f === t ? 'translate(-50%,-50%) scale(1)' : 'translate(-50%,-50%) scale(.9)',
      delay: f === t ? i * 50 + 'ms' : '0ms',
      border: t === 'n' ? 'rgba(64,200,224,.45)' : 'rgba(100,168,255,.45)',
      dot: t === 'n' ? EMB : PRI,
    }));
    const heroLines = [...nC.map((c) => ['n', c]), ...qC.map((c) => ['q', c])].map(([t, c]) => {
      const p = t === 'n' ? nPos : qPos;
      return {
        x1: p[0],
        y1: p[1],
        x2: c[1],
        y2: c[2],
        color: t === 'n' ? EMB : PRI,
        op: f === t ? 0.8 : f ? (f === 'c' ? 0 : 0.04) : 0.18,
      };
    });

    // showcase
    const scN = s.showcase === 'nuark';
    const nTabs = this.CHATS.map((c) => ({ t: c.tab, d: c.prompt }));
    const qTabs = [
      { t: 'Query fan-out', d: 'Six intent dimensions from one seed query.' },
      { t: 'Coverage check', d: 'Covered, partial and uncovered — with demand.' },
      { t: 'SERP analyser', d: 'What the ranking pages cover.' },
      { t: 'Content brief', d: 'Gaps and SERP insights, structured.' },
      { t: 'SEO content that gets you cited', d: 'Drafts built to rank and be cited.' },
      { t: 'Query cluster map', d: 'The whole topic landscape.' },
      { t: 'Authority recovery', d: 'Win back lost rankings and citations.' },
    ];
    const acc = scN ? EMB : PRI,
      accRgb = scN ? '64,200,224' : '100,168,255';
    const scTabs = (scN ? nTabs : qTabs).map((t, i) => {
      const on = i === s.scTab;
      return {
        ...t,
        num: '0' + (i + 1),
        onClick: () => {
          this.setState({ scTab: i });
          if (scN) this.runChat(i);
        },
        bg: on ? `rgba(${accRgb},.08)` : 'transparent',
        border: on ? `rgba(${accRgb},.35)` : 'rgba(245,245,247,.06)',
        numColor: on ? acc : '#98989D',
      };
    });
    const statusColor = (st) => (st === 'Live' || st === 'Running' ? '#30D158' : st === 'Awaiting' ? GOLD : '#98989D');
    const sColor = {
      Synced: '#30D158',
      Fixed: '#30D158',
      Ready: '#30D158',
      Scale: '#30D158',
      Flagged: GOLD,
      Review: GOLD,
    };
    const rot = s.tick % this.FEED.length;
    const feedItems = [...this.FEED.slice(rot), ...this.FEED.slice(0, rot)].slice(0, 5).map((x, i) => ({
      ...x,
      bg: i === 0 ? 'rgba(64,200,224,.08)' : 'rgba(0,0,0,.5)',
      sColor: sColor[x.s] || '#C7C7CC',
      sBorder: 'rgba(245,245,247,.12)',
    }));
    const T0 = this.TOPICS[0];

    // ecosystem
    const OUT = [
      ['Customer Experience', 'nq'],
      ['Search Visibility', 'q'],
      ['Digital Growth', 'nq'],
      ['Analytics', 'nq'],
      ['Conversion', 'n'],
      ['Revenue', 'nq'],
    ];
    const e = s.eco;
    const outOn = (o) =>
      !e ||
      e === 'cx' ||
      e === 'os' ||
      (e === 'nuark' && o[1].includes('n')) ||
      (e === 'qp' && o[1].includes('q')) ||
      e === 'o:' + o[0];
    const prodOn = (p) =>
      !e ||
      e === 'cx' ||
      e === 'os' ||
      e === p ||
      (e.startsWith('o:') && OUT.find((o) => 'o:' + o[0] === e)[1].includes(p === 'nuark' ? 'n' : 'q'));
    const ecoDescs = {
      cx: 'CXWorks — the parent brand. A digital customer experience practice spanning eCommerce growth, analytics, merchandising, CRO, growth marketing and AI search visibility.',
      os: 'The operating system: CXWorks\u2019 methods for diagnosing, prioritising and improving digital customer experience — encoded into software both products share.',
      nuark:
        'NUARK is a chat-based agent: 40+ skills across catalog, commerce health, advertising, content, SEO, pricing and brand — grounded in your own data.',
      qp: 'QueryPrism is an SEO, AEO and GEO content intelligence platform: query fan-out, coverage analysis, SERP-led briefs and content generation in one workflow.',
    };
    let ecoDesc =
      'One practice, one operating system, two products — each feeding the outcomes digital teams are measured on.';
    if (e && ecoDescs[e]) ecoDesc = ecoDescs[e];
    else if (e && e.startsWith('o:')) {
      const o = OUT.find((x) => 'o:' + x[0] === e);
      ecoDesc = `${o[0]} — driven by ${o[1] === 'nq' ? 'NUARK and QueryPrism' : o[1] === 'n' ? 'NUARK' : 'QueryPrism'}.`;
    }
    const nOn = prodOn('nuark'),
      qOn = prodOn('qp');

    // nuark page
    const ag = this.AGENTS[s.agent];
    const agentNodes = this.AGENTS.map((a, i) => {
      const ang = ((-90 + i * 60) * Math.PI) / 180,
        on = i === s.agent;
      return {
        label: a.short,
        left: 50 + 37 * Math.cos(ang) + '%',
        top: 50 + 37 * Math.sin(ang) + '%',
        x: 200 + 148 * Math.cos(ang),
        y: 200 + 148 * Math.sin(ang),
        onClick: () => this.setState({ agent: i, agentManual: true }),
        bg: on ? EMB : 'rgba(44,44,46,.92)',
        color: on ? '#000000' : '#F5F5F7',
        border: on ? EMB : 'rgba(64,200,224,.35)',
        t: on ? 'translate(-50%,-50%) scale(1.08)' : 'translate(-50%,-50%)',
        lineOp: on ? 0.9 : 0.2,
        shadow: on ? '0 0 40px -6px rgba(64,200,224,.7)' : 'none',
      };
    });
    const approvalsList = s.approvals.map((i) => ({
      ...this.APPROVALS[i],
      onApprove: () =>
        this.setState((st) => ({ approvals: st.approvals.filter((x) => x !== i), resolved: st.resolved + 1 })),
      onDecline: () => this.setState((st) => ({ approvals: st.approvals.filter((x) => x !== i) })),
    }));
    const wfS = isMobile ? 3 : s.wfStep;
    const wfSteps = this.WF.map((w, i) => ({
      ...w,
      n: '0' + (i + 1),
      op: i <= wfS ? 1 : 0.32,
      border: i === wfS ? EMB : i < wfS ? 'rgba(64,200,224,.35)' : 'rgba(245,245,247,.08)',
      bg: i === wfS ? 'rgba(64,200,224,.08)' : 'rgba(245,245,247,.02)',
      dot: i <= wfS ? EMB : 'rgba(245,245,247,.2)',
      exOp: i <= wfS ? 1 : 0,
    }));
    const archLayers = this.ARCH.map((a, i) => ({
      ...a,
      n: '0' + (i + 1),
      onEnter: () => this.setState({ arch: i }),
      border: i === s.arch ? 'rgba(64,200,224,.6)' : 'rgba(245,245,247,.08)',
      bg: i === s.arch ? 'rgba(64,200,224,.09)' : 'rgba(245,245,247,.025)',
      dOp: i === s.arch ? 1 : 0,
      dH: i === s.arch ? '60px' : '0px',
      nColor: i === s.arch ? EMB : '#98989D',
    }));

    // query prism page
    const T = this.TOPICS[s.topic],
      fs = s.fanStage,
      dataMode = s.fanMode === 'data';
    const fmtV = (v) => (v >= 1000 ? (v / 1000).toFixed(1).replace('.0', '') + 'k' : String(v));
    const tc = T.topic.charAt(0).toUpperCase() + T.topic.slice(1),
      tpl = (x) => x.split('{t}').join(T.topic).split('{T}').join(tc);
    const subs = [];
    T.intents.forEach((it, j) =>
      it.subs.forEach((sb, k) => subs.push({ q: sb[0], c: sb[1], v: sb[2], intent: it.name, j, k })),
    );
    const RH = 40;
    const fanIntents = T.intents.map((it, j) => {
      const cy = (2 * j + 1) * RH;
      return {
        name: it.name,
        top: cy - 18 + 'px',
        op: fs >= 1 ? 1 : 0,
        t: fs >= 1 ? 'none' : 'translateX(-12px)',
        delay: j * 60 + 'ms',
        cy,
        demand: fmtV(it.subs.reduce((a, b) => a + b[2], 0)),
        demandOp: dataMode ? 1 : 0,
      };
    });
    const fanSubs = subs.map((sb, i) => ({
      q: sb.q,
      top: i * RH + 4 + 'px',
      op: fs >= 2 ? 1 : 0,
      t: fs >= 2 ? 'none' : 'translateX(-12px)',
      delay: i * 35 + 'ms',
      covOp: fs >= 3 ? 1 : 0,
      covDelay: i * 40 + 'ms',
      ...COV[sb.c],
      covLabel: COV[sb.c].label,
      vol: fmtV(sb.v) + '/mo',
      volOp: dataMode ? 1 : 0,
    }));
    const fanPaths = [
      ...fanIntents.map((it) => ({
        d: `M17 240 C21 240 20 ${it.cy} 24 ${it.cy}`,
        color: 'rgba(100,168,255,.55)',
        op: fs >= 1 ? 1 : 0,
      })),
      ...subs.map((sb, i) => {
        const iy = fanIntents[sb.j].cy,
          y = i * RH + RH / 2;
        return {
          d: `M44 ${iy} C48 ${iy} 47 ${y} 51 ${y}`,
          color: fs >= 3 ? COV[sb.c].color : 'rgba(100,168,255,.4)',
          op: fs >= 2 ? 0.75 : 0,
        };
      }),
    ];
    const fanList = T.intents.map((it) => ({
      name: it.name,
      subs: it.subs.map((sb) => ({ q: sb[0], ...COV[sb[1]], vol: dataMode ? fmtV(sb[2]) + '/mo' : '' })),
    }));
    const counts = { c: 0, p: 0, m: 0 };
    subs.forEach((x) => counts[x.c]++);
    const topicChips = this.TOPICS.map((t, i) => ({
      label: t.topic,
      onClick: () => {
        this.setState({ topic: i, covState: 'idle', covStep: 0, genState: 'idle', genStep: 0, cluster: null });
        this.runFan();
      },
      bg: i === s.topic ? 'rgba(100,168,255,.14)' : 'transparent',
      border: i === s.topic ? 'rgba(100,168,255,.6)' : 'rgba(245,245,247,.12)',
      color: i === s.topic ? '#F5F5F7' : '#98989D',
    }));
    const score = Math.round(((counts.c + counts.p * 0.5) / subs.length) * 100);
    const covSteps = ['Page content', 'Query set', 'Coverage analysis', 'Gaps & demand'].map((t, i) => ({
      t,
      n: '0' + (i + 1),
      on: true,
      border: 'rgba(100,168,255,.45)',
      color: PRI,
      mark: '✓',
    }));
    const covRows = subs.map((x) => {
      const sb = T.intents[x.j].subs[x.k];
      const quote = sb[3] || '';
      return {
        q: x.q,
        intent: x.intent,
        ...COV[x.c],
        vol: fmtV(x.v) + '/mo',
        quote: quote ? '\u201C' + quote + '\u201D' : '',
        hasQuote: !!quote,
        build:
          x.c === 'c' ? 'On your page' : x.v >= 700 || x.intent === 'Compare' ? 'Own page' : 'Section on this page',
        buildColor: x.c === 'c' ? '#30D158' : x.v >= 700 || x.intent === 'Compare' ? '#64A8FF' : '#C7C7CC',
      };
    });
    const ownPageCount = covRows.filter((r) => r.build === 'Own page').length;
    const covMissing = subs
      .filter((x) => x.c !== 'c')
      .sort((a, b) => (a.c === 'm' ? 0 : 1) - (b.c === 'm' ? 0 : 1) || b.v - a.v)
      .slice(0, 4)
      .map((x) => ({ q: x.q, fix: this.FIX[x.intent], intent: x.intent, vol: fmtV(x.v) + '/mo', ...COV[x.c] }));
    const totalDemand = subs.reduce((a, b) => a + b.v, 0),
      gapDemand = subs.filter((x) => x.c !== 'c').reduce((a, b) => a + b.v, 0);
    // SERP -> brief -> generation
    const serpRows = this.SERP.map((r, i) => ({
      rank: i + 1,
      d: r[0],
      type: r[1],
      title: tpl(r[4]),
      words: r[3] ? r[3].toLocaleString() : '—',
      dots: r[2].map((on, k) => ({ c: on ? PRI : 'rgba(245,245,247,.12)', k: T.intents[k].name })),
    }));
    const briefSecs = T.intents.map((it, j) => {
      const has = (c) => it.subs.some((x) => x[1] === c);
      const st = has('m') ? 'New section' : has('p') ? 'Expand' : 'Keep';
      return {
        h: tpl(this.H2[it.name]),
        intent: it.name,
        st,
        stColor: st === 'New section' ? '#FF6961' : st === 'Expand' ? GOLD : '#30D158',
        qs: it.subs.map((x) => ({ q: x[0], color: COV[x[1]].color })),
      };
    });
    const genSecs = briefSecs.map((b, i) => {
      const done = s.genStep > i,
        cur = s.genState === 'running' && s.genStep === i;
      return {
        h: b.h,
        st: done ? 'Drafted · ' + (240 + ((i * 97) % 180)) + ' words' : cur ? 'Writing…' : 'Queued',
        stColor: done ? '#30D158' : cur ? PRI : '#98989D',
        op: done || cur ? 1 : 0.45,
        bar: done ? '100%' : cur ? '55%' : '0%',
      };
    });
    const qpSteps = ['SERP analysis', 'Content brief', 'Content generation'].map((t, i) => ({
      t,
      n: '0' + (i + 1),
      onClick: () => this.setState({ qpStep: i }),
      bg: s.qpStep === i ? 'rgba(100,168,255,.14)' : 'transparent',
      border: s.qpStep === i ? 'rgba(100,168,255,.6)' : 'rgba(245,245,247,.1)',
      color: s.qpStep === i ? '#F5F5F7' : '#98989D',
    }));
    // cluster map
    const CL = s.cluster,
      links = this.CLUSTER_LINKS;
    const maxD = Math.max(...T.intents.map((it) => it.subs.reduce((a, b) => a + b[2], 0)));
    const clusters = T.intents.map((it, j) => {
      const ang = ((-90 + j * 60) * Math.PI) / 180,
        x = 300 + 190 * Math.cos(ang),
        y = 220 + 150 * Math.sin(ang);
      const d = it.subs.reduce((a, b) => a + b[2], 0),
        cov = Math.round(
          (it.subs.reduce((a, b) => a + (b[1] === 'c' ? 1 : b[1] === 'p' ? 0.5 : 0), 0) / it.subs.length) * 100,
        );
      const related =
        CL === null || CL === j || links.some((l) => (l[0] === CL && l[1] === j) || (l[1] === CL && l[0] === j));
      const color = cov >= 75 ? '#30D158' : cov >= 50 ? GOLD : '#FF6961';
      return {
        name: it.name,
        x,
        y,
        left: (x / 600) * 100 + '%',
        top: (y / 440) * 100 + '%',
        size: Math.round(64 + (46 * d) / maxD) + 'px',
        demand: fmtV(d),
        cov,
        color,
        op: related ? 1 : 0.3,
        border: CL === j ? color : 'rgba(100,168,255,.35)',
        bg: CL === j ? 'rgba(100,168,255,.16)' : 'rgba(28,28,30,.92)',
        t: CL === j ? 'translate(-50%,-50%) scale(1.1)' : 'translate(-50%,-50%)',
        onEnter: () => this.setState({ cluster: j }),
        subs: it.subs.map((sb, k) => {
          const a2 = ang + (k ? 0.42 : -0.42);
          return { x: x + 78 * Math.cos(a2), y: y + 70 * Math.sin(a2), c: COV[sb[1]].color, r: CL === j ? 7 : 5 };
        }),
      };
    });
    const clusterLinks = links.map((l) => ({
      x1: clusters[l[0]].x,
      y1: clusters[l[0]].y,
      x2: clusters[l[1]].x,
      y2: clusters[l[1]].y,
      op: CL === null ? 0.35 : l[0] === CL || l[1] === CL ? 0.9 : 0.08,
    }));
    const clusterSubLines = clusters.flatMap((c, j) =>
      c.subs.map((sb) => ({ x1: c.x, y1: c.y, x2: sb.x, y2: sb.y, op: CL === null || CL === j ? 0.5 : 0.1 })),
    );
    const clusterDots = clusters.flatMap((c, j) =>
      c.subs.map((sb) => ({ x: sb.x, y: sb.y, c: sb.c, r: sb.r, op: CL === null || CL === j ? 1 : 0.25 })),
    );
    const clCur = CL === null ? null : clusters[CL];
    const A = this.AIQ[s.aiQuery],
      st = s.aiStage;
    const mentioned = A.eng.filter((x) => x[1]).length,
      cited = A.eng.filter((x) => x[3]).length;
    const ownCite = A.cites.find((c) => c[1]);
    const aiPipe = [
      { k: 'Query', v: A.q },
      { k: 'AI engines', v: '4 engines sampled' },
      {
        k: 'Brand mention',
        v: mentioned ? `Kestrel in ${mentioned} of 4` : 'Not mentioned',
        tone: mentioned ? '#30D158' : '#FF6961',
      },
      {
        k: 'Competitor',
        v:
          A.seg
            .filter((x) => x[1] === 'comp')
            .map((x) => x[0].split(' ')[0])
            .filter((v, i, a) => a.indexOf(v) === i)
            .join(', ') || 'None',
      },
      {
        k: 'Citation',
        v: ownCite ? `Cited in ${cited} of 4 · ${ownCite[0]}` : 'Your pages not cited',
        tone: ownCite ? '#30D158' : '#FF6961',
      },
    ].map((p, i) => ({
      ...p,
      n: '0' + (i + 1),
      op: st > i ? 1 : 0.25,
      border: st > i ? 'rgba(100,168,255,.4)' : 'rgba(245,245,247,.08)',
      tone: p.tone || '#F5F5F7',
      arrowOp: st > i + 1 ? 1 : 0.2,
    }));
    const aiSegs = A.seg.map((x) => ({
      t: x[0],
      color: x[1] === 'brand' ? '#000000' : x[1] === 'comp' ? '#F5F5F7' : '#C7C7CC',
      bg: x[1] === 'brand' ? PRI : x[1] === 'comp' ? 'rgba(245,245,247,.12)' : 'transparent',
      pad: x[1] ? '1px 6px' : '0',
    }));
    const aiCites = A.cites.map((c, i) => ({
      n: i + 1,
      d: c[0],
      color: c[1] ? PRI : '#98989D',
      tag: c[1] ? 'Your page' : '',
    }));
    const aiEng = A.eng.map((x) => ({
      n: x[0],
      m: x[1] ? `Yes · #${x[2]}` : 'No',
      mColor: x[1] ? '#30D158' : '#FF6961',
      c: x[3] ? 'Cited' : 'Not cited',
      cColor: x[3] ? '#30D158' : '#98989D',
    }));
    const aiQs = this.AIQ.map((q, i) => ({
      q: q.q,
      onClick: () => this.runAI(i),
      bg: i === s.aiQuery ? 'rgba(100,168,255,.12)' : 'transparent',
      border: i === s.aiQuery ? 'rgba(100,168,255,.55)' : 'rgba(245,245,247,.1)',
      color: i === s.aiQuery ? '#F5F5F7' : '#98989D',
    }));
    const L = s.layer;
    const qpLayers = this.LAYERS.map((l, i) => ({
      ...l,
      n: '0' + (i + 1),
      plus: i < this.LAYERS.length - 1,
      onEnter: () => this.setState({ layer: i }),
      border: L === i ? 'rgba(100,168,255,.6)' : 'rgba(245,245,247,.08)',
      bg: L === i ? 'rgba(100,168,255,.1)' : 'rgba(245,245,247,.025)',
      op: L === null || L === i ? 1 : 0.45,
    }));
    const priorities = this.PRIORITIES.map((p, i) => {
      const on = L === null || p.uses.includes(L);
      return {
        ...p,
        n: i + 1,
        op: on ? 1 : 0.3,
        border: on && L !== null ? 'rgba(100,168,255,.45)' : 'rgba(245,245,247,.08)',
        tags: p.uses.map((u) => this.LAYERS[u].t).join(' · '),
      };
    });

    // modal
    const M = s.modal,
      isW = M === 'waitlist',
      er = s.errors;
    const fldMeta = {
      name: ['text', 'name', 'words'],
      email: ['email', 'email', 'off'],
      company: ['text', 'organization', 'words'],
    };
    const fld = (key, label, ph) => ({
      key,
      label,
      placeholder: ph,
      type: (fldMeta[key] || ['text'])[0],
      ac: (fldMeta[key] || ['', 'off'])[1],
      cap: (fldMeta[key] || ['', '', 'off'])[2],
      value: s.form[key],
      error: er[key] || '',
      hasError: !!er[key],
      border: er[key] ? 'rgba(255,105,97,.7)' : 'rgba(245,245,247,.14)',
      onChange: (ev) => {
        const v = ev.target.value;
        this.setState((x) => ({ form: { ...x.form, [key]: v }, errors: { ...x.errors, [key]: undefined } }));
      },
    });
    const mAcc = isW ? EMB : PRI,
      mRgb = isW ? '64,200,224' : '100,168,255';
    const chip = (label, on, fn) => ({
      label,
      onClick: fn,
      bg: on ? `rgba(${mRgb},.16)` : 'rgba(245,245,247,.03)',
      border: on ? mAcc : 'rgba(245,245,247,.14)',
      color: on ? '#F5F5F7' : '#C7C7CC',
    });
    const roles = [
      'Executive / Founder',
      'eCommerce',
      'Marketing',
      'Merchandising',
      'Data & Analytics',
      'Product / Tech',
      'Agency',
    ];
    const roleChips = roles.map((r) =>
      chip(r, s.role === r, () => this.setState((x) => ({ role: r, errors: { ...x.errors, role: undefined } }))),
    );
    const interestChips = this.AGENTS.map((a) => a.name).map((n) =>
      chip(n, s.interests.includes(n), () =>
        this.setState((x) => ({
          interests: x.interests.includes(n) ? x.interests.filter((y) => y !== n) : [...x.interests, n],
          errors: { ...x.errors, interests: undefined },
        })),
      ),
    );

    return {
      contactUrl: C.contactUrl,
      insightsUrl: C.insightsUrl,
      cxworksUrl: C.cxworksUrl,
      isHome,
      isNuark,
      isQP,
      isNarrow,
      isMobile,
      isDesktop: !isMobile,
      showNavLinks: !isNarrow,
      menuOpen: s.menuOpen,
      navOuterPad: s.scrolled ? '10px 16px' : '16px 16px',
      navH: s.scrolled ? '58px' : '68px',
      navBg: s.scrolled || s.menuOpen ? 'rgba(28,28,30,.72)' : 'rgba(28,28,30,0)',
      navBorder: s.scrolled ? 'rgba(245,245,247,.1)' : 'rgba(245,245,247,0)',
      navGap: isMobile ? '10px' : '28px',
      navPadL: isMobile ? '14px' : '20px',
      showNavCta: s.vw >= 440,
      navItems,
      navCtaLabel: navCta.l,
      navCtaBg: navCta.bg,
      navCtaClick: navCta.fn,
      hasCrumb: !isHome && !isMobile,
      crumb: isNuark ? 'NUARK' : 'QueryPrism',
      crumbColor: isNuark ? EMB : PRI,
      toggleMenu: () => this.setState((x) => ({ menuOpen: !x.menuOpen })),
      burgerTop: s.menuOpen ? 'translateY(3.25px) rotate(45deg)' : 'none',
      burgerBot: s.menuOpen ? 'translateY(-3.25px) rotate(-45deg)' : 'none',
      pageOp: s.pageVis ? 1 : 0,
      pageT: s.pageVis ? 'none' : 'translateY(10px)',
      goHome: go('home'),
      goProducts: go('home', 'products'),
      goAbout: go('home', 'about'),
      goNuark: go('nuark'),
      goQP: go('query-prism'),
      goAgents: () => this.scrollToId('agents'),
      goApp: () => this.scrollToId('app'),
      goTrialQP: () => this.scrollToId('trial'),
      goWaitlistNuark: () => this.scrollToId('nuark-waitlist'),
      goHow: () => this.scrollToId('how'),
      openWaitlist: () => this.openModal('waitlist'),
      openTrial: () => this.openModal('trial'),
      openApp: () => this.openModal('trial'),
      // hero
      stageRef: this.stageRef,
      onStageMove: (ev) => {
        if (this.props.reducedMotion || isMobile) return;
        const r = ev.currentTarget.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width - 0.5,
          y = (ev.clientY - r.top) / r.height - 0.5;
        if (this.stageRef.current) this.stageRef.current.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
      },
      onStageLeave: () => {
        if (this.stageRef.current) this.stageRef.current.style.transform = 'none';
      },
      focusC: () => s.heroFocus !== 'c' && this.setState({ heroFocus: 'c' }),
      coreT: f === 'c' ? 'translate(-50%,-50%) scale(1.35)' : 'translate(-50%,-50%)',
      heroInfoC: f === 'c',
      focusN: () => s.heroFocus !== 'n' && this.setState({ heroFocus: 'n' }),
      focusQ: () => s.heroFocus !== 'q' && this.setState({ heroFocus: 'q' }),
      heroChips,
      heroLines,
      mainN: f === 'c' ? 0.9 : f === 'q' ? 0.1 : f === 'n' ? 0.9 : 0.4,
      mainQ: f === 'c' ? 0.9 : f === 'n' ? 0.1 : f === 'q' ? 0.9 : 0.4,
      glowN: f === 'n' ? 1 : 0,
      glowQ: f === 'q' ? 1 : 0,
      nodeNT:
        f === 'n'
          ? 'translate(-50%,-50%) scale(1.14)'
          : f === 'q'
            ? 'translate(-50%,-50%) scale(.88)'
            : 'translate(-50%,-50%)',
      nodeNOp: f === 'q' ? 0.4 : 1,
      nodeNShadow: f === 'n' ? '0 0 60px -8px rgba(64,200,224,.75)' : '0 10px 30px -12px rgba(0,0,0,.8)',
      nodeQT:
        f === 'q'
          ? 'translate(-50%,-50%) scale(1.14)'
          : f === 'n'
            ? 'translate(-50%,-50%) scale(.88)'
            : 'translate(-50%,-50%)',
      nodeQOp: f === 'n' ? 0.4 : 1,
      nodeQShadow: f === 'q' ? '0 0 60px -8px rgba(100,168,255,.75)' : '0 10px 30px -12px rgba(0,0,0,.8)',
      heroInfoDefault: !f,
      heroInfoN: f === 'n',
      heroInfoQ: f === 'q',
      heroInfoBorder:
        f === 'c'
          ? 'rgba(64,200,224,.45)'
          : f === 'n'
            ? 'rgba(64,200,224,.4)'
            : f === 'q'
              ? 'rgba(100,168,255,.4)'
              : 'rgba(245,245,247,.09)',
      disciplines: [
        'Digital Customer Experience',
        'eCommerce growth',
        'Analytics',
        'Merchandising',
        'CRO',
        'Growth marketing',
        'AI search visibility',
      ],
      // cards
      hoverCardN: () => this.setState({ cardHover: 'n' }),
      hoverCardQ: () => this.setState({ cardHover: 'q' }),
      hoverCardOff: () => this.setState({ cardHover: null }),
      cardNT: s.cardHover === 'n' ? 'translateY(-6px)' : 'none',
      cardQT: s.cardHover === 'q' ? 'translateY(-6px)' : 'none',
      cardNBorder: s.cardHover === 'n' ? 'rgba(64,200,224,.5)' : 'rgba(64,200,224,.2)',
      cardQBorder: s.cardHover === 'q' ? 'rgba(100,168,255,.5)' : 'rgba(100,168,255,.2)',
      cardNShadow: s.cardHover === 'n' ? '0 40px 100px -40px rgba(64,200,224,.45)' : '0 20px 60px -40px rgba(0,0,0,.8)',
      cardQShadow: s.cardHover === 'q' ? '0 40px 100px -40px rgba(100,168,255,.4)' : '0 20px 60px -40px rgba(0,0,0,.8)',
      cardNodes: this.AGENTS.map((a, i) => {
        const ang = (i * 60 * Math.PI) / 180;
        const x = 200 + 135 * Math.cos(ang),
          y = 120 + 78 * Math.sin(ang);
        return { x, y, ly: y > 120 ? y + 20 : y - 13, label: a.short, delay: i * 0.4 + 's', dur: 1.4 + i * 0.2 + 's' };
      }),
      cardCaps: this.AGENTS.map((a) => ({ label: a.name + ' · ' + a.count, dot: statusColor(a.status) })),
      qpCardRows: T0.intents
        .slice(0, 5)
        .map((it) => it.subs[0])
        .map((x, i) => ({ q: x[0], ...COV[x[1]], delay: i * 0.12 + 's' })),
      qpTools: [
        'Query fan-out',
        'Coverage check',
        'SERP analyser',
        'Content brief',
        'SEO content that gets you cited',
        'Query cluster map',
        'Authority recovery',
      ].map((t, i) => ({ t, n: '0' + (i + 1) })),
      // showcase
      scCols: isNarrow ? 'minmax(0, 1fr)' : 'minmax(260px, 340px) minmax(0, 1fr)',
      pillLeft: scN ? '4px' : '50%',
      pillBg: scN ? EMB : PRI,
      tglNColor: scN ? '#000000' : '#98989D',
      tglQColor: scN ? '#98989D' : '#000000',
      setScN: () => {
        this.setState({ showcase: 'nuark', scTab: s.chat });
      },
      setScQ: () => this.setState({ showcase: 'qp', scTab: 0 }),
      scTabs,
      isScN: scN,
      isScQ: !scN,
      scAccent: acc,
      scPanelTitle: (scN ? 'NUARK · ' : 'QueryPrism · ') + (scN ? nTabs : qTabs)[s.scTab].t,
      scPanelBg: scN
        ? 'radial-gradient(80% 60% at 100% 0%, rgba(64,200,224,.1), transparent 60%), #1C1C1E'
        : 'radial-gradient(80% 60% at 100% 0%, rgba(100,168,255,.1), transparent 60%), #1C1C1E',
      scPanelBorder: scN ? 'rgba(64,200,224,.2)' : 'rgba(100,168,255,.2)',
      scN0: scN && s.scTab === 0,
      scN1: scN && s.scTab === 1,
      scN2: scN && s.scTab === 2,
      scN3: scN && s.scTab === 3,
      scQ0: !scN && s.scTab === 0,
      scQ1: !scN && s.scTab === 1,
      scQ2: !scN && s.scTab === 2,
      scQ3: !scN && s.scTab === 3,
      scQ4: !scN && s.scTab === 4,
      scQ5: !scN && s.scTab === 5,
      scQ6: !scN && s.scTab === 6,
      serpMini: this.SERP.map((r, i) => ({
        rank: i + 1,
        d: r[0],
        type: r[1],
        title: r[4]
          .split('{t}')
          .join('bathroom and kitchen showroom')
          .split('{T}')
          .join('Bathroom and kitchen showroom'),
        dots: r[2].map((on) => ({ c: on ? PRI : 'rgba(245,245,247,.12)' })),
      })),
      citeFeatures: [
        'Direct-answer definitions',
        'FAQ & HowTo schema',
        'Comparison tables',
        'Every gap query answered',
        'Entity-rich headings',
      ],
      clusterMini: (() => {
        const mx = Math.max(...T0.intents.map((it) => it.subs.reduce((a, b) => a + b[2], 0)));
        return T0.intents.map((it) => {
          const d = it.subs.reduce((a, b) => a + b[2], 0),
            cov = Math.round(
              (it.subs.reduce((a, b) => a + (b[1] === 'c' ? 1 : b[1] === 'p' ? 0.5 : 0), 0) / it.subs.length) * 100,
            );
          return {
            name: it.name,
            w: Math.round((d / mx) * 100) + '%',
            demand: (d >= 1000 ? (d / 1000).toFixed(1).replace('.0', '') + 'k' : d) + '/mo',
            cov,
            color: cov >= 75 ? '#30D158' : cov >= 50 ? GOLD : '#FF6961',
          };
        });
      })(),
      authRows: [
        {
          p: '/showrooms/houston',
          drop: 'Position 4 → 12 · dropped from the AI Overview',
          fix: 'Answer \u201Cwhat to expect at a showroom visit\u201D',
        },
        {
          p: '/bathroom-vanities',
          drop: 'Lost 3 AI citations in 60 days',
          fix: 'Add vanity size and height answers near headings',
        },
        { p: '/kitchen-cabinets', drop: 'Clicks −31% in 90 days', fix: 'Add a cabinet styles comparison section' },
        {
          p: '/style-finder-quiz',
          drop: 'New questions it doesn\u2019t answer',
          fix: 'Add a short FAQ for quiz results',
        },
      ],
      scAgents: this.AGENTS.map((a) => ({
        name: a.name,
        status: '0' + a.count + ' agents',
        mini: a.tagline,
        list: a.agents.join(' · '),
        sColor: statusColor(a.status),
      })),
      scFlow: this.WF.map((w, i) => ({
        n: '0' + (i + 1),
        t: w.t,
        d: w.ex,
        line: i < 3 ? 'rgba(64,200,224,.35)' : 'transparent',
      })),
      feedItems,
      capList: [
        { t: 'Classification & enrichment', d: 'Categories, attributes and feed mapping for every marketplace.' },
        { t: 'Catalogue images & video', d: 'Listings go live without waiting on a studio.' },
        { t: 'Storefront & SEO audits', d: 'Taxonomy, facets, images, on-page and technical SEO.' },
        { t: 'AI visibility auditing', d: 'How the brand shows up in AI answer engines.' },
        { t: 'Ad creative & scoring', d: 'Copy, creative and video — scored against winners.' },
        { t: 'Content at scale', d: 'SEO copy, articles, briefs, PR, FAQ and social.' },
        { t: 'Keyword & SERP intelligence', d: 'Clusters, competitors, backlinks and local SEO.' },
        { t: 'Pricing & brand protection', d: 'Competitor prices, assortment gaps, contract checks.' },
      ],
      fanMini: T0.intents.map((it) => ({
        name: it.name,
        subs: it.subs.map((x) => ({ q: x[0], color: COV[x[1]].color })),
      })),
      siRows: T0.intents
        .flatMap((it) => it.subs.map((x) => [x[0], it.name, x[2]]))
        .sort((a, b) => b[2] - a[2])
        .slice(0, 6)
        .map((r) => ({
          q: r[0],
          i: r[1],
          v: r[2] >= 1000 ? (r[2] / 1000).toFixed(1).replace('.0', '') + 'k' : r[2],
          w: Math.round((r[2] / 22000) * 100) + '%',
          f: {
            Define: 'AI Overview',
            Segment: 'Shopping',
            Evaluate: 'AI Overview',
            Compare: 'People also ask',
            'How To': 'Video',
            Adjacent: 'People also ask',
          }[r[1]],
        })),
      covMini: subs.length
        ? this.TOPICS[0].intents.flatMap((it) =>
            it.subs.filter((x) => x[1] === 'm').map((x) => ({ q: x[0], fix: this.FIX[it.name] })),
          )
        : [],
      sovRows: [
        ['ChatGPT', 42, 31, 14],
        ['Perplexity', 57, 24, 11],
        ['Gemini', 18, 46, 22],
        ['AI Overviews', 36, 33, 19],
      ].map((r) => ({ n: r[0], a: r[1] + '%', b: r[2] + '%', c: r[3] + '%', v: r[1] + '%' })),
      // ecosystem
      ecoOff: () => this.setState({ eco: null }),
      ecoCx: () => this.setState({ eco: 'cx' }),
      ecoOs: () => this.setState({ eco: 'os' }),
      ecoN: () => this.setState({ eco: 'nuark' }),
      ecoQ: () => this.setState({ eco: 'qp' }),
      ecoCxBorder: e === 'cx' ? GOLD : 'rgba(64,200,224,.35)',
      ecoCxOp: 1,
      ecoOsBorder: e === 'os' ? GOLD : 'rgba(245,245,247,.12)',
      ecoOsOp: 1,
      ecoNBorder: e === 'nuark' ? EMB : 'rgba(64,200,224,.3)',
      ecoQBorder: e === 'qp' ? PRI : 'rgba(100,168,255,.3)',
      ecoNOp: nOn ? 1 : 0.3,
      ecoQOp: qOn ? 1 : 0.3,
      ecoNT: e === 'nuark' ? 'translateY(-3px)' : 'none',
      ecoQT: e === 'qp' ? 'translateY(-3px)' : 'none',
      ecoLineN: nOn ? EMB : 'rgba(245,245,247,.12)',
      ecoLineQ: qOn ? PRI : 'rgba(245,245,247,.12)',
      ecoOutcomes: OUT.map((o) => {
        const on = outOn(o);
        return {
          name: o[0],
          onEnter: () => this.setState({ eco: 'o:' + o[0] }),
          op: on ? 1 : 0.28,
          border: e === 'o:' + o[0] ? GOLD : on && e ? 'rgba(245,245,247,.25)' : 'rgba(245,245,247,.08)',
          bg: e === 'o:' + o[0] ? 'rgba(64,200,224,.08)' : 'rgba(245,245,247,.025)',
          nDot: o[1].includes('n') ? 1 : 0.12,
          qDot: o[1].includes('q') ? 1 : 0.12,
        };
      }),
      ecoDesc,
      aboutRows: [
        {
          k: 'Practice',
          v: 'Digital customer experience, eCommerce growth, analytics, merchandising, CRO and growth marketing.',
        },
        { k: 'Search', v: 'AI search visibility work that became QueryPrism.' },
        { k: 'Operations', v: 'Commerce operations and growth work that became NUARK.' },
        { k: 'Approach', v: 'Products built by the people who do the work — and use it with clients.' },
      ],
      // nuark page
      agentNodes,
      agName: ag.name,
      agAgent: ag.agent,
      agDoes: ag.does,
      agInput: ag.input,
      agProcess: ag.process,
      agOutput: ag.output,
      agResult: ag.result,
      agIdx: '0' + (s.agent + 1) + ' / 06',
      agAuto: !s.agentManual,
      agentManualOn: s.agentManual,
      resumeTour: () => this.setState({ agentManual: false }),
      feedItemsN: feedItems,
      approvalsList,
      hasApprovals: approvalsList.length > 0,
      noApprovals: approvalsList.length === 0,
      approvalsCount: approvalsList.length,
      resolvedCount: s.resolved,
      resetApprovals: () => this.setState({ approvals: [0, 1, 2], resolved: 31 }),
      appCols: isNarrow ? '1fr' : '200px minmax(0,1fr)',
      showSidebar: !isNarrow,
      wfRef: this.wfRef,
      wfBarRef: this.wfBarRef,
      wfSteps,
      wfOuterH: isMobile ? 'auto' : '260vh',
      wfPos: isMobile ? 'relative' : 'sticky',
      wfMinH: isMobile ? 'auto' : '100vh',
      archLayers,
      nuarkRoles: [
        'Ecommerce managers',
        'Catalogue & merchandising',
        'Performance marketers',
        'SEO & content leads',
        'Pricing & brand owners',
      ],
      nuarkFor: [
        {
          t: 'Less tool-switching',
          d: 'One conversation replaces hopping between admin panels, dashboards and point tools.',
        },
        { t: 'Faster answers', d: 'Questions that took an afternoon of pulling reports get answered in minutes.' },
        {
          t: 'Problems caught early',
          d: 'Audits and alerts surface revenue leaks, broken filters or competitor moves before they cost money.',
        },
        {
          t: 'Specialists on demand',
          d: 'Smaller teams get catalogue, SEO, ad and pricing expertise without a specialist for every task.',
        },
        {
          t: 'Cross-functional view',
          d: 'Shared data lets NUARK link an SEO issue to a catalogue gap, or an ad trend to a price change.',
        },
      ],
      areaList: this.AGENTS.map((a, i) => {
        const on = i === s.agent;
        return {
          name: a.name,
          n: '0' + (i + 1),
          countLabel: '0' + a.count + ' AGENTS',
          onClick: () => this.setState({ agent: i, agentManual: true }),
          border: on ? 'rgba(64,200,224,.55)' : 'rgba(245,245,247,.08)',
          bg: on ? 'linear-gradient(135deg, rgba(64,200,224,.16), rgba(44,44,46,.9))' : 'rgba(245,245,247,.02)',
          shadow: on ? '0 20px 40px -24px rgba(64,200,224,.5)' : 'none',
          iconBg: on ? '#40C8E0' : 'rgba(64,200,224,.1)',
          iconColor: on ? '#000000' : '#40C8E0',
          arrowColor: on ? '#40C8E0' : '#98989D',
        };
      }),
      agN: '0' + (s.agent + 1),
      agTagline: ag.tagline,
      agDesc: ag.desc,
      agAgents: ag.agents.map((t, i) => ({ t, n: '0' + (i + 1), delay: i * 45 + 'ms' })),
      chatTabs: this.CHATS.map((c, i) => {
        const on = i === s.chat;
        return {
          tab: c.tab,
          onClick: () => this.runChat(i),
          border: on ? 'rgba(64,200,224,.6)' : 'rgba(245,245,247,.08)',
          bg: on ? 'rgba(64,200,224,.14)' : 'rgba(245,245,247,.02)',
          color: on ? '#7FDCEC' : '#C7C7CC',
          weight: on ? 600 : 400,
          shadow: on ? '0 0 40px -12px rgba(64,200,224,.5)' : 'none',
          arrowOp: on ? 1 : 0,
        };
      }),
      ...(() => {
        const c = this.CHATS[s.chat],
          cs = s.chatStage;
        const good = ['Synced', 'Brief ready', 'Scale'];
        const bad = ['High', 'Gap', 'Pause', 'Review'];
        return {
          chAgent: c.agent,
          chAgentUpper: c.agent.toUpperCase(),
          chPrompt: c.prompt,
          chMeta: c.meta,
          chReply: c.reply,
          chRid: c.rid,
          chHead: c.head,
          chKpis: c.kpis.map((k) => ({ l: k[0], v: k[1] })),
          chCols: c.cols,
          chRows: c.rows.map((r) => ({
            a: r[0],
            b: r[1],
            c: r[2],
            d: r[3],
            dColor: good.includes(r[3]) ? '#30D158' : bad.includes(r[2]) || bad.includes(r[3]) ? '#7FDCEC' : '#C7C7CC',
          })),
          chOp0: cs >= 1 ? 1 : 0,
          chOp1: cs >= 2 ? 1 : 0,
          chOp2: cs >= 3 ? 1 : 0,
          chT2: cs >= 3 ? 'none' : 'translateY(8px)',
          chOp3: cs >= 4 ? 1 : 0,
          chT3: cs >= 4 ? 'none' : 'translateY(12px)',
        };
      })(),
      // qp page
      typeRef: this.typeRef,
      qpHeroChips: T0.intents
        .map((it) => [it.name, it.subs[0][0]])
        .map((x, i) => ({
          k: x[0],
          q: x[1],
          delay: 0.4 + i * 0.12 + 's',
          color: ['#64A8FF', '#A9B4EC', '#B7AEE8', '#9FC9E2', '#93C6D6', '#A3BFF0'][i],
        })),
      topicChips,
      topicName: T.topic,
      replayFan: () => this.runFan(),
      qpFlow: [
        ['Generate your fan-out', 'The sub-queries AI search writes for this topic.', 'fanout'],
        ['Check coverage', 'Covered, partial or missing — with the quote that proves it.', 'coverage'],
        ['SERP analyser', 'What ranks, with data via Ahrefs.', 'serp'],
        ['Content brief', 'Page type, tags, outline, schema, links.', 'serp'],
        ['Content that gets cited', 'Answers an AI can lift, near the right heading.', 'serp'],
        ['Query cluster map', 'Your fan-out plus suggested queries.', 'clusters'],
        ['Authority recovery', 'Win back slipping rankings and citations.', 'recovery'],
      ].map((f, i) => ({
        n: '0' + (i + 1),
        t: f[0],
        d: f[1],
        arrow: i < 6 ? '→' : '↓',
        onClick: () => {
          if (i >= 2 && i <= 4) this.setState({ qpStep: i - 2 });
          this.scrollToId(f[2]);
        },
      })),
      scBrief: this.TOPICS[0].intents.map((it) => {
        const has = (c) => it.subs.some((x) => x[1] === c);
        const st = has('m') ? 'New section' : has('p') ? 'Expand' : 'Keep';
        return {
          h: this.H2[it.name]
            .split('{t}')
            .join('bathroom and kitchen showroom')
            .split('{T}')
            .join('Bathroom and kitchen showroom'),
          st,
          stColor: st === 'New section' ? '#FF6961' : st === 'Expand' ? GOLD : '#30D158',
        };
      }),
      fanModeData: dataMode,
      setGeneric: () => this.setState({ fanMode: 'generic' }),
      setData: () => this.setState({ fanMode: 'data' }),
      genBg: dataMode ? 'transparent' : 'rgba(100,168,255,.16)',
      genColor: dataMode ? '#98989D' : '#F5F5F7',
      dataBg: dataMode ? 'rgba(100,168,255,.16)' : 'transparent',
      dataColor: dataMode ? '#F5F5F7' : '#98989D',
      totalDemand: fmtV(totalDemand) + '/mo',
      gapDemand: fmtV(gapDemand) + '/mo',
      serpRows,
      serpIntents: T.intents.map((it) => it.name),
      briefSecs,
      briefH1: tc + ': the complete guide',
      briefSlug: '/' + T.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      genSecs,
      qpSteps,
      qpS0: s.qpStep === 0,
      qpS1: s.qpStep === 1,
      qpS2: s.qpStep === 2,
      toBrief: () => this.setState({ qpStep: 1 }),
      toGen: () => {
        this.setState({ qpStep: 2 });
        if (s.genState === 'idle') this.runGen();
      },
      runGen: () => this.runGen(),
      genIdle: s.genState === 'idle',
      genRunning: s.genState === 'running',
      genDone: s.genState === 'done',
      genBtn: s.genState === 'done' ? 'Regenerate draft' : s.genState === 'running' ? 'Generating…' : 'Generate draft',
      genIntro: `This guide answers the ${subs.length} questions people search for about ${T.topic} — from definitions and comparisons to how-to steps — built from the coverage gaps and SERP patterns above.`,
      clusters,
      clusterLinks,
      clusterSubLines,
      clusterDots,
      clusterOff: () => this.setState({ cluster: null }),
      clNone: CL === null,
      clSome: CL !== null,
      clName: clCur ? clCur.name : '',
      clDemand: clCur ? clCur.demand + '/mo' : '',
      clCov: clCur ? clCur.cov + '%' : '',
      clColor: clCur ? clCur.color : PRI,
      clQueries: CL === null ? [] : T.intents[CL].subs.map((x) => ({ q: x[0], ...COV[x[1]], vol: fmtV(x[2]) + '/mo' })),
      clRelated:
        CL === null
          ? ''
          : links
              .filter((l) => l.includes(CL))
              .map((l) => T.intents[l[0] === CL ? l[1] : l[0]].name)
              .join(' · '),
      fanIntents,
      fanSubs,
      fanPaths,
      fanList,
      fanRootOp: 1,
      cntC: counts.c,
      cntP: counts.p,
      cntM: counts.m,
      subCount: subs.length,
      covUrl: s.covUrl,
      covPlaceholder: T.url,
      onCovUrl: (ev) => this.setState({ covUrl: ev.target.value }),
      runCoverage: (ev) => {
        if (ev && ev.preventDefault) ev.preventDefault();
        this.runCoverage();
      },
      covRunning: false,
      covIdle: false,
      covDone: true,
      covBtnLabel: s.covState === 'running' ? 'Analysing…' : s.covState === 'done' ? 'Run again' : 'Run coverage check',
      covSteps,
      covRows,
      covMissing,
      ownPageCount,
      citeReady: counts.c,
      covScore: score,
      covDash: `${((score / 100) * 326.7).toFixed(1)} 400`,
      covTarget: T.url,
      aiQs,
      aiPipe,
      aiSegs,
      aiCites,
      aiEng,
      aiQuery: A.q,
      aiShowAnswer: st >= 2,
      aiSummary: `Mentioned in ${mentioned} of 4 engines · cited in ${cited} of 4`,
      qpLayers,
      priorities,
      layerOff: () => this.setState({ layer: null }),
      // modal
      modalOpen: !!M,
      isWaitlist: isW,
      isTrial: M === 'trial',
      showForm: s.status !== 'success',
      showSuccess: s.status === 'success',
      isLoading: s.status === 'loading',
      notLoading: s.status !== 'loading',
      isError: s.status === 'error',
      backdropA: s.modalIn ? 'rgba(6,6,6,.62)' : 'rgba(6,6,6,0)',
      modalOp: s.modalIn ? 1 : 0,
      modalT: s.modalIn ? 'none' : 'translateY(16px) scale(.98)',
      modalBorder: `rgba(${mRgb},.28)`,
      modalAccent: mAcc,
      modalGlow: `radial-gradient(80% 50% at 50% 0%, rgba(${mRgb},.16), transparent 70%)`,
      closeModal: () => this.closeModal(),
      stop: (ev) => ev.stopPropagation(),
      submit: (ev) => this.submit(ev),
      fields: [
        fld('name', 'Full name', 'Alex Morgan'),
        fld('email', 'Work email', 'alex@company.com'),
        fld('company', 'Company', 'Company name'),
      ],
      roleChips:
        isW || !M
          ? roleChips.map((c) => ({
              ...c,
              bg: c.bg.split('100,168,255').join('64,200,224'),
              border: c.border === PRI ? EMB : c.border,
            }))
          : roleChips,
      interestChips: interestChips.map((c) => ({
        ...c,
        bg: c.bg.split('100,168,255').join('64,200,224'),
        border: c.border === PRI ? EMB : c.border,
      })),
      ...(() => {
        const A = s.app,
          rows = this.APP_ROWS;
        const CV = { covered: ['Covered', '#30D158'], partial: ['Partial', GOLD], missing: ['Missing', '#FF6961'] };
        const SC = {
          Define: '#30D158',
          Segment: '#6FD1C0',
          Evaluate: '#B9A0F5',
          Compare: '#64A8FF',
          'How-to': '#F0A877',
          Adjacent: '#C7C7CC',
        };
        const FUN = { Awareness: 'TOFU', Consideration: 'MOFU', Decision: 'BOFU' };
        const fv = (v) => (v >= 1000 ? (v / 1000).toFixed(1).replace('.0', '') + 'K' : String(v));
        const own = (r) => r.qdp >= 70;
        const nav = [
          ['overview', 'Overview'],
          ['fanout', 'Query Fanout'],
          ['runs', 'Runs / history'],
          ['briefs', 'Briefs'],
          ['clusters', 'Cluster map'],
          ['recovery', 'Authority Recovery'],
        ];
        const setup = [
          ['config', 'Configuration'],
          ['usecases', 'Use cases'],
        ];
        const navItem = ([k, l]) => {
          const on =
            A.screen === k || (k === 'briefs' && A.screen === 'brief') || (k === 'fanout' && A.screen === 'new');
          return {
            l,
            on,
            bg: on ? 'rgba(100,168,255,.12)' : 'transparent',
            color: on ? '#F5F5F7' : '#98989D',
            badge: k === 'briefs' ? String(A.briefs.length) : k === 'recovery' ? 'Soon' : '',
            onClick: () => this.appSet({ screen: k, wsOpen: false, exportOpen: false }),
          };
        };
        const flt = A.filter;
        const vis = rows
          .map((r, i) => ({ r, i }))
          .filter(({ r }) => flt === 'all' || (flt === 'own' ? own(r) : r.cov === flt));
        const mk = ({ r, i }) => {
          const open = A.open === i,
            picked = A.picked.includes(i),
            inBrief = A.briefs.some((b) => b.i === i);
          return {
            q: r.q,
            seg: r.f,
            segColor: SC[r.f],
            cov: CV[r.cov][0],
            covColor: CV[r.cov][1],
            qdp: r.qdp,
            qdpW: r.qdp + '%',
            qdpColor: own(r) ? PRI : '#8E8E93',
            build: r.cov === 'covered' ? 'On your page' : own(r) ? 'Own page · ' + r.type : 'Section on this page',
            buildColor: r.cov === 'covered' ? '#30D158' : own(r) ? PRI : '#C7C7CC',
            open,
            picked,
            check: picked ? '✓' : '',
            checkBg: picked ? PRI : 'transparent',
            checkBorder: picked ? PRI : 'rgba(245,245,247,.25)',
            rowBg: open ? 'rgba(100,168,255,.06)' : 'transparent',
            chev: open ? '−' : '+',
            why: r.why,
            on: r.on,
            quote: r.quote ? '\u201C' + r.quote + '\u201D' : '',
            hasQuote: !!r.quote,
            term: r.term ? r.term[0] + ' · ' + fv(r.term[1]) + '/mo · KD ' + r.term[2] : 'No real search term matched',
            intent: r.intent + (r.also ? ' · also ' + r.also : ''),
            funnel: FUN[r.stage] + ' · ' + r.stage,
            ptype: r.type,
            inBrief,
            briefLabel: inBrief ? 'In briefs ✓' : 'Generate content brief',
            onToggle: () => this.appSet((a) => ({ open: a.open === i ? null : i })),
            onPick: (ev) => {
              ev.stopPropagation();
              this.appSet((a) => ({
                picked: a.picked.includes(i) ? a.picked.filter((x) => x !== i) : [...a.picked, i],
              }));
            },
            onBrief: (ev) => {
              ev.stopPropagation();
              this.appAddBriefs([i]);
            },
          };
        };
        const appRows = vis.map(mk);
        const filters = [
          ['all', 'All', rows.length],
          ['covered', 'Covered', rows.filter((r) => r.cov === 'covered').length],
          ['partial', 'Partial', rows.filter((r) => r.cov === 'partial').length],
          ['missing', 'Missing', rows.filter((r) => r.cov === 'missing').length],
          ['own', 'Own page', rows.filter(own).length],
        ].map(([k, l, n]) => ({
          l: l + ' ' + n,
          onClick: () => this.appSet({ filter: k }),
          bg: flt === k ? 'rgba(100,168,255,.16)' : 'transparent',
          border: flt === k ? 'rgba(100,168,255,.55)' : 'rgba(245,245,247,.12)',
          color: flt === k ? '#F5F5F7' : '#98989D',
        }));
        const board = ['Awareness', 'Consideration', 'Decision'].map((st) => ({
          name: FUN[st],
          sub: st === 'Awareness' ? 'top of funnel' : st === 'Consideration' ? 'middle' : 'bottom',
          cards: rows
            .map((r, i) => ({ r, i }))
            .filter(({ r }) => r.stage === st)
            .map(mk),
        }));
        const stages = ['Backlog', 'In progress', 'Ready', 'Published'];
        const stColor = { Backlog: '#98989D', 'In progress': GOLD, Ready: PRI, Published: '#30D158' };
        const briefList = A.briefs
          .map((b, k) => ({ b, k }))
          .filter(({ b }) => A.briefStage === 'All' || b.stage === A.briefStage)
          .map(({ b, k }) => {
            const r = rows[b.i];
            return {
              q: r.q,
              type: r.type,
              qdp: r.qdp,
              stage: b.stage,
              stColor: stColor[b.stage],
              onOpen: () => this.appSet({ screen: 'brief', briefOpen: k, exportOpen: false }),
              onRemove: (ev) => {
                ev.stopPropagation();
                this.appSet((a) => ({ briefs: a.briefs.filter((_, x) => x !== k) }));
              },
            };
          });
        const briefStageChips = ['All', ...stages].map((x) => ({
          l: x + (x === 'All' ? '' : ' ' + A.briefs.filter((b) => b.stage === x).length),
          onClick: () => this.appSet({ briefStage: x }),
          bg: A.briefStage === x ? 'rgba(100,168,255,.16)' : 'transparent',
          border: A.briefStage === x ? 'rgba(100,168,255,.55)' : 'rgba(245,245,247,.12)',
          color: A.briefStage === x ? '#F5F5F7' : '#98989D',
        }));
        const bo = A.briefs[A.briefOpen],
          bd = bo ? this.appBriefData(bo.i) : null,
          br = bo ? rows[bo.i] : null;
        const backlog = rows
          .map((r, i) => ({ r, i }))
          .filter(({ r, i }) => own(r) && !A.briefs.some((b) => b.i === i))
          .sort((a, b) => (a.r.cov === 'missing' ? 0 : 1) - (b.r.cov === 'missing' ? 0 : 1) || b.r.qdp - a.r.qdp)
          .map(({ r, i }) => ({
            q: r.q,
            seg: r.f,
            segColor: SC[r.f],
            type: r.type,
            cov: CV[r.cov][0],
            covColor: CV[r.cov][1],
            qdp: r.qdp,
            onCreate: () => this.appAddBriefs([i]),
          }));
        return {
          appCols: isNarrow ? 'minmax(0,1fr)' : '230px minmax(0,1fr)',
          appShowSide: !isNarrow,
          appNarrowNav: isNarrow,
          appGoRecovery: () => this.appSet({ screen: 'recovery' }),
          appNav: nav.map(navItem),
          appSetup: setup.map(navItem),
          appWs: this.APP_WS[A.ws],
          appWsOpen: A.wsOpen,
          toggleWs: () => this.appSet((a) => ({ wsOpen: !a.wsOpen })),
          appWsList: this.APP_WS.map((w, k) => ({
            w,
            on: k === A.ws,
            mark: k === A.ws ? '●' : '',
            onClick: () => {
              this.appSet({ ws: k, wsOpen: false });
              if (k !== A.ws) this.appToast('Switched to ' + w + ' · example data');
            },
          })),
          addWs: () => {
            this.appSet({ wsOpen: false, screen: 'config' });
            this.appToast('Workspaces: 3 of 12 on Pro');
          },
          aOverview: A.screen === 'overview',
          aFanout: A.screen === 'fanout',
          aNew: A.screen === 'new',
          aRuns: A.screen === 'runs',
          aBriefs: A.screen === 'briefs',
          aBrief: A.screen === 'brief' && !!bo,
          aClusters: A.screen === 'clusters',
          aRecovery: A.screen === 'recovery',
          aConfig: A.screen === 'config',
          aUse: A.screen === 'usecases',
          appRows,
          appNoRows: appRows.length === 0,
          appFilters: filters,
          appBoard: board,
          appList: A.view === 'list',
          appBoardView: A.view === 'board',
          viewList: () => this.appSet({ view: 'list' }),
          viewBoard: () => this.appSet({ view: 'board' }),
          vListBg: A.view === 'list' ? 'rgba(100,168,255,.16)' : 'transparent',
          vBoardBg: A.view === 'board' ? 'rgba(100,168,255,.16)' : 'transparent',
          appPicked: A.picked.length,
          appHasPicked: A.picked.length > 0,
          appCreatePicked: () => {
            this.appAddBriefs(A.picked);
          },
          appClearPicked: () => this.appSet({ picked: [] }),
          appCovered: rows.filter((r) => r.cov === 'covered').length,
          appOwn: rows.filter(own).length,
          appN: rows.length,
          appJudged: rows.filter((r) => r.cov !== 'missing').length,
          appCite: rows.filter((r) => r.cite).length,
          appBriefList: briefList,
          appNoBriefs: briefList.length === 0,
          appBriefStages: briefStageChips,
          appBriefCount: A.briefs.length,
          bTitle: bd ? bd.title : '',
          bMeta: bd ? bd.meta : '',
          bSlug: bd ? bd.slug : '',
          bKw: bd ? bd.kw : '',
          bLen: bd ? bd.len : '',
          bSchema: bd ? bd.schema : '',
          bOutline: bd ? bd.outline.map((o, k) => ({ o, n: String(k + 1).padStart(2, '0') })) : [],
          bLinks: bd ? bd.links : [],
          bQ: br ? br.q : '',
          bQdp: br ? br.qdp : '',
          bType: br ? br.type : '',
          bStage: bo ? bo.stage : '',
          bStColor: bo ? stColor[bo.stage] : PRI,
          bStages: stages.map((x) => ({
            l: x,
            onClick: () =>
              this.appSet((a) => ({ briefs: a.briefs.map((b, k) => (k === a.briefOpen ? { ...b, stage: x } : b)) })),
            bg: bo && bo.stage === x ? 'rgba(100,168,255,.16)' : 'transparent',
            border: bo && bo.stage === x ? stColor[x] : 'rgba(245,245,247,.12)',
            color: bo && bo.stage === x ? '#F5F5F7' : '#98989D',
          })),
          bCopy: () => {
            try {
              navigator.clipboard.writeText(bd.outline.map((o, k) => k + 1 + '. ' + o).join('\n'));
            } catch (e) {}
            this.appToast('Outline copied');
          },
          bExportToggle: () => this.appSet((a) => ({ exportOpen: !a.exportOpen })),
          bExportOpen: A.exportOpen,
          bExportMd: () => this.appExport('md'),
          bExportDoc: () => this.appExport('doc'),
          bBack: () => this.appSet({ screen: 'briefs' }),
          appBacklog: backlog,
          appBacklogEmpty: backlog.length === 0,
          appBriefsStarted: A.briefs.length,
          appRunsList: this.APP_RUNS.map((r, k) => ({
            topic: r[0],
            type: r[1],
            data: r[2],
            q: r[3],
            own: r[4],
            date: r[5],
            onOpen: () => {
              this.appSet({ screen: 'fanout' });
              if (k) this.appToast('Showing the latest example run');
            },
          })),
          appNew: () => this.appSet({ screen: 'new' }),
          appRunNow: () => this.appRun(),
          appRunning: !!A.running,
          appNotRunning: !A.running,
          newDataSearch: () => this.appSet({ newData: 'search' }),
          newDataGeneric: () => this.appSet({ newData: 'generic' }),
          ndSBg: A.newData === 'search' ? 'rgba(100,168,255,.16)' : 'transparent',
          ndGBg: A.newData === 'generic' ? 'rgba(100,168,255,.16)' : 'transparent',
          appNotify: () => {
            this.appSet({ notified: true });
            this.appToast('We\u2019ll let you know when it\u2019s ready');
          },
          appNotified: !!A.notified,
          appNotNotified: !A.notified,
          appOpenMap: () => this.scrollToId('clusters'),
          appToast: A.toast,
          appHasToast: !!A.toast,
          appUse: [
            ['Fan-out + coverage check', 'Check an existing page against everything AI search asks.'],
            ['Starting fresh', 'No page yet — plan new pages from the fan-out.'],
            ['Refresh a slipping page', 'Find what a page stopped answering.'],
          ].map((u) => ({ t: u[0], d: u[1], onClick: () => this.appSet({ screen: 'new' }) })),
        };
      })(),
      ...(() => {
        const P = s.homeProds,
          has = (k) => P.includes(k);
        const tog = (k) => () =>
          this.setState((x) => ({
            homeProds: x.homeProds.includes(k) ? x.homeProds.filter((y) => y !== k) : [...x.homeProds, k],
            errors: { ...x.errors, prods: undefined },
          }));
        const D = s.homeDoneProds;
        return {
          submitHome: (ev) => this.submitHome(ev),
          hpN: has('nuark'),
          hpQ: has('qp'),
          hpToggleN: tog('nuark'),
          hpToggleQ: tog('qp'),
          hpNBorder: has('nuark') ? '#40C8E0' : 'rgba(245,245,247,.12)',
          hpNBg: has('nuark') ? 'rgba(64,200,224,.1)' : 'rgba(245,245,247,.02)',
          hpNCheck: has('nuark') ? '✓' : '',
          hpNCheckBg: has('nuark') ? '#40C8E0' : 'transparent',
          hpQBorder: has('qp') ? '#64A8FF' : 'rgba(245,245,247,.12)',
          hpQBg: has('qp') ? 'rgba(100,168,255,.1)' : 'rgba(245,245,247,.02)',
          hpQCheck: has('qp') ? '✓' : '',
          hpQCheckBg: has('qp') ? '#64A8FF' : 'transparent',
          hpErr: er.prods || '',
          hpHasErr: !!er.prods,
          hpLabel:
            has('nuark') && has('qp')
              ? 'Join waitlist & start trial'
              : has('qp')
                ? 'Start Free Trial'
                : has('nuark')
                  ? 'Join the Waitlist'
                  : 'Sign up',
          hpShowForm: s.homeStatus !== 'success',
          hpSuccess: s.homeStatus === 'success',
          hpLoading: s.homeStatus === 'loading',
          hpNotLoading: s.homeStatus !== 'loading',
          hpError: s.homeStatus === 'error',
          hdN: D.includes('nuark'),
          hdQ: D.includes('qp'),
          hdBoth: D.includes('nuark') && D.includes('qp'),
          hpOpenQP: () => this.redirectTrial(),
          hpReset: () => this.setState({ homeStatus: 'idle' }),
        };
      })(),
      prodOpen: s.prodOpen,
      toggleProducts: () => this.setState((x) => ({ prodOpen: !x.prodOpen, contactOpen: false })),
      prodColor: s.prodOpen || isNuark || isQP ? '#F5F5F7' : '#98989D',
      prodBg: s.prodOpen ? 'rgba(245,245,247,.05)' : 'transparent',
      prodChev: s.prodOpen ? 'rotate(180deg)' : 'none',
      pickNuark: () => {
        this.setState({ prodOpen: false });
        this.go('nuark');
      },
      pickQP: () => {
        this.setState({ prodOpen: false });
        this.go('query-prism');
      },
      pickAll: () => {
        this.setState({ prodOpen: false });
        this.go('home', 'products');
      },
      navItemsDesk: navItems.filter((n) => n.label === 'About'),
      contactOpen: s.contactOpen,
      toggleContact: () => this.setState((x) => ({ contactOpen: !x.contactOpen, prodOpen: false })),
      contactColor: s.contactOpen ? '#F5F5F7' : '#98989D',
      contactChev: s.contactOpen ? 'rotate(180deg)' : 'none',
      contacts: [
        ['Idris', 'idris@cxworks.com'],
        ['Rithik', 'rithik@cxworks.com'],
        ['Sowmya', 'sowmya@cxworks.com'],
      ].map(([n, e]) => ({
        name: n,
        email: e,
        mailto: 'mailto:' + e + '?subject=CXWorks%20Products%20enquiry',
        copyLabel: s.copied === e ? 'Copied ✓' : 'Copy',
        copyColor: s.copied === e ? '#30D158' : '#F5F5F7',
        onCopy: () => {
          try {
            navigator.clipboard.writeText(e);
          } catch (x) {}
          this.setState({ copied: e });
          clearTimeout(this.copyT);
          this.copyT = setTimeout(() => this.setState({ copied: '' }), 1800);
        },
      })),
      submitInline: (ev) => this.submitInline(ev),
      submitInlineQP: (ev) => this.submitInlineQP(ev),
      qiShowForm: s.qpInlineStatus !== 'success',
      qiSuccess: s.qpInlineStatus === 'success',
      qiLoading: s.qpInlineStatus === 'loading',
      qiNotLoading: s.qpInlineStatus !== 'loading',
      qiError: s.qpInlineStatus === 'error',
      inShowForm: s.inlineStatus !== 'success',
      inSuccess: s.inlineStatus === 'success',
      inLoading: s.inlineStatus === 'loading',
      inNotLoading: s.inlineStatus !== 'loading',
      inError: s.inlineStatus === 'error',
      inReset: () => this.setState({ inlineStatus: 'idle' }),
      openNuarkSite: () => window.open(C.NUARK_URL, '_blank', 'noopener'),
      roleError: er.role || '',
      hasRoleError: !!er.role,
      interestError: er.interests || '',
      hasInterestError: !!er.interests,
      submitLabel: isW ? 'Join the Waitlist' : 'Start Free Trial',
      loadingLabel: isW ? 'Joining…' : 'Creating your trial…',
      successName: s.form.name.trim().split(' ')[0] || 'there',
      successEmail: s.form.email.trim(),
      successCompany: s.form.company.trim(),
      trialHasUrl: !!C.QUERY_PRISM_TRIAL_URL,
      trialNoUrl: !C.QUERY_PRISM_TRIAL_URL,
      countdown: s.countdown,
      openNow: () => {
        clearInterval(this.cdIv);
        this.redirectTrial();
      },
      waitlistToTrial: () => {
        this.closeModal();
        setTimeout(() => this.openModal('trial'), 300);
      },
      closeAndNuark: () => {
        window.open(C.NUARK_URL, '_blank', 'noopener');
      },
    };
  }
}
