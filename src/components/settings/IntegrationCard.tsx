'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface IntegrationCardProps {
  name: string
  description: string
  status?: 'connected' | 'disconnected' | 'error'
  onConnect?: () => void
  onDisconnect?: () => void
  connectHref?: string
}

export function IntegrationCard({ name, description, status = 'disconnected', onConnect, onDisconnect, connectHref }: IntegrationCardProps) {
  const isConnected = status === 'connected'

  return (
    <Card elevated>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Badge variant={isConnected ? 'success' : 'secondary'}>
          {isConnected ? 'Connected' : 'Not connected'}
        </Badge>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="text-sm text-secondary-400">
          {isConnected ? 'Your account is connected. You can disconnect anytime.' : 'Connect to enable syncing and listing features.'}
        </div>
        <div className="flex items-center gap-2">
          {isConnected ? (
            <Button variant="outline" onClick={onDisconnect}>Disconnect</Button>
          ) : connectHref ? (
            <Button asChild>
              <a href={connectHref}>Connect</a>
            </Button>
          ) : (
            <Button onClick={onConnect}>Connect</Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
