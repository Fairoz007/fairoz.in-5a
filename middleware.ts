import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  // Only apply to admin routes
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If no session, redirect to the new login page
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // Check if user is admin
    const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", session.user.id).single()

    // If not admin, redirect to home
    if (!profile?.is_admin) {
      return NextResponse.redirect(new URL("/", req.url))
    }

    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
