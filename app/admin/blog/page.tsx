import Link from "next/link"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { format } from "date-fns"
import { Plus, Edit, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function AdminBlogPage() {
  const supabase = createServerComponentClient({ cookies })

  // Fetch blog posts
  const { data: posts } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Blog Posts</h1>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
          <CardDescription>Manage your blog posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-2 text-left font-medium">Title</th>
                  <th className="py-3 px-2 text-left font-medium hidden md:table-cell">Status</th>
                  <th className="py-3 px-2 text-left font-medium hidden md:table-cell">Date</th>
                  <th className="py-3 px-2 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <tr key={post.id} className="border-b">
                      <td className="py-3 px-2">
                        <div className="font-medium">{post.title}</div>
                        <div className="text-xs text-gray-500 md:hidden">
                          {post.published ? "Published" : "Draft"} • {format(new Date(post.created_at), "MMM d, yyyy")}
                        </div>
                      </td>
                      <td className="py-3 px-2 hidden md:table-cell">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.published
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="py-3 px-2 hidden md:table-cell">
                        {format(new Date(post.created_at), "MMM d, yyyy")}
                      </td>
                      <td className="py-3 px-2 text-right space-x-1">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/blog/${post.id}`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-gray-500">
                      No blog posts found. Create your first post!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
