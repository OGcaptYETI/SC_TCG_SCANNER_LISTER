'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'badge',
  {
    variants: {
      variant: {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        success: 'badge-success',
        warning: 'badge-warning',
        error: 'badge-error',
        // Sports variants
        baseball: 'badge-baseball',
        basketball: 'badge-basketball',
        football: 'badge-football',
        soccer: 'badge-soccer',
        hockey: 'badge-hockey',
        // TCG variants
        pokemon: 'badge-pokemon',
        magic: 'badge-magic',
        lorcana: 'badge-lorcana',
        yugioh: 'badge-yugioh',
        // NEW: Cyber variants
        cyber: 'badge-cyber',
        neon: 'badge-neon',
        hologram: 'badge-hologram',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }