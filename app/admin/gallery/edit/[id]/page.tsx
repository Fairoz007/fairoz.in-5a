"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import GalleryForm from "../../components/gallery-form"

export default function EditGalleryImage() {
  const { id } = useParams()
  const [image, setImage] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchImage() {
      setIsLoading(true)
      setError(null)

      try {
        const { data, error } = await supabase.from("gallery_images").select("*").eq("id", id).single()

        if (error) throw error

        setImage(data)
      } catch (err) {
        console.error("Error fetching image:", err)
        setError("Failed to fetch gallery image")
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchImage()
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
      <h1 className="text-3xl font-bold mb-8">Edit Gallery Image</h1>
      {image && <GalleryForm initialData={image} isEditing />}
    </div>
  )
}
