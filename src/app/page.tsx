import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-8">
      <div className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-10 flex flex-col items-center max-w-xl w-full">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className="mb-6"
        />
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center drop-shadow">
          Bienvenido a Acme Dashboard
        </h1>
        <p className="mt-2 mb-6 text-lg text-gray-200 text-center">
          La plataforma integral para administrar tu ecommerce de manera eficiente y segura.
        </p>
        <div className="flex gap-4 mb-8">
          <Link
            href="/auth/login"
            className="px-6 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-2 rounded bg-gray-800 text-white border border-white font-semibold hover:bg-gray-700 transition"
          >
            Registrarse
          </Link>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">¿Por qué elegir Acme Dashboard?</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-black/40 rounded-lg p-4 text-gray-200">
              <span className="font-semibold text-white">📦 Gestión de productos:</span> Añade, edita y organiza tu catálogo fácilmente.
            </li>
            <li className="bg-black/40 rounded-lg p-4 text-gray-200">
              <span className="font-semibold text-white">📊 Reportes en tiempo real:</span> Visualiza ventas, pedidos y clientes con estadísticas claras.
            </li>
            <li className="bg-black/40 rounded-lg p-4 text-gray-200">
              <span className="font-semibold text-white">🔒 Seguridad avanzada:</span> Tus datos y los de tus clientes siempre protegidos.
            </li>
            <li className="bg-black/40 rounded-lg p-4 text-gray-200">
              <span className="font-semibold text-white">🤝 Soporte dedicado:</span> Nuestro equipo te acompaña en cada paso.
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Acme Dashboard. Todos los derechos reservados.
        </div>
      </div>
    </main>
  );
}
