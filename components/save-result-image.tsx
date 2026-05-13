'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';
import {type CompatArchetype} from '@/lib/data/compat';
import {TYPE_IMAGES} from '@/lib/data/personalities';
import {type DimCode, type Level} from '@/lib/types';
import {AXIS_ORDER} from '@/lib/data/games/dimensions';
import type {Axis, PolarityCode} from '@/lib/data/games/types';

export interface SaveImageButtonProps {
  code: string;
  name: string;
  description: string;
  matchLabel: string;
  exactHitsLabel: string;
  dimensionsTitle: string;
  dimensions: {
    code: DimCode;
    label: string;
    level: Level;
    levelLabel: string;
  }[];
  /** Normalised 0–100 scores per axis. When provided together with
   *  `polarityCode`, the share card renders a mini radar + the 6-letter code. */
  scores?: Record<Axis, number>;
  polarityCode?: PolarityCode;
}

interface SaveCompatImageButtonProps {
  codeA: string;
  nameA: string;
  codeB: string;
  nameB: string;
  score: number;
  scoreLabel: string;
  archetypeKey: CompatArchetype;
  archetypeLabel: string;
  archetypeDescription: string;
  dimensionsTitle: string;
  dimensions: {
    code: DimCode;
    label: string;
    leftLevel: Level;
    rightLevel: Level;
    leftLevelLabel: string;
    rightLevelLabel: string;
  }[];
}

// Brand colors (hex, for canvas use) — v2 editorial palette
const PRIMARY = '#E04E2B';     // vermillion — single hot accent
const ACCENT = '#1B3CFF';      // print-error blue (data viz only)
const SECONDARY = '#161513';   // ink (used as secondary fill)
const SURFACE = '#FAF7EF';     // paper-soft
const FOREGROUND = '#161513';  // ink
const FOREGROUND_MUTED = '#6B655A';
const CHART_4 = '#1B3CFF';
const DESTRUCTIVE = '#C8362A';
const EXPORT_SCALE = 2;

function getTypeImageSrc(code: string) {
  return TYPE_IMAGES[code] ?? `/types/${code}.webp`;
}

// Compat archetype tones — same 6 archetypes, retuned to vermillion-warm system.
const COMPAT_TONES: Record<CompatArchetype, {surface: string; accent: string; soft: string}> = {
  fated:    {surface: '#F4DBD0', accent: PRIMARY,     soft: '#FBEFE9'}, // vermillion warm
  sync:     {surface: '#EBE5D3', accent: FOREGROUND,  soft: '#F2EEE3'}, // bone — ink
  spicy:    {surface: '#F4DBD0', accent: PRIMARY,     soft: '#FBEFE9'}, // warm vermillion
  plastic:  {surface: '#DDE3F0', accent: CHART_4,     soft: '#EFF2F8'}, // cool blue
  awkward:  {surface: '#EBE5D3', accent: FOREGROUND_MUTED, soft: '#F2EEE3'}, // muted
  disaster: {surface: '#F4DBD0', accent: DESTRUCTIVE, soft: '#FBEFE9'}, // hot
};

// Wraps text onto canvas, returns number of lines drawn
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines = Infinity,
): number {
  const words = text.includes(' ') ? text.split(/(\s+)/) : Array.from(text);
  let line = '';
  let lineCount = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line && i > 0) {
      const isLastLine = lineCount + 1 >= maxLines;
      ctx.fillText(isLastLine ? `${line.trim()}...` : line.trim(), x, y + lineCount * lineHeight);
      if (isLastLine) return lineCount + 1;
      line = words[i];
      lineCount++;
    } else {
      line = testLine;
    }
  }
  if (line.trim()) {
    ctx.fillText(line.trim(), x, y + lineCount * lineHeight);
    lineCount++;
  }
  return lineCount;
}

function roundedPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill: string,
  stroke?: string,
) {
  roundedPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawFittedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  maxSize: number,
  minSize: number,
  weight: number,
) {
  let size = maxSize;
  do {
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  } while (size > minSize);
  ctx.fillText(text, x, y);
}

