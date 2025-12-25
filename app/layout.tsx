import Script from "next/script"
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Code } from "lucide-react"
import Favicon from "../components/Favicon"
import "./globals.css"
import SeoClient from "@/components/SeoClient"

// 🌐 Global Metadata for SEO, OG, and Indexing
export const metadata: Metadata = {
  title: "Code Fusion Group | Professional IT Team - Web & App Development",
  description:
    "Code Fusion Group is an expert IT engineering team specializing in websites, web apps, and mobile applications. We deliver professional, scalable, and modern digital solutions.",
  generator: "Next.js",
  keywords: [
    "web development",
    "app development",
    "Next.js agency",
    "Code Fusion Group",
    "software engineering",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Code Fusion Group", url: "https://www.codefusiongroup.site" }],
  openGraph: {
    title: "Code Fusion Group | Web & App Development Experts",
    description:
      "Professional IT team offering top-notch web and app development services. Build your next project with Code Fusion Group.",
    url: "https://www.codefusiongroup.site",
    siteName: "Code Fusion Group",
    images: [
      {
        url: "https://www.codefusiongroup.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Fusion Group Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* ✅ Structured Data (JSON-LD) for Google */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Code Fusion Group",
              url: "https://www.codefusiongroup.site",
              logo: "https://www.codefusiongroup.site/logo.png",
              sameAs: [
                "https://www.facebook.com/codefusiongroup",
                "https://www.instagram.com/codefusiongroup",
                "https://www.linkedin.com/company/codefusiongroup",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col bg-[#0b0f19] text-white`}
      >
        {/* ✅ SEO Client (Dynamic tags & title updates) */}
        <SeoClient />

        {/* ✅ Glowing favicon */}
        <Favicon />

        {/* ✅ Page Content */}
        <main className="grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        {/* ✅ Analytics (Vercel) */}
        <Analytics />
      </body>
    </html>
  )
}
