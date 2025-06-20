'use client'

import Title from '@/app/components/Title'
import { FileText } from 'lucide-react'
import { CheckCircle2, ChevronRight, Code2, Folder } from 'lucide-react'
import { useState } from 'react'
import ProjectDetails from './project-details'
import { projects } from './projects-data'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string>('')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  const totalLines = projects.reduce((acc, project) => {
    const lines = Number.parseInt(project.commits.replace(',', ''), 10)
    return acc + (Number.isNaN(lines) ? 0 : lines)
  }, 0)

  const currentYear = new Date().getFullYear()

  return (
    <>
      <Title
        align="center"
        title="Projects"
        subtitle="Alguns dos meus projetos mais recentes, desenvolvidos com as tecnologias mais modernas do mercado."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 space-y-1">
          <div
            className="flex items-center gap-4 px-4 py-3 text-xs font-medium text-gray-300 
          uppercase tracking-wider border-b border-gray-400 mb-4"
          >
            <div className="w-8" />
            <div className="flex-1">Nome</div>
            <div className="w-20 text-center">Status</div>
            <div className="w-16 text-center">Ano</div>
            <div className="w-8" />
          </div>

          {projects.map(project => (
            <div
              key={project.id}
              className={`group flex items-center gap-4 px-4 py-5 mb-2 rounded-lg cursor-pointer 
                transition-all duration-300 ${
                  selectedProject === project.id
                    ? 'bg-blue/10 border-l-2 border-blue'
                    : hoveredProject === project.id
                      ? 'bg-gray-800/50'
                      : 'hover:bg-gray-800/30'
                }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? '' : project.id
                )
              }
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedProject(
                    selectedProject === project.id ? '' : project.id
                  )
                }
              }}
            >
              <div className="w-8 flex justify-center">
                <Folder size={16} className="text-blue" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-Space_Grotesk text-sm text-gray-400">
                    {project.id}
                  </span>

                  <span className="font-medium text-gray-200 truncate">
                    {project.title}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-1 text-xs text-gray-300">
                  <span>{project.fileSize}</span>
                  <span>•</span>
                  <span>{project.commits} commits</span>
                  <span>•</span>

                  <div className="flex items-center gap-1">
                    <Code2 size={10} />
                    <span>{project.technologies.length} techs</span>
                  </div>
                </div>
              </div>

              <div className="w-20 flex justify-center">
                <div className="flex items-center gap-1 px-2 py-1 bg-blue/20 text-blue text-xs rounded-full">
                  <CheckCircle2 size={16} />
                  <span className="hidden sm:inline">OK</span>
                </div>
              </div>

              <div className="w-16 text-center text-sm text-gray-400 font-Space_Grotesk">
                {project.year}
              </div>

              <div className="w-8 flex justify-center">
                <ChevronRight
                  size={16}
                  className={`text-gray-300 transition-transform duration-200 ${
                    selectedProject === project.id ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </div>
          ))}

          <div className="mt-6 px-4 py-3 bg-gray-600 rounded-lg">
            <div className="flex items-center justify-between text-xs text-gray-300">
              <span>{projects.length} projetos</span>
              <span>•</span>
              <span>{totalLines.toLocaleString()} Commits total</span>
              <span>•</span>
              <span>Última atualização: {currentYear}</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          {selectedProjectData ? (
            <ProjectDetails project={selectedProjectData} />
          ) : (
            <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-300">
                <FileText size={32} className="mx-auto mb-2" />

                <p className="text-sm">
                  Selecione um projeto para ver os detalhes
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
