"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  loading?: "eager" | "lazy"
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  fill = false,
  sizes,
  className,
  priority = false,
  quality = 75,
  loading,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      quality={quality}
      loading={loading}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      {...rest}
    />
  )
}
