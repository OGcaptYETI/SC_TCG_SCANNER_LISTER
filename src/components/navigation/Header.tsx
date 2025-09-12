'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Camera, Search, Bell } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface HeaderProps {
  isMobileMenuOpen: boolean
  onMenuToggle: () => void
}

export function Header({ isMobileMenuOpen, onMenuToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="fixed top-0 left-0 right-0 z-[90] border-b border-secondary-800 bg-secondary-900 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden mr-2 text-primary-400 hover:text-primary-300"
              onClick={onMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Logo />
          </div>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <div className="flex items-center space-x-2">
            <MobileSearchButton />
            <NotificationsButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group" aria-label="Home">
      <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center relative overflow-hidden">
        <Camera className="h-6 w-6 text-white z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 blur animate-pulse" />
      </div>
      <div className="hidden sm:block">
        <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
          CardScanner
        </span>
        <span className="text-xl font-bold text-foreground ml-1">AI</span>
      </div>
    </Link>
  )
}

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" aria-hidden="true" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search neural database..."
          className="w-full pl-10 pr-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-lg text-sm text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          aria-label="Search"
        />
      </div>
    </div>
  )
}

function MobileSearchButton() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden text-primary-400 hover:text-primary-300"
      aria-label="Search"
    >
      <Search className="h-5 w-5" />
    </Button>
  )
}

function NotificationsButton() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative text-primary-400 hover:text-primary-300"
      aria-label="Notifications"
    >
      <Bell className="h-5 w-5" />
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent-500 rounded-full animate-pulse" aria-hidden="true"></span>
    </Button>
  )
}
