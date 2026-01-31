import { NextRequest, NextResponse } from 'next/server'

// Lead capture endpoint
// Handles various lead sources: home valuation, buyer inquiry, seller inquiry

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      leadType = 'general', // 'buyer', 'seller', 'valuation', 'general'
      propertyAddress,
      message,
      source = 'website'
    } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // TODO: Integrate with Follow Up Boss
    // Tag leads appropriately based on leadType
    // const tags = getLeadTags(leadType)
    // await submitToFollowUpBoss({ name, email, phone, message, tags, source })

    console.log('Lead captured:', { name, email, phone, leadType, propertyAddress, source })

    return NextResponse.json({
      success: true,
      message: 'Thank you! Dr. Jan Duffy will contact you shortly.'
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    )
  }
}
