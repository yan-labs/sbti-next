'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';

interface SaveImageButtonProps {
  code: string;
  name: string;
  description: string;
  locale: string;
}

// Brand colors (hex, for canvas use)
const PRIMARY = '#10B981';   // emerald
const ACCENT = '#8B5CF6';    // violet
const SECONDARY = '#F59E0B'; // amber

// Wraps text onto canvas, returns number of lines drawn
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): number {
  const words = text.split(' ');
  let line = '';
  let lineCount = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, y + lineCount * lineHeight);
      line = words[i] + ' ';
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

async function generateImage(code: string, name: string, description: string): Promise<Blob> {
  const W = 1080;
  const H = 1920;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // --- Background: diagonal gradient primary → accent → secondary ---
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, PRIMARY);
  grad.addColorStop(0.5, ACCENT);
  grad.addColorStop(1, SECONDARY);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // --- Subtle dark overlay for readability ---
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(0, 0, W, H);

  // --- Decorative circles (background texture) ---
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(W * 0.85, H * 0.12, 320, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W * 0.1, H * 0.82, 240, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // --- Type code (huge) ---
  const codeSize = 148;
  ctx.save();
  ctx.font = `900 ${codeSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  // Shadow for depth
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 24;
  ctx.fillText(code, W / 2, 130);
  ctx.restore();

  // --- Type name (large) ---
  const nameSize = 64;
  ctx.save();
  ctx.font = `700 ${nameSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.90)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 16;
  ctx.fillText(name, W / 2, 300);
  ctx.restore();

  // --- Type image (centered, rounded corners) ---
  const imgSize = 600;
  const imgX = (W - imgSize) / 2;
  const imgY = 400;
  const imgRadius = 56;

  // Load the type image
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = reject;
    el.src = `/types/${code}.png`;
  });

  ctx.save();
  clipRoundedRect(ctx, imgX, imgY, imgSize, imgSize, imgRadius);
  ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
  ctx.restore();

  // --- Thin border around image ---
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.30)';
  ctx.lineWidth = 4;
  const borderPath = new Path2D();
  borderPath.moveTo(imgX + imgRadius, imgY);
  borderPath.lineTo(imgX + imgSize - imgRadius, imgY);
  borderPath.arcTo(imgX + imgSize, imgY, imgX + imgSize, imgY + imgRadius, imgRadius);
  borderPath.lineTo(imgX + imgSize, imgY + imgSize - imgRadius);
  borderPath.arcTo(imgX + imgSize, imgY + imgSize, imgX + imgSize - imgRadius, imgY + imgSize, imgRadius);
  borderPath.lineTo(imgX + imgRadius, imgY + imgSize);
  borderPath.arcTo(imgX, imgY + imgSize, imgX, imgY + imgSize - imgRadius, imgRadius);
  borderPath.lineTo(imgX, imgY + imgRadius);
  borderPath.arcTo(imgX, imgY, imgX + imgRadius, imgY, imgRadius);
  borderPath.closePath();
  ctx.stroke(borderPath);
  ctx.restore();

  // --- Divider line ---
  const dividerY = imgY + imgSize + 64;
  ctx.save();
  const lineGrad = ctx.createLinearGradient(W * 0.15, dividerY, W * 0.85, dividerY);
  lineGrad.addColorStop(0, 'rgba(255,255,255,0)');
  lineGrad.addColorStop(0.5, 'rgba(255,255,255,0.5)');
  lineGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W * 0.15, dividerY);
  ctx.lineTo(W * 0.85, dividerY);
  ctx.stroke();
  ctx.restore();

  // --- Description text ---
  const descSize = 38;
  const descY = dividerY + 60;
  const descMaxWidth = W * 0.72;
  const descX = W / 2;
  const descLineHeight = 60;

  ctx.save();
  ctx.font = `400 ${descSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.82)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  wrapText(ctx, description, descX, descY, descMaxWidth, descLineHeight);
  ctx.restore();

  // --- Footer: sbti.support ---
  ctx.save();
  ctx.font = `500 26px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText('sbti.support', W - 56, H - 56);
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

export function SaveImageButton({code, name, description, locale: _locale}: SaveImageButtonProps) {
  const t = useTranslations('share');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    try {
      const blob = await generateImage(code, name, description);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sbti-${code}.png`;
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
      variant="outline"
      size="sm"
      className="rounded-full gap-1.5"
      onClick={handleSave}
      disabled={saving}
      aria-label={saving ? t('saving') : t('saveImage')}
    >
      {saving ? (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 animate-spin"
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
          className="h-3.5 w-3.5"
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
      <span className="hidden sm:inline">{saving ? t('saving') : t('saveImage')}</span>
    </Button>
  );
}
