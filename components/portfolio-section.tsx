"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online shopping platform with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video URL
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Management App",
    description:
      "Comprehensive healthcare management system for clinics with patient records and appointment scheduling.",
    image: "/healthcare-management-dashboard.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video URL
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "Property listing and management platform with advanced search filters and virtual tours.",
    image: "/real-estate-website.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video URL
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with POS, inventory tracking, and customer management.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B9FECA38C-A1C3-4D1C-BB83-26A3A54AADC8%7D-WAEJ7QSBhrEkrSgeIgQby58x3N4y1q.png", // Using the restaurant dashboard image provided
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video URL
    technologies: ["Vue.js", "Express.js", "MySQL"],
    category: "Custom Solution",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Educational platform with course management, student tracking, and interactive learning tools.",
    image: "/lms-dashboard.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video URL
    technologies: ["React", "Django", "PostgreSQL"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile fitness application with workout tracking, nutrition planning, and progress analytics.",
    image: "/fitness-tracking-app.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video URL
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "Mobile App",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Web Development", "Mobile App", "Custom Solution"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showVideo, setShowVideo] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our recent projects and see how we've helped businesses transform their digital presence with
            innovative solutions. Watch our demo videos to see the projects in action.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="relative overflow-hidden">
                {showVideo === project.id ? (
                  <div className="w-full h-48 bg-black">
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-2 p-4 w-full max-w-xs">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background text-foreground hover:bg-muted w-full text-xs sm:text-sm py-2 px-3"
                          onClick={() => setShowVideo(project.id)}
                        >
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Watch Demo
                        </Button>
                        <div className="flex gap-2 w-full">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-background text-foreground hover:bg-muted flex-1 text-xs sm:text-sm py-2 px-2"
                          >
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-background text-foreground hover:bg-muted flex-1 text-xs sm:text-sm py-2 px-2"
                          >
                            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {project.category}
                    </Badge>
                    {showVideo === project.id && (
                      <Button size="sm" variant="outline" onClick={() => setShowVideo(null)} className="text-xs">
                        Close Video
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-border text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
         
        </div>
         <div className="flex justify-center mt-16">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 
                hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white 
                shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
               See All Projects
              </Button>
            </Link>
          </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to start your project?</p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
