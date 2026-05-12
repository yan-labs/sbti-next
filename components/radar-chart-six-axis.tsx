'use client';

import { memo, useMemo } from 'react';
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

/**
 * Pure-SVG 6-vertex hexagonal radar chart.
 *
 * Vertices are placed at angles starting from the top (-90°), rotating
 * clockwise: Tempo (top) → Nerve → Bond → Intel → Flair → Mental.
 *
 * Score 0–100 maps linearly to 0–maxRadius. Score 50 lands at half-radius
 * (the neutral ring). Light + dark mode is handled via Tailwind CSS variables
 * so no JS theme detection is required.
 */
export const RadarChartSixAxis = memo(function RadarChartSixAxis({
  scores,
  locale,
  gameAccent,
  size = 280,
}: RadarChartSixAxisProps) {
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.36;

  const strokeColor = gameAccent ?? 'var(--game-primary, currentColor)';

  // Pre-compute per-axis vertex positions and labels
  const axes = useMemo(() => {
    return AXIS_ORDER.map((axis, i) => {
      const angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
      const def = AXES[i]!;
      const score = scores[axis];
      const label = score >= 50 ? def.highLabel[locale] : def.lowLabel[locale];
      const r = (score / 100) * maxR;
      return { axis, angle, label, score, r };
    });
  }, [scores, locale, maxR]);

  // Build background ring polygons (at 25%, 50%, 75%, 100%)
  const ringPolygons = useMemo(() => {
    return [0.25, 0.5, 0.75, 1].map((fraction) => {
      const r = fraction * maxR;
      const pts = AXIS_ORDER.map((_, i) => {
        const angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
        return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
      }).join(' ');
      return { pts, fraction };
    });
  }, [cx, cy, maxR]);

  // Data polygon
  const dataPolygon = useMemo(() => {
    return axes
      .map(({ angle, r }) => `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`)
      .join(' ');
  }, [axes, cx, cy]);

  // Axis spoke endpoints
  const spokes = useMemo(() => {
    return AXIS_ORDER.map((_, i) => {
      const angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
      return {
        x1: cx,
        y1: cy,
        x2: cx + Math.cos(angle) * maxR,
        y2: cy + Math.sin(angle) * maxR,
      };
    });
  }, [cx, cy, maxR]);

  // Label positions (slightly outside the outer ring)
  const labelR = maxR + size * 0.115;
  const labels = useMemo(() => {
    return axes.map(({ angle, label }, i) => {
      const lx = cx + Math.cos(angle) * labelR;
      const ly = cy + Math.sin(angle) * labelR;
      // Determine text-anchor based on angle quadrant
      const deg = ((angle * 180) / Math.PI + 360) % 360;
      const anchor = deg < 30 || deg > 330 ? 'middle' : deg < 150 ? 'start' : deg < 210 ? 'middle' : 'end';
      return { lx, ly, label, anchor, key: AXIS_ORDER[i] };
    });
  }, [axes, cx, cy, labelR]);

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
      {ringPolygons.map(({ pts, fraction }) => (
        <polygon
          key={fraction}
          points={pts}
          fill={fraction === 0.5 ? 'var(--game-primary, currentColor)' : 'none'}
          fillOpacity={fraction === 0.5 ? 0.05 : 0}
          stroke="currentColor"
          strokeOpacity={0.12}
          strokeWidth={fraction === 0.5 ? 1.5 : 1}
        />
      ))}

      {/* Axis spokes */}
      {spokes.map((s, i) => (
        <line
          key={i}
          x1={s.x1} y1={s.y1}
          x2={s.x2} y2={s.y2}
          stroke="currentColor"
          strokeOpacity={0.15}
          strokeWidth={1}
        />
      ))}

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
      {axes.map(({ angle, r, axis }) => {
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        return (
          <circle key={axis} cx={x} cy={y} r={3.5} fill={strokeColor} />
        );
      })}

      {/* Axis labels */}
      {labels.map(({ lx, ly, label, anchor, key }) => (
        <text
          key={key}
          x={lx}
          y={ly}
          textAnchor={anchor as 'start' | 'middle' | 'end'}
          dominantBaseline="middle"
          fontSize={size * 0.05}
          fill="currentColor"
          fillOpacity={0.7}
          className="font-sans"
        >
          {label}
        </text>
      ))}
    </svg>
  );
});
