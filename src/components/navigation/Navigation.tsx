'use client'

import { useState, useCallback } from 'react'
import { MobileOverlay } from './MobileOverlay'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenu] = useState(false)

  const closeMobileMenu = useCallback(() => setIsMobileMenu(false), [])
  const toggleMobileMenu = useCallback(() => setIsMobileMenu(prev => !prev), [])

  return (
    <>
      <MobileOverlay 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
      
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        onMenuToggle={toggleMobileMenu} 
      />
      
      <Sidebar 
        isOpen={isMobileMenuOpen}
        onNavItemClick={closeMobileMenu}
      />
    </>
  )
}
