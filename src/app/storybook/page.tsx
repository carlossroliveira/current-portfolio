'use client'
import Link from 'next/link'
import { useState } from 'react'
import Divider from '../components/Divider'

export default function StorybookPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    'dividir'
  )

  const components = [{ id: 'dividir', name: 'Dividir' }]

  return (
    <div className="flex flex-col h-screen bg-gray-50 bg-purple">
      <header className="border-b border-gray-200 bg-white p-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-100">
            Meus Componentes Storybook
          </h1>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-gray-200 bg-white overflow-y-auto">
          <nav className="p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Componentes
            </h2>

            <ul className="space-y-1">
              {components.map(component => (
                <li key={component.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedComponent(component.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      selectedComponent === component.id
                        ? 'bg-purple-100 text-purple-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
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

        <main className="flex-1 overflow-y-auto p-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 min-h-[500px]">
              <h2 className="text-xl font-semibold mb-4">
                Conteúdo{' '}
                {selectedComponent &&
                  selectedComponent.charAt(0).toUpperCase() +
                    selectedComponent.slice(1)}
              </h2>

              <Divider className="mt-10" />
            </div>
          </div>

          <div className="absolute bottom-6 right-6">
            <Link
              href="/"
              className="px-6 py-3 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            >
              Voltar para Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
