import ProjectsClientPage from "./ProjectsClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Projects | IT & Cybersecurity Solutions",
  description:
    "Explore Fairoz Faisal's portfolio of projects showcasing expertise in web development, cloud infrastructure, cybersecurity implementations, and system administration solutions.",
  keywords: [
    "IT projects portfolio",
    "cybersecurity projects",
    "web development portfolio",
    "cloud infrastructure projects",
    "system administration case studies",
    "IT professional work",
    "security implementation projects",
    "DevTimeTracker project",
    "CustomRig PC Builder",
    "AirKerala website development",
  ],
  alternates: {
    canonical: "https://fairoz.in/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
