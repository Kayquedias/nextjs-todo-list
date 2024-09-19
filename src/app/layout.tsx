import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'

import globals from './global.module.scss'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  // eslint-disable-next-line quotes
  title: `Marcus\' todo list`,
  description: 'Todo list owned by Marcus user',
}

const tightInter = Inter_Tight({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={tightInter.className}>
      <body className={globals.bodyStyles}>
          <NavBar />

        {children}
      </body>
    </html>
  )
}
