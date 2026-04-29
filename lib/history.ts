import {TestResult, DimCode, Level} from './types';

export interface HistoryEntry {
  id: string;
  date: string;
  result: TestResult;
  userLevels: Record<DimCode, Level>;
  isDrunk: boolean;
}

const STORAGE_KEY = 'sbti-history';

export function saveResult(
  result: TestResult,
  userLevels: Record<DimCode, Level>,
  isDrunk: boolean,
): void {
  if (typeof window === 'undefined') return;
  const entry: HistoryEntry = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    result,
    userLevels,
    isDrunk,
  };
  const history = getHistory();
  const updated = [entry, ...history];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}

export function getHistory(): HistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function deleteEntry(id: string): void {
  if (typeof window === 'undefined') return;
  const updated = getHistory().filter((e) => e.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}
