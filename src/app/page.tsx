import Link from 'next/link'
import { Camera, Database, BarChart3, Zap, Shield, Clock, ArrowRight, Search, TrendingUp, ListChecks } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,white)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Smart Way to
              <span className="block text-blue-100 mt-2">Manage Your Card Collection</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              AI-powered tools to scan, organize, and value your trading cards. Get real-time market data and streamline your buying and selling process.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/scan"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Camera className="mr-2 h-5 w-5" />
                Scan Your First Card
              </Link>
              <Link 
                href="/marketplace"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Browse Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
              Powerful Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Advanced tools designed for serious collectors and resellers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Search className="h-6 w-6 text-blue-600" />,
                title: 'AI-Powered Scanning',
                description: 'Instantly identify cards with our advanced computer vision technology. No more manual entry.'
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                title: 'Real-Time Market Data',
                description: 'Access up-to-the-minute pricing data from major marketplaces and auction sites.'
              },
              {
                icon: <Database className="h-6 w-6 text-blue-600" />,
                title: 'Smart Inventory',
                description: 'Organize your collection with custom tags, conditions, and grading information.'
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                title: 'Secure & Private',
                description: 'Your data is encrypted and never shared without your permission.'
              },
              {
                icon: <ListChecks className="h-6 w-6 text-blue-600" />,
                title: 'Batch Processing',
                description: 'Quickly add multiple cards at once with our bulk import tools.'
              },
              {
                icon: <Zap className="h-6 w-6 text-blue-600" />,
                title: 'Lightning Fast',
                description: 'Optimized for speed so you can manage more cards in less time.'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your card collection?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of collectors who trust our platform to manage and grow their collections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
