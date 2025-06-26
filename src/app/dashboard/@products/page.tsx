import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold">Gestión de Productos</h2>
      <Card>
        <CardHeader>
          <CardTitle>Listado de Productos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Aquí iría la tabla o lista de tus productos.</p>
          <Button className="mt-4">Añadir Nuevo Producto</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Categorías</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Gestiona las categorías de tus productos aquí.</p>
        </CardContent>
      </Card>
    </div>
  )
}
