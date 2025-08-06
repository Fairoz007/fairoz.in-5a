"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Mail, Globe } from "lucide-react"
import { motion, useInView } from "framer-motion"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Fairoz Faisal",
    role: "IT Professional & Cybersecurity Specialist",
    bio: "An experienced IT professional with expertise in cybersecurity, system administration, and infrastructure management. Leading the team with a focus on secure, scalable IT solutions.",
    image: "/fairoz-portrait.jpeg",
    skills: ["Network Security", "Linux Systems", "Cloud Infrastructure", "Web Development"],
    social: {
      linkedin: "https://linkedin.com/in/fairozfaisal",
      github: "https://github.com/fairozfaisal",
      email: "info@fairoz.in",
    },
  },
  {
    id: 2,
    name: "Aarav Sharma",
    role: "Senior Network Engineer",
    bio: "Network architecture specialist with 7+ years of experience in designing and implementing secure, high-performance networks for enterprises. Expert in Cisco and Juniper technologies.",
    image: "/images/team-member-1.jpg",
    skills: ["Network Design", "Routing & Switching", "Firewall Configuration", "VPN Implementation"],
    social: {
      linkedin: "https://linkedin.com",
      email: "aarav@example.com",
    },
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Cloud Solutions Architect",
    bio: "AWS certified architect specializing in cloud migration and optimization. Experienced in designing scalable and cost-effective cloud infrastructure solutions.",
    image: "/images/team-member-2.png",
    skills: ["AWS", "Azure", "Cloud Migration", "Containerization", "Serverless Architecture"],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "priya@example.com",
    },
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Security Operations Analyst",
    bio: "Cybersecurity professional specializing in threat detection, incident response, and security monitoring. Certified in offensive security and penetration testing.",
    image: "/images/team-member-3.png",
    skills: ["Threat Intelligence", "SIEM", "Penetration Testing", "Incident Response"],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "michael@example.com",
      website: "https://example.com",
    },
  },
]

// Animation for team members appearing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export default function TeamClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="section-title mb-6">Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Meet the talented professionals behind our IT solutions. Together, we bring diverse expertise in
              cybersecurity, network administration, cloud computing, and web development.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <Card className="border-none shadow-elegant hover:shadow-elegant-hover team-card h-full overflow-hidden">
                  <div className="relative h-64 bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/2"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-playfair text-xl font-medium text-white">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                    <div className="mb-4">
                      <h4 className="text-primary font-medium text-sm mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn profile`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s GitHub profile`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          aria-label={`Email ${member.name}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.website && (
                        <a
                          href={member.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s website`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
