
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Crypto Finder Club</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
