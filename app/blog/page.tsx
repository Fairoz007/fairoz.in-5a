import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "IT & Cybersecurity Blog | Expert Insights",
  description:
    "Technical insights, industry knowledge, and expert advice on cybersecurity, cloud computing, network administration, and IT best practices by Fairoz Faisal.",
  keywords: [
    "IT blog",
    "cybersecurity insights",
    "cloud computing blog",
    "network administration",
    "IT best practices",
    "Fairoz Faisal blog",
    "tech articles",
    "security blog",
    "AWS tutorials",
    "Azure guides",
    "penetration testing articles",
  ],
  alternates: {
    canonical: "https://fairoz.in/blog",
  },
}

export default function BlogPage() {
  return <BlogClient />
}
