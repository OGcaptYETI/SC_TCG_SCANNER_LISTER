'use client'
import Link from 'next/link'
import { Camera, Database, TrendingUp, Users, Shield, Zap, Star, ArrowRight, Cpu, Eye, Brain, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Cyber Glass Design */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 70px 70px',
            animation: 'dataFlow 8s linear infinite'
          }}
        />
        
        {/* Scan lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-60 animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="cyber" className="mb-6 animate-pulse">
              🚀 Neural AI Recognition • Sports Cards + TCG
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-foreground">The</span>
              <span className="text-cyber block">Neural Gateway</span>
              <span className="text-foreground">to Your Collection</span>
            </h1>
            
            <p className="text-xl text-secondary-300 mb-8 max-w-3xl mx-auto">
              Quantum-powered AI scans, analyzes, and valuates your trading cards. 
              Access real-time market intelligence and streamline your collection empire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-primary group" size="xl" asChild>
                <Link href="/scanner">
                  <Camera className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Initialize Neural Scan
                </Link>
              </Button>
              <Button className="btn-neon" size="xl" asChild>
                <Link href="/marketplace">
                  <Eye className="h-5 w-5 mr-2" />
                  Access Market Matrix
                </Link>
              </Button>
            </div>
            
            {/* Stats with cyber styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center glass-panel px-4 py-2 rounded-lg">
                <Star className="h-4 w-4 text-primary-400 mr-2 animate-pulse" />
                <span className="text-primary-400 font-semibold">99.2%</span>
                <span className="text-secondary-300 ml-1">Neural Accuracy</span>
              </div>
              <div className="flex items-center glass-panel px-4 py-2 rounded-lg">
                <Database className="h-4 w-4 text-accent-400 mr-2" />
                <span className="text-accent-400 font-semibold">10M+</span>
                <span className="text-secondary-300 ml-1">Card Database</span>
              </div>
              <div className="flex items-center glass-panel px-4 py-2 rounded-lg">
                <Users className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">50K+</span>
                <span className="text-secondary-300 ml-1">Active Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Cyber Cards */}
      <section className="py-20 relative">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-cyber">Advanced Neural Capabilities</span>
            </h2>
            <p className="text-xl text-secondary-300">
              Cutting-edge technology designed for elite collectors and quantum traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI-Powered Scanning */}
            <Card className="card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Camera className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-primary-400/20 rounded-full blur animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Neural Recognition Engine</h3>
                <p className="text-secondary-300 mb-4">
                  Quantum-enhanced computer vision analyzes card patterns with unprecedented precision. 
                  Zero manual data entry required.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="cyber">Sports</Badge>
                  <Badge variant="neon">TCG</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Real-Time Market Data */}
            <Card className="card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <TrendingUp className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full blur animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Real-Time Market Intelligence</h3>
                <p className="text-secondary-300 mb-4">
                  Live market data streams from multiple trading platforms with predictive analytics and trend forecasting.
                </p>
                <div className="text-sm text-secondary-400 font-mono">
                  eBay • TCGPlayer • COMC • Quantum Sources
                </div>
              </CardContent>
            </Card>

            {/* Smart Inventory */}
            <Card className="card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Database className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-accent-400/20 rounded-full blur animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quantum Inventory System</h3>
                <p className="text-secondary-300 mb-4">
                  AI-driven organization with predictive categorization, condition analysis, and grading estimation.
                </p>
                <div className="text-sm text-secondary-400 font-mono">
                  Portfolio Analytics • Trend Prediction
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Shield className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quantum Encryption</h3>
                <p className="text-secondary-300 mb-4">
                  Military-grade security protocols protect your data with zero-knowledge architecture.
                </p>
                <div className="text-sm text-secondary-400 font-mono">
                  GDPR • CCPA • Quantum Secure
                </div>
              </CardContent>
            </Card>

            {/* Batch Processing */}
            <Card className="card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Brain className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-red-400/20 rounded-full blur animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Neural Batch Processing</h3>
                <p className="text-secondary-300 mb-4">
                  Parallel processing algorithms handle massive collections with lightning-fast bulk operations.
                </p>
                <div className="text-sm text-secondary-400 font-mono">
                  Enterprise • Dealer Networks
                </div>
              </CardContent>
            </Card>

            {/* Lightning Fast */}
            <Card className="card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Zap className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quantum Speed Processing</h3>
                <p className="text-secondary-300 mb-4">
                  Optimized neural networks deliver instant results so you can process collections at light speed.
                </p>
                <div className="text-sm text-secondary-400 font-mono">
                  &lt;2.1s Recognition Time
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Cards Section - Cyber Enhanced */}
      <section className="py-20 relative">
        {/* Holographic background effect */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, 
              rgba(14, 165, 233, 0.1) 0%, 
              rgba(168, 85, 247, 0.1) 50%, 
              rgba(14, 165, 233, 0.1) 100%)`,
            animation: 'hologram 3s ease-in-out infinite'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-cyber">Universal Card Recognition Matrix</span>
            </h2>
            <p className="text-xl text-secondary-300">
              Neural networks trained on comprehensive sports cards and trading card databases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Sports Cards */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-400 rounded mr-3 flex items-center justify-center">
                    <Cpu className="h-4 w-4 text-white" />
                  </div>
                  Sports Card Neural Network
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Badge variant="cyber" className="mr-2">⚾</Badge>
                    <span className="text-secondary-200">Baseball</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="neon" className="mr-2">🏀</Badge>
                    <span className="text-secondary-200">Basketball</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="cyber" className="mr-2">🏈</Badge>
                    <span className="text-secondary-200">Football</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="neon" className="mr-2">⚽</Badge>
                    <span className="text-secondary-200">Soccer</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="cyber" className="mr-2">🏒</Badge>
                    <span className="text-secondary-200">Hockey</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="hologram" className="mr-2">🏆</Badge>
                    <span className="text-secondary-200">Elite Sports</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TCG Cards */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-600 to-accent-400 rounded mr-3 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  TCG Recognition Matrix
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Badge variant="neon" className="mr-2">⚡</Badge>
                    <span className="text-secondary-200">Pokémon</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="cyber" className="mr-2">🔮</Badge>
                    <span className="text-secondary-200">Magic: The Gathering</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="neon" className="mr-2">✨</Badge>
                    <span className="text-secondary-200">Disney Lorcana</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="cyber" className="mr-2">👁️</Badge>
                    <span className="text-secondary-200">Yu-Gi-Oh!</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="hologram" className="mr-2">🎮</Badge>
                    <span className="text-secondary-200">Advanced TCGs</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="neon" className="mr-2">🆕</Badge>
                    <span className="text-secondary-200">New Releases</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Cyber Terminal */}
      <section className="py-20 relative overflow-hidden">
        {/* Terminal background */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900" />
        
        {/* Scan line animation */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.3) 50%, transparent 100%)',
            transform: 'translateX(-100%) skewX(-15deg)',
            animation: 'scan 4s linear infinite'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-cyber">Initialize Your Neural Collection Interface</span>
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Join the elite network of collectors utilizing quantum-enhanced card management technology.
          </p>
          
          <div className="glass-panel p-6 rounded-2xl mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                <span className="text-green-400 font-mono">NEURAL.AI.ONLINE</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse mr-2" />
                <span className="text-primary-400 font-mono">QUANTUM.READY</span>
              </div>
            </div>
          </div>
          
          <Link 
            href="/scanner" 
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl group mb-4"
          >
            <Brain className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Initialize Neural Scan
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <p className="text-sm text-secondary-400 font-mono">
            Quantum Demo • Zero Cost • No Authentication Required
          </p>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes dataFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes hologram {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
      `}</style>
    </div>
  )
}