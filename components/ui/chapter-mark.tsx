interface ChapterMarkProps {
  number: string;
  kicker: string;
  className?: string;
}

/**
 * Editorial section label. Big mono numeral + small uppercase kicker.
 * Place inside a section header above the section heading.
 */
export function ChapterMark({number, kicker, className = ''}: ChapterMarkProps) {
  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span
        className="font-mono text-5xl font-black leading-none opacity-20"
        aria-hidden
        style={{color: 'var(--game-primary, var(--primary))'}}
      >
        {number}
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {kicker}
      </span>
    </div>
  );
}
