import type { Metadata } from 'next';
import { Playfair_Display, Parisienne, Inter } from 'next/font/google';
import { siteConfig } from '@/lib/site.config';
import './globals.css';

// Elegant modern serif for headings and numerals, deliberately not one of
// the flourished/traditional "wedding card" fonts.
const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

// A single delicate script, used sparingly (the ampersand, the footer
// signature) as the one traditional touch against an otherwise clean,
// modern layout.
const script = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: 'website',
    url: siteConfig.seo.siteUrl,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${sans.variable}`}>
      <body className="bg-ivory-100 font-sans text-ink-900 antialiased">{children}</body>
    </html>
  );
}
