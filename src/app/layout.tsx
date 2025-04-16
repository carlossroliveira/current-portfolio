import './globals.css'
import type { Metadata } from 'next'
import { Mulish, Poetsen_One } from 'next/font/google'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Este é o meu novo portfólio em Next.js',
}

const mulish = Mulish({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-mulish',
})

const poetsen = Poetsen_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poetsen',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${mulish.variable} ${poetsen.variable}`}>
      <body className="bg-gray-900 antialiased text-gray-100 max-w-[1440px] mx-auto">
        {children}
      </body>
    </html>
  )
}
