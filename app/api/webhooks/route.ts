import { NextRequest, NextResponse } from 'next/server'

// Generic webhook handler
// Route to specific handlers based on source

export async function POST(request: NextRequest) {
  try {
    const source = request.headers.get('x-webhook-source')
    const body = await request.json()

    console.log('Webhook received:', { source, body })

    // Route to specific handlers
    switch (source) {
      case 'realscout':
        // Handle RealScout listing updates
        return handleRealScoutWebhook(body)
      case 'fub':
        // Handle Follow Up Boss events
        return handleFubWebhook(body)
      default:
        return NextResponse.json({ received: true })
    }
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleRealScoutWebhook(body: unknown) {
  // TODO: Process RealScout listing updates
  // - New listing notifications
  // - Price changes
  // - Status updates
  console.log('RealScout webhook:', body)
  return NextResponse.json({ processed: true })
}

async function handleFubWebhook(body: unknown) {
  // TODO: Process Follow Up Boss events
  // - New lead notifications
  // - Lead status changes
  console.log('FUB webhook:', body)
  return NextResponse.json({ processed: true })
}
