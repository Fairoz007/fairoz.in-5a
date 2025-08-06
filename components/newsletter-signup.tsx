"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to the newsletter.",
      })

      setIsSuccess(true)
      setEmail("")

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was a problem subscribing to the newsletter. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="luxury-card p-8 md:p-10 bg-pearl-white dark:bg-charcoal">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-royal-gold/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-royal-gold/30 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
            <Send className="h-5 w-5 text-royal-gold" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-sans font-bold text-center mb-3">
          <span className="gradient-text-gold animate-gradient-shift">Stay Updated</span>
        </h2>
        <p className="text-onyx-black dark:text-pearl-white text-center mb-6 max-w-md mx-auto">
          Subscribe to my newsletter for the latest insights on cybersecurity, cloud computing, and IT best practices.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pr-10 border-royal-gold/20 focus:border-royal-gold bg-pearl-white dark:bg-charcoal"
              required
              disabled={isSubmitting || isSuccess}
            />
            {isSuccess && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="relative overflow-hidden group bg-gold text-rich-black hover:bg-bronze button-primary"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-onyx-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </>
            ) : isSuccess ? (
              "Subscribed!"
            ) : (
              <>
                Subscribe
                <span className="absolute right-full top-0 bottom-0 w-full bg-white/10 transition-all duration-500 group-hover:right-0"></span>
              </>
            )}
          </Button>
        </form>

        <p className="text-onyx-black dark:text-pearl-white text-center text-sm mt-4">
          By subscribing, you agree to receive occasional updates and promotional emails. You can unsubscribe at any
          time.
        </p>
      </motion.div>
    </div>
  )
}
