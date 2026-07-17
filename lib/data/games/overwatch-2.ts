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
    zh: '30 道题，测出你的守望先锋2玩家类型。一键计算官还是击杀镜头主演？8 种原型、6 维雷达、专属玩家身份码，截图发群用的那种。',
    en: '30 questions to find your OW2 player identity. 8 archetypes built on the perfect click, C9 trauma, and flank geometry — plus a 6-axis radar and a shareable player code.',
    ja: '30問でOW2プレイヤータイプを診断。ワンクリック計算士からC9トラウマまで8タイプ、6軸レーダー付き。次のマッチ前にシェアしよう。',
    ko: '30문제로 알아보는 오버워치 2 플레이어 유형. 딸깍 계산기부터 킬캠 주인공까지 8가지 유형, 6축 레이더 차트 포함.',
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
        zh: '一键计算官',
        en: 'Click Calculator',
        ja: 'ワンクリック計算士',
        ko: '딸깍 계산기',
      },
      oneLiner: {
        zh: '"一键就能解决的事，你干嘛靠手感？"',
        en: '"One click ends it. Why would you go by feel?"',
        ja: '"ワンクリックで終わる話を、なんで感覚でやるの？"',
        ko: '"딸깍 한 번이면 끝나는데 왜 감으로 써"',
      },
      description: {
        zh: '你脑子里同时挂着五条实时的大招进度条，五个队友现在充到多少你门儿清。但真正的天赋在后面：这一下按下去到底赚不赚，你能在半秒内算完。对面奶妈的纳米大招按晚了三秒？那三秒造成的价值差，你已经算清楚了。你不生气，只是把它归类成"本可避免的损失"，然后重新排队。看到韩国职业战队的大招分配表，你会觉得莫名安心，这不就是天经地义的事吗。',
        en: 'You\'ve got five real-time ult gauges running in your head at all times. You always know exactly what percentage each teammate is sitting at. The real skill shows up after that: whether clicking right now is a gain or a loss, you can work out in half a second. Enemy Ana popped Nano three seconds late? You\'ve already priced out the value gap that cost. You don\'t get mad about it. You just file it under "preventable loss" and queue up again. Watching a Korean pro team\'s ult-allocation chart feels weirdly validating, like that was just how it was supposed to work all along.',
        ja: 'ウルトゲージを5人分、頭の中で常にリアルタイム管理している。誰が何パーセント溜まっているか、いつも分かってる。でも本当の才能はその先にある。「今この一押しが得か損か」を0.5秒で計算し終える。相手のアナがナノを3秒遅れて押した？その3秒で生まれた価値差はもう計算済みだ。怒らない。ただ「防げたはずの損失」に分類して、また次のキューを回す。韓国プロチームのウルト配分表を見ると、妙に安心する。これが本来当たり前のことだったんじゃないかと思って。',
        ko: '당신 머릿속엔 실시간 궁 게이지가 다섯 개 떠 있다. 팀원 다섯 명 중 누가 몇 퍼센트 찼는지 항상 안다. 근데 진짜 재능은 그다음이다. "지금 딸깍하면 이득인지 손해인지"를 0.5초 만에 계산해서 끝낸다. 상대 아나가 나노를 3초 늦게 딸깍했다? 그 3초 동안 벌어진 밸류 차이까지 계산 끝났다. 화는 안 낸다. 그냥 "막을 수 있던 손실"로 분류하고 다음 큐를 잡는다. 한국 프로팀 궁 배분표를 보면 반갑다. 저게 원래 당연한 거 아니었나 싶어서.',
      },
      symptoms: [
        {
          zh: '队友喊"大招用了"，你第一反应是"几点按下去的？"',
          en: 'When a teammate says "ult used," your first thought is "what point did you click it at?"',
          ja: 'チームメイトが「ウルト使った」と言うと、まず「何パーセントで押したの？」と思う',
          ko: '팀원이 "궁 썼어" 하면 첫 반응은 "몇 퍼에서 딸깍했는데?"다',
        },
        {
          zh: '复盘时看的不是击杀数，是"节奏权到底在谁手上"',
          en: 'What you review isn\'t the kill count. It\'s who actually held the turn.',
          ja: 'リプレイで確認するのはキル数じゃなくて「主導権を握っていたのは誰か」だ',
          ko: '복기할 때 보는 건 킬 수가 아니라 "턴을 누가 잡았는지"다',
        },
        {
          zh: '看到有人在团战外按大招，你沉默五秒。那五秒是在算价值损失。',
          en: 'Someone clicks ult outside a fight. You go quiet for five seconds. Those five seconds are a value-loss calculation.',
          ja: 'チームファイト外でウルトを押す人を見ると5秒黙る。その5秒は価値損失の計算時間だ。',
          ko: '팀파이트 밖에서 궁 딸깍하는 사람 보면 5초간 말을 잃는다. 그 5초는 밸류 손실 계산 시간이다.',
        },
        {
          zh: '大招满了还是不按，理由是"时机还没到"',
          en: 'Ult is full. You still don\'t click it. "The moment hasn\'t arrived yet."',
          ja: 'ウルトが溜まっても押さない。「まだそのタイミングじゃない」',
          ko: '궁 다 찼는데도 안 눌러. "아직 딸깍할 타이밍이 아니야."',
        },
        {
          zh: '每次输掉，你都能精确说出对面大招价值从哪一分钟开始反超',
          en: 'After every loss, you can name the exact minute the enemy\'s ult value overtook yours',
          ja: '負けるたびに、相手のウルト価値が何分から上回ったか正確に言える',
          ko: '질 때마다 상대 궁 밸류가 몇 분부터 우리를 앞섰는지 정확히 짚어낼 수 있다',
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
        zh: '蹭车匠人',
        en: 'Cart-Rubbing Artisan',
        ja: 'カートこすり職人',
        ko: '비비기 장인',
      },
      oneLiner: {
        zh: '"别吵，先蹭"',
        en: '"Don\'t argue. Rub the point first."',
        ja: '"揉める前に、まずこすれ"',
        ko: '"싸우지 말고 일단 비벼"',
      },
      description: {
        zh: '你不是来打团的，你是来推车的。所以队友还在庆祝击杀的时候，你已经一个人站在车上了。理由很简单，你见过太多次因为没人蹭点而错过加时的惨案。不蹭车，是新手最藏不住的标志。你自己犯过一次这个错，然后当成毕生教训记住了。输了不骂人，只是轻声问一句："刚才怎么没人蹭啊？"',
        en: 'You didn\'t come here to team fight. You came to push the payload. That\'s why you\'re already alone on the cart while everyone else is celebrating a kill streak. The reason is simple: you\'ve watched too many overtimes get lost because nobody bothered to rub the point. Not touching the cart is the single most reliable tell of a new player, and you know because you made that mistake exactly once and turned it into a lifelong lesson. When the team loses, you don\'t flame anyone. You just ask, quietly: "why didn\'t anyone rub it?"',
        ja: 'チームファイトをしに来たわけじゃない。ペイロードを押しに来た。だからチームがキルを喜んでいる間に、もう一人でカートに乗っている。理由は単純だ。誰もこすらなかったせいでオーバータイムを逃す場面を、何度も見てきたから。カートをこすらないことこそ、初心者だとバレる一番の証拠だ。自分も一度その失敗をして、それを一生の教訓にした。負けても怒らない。ただ静かに聞くだけだ。「さっき、なんで誰もこすらなかったの？」',
        ko: '당신은 팀파이트 하러 온 게 아니다. 페이로드를 밀러 왔다. 그래서 팀이 처치 세례 축하하는 동안 이미 혼자 카트 위에 올라가 있다. 이유는 단순하다. 비비기 하나 안 해서 오버타임 놓치는 순간을 너무 많이 봤다. 카트 안 밟기, 신규 유저 티 내는 가장 확실한 방법이 바로 이거다. 당신은 그 실수를 한 번 하고 평생 교훈으로 삼았다. 져도 화 안 낸다. 그냥 조용히 물어본다. "왜 아무도 안 비볐어?"',
      },
      symptoms: [
        {
          zh: '开局第一件事是看推车路线，不是看英雄配置',
          en: 'First thing you check before a match: payload route, not team comp',
          ja: '試合前に最初に確認するのはチームコンプじゃなくてペイロードのルートだ',
          ko: '경기 시작 전 가장 먼저 확인하는 건 팀 조합이 아니라 페이로드 경로다',
        },
        {
          zh: '团战打到一半，你一个人跑去车上蹭。队友以为你跑路了，其实你在干活。',
          en: 'You break off mid-fight to go rub the cart. Teammates think you fled. You think you\'re doing your job.',
          ja: 'ファイトの途中で一人カートへ行ってこする。チームメイトは逃げたと思う。本人は仕事してるつもりだ。',
          ko: '싸움 중에 혼자 카트로 빠진다. 팀원은 도망쳤다고 하고, 본인은 비비러 갔다고 한다.',
        },
        {
          zh: '"推车diff"是你最常用的赛后总结',
          en: '"Payload diff" is your most-typed post-game verdict',
          ja: '試合後に一番よく打つのは「ペイロード diff」だ',
          ko: '"페이로드 diff"가 경기 후 가장 많이 치는 말이다',
        },
        {
          zh: '看别人直播时也会对着屏幕喊"蹭啊！"，一局至少三次',
          en: 'Watching any stream, you yell "rub it!" at the screen at least three times a match',
          ja: '配信を見ながらでも画面に向かって「こすれ！」と、1試合で最低3回は叫ぶ',
          ko: '남의 방송 볼 때도 화면 보고 "비벼!"라고 최소 세 번은 외친다',
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
        zh: '嘚瑟语音虫',
        en: 'Showboat Voice-Line Bug',
        ja: 'イキりボイスライン虫',
        ko: '꺼드럭 대사충',
      },
      oneLiner: {
        zh: '"死之前来一句语音，赢了之后再嘚瑟一下"',
        en: '"One voice line before I die. One showboat after I win."',
        ja: '"死ぬ前に一言、勝ったらイキる"',
        ko: '"죽기 전에 대사 한 줄, 이기고 나서 꺼드럭 한 번"',
      },
      description: {
        zh: '暴雪就给了你一个按键，你却把它变成了心理战武器。一句掐点精准的"Hello!"比打字骂五句还伤人。但这还不是全部。击杀之后你会原地停顿一下嘚瑟：跳一下，放个表情，再走向下一个目标。你知道这个动作完全没必要。但你已经验证过好几次，那半秒钟对敌方心态的打击有多大。朋友说你"欠揍"，你管这叫"赛前心理准备"。',
        en: 'Blizzard gave you one button. You turned it into a psychological weapon. A well-timed "Hello!" hurts more than five lines of typed flame. But that\'s only half of it. After every kill, you pause right there and showboat for a second: an idle jump, an emote, then you move to the next target. You know the movement serves no tactical purpose. You\'ve also confirmed, more than once, exactly how much damage that half-second does to an opponent\'s mental state. Friends call it obnoxious. You call it pre-fight conditioning.',
        ja: 'ブリザードがくれたのはボタン一つだったのに、あなたはそれを心理戦の武器に変えた。タイミングの合った「Hello!」一言は、チャットでの罵倒5行より効く。でもそれだけじゃない。キルした後、その場で少し止まってイキる。その場ジャンプ一回、エモート一回、それから次のターゲットへ。その動きが完全に不要だってことは分かってる。でもその0.5秒が相手のメンタルに与えるダメージを、あなたはもう何度も確認済みだ。友達は「うざい」と言う。あなたはそれを「試合前の心理準備」と呼ぶ。',
        ko: '블리자드가 버튼 하나를 줬는데, 당신은 그걸로 심리전을 하고 있다. 타이밍 맞는 "Hello!" 한 마디가 채팅 욕 다섯 줄보다 아프다. 근데 그게 전부가 아니다. 상대 처치하고 나면 그 자리에서 잠깐 멈춰서 꺼드럭거린다. 제자리 점프 한 번, 이모트 한 번, 그리고 다음 타겟으로. 필요 없는 동작인 거 안다. 근데 그 0.5초가 상대 멘탈에 주는 타격을 당신은 이미 여러 번 확인했다. 친구들은 "재수 없다"고 하고, 당신은 그걸 "경기 전 심리 준비"라고 부른다.',
      },
      symptoms: [
        {
          zh: '你的"Hello!"是算好的选择，不是手滑',
          en: 'Every "Hello!" is a calculated choice, never an accident',
          ja: '「Hello!」は計算された選択だ。指が滑ったことは一度もない',
          ko: '"Hello!"는 즉흥이 아니라 계산된 선택이다. 실수로 누른 적 한 번도 없다',
        },
        {
          zh: '你会根据局势切换不同的语音和表情动作，你真心相信这是战术',
          en: 'You switch up both voice lines and emotes depending on the situation. You genuinely believe that\'s strategy.',
          ja: '状況に応じてボイスラインもエモートも使い分ける。それが戦術だと本気で思っている',
          ko: '상황에 따라 대사도 이모트도 다르게 쓴다. 그게 전략이라고 진심으로 믿는다',
        },
        {
          zh: '"需要治疗！"是你最频繁使用的社交工具，不是求救信号',
          en: '"I need healing!" is your most-used social tool, not a distress call',
          ja: '「回復が必要！」は一番よく使うコミュニケーション手段で、救難信号じゃない',
          ko: '"치료가 필요해요!"는 구조 신호가 아니라 제일 자주 쓰는 소통 수단이다',
        },
        {
          zh: '你至少能背出三个英雄的嘲讽语音和嘚瑟动作，还排出了使用时机的优先级',
          en: 'You\'ve got at least three heroes\' taunt lines and showboat motions memorized, with a ranked list of when to deploy each',
          ja: '少なくとも3体のヒーローの挑発ボイスとイキりモーションを暗記していて、使いどころのランキングまである',
          ko: '최소 영웅 세 명의 도발 대사와 꺼드럭 모션을 다 외우고 있고, 쓸 타이밍 순위표도 있다',
        },
        {
          zh: '有人说你"很烦"，你把这解读为"很有效"',
          en: 'When someone calls you annoying, you hear "effective"',
          ja: '「うざい」と言われたら「効いてる」と解釈する',
          ko: '"짜증난다"는 말을 들으면 "효과 있다"고 해석한다',
        },
        {
          zh: '死亡后两秒内选好下一句语音，复活瞬间要不要嘚瑟一下也想好了',
          en: 'Two seconds after dying, you\'ve already picked your next voice line, plus whether you\'re throwing in a showboat the instant you respawn',
          ja: 'デスから2秒で次のボイスラインが決まっていて、復活した瞬間にイキるかどうかまで決めてある',
          ko: '죽고 나서 2초 만에 다음 대사, 그리고 부활하면 바로 한 번 꺼드럭거릴지도 정해놨다',
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
        zh: '坦克抗争队长',
        en: 'Tank Sit-in Captain',
        ja: 'タンク抗議隊長',
        ko: '탱장연 시위대장',
      },
      oneLiner: {
        zh: '"我知道。所以我锁了毛加。"',
        en: '"I know. That\'s why Mauga\'s already locked."',
        ja: '"知ってる。だからもうマウガをロックした。"',
        ko: '"알아. 그래서 마우가 잡았어."',
      },
      description: {
        zh: '5v5砍掉了一个坦克位，你就成了唯一的墙。对面喊"坦克diff"，队友也喊"坦克diff"。要是放在以前，你会默默打开数据面板，确认自己承伤全队第一，然后咽下去继续排位。现在不一样了。你看了从四月开始的坦克抗争，你算过当"乖乖挨骂的坦克"到底亏多少。奶妈开始阴阳怪气逼你换英雄，你不换。但你也不再死撑正统坦克了，直接锁毛加，走到没人的角落，跟对面坦克单挑。剩下八个人的4打4，让他们自己想办法。有人问你为什么，你只回一句"我知道"，然后继续做你在做的事。',
        en: 'OW2 cut one tank slot from the roster, which made you the only wall left. Enemy calls tank diff. Teammates call tank diff. The old you would quietly pull up the stats screen, confirm your damage absorbed was first on the team, and swallow it. Not anymore. You\'ve watched the tank sit-in protests since April, and you\'ve done the math on how much a silent, obedient tank actually loses by staying quiet. When the healer starts politicking about your pick, you don\'t switch. You also stop grinding it out on the "correct" tank out of pure duty. You lock Mauga, walk off to an empty room, and go find the enemy tank for a 1v1. The other eight can handle their own 4v4. Someone asks why. You type one word: "I know." Then you keep doing exactly what you were doing.',
        ja: '5v5になってタンク枠が1つ消えて、気づけば自分が唯一の壁になっていた。相手は「タンクdiff」、チームメイトも「タンクdiff」。前のあなたなら、黙ってスタッツ画面を開いて被ダメージ吸収トップを確認して、そのまま飲み込んでいた。でも今は違う。4月から続くタンク抗議運動を見てきたし、大人しく耐えるタンクがどれだけ損をしているか、もう計算済みだ。サポートがピックに文句を言い出しても、スイッチはしない。かといって「正しい」タンクを律儀に握り続けることもやめた。マウガをロックして、誰もいない場所へ移動し、相手のタンクと1対1をしに行く。残り8人は勝手に4対4をやればいい。なぜかと聞かれたら、答えは一つ。「知ってる」。そして、さっきまでやっていたことを続ける。',
        ko: '5v5가 탱커 한 자리를 없앴고, 그 결과 당신이 유일한 방어선이 됐다. 상대도 "탱커 diff", 팀원도 "탱커 diff". 예전 같으면 조용히 스탯창 열어서 피해 흡수 1등 찍고 넘어갔겠지만, 요즘은 다르다. 4월부터 탱장연을 봤고, 퐁퐁탱 소리 들으면서 참는 게 얼마나 손해인지 배웠다. 힐러가 정치질 시작하면 스위치 안 한다. 그렇다고 계속 정파로 버티지도 않는다. 마우가 잡고 사이드로 빠져서 상대 탱커랑 1대1 뜬다. 나머지 여덟 명이 알아서 4대4 하겠지. 왜 그랬냐고 물으면 대답은 하나, "알아." 그리고 하던 거 계속한다.',
      },
      symptoms: [
        {
          zh: '这局两边又都喊了"坦克diff"，但这次你截的不是数据面板，是聊天记录。',
          en: 'Both teams called tank diff again this game. This time you screenshotted the chat log, not the stats screen.',
          ja: '今回も両チームから「タンクdiff」と言われた。でも今回スクショしたのはスタッツ画面じゃなくてチャットログだ。',
          ko: '이번 판도 양 팀 다 "탱커 diff" 쳤는데, 이번엔 스탯창 대신 채팅 로그를 캡처했다.',
        },
        {
          zh: '奶妈开始阴阳怪气逼你换人，你不吵，直接打一句"别整这套"，然后锁毛加。',
          en: 'When the healer starts politicking, you don\'t argue. You type "cut it out" and lock Mauga.',
          ja: 'サポートが遠回しにスイッチを迫ってきても言い争わない。「その話はいい」と打って、マウガをロックする。',
          ko: '힐러가 정치질 시작하면 말싸움 안 한다. 그냥 "정치질 그만"이라고 치고 마우가 락한다.',
        },
        {
          zh: '这周你在聊天里打了三次"我知道"，除此之外什么都没多说。',
          en: 'You\'ve typed "I know" in chat three times this week. That\'s the whole message, every time.',
          ja: '今週だけでチャットに「知ってる」と3回打った。それ以上の意味は一切ない。',
          ko: '이번 주에만 채팅에 "알아"를 세 번 쳤고, 그 이상의 의미는 없었다.',
        },
        {
          zh: '你能精准说出"正派坦克"和"邪派坦克"的区别，最近还开始故意只选邪派。',
          en: 'You can explain the exact difference between an orthodox tank and a rogue tank, and lately you\'ve started picking rogue on purpose.',
          ja: '正派タンクと邪派タンクの違いを正確に説明できるし、最近はわざと邪派ばかり選んでいる。',
          ko: '정파탱과 사파탱의 차이를 정확히 설명할 수 있고, 요즘은 일부러 사파만 고른다.',
        },
        {
          zh: '毛加喊"我知道"的语音一响，你就想笑。那个笑点只有同类人才懂。',
          en: 'Every time Mauga says "I know" in that voice line, you smirk a little. Only your people get the joke.',
          ja: 'マウガの「知ってる」ボイスが鳴るたびに、ちょっと笑ってしまう。その意味が分かるのは同志だけだ。',
          ko: '마우가가 "알아"라고 할 때마다 피식 웃는다. 그 웃음의 의미는 같은 편만 안다.',
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
          zh: '输出数字旁边那个金牌图标，从没不亮过。截图你都存了好几张了。',
          en: 'The gold medal icon next to your damage number. It\'s never once been missing. You\'ve already got the screenshots to prove it.',
          ja: 'ダメージ数字の横に出る金メダルアイコン。出なかったことが一度もない。スクショはもう何枚も撮ってある。',
          ko: '딜량 옆에 뜨는 금메달 아이콘, 그거 안 뜬 적이 없다. 스크린샷은 이미 여러 장이다.',
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
            zh: '我的输出数字，先看金牌图标亮没亮',
            en: 'My damage number. Check if the gold medal is lit first.',
            ja: '自分のダメージ数字。まず金メダルが付いてるか確認する。',
            ko: '내 딜 숫자. 딜금부터 확인.',
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
        zh: '排位每赢一把攒 15 分，攒够 3000 分买了把金色武器皮肤。属性一点没变，你图啥？',
        en: 'You saved 15 competitive points per ranked win until you hit 3,000. Spent it all on a gold weapon skin. Doesn\'t change a single stat. Why\'d you buy it?',
        ja: 'ランク戦で1勝ごとに15ポイント貯めて、3000ポイント貯まったところで金色の武器スキンを買った。ステータスは何も変わらない。なんで買ったの？',
        ko: '경쟁전 이길 때마다 15점씩 모아서 3000점 채웠다. 골든건 샀다. 스탯은 하나도 안 바뀌는데 왜 샀어?',
      },
      options: [
        {
          label: {
            zh: '因为得在击杀镜头里闪一下才有意义',
            en: 'Because it only counts if it flashes gold in the killcam.',
            ja: 'キルカムで光って見えないと意味がないから',
            ko: '킬캠에 반짝이는 게 보여야 의미가 있으니까',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '买都买了，现在想不起来当初为啥要买',
            en: 'Bought it. Honestly can\'t quite remember deciding to.',
            ja: '買ったはいいけど、なんで買おうと思ったのかもう思い出せない',
            ko: '사놓고 왜 샀는지도 가물가물하다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '每把开局前都要掏出来转一圈看看',
            en: 'You spin the skin around once before every single match.',
            ja: '毎試合の開始前に一回武器を回して見る',
            ko: '매 판 시작 전에 무기 한 번씩 돌려보고 시작한다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '金色和白色伤害一样，纯粹是习惯了',
            en: 'Gold and white deal the same damage. It\'s just habit at this point.',
            ja: '金色でも白色でもダメージは同じ。もう習慣になっただけだ',
            ko: '금색이나 흰색이나 데미지는 똑같은데 그냥 습관이 됐다',
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
        zh: '奶妈开始阴阳怪气地逼你换坦克英雄。你怎么办？',
        en: 'Your healer starts politicking about your tank pick — guilt-tripping you to switch. What do you do?',
        ja: 'サポートがあなたのタンクピックに難癖をつけて、遠回しにスイッチを迫ってきた。どうする？',
        ko: '힐러가 당신 탱커 픽 갖고 정치질 시작했다. 어떻게 할래?',
      },
      options: [
        {
          label: {
            zh: '乖乖换了',
            en: 'Switch obediently.',
            ja: '大人しくスイッチする',
            ko: '얌전히 스위치한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '憋着不吭声，继续正常打坦克',
            en: 'Swallow it and keep tanking exactly as before.',
            ja: '黙って飲み込んで、そのままタンクを続ける',
            ko: '속으로 삭이고 그대로 탱커 계속한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '锁毛加，拉到无人区跟对面坦克单挑，剩下八个人 4 打 4 自己看着办',
            en: 'Lock Mauga, pull the enemy tank to an empty corner for a 1v1. The other eight can sort out their own 4v4.',
            ja: 'マウガをロックして、誰もいない場所で相手タンクと1対1。残り8人は勝手に4対4すればいい',
            ko: '마우가 락하고 상대 탱커랑 사이드에서 1대1 뜬다. 나머지는 4대4로 알아서',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '打一句"我知道"，然后该干嘛干嘛',
            en: 'Type "I know" and keep doing exactly what you were doing.',
            ja: '「知ってる」と打って、さっきまで通りに続ける',
            ko: '"알아"라고 치고 하던 대로 계속한다',
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
        zh: '独狼绕后，死在奶妈视线十万八千里外，你已经在走回去的路上了。你还要不要刷屏"需要治疗！"？',
        en: 'You flanked alone, died nowhere near your healer\'s sightline, and you\'re already walking back. Do you still spam "I need healing!" anyway?',
        ja: '一人でフランクして、サポートの視界のかけらもないところで死んだ。もう歩いて戻ってる途中。それでも「回復が必要！」を連打する？',
        ko: '혼자 플랭크 갔다가 힐러 시야 근처도 못 가고 죽었다. 이미 걸어서 복귀 중인데, 그래도 "치료가 필요해요!" 스팸 칠래?',
      },
      options: [
        {
          label: {
            zh: '连按三下"需要治疗！"，队友也跟着笑了',
            en: 'Mash "I need healing!" three times. The team laughs along.',
            ja: '「回復が必要！」を3回連打。チームも一緒に笑う',
            ko: '"치료가 필요해요!" 세 번 연타. 팀도 같이 웃는다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '自己觉得好笑就一直按，队友什么反应无所谓',
            en: 'Keep mashing it because it\'s funny to you. Don\'t care how the team reacts.',
            ja: '自分が面白いから連打し続ける。チームの反応はどうでもいい',
            ko: '혼자 웃겨서 계속 누른다. 팀 반응은 상관없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不按了，安静地走回去',
            en: 'Don\'t press it. Just walk back quietly.',
            ja: '押さない。静かに歩いて戻る',
            ko: '안 누른다. 그냥 조용히 걸어서 복귀.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '心里想想就算了，没必要表现出来',
            en: 'Think it and leave it there. No need to make it visible.',
            ja: '心の中で思うだけでいい。わざわざ見せる必要はない',
            ko: '속으로만 생각한다. 굳이 티 안 낸다.',
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
        zh: '队伍被打崩了。是继续用正派坦克（温斯顿/查莉娅/西格玛）慢慢输，还是换成邪派坦克（路霸/毛加）搏一个低概率翻盘？',
        en: 'Your team just got run over. Stick with the orthodox tank (Winston, Zarya, Sigma) for a slow, probable loss? Or switch to a rogue tank (Roadhog, Mauga) for a low-odds comeback?',
        ja: 'チームが完全に押し込まれた。正派タンク（ウィンストン/ザリア/シグマ）を維持してゆっくり負けるか、それとも邪派タンク（ロードホッグ/マウガ）に替えて低確率の逆転を狙うか？',
        ko: '팀이 완전히 밀렸다. 정파탱(윈스턴/자리야/시그마) 유지하면서 서서히 질까, 아니면 사파탱(로드호그/마우가)으로 바꿔서 낮은 확률의 역전을 노릴까?',
      },
      options: [
        {
          label: {
            zh: '冷静地换成邪派，这是算过的赌注',
            en: 'Calmly switch to rogue. It\'s a calculated gamble.',
            ja: '冷静に邪派へ切り替える。これは計算済みの賭けだ',
            ko: '침착하게 사파로 바꾼다. 계산된 도박이다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '烦了，直接换路霸',
            en: 'Annoyed. Just switching to Roadhog.',
            ja: 'イライラして、そのままロードホッグに替える',
            ko: '짜증나서 그냥 로드호그로 바꾼다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '正派照打，但心里已经在冒火',
            en: 'Stay orthodox. Seething on the inside the whole time.',
            ja: '正派は維持するが、心の中では煮えくり返っている',
            ko: '정파는 유지하지만 속으로는 부글부글 끓는다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '继续正派，纯粹是概率问题',
            en: 'Stick with orthodox. It\'s just probability, nothing personal.',
            ja: 'そのまま正派を守る。ただの確率の話だ',
            ko: '그냥 정파 지킨다, 확률 게임일 뿐이다',
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
        zh: '对面核心马上要开大招了。是掐着 CD 上安眠飞镖，还是留着生物手雷（禁疗）等他开完大招再砸，还是干脆纳米给自家输出、赌一把？',
        en: 'Enemy carry is about to pop their ult. Sleep dart on a cooldown read? Save the heal-ban grenade for right after they commit? Or just Nano your own DPS and hope?',
        ja: '相手のキャリーがもうすぐウルトを使う。クールタイムを読んでスリープダートを当てるか、バイオティックグレネード（ヒール封じ）を温存してウルト後に投げるか、それとも味方DPSにナノブーストして祈るか？',
        ko: '적 캐리가 궁 쓰기 직전이다. 슬립다트로 쿨 끊을까, 힐밴 그레네이드를 아꼈다가 궁 쓴 직후에 박을까, 아니면 그냥 우리 딜러한테 나노나 줄까?',
      },
      options: [
        {
          label: {
            zh: '算好 CD，直接上安眠飞镖',
            en: 'Calculate the cooldown. Line up the sleep dart.',
            ja: 'クールタイムを計算してスリープダートを当てにいく',
            ko: '쿨타임 계산해서 슬립다트 각 잡는다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '一看到大招起手就凭感觉先丢禁疗',
            en: 'The second you see the ult flash, throw heal-ban on instinct.',
            ja: 'ウルトが見えた瞬間、直感でヒール封じを先に投げる',
            ko: '궁 뜨는 거 보자마자 감으로 힐밴부터 던진다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '先留着禁疗，等他开完大招再看情况砸',
            en: 'Hold the heal-ban. Wait to see the trade after they commit, then throw it.',
            ja: 'ヒール封じは温存。ウルトを使わせてから状況を見て投げる',
            ko: '일단 힐밴 아끼고, 궁 쓴 다음 상황 보고 던진다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '干脆给我方输出上纳米，剩下的交给运气',
            en: 'Just Nano your own DPS and pray.',
            ja: 'とりあえず味方DPSにナノを渡して祈る',
            ko: '그냥 내 딜러한테 나노 주고 기도한다',
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
