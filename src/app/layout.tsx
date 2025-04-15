import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Mulish } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Este é o meu novo portfólio em Next.js',
}

const mulish = Mulish({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-mulish',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${mulish.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">{children}</body>
    </html>
  )
}
