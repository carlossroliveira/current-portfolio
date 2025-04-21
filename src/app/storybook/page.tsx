import Link from 'next/link'

export default function StorybookPage() {
  return (
    <div className="bg-gray-300">
      <h1 className="text-5xl">StorybookPage</h1>

      <Link
        href="/"
        className="px-6 py-3 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      >
        Voltar para Home
      </Link>
    </div>
  )
}
