import type { Metadata } from "next"
import ProfileClientPage from "./ProfileClientPage"

export const metadata: Metadata = {
  title: "Professional Profile | IT & Cybersecurity Expert",
  description:
    "Explore Fairoz Faisal's professional background, experience in IT administration, cybersecurity implementation, and cloud infrastructure management across various industries.",
  keywords: [
    "Fairoz Faisal profile",
    "IT professional experience",
    "cybersecurity expert",
    "system administrator",
    "cloud infrastructure specialist",
    "IT career",
    "tech professional Kerala",
    "network security expert",
    "AWS specialist",
    "Azure solutions architect",
  ],
  alternates: {
    canonical: "https://fairoz.in/profile",
  },
}

export default function ProfilePage() {
  return <ProfileClientPage />
}
