import './globals.css'
import type { Metadata } from 'next'
import { Gelasio, Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter'
})

const gelasio = Gelasio({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-gelasio'
})

export const metadata: Metadata = {
  title: 'Treno',
  description:
    'Treno is a platform where readers in the technological area share topics for the community.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${gelasio.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
