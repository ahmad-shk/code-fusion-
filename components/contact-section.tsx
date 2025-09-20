"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // try {
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })

    //   if (!response.ok) {
    //     throw new Error("Failed to send message")
    //   }

    //   const result = await response.json()

    //   toast({
    //     title: (
    //       <div className="flex items-center gap-2">
    //         <CheckCircle className="h-5 w-5 text-emerald-500" />
    //         <span className="text-emerald-500 font-semibold">Message Sent Successfully!</span>
    //       </div>
    //     ),
    //     description: "Thank you for your inquiry. Our team will respond within 24 hours.",
    //     className: "border-emerald-500/20 bg-emerald-50/90 dark:bg-emerald-950/90 backdrop-blur-sm",
    //   })

    //   // Reset form
    //   setFormData({a
    //     name: "",
    //     email: "",
    //     phone: "",
    //     company: "",
    //     projectType: "",
    //     budget: "",
    //     timeline: "",
    //     message: "",
    //   })
    // } catch (error) {
    //   console.error("Contact form error:", error)
    //   toast({
    //     title: (
    //       <div className="flex items-center gap-2">
    //         <XCircle className="h-5 w-5 text-red-500" />
    //         <span className="text-red-500 font-semibold">Message Failed to Send</span>
    //       </div>
    //     ),
    //     description: "There was an error sending your message. Please try again or contact us directly.",
    //     className: "border-red-500/20 bg-red-50/90 dark:bg-red-950/90 backdrop-blur-sm",
    //   })
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ready to start your project? Share your requirements with us and our team will get back to you with a
            detailed proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 h-fit shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl text-card-foreground flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-cyan-400" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-400/20">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm break-all">contact@codefusion.com</p>
                    <p className="text-muted-foreground text-sm break-all">info@codefusion.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-400/20">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-muted-foreground text-sm">+92 300 1234567</p>
                    <p className="text-muted-foreground text-sm">+92 321 9876543</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500/10 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-pink-400/20">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Location</h4>
                    <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
                    <p className="text-muted-foreground text-sm">Remote Services Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/10 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-400/20">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">Working Hours</h4>
                    <p className="text-muted-foreground text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2 order-1 xl:order-2">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl text-card-foreground flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Send className="h-4 w-4 text-purple-400" />
                  </div>
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="bg-input/80 border-border/50 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="bg-input/80 border-border/50 focus:border-purple-400/50 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+92 300 1234567"
                        className="bg-input/80 border-border/50 focus:border-pink-400/50 focus:ring-pink-400/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="bg-input/80 border-border/50 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-sm font-medium">
                        Project Type *
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => handleInputChange("projectType", value)}
                      >
                        <SelectTrigger className="bg-input/80 border-border/50 focus:border-purple-400/50 focus:ring-purple-400/20">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="mobile-app">Mobile Application</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-medium">
                        Budget Range
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-input/80 border-border/50 focus:border-pink-400/50 focus:ring-pink-400/20">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-sm font-medium">
                      Project Timeline
                    </Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="bg-input/80 border-border/50 focus:border-cyan-400/50 focus:ring-cyan-400/20">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your project requirements, features needed, and any specific preferences..."
                      rows={4}
                      required
                      className="bg-input/80 border-border/50 focus:border-purple-400/50 focus:ring-purple-400/20 resize-none transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed py-3 sm:py-4"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2024 Code Fusion. All rights reserved. | Professional IT Solutions for Your Business
          </p>
        </div>
      </div>
    </section>
  )
}
