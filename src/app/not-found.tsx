import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen text-gray-100 flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>

        <h2 className="text-3xl font-semibold mb-4">
          Opa! Página não encontrada.
        </h2>

        <p className="text-gray-300 mb-8">
          A página que você está procurando pode ter sido removida, renomeada ou
          está temporariamente indisponível.
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}
