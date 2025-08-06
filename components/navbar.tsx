"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion" // Re-added Framer Motion imports
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Code, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROFILE", path: "/profile" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "BLOG", path: "/blog" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-pearl-white/90 dark:bg-onyx-black/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4 md:py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Fairoz Faisal Home">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-royal-gold text-onyx-black font-sans font-bold text-xl">
                <Code className="w-5 h-5" />
              </div>
              <span className="ml-2 text-lg font-sans font-semibold gradient-text-gold animate-gradient-shift">
                Fairoz
              </span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.path}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-royal-gold",
                    pathname === link.path ? "text-royal-gold" : "text-foreground/80",
                  )}
                  aria-current={pathname === link.path ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
            >
              <ModeToggle />
            </motion.div>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-royal-gold/10"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-pearl-white/95 dark:bg-onyx-black/95 backdrop-blur-md md:hidden"
          >
            <div className="container h-full flex flex-col">
              <div className="flex h-16 items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fairoz Faisal Home"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-royal-gold text-onyx-black font-sans font-bold text-xl">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="ml-2 text-lg font-sans font-semibold gradient-text-gold animate-gradient-shift">
                    Fairoz
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="hover:bg-royal-gold/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-royal-gold",
                        pathname === link.path ? "text-royal-gold" : "text-foreground/80",
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-current={pathname === link.path ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <ModeToggle />
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
