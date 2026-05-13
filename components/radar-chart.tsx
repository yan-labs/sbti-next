'use client';

import {useRef, useEffect} from 'react';
import {DimCode, Level, DIMENSION_ORDER} from '@/lib/types';
import {useTranslations} from 'next-intl';

const LEVEL_NUMERIC: Record<Level, number> = {L: 1, M: 2, H: 3};

interface RadarChartProps {
  levels: Record<DimCode, Level>;
  size?: number;
}

export function RadarChart({levels, size = 300}: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = useTranslations('dimensions');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = size * 0.36;
    const dims = DIMENSION_ORDER;
    const n = dims.length;
    const startAngle = -Math.PI / 2;

    // Get computed style for theme-aware colors
    const style = getComputedStyle(canvas);
    const isDark = style.colorScheme === 'dark' || document.documentElement.classList.contains('dark');
    const lineColor = isDark ? 'rgba(160,160,184,0.15)' : 'rgba(26,26,46,0.1)';
    const fillColors = isDark
      ? ['rgba(243,99,68,0.04)', 'rgba(243,99,68,0.07)', 'rgba(243,99,68,0.10)']
      : ['rgba(224,78,43,0.04)', 'rgba(224,78,43,0.07)', 'rgba(224,78,43,0.10)'];
    const dataFill = isDark ? 'rgba(243,99,68,0.22)' : 'rgba(224,78,43,0.18)';
    const dataStroke = isDark ? '#F36344' : '#E04E2B';
    const dotColor = isDark ? '#F36344' : '#E04E2B';
    const labelColor = isDark ? '#A0A0B8' : '#6B6B80';

    ctx.clearRect(0, 0, size, size);

    // Background circles
    for (let lv = 1; lv <= 3; lv++) {
      const r = (lv / 3) * maxR;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = fillColors[lv - 1];
      ctx.fill();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Axis lines + labels
    ctx.font = `${Math.round(size * 0.032)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = labelColor;

    for (let i = 0; i < n; i++) {
      const angle = startAngle + (2 * Math.PI * i) / n;
      const ex = cx + Math.cos(angle) * maxR;
      const ey = cy + Math.sin(angle) * maxR;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = lineColor;
      ctx.stroke();

      const labelR = maxR + size * 0.08;
      const lx = cx + Math.cos(angle) * labelR;
      const ly = cy + Math.sin(angle) * labelR;
      ctx.fillText(t(dims[i]), lx, ly);
    }

    // Data polygon
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const angle = startAngle + (2 * Math.PI * i) / n;
      const val = LEVEL_NUMERIC[levels[dims[i]]];
      const r = (val / 3) * maxR;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = dataFill;
    ctx.fill();
    ctx.strokeStyle = dataStroke;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Data dots
    for (let i = 0; i < n; i++) {
      const angle = startAngle + (2 * Math.PI * i) / n;
      const val = LEVEL_NUMERIC[levels[dims[i]]];
      const r = (val / 3) * maxR;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
    }
  }, [levels, size, t]);

  return <canvas ref={canvasRef} className="mx-auto" />;
}
