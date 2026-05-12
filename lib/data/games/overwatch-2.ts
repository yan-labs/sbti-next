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
  questions: [],
};

export default game;
