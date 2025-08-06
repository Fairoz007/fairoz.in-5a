import type { Metadata } from "next"
import TeamClient from "./TeamClient"

export const metadata: Metadata = {
  title: "Our Team | Fairoz Faisal - IT Professional",
  description:
    "Meet the team of IT professionals working with Fairoz Faisal, specializing in cybersecurity, network administration, cloud computing, and web development.",
  keywords:
    "IT team, technology professionals, cybersecurity experts, network administrators, cloud specialists, Fairoz Faisal team",
  alternates: {
    canonical: "/team",
  },
}

export default function TeamPage() {
  return <TeamClient />
}
