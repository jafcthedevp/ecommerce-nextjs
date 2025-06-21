"use client"

import Link from "next/link"
import { Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function MainNav() {
  // Simula el estado de autenticación. En una aplicación real, esto vendría de un contexto o hook de Supabase.
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Cambia a true para probar el botón de cerrar sesión

  const handleLogout = () => {
    // Lógica para cerrar sesión con Supabase
    console.log("Cerrar sesión")
    setIsAuthenticated(false)
  }

  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6 border-b">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Mountain className="h-6 w-6" />
        <span className="sr-only">Acme Store</span>
        <span className="text-lg">Acme Store</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        {isAuthenticated ? (
          <Button variant="outline" onClick={handleLogout} className="bg-black text-white">
            Cerrar sesión
          </Button>
        ) : (
          <>
            <Button variant="outline" asChild className="bg-black text-white">
              <Link href="/auth/login">Iniciar sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Registrarse</Link>
            </Button>
          </>
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Mountain className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 py-6">
            {isAuthenticated ? (
              <Button variant="outline" onClick={handleLogout} className="w-full bg-black text-white">
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild className="w-full bg-black text-white">
                  <Link href="/auth/login">Iniciar sesión</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/auth/signup">Registrarse</Link>
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
