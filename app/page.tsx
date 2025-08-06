"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Server, Shield, Cloud, ExternalLink, Github } from "lucide-react"

// Animated section component for scroll-triggered animations
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={targetRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-pearl-white dark:bg-onyx-black"
      >
        <div className="absolute inset-0 bg-subtle-texture opacity-10"></div>
        {/* Removed: <canvas id="hero-canvas" className="absolute inset-0 z-0" /> */}

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-royal-gold/30 bg-royal-gold/5 text-royal-gold text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-royal-gold mr-2"></span>
                IT Professional & Cybersecurity Specialist
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight">
                <span className="gradient-text-gold animate-gradient-shift">Fairoz Faisal</span>
              </h1>

              <p className="text-lg md:text-xl text-onyx-black dark:text-pearl-white max-w-xl leading-relaxed">
                Self-motivated IT professional with expertise in cybersecurity, cloud infrastructure, and system
                optimization. Skilled in AWS, Azure, network security, and web application penetration testing.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-md group button-primary">
                  <Link href="/profile" className="flex items-center">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md button-outline bg-transparent">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>

              <div className="flex items-center pt-6">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-8 h-8 rounded-full bg-royal-gold/20 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-royal-gold" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-smoked-silver/20 flex items-center justify-center">
                    <Server className="h-4 w-4 text-smoked-silver" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sapphire-blue/10 dark:bg-sapphire-blue/20 flex items-center justify-center">
                    <Cloud className="h-4 w-4 text-onyx-black dark:text-pearl-white" />
                  </div>
                </div>
                <p className="text-sm text-onyx-black dark:text-pearl-white">
                  Specialized in <span className="text-foreground font-medium">Cybersecurity</span>,
                  <span className="text-foreground font-medium"> System Administration</span>, and
                  <span className="text-foreground font-medium"> Cloud Infrastructure</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ y, opacity }}
              className="relative lg:block hidden"
            >
              <div className="relative w-full h-[500px]">
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-pearl-white dark:border-onyx-black shadow-gold-lg animate-float">
                    <Image
                      src="/fairoz-portrait.jpeg"
                      alt="Fairoz Faisal"
                      fill
                      sizes="300px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div
                  className="absolute top-0 right-0 glass-card p-3 rounded-lg shadow-lg animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-royal-gold" />
                    <span className="text-sm font-medium">Security Expert</span>
                  </div>
                </div>

                <div
                  className="absolute bottom-10 left-0 glass-card p-3 rounded-lg shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-smoked-silver" />
                    <span className="text-sm font-medium">System Administrator</span>
                  </div>
                </div>

                <div
                  className="absolute bottom-20 right-10 glass-card p-3 rounded-lg shadow-lg animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-sapphire-blue" />
                    <span className="text-sm font-medium">Web Developer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce text-royal-gold/70"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 relative overflow-hidden bg-pearl-white dark:bg-charcoal">
        <div className="absolute inset-0 section-pattern"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-royal-gold/30 bg-royal-gold/5 text-royal-gold text-sm font-medium mb-4">
                Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                <span className="gradient-text-burgundy animate-gradient-shift">Specialized Skills & Services</span>
              </h2>
              <p className="text-lg text-onyx-black dark:text-pearl-white">
                Leveraging years of experience to deliver secure, efficient, and innovative IT solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden group h-full bg-ivory dark:bg-charcoal">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-royal-gold/10 flex items-center justify-center mb-6 group-hover:bg-royal-gold/20 transition-colors duration-300">
                    <Shield className="h-6 w-6 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-3">Cybersecurity</h3>
                  <p className="text-charcoal dark:text-champagne mb-6">
                    Expert in penetration testing, vulnerability assessment, and implementing robust security protocols
                    for enterprise systems and networks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Penetration Testing
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Security Audits
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      OWASP
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden group h-full bg-ivory dark:bg-charcoal">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-sapphire-blue/10 flex items-center justify-center mb-6 group-hover:bg-sapphire-blue/20 transition-colors duration-300">
                    <Cloud className="h-6 w-6 text-sapphire-blue" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-3">Cloud Computing</h3>
                  <p className="text-charcoal dark:text-champagne mb-6">
                    Proficient in AWS, Azure, and Hetzner Cloud platforms for designing secure, scalable infrastructure
                    and deploying cloud-native applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-bronze/5 border-bronze/20 text-foreground">
                      AWS
                    </Badge>
                    <Badge variant="outline" className="bg-bronze/5 border-bronze/20 text-foreground">
                      Azure
                    </Badge>
                    <Badge variant="outline" className="bg-bronze/5 border-bronze/20 text-foreground">
                      Cloud Migration
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden group h-full bg-ivory dark:bg-charcoal">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-smoked-silver/10 flex items-center justify-center mb-6 group-hover:bg-smoked-silver/20 transition-colors duration-300">
                    <Server className="h-6 w-6 text-smoked-silver" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-3">System Administration</h3>
                  <p className="text-charcoal dark:text-champagne mb-6">
                    Specialized in Linux and Windows server management, virtualization technologies, and system
                    optimization for maximum performance and reliability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-gold/5 border-gold/20 text-foreground">
                      Linux
                    </Badge>
                    <Badge variant="outline" className="bg-gold/5 border-gold/20 text-foreground">
                      Windows Server
                    </Badge>
                    <Badge variant="outline" className="bg-gold/5 border-gold/20 text-foreground">
                      Virtualization
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden group h-full bg-ivory dark:bg-charcoal">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center mb-6 group-hover:bg-bronze/20 transition-colors duration-300">
                    <Code className="h-6 w-6 text-bronze" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-3">Web Development</h3>
                  <p className="text-charcoal dark:text-champagne mb-6">
                    Skilled in modern web technologies including React, Next.js, TypeScript and Tailwind CSS for
                    creating secure, elegant, and responsive applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-bronze/5 border-bronze/20 text-foreground">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-bronze/5 border-bronze/20 text-foreground">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-bronze/5 border-bronze/20 text-foreground">
                      TypeScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-pearl-white dark:bg-onyx-black relative">
        <div className="absolute inset-0 bg-subtle-texture opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-royal-gold/30 bg-royal-gold/5 text-royal-gold text-sm font-medium mb-4">
                Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                <span className="gradient-text-burgundy animate-gradient-shift">Featured Projects</span>
              </h2>
              <p className="text-lg text-onyx-black dark:text-pearl-white">
                A selection of my recent work showcasing expertise across different domains
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden h-full group bg-ivory dark:bg-charcoal">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/devtimetracker-project.png"
                    alt="DevTimeTracker - Time Management System for IT Professionals"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-pearl-white/80 backdrop-blur-sm h-8 border-royal-gold text-onyx-black hover:bg-royal-gold/10"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-pearl-white/80 backdrop-blur-sm h-8 border-royal-gold text-onyx-black hover:bg-royal-gold/10"
                      >
                        <Github className="h-3.5 w-3.5 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Supabase
                    </Badge>
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-2 group-hover:text-royal-gold transition-colors">
                    DevTimeTracker
                  </h3>
                  <p className="text-charcoal dark:text-champagne mb-4">
                    A productivity-focused platform that allows users and teams to track project/task durations, manage
                    workflow, and generate insights.
                  </p>
                  <Link
                    href="/projects#devtimetracker"
                    className="text-royal-gold font-medium inline-flex items-center hover:underline"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden h-full group bg-ivory dark:bg-charcoal">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/customrig-project.png"
                    alt="CustomRig PC Builder - AI-Powered PC Configuration Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-pearl-white/80 backdrop-blur-sm h-8 border-royal-gold text-onyx-black hover:bg-royal-gold/10"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-pearl-white/80 backdrop-blur-sm h-8 border-royal-gold text-onyx-black hover:bg-royal-gold/10"
                      >
                        <Github className="h-3.5 w-3.5 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Gemini API
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Supabase
                    </Badge>
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-2 group-hover:text-royal-gold transition-colors">
                    CustomRig PC Builder
                  </h3>
                  <p className="text-charcoal dark:text-champagne mb-4">
                    AI-powered PC configuration platform with real-time compatibility checks and intelligent component
                    recommendations.
                  </p>
                  <Link
                    href="/projects#customrig"
                    className="text-royal-gold font-medium inline-flex items-center hover:underline"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="luxury-card border-gold/20 shadow-lg hover:shadow-gold transition-all duration-300 overflow-hidden h-full group bg-ivory dark:bg-charcoal">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/airkerala-project.png"
                    alt="AirKerala Website - Official Airline Website Development"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-pearl-white/80 backdrop-blur-sm h-8 border-royal-gold text-onyx-black hover:bg-royal-gold/10"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-pearl-white/80 backdrop-blur-sm h-8 border-royal-gold text-onyx-black hover:bg-royal-gold/10"
                      >
                        <Github className="h-3.5 w-3.5 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-royal-gold/5 border-royal-gold/20 text-foreground">
                      MySQL
                    </Badge>
                  </div>
                  <h3 className="text-xl font-sans font-semibold mb-2 group-hover:text-royal-gold transition-colors">
                    AirKerala Website
                  </h3>
                  <p className="text-charcoal dark:text-champagne mb-4">
                    Official airline website developed with modern web technologies focusing on performance, security,
                    and user experience.
                  </p>
                  <Link
                    href="/projects#airkerala"
                    className="text-royal-gold font-medium inline-flex items-center hover:underline"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="flex justify-center mt-12">
              <Button asChild size="lg" variant="outline" className="rounded-md group button-outline bg-transparent">
                <Link href="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-pearl-white dark:bg-onyx-black">
        <div className="absolute inset-0 bg-subtle-texture opacity-10"></div>
        <div className="absolute inset-0 section-pattern opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                <span className="gradient-text-burgundy animate-gradient-shift">Let's Work Together</span>
              </h2>
              <p className="text-lg text-onyx-black dark:text-pearl-white max-w-2xl mx-auto mb-8">
                Looking for an IT professional with expertise in cybersecurity, cloud infrastructure, and system
                administration? Let's connect and discuss how I can contribute to your projects.
              </p>
              <Button asChild size="lg" className="rounded-md group button-primary">
                <Link href="/contact" className="flex items-center">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
