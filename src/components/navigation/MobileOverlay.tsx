'use client'

interface MobileOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileOverlay({ isOpen, onClose }: MobileOverlayProps) {
  if (!isOpen) return null
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
      onClick={onClose}
      aria-hidden="true"
    />
  )
}
