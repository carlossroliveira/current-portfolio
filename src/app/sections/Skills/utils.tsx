import { Code2, Layers, Palette, TestTube, Zap } from 'lucide-react'
import type { Skill } from './types'

export const mainSkills: Skill[] = [
  {
    name: 'JavaScript',
    category: 'Linguagens',
    color: '#6f9de2',
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    name: 'TypeScript',
    category: 'Linguagens',
    color: '#6f9de2',
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    name: 'React.js',
    category: 'Frontend',
    color: '#9871f3',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    color: '#9871f3',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: '#6f9de2',
    icon: <Palette className="w-8 h-8" />,
  },
  {
    name: 'Jest',
    category: 'Testes',
    color: '#f05d6c',
    icon: <TestTube className="w-8 h-8" />,
  },
]

export const otherSkills: string[] = [
  'Redux',
  'Context API',
  'SASS',
  'Styled Components',
  'React Hook Form',
  'Zod',
  'Vitest',
  'React Testing Library',
  'Storybook',
  'Shadcn/ui',
  'lucide-react',
  'date-fns',
  'i18n',
  'Git',
  'Strapi',
]
