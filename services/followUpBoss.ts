/**
 * Follow Up Boss CRM Integration
 * https://www.followupboss.com/
 * 
 * Used for lead management and CRM functionality
 */

const FUB_API_URL = 'https://api.followupboss.com/v1'
const FUB_API_KEY = process.env.FUB_API_KEY

interface LeadData {
  firstName?: string
  lastName?: string
  name?: string
  email: string
  phone?: string
  source?: string
  tags?: string[]
  notes?: string
  propertyAddress?: string
}

interface FubPerson {
  id: number
  firstName: string
  lastName: string
  emails: { value: string }[]
  phones: { value: string }[]
}

/**
 * Submit a new lead to Follow Up Boss
 */
export async function submitLead(data: LeadData): Promise<FubPerson | null> {
  if (!FUB_API_KEY) {
    console.warn('FUB_API_KEY not configured - skipping lead submission')
    return null
  }

  try {
    // Parse name into first/last if provided as single field
    let firstName = data.firstName
    let lastName = data.lastName
    if (data.name && !firstName) {
      const parts = data.name.split(' ')
      firstName = parts[0]
      lastName = parts.slice(1).join(' ')
    }

    const response = await fetch(`${FUB_API_URL}/people`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        emails: [{ value: data.email }],
        phones: data.phone ? [{ value: data.phone }] : [],
        source: data.source || 'Homes at Lone Mountain Website',
        tags: data.tags || ['website-lead', 'lone-mountain'],
        notes: data.notes,
        propertyAddress: data.propertyAddress,
      }),
    })

    if (!response.ok) {
      throw new Error(`FUB API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Follow Up Boss submission error:', error)
    throw error
  }
}

/**
 * Add tags to an existing contact
 */
export async function addTags(personId: number, tags: string[]): Promise<void> {
  if (!FUB_API_KEY) return

  await fetch(`${FUB_API_URL}/people/${personId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tags }),
  })
}

/**
 * Add a note to a contact
 */
export async function addNote(personId: number, note: string): Promise<void> {
  if (!FUB_API_KEY) return

  await fetch(`${FUB_API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personId,
      body: note,
    }),
  })
}
