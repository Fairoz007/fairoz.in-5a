"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Server, Shield, Cloud } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import NewsletterSignup from "@/components/newsletter-signup"

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with new optimized banner image */}
        <section className="relative min-h-screen flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/premium-tech-workspace.jpg')" }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="hero-name mb-4 md:mb-6">Fairoz Faisal</h1>
                <h2 className="font-cormorant text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-6 md:mb-8">
                  IT Professional & Cybersecurity Specialist
                </h2>
                <p className="text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed font-light">
                  Self-motivated IT professional and system administrator with expertise in cybersecurity, cloud
                  infrastructure, and system optimization. Skilled in AWS, Azure, network security, and web application
                  penetration testing.
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <Button asChild size="lg" className="rounded-none px-6 md:px-8 py-5 md:py-6 text-sm tracking-wider">
                    <Link href="/profile">READ PROFILE</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-none px-6 md:px-8 py-5 md:py-6 text-sm tracking-wider border-primary/30 hover:border-primary"
                  >
                    <Link href="/contact">CONTACT ME</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="hidden lg:flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/fairoz-portrait.jpeg"
                    alt="Portrait of Fairoz Faisal, IT Professional and Cybersecurity Specialist from Kerala, India"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                    priority
                    quality={90}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24 bg-muted/30" id="expertise">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInWhenVisible>
              <h2 className="section-title text-center">Areas of Expertise</h2>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
              <FadeInWhenVisible delay={0.1}>
                <Card className="border-none shadow-none hover:shadow-elegant transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center relative">
                    <div
                      className="absolute inset-0 bg-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"
                      aria-hidden="true"
                    />
                    <Shield
                      className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 md:mb-6 relative z-10"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-playfair relative z-10">
                      Cybersecurity
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                      Expert in penetration testing, vulnerability assessment, and implementing robust security
                      protocols for enterprise systems and networks.
                    </p>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <Card className="border-none shadow-none hover:shadow-elegant transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center relative">
                    <div
                      className="absolute inset-0 bg-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"
                      aria-hidden="true"
                    />
                    <Cloud
                      className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 md:mb-6 relative z-10"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-playfair relative z-10">
                      Cloud Computing
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                      Proficient in AWS, Azure, and Hetzner Cloud platforms for designing secure, scalable
                      infrastructure and deploying cloud-native applications.
                    </p>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <Card className="border-none shadow-none hover:shadow-elegant transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center relative">
                    <div
                      className="absolute inset-0 bg-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"
                      aria-hidden="true"
                    />
                    <Server
                      className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 md:mb-6 relative z-10"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-playfair relative z-10">
                      System Administration
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                      Specialized in Linux and Windows server management, virtualization technologies, and system
                      optimization for maximum performance and reliability.
                    </p>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <Card className="border-none shadow-none hover:shadow-elegant transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center relative">
                    <div
                      className="absolute inset-0 bg-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"
                      aria-hidden="true"
                    />
                    <Code
                      className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 md:mb-6 relative z-10"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-playfair relative z-10">
                      Web Development
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                      Skilled in modern web technologies including React, Next.js, TypeScript and Tailwind CSS for
                      creating secure, elegant, and responsive applications.
                    </p>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24" id="featured-projects" aria-labelledby="featured-projects-heading">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInWhenVisible>
              <h2 id="featured-projects-heading" className="section-title text-center">
                Featured Projects
              </h2>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16">
              <FadeInWhenVisible delay={0.1}>
                <Card className="overflow-hidden border-none shadow-elegant hover:shadow-elegant-hover transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 sm:h-56 md:h-64 bg-muted relative">
                    <Image
                      src="/devtimetracker-project.png"
                      alt="DevTimeTracker - Time Management System for IT Professionals"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-primary/10 hover:bg-primary/5 transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        TypeScript
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        Supabase
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-playfair">DevTimeTracker</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A productivity-focused platform that allows users and teams to track project/task durations,
                      manage workflow, and generate insights for improved efficiency.
                    </p>
                    <Button variant="link" className="p-0 h-auto font-medium text-primary" asChild>
                      <Link
                        href="/projects#devtimetracker"
                        className="flex items-center"
                        aria-label="View DevTimeTracker project details"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <Card className="overflow-hidden border-none shadow-elegant hover:shadow-elegant-hover transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 sm:h-56 md:h-64 bg-muted relative">
                    <Image
                      src="/customrig-project.png"
                      alt="CustomRig PC Builder - AI-Powered PC Configuration Platform"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-primary/10 hover:bg-primary/5 transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        Gemini API
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        Supabase
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-playfair">CustomRig PC Builder</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      AI-powered PC configuration platform that helps users design custom PC builds with real-time
                      compatibility checks and intelligent component recommendations.
                    </p>
                    <Button variant="link" className="p-0 h-auto font-medium text-primary" asChild>
                      <Link
                        href="/projects#customrig"
                        className="flex items-center"
                        aria-label="View CustomRig PC Builder project details"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <Card className="overflow-hidden border-none shadow-elegant hover:shadow-elegant-hover transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 sm:h-56 md:h-64 bg-muted relative">
                    <Image
                      src="/airkerala-project.png"
                      alt="AirKerala Website - Official Airline Website Development"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-primary/10 hover:bg-primary/5 transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        React
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        MySQL
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-playfair">AirKerala Website</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Developed and deployed the official airline website using modern web technologies with a focus on
                      performance, security, and exceptional user experience.
                    </p>
                    <Button variant="link" className="p-0 h-auto font-medium text-primary" asChild>
                      <Link
                        href="/projects#airkerala"
                        className="flex items-center"
                        aria-label="View AirKerala Website project details"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>
            </div>

            <div className="flex justify-center mt-12 md:mt-16">
              <Button asChild size="lg" className="rounded-none px-6 md:px-8 py-5 md:py-6 text-sm tracking-wider">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/10" id="newsletter" aria-labelledby="newsletter-heading">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 id="newsletter-heading" className="sr-only">
                Newsletter Signup
              </h2>
              <NewsletterSignup />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-texture-pattern bg-repeat" id="contact-cta" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 id="cta-heading" className="section-title">
                  Let's Work Together
                </h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                  Looking for an IT professional with expertise in cybersecurity, cloud infrastructure, and system
                  administration? Let's connect and discuss how I can contribute to your projects and help secure your
                  digital assets.
                </p>
                <Button asChild size="lg" className="rounded-none px-6 md:px-8 py-5 md:py-6 text-sm tracking-wider">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
