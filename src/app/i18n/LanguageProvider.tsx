'use client'

import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { translations } from './translations'
import type { Language } from './types'

type Translation = (typeof translations)[Language]

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
  t: Translation
}

const storageKey = 'portfolio-language'

const LanguageContext = createContext<LanguageContextValue | null>(null)

const isLanguage = (value: string | null): value is Language =>
  value === 'pt' || value === 'en'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey)
    const initialLanguage = isLanguage(storedLanguage)
      ? storedLanguage
      : navigator.language.toLowerCase().startsWith('pt')
        ? 'pt'
        : 'en'

    setLanguageState(initialLanguage)
    document.documentElement.lang = initialLanguage === 'pt' ? 'pt-BR' : 'en'
  }, [])

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : 'en'
    window.localStorage.setItem(storageKey, nextLanguage)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }, [language, setLanguage])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage,
      t: translations[language],
    }),
    [language, toggleLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
