'use client'

import { useLanguage } from '@/app/i18n/LanguageProvider'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

const socialLinks = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/carlos-oliveira-ab93941a1/',
    icon: <Linkedin className="w-[26px] h-[26px]" />,
    isExternal: true,
  },
  {
    id: 'github',
    href: 'https://github.com/carlossroliveira',
    icon: <Github className="w-[26px] h-[26px]" />,
    isExternal: true,
  },
] as const

const iconClass =
  'inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110'

export function SocialMedia() {
  const { t } = useLanguage()

  const socialLabels = {
    github: {
      title: t.social.githubTitle,
    },
    linkedin: {
      title: t.social.linkedinTitle,
    },
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mt-4 mb-16 lg:mb-24">
      <h1 className="text-2xl font-bold mb-4 lg:mb-0">CarlosOliveira</h1>
      <div className="flex items-center gap-4 lg:gap-6">
        {socialLinks.map(({ id, href, icon, isExternal }) => (
          <Link
            key={href}
            href={href}
            className={iconClass}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={socialLabels[id].title}
            title={socialLabels[id].title}
          >
            {icon}
          </Link>
        ))}

        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  )
}
