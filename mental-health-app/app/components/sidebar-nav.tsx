'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, FileQuestion, ClipboardList, UserCircle, MessageCircle, Video, BookOpen, GraduationCap } from 'lucide-react'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
  isPremium: boolean
}

export function SidebarNav({ className, items, isPremium, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      <ScrollArea className="h-[calc(100vh-4rem)]">
        {items.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "justify-start",
              !isPremium && item.href.includes('premium') && "opacity-50 pointer-events-none"
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
      </ScrollArea>
    </nav>
  )
}

export const sidebarNavItems = [
  {
    title: "Gráficas",
    href: "/dashboard",
    icon: <BarChart className="mr-2 h-4 w-4" />,
  },
  {
    title: "Nuevo Cuestionario",
    href: "/dashboard/questionnaire",
    icon: <FileQuestion className="mr-2 h-4 w-4" />,
  },
  {
    title: "Ver Resultados",
    href: "/dashboard/results",
    icon: <ClipboardList className="mr-2 h-4 w-4" />,
  },
  {
    title: "Perfil de Usuario",
    href: "/dashboard/profile",
    icon: <UserCircle className="mr-2 h-4 w-4" />,
  },
  {
    title: "Chat con Psicólogo",
    href: "/dashboard/chat",
    icon: <MessageCircle className="mr-2 h-4 w-4" />,
  },
  {
    title: "Videollamada",
    href: "/dashboard/video",
    icon: <Video className="mr-2 h-4 w-4" />,
  },
  {
    title: "Talleres",
    href: "/dashboard/workshops",
    icon: <GraduationCap className="mr-2 h-4 w-4" />,
  },
  {
    title: "Recursos",
    href: "/dashboard/resources",
    icon: <BookOpen className="mr-2 h-4 w-4" />,
  },
]

