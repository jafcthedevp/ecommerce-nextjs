"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import AuthNavButtons from "@/components/ui-custom/authNavButtons";
export default function MainNav() {
  
  const { signOut } = useAuth();

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-3 bg-black text-white shadow">
        <Link href="/dashboard" className="font-bold text-xl tracking-tight">
          Acme Dashboard
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <AuthNavButtons signOut={signOut} />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Menú</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                <AuthNavButtons
                  signOut={signOut}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
