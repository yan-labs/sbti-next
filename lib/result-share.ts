import {DIMENSION_ORDER, type DimCode, type Level} from '@/lib/types';

const VALID_LEVELS = new Set<Level>(['L', 'M', 'H']);
const MODE_TO_CODE = {normal: 'n', drunk: 'd', fallback: 'f'} as const;
const CODE_TO_MODE = {n: 'normal', d: 'drunk', f: 'fallback'} as const;

export function encodeResultLevels(levels: Record<DimCode, Level>) {
  return DIMENSION_ORDER.map(dim => levels[dim]).join('');
}

export function decodeResultLevels(encoded?: string | null): Record<DimCode, Level> | null {
  if (!encoded || encoded.length !== DIMENSION_ORDER.length) return null;
  const levels = encoded.split('');
  if (!levels.every(level => VALID_LEVELS.has(level as Level))) return null;
  return Object.fromEntries(
    DIMENSION_ORDER.map((dim, i) => [dim, levels[i] as Level]),
  ) as Record<DimCode, Level>;
}

export function isResultMode(value?: string | null): value is 'normal' | 'drunk' | 'fallback' {
  return value === 'normal' || value === 'drunk' || value === 'fallback';
}

export function encodeResultState(levels: Record<DimCode, Level>, mode: 'normal' | 'drunk' | 'fallback') {
  return `${MODE_TO_CODE[mode]}${encodeResultLevels(levels)}`;
}

export function decodeResultState(encoded?: string | null) {
  if (!encoded || encoded.length !== DIMENSION_ORDER.length + 1) return null;
  const mode = CODE_TO_MODE[encoded[0] as keyof typeof CODE_TO_MODE];
  if (!mode) return null;
  const levels = decodeResultLevels(encoded.slice(1));
  if (!levels) return null;
  return {mode, levels};
}
