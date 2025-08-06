import ContactPageClient from "./ContactPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact for IT & Security Services | Fairoz Faisal",
  description:
    "Get in touch with Fairoz Faisal, IT Professional specializing in Cybersecurity and System Administration. Contact for consultations, project inquiries, or professional collaborations.",
  keywords: [
    "contact IT professional",
    "hire cybersecurity specialist",
    "IT consultation",
    "security services contact",
    "Fairoz Faisal contact",
    "IT project inquiry",
    "Kerala IT services",
    "cloud infrastructure consultation",
    "security assessment services",
    "web development inquiry",
  ],
  alternates: {
    canonical: "https://fairoz.in/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
