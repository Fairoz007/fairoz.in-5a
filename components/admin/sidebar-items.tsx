import { LayoutDashboard, FileText, Briefcase, MessageSquare, Settings, Users, ImageIcon } from "lucide-react"

export const navigationItems = [
  {
    title: "General",
    items: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
      { name: "Blog Posts", href: "/admin/blog", icon: FileText },
      { name: "Projects", href: "/admin/projects", icon: Briefcase },
      { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "Media Library", href: "/admin/gallery", icon: ImageIcon },
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
]
