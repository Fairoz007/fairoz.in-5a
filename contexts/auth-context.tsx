"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { Session, User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  isAdmin: boolean
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    error: any | null
    data: any | null
  }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      setIsLoading(true)

      const {
        data: { session },
      } = await supabase.auth.getSession()
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        // Check if user is admin
        const { data } = await supabase.from("profiles").select("is_admin").eq("id", session.user.id).single()

        setIsAdmin(data?.is_admin || false)
      }

      setIsLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        // Check if user is admin
        const { data } = await supabase.from("profiles").select("is_admin").eq("id", session.user.id).single()

        setIsAdmin(data?.is_admin || false)
      } else {
        setIsAdmin(false)
      }

      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Update the signIn method to handle errors better and provide more feedback
  const signIn = async (email: string, password: string) => {
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (response.error) {
        console.error("Sign in error:", response.error.message)
        return { error: response.error, data: null }
      }

      if (response.data.user) {
        // Check if user is admin after successful login
        const { data } = await supabase.from("profiles").select("is_admin").eq("id", response.data.user.id).single()

        setIsAdmin(data?.is_admin || false)

        // If not admin, prepare to handle this in the UI
        if (!data?.is_admin) {
          return {
            error: { message: "You do not have admin privileges" },
            data: null,
          }
        }
      }

      return { error: null, data: response.data }
    } catch (err) {
      console.error("Unexpected error during sign in:", err)
      return {
        error: { message: "An unexpected error occurred" },
        data: null,
      }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const value = {
    user,
    session,
    isLoading,
    isAdmin,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
