import GalleryClientPage from "./GalleryClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | IT & Security Implementations",
  description:
    "Visual showcase of Fairoz Faisal's projects, work environments, and professional achievements in IT, cybersecurity, and web development.",
  keywords: [
    "IT project gallery",
    "cybersecurity implementations",
    "web development portfolio",
    "cloud infrastructure projects",
    "IT professional work",
    "tech project showcase",
    "security solutions gallery",
    "network setup gallery",
    "server infrastructure images",
    "IT project visuals",
  ],
  alternates: {
    canonical: "https://fairoz.in/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
