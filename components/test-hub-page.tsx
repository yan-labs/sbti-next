import Image from 'next/image';
import {ArrowRight, Gamepad2, Sparkles, Trophy} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {ALL_GAME_QUIZZES, localize, type SiteLocale} from '@/lib/data/game-quizzes';
import {TYPE_IMAGES} from '@/lib/data/personalities';

const HUB_COPY: Record<
  SiteLocale,
  {
    eyebrow: string;
    title: string;
    titleAccent: string;
    deck: string;
    sbtiTitle: string;
    sbtiDeck: string;
    sbtiMeta: string;
    start: string;
    gamesTitle: string;
    gamesDeck: string;
    stats: {value: string; label: string}[];
  }
> = {
  zh: {
    eyebrow: '人格测试目录',
    title: '从 SBTI 到游戏玩家身份，',
    titleAccent: '都在这里开测。',
    deck: '这里会从一个恶搞 MBTI 的人格测试，扩展成覆盖热门游戏、社交梗和玩家圈层的趣味测试站。',
    sbtiTitle: 'SBTI 人格测试',
    sbtiDeck: '30 道题测出你的 27 种荒诞人格之一。现有内容保留为第一个正式测试入口。',
    sbtiMeta: '27 种结果 / 15 维评分 / 适合截图分享',
    start: '开始测试',
    gamesTitle: '首批游戏测试',
    gamesDeck: '优先覆盖韩国、全球 PC、移动 MOBA 和直播热度都有信号的游戏。',
    stats: [
      {value: '8', label: '首发游戏 route'},
      {value: '4', label: '站点语言'},
      {value: '10', label: '每个游戏题目'},
    ],
  },
  en: {
    eyebrow: 'Personality Test Hub',
    title: 'From SBTI to gamer identities,',
    titleAccent: 'pick your next diagnosis.',
    deck: 'SBTI is becoming a quiz hub for satirical personality tests, hot game communities, and player-culture archetypes.',
    sbtiTitle: 'SBTI Personality Test',
    sbtiDeck: 'Answer 30 questions and get one of 27 absurd personality types. The original test remains the first flagship entry.',
    sbtiMeta: '27 results / 15 dimensions / built for sharing',
    start: 'Start Test',
    gamesTitle: 'First Game Tests',
    gamesDeck: 'The first routes prioritize Korea, global PC engagement, mobile MOBA scale, and streaming attention.',
    stats: [
      {value: '8', label: 'launch game routes'},
      {value: '4', label: 'site languages'},
      {value: '10', label: 'questions per game'},
    ],
  },
  ja: {
    eyebrow: '性格診断ハブ',
    title: 'SBTIからゲームプレイヤー診断まで、',
    titleAccent: '次のタイプを選ぼう。',
    deck: 'SBTIは、風刺性格診断、人気ゲームコミュニティ、プレイヤー文化のタイプを集めた診断ハブへ拡張中です。',
    sbtiTitle: 'SBTI 性格テスト',
    sbtiDeck: '30問で27種類の奇妙な性格タイプを診断。既存テストは最初の正式入口として残します。',
    sbtiMeta: '27タイプ / 15次元 / 共有向け',
    start: 'テスト開始',
    gamesTitle: '最初のゲーム診断',
    gamesDeck: '韓国、世界PC市場、モバイルMOBA、配信人気の信号を優先しています。',
    stats: [
      {value: '8', label: '初期ゲームroute'},
      {value: '4', label: '対応言語'},
      {value: '10', label: '各ゲームの質問'},
    ],
  },
  ko: {
    eyebrow: '성격 테스트 허브',
    title: 'SBTI부터 게임 유저 유형까지,',
    titleAccent: '다음 진단을 골라보세요.',
    deck: 'SBTI는 풍자 성격 테스트, 인기 게임 커뮤니티, 플레이어 문화 유형을 담는 테스트 허브로 확장됩니다.',
    sbtiTitle: 'SBTI 성격 테스트',
    sbtiDeck: '30문항으로 27가지 엉뚱한 성격 유형 중 하나를 확인하세요. 기존 테스트는 첫 번째 대표 입구로 유지됩니다.',
    sbtiMeta: '27개 결과 / 15차원 / 공유 친화적',
    start: '테스트 시작',
    gamesTitle: '첫 게임 테스트',
    gamesDeck: '한국, 글로벌 PC 참여도, 모바일 MOBA 규모, 스트리밍 관심도를 우선 반영했습니다.',
    stats: [
      {value: '8', label: '출시 게임 route'},
      {value: '4', label: '사이트 언어'},
      {value: '10', label: '게임별 질문'},
    ],
  },
};

