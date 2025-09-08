'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Home, 
  Camera, 
  FolderOpen, 
  ShoppingBag, 
  Settings, 
  User,
  Search,
  Bell,
  Cpu,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

const navigationItems: NavigationItem[] = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Neural Scanner', href: '/scanner', icon: Camera },
  { name: 'Collection', href: '/collection', icon: FolderOpen, badge: '1.2k' },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag, badge: 'New' },
]

const secondaryItems: NavigationItem[] = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Profile', href: '/profile', icon: User },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Header - Cyber Glass Design */}
      <header className="glass-panel sticky top-0 z-50 border-b border-secondary-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo and mobile menu button */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-2 text-primary-400 hover:text-primary-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              {/* Cyber Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Camera className="h-6 h-6 text-white z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 blur animate-pulse" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    CardScanner
                  </span>
                  <span className="text-xl font-bold text-foreground ml-1">AI</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                      isActive
                        ? "text-primary-400 bg-primary-400/10 border border-primary-400/20"
                        : "text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <Badge className="badge-cyber text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {/* Hover glow effect */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400/0 to-accent-400/0 group-hover:from-primary-400/5 group-hover:to-accent-400/5 transition-all duration-300" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search neural database..."
                  className="input-cyber w-full pl-10 pr-4 text-sm"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {/* Search button for mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-primary-400 hover:text-primary-300"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* AI Status Indicator */}
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-lg bg-green-400/10 border border-green-400/20">
                <Cpu className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">AI Online</span>
              </div>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                className="relative text-primary-400 hover:text-primary-300"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent-500 rounded-full animate-pulse"></span>
              </Button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Profile */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex text-primary-400 hover:text-primary-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-secondary-700 to-secondary-600 rounded-full flex items-center justify-center border border-primary-400/20">
                  <User className="h-4 w-4 text-primary-400" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar - Cyber Glass Design */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        "glass-panel border-r border-secondary-700",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile logo */}
          <div className="flex items-center h-16 px-6 border-b border-secondary-700 lg:hidden">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                CardScanner AI
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {/* Primary navigation */}
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                      isActive
                        ? "text-primary-400 bg-primary-400/10 border border-primary-400/20"
                        : "text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/30"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <Badge className={cn(
                        "text-xs",
                        isActive ? "badge-neon" : "badge-cyber"
                      )}>
                        {item.badge}
                      </Badge>
                    )}
                    {/* Scan line effect on hover */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="scan-line w-full h-full" />
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Divider with glow */}
            <div className="relative my-6">
              <div className="border-t border-secondary-700" />
              <div className="absolute inset-0 border-t border-primary-400/20" />
            </div>

            {/* Secondary navigation */}
            <div className="space-y-1">
              {secondaryItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 group",
                      isActive
                        ? "text-primary-400 bg-primary-400/10 border border-primary-400/20"
                        : "text-secondary-400 hover:text-secondary-200 hover:bg-secondary-800/30"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Bottom section - Neural upgrade prompt */}
          <div className="p-4 border-t border-secondary-700">
            <div className="card-premium p-4 text-center">
              <Zap className="h-8 w-8 text-accent-400 mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-foreground mb-1">
                Upgrade Neural Core
              </h4>
              <p className="text-xs text-secondary-400 mb-3">
                Unlock quantum scanning and predictive analytics
              </p>
              <Button className="btn-neon-purple w-full text-xs py-2">
                Enhance AI
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}