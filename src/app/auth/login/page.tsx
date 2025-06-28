"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";

interface FormLogin {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<FormLogin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormLogin, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      alert("Por favor, completa todos los campos.");
      return false;
    }
    if (formData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const {} = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-xl shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Iniciar sesión</h1>
          <p className="text-balance text-gray-300">
            Ingresa tu email y contraseña para acceder a tu cuenta
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              id="email"
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-white">
                Contraseña
              </Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline text-gray-300 hover:text-white transition"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              id="password"
              type="password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={isLoading}
            onClick={handleLogin}
          >
            {isLoading ? "Ingresando..." : "Iniciar sesión"}
          </Button>
        </div>
        <div className="mt-6 text-center text-gray-300 text-sm">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/auth/signup"
            className="underline hover:text-white"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </main>
  );
}
