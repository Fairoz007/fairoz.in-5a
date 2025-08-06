"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Download } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion" // Re-added Framer Motion imports
import { useRef, useEffect } from "react" // Re-added useEffect, useRef

// Re-added AnimatedSection component for consistency
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

export default function ProfileClientPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="section-title mb-6">About Me</h1>
              <p className="text-lg mb-6">
                Self-motivated IT professional and system administrator with a focus on cybersecurity and system
                optimization. Skilled in troubleshooting, cloud infrastructure management, and web application
                penetration testing.
              </p>
              <p className="text-lg mb-6">
                Seeking to leverage my expertise in IT administration, cloud environments, and security protocols to
                contribute to larger projects and expand my cybersecurity experience.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="gap-2">
                  <Link href="/resume.pdf" download="Fairoz-Faisal-Resume.pdf">
                    <Download className="h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/fairoz-portrait.jpeg"
                  alt="Fairoz Faisal - IT Professional & Cybersecurity Specialist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20" id="experience" aria-labelledby="experience-heading">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 id="experience-heading" className="section-title text-center mb-12">
              Professional Experience
            </h2>
          </AnimatedSection>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/40 before:to-transparent">
            <AnimatedSection delay={0.1}>
              <div className="relative flex items-start md:justify-center">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 border-4 border-primary rounded-full bg-background"></div>

                <Card className="w-full md:w-[calc(50%-2.5rem)] md:mr-auto border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-xl font-semibold">ICT Executive</h3>
                      </div>
                      <span className="text-sm text-muted-foreground">November 2024 - Present</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-4">Airkerala – On-site</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>
                        Designed and implemented entire office IT infrastructure including servers, network cabling, and
                        firewall systems.
                      </li>
                      <li>Deployed and configured secure LAN/WAN network architecture with VPN and DHCP services.</li>
                      <li>
                        Installed and managed UTM firewalls for endpoint protection, traffic control, and logging.
                      </li>
                      <li>
                        Developed and deployed the official airline website using HTML, CSS, JavaScript, PHP, MySQL,
                        React, and Next.js.
                      </li>
                      <li>
                        Implemented comprehensive security protocols including multi-factor authentication and regular
                        security audits.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative flex items-start md:justify-center">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 border-4 border-primary rounded-full bg-background"></div>

                <Card className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-xl font-semibold">System Administrator</h3>
                      </div>
                      <span className="text-sm text-muted-foreground">December 2022 - November 2024</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-4">
                      Phases India Technology Solutions India – On-site
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>
                        Managed AWS, Microsoft Azure, and Hetzner Cloud platforms to ensure secure, scalable
                        infrastructure.
                      </li>
                      <li>
                        Led migration of 100+ websites from Azure to Hetzner Cloud, ensuring minimal downtime and
                        optimal performance.
                      </li>
                      <li>
                        Conducted security testing using Burp Suite and OWASP ZAP to identify and resolve
                        vulnerabilities.
                      </li>
                      <li>
                        Administered Linux and Windows systems, developed disaster recovery plans, and optimized system
                        performance.
                      </li>
                      <li>
                        Automated system management with PowerShell, Terraform, and Ansible, reducing manual overhead.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/30" id="education" aria-labelledby="education-heading">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 id="education-heading" className="section-title text-center mb-12">
              Education
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">Yenapoya University</p>
                  <p className="text-sm text-muted-foreground">2023 - 2027</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Diploma in Cloud Computing</h3>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">Jenking</p>
                  <p className="text-sm text-muted-foreground">2021 - 2022</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Higher Secondary (+2)</h3>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">
                    Guardian Angel English Medium Higher Secondary School
                  </p>
                  <p className="text-sm text-muted-foreground">2019</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Secondary Education (10th)</h3>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">Presidency Central School</p>
                  <p className="text-sm text-muted-foreground">2017</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
