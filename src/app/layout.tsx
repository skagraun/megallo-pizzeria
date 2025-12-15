/**
 * Root Layout Component
 *
 * This is the main layout wrapper for the entire application.
 * It includes:
 * - Font configuration (Geist Sans & Mono)
 * - Header and Footer components
 * - SEO metadata
 */

import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import './globals.css';

// Configure Geist Sans font (primary font)
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Configure Geist Mono font (for code/numbers)
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// SEO Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://megallopizzeria.hu'),
  title: {
    default: 'Megálló Pizzéria | The Finest Flavors in Zákányszék',
    template: '%s | Megálló Pizzéria',
  },
  description:
    'Megálló Pizzéria - The finest pizzas in Zákányszék! Classic and unique pizzas, gyros plates. Create your own pizza with our online designer!',
  keywords: [
    'pizza',
    'pizzeria',
    'Zákányszék',
    'restaurant',
    'gyros',
    'online ordering',
    'pizza creator',
    'Megálló Pizzéria',
  ],
  authors: [{ name: 'SkaSoft', url: 'https://www.skasoft.hu' }],
  creator: 'SkaSoft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://megallopizzeria.hu',
    siteName: 'Megálló Pizzéria',
    title: 'Megálló Pizzéria | The Finest Flavors in Zákányszék',
    description:
      'Megálló Pizzéria - The finest pizzas in Zákányszék! Classic and unique pizzas, gyros plates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Megálló Pizzéria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Megálló Pizzéria',
    description: 'The finest flavors in Zákányszék!',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Megálló Pizzéria',
  },
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#22c55e' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

/**
 * Root layout component that wraps all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Main site header with navigation */}
        <Header />

        {/* Main content area */}
        <main className="min-h-screen">{children}</main>

        {/* Site footer */}
        <Footer />

        {/* Scroll to top button */}
        <ScrollToTop />
      </body>
    </html>
  );
}
