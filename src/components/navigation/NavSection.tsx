'use client'

import { NavigationSection } from './types'
import { NavItem } from './NavItem'

interface NavSectionProps extends NavigationSection {
  isCollapsed: boolean
  onNavItemClick?: () => void
}

export function NavSection({ 
  items, 
  isCollapsed, 
  onNavItemClick 
}: NavSectionProps) {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <NavItem
          key={item.href}
          {...item}
          isCollapsed={isCollapsed}
          onClick={onNavItemClick}
        />
      ))}
    </div>
  )
}
