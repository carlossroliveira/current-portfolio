'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function StorybookPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    'dividir'
  )

  const components = [
    { id: 'dividir', name: 'Dividir' },
    { id: 'button', name: 'Button' },
  ]

  return (
    <div className="flex flex-col bg-gray-700 h-screen px-4">
      <header className="border-b border-gray-200 p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-gray-100">
          Mini-Storybook
        </h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-gray-200 overflow-y-auto">
          <nav className="p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Componentes
            </h2>

            <ul className="space-y-3">
              {components.map(component => (
                <li key={component.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedComponent(component.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      selectedComponent === component.id
                        ? 'px-6 py-3 bg-blue text-gray-500 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900'
                        : 'px-6 py-3 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900'
                    }`}
                  >
                    {component.name}
                    {selectedComponent === component.id && 'icone'}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-4 relative ">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 min-h-[500px]">
              conteúdo
            </div>
          </div>

          <div className="absolute bottom-12 right-10">
            <Link
              href="/"
              className="px-6 py-3 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            >
              Voltar
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
