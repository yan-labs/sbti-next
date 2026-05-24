'use client';

import {useState} from 'react';
import {AXES, AXIS_ORDER} from '@/lib/data/games/dimensions';
import type {Axis, SiteLocale} from '@/lib/data/games/types';

/* ──────────────────────────────────────────────────────────────────────────
   Canvas-based downloadable share card for game archetype results.

   Renders a 1080×1920 portrait PNG matching the editorial design language
   (bone paper, ink, vermillion). Drawn on demand at download time so we
   pay the cost only when the user actually clicks save.
   ────────────────────────────────────────────────────────────────────── */

// Tokens — match globals.css v2 palette
const PAPER = '#FAF7EF';
const PAPER_DEEP = '#EBE5D3';
const INK = '#161513';
const INK_MUTED = '#6B655A';
const VERMILLION = '#E04E2B';
const BORDER = '#DDD7C7';

const W = 1080;
const H = 1920;
const PAD = 64;

const HEADER_LABEL: Record<SiteLocale, (g: string) => string> = {
  zh: (g) => `SBTI · 玩家测试 · ${g}`,
  en: (g) => `SBTI · PLAYER QUIZ · ${g}`,
  ja: (g) => `SBTI · プレイヤー診断 · ${g}`,
  ko: (g) => `SBTI · 플레이어 테스트 · ${g}`,
};
const PROFILE_LABEL: Record<SiteLocale, string> = {
  zh: '六维画像 · 6-AXIS PROFILE',
  en: '6-AXIS PROFILE',
  ja: '6軸プロフィール · PROFILE',
  ko: '6축 프로필 · PROFILE',
};
const CODE_LABEL: Record<SiteLocale, string> = {
  zh: '玩家身份码',
  en: 'PLAYER CODE',
  ja: 'プレイヤーコード',
  ko: '플레이어 코드',
};

const FONT_SERIF = '"Fraunces", "Songti SC", "Noto Serif SC", Georgia, serif';
const FONT_MONO = '"JetBrains Mono", ui-monospace, "SF Mono", monospace';

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}

interface GenerateArgs {
  gameTitle: string;
  archetypeName: string;
  archetypeSlug: string;
  polarityCode: string;
  oneLiner: string;
  scores: Record<Axis, number>;
  artUrl?: string;
  locale: SiteLocale;
}

