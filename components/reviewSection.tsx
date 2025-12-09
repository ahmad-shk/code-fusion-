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
    review:
      "Outstanding service! Their communication, code quality, and delivery speed exceeded our expectations.",
  },
  {
    id: 2,
    name: "Alexander Müller",
    country: "Germany",
    role: "Product Head — Kraft Software",
    rating: 5,
    review:
      "Highly professional team. They delivered a complex project with precision and amazing UI/UX.",
  },
  {
    id: 3,
    name: "Sophia Laurent",
    country: "France",
    role: "Founder — StudioPixel",
    rating: 4,
    review:
      "Creative, reliable, and extremely talented developers. Will definitely collaborate again!",
  },
  {
    id: 4,
    name: "James Carter",
    country: "United Kingdom",
    role: "Project Manager — BlueWave Systems",
    rating: 5,
    review:
      "Exceptional work! Smooth process from start to finish. Highly recommended team.",
  },
  {
    id: 5,
    name: "Hiroshi Tanaka",
    country: "Japan",
    role: "CTO — Nexa Robotics",
    rating: 5,
    review:
      "Very impressed with their attention to detail and technical expertise. Five stars without a doubt.",
  },
]

export function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [autoScroll, setAutoScroll] = useState(true)

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Clients Say About Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted globally by founders, CEOs, and enterprise teams.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mb-4 pr-3">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-card border hover:bg-accent/10 transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-card border hover:bg-accent/10 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="
            flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth
            py-2 
          "
        >
          {reviews.map((item, i) => (
            <Card
              key={i}
              className="
                min-w-[360px] w-[360px]
                rounded-3xl 
                bg-card/70 
                border border-border/40 
                backdrop-blur-xl 
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                transition-all duration-300 hover:-translate-y-1
                p-6
              "
            >
              <CardContent className="p-0">
                {/* Stars */}
                <div className="flex mb-4 text-accent">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={20}
                      className="fill-accent text-accent drop-shadow-md"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground text-base mb-6 italic leading-relaxed">
                  “{item.review}”
                </p>

                {/* Client Info */}
                <h3 className="text-lg font-semibold text-card-foreground">
                  {item.name}
                </h3>
                <p className="text-accent text-sm">{item.role}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.country}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
