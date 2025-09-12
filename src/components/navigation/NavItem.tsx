'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { NavigationItem } from './types'

interface NavItemProps extends Omit<NavigationItem, 'icon'> {
  icon: React.ComponentType<{ className?: string }>
  isCollapsed: boolean
}

export function NavItem({ 
  name, 
  href, 
  icon: Icon, 
  badge, 
  isCollapsed, 
  onClick 
}: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group',
        'justify-between lg:justify-center lg:group-hover:justify-between',
        isActive
          ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
          : 'text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/30'
      )}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      <div className="flex items-center space-x-3">
        <Icon className="h-5 w-5" />
        <span className={cn("block lg:hidden lg:group-hover:inline-block", {
          'sr-only': isCollapsed && !isActive
        })}>
          {name}
        </span>
      </div>
      {badge && (
        <Badge 
          className={cn(
            "text-xs block lg:hidden lg:group-hover:inline-flex",
            isActive ? "badge-neon" : "badge-cyber"
          )}
          aria-hidden={isCollapsed && !isActive}
        >
          {badge}
        </Badge>
      )}
      {!isActive && (
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <div className="scan-line w-full h-full" />
        </div>
      )}
    </Link>
  )
}
