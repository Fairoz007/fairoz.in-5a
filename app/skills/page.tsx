import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, Cloud, Server, Code, Database, Network, Lock, Terminal } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical Skills & Expertise | IT Professional",
  description:
    "Explore Fairoz Faisal's technical skills in cybersecurity, cloud platforms, server administration, and web development with detailed proficiency levels and expertise areas.",
  keywords: [
    "IT skills",
    "cybersecurity expertise",
    "cloud computing skills",
    "server administration",
    "technical proficiency",
    "network security skills",
    "web development expertise",
    "IT professional skills",
    "penetration testing",
    "AWS expertise",
    "Azure skills",
    "Linux server management",
  ],
  alternates: {
    canonical: "https://fairoz.in/skills",
  },
}

export default function SkillsPage() {
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
          <h1 className="section-title text-center mb-12">Skills & Expertise</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Professional Development</h2>
            <p className="text-lg mb-6">
              I am constantly expanding my skills through certifications, courses, and hands-on projects. My focus areas
              include advanced penetration testing, cloud security, and automation.
            </p>
            <p className="text-primary font-medium">
              <Link href="/certifications">View my certifications in the Certifications section.</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
