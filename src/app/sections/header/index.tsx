import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { SiStorybook } from 'react-icons/si'

export default function Header() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/carlos-oliveira-ab93941a1/',
      icon: <FaLinkedin size={26} />,
      isExternal: true,
    },
    {
      href: 'https://github.com/carlossroliveira',
      icon: <FaGithub size={26} />,
      isExternal: true,
    },
    {
      href: '/storybook',
      icon: <SiStorybook size={26} />,
      isExternal: false,
    },
  ]

  const iconClass =
    'cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110'

  return (
    <div className="flex justify-between items-center max-w-[880px] mx-auto pt-8">
      <div
        className="flex gap-48 max-[990px]:flex-col max-[990px]:gap-4 max-[990px]:ml-[155px]
      max-[915px]:flex max-[915px]:flex-col max-[915px]:gap-4 max-[915px]:mx-auto max-[915px]:text-center"
      >
        <p className="text-2xl font-Space_Grotesk font-semibold">
          CarlosOliveira
        </p>

        <div className="flex gap-6">
          {socialLinks.map(({ href, icon, isExternal }) => (
            <Link
              key={href}
              href={href}
              className={iconClass}
              target={isExternal ? '_blank' : undefined}
            >
              {icon}
            </Link>
          ))}

          <span className={iconClass}>
            <IoLanguage size={26} />
          </span>
        </div>
      </div>
    </div>
  )
}
