# API Routes

Next.js App Router API endpoints for Homes at Lone Mountain.

## Endpoints

### `/api/contact`
Contact form submission handler.
- POST: Submit contact form, sends to Follow Up Boss CRM

### `/api/lead`
Lead capture endpoints.
- POST: Capture leads from various forms (home valuation, buyer inquiry, etc.)

### `/api/webhooks`
Webhook receivers for external services.
- POST `/api/webhooks/realscout` - RealScout listing updates
- POST `/api/webhooks/fub` - Follow Up Boss events

## Usage

```typescript
// Example: Submit contact form
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '702-555-1234',
    message: 'Interested in Lone Mountain homes'
  })
})
```

## Environment Variables Required

- `FUB_API_KEY` - Follow Up Boss API key
- `REALSCOUT_WEBHOOK_SECRET` - RealScout webhook verification
