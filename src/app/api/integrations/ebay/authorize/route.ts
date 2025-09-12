import { NextRequest, NextResponse } from 'next/server'

// Placeholder authorize endpoint for eBay OAuth (Production only)
// TODO: Build eBay OAuth URL with your App ID (Client ID) and Redirect URI
export async function GET(req: NextRequest) {
  const callbackUrl = new URL('/api/integrations/ebay/callback', req.nextUrl.origin)

  // Replace with real URL construction per eBay OAuth docs
  const exampleOAuthUrl = `https://auth.ebay.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=${encodeURIComponent(callbackUrl.toString())}&response_type=code&scope=${encodeURIComponent('https://api.ebay.com/oauth/api_scope')}`

  return NextResponse.redirect(exampleOAuthUrl)
}
