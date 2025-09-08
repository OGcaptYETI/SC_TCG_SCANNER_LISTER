'use client'
import Link from 'next/link'
import { Camera, Database, TrendingUp, Users, Shield, Zap, Star, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="primary" className="mb-6">
              🚀 Advanced AI Recognition • Sports Cards + TCG
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              The Smart Way to
              <span className="text-gradient block">
                Manage Your Card Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered tools to scan, organize, and value your trading cards. Get real-time market data and streamline your buying and selling process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/scanner">
                  <Camera className="h-5 w-5 mr-2" />
                  Scan Your First Card
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/marketplace">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Browse Marketplace
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>95%+ Recognition Accuracy</span>
              </div>
              <div className="flex items-center">
                <Database className="h-4 w-4 text-blue-500 mr-1" />
                <span>10M+ Cards Database</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-green-500 mr-1" />
                <span>50K+ Active Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Advanced tools designed for serious collectors and resellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Scanning</h3>
                <p className="text-gray-600 mb-4">
                  Instantly identify cards with our advanced computer vision technology. No more manual entry.
                </p>
                <Badge variant="baseball" className="mr-2">Sports</Badge>
                <Badge variant="pokemon">TCG</Badge>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Market Data</h3>
                <p className="text-gray-600 mb-4">
                  Access up-to-the-minute pricing data from major marketplaces and auction sites.
                </p>
                <div className="text-sm text-gray-500">
                  eBay • TCGPlayer • COMC • More
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Inventory</h3>
                <p className="text-gray-600 mb-4">
                  Organize your collection with custom tags, conditions, and grading information.
                </p>
                <div className="text-sm text-gray-500">
                  Portfolio tracking & analytics
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Private</h3>
                <p className="text-gray-600 mb-4">
                  Your data is encrypted and never shared without your permission.
                </p>
                <div className="text-sm text-gray-500">
                  GDPR & CCPA Compliant
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Batch Processing</h3>
                <p className="text-gray-600 mb-4">
                  Quickly add multiple cards at once with our bulk import tools.
                </p>
                <div className="text-sm text-gray-500">
                  Perfect for dealers & shops
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 mb-4">
                  Optimized for speed so you can manage more cards in less time.
                </p>
                <div className="text-sm text-gray-500">
                  {"<"}3 second recognition
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Card Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Supporting all major sports cards and trading card games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gray-800 rounded mr-3"></div>
                  Sports Cards
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Badge variant="baseball" className="mr-2">⚾</Badge>
                    <span>Baseball</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="basketball" className="mr-2">🏀</Badge>
                    <span>Basketball</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="football" className="mr-2">🏈</Badge>
                    <span>Football</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="soccer" className="mr-2">⚽</Badge>
                    <span>Soccer</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="hockey" className="mr-2">🏒</Badge>
                    <span>Hockey</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">🏆</Badge>
                    <span>More Sports</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded mr-3"></div>
                  Trading Card Games
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Badge variant="pokemon" className="mr-2">⚡</Badge>
                    <span>Pokémon</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="magic" className="mr-2">🔮</Badge>
                    <span>Magic: The Gathering</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="lorcana" className="mr-2">✨</Badge>
                    <span>Disney Lorcana</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="yugioh" className="mr-2">👁️</Badge>
                    <span>Yu-Gi-Oh!</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">🎮</Badge>
                    <span>More TCGs</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="primary" className="mr-2">🆕</Badge>
                    <span>New Releases</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your card collection?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of collectors who trust our platform to manage and grow their collections.
          </p>
          <Link href="/scan" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors mb-4">
            Start Free Scan
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          <p className="text-sm text-gray-400">
            Watch Demo • Free • No credit card required
          </p>
        </div>
      </section>
    </div>
  )
}
