'use client'

import { useLanguage } from '@/app/i18n/LanguageProvider'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const storageKey = 'portfolio-theme'

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme
}

export function ThemeToggle() {
  const { t } = useLanguage()
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey)
    const initialTheme =
      storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'

    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(nextTheme)
    applyTheme(nextTheme)
    window.localStorage.setItem(storageKey, nextTheme)
  }

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="cursor-pointer transition-transform duration-300 hover:text-blue hover:scale-110"
      aria-label={isLight ? t.theme.darkLabel : t.theme.lightLabel}
      title={isLight ? t.theme.darkLabel : t.theme.lightLabel}
    >
      {isLight ? (
        <Moon className="w-[26px] h-[26px]" />
      ) : (
        <Sun className="w-[26px] h-[26px]" />
      )}
    </button>
  )
}
