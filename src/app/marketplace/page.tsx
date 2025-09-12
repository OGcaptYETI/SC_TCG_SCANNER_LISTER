'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, ExternalLink, TrendingUp, TrendingDown, Clock, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn, formatCurrency, formatRelativeTime } from '@/lib/utils'

interface MarketplaceListing {
  id: string
  title: string
  price: number
  condition: string
  seller: string
  sellerRating: number
  platform: 'ebay' | 'tcgplayer' | 'comc'
  imageUrl: string
  endTime?: string
  bids?: number
  buyItNow: boolean
  shipping: number
  location: string
  watchCount?: number
  category: string
  cardType: 'sports' | 'tcg'
  url: string
}

const mockListings: MarketplaceListing[] = [
  {
    id: '1',
    title: '2023 Topps Chrome Mike Trout #1 PSA 10',
    price: 299.99,
    condition: 'Mint',
    seller: 'cardcollector123',
    sellerRating: 4.9,
    platform: 'ebay',
    imageUrl: '/api/placeholder/200/280',
    endTime: '2024-01-20T15:30:00Z',
    bids: 12,
    buyItNow: false,
    shipping: 4.99,
    location: 'California, USA',
    watchCount: 45,
    category: 'baseball',
    cardType: 'sports',
    url: 'https://ebay.com/item/123456789'
  },
  {
    id: '2',
    title: 'Charizard VMAX Secret Rare Champions Path',
    price: 89.99,
    condition: 'Near Mint',
    seller: 'pokemonmaster',
    sellerRating: 4.8,
    platform: 'tcgplayer',
    imageUrl: '/api/placeholder/200/280',
    buyItNow: true,
    shipping: 0.99,
    location: 'Texas, USA',
    category: 'pokemon',
    cardType: 'tcg',
    url: 'https://tcgplayer.com/product/123456'
  },
  {
    id: '3',
    title: 'Black Lotus Alpha MTG LP',
    price: 15999.99,
    condition: 'Light Play',
    seller: 'vintagemtg',
    sellerRating: 5.0,
    platform: 'comc',
    imageUrl: '/api/placeholder/200/280',
    buyItNow: true,
    shipping: 19.99,
    location: 'Washington, USA',
    category: 'magic',
    cardType: 'tcg',
    url: 'https://comc.com/Cards/123456'
  }
]

const platformColors = {
  ebay: 'bg-blue-100 text-blue-800',
  tcgplayer: 'bg-orange-100 text-orange-800',
  comc: 'bg-purple-100 text-purple-800'
}

export default function MarketplacePage() {
  const [listings] = useState<MarketplaceListing[]>(mockListings)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('price_low')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])

  const filteredListings = listings
    .filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPlatform = selectedPlatform === 'all' || listing.platform === selectedPlatform
      const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory
      const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1]
      return matchesSearch && matchesPlatform && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_low':
          return a.price - b.price
        case 'price_high':
          return b.price - a.price
        case 'ending_soon':
          if (!a.endTime && !b.endTime) return 0
          if (!a.endTime) return 1
          if (!b.endTime) return -1
          return new Date(a.endTime).getTime() - new Date(b.endTime).getTime()
        case 'most_watched':
          return (b.watchCount || 0) - (a.watchCount || 0)
        default:
          return 0
      }
    })

  const categories = Array.from(new Set(listings.map(listing => listing.category)))
  const platforms = Array.from(new Set(listings.map(listing => listing.platform)))

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Listings</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {listings.length.toLocaleString()}
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Price</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(listings.reduce((sum, l) => sum + l.price, 0) / listings.length)}
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ending Soon</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {listings.filter(l => l.endTime).length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Platforms</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {platforms.length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search cards..."
                    className="input pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Platform Filter */}
              <select
                className="input"
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              >
                <option value="all">All Platforms</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                className="input"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                className="input"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="ending_soon">Ending Soon</option>
                <option value="most_watched">Most Watched</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mt-4 pt-4 border-t">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="card-hover overflow-hidden">
              <div className="aspect-[3/4] bg-gray-100 relative">
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Platform Badge */}
                <div className="absolute top-2 left-2">
                  <Badge className={cn('text-xs', platformColors[listing.platform])}>
                    {listing.platform.toUpperCase()}
                  </Badge>
                </div>

                {/* Auction Info */}
                {listing.endTime && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {listing.bids} bids
                  </div>
                )}

                {/* Watch Count */}
                {listing.watchCount && (
                  <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {listing.watchCount}
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                      {listing.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Condition: {listing.condition}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-900">
                        {formatCurrency(listing.price)}
                      </p>
                      {listing.shipping > 0 && (
                        <p className="text-xs text-gray-500">
                          +{formatCurrency(listing.shipping)} shipping
                        </p>
                      )}
                    </div>
                    {listing.buyItNow ? (
                      <Badge variant="success" className="text-xs">
                        Buy Now
                      </Badge>
                    ) : (
                      <Badge variant="warning" className="text-xs">
                        Auction
                      </Badge>
                    )}
                  </div>

                  {listing.endTime && (
                    <div className="text-xs text-red-600 font-medium">
                      Ends {formatRelativeTime(listing.endTime)}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 text-yellow-400" />
                      {listing.sellerRating.toFixed(1)}
                    </div>
                    <span>{listing.location}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(listing.url, '_blank')}
                      icon={<ExternalLink className="h-3 w-3" />}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      Watch
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={() => {
                setSearchTerm('')
                setSelectedPlatform('all')
                setSelectedCategory('all')
                setPriceRange([0, 20000])
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredListings.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Listings
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