/**
 * Draw a compact 6-axis radar thumbnail on the canvas.
 *
 * @param cx   Centre x
 * @param cy   Centre y
 * @param r    Outer radius of the hexagon grid
 * @param scores  Normalised 0–100 per axis (50 = centre)
 */
function drawMiniRadar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  scores: Record<Axis, number>,
) {
  const n = AXIS_ORDER.length; // 6
  // Vertex angle: first axis points straight up (−π/2), then clockwise
  const angleStep = (Math.PI * 2) / n;
  const axisAngle = (i: number) => -Math.PI / 2 + i * angleStep;

  // Grid rings at 33%, 66%, 100%
  for (const frac of [1 / 3, 2 / 3, 1]) {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = axisAngle(i);
      const px = cx + Math.cos(a) * r * frac;
      const py = cy + Math.sin(a) * r * frac;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(0,0,0,0.10)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Radial spoke lines
  for (let i = 0; i < n; i++) {
    const a = axisAngle(i);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.strokeStyle = 'rgba(0,0,0,0.10)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Data polygon: normalised score 0–100 maps linearly to 0–r
  ctx.beginPath();
  AXIS_ORDER.forEach((axis, i) => {
    const score = scores[axis] ?? 50;
    const frac = Math.max(0, Math.min(100, score)) / 100;
    const a = axisAngle(i);
    const px = cx + Math.cos(a) * r * frac;
    const py = cy + Math.sin(a) * r * frac;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(16,185,129,0.22)';
  ctx.fill();
  ctx.strokeStyle = PRIMARY;
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Vertex dots
  AXIS_ORDER.forEach((axis, i) => {
    const score = scores[axis] ?? 50;
    const frac = Math.max(0, Math.min(100, score)) / 100;
    const a = axisAngle(i);
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * r * frac, cy + Math.sin(a) * r * frac, 4, 0, Math.PI * 2);
    ctx.fillStyle = PRIMARY;
    ctx.fill();
  });
}

// Clips a rounded rectangle on the canvas for image masking
function clipRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
  ctx.clip();
}

export async function generateImage({
  code,
  name,
  description,
  matchLabel,
  exactHitsLabel,
  dimensionsTitle,
  dimensions,
  scores,
  polarityCode,
}: SaveImageButtonProps): Promise<Blob> {
  const W = 1080;
  const H = 1440;

  const canvas = document.createElement('canvas');
  canvas.width = W * EXPORT_SCALE;
  canvas.height = H * EXPORT_SCALE;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(EXPORT_SCALE, EXPORT_SCALE);

  ctx.fillStyle = SURFACE;
  ctx.fillRect(0, 0, W, H);

  // Header
  ctx.save();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  drawRoundRect(ctx, 72, 56, 148, 56, 28, PRIMARY);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('SBTI', 104, 70);
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.font = '600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('Satirical Behavior Type Indicator', 244, 72);
  ctx.restore();

  // Load the type image
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = reject;
    el.src = getTypeImageSrc(code);
  });

  const imgSize = 420;
  const imgX = 120;
  const imgY = 206;
  const imgRadius = 28;

  ctx.save();
  clipRoundedRect(ctx, imgX, imgY, imgSize, imgSize, imgRadius);
  ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = PRIMARY;
  ctx.font = '800 24px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('MY RESULT', 588, 224);
  ctx.fillStyle = FOREGROUND;
  drawFittedText(ctx, code, 588, 266, 356, 92, 54, 900);
  ctx.fillStyle = FOREGROUND_MUTED;
  drawFittedText(ctx, name, 592, 366, 340, 42, 28, 800);

  drawRoundRect(ctx, 588, 430, 180, 54, 27, '#F4DBD0');
  ctx.fillStyle = PRIMARY;
  ctx.font = '800 23px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText(matchLabel, 616, 445);

  drawRoundRect(ctx, 784, 430, 166, 54, 27, '#EBE5D3');
  ctx.fillStyle = FOREGROUND;
  ctx.font = '800 23px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText(exactHitsLabel, 808, 445);

  ctx.fillStyle = FOREGROUND;
  ctx.font = '500 29px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
  wrapText(ctx, description, 588, 530, 360, 44, 3);
  ctx.restore();

  // ── 6-letter player identity code + mini radar (optional) ────────────────
  if (scores && polarityCode) {
    // Mini radar: centred below the type image, in the left column
    const radarCx = 120 + 420 / 2; // 330 — horizontal centre of image
    const radarCy = 660 + 100;      // 760
    const radarR = 96;
    drawMiniRadar(ctx, radarCx, radarCy, radarR, scores);

    // Polarity code: large monospace text, right column, below description
    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    // Label row
    ctx.fillStyle = FOREGROUND_MUTED;
    ctx.font = '700 20px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
    ctx.fillText('PLAYER CODE', 588, 672);

    // The 6-letter code — monospace, bold, large
    ctx.fillStyle = FOREGROUND;
    ctx.font = '900 78px "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", Menlo, Consolas, monospace';
    ctx.fillText(polarityCode, 588, 702);

    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = FOREGROUND;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.font = '800 34px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText(dimensionsTitle, 72, 828);

  const levelTextColor: Record<Level, string> = {L: '#047857', M: '#B45309', H: '#6D28D9'};
  const levelDotColor: Record<Level, string> = {L: PRIMARY, M: SECONDARY, H: ACCENT};
  const colW = 312;
  const rowH = 70;
  const startX = 72;
  const startY = 892;
  dimensions.forEach((dim, i) => {
    const col = Math.floor(i / 5);
    const row = i % 5;
    const x = startX + col * colW;
    const y = startY + row * rowH;
    ctx.beginPath();
    ctx.arc(x + 12, y + 24, 6, 0, Math.PI * 2);
    ctx.fillStyle = levelDotColor[dim.level];
    ctx.fill();
    ctx.fillStyle = FOREGROUND;
    ctx.font = '800 22px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
    ctx.fillText(dim.code, x + 32, y + 8);
    ctx.font = '600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
    const label = ctx.measureText(dim.label).width > 126 ? `${dim.label.slice(0, 6)}...` : dim.label;
    ctx.fillStyle = FOREGROUND_MUTED;
    ctx.fillText(label, x + 32, y + 36);
    ctx.fillStyle = levelTextColor[dim.level];
    ctx.font = '900 20px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(dim.levelLabel, x + 258, y + 21);
    ctx.textAlign = 'left';
  });
  ctx.restore();

  ctx.save();
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.font = '600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Take the test at', 72, 1334);
  ctx.fillStyle = PRIMARY;
  ctx.font = '800 30px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('sbti.support', 72, 1366);
  ctx.textAlign = 'right';
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('Shareable personality chaos', W - 72, 1366);
  ctx.restore();

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('canvas.toBlob returned null'));
      },
      'image/png',
    );
  });
}

