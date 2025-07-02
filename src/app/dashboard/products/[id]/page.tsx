import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Pencil } from "lucide-react"

// Define el tipo de producto esperado de Supabase
type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageUrl: string
}

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  // Lógica de Supabase para obtener un producto por ID
  // Ejemplo:
  // const supabase = createClient();
  // const { data: product, error } = await supabase.from('products').select('*').eq('id', params.id).single();
  // if (error || !product) {
  //   console.error('Error fetching product:', error);
  //   notFound();
  // }

  // Simulación de datos mientras integras Supabase
  const product: Product | null = {
    id: params.id,
    name: "Producto de Ejemplo",
    description: "Esta es una descripción de un producto de ejemplo cargado dinámicamente.",
    price: 99.99,
    stock: 10,
    imageUrl: "/placeholder.svg?height=600&width=600",
  }
  if (!product) {
    notFound()
  }

  return (
    <div className="w-full max-w-none space-y-6 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <Button asChild variant="outline">
          <Link href={`/dashboard/products/${product.id}/edit`}>
            <Pencil className="mr-2 h-4 w-4" />
            Editar Producto
          </Link>
        </Button>
      </div>

      <Card className="w-full">
        <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-96 bg-muted flex items-center justify-center rounded-md overflow-hidden">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                Stock Disponible: <span className="font-bold">{product.stock} unidades</span>
              </p>
              {product.stock > 0 ? (
                <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                  En Stock
                </Badge>
              ) : (
                <Badge variant="destructive">Agotado</Badge>
              )}
            </div>
            <Button size="lg" className="w-full" disabled={product.stock === 0}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Agregar al Carrito
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
