import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CardScan Pro - Ultimate Sports Card Recognition',
  description: 'Advanced AI-powered sports card recognition and marketplace integration',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
  icons: {
    icon: '/favicon.ico',
  },
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
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} CardScan Pro. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
