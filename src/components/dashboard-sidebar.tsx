"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, ShoppingCart } from "lucide-react"
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

export default function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Inicio",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Resumen",
      href: "/dashboard/overview",
      icon: Home,
    },
    {
      name: "Productos",
      href: "/dashboard/products",
      icon: Package,
    },
    {
      name: "Pedidos",
      href: "/dashboard/orders",
      icon: ShoppingCart,
    },
  ]

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-lg">
          <Home className="h-6 w-6" />
          <span>Acme Dashboard</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#">
                <Home className="h-4 w-4" />
                <span>Ajustes</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
