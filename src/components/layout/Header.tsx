'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Camera, Database, BarChart3, User, LogIn } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Scan Cards', href: '/scan', icon: Camera },
    { name: 'Collection', href: '/collection', icon: Database },
    { name: 'Marketplace', href: '/marketplace', icon: BarChart3 },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                CardScan Pro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2 rounded-md hover:bg-gray-50"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <LogIn className="h-5 w-5" />
            </Link>
            <Link
              href="/account"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-gray-500" />
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
          <div className="border-t border-gray-200 pt-2">
            <Link
              href="/login"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <LogIn className="h-5 w-5 text-gray-500" />
                <span>Sign In</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
