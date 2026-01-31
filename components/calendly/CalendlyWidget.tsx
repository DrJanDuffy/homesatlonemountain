'use client'

interface CalendlyWidgetProps {
  url?: string
  height?: string
  className?: string
}

export function CalendlyWidget({
  url = 'https://calendly.com/drjanduffy/showing',
  height = '630px',
  className = '',
}: CalendlyWidgetProps) {
  return (
    <div className={className}>
      <iframe
        src={`${url}?hide_gdpr_banner=1`}
        width="100%"
        height={height}
        frameBorder="0"
        title="Schedule a showing with Dr. Jan Duffy"
        className="rounded-lg"
      />
    </div>
  )
}
