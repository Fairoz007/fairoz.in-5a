"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactPageClient() {
  const { toast } = useToast()
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(null)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value)
    if (formErrors.captcha) {
      setFormErrors((prev) => ({ ...prev, captcha: undefined }))
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    if (!captchaValue) errors.captcha = "Please complete the CAPTCHA verification"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setCaptchaValue(null)
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h1 className="section-title mb-6">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
              Have a question or want to work together? Feel free to reach out to me using the contact form or through
              my contact information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-none shadow-elegant h-full">
                <CardContent className="p-6 md:p-10">
                  <h2 className="font-playfair text-2xl text-primary mb-8">Contact Information</h2>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-medium mb-2">Email</h3>
                        <a
                          href="mailto:info@fairoz.in"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Send email to info@fairoz.in"
                        >
                          info@fairoz.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-medium mb-2">Phone</h3>
                        <a
                          href="tel:+919961812897"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Call +91 9961812897"
                        >
                          +91 9961812897
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                      <div>
                        <h3 className="font-medium mb-2">Location</h3>
                        <p className="text-muted-foreground">Muvattupuzha, Kerala, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-medium mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5"
                        asChild
                      >
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit LinkedIn profile"
                        >
                          <Linkedin className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5"
                        asChild
                      >
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit GitHub profile"
                        >
                          <Github className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-none shadow-elegant">
                <CardContent className="p-6 md:p-10">
                  <h2 className="font-playfair text-2xl text-primary mb-8">Send a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`border-primary/20 focus:border-primary ${formErrors.name ? "border-red-500" : ""}`}
                          aria-required="true"
                          aria-invalid={!!formErrors.name}
                          aria-describedby={formErrors.name ? "name-error" : undefined}
                          required
                        />
                        {formErrors.name && (
                          <p id="name-error" className="text-red-500 text-xs mt-1">
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className={`border-primary/20 focus:border-primary ${formErrors.email ? "border-red-500" : ""}`}
                          aria-required="true"
                          aria-invalid={!!formErrors.email}
                          aria-describedby={formErrors.email ? "email-error" : undefined}
                          required
                        />
                        {formErrors.email && (
                          <p id="email-error" className="text-red-500 text-xs mt-1">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message"
                        className={`border-primary/20 focus:border-primary ${formErrors.subject ? "border-red-500" : ""}`}
                        aria-required="true"
                        aria-invalid={!!formErrors.subject}
                        aria-describedby={formErrors.subject ? "subject-error" : undefined}
                        required
                      />
                      {formErrors.subject && (
                        <p id="subject-error" className="text-red-500 text-xs mt-1">
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className={`border-primary/20 focus:border-primary min-h-[150px] ${formErrors.message ? "border-red-500" : ""}`}
                        rows={5}
                        aria-required="true"
                        aria-invalid={!!formErrors.message}
                        aria-describedby={formErrors.message ? "message-error" : undefined}
                        required
                      />
                      {formErrors.message && (
                        <p id="message-error" className="text-red-500 text-xs mt-1">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is a test key
                        onChange={handleCaptchaChange}
                      />
                      {formErrors.captcha && <p className="text-red-500 text-xs mt-1">{formErrors.captcha}</p>}
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <Checkbox id="privacy" required aria-required="true" />
                      <label
                        htmlFor="privacy"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the privacy policy
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-none py-6"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Sending message..." : "Send message"}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" aria-hidden="true" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
