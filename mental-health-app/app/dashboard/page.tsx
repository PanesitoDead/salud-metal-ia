'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarNav, sidebarNavItems } from '../components/sidebar-nav'
import ProgressDashboard from '../components/progress-dashboard'
import { Crown } from 'lucide-react'

export default function Dashboard() {
  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    setIsPremium(userType === 'premium')
  }, [])

  return (
    <div className="flex">
      <aside className="hidden md:flex md:w-64 md:flex-col">
        <SidebarNav items={sidebarNavItems} isPremium={isPremium} className="p-4" />
      </aside>
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard de Salud Mental</h1>
          {isPremium ? (
            <Badge variant="secondary" className="text-yellow-500">
              <Crown className="w-4 h-4 mr-1" />
              Premium
            </Badge>
          ) : (
            <Link href="/subscription">
              <Button variant="outline" className="text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white">
                <Crown className="w-4 h-4 mr-1" />
                Hazte Premium
              </Button>
            </Link>
          )}
        </div>

        <ProgressDashboard />
      </main>
    </div>
  )
}

