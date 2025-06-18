import Title from '@/app/components/Title'
import { mainSkills, otherSkills } from './utils'

export default function Skills() {
  return (
    <section className="pt-12 max-w-6xl mx-auto">
      <Title
        align="center"
        title="Skills"
        subtitle="Principais tecnologias que utilizo no desenvolvimento"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12">
        {mainSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center p-6 rounded-xl 
            bg-gray-800/40 backdrop-blur-sm border border-gray-600 transition-all 
            duration-300 hover:border-gray-100/20 hover:bg-gray-800 hover:translate-y-[-8px] 
            hover:shadow-lg"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div
              className="mb-4 p-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: `${skill.color}20`,
                color: skill.color,
              }}
            >
              {skill.icon}
            </div>

            <h3 className="text-gray-100 font-medium text-center text-sm leading-tight">
              {skill.name}
            </h3>

            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
              duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}10, transparent 70%)`,
              }}
            />

            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-b-full transition-all 
              duration-300 group-hover:w-12"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-gray-300 text-lg font-medium mb-6">
          Também trabalho com
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {otherSkills.map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-500 
              transition-all duration-300 hover:border-b-blue hover:text-gray-100 hover:bg-gray-500"
              style={{
                animationDelay: `${(index + mainSkills.length) * 30}ms`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-6 italic">
          E outras tecnologias conforme a necessidade do projeto
        </p>
      </div>
    </section>
  )
}
