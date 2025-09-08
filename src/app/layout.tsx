import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0891b2', // Updated to cyber blue
}

export const metadata: Metadata = {
  title: 'CardScanner AI - Neural Card Recognition',
  description: 'Advanced AI-powered sports card recognition with cyber-enhanced technology',
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
        <meta name="theme-color" content="#0891b2" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Optional: Add futuristic fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}