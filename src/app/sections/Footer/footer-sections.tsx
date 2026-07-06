'use client'

import { useLanguage } from '@/app/i18n/LanguageProvider'
import { Coffee, Github, Heart, MapPin } from 'lucide-react'

interface CopyrightInfoProps {
  currentYear: number
}

export function CopyrightInfo({ currentYear }: CopyrightInfoProps) {
  const { t } = useLanguage()

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

          <span>{t.footer.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-purple" />

          <span>{t.footer.role}</span>
        </div>
      </div>
    </div>
  )
}

export function MadeWithLove() {
  const { t } = useLanguage()

  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-base">
      <span>{t.footer.madeWith}</span>

      <Heart className="w-4 h-4 text-danger animate-pulse" />
      <span>{t.footer.coffee}</span>
    </div>
  )
}

export function OpenSourceInfo() {
  const { t } = useLanguage()

  return (
    <>
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <Github className="w-4 h-4 text-blue" />

        <span>Open Source</span>
        <span className="text-blue hidden lg:inline">•</span>
        <span className="hidden lg:inline">
          {t.footer.openSourceDescription}
        </span>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto lg:hidden">
        {t.footer.openSourceDescription}
      </p>
    </>
  )
}

export function VersionStatus() {
  const { t } = useLanguage()

  return (
    <div className="flex items-center gap-3 text-sm text-gray-400">
      <span>{t.footer.version}</span>

      <div className="flex items-center gap-2">
        <div
          title={t.footer.online}
          className="w-2 h-2 rounded-full animate-pulse bg-emerald"
        />
        <span className="text-xs">{t.footer.online}</span>
      </div>
    </div>
  )
}
