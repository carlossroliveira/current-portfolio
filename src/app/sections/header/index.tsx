import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { SiStorybook } from 'react-icons/si'

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-[880px] mx-auto pt-8">
      <div className="flex gap-44">
        <p className="text-2xl font-Space_Grotesk font-semibold">
          CarlosOliveira
        </p>

        <div className="flex gap-6 z-10">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/carlos-oliveira-ab93941a1/"
            className="cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110"
          >
            <FaLinkedin size={26} />
          </Link>

          <Link
            target="_blank"
            href="https://github.com/carlossroliveira"
            className="cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110"
          >
            <FaGithub size={26} />
          </Link>

          <Link
            href="/storybook"
            className="cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110"
          >
            <SiStorybook size={26} />
          </Link>

          <span className="cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110">
            <IoLanguage size={26} />
          </span>
        </div>
      </div>
    </div>
  )
}
