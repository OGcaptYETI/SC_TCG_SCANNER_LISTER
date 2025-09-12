import { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  name: string
  href: string
  icon: LucideIcon
  badge?: string
  onClick?: () => void
}

export interface NavigationSection {
  items: NavigationItem[]
  isCollapsible?: boolean
}
