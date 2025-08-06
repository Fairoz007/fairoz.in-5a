import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google" // Changed to Inter for consistency with previous context
import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AuthProvider } from "@/contexts/auth-context" // Assuming AuthProvider is still needed
import { Toaster } from "@/components/ui/toaster" // Assuming Toaster is still needed
import ScrollToTopButton from "@/components/scroll-to-top-button" // Import the new component

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: "Fairoz Faisal | IT & Cybersecurity Expert",
    template: "%s | Fairoz Faisal",
  },
  description:
    "Fairoz Faisal is an IT professional and system administrator specializing in cybersecurity, cloud infrastructure, and web application penetration testing. Explore his portfolio, skills, and services.",
  keywords: [
    "Fairoz Faisal",
    "IT professional",
    "cybersecurity expert",
    "system administrator",
    "cloud infrastructure",
    "web development",
    "network security",
    "IT consultant",
    "Kerala IT",
    "tech portfolio",
  ],
  authors: [
    {
      name: "Fairoz Faisal",
      url: "https://fairoz.in",
    },
  ],
  creator: "Fairoz Faisal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fairoz.in",
    title: "Fairoz Faisal | IT & Cybersecurity Expert",
    description:
      "Fairoz Faisal is an IT professional and system administrator specializing in cybersecurity, cloud infrastructure, and web application penetration testing. Explore his portfolio, skills, and services.",
    siteName: "Fairoz Faisal's Portfolio",
    images: [
      {
        url: "https://fairoz.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fairoz Faisal's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairoz Faisal | IT & Cybersecurity Expert",
    description:
      "Fairoz Faisal is an IT professional and system administrator specializing in cybersecurity, cloud infrastructure, and web application penetration testing. Explore his portfolio, skills, and services.",
    images: ["https://fairoz.in/og-image.jpg"],
    creator: "@fairozfaisal", // Replace with actual Twitter handle if available
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
