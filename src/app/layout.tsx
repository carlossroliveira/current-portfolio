import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'
import { LanguageProvider } from './i18n/LanguageProvider'

export const metadata: Metadata = {
  title: 'Portfólio | Portfolio',
  description: 'Portfólio bilíngue de Carlos Oliveira em Next.js',
}

const space_grotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-Space_Grotesk',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${space_grotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-gray-900 antialiased text-gray-100 max-w-[1240px] mx-auto sm:px-14">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
