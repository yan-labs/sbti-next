interface PaperGrainProps {
  opacity?: number;
  className?: string;
}

/**
 * Inline SVG feTurbulence noise overlay for a tactile paper texture.
 * Wrap with `relative` on the parent so this absolute-positioned div appears
 * on top of background content but below interactive elements.
 */
export function PaperGrain({opacity = 0.04, className = ''}: PaperGrainProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{opacity}}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>
    </div>
  );
}
