"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Input,
  Label,
  Textarea,
} from "@/components/ui"
import { Plus, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface Products {
  title: string,
  description: string,
  price: number,
  stock: number,
  imageUrl: string
}

export default function ProductsPage() {
  const [formData, setFormData] = useState<Products>({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Lógica para cargar productos (deja este espacio para tu fetch de Supabase)
  useEffect(() => {},[])
      // Lógica de Supabase para obtener productos
      // Ejemplo:
      // const { data, error } = await supabase.from('products').select('*');
      // if (error) {
      //   console.error('Error fetching products:', error);
      //   toast.error('Error al cargar productos');
      // } else {
      //   setProducts(data as Product[]);
      // }

      // Simulación de datos mientras integras Supabase
       // Ejecutar solo una vez al montar el componente

    // Lógica de Supabase para crear el producto
    // Ejemplo:
    // const { data, error } = await supabase.from('products').insert([newProductData]).select();
    // if (error) {
    //   console.error('Error creating product:', error);
    //   toast.error('Error al crear el producto');
    // } else {
    //   setProducts((prevProducts) => [...prevProducts, data[0] as Product]); // Asume que data[0] es el nuevo producto
    //   toast.success('Producto creado', { description: 'El nuevo producto ha sido añadido al catálogo.' });
    //   setIsModalOpen(false);
    // }

    // Simulación de éxito
   

  // Lógica para eliminar un producto (puedes añadir un botón de eliminar en cada tarjeta)
    // Lógica de Supabase para eliminar el producto
    // Ejemplo:
    // const { error } = await supabase.from('products').delete().eq('id', productId);
    // if (error) {
    //   console.error('Error deleting product:', error);
    //   toast.error('Error al eliminar el producto');
    // } else {
    //   setProducts((prevProducts) => prevProducts.filter(p => p.id !== productId));
    //   toast.success('Producto eliminado', { description: 'El producto ha sido eliminado del catálogo.' });
    // }

    // Simulación de eliminación
    

  return (
    <div className="w-full max-w-none space-y-6 p-4 md:p-6">
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Gestión de Productos</h2>
          <p className="text-muted-foreground">Explora y administra tu catálogo de productos.</p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Añadir Nuevo Producto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Producto</DialogTitle>
              <DialogDescription>Rellena los campos para añadir un nuevo producto al catálogo.</DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre del Producto</Label>
                <Input id="name" name="name" placeholder="Camiseta de Algodón" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Una descripción detallada del producto..."
                  rows={3}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Precio</Label>
                  <Input id="price" name="price" type="number" step="0.01" placeholder="99.99" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input id="stock" name="stock" type="number" placeholder="100" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">URL de la Imagen</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  placeholder="/placeholder.svg?height=300&width=300"
                  required
                />
              </div>
              //  disabled={isLoading}
              <Button type="submit" className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Guardar Producto
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Galería de Productos */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card  className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48 bg-muted flex items-center justify-center">
              //image
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-lg line-clamp-2">{}</CardTitle>
              <CardDescription className="text-sm font-semibold text-primary">
                ${}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex flex-col gap-2">
              <Button className="w-full">
                //Link
                Ver Detalles
              </Button>
              {/* Puedes añadir un botón de eliminar aquí */}
              {/* <Button variant="destructive" className="w-full" onClick={() => handleDeleteProduct(product.id)}>
                Eliminar
              </Button> */}
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
