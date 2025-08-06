import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fairoz Portfolio",
  description: "Personal portfolio website for Fairoz",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#c5a028" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://fairoz.in/#person",
              "name": "Fairoz Faisal",
              "url": "https://fairoz.in",
              "image": {
                "@type": "ImageObject",
                "@id": "https://fairoz.in/#personImage",
                "url": "https://fairoz.in/fairoz-portrait.jpeg",
                "width": 450,
                "height": 450,
                "caption": "Fairoz Faisal - IT Professional & Cybersecurity Specialist"
              },
              "sameAs": [
                "https://linkedin.com/in/fairozfaisal",
                "https://github.com/fairozfaisal"
              ],
              "jobTitle": "IT Professional & Cybersecurity Specialist",
              "worksFor": {
                "@type": "Organization",
                "name": "Airkerala",
                "url": "https://airkerala.com"
              },
              "description": "IT Professional specializing in Cybersecurity, System Administration, Cloud Infrastructure, and Web Development",
              "knowsAbout": ["Cybersecurity", "System Administration", "Cloud Computing", "Web Development", "Network Security", "AWS", "Azure", "Linux Server"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Muvattupuzha",
                "addressRegion": "Kerala",
                "addressCountry": "India"
              },
              "email": "info@fairoz.in",
              "telephone": "+91 9961812897"
            }
          `}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://fairoz.in/#website",
              "url": "https://fairoz.in",
              "name": "Fairoz Faisal - IT Professional & Cybersecurity Specialist",
              "description": "Portfolio website of Fairoz Faisal, IT Professional specializing in Cybersecurity and System Administration",
              "publisher": {
                "@id": "https://fairoz.in/#person"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://fairoz.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <Script id="breadcrumb-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://fairoz.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Profile",
                  "item": "https://fairoz.in/profile"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Skills",
                  "item": "https://fairoz.in/skills"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Projects",
                  "item": "https://fairoz.in/projects"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Blog",
                  "item": "https://fairoz.in/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Gallery",
                  "item": "https://fairoz.in/gallery"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "Contact",
                  "item": "https://fairoz.in/contact"
                }
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}
