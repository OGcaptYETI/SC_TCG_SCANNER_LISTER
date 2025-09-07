import { NextRequest, NextResponse } from 'next/server'
import { ebayAPI } from '@/lib/api/ebay'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const limit = parseInt(searchParams.get('limit') || '50')

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    )
  }

  try {
    const results = await ebayAPI.searchSportsCards(query, limit)
    return NextResponse.json({ results, count: results.length })
  } catch (error) {
    console.error('eBay search API error:', error)
    return NextResponse.json(
      { error: 'Failed to search eBay listings' },
      { status: 500 }
    )
  }
}
