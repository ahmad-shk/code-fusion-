"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "M Bilal",
    role: "Lead Full-Stack Developer",
    image: "/bilalpic.JPG",
    bio: "Expert in React, Node.js, and cloud architecture with 6+ years of experience building scalable web applications.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    linkedin: "#",
    github: "#",
    email: "bilal@codefusiongroup.com",
  },
  {
    id: 5,
    name: "M Adeeb",
    role: "DevOps Engineer",
    image: "/Adeebpic.png",
    bio: "Infrastructure specialist ensuring smooth deployments and maintaining high-performance production systems.",
    skills: ["AWS", "Docker", "CI/CD", "Monitoring"],
    linkedin: "#",
    github: "#",
    email: "adeeb@codefusiongroup.com",
  },
  {
    id: 2,
    name: "M Ahmad",
    role: "Mobile App Developer",
    image: "/Ahmadpic.png",
    bio: "Specialized in React Native and Flutter development, creating beautiful cross-platform mobile applications.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    linkedin: "#",
    github: "#",
    email: "ahmad@codefusiongroup.com",
  },
  {
    id: 3,
    name: "M Muzamil",
    role: "Backend Engineer",
    image: "/muzamilpic.png",
    bio: "Database architect and API specialist with expertise in microservices and system optimization.",
    skills: ["Python", "PostgreSQL", "Docker", "Kubernetes"],
    linkedin: "#",
    github: "#",
    email: "muzamil@codefusiongroup.com",
  },
  {
    id: 4,
    name: "M Umar",
    role: "UI/UX Designer",
    image: "/Umarpic.png",
    bio: "Creative designer focused on user experience and modern interface design with a passion for accessibility.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    linkedin: "#",
    github: "#",
    email: "umar@codefusiongroup.com",
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our diverse team of 5 skilled professionals brings together years of experience in web development, mobile
            apps, and custom software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="relative overflow-hidden">
                <div className="w-40 h-40 mx-auto overflow-hidden rounded-full">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-border text-muted-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
