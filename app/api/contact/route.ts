import { NextRequest, NextResponse } from 'next/server'

// Contact form submission endpoint
// Integrates with Follow Up Boss CRM

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, source = 'website' } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // TODO: Integrate with Follow Up Boss
    // const fubResponse = await submitToFollowUpBoss({ name, email, phone, message, source })

    // For now, log the submission
    console.log('Contact form submission:', { name, email, phone, message, source })

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us. We will be in touch soon!'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
