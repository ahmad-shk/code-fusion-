"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Users, Calendar, Zap, X, ChevronLeft, ChevronRight } from "lucide-react"
import { on } from "events"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern online shopping platform with payment integration, inventory management, and admin dashboard. This comprehensive solution includes real-time product updates, customer reviews, and advanced analytics.",
    fullDescription:
      "A fully-featured e-commerce platform built for scalability and user experience. Features include secure payment processing through Stripe, multi-vendor support, inventory tracking, customer reviews, order management, and a powerful admin dashboard for managing products and sales.",
    image: "/modern-ecommerce-interface.png",
    images: ["/modern-ecommerce-interface.png", "/ecommerce-checkout.jpg", "/product-gallery.jpg"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
    duration: "6 months",
    team: "5 developers",
    relatedProjects: [3, 5],
    features: [
      "Secure Payment Gateway Integration",
      "Real-time Inventory Management",
      "Advanced Product Search & Filters",
      "Customer Reviews & Ratings",
      "Admin Dashboard with Analytics",
      "Order Tracking System",
    ],
  },
  {
    id: 2,
    title: "Healthcare Management App",
    description:
      "Comprehensive healthcare management system for clinics with patient records and appointment scheduling. Integrated with telemedicine capabilities and prescription management.",
    fullDescription:
      "A robust healthcare solution designed for medical professionals and patients. Features include electronic health records (EHR), appointment scheduling, prescription management, telemedicine consultation, patient history tracking, and HIPAA-compliant data security.",
    image: "/healthcare-management-dashboard.png",
    images: ["/healthcare-management-dashboard.png", "/patient-records.jpg", "/appointment-scheduler.jpg"],
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App",
    demoUrl: "#",
    githubUrl: "#",
    duration: "5 months",
    team: "5 developers",
    relatedProjects: [6],
    features: [
      "Electronic Health Records (EHR)",
      "Appointment Scheduling System",
      "Prescription Management",
      "Telemedicine Consultations",
      "Patient History Tracking",
      "HIPAA-Compliant Security",
    ],
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description:
      "Property listing and management platform with advanced search filters and virtual tours. Includes CRM for agents and analytics for property insights.",
    fullDescription:
      "A modern real estate platform connecting buyers, sellers, and agents. Features include advanced property search with filters, virtual property tours, agent CRM system, lead management, property analytics, and mortgage calculator integration.",
    image: "/real-estate-website.png",
    images: ["/real-estate-website.png", "/property-listing.jpg", "/agent-dashboard.jpg"],
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
    duration: "4 months",
    team: "5 developers",
    relatedProjects: [1],
    features: [
      "Advanced Property Search & Filters",
      "Virtual Property Tours",
      "Agent CRM System",
      "Lead Management",
      "Property Analytics Dashboard",
      "Mortgage Calculator Integration",
    ],
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description:
      "Complete restaurant management solution with POS, inventory tracking, and customer management. Streamlines operations from order taking to delivery.",
    fullDescription:
      "An all-in-one restaurant management platform including point-of-sale (POS) system, kitchen display system (KDS), inventory management, employee scheduling, customer loyalty program, and delivery integration.",
    image: "/images/7b9feca38c-a1c3-4d1c-bb83-26a3a54aadc8-7d.png",
    images: ["/images/7b9feca38c-a1c3-4d1c-bb83-26a3a54aadc8-7d.png", "/pos-system.jpg", "/kitchen-display.jpg"],
    technologies: ["Vue.js", "Express.js", "MySQL"],
    category: "Custom Solution",
    demoUrl: "#",
    githubUrl: "#",
    duration: "5 months",
    team: "5 developers",
    relatedProjects: [],
    features: [
      "Point of Sale (POS) System",
      "Kitchen Display System (KDS)",
      "Inventory Management",
      "Employee Scheduling",
      "Customer Loyalty Program",
      "Delivery Integration",
    ],
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Educational platform with course management, student tracking, and interactive learning tools. Supports video lectures, quizzes, and progress tracking.",
    fullDescription:
      "A comprehensive LMS designed for educators and institutions. Features include course creation and management, video streaming, interactive quizzes, student progress tracking, certification generation, discussion forums, and instructor analytics.",
    image: "/lms-dashboard.png",
    images: ["/lms-dashboard.png", "/course-management.jpg", "/student-dashboard.jpg"],
    technologies: ["React", "Django", "PostgreSQL"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
    duration: "7 months",
    team: "5 developers",
    relatedProjects: [1],
    features: [
      "Course Creation & Management",
      "Video Streaming Capabilities",
      "Interactive Quizzes & Assessments",
      "Student Progress Tracking",
      "Certification Generation",
      "Discussion Forums",
    ],
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "Mobile fitness application with workout tracking, nutrition planning, and progress analytics. Includes wearable device integration.",
    fullDescription:
      "A comprehensive fitness tracking solution for health-conscious users. Features include workout logging, personalized training plans, nutrition tracking, wearable device integration, social challenges, progress analytics, and expert guidance.",
    image: "/fitness-tracking-app.png",
    images: ["/fitness-tracking-app.png", "/workout-tracker.jpg", "/fitness-analytics.jpg"],
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "Mobile App",
    demoUrl: "#",
    githubUrl: "#",
    duration: "4 months",
    team: "5 developers",
    relatedProjects: [2],
    features: [
      "Workout Logging & Tracking",
      "Personalized Training Plans",
      "Nutrition Tracking",
      "Wearable Device Integration",
      "Social Challenges",
      "Progress Analytics & Reports",
    ],
  },
]

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0] | null
  onClose: () => void
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const relatedProjects = projects.filter((p) => project.relatedProjects?.includes(p.id))

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div
        className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="sticky top-0 flex items-center justify-between p-4 sm:p-6 bg-card border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-muted h-96">
              <img
                src={project.images[currentImageIndex] || project.image}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1)
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? "border-accent" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Duration</span>
              </div>
              <p className="font-semibold text-foreground">{project.duration}</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Team Size</span>
              </div>
              <p className="font-semibold text-foreground">{project.team}</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <Badge className="bg-accent/20 text-accent">{project.category}</Badge>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                  <Zap className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="border-border">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Related Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedProjects.map((rp) => (
                  <div
                    key={rp.id}
                    className="p-3 bg-muted rounded-lg border border-border hover:border-accent transition-colors cursor-pointer"
                  >
                    <p className="font-semibold text-foreground">{rp.title}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {rp.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button className="flex-1 bg-accent hover:bg-accent/90">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Demo
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showVideo, setShowVideo] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleProjectDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
             onClick={() => handleProjectDetails(project)}
              key={project.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => handleProjectDetails(project)}
                    size="sm"
                    variant="secondary"
                    className="bg-background text-foreground"
                  >
                    Detail
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {project.category}
                  </Badge>
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
              <Button
                          className="w-full mt-auto bg-accent hover:bg-accent/90 text-foreground"
                          onClick={() => handleProjectDetails(project)}
                        >
                          View Full Details
                        </Button>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:scale-105 text-white shadow-lg"
            >
              See All Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* FIXED MODAL CALL */}
      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
