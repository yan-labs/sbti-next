import {ChapterMark} from '@/components/ui/chapter-mark';
import {AXES} from '@/lib/data/games/dimensions';
import type {SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {kicker: string; heading: string; vs: string}> = {
  zh: {kicker: '测量维度', heading: '六维模型测量什么', vs: 'vs'},
  en: {kicker: 'Measurement', heading: 'What the 6 axes measure', vs: 'vs'},
  ja: {kicker: '測定軸', heading: '6軸モデルが測定するもの', vs: 'vs'},
  ko: {kicker: '측정 기준', heading: '6축이 측정하는 것', vs: 'vs'},
};

// Short axis descriptions per locale
const AXIS_DESC: Record<string, Record<SiteLocale, string>> = {
  Tempo: {
    zh: '你倾向于先蓄力磨资源，还是立刻开打快攻？',
    en: 'Do you farm and scale, or push the tempo from minute one?',
    ja: 'じっくり資源を積むか、すぐに仕掛けるか。',
    ko: '자원을 쌓을 것인가, 지금 당장 치고 들어갈 것인가.',
  },
  Nerve: {
    zh: '面对高风险博弈，你是算完再冲还是直接梭哈？',
    en: 'When the stakes spike, do you calculate or go all-in?',
    ja: 'リスクが高まったとき、計算するか全賭けするか。',
    ko: '위험이 커질 때 계산하는가, 바로 올인하는가.',
  },
  Bond: {
    zh: '你靠自己单打独斗，还是为了团队放弃最优解？',
    en: 'Do you play for yourself or reshape your game around the squad?',
    ja: '自分のプレイに徹するか、チームに合わせるか。',
    ko: '혼자 치고 나가는가, 팀을 위해 게임을 바꾸는가.',
  },
  Intel: {
    zh: '你信赖数据和 timer，还是凭手感和直觉走？',
    en: 'Stats and cooldown timers, or raw feel and instinct?',
    ja: 'データとタイマーを信じるか、感覚と直感で動くか。',
    ko: '데이터와 타이머를 믿는가, 감각과 직감으로 움직이는가.',
  },
  Flair: {
    zh: '你要求赢得好看，还是只要赢了就够？',
    en: 'Must the win look good, or does any W count?',
    ja: '勝ち方にこだわるか、とにかく勝てばいいか。',
    ko: '이기는 방식이 중요한가, 아니면 이기기만 하면 되는가.',
  },
  Mental: {
    zh: '队友 int 或游戏出岔子，你钝感如山还是红温即燃？',
    en: 'When teammates feed or things go sideways, do you hold or tilt?',
    ja: 'チームが崩れても動じないか、すぐ傾くか。',
    ko: '팀이 무너져도 버티는가, 바로 기울어지는가.',
  },
};

// Axis icon — simple geometric SVG per axis
function AxisIcon({axis}: {axis: string}) {
  const icons: Record<string, string> = {
    Tempo: 'M3 8h10M9 4l4 4-4 4',
    Nerve: 'M8 2v12M2 8h12',
    Bond: 'M5 8a3 3 0 106 0 3 3 0 00-6 0M11 8h4M1 8h4',
    Intel: 'M8 2l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z',
    Flair: 'M4 12l2-4 2 2 3-6 2 4',
    Mental: 'M4 10a4 4 0 008 0M8 6v4',
  };
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={icons[axis] ?? 'M2 8h12'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface SixAxisExplainerProps {
  locale: SiteLocale;
}

export function SixAxisExplainer({locale}: SixAxisExplainerProps) {
  const copy = COPY[locale];

  return (
    <section className="py-16 md:py-20" id="six-axes">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <ChapterMark number="03" kicker={copy.kicker} className="mb-3" />
          <h2 className="font-heading text-3xl font-black text-foreground md:text-4xl">
            {copy.heading}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AXES.map((axDef) => {
            const desc = AXIS_DESC[axDef.axis]?.[locale] ?? '';
            return (
              <div
                key={axDef.axis}
                className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
              >
                {/* Axis name + icon */}
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex size-7 items-center justify-center rounded-lg"
                    style={{
                      background: 'color-mix(in srgb, var(--game-primary, var(--primary)) 15%, transparent)',
                      color: 'var(--game-primary, var(--primary))',
                    }}
                  >
                    <AxisIcon axis={axDef.axis} />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {axDef.axis}
                  </span>
                </div>

                {/* Pole labels */}
                <div className="mb-3 flex items-center gap-2 text-xs">
                  <span
                    className="rounded px-2 py-0.5 font-mono font-bold"
                    style={{
                      background: 'color-mix(in srgb, var(--game-primary, var(--primary)) 10%, transparent)',
                      color: 'var(--game-primary, var(--primary))',
                    }}
                  >
                    {axDef.lowLetter} {axDef.lowLabel[locale]}
                  </span>
                  <span className="opacity-40">{copy.vs}</span>
                  <span
                    className="rounded px-2 py-0.5 font-mono font-bold"
                    style={{
                      background: 'color-mix(in srgb, var(--game-primary, var(--primary)) 10%, transparent)',
                      color: 'var(--game-primary, var(--primary))',
                    }}
                  >
                    {axDef.highLetter} {axDef.highLabel[locale]}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
