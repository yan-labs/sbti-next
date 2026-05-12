import type { Axis } from '@/lib/data/games/types';
import type { SiteLocale } from '@/lib/data/game-quizzes';
import { AXES, AXIS_ORDER } from '@/lib/data/games/dimensions';

interface RadarChartSixAxisProps {
  /** Normalized 0–100 score per axis (AXIS_ORDER determines vertex positions). */
  scores: Record<Axis, number>;
  locale: SiteLocale;
  /** CSS color for the data polygon stroke; defaults to var(--game-primary, currentColor). */
  gameAccent?: string;
  size?: number;
}

const RING_FRACTIONS = [0.25, 0.5, 0.75, 1] as const;

/**
 * Pure-SVG 6-vertex hexagonal radar chart.
 *
 * Server-renderable: no client hooks, no state. Vertices start at -90°
 * and rotate clockwise: Tempo (top) → Nerve → Bond → Intel → Flair → Mental.
 * Score 0–100 maps linearly to 0–maxRadius; 50 lands at half-radius.
 * Light + dark mode handled via Tailwind CSS variables — no JS theme detection.
 */
export function RadarChartSixAxis({
  scores,
  locale,
  gameAccent,
  size = 280,
}: RadarChartSixAxisProps) {
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.36;
  const labelR = maxR + size * 0.115;
  const strokeColor = gameAccent ?? 'var(--game-primary, currentColor)';

  const vertices = AXIS_ORDER.map((axis, i) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
    const def = AXES[i]!;
    const score = scores[axis];
    const label = score >= 50 ? def.highLabel[locale] : def.lowLabel[locale];
    const r = (score / 100) * maxR;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    return { axis, angle, label, score, r, x, y };
  });

  const dataPolygon = vertices.map((v) => `${v.x},${v.y}`).join(' ');

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      className="mx-auto"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Background rings */}
      {RING_FRACTIONS.map((fraction) => {
        const r = fraction * maxR;
        const pts = AXIS_ORDER.map((_, i) => {
          const angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
          return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
        }).join(' ');
        return (
          <polygon
            key={fraction}
            points={pts}
            fill={fraction === 0.5 ? 'var(--game-primary, currentColor)' : 'none'}
            fillOpacity={fraction === 0.5 ? 0.05 : 0}
            stroke="currentColor"
            strokeOpacity={0.12}
            strokeWidth={fraction === 0.5 ? 1.5 : 1}
          />
        );
      })}

      {/* Axis spokes */}
      {AXIS_ORDER.map((_, i) => {
        const angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(angle) * maxR}
            y2={cy + Math.sin(angle) * maxR}
            stroke="currentColor"
            strokeOpacity={0.15}
            strokeWidth={1}
          />
        );
      })}

      {/* Data polygon fill */}
      <polygon
        points={dataPolygon}
        fill={strokeColor}
        fillOpacity={0.18}
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* Data dots */}
      {vertices.map(({ axis, x, y }) => (
        <circle key={axis} cx={x} cy={y} r={3.5} fill={strokeColor} />
      ))}

      {/* Axis labels */}
      {vertices.map(({ axis, angle, label }) => {
        const lx = cx + Math.cos(angle) * labelR;
        const ly = cy + Math.sin(angle) * labelR;
        const deg = ((angle * 180) / Math.PI + 360) % 360;
        const anchor: 'start' | 'middle' | 'end' =
          deg < 30 || deg > 330 ? 'middle' : deg < 150 ? 'start' : deg < 210 ? 'middle' : 'end';
        return (
          <text
            key={axis}
            x={lx}
            y={ly}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize={size * 0.05}
            fill="currentColor"
            fillOpacity={0.7}
            className="font-sans"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
