/**
 * MLS listing disclaimer - required for IDX/MLS compliance.
 * Display on every page that shows property listings.
 */
export function MLSDisclaimer({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-luxury-charcoal/80 mt-4 ${className}`}>
      Listing data courtesy of the Multiple Listing Service (MLS). All information deemed reliable but not guaranteed. 
      All properties are subject to prior sale, change, or withdrawal. Listing information is for consumers&apos; personal, 
      non-commercial use and may not be used for any purpose other than to identify prospective properties. 
      © {new Date().getFullYear()} All rights reserved.
    </p>
  )
}
