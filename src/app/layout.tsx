import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Este é o meu novo portfólio em Next.js',
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
    <html lang="pt-BR" className={`${space_grotesk.variable}`}>
      <body className="bg-gray-900 antialiased text-gray-100 max-w-[1240px] mx-auto px-14">
        {children}
      </body>
    </html>
  )
}
