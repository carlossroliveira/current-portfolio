'use client'

import { useLanguage } from '@/app/i18n/LanguageProvider'
import { Languages } from 'lucide-react'

const buttonClass =
  'inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110'

export function LanguageToggle() {
  const { t, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={buttonClass}
      aria-label={t.language.toggleLabel}
      title={t.language.toggleTitle}
    >
      <Languages className="w-[26px] h-[26px]" />
      <span className="text-xs font-bold leading-none">
        {t.language.current}
      </span>
    </button>
  )
}
