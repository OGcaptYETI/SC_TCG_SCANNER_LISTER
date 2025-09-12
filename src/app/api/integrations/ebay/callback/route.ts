import { NextRequest, NextResponse } from 'next/server'

// Placeholder callback endpoint to receive eBay OAuth code and exchange tokens
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  // TODO: Exchange code for tokens with eBay token endpoint
  // TODO: Store tokens per-user in Firestore (users/{uid}/integrations/ebay)

  return NextResponse.json({ status: 'ok', received: { code } })
}
