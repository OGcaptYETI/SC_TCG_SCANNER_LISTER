'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAVIGATION_SECTIONS } from './config'
import { NavSection } from './NavSection'
import { ProfileSection } from './ProfileSection'

interface SidebarProps {
  isOpen: boolean
  onNavItemClick?: () => void
}

export function Sidebar({ isOpen, onNavItemClick }: SidebarProps) {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const isCollapsed = !isOpen && !isHovered

  return (
    <aside 
      className={cn(
        'fixed top-16 bottom-0 left-0 z-[60] w-64 transition-all duration-300 ease-in-out',
        'lg:w-16 lg:hover:w-64',
        'glass-panel border-r border-secondary-700',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Main navigation"
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-4 py-6 space-y-6">
          {NAVIGATION_SECTIONS.map((section, index) => (
            <div key={index} className="space-y-2">
              <NavSection 
                {...section} 
                isCollapsed={isCollapsed}
                onNavItemClick={onNavItemClick}
              />
              {index < NAVIGATION_SECTIONS.length - 1 && (
                <div className="relative my-4">
                  <div className="border-t border-secondary-700" />
                  <div className="absolute inset-0 border-t border-primary-400/20" />
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <ProfileSection 
          isCollapsed={isCollapsed}
          onNavItemClick={onNavItemClick}
        />
      </div>
    </aside>
  )
}
