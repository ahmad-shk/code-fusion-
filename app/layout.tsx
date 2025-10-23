import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Code } from "lucide-react"
import Favicon from "../components/Favicon" // ✅ import

export const metadata: Metadata = {
  title: "Code Fusion Group | Professional IT Team - Web & App Development",
  description:
    "Code Fusion Group is an expert 5-person IT engineering team specializing in professional websites and mobile applications. Contact us for your next project.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* ✅ Add favicon dynamically */}
        <Favicon />

        {/* ✅ Header Section */}
        <header className="w-full border-b border-gray-800 p-4 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md sticky top-0 z-50">
          <div className="p-2 rounded-lg bg-primary/20 animate-pulse-glow">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Code Fusion Group | Professional IT Team
          </h1>
        </header>

        {/* ✅ Page Content */}
        <main className="flex-grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        {/* ✅ Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
