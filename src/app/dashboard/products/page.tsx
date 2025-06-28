'use client'

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button } from "@/components/ui"
import { Plus } from "lucide-react"
import { products } from "@/lib/data" // Importar los datos simulados

export default function ProductsPage() {
  return (
    <div className="w-full max-w-none space-y-6 p-4 md:p-6">
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Gestión de Productos</h2>
          <p className="text-muted-foreground">Explora y administra tu catálogo de productos.</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Link href="/dashboard/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Añadir Nuevo Producto
          </Link>
        </Button>
      </div>

      {/* Galería de Productos */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48 bg-muted flex items-center justify-center">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
              <CardDescription className="text-sm font-semibold text-primary">
                ${product.price.toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button className="w-full">
                <Link href={`/dashboard/products/${product.id}`}>Ver Detalles</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
