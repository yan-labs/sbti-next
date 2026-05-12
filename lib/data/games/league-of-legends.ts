import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'league-of-legends',
  title: {
    zh: '英雄联盟',
    en: 'League of Legends',
    ja: 'リーグ・オブ・レジェンド',
    ko: '리그 오브 레전드',
  },
  deck: {
    zh: '你是峡谷里哪种玩家？',
    en: 'What kind of summoner are you?',
    ja: '召喚師峡谷のあなたは何型？',
    ko: '소환사 협곡의 당신은 어떤 유형?',
  },
  description: {
    zh: '30 道题，测出你在峡谷的真实玩家类型。从龙魂账房先生到嚎哭深渊段子王，8 种原型、6 维雷达、专属玩家身份码，截图发朋友圈用的那种。',
    en: '30 questions to find your true Rift identity. 8 archetypes, 6-axis radar, a 6-letter player code — from Rift CFO to ARAM Comedian. Share the result before your next queue.',
    ja: '30問でリフトの本当のプレイスタイルを発見。8タイプ・6軸レーダー・6文字コード付き。次のキューに入る前にシェアしよう。',
    ko: '30문제로 알아보는 협곡 속 진짜 플레이어 유형. 8가지 유형, 6축 레이더, 6자리 코드까지. 다음 큐 잡기 전에 공유해봐.',
  },
  dominantAxes: ['Bond', 'Nerve', 'Mental'] as const,
  archetypes: [
    // ── 1. rift-cfo ─────────────────────────────────────────────────────────────
    {
      slug: 'rift-cfo',
      polarityPattern: {
        Bond: 'high',
        Nerve: 'low',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '龙魂账房先生',
        en: 'Rift CFO',
        ja: 'リフト財務部長',
        ko: '협곡 재무이사',
      },
      oneLiner: {
        zh: '靠资源差赢球，把 LoL 当复式记账',
        en: 'Wins on resource leads, runs LoL like a spreadsheet',
        ja: 'ゴールド差で勝つ。LoLは複式簿記だ',
        ko: '골드 차이로 이기는 스프레드시트 플레이어',
      },
      description: {
        zh: '你相信峡谷里没有奇迹，只有资源差。对线期你默默补刀，龙坑你第一个报点，装备优势超过 1000 金就开始在脑内制作 PPT。你不会骂队友，因为骂人浪费时间；你也不会冲，因为冲了就是 macro 失误。有人说你无聊？他们只是还没体会"金币差赢局"那种冷静的快乐。',
        en: 'You believe Rift math never lies. Every dragon spawn goes in a mental ledger; every failed gank is logged as "inefficient resource allocation." You don\'t flame — flaming costs three seconds you could spend farming. When the gold lead hits 4K, you open team chat for the first time all game to type "nice macro." You are right. That\'s the mildly terrifying part.',
        ja: '峡谷に奇跡はない。あるのはゴールド差だけだ。ドラゴンは毎回メモして、ジャングルのルートは頭の中でExcelに落とす。チームメイトを怒鳴らない——怒鳴る時間でCSが取れる。ゴールドリードが4000超えたら初めてチャットを開いて「nice macro」と打つ。それで合ってる。自分でもちょっと怖いけど。',
        ko: '협곡에 기적은 없다. 골드 차이가 전부다. 드래곤 스폰은 머릿속 장부에 기록하고, 정글 루트는 엑셀로 짜놨다. 욕은 안 한다 — 욕할 시간에 막타를 친다. 골드 차가 4000 넘으면 처음으로 채팅창을 열어 "매크로 잘했어"라고 친다. 맞는 말이다. 그게 좀 무서운 부분이긴 하다.',
      },
      symptoms: [
        {
          zh: '每局游戏结束后脑内自动生成复盘 PPT，包含资源效率折线图',
          en: 'Post-game breakdown auto-generates in your head, complete with a gold efficiency graph',
          ja: '試合後、頭の中で自動的にリプレイPPTが生成される',
          ko: '게임 끝나면 자동으로 머릿속에 복기 PPT가 생성된다',
        },
        {
          zh: '龙出前 10 秒就已经往龙坑走了，队友问你为什么，你答"macro"',
          en: 'You\'re already walking to dragon pit 10 seconds before spawn; teammates ask why, you say "macro"',
          ja: 'ドラゴン湧き10秒前にはもう向かっている。理由を聞かれたら「マクロ」と答える',
          ko: '드래곤 스폰 10초 전에 이미 이동 중이다. 이유 물어보면 "매크로"라고 답한다',
        },
        {
          zh: '对线输了会说"jungle diff"，但你内心清楚是补刀失误',
          en: 'You blame "jungle diff" in chat but internally audit your own CS numbers',
          ja: '「ジャングルdiff」と言いつつ、自分のCSミスを内心では認めている',
          ko: '"정글 diff"라고 치면서 속으로는 자기 CS 실수를 알고 있다',
        },
        {
          zh: '从不 FF15，因为你算过对面装备效率，知道后期还有胜算',
          en: 'Never votes FF15 — you\'ve already calculated the enemy\'s item efficiency and found a late-game window',
          ja: 'FF15は絶対押さない。相手のアイテム効率を計算して後半の勝ち筋を見つけてある',
          ko: 'FF15 절대 안 누른다. 상대 아이템 효율 계산해서 후반 승산 찾아놨으니까',
        },
        {
          zh: '胜利后不庆祝，直接看数据面板找下一局的改进点',
          en: 'Win screen appears and you\'re already checking your CS-per-minute stat for next game',
          ja: '勝利画面が出ても喜ばず、すぐ次の試合へのCS改善点を確認する',
          ko: '승리 화면 떠도 기뻐하지 않고 바로 분당 CS 확인한다',
        },
      ],
      rivalSlug: 'aram-comedian',
      bestSquadSlug: 'tilt-shepherd',
    },

    // ── 2. tilt-shepherd ────────────────────────────────────────────────────────
    {
      slug: 'tilt-shepherd',
      polarityPattern: {
        Bond: 'high',
        Nerve: 'low',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '峡谷情绪安抚师',
        en: 'Tilt Shepherd',
        ja: 'ティルト羊飼い',
        ko: '협곡 감정 관리사',
      },
      oneLiner: {
        zh: '队友每次红温，你都第一个去救场',
        en: 'Every time a teammate tilts, you\'re already in their DMs',
        ja: 'チームメイトが傾くたびに、あなたが最初に駆けつける',
        ko: '팀원이 멘붕할 때마다 제일 먼저 달려가는 사람',
      },
      description: {
        zh: '你知道"FF15"出现的时候，不是游戏输了，是辅助要开始上班了。你天生能感知队友的情绪波动：谁在红温、谁准备 int、谁只差一句话就要挂机。你想赢，但你更害怕自己看着队伍在聊天框里内讧。于是你挂着"开心就好"，同时偷偷算着还能不能翻盘。最后往往你没救到队友，先把自己送了。',
        en: 'You can smell a FF15 vote before the timer hits 14:59. Your natural habitat is "gg team, we can do this" chat and pinging the tank to stop 1v5ing. You want the win badly. Badly enough to spend the first 10 minutes managing vibes instead of laning. Sometimes it works. Mostly your teammate feeds anyway and you close the client and stare at the ceiling.',
        ja: '14:59になる前にFF15の空気を察知できる。「gg チームいけるよ」とチャットして、1v5しようとするタンクにピンを打つのが日課だ。勝ちたい気持ちは本物だけど、チームの雰囲気管理に10分使ってしまう。うまくいくこともある。たいていはチームメイトが餌になって、クライアントを閉じて天井を見上げる。',
        ko: '14:59도 되기 전에 FF15 분위기를 감지한다. "팀 화이팅 할 수 있어"라고 채팅하고, 1v5 하려는 탱커한테 핑 날리는 게 일이다. 이기고 싶은 마음은 진짜다. 근데 10분을 팀 분위기 관리에 쓴다. 가끔 먹힌다. 대부분은 팀원이 피딩하고 클라이언트 끄고 천장 본다.',
      },
      symptoms: [
        {
          zh: '聊天框有人骂队友时，你的手指比光速更快打出"别喷了专心打"',
          en: 'Someone types "report X" and your hands are already typing "focus, we can win this"',
          ja: '「誰かを報告して」と打たれる前に「集中！勝てる！」と入力している',
          ko: '"신고해" 치기 전에 손가락이 이미 "집중해 이길 수 있어" 치고 있다',
        },
        {
          zh: '你最常死亡的原因是追去保护一个注定要死的队友',
          en: 'Your most common death cause: following a teammate who was already dead',
          ja: '最多死因：すでに死んでいたチームメイトを助けに行ったこと',
          ko: '가장 흔한 사망 원인: 이미 죽은 팀원 살리러 갔다가 같이 죽기',
        },
        {
          zh: '游戏输了你会自我检讨，即使你其实是全队表现最好的那个',
          en: 'You write a self-review after losses even when you had the best stats on the team',
          ja: '負けると自己反省する。チームで最高スコアだったとしても',
          ko: '패배하면 팀 최고 스탯이어도 자기 반성문 쓴다',
        },
        {
          zh: '红温的队友总找你说话，你不确定这是信任还是嫌弃',
          en: 'Tilted teammates somehow always DM you. You\'re not sure if that\'s trust or targeting',
          ja: 'ティルトしたチームメイトが必ずDMしてくる。信頼なのかターゲットなのかわからない',
          ko: '멘붕한 팀원이 꼭 너한테 DM 온다. 신뢰인지 타겟인지 모르겠다',
        },
      ],
      rivalSlug: 'flame-conductor',
      bestSquadSlug: 'rift-cfo',
    },

    // ── 3. clutch-evangelist ────────────────────────────────────────────────────
    {
      slug: 'clutch-evangelist',
      polarityPattern: {
        Bond: 'high',
        Nerve: 'high',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '后期保研 C 位',
        en: 'Clutch Evangelist',
        ja: '後半全力C位',
        ko: '후반 캐리 신봉자',
      },
      oneLiner: {
        zh: '六神之后我能——这句话你说了七十局',
        en: 'Six items and I\'ll carry — you\'ve believed this for 70 games straight',
        ja: '6アイテム揃えたら俺が行く——70試合ずっとそう信じてる',
        ko: '6템 맞추면 내가 캐리한다 — 70판째 같은 말 하고 있다',
      },
      description: {
        zh: '你不急。你只是在等时机。前期你配合队友，中期你默默发育，后期你六神装备落地的那一刻，感觉全峡谷的命运都掌握在手中。团队向加激进加钝感，你的组合让你像个永远相信奇迹的信徒。大部分局你都来不及六神——游戏在 35 分钟就结束了。但那几次真正六神的局，截图至今还在手机里。',
        en: 'You\'re not slow. You\'re scaling. Early game, you ping "group" while CSing under tower. Mid game, you type "after this wave" for eight waves straight. Late game, six items hit, and you feel like Faker circa 2015. The game ends at 35 minutes most nights before you get there. But you have a screenshot from that one game where you did — and it\'s your phone wallpaper.',
        ja: '遅いんじゃない。スケーリング中なんだ。序盤はタワー下でCSしながら「集合」ピン。中盤は「このウェーブの後で」と8回連続で打つ。終盤、6アイテム揃った瞬間、2015年のFakerになった気がする。たいていゲームは35分で終わる。でも本当に6アイテム揃った一試合のスクリーンショットは今も携帯に入ってる。',
        ko: '느린 게 아니다. 스케일링 중이다. 초반에는 타워 밑에서 CS 치면서 "집합" 핑. 중반에는 "이 웨이브 후에" 8번 연속으로 친다. 후반에 6템 맞추면 2015년 Faker가 된 기분이다. 대부분은 35분에 게임이 끝난다. 근데 진짜 6템 맞춘 그 한 판 스크린샷은 아직 폰에 있다.',
      },
      symptoms: [
        {
          zh: '游戏进入 20 分钟你开始觉得胜负刚刚开始',
          en: 'At 20 minutes you think the game is just getting started',
          ja: '20分経つと「ゲームはこれからだ」と思う',
          ko: '20분 지나면 "이제 시작이다"라고 생각한다',
        },
        {
          zh: '你用 "我们后期好" 回应一切批评，不管当时比分多少',
          en: 'You counter every teammate complaint with "we scale harder" regardless of the score',
          ja: 'どんなスコアでも「後半は俺たちが強い」でチームメイトの文句を返す',
          ko: '어떤 상황에서도 "우리 후반 더 강해"로 팀원 불만 받아친다',
        },
        {
          zh: '对面 20-5 了，你还在矢口否认游戏已经结束',
          en: 'Enemy is 20-5 and you\'re still calculating your hypothetical six-item damage',
          ja: '相手が20-5でも、6アイテム時の仮想ダメージを計算している',
          ko: '상대가 20-5여도 6템 가상 딜 계산하고 있다',
        },
        {
          zh: '"六神之后我能"——这句话是你比任何其他话说得都多的话',
          en: '"Full build and I\'ll carry" — your most repeated sentence across all seasons',
          ja: '「フルビルドしたら俺が行く」——シーズン通じて一番言ったセリフ',
          ko: '"풀빌드하면 내가 캐리한다" — 모든 시즌 통틀어 가장 많이 한 말',
        },
        {
          zh: '打出六神装的局截图存了一个专门的相册',
          en: 'You have a dedicated photo album for the games where you actually hit full build',
          ja: 'フルビルドを達成した試合のスクリーンショット専用アルバムがある',
          ko: '풀빌드 달성한 게임 스크린샷만 모은 앨범이 따로 있다',
        },
      ],
      rivalSlug: 'mute-strategist',
      bestSquadSlug: 'rift-cfo',
    },

    // ── 4. flame-conductor ──────────────────────────────────────────────────────
    {
      slug: 'flame-conductor',
      polarityPattern: {
        Bond: 'high',
        Nerve: 'high',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '红温团战指挥',
        en: 'Flame Conductor',
        ja: '紅温チームファイト指揮官',
        ko: '멘붕 팀파이트 지휘관',
      },
      oneLiner: {
        zh: '麦克风永远开着，红温永远比队友快半拍',
        en: 'Mic always open, tilting one step ahead of the team',
        ja: 'マイクは常にオン。チームより半拍早くガチギレする',
        ko: '마이크 항상 켜져 있고, 팀보다 반박자 먼저 멘붕한다',
      },
      description: {
        zh: '你是真的想赢的，这一点无法否认。问题是你"想赢"的方式是不停地给队友布置任务、在语音里报点、在聊天框里贴出行动指示。你红温的时候不是因为输，是因为队友没按你说的做。你叫他们聚，他们偏要分路。你叫他们开团，他们偏要回家买装备。技术不够只是一方面——带节奏这件事，你真的比大多数人在行。',
        en: 'You genuinely want to win. Nobody disputes that. The issue is your version of winning involves issuing real-time tactical updates in voice chat while simultaneously flaming the jungle in all-chat. When you\'re "红温" (red-hot, tilted), it\'s not because you lost — it\'s because your team ignored the perfect call. You had the right read. They went B when you pinged A. You are correct to be upset. You\'re just also impossible to play with.',
        ja: '勝ちたい気持ちは本物だ。それは誰も否定しない。問題は、勝ち方がボイスチャットでリアルタイム戦術指示を出しながらジャングルをオールチャットで責めることだ。ガチギレするのは負けたからじゃない——チームが完璧な指示を無視したからだ。「A」とピンしたのに「B」に行った。お前の読みは正しかった。ただ一緒にプレイするのが難しい。',
        ko: '이기고 싶은 마음은 진짜다. 아무도 그건 안 부정한다. 문제는 이기는 방식이 보이스챗에서 실시간 전술 지시 내리면서 동시에 올채팅으로 정글 욕하는 거다. 멘붕하는 이유가 진 게 아니라 팀이 완벽한 콜을 무시해서다. A 핑 찍었는데 B 갔잖아. 니 읽기가 맞았다. 근데 같이 플레이하기가 너무 힘들다.',
      },
      symptoms: [
        {
          zh: '你用"红温"解释自己的行为，但从不用它检讨自己',
          en: 'You cite tilt to explain your behavior but never to audit it',
          ja: 'ガチギレを自分の行動の説明に使うが、反省には使わない',
          ko: '멘붕을 자기 행동 설명에는 쓰지만 반성에는 안 쓴다',
        },
        {
          zh: '你喊"聚"的频率比实际团战次数高三倍',
          en: 'You ping "group" three times more often than teamfights actually happen',
          ja: '「集合」ピンの数が実際のチームファイト回数の3倍ある',
          ko: '"집합" 핑 횟수가 실제 팀파이트 횟수의 3배다',
        },
        {
          zh: '有人问"刚才为什么那样打"，你已经给出了 400 字的复盘',
          en: 'Someone asks "why did you do that" and you\'ve already typed a 400-character tactical post-mortem',
          ja: '「なんであの動き？」と聞かれる前に400文字の戦術分析を打ち終えている',
          ko: '"왜 그렇게 했어?" 물어보기 전에 400자 전술 분석 다 쳐놨다',
        },
        {
          zh: '输了一局后你冷静不超过 90 秒，然后马上点开下一局',
          en: 'You cool down for exactly 90 seconds after a loss before queuing again',
          ja: '負けた後90秒で冷静になり、すぐ次のキューに入る',
          ko: '패배 후 딱 90초 진정하고 바로 다음 큐 들어간다',
        },
        {
          zh: '语音频道里你说的话比其他四人加起来还多',
          en: 'Your voice chat word count exceeds the other four players combined',
          ja: 'ボイスチャットの発言量が他の4人を合計した量を超える',
          ko: '보이스챗 발언량이 나머지 4명 합친 것보다 많다',
        },
      ],
      rivalSlug: 'mute-strategist',
      bestSquadSlug: 'tilt-shepherd',
    },

    // ── 5. mute-strategist ──────────────────────────────────────────────────────
    {
      slug: 'mute-strategist',
      polarityPattern: {
        Bond: 'low',
        Nerve: 'low',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '全屏静音运营家',
        en: 'Mute Strategist',
        ja: '全ミュート運営家',
        ko: '전체 음소거 전략가',
      },
      oneLiner: {
        zh: '开局先全屏静音，再把 LoL 当单机棋类来打',
        en: 'Mutes all, then plays LoL like a single-player chess match',
        ja: '開幕全員ミュート。LoLはソロチェスだ',
        ko: '시작하자마자 전체 음소거. LoL은 싱글 체스다',
      },
      description: {
        zh: '进局第一件事：全屏静音。不是因为你脾气差，是因为你早就算清楚了：聊天框的信息噪音和胜率成负相关。你把 LoL 当单机棋类，每步走法在脑内推演三步。你的队友不知道你在干什么，你也不打算解释。结果好了，你默默离队；结果差了，你记录失误后默默离队。语音永远静音，段位在稳步上升。',
        en: 'First action every game: mute all. Not because you\'re antisocial — because you\'ve calculated that chat noise correlates negatively with win rate. You treat LoL like a solo chess match, plotting three moves ahead with no interest in your teammates\' opinions on the subject. They don\'t know what you\'re doing. You\'re not explaining. Game ends, you silently exit, win or lose. Your rank climbs anyway. It\'s infuriating to everyone else.',
        ja: 'ゲーム開始直後の最初の行動：全員ミュート。非社交的だからじゃない——チャットノイズが勝率と負の相関があることを計算済みだからだ。LoLはソロチェスとして3手先を読む。チームメイトの意見には興味がない。何をしているかは説明しない。試合が終わると静かに退出する、勝っても負けても。ランクは着実に上がる。他の人には理解できない。',
        ko: '게임 시작하자마자 첫 번째 행동: 전체 음소거. 비사교적이어서가 아니라 채팅 노이즈가 승률과 음의 상관관계라는 걸 계산해놔서다. LoL을 솔로 체스처럼 3수 앞을 읽는다. 팀원 의견엔 관심 없다. 설명도 안 한다. 게임 끝나면 조용히 나간다, 이기든 지든. 랭크는 계속 오른다. 다른 사람들한테는 이해 불가다.',
      },
      symptoms: [
        {
          zh: '你不记得上次在游戏里说话是什么时候',
          en: 'You cannot recall the last time you typed anything in game chat',
          ja: 'ゲーム内チャットで何かを入力した最後の記憶がない',
          ko: '게임 채팅에 마지막으로 뭔가 친 게 언제인지 기억 안 난다',
        },
        {
          zh: '你能在全屏静音的情况下赢下大多数局，这让你更坚定了这个习惯',
          en: 'You win most games on mute, which is all the validation this habit needs',
          ja: '全ミュートで大半の試合に勝てる——この習慣を続ける理由はそれで十分だ',
          ko: '전체 음소거로 대부분 이긴다. 이 습관을 유지하는 이유가 이거면 충분하다',
        },
        {
          zh: '队友在聊天框求助，你看到了，但还是继续补刀',
          en: 'Teammate types "help" in chat, you see it, you keep CSing',
          ja: 'チームメイトが「助けて」と打った。見えてた。CSを続けた',
          ko: '팀원이 채팅에 "도와줘" 쳤다. 봤다. CS 계속 쳤다',
        },
        {
          zh: '游戏结束你输出最高，但你对队友的名字毫无印象',
          en: 'Top damage on your team at game end, zero memory of your teammates\' summoner names',
          ja: '試合終了時にチーム最高ダメージ。チームメイトのサモナーネームは全く覚えていない',
          ko: '게임 끝나고 팀 딜 1등. 팀원 소환사 이름 하나도 기억 못 한다',
        },
        {
          zh: '"go next" 是你字符数最多的游戏内发言',
          en: '"go next" is your longest in-game message this season',
          ja: '今シーズンの最長インゲームメッセージは「go next」だ',
          ko: '이번 시즌 인게임 최장 메시지는 "go next"다',
        },
      ],
      rivalSlug: 'flame-conductor',
      bestSquadSlug: 'rift-cfo',
    },

    // ── 6. solo-victim ──────────────────────────────────────────────────────────
    {
      slug: 'solo-victim',
      polarityPattern: {
        Bond: 'low',
        Nerve: 'low',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '单排苦主受难者',
        en: 'Solo Queue Martyr',
        ja: 'ソロキュー殉教者',
        ko: '솔랭 순교자',
      },
      oneLiner: {
        zh: '对面五个都是 GM，我队五个都是급식',
        en: 'Enemy team: five GMs. Your team: five 급식',
        ja: '相手チーム：5人全員GM。味方チーム：5人全員雑魚',
        ko: '상대팀: GM 다섯 명. 우리팀: 급식 다섯 명',
      },
      description: {
        zh: '你是单排的受害者，这一点毋庸置疑。每一局都有至少一个"菜鸡"在你身边出现；每一次失误都可以溯源到"队友"；每一次失去的资源都是因为"jungle diff"。你风控稳健，不轻易冒险，钝感力也强，不容易轻易崩掉。但你骨子里清楚自己是钻石水平，只是单排的运气永远不站在你这边。Faker 抱怨过韩服单排，所以你并不孤单。',
        en: 'You are statistically the victim of solo queue. Every game, at least one 급식 (cafeteria noob) materializes on your side. Every loss has a clear cause: jungle diff, support diff, ADC diff — anything but your own CS numbers. You\'re methodical, risk-averse, and you don\'t tilt easily. But somewhere deep down you know you\'re Diamond-level talent trapped in a Platinum lobby by sheer matchmaking cruelty. Faker complained about Korean server inting in 2025. You and Faker have more in common than you think.',
        ja: 'ソロキューの被害者であることは統計的に証明済みだ。毎試合、少なくとも1人の雑魚（zako）が味方に出現する。すべての敗因は明確だ：ジャングルdiff、サポートdiff、ADCdiff——自分のCS数以外全部。慎重でリスクを避け、簡単にはティルトしない。でも心の奥では、マッチメイキングの残酷さでプラチナロビーに閉じ込められたダイヤレベルの実力があると知っている。2025年にFakerが韓国サーバーのintに文句を言った。FakerとあなたはあなたよりFakerに近い。',
        ko: '솔랭의 피해자라는 건 통계적으로 증명됐다. 매 게임 최소 1명의 급식이 우리 팀에 나온다. 모든 패배 원인은 명확하다: 정글 diff, 서폿 diff, 원딜 diff — 자기 CS 수치 빼고 다. 신중하고 리스크 회피적이고 잘 멘붕 안 한다. 근데 속으로는 매치메이킹의 잔인함 때문에 플래 로비에 갇힌 다이아 실력이라는 걸 안다. 2025년에 Faker가 한국 서버 인팅에 불만 토로했다. Faker랑 너 생각보다 공통점 많다.',
      },
      symptoms: [
        {
          zh: '你的段位历史像心电图——每次接近升段就遇到"队友传说"',
          en: 'Your rank history looks like an ECG — every promo series spawns a mythical feeding teammate',
          ja: 'ランク履歴が心電図みたい——昇格戦のたびに伝説の給食野郎が出現する',
          ko: '랭크 기록이 심전도처럼 생겼다 — 승급전마다 전설적인 급식이 등장한다',
        },
        {
          zh: '"macro diff" 是你用来解释每一次失败的万能词',
          en: '"Macro diff" is your all-purpose explanation for every loss',
          ja: '「マクロdiff」はすべての敗因を説明する万能ワードだ',
          ko: '"매크로 diff"는 모든 패배를 설명하는 만능 단어다',
        },
        {
          zh: '你已经记录了过去 30 局队友的"犯罪记录"，但从不复盘自己',
          en: 'You\'ve logged teammate mistakes across 30 games but have never opened your own replay',
          ja: '30試合分のチームメイトのミスを記録しているが、自分のリプレイは一度も開いたことがない',
          ko: '팀원 실수 30판치 기록해놨는데 자기 리플레이는 한 번도 안 봤다',
        },
        {
          zh: '你告诉自己"再赢两局就升段"已经说了这个赛季整整三个月',
          en: '"Two more wins and I promote" — you\'ve said this for three straight months this season',
          ja: '「あと2勝で昇格」——今シーズン3ヶ月ずっとそう言い続けている',
          ko: '"2승만 더 하면 승급" — 이번 시즌 3달째 같은 말 하고 있다',
        },
      ],
      rivalSlug: 'lane-tyrant',
      bestSquadSlug: 'tilt-shepherd',
    },

    // ── 7. lane-tyrant ──────────────────────────────────────────────────────────
    {
      slug: 'lane-tyrant',
      polarityPattern: {
        Bond: 'low',
        Nerve: 'high',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '对线压迫艺术家',
        en: 'Lane Tyrant',
        ja: 'レーン制圧アーティスト',
        ko: '라인 압박 예술가',
      },
      oneLiner: {
        zh: '5 分钟塔下击杀，是对这局游戏最温柔的问候',
        en: 'A tower dive kill at 5 minutes is just a polite hello',
        ja: '5分のタワーダイブキルは、この試合への丁寧な挨拶だ',
        ko: '5분에 타워 다이브 킬은 이 판에 대한 정중한 인사다',
      },
      description: {
        zh: '你的对线哲学很简单：对面是来挨打的，你是来打人的。你不考虑团队，你考虑对面的血量和走位失误。钝感让你不在乎队友的状态，激进让你在对面稍有破绽时立刻发力。你在意的只有对线结果——几分钟带走第一滴血，几分钟把对面推到塔下。Tyler1 的频道是你的精神道场，"running it down" 是你从不承认自己在做的事，但数据不说谎。',
        en: 'Your laning philosophy is simple: opponent is there to be killed, you\'re there to kill them. You don\'t factor in team state. You factor in the enemy\'s HP and their last positioning mistake. Coolness under pressure means you don\'t tilt from your teammates\' state — only the person in front of you matters. Tyler1\'s channel is your temple. "Running it down" is something you\'d never do intentionally, but your death-at-tower stat is suggestive.',
        ja: 'レーニング哲学はシンプルだ：相手は殴られに来ている、こちらは殴りに来ている。チームの状態は考えない。相手のHPと最後のポジションミスを考える。チームメイトの状態でティルトしない——目の前の人だけが重要だ。Tyler1のチャンネルが道場だ。「Running it down」は意図的にはしないけど、タワー下デス統計が語っている。',
        ko: '라이닝 철학은 간단하다: 상대는 맞으러 온 거고, 나는 때리러 왔다. 팀 상태는 고려 안 한다. 상대 체력이랑 마지막 포지셔닝 실수를 고려한다. 팀원 상태에 멘붕 안 한다 — 앞에 있는 사람만 중요하다. Tyler1 채널이 도장이다. "Running it down"은 의도적으로는 안 하는데 타워 밑 데스 통계가 말해준다.',
      },
      symptoms: [
        {
          zh: '你的对线补刀数全队最高，但参团率也全队最低',
          en: 'Highest CS on team, lowest participation in teamfights — every game, every season',
          ja: 'チーム最高CS、チーム最低チームファイト参加率——毎試合、毎シーズン',
          ko: '팀 최고 CS, 팀 최저 팀파이트 참여율 — 매 게임, 매 시즌',
        },
        {
          zh: '你把对面换人当作"新鲜感"，不是"挑战"',
          en: 'When the enemy swaps players, you call it "variety," not "a challenge"',
          ja: '相手がスワップしても「バリエーション」と呼ぶ、「挑戦」ではなく',
          ko: '상대가 스왑하면 "다양성"이라고 부른다, "도전"이 아니라',
        },
        {
          zh: '你 5 分钟出了第一血，然后用剩下 30 分钟告诉队友这件事',
          en: 'You get first blood at 5 minutes then spend the next 30 minutes telling your team about it',
          ja: '5分でファーストブラッドを取って、残りの30分でチームにそれを話し続ける',
          ko: '5분에 퍼블 따고 나머지 30분 동안 팀한테 그 얘기 한다',
        },
        {
          zh: '你认为辅助是"多余"的位置，因为你的对线不需要帮助',
          en: 'You privately believe support is a redundant role because your lane doesn\'t need help',
          ja: '内心ではサポートは「余剰」なポジションだと思っている——自分のレーンに助けは不要だから',
          ko: '속으로 서폿은 "여분" 포지션이라고 생각한다 — 자기 라인은 도움이 필요 없으니까',
        },
      ],
      rivalSlug: 'rift-cfo',
      bestSquadSlug: 'mute-strategist',
    },

    // ── 8. aram-comedian ────────────────────────────────────────────────────────
    {
      slug: 'aram-comedian',
      polarityPattern: {
        Bond: 'low',
        Nerve: 'high',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '嚎哭深渊段子王',
        en: 'ARAM Comedian',
        ja: 'ハウリングアビス芸人',
        ko: '칼바람 드립 장인',
      },
      oneLiner: {
        zh: '桥上五人同时上头，段子才是胜利',
        en: 'Five people losing their minds on one bridge — the meme is the victory',
        ja: '橋の上で5人同時にキレる——ネタが勝利だ',
        ko: '다리 위 다섯 명 동시 멘붕 — 드립이 승리다',
      },
      description: {
        zh: '峡谷留不住你。大乱斗才是你真正的家：五人挤在一座桥上乱成一锅粥，随机英雄，随时可能爆的情绪，这才是 LoL 最有趣的形态。你独行、你激进、你容易红温，但在嚎哭深渊，这些缺陷反而是特产。你不担心段位，只担心这把能不能出几个段子截图。桥宽不过 10 米，发生过最多的人类喜剧。',
        en: 'The Rift couldn\'t hold you. Howling Abyss — five people crammed onto one bridge with random champions and zero chill — is your natural ecosystem. You\'re a solo player who goes all-in on instinct and tilts fast, but in ARAM those traits become features, not bugs. You\'re not tracking objectives. You\'re tracking whether that triple kill was funny enough to clip. Your rank in 5v5 is unranked. Your ARAM clip folder has 200 entries.',
        ja: 'ソモナーズリフトでは抑えられなかった。ハウリングアビス（ランダムチャンピオンで1本の橋に5人詰め込んだ状態）が本当のホームだ。ソロプレイヤーで全力特攻して早くガチギレする。でもARAMではそれが欠陥じゃなくて特産品だ。目標なんて追ってない。そのトリプルキルがクリップするほど面白かったかを追ってる。5v5のランクは未ランク。ARAMクリップフォルダーは200件。',
        ko: '소환사 협곡은 너를 못 잡았다. 칼바람 나락 — 랜덤 챔피언으로 다리 하나에 5명 빽빽이 넣은 상태 — 이 진짜 홈이다. 솔로 플레이어에 본능으로 올인하고 빠르게 멘붕한다. 근데 칼바람에서는 그게 결함이 아니라 특산품이다. 목표 같은 거 안 쫓는다. 그 트리플킬이 클립할 만큼 웃겼는지 쫓는다. 5v5 랭크는 언랭. 칼바람 클립 폴더 200개.',
      },
      symptoms: [
        {
          zh: '你在大乱斗里发现自己说话比正常模式多了十倍',
          en: 'You\'re ten times more talkative in ARAM than in any other mode',
          ja: 'ARAMでは他のモードの10倍おしゃべりになる',
          ko: '칼바람에서 다른 모드보다 10배 말이 많아진다',
        },
        {
          zh: '你的截图相册里有整整一个 ARAM 名场面专区',
          en: 'You have a dedicated ARAM highlights folder that\'s bigger than your ranked folder',
          ja: 'ARAMハイライトフォルダーがランクフォルダーより大きい',
          ko: '칼바람 하이라이트 폴더가 랭크 폴더보다 크다',
        },
        {
          zh: '你知道在大乱斗里，段子比胜负更重要',
          en: 'You genuinely believe a funny play is worth more than a win in ARAM',
          ja: 'ARAMでは面白いプレーが勝利より価値があると本気で思っている',
          ko: '칼바람에서 웃긴 플레이가 승리보다 가치 있다고 진심으로 생각한다',
        },
        {
          zh: '朋友问你要不要打排位，你问他们"大乱斗算吗"',
          en: 'Friend asks if you want to rank. You say "does ARAM count?"',
          ja: '友達にランクやるか聞かれたら「ARAMでもいい？」と返す',
          ko: '친구가 랭크 할래 물어보면 "칼바람도 돼?" 라고 한다',
        },
        {
          zh: '你能记住三个月前某把大乱斗的具体过程，但记不住上周的排位战绩',
          en: 'You remember a specific ARAM play from three months ago in detail but can\'t recall last week\'s ranked results',
          ja: '3ヶ月前のARAMの特定プレーの詳細は覚えているが、先週のランク結果は覚えていない',
          ko: '3달 전 칼바람 특정 플레이는 세세히 기억하는데 지난주 랭크 결과는 기억 못 한다',
        },
      ],
      rivalSlug: 'rift-cfo',
      bestSquadSlug: 'lane-tyrant',
    },
  ],
  questions: [
    // ── Anchor questions Q1–Q12 ──────────────────────────────────────────────────
    // Q1 — Bond anchor (peak-end: funny opener)
    {
      id: 'lol-q1',
      kind: 'anchor',
      text: {
        zh: '开局第一件事，你会……',
        en: 'The very first thing you do after loading into a game is…',
        ja: 'ゲーム開始直後、最初にやることは……',
        ko: '게임 시작하자마자 제일 먼저 하는 일은……',
      },
      options: [
        {
          label: {
            zh: '在聊天框说"加油队友"，确认大家状态在线',
            en: 'Type "gl hf team" and check if everyone\'s vibes are okay',
            ja: 'チャットで「がんばろう！」と打って全員の状態を確認する',
            ko: '채팅에 "화이팅팀" 치고 다들 괜찮은지 분위기 체크',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '全屏静音，开始研究对面出装',
            en: 'Mute all, then look up the enemy\'s op.gg history',
            ja: '全員ミュートして相手のop.ggを調べ始める',
            ko: '전체 음소거하고 상대 op.gg 검색',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '走去和队友打个招呼，然后各奔各的路',
            en: 'Wave to your ADC in lane, then focus on your own farm',
            ja: 'ADCに手を振って、あとは自分のCSに集中する',
            ko: '원딜한테 손 흔들고 바로 내 CS에 집중',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '想好 solo 路线，默默推进，不和任何人打配合',
            en: 'Plan your solo route, move out silently, no coordination needed',
            ja: 'ソロルートを決めて静かに出発。連携なんて不要',
            ko: '솔로 루트 짜고 조용히 출발. 팀플 필요 없음',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // Q2 — Bond anchor
    {
      id: 'lol-q2',
      kind: 'anchor',
      text: {
        zh: '队友在大龙坑附近被围攻，你……',
        en: 'A teammate gets caught near Baron pit. You…',
        ja: 'バロン付近で味方が包囲される。あなたは……',
        ko: '바론 근처에서 팀원이 포위됐다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '立刻赶去支援，结果跟着一起送了',
            en: 'Rush in to save them and die together, two for the price of one',
            ja: '助けに走って一緒に死ぬ。おまけ付きで',
            ko: '바로 달려가서 같이 죽는다. 덤으로 드림',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '继续补刀，他本来就不应该过去那里',
            en: 'Keep farming. They shouldn\'t have been there anyway',
            ja: 'CSを続ける。そもそもそこにいるべきじゃなかった',
            ko: 'CS 계속 친다. 거기 있으면 안 됐던 거야',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '打了一个"？"ping，然后等他们死完再上大龙',
            en: 'Send a question mark ping, wait for the fight to finish, then start Baron',
            ja: '「？」ピンを打ってから戦闘が終わるのを待ち、バロンを始める',
            ko: '"?" 핑 찍고 싸움 끝나길 기다렸다가 바론 시작',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '喊全队一起去救，同时在语音里叫大家收',
            en: 'Ping everyone to regroup and call in voice "hold, we go together"',
            ja: '全員に集合ピンを打ちながらボイスで「待て、一緒に行くぞ」と叫ぶ',
            ko: '전체 집합 핑 찍으면서 보이스에서 "잠깐, 다같이 가자" 외침',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // Q3 — Nerve anchor
    {
      id: 'lol-q3',
      kind: 'anchor',
      text: {
        zh: '对面在塔下血量 30%，你……',
        en: 'The enemy laner is at 30% HP under their own tower. You…',
        ja: '相手レーナーが自タワー下でHP30%。あなたは……',
        ko: '상대 라이너가 본인 타워 밑에서 체력 30%. 당신은……',
      },
      options: [
        {
          label: {
            zh: '直接塔下强杀，死一次也值',
            en: 'Tower dive immediately. Worth dying once to get the kill',
            ja: '迷わずタワーダイブ。一回死んでもキル取れれば得',
            ko: '바로 타워 다이브. 한 번 죽어도 킬 따면 이득',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等对面从塔下走开再追，安全第一',
            en: 'Wait for them to step out from tower range before chasing',
            ja: 'タワー射程外に出るまで待ってから追う。安全第一',
            ko: '타워 사거리 밖으로 나올 때까지 기다렸다가 추격. 안전 제일',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '计算塔伤和自身血量，确认能活着出来再动',
            en: 'Calculate tower damage versus your HP before committing',
            ja: 'タワーダメージと自分のHPを計算してから行動する',
            ko: '타워 피해량 vs 내 체력 계산하고 나서 판단',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接冲，凭感觉判断，算太多了就错过了',
            en: 'Go on instinct. Calculating too long means missing the window',
            ja: '感覚で行く。考えすぎたらチャンスを逃す',
            ko: '감으로 간다. 너무 계산하다가 타이밍 놓침',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // Q4 — Nerve anchor
    {
      id: 'lol-q4',
      kind: 'anchor',
      text: {
        zh: '决策时刻：要不要开大龙？',
        en: 'Your team is debating whether to start Baron. You vote…',
        ja: 'バロンを始めるか否か。あなたの判断は……',
        ko: '바론 할지 말지 논쟁 중. 당신의 판단은……',
      },
      options: [
        {
          label: {
            zh: '开！打就完了，拖下去对面也发育',
            en: 'Start it. If we wait, they scale too',
            ja: 'やる！待ったら相手も育つ',
            ko: '시작해! 기다리면 상대도 성장함',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '不开，眼位还没控好，风险太高',
            en: 'Don\'t start. No vision control, the risk is too high',
            ja: 'やらない。ビジョンコントロールが不十分でリスクが高い',
            ko: '시작하지마. 시야 장악 안 됐고 리스크 너무 높음',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '等对面有人死了再打，赢面稳一点',
            en: 'Wait for an enemy to die first before starting',
            ja: '相手が一人死んでから始める。勝率が安定する',
            ko: '상대 한 명 죽고 나서 시작. 이길 확률 안정적',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接抢，打死几个再说，先手就是优势',
            en: 'Force the fight first, worry about Baron after',
            ja: '先に戦闘を仕掛ける。バロンはその後で考える',
            ko: '먼저 싸우고 나서 바론 생각. 선빵이 이득',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // Q5 — Mental anchor
    {
      id: 'lol-q5',
      kind: 'anchor',
      text: {
        zh: '你送了三次人头，接下来……',
        en: 'You\'ve died three times in the last five minutes. You…',
        ja: '直近5分で3回デスした。あなたは……',
        ko: '최근 5분 안에 3번 죽었다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '淡定，分析一下刚才哪里出了问题，继续打',
            en: 'Stay calm, figure out what went wrong, keep playing',
            ja: '冷静に何がまずかったか考えて、続けてプレイする',
            ko: '침착하게 뭐가 문제였는지 분석하고 계속함',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '开始在聊天框抱怨队友和对面全都是外挂',
            en: 'Start typing about how jungler diff ruined your lane',
            ja: 'チャットで「ジャングルdiff」と文句を言い始める',
            ko: '채팅에 "정글 diff" 써내려가기 시작',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '红温了，下一波见到对面直接开冲，不管后果',
            en: 'You\'re tilted. Next wave you charge in regardless of outcome',
            ja: 'ガチギレ。次のウェーブは結果を考えずに突撃する',
            ko: '멘붕 왔다. 다음 웨이브엔 결과 상관없이 돌진',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '接着打，死就死了，不影响后续判断',
            en: 'Play on. Dying doesn\'t cloud your next decision',
            ja: '続けてプレイする。デスは次の判断に影響しない',
            ko: '계속 플레이. 죽어도 다음 판단에 영향 없음',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q6 — Mental anchor
    {
      id: 'lol-q6',
      kind: 'anchor',
      text: {
        zh: '队友在聊天框里骂了你一句，你……',
        en: 'A teammate flames you in chat. You…',
        ja: 'チームメイトがチャットで暴言を吐いた。あなたは……',
        ko: '팀원이 채팅에서 욕했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '秒回，加倍奉还，谁先骂谁就别怪我',
            en: 'Fire back immediately. They started it',
            ja: '即反撃する。向こうが先にやったんだ',
            ko: '바로 반격. 먼저 시작한 건 쟤야',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '没看到，全屏静音早就开了',
            en: 'Didn\'t see it. Muted all at game start',
            ja: '見えなかった。試合開始時に全員ミュート済み',
            ko: '못 봤다. 시작할 때 이미 다 음소거함',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '心里有点不舒服，但继续打，不说话',
            en: 'A bit stung but you keep playing without responding',
            ja: 'ちょっと嫌な気分になるが、黙って続ける',
            ko: '좀 불편하지만 말없이 계속 플레이',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '把对方骂回去，然后在接下来 10 分钟里都处于亢奋状态',
            en: 'Snap back, then play the next 10 minutes completely amped up',
            ja: '言い返して、その後10分間ずっとハイテンションでプレイ',
            ko: '맞받아치고 이후 10분은 완전 흥분 상태로 플레이',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // Q7 — Tempo anchor
    {
      id: 'lol-q7',
      kind: 'anchor',
      text: {
        zh: '前 5 分钟对线还没分出胜负，你……',
        en: 'Five minutes in, lane is even. You feel…',
        ja: '5分経過してもレーン戦は互角。あなたは……',
        ko: '5분 지났는데 라인전이 팽팽하다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '有点急，想早点打出优势，已经在想怎么开团了',
            en: 'A bit restless. You\'re already thinking about when to force a fight',
            ja: '少しイライラ。早くアドバンテージを作りたくてチームファイトを考え始める',
            ko: '좀 조급하다. 언제 싸움 붙일지 벌써 생각 중',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '很好，补刀节奏稳，后面慢慢积累优势',
            en: 'Good. CS rhythm is solid; you\'ll build the lead gradually',
            ja: '良い感じ。CSリズムも安定してるし、じっくりアドバンテージを積む',
            ko: '좋다. CS 리듬 안정적이고, 천천히 격차 벌리면 됨',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '不急，等对面犯错，时机到了自然会抓到',
            en: 'No rush. Wait for the enemy to make a mistake and punish it',
            ja: '急がない。相手がミスするのを待って、そこをつく',
            ko: '급하지 않다. 상대가 실수할 때까지 기다렸다가 잡기',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '已经在找机会三换一了，快节奏才是我的风格',
            en: 'Already looking for a 3-for-1 trade. Fast-paced is your style',
            ja: 'すでに3対1の交換を狙ってる。スピード重視が自分のスタイル',
            ko: '이미 3대1 교환 기회 찾는 중. 빠른 템포가 내 스타일',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // Q8 — Tempo anchor
    {
      id: 'lol-q8',
      kind: 'anchor',
      text: {
        zh: '关于推速的问题，你认为……',
        en: 'Your philosophy on splitting and pushing is…',
        ja: 'スプリットプッシュに関してあなたが思うのは……',
        ko: '스플릿 푸시에 대한 당신의 생각은……',
      },
      options: [
        {
          label: {
            zh: '越快越好，打破节奏才能赢，死守运营只是在等死',
            en: 'Faster the better. Passive play is just dying slowly',
            ja: 'とにかく早いほどいい。守りに入るのはゆっくり死ぬだけ',
            ko: '빠를수록 좋다. 수동적으로 하는 건 천천히 죽는 것',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '节奏要稳，不能因为急着推线而失去阵型',
            en: 'Rhythm matters. Don\'t sacrifice positioning for a fast push',
            ja: 'リズムが大事。早く押し込もうとして陣形を崩してはいけない',
            ko: '리듬이 중요하다. 빨리 푸시하려고 진형을 망가뜨리면 안 됨',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '要看资源差，领先了才考虑快速结束',
            en: 'Depends on the gold lead. Only rush when you\'re ahead',
            ja: 'ゴールド差次第。リードしてるときだけ早期決着を狙う',
            ko: '골드 차이 보고 판단. 앞설 때만 빠른 결착 노림',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '一路猛冲，对面来了也能打，抢先手才是王道',
            en: 'Push hard, fight if they come, first mover advantage is everything',
            ja: 'どんどん押す。来たら戦う。先手必勝',
            ko: '계속 밀어붙이기. 오면 싸우고. 선제 공격이 정답',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // Q9 — Intel anchor
    {
      id: 'lol-q9',
      kind: 'anchor',
      text: {
        zh: '选英雄的时候，你靠……',
        en: 'When picking a champion, you choose based on…',
        ja: 'チャンピオンを選ぶとき、何を頼りにする？',
        ko: '챔피언 고를 때 기준은……',
      },
      options: [
        {
          label: {
            zh: '当前版本的胜率数据，哪个强选哪个',
            en: 'Current patch win rates. Pick the strongest option',
            ja: '現環境の勝率データ。一番強いのを選ぶ',
            ko: '현 패치 승률 데이터. 가장 강한 거 선택',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '今天手感好，感觉哪个顺就选哪个',
            en: 'Feel. If a champion feels good today, you pick it',
            ja: '感覚。今日調子が良さそうなチャンピオンを選ぶ',
            ko: '감. 오늘 손에 맞는 챔피언 선택',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '跑分主力英雄，确保每局都在最优解',
            en: 'Main champion with tracked performance data. Optimal every game',
            ja: 'ランク用メイン。毎試合最適解を保証する',
            ko: '성적 추적 중인 메인 챔피언. 매판 최적해 보장',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '看到对面阵容就有感觉，直接跟着直觉走',
            en: 'Look at their comp and it just clicks. Go with the gut',
            ja: '相手の構成を見た瞬間ピンとくる。直感で行く',
            ko: '상대 조합 보니까 딱 느낌 왔다. 직관으로 감',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q10 — Intel anchor
    {
      id: 'lol-q10',
      kind: 'anchor',
      text: {
        zh: '游戏打完，你会……',
        en: 'After a game ends, you typically…',
        ja: '試合が終わった後、あなたは……',
        ko: '게임 끝나고 보통……',
      },
      options: [
        {
          label: {
            zh: '打开 op.gg 看数据，分析自己哪里差了',
            en: 'Open op.gg and analyze your stats for mistakes',
            ja: 'op.ggを開いて自分の数字を分析してミスを探す',
            ko: 'op.gg 열고 실수 찾으려고 내 스탯 분석',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉不好的地方记在脑子里，不用看数据也知道',
            en: 'File away what felt off in your head. No stats needed',
            ja: '違和感を頭に記録する。数字を見なくてもわかる',
            ko: '뭔가 이상했던 부분 머릿속에 기록. 통계 필요 없음',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看一下 KDA 和补刀数，然后决定下一局选什么',
            en: 'Check KDA and CS numbers, then decide the next pick',
            ja: 'KDAとCS数を確認して、次のピックを決める',
            ko: 'KDA랑 CS 확인하고 다음 픽 결정',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '直接点下一局，状态好不好自己心里有数',
            en: 'Queue again immediately. You know how you feel without stats',
            ja: '即次のキューに入る。自分の状態は数字なしでわかる',
            ko: '바로 다음 큐 들어감. 스탯 없어도 내 상태 스스로 앎',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q11 — Flair anchor
    {
      id: 'lol-q11',
      kind: 'anchor',
      text: {
        zh: '团战打完，你最在意的是……',
        en: 'After a teamfight, what you care about most is…',
        ja: 'チームファイトが終わって、一番気になるのは……',
        ko: '팀파이트 끝나고 제일 신경 쓰이는 건……',
      },
      options: [
        {
          label: {
            zh: '我们的伤害分布和资源回报，赢得值不值',
            en: 'Damage output and resource returns. Was the trade worth it',
            ja: 'ダメージ分布とリソースの見返り。この交換は得だったか',
            ko: '딜 분포랑 자원 회수율. 이 교환이 이득이었나',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '那个五杀截图有没有截到，发出去好不好看',
            en: 'Whether you screenshotted that pentakill and if it looks good',
            ja: 'ペンタキルのスクリーンショットが撮れたか、映えるかどうか',
            ko: '펜타킬 스크린샷 찍었나, 잘 나왔나',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '最短路线推线收益最大化，团战只是手段',
            en: 'The most efficient follow-up. Teamfights are just a means to an end',
            ja: '最短の後続行動で利益を最大化する。チームファイトは手段に過ぎない',
            ko: '가장 효율적인 후속 행동으로 이득 극대화. 팀파이트는 수단일 뿐',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '刚才那个大招起手是不是够帅，哪怕输了也想再看一次',
            en: 'Whether that engage looked sick enough to replay, win or lose',
            ja: 'さっきの開幕がかっこよかったかどうか。負けても見直したい',
            ko: '그 오프닝 각이 충분히 멋있었나. 져도 다시 보고 싶음',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // Q12 — Flair anchor
    {
      id: 'lol-q12',
      kind: 'anchor',
      text: {
        zh: '赢了一局之后，你会……',
        en: 'After winning a game, you…',
        ja: '試合に勝った後、あなたは……',
        ko: '한 판 이기고 나서……',
      },
      options: [
        {
          label: {
            zh: '看看数据板，记录一下今局哪里做得好，安静离开',
            en: 'Glance at the post-game screen, note what worked, close it',
            ja: 'ゲーム終了画面を確認して良かった点をメモして閉じる',
            ko: '결과 화면 보고 잘 된 부분 기록하고 닫기',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '把精彩操作截图发给朋友，等他们的反应',
            en: 'Screenshot the highlights and send to group chat for reactions',
            ja: 'ハイライトのスクリーンショットをグループチャットに送って反応を待つ',
            ko: '하이라이트 스크린샷 찍어서 단톡에 보내고 반응 기다리기',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '在语音里说一句"这局运营不错"，然后继续排位',
            en: 'Say "good macro" in voice chat and queue again',
            ja: 'ボイスチャットで「マクロ良かった」と言ってキューに入る',
            ko: '보이스챗에서 "매크로 좋았어" 한마디하고 바로 큐',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '在聊天框里骚一下对面，发个 GG，等对面回应',
            en: 'Type something in all-chat to see how the enemy reacts',
            ja: 'オールチャットで何か打って相手の反応を見る',
            ko: '올채팅에 뭔가 쳐서 상대 반응 구경',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Compound questions Q13–Q30 ───────────────────────────────────────────────
    // Q13 — Bond + Nerve
    {
      id: 'lol-q13',
      kind: 'compound',
      text: {
        zh: '野区打架打起来了，你……',
        en: 'There\'s a skirmish in the jungle. You…',
        ja: 'ジャングルで乱戦が起きた。あなたは……',
        ko: '정글에서 교전이 붙었다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '立刻赶去帮忙，不管自己多少血量',
            en: 'Run over to help regardless of your own HP',
            ja: '自分のHPを気にせず駆けつける',
            ko: '내 체력 상관없이 바로 달려가서 도움',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '远远观望，等打出胜负再决定要不要跟进',
            en: 'Watch from a distance and decide once you see who wins',
            ja: '遠くから様子を見て、勝敗がわかってから動く',
            ko: '멀리서 관망하고 누가 이기는지 보고 합류 결정',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '告诉队友去支援，自己继续补刀压线',
            en: 'Ping teammates to go help while you keep pushing your wave',
            ja: 'チームメイトに助けに行くよう指示して自分はウェーブを押し続ける',
            ko: '팀원한테 지원 핑 찍어주고 나는 계속 웨이브 push',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '单独绕后奇袭，不配合队友但能拿到斜线击杀',
            en: 'Flank alone for a surprise kill. No coordination, just results',
            ja: '一人で裏取りして不意打ちキル。連携なし、成果あり',
            ko: '혼자 뒤로 돌아서 기습 킬. 협력 없이 결과만 챙기기',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // Q14 — Bond + Nerve
    {
      id: 'lol-q14',
      kind: 'compound',
      text: {
        zh: '队伍陷入争执，有人要 FF15，你……',
        en: 'The team is arguing and someone wants FF15. You…',
        ja: 'チームが言い合いになり、FF15を提案する人が出た。あなたは……',
        ko: '팀이 다투는 중에 누군가 FF15 제안. 당신은……',
      },
      options: [
        {
          label: {
            zh: '投反对票，然后在语音里喊"能翻能翻"',
            en: 'Vote no and call out "we can still win this" on voice',
            ja: '反対票を入れ、「まだ勝てる！」とボイスで叫ぶ',
            ko: '반대표 누르고 보이스에서 "아직 할 수 있어!" 외침',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '投同意票，不如省点时间，下一局更重要',
            en: 'Vote yes. Save time for the next game',
            ja: '賛成票を入れる。時間を節約して次のゲームに集中',
            ko: '동의표. 시간 아끼고 다음 게임 집중',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '投弃权，自己打自己的，FF 不 FF 都无所谓',
            en: 'Abstain and keep playing. Doesn\'t matter either way',
            ja: '棄権して自分のプレイを続ける。どちらでもいい',
            ko: '기권하고 계속 내 플레이. 어떻게 되든 상관없음',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '投反对票，然后单骑冲进对面高地证明自己的判断',
            en: 'Vote no, then charge their base solo to prove you\'re right',
            ja: '反対票を入れ、一人で相手のベースに突撃して判断が正しいと証明する',
            ko: '반대표 누르고 혼자 상대 기지 돌진해서 내 판단 증명',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // Q15 — Bond + Nerve (funny mid-test high-watermark)
    {
      id: 'lol-q15',
      kind: 'compound',
      text: {
        zh: '你在对线，野区突然出现"三换一"机会，队友开团了，你……',
        en: 'You\'re laning, the jungle goes for a 3-for-1 fight, your team engages. You…',
        ja: 'レーン中、3対1のチャンスが生まれ、チームが開幕した。あなたは……',
        ko: '라이닝 중에 3대1 기회가 생겨서 팀이 개전했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '立刻放弃补刀，全速赶去团战，一个人都不能少',
            en: 'Drop the farm and sprint to the fight. Everyone contributes',
            ja: 'CSを諦めて全速力でチームファイトへ。全員で戦う',
            ko: 'CS 버리고 전속력으로 팀파이트 합류. 다 같이 싸워야 함',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '先把这波线补完再去，损失 50 补刀等于送了资源',
            en: 'Clear this wave first. Losing 50 CS is giving them resources',
            ja: 'このウェーブをクリアしてから行く。CS50を失うのはリソース提供になる',
            ko: '이 웨이브 먼저 정리하고 합류. CS 50 잃으면 자원 손실',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '一边跑去一边告诉自己等资源不如投资团战',
            en: 'Run over while rationalizing that teamfight value beats farm',
            ja: '走りながら「CSよりチームファイトの価値が高い」と自分に言い聞かせる',
            ko: '뛰어가면서 "CS보다 팀파이트 가치가 더 높아"라고 스스로 설득',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '继续对线，等赢了我这边推一波比跑去更赚',
            en: 'Keep laning. Your push will be worth more than one teamfight',
            ja: 'レーンを続ける。こっちをプッシュした方が一回のチームファイトより価値がある',
            ko: '라인 계속. 내가 밀어붙이는 게 팀파이트 한 번보다 이득',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // Q16 — Bond + Mental
    {
      id: 'lol-q16',
      kind: 'compound',
      text: {
        zh: '队友在聊天框吵架，影响了打法，你……',
        en: 'Two teammates are arguing in chat and it\'s affecting the game. You…',
        ja: 'チームメイト同士がチャットで口論して試合に影響が出ている。あなたは……',
        ko: '팀원들이 채팅에서 싸우면서 게임에 영향을 미치고 있다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '出来调停，叫大家停止内耗，一起专注打球',
            en: 'Step in and tell them to stop. Focus on the game',
            ja: '仲裁に入り、内輪もめをやめて試合に集中するよう言う',
            ko: '나서서 싸움 멈추라고 하고 게임 집중하자고 함',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '把两个人都静音，闭上眼睛继续打自己的',
            en: 'Mute both of them and keep playing your game',
            ja: '二人ともミュートして自分のプレイを続ける',
            ko: '둘 다 음소거하고 내 플레이 계속',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '加入骂战，既然都烂了不如一起红温',
            en: 'Join the flame war. If it\'s already burning, might as well add fuel',
            ja: '口論に加わる。どうせもう燃えてるなら燃料を追加してもいい',
            ko: '욕싸움 합류. 어차피 망해가는 거 같이 멘붕하기',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '看都不看，沉浸在自己的视野里，他们爱怎样就怎样',
            en: 'Don\'t even look. Stay locked in your own view; they can do what they want',
            ja: '見もしない。自分の画面に集中して、彼らは好きにさせる',
            ko: '쳐다보지도 않음. 내 화면에만 집중하고 걔들은 알아서 하라고',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q17 — Bond + Mental
    {
      id: 'lol-q17',
      kind: 'compound',
      text: {
        zh: '你在辅助位置，你的 ADC 不断犯错，你……',
        en: 'You\'re support. Your ADC keeps making costly mistakes. You…',
        ja: 'あなたはサポート。ADCがミスを繰り返している。あなたは……',
        ko: '당신은 서폿. ADC가 계속 실수를 반복한다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '耐心给他发提示，不批评，帮他找到感觉',
            en: 'Give patient callouts without criticism. Help them find their rhythm',
            ja: '批判せずに忍耐強くヒントを出す。リズムを取り戻す手助けをする',
            ko: '비판 없이 참을성 있게 힌트 줌. 리듬 찾도록 도와줌',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '彻底放弃 ADC，自己去野区找机会',
            en: 'Give up on the ADC and roam the jungle for opportunities',
            ja: 'ADCを諦めてジャングルに機会を探しに行く',
            ko: 'ADC 포기하고 정글 돌아다니며 기회 찾기',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '在聊天框里表示他这样下去要送掉，已经憋不住了',
            en: 'Type in chat that they\'re going to throw the game; you can\'t hold it in',
            ja: 'このままじゃゲームを投げると思ってチャットに書く。我慢できない',
            ko: '이러다 게임 던진다고 채팅에 쏟아내기. 더 못 참겠음',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '沉默地保护他，心里知道这局赢不了但还是做好本分',
            en: 'Shield them silently. You know you\'ll lose but you do your job anyway',
            ja: '黙って守り続ける。負けるとわかっていても自分の役割を果たす',
            ko: '묵묵히 보호. 질 거 알면서도 내 할 일 함',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q18 — Bond + Mental
    {
      id: 'lol-q18',
      kind: 'compound',
      text: {
        zh: '你的团队在大乱斗大桥上一路溃败，你……',
        en: 'Your ARAM team is getting destroyed on the bridge. You…',
        ja: 'ARAMで橋の上で惨敗が続いている。あなたは……',
        ko: '칼바람에서 다리 위에서 계속 터지고 있다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '在聊天框搞笑，反正大乱斗输了也没关系',
            en: 'Joke in chat. It\'s ARAM, nobody\'s crying about this loss',
            ja: 'チャットでボケる。ARAMだし負けても関係ない',
            ko: '채팅에서 드립 침. 칼바람이잖아, 이거 져도 괜찮음',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '默默调整走位，不说话，赢不赢靠自己',
            en: 'Quietly adjust your positioning. Win or lose, it\'s on you',
            ja: '黙ってポジションを調整する。勝敗は自分次第',
            ko: '조용히 포지션 조정. 승패는 내가 결정',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '喊全队重新聚起来，制定一个稍微靠谱的进攻路线',
            en: 'Rally the team to regroup and plan a slightly less chaotic attack',
            ja: '全員に集合をかけ、もう少しまともな攻撃ルートを決める',
            ko: '전원 재집결 외치고 좀 더 나은 공격 루트 계획',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '开始在聊天框数已经送了多少人头，气氛越来越崩',
            en: 'Start counting deaths in chat. The vibe collapses accordingly',
            ja: 'チャットでデス数を数え始める。雰囲気がますます崩壊する',
            ko: '채팅에서 데스 수 세기 시작. 분위기는 점점 붕괴',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // Q19 — Nerve + Mental
    {
      id: 'lol-q19',
      kind: 'compound',
      text: {
        zh: '你的英雄被对面 pick 克制了，你……',
        en: 'The enemy picked a hard counter to your champion. You…',
        ja: '相手があなたのチャンピオンにカウンターを選んできた。あなたは……',
        ko: '상대가 네 챔피언 카운터를 픽했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '不在乎，被克制也是对线功底的考验，冲就完了',
            en: 'Doesn\'t faze you. Beating a counter is a skill test; all in',
            ja: '気にしない。カウターを相手にしても対線力を試すだけ。突っ込む',
            ko: '상관없다. 카운터 이기는 게 기술의 증명. 그냥 간다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '看到克制就想改选，立刻找有没有换人的机会',
            en: 'Immediately look for a swap opportunity. Why fight a losing matchup',
            ja: '即スワップチャンスを探す。不利マッチをやる理由がない',
            ko: '바로 스왑 기회 찾기. 불리한 매치업 할 이유가 없음',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '调整打法，更保守地对线，等到野区换道来帮',
            en: 'Play conservatively in lane and wait for a jungler swap',
            ja: 'より慎重なレーニングに切り替え、ジャングルのスワップを待つ',
            ko: '더 보수적으로 라인전하면서 정글 스왑 기다리기',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '已经开始红温了，被克制这件事本身就让人恼火',
            en: 'Already tilting. Getting countered in champ select is infuriating',
            ja: 'すでにガチギレ。チャンプセレクトでカウターを取られるのが腹立つ',
            ko: '이미 멘붕 옴. 챔선에서 카운터 당하는 것 자체가 화남',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // Q20 — Nerve + Mental
    {
      id: 'lol-q20',
      kind: 'compound',
      text: {
        zh: '你准备冲一波高风险的塔下击杀，结果没成，死了，你……',
        en: 'You go for a risky tower dive, it fails, you die. You…',
        ja: 'リスクの高いタワーダイブを試みたが失敗して死んだ。あなたは……',
        ko: '리스크 높은 타워 다이브 시도했다가 실패해서 죽었다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '复活后反思了三秒，接着又找机会塔下强杀',
            en: 'Three seconds of reflection, then you\'re looking for another dive',
            ja: '3秒だけ反省して、次のダイブチャンスを探し始める',
            ko: '3초 반성하고 바로 다음 다이브 기회 탐색',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '开始在聊天框里骂自己为什么要那样做',
            en: 'Type in chat questioning your own decision-making',
            ja: 'チャットで自分の判断を責め始める',
            ko: '채팅에서 왜 그랬나 자책하기 시작',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '心里记下：下次要更谨慎，停止激进操作一段时间',
            en: 'Note it mentally: be more careful next time, dial back the aggression',
            ja: '心に留める：次はもっと慎重に。しばらく積極的なプレイを控える',
            ko: '머릿속에 기록: 다음엔 더 신중하게. 공격적 플레이 잠시 자제',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '心情崩了，觉得自己今天状态不行，已经在想改变策略',
            en: 'Mood tanks. Today\'s not your day and you\'re already rethinking everything',
            ja: '気分が落ちる。今日は調子悪いと感じて、戦略を見直し始める',
            ko: '기분 바닥. 오늘 컨디션 아니라고 느끼며 전략 전면 재검토',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // Q21 — Nerve + Mental
    {
      id: 'lol-q21',
      kind: 'compound',
      text: {
        zh: '你主动找机会打架，结果发现自己走进了对方的包围圈，你……',
        en: 'You look for a fight and walk into the enemy\'s trap. You…',
        ja: '自分から戦いを求めたら、罠にはまってしまった。あなたは……',
        ko: '싸움 찾으러 갔다가 상대 포위망에 걸렸다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '闪现逃跑，保命要紧，自己进包围圈就是走位失误',
            en: 'Flash out and escape. Your fault for walking in; staying would be worse',
            ja: 'フラッシュで逃げる。自分のミス。残るともっと悪くなる',
            ko: '플래시 써서 탈출. 내 실수로 들어간 거니까 더 나빠지기 전에',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '硬刚到底，在包围圈里打出一个惊天逆转',
            en: 'Fight through it. A surrounded 1v4 comeback is peak gaming',
            ja: '最後まで戦う。包囲された状態からの1v4逆転が最高のゲーム体験',
            ko: '끝까지 싸우기. 포위당한 상태에서 1v4 역전이 최고의 순간',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '活了就发个"牛逼"，死了就在聊天框骂自己"菜"',
            en: 'If you survive: "nice outplay." If you die: "diff player"',
            ja: '生き残ったら「うまい」。死んだら「雑魚すぎ」とチャットする',
            ko: '살면 "아웃플레이". 죽으면 채팅에 "차이나는 실력" 씀',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '走位硬抗一波，最后时刻找机会逃脱，心跳还没平稳',
            en: 'Weave through long enough to find an escape, heart still pounding',
            ja: '動き続けて最後に逃げる隙を見つける。心臓がまだドキドキしてる',
            ko: '버티면서 탈출 틈 찾기. 심장이 아직 두근거리는 중',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q22 — Tempo + Bond
    {
      id: 'lol-q22',
      kind: 'compound',
      text: {
        zh: '你觉得什么时候应该结束游戏？',
        en: 'When do you think it\'s time to end the game?',
        ja: 'いつゲームを終わらせるべきだと思う？',
        ko: '게임을 언제 끝내야 한다고 생각해?',
      },
      options: [
        {
          label: {
            zh: '一拿到大龙 buff 就全队聚起来推，越快越好',
            en: 'The moment Baron buff drops: group up and push immediately',
            ja: 'バロンバフが出たらすぐに全員集まってプッシュ。速ければ速いほどいい',
            ko: '바론 버프 생기자마자 전원 집합해서 즉시 push. 빠를수록 좋음',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '先拉通装备效率，等最后一件装备出了再说',
            en: 'Wait until the key item finishes. Efficiency first',
            ja: 'キーアイテムが完成してから動く。効率を優先する',
            ko: '핵심 아이템 완성 후 행동. 효율 우선',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '队友齐了就推，人不到不动',
            en: 'Only push when everyone\'s grouped. Partial pushes lose',
            ja: '全員集まったらプッシュ。不完全な状態では動かない',
            ko: '전원 모이면 push. 일부만 있으면 안 움직임',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '抓到对面单独行动的人就直接推，管他队友在不在',
            en: 'If you catch someone alone, start pushing. Don\'t wait for stragglers',
            ja: '相手が孤立したらすぐにプッシュ。仲間を待たない',
            ko: '상대 혼자 잡히면 바로 push. 팀원 기다리지 않음',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // Q23 — Tempo + Bond
    {
      id: 'lol-q23',
      kind: 'compound',
      text: {
        zh: '你喜欢的游戏风格是……',
        en: 'Your preferred game style is…',
        ja: '好きなゲームスタイルは……',
        ko: '선호하는 게임 스타일은……',
      },
      options: [
        {
          label: {
            zh: '快速推进，不给对面发育时间，速推结束',
            en: 'Fast push. Deny them scaling time and close it out',
            ja: '速攻プッシュ。育てる時間を与えずに終わらせる',
            ko: '빠른 push. 상대 성장 시간 뺏고 마무리',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '耐心积累资源，到后期碾压对面，稳稳吃局',
            en: 'Patient farming, then dominate late with superior resources',
            ja: '丁寧なファーミングで後半にリソース差で圧倒する',
            ko: '차분히 자원 쌓고 후반에 차이로 압도',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '和队友一起快速推进，5人聚起来统一前线',
            en: 'Fast with the whole team. Five people pushing as one',
            ja: 'チーム全員で速攻。5人が一丸となってプッシュ',
            ko: '팀 전체가 빠르게. 5명이 하나로 push',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '和队友缓慢蚕食对面，控制每个点位不急于结束',
            en: 'Slow grind with the team, control every objective before ending',
            ja: 'チームとゆっくり侵食し、すべての目標を確保してから終わらせる',
            ko: '팀이랑 천천히 잠식하며 목표 하나씩 확보 후 마무리',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // Q24 — Tempo + Intel
    {
      id: 'lol-q24',
      kind: 'compound',
      text: {
        zh: '你会怎么选择自己的主力英雄？',
        en: 'How do you decide which champion to main?',
        ja: 'メインチャンピオンをどうやって選ぶ？',
        ko: '메인 챔피언은 어떻게 결정해?',
      },
      options: [
        {
          label: {
            zh: '选速战速决型英雄，能在对线期直接结束的那种',
            en: 'Pick an early-game bully who can end lanes and snowball fast',
            ja: '早期決着型を選ぶ。レーン戦を制してスノーボールできるやつ',
            ko: '초반 결착형 챔피언. 라인전 끝내고 빠르게 스노우볼 굴리는 타입',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '跑分数据高的强势版本英雄，每个版本换一个',
            en: 'Highest win-rate pick of the patch. Switch every time the meta shifts',
            ja: 'パッチごとに最高勝率のチャンピオンを選ぶ。環境が変わればすぐ変更',
            ko: '패치별 최고 승률 픽. 메타 바뀌면 바로 갈아탐',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉喜欢的就练，跟版本强弱没什么关系',
            en: 'Play whatever you enjoy. Patch strength is irrelevant',
            ja: '気に入ったものを練習する。環境の強さは関係ない',
            ko: '마음에 드는 거 연습. 패치 강함은 관련 없음',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '主练一个打法灵活的后期英雄，积累长期经验',
            en: 'Commit to a flexible late-game carry. Build long-term experience',
            ja: '汎用性の高い後半型を一体練習して長期的な経験を積む',
            ko: '범용성 높은 후반 캐리 한 개 전문 연습으로 장기 경험 축적',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
  ],
};

export default game;

