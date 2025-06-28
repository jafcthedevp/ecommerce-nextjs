export type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageUrl: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Camiseta Básica Blanca",
    description: "Una camiseta de algodón suave y cómoda, perfecta para el uso diario.",
    price: 29.99,
    stock: 45,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Jeans Clásicos Azul",
    description: "Jeans de corte recto, duraderos y versátiles para cualquier ocasión.",
    price: 79.99,
    stock: 23,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Zapatillas Deportivas",
    description: "Zapatillas ligeras y transpirables, ideales para correr o entrenar.",
    price: 129.99,
    stock: 8,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Chaqueta de Cuero",
    description: "Chaqueta de cuero genuino con un diseño clásico y atemporal.",
    price: 199.99,
    stock: 12,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Gorra Deportiva",
    description: "Gorra ajustable con visera curva, ideal para protegerte del sol.",
    price: 24.99,
    stock: 67,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Sudadera con Capucha",
    description: "Sudadera de felpa suave con capucha y bolsillo canguro.",
    price: 59.99,
    stock: 31,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    name: "Pantalones Deportivos",
    description: "Pantalones cómodos y elásticos, perfectos para el gimnasio o relajarse.",
    price: 45.99,
    stock: 28,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    name: "Reloj Deportivo",
    description: "Reloj resistente al agua con múltiples funciones para atletas.",
    price: 89.99,
    stock: 15,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
]
