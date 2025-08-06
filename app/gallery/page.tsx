import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Gallery | Visual Portfolio of IT & Cybersecurity Projects",
  description:
    "Explore a visual gallery showcasing Fairoz Faisal's IT and cybersecurity projects, including infrastructure diagrams, web application interfaces, and security testing visuals.",
  keywords: [
    "IT project gallery",
    "cybersecurity visuals",
    "web development portfolio",
    "infrastructure diagrams",
    "security testing images",
    "Fairoz Faisal gallery",
    "tech project showcase",
  ],
  alternates: {
    canonical: "https://fairoz.in/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
