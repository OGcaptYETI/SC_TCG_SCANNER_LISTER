import { NextRequest, NextResponse } from 'next/server'
import { ebayAPI } from '@/lib/api/ebay'

export async function GET(
  request: NextRequest,
  { params }: { params: { itemId: string } }
) {
  try {
    const details = await ebayAPI.getItemDetails(params.itemId)
    return NextResponse.json(details)
  } catch (error) {
    console.error('eBay item details API error:', error)
    return NextResponse.json(
      { error: 'Failed to get item details' },
      { status: 500 }
    )
  }
}
