'use client'
import { useState, useRef, useCallback } from 'react'
import { Camera, Upload, RotateCcw, Check, Zap, Database, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn, formatCurrency, validateImageFile } from '@/lib/utils'

interface ScanResult {
  id: string
  cardName: string
  set: string
  year: string
  player?: string
  cardType: 'sports' | 'tcg'
  category: string // baseball, basketball, pokemon, magic, etc.
  confidence: number
  estimatedValue: number
  condition: string
  rarity?: string
  marketTrend: 'up' | 'down' | 'stable'
  lastSold?: number
  population?: number
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
      const validation = validateImageFile(file)
      if (!validation.valid) {
        alert(validation.error)
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImagePreview(result)
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
      
      // Mock results for different card types
      const mockResults: ScanResult[] = [
        {
          id: '1',
          cardName: "2023 Topps Chrome Mike Trout",
          set: "2023 Topps Chrome",
          year: "2023",
          player: "Mike Trout",
          cardType: 'sports',
          category: 'baseball',
          confidence: 0.95,
          estimatedValue: 125.99,
          condition: "Near Mint",
          marketTrend: 'up',
          lastSold: 118.50,
          population: 2847
        },
        {
          id: '2',
          cardName: "Charizard VMAX",
          set: "Champion's Path",
          year: "2020",
          cardType: 'tcg',
          category: 'pokemon',
          confidence: 0.92,
          estimatedValue: 89.99,
          condition: "Mint",
          rarity: "Secret Rare",
          marketTrend: 'stable',
          lastSold: 85.00
        }
      ]
      
      const mockResult = mockResults[Math.floor(Math.random() * mockResults.length)]
      
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
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gradient">
            AI-Powered Card Recognition
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Instantly identify and value your sports cards and TCG cards with 95%+ accuracy
          </p>
        </CardHeader>
      </Card>

      {/* Main Scanner Interface */}
      <Card className="overflow-hidden">

        <CardContent className="p-8">
          {!imagePreview ? (
            <div className="space-y-8">
              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <Zap className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                  <p className="text-sm text-gray-600">Results in under 3 seconds</p>
                </div>
                <div className="text-center p-4">
                  <Database className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Comprehensive Database</h3>
                  <p className="text-sm text-gray-600">Sports cards + TCG recognition</p>
                </div>
                <div className="text-center p-4">
                  <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Real-Time Pricing</h3>
                  <p className="text-sm text-gray-600">Live market data integration</p>
                </div>
              </div>

              {/* Upload Area */}
              <div 
                className={cn(
                  "border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 cursor-pointer",
                  "border-gray-300 hover:border-primary-400 hover:bg-primary-50/50",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                )}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault()
                  const files = e.dataTransfer.files
                  if (files[0]) {
                    const event = { target: { files } } as React.ChangeEvent<HTMLInputElement>
                    handleFileUpload(event)
                  }
                }}
              >
                <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Upload Your Card Image
                </h3>
                <p className="text-gray-600 mb-4">
                  Supports sports cards, Pokémon, Magic, Lorcana, Yu-Gi-Oh! and more
                </p>
                <p className="text-sm text-gray-500">
                  JPG, PNG, WebP up to 10MB • Drag and drop or click to browse
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
              <Button
                size="lg"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
                icon={<Upload className="h-5 w-5" />}
              >
                Choose Image to Scan
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Preview */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Scanned Image</h3>
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Card preview"
                    className="w-full rounded-xl shadow-lg"
                  />
                  
                  {isScanning && (
                    <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Card className="bg-white p-6 max-w-sm">
                        <div className="text-center">
                          <div className="loading-spinner w-8 h-8 mx-auto mb-4"></div>
                          <h4 className="font-semibold text-gray-900 mb-2">Analyzing Card...</h4>
                          <p className="text-sm text-gray-600">AI recognition in progress</p>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>

              {/* Scan Results */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Recognition Results</h3>
                
                {scanResult ? (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-green-900 mb-1">
                            Card Successfully Identified!
                          </h4>
                          <p className="text-sm text-green-700">
                            Confidence: {Math.round(scanResult.confidence * 100)}%
                          </p>
                        </div>
                        <Badge variant={scanResult.category as any}>
                          {scanResult.category.toUpperCase()}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 text-lg">{scanResult.cardName}</h5>
                          <p className="text-gray-600">{scanResult.set} • {scanResult.year}</p>
                          {scanResult.player && (
                            <p className="text-gray-600">Player: {scanResult.player}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-600">Estimated Value</div>
                            <div className="text-2xl font-bold text-green-600">
                              {formatCurrency(scanResult.estimatedValue)}
                            </div>
                            {scanResult.lastSold && (
                              <div className="text-xs text-gray-500">
                                Last sold: {formatCurrency(scanResult.lastSold)}
                              </div>
                            )}
                          </div>
                          
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-600">Condition</div>
                            <div className="text-lg font-semibold text-gray-900">
                              {scanResult.condition}
                            </div>
                            {scanResult.rarity && (
                              <div className="text-xs text-gray-500">
                                {scanResult.rarity}
                              </div>
                            )}
                          </div>
                        </div>

                        {scanResult.population && (
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-600">Population Data</div>
                            <div className="text-lg font-semibold text-gray-900">
                              {scanResult.population.toLocaleString()} graded
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-gray-200">
                    <CardContent className="p-6 text-center text-gray-500">
                      <Database className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                      <p>Scan results will appear here</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {imagePreview && (
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <Button
                variant="secondary"
                size="lg"
                onClick={resetScan}
                icon={<RotateCcw className="h-4 w-4" />}
                className="flex-1"
              >
                Scan Another Card
              </Button>
              
              {scanResult && (
                <>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    View Market Data
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1"
                  >
                    Add to Collection
                  </Button>
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default CardScanner
