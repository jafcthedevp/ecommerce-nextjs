'use client'

import Image from "next/image"
import Link from "next/link"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase/client"

type FormEvent = {
    email: string;
    password: string;
    confirmPassword: string;
}


export default function SignupPage(FormEvent: FormEvent) {

    const handleSignup = async (e: any) => {
        e.preventDefault()
        try {
            const {} = supabase.auth.signUp({
                email: FormEvent.email,
                password: FormEvent.password,
            })

            if (FormEvent.password !== FormEvent.confirmPassword) {
                alert("Las contraseñas no coinciden")
                return
            }
            if (FormEvent.password.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres")
                return
            }
        } catch (error) {
            console.error("Error al registrarse:", error)
            alert("Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.")
        }
        
    }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Regístrate</h1>
            <p className="text-balance text-muted-foreground">Crea tu cuenta para empezar a comprar</p>
          </div>
          <div className="grid gap-4" >
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full" onClick={handleSignup}>
              Crear cuenta
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="underline">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Imagen de fondo"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}