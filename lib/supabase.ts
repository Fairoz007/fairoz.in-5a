import { createClient } from "@supabase/supabase-js"

// Make sure these environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Add error handling for missing environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "")

// Helper types for Supabase tables
export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  category: string
  tags: string[]
  published: boolean
  created_at: string
  updated_at: string
  author_id: string
}

export type GalleryImage = {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  alt_text: string
  created_at: string
  updated_at: string
}

export type Profile = {
  id: string
  username: string
  full_name: string
  avatar_url: string
  website: string
  is_admin: boolean
}
