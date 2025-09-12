'use client'

import { IntegrationCard } from './IntegrationCard'

export function IntegrationsSettings() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <IntegrationCard 
        name="eBay"
        description="Connect your eBay account to list and sync marketplace data."
        status="disconnected"
        connectHref="/api/integrations/ebay/authorize"
      />
      <IntegrationCard 
        name="TCGplayer"
        description="Import and manage TCG listings."
        status="disconnected"
      />
      <IntegrationCard 
        name="Whatnot"
        description="Connect your Whatnot seller account."
        status="disconnected"
      />
      <IntegrationCard 
        name="PWCC"
        description="Sync auctions and sales data from PWCC."
        status="disconnected"
      />
      <IntegrationCard 
        name="COMC"
        description="Manage your COMC inventory and sales."
        status="disconnected"
      />
      <IntegrationCard 
        name="Mercari"
        description="Connect to manage Mercari listings."
        status="disconnected"
      />
      <IntegrationCard 
        name="Custom Integration"
        description="Add a custom marketplace connection via OAuth or API keys."
        status="disconnected"
      />
    </div>
  )
}
