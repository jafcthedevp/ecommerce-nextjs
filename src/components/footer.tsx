export default function Footer() {
  return (
    <footer className="border-t py-6 px-4 md:px-6 text-center text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Acme Store. Todos los derechos reservados.</p>
    </footer>
  )
}