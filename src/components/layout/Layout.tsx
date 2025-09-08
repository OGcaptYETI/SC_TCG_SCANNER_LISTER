'use client'

import Navigation from './Navigation'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content area with cyber spacing */}
      <div className="lg:pl-64">
        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8 relative">
            {/* Subtle grid overlay for cyber feel */}
            <div 
              className="fixed inset-0 pointer-events-none opacity-5 lg:left-64"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
            
            {/* Content with relative positioning */}
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}