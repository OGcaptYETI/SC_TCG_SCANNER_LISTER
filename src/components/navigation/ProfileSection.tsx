'use client'

import Link from 'next/link'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProfileSectionProps {
  isCollapsed: boolean
  onNavItemClick?: () => void
}

export function ProfileSection({ isCollapsed, onNavItemClick }: ProfileSectionProps) {
  return (
    <div className="mt-auto px-4 pb-4 pt-2 border-t border-secondary-700">
      <Link
        href="/profile"
        className={cn(
          "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 group",
          "lg:justify-center lg:group-hover:justify-start text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/30"
        )}
        onClick={onNavItemClick}
        aria-label="User Profile"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-secondary-700 to-secondary-600 rounded-full flex items-center justify-center border border-primary-400/20 mr-3">
          <User className="h-4 w-4 text-primary-400" />
        </div>
        <span className={cn("block lg:hidden lg:group-hover:inline-block", {
          'sr-only': isCollapsed
        })}>
          Profile
        </span>
      </Link>
    </div>
  )
}
