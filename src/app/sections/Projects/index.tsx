'use client'

import Title from '@/app/components/Title'
import { FileText } from 'lucide-react'
import { CheckCircle2, ChevronRight, Code2, Folder } from 'lucide-react'
import { useState } from 'react'
import ProjectDetails from './project-details'
import { projects } from './projects-data'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string>('')

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
        subtitle="Alguns dos meus projetos mais recentes, desenvolvidos com as tecnologias 
        mais modernas do mercado."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 space-y-1">
          <div
            className="hidden sm:flex items-center gap-4 px-4 py-3 text-xs font-medium text-gray-300 
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
              className={`group cursor-pointer mb-2 rounded-lg transition-all duration-300 ${
                selectedProject === project.id
                  ? 'bg-blue/10'
                  : 'hover:bg-gray-800/30'
              }`}
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
              <div className="sm:hidden p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Folder size={20} className="text-blue flex-shrink-0" />

                    <span className="font-medium text-base text-gray-200">
                      {project.title}
                    </span>
                  </div>

                  <ChevronRight
                    size={20}
                    className={`text-gray-300 transition-transform duration-200 ${
                      selectedProject === project.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                <div
                  className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm 
                text-gray-300 pt-3 border-t border-gray-700"
                >
                  <span className="font-medium">Ano: {project.year}</span>

                  <div className="flex items-center gap-1.5 text-blue">
                    <CheckCircle2 size={14} />
                    <span className="font-medium">OK</span>
                  </div>

                  <span className="col-span-2 text-gray-400">
                    {project.commits} commits
                  </span>

                  <div className="flex items-center gap-1.5 col-span-2 text-gray-400">
                    <Code2 size={14} />
                    <span>{project.technologies.length} techs</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 px-4 py-5">
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
                  <div
                    className="flex items-center gap-1 px-2 py-1 bg-blue/20 
                  text-blue text-xs rounded-full"
                  >
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
                    className={`text-gray-300 transition-transform duration-200 ${selectedProject === project.id ? 'rotate-90' : ''}`}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 rounded-lg bg-gray-600 px-4 py-3">
            <div
              className="flex flex-col items-center gap-1 text-xs text-gray-300 
            sm:flex-row sm:justify-between"
            >
              <span>{projects.length} projetos</span>
              <span className="hidden sm:inline">•</span>
              <span>{totalLines.toLocaleString()} Commits total</span>
              <span className="hidden sm:inline">•</span>
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
