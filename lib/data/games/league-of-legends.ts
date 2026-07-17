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
        zh: '宏观会计师',
        en: 'Macro Accountant',
        ja: 'マクロ会計士',
        ko: '매크로 회계사',
      },
      oneLiner: {
        zh: '信宏观不信手感，把 LoL 打成复式记账',
        en: 'Doesn\'t believe in outplays. Believes in gold graphs.',
        ja: 'マクロ一本槍。LoLは複式簿記だと思ってる',
        ko: '감보다 매크로. LoL을 엑셀로 돌리는 사람',
      },
      description: {
        zh: '峡谷里没有奇迹，只有资源差——这是你信的唯一真理。对线你埋头补刀，龙坑你永远第一个报点，装备一超过对面 1000 金，脑子里已经开始拉表格。队友互喷的时候你不搭话，不是脾气好，是回一句嘴的三秒能多补一刀。你也不头铁冲脸，冲脸这种事在账本上写作"宏观失误"，不好看。有人说你打得像在上班？某种程度上，还真是。',
        en: 'You believe in one law of the Rift: no miracles, only gold differentials. You farm quietly in lane, call dragon spawns first every single time, and the moment the gold lead crosses 1,000, a spreadsheet starts assembling itself in your head. Teammates flame each other in chat; you don\'t join in, not because you\'re calm, but because three seconds of typing costs you a creep. You don\'t tower dive on tilt either — diving without a read is what the ledger calls a macro error, and macro errors don\'t look good on the books. Someone says you play like it\'s a day job. Honestly, fair.',
        ja: '峡谷に奇跡はない。あるのはゴールド差だけ——それがあなたの唯一の信条だ。レーンでは黙々とCSを取り、ドラゴン湧きは毎回真っ先に報告する。ゴールド差が1000を超えた瞬間、頭の中では勝手に表計算が組み上がる。チームメイトがチャットで喧嘩しても口を挟まない。優しいからじゃない、言い返す3秒でCSが1個増えるからだ。無謀なタワーダイブもしない——それは帳簿の上では「マクロミス」と呼ばれるもので、決算が悪くなる。「仕事してるみたい」と言われることもある。実際、そうかもしれない。',
        ko: '협곡에 기적 같은 건 없다. 있는 건 골드 차이뿐 — 이게 당신이 믿는 유일한 법칙이다. 라인에서는 묵묵히 CS를 챙기고, 드래곤 스폰은 항상 제일 먼저 보고한다. 골드 차가 1000 넘는 순간 머릿속에서 표가 자동으로 그려진다. 팀원들이 채팅에서 싸워도 안 끼어든다. 착해서가 아니라 말대꾸할 3초면 CS 하나 더 먹을 수 있어서다. 무리한 타워 다이브도 안 한다 — 그건 장부상 "매크로 실수"라 불리는 거고, 결산이 안 예쁘게 나온다. "일하는 것 같다"는 말도 듣는다. 사실 틀린 말은 아니다.',
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
        zh: '峡谷托儿所所长',
        en: 'Rift Babysitter',
        ja: '峡谷保育士',
        ko: '협곡 육아 전문가',
      },
      oneLiner: {
        zh: '队友一红温你就自动切换"哄娃模式"',
        en: 'Every lobby\'s unlicensed daycare worker — teammates included',
        ja: '味方が拗ねた瞬間、自動で「保育モード」に切り替わる',
        ko: '팀원이 멘붕하면 자동으로 "육아 모드" 켜지는 사람',
      },
      description: {
        zh: '对你来说，"FF15"弹出来不代表要输了，代表"上班时间"到了。你天生对队友情绪敏感：谁快红温、谁在准备 int、谁只差一句话就要挂机走人，你比他们自己都先知道。你想赢，但你更怕眼睁睁看着队伍在聊天框里自己打起来。于是你一边刷"别急能赢"哄着大家，一边偷偷算这局翻盘率还剩多少。经验证明：大多数时候你没哄好队友，先把自己送了。',
        en: 'For you, an FF15 vote popping up doesn\'t mean the game is lost. It means your shift just started. You can read a teammate\'s mood before they can: who\'s two deaths from tilting, who\'s quietly plotting to int, who needs one more bad joke to just AFK. You want to win, sure. But what you actually can\'t stand is watching your team implode in chat while the game is still live. So you type "we got this, lock in" on a loop while secretly running the comeback math in your head. Most nights, the teammate survives. You don\'t — you die trying to walk them back from the ledge.',
        ja: 'あなたにとって、FF15の投票が出るのは負けを意味しない。「出勤時間」が来ただけだ。誰があと2デスでティルトするか、誰がひそかにintを狙っているか、誰があと一言でAFKするか——本人より先にわかる。勝ちたい気持ちはある。でも本当に耐えられないのは、試合中にチームがチャットで内輪もめして崩壊していく光景だ。だから「まだいける、集中しよう」と唱えながら、頭の中でひそかに逆転の確率を計算している。たいていチームメイトは救われる。救いに行ったあなたの方が先に死ぬ。',
        ko: '당신에게 FF15 투표창은 진 게 아니라 "출근 시간"이 됐다는 뜻이다. 누가 2데스만 더 하면 멘붕할지, 누가 몰래 인팅 준비 중인지, 누가 한마디만 더 들으면 AFK할지 — 본인보다 먼저 안다. 이기고 싶은 마음은 진짜다. 근데 진짜 못 견디는 건 게임 도중에 팀이 채팅으로 서로 무너지는 걸 지켜보는 거다. 그래서 "아직 할 수 있어, 집중하자"를 무한 반복하면서 속으로는 역전 확률을 계산한다. 대부분 팀원은 산다. 구하러 간 당신이 먼저 죽는다.',
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
        zh: '后期苟道信徒',
        en: 'Late-Game Messiah',
        ja: '後半覚醒教の伝道師',
        ko: '왕귀 전도사',
      },
      oneLiner: {
        zh: '六神之前都叫"苟"，六神之后才叫"信仰"',
        en: 'Not slow. Scaling. You\'ve said this 70 games running.',
        ja: '遅いんじゃない、覚醒待ちだ——70戦こう言い続けてる',
        ko: '느린 게 아니라 왕귀 준비 중 — 70판째 같은 말',
      },
      description: {
        zh: '你不是慢，你是"苟"。前期让线守家，中期憋着不说话攒装备钱，等六神一件件落地，你才觉得这把游戏正式开始。你信奉"苟道"：忍到最后，笑到最后。大部分局你根本苟不到六神——游戏 35 分钟就打完了，连觉醒的门槛都没摸到。但那几把真苟出来的对局，截图现在还在手机相册置顶。',
        en: 'You\'re not slow. You\'re a believer. Early game you give up the lane and hold the line. Mid game you say nothing and stack gold. Then the sixth item drops, and for one glorious teamfight you are the reason the Rift exists. You preach the gospel of scaling to anyone who\'ll listen: hold on, it gets better. Most nights the sermon doesn\'t finish — the game ends at 35 minutes before your build does. But the handful of times you actually hit six items live on, pinned to the top of your camera roll.',
        ja: '遅いんじゃない。信者なんだ。序盤はレーンを譲って耐える。中盤は黙ってゴールドを貯める。6アイテム目が落ちた瞬間、そのチームファイトの主役はあなたになる。「後半は目覚める」——その教義を誰彼構わず説いて回る。たいていは説教が終わる前にゲームが終わる。35分でフルビルドの前に決着がつく。でも本当に6アイテム揃った試合のスクリーンショットは、今もカメラロールのトップに固定されている。',
        ko: '느린 게 아니다. 왕귀를 믿는 거다. 초반엔 라인 내주고 버틴다. 중반엔 말없이 골드만 모은다. 6템 마지막 하나가 뜨는 순간, 그 팀파이트의 주인공은 당신이다. "후반 되면 달라진다" — 이 교리를 아무한테나 전도하고 다닌다. 대부분은 설교가 끝나기 전에 게임이 끝난다. 35분에 풀빌드도 못 채우고 게임 종료. 근데 진짜 왕귀 성공한 그 몇 판 스크린샷은 아직도 갤러리 맨 위에 고정돼 있다.',
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
        zh: '你是真的想赢的，这一点无法否认。问题是你"想赢"的方式是不停地给队友布置任务、在语音里报点、在聊天框里贴出行动指示。你红温的时候不是因为输，是因为队友没按你说的做。你叫他们聚，他们偏要分路；你叫他们开团，他们偏要回家买装备。技术不够只是一方面——带节奏这件事，你是真的比大多数人在行。输了之后你还会认真复盘责任占比：自己 3%，剩下两个人各 40%，这道算术题你算得比补刀还熟。',
        en: 'You genuinely want to win. Nobody disputes that. The issue is your version of winning involves issuing real-time tactical updates in voice chat while simultaneously flaming the jungle in all-chat. When you\'re "红温" (red-hot, tilted), it\'s not because you lost — it\'s because your team ignored the perfect call. You ping to group; they split anyway. You call for a fight; they go back to shop instead. Mechanics are only part of the story here — you\'re genuinely better than most people at reading the game. And after a loss, you\'ll do the math out loud: your mistake gets filed at 3%, and the other two get 40% and 40%. You\'ve run that calculation more times than you\'ve checked your own CS.',
        ja: '勝ちたい気持ちは本物だ。それは誰も否定しない。問題は、勝ち方がボイスチャットでリアルタイム戦術指示を出しながらジャングルをオールチャットで責めることだ。ガチギレするのは負けたからじゃない——チームが完璧な指示を無視したからだ。集合ピンを打っても分裂される。開幕を呼んでも家に帰って装備を買われる。技術不足は一部の理由に過ぎない——試合を読む力は本当に大半の人より上だ。負けた後は責任の配分まで真面目に計算する：自分のミスは3%、残り二人が40%ずつ。この計算、CSの確認より慣れている。',
        ko: '이기고 싶은 마음은 진짜다. 아무도 그건 안 부정한다. 문제는 이기는 방식이 보이스챗에서 실시간 전술 지시 내리면서 동시에 올채팅으로 정글 욕하는 거다. 멘붕하는 이유가 진 게 아니라 팀이 완벽한 콜을 무시해서다. 집합 핑 찍어도 다들 갈라진다. 한타 부르면 굳이 귀환해서 템 산다. 실력 부족은 일부일 뿐이다 — 게임 읽는 눈은 확실히 대부분보다 낫다. 지고 나면 책임 지분까지 진지하게 계산한다: 내 실수는 3%, 나머지 둘은 40%씩. 이 계산, CS 세는 것보다 손에 익었다.',
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
        zh: '全员静音老玩家',
        en: 'Muted Veteran',
        ja: '全ミュート古参',
        ko: '전음 고인물',
      },
      oneLiner: {
        zh: '老玩家的第一反应是静音，第二反应是把 LoL 当单机下',
        en: 'Been here since Season 3. Still mutes everyone on principle.',
        ja: 'シーズン3から生き残ってる。今も全員ミュートが信条',
        ko: '시즌 3부터 살아남음. 아직도 전체 음소거가 신념',
      },
      description: {
        zh: '进局第一件事：全屏静音。不是脾气差，是玩了这么多年早就算清楚了：聊天框的噪音和胜率成负相关。你在这游戏里的资历比一半队友的账号年龄都大，见过的版本改动比大多数人见过的皮肤还多。LoL 对你来说早就不是团队游戏，是一种单机棋类，每步在脑内推演三步。队友不知道你在干什么，你也懒得解释——解释是新人才做的事。语音永远关着，段位却在稳步往上爬，没人知道为什么。',
        en: 'First move every game: mute all. Not because you\'re antisocial — years of data taught you that chat noise correlates negatively with win rate. You\'ve been playing longer than half your teammates\' accounts have existed, and you\'ve outlasted more balance patches than most people have owned skins. LoL stopped being a team game for you a long time ago. It\'s solo chess now, three moves deep in your head before anyone else has pinged once. Nobody knows what you\'re doing. You\'ve stopped explaining — explaining is a new-player habit. Voice chat stays off. Rank keeps climbing. Nobody\'s figured out why.',
        ja: '試合開始、最初の行動は全員ミュート。非社交的だからじゃない。何年もやってきて、チャットのノイズと勝率が負の相関にあることをもう知っているからだ。あなたの在籍年数は、チームメイトの半分のアカウント年齢より長い。見てきたパッチ改修の数は、たいていの人が持ってるスキンの数より多い。LoLはもうチームゲームじゃない。ソロチェスだ。誰かがピンを打つ前に、頭の中で3手先まで読み終えている。誰もあなたが何をしているか知らない。説明もしない——説明は新人がすることだ。ボイスは常にオフ。ランクは着実に上がる。誰も理由がわからない。',
        ko: '게임 시작하면 첫 행동은 전체 음소거. 비사교적이어서가 아니다. 몇 년 하다 보니 채팅 노이즈랑 승률이 음의 상관관계라는 걸 이미 알아서다. 게임 짬으로 치면 팀원 절반의 계정 나이보다 오래됐고, 겪어본 패치 개편 수가 웬만한 사람 스킨 수보다 많다. LoL은 이제 당신한테 팀 게임이 아니다. 솔로 체스다. 누가 핑 한 번 찍기도 전에 머릿속으로 3수 앞을 읽어놨다. 아무도 뭘 하는지 모른다. 설명도 안 한다 — 설명은 뉴비들이나 하는 거다. 보이스는 항상 꺼져 있다. 랭크는 계속 오른다. 이유는 아무도 모른다.',
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
        zh: '你是单排的受害者，这一点毋庸置疑。每一局都有至少一个"菜鸡"精准出现在你这边；每一次失误都能溯源到"队友"；每一次资源落后都是"jungle diff"，不是你补刀不够。你把这套理论叫"团队运"——不是玄学，是被验证过很多次的统计规律。风控稳健，不轻易冒险，钝感力强，不容易崩。但你心里清楚自己是钻石水平，只是运气从没打算跟你交朋友。听说 Faker 都在韩服单排里被气到过，你和他的共同点，可能比你想的多。',
        en: 'You are, statistically, the victim of solo queue. There\'s no debate here. Every game produces at least one 급식 (cafeteria noob) who lands precisely on your team. Every mistake traces back to "a teammate." Every gold deficit gets logged as jungle diff, never as your own CS numbers. You call this theory "team luck" — not superstition, a pattern you\'ve documented across dozens of games. You\'re methodical, risk-averse, and hard to tilt. But somewhere deep down you know you\'re Diamond-level talent, and luck just never wanted to be friends with you. Word is even Faker has ranted about Korean server inting. You and him might have more in common than you\'d guess.',
        ja: 'ソロキューの被害者であることは統計的に証明済みだ。議論の余地はない。毎試合、必ず1人の急食（雑魚）が味方に降臨する。すべてのミスは「チームメイト」に遡れる。すべてのゴールド差は「ジャングルdiff」のせいで、自分のCS不足のせいじゃない。この理論を「チーム運」と呼んでいる——オカルトじゃない、何十試合も観察して導いた統計法則だ。慎重でリスクを避け、簡単にはティルトしない。でも心の奥では自分がダイヤレベルの実力者だとわかっている。運の方があなたと友達になりたがらないだけだ。Fakerも韓国サーバーのint（意図的な敗因）にキレたことがあるらしい。あなたとFakerの共通点は、思ったより多いかもしれない。',
        ko: '당신은 통계적으로 솔랭의 피해자다. 반박의 여지가 없다. 매 게임 최소 한 명의 급식이 정확히 우리 팀에 배정된다. 모든 실수는 "팀원" 탓으로 거슬러 올라간다. 모든 골드 열세는 "정글 diff"지, 본인 CS 부족이 아니다. 이 현상에 정확한 이름도 있다 — 억까. 미신이 아니라 수십 판 관찰로 검증된 통계 법칙이다. 신중하고 리스크 회피적이고 잘 안 무너진다. 근데 속으로는 다이아 실력이라는 걸 안다. 운이 당신이랑 친해질 생각이 없을 뿐. Faker도 한국 서버 인팅에 열받은 적 있다더라. 당신이랑 Faker, 생각보다 공통점 많을지도 모른다.',
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
        zh: '吸血大将军',
        en: 'CS Vampire',
        ja: '吸血大将軍',
        ko: '고혈 대장군',
      },
      oneLiner: {
        zh: '你的对线不是打架，是抽血',
        en: 'A tower dive at 5 minutes isn\'t aggression. It\'s just breakfast.',
        ja: '5分のタワーダイブはただの朝食だ',
        ko: '5분 타워 다이브는 공격이 아니라 그냥 아침 식사다',
      },
      description: {
        zh: '你的对线哲学很简单：对面是猎物，你是猎手。团队状态不在考虑范围内，你在意的只有对面的血条和走位破绽。你很少共享资源——分享的前提是你先承认辅助也配得上一颗补刀，而你从没这么想过。你要的不是团队胜利，是数据：几分钟拿到第一滴血，几分钟把对面按在塔下抽干经济。Tyler1 的频道是你的精神图腾，"running it down" 你嘴上从不承认，但死亡热力图不会说谎。',
        en: 'Your laning philosophy is simple: the enemy is prey, you\'re the hunter. Team state doesn\'t factor into your calculations. Only their HP bar and their last footwork mistake do. You rarely share resources, because sharing requires believing your support deserves a creep, and you\'ve never once believed that. You don\'t want a team win. You want the numbers: first blood by minute five, enemy pinned under their own tower bleeding gold by minute ten. Tyler1\'s channel is your church. "Running it down" is something you\'d never admit to. Your death-heatmap disagrees.',
        ja: 'レーニング哲学はシンプルだ：相手は獲物、自分は狩人。チームの状況は計算に入らない。相手のHPバーと最後のポジショニングミスだけが重要だ。リソースはめったに共有しない——共有するにはサポートもCS一本の価値があると認める必要があるが、そう思ったことは一度もない。欲しいのはチームの勝利じゃない。数字だ：5分でファーストブラッド、10分で相手をタワー下に押し込んでゴールドを吸い尽くす。Tyler1のチャンネルが心の拠り所だ。「running it down」は口では絶対認めない。でもデスヒートマップは嘘をつかない。',
        ko: '라이닝 철학은 간단하다: 상대는 사냥감, 나는 사냥꾼. 팀 상황은 계산에 안 들어간다. 상대 체력바랑 마지막 포지셔닝 실수만 중요하다. 자원은 거의 안 나눈다 — 나누려면 서폿도 CS 하나 받을 자격이 있다고 인정해야 하는데, 그렇게 생각해본 적이 없다. 원하는 건 팀 승리가 아니라 숫자다: 5분에 퍼블, 10분에 상대를 자기 타워 밑에 박아넣고 골드를 쭉쭉 빨아먹는다. Tyler1 채널이 정신적 고향이다. "Running it down"은 입으로는 절대 인정 안 한다. 근데 데스 히트맵은 거짓말 안 한다.',
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
        zh: '峡谷留不住你。大乱斗才是你真正的家：五人挤在一座桥上乱成一锅粥，随机英雄，随时可能爆的情绪，这才是 LoL 最有趣的形态。你独行、你激进、你容易红温，但在嚎哭深渊，这些缺陷反而是特产。你不担心段位，只担心这把能不能出几个段子截图——五个人为了救一个必死的队友，最后五个人一起躺下，这种"团灭全家福"才是你相册里的镇馆之宝。桥宽不过 10 米，发生过最多的人类喜剧。',
        en: 'The Rift couldn\'t hold you. Howling Abyss — five people crammed onto one bridge with random champions and zero chill — is your natural ecosystem. You\'re a solo player who goes all-in on instinct and tilts fast, but in ARAM those traits become features, not bugs. You don\'t track objectives. You track whether the game produced a screenshot-worthy bit — and nothing beats the classic five-for-one: the whole team dying trying to save one already-dead ally, everyone facedown on the bridge together. That\'s the crown jewel of your camera roll. The bridge is maybe ten meters wide. More human comedy has happened there than anywhere else in the game.',
        ja: 'ソモナーズリフトでは抑えられなかった。ハウリングアビス——ランダムチャンピオンで1本の橋に5人詰め込んだ状態——が本当のホームだ。ソロプレイヤーで本能で全力特攻して早くガチギレする。でもARAMではそれが欠陥じゃなくて特産品だ。目標なんて追ってない。そのプレーがクリップするほど面白かったかを追ってる——特に、すでに死んでいる味方1人を救おうとして5人全員が橋の上で折り重なって死ぬ、あの"集団お葬式"こそカメラロールの至宝だ。橋の幅はせいぜい10メートル。この世で一番人間喜劇が起きた場所かもしれない。',
        ko: '소환사 협곡은 너를 못 잡았다. 칼바람 나락 — 랜덤 챔피언으로 다리 하나에 5명 빽빽이 넣은 상태 — 이 진짜 홈이다. 솔로 플레이어에 본능으로 올인하고 빠르게 멘붕한다. 근데 칼바람에서는 그게 결함이 아니라 특산품이다. 목표 같은 거 안 쫓는다. 그 플레이가 드립으로 남을 만큼 웃겼는지 쫓는다 — 특히 이미 죽은 팀원 한 명 구하겠다고 다섯 명이 다리 위에서 한꺼번에 눕는 "떼초상" 각이야말로 갤러리 최고 명예의 전당감이다. 다리 폭은 기껏해야 10미터. 이 게임에서 인간 희극이 제일 많이 일어난 장소일 거다.',
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
        zh: '这把再输一局就掉段，加载界面里一个队友的发言像是来摆烂的，你……',
        en: 'It\'s your demotion match — lose this and you drop a rank. In the loading screen, a teammate\'s chat already reads like they\'re here to troll or go AFK. You…',
        ja: '負けたら即降格の一戦。ロード画面で、あるチームメイトの発言がもうトロール/AFK臭い。あなたは……',
        ko: '지면 바로 강등되는 판. 로딩 화면에서 팀원 한 명 발언이 딱 봐도 트롤/AFK 각. 당신은……',
      },
      options: [
        {
          label: {
            zh: '不管了，直接进，说不定他只是打字冲一点，人没事',
            en: 'Queue in anyway. Maybe the chat was just venting and the game will be fine',
            ja: 'そのまま突入。ただの愚痴で、実際は大丈夫かもしれない',
            ko: '그냥 들어간다. 말이 좀 거칠어도 실제로는 멀쩡할 수도 있잖아',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '秒退，扣多少 LP 都比陪他一起摆烂强',
            en: 'Dodge immediately. Whatever the LP penalty, it beats riding shotgun on a loss',
            ja: '即ダッジ。LPがどれだけ減っても、一緒に投げられるよりマシ',
            ko: '바로 닷지. LP 얼마가 깎이든 같이 던지는 것보단 나음',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先多看一分钟发言再决定，不对劲就退，慢一点没关系',
            en: 'Watch the chat for one more minute before deciding. Bail if it gets worse; no rush',
            ja: 'もう1分だけチャットを見てから判断する。悪化したら抜ける。急がない',
            ko: '1분만 더 채팅 지켜보고 결정. 심해지면 그때 나가도 늦지 않음',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '赌一把，万一他后面上线了呢，退了就是白费一次机会',
            en: 'Gamble on it. What if he actually shows up later? Dodging wastes the attempt',
            ja: '賭けてみる。後で本気出すかもしれない。ダッジしたらそのチャンスを無駄にする',
            ko: '한번 걸어본다. 나중에 진지하게 할 수도 있잖아. 닷지하면 그 기회 자체가 날아감',
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
        zh: '选人界面刚开，有人秒选了你想要的位置，还打字"不给我中就摆烂"，这把你的英雄怎么选？',
        en: 'Champ select just opened. Someone insta-locks the role you wanted and types "give me mid or I troll." How do you pick your champion?',
        ja: 'チャンプセレクトが始まった瞬間、誰かが希望のロールを即ピックして「ミッド譲らないと荒らす」と打ってきた。あなたはどうチャンピオンを選ぶ？',
        ko: '챔피언 선택 창 열리자마자 누가 원하던 포지션을 바로 픽하고 "미드 안 주면 트롤한다"고 친다. 당신은 챔피언을 어떻게 고르나?',
      },
      options: [
        {
          label: {
            zh: '打开副位英雄池，选胜率数据最高的那个，稳妥补位',
            en: 'Check your off-role pool for the highest win-rate pick and swap safely',
            ja: '控えロールの中で勝率データが一番高いチャンピオンを選んで安全に対応する',
            ko: '부캐 포지션 챔피언 풀 열어서 승률 제일 높은 걸로 안전하게 스왑',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '手感说了算，随便换个玩着顺手的位置，别纠结',
            en: 'Go with feel. Swap to whatever role feels comfortable right now, don\'t overthink it',
            ja: '感覚が全て。今しっくりくるロールに切り替える。深く考えない',
            ko: '감이 답이다. 지금 손에 맞는 포지션으로 그냥 바꿈. 고민 안 함',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '打开自己备用英雄的跑分记录，选数据最稳的那个',
            en: 'Pull up your backup champion\'s tracked stats and pick the most consistent one',
            ja: '控えチャンピオンの成績記録を開いて、一番安定してるデータのものを選ぶ',
            ko: '백업 챔피언 전적 기록 열어서 데이터 제일 안정적인 걸로 선택',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '看他打字的语气就知道该不该让，直接凭直觉决定选什么',
            en: 'His tone tells you whether to give in or not. Decide your pick on pure instinct',
            ja: 'あの打ち方でどう対応すべきかわかる。ピックは直感だけで決める',
            ko: '말투 보면 답 나온다. 그냥 직감으로 뭘 픽할지 결정',
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
        zh: '这把输了，但对面打得离谱地好，你会……',
        en: 'You lost, but the enemy played absurdly well. You…',
        ja: '負けた。でも相手が異常に上手かった。あなたは……',
        ko: '졌다. 근데 상대가 말도 안 되게 잘했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '点进对面主页，查一下他是不是代打或者小号，不搞清楚睡不着',
            en: 'Click into the enemy\'s profile and dig into whether they\'re boosted or smurfing. You need to know',
            ja: '相手のプロフィールを開いて、代打（アカウント売買）か即行の腕前か調べる。気になって仕方ない',
            ko: '상대 프로필 들어가서 대리인지 스머프인지 캐본다. 안 캐면 잠이 안 옴',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '截图发小群自嘲一把，输就输了，心里咋想自己清楚，不用查数据',
            en: 'Screenshot it and post to the group chat as a joke on yourself. A loss is a loss; you know how you feel without checking stats',
            ja: 'スクショして仲間内のグループに自虐ネタとして投げる。負けは負け。数字を見なくても自分の感覚でわかる',
            ko: '스크린샷 찍어서 단톡방에 자학개그로 올린다. 진 건 졌지, 기분은 스탯 안 봐도 앎',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '打开自己 op.gg，复盘 KDA 和补刀数，看看是哪里崩的',
            en: 'Open your own op.gg and review your KDA and CS to find where it fell apart',
            ja: '自分のop.ggを開いてKDAとCSを振り返り、どこで崩れたか確認する',
            ko: '내 op.gg 열어서 KDA랑 CS 복기하고 어디서 무너졌는지 확인',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '直接点下一局，赢没赢得漂亮自己心里有数，不用复盘',
            en: 'Queue again immediately. You already know how that game went; no replay needed',
            ja: 'すぐ次のキューに入る。あの試合がどうだったかは自分でわかってる。振り返り不要',
            ko: '바로 다음 큐. 그 판 어땠는지는 이미 스스로 앎. 복기 필요 없음',
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
        zh: '队友在聊天框打了一句"对面是双排，这把团队运没了"，你……',
        en: 'A teammate types in chat: "they\'re duo queued, our team luck is cursed this game." You…',
        ja: 'チームメイトがチャットで「相手デュオだ、今回はチーム運終わったな」と打った。あなたは……',
        ko: '팀원이 채팅에 "상대 듀오임, 이번 판 팀운 나갔다"고 친다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '跟着附和，顺便喊队友干脆抱团莽一波，赌气势能翻盘',
            en: 'Agree, then rally everyone to group up and force fights anyway — momentum over math',
            ja: '同意しつつ、みんなに集合をかけて無理やり戦闘を仕掛ける。勢いで押し切る',
            ko: '맞장구치면서 팀원들한테 그냥 다같이 뭉쳐서 밀어붙이자고 함. 기세로 뒤집기',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '不理这句话，按自己的节奏补刀，输赢是概率问题不是玄学',
            en: 'Ignore it completely and keep farming at your own pace. Win rate is math, not fate',
            ja: '無視して自分のペースでCSを続ける。勝敗は確率の問題であってオカルトじゃない',
            ko: '무시하고 내 페이스대로 CS. 승패는 확률 문제지 미신이 아님',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '打字"别急，先稳住"，顺便提醒大家别被这句话带乱了节奏',
            en: 'Type "relax, hold the line" and remind everyone not to let the comment throw off their play',
            ja: '「焦るな、まず落ち着け」と打って、その一言でリズムを崩さないようみんなに念を押す',
            ko: '"침착해, 일단 버텨"라고 치고 그 말 한마디에 리듬 무너지지 말자고 당부',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '心里觉得他说得有道理，干脆自己单枪匹马莽一波证明还能赢',
            en: 'Privately agree, then solo-force a play just to prove the game\'s still winnable',
            ja: '内心では正しいと思いつつ、自分一人で無理やり仕掛けてまだ勝てると証明しようとする',
            ko: '속으로는 맞는 말이라 생각하면서 혼자 무리하게 들이박아서 아직 이길 수 있다는 걸 증명하려 함',
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
        zh: '你的野区疯狂打"全员出击"的信号，要打一个你觉得肯定要死的团，你……',
        en: 'Your jungler is spam-pinging "all in" on a fight you\'re pretty sure is a death sentence. You…',
        ja: 'ジャングラーが「オールイン」ピンを連打してくる。あなたの目には確実に死ぬ判断に見える。あなたは……',
        ko: '정글이 "다 같이 가자" 핑을 미친 듯이 찍는데, 딱 봐도 죽으러 가는 각이다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '相信他，跟着一起冲，他大概率看到了你没看到的东西',
            en: 'Trust him and commit to the fight. He probably sees something you don\'t',
            ja: '信じて一緒に突っ込む。自分には見えていない何かが見えているはずだ',
            ko: '믿고 같이 간다. 나한테 안 보이는 뭔가가 저 사람 눈엔 보였을 거임',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '疯狂打字劝退，他不听你就越打越急',
            en: 'Type frantically to talk him out of it. The more he ignores you, the more wound up you get',
            ja: '必死に止めようとチャットを連打する。無視されるほど焦りが増す',
            ko: '필사적으로 말리는 채팅 연타. 안 들으면 들을수록 더 조급해짐',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '不跟，退到安全的地方，让他自己试一次',
            en: 'Don\'t follow. Retreat somewhere safe and let him try it solo',
            ja: '付いていかない。安全な場所まで下がって、彼一人にやらせてみる',
            ko: '안 따라감. 안전한 곳으로 빠져서 혼자 해보게 둠',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '被逼着跟一把，心里已经在骂他不听劝',
            en: 'Get dragged into following anyway, already cursing him out in your head for not listening',
            ja: '仕方なく付いていく。心の中ではもう「人の話聞けよ」と毒づいている',
            ko: '어쩔 수 없이 따라간다. 속으로는 이미 말 안 듣는다고 욕하는 중',
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
    // Q25 — Tempo + Intel
    {
      id: 'lol-q25',
      kind: 'compound',
      text: {
        zh: '对线期你怎么安排补刀节奏？',
        en: 'How do you approach CSing in lane?',
        ja: 'レーン中のCSの取り方をどう計画する？',
        ko: '라인전에서 CS 리듬을 어떻게 잡아?',
      },
      options: [
        {
          label: {
            zh: '每分钟目标 10 个刀，低了就复盘在哪里丢的',
            en: 'Target 10 CS per minute and review where you fell short afterward',
            ja: '1分間10CS目標。不足した場合は後で振り返る',
            ko: '분당 10CS 목표. 못 미치면 어디서 놓쳤는지 복기',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '快刀流：能补就补，但对线时机出现就放弃刀',
            en: 'CS when safe, drop farm the moment a kill window opens',
            ja: 'CSできるときにCSして、キルチャンスが来たら諦める',
            ko: '안전할 때 CS, 킬 기회 생기면 CS 포기',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看整体节奏，哪个资源性价比高就先抓哪个',
            en: 'Follow overall rhythm and prioritize whichever resource has highest return',
            ja: '全体的なリズムを見て、最も効率的なリソースを優先する',
            ko: '전체 흐름 보면서 효율 높은 자원부터 챙기기',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '刀到手感就好，手感不好就找团战代替',
            en: 'Farm when you\'re in the groove; replace farming with fighting when the feel is off',
            ja: '調子いいときはCS。調子悪いときはチームファイトで代替',
            ko: '손 맞을 때 CS. 감 없을 때는 싸움으로 대신',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q26 — Flair + Intel
    {
      id: 'lol-q26',
      kind: 'compound',
      text: {
        zh: '你怎么看待"炫技操作"？',
        en: 'What\'s your take on flashy outplays?',
        ja: '「魅せプレイ」についてどう思う？',
        ko: '"화려한 아웃플레이"에 대한 생각은?',
      },
      options: [
        {
          label: {
            zh: '只要效率最高，怎么打都对，炫不炫不重要',
            en: 'Whatever\'s most efficient wins. Style is irrelevant',
            ja: '最も効率的な方法が正解。スタイルは関係ない',
            ko: '효율이 제일 높은 게 정답. 스타일은 관계없음',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '秀起来更开心，即使风险大也值得一试',
            en: 'It\'s more fun when it looks good. Worth the extra risk',
            ja: '見栄えが良い方が楽しい。リスクが高くても試す価値はある',
            ko: '멋있어 보이면 더 재밌다. 리스크 높아도 시도할 가치 있음',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '先数据上正确再说，能秀是奖励，不能秀就算了',
            en: 'Correct play first. If it happens to look flashy, great',
            ja: 'まず正しいプレイをする。見栄えが良ければボーナス',
            ko: '일단 올바른 플레이 먼저. 멋있으면 보너스',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉到位了就出手，秀的到位比数据还爽',
            en: 'When the feel is right, go for it. Nailing a play feels better than any stat',
            ja: '感覚が来たら決める。決まった瞬間の感覚はどんな数字より気持ちいい',
            ko: '감 왔을 때 치고 들어가기. 딱 맞아떨어지는 느낌이 어떤 통계보다 좋음',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q27 — Flair + Intel
    {
      id: 'lol-q27',
      kind: 'compound',
      text: {
        zh: '你如何选择皮肤？',
        en: 'How do you pick skins?',
        ja: 'スキンはどうやって選ぶ？',
        ko: '스킨은 어떻게 고르나요?',
      },
      options: [
        {
          label: {
            zh: '看皮肤特效有没有让音效和技能更清晰，实战优先',
            en: 'Check whether the VFX/SFX make abilities clearer in fights',
            ja: 'エフェクトとサウンドが実戦で見やすくなるか確認する',
            ko: '스킬 이펙트·사운드 효과가 실전에서 더 명확한지 확인',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '帅就行，能看就买，数据和风格一起满足',
            en: 'If it looks sick, that\'s reason enough. Style and performance overlap',
            ja: 'かっこよければいい。見た目と性能が一致してれば買う',
            ko: '멋있으면 그걸로 충분. 스타일이랑 성능 겹치면 구매',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '默认皮肤也无所谓，影响不了技术',
            en: 'Default skin is fine. It doesn\'t affect your mechanics',
            ja: 'デフォルトスキンでもいい。技術には関係ない',
            ko: '기본 스킨도 괜찮다. 실력엔 관계없음',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '喜欢就入，看到好看的皮肤打游戏心情特别好',
            en: 'Buy it if you like it. Playing with a skin you love puts you in a better mood',
            ja: '気に入ったら買う。好きなスキンで遊ぶと気分がいい',
            ko: '마음에 들면 산다. 좋아하는 스킨으로 하면 기분이 달라짐',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q28 — Tempo + Flair
    {
      id: 'lol-q28',
      kind: 'compound',
      text: {
        zh: '你赢了一场快攻局，你会……',
        en: 'You win a game with a super fast push. You…',
        ja: '速攻プッシュで試合に勝った。あなたは……',
        ko: '빠른 push로 게임 이겼다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '发一条朋友圈，晒一下时间短胜率高的战绩',
            en: 'Post the 20-minute win screenshot with the "shortest game" badge',
            ja: '「最短試合」バッジ付きの20分勝利スクリーンショットを投稿する',
            ko: '"최단 게임" 배지 붙은 20분 승리 스크린샷 올리기',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '算一下这局节省了多少时间，高效就行，不用发',
            en: 'Calculate how much time you saved. No need to post anything',
            ja: '節約した時間を計算する。発信する必要はない',
            ko: '아낀 시간 계산하기. 뭔가 올릴 필요 없음',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '慢慢回味，翻看一下刚才打出来的击杀镜头',
            en: 'Slowly replay those kill clips in your head before queuing again',
            ja: 'キルクリップをゆっくり振り返ってから次のキューに入る',
            ko: '킬 클립 천천히 곱씹고 나서 다음 큐 들어가기',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '直接下一局，刚才的战绩不用记，打好眼前的才重要',
            en: 'Queue immediately. Past wins don\'t matter; focus on the next',
            ja: 'すぐ次のキューに入る。過去の勝利は関係ない',
            ko: '바로 다음 큐. 지난 승리는 상관없고 지금이 중요',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // Q29 — Flair + Mental
    {
      id: 'lol-q29',
      kind: 'compound',
      text: {
        zh: '你觉得怎样的结果是"完美的一局"？',
        en: 'What makes a game feel perfect to you?',
        ja: 'あなたにとって「完璧な一試合」とはどんなもの？',
        ko: '당신에게 "완벽한 한 판"이란?',
      },
      options: [
        {
          label: {
            zh: '打出一个漂亮的操作，队友喊了一声"牛逼"',
            en: 'Landing a clean outplay and hearing "nice" from your team',
            ja: 'きれいなアウトプレイを決めて、チームメイトに「うまい」と言われる',
            ko: '깔끔한 아웃플레이 성공하고 팀원한테 "잘한다" 듣기',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '即使输了，整局过得很爽，有个精彩片段值得截图',
            en: 'Even a loss can be perfect if there\'s one highlight worth clipping',
            ja: '負けても、クリップする価値のあるハイライトがあれば完璧だ',
            ko: '져도 클립할 만한 하이라이트가 있으면 완벽',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '赢了就完美，过程不重要，结果才是唯一标准',
            en: 'Winning is the only metric. Process is noise',
            ja: '勝利が唯一の基準。プロセスはノイズだ',
            ko: '이기는 게 유일한 기준. 과정은 노이즈',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '全程状态在线，没有一次因为队友崩掉情绪',
            en: 'Playing in flow all game without tilting once over teammates',
            ja: '全試合ゾーン状態で、チームメイトに一度も乱されなかった',
            ko: '전 경기 몰입 상태로 팀원 때문에 단 한 번도 멘붕 안 함',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q30 — Tempo + Nerve (peak-end: wildly funny last question)
    {
      id: 'lol-q30',
      kind: 'compound',
      text: {
        zh: '游戏剩下 30 秒，你们要决战了，你……',
        en: 'Thirty seconds left in the game, final fight incoming. You…',
        ja: 'ゲーム残り30秒、最終決戦が迫る。あなたは……',
        ko: '게임 30초 남았고 최종 결전이 다가온다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '直接开团，不管血量，人死了就 respawn，输了就下一局',
            en: 'Charge in regardless of HP. Death means respawn; loss means next game',
            ja: 'HPを無視して突撃。死んだらリスポーン、負けたら次のゲーム',
            ko: '체력 무시하고 돌진. 죽으면 리스폰이고 지면 다음 게임',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等到有人犯错才出手，急了容易送',
            en: 'Wait for their mistake. Impatience is how games get thrown',
            ja: '相手がミスするまで待つ。焦りはゲームを投げることになる',
            ko: '상대 실수 날 때까지 대기. 조급하면 게임 던짐',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先发制人，用大招起手打断对方节奏，然后速推',
            en: 'Open with your ult, disrupt their rhythm, then speed-close the game',
            ja: 'アルティメットで先手を取り相手のリズムを崩し、速攻で終わらせる',
            ko: '궁으로 선수 치고 상대 리듬 붕괴시킨 다음 속공으로 마무리',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等大家集合好再动，宁可慢一点也不要失去人数优势',
            en: 'Wait for everyone to group up. Slower is fine; 5v5 beats 4v5 every time',
            ja: '全員が集まるのを待つ。少し遅くてもいい。5v5は4v5より必ず強い',
            ko: '전원 집합 기다리기. 조금 느려도 좋으니 5v5가 4v5보다 항상 강함',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
  ],
};

export default game;


