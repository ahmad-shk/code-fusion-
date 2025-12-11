"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    country: "United States",
    role: "CEO — NovaTech Labs",
    rating: 5,
    review: "Outstanding service! Their communication, code quality, and delivery speed exceeded our expectations.",
    avatar: "EJ",
  },
  {
    id: 2,
    name: "Alexander Müller",
    country: "Germany",
    role: "Product Head — Kraft Software",
    rating: 5,
    review: "Highly professional team. They delivered a complex project with precision and amazing UI/UX.",
    avatar: "AM",
  },
  {
    id: 3,
    name: "Sophia Laurent",
    country: "France",
    role: "Founder — StudioPixel",
    rating: 4,
    review: "Creative, reliable, and extremely talented developers. Will definitely collaborate again!",
    avatar: "SL",
  },
  {
    id: 4,
    name: "James Carter",
    country: "United Kingdom",
    role: "Project Manager — BlueWave Systems",
    rating: 5,
    review: "Exceptional work! Smooth process from start to finish. Highly recommended team.",
    avatar: "JC",
  },
  {
    id: 5,
    name: "Hiroshi Tanaka",
    country: "Japan",
    role: "CTO — Nexa Robotics",
    rating: 5,
    review: "Very impressed with their attention to detail and technical expertise. Five stars without a doubt.",
    avatar: "HT",
  },

  // ⭐ New Reviews Added Below ⭐
  {
    id: 6,
    name: "Isabella Rossi",
    country: "Italy",
    role: "Marketing Director — Creativa Media",
    rating: 5,
    review: "They brought our vision to life beautifully. Excellent communication and brilliant creativity!",
    avatar: "IR",
  },
  {
    id: 7,
    name: "Carlos Mendes",
    country: "Brazil",
    role: "CEO — TechWave Solutions",
    rating: 4,
    review: "Great experience overall! Project delivered on time with strong attention to detail.",
    avatar: "CM",
  },
  {
    id: 8,
    name: "Aisha Al-Farsi",
    country: "UAE",
    role: "Founder — Digital Oasis",
    rating: 5,
    review: "Superb quality! They exceeded expectations at every step. Definitely recommended.",
    avatar: "AA",
  },
  {
    id: 9,
    name: "Liam O’Connor",
    country: "Ireland",
    role: "Tech Lead — GreenByte LLC",
    rating: 5,
    review: "Very professional and efficient team. Their problem-solving skills are exceptional.",
    avatar: "LO",
  },
  {
    id: 10,
    name: "Chen Wei",
    country: "China",
    role: "Senior Developer — SkyNet Systems",
    rating: 4,
    review: "Reliable and skilled team. Delivered solid performance and clean architecture.",
    avatar: "CW",
  },
];

export function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [autoScroll, setAutoScroll] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Auto scroll every 2.5 seconds
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      scrollRight()
    }, 2500)

    return () => clearInterval(interval)
  }, [autoScroll])

  const scrollLeft = () => {
    setAutoScroll(false)
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" })
    }
    resetAutoScroll()
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" })
    }
  }

  const resetAutoScroll = () => {
    setTimeout(() => setAutoScroll(true), 4000)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-sm font-medium text-accent">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            What Clients Say About Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Trusted globally by founders, CEOs, and enterprise teams who value quality and innovation.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mb-8 pr-3">
          <button
            onClick={scrollLeft}
            className="group p-3 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} className="text-accent group-hover:text-accent/80 transition-colors" />
          </button>

          <button
            onClick={scrollRight}
            className="group p-3 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} className="text-accent group-hover:text-accent/80 transition-colors" />
          </button>
        </div>

        {/* Scroll Container */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-1">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="group relative min-w-[360px] w-[360px] cursor-pointer"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

              <Card
                className="
                  relative 
                  min-w-[360px] w-[360px]
                  rounded-3xl 
                  bg-gradient-to-br from-card to-card/80
                  border border-accent/20
                  backdrop-blur-xl 
                  shadow-[0_8px_32px_rgba(0,0,0,0.06)]
                  group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                  transition-all duration-500 
                  group-hover:-translate-y-2
                  p-8
                  overflow-hidden
                "
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
                </div>

                <CardContent className="p-0 relative z-10">
                  {/* Stars with glow */}
                  <div className="flex mb-6 gap-1">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <div key={idx} className="group/star relative">
                        <Star size={20} className="fill-accent text-accent drop-shadow-lg" />
                      </div>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-muted-foreground text-base mb-8 leading-relaxed font-light">"{item.review}"</p>

                  {/* Client Info with Avatar */}
                  <div className="flex items-center gap-3 pt-6 border-t border-accent/10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/60 to-accent/30 flex items-center justify-center text-sm font-semibold text-white shadow-lg">
                        {item.avatar}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-card-foreground leading-tight">{item.name}</h3>
                      <p className="text-accent text-sm font-medium">{item.role}</p>
                      <p className="text-muted-foreground text-xs mt-1">{item.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
