import { useCallback } from 'react'

export const useScrollTo = () => {
  const scrollTo = useCallback((id: string): void => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else {
      console.warn(`Element with id "${id}" not found.`)
    }
  }, [])

  return { scrollTo }
}
