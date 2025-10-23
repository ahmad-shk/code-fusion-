import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Code } from "lucide-react"
import Favicon from "../components/Favicon"
import "./globals.css"

// ✅ Global Metadata for SEO & OpenGraph
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
        url: "https://www.codefusiongroup.site/og-image.png", // Add an OG image in /public
        width: 1200,
        height: 630,
        alt: "Code Fusion Group Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // fallback for browsers
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
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col bg-[#0b0f19] text-white`}
      >
        {/* ✅ Dynamic glowing favicon */}
        <Favicon />

        {/* ✅ Header */}
        <header className="w-full border-b border-gray-800 p-4 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md sticky top-0 z-50 shadow-lg">
          <div className="p-2 rounded-lg bg-primary/20 animate-pulse-glow">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
            Code Fusion Group | Professional IT Team
          </h1>
        </header>

        {/* ✅ Page Content */}
        <main className="flex-grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        {/* ✅ Footer */}
        <footer className="w-full border-t border-gray-800 text-center py-4 text-sm text-gray-400 bg-black/40 backdrop-blur-md">
          © {new Date().getFullYear()} Code Fusion Group — All Rights Reserved.
        </footer>

        {/* ✅ Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
