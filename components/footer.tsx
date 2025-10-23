import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="glass-effect border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-slide-in-left">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/20 animate-pulse-glow">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                IT Pro Team
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional web development and application solutions for your business needs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in-up">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-slide-in-right">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@itproteam.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 IT Pro Team. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