async function generateCompatImage({
  codeA,
  nameA,
  codeB,
  nameB,
  score,
  scoreLabel,
  archetypeKey,
  archetypeLabel,
  archetypeDescription,
  dimensionsTitle,
  dimensions,
}: SaveCompatImageButtonProps): Promise<Blob> {
  const W = 1080;
  const H = 1440;
  const tone = COMPAT_TONES[archetypeKey];

  const canvas = document.createElement('canvas');
  canvas.width = W * EXPORT_SCALE;
  canvas.height = H * EXPORT_SCALE;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(EXPORT_SCALE, EXPORT_SCALE);

  ctx.fillStyle = SURFACE;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  drawRoundRect(ctx, 72, 56, 148, 56, 28, PRIMARY);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('SBTI', 104, 70);
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.font = '600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('Compatibility Check', 244, 72);
  ctx.restore();

  const [imgA, imgB] = await Promise.all([
    new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = getTypeImageSrc(codeA);
    }),
    new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = getTypeImageSrc(codeB);
    }),
  ]);

  const imageY = 242;
  const imageSize = 296;
  const leftX = 128;
  const rightX = 656;

  for (const [img, x] of [[imgA, leftX], [imgB, rightX]] as const) {
    ctx.save();
    clipRoundedRect(ctx, x, imageY, imageSize, imageSize, 28);
    ctx.drawImage(img, x, imageY, imageSize, imageSize);
    ctx.restore();
  }

  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = FOREGROUND;
  drawFittedText(ctx, codeA, leftX + imageSize / 2, 570, 300, 56, 32, 900);
  drawFittedText(ctx, codeB, rightX + imageSize / 2, 570, 300, 56, 32, 900);
  ctx.font = '700 28px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.fillText(nameA, leftX + imageSize / 2, 634);
  ctx.fillText(nameB, rightX + imageSize / 2, 634);

  drawRoundRect(ctx, 440, 260, 200, 200, 100, tone.soft);
  ctx.fillStyle = tone.accent;
  ctx.font = '900 76px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText(`${score}`, W / 2, 298);
  ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('%', W / 2, 378);
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.font = '700 22px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText(scoreLabel, W / 2, 418);
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = FOREGROUND;
  ctx.font = '800 34px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
  ctx.fillText(archetypeLabel, W / 2, 720);
  ctx.font = '500 25px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
  wrapText(ctx, archetypeDescription, W / 2, 770, 720, 36, 2);
  ctx.restore();

  ctx.save();
  ctx.fillStyle = FOREGROUND;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = '800 30px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText(dimensionsTitle, W / 2, 900);

  const levelColor: Record<Level, string> = {L: PRIMARY, M: SECONDARY, H: ACCENT};
  const levelValueMap: Record<Level, number> = {L: 0.36, M: 0.68, H: 1};
  dimensions.forEach((dim, i) => {
    const y = 970 + i * 42;
    ctx.fillStyle = FOREGROUND_MUTED;
    ctx.font = '700 18px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(dim.leftLevelLabel, 212, y - 6);
    ctx.textAlign = 'left';
    ctx.fillText(dim.rightLevelLabel, 868, y - 6);
    ctx.textAlign = 'center';
    ctx.fillStyle = FOREGROUND;
    ctx.font = '700 17px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
    ctx.fillText(`${dim.code} ${dim.label}`, W / 2, y - 9);

    drawRoundRect(ctx, 232, y, 230, 8, 4, '#E8F0EC');
    drawRoundRect(ctx, 618, y, 230, 8, 4, '#E8F0EC');
    drawRoundRect(ctx, 232 + 230 * (1 - levelValueMap[dim.leftLevel]), y, 230 * levelValueMap[dim.leftLevel], 8, 4, levelColor[dim.leftLevel]);
    drawRoundRect(ctx, 618, y, 230 * levelValueMap[dim.rightLevel], 8, 4, levelColor[dim.rightLevel]);
  });
  ctx.restore();

  ctx.save();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = FOREGROUND_MUTED;
  ctx.font = '600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  ctx.fillText('sbti.support', 72, 1342);
  ctx.textAlign = 'right';
  ctx.fillText(`${codeA} x ${codeB}`, W - 72, 1342);
  ctx.restore();

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('canvas.toBlob returned null'));
      },
      'image/png',
    );
  });
}

export function SaveImageButton(props: SaveImageButtonProps) {
  const t = useTranslations('share');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    try {
      const blob = await generateImage(props);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sbti-${props.code}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Save image failed:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Button
      variant="default"
      size="sm"
      className="h-10 gap-1.5 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
      onClick={handleSave}
      disabled={saving}
      aria-label={saving ? t('saving') : t('saveImage')}
    >
      {saving ? (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 animate-spin text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
      <span>{saving ? t('saving') : t('saveImage')}</span>
    </Button>
  );
}

export function SaveCompatImageButton(props: SaveCompatImageButtonProps) {
  const t = useTranslations('share');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    try {
      const blob = await generateCompatImage(props);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sbti-${props.codeA}-${props.codeB}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Save compatibility image failed:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Button
      variant="default"
      size="sm"
      className="h-10 gap-1.5 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
      onClick={handleSave}
      disabled={saving}
      aria-label={saving ? t('saving') : t('saveImage')}
    >
      {saving ? (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 animate-spin text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
      <span>{saving ? t('saving') : t('saveImage')}</span>
    </Button>
  );
}
