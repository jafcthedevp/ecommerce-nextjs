'use client';

import { useSelectedLayoutSegment } from "next/navigation";
import type React from "react";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import DashboardNav from "@/components/dashboard-nav"; // Importa la nueva navegación del dashboard

export default function DashboardLayout({
  overview, // Slot para el resumen
  products, // Slot para productos
  orders, // Slot para pedidos
}: {
  overview: React.ReactNode;
  products: React.ReactNode;
  orders: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 p-4 md:p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <DashboardNav /> {/* Añade la navegación secundaria aquí */}
        {/* Renderiza los slots basados en la URL */}
        {segment === "overview" && overview}
        {segment === "products" && products}
        {segment === "orders" && orders}
      </main>
      <Footer />
    </div>
  );
}
