"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-in-left cyber-glow">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
            <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse-glow border border-cyan-400/30">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Code Fusion
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Professional Development</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-cyan-400 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-purple-400 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-purple-400/10 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-foreground hover:text-pink-400 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-400/10 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/20"
              >
                Team
              </button>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white px-4 xl:px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30 border border-purple-400/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-cyan-400/10 text-cyan-400 p-2"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:space-y-2 sm:px-3 glass-effect rounded-xl mt-2 border border-purple-400/30 cyber-glow">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-cyan-400 block px-4 py-3 sm:py-4 rounded-lg text-base font-medium w-full text-left transition-all duration-300 hover:bg-cyan-400/10 touch-manipulation"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-purple-400 block px-4 py-3 sm:py-4 rounded-lg text-base font-medium w-full text-left transition-all duration-300 hover:bg-purple-400/10 touch-manipulation"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-foreground hover:text-pink-400 block px-4 py-3 sm:py-4 rounded-lg text-base font-medium w-full text-left transition-all duration-300 hover:bg-pink-400/10 touch-manipulation"
              >
                Team
              </button>
              <Link href="/contact" className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white mt-2 rounded-xl py-3 sm:py-4 touch-manipulation">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
