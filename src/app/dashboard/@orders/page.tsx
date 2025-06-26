import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function OrdersPage() {
  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold">Gestión de Pedidos</h2>
      <Card>
        <CardHeader>
          <CardTitle>Pedidos Pendientes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Aquí se mostrarían los pedidos que requieren atención.</p>
          <Button className="mt-4">Ver Todos los Pedidos</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Historial de Pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Consulta el historial completo de tus pedidos.</p>
        </CardContent>
      </Card>
    </div>
  )
}
