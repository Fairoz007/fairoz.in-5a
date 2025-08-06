"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion" // Re-added Framer Motion imports
import { format } from "date-fns"
import { supabase } from "@/lib/supabase"

// Re-added AnimatedSection component for consistency
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

// Categories for filtering
const categories = [
  { id: "all", name: "All Posts" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "cloud", name: "Cloud Computing" },
  { id: "networking", name: "Networking" },
  { id: "automation", name: "Automation" },
]

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const { data } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })

        setBlogPosts(data || [])
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  // Filter posts by category
  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="section-title mb-6">Blog & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Expert articles, guides, and industry insights on cybersecurity, network administration, cloud computing,
              and IT best practices.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={activeCategory === category.id ? "" : "hover:text-royal-gold hover:bg-royal-gold/10"}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">No blog posts yet</h2>
              <p className="text-muted-foreground mb-8">Check back soon for new articles and insights.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Card className="blog-card border-none shadow-elegant overflow-hidden h-full flex flex-col">
                    <div className="h-48 lg:h-52 bg-muted relative">
                      <Image
                        src={post.featured_image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 hover:bg-primary text-white">
                          {categories.find((c) => c.id === post.category)?.name || post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {format(new Date(post.created_at), "MMM d, yyyy")}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.read_time || 5} min read
                        </span>
                      </div>
                      <h2 className="font-playfair text-xl md:text-2xl mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Array.isArray(post.tags) &&
                          post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                      </div>
                      <Button variant="link" className="p-0 h-auto font-medium text-primary mt-auto" asChild>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center"
                          aria-label={`Read ${post.title}`}
                        >
                          Read Article <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
