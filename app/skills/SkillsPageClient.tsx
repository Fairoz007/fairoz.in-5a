"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, Cloud, Server, Code, Database, Network, Lock, Terminal } from "lucide-react"
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

export default function SkillsPageClient() {
  const cybersecuritySkills = [
    { name: "Penetration Testing", value: 90, icon: Shield },
    { name: "Vulnerability Exploitation", value: 85, icon: Lock },
    { name: "OWASP, Burp Suite, ZAP", value: 90, icon: Shield },
  ]

  const cloudSkills = [
    { name: "AWS", value: 85, icon: Cloud },
    { name: "Microsoft Azure", value: 80, icon: Cloud },
    { name: "Hetzner Cloud, Google Cloud", value: 75, icon: Cloud },
  ]

  const serverSkills = [
    { name: "Linux Server", value: 95, icon: Server },
    { name: "Windows Server", value: 85, icon: Server },
    { name: "Virtualization (VMware, HyperV)", value: 80, icon: Server },
  ]

  const otherSkills = [
    { name: "Network Security", value: 85, icon: Network },
    { name: "Automation (PowerShell, Terraform, Ansible)", value: 80, icon: Terminal },
    { name: "Web Development", value: 75, icon: Code },
    { name: "Database Management", value: 70, icon: Database },
  ]

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="section-title text-center mb-12">Skills & Expertise</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection delay={0.1}>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {cybersecuritySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <skill.icon className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.value}%</span>
                        </div>
                        <Progress value={skill.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <Cloud className="h-6 w-6 text-primary mr-2" />
                    Cloud Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {cloudSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <skill.icon className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.value}%</span>
                        </div>
                        <Progress value={skill.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <Server className="h-6 w-6 text-primary mr-2" />
                    Server Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {serverSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <skill.icon className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.value}%</span>
                        </div>
                        <Progress value={skill.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <Code className="h-6 w-6 text-primary mr-2" />
                    Other Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {otherSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <skill.icon className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.value}%</span>
                        </div>
                        <Progress value={skill.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5}>
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Professional Development</h2>
              <p className="text-lg mb-6">
                I am constantly expanding my skills through certifications, courses, and hands-on projects. My focus
                areas include advanced penetration testing, cloud security, and automation.
              </p>
              <p className="text-primary font-medium">
                <Link href="/certifications">View my certifications in the Certifications section.</Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
