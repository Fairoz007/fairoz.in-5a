"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function GalleryClientPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState([])

  useEffect(() => {
    // Fetch gallery images from Supabase
    async function fetchGalleryImages() {
      try {
        const { data } = await supabase.from("gallery_images").select("*").order("created_at", { ascending: false })

        setImages(data || [])
      } catch (error) {
        console.error("Error fetching gallery images:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGalleryImages()
  }, [])

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === "Escape") {
        setSelectedImage(null)
      } else if (e.key === "ArrowRight") {
        const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
        const nextIndex = (currentIndex + 1) % images.length
        setSelectedImage(images[nextIndex])
      } else if (e.key === "ArrowLeft") {
        const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        setSelectedImage(images[prevIndex])
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, images])

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
            <h1 className="section-title mb-6">Photo Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
              A visual showcase of my projects, work environments, and professional achievements.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="h-64 bg-muted/50 rounded-lg animate-pulse" aria-hidden="true"></div>
              ))}
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">No gallery images yet</h2>
              <p className="text-muted-foreground mb-8">Check back soon for new project images and visuals.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${image.alt_text}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedImage(image)
                    }
                  }}
                >
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-elegant">
                    <Image
                      src={image.image_url || "/placeholder.svg"}
                      alt={image.alt_text}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white font-medium">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="h-8 w-8" aria-hidden="true" />
              </button>
              <div className="relative h-[80vh] w-[90vw] md:w-auto">
                <Image
                  src={selectedImage.image_url || "/placeholder.svg"}
                  alt={selectedImage.alt_text}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                  quality={90}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <p id="lightbox-title" className="font-medium">
                  {selectedImage.title}
                </p>
                <p className="text-sm text-white/80">{selectedImage.description}</p>
              </div>

              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
                      const prevIndex = (currentIndex - 1 + images.length) % images.length
                      setSelectedImage(images[prevIndex])
                    }}
                    aria-label="Previous image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
                      const nextIndex = (currentIndex + 1) % images.length
                      setSelectedImage(images[nextIndex])
                    }}
                    aria-label="Next image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
