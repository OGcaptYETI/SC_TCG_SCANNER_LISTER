'use client'

import { useState } from 'react'
import { Search, Filter, Grid3X3, List, Plus, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn, formatCurrency, formatDate } from '@/lib/utils'

interface CollectionCard {
  id: string
  name: string
  set: string
  year: string
  player?: string
  cardType: 'sports' | 'tcg'
  category: string
  condition: string
  purchasePrice: number
  currentValue: number
  quantity: number
  dateAdded: string
  imageUrl: string
  rarity?: string
  graded?: boolean
  grade?: string
}

const mockCards: CollectionCard[] = [
  {
    id: '1',
    name: '2023 Topps Chrome Mike Trout',
    set: '2023 Topps Chrome',
    year: '2023',
    player: 'Mike Trout',
    cardType: 'sports',
    category: 'baseball',
    condition: 'Near Mint',
    purchasePrice: 89.99,
    currentValue: 125.99,
    quantity: 1,
    dateAdded: '2024-01-15',
    imageUrl: '/api/placeholder/200/280',
    graded: true,
    grade: 'PSA 9'
  },
  {
    id: '2',
    name: 'Charizard VMAX',
    set: "Champion's Path",
    year: '2020',
    cardType: 'tcg',
    category: 'pokemon',
    condition: 'Mint',
    purchasePrice: 65.00,
    currentValue: 89.99,
    quantity: 2,
    dateAdded: '2024-01-10',
    imageUrl: '/api/placeholder/200/280',
    rarity: 'Secret Rare'
  },
  {
    id: '3',
    name: 'Black Lotus',
    set: 'Alpha',
    year: '1993',
    cardType: 'tcg',
    category: 'magic',
    condition: 'Played',
    purchasePrice: 8500.00,
    currentValue: 12000.00,
    quantity: 1,
    dateAdded: '2023-12-20',
    imageUrl: '/api/placeholder/200/280',
    rarity: 'Rare'
  }
]

export default function CollectionPage() {
  const [cards] = useState<CollectionCard[]>(mockCards)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.player?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.set.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalValue = cards.reduce((sum, card) => sum + (card.currentValue * card.quantity), 0)
  const totalPurchasePrice = cards.reduce((sum, card) => sum + (card.purchasePrice * card.quantity), 0)
  const totalProfit = totalValue - totalPurchasePrice
  const profitPercentage = ((totalProfit / totalPurchasePrice) * 100).toFixed(1)

  const categories = Array.from(new Set(cards.map(card => card.category)))

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Collection</h1>
          <p className="text-gray-600">Manage and track your trading card collection</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Cards</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {cards.reduce((sum, card) => sum + card.quantity, 0)}
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Grid3X3 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalValue)}
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
                  <p className="text-sm font-medium text-gray-600">Total Invested</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalPurchasePrice)}
                  </p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Minus className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profit/Loss</p>
                  <p className={cn(
                    "text-2xl font-bold",
                    totalProfit >= 0 ? "text-green-600" : "text-red-600"
                  )}>
                    {formatCurrency(totalProfit)}
                  </p>
                  <p className={cn(
                    "text-sm",
                    totalProfit >= 0 ? "text-green-600" : "text-red-600"
                  )}>
                    {totalProfit >= 0 ? '+' : ''}{profitPercentage}%
                  </p>
                </div>
                <div className={cn(
                  "h-12 w-12 rounded-lg flex items-center justify-center",
                  totalProfit >= 0 ? "bg-green-100" : "bg-red-100"
                )}>
                  {totalProfit >= 0 ? (
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  ) : (
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Controls */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search cards..."
                    className="input pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Category Filter */}
                <select
                  className="input min-w-[150px]"
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
              </div>

              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === 'grid' ? "bg-white shadow-sm" : "hover:bg-gray-200"
                    )}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === 'list' ? "bg-white shadow-sm" : "hover:bg-gray-200"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                <Button icon={<Plus className="h-4 w-4" />}>
                  Add Card
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <Card key={card.id} className="card-hover overflow-hidden">
                <div className="aspect-[3/4] bg-gray-100 relative">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                  {card.quantity > 1 && (
                    <div className="absolute top-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                      x{card.quantity}
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                        {card.name}
                      </h3>
                      <Badge variant={card.category as any} className="ml-2">
                        {card.category.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-gray-600">
                      {card.set} • {card.year}
                    </p>
                    
                    {card.player && (
                      <p className="text-xs text-gray-600">
                        {card.player}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {formatCurrency(card.currentValue)}
                        </p>
                        <p className="text-xs text-gray-500">
                          Paid: {formatCurrency(card.purchasePrice)}
                        </p>
                      </div>
                      <div className={cn(
                        "text-xs font-medium",
                        card.currentValue > card.purchasePrice ? "text-green-600" : "text-red-600"
                      )}>
                        {card.currentValue > card.purchasePrice ? '+' : ''}
                        {(((card.currentValue - card.purchasePrice) / card.purchasePrice) * 100).toFixed(1)}%
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                      <span>{card.condition}</span>
                      {card.graded && <span>{card.grade}</span>}
                      {card.rarity && <span>{card.rarity}</span>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Card</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Set</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Condition</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Qty</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Purchase</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Current</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">P&L</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Date Added</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredCards.map((card) => {
                      const profit = (card.currentValue - card.purchasePrice) * card.quantity
                      const profitPercent = ((card.currentValue - card.purchasePrice) / card.purchasePrice) * 100
                      
                      return (
                        <tr key={card.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={card.imageUrl}
                                alt={card.name}
                                className="w-12 h-16 object-cover rounded"
                              />
                              <div>
                                <p className="font-medium text-gray-900">{card.name}</p>
                                {card.player && (
                                  <p className="text-sm text-gray-600">{card.player}</p>
                                )}
                                <Badge variant={card.category as any} className="mt-1">
                                  {card.category.toUpperCase()}
                                </Badge>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-900">
                            {card.set} ({card.year})
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-gray-900">{card.condition}</span>
                            {card.graded && (
                              <div className="text-xs text-gray-500">{card.grade}</div>
                            )}
                          </td>
                          <td className="py-4 px-4 text-right text-gray-900">
                            {card.quantity}
                          </td>
                          <td className="py-4 px-4 text-right text-gray-900">
                            {formatCurrency(card.purchasePrice)}
                          </td>
                          <td className="py-4 px-4 text-right text-gray-900">
                            {formatCurrency(card.currentValue)}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className={cn(
                              "font-medium",
                              profit >= 0 ? "text-green-600" : "text-red-600"
                            )}>
                              {formatCurrency(profit)}
                            </div>
                            <div className={cn(
                              "text-xs",
                              profit >= 0 ? "text-green-600" : "text-red-600"
                            )}>
                              {profit >= 0 ? '+' : ''}{profitPercent.toFixed(1)}%
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right text-gray-500 text-sm">
                            {formatDate(card.dateAdded)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {filteredCards.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Grid3X3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No cards found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Start building your collection by scanning your first card'
                }
              </p>
              <Button>
                Add Your First Card
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
