'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function GeneralSettings() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Branding */}
      <Card elevated>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
          <CardDescription>Set your app name, logo, and theme mode.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="label" htmlFor="appName">App Name</label>
            <input id="appName" className="input w-full" placeholder="CardScanner AI" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="label">Theme Mode</div>
              <p className="text-sm text-secondary-400">Light / Dark / System</p>
            </div>
            <ThemeToggle />
          </div>
          <div>
            <label className="label">Logo</label>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary-800/50 border border-secondary-700" />
              <Button variant="outline">Upload</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Localization */}
      <Card elevated>
        <CardHeader>
          <CardTitle>Localization</CardTitle>
          <CardDescription>Timezone, currency, and formats.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label" htmlFor="timezone">Timezone</label>
            <select id="timezone" className="input w-full">
              <option value="system">System Default</option>
              <option value="UTC">UTC</option>
              <option value="America/Denver">America/Denver</option>
              <option value="America/Los_Angeles">America/Los_Angeles</option>
              <option value="America/New_York">America/New_York</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor="currency">Currency</label>
            <select id="currency" className="input w-full">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor="dateFormat">Date Format</label>
            <input id="dateFormat" className="input w-full" placeholder="YYYY-MM-DD" />
          </div>
          <div>
            <label className="label" htmlFor="numberFormat">Number Format</label>
            <input id="numberFormat" className="input w-full" placeholder="1,234.56" />
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card elevated>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Email and in-app alerts.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox" defaultChecked />
            Email notifications
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox" defaultChecked />
            In-app notifications
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            Push notifications
          </label>
        </CardContent>
      </Card>

      {/* Privacy */}
      <Card elevated>
        <CardHeader>
          <CardTitle>Privacy & Telemetry</CardTitle>
          <CardDescription>Control analytics and data usage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox" defaultChecked />
            Share anonymous usage analytics
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            Participate in model improvement (opt-in)
          </label>
        </CardContent>
      </Card>
    </div>
  )
}
