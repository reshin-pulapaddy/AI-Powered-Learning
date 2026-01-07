import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CES LEAP Academy - AI-Powered Corporate Training",
  description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
  keywords: ["corporate training", "AI learning", "upskilling", "LMS", "corporate education"],
  authors: [{ name: "CES LEAP Academy" }],
  creator: "CES LEAP Academy",
  publisher: "CES LEAP Academy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.cesleapacademy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CES LEAP Academy - AI-Powered Corporate Training",
    description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
    url: "/",
    siteName: "CES LEAP Academy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "CES LEAP Academy" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CES LEAP Academy - AI-Powered Corporate Training",
    description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "https://portal.cesteam.com/favicon.ico" },
      { url: "https://portal.cesteam.com/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "https://portal.cesteam.com/favicon.ico" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14467b" },
    { media: "(prefers-color-scheme: dark)", color: "#0f3a5f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CES LEAP Academy",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cesleapacademy.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.cesleapacademy.com"}/logo.png`,
    description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7353948100",
      contactType: "Customer Service",
      email: "hello@cesleapacademy.com",
      areaServed: "IN",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/cesleapacademy",
      "https://twitter.com/cesleapacademy",
      "https://www.facebook.com/cesleapacademy",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#14467b] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
