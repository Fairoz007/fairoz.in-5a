import type { Metadata } from "next"
import AboutDetailed from "@/components/about-detailed"
import NewsletterSignup from "@/components/newsletter-signup"
import Script from "next/script"

export const metadata: Metadata = {
  title: "About Fairoz Faisal | IT & Security Professional",
  description:
    "Learn about Fairoz Faisal's professional journey, mission, values, and expertise in IT services, cybersecurity, and infrastructure management.",
  keywords: [
    "About Fairoz Faisal",
    "IT professional background",
    "cybersecurity specialist",
    "professional mission",
    "IT services background",
    "tech professional journey",
    "Kerala IT expert",
    "cloud infrastructure specialist",
    "security implementation expert",
    "system administrator background",
  ],
  alternates: {
    canonical: "https://fairoz.in/about-us",
  },
}

export default function AboutUsPage() {
  return (
    <div className="pt-16">
      <AboutDetailed />

      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id="schema-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://fairoz.in/about-us/#aboutpage",
            name: "About Fairoz Faisal - IT Professional",
            description:
              "Information about Fairoz Faisal's professional journey, mission, values, and company history.",
            mainEntity: {
              "@type": "Organization",
              "@id": "https://fairoz.in/#organization",
              name: "Fairoz Faisal IT Services",
              description:
                "Professional IT services specializing in cybersecurity, infrastructure management, and web development",
              founder: {
                "@type": "Person",
                "@id": "https://fairoz.in/#person",
                name: "Fairoz Faisal",
                jobTitle: "IT Professional & Cybersecurity Specialist",
              },
              foundingDate: "2022",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Muvattupuzha",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              knowsAbout: ["Cybersecurity", "Cloud Computing", "System Administration", "Web Development"],
            },
            isPartOf: {
              "@id": "https://fairoz.in/#website",
            },
          }),
        }}
      />
    </div>
  )
}
