"use client";

import Image from "next/image";
import Link from "next/link";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupPage() {
  const [formData, setFormData] = useState<SignupForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof SignupForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast("Por favor, completa todos los campos.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast("Las contraseñas no coinciden.");
      return;
    }
    if (formData.password.length < 6) {
      toast("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        toast("Error al crear la cuenta", {
          description: error.message
        });
      } else {
        toast("Cuenta creada exitosamente.", {
          description: "Tu cuenta ha sido creada correctamente."
        });
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      toast("Ocurrió un error al crear la cuenta.", {
        description: "Inténtalo de nuevo más tarde."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Regístrate</h1>
            <p className="text-balance text-muted-foreground">
              Crea tu cuenta para empezar a comprar
            </p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="*******"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input
                id="confirm-password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                placeholder="*******"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
              onClick={handleRegister}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Crear cuenta
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="underline">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 bg-muted">
        <Image
          src="/ecommermilochenta.png?height=1080&width=1920"
          alt="Imagen de fondo"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
