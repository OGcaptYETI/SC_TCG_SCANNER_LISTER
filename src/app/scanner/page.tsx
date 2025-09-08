import CardScanner from '@/components/scanner/CardScanner'

export default function ScannerPage() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Card Scanner</h1>
        <p className="text-gray-600 mt-2">
          Upload or capture images of your trading cards for instant AI-powered recognition and valuation
        </p>
      </div>
      
      <CardScanner />
    </div>
  )
}
