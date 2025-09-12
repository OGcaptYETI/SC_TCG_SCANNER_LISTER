import { Home, Camera, FolderOpen, ShoppingBag, Settings } from 'lucide-react'
import { NavigationSection } from './types'

export const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    items: [
      { name: 'Dashboard', href: '/', icon: Home },
      { name: 'Neural Scanner', href: '/scanner', icon: Camera },
      { name: 'Collection', href: '/collection', icon: FolderOpen, badge: '1.2k' },
      { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag, badge: 'New' },
    ]
  },
  {
    items: [
      { name: 'Settings', href: '/settings', icon: Settings },
    ]
  }
]
