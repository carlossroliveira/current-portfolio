import Button from '@/app/components/Button'
import Divider from '@/app/components/Divider'
import Image from 'next/image'
import Im from '../../../assets/im.jpeg'

export default function Banner() {
  const image = Im

  return (
    <div>
      <div
        className="flex justify-between items-center max-w-[880px] mx-auto pt-24 
        max-[990px]:pt-[54px] max-[990px]:text-center max-[990px]:justify-center max-[990px]:gap-8
        max-[915px]:flex max-[915px]:flex-col-reverse max-[915px]:pt-0"
      >
        <div>
          <h1 className="max-w-[656px] font-Space_Grotesk font-bold text-4xl md:text-5xl lg:text-6xl max-[420px]:text-2xl">
            Nice to meet you! <br /> I'm{' '}
            <span className="relative inline-block after:block after:h-[4px] after:bg-blue after:mt-1 after:w-full">
              Carlos Oliveira
            </span>
            .
          </h1>

          <p className="mt-12 max-w-[400px] font-Space_Grotesk">
            Based in Salvador, Brazil. I'm a front-end developer passionate
            about crafting accessible and user-friendly web applications.
          </p>

          <div className="mt-12">
            <Button>contact me</Button>
          </div>
        </div>

        <div>
          <Image
            src={image}
            alt="Minha imagem"
            className="rounded object-cover -mt-40 max-[915px]:h-[335px] max-[915px]:mt-4"
          />
        </div>
      </div>

      <Divider className="mt-10" />
    </div>
  )
}
