import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage" // Import the client component

export const metadata: Metadata = {
  title: "Projects | IT Infrastructure, Cybersecurity & Web Development",
  description:
    "Explore Fairoz Faisal's key projects in IT infrastructure, cybersecurity, and web development, including server migrations, security assessments, and full-stack web applications.",
  keywords: [
    "IT projects",
    "cybersecurity projects",
    "web development projects",
    "server migration",
    "Azure to Hetzner",
    "OWASP Juice Shop",
    "penetration testing",
    "website development",
    "Google Cloud hosting",
    "Airkerala website",
    "booking system development",
    "admin dashboard",
    "IT infrastructure design",
    "network security projects",
    "Fairoz Faisal projects",
  ],
  alternates: {
    canonical: "https://fairoz.in/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsClientPage /> // Render the client component
}
