import Button from '@/app/components/Button'
import Image from 'next/image'
import Im from '../../../assets/im.jpeg'

export default function Banner() {
  const aaaa = Im

  return (
    <div>
      <div className="flex justify-between items-center max-w-[880px] mx-auto pt-24">
        <div className="z-10">
          <h1 className="max-w-[656px] text-5xl font-Space_Grotesk font-bold">
            Nice to meet you! <br /> I'm{' '}
            <span className="relative inline-block after:block after:h-[4px] after:bg-blue after:mt-1 after:w-full">
              Carlos Oliveira
            </span>
            .
          </h1>

          <p className="mt-12 w-[400px] font-Space_Grotesk">
            Based in Salvador, Brazil. I'm a front-end developer passionate
            about crafting accessible and user-friendly web applications.
          </p>

          <div className="mt-12">
            <Button>contact me</Button>
          </div>
        </div>

        <div>
          <Image
            src={aaaa}
            alt="Picture of the author"
            className="w-[350px] h-[555px] rounded absolute right-[124px] top-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