const ACCENT_CLASSES = {
  primary: 'bg-primary/10 text-primary ring-primary/20',
  secondary: 'bg-secondary/10 text-secondary ring-secondary/25',
  accent: 'bg-accent/10 text-accent ring-accent/20',
  info: 'bg-blue-500/10 text-blue-600 ring-blue-500/20 dark:text-blue-300',
} as const;

const LOGO_TILE_CLASSES: Record<string, string> = {
  'counter-strike-2': 'bg-[#F5FAF7] ring-border',
};

export function TestHubPage({locale}: {locale: string}) {
  const copy = HUB_COPY[(locale as SiteLocale) in HUB_COPY ? (locale as SiteLocale) : 'en'];
  const sbtiImage = TYPE_IMAGES.CTRL;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 px-4 py-16">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="max-w-3xl space-y-6">
          <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {copy.eyebrow}
          </Badge>
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {copy.title}
              <span className="text-primary">{copy.titleAccent}</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {copy.deck}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {copy.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/60 bg-card/75 p-4 shadow-sm">
                <div className="font-heading text-3xl font-black text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Card className="border-0 bg-card/85 shadow-sm">
          <CardContent className="grid gap-6 p-5 sm:p-6 md:grid-cols-[12rem_1fr_auto] md:items-center">
            {sbtiImage && (
              <div className="mx-auto w-36 md:w-44">
                <Image
                  src={sbtiImage}
                  alt={copy.sbtiTitle}
                  width={320}
                  height={320}
                  className="w-full"
                  priority
                />
              </div>
            )}
            <div className="space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <Badge className="rounded-full px-3 py-1">
                  SBTI
                </Badge>
                <span className="text-sm font-medium text-muted-foreground">{copy.sbtiMeta}</span>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-black tracking-tight md:text-3xl">
                  {copy.sbtiTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {copy.sbtiDeck}
                </p>
              </div>
            </div>
            <Link href="/test">
              <Button size="lg" className="rounded-full px-5 font-bold">
                {copy.start}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <section className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Gamepad2 className="size-5" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-black tracking-tight sm:text-3xl">
                {copy.gamesTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{copy.gamesDeck}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {ALL_GAME_QUIZZES.map((game) => {
              const title = localize(game.title, locale);
              const deck = localize(game.deck, locale);
              const genre = localize(game.genre, locale);
              const popularity = localize(game.popularity, locale);
              const logoTileClass = LOGO_TILE_CLASSES[game.slug] ?? 'bg-[#101820] ring-white/10';

              return (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="group rounded-xl border border-border/70 bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-16 w-20 shrink-0 items-center justify-center rounded-xl p-2 ring-1 sm:h-20 sm:w-24 ${logoTileClass}`}>
                      {game.logo ? (
                        <Image
                          src={game.logo.src}
                          alt={localize(game.logo.alt, locale)}
                          width={256}
                          height={128}
                          className="max-h-full w-full object-contain drop-shadow-sm"
                          unoptimized
                        />
                      ) : (
                        <Gamepad2 className={`size-8 ${ACCENT_CLASSES[game.accent]}`} aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading text-xl font-black tracking-tight text-foreground">
                            {title}
                          </h3>
                          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground">{genre}</p>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/78">{deck}</p>
                      {game.cover && (
                        <Image
                          src={game.cover.src}
                          alt={localize(game.cover.alt, locale)}
                          width={720}
                          height={960}
                          className="mx-auto h-auto max-h-[24rem] max-w-full rounded-lg border border-border/60"
                          unoptimized
                        />
                      )}
                      <div className="flex items-start gap-2 rounded-lg bg-muted/45 p-3 text-sm leading-relaxed text-muted-foreground">
                        <Trophy className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                        <span>{popularity}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
