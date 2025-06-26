"use client"

import { redirect } from "next/navigation"

export default function DashboardPage() {
  // Redirige a la vista de resumen por defecto cuando se accede a /dashboard
  redirect("/dashboard/overview")
  return null // No renderiza nada si redirige

}
