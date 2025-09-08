import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export const metadata: Metadata = {
  title: 'CardScan Pro - Ultimate Sports Card Recognition',
  description: 'Advanced AI-powered sports card recognition and marketplace integration',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
