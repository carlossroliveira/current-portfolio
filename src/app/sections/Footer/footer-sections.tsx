import { Coffee, Github, Heart, MapPin } from 'lucide-react'

interface CopyrightInfoProps {
  currentYear: number
}

export function CopyrightInfo({ currentYear }: CopyrightInfoProps) {
  return (
    <div className="text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-2">
        <span className="text-xl">&copy;</span>

        <span className="font-medium text-lg lg:text-base">
          {currentYear} Carlos Oliveira
        </span>
      </div>

      <div
        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start 
      gap-4 text-sm text-gray-400"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue" />

          <span>Salvador, Brazil</span>
        </div>

        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-purple" />

          <span>Front-end Developer</span>
        </div>
      </div>
    </div>
  )
}

export function MadeWithLove() {
  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-base">
      <span>Feito com</span>

      <Heart className="w-4 h-4 text-danger animate-pulse" />
      <span>e muito café</span>
    </div>
  )
}

export function OpenSourceInfo() {
  return (
    <>
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <Github className="w-4 h-4 text-blue" />

        <span>Open Source</span>
        <span className="text-blue hidden lg:inline">•</span>
        <span className="hidden lg:inline">
          Este portfólio é de código aberto. Confira o projeto no GitHub.
        </span>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto lg:hidden">
        Este portfólio é de código aberto. Confira o projeto no GitHub.
      </p>
    </>
  )
}

export function VersionStatus() {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-400">
      <span>Versão 2.0</span>

      <div className="flex items-center gap-2">
        <div
          title="Online"
          className="w-2 h-2 rounded-full animate-pulse bg-emerald"
        />
        <span className="text-xs">Online</span>
      </div>
    </div>
  )
}
