
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <title>Crypto Finder Club</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
