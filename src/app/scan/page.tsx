import CardScanner from '@/components/scanner/CardScanner'

export default function ScanPage() {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Card Recognition Scanner
        </h1>
        <p className="text-lg text-gray-600">
          Upload a photo to instantly identify your sports card and get market values
        </p>
      </div>
      
      <CardScanner />
    </div>
  )
}
