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
      toast.warning("Por favor, completa todos los campos.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.warning("Las contraseñas no coinciden.");
      return;
    }
    if (formData.password.length < 6) {
      toast.warning("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        toast.error("Error al crear la cuenta", {
          description: error.message,
        });
      } else {
        toast.success("Cuenta creada exitosamente.", {
          description: "Tu cuenta ha sido creada correctamente.",
        });
      }
    } catch (error) {
        toast.error("Ocurrió un error al crear la cuenta.", {
          description: "Inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-xl shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Crear cuenta</h1>
          <p className="text-balance text-gray-300">
            Regístrate para administrar tu ecommerce con Acme Dashboard
          </p>
        </div>
        <form className="grid gap-4" onSubmit={handleRegister}>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="email@example.com"
              required
              className="focus:border-white focus:ring-white"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-white">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="*******"
              required
              className="focus:border-white focus:ring-white"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password" className="text-white">
              Confirmar contraseña
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="*******"
              required
              className="focus:border-white focus:ring-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Creando cuenta..." : "Crear cuenta"}
          </Button>
        </form>
        <div className="mt-6 text-center text-gray-300 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            className="underline hover:text-white"
          >
            Inicia sesión
          </Link>
        </div>
      </div>
      
    </main>
  );
}
