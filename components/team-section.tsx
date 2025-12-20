"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    id: 1,
    name: "M Bilal",
    role: "CEO & Founder",
    image: "/bilalpic.JPG",
    bio: "CEO of the company with strong technical leadership. Expert in business strategy, product vision, and full-stack development.",
    skills: ["Leadership", "Business Strategy", "Full-Stack Development", "Project Management"],
  },
  {
    id: 2,
    name: "M Adeeb",
    role: "Senior Backend Developer & Robotics Trainer",
    image: "/adeebPicture.png",
    bio: "Most experienced technical member. Backend specialist with deep knowledge of system architecture, DevOps, and robotics training.",
    skills: ["Backend Development", "AWS", "Docker", "CI/CD", "Robotics Training"],
  },
  {
    id: 3,
    name: "M Ahmad",
    role: "Senior React & Next.js Developer",
    image: "/ahmadPicture.png",
    bio: "Second most experienced developer. Expert in React.js and Next.js with strong API integration and frontend architecture skills.",
    skills: ["React.js", "Next.js", "API Integration", "JavaScript", "Frontend Architecture"],
  },
  {
    id: 4,
    name: "M Muzamil",
    role: "Frontend UI Developer",
    image: "/umair-ui.png",
    bio: "Frontend developer focused on building modern, responsive user interfaces using React.js and Next.js.",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind"],
  },
  {
    id: 5,
    name: "M Umar",
    role: "UI/UX & Figma Designer",
    image: "/ehsanPicture.png",
    bio: "Creative UI/UX designer specializing in Figma designs, user experience, and clean modern interfaces.",
    skills: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping"],
  }
];


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
