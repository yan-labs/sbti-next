'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useRouter, usePathname, Link} from '@/i18n/navigation';
import {ShareButtons} from '@/components/share-buttons';
import {getGameCompatibility, type GameCompatResult} from '@/lib/data/games/compat';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import {AXES, AXIS_ORDER} from '@/lib/data/games/dimensions';
import type {GameQuizV2, SiteLocale, Axis, ArchetypeV2} from '@/lib/data/games/types';

type Locale = SiteLocale;

const COPY: Record<Locale, {
  kicker: string;
  title: string;
  dek: string;
  pickA: string;
  pickB: string;
  pickPlaceholder: string;
  emptyHint: string;
  emptyCount: string;
  scoreLabel: string;
  archetypeLabel: string;
  compareTitle: string;
  match: string;
  miss: string;
  analysisTitle: (a: string, b: string) => string;
  retakeCta: string;
  retakeHref: (game: string) => string;
  archetypeDescs: Record<string, {label: string; desc: string}>;
}> = {
  zh: {
    kicker: 'COMPATIBILITY',
    title: '玩家原型相性',
    dek: '从 8 个原型里挑两个，看看你们在 6 维上有多少能对得上。',
    pickA: '选 A 方',
    pickB: '选 B 方',
    pickPlaceholder: '— 选一个原型 —',
    emptyHint: '选两个原型，看相性分数',
    emptyCount: '8 个原型 · 28 种组合',
    scoreLabel: '相性指数',
    archetypeLabel: '组合原型',
    compareTitle: '六维对照',
    match: '一致',
    miss: '相反',
    analysisTitle: (a, b) => `${a} 和 ${b} 的相处说明`,
    retakeCta: '测一下我自己是哪种',
    retakeHref: (game) => `/games/${game}`,
    archetypeDescs: {
      fated: {label: '天选 CP', desc: '6 个轴全部对得上 —— 灵魂双胞胎级。两个人会以同样的节奏开团、同样的方式甩锅、同样的情绪曲线 tilt 一晚上。'},
      sync: {label: '高度合拍', desc: '5/6 重合。会自然分工、互补不冲突，是开黑时最稳的一对。偶尔在那一个不同的维度上小拌嘴，反而让游戏不无聊。'},
      spicy: {label: '微辣组合', desc: '4/6 重合。共同节奏盖过了差异，但那 2 个不同会偶尔擦出火花。可能某局团战之后要冷战 30 秒，下一局又满血复活。'},
      plastic: {label: '塑料情谊', desc: '一半一半。打得来不打得不来全看版本和心情。建议每周开黑频率不超过 3 次，免得感情打没。'},
      awkward: {label: '尴尬配对', desc: '只有 2 个维度对得上。会经常出现"我以为你会"和"我以为你不会"。能赢就奇迹，输了就互相责怪。'},
      disaster: {label: '灾难现场', desc: '几乎完全相反。开局怎么打都不对，麦克风一开就吵架。除非你们想验证一下游戏是否能毁掉一段关系，否则别一起排位。'},
    },
  },
  en: {
    kicker: 'COMPATIBILITY',
    title: 'Archetype Compatibility',
    dek: 'Pick two of the 8 archetypes and see how many of the 6 axes they actually share.',
    pickA: 'Pick A',
    pickB: 'Pick B',
    pickPlaceholder: '— select an archetype —',
    emptyHint: 'Pick two archetypes to reveal compatibility',
    emptyCount: '8 archetypes · 28 combinations',
    scoreLabel: 'COMPAT',
    archetypeLabel: 'Pairing',
    compareTitle: '6-Axis Compare',
    match: 'match',
    miss: 'miss',
    analysisTitle: (a, b) => `${a} & ${b} compatibility notes`,
    retakeCta: 'Find out my own archetype',
    retakeHref: (game) => `/games/${game}`,
    archetypeDescs: {
      fated: {label: 'Fated Pair', desc: '6/6 axes align — soul twin tier. Same rhythm engaging fights, same way of blaming the jungler, same tilt curve.'},
      sync: {label: 'In Sync', desc: '5/6 overlap. Natural division of labor; one axis of difference keeps it interesting but never breaks the duo.'},
      spicy: {label: 'Spicy Combo', desc: '4/6 overlap. Shared rhythm covers the cracks, but the 2 differences spark occasional drama. Cold-shoulder for a round, then back to normal.'},
      plastic: {label: 'Plastic Friendship', desc: 'Half and half. Works some days, doesn\'t others. Limit your duo queues to 3x per week to preserve the relationship.'},
      awkward: {label: 'Awkward Match', desc: 'Only 2 axes overlap. Constant "I thought you would" / "I thought you wouldn\'t". Wins feel like miracles, losses get personal.'},
      disaster: {label: 'Disaster Zone', desc: 'Almost fully opposite. Nothing lines up. Mic on = argument. Don\'t duo unless you want to test whether the game can ruin a friendship.'},
    },
  },
  ja: {
    kicker: 'COMPATIBILITY',
    title: 'プレイヤー相性診断',
    dek: '8タイプから2つ選ぶと、6軸でどれくらい噛み合うかが出ます。',
    pickA: 'Aを選ぶ',
    pickB: 'Bを選ぶ',
    pickPlaceholder: '— タイプを選択 —',
    emptyHint: '2つのタイプを選ぶと相性が出ます',
    emptyCount: '8タイプ · 28通りの組み合わせ',
    scoreLabel: '相性',
    archetypeLabel: 'タイプ',
    compareTitle: '6軸比較',
    match: '一致',
    miss: '逆',
    analysisTitle: (a, b) => `${a} と ${b} の相性メモ`,
    retakeCta: '自分のタイプを診断する',
    retakeHref: (game) => `/games/${game}`,
    archetypeDescs: {
      fated: {label: '運命のペア', desc: '6軸すべて一致。魂の双子レベル。同じテンポで仕掛け、同じ理由でムカつき、同じ時間に tilt します。'},
      sync: {label: '抜群の相性', desc: '5/6一致。自然と役割が分かれて、1軸の違いがちょうどいいスパイス。'},
      spicy: {label: 'スパイシー', desc: '4/6一致。共通のリズムが多いけど、残り2軸で偶に火花。1ラウンド冷戦→次でリセット。'},
      plastic: {label: 'プラスチック友情', desc: '半々。日による。週3回までのデュオに留めると関係が長持ち。'},
      awkward: {label: '気まずい組み合わせ', desc: '一致は2軸だけ。「やってくれると思った」「やらないと思った」の繰り返し。勝てば奇跡、負けると険悪。'},
      disaster: {label: '災害級', desc: 'ほぼ正反対。マイクONで口論開始。友情を試したい時以外は組まないこと。'},
    },
  },
  ko: {
    kicker: 'COMPATIBILITY',
    title: '플레이어 궁합',
    dek: '8가지 유형 중 둘을 골라, 6축에서 얼마나 맞는지 확인하세요.',
    pickA: 'A 선택',
    pickB: 'B 선택',
    pickPlaceholder: '— 유형 선택 —',
    emptyHint: '두 유형을 선택하면 궁합이 나옵니다',
    emptyCount: '8가지 유형 · 28가지 조합',
    scoreLabel: '궁합',
    archetypeLabel: '유형',
    compareTitle: '6축 비교',
    match: '일치',
    miss: '반대',
    analysisTitle: (a, b) => `${a}와 ${b}의 궁합 메모`,
    retakeCta: '내 유형도 알아보기',
    retakeHref: (game) => `/games/${game}`,
    archetypeDescs: {
      fated: {label: '운명의 페어', desc: '6축 모두 일치 — 영혼의 쌍둥이급. 같은 템포로 싸움 걸고, 같은 이유로 멘붕하고, 같은 시간에 틸트.'},
      sync: {label: '환상의 짝꿍', desc: '5/6 일치. 역할이 자연스럽게 나뉘고, 1축의 차이가 양념이 됩니다.'},
      spicy: {label: '스파이시 조합', desc: '4/6 일치. 공통 리듬이 크지만 나머지 2축에서 가끔 불꽃. 한 판 냉전 후 다음 판 부활.'},
      plastic: {label: '플라스틱 우정', desc: '반반. 컨디션 따라 다름. 주 3회 듀오까지가 관계 유지의 한계입니다.'},
      awkward: {label: '어색한 매치', desc: '2축만 일치. "해 줄 줄 알았는데" "안 할 줄 알았는데" 반복. 이기면 기적, 지면 침묵.'},
      disaster: {label: '재난 현장', desc: '거의 정반대. 뭘 해도 안 맞음. 마이크 켜면 싸움. 우정 시험하려는 게 아니면 듀오 금지.'},
    },
  },
};

