import type React from "react"
import MainNav from "@/components/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 p-4 md:p-6">
        {/* Aquí se renderizará el contenido de las páginas protegidas */}
        {children}
      </main>
    </div>
  )
}
