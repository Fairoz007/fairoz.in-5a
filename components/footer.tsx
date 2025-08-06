import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background py-12 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-gold">FAIROZ</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            IT Professional specializing in Network Administration, Linux Systems Engineering, and Cloud Computing with
            expertise in infrastructure design and security implementations.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com/in/fairoz-faisal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary-gold transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/fairozfaisal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary-gold transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/fairozfaisal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary-gold transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:fairoz@fairoz.in"
              className="text-muted-foreground hover:text-primary-gold transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-gold">Quick Links</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-primary-gold transition-colors">
                About Fairoz
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary-gold transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/certifications" className="hover:text-primary-gold transition-colors">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary-gold transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-gold">Services</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Network Administration</li>
            <li>Server Management</li>
            <li>Cloud Computing</li>
            <li>IT Security</li>
            <li>Infrastructure Design</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fairoz Faisal. All rights reserved.
      </div>
    </footer>
  )
}
