import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function OrdersPage() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Pedidos</h2>
          <p className="text-muted-foreground">Administra y da seguimiento a todos los pedidos.</p>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filtrar Pedidos
        </Button>
      </div>

      {/* Barra de búsqueda - Ancho completo */}
      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar por número de pedido, cliente..." className="pl-10 w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas de pedidos - Ancho completo */}
      <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pedidos</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+19% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Requieren atención</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Proceso</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Siendo preparados</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,166</div>
            <p className="text-xs text-muted-foreground">94.5% del total</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de pedidos - Ancho completo */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Lista de Pedidos</CardTitle>
          <CardDescription>Todos los pedidos ordenados por fecha más reciente.</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <div className="w-full overflow-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Productos</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#EC9876</TableCell>
                  <TableCell>Alice Johnson</TableCell>
                  <TableCell>alice@example.com</TableCell>
                  <TableCell>2024-01-15</TableCell>
                  <TableCell>
                    <Badge variant="default">Enviado</Badge>
                  </TableCell>
                  <TableCell>3 productos</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#EC9875</TableCell>
                  <TableCell>Bob Williams</TableCell>
                  <TableCell>bob@example.com</TableCell>
                  <TableCell>2024-01-15</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pendiente</Badge>
                  </TableCell>
                  <TableCell>2 productos</TableCell>
                  <TableCell className="text-right">$299.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#EC9874</TableCell>
                  <TableCell>Charlie Brown</TableCell>
                  <TableCell>charlie@example.com</TableCell>
                  <TableCell>2024-01-14</TableCell>
                  <TableCell>
                    <Badge variant="outline">Entregado</Badge>
                  </TableCell>
                  <TableCell>1 producto</TableCell>
                  <TableCell className="text-right">$49.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#EC9873</TableCell>
                  <TableCell>Diana Prince</TableCell>
                  <TableCell>diana@example.com</TableCell>
                  <TableCell>2024-01-14</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Procesando</Badge>
                  </TableCell>
                  <TableCell>4 productos</TableCell>
                  <TableCell className="text-right">$75.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#EC9872</TableCell>
                  <TableCell>Eva Martinez</TableCell>
                  <TableCell>eva@example.com</TableCell>
                  <TableCell>2024-01-13</TableCell>
                  <TableCell>
                    <Badge variant="default">Enviado</Badge>
                  </TableCell>
                  <TableCell>2 productos</TableCell>
                  <TableCell className="text-right">$89.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#EC9871</TableCell>
                  <TableCell>Frank Wilson</TableCell>
                  <TableCell>frank@example.com</TableCell>
                  <TableCell>2024-01-13</TableCell>
                  <TableCell>
                    <Badge variant="outline">Entregado</Badge>
                  </TableCell>
                  <TableCell>1 producto</TableCell>
                  <TableCell className="text-right">$199.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#EC9870</TableCell>
                  <TableCell>Grace Lee</TableCell>
                  <TableCell>grace@example.com</TableCell>
                  <TableCell>2024-01-12</TableCell>
                  <TableCell>
                    <Badge variant="default">Enviado</Badge>
                  </TableCell>
                  <TableCell>3 productos</TableCell>
                  <TableCell className="text-right">$245.50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
