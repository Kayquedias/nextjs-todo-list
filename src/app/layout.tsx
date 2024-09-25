import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'

import globals from './global.module.scss'
import './global.css'

import { NavBar } from '@/components/NavBar'
import { Divider } from '@/components/Divider'

export const metadata: Metadata = {
  title: `Marcus' todo list`,
  description: 'Todo list owned by Marcus user',
}

const tightInter = Inter_Tight({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${tightInter.className} ${globals.html}`}>
      <body className={globals.bodyStyles}>
        <NavBar />

        <Divider />

        {children}
      </body>
    </html>
  )
}
