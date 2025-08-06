"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Star, ArrowRight, Building, MapPin, Calendar, Award } from "lucide-react"

export default function AboutDetailed() {
  return (
    <div>
      {/* Hero Banner with Mission Statement */}
      <section className="about-banner py-24 md:py-32 text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-3xl md:text-5xl font-medium mb-6 text-primary">About Fairoz Faisal</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Dedicated to delivering secure, scalable, and innovative IT solutions
            </p>
            <div>
              <Button asChild size="lg" className="mr-4">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div>
                <h2 className="section-title mb-6">Mission & Values</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  My mission is to provide exceptional IT services that empower organizations to maximize their
                  potential through secure, efficient, and innovative technology solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex">
                    <Star className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Excellence</h3>
                      <p className="text-muted-foreground">
                        Commitment to delivering the highest quality in every project, implementation, and solution.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Star className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Security</h3>
                      <p className="text-muted-foreground">
                        Prioritizing robust security measures to protect clients' assets and data in an increasingly
                        vulnerable digital landscape.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Star className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Innovation</h3>
                      <p className="text-muted-foreground">
                        Embracing emerging technologies and creative solutions to address complex IT challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Star className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Integrity</h3>
                      <p className="text-muted-foreground">
                        Maintaining transparent communication and ethical conduct in all professional relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <Image
                    src="/fairoz-portrait.jpeg"
                    alt="Fairoz Faisal"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full border border-primary/30"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full border border-primary/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="section-title text-center mb-12">Professional Journey</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <div className="relative pl-10 timeline-item">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20"></div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center text-sm">
                        <Building className="h-4 w-4 text-primary mr-1" />
                        Airkerala
                      </span>
                      <span className="inline-flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        Kerala, India
                      </span>
                      <span className="inline-flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        November 2024 - Present
                      </span>
                    </div>
                    <h3 className="text-xl font-playfair text-primary mb-2">ICT Executive</h3>
                    <p className="text-muted-foreground mb-4">
                      Spearheaded the design and implementation of the entire office IT infrastructure, including
                      servers, network cabling, and firewall systems. Developed and deployed the official airline
                      website using modern web technologies.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Network Architecture
                      </span>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        UTM Firewalls
                      </span>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Web Development
                      </span>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Security Protocols
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative pl-10 timeline-item">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20"></div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center text-sm">
                        <Building className="h-4 w-4 text-primary mr-1" />
                        Phases India Technology Solutions
                      </span>
                      <span className="inline-flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        India
                      </span>
                      <span className="inline-flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        December 2022 - November 2024
                      </span>
                    </div>
                    <h3 className="text-xl font-playfair text-primary mb-2">System Administrator</h3>
                    <p className="text-muted-foreground mb-4">
                      Managed AWS, Microsoft Azure, and Hetzner Cloud platforms to ensure secure, scalable
                      infrastructure. Led migration of 100+ websites, conducted security testing, and administered Linux
                      and Windows systems.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Cloud Platforms
                      </span>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Website Migration
                      </span>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Security Testing
                      </span>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        System Administration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center mt-12">
                <Button
                  asChild
                  variant="ghost"
                  className="border-transparent text-royal-gold hover:bg-royal-gold/10 flex items-center"
                >
                  <Link href="/profile" className="flex items-center">
                    View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="section-title text-center mb-16">Professional Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Card className="border-none shadow-elegant h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair text-center mb-4">Education</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
                      <p className="text-sm text-muted-foreground">Yenapoya University, 2023 - 2027</p>
                    </li>
                    <li>
                      <p className="font-medium">Diploma in Cloud Computing</p>
                      <p className="text-sm text-muted-foreground">Jenking, 2021 - 2022</p>
                    </li>
                    <li>
                      <p className="font-medium">Higher Secondary (+2)</p>
                      <p className="text-sm text-muted-foreground">
                        Guardian Angel English Medium Higher Secondary School, 2019
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-none shadow-elegant h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair text-center mb-4">Certifications</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Docker Foundations Professional Certificate</p>
                      <p className="text-sm text-muted-foreground">Docker, Inc, October 2024</p>
                    </li>
                    <li>
                      <p className="font-medium">Career Essentials in Cybersecurity</p>
                      <p className="text-sm text-muted-foreground">Microsoft and LinkedIn, December 2023</p>
                    </li>
                    <li>
                      <p className="font-medium">Cybersecurity Awareness: Cybersecurity Terminology</p>
                      <p className="text-sm text-muted-foreground">LinkedIn, December 2023</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-none shadow-elegant h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair text-center mb-4">Professional Focus</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuously expanding skills through certifications, courses, and hands-on projects in these focus
                    areas:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                      <span>Advanced penetration testing methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                      <span>Cloud security architecture and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                      <span>IT infrastructure automation and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                      <span>Modern web development frameworks and security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="section-title text-center mb-12">Company History</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              The evolution of our professional journey and key milestones that have shaped our IT services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                      <span className="text-2xl font-playfair text-primary">2024</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-playfair text-primary mb-2">Expansion into Enterprise Solutions</h3>
                    <p className="text-muted-foreground mb-4">
                      Expanded service offerings to include enterprise-level IT infrastructure solutions, cloud
                      migration consulting, and advanced cybersecurity services for larger organizations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                      <span className="text-2xl font-playfair text-primary">2023</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-playfair text-primary mb-2">Formation of Security Division</h3>
                    <p className="text-muted-foreground mb-4">
                      Established a dedicated cybersecurity team focusing on penetration testing, vulnerability
                      assessments, and security implementation for small to medium businesses.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                      <span className="text-2xl font-playfair text-primary">2022</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-playfair text-primary mb-2">Professional Practice Established</h3>
                    <p className="text-muted-foreground mb-4">
                      Founded professional IT services practice with focus on system administration, network design, and
                      infrastructure management for small businesses and startups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
