import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-[1200px] mx-auto pt-8">
      <div>
        <p className="text-3xl font-poetsen">Carlos Oliveira</p>
      </div>

      <div className="flex gap-4">
        <Link
          target="_blank"
          href="https://github.com/carlossroliveira"
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={26} />
        </Link>

        <Link
          target="_blank"
          href="https://www.linkedin.com/in/carlos-oliveira-ab93941a1/"
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin size={26} />
        </Link>

        <span className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <IoLanguage size={26} />
        </span>
      </div>
    </div>
  )
}
