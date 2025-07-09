import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function DashboardLoading() {
  return (
    <div className="w-full max-w-none space-y-6 p-4 md:p-6">
      {/* Skeleton para el mensaje de bienvenida */}
      <div className="w-full space-y-2">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
      </div>

      {/* Skeleton para las tarjetas de resumen */}
      <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-7 w-1/2 mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skeleton para el grid de contenido principal */}
      <div className="w-full grid gap-6 grid-cols-1 xl:grid-cols-5">
        {/* Sección de Pedidos Recientes (ocupa 3 columnas en pantallas grandes) */}
        <Card className="w-full xl:col-span-3">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-1/3" />
            </CardTitle>
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent className="w-full">
            <div className="w-full overflow-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="w-[150px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="w-[120px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="w-[100px] text-right">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        <Skeleton className="h-4 w-2/3" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Skeleton className="h-4 w-1/2 ml-auto" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Panel lateral con acciones y actividad (ocupa 2 columnas) */}
        <div className="w-full xl:col-span-2 space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-1/2" />
              </CardTitle>
              <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent className="w-full space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-1/2" />
              </CardTitle>
              <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent className="w-full space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
