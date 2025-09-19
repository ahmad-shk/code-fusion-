"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern-background.jpg')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-float blur-sm" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float blur-sm"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-pink-400/20 rounded-full animate-float blur-sm"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-glow">
              IT Solutions
            </span>{" "}
            for Your Business
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            We are a dedicated team of expert IT professionals specializing in creating innovative digital solutions.
            From cutting-edge web applications to powerful mobile platforms, we transform your business vision into
            exceptional digital experiences that drive growth and success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Services Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 border border-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground text-center">
                Modern, responsive websites built with latest technologies
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Smartphone className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Mobile Apps</h3>
              <p className="text-sm text-muted-foreground text-center">Native and cross-platform mobile applications</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 border border-pink-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Code className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground text-center">
                Tailored software solutions for your business needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