function ArchetypeSelector({
  game,
  label,
  value,
  onChange,
  exclude,
  locale,
}: {
  game: GameQuizV2;
  label: string;
  value: string;
  onChange: (v: string) => void;
  exclude?: string;
  locale: Locale;
}) {
  const copy = COPY[locale];
  const selected = game.archetypes.find((a) => a.slug === value);
  const selectedArt = selected ? getArchetypeArt(game.slug, selected.slug) : undefined;

  return (
    <div className="flex flex-col gap-3">
      <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-border bg-card px-4 py-3.5 pr-10 font-heading text-base font-medium text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          style={{fontVariationSettings: '"opsz" 144, "wght" 600'}}
        >
          <option value="">{copy.pickPlaceholder}</option>
          {game.archetypes
            .filter((a) => a.slug !== exclude)
            .map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name[locale]}
              </option>
            ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {selected && (
        <div className="flex items-center gap-3 border border-border bg-muted px-3 py-2.5">
          {selectedArt && (
            <Image
              src={selectedArt}
              alt={selected.name[locale]}
              width={40}
              height={40}
              className="size-10 border border-border object-contain"
              unoptimized
            />
          )}
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              {selected.slug.replace(/-/g, ' ')}
            </p>
            <p
              className="truncate font-heading text-sm font-bold tracking-tight text-foreground"
              style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
            >
              {selected.name[locale]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function AnimatedScore({target}: {target: number}) {
  // Render the final score statically. (We tried a rAF count-up animation but
  // the parent re-renders rapidly enough to keep canceling rAF mid-flight, so
  // the displayed value stayed stuck at 0. Plain render avoids the race.)
  return <span>{target}</span>;
}

export function GameCompatPage({
  game,
  locale,
  initialA,
  initialB,
}: {
  game: GameQuizV2;
  locale: Locale;
  initialA?: string;
  initialB?: string;
}) {
  const copy = COPY[locale];
  const router = useRouter();
  const pathname = usePathname();

  const [slugA, setSlugA] = useState(initialA ?? '');
  const [slugB, setSlugB] = useState(initialB ?? '');

  // Push URL when both archetypes selected (mirror SBTI compat behavior)
  useEffect(() => {
    if (slugA && slugB) {
      const url = `/games/${game.slug}/compat/${encodeURIComponent(slugA)}/${encodeURIComponent(slugB)}`;
      if (pathname !== url) {
        router.replace(url, {scroll: false});
      }
    }
  }, [slugA, slugB, router, pathname, game.slug]);

  const bothSelected = Boolean(slugA && slugB);
  const compat = bothSelected ? getGameCompatibility(game, slugA, slugB) : null;

  const a = game.archetypes.find((x) => x.slug === slugA);
  const b = game.archetypes.find((x) => x.slug === slugB);
  const artA = a ? getArchetypeArt(game.slug, a.slug) : undefined;
  const artB = b ? getArchetypeArt(game.slug, b.slug) : undefined;

  const archetypeMeta = compat ? copy.archetypeDescs[compat.archetypeKey] : undefined;
  const shareTitle =
    bothSelected && compat && a && b
      ? `${a.name[locale]} × ${b.name[locale]} — ${compat.score}%`
      : copy.title;
  const shareDescription =
    bothSelected && compat && archetypeMeta
      ? `${archetypeMeta.label}: ${archetypeMeta.desc.slice(0, 80)}`
      : copy.dek;
  const sharePath = bothSelected
    ? `/games/${game.slug}/compat/${encodeURIComponent(slugA)}/${encodeURIComponent(slugB)}`
    : `/games/${game.slug}/compat`;

  return (
    <main className="bg-background" data-game={game.slug}>
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            SBTI
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <Link href={`/games/${game.slug}`} className="transition-colors hover:text-foreground">
            {game.title[locale]}
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground">{copy.kicker}</span>
        </nav>

        {/* Editorial section head */}
        <header className="mb-12 grid grid-cols-1 gap-3 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-6 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {copy.kicker}
          </span>
          <h1
            className="font-heading text-foreground md:col-span-1 md:col-start-1 md:row-start-2"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              maxWidth: '20ch',
            }}
          >
            {game.title[locale]}{' '}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {copy.title}
            </em>
          </h1>
          <p
            className="mt-3 max-w-[42ch] text-[15px] leading-[1.6] md:col-start-1 md:col-end-3 md:row-start-3 md:text-base"
            style={{color: 'var(--ink-soft, var(--foreground))'}}
          >
            {copy.dek}
          </p>
        </header>

        {/* Selector row */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-end">
          <ArchetypeSelector
            game={game}
            label={copy.pickA}
            value={slugA}
            onChange={setSlugA}
            exclude={slugB}
            locale={locale}
          />
          <div className="flex items-center justify-center py-2 md:pb-4">
            <span
              className="select-none font-heading italic text-3xl md:text-4xl text-primary"
              style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 700'}}
            >
              ×
            </span>
          </div>
          <ArchetypeSelector
            game={game}
            label={copy.pickB}
            value={slugB}
            onChange={setSlugB}
            exclude={slugA}
            locale={locale}
          />
        </div>

        {/* Empty state */}
        {!bothSelected && (
          <div className="flex flex-col items-center gap-4 border-t border-b border-border py-20 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Awaiting input
            </span>
            <p
              className="max-w-[28ch] font-heading text-2xl italic text-foreground md:text-3xl"
              style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
            >
              {copy.emptyHint}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {copy.emptyCount}
            </p>
          </div>
        )}

        {/* Result */}
        {bothSelected && compat && a && b && archetypeMeta && (
          <CompatResultCard
            game={game}
            a={a}
            b={b}
            artA={artA}
            artB={artB}
            compat={compat}
            archetypeMeta={archetypeMeta}
            locale={locale}
            copy={copy}
          />
        )}

        {/* Actions */}
        <div className="mt-12 flex flex-col items-start gap-6 border-t border-border pt-10">
          <Link
            href={copy.retakeHref(game.slug)}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-semibold text-background transition-colors hover:bg-primary"
          >
            {copy.retakeCta}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          {bothSelected && (
            <ShareButtons url={sharePath} title={shareTitle} description={shareDescription} />
          )}
        </div>
      </div>
    </main>
  );
}

// ─── Result card ─────────────────────────────────────────────────────────────

function CompatResultCard({
  game,
  a,
  b,
  artA,
  artB,
  compat,
  archetypeMeta,
  locale,
  copy,
}: {
  game: GameQuizV2;
  a: ArchetypeV2;
  b: ArchetypeV2;
  artA?: string;
  artB?: string;
  compat: GameCompatResult;
  archetypeMeta: {label: string; desc: string};
  locale: Locale;
  copy: typeof COPY['zh'];
}) {
  return (
    <>
      <div className="border-2 border-foreground bg-card p-6 md:p-10">
        {/* Pair row */}
        <div className="mb-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
          <ArchetypeBlock archetype={a!} art={artA} locale={locale} game={game} />

          {/* Score */}
          <div className="flex min-w-[5rem] flex-col items-center gap-2 md:min-w-32">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {copy.scoreLabel}
            </span>
            <div
              className="font-heading text-5xl font-bold leading-none tracking-tight tabular-nums text-foreground md:text-7xl"
              style={{fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800'}}
            >
              <AnimatedScore target={compat.score} />
              <span className="text-primary">%</span>
            </div>
            <span className="mt-1 text-2xl md:text-3xl" aria-hidden>
              {compat.emoji}
            </span>
          </div>

          <ArchetypeBlock archetype={b!} art={artB} locale={locale} game={game} />
        </div>

        {/* Score bar */}
        <div className="relative mb-8 h-[2px] overflow-hidden bg-border">
          <div
            className="h-full bg-primary transition-all duration-700 ease-out"
            style={{width: `${compat.score}%`}}
          />
        </div>

        {/* Archetype label */}
        <div className="mb-2 text-center">
          <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {copy.archetypeLabel}
          </span>
          <h2
            className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            style={{fontVariationSettings: '"opsz" 144, "wght" 800'}}
          >
            {archetypeMeta.label}
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[15px] leading-[1.65] text-muted-foreground md:text-base">
            {archetypeMeta.desc}
          </p>
        </div>

        {/* 6-axis polarity overlap */}
        <div className="mt-10 border-t border-border pt-8">
          <div className="mb-6 flex items-center justify-between">
            <span
              className="font-heading text-sm font-bold tracking-tight text-foreground"
              style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
            >
              {a!.name[locale]}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {copy.compareTitle} · {compat.matches}/6
            </span>
            <span
              className="font-heading text-sm font-bold tracking-tight text-foreground"
              style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
            >
              {b!.name[locale]}
            </span>
          </div>
          <div className="space-y-3">
            {AXIS_ORDER.map((axis: Axis, i) => {
              const def = AXES[i]!;
              const matches = compat.axisMatches[axis];
              const polA = a!.polarityPattern[axis];
              const polB = b!.polarityPattern[axis];
              const labelA = polA === 'high' ? def.highLabel[locale] : def.lowLabel[locale];
              const labelB = polB === 'high' ? def.highLabel[locale] : def.lowLabel[locale];
              const letterA = polA === 'high' ? def.highLetter : def.lowLetter;
              const letterB = polB === 'high' ? def.highLetter : def.lowLetter;
              return (
                <div
                  key={axis}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-border pt-3"
                >
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="truncate text-[13px] text-foreground">{labelA}</span>
                    <span className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                      {letterA}
                    </span>
                  </div>
                  <div
                    className={`flex flex-col items-center px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
                      matches ? 'text-primary' : 'text-muted-foreground/70'
                    }`}
                    title={axis}
                  >
                    <span>{axis}</span>
                    <span className="mt-0.5">{matches ? `· ${copy.match} ·` : `· ${copy.miss} ·`}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                      {letterB}
                    </span>
                    <span className="truncate text-[13px] text-foreground">{labelB}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Analysis paragraph */}
      <section className="mt-10 border-t border-border pt-10">
        <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Analysis
        </span>
        <h2
          className="mb-6 font-heading text-2xl font-bold leading-[1.15] tracking-tight text-foreground md:text-3xl"
          style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
        >
          {copy.analysisTitle(a!.name[locale], b!.name[locale])}
        </h2>
        <div className="prose-custom max-w-[68ch]">
          <p>{archetypeMeta.desc}</p>
          {a!.oneLiner?.[locale] && (
            <p>
              <em>{a!.name[locale]}</em>: &ldquo;{a!.oneLiner[locale]}&rdquo;
            </p>
          )}
          {b!.oneLiner?.[locale] && (
            <p>
              <em>{b!.name[locale]}</em>: &ldquo;{b!.oneLiner[locale]}&rdquo;
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function ArchetypeBlock({
  archetype,
  art,
  locale,
  game,
}: {
  archetype: ArchetypeV2;
  art?: string;
  locale: Locale;
  game: GameQuizV2;
}) {
  return (
    <Link
      href={`/games/${game.slug}/result/${archetype.slug}`}
      className="group flex flex-col items-center gap-3 text-center transition-opacity hover:opacity-90"
    >
      {art && (
        <div className="overflow-hidden border border-border bg-muted">
          <Image
            src={art}
            alt={archetype.name[locale]}
            width={240}
            height={240}
            className="h-24 w-24 object-cover transition-transform group-hover:scale-105 md:h-32 md:w-32"
            unoptimized
          />
        </div>
      )}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
          {archetype.slug.replace(/-/g, ' ')}
        </p>
        <p
          className="mt-1 font-heading text-lg font-bold tracking-tight transition-colors group-hover:text-primary md:text-xl"
          style={{fontVariationSettings: '"opsz" 144, "wght" 800'}}
        >
          {archetype.name[locale]}
        </p>
      </div>
    </Link>
  );
}
