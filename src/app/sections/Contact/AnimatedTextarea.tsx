'use client'

import { useEffect, useState } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'

const AnimatedTextarea = () => {
  const [currentText, setCurrentText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [hasContent, setHasContent] = useState<boolean>(false)

  const messages: string[] = [
    'Tenho uma ideia incrível para desenvolver...',
    'Preciso de um site moderno para minha empresa...',
    'Quero criar uma aplicação web inovadora...',
    'Gostaria de discutir um projeto interessante...',
  ]

  useEffect(() => {
    if (isFocused || hasContent) return

    const currentMessage = messages[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentMessage.length) {
            setCurrentText(currentMessage.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex(prev => (prev + 1) % messages.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, isFocused, hasContent])

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    setHasContent(e.target.value.length > 0)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHasContent(e.target.value.length > 0)
  }

  return (
    <div className="relative group">
      <textarea
        rows={8}
        id="message"
        name="message"
        className="peer w-full bg-gray-900/50 border-2 border-gray-800/50 rounded-xl 
        text-white outline-none focus:outline-none focus:ring-0 focus:border-gray-800/50 
        focus:shadow-none transition-all duration-300 px-4 pt-4 resize-none min-h-[200px]"
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {!isFocused && !hasContent && (
        <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
          {currentText}
          <span className="animate-pulse">|</span>
        </div>
      )}
    </div>
  )
}

export default AnimatedTextarea
