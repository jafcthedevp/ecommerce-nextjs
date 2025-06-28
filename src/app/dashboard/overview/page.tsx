import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold">Resumen General</h2>
        <p className="text-muted-foreground">Vista completa de las métricas de tu negocio.</p>
      </div>

      {/* Tarjetas de métricas - Ancho completo */}
      <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nuevos Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Activos</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card className="w-full">
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

      {/* Contenido principal en grid - Ancho completo */}
      <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-4">
        {/* Pedidos Recientes - ocupa 3 columnas */}
        <Card className="w-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Pedidos Recientes</CardTitle>
            <CardDescription>Los últimos pedidos realizados en tu tienda.</CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <div className="w-full overflow-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#EC9876</TableCell>
                    <TableCell>Alice Johnson</TableCell>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>Enviado</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#EC9875</TableCell>
                    <TableCell>Bob Williams</TableCell>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>Pendiente</TableCell>
                    <TableCell className="text-right">$299.99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#EC9874</TableCell>
                    <TableCell>Charlie Brown</TableCell>
                    <TableCell>2024-01-14</TableCell>
                    <TableCell>Entregado</TableCell>
                    <TableCell className="text-right">$49.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#EC9873</TableCell>
                    <TableCell>Diana Prince</TableCell>
                    <TableCell>2024-01-14</TableCell>
                    <TableCell>Procesando</TableCell>
                    <TableCell className="text-right">$75.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#EC9872</TableCell>
                    <TableCell>Eva Martinez</TableCell>
                    <TableCell>2024-01-13</TableCell>
                    <TableCell>Enviado</TableCell>
                    <TableCell className="text-right">$89.99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#EC9871</TableCell>
                    <TableCell>Frank Wilson</TableCell>
                    <TableCell>2024-01-13</TableCell>
                    <TableCell>Entregado</TableCell>
                    <TableCell className="text-right">$199.99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Panel lateral con estadísticas - ocupa 1 columna */}
        <div className="w-full space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>Tareas comunes del dashboard.</CardDescription>
            </CardHeader>
            <CardContent className="w-full space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Package className="mr-2 h-4 w-4" />
                Añadir Producto
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ver Todos los Pedidos
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Users className="mr-2 h-4 w-4" />
                Gestionar Clientes
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Productos Populares</CardTitle>
              <CardDescription>Los más vendidos esta semana.</CardDescription>
            </CardHeader>
            <CardContent className="w-full space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Camiseta Básica</span>
                <span className="text-sm font-medium">124 ventas</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Jeans Clásicos</span>
                <span className="text-sm font-medium">98 ventas</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Zapatillas Deportivas</span>
                <span className="text-sm font-medium">87 ventas</span>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Ventas del Mes</CardTitle>
              <CardDescription>Progreso hacia el objetivo.</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Objetivo: $50,000</span>
                  <span>90.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90.5%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground">$4,768 restantes para alcanzar el objetivo</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
