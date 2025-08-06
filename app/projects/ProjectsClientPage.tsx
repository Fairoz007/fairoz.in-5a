"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

const FadeInWhenVisible = ({ children, delay = 0 }) => {
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectsClientPage() {
  const projects = [
    {
      id: 1,
      title: "DevTimeTracker",
      subtitle: "A Time Management System for IT Professionals",
      description:
        "DevTimeTracker is a productivity-focused platform that allows users and teams to track project/task durations, manage their workflow, generate insights, and integrate with tools like GitHub or Slack.",
      features: [
        "Start/stop time tracking",
        "Project and task assignment",
        "Productivity analytics & progress dashboards",
        "Role-based access control",
        "Billable time entries",
        "Report generation for projects and users",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Vercel"],
      architecture:
        "Frontend: Built using Next.js with server/client components and Tailwind UI. Backend: API routes & server actions with PostgreSQL DB. Authentication: Managed via Supabase Auth and protected client routes. Deployment: Hosted on Vercel, with auto-deploy from GitHub.",
      challenges:
        "Real-time tracking with server actions, Productivity insight via dynamic dashboards, Integration-ready structure for Slack, GitHub, Jira, etc.",
      image: "/devtimetracker-project.png",
      category: "web",
    },
    {
      id: 2,
      title: "CustomRig PC Builder",
      subtitle: "AI-Powered PC Configuration Platform",
      description:
        "CustomRig is a full-stack platform that helps users design custom PC builds with AI assistance, real-time compatibility checks, and admin control over components and orders.",
      features: [
        "AI-powered PC recommendations via Gemini API",
        "Real-time component compatibility and price calculation",
        "Prebuilt and custom PC builder interface",
        "Admin dashboard for managing inventory, users, and orders",
        "PDF export of PC builds with integrated QR code",
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Supabase (PostgreSQL)", "Gemini API", "jsPDF", "Vercel"],
      architecture:
        "Frontend: Built using Next.js (App Router) and styled with Tailwind CSS + shadcn/ui. Backend: Supabase PostgreSQL database with RPCs for server logic. Authentication: Supabase Auth with role-based routing and API protection. Deployment: Hosted on Vercel with GitHub integration for CI/CD.",
      challenges:
        "Dynamic compatibility validation across CPU, GPU, motherboard, etc. AI-assisted recommendations for beginner users. Seamless admin UX for product and order management.",
      image: "/customrig-project.png",
      category: "web",
    },
    {
      id: 3,
      title: "AirKerala Website",
      subtitle: "Official Airline Website Development",
      description:
        "Developed and deployed the official airline website using HTML, CSS, JavaScript, PHP, MySQL, React, and Next.js with a focus on performance, security, and user experience.",
      features: [
        "Flight booking and management system",
        "User account management",
        "Secure payment processing",
        "Flight status tracking",
        "Responsive design for all devices",
      ],
      techStack: ["Next.js", "React", "JavaScript", "PHP", "MySQL", "HTML/CSS"],
      architecture:
        "Modern web application with server-side rendering for optimal performance and SEO. Integrated with backend systems for real-time flight data and booking management.",
      challenges:
        "Implementing secure payment processing, optimizing performance for users with varying internet speeds, ensuring cross-browser compatibility.",
      image: "/airkerala-project.png",
      category: "web",
    },
    {
      id: 4,
      title: "Server Migration Project",
      subtitle: "Azure to Hetzner Cloud Migration",
      description:
        "Migrated over 100 websites from Azure to Hetzner Cloud using Linux (Apache) and Windows IIS environments. Implemented robust backup and disaster recovery strategies to minimize downtime and ensure seamless transitions.",
      features: [
        "Comprehensive migration planning",
        "Minimal downtime implementation",
        "Performance optimization post-migration",
        "Cost reduction while maintaining reliability",
        "Automated backup and recovery systems",
      ],
      techStack: ["Azure", "Hetzner Cloud", "Linux", "Apache", "Windows IIS", "PowerShell", "Bash"],
      architecture:
        "Hybrid cloud architecture with load balancing and failover capabilities. Automated deployment pipelines for continuous integration.",
      challenges:
        "Ensuring zero data loss during migration, minimizing downtime for critical services, optimizing performance in the new environment.",
      image: "/server-migration-cloud.png",
      category: "cloud",
    },
    {
      id: 5,
      title: "Web Application Security Assessment",
      subtitle: "OWASP Juice Shop Penetration Testing",
      description:
        "Conducted comprehensive penetration testing on OWASP Juice Shop following OWASP Top 10 standards. Discovered and exploited multiple vulnerabilities such as SQL Injection, XSS, and CSRF.",
      features: [
        "Vulnerability assessment and exploitation",
        "Detailed security reporting",
        "Remediation recommendations",
        "Security best practices implementation",
      ],
      techStack: ["OWASP ZAP", "Burp Suite", "Metasploit", "Kali Linux", "Python"],
      architecture:
        "Systematic approach to security testing following industry standard methodologies. Comprehensive documentation of findings and remediation steps.",
      challenges:
        "Identifying complex vulnerabilities, developing custom exploitation techniques, providing actionable remediation steps.",
      image: "/web-app-security-testing.png",
      category: "security",
    },
  ]

  return (
    <>
      <div className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="section-title mb-6">Projects</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
                A curated selection of my professional projects showcasing expertise in web development, cloud
                infrastructure, cybersecurity, and system administration.
              </p>
            </motion.div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
                <TabsList className="bg-muted/50 p-1">
                  <TabsTrigger
                    value="all"
                    className="px-4 md:px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="web"
                    className="px-4 md:px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Web Development
                  </TabsTrigger>
                  <TabsTrigger
                    value="cloud"
                    className="px-4 md:px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Cloud
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="px-4 md:px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Security
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="space-y-16 md:space-y-24">
                  {projects.map((project, index) => (
                    <ProjectDetail key={project.id} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-0">
                <div className="space-y-16 md:space-y-24">
                  {projects
                    .filter((p) => p.category === "web")
                    .map((project, index) => (
                      <ProjectDetail key={project.id} project={project} index={index} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="cloud" className="mt-0">
                <div className="space-y-16 md:space-y-24">
                  {projects
                    .filter((p) => p.category === "cloud")
                    .map((project, index) => (
                      <ProjectDetail key={project.id} project={project} index={index} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-0">
                <div className="space-y-16 md:space-y-24">
                  {projects
                    .filter((p) => p.category === "security")
                    .map((project, index) => (
                      <ProjectDetail key={project.id} project={project} index={index} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  )
}

function ProjectDetail({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <FadeInWhenVisible>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
      >
        <div className={`order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden rounded-lg shadow-elegant">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} - ${project.subtitle}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <h2 className="font-playfair text-2xl md:text-3xl text-primary mb-2">{project.title}</h2>
          <h3 className="font-cormorant text-lg md:text-xl text-muted-foreground mb-4 md:mb-6">{project.subtitle}</h3>

          <p className="text-foreground/90 mb-4 md:mb-6 leading-relaxed">{project.description}</p>

          <div className="mb-4 md:mb-6">
            <h4 className="font-medium text-base md:text-lg mb-2 md:mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4 md:mb-6">
            <h4 className="font-medium text-base md:text-lg mb-2 md:mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <h4 className="font-medium text-base md:text-lg mb-2 md:mb-3">Challenges Solved</h4>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}
