"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Textarea } from "@/components/ui"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

// Define el tipo de producto esperado de Supabase
type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageUrl: string
}

export default function EditProductPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      // Lógica de Supabase para obtener el producto por ID
      // Ejemplo:
      // const supabase = createClient();
      // const { data, error } = await supabase.from('products').select('*').eq('id', params.id).single();
      // if (error || !data) {
      //   console.error('Error fetching product for edit:', error);
      //   notFound();
      //   return;
      // }
      // setProduct(data as Product);
      // setName(data.name);
      // setDescription(data.description);
      // setPrice(data.price.toString());
      // setStock(data.stock.toString());
      // setImageUrl(data.imageUrl);

      // Simulación de datos mientras integras Supabase
      const simulatedProduct: Product = {
        id: params.id,
        name: "Producto de Ejemplo Editado",
        description: "Esta es una descripción de un producto de ejemplo que se puede editar.",
        price: 105.5,
        stock: 20,
        imageUrl: "/placeholder.svg?height=300&width=300",
      }
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simular carga
      setProduct(simulatedProduct)
      setName(simulatedProduct.name)
      setDescription(simulatedProduct.description)
      setPrice(simulatedProduct.price.toString())
      setStock(simulatedProduct.stock.toString())
      setImageUrl(simulatedProduct.imageUrl)
    }

    fetchProduct()
  }, [params.id]) // Dependencia del ID para recargar si cambia

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const updatedProductData = {
      name,
      description,
      price: Number.parseFloat(price),
      stock: Number.parseInt(stock),
      imageUrl,
    }

    // Lógica de Supabase para actualizar el producto
    // Ejemplo:
    // const supabase = createClient();
    // const { error } = await supabase.from('products').update(updatedProductData).eq('id', params.id);
    // if (error) {
    //   console.error('Error updating product:', error);
    //   toast.error('Error al actualizar el producto');
    // } else {
    //   toast.success('Producto actualizado', { description: `El producto "${name}" ha sido modificado correctamente.` });
    //   router.push(`/dashboard/products/${params.id}`);
    // }

    // Simulación de éxito
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast("Producto actualizado", {
      description: `El producto "${name}" ha sido modificado correctamente.`,
    })
    router.push(`/dashboard/products/${params.id}`) // Redirigir a la página de detalles

    setIsLoading(false)
  }

  if (!product) {
    // Puedes mostrar un skeleton o un mensaje de carga aquí
    return <div className="w-full max-w-none space-y-6 p-4 md:p-6 text-center">Cargando producto...</div>
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
