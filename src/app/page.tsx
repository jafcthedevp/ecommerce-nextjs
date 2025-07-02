import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-900 flex flex-col items-center justify-center p-0">
      {/* Barra superior opcional */}
      <header className="w-full flex items-center justify-between px-8 py-4 bg-black/80 shadow">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-white tracking-tight">
            Acme Dashboard
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/auth/login"
            className="px-5 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/auth/signup"
            className="px-5 py-2 rounded bg-black-900 text-white border border-white font-semibold hover:bg-gray-700 transition"
          >
            Registrarse
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <section className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow">
              Bienvenido a Acme Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              La plataforma integral para administrar tu ecommerce de manera
              eficiente y segura.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-3xl mb-2">📦</span>
              <h3 className="font-bold text-white mb-1">Gestión de productos</h3>
              <p className="text-gray-200 text-center text-sm">
                Añade, edita y organiza tu catálogo fácilmente.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-3xl mb-2">📊</span>
              <h3 className="font-bold text-white mb-1">
                Reportes en tiempo real
              </h3>
              <p className="text-gray-200 text-center text-sm">
                Visualiza ventas, pedidos y clientes con estadísticas claras.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-3xl mb-2">🔒</span>
              <h3 className="font-bold text-white mb-1">Seguridad avanzada</h3>
              <p className="text-gray-200 text-center text-sm">
                Tus datos y los de tus clientes siempre protegidos.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-3xl mb-2">🤝</span>
              <h3 className="font-bold text-white mb-1">Soporte dedicado</h3>
              <p className="text-gray-200 text-center text-sm">
                Nuestro equipo te acompaña en cada paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-400 text-sm bg-black/80">
        &copy; {new Date().getFullYear()} Acme Dashboard. Todos los derechos
        reservados.
      </footer>
    </main>
  );
}
