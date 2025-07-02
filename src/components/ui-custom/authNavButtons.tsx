import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

export default function AuthNavButtons({ signOut }: { signOut: () => void }) {
  return (
    <>
      <Button
        variant="outline"
        onClick={signOut}
        className="bg-black text-white"
      >
        Cerrar sesión
      </Button>
    </>
  );
}
