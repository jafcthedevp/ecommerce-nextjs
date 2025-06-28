import type React from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-1 w-full min-h-screen flex flex-col">
        <MainNav/>
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
