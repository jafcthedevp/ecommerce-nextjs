'use client'

import type React from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Router } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const { session, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!session && !loading) {
      router.push('/auth/login')
    }
  }, [session, loading, router])

  return (
    <SidebarProvider>
      <div className="flex flex-1 w-full min-h-screen flex flex-col">
        <MainNav />
        <div className="flex flex-1">
          <Sidebar collapsible="icon">
            <DashboardSidebar />
          </Sidebar>
          <SidebarInset className="flex flex-col flex-1">
            <main className="flex-1 w-full p-4 md:p-6">
              {children}
            </main>
          </SidebarInset>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  )
}
