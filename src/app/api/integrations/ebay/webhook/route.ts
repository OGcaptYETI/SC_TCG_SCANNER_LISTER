import { NextRequest, NextResponse } from 'next/server'

// Placeholder webhook endpoint for eBay notifications (if subscribed)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  // TODO: verify signature if applicable
  // TODO: persist event in Firestore and trigger processing pipelines
  return NextResponse.json({ status: 'received', body })
}
