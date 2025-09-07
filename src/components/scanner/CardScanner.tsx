'use client'
import { useState, useRef, useCallback } from 'react'
import { Camera, Upload, RotateCcw, Check } from 'lucide-react'

interface ScanResult {
  cardName: string
  set: string
  year: string
  player: string
  confidence: number
  estimatedValue: number
  condition: string
}

const CardScanner = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImagePreview(result)
        // Here we'll call our AI recognition API
        processScanImage(result)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const processScanImage = async (imageData: string) => {
    setIsScanning(true)
    
    try {
      // Simulate API call - we'll implement the real one later
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock result
      const mockResult: ScanResult = {
        cardName: "2023 Topps Chrome Mike Trout",
        set: "2023 Topps Chrome",
        year: "2023",
        player: "Mike Trout",
        confidence: 0.95,
        estimatedValue: 25.99,
        condition: "Near Mint"
      }
      
      setScanResult(mockResult)
    } catch (error) {
      console.error('Scan failed:', error)
    } finally {
      setIsScanning(false)
    }
  }

  const resetScan = () => {
    setScanResult(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-bold text-center mb-6">
          Scan Your Sports Card
        </h2>

        {!imagePreview ? (
          <div className="space-y-6">
            {/* Upload Area */}
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary-500 cursor-pointer transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-2">
                Upload a photo of your sports card
              </p>
              <p className="text-sm text-gray-500">
                JPG, PNG up to 10MB
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <Upload className="h-5 w-5" />
              <span>Choose Image</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Image Preview */}
            <div className="relative">
              <img
                src={imagePreview}
                alt="Card preview"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
              
              {isScanning && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">Analyzing card...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Scan Results */}
            {scanResult && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Card Identified!
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Card:</span>
                        <p className="text-gray-900">{scanResult.cardName}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Set:</span>
                        <p className="text-gray-900">{scanResult.set}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Player:</span>
                        <p className="text-gray-900">{scanResult.player}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Est. Value:</span>
                        <p className="text-green-600 font-semibold">${scanResult.estimatedValue}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Condition:</span>
                        <p className="text-gray-900">{scanResult.condition}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Confidence:</span>
                        <p className="text-gray-900">{Math.round(scanResult.confidence * 100)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={resetScan}
                className="flex-1 btn-secondary flex items-center justify-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Scan Another</span>
              </button>
              
              {scanResult && (
                <button className="flex-1 btn-primary">
                  Add to Collection
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardScanner
