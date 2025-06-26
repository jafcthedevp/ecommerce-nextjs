"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function DashboardNav() {
  const segment = useSelectedLayoutSegment()

  const navItems = [
    {
      name: "Resumen",
      href: "/dashboard/overview",
      segment: "overview",
    },
    {
      name: "Productos",
      href: "/dashboard/products",
      segment: "products",
    },
    {
      name: "Pedidos",
      href: "/dashboard/orders",
      segment: "orders",
    },
  ]

  return (
    <nav className="flex space-x-4 border-b pb-4 mb-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            segment === item.segment ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
