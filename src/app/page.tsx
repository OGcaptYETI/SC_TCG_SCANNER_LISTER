'use client'

import Link from 'next/link'
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Camera, Database, LineChart, ShieldCheck, LayoutDashboard, Tag, ArrowRight, ScanLine } from 'lucide-react'

const features = [
  {
    icon: <ScanLine className="h-6 w-6" />,
    title: "Smart Card Scanning",
    description: "Advanced computer vision that accurately identifies and catalogs your cards in seconds.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Collection Management",
    description: "Easily organize and track your entire collection with powerful filtering and search.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Market Analysis",
    description: "Real-time pricing and trends from multiple marketplaces to help you make informed decisions.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Condition Grading",
    description: "Get instant condition assessments with our AI-powered grading system.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Portfolio Overview",
    description: "Track the total value and performance of your collection over time.",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: <Tag className="h-6 w-6" />,
    title: "Buy & Sell Smarter",
    description: "Get alerts when it's the best time to buy or sell your cards based on market conditions.",
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20 dark:opacity-10" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-gray-900/10 dark:bg-gray-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
              AI-Powered Card Management
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              The Modern Way to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Manage Your Collection
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Scan, track, and value your trading card collection with precision. Get real-time market data and insights to make smarter decisions about your collection.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group" asChild>
                <Link href="/scanner" className="flex items-center">
                  <Camera className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Scan Your First Card
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/collection">
                  View Collection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything You Need to Manage Your Collection
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Powerful tools designed to help collectors at every level
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                Ready to take control of your collection?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Join thousands of collectors who trust our platform to manage and grow their collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/signup">
                    Get Started
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700/20" asChild>
                  <Link href="/features">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
