import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { SiStorybook } from 'react-icons/si'

export default function SocialMedia() {
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
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mt-4 mb-16 lg:mb-24">
      <h1 className="text-2xl font-bold mb-4 lg:mb-0">CarlosOliveira</h1>
      <div className="flex items-center gap-4 lg:gap-6">
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
  )
}
