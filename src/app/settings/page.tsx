'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { GeneralSettings } from '@/components/settings/GeneralSettings'
import { IntegrationsSettings } from '@/components/settings/IntegrationsSettings'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'integrations'>('general')

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Settings" 
        description="Manage your preferences, appearance, and marketplace integrations."
      >
        <div className="glass-panel rounded-lg p-1">
          <div className="inline-flex items-center rounded-md overflow-hidden border border-secondary-700">
            <Button 
              variant={activeTab === 'general' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('general')}
              className="rounded-none"
            >
              General
            </Button>
            <Button 
              variant={activeTab === 'integrations' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('integrations')}
              className="rounded-none border-l border-secondary-700"
            >
              Integrations
            </Button>
          </div>
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {activeTab === 'general' ? (
          <GeneralSettings />
        ) : (
          <IntegrationsSettings />
        )}
      </div>
    </div>
  )
}
