"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
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

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real application, you would send formData to your backend here
      console.log("Form submitted:", formData)

      setStatus("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="section-title text-center mb-4">Get In Touch</h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@fairoz.in" className="hover:text-primary transition-colors">
                        info@fairoz.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919961812897" className="hover:text-primary transition-colors">
                        +91 9961812897
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">Muvattupuzha, Kerala, India</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-muted-foreground">
                    Name
                  </Label>
                  <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-muted-foreground">
                    Email
                  </Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-muted-foreground">
                    Subject
                  </Label>
                  <Input id="subject" type="text" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="message" className="text-muted-foreground">
                    Message
                  </Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} required rows={5} />
                </div>
                {status && (
                  <p className={`text-center ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {status}
                  </p>
                )}
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
