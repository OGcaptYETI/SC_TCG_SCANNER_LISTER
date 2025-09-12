'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface SettingsHeaderProps {
  title?: string
  description?: string
}

export function SettingsHeader({ title = 'Settings', description = 'Manage your preferences and integrations.' }: SettingsHeaderProps) {
  return (
    <PageHeader title={title} description={description}>
      <ThemeToggle />
    </PageHeader>
  )
}
