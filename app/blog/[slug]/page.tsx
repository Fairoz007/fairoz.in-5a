import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase.from("blog_posts").select("*").eq("slug", params.slug).single()

  if (!post) {
    return {
      title: "Blog Post Not Found | Fairoz Faisal",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Fairoz Faisal Blog`,
    description: post.excerpt,
    keywords: [...(Array.isArray(post.tags) ? post.tags : []), "Fairoz Faisal", "IT blog", post.category].join(", "),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase.from("blog_posts").select("*").eq("slug", params.slug).single()

  if (!post) {
    return (
      <div className="pt-24 container mx-auto px-4 py-20 text-center">
        <h1 className="section-title mb-6">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="pt-24">
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild className="border-primary/30 hover:border-primary">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                {post.category}
              </span>
              {Array.isArray(post.tags) &&
                post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">{post.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <span className="mr-4">{format(new Date(post.created_at), "MMMM d, yyyy")}</span>
              <span>{post.read_time || 5} min read</span>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-12">
              <Image
                src={post.featured_image || "/placeholder.svg"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:font-playfair prose-headings:text-primary prose-a:text-primary">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author and share section */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 mr-4">
                  <Image
                    src="/fairoz-portrait.jpeg"
                    alt="Fairoz Faisal"
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-medium">Fairoz Faisal</p>
                  <p className="text-sm text-muted-foreground">IT Professional & Cybersecurity Specialist</p>
                </div>
              </div>
              <div>
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary">
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
