"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import BlogForm from "../../components/blog-form"

export default function EditBlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      setIsLoading(true)
      setError(null)

      try {
        const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

        if (error) throw error

        // Convert tags array back to comma-separated string for the form
        if (data) {
          setPost({
            ...data,
            tags: Array.isArray(data.tags) ? data.tags.join(", ") : data.tags,
          })
        }
      } catch (err) {
        console.error("Error fetching post:", err)
        setError("Failed to fetch blog post")
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id])

  if (isLoading) {
    return (
      <div className="flex justify-center my-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-destructive mb-2">Error</h3>
        <p className="text-muted-foreground">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      {post && <BlogForm initialData={post} isEditing />}
    </div>
  )
}
