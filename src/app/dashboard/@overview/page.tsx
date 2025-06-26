import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold">Resumen General</h2>

      {/* Sección de Tarjetas de Resumen */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nuevos Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Activos</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productos en Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+5% desde la semana pasada</p>
          </CardContent>
        </Card>
      </div>

      {/* Sección de Pedidos Recientes */}
      <Card>
        <CardHeader>
          <CardTitle>Pedidos Recientes</CardTitle>
          <CardDescription>Aquí puedes ver tus últimos pedidos.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Monto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">#EC9876</TableCell>
                <TableCell>Alice Johnson</TableCell>
                <TableCell>Enviado</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#EC9875</TableCell>
                <TableCell>Bob Williams</TableCell>
                <TableCell>Pendiente</TableCell>
                <TableCell className="text-right">$299.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#EC9874</TableCell>
                <TableCell>Charlie Brown</TableCell>
                <TableCell>Entregado</TableCell>
                <TableCell className="text-right">$49.50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#EC9873</TableCell>
                <TableCell>Diana Prince</TableCell>
                <TableCell>Procesando</TableCell>
                <TableCell className="text-right">$75.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Sección de Acciones Rápidas (Ejemplo) */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
          <CardDescription>Realiza tareas comunes rápidamente.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="outline">Añadir Producto</Button>
          <Button variant="outline">Ver Todos los Pedidos</Button>
          <Button variant="outline">Gestionar Clientes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
