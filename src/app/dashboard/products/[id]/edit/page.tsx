"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, notFound } from "next/navigation"
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Textarea } from "@/components/ui"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { products } from "@/lib/data" // Importar los datos simulados

export default function EditProductPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const product = products.find((p) => p.id === params.id)

  const [name, setName] = useState(product?.name || "")
  const [description, setDescription] = useState(product?.description || "")
  const [price, setPrice] = useState(product?.price.toString() || "")
  const [stock, setStock] = useState(product?.stock.toString() || "")
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "")

  useEffect(() => {
    if (!product) {
      notFound()
    }
  }, [product])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Simular una llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Aquí iría la lógica para actualizar el producto (e.g., a Supabase)
    // const updatedProduct = {
    //   id: params.id,
    //   name,
    //   description,
    //   price: parseFloat(price),
    //   stock: parseInt(stock),
    //   imageUrl,
    // };
    // console.log("Producto actualizado:", updatedProduct);

    setIsLoading(false)
    toast("Producto actualizado", {
      description: `El producto "${name}" ha sido modificado correctamente.`,
    })
    router.push(`/dashboard/products/${params.id}`) // Redirigir a la página de detalles
  }

  if (!product) {
    return null // notFound() ya maneja esto, pero para evitar errores de TS
  }

  return (
    <div className="w-full max-w-none space-y-6 p-4 md:p-6">
      <h2 className="text-2xl font-bold">Editar Producto: {product.name}</h2>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Información del Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre del Producto</Label>
              <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Precio</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">URL de la Imagen</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Guardar Cambios
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
