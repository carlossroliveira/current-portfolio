import { Calendar, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import type { Project } from './projects-data'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const colorCycle = [
    'bg-blue/20 text-blue border border-blue/30',
    'bg-emerald/20 text-emerald border border-emerald/30',
    'bg-amber/20 text-amber border border-amber/30',
    'bg-rose/20 text-rose border border-rose/30',
  ]

  return (
    <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
        <Image
          fill
          alt={project.title}
          src={project.image}
          className="w-full h-full opacity-90"
          objectFit="cover"
          objectPosition="top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

        <div
          className="absolute inset-0 bg-gray-900/70 opacity-0 hover:opacity-100 transition-opacity 
        duration-300 flex items-center justify-center gap-4"
        >
          {project.liveUrl && (
            <a
              target="_blank"
              href={project.liveUrl}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue hover:bg-blue/80 text-white 
              rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              Ver Projeto
            </a>
          )}

          {project.githubUrl && (
            <a
              target="_blank"
              href={project.githubUrl}
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>

            <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
              <Calendar size={14} />
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-400">Tecnologias</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className={`rounded-lg px-3 py-1 text-xs font-medium ${
                  colorCycle[index % colorCycle.length]
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          {project.liveUrl && (
            <a
              target="_blank"
              href={project.liveUrl}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue hover:text-blue/80 text-sm font-medium transition-colors"
            >
              <ExternalLink size={14} />
              Ver projeto ao vivo
            </a>
          )}

          {project.githubUrl && (
            <a
              target="_blank"
              href={project.githubUrl}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-300 text-sm 
              font-medium transition-colors"
            >
              <Github size={14} />
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
