import Button from '@/app/components/Button'
import Image from 'next/image'
import Im from '../../../../public/assets/im.jpeg'
import SocialMedia from '../SocialMedia'

export default function WelcomeSection() {
  const image = Im

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col px-4 lg:px-4 py-4">
        <SocialMedia />

        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl lg:text-[46px] xl:text-[58px] font-bold mb-8 leading-tight">
            <span className="block">Nice to meet you!</span>{' '}
            <span className="block lg:inline">
              {' '}
              I'm{' '}
              <span className="border-b-4 border-b-blue whitespace-nowrap">
                Carlos Oliveira.
              </span>{' '}
            </span>
          </h2>

          <div className="lg:hidden flex justify-center mb-8 h-80">
            <Image
              src={image}
              alt="Minha imagem"
              className="rounded-lg object-cover"
            />
            x{' '}
          </div>

          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-lg leading-relaxed mx-auto lg:mx-0">
            Based in Salvador, Brazil. I'm a front-end developer passionate
            about crafting accessible and user-friendly web applications.
          </p>

          <div>
            <Button>contact me</Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex mx-auto justify-center items-start">
        <Image
          src={image}
          alt="Minha imagem"
          className="rounded object-cover"
        />
      </div>
    </div>
  )
}
