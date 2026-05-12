import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'overwatch-2',
  title: {
    zh: '守望先锋2',
    en: 'Overwatch 2',
    ja: 'オーバーウォッチ2',
    ko: '오버워치 2',
  },
  deck: {
    zh: '你是哪种OW2玩家？',
    en: 'What kind of Overwatch 2 player are you?',
    ja: 'あなたはどんなOW2プレイヤー？',
    ko: '당신은 어떤 오버워치 2 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的守望先锋2玩家类型。大招经济会计还是击杀镜头主演？8 种原型、6 维雷达、专属玩家身份码，截图发群用的那种。',
    en: '30 questions to find your OW2 player identity. 8 archetypes built on ult economy, C9 trauma, and flank geometry — plus a 6-axis radar and a shareable player code.',
    ja: '30問でOW2プレイヤータイプを診断。アルト経済からC9トラウマまで8タイプ、6軸レーダー付き。次のマッチ前にシェアしよう。',
    ko: '30문제로 알아보는 오버워치 2 플레이어 유형. 궁 경제학자부터 킬캠 주인공까지 8가지 유형, 6축 레이더 차트 포함.',
  },
  dominantAxes: ['Bond', 'Tempo', 'Mental'] as const,
  archetypes: [
    // ── 1. ult-economist ─────────────────────────────────────────────────────
    {
      slug: 'ult-economist',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'low',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '大招经济会计',
        en: 'Ult Economist',
        ja: 'アルト経済会計士',
        ko: '궁극기 경제학자',
      },
      oneLiner: {
        zh: '"别交大招，下一波再说"',
        en: '"Don\'t pop it yet — wait for the next fight"',
        ja: '"まだウルト使わないで。次のファイトまで待つ"',
        ko: '"아직 궁 쓰지 마, 다음 싸움에 써"',
      },
      description: {
        zh: '你不是不想赢，你只是比所有人都清楚"现在交大招等于亏"。你脑子里有一张实时的大招进度表，五个队友谁充到多少你都知道。对面纳米加强的时机差了三秒钟，这局就是你送的。你不骂人，你只是沉默地记住了每一次大招浪费的时间戳。韩国战队那套体系，你懂，你只是没有合适的队友配合。',
        en: 'You track ult percentages the way a CFO tracks burn rate. Five players, five bars, one mental spreadsheet running in real time. When the enemy Ana drops Nano Boost at the wrong moment, you notice the three-second window they wasted. You don\'t say anything. You don\'t need to. You just file it under "preventable loss" and queue again. Korean pro teams play this way and you take that as a personal compliment.',
        ja: 'ウルトのパーセントを確認しないと動けないタイプだ。5人分の進捗を頭に入れて、最適なタイミングを計算しながらファイトを見ている。アナのナノブーストが3秒ズレただけで「負けた理由」が確定する。何も言わない——ただ心の中でログを取る。韓国のプロチームと同じ考え方だと思ってるけど、チームメイトがついてこない問題はある。',
        ko: '궁 퍼센트를 추적하는 게 재무팀이 번레이트 보는 것과 같다고 생각한다. 5명 분 진행 상황이 항상 머릿속에 있고, 아나가 나노 부스트를 3초 늦게 쓰면 그 손실이 정확히 계산된다. 아무 말도 안 한다. 그냥 "막을 수 있었던 패배"로 분류하고 다시 큐를 잡는다. 한국 프로팀이 이렇게 한다는 걸 알고, 그게 칭찬처럼 들린다.',
      },
      symptoms: [
        {
          zh: '队友喊"大招交了"你第一个念头是"几点充的？"',
          en: 'When a teammate says "ult used," your first thought is "what percentage did they pop it at?"',
          ja: 'チームメイトが「ウルト使った」と言うと、まず「何パーセントで使ったの？」と思う',
          ko: '팀원이 "궁 썼어"라고 하면 첫 생각이 "몇 퍼에서 썼어?"다',
        },
        {
          zh: '你在复盘界面反复确认大招交换时机，不是胜负，是时机',
          en: 'You review the match replay for ult timing, not kill counts',
          ja: 'リプレイで確認するのはキル数じゃなくてウルトのタイミングだ',
          ko: '경기 복기할 때 킬 수가 아니라 궁 타이밍을 확인한다',
        },
        {
          zh: '有人在团战外交大招，你沉默五秒钟，那五秒是在计算损失',
          en: 'Someone pops ult outside a team fight. You go quiet for five seconds. Those five seconds are a damage assessment.',
          ja: 'チームファイト外でウルトを使う人がいると5秒黙る。その5秒は損害計算の時間だ。',
          ko: '팀파이트 밖에서 궁 쓰는 사람이 있으면 5초 동안 조용해진다. 그 5초는 손실 계산 시간이다.',
        },
        {
          zh: '大招满了你还是不交，因为"时机还没到"',
          en: 'Ult is full. You still hold it. "The moment hasn\'t arrived yet."',
          ja: 'ウルトが溜まっても使わない。「まだタイミングじゃない」',
          ko: '궁 다 찼는데도 안 쓴다. "아직 타이밍이 아니야."',
        },
        {
          zh: '每次负掉一局，你能说出对面大招优势从哪一分钟开始建立',
          en: 'After every loss you can name the exact minute the enemy\'s ult advantage became decisive',
          ja: '負けるたびに、相手のウルト優位がいつから生まれたか分かる',
          ko: '질 때마다 상대 궁 우위가 몇 분부터 생겼는지 정확히 알고 있다',
        },
      ],
      rivalSlug: 'voice-line-saboteur',
      bestSquadSlug: 'payload-parent',
    },

    // ── 2. c9-trauma-curator ─────────────────────────────────────────────────
    {
      slug: 'c9-trauma-curator',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'low',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: 'C9阴影策展人',
        en: 'C9 Trauma Curator',
        ja: 'C9トラウマ学芸員',
        ko: 'C9 트라우마 큐레이터',
      },
      oneLiner: {
        zh: '永远盯着推车点，因为那段历史没法忘',
        en: 'Never stops watching the payload, because Cloud9 happened',
        ja: 'ペイロードから目を離さない。あの歴史が忘れられないから',
        ko: '페이로드에서 눈을 못 떼. C9의 역사가 지워지지 않으니까',
      },
      description: {
        zh: '你知道C9是什么。不是因为你查过，而是因为你亲身经历过——胜负已定，队友追击到底，推车点空了三十秒，对面回来了。从那以后，"赢了团战就碰车"成了你的游戏信仰。你不是悲观主义者，你只是拥有了其他人还没来得及学会的教训。你会在语音里轻声说："有人在车上吗？"即使你们明显在赢。',
        en: 'You don\'t need to be told what C9 means. You lived it. Fight won, team chasing kills, payload sitting untouched for thirty-one seconds, enemy respawns, overtime. Since that day, "touch the cart after winning the fight" is a law written into your nervous system. Not pessimism — institutional memory. In voice chat you\'ll say "someone on cart?" even when you\'re up by four players. Just to be sure.',
        ja: 'C9が何か、説明されなくても分かる。実際に経験したから。チームファイト制圧、全員が追撃に走り、ペイロードが31秒放置されて、相手が復活してオーバータイムに入った。あの日から「ファイト勝ったらカートに乗れ」が神経系に刻まれた。悲観じゃない、歴史の教訓だ。4人有利の状況でも「誰かカートいる？」と聞いてしまう。',
        ko: 'C9이 뭔지 설명 안 해도 안다. 직접 겪었으니까. 팀파이트 이겼고, 다들 추격하러 갔고, 페이로드는 31초 동안 방치됐고, 상대가 부활해서 오버타임이 됐다. 그날 이후로 "싸움 이기면 카트 밟아"가 신경계에 새겨졌다. 비관적인 게 아니라 역사에서 배운 거다. 4대1 상황에서도 "누구 카트에 있어?"라고 물어본다. 그냥 확인용으로.',
      },
      symptoms: [
        {
          zh: '胜势时你比输势时更焦虑，因为"赢局最容易被翻"',
          en: 'You\'re more anxious when winning than when losing, because throws happen from winning positions',
          ja: '勝っている時のほうが負けている時より不安になる。逆転はリードしてる側から起きるから',
          ko: '이기고 있을 때 지고 있을 때보다 더 불안하다. 역전은 이기는 쪽에서 일어나니까',
        },
        {
          zh: '你能说出C9事件的完整经过，包括那场比赛的地图名',
          en: 'You can recount the original C9 incident in detail, including the map name',
          ja: '元祖C9インシデントの詳細を、マップ名も含めて語れる',
          ko: '원조 C9 사건을 마맵 이름까지 포함해서 자세히 설명할 수 있다',
        },
        {
          zh: '团战打完第一件事是看推车进度条，而不是看KDA',
          en: 'First thing you check after a fight: payload progress bar, not the kill feed',
          ja: 'ファイト後に最初に確認するのはキルフィードじゃなくてペイロードの進捗だ',
          ko: '싸움 끝나고 제일 먼저 확인하는 건 킬피드가 아니라 페이로드 진행률이다',
        },
        {
          zh: '遇到Sigma大招就立刻想到Sig9，心跳加快',
          en: 'Every Sigma Gravitic Flux triggers a Sig9 flashback and a slight rise in heart rate',
          ja: 'シグマのグラヴィティックフラックスを見るたびにSig9のフラッシュバックで心拍が上がる',
          ko: '시그마 중력 붕괴 볼 때마다 Sig9 플래시백이 와서 심박이 오른다',
        },
        {
          zh: '游戏结束画面出来前你已经在想"有没有C9的可能"',
          en: 'Before the match ends you\'ve already run through the scenario where it C9s',
          ja: '試合が終わる前にC9になるシナリオをシミュレートし終えている',
          ko: '경기 끝나기 전에 C9이 되는 시나리오를 이미 시뮬레이션해놨다',
        },
      ],
      rivalSlug: 'flanker-monk',
      bestSquadSlug: 'ult-economist',
    },

    // ── 3. payload-parent ────────────────────────────────────────────────────
    {
      slug: 'payload-parent',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'high',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '推车监护家长',
        en: 'Payload Parent',
        ja: 'ペイロード保護者',
        ko: '페이로드 보호자',
      },
      oneLiner: {
        zh: '"先碰车再吵架，车不会自己走"',
        en: '"Touch the cart first, argue second — it doesn\'t move itself"',
        ja: '"まずカートに乗れ、文句はその後。カートは自分で動かない"',
        ko: '"카트 먼저 밟고 싸워, 혼자 안 가"',
      },
      description: {
        zh: '你来这里是推车的，不是来团战的。团战是推车的手段，不是目的。你会在队友还在庆祝斩杀的时候，一个人已经站在车上了。你没有恶意，你只是确实相信：推车进度条每跳一格，都比KDA里多一个数字重要。输了球你不骂人，只是轻轻地问一句："为什么没人在车上？"',
        en: 'You are here to push the cart. Kills are a means to that end; standing around after a wipe is the enemy. While teammates are watching the defeat animation, you\'re already back on the payload. No complaint — you just believe one meter of cart progress is worth more than three kills on the board. When the team loses, you don\'t flame. You ask, quietly: "Why was no one on cart?"',
        ja: 'ペイロードを動かすために来ている。キルはそのための手段だ。チームメイトが勝利を喜んでいる間に、もうカートに乗っている。悪意はない——ただ、ペイロードが1メートル進むほうがKDAに数字が増えるより大事だと本気で思ってる。負けてもフレームしない。静かに聞くだけだ。「なんでカートに誰もいなかったの？」',
        ko: '페이로드 밀러로 왔다. 킬은 그 수단이고, 전투 끝나고 서 있는 건 낭비다. 팀원들이 전멸 애니메이션 보는 동안 이미 카트 위에 올라가 있다. 악의는 없다. 그냥 페이로드 1미터가 KDA 숫자 하나보다 중요하다고 진심으로 믿는다. 지면 욕 안 한다. 조용히 물어볼 뿐이다. "왜 카트에 아무도 없었어?"',
      },
      symptoms: [
        {
          zh: '开局第一件事是看推车路线，不是看英雄配置',
          en: 'First thing you check before a match: payload route, not team comp',
          ja: '試合前に最初に確認するのはチームコンプじゃなくてペイロードのルートだ',
          ko: '경기 시작 전 가장 먼저 확인하는 건 팀 조합이 아니라 페이로드 경로다',
        },
        {
          zh: '你会在团战进行中途跑去车上，队友觉得你跑了，其实你在工作',
          en: 'You break off mid-fight to stand on cart; teammates think you fled; you think you\'re doing your job',
          ja: 'ファイト中にカートへ戻る。チームメイトは逃げたと思う。あなたは仕事をしたと思っている',
          ko: '싸움 중에 카트로 이탈한다. 팀원은 도망쳤다고 생각하고, 당신은 할 일을 했다고 생각한다',
        },
        {
          zh: '"推车diff"是你最常用的赛后总结',
          en: '"Payload diff" is your most-typed post-game verdict',
          ja: '試合後に一番よく打つのは「ペイロード diff」だ',
          ko: '"페이로드 diff"가 경기 후 가장 많이 치는 말이다',
        },
        {
          zh: '看别人直播时你会对着屏幕说"碰车啊"至少三次',
          en: 'Watching any stream, you say "get on cart" to the screen at least three times per match',
          ja: '配信を見ながら「カートに乗れ」と少なくとも3回言う',
          ko: '다른 사람 방송 볼 때 경기당 최소 3번은 화면에 대고 "카트 밟아"라고 말한다',
        },
      ],
      rivalSlug: 'flanker-monk',
      bestSquadSlug: 'c9-trauma-curator',
    },

    // ── 4. voice-line-saboteur ───────────────────────────────────────────────
    {
      slug: 'voice-line-saboteur',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'high',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '嘲讽语音破坏王',
        en: 'Voice Line Saboteur',
        ja: 'ボイスライン破壊者',
        ko: '음성 대사 파괴왕',
      },
      oneLiner: {
        zh: '胜负心藏在每一句"Hello!"里',
        en: 'The competitive spirit lives entirely inside one Tracer voice line',
        ja: '勝負心は「Hello!」一言に全部込めてある',
        ko: '승부욕이 전부 "Hello!" 한 마디 안에 들어가 있다',
      },
      description: {
        zh: '暴雪给了你一个按键，你把它变成了心理战武器。一个"Hello!"在对方死前两秒说出，效果等于五条文字嘲讽。你不骂人，你只是"很热情地打招呼"。你懂什么时候发"需要治疗！"是在告状，什么时候是真的在求补血。语音包的每一条你都测试过，你有自己的使用场景分类。朋友叫你"毒瘤"，但你知道这是最高规格的赛前心理准备。',
        en: 'Blizzard gave you a button. You turned it into a psychological weapon. A single "Hello!" dropped at the right moment beats five lines of typed flame. You don\'t actually tilt — you just greet people with suspicious enthusiasm. You know exactly when "I need healing!" is a genuine call and when it\'s a guilt trip. Every voice line has been field-tested. Friends call you toxic. You call it pre-fight conditioning.',
        ja: 'ブリザードがボタンをくれた。あなたはそれを心理戦の武器にした。タイミングの合った「Hello!」一言は、テキストでの煽り5行分に相当する。自分はティルトしてない——ただ不審なほど元気に挨拶してるだけだ。「回復が必要！」が本当のSOSなのか嫌味なのか、使い分けは完璧だ。ボイスラインは全部テストずみ。友達は「うざい」と言う。あなたは「試合前の心理準備」と呼ぶ。',
        ko: '블리자드가 버튼을 줬고, 당신은 그걸 심리전 무기로 만들었다. 타이밍 맞는 "Hello!" 한 번이 채팅 욕 다섯 줄보다 효과적이다. 틸트가 아니라 그냥 수상할 정도로 열정적으로 인사하는 거다. "치료가 필요해요!"가 진짜 SOS인지 비꼬는 건지 완벽하게 구분해서 쓴다. 음성 대사는 전부 테스트 완료. 친구들은 "독성"이라고 부르고, 당신은 "경기 전 심리 준비"라고 부른다.',
      },
      symptoms: [
        {
          zh: '你的"Hello!"是有意识的决策，不是手滑',
          en: 'Every "Hello!" is a deliberate decision, never an accident',
          ja: '「Hello!」は意図的な決断だ。指が滑ったことは一度もない',
          ko: '"Hello!"는 의도적인 결정이다. 실수로 누른 적 없다',
        },
        {
          zh: '你会根据局势选择不同的语音包，这本身就是一种战术',
          en: 'You cycle through voice lines based on game state — that\'s a legitimate strategy in your mind',
          ja: '試合の状況に合わせてボイスラインを使い分ける。立派な戦術だと思っている',
          ko: '게임 상황에 따라 음성 대사를 골라 쓴다. 그게 전략이라고 생각한다',
        },
        {
          zh: '"需要治疗！"是你最频繁使用的社交工具，不是求救信号',
          en: '"I need healing!" is your most-used social tool, not a distress call',
          ja: '「回復が必要！」は一番よく使うコミュニケーション手段で、救難信号じゃない',
          ko: '"치료가 필요해요!"는 가장 자주 쓰는 소통 수단이지 구조 신호가 아니다',
        },
        {
          zh: '你能模仿至少三个英雄的嘲讽语音，且知道最佳使用场景',
          en: 'You can quote at least three heroes\' taunt lines verbatim and have a ranked list of when to deploy each',
          ja: '少なくとも3体のヒーローの挑発ボイスを引用でき、使いどころのランキングがある',
          ko: '최소 세 영웅의 도발 대사를 줄줄 외우고 있고, 쓸 타이밍 순위도 있다',
        },
        {
          zh: '有人说你"很烦"，你把这解读为"很有效"',
          en: 'When someone calls you annoying, you hear "effective"',
          ja: '「うざい」と言われたら「効いてる」と解釈する',
          ko: '"짜증난다"는 말을 들으면 "효과 있다"고 해석한다',
        },
        {
          zh: '死亡后两秒你已经想好下一句语音选什么',
          en: 'Two seconds after dying, you\'ve already chosen your next voice line',
          ja: 'デスから2秒で次のボイスラインが決まっている',
          ko: '죽고 2초 만에 다음 음성 대사가 정해져 있다',
        },
      ],
      rivalSlug: 'solo-tank-philosopher',
      bestSquadSlug: 'payload-parent',
    },

    // ── 5. solo-tank-philosopher ─────────────────────────────────────────────
    {
      slug: 'solo-tank-philosopher',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'low',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '单坦哲学家',
        en: 'Solo Tank Philosopher',
        ja: 'ソロタンク哲学者',
        ko: '단독 탱커 철학자',
      },
      oneLiner: {
        zh: '"R键是给我的，也是给整支队伍的"',
        en: '"The shield is mine, and also somehow everyone\'s problem"',
        ja: '"シールドは自分のものであり、チーム全員の問題でもある"',
        ko: '"방어막은 내 거면서 동시에 팀 전체의 문제다"',
      },
      description: {
        zh: '5v5砍掉一个坦克之后，你就是那道唯一的墙。对面把坦克diff扣给你，队友把坦克diff扣给你，你站在分析面板旁边看了三分钟，发现你的承伤是全队第一，死亡是全队最少。你没有愤怒，只有一种平静的、泡在热水里的疲惫。你不是不想要第二个坦克，你只是已经接受了这个宇宙的本质：单坦天生就是替罪羊，而你已经与这个事实和解了。',
        en: 'OW2 took one tank away and made you the entire frontline. Enemy calls "tank diff." Teammates call "tank diff." You pull up the stats screen and find your damage absorbed is first, your deaths are fewest. No anger — just a warm-bath fatigue you\'ve learned to wear. You don\'t hate 5v5. You\'ve accepted the physics: solo tank is the team\'s designated scapegoat, and you have made peace with the universe.',
        ja: '5v5になって、あなたが唯一のフロントラインになった。相手は「タンクdiff」と言い、チームメイトも「タンクdiff」と言う。スタッツを開いたら被ダメージトップ、デス最少。怒りはない。ただ、長い風呂の後みたいな、静かな疲れがある。5v5が嫌いじゃない。ただ、ソロタンクが生まれながらのスケープゴートだという事実と和解した。',
        ko: '5v5가 탱커 한 명을 없애버렸고, 당신이 그 유일한 방어선이 됐다. 상대는 "탱커 diff"라고 하고, 팀원도 "탱커 diff"라고 한다. 스탯 열어보면 피해 흡수 1등, 데스 최소. 화나지 않는다. 그냥 긴 목욕 후 같은 조용한 피로감이 있다. 5v5가 싫지 않다. 솔로 탱커가 태생적 희생양이라는 사실과 화해한 거다.',
      },
      symptoms: [
        {
          zh: '你知道"tank diff"是什么意思，因为两支队伍的聊天框都发过给你',
          en: '"Tank diff" has been typed at you from both sides of the same match',
          ja: '同じ試合で両チームから「タンクdiff」と言われたことがある',
          ko: '같은 경기에서 양 팀 모두한테 "탱커 diff" 들은 적 있다',
        },
        {
          zh: '你的承伤永远是全队第一，但没人在赛后提这件事',
          en: 'Your damage absorbed is always top of the team. Nobody mentions it after the match.',
          ja: '被ダメージ吸収はいつもチームトップ。誰も試合後に触れない。',
          ko: '피해 흡수는 항상 팀 1등인데 경기 끝나면 아무도 언급 안 한다.',
        },
        {
          zh: '你曾经认真思考过：如果OW回到6v6，我会是更好的玩家，还是更没存在感？',
          en: 'You\'ve genuinely wondered: if OW went back to 6v6, would I be better, or just less visible?',
          ja: '「OWが6v6に戻ったら自分はうまくなれるか、それともただ目立たなくなるか」と本気で考えたことがある',
          ko: 'OW가 6v6로 돌아가면 내가 더 잘하게 될지, 아니면 그냥 덜 눈에 띄게 될지 진지하게 생각해봤다',
        },
        {
          zh: '"R键给我"是你对单坦生涯最精炼的总结',
          en: '"Press R for respects" is the most accurate description of your career arc',
          ja: '「Rを押してくれ」があなたのタンクキャリアの最も簡潔な要約だ',
          ko: '"R 눌러줘"가 당신의 탱커 커리어를 가장 잘 요약한 문장이다',
        },
        {
          zh: '你不骂奶妈，但你记住了每一次该纳米的时候没纳米',
          en: 'You never flame the support. You do remember every missed Nano Boost.',
          ja: 'サポートを怒鳴ることはない。でも、ナノブーストを外された瞬間は全部覚えている。',
          ko: '서포터를 욕하지 않는다. 나노 부스트 놓친 순간은 전부 기억하지만.',
        },
      ],
      rivalSlug: 'dps-victim',
      bestSquadSlug: 'ult-economist',
    },

    // ── 6. dps-victim ────────────────────────────────────────────────────────
    {
      slug: 'dps-victim',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'low',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: 'DPS主角受害者',
        en: 'DPS Victim',
        ja: 'DPS被害者',
        ko: 'DPS 피해자',
      },
      oneLiner: {
        zh: '"输出12000，奶妈不给补血，坦克没挡住"',
        en: '"12K damage, no heals, no peel — this is a group project where I did everything"',
        ja: '"ダメージ12000、回復なし、守ってもらえず——全部一人でやったグループ作業"',
        ko: '"딜 12000, 힐 없음, 보호 없음 — 내가 다 한 조별 과제"',
      },
      description: {
        zh: '你打得很高，但队友的问题更高。你不是在甩锅，你只是在陈述事实：你的输出数字排全场第一，你的死法都是被夹击，你的大招每次都在最需要的时候充到了，而你的奶妈不是在补血就是在看风景。你相信自己是被最差的随机匹配算法永久标记的那种玩家，每次组到的队友都是倒霉抽奖结果。',
        en: 'You deal the damage. The team loses anyway. These two facts exist in your mind as a coherent sentence. Your final stats say 12K damage, top elims — and also: death to an Ana flanking while the tank was elsewhere. You\'re not blaming anyone specifically. You\'re just reporting what the scoreboard says. The matchmaking algorithm has personally selected the worst possible five strangers to play with you, every single game. You have data.',
        ja: 'ダメージを出した。それでもチームは負けた。この2つの事実が頭の中で一文になっている。スタッツは12Kダメージとキルトップ——そして、タンクが別の場所にいる間にアナにフランクされての死亡。誰かを責めてるわけじゃない。スコアボードを報告してるだけだ。マッチングアルゴリズムが毎試合、考えられる中で最悪の5人をあなたに当ててくる。データがある。',
        ko: '딜을 넣었다. 팀은 졌다. 이 두 사실이 머릿속에서 하나의 문장이 된다. 최종 스탯은 딜 12K에 킬 최다 — 그리고 탱커가 다른 곳에 있는 동안 아나한테 플랭크 맞고 죽음. 누굴 탓하는 게 아니라 스코어보드를 보고하는 거다. 매칭 알고리즘이 매 경기마다 가능한 가장 최악의 5명을 붙여주고 있다. 데이터가 있다.',
      },
      symptoms: [
        {
          zh: '你在死亡后5秒内说出这局输的完整原因，精确到技能层面',
          en: 'Within five seconds of dying, you\'ve issued a full post-mortem, down to ability level',
          ja: 'デスから5秒以内に、スキルレベルまで含めた完全な死因分析が出る',
          ko: '죽고 5초 안에 스킬 단위까지 포함한 사인 분석이 나온다',
        },
        {
          zh: '"DPS diff"是你最常收到的消息，也是你最不认同的消息',
          en: '"DPS diff" is the message you receive most and agree with least',
          ja: '「DPS diff」は一番よく受け取るメッセージで、一番納得できないメッセージだ',
          ko: '"DPS diff"는 가장 많이 받는 메시지이자 가장 동의 안 되는 메시지다',
        },
        {
          zh: '你的12000输出数字在死亡界面截图里永远是全场第一',
          en: 'Your 12K damage screenshot has been taken more than once — the number is always first',
          ja: '12Kダメージのスクリーンショットは何度も撮った。数字は常にトップだ',
          ko: '딜 12K 스크린샷을 여러 번 찍었다. 숫자는 항상 1등이다',
        },
        {
          zh: '你每次看到奶妈在攻击敌人而不是补血时，内心都有一小部分死去',
          en: 'Every time you see a support attacking instead of healing, a small part of you dies before your hero does',
          ja: 'サポートが回復せずに攻撃しているのを見るたびに、ヒーローより先に心の一部が死ぬ',
          ko: '서포터가 힐 대신 공격하는 걸 볼 때마다 영웅보다 먼저 마음의 일부가 죽는다',
        },
        {
          zh: '你在游戏里和游戏外都有充分的证据证明自己被低估',
          en: 'You have evidence, both in-game and out, that you are undervalued',
          ja: 'ゲーム内外で、自分が過小評価されているという証拠がある',
          ko: '게임 안팎에서 자신이 저평가됐다는 증거가 있다',
        },
      ],
      rivalSlug: 'solo-tank-philosopher',
      bestSquadSlug: 'c9-trauma-curator',
    },

    // ── 7. flanker-monk ──────────────────────────────────────────────────────
    {
      slug: 'flanker-monk',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'high',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '绕后僧侣',
        en: 'Flanker Monk',
        ja: 'フランカー僧侶',
        ko: '플랭크 수도자',
      },
      oneLiner: {
        zh: '永远从地图边缘出现，完事就消失',
        en: 'Appears from a map edge, makes two kills, vanishes — no explanation offered',
        ja: 'マップの端から現れ、2キルして消える。説明なし',
        ko: '맵 가장자리에서 나타나서 두 명 죽이고 사라진다. 설명 없음',
      },
      description: {
        zh: '你不在推车，你在创造条件让推车变得可能。你选锋线绕后，选的是几何，不是冲动。那条路线你在训练模式里走过二十遍，你知道什么时候对面支援会回来，你知道那个角度对面支援看不到你。你消失45秒，杀两个，再出现，什么也不说。队友有时候会说你"不推车"，你把这个评价收入档案，继续去找下一个绕路。',
        en: 'You\'re not ignoring the payload. You\'re creating the conditions for the payload to move. The flank route you run has been scouted in practice range — you know when the enemy support rotates back, you know the angle they can\'t see. You disappear for 45 seconds. Two eliminations. Return. Say nothing. Teammates sometimes say you\'re not on cart. You file the remark and go find the next angle.',
        ja: 'ペイロードを無視してるわけじゃない。ペイロードが動ける状況を作っている。フランクルートは練習場で20回走った——相手サポートがローテするタイミングも、見えない角度も知ってる。45秒消えて、2キルして、戻る。何も言わない。「カートにいない」と言われることがある。そのコメントをファイルに収めて、次のルートを探しに行く。',
        ko: '페이로드를 무시하는 게 아니라 페이로드가 움직일 수 있는 조건을 만드는 거다. 플랭크 경로는 연습장에서 20번 돌았다. 상대 서포터가 로테이션 돌아오는 타이밍도, 보이지 않는 각도도 안다. 45초 사라졌다가 두 명 죽이고 돌아온다. 아무 말 없다. 가끔 "카트에 없다"는 말을 듣는다. 그 말을 파일에 저장하고 다음 각도를 찾으러 간다.',
      },
      symptoms: [
        {
          zh: '你在地图里找路的时间比团战的时间更长，这是你的核心优势',
          en: 'You spend more time reading map geometry than joining fights — and you\'ve accepted that\'s your edge',
          ja: '戦闘に参加するよりマップの地形を読む時間が長い。それが自分の強みだと受け入れている',
          ko: '전투에 합류하는 것보다 맵 지형을 읽는 데 더 많은 시간을 쓴다. 그게 자신의 강점이라고 인정한다',
        },
        {
          zh: '队友叫你"走丢了"，你叫自己"在执行战术"',
          en: 'Teammates say you\'re "lost." You say you\'re "executing a flank."',
          ja: 'チームメイトは「迷子」と言う。あなたは「フランクを実行中」と言う。',
          ko: '팀원들은 "길 잃었다"고 하고, 당신은 "플랭크 실행 중"이라고 한다.',
        },
        {
          zh: '你玩Tracer/Genji不是因为帅，是因为他们有最好的绕路工具包',
          en: 'You play Tracer and Genji not for style points but because their kits are optimal flanking geometry tools',
          ja: 'トレーサーやゲンジをプレイするのはカッコいいからじゃなく、フランクに最適なキットだから',
          ko: '트레이서와 겐지를 하는 건 멋있어서가 아니라 플랭크에 최적화된 킷이라서다',
        },
        {
          zh: '你会在死亡后立刻想"下一次从另一个方向来"而不是"我怎么死的"',
          en: 'After dying, your first thought is "try the other angle next time," not "how did I die"',
          ja: 'デス後の最初の思考は「どうして死んだ」じゃなくて「次は別の角度から」だ',
          ko: '죽고 나서 첫 번째 생각이 "어떻게 죽었지"가 아니라 "다음엔 다른 각도에서"다',
        },
      ],
      rivalSlug: 'payload-parent',
      bestSquadSlug: 'killcam-headliner',
    },

    // ── 8. killcam-headliner ─────────────────────────────────────────────────
    {
      slug: 'killcam-headliner',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'high',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '击杀镜头主演',
        en: 'Killcam Headliner',
        ja: 'キルカム主演俳優',
        ko: '킬캠 주인공',
      },
      oneLiner: {
        zh: '右上角名字就是命，POTG才是胜利的真实定义',
        en: 'The right-side nameplate is the real objective; POTG is what winning actually means',
        ja: '右上の名前こそが命。POTGが勝利の本当の意味だ',
        ko: '우측 상단 이름이 곧 생명이고, POTG가 진짜 승리의 정의다',
      },
      description: {
        zh: '你不只想赢，你想赢得漂亮，漂亮到游戏给你播放POTG。你不是不在乎结果，你只是更在乎"谁造就了这个结果"。右上角那个名字你记得，你死在谁手里你记得，你已经在脑内预演了下一局的复仇路线。POTG出现你名字的那一刻，比胜利更让你满足。你的截图相册里有至少三张POTG画面，你不打算删。',
        en: 'Winning matters. Winning beautifully matters more. You need the POTG. Not because you\'re shallow — because the right-side nameplate in the killcam is the game\'s actual receipt: it says you were there, you made the play, you were real. When your name shows up in the POTG animation, that\'s the feeling you came for. There are at least three POTG screenshots in your camera roll and you\'re keeping all of them.',
        ja: '勝つことは大事だ。格好よく勝つことはもっと大事だ。POTGが必要なんだ。浅いからじゃない——キルカムの右上の名前が、ゲームの本当の証明書だから。そこにいた、その判断をした、自分はリアルだったと証明される。POTGのアニメーションに自分の名前が出た瞬間が、来た甲斐のある瞬間だ。カメラロールにPOTGのスクリーンショットが3枚以上ある。消す気はない。',
        ko: '이기는 게 중요하다. 멋있게 이기는 게 더 중요하다. POTG가 필요하다. 얕아서가 아니라 킬캠 우측 상단의 이름이 게임의 진짜 영수증이니까. 내가 거기 있었고, 그 플레이를 했고, 내가 실재했다는 증명. POTG 애니메이션에 내 이름이 뜨는 그 순간이 온 이유다. 카메라 롤에 POTG 스크린샷이 최소 세 장 있고, 지울 생각 없다.',
      },
      symptoms: [
        {
          zh: '每局结束时你先看POTG是不是你，再看胜负',
          en: 'Every match ends the same way: POTG reveal first, then check the win/loss',
          ja: '試合の終わりはいつも同じ：まずPOTGが自分か確認、それから勝敗を見る',
          ko: '모든 경기가 같은 순서로 끝난다: POTG 먼저 확인, 그 다음 승패',
        },
        {
          zh: '你在击杀镜头里出现时会重播三遍，确认"打得好看"',
          en: 'When you appear in someone else\'s killcam, you rewatch it three times to assess how you died',
          ja: '相手のキルカムに自分が映ると3回リプレイして「どう見えるか」を確認する',
          ko: '상대 킬캠에 자신이 나오면 세 번 돌려보며 "어떻게 보이는지" 확인한다',
        },
        {
          zh: '你的大招使用时机经常考虑"这个大招能不能进POTG"',
          en: 'Ult timing decisions include the question "will this read well in the POTG replay?"',
          ja: 'ウルトを使うタイミングの判断に「POTGリプレイで映えるか」という考慮が入る',
          ko: '궁 타이밍 결정에 "POTG 리플레이에서 멋있어 보일까?"가 포함된다',
        },
        {
          zh: '朋友知道你的POTG截图相册比大多数人的假期照片更多',
          en: 'Your POTG screenshot collection is larger than most people\'s vacation photo libraries',
          ja: '自分のPOTGスクリーンショットのコレクションは、多くの人の旅行写真より多い',
          ko: '자신의 POTG 스크린샷 컬렉션이 대부분 사람들의 여행 사진보다 많다',
        },
        {
          zh: '你曾经为了"这局没拿到POTG"感到比输球更遗憾',
          en: 'You\'ve felt more disappointed about missing POTG than about losing the match itself',
          ja: '試合に負けるよりPOTGを取れなかったことのほうが悔しかったことがある',
          ko: '경기 진 것보다 POTG 못 받은 게 더 아쉬웠던 적 있다',
        },
      ],
      rivalSlug: 'ult-economist',
      bestSquadSlug: 'flanker-monk',
    },
  ],
  questions: [
    // ── ANCHOR Q1: Bond (funniest opener) ───────────────────────────────────
    {
      id: 'ow2-a01',
      kind: 'anchor',
      text: {
        zh: '语音频道刚开，队友说"今天随便打打"。你？',
        en: 'Voice chat opens. Someone says "just playing for fun today." Your reaction?',
        ja: 'ボイスチャットが始まった。「今日は適当にやるだけ」と言われた。あなたは？',
        ko: '보이스 켜자마자 팀원이 "오늘은 그냥 즐겜할 거야" 한다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '立刻开始分配站位，"随便"不在你的字典里',
            en: 'Start calling positions immediately. "Fun" still means winning.',
            ja: 'すぐにポジションの割り振りを始める。「適当」は自分の辞書にない。',
            ko: '바로 자리 배치 시작. "즐겜"도 이겨야 즐겜이다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '"好，但我还是会报点的"',
            en: '"Cool, but I\'m still calling out positions."',
            ja: '「了解、でも自分はコール続けるけど」',
            ko: '"알겠어, 근데 나는 계속 콜할 거야."',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '静音，开打，输了也无所谓',
            en: 'Mute them, play your game, loss doesn\'t sting anyway.',
            ja: 'ミュートして自分のゲームをする。負けても別に。',
            ko: '음소거하고 내 게임한다. 져도 상관없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '你其实也想随便打，但不好意思先说',
            en: 'You also wanted a chill game but weren\'t going to be the first to say it.',
            ja: 'あなたも気楽にやりたかったけど、言い出す勇気がなかった。',
            ko: '사실 당신도 즐겜하고 싶었는데 먼저 말하기 뭣했다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q2: Bond ──────────────────────────────────────────────────────
    {
      id: 'ow2-a02',
      kind: 'anchor',
      text: {
        zh: '团战打赢了，队友在庆祝。你第一件事是什么？',
        en: 'Team fight won, teammates are cheering. What do you do first?',
        ja: 'チームファイトを制して、チームメイトが喜んでいる。最初にすることは？',
        ko: '팀파이트 이겼고 팀원들이 환호 중이다. 당신이 제일 먼저 하는 건?',
      },
      options: [
        {
          label: {
            zh: '先确认推车进度，庆祝等回程路上再说',
            en: 'Check payload progress first. Celebrate on the walk back.',
            ja: 'まずペイロードの進捗を確認する。お祝いは戻りながらで。',
            ko: '페이로드 진행 상황 먼저 확인. 축하는 돌아오면서.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '跟着大家 gg，然后自己去找角度',
            en: 'Say gg, then quietly go find the next angle.',
            ja: 'みんなに合わせてggと言い、自分は次の角度を探しに行く。',
            ko: 'gg 같이 치고, 혼자 다음 각도 찾으러 간다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '你已经看完对面死亡计时器，开始催大家推车',
            en: 'You checked their respawn timers already — now you\'re pushing people toward the cart.',
            ja: '相手のリスポーンタイマーはもう確認済み。みんなをカートに向かわせている。',
            ko: '상대 리스폰 타이머 이미 확인했다. 팀원들을 카트 쪽으로 밀고 있는 중.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '你不庆祝，你已经在想下一轮对面大招状态',
            en: 'No celebrating. You\'re already calculating their ult charge heading into next fight.',
            ja: '祝わない。次のファイトに向けた相手のウルト状態を計算している。',
            ko: '축하 안 한다. 다음 싸움 앞두고 상대 궁 상태 계산 중이다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q3: Tempo (funniest zone) ─────────────────────────────────────
    {
      id: 'ow2-a03',
      kind: 'anchor',
      text: {
        zh: '第一波团战还没到，你觉得整个队都太慢了。你会？',
        en: 'The first team fight hasn\'t happened yet and you\'re already convinced the team is too slow. You?',
        ja: '最初のチームファイトがまだ来ていないのに、チームが遅すぎると感じている。あなたは？',
        ko: '첫 팀파이트도 안 왔는데 팀이 너무 느리다고 확신하고 있다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '自己先冲，队友总会跟上的',
            en: 'Charge in. The team will follow eventually.',
            ja: '自分から突撃する。チームはそのうちついてくる。',
            ko: '먼저 돌진. 팀원들은 결국 따라온다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等大招充到 80%，再说开团',
            en: 'Wait until your ult hits 80% before even thinking about engaging.',
            ja: 'ウルトが80%に達するまでエンゲージは考えない。',
            ko: '궁 80% 찰 때까지 기다린 다음에 개전을 생각한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '在语音里说"推一推"，但自己没动',
            en: 'Call "push" in voice chat but don\'t move yourself.',
            ja: 'ボイスで「押そう」と言うが、自分は動かない。',
            ko: '보이스로 "밀어" 했는데 본인은 안 움직인다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '已经开大招了，原因是"手感到了"',
            en: 'Already popped ult. Reason: "just felt right."',
            ja: 'もうウルトを使った。理由：「なんとなくそのタイミングだと思って」',
            ko: '이미 궁 썼다. 이유: "느낌이 왔어서."',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q4: Tempo ─────────────────────────────────────────────────────
    {
      id: 'ow2-a04',
      kind: 'anchor',
      text: {
        zh: '推车还差 5 米到终点，对面在重生中。你的节奏是？',
        en: 'Payload is 5 meters from the goal, enemies are respawning. What\'s your call?',
        ja: 'ペイロードがゴールまで5メートル、相手はリスポーン中。どう動く？',
        ko: '페이로드가 목표까지 5미터, 상대는 리스폰 중이다. 어떻게 할 거야?',
      },
      options: [
        {
          label: {
            zh: '全速推，在他们回来之前结束',
            en: 'Full send. End it before they get back.',
            ja: '全速で押す。戻ってくる前に終わらせる。',
            ko: '전속력으로 민다. 돌아오기 전에 끝낸다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先建好防线，等大招再做最后一推',
            en: 'Set up defense first, then make the final push when ults are ready.',
            ja: '防衛ラインを整えてから、ウルトが溜まったら最後の一押しをする。',
            ko: '방어선 먼저 세우고, 궁 모인 다음에 마지막 밀기 한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '你早就在车上了，一直在车上',
            en: 'You never left the cart. You\'ve been here the whole time.',
            ja: 'ずっとカートにいた。最初からいた。',
            ko: '카트 떠난 적 없다. 처음부터 여기 있었다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '计算一下复活时间，告诉大家还有 10 秒，等等',
            en: 'Calculate respawn time, announce "ten seconds, hold on."',
            ja: 'リスポーンタイムを計算して「あと10秒待って」と全員に伝える。',
            ko: '리스폰 시간 계산해서 "10초 기다려" 하고 알린다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q5: Mental ────────────────────────────────────────────────────
    {
      id: 'ow2-a05',
      kind: 'anchor',
      text: {
        zh: '奶妈上局没给你纳米，你死了，这局你还好吗？',
        en: 'Ana didn\'t Nano you last round and you died. How are you doing this round?',
        ja: 'アナが前のラウンドでナノを使ってくれなくて、あなたは死んだ。今ラウンドは大丈夫？',
        ko: '아나가 지난 판에 나노 안 줘서 죽었다. 이번 판 괜찮아?',
      },
      options: [
        {
          label: {
            zh: '完全没影响，该干嘛干嘛',
            en: 'Not even a blip. Still on the same plan.',
            ja: '全く影響なし。同じプランで動く。',
            ko: '아무 영향 없다. 그냥 하던 대로 한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '有点难受，但你会憋着不说',
            en: 'Stings a little, but you\'re keeping it to yourself.',
            ja: '少しショックだけど、自分の中に収める。',
            ko: '좀 억울하긴 한데 혼자 참는다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '你在语音说了一句"下次注意纳米时机"，语气很平',
            en: 'You said "nano timing could be better" in voice, very calmly.',
            ja: '「次はナノのタイミング気をつけて」とボイスで平静に言った。',
            ko: '"다음엔 나노 타이밍 좀 봐줘" 보이스로 차분하게 말했다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '你已经在聊天框里打了一半的"我的奶妈——"，但删掉了',
            en: 'You started typing "my Ana didn\'t—" in chat and then deleted it.',
            ja: 'チャットに「アナが——」と打ちかけて、消した。',
            ko: '"아나가——" 채팅 치다가 지웠다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q6: Mental ────────────────────────────────────────────────────
    {
      id: 'ow2-a06',
      kind: 'anchor',
      text: {
        zh: 'tank diff 出现在聊天框了，而且是你的队友发的。你的反应？',
        en: '"Tank diff" appears in chat — from your own teammate. Your response?',
        ja: '「タンクdiff」がチャットに出た。しかも自分のチームメイトから。どう反応する？',
        ko: '"탱커 diff" 채팅이 떴다. 내 팀원이 보낸 거다. 반응은?',
      },
      options: [
        {
          label: {
            zh: '打开数据面板，截图承伤第一，存档',
            en: 'Open the stat screen, screenshot your top-damage-absorbed, save for later.',
            ja: 'スタッツ画面を開いて、被ダメージ吸収トップのスクリーンショットを撮って保存する。',
            ko: '스탯 창 열어서 피해 흡수 1등 스크린샷 찍어서 저장한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '当场回了一句，字数不多，但精准',
            en: 'You replied, briefly but precisely.',
            ja: '短く、しかし的確に返した。',
            ko: '짧지만 정확하게 반박했다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '没理，但你记住了这个 ID',
            en: 'Said nothing. But you noted the username.',
            ja: '何も言わなかった。でもIDは覚えた。',
            ko: '아무 말 안 했다. 근데 그 아이디는 기억했다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '两边都说过 tank diff，你觉得这很正常',
            en: '"Tank diff" comes from both sides in every match. That\'s just the format.',
            ja: '両チームから「タンクdiff」が来るのはいつものことだ。それがこのフォーマット。',
            ko: '양 팀 다 "탱커 diff" 치는 게 매 경기 있는 일이다. 그게 이 형식이다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q7: Nerve ─────────────────────────────────────────────────────
    {
      id: 'ow2-a07',
      kind: 'anchor',
      text: {
        zh: '大招充到了，对面有护盾，胜率六四。你交不交？',
        en: 'Ult is ready, enemy has shields up, your odds are maybe 60-40. Do you pop it?',
        ja: 'ウルトが溜まった。相手はシールドあり、勝率は6対4くらい。使う？',
        ko: '궁 다 찼고, 상대는 방어막 있고, 승률은 6대4 정도다. 써?',
      },
      options: [
        {
          label: {
            zh: '不交，等更好的时机，60:40 不够',
            en: 'Hold it. 60-40 isn\'t good enough.',
            ja: '使わない。6対4では足りない。',
            ko: '안 쓴다. 6대4로는 부족하다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '交了，60:40 够了，不用等',
            en: 'Pop it. 60-40 is fine, don\'t overthink.',
            ja: '使う。6対4で十分。考えすぎない。',
            ko: '쓴다. 6대4면 충분하다. 생각 그만 해.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '先看看奶妈的大招再决定',
            en: 'Check what ults the supports have before deciding.',
            ja: 'サポートのウルト状況を確認してから判断する。',
            ko: '서포터 궁 확인하고 결정한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '已经交了，分析是后来的事',
            en: 'Already used it. Analysis can wait.',
            ja: 'もう使った。分析はその後でいい。',
            ko: '이미 썼다. 분석은 나중에 하면 된다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q8: Nerve ─────────────────────────────────────────────────────
    {
      id: 'ow2-a08',
      kind: 'anchor',
      text: {
        zh: 'ECO 轮，你有 200 血，对面站在控制点。赌还是不赌？',
        en: 'Low resources, 200 HP, enemy is on the point. Do you contest or fall back?',
        ja: 'リソースが少なく、HP200、敵がポイントにいる。コンテストする？それとも下がる？',
        ko: '자원 적고, HP 200, 상대가 점령 중이다. 도전할까 아니면 물러날까?',
      },
      options: [
        {
          label: {
            zh: '赌，能拖一秒是一秒',
            en: 'Contest it. Buy one more second.',
            ja: '行く。1秒でも稼ぐ。',
            ko: '도전. 1초라도 버는 거다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '退，保命留大招打下一波',
            en: 'Fall back, save ult for the next wave.',
            ja: '下がる。次のウルトのために生き残る。',
            ko: '물러난다. 다음 궁을 위해 살아야 한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '算一下时间差——赌的',
            en: 'Math checks out. Contesting.',
            ja: '計算した——行く。',
            ko: '계산해 보니 해볼 만하다. 도전.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '退，不是因为怕，是因为不划算',
            en: 'Fall back. Not out of fear — just bad math.',
            ja: '下がる。怖いからじゃない、割に合わないから。',
            ko: '물러난다. 겁나서가 아니라 손해니까.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q9: Intel ─────────────────────────────────────────────────────
    {
      id: 'ow2-a09',
      kind: 'anchor',
      text: {
        zh: '复盘界面你最先看哪个数字？',
        en: 'Match review screen opens. What number do you look at first?',
        ja: '試合後のスタッツ画面が開いた。最初に見る数字は？',
        ko: '경기 복기 화면 열렸다. 제일 먼저 보는 숫자는?',
      },
      options: [
        {
          label: {
            zh: '大招充能时间——交换效率从这里看',
            en: 'Ult charge time — exchange efficiency starts there.',
            ja: 'ウルト充電時間。交換効率はここから分かる。',
            ko: '궁 충전 시간. 교환 효율은 여기서 보인다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '我的输出数字，感受一下今天手感',
            en: 'My damage number. See if the aim was on today.',
            ja: '自分のダメージ数字。今日のエイムの感触を確かめる。',
            ko: '내 딜 숫자. 오늘 에임이 살았는지 확인.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '承伤量——我扛了多少对面的注意力',
            en: 'Damage absorbed — how much attention did I draw?',
            ja: '被ダメージ量。どれだけ相手の注意を引いたか。',
            ko: '피해 흡수량. 내가 얼마나 주목을 끌었나.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '先不看数字，凭感觉判断这局打得咋样',
            en: 'Skip the numbers first. How did it feel?',
            ja: '数字は後回し。まず感覚的にどうだったか。',
            ko: '숫자 먼저 안 본다. 느낌이 어땠나 먼저.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q10: Intel ────────────────────────────────────────────────────
    {
      id: 'ow2-a10',
      kind: 'anchor',
      text: {
        zh: '对面换了英雄，你怎么判断下一波打法？',
        en: 'Enemy swapped heroes. How do you adjust for the next fight?',
        ja: '相手がヒーローを替えた。次のファイトにどう対応する？',
        ko: '상대가 영웅 바꿨다. 다음 싸움 어떻게 대응해?',
      },
      options: [
        {
          label: {
            zh: '立刻分析新配置的弱点，推演三种打法',
            en: 'Analyze the new comp\'s weaknesses, map out three counters.',
            ja: '新しいコンプの弱点をすぐ分析して、3つの対応策を考える。',
            ko: '새 조합 약점 바로 분석하고 대응책 세 가지 구상한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感受一下——直觉会告诉我该怎么打',
            en: 'Feel it out first. Gut knows what to do.',
            ja: 'まず感じる。直感が正解を教えてくれる。',
            ko: '일단 느껴본다. 직감이 알려준다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看对面这局 timer，判断他们大招进度',
            en: 'Check their ult timers from last fight and guess charge level.',
            ja: '前のファイトからウルトタイマーを見て、チャージ量を推測する。',
            ko: '지난 싸움 타이머 보고 상대 궁 충전량 추측한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '照着之前的感觉打就好，应变能力比分析强',
            en: 'Stick to the feel from before. Adaptability beats prep.',
            ja: '前の感覚のまま行く。適応力は分析より強い。',
            ko: '전 느낌 그대로 간다. 적응력이 분석보다 강하다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q11: Flair ────────────────────────────────────────────────────
    {
      id: 'ow2-a11',
      kind: 'anchor',
      text: {
        zh: '你抢到了 POTG 镜头。你第一反应是？',
        en: 'You got the POTG. Your immediate reaction?',
        ja: 'POTGを取った。最初の反応は？',
        ko: 'POTG 받았다. 첫 반응은?',
      },
      options: [
        {
          label: {
            zh: '看看自己打得好不好看，回放三遍',
            en: 'Watch it three times to see if it looked good.',
            ja: '3回見直して、カッコよく見えるか確認する。',
            ko: '세 번 돌려보며 멋있어 보이는지 확인한다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '下一局继续，POTG 只说明那波打对了',
            en: 'Next match. POTG just means the play worked.',
            ja: '次の試合へ。POTGはその判断が正しかっただけだ。',
            ko: '다음 게임. POTG는 그 판단이 맞았다는 것뿐이다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '截图，发群，等朋友回应',
            en: 'Screenshot it. Send to the group chat. Wait.',
            ja: 'スクリーンショットを撮って、グループに送って、反応を待つ。',
            ko: '스크린샷 찍어서 단톡방에 공유. 반응 기다린다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"POTG 不代表什么，打出效果才算赢"',
            en: '"POTG doesn\'t mean much. Winning the fight is what counts."',
            ja: '「POTGは大して意味がない。ファイトに勝つことが全てだ」',
            ko: '"POTG는 별 의미 없어. 싸움 이기는 게 전부다."',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q12: Flair (funniest zone) ───────────────────────────────────
    {
      id: 'ow2-a12',
      kind: 'anchor',
      text: {
        zh: 'Tracer 的 "Hello!" 你按过几次？',
        en: 'How many times have you pressed Tracer\'s "Hello!" voice line in a single match?',
        ja: '一試合でトレーサーの「Hello!」を何回押した？',
        ko: '한 게임에서 트레이서 "Hello!" 몇 번 눌러봤어?',
      },
      options: [
        {
          label: {
            zh: '没数过，但是按得很有节奏感',
            en: 'Lost count, but there was definitely a rhythm to it.',
            ja: '数えてないけど、リズムがあった。',
            ko: '세지 않았는데 분명히 리듬이 있었다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '零次，这是在浪费操作',
            en: 'Zero times. It\'s a waste of a button press.',
            ja: '0回。それはボタンの無駄遣いだ。',
            ko: '0번. 키 낭비다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '每次击杀后一次，这是基本礼仪',
            en: 'Once after each kill. That\'s just courtesy.',
            ja: 'キルごとに1回。それが礼儀というものだ。',
            ko: '킬할 때마다 한 번씩. 그건 예의다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不玩 Tracer，嘲讽语音不影响输赢',
            en: 'Don\'t play Tracer. Voice lines don\'t affect the result.',
            ja: 'トレーサーはやらない。ボイスラインは勝敗に関係ない。',
            ko: '트레이서 안 한다. 음성 대사는 승패에 관계없다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q1: Bond + Tempo ─────────────────────────────────────────────
    {
      id: 'ow2-c01',
      kind: 'compound',
      text: {
        zh: '控制点还剩 15 秒，你们人数优势，但队友没人喊。你？',
        en: 'Fifteen seconds left on the point, you have a numbers advantage, nobody is calling anything. You?',
        ja: 'ポイントまで15秒、数的優位があるのに誰もコールしていない。あなたは？',
        ko: '거점 15초 남았고 인원 우세인데 아무도 콜 안 한다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '立刻开语音喊全队压过去',
            en: 'Call everyone forward on voice right now.',
            ja: 'すぐボイスで全員に突撃を呼びかける。',
            ko: '보이스로 바로 전진 콜한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '自己先压，边走边等队友',
            en: 'Move forward alone and hope the team reads it.',
            ja: '一人で前へ出て、チームが読んでくれることを期待する。',
            ko: '혼자 앞으로 나가고 팀원이 읽어주길 기대한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '发文字 ping 信号，等大家同步再行动',
            en: 'Ping everyone, wait for sync before committing.',
            ja: 'みんなにピンを打って、同期してから動く。',
            ko: '핑 찍고 다 같이 맞춰서 움직인다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '等大招，人数优势不等于大招优势',
            en: 'Wait for ults. Number advantage doesn\'t mean ult advantage.',
            ja: 'ウルトを待つ。数的優位はウルト優位じゃない。',
            ko: '궁 기다린다. 인원 우세가 궁 우세는 아니다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q2: Bond + Tempo ─────────────────────────────────────────────
    {
      id: 'ow2-c02',
      kind: 'compound',
      text: {
        zh: '队友在回程路上，推车点快满了。你的行动是？',
        en: 'Teammates are walking back, the payload point is nearly at cap. Your move?',
        ja: 'チームメイトが戻る途中、ペイロードのポイントがほぼ取られそう。どうする？',
        ko: '팀원들 복귀 중인데 페이로드 포인트가 거의 다 찼다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '一个人先去撑，叫队友快点',
            en: 'Go hold it alone and call the team to hurry.',
            ja: '一人で行って、チームに急ぐよう呼びかける。',
            ko: '혼자 버티러 가고 팀원한테 빨리 오라고 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等队友集合，集体再推更安全',
            en: 'Wait for the team. Safer to go as a unit.',
            ja: 'チームを待つ。まとまって行く方が安全だ。',
            ko: '팀 모일 때까지 기다린다. 같이 가야 안전하다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '已经在车上了，一直没离开',
            en: 'Still on the cart. You never left.',
            ja: 'まだカートにいる。ずっと離れていなかった。',
            ko: '카트 위에 있다. 한 번도 떠난 적 없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '算了，等下一波大招优势再推',
            en: 'Skip it. Next wave with ult advantage.',
            ja: 'あきらめる。次のウルト優位でまた押す。',
            ko: '포기. 다음 파에 궁 우위 잡고 다시 민다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q3: Bond + Mental ────────────────────────────────────────────
    {
      id: 'ow2-c03',
      kind: 'compound',
      text: {
        zh: '对面用 Sigma 大招把整个队伍举起来了，C9 警报响起。你？',
        en: 'Enemy Sigma ults your whole team off the point. Possible C9. Your state of mind?',
        ja: '相手シグマのウルトでチーム全員がポイントから浮いた。C9の危機。あなたは？',
        ko: '상대 시그마 궁에 팀 전체가 점령지에서 뜨는 상황. C9 경보. 당신은?',
      },
      options: [
        {
          label: {
            zh: '立刻呼叫队友回来踩点，声音很大',
            en: 'Yell at the team to get back on point, loudly.',
            ja: 'チームに大声でポイントに戻るよう叫ぶ。',
            ko: '팀한테 크게 거점으로 돌아오라고 외친다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '心里骂了三遍 Sig9，但没说出口',
            en: 'Sig9 crossed your mind three times. Didn\'t say it out loud.',
            ja: '心の中でSig9を3回呪った。声には出さなかった。',
            ko: 'Sig9 세 번 머릿속으로 욕했다. 입 밖으로는 안 냈다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '落地第一件事：踩点，不管 C9 有多近',
            en: 'Land and step on the point. C9 isn\'t happening on your watch.',
            ja: '着地してすぐポイントを踏む。自分がいる限りC9はない。',
            ko: '착지하자마자 거점 밟는다. 내가 있는 한 C9은 없다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '已经踩点了，你根本没离开，Sigma 举不动你',
            en: 'You were already on point. Sigma lifted everyone else.',
            ja: 'すでにポイントにいた。シグマは他のみんなを浮かせた。',
            ko: '이미 거점에 있었다. 시그마는 나 빼고 다 들었다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q4: Bond + Mental ────────────────────────────────────────────
    {
      id: 'ow2-c04',
      kind: 'compound',
      text: {
        zh: '游戏里有人在语音骂队友，你怎么处理？',
        en: 'Someone in voice chat is flaming the team. How do you handle it?',
        ja: 'ボイスチャットで誰かがチームを責めている。どう対処する？',
        ko: '보이스에서 팀원 욕하는 사람이 있다. 어떻게 처리해?',
      },
      options: [
        {
          label: {
            zh: '打断他，把话题引回战术',
            en: 'Cut in, steer the conversation back to tactics.',
            ja: '割り込んで、話を戦術に戻す。',
            ko: '끊고 대화를 전술 쪽으로 돌린다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '静音那个人，游戏继续',
            en: 'Mute them and keep playing.',
            ja: 'ミュートして続ける。',
            ko: '음소거하고 계속한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '你已经开始跟着骂了，一起骂比较舒服',
            en: 'You joined in. Venting together hits different.',
            ja: '一緒に言い始めた。みんなで発散する方がスッキリする。',
            ko: '같이 합류했다. 같이 터뜨리는 게 더 시원하다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '直接不理，该打打该走走',
            en: 'Ignore it completely. Just play.',
            ja: '完全に無視する。ただプレイする。',
            ko: '완전 무시. 그냥 게임한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q5: Bond + Nerve ─────────────────────────────────────────────
    {
      id: 'ow2-c05',
      kind: 'compound',
      text: {
        zh: '有队友提议全员集合打最后一波团战，但你觉得时机不对。你？',
        en: 'A teammate calls for a full team push, but you think the timing is off. You?',
        ja: 'チームメイトが全員で最後のチームファイトをしようと呼びかけるが、タイミングが違うと感じる。あなたは？',
        ko: '팀원이 전원 집결해서 마지막 팀파이트 하자는데 타이밍이 아닌 것 같다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '说出来——"大招差距不够，等一波"',
            en: 'Speak up: "Ult gap isn\'t there yet. One more wave."',
            ja: '「ウルト差がまだない。もう一波待って」と言う。',
            ko: '"궁 차이 아직 없어. 한 파 더 기다리자" 말한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '跟着队友冲，不想扫大家的兴',
            en: 'Follow the team anyway. Don\'t want to kill the momentum.',
            ja: 'チームについていく。空気を壊したくない。',
            ko: '그냥 팀 따라간다. 분위기 깨기 싫다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '自己找个角度单独绕后，队友打正面',
            en: 'Find a flanking angle solo while the team hits front.',
            ja: '自分はフランクルートへ。チームは正面から。',
            ko: '혼자 플랭크 각도 잡는다. 팀원들은 정면으로.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '装作没看到 ping 信号，等机会到了再说',
            en: 'Pretend you missed the ping. Wait for the right moment.',
            ja: 'ピンを見逃したふりをする。チャンスが来たら動く。',
            ko: '핑 못 본 척한다. 기회 왔을 때 움직인다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q6: Bond + Intel ─────────────────────────────────────────────
    {
      id: 'ow2-c06',
      kind: 'compound',
      text: {
        zh: 'DPS 报点说"对面四个在左侧"。你验证了没？',
        en: 'Your DPS calls "four enemies on the left side." Do you trust that without checking?',
        ja: 'DPSが「左側に4人いる」と報告した。確認せずに信じる？',
        ko: 'DPS가 "왼쪽에 4명 있어" 콜했다. 확인 없이 믿어?',
      },
      options: [
        {
          label: {
            zh: '信，马上跟队友一起往左压',
            en: 'Trust it. Move left with the team right now.',
            ja: '信じる。すぐチームと一緒に左へ動く。',
            ko: '믿고 팀이랑 바로 왼쪽으로 이동한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '先自己扫一眼小地图确认，然后再动',
            en: 'Check the minimap first. Then move.',
            ja: 'まず自分でミニマップを確認する。それから動く。',
            ko: '미니맵 먼저 확인하고 움직인다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '你已经知道了，你自己看到的，先单独处理',
            en: 'You already knew — you saw it yourself. Handling it solo.',
            ja: '自分でもう見ていた。単独で対処する。',
            ko: '이미 알고 있었다. 내가 직접 봤다. 혼자 처리한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '报点用的是上一轮的信息——先等对面行动，再反应',
            en: 'That call might be stale. Wait for the enemy to show before committing.',
            ja: 'そのコールは古い可能性がある。相手が動くのを待ってから対応する。',
            ko: '그 콜이 이전 정보일 수 있다. 상대 행동 확인하고 반응한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q7: Bond + Flair ─────────────────────────────────────────────
    {
      id: 'ow2-c07',
      kind: 'compound',
      text: {
        zh: '你用 Genji 大招连了三个击杀，队友在语音炸了。你？',
        en: 'Your Genji Dragonblade nets three kills, teammates erupt in voice. You?',
        ja: 'ゲンジのドラゴンブレードで3キルした。チームがボイスで沸いた。あなたは？',
        ko: '겐지 용검으로 3킬 땄다. 팀원들 보이스에서 난리났다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '也跟着叫了一声，然后继续推',
            en: 'Joined the cheer, then focused back on the push.',
            ja: '一緒に盛り上がって、そのまま攻め続けた。',
            ko: '같이 환호했다가 바로 공격에 집중했다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"三个，下局再做五个"——心里立了目标',
            en: '"Three down, aiming for five next game." Noted.',
            ja: '「3キル。次は5を目指す」心の中で決めた。',
            ko: '"3킬. 다음엔 5킬 목표." 마음속으로 정했다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '没说话，立刻回去踩控制点',
            en: 'Said nothing, immediately went back to stand on the point.',
            ja: '何も言わず、すぐ控制点を踏みに戻った。',
            ko: '아무 말 없이 바로 거점 밟으러 돌아갔다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '三个击杀只是证明这条路线有效，继续绕',
            en: 'Three kills just proved the route works. Running it again.',
            ja: '3キルはこのルートが有効だと証明しただけだ。また行く。',
            ko: '3킬은 이 루트가 효과적이라는 증명이다. 다시 돈다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q8: Tempo + Mental ───────────────────────────────────────────
    {
      id: 'ow2-c08',
      kind: 'compound',
      text: {
        zh: '上局被快攻打崩了，这局你怎么开局？',
        en: 'Last game you got run down by an early rush. How do you open this one?',
        ja: '前のゲームでアーリーラッシュに崩された。今回はどう開幕する？',
        ko: '지난 게임 얼리 러시에 무너졌다. 이번 판은 어떻게 시작해?',
      },
      options: [
        {
          label: {
            zh: '换个英雄，先快攻他们一波',
            en: 'Swap heroes and rush them first this time.',
            ja: 'ヒーローを替えて、今回は自分からラッシュする。',
            ko: '영웅 바꾸고 이번엔 먼저 러시한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '上一局的事上一局，这局按套路走',
            en: 'Last game is last game. Play this one by the book.',
            ja: '前の試合は前の試合。今回は基本通りに進める。',
            ko: '지난 게임은 지난 게임. 이번엔 기본대로 간다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '等他们先动，你观察节奏再反应',
            en: 'Let them move first. Watch the tempo and react.',
            ja: '先に相手に動かせる。リズムを見てから反応する。',
            ko: '먼저 상대를 움직이게 한다. 템포 보고 반응한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '还没忘上一局，但已经在计划怎么对付他们',
            en: 'Still thinking about last game, but channeling it into the counter-plan.',
            ja: '前の試合はまだ頭にある。でもそれを対策に変えている。',
            ko: '지난 게임 아직 생각나는데 그걸 대응책으로 바꾸고 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q9: Tempo + Mental ───────────────────────────────────────────
    {
      id: 'ow2-c09',
      kind: 'compound',
      text: {
        zh: '对面比你们大招多，你们节奏被打乱了。你的判断是？',
        en: 'Enemy has more ults, your team\'s rhythm is gone. Your read?',
        ja: '相手はウルトが多く、こちらのリズムが崩れた。どう判断する？',
        ko: '상대가 궁 더 많고, 우리 팀 리듬이 망가졌다. 판단은?',
      },
      options: [
        {
          label: {
            zh: '先拖时间，等大招平衡再开团',
            en: 'Stall until ult parity is restored.',
            ja: 'ウルト均衡が戻るまで時間を稼ぐ。',
            ko: '궁 균형 맞출 때까지 시간을 번다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '冲，被动等死不如主动出击',
            en: 'Push anyway. Passive waiting is slower death.',
            ja: '押す。受け身で待つのは緩やかな死だ。',
            ko: '그냥 밀어붙인다. 수동 대기는 천천히 죽는 것이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '稳住心态，大招多不代表会赢，找时机',
            en: 'Steady the mental. More ults doesn\'t mean they win. Wait for the opening.',
            ja: '心を落ち着かせる。ウルトが多くても勝てるとは限らない。チャンスを待つ。',
            ko: '멘탈 잡는다. 궁 많다고 이기는 게 아니다. 기회 기다린다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '已经红温了，冲就完了',
            en: 'Already tilted. Just charge.',
            ja: 'もうカッとなってる。突撃あるのみ。',
            ko: '이미 열받았다. 그냥 돌진이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q10: Tempo + Nerve ───────────────────────────────────────────
    {
      id: 'ow2-c10',
      kind: 'compound',
      text: {
        zh: '推车差 10 米到终点，时间快到了，大招都还没充好。打不打？',
        en: 'Payload is 10 meters out, time is almost up, ults aren\'t ready. Do you fight?',
        ja: 'ペイロードまで10メートル、時間切れ寸前、ウルトが溜まっていない。戦う？',
        ko: '페이로드 10미터 남았고 시간 다 됐는데 궁 아직 안 찼다. 싸울 거야?',
      },
      options: [
        {
          label: {
            zh: '硬冲，10 米不需要大招',
            en: 'Force it. Ten meters doesn\'t need ults.',
            ja: '強引に行く。10メートルにウルトは要らない。',
            ko: '강행. 10미터에 궁 필요없다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等大招充好，哪怕只剩三秒',
            en: 'Wait for ults even if three seconds remain.',
            ja: 'たとえ3秒しかなくてもウルトを待つ。',
            ko: '3초 남더라도 궁 찰 때까지 기다린다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '赌一把——大招不在、但手感在',
            en: 'Gamble it. No ults, but the aim is there.',
            ja: '賭けに出る。ウルトはないが、エイムはある。',
            ko: '도박. 궁은 없지만 에임이 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '有多少用多少，能用的先用',
            en: 'Use whatever you have. Partial ults are better than none.',
            ja: 'あるものを全部使う。一部でも使わないよりまし。',
            ko: '있는 거 다 쓴다. 부분 궁이라도 없는 것보다 낫다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q11: Tempo + Intel ───────────────────────────────────────────
    {
      id: 'ow2-c11',
      kind: 'compound',
      text: {
        zh: '对面的 Tracer 来回骚扰，一直不让你推车。你怎么处理？',
        en: 'An enemy Tracer keeps harassing, stalling your payload push. How do you handle it?',
        ja: '相手のトレーサーが何度もハラスしてきて、ペイロードを押せない。どう対処する？',
        ko: '상대 트레이서가 계속 훼방 놓아서 페이로드를 못 민다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '分析她的闪现规律，等她出现再打',
            en: 'Track her Recall pattern, burst her when she shows.',
            ja: 'リコールのパターンを把握して、出てきたときに倒す。',
            ko: '리콜 패턴 파악해서 나타날 때 잡는다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '先推车，不理她，她要死要活随她',
            en: 'Keep pushing. Ignore her completely.',
            ja: '無視してペイロードを押し続ける。',
            ko: '그냥 계속 민다. 완전 무시.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '感觉她下一次出现的方向，提前预瞄',
            en: 'Feel where she\'ll appear next and pre-aim.',
            ja: '次に来る方向を感じとって先にエイムを合わせる。',
            ko: '다음에 나올 방향 느끼고 미리 조준한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '叫奶妈帮忙反报 Tracer 位置，合力清掉',
            en: 'Ask support to track and call out Tracer\'s position.',
            ja: 'サポートにトレーサーの位置をコールしてもらうよう頼む。',
            ko: '서포터한테 트레이서 위치 콜 해달라고 한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q12: Tempo + Flair ───────────────────────────────────────────
    {
      id: 'ow2-c12',
      kind: 'compound',
      text: {
        zh: '你看到了一个绝佳的绕后机会，但队友说"稳住"。你？',
        en: 'You spot a perfect flank opening but your teammate calls "hold position." You?',
        ja: '完璧なフランクのチャンスを見つけたが、チームメイトが「ホールド」と言った。あなたは？',
        ko: '완벽한 플랭크 기회를 발견했는데 팀원이 "홀드" 한다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '冲，这个机会不等人',
            en: 'Go. This opening won\'t wait.',
            ja: '行く。このチャンスは待ってくれない。',
            ko: '간다. 이 기회는 기다려주지 않는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等，队友说了就等',
            en: 'Hold. Teammate called it.',
            ja: '待つ。チームメイトがそう言ったから。',
            ko: '기다린다. 팀원이 그랬으니까.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '找另一条绕后路，这条不行还有别的',
            en: 'Find a different flank angle. There\'s always another.',
            ja: '別のフランクルートを探す。必ずある。',
            ko: '다른 플랭크 각도 찾는다. 항상 다른 루트가 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '跟队友解释这个机会，一起策划更有看头的推进',
            en: 'Explain the angle to the team, co-plan a flashier advance.',
            ja: 'チームにこの角度を説明して、もっと派手な進め方を一緒に計画する。',
            ko: '팀한테 각도 설명하고 더 화려한 공격을 같이 계획한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q13: Mental + Nerve ──────────────────────────────────────────
    {
      id: 'ow2-c13',
      kind: 'compound',
      text: {
        zh: '你们连输两局，队友说"再来一把"。你的状态？',
        en: 'Two losses in a row. Someone says "one more." Your condition?',
        ja: '2連敗。チームメイトが「もう1戦」と言った。あなたの状態は？',
        ko: '2연패. 팀원이 "한 판 더" 한다. 당신 상태는?',
      },
      options: [
        {
          label: {
            zh: '冷静，继续，两局不影响整体',
            en: 'Calm. Keep going. Two games is nothing.',
            ja: '冷静。続ける。2試合は大したことない。',
            ko: '침착하다. 계속한다. 두 판이 뭐.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '红温了，但还是点了"再来"',
            en: 'Tilted, but clicked "play again" anyway.',
            ja: 'カッとなってるけど、また「プレイ」を押した。',
            ko: '열받았는데 그래도 "한 판 더" 눌렀다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '休息五分钟，清一下脑子再来',
            en: 'Five minute break to reset the mental.',
            ja: '5分休憩して頭をリセットしてから戻る。',
            ko: '5분 쉬고 멘탈 리셋하고 돌아온다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '无所谓，输两局不代表下局还输',
            en: 'Doesn\'t matter. Two losses tells you nothing about the next.',
            ja: 'どうでもいい。2連敗は次の試合に何も関係ない。',
            ko: '상관없다. 2연패가 다음 판을 뜻하지 않는다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q14: Mental + Intel ──────────────────────────────────────────
    {
      id: 'ow2-c14',
      kind: 'compound',
      text: {
        zh: '击杀镜头显示你是被 Widowmaker 在角落偷的。你看完之后？',
        en: 'Killcam shows a Widowmaker got you from a corner. After watching it?',
        ja: 'キルカムでウィドウメイカーに角から狙われたことが分かった。見た後は？',
        ko: '킬캠에서 위도우메이커한테 구석에서 맞은 게 나왔다. 본 후에?',
      },
      options: [
        {
          label: {
            zh: '记住那个角度，下次预判',
            en: 'Note the angle. Pre-aim it next time.',
            ja: 'その角度を覚えて、次回は先読みする。',
            ko: '그 각도 기억해. 다음엔 예측한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '有点气，但这局没事了——下局再说',
            en: 'Mildly annoyed. Game\'s over; deal with it next time.',
            ja: '少しイラッとした。試合は終わった——次回に対処する。',
            ko: '좀 짜증난다. 이 판은 끝났으니 다음에 대처한다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '反播三遍，确认自己死得好不好看',
            en: 'Rewatched three times to see how the death looked.',
            ja: '3回リプレイして、自分の死に様を確認した。',
            ko: '세 번 돌려보며 내 죽음이 어떻게 보이는지 확인했다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '不看了，凭感觉走，死了就死了',
            en: 'Skip it. Play by feel. Death happens.',
            ja: 'スキップ。感覚で動く。死んだら死んだ。',
            ko: '패스. 느낌대로 한다. 죽으면 죽는 거다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q15: Mental + Flair ──────────────────────────────────────────
    {
      id: 'ow2-c15',
      kind: 'compound',
      text: {
        zh: 'POTG 出来了，不是你，是对面的 Genji 大招。你？',
        en: 'POTG plays and it\'s an enemy Genji Dragonblade. Not you. You?',
        ja: 'POTGが流れた。相手のゲンジのドラゴンブレード。自分じゃない。あなたは？',
        ko: 'POTG 나왔는데 상대 겐지 용검이다. 나 아니다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '真的很好看，承认它',
            en: 'Legitimately sick play. Credit it.',
            ja: '本当にかっこよかった。認める。',
            ko: '진짜 잘 했다. 인정한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '有点不甘心，但无所谓，下局再来',
            en: 'Sting for a second. Whatever, next game.',
            ja: '少し悔しいけど、まあいい。次だ。',
            ko: '잠깐 억울하다. 뭐, 다음 판이다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '没感觉，POTG 不影响我的下一局计划',
            en: 'Nothing. POTG doesn\'t affect the next game plan.',
            ja: '何も感じない。POTGは次の試合計画に影響しない。',
            ko: '아무 감흥 없다. POTG는 다음 경기 계획에 영향 없다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '气到想退出，输就算了，还让对面出了 POTG',
            en: 'Ready to quit. Lost the game and gave them the POTG.',
            ja: '辞めたい気分。負けた上に相手にPOTGまで献上した。',
            ko: '그냥 나가고 싶다. 지기도 했는데 상대한테 POTG까지 줬다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q16: Nerve + Intel ───────────────────────────────────────────
    {
      id: 'ow2-c16',
      kind: 'compound',
      text: {
        zh: '大招满了，但你不确定对面的奶妈大招充好没有。怎么办？',
        en: 'Your ult is full but you\'re not sure if the enemy support has their ult ready. What do you do?',
        ja: 'ウルトが溜まったが、相手のサポートがウルトを溜めているか分からない。どうする？',
        ko: '궁 다 찼는데 상대 서포터 궁 찼는지 모르겠다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '算一算对面奶妈的血量消耗，推断她的充能进度',
            en: 'Estimate from how much damage the enemy support took to gauge their charge.',
            ja: '相手サポートがどれだけダメージを受けたかからチャージ量を推測する。',
            ko: '상대 서포터가 받은 피해량으로 충전량 추측한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '管不了那么多，大招满了就交，赌他没充好',
            en: 'Can\'t track everything. Ult is ready, popping it, betting they\'re not charged.',
            ja: '全部は追えない。ウルトが溜まったら使う。相手が溜まってない方に賭ける。',
            ko: '다 추적 못 한다. 궁 찼으면 쓴다. 상대 안 찼다는 데 건다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '等一等——先用一个小技能引出她的大招，再交我的',
            en: 'Bait her ult first with a small ability, then pop your ult.',
            ja: 'まず小さなアビリティで相手のウルトを引き出してから、自分のウルトを使う。',
            ko: '작은 스킬로 먼저 상대 궁 유인하고, 그 다음에 내 궁 쓴다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉她充好了，所以我不交——凭直觉',
            en: 'My gut says she\'s charged. Holding for now.',
            ja: '直感で相手は溜まってると感じる。だから今は待つ。',
            ko: '느낌상 상대 찼다. 지금은 기다린다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q17: Nerve + Flair ───────────────────────────────────────────
    {
      id: 'ow2-c17',
      kind: 'compound',
      text: {
        zh: '你的 Sombra 大招充好了，对面 Ana 和 Lucio 都还剩半血。赌不赌一波？',
        en: 'Your Sombra ult is ready, enemy Ana and Lúcio are both at half health. Do you hack and go?',
        ja: 'ソンブラのウルトが溜まった。相手のアナとルシオは両方半分のHP。今がチャンス？',
        ko: '솜브라 궁 다 찼고, 상대 아나랑 루시우 둘 다 반피다. 도박할 거야?',
      },
      options: [
        {
          label: {
            zh: '进——半血奶妈是最好的时机',
            en: 'Go. Half-health supports is the timing.',
            ja: '行く。半分のHPのサポートがチャンスだ。',
            ko: '간다. 반피 서포터가 타이밍이다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等她们补血后再切——满血比半血更让她们措手不及',
            en: 'Let them heal up, then strike — full health supports are less alert.',
            ja: '回復させてから仕掛ける。満タンのサポートは油断している。',
            ko: '힐 다 채운 다음 치는 게 낫다. 풀피 서포터가 더 방심한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '赌，这个画面进 POTG 的可能性很高',
            en: 'Gamble it. This has POTG written on it.',
            ja: '賭ける。これはPOTGになりそうだ。',
            ko: '도박. 이거 POTG 나올 것 같다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先评估一下还有没有更好的入场时机',
            en: 'Assess if there\'s a better entry window first.',
            ja: 'より良い入場タイミングがないか先に評価する。',
            ko: '더 좋은 진입 타이밍이 있는지 먼저 평가한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q18: Intel + Flair (funniest closer) ─────────────────────────
    {
      id: 'ow2-c18',
      kind: 'compound',
      text: {
        zh: '复盘数据说你击杀镜头出现了 7 次，但你没拿到 POTG。你的结论是？',
        en: 'Post-game data: you appeared in killcams 7 times but didn\'t get POTG. Your conclusion?',
        ja: '試合後のデータ：キルカムに7回映ったのにPOTGを取れなかった。どう結論づける？',
        ko: '경기 후 데이터: 킬캠에 7번 나왔는데 POTG 못 받았다. 결론은?',
      },
      options: [
        {
          label: {
            zh: '"POTG 算法不公平"——这是唯一合理的解释',
            en: '"POTG algorithm is broken." Only rational explanation.',
            ja: '「POTGのアルゴリズムがおかしい」。これ以外に合理的な説明がない。',
            ko: '"POTG 알고리즘이 이상함." 이게 유일한 합리적 설명이다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '数据没问题，POTG 看整体影响，不是单次镜头次数',
            en: 'Data checks out. POTG scores overall impact, not times in killcam.',
            ja: 'データに問題はない。POTGは総合的なインパクトを評価する。キルカム回数じゃない。',
            ko: '데이터에 문제없다. POTG는 킬캠 횟수가 아니라 전반적 영향력을 평가한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '7 次被击杀镜头——证明你一直在前线，不是没贡献',
            en: 'Seven killcams means you were frontline all game. That\'s contribution.',
            ja: '7回のキルカムはゲーム中ずっと最前線にいた証拠だ。それが貢献だ。',
            ko: '킬캠 7번은 내가 경기 내내 최전선에 있었다는 증거다. 그게 기여다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"感觉"今天应该有 POTG，数据只是没有捕捉到精髓',
            en: '"Felt" like a POTG game. The stats just missed the essence.',
            ja: '今日はPOTGになる「感じ」がした。データがその本質をとらえていない。',
            ko: '오늘 POTG 받을 "느낌"이었다. 데이터가 그 본질을 못 잡은 거다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
  ],
};

export default game;
