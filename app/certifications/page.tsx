import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Certifications | IT & Security Credentials",
  description:
    "Explore Fairoz Faisal's professional certifications and credentials in IT, cybersecurity, cloud computing, and system administration that validate expertise and technical knowledge.",
  keywords: [
    "IT certifications",
    "cybersecurity credentials",
    "cloud computing certifications",
    "professional IT qualifications",
    "tech certifications",
    "Fairoz Faisal credentials",
    "system administration certifications",
    "Docker certification",
    "Microsoft certifications",
    "LinkedIn learning certificates",
    "ISO 27001",
    "Cybersecurity Foundations",
    "Backup and Recovery",
    "Threat Landscape",
  ],
  alternates: {
    canonical: "https://fairoz.in/certifications",
  },
}

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker, Inc",
      date: "October 2024",
      category: "DevOps",
    },
    {
      id: 2,
      title: "Docker: Your First Project",
      issuer: "LinkedIn",
      date: "October 2024",
      category: "DevOps",
    },
    {
      id: 3,
      title: "Introduction to IT Architecture",
      issuer: "LinkedIn",
      date: "October 2024",
      category: "IT Architecture",
    },
    {
      id: 4,
      title: "Learning Docker",
      issuer: "LinkedIn",
      date: "October 2024",
      category: "DevOps",
    },
    {
      id: 5,
      title: "Learning Docker Compose",
      issuer: "LinkedIn",
      date: "October 2024",
      category: "DevOps",
    },
    {
      id: 6,
      title: "Program Management for IT Professionals",
      issuer: "LinkedIn",
      date: "October 2024",
      category: "Management",
    },
    {
      id: 7,
      title: "Succeeding as a First-Time Tech Manager",
      issuer: "LinkedIn",
      date: "October 2024",
      category: "Management",
    },
    {
      id: 8,
      title: "Career Essentials in Cybersecurity",
      issuer: "Microsoft and LinkedIn",
      date: "December 2023",
      category: "Cybersecurity",
    },
    {
      id: 9,
      title: "Cybersecurity Awareness: Cybersecurity Terminology",
      issuer: "LinkedIn",
      date: "December 2023",
      category: "Cybersecurity",
    },
    {
      id: 10,
      title: "Cybersecurity Foundations",
      issuer: "LinkedIn",
      date: "December 2023",
      category: "Cybersecurity",
    },
    {
      id: 11,
      title: "ISO 27001:2013-Compliant Cybersecurity",
      issuer: "LinkedIn",
      date: "December 2023",
      category: "Cybersecurity",
    },
    {
      id: 12,
      title: "System Administration: Backup and Recovery",
      issuer: "LinkedIn",
      date: "December 2023",
      category: "System Administration",
    },
    {
      id: 13,
      title: "The Cybersecurity Threat Landscape",
      issuer: "LinkedIn",
      date: "December 2023",
      category: "Cybersecurity",
    },
  ]

  // Group certifications by year
  const certificationsByYear = certifications.reduce(
    (acc, cert) => {
      const year = cert.date.split(" ")[1]
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(cert)
      return acc
    },
    {} as Record<string, typeof certifications>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(certificationsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="section-title text-center mb-4">Professional Certifications</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Professional certifications and courses I've completed to enhance my skills and knowledge in IT,
            cybersecurity, and cloud computing.
          </p>

          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} id={`certifications-${year}`}>
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  {year}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificationsByYear[year].map((cert) => (
                    <Card key={cert.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <Badge className="mb-3">{cert.category}</Badge>
                        <div className="flex items-start">
                          <Award className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                            <p className="text-xs text-muted-foreground">{cert.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
