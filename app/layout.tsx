import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NETSKILL by GoodWorks - AI-Powered Corporate Training",
  description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
  keywords: ["corporate training", "AI learning", "upskilling", "LMS", "corporate education"],
  authors: [{ name: "NETSKILL by GoodWorks" }],
  creator: "NETSKILL by GoodWorks",
  publisher: "NETSKILL by GoodWorks",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.netskill.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NETSKILL by GoodWorks - AI-Powered Corporate Training",
    description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
    url: "/",
    siteName: "NETSKILL by GoodWorks",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NETSKILL by GoodWorks - AI-Powered Corporate Training",
    description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
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
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
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
    name: "NETSKILL by GoodWorks",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.netskill.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.netskill.com"}/logo.png`,
    description: "Leading corporate training and upskilling platform with AI-powered learning solutions",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7353948100",
      contactType: "Customer Service",
      email: "hello@netskill.com",
      areaServed: "IN",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/netskill",
      "https://twitter.com/netskill",
      "https://www.facebook.com/netskill",
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
