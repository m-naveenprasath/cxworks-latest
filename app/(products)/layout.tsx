import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SITE } from '@/lib/products/site';
import '@/styles/products/fonts.css';
import '@/styles/products/globals.css';
import '@/styles/products/hover.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  publisher: 'CXWorks',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { siteName: SITE.name, type: 'website', locale: SITE.locale },
  twitter: { card: 'summary_large_image' },
  ...(SITE.searchConsoleVerification ? { verification: { google: SITE.searchConsoleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

/**
 * The layout is sized from the window width once the page is interactive. On phones and tablets the
 * page stays hidden until then (max 4s) so the desktop layout never flashes; crawlers still get the full HTML.
 */
const BOOT = `if(innerWidth<960){var d=document.documentElement;d.classList.add('pre-hydrate');setTimeout(function(){d.classList.remove('pre-hydrate')},4000)}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <link rel="preload" href="/fonts/products/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/products/montserrat-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
