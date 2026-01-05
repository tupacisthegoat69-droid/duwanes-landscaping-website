import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import { getSiteUrl } from "@/lib/site";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Duwane's Landscaping and Lawn Service | Professional Care",
    template: "%s | Duwane's Landscaping"
  },
  description: "Professional landscaping services in Springfield. Lawn care, garden design, hardscaping, and maintenance. Call (214) 450-3335 for a free quote.",
  keywords: ["landscaping", "lawn care", "garden design", "hardscaping", "lawn maintenance", "Springfield landscaping", "Duwane's Landscaping"],
  authors: [{ name: "Duwane's Landscaping" }],
  creator: "Duwane's Landscaping",
  publisher: "Duwane's Landscaping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Duwane's Landscaping and Lawn Service",
    description: "Transform your outdoor space with our professional landscaping services. Lawn care, design, and maintenance.",
    url: getSiteUrl().toString(),
    siteName: "Duwane's Landscaping",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Duwane's Landscaping and Lawn Service",
    description: "Professional landscaping services. Call us today!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
