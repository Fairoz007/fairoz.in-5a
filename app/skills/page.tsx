import type { Metadata } from "next"
import SkillsPageClient from "./SkillsPageClient"

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
  return <SkillsPageClient />
}
