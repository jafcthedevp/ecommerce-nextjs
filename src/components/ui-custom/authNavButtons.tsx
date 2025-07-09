import { Button } from "@/components/ui/button";

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