async function generateArchetypeImage({
  gameTitle,
  archetypeName,
  archetypeSlug,
  polarityCode,
  oneLiner,
  scores,
  artUrl,
  locale,
}: GenerateArgs): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas context unavailable');

  // ─── Background ─────────────────────────────────────────────────────
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);

  // Top rule
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, W, 6);

  // ─── Header (mono) ──────────────────────────────────────────────────
  ctx.fillStyle = INK_MUTED;
  ctx.font = `500 22px ${FONT_MONO}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.letterSpacing = '4px' as unknown as never; // Not all browsers support; ignored fallback
  ctx.fillText(HEADER_LABEL[locale](gameTitle).toUpperCase(), PAD, 56);

  // SBTI wordmark top-right
  ctx.fillStyle = INK;
  ctx.font = `800 28px ${FONT_SERIF}`;
  ctx.textAlign = 'right';
  ctx.fillText('SBTI', W - PAD, 56);
  ctx.fillStyle = VERMILLION;
  const sbtiWidth = ctx.measureText('SBTI').width;
  ctx.fillText('.', W - PAD - 0, 56);
  void sbtiWidth;

  // ─── Portrait box ──────────────────────────────────────────────────
  const portraitTop = 144;
  const portraitSize = 720;
  const portraitX = (W - portraitSize) / 2;

  ctx.fillStyle = PAPER_DEEP;
  ctx.fillRect(portraitX, portraitTop, portraitSize, portraitSize);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 2;
  ctx.strokeRect(portraitX, portraitTop, portraitSize, portraitSize);

  if (artUrl) {
    try {
      const img = await loadImage(artUrl);
      ctx.save();
      ctx.beginPath();
      ctx.rect(portraitX, portraitTop, portraitSize, portraitSize);
      ctx.clip();
      ctx.drawImage(img, portraitX, portraitTop, portraitSize, portraitSize);
      ctx.restore();
      ctx.strokeStyle = INK;
      ctx.lineWidth = 2;
      ctx.strokeRect(portraitX, portraitTop, portraitSize, portraitSize);
    } catch {
      // ignore; portrait stays as paper-deep placeholder
    }
  }

  // ─── Title row ──────────────────────────────────────────────────────
  let cursorY = portraitTop + portraitSize + 56;

  // Archetype name (big Fraunces) — auto-shrink to fit
  let titleFontSize = 96;
  ctx.fillStyle = INK;
  ctx.textAlign = 'left';
  ctx.font = `800 ${titleFontSize}px ${FONT_SERIF}`;
  const maxTitleWidth = W - PAD * 2 - 28;
  const titleText = archetypeName;
  while (ctx.measureText(titleText).width > maxTitleWidth && titleFontSize > 56) {
    titleFontSize -= 4;
    ctx.font = `800 ${titleFontSize}px ${FONT_SERIF}`;
  }
  ctx.fillText(titleText, PAD, cursorY);
  // Trailing vermillion period
  const titleW = ctx.measureText(titleText).width;
  ctx.fillStyle = VERMILLION;
  ctx.fillText('.', PAD + titleW, cursorY);

  cursorY += titleFontSize + 8;

  // EN slug (mono)
  ctx.fillStyle = INK_MUTED;
  ctx.font = `500 24px ${FONT_MONO}`;
  ctx.fillText(archetypeSlug.toUpperCase().replace(/-/g, ' '), PAD, cursorY);

  cursorY += 50;

  // Polarity code badge
  const codeText = polarityCode;
  ctx.font = `700 28px ${FONT_MONO}`;
  const codeWidth = ctx.measureText(codeText).width;
  const codePillW = codeWidth + 44;
  const codePillH = 56;
  // Pill
  ctx.fillStyle = INK;
  drawRoundedRect(ctx, PAD, cursorY, codePillW, codePillH, codePillH / 2);
  ctx.fill();
  ctx.fillStyle = PAPER;
  ctx.textBaseline = 'middle';
  ctx.fillText(codeText, PAD + 22, cursorY + codePillH / 2 + 2);
  // Label after
  ctx.fillStyle = INK_MUTED;
  ctx.font = `500 20px ${FONT_MONO}`;
  ctx.fillText(`· ${CODE_LABEL[locale]}`, PAD + codePillW + 16, cursorY + codePillH / 2 + 2);
  ctx.textBaseline = 'top';

  cursorY += codePillH + 44;

  // Italic oneLiner
  if (oneLiner) {
    ctx.fillStyle = INK;
    ctx.font = `italic 500 30px ${FONT_SERIF}`;
    const lines = wrapText(ctx, `“${oneLiner}”`, W - PAD * 2, 30);
    lines.slice(0, 3).forEach((line) => {
      ctx.fillText(line, PAD, cursorY);
      cursorY += 44;
    });
  }

  cursorY += 24;

  // ─── 6-axis profile ────────────────────────────────────────────────
  ctx.fillStyle = INK;
  ctx.fillRect(PAD, cursorY, W - PAD * 2, 2);
  cursorY += 20;
  ctx.fillStyle = VERMILLION;
  ctx.font = `500 22px ${FONT_MONO}`;
  ctx.fillText(PROFILE_LABEL[locale].toUpperCase(), PAD, cursorY);
  cursorY += 44;

  AXIS_ORDER.forEach((axis: Axis, i) => {
    const def = AXES[i]!;
    const score = scores[axis] ?? 50;
    const polarity = score > 50 ? 'high' : 'low';
    const label =
      polarity === 'high' ? def.highLabel[locale] : def.lowLabel[locale];
    const letter = polarity === 'high' ? def.highLetter : def.lowLetter;
    const rowH = 70;

    // Axis name (Fraunces)
    ctx.fillStyle = INK;
    ctx.font = `700 28px ${FONT_SERIF}`;
    ctx.textAlign = 'left';
    ctx.fillText(label, PAD, cursorY);

    // Letter (mono small) and score on right
    ctx.font = `700 24px ${FONT_MONO}`;
    ctx.fillStyle = VERMILLION;
    ctx.textAlign = 'right';
    ctx.fillText(`${letter} · ${score}`, W - PAD, cursorY);

    // Bar
    const barY = cursorY + 38;
    const barW = W - PAD * 2;
    ctx.fillStyle = BORDER;
    ctx.fillRect(PAD, barY, barW, 6);
    ctx.fillStyle = polarity === 'high' ? VERMILLION : INK;
    ctx.fillRect(PAD, barY, (barW * score) / 100, 6);

    cursorY += rowH;
  });

  // ─── Footer ────────────────────────────────────────────────────────
  const footerY = H - 80;
  ctx.fillStyle = INK;
  ctx.fillRect(0, H - 6, W, 6);

  ctx.fillStyle = INK_MUTED;
  ctx.font = `500 22px ${FONT_MONO}`;
  ctx.textAlign = 'left';
  ctx.fillText('SBTI.SUPPORT', PAD, footerY);
  ctx.textAlign = 'right';
  ctx.fillText('PLAYER · ONE-OF-ONE', W - PAD, footerY);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('canvas.toBlob returned null'));
      },
      'image/png',
      0.95,
    );
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  _fontSize: number,
): string[] {
  // For CJK, prefer character-by-character wrapping. For Latin, by word.
  void _fontSize;
  const hasCJK = /[一-鿿぀-ヿ가-힯]/.test(text);
  const units = hasCJK ? text.split('') : text.split(/(\s+)/);
  const lines: string[] = [];
  let current = '';
  for (const unit of units) {
    const test = current + unit;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = unit.trim() ? unit : '';
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// ─── Button ──────────────────────────────────────────────────────────

const BTN_COPY: Record<SiteLocale, {save: string; saving: string}> = {
  zh: {save: '保存图片', saving: '生成中…'},
  en: {save: 'Save image', saving: 'Generating…'},
  ja: {save: '画像を保存', saving: '生成中…'},
  ko: {save: '이미지 저장', saving: '생성 중…'},
};

export interface SaveGameArchetypeImageButtonProps extends GenerateArgs {
  gameSlug: string;
}

export function SaveGameArchetypeImageButton(props: SaveGameArchetypeImageButtonProps) {
  const [saving, setSaving] = useState(false);
  const t = BTN_COPY[props.locale];

  async function handleClick() {
    if (saving) return;
    setSaving(true);
    try {
      const blob = await generateArchetypeImage(props);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sbti-${props.gameSlug}-${props.archetypeSlug}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Image generation failed:', err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={saving}
      className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-sans text-sm font-bold text-primary-foreground shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
    >
      {saving ? (
        <svg
          viewBox="0 0 24 24"
          className="size-4 animate-spin"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )}
      <span>{saving ? t.saving : t.save}</span>
    </button>
  );
}
