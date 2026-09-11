interface GlobeWireframeProps {
  className?: string
}

/**
 * Decorative globe wireframe with a couple of dashed logistics routes.
 * Purely ornamental — kept minimal, monochrome, and low-opacity.
 */
export function GlobeWireframe({ className }: GlobeWireframeProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="240" cy="240" r="200" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="240" cy="240" rx="200" ry="70" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="240" cy="240" rx="200" ry="140" stroke="currentColor" strokeWidth="1" />
      <line x1="40" y1="240" x2="440" y2="240" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="240" cy="240" rx="70" ry="200" stroke="currentColor" strokeWidth="1" />
      <line x1="240" y1="40" x2="240" y2="440" stroke="currentColor" strokeWidth="1" />

      {/* logistics route arcs */}
      <path
        d="M 90 300 Q 240 150 400 220"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle cx="90" cy="300" r="3.5" fill="currentColor" />
      <circle cx="400" cy="220" r="3.5" fill="currentColor" />

      <path
        d="M 130 120 Q 260 280 380 340"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle cx="130" cy="120" r="3.5" fill="currentColor" />
      <circle cx="380" cy="340" r="3.5" fill="currentColor" />
    </svg>
  )
}
