'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`group relative p-3 bg-blue hover:bg-blue/80 rounded-full border 
        border-blue/50 transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-50 translate-y-2'
        }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:text-gray-100 transition-colors" />

      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue/20 to-purple/20 
      opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </button>
  )
}
