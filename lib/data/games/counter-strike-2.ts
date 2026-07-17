import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'counter-strike-2',
  title: {
    zh: 'CS2 玩家类型测试',
    en: 'Counter-Strike 2 Player Quiz',
    ja: 'CS2 プレイヤータイプ診断',
    ko: 'CS2 플레이어 유형 테스트',
  },
  deck: {
    zh: '你是哪种 CS2 玩家？',
    en: 'What kind of CS2 player are you?',
    ja: 'あなたはどんな CS2 プレイヤー？',
    ko: '당신은 어떤 CS2 플레이어인가요?',
  },
  description: {
    zh: '30 道题、6 个维度、8 种原型，从 Eco 财务总监到中门 AWP 牛仔全都有',
    en: '30 questions, 6 axes, 8 archetypes: IGL, AWP cowboy, eco CFO, and 5 more',
    ja: '30問・6軸・8タイプ。エコ回合CFOからAWPカウボーイまで本当のスタイルを診断',
    ko: '30문항·6축·8가지 유형. 에코 라운드 CFO부터 AWP 카우보이까지',
  },
  dominantAxes: ['Tempo', 'Intel', 'Nerve'] as const,
  archetypes: [
    {
      slug: 'eco-cfo',
      name: {
        zh: 'Eco 回合财务总监',
        en: 'Eco CFO',
        ja: 'エコラウンドCFO',
        ko: '에코 라운드 CFO',
      },
      oneLiner: {
        zh: '队友 force buy，你在语音里就失去表情管理了',
        en: 'Your teammate force-buys and you stop managing your facial expressions',
        ja: '味方が強気買いした瞬間、顔が崩れる',
        ko: '팀원이 풀바이하는 순간 표정 관리가 안 된다',
      },
      description: {
        zh: '你把 CS2 当财务会计来打。每一分钱都有去处，省钱局的节奏感让你安心，"经济回合"在你眼里不是委屈，是战略。队友突然 force buy，你感觉不是被坑，是被背刺了整份季度预算。你记得所有人的剩余金额，也给那种嘴上说"我 eco"手上却买沙鹰的人起了个名字：eco fraud。你知道下一局要买什么。Premier 积分对你来说就是绩效考核，低于预期就要复盘。',
        en: 'You treat CS2 like a spreadsheet with bullets. Every credit has a plan, every eco round is breathing room, and every force buy is a personal insult to your five-round savings arc. You track your teammates\' wallets better than your own, and you\'ve got a name for the guy who says "eco" then buys a Tec-9 anyway: eco fraud. When the buy phase timer hits zero, you already know who wasted money and by how much. Premier Rating is just quarterly earnings — disappointing means a debrief.',
        ja: 'CS2を財務管理ゲームとして捉えてる。お金には全部使い道があって、エコラウンドは苦痛じゃなくて戦略だ。味方が強気買いしたら、半期予算を裏切られた気分になる。全員の残高を把握してるし、"エコる"と言いながらデザートイーグルを買うやつには"eco fraud"って名前をつけてる。次のラウンドで何を買うべきかも頭に入ってる。Premierレーティングは自分の成績表みたいなもので、期待を下回ったらちゃんと反省する。',
        ko: 'CS2를 재무 시뮬레이션 게임으로 플레이한다. 돈에는 전부 용도가 있고, 에코 라운드는 전략이지 굴욕이 아니다. 팀원이 갑자기 풀바이하면 배신당한 느낌이 든다. 모두의 잔액을 기억하고, "에코한다"면서 데저트 이글 사는 인간한테는 따로 이름까지 붙여뒀다: eco fraud. 다음 라운드 구매 계획도 이미 머릿속에 있다. 프리미어 레이팅은 성과 지표고, 기대치를 밑돌면 반드시 복기한다.',
      },
      symptoms: [
        {
          zh: '看见队友 force buy，呼吸不稳',
          en: 'Your breathing gets uneven when a teammate force-buys',
          ja: '味方が強気買いすると呼吸が乱れる',
          ko: '팀원 풀바이 소리에 숨이 막힌다',
        },
        {
          zh: '省钱局你出门角度比任何人都谨慎',
          en: 'On eco rounds you peek fewer angles than anyone alive',
          ja: 'エコラウンドでは誰よりも慎重に角度を確認する',
          ko: '에코 라운드에서 누구보다 조심스럽게 움직인다',
        },
        {
          zh: '你在买枪环节计算所有人的余额',
          en: 'You mentally track every teammate\'s wallet during buy phase',
          ja: '買い物フェーズで全員の残高を計算してる',
          ko: '구매 페이즈에서 팀원 전원의 잔액을 계산한다',
        },
        {
          zh: '对方丢枪，你比队友更快扑过去',
          en: 'You reach a dropped gun before your teammates even notice it',
          ja: '敵がドロップした銃に誰より早く飛びつく',
          ko: '적이 드롭한 총에 팀원보다 먼저 달려간다',
        },
        {
          zh: '"再省一局就能买 AK + 甲" 是你的口头禅',
          en: '"One more eco and we full buy" is your personal mantra',
          ja: '"もう一回エコればフルバイできる" が口癖だ',
          ko: '"한 판 더 아끼면 풀바이 가능" 이 입버릇이다',
        },
      ],
      polarityPattern: {
        Tempo: 'low',
        Intel: 'low',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'flash-entry',
      bestSquadSlug: 'default-igl',
    },
    {
      slug: 'lineup-priest',
      name: {
        zh: '投掷物图书馆员',
        en: 'Lineup Priest',
        ja: 'ラインアップ司祭',
        ko: '라인업 사제',
      },
      oneLiner: {
        zh: '每张图背 200 个 lineup，但还是没上过 FACEIT Level 10',
        en: 'Memorized 200 lineups on every map, still not FACEIT Level 10',
        ja: '全マップで200本のラインアップを覚えてるけど、FACEIT Lv10は遠い',
        ko: '맵마다 라인업 200개 외웠는데 아직 FACEIT 레벨 10은 아니다',
      },
      description: {
        zh: '你的赛前热身是打开 YouTube 再温习一遍 Mirage B smoke lineup。你知道哪个 lineup 能封一字路，哪个能盲扔穿窗户——不是感觉，是坐标。闪光弹落点精确到一栋楼的哪面墙。在你眼里，CS2 就是个需要背题库的考试，你考勤满分，但考场上有人作弊（用 wallbang）。',
        en: 'Your warmup routine involves a lineup video before queue. You know exactly which pixel on which wall sends the smoke to one-way Mirage or two-way Inferno — it\'s coordinates, not instinct. Flashbangs land where they\'re aimed. In your head, CS2 is an exam with a fixed answer key, and you\'ve done the homework. The part that upsets you: some opponents skip the exam entirely and just wallbang.',
        ja: 'ウォームアップはYouTubeでラインアップ動画を確認することから始まる。ミラージュの一方通行スモークも、インフェルノの2ウェイも、壁のどのピクセルに当てるか全部知ってる。フラッシュは狙った場所に落ちる。CS2は暗記問題のある試験みたいなもので、自分はちゃんと勉強してる。腹が立つのは、ウォールバングで試験をスキップしてくる相手がいること。',
        ko: '워밍업은 유튜브 라인업 영상 확인으로 시작한다. 미라지 원웨이 스모크, 인페르노 투웨이, 벽의 어느 픽셀에 맞혀야 하는지 전부 안다. 플래시는 목표한 곳에 정확히 떨어진다. CS2는 정해진 답이 있는 시험 같은 게임이고, 공부는 충분히 했다. 짜증나는 건 월뱅으로 시험 자체를 건너뛰는 상대방이 있다는 점이다.',
      },
      symptoms: [
        {
          zh: '赛前必看 lineup 视频，不然感觉心慌',
          en: 'Pre-match lineup video is non-negotiable — skipping it feels wrong',
          ja: '試合前のラインアップ動画は必須で、見ないと落ち着かない',
          ko: '경기 전 라인업 영상은 필수. 안 보면 불안하다',
        },
        {
          zh: '你知道 Mirage 每个 smoke 落点，背到可以闭眼扔',
          en: 'You can throw Mirage smokes from memory with your eyes closed',
          ja: 'ミラージュのスモークは目を閉じても投げられる',
          ko: '미라지 스모크는 눈 감고도 던질 수 있다',
        },
        {
          zh: '队友胡乱扔烟，你在想"为什么不学 lineup"',
          en: 'When a teammate throws a random smoke, you think "why haven\'t they learned lineups"',
          ja: '味方がテキトーにスモークを投げると "なぜ練習しないんだ" と思う',
          ko: '팀원이 대충 스모크 던지면 "왜 라인업을 안 외워?" 생각한다',
        },
        {
          zh: '你可以在 Inferno 用 molotov 封 B 包点而不踏进入点',
          en: 'You can molotov B apps on Inferno without stepping into the site',
          ja: 'インフェルノのBアプスをサイトに入らずにモロトフで封じられる',
          ko: '인페르노 B 앱스를 사이트 진입 없이 화염병으로 막을 수 있다',
        },
        {
          zh: 'wallbang 击杀让你觉得那是"作弊"，因为它不可预测',
          en: 'Wallbang kills feel like cheating to you — they violate the predictable system',
          ja: 'ウォールバングキルは予測不能なので "ずるい" と感じる',
          ko: '월뱅 킬은 예측 불가라서 사실상 반칙처럼 느껴진다',
        },
      ],
      polarityPattern: {
        Tempo: 'low',
        Intel: 'low',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'awp-cowboy',
      bestSquadSlug: 'default-igl',
    },
    {
      slug: 'silent-anchor',
      name: {
        zh: '安静架点哲学家',
        en: 'Silent Anchor',
        ja: '沈黙のアンカー',
        ko: '침묵의 앵커',
      },
      oneLiner: {
        zh: '你不说话，但 B 点永远有人守',
        en: 'You say nothing; B site is always covered',
        ja: '何も言わないけど、Bサイトは守られてる',
        ko: '아무 말 안 해도 B 사이트는 항상 지켜진다',
      },
      description: {
        zh: '你在语音里不活跃，但你的架点位置让队友放心转移。你不打 rush，你等。等到对方因为不确定你在哪而慌了，再开枪。你的 CS2 哲学：沉默是最好的心理战。你蹲坑不是因为懒，是因为等时机。下半场打 CT，你一个人守 B 到回合结束，让三个人去 A 忙，这就是你的贡献方式。轮到你拆弹时经常是 ninja defuse：对面还在附近晃，炸弹已经拆完了，没人听见滴答声停下来。',
        en: 'You\'re quiet in voice chat, but your anchor position gives your team room to rotate. You don\'t rush. You wait. You wait until the enemy starts second-guessing your location, then you shoot. Your CS2 philosophy: silence is the best mind game. Holding a site alone isn\'t passive — it\'s freeing up your four teammates to work. When B-site stays clean for three straight rounds, that\'s entirely you, and when you get the defuse with enemies still wandering nearby, you ninja it. Nobody hears the beeping stop until the bomb\'s already safe.',
        ja: 'ボイスチャットでは静かだけど、アンカーポジションがチームをサポートしてる。ラッシュはしない。待つ。相手が "どこにいるんだ" と混乱するまで待って、撃つ。CS2の哲学はシンプルで、沈黙が一番のマインドゲームだ。1人でBサイトを守るのは消極的じゃなくて、4人を解放してあげてること。3ラウンド連続でBが取られなかったら、それは自分のおかげだ。敵がまだ近くをうろついてるのに解除が終わってることもある。誰も爆弾の音が止まったことに気づかない、いわゆるニンジャ解除だ。',
        ko: '보이스 챗에서 조용하지만, 앵커 포지션으로 팀 로테이션을 열어준다. 러시는 안 한다. 기다린다. 상대가 내 위치를 헷갈릴 때까지 기다렸다가 쏜다. CS2 철학은 간단하다: 침묵이 최고의 심리전이다. 혼자 B 사이트 지키는 건 소극적인 게 아니라 나머지 넷을 자유롭게 풀어주는 거다. 3라운드 연속 B 클린이면, 그건 내 덕이다. 적이 아직 근처를 돌아다니는데 해제가 끝나 있는 경우도 있다. 삐 소리 멈춘 걸 아무도 못 알아챈다, 이른바 닌자 디퓨즈다.',
      },
      symptoms: [
        {
          zh: '语音里你说话不多，但你会 ping 关键信息',
          en: 'You say little in voice chat but ping every useful piece of info',
          ja: 'ボイスチャットではほとんど話さないが、重要な情報はピンで共有する',
          ko: '보이스 챗은 거의 안 하지만 중요한 정보는 핑으로 다 알린다',
        },
        {
          zh: '你能在同一个架点蹲坑三分钟不移动',
          en: 'You can hold one angle for three full minutes without moving',
          ja: '同じアングルを3分間動かずにホールドできる',
          ko: '같은 각도를 3분 내내 움직이지 않고 잡을 수 있다',
        },
        {
          zh: '队友转点去 A，你一个人守 B 也没抱怨',
          en: 'Your team rotates to A; you hold B alone and don\'t complain',
          ja: 'チームがAに動いても、1人でBを守って文句も言わない',
          ko: '팀이 A로 이동해도 혼자 B 지키면서 불평 안 한다',
        },
        {
          zh: '残局你的走位比 AK 精准',
          en: 'In late-round situations your positioning is more precise than your aim',
          ja: '終盤、エイムよりもポジショニングの方が正確だ',
          ko: '후반부에는 에임보다 포지셔닝이 더 정확하다',
        },
        {
          zh: '你觉得大声喊叫的玩家都是在浪费信息',
          en: 'You think players who shout a lot are leaking information, not giving it',
          ja: 'うるさくしゃべる人は情報を与えてるんじゃなくて漏らしてると思ってる',
          ko: '시끄럽게 떠드는 플레이어는 정보를 주는 게 아니라 새는 거라고 생각한다',
        },
      ],
      polarityPattern: {
        Tempo: 'low',
        Intel: 'high',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'flash-entry',
      bestSquadSlug: 'clutch-saint',
    },
    {
      slug: 'clutch-saint',
      name: {
        zh: '残局 1v3 圣徒',
        en: 'Clutch Saint',
        ja: 'クラッチ聖人',
        ko: '클러치 성인',
      },
      oneLiner: {
        zh: '进语音前先停三秒，1v3 的局用直觉打',
        en: 'Three seconds of silence before speaking; the 1v3 runs on instinct',
        ja: 'ボイスに入る前に3秒止まる。1v3は感覚で戦う',
        ko: '보이스 들어가기 전 3초 침묵. 1v3은 감각으로 한다',
      },
      description: {
        zh: '你不怕 1v3，你怕的是在那之前就开始慌。你进语音总是先停顿三秒，确认自己脑子清醒，才开口。你不是最快的，但你在压力下比大多数人更冷静。第一枪 whiff 了，大部分人会开始惊慌乱扫，你只会把准星拉回来，稳稳打第二枪。在你被迫要拆弹的时候，周围炸弹滴答声不会让你手抖，你先算时间再走位。你救过几局别人以为没救的，但你不觉得是奇迹，是正确执行。',
        en: 'You don\'t fear 1v3s. You fear panicking before the 1v3 starts. Three seconds before you speak in voice chat — a private reset to confirm you\'re thinking clearly. You\'re not the fastest aim in the server, but under pressure you slow down instead of speeding up. Whiff the first bullet and most players panic-spray the rest into a wall; you just walk the crosshair back and take the second shot clean. Defusing the bomb with two enemies alive, you calculate the time window first, then move. Other players call it a miracle; you call it correct execution.',
        ja: '1v3は怖くない。1v3が始まる前にパニックになることが怖い。ボイスチャットで話す前に必ず3秒間止まる、それは頭を整理するための習慣だ。サーバーで一番速いエイムじゃないけど、プレッシャー下では逆に落ち着いてくる。1発目をウィフしても、大抵の人はパニックでばらまくところを、自分は照準を戻して2発目を丁寧に当てる。敵が2人いる状況で爆弾を解除するとき、まず時間を計算してから動く。他のプレイヤーはミラクルと言うけど、自分では正確な実行だと思ってる。',
        ko: '1v3이 두려운 게 아니라 1v3 시작 전에 패닉하는 게 두렵다. 보이스 챗에서 말하기 전 3초 멈춘다. 머릿속 정리를 위한 습관이다. 서버에서 에임이 가장 빠른 편은 아니지만, 압박 상황에서 오히려 침착해진다. 첫 발을 위프해도 남들처럼 패닉 스프레이 하지 않는다. 조준선 다시 잡고 두 번째 발을 깔끔하게 넣는다. 적 두 명이 살아있는 상황에서 폭탄을 해제할 때, 먼저 시간 계산하고 움직인다. 남들은 기적이라고 하지만 나는 올바른 실행이라고 생각한다.',
      },
      symptoms: [
        {
          zh: '1v3 反杀后不会尖叫，会默默说 "ok"',
          en: 'After a 1v3 you don\'t yell. You say "ok" and reload',
          ja: '1v3リバースキル後も叫ばない。"ok"と言ってリロードする',
          ko: '1v3 역클러치 후 소리 안 지른다. "ok" 하고 리로드한다',
        },
        {
          zh: '你比队友更晚进语音，但说的每句话都有用',
          en: 'You join voice chat later than your teammates, but every sentence you say matters',
          ja: '味方よりボイスに入るのが遅いけど、一言一言が重要だ',
          ko: '팀원보다 보이스 늦게 들어가지만 한마디 한마디가 다 의미있다',
        },
        {
          zh: '拆弹时手不抖，炸弹滴答声你当计时器',
          en: 'Your hands don\'t shake when defusing; the bomb beeps are your timer',
          ja: '解除中に手が震えない。爆弾の音はタイマー代わりだ',
          ko: '해제 중 손 안 떨린다. 폭탄 소리는 타이머로 쓴다',
        },
        {
          zh: '你记得哪些拆弹时机点对方会探头',
          en: 'You know exactly when opponents peek during a defuse — and you\'re ready',
          ja: '解除中に相手がいつ顔を出すか知ってて、そこに合わせてる',
          ko: '해제 중 상대가 언제 고개 내미는지 알고 준비하고 있다',
        },
        {
          zh: '朋友说你是"最平静的玩家"，你不确定这是夸你',
          en: 'Friends call you the calmest player they know; you\'re not sure it\'s a compliment',
          ja: '友達から "一番落ち着いてる" と言われるけど、褒め言葉かどうか分からない',
          ko: '친구들이 제일 침착한 플레이어라고 하는데 칭찬인지 모르겠다',
        },
      ],
      polarityPattern: {
        Tempo: 'low',
        Intel: 'high',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'awp-cowboy',
      bestSquadSlug: 'silent-anchor',
    },
    {
      slug: 'default-igl',
      name: {
        zh: '默认开局 IGL',
        en: 'Default IGL',
        ja: 'デフォルトIGL',
        ko: '디폴트 IGL',
      },
      oneLiner: {
        zh: '每局开场都有 "set play"，只是没人听',
        en: 'Every round has a set play; nobody runs it',
        ja: '毎ラウンドにセットプレイがある。誰も実行しないけど',
        ko: '매 라운드 세트 플레이가 있다. 아무도 안 하지만',
      },
      description: {
        zh: '你是天生的指挥官，但打 Premier solo queue 的指挥官。每局开枪前你就知道这局要打什么，A 还是 B，默认走打信息还是压点。你的语音频道信息密度比别人高一倍，队友不一定都配合，但偶尔有人听的时候，那一局打得特别流畅。你会在败局后分析失误点，不是抱怨，是在想下一局怎么调整。',
        en: 'You\'re a natural caller stuck in Premier solo queue. Before any gun fires, you know this round\'s plan: A split, B default, or information gather. Your call cadence is twice as dense as your teammates\'. They don\'t always follow — but when one of them does, that round flows. After a loss, you don\'t vent; you identify the adjustment for next round. Teams like Heroic run structured calls for a reason, and you feel that reason in your bones.',
        ja: 'Premierのソロキューに閉じ込められた天才コーラー。銃声が鳴る前に、今ラウンドのプランが頭にある。Aスプリット、Bデフォルト、情報収集。コールの密度は味方の倍くらいある。みんながついてくるわけじゃないけど、1人でも動いてくれたラウンドはすごくスムーズだ。負けた後は愚痴を言わず、次のラウンドへの修正を考える。',
        ko: '프리미어 솔로 큐에 갇힌 천재 콜러다. 총성이 울리기 전에 이번 라운드 플랜이 이미 머릿속에 있다. A 스플릿, B 디폴트, 정보 수집. 콜 밀도는 팀원의 두 배다. 항상 따라주는 건 아니지만 한 명이라도 움직여줄 때 그 라운드는 매우 부드럽게 흘러간다. 패배 후 불평 대신 다음 라운드 조정 방법을 생각한다.',
      },
      symptoms: [
        {
          zh: '每局开枪前已经规划好 A 打法',
          en: 'You\'ve planned the A execute before the buy phase timer ends',
          ja: '買い物フェーズが終わる前にAのプランが出来上がってる',
          ko: '구매 페이즈 끝나기 전에 A 실행 계획이 완성되어 있다',
        },
        {
          zh: '你知道什么时候该默认走，不等对方给信息',
          en: 'You know when to default without waiting for the enemy to give you information',
          ja: '相手が情報をくれるのを待たずに、デフォルトで動くべきタイミングを知ってる',
          ko: '상대 정보 없이도 디폴트로 움직여야 할 타이밍을 안다',
        },
        {
          zh: '败局后你第一个开始分析，不是抱怨',
          en: 'After a loss you\'re the first to analyse, not the first to blame',
          ja: '負けた後は最初に分析を始める。文句より先に',
          ko: '패배 후 제일 먼저 분석 시작한다. 불평보다 먼저',
        },
        {
          zh: '你知道 B 包点上哪个 timing 可以夹队友',
          en: 'You know the exact timing to catch enemies rotating on B plant',
          ja: 'Bプラント後に敵がローテートするタイミングを正確に知ってる',
          ko: 'B 폭탄 설치 후 로테이션 타이밍을 정확히 안다',
        },
        {
          zh: '"set play" 打失败是队友没执行，不是你 call 错了',
          en: 'When the set play fails, it\'s execution, not the call. You\'re sure of this.',
          ja: 'セットプレイが失敗したのは実行のせいで、コール自体は間違ってない。確信がある。',
          ko: '세트 플레이가 실패하면 실행 문제지 콜 문제가 아니다. 확신한다.',
        },
      ],
      polarityPattern: {
        Tempo: 'high',
        Intel: 'low',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'silent-anchor',
      bestSquadSlug: 'eco-cfo',
    },
    {
      slug: 'flash-entry',
      name: {
        zh: '闪光弹进点先锋',
        en: 'Flash Entry',
        ja: 'フラッシュエントリー',
        ko: '플래시 엔트리',
      },
      oneLiner: {
        zh: '第一秒交完所有道具，第二秒进点',
        en: 'All utility spent in second one; already on site by second two',
        ja: '1秒目に全道具使用完了。2秒目にはもうサイトに入ってる',
        ko: '1초에 모든 도구 소모. 2초에 이미 사이트 진입',
      },
      description: {
        zh: '进攻回合在你这里的意思就是"走最快的路，用最多的道具，第一个到点"。你的闪光弹不是给队友看的，是给自己进点用的。有时候队友没跟上——那是他们的问题，你已经进了。你偶尔会 trade 死，但那是"用命换信息"，而不是浪费。eco 回合你最难受，因为省钱代表着你这一局进不了点。',
        en: 'Attacking means fastest path, most utility, first player on site. Your flash isn\'t to help teammates see — it\'s to cover your own entry. Sometimes they don\'t follow; that\'s their delay, not your fault. You trade occasionally, and you\'re fine with it because a traded entry is intel you bought with your body. Eco rounds are genuinely painful: saving money means not getting to entry, which means watching other people play your round.',
        ja: '攻撃ラウンドの意味は "最速ルート、最大限の道具、最初にサイト入り" だ。フラッシュは味方のためじゃなくて、自分のエントリーのために使う。ついてこない味方がいても、それは向こうの遅れであって自分のせいじゃない。トレードになることもあるけど、それは "命で情報を買った" ということで、無駄死にじゃない。エコラウンドがしんどいのは、節約するとエントリーできないから。',
        ko: '공격 라운드는 "가장 빠른 경로, 최대한 많은 도구, 사이트 첫 진입"을 의미한다. 플래시는 팀원을 위한 게 아니라 내 진입 커버용이다. 팀원이 안 따라와도 그건 그쪽 문제고 내 잘못이 아니다. 트레이드되기도 하는데 그건 "목숨으로 정보를 산 것"이지 낭비가 아니다. 에코 라운드가 힘든 건 아끼면 진입을 못 해서 남들이 내 라운드를 하는 걸 봐야 하기 때문이다.',
      },
      symptoms: [
        {
          zh: '你永远是队伍里第一个进点的',
          en: 'You\'re always first on site. Every round, no exceptions',
          ja: '毎ラウンド、必ず自分が最初にサイトに入る',
          ko: '매 라운드 항상 사이트 첫 진입이다. 예외 없이',
        },
        {
          zh: '在买枪阶段你已经规划好闪光弹投掷路径',
          en: 'During buy phase you\'re already planning which corner the flash covers',
          ja: '買い物フェーズで、もうどのコーナーにフラッシュを当てるか計画してる',
          ko: '구매 페이즈에 이미 플래시로 어느 코너 커버할지 계획한다',
        },
        {
          zh: 'force buy 回合你买最便宜的枪，但一定买闪光弹',
          en: 'Force buy means cheapest gun available, but the flashes are non-negotiable',
          ja: '強気買いでも銃は安いのでいいけど、フラッシュだけは絶対買う',
          ko: '강제 구매여도 총은 싼 걸로 하지만 플래시는 무조건 산다',
        },
        {
          zh: '你的死亡经常发生在进点的第三秒',
          en: 'Most of your deaths happen within three seconds of entering a site',
          ja: '死亡の多くがサイト入りから3秒以内に起きる',
          ko: '사망의 대부분이 사이트 진입 3초 이내에 발생한다',
        },
        {
          zh: '死了也觉得没问题，"我帮队友开路了"',
          en: 'Dying is fine; "I opened it up for the team" is a complete sentence',
          ja: '死んでも "チームのために道を開けた" で完結する',
          ko: '죽어도 괜찮다. "팀을 위해 길 열었다"로 충분하다',
        },
      ],
      polarityPattern: {
        Tempo: 'high',
        Intel: 'low',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'eco-cfo',
      bestSquadSlug: 'arch-cleric',
    },
    {
      slug: 'arch-cleric',
      name: {
        zh: '预瞄先知',
        en: 'Pre-aim Prophet',
        ja: '先読みの預言者',
        ko: '선조준 예언자',
      },
      oneLiner: {
        zh: '回合刚开始你就选好了这个角度，四十秒没人来也不会动摇',
        en: 'You called this angle before the round started. Forty seconds of silence changes nothing',
        ja: 'ラウンド開始前からこのアングルに決めてた。40秒誰も来なくても揺らがない',
        ko: '라운드 시작 전부터 이 각도로 정했다. 40초 동안 아무도 안 와도 흔들리지 않는다',
      },
      description: {
        zh: '你每张图都有一个预瞄好的死角，不只是所有人都知道的那个点位。蹲在哪儿不重要——你在回合开始前就已经决定了敌人该出现在哪儿，"蹲坑"这个骂名听太多次，早就不痛不痒了。预瞄胜过反应速度，走位胜过手速。你打的不是对方的移动，你打的是对方"应该出现的地方"。有时候你等了一整局没人走那个角，你也不会挪窝，信念不需要立刻兑现。',
        en: 'You\'ve got a pre-aimed angle memorized on every map, not just the one everyone assumes. Doesn\'t matter which corner — you decided where the enemy has to stand before the round even started, and "camper" stopped stinging as an insult a long time ago. Pre-aim beats reaction time. Positioning beats speed. You\'re not shooting at movement, you\'re shooting at where someone is required to appear. Some rounds nobody walks into your angle at all. You don\'t move anyway. The faith doesn\'t need immediate confirmation.',
        ja: 'ミラージュのアーチだけじゃない、どのマップにも自分だけの先読みポジションがある。どこであろうと関係ない、ラウンドが始まる前から敵が出てくるべき場所はもう決まってる。「キャンパー」と言われても、今さら傷つかない。哲学は"先読みエイムはリアクションに勝る、ポジショニングはスピードに勝る"だ。動きを狙うんじゃなくて、相手が出てくるべき場所を狙ってる。ラウンド中誰も来ないこともある。それでも動かない。信念は即座の証明を必要としない。',
        ko: '미라지 아치만이 아니다. 맵마다 이미 선조준해둔 각도가 있다. 어디든 상관없다. 라운드 시작 전부터 적이 나타나야 할 자리는 이미 정해져 있고, "캠퍼" 소리는 이제 들어도 그러려니 한다. 철학은 "선조준이 반응 속도를 이기고, 포지셔닝이 속도를 이긴다"이다. 움직임을 쏘는 게 아니라 상대가 나타날 자리를 조준하는 거다. 라운드 내내 아무도 안 오는 경우도 있다. 그래도 안 움직인다. 믿음은 즉시 증명받을 필요가 없다.',
      },
      symptoms: [
        {
          zh: '你喜欢找没人注意的角度，然后等',
          en: 'You find angles others ignore, then wait',
          ja: '誰も気にしない角度を見つけて、待つ',
          ko: '아무도 신경 안 쓰는 각도를 찾아서 기다린다',
        },
        {
          zh: 'Mirage arch 是你最熟的架点，架了一百局没腻',
          en: 'Mirage arch is your most-played position; one hundred rounds and still not bored',
          ja: 'ミラージュのアーチは一番使うポジションで、百回やっても飽きない',
          ko: '미라지 아치는 제일 많이 쓰는 포지션이고 백 판 해도 안 질린다',
        },
        {
          zh: '你不用 AWP，你用步枪把 AWP 位打下来',
          en: 'You don\'t need an AWP. You rifle the AWP angle',
          ja: 'AWPは要らない。ライフルでAWPのアングルを使う',
          ko: 'AWP 없어도 된다. 라이플로 AWP 각도 쓴다',
        },
        {
          zh: '对方探头的时机你早就预判好了',
          en: 'You\'ve already pre-aimed before they start peeking',
          ja: '相手がピークし始める前に、もう先読みエイムが完成してる',
          ko: '상대가 피킹 시작하기 전에 이미 선조준 완료다',
        },
        {
          zh: '被骂蹲坑你不在乎，你在乎的是架到了没',
          en: 'Being called a camper doesn\'t bother you; what bothers you is missing the shot when they came',
          ja: 'キャンパー呼ばわりされても気にしない。気になるのは、相手が来たときに外すことだ',
          ko: '캠퍼 소리 들어도 신경 안 쓴다. 신경 쓰이는 건 상대가 왔을 때 못 맞히는 거다',
        },
      ],
      polarityPattern: {
        Tempo: 'high',
        Intel: 'high',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'flash-entry',
      bestSquadSlug: 'lineup-priest',
    },
    {
      slug: 'awp-cowboy',
      name: {
        zh: '中门尊严狙击手',
        en: 'AWP Cowboy',
        ja: 'AWPカウボーイ',
        ko: 'AWP 카우보이',
      },
      oneLiner: {
        zh: '每把 AWP 都是历史名场面，即便你 0.2 秒后被人秒了',
        en: 'Every AWP peek is a history-shot, even when you die 0.2 seconds after',
        ja: 'AWPのピークは全部名場面。0.2秒後にやられても',
        ko: 'AWP 피킹은 전부 역사적인 장면이다. 0.2초 후에 죽어도',
      },
      description: {
        zh: '你买 AWP，不是因为效率高，是因为 AWP 是命中注定。中门对狙、推桥、躲角，每一枪都奔着 one-tap 去，能不能被剪进集锦就看这一下。s1mple 的高光片让你觉得自己也能，你也打过几次，那种感觉对了就再也忘不掉。你有时候会 trade，有时候会被反操，但 AWP 是你的身份证，没有它你不知道自己是谁。',
        en: 'You don\'t buy AWP because it\'s efficient — you buy it because the AWP is identity. Mid-door duels, bridge peeks, sneaky angles: every shot is a one-tap trying to become a clip. s1mple\'s highlight reels make you think "I can do that," and a few times you have, and that feeling didn\'t leave. You get traded. You get counter-sniped. But without the AWP you genuinely don\'t know who you are in this server.',
        ja: 'AWPを買うのは効率がいいからじゃなくて、AWPがアイデンティティだから。ミッドドアの撃ち合い、橋のピーク、意外なアングル。どの1発もワンタップでクリップになるかどうかの勝負だ。s1mpleのハイライトを見て "自分もできる" と思って、実際に何度かやれた。あの感覚はずっと残ってる。トレードになることもある。カウンタースナイプされることもある。でもAWPなしじゃ、このサーバーで自分が誰なのか分からない。',
        ko: 'AWP를 사는 건 효율적이어서가 아니라 AWP가 정체성이기 때문이다. 중문 결투, 브릿지 피킹, 예상 못 한 각도. 모든 한 발이 원탭으로 클립이 되느냐 마느냐의 싸움이다. s1mple 하이라이트 보면서 "나도 할 수 있다" 생각하고, 실제로 몇 번 해봤다. 그 느낌은 아직도 남아 있다. 트레이드되기도 한다. 카운터 스나이핑 당하기도 한다. 하지만 AWP 없이는 이 서버에서 내가 누구인지 모르겠다.',
      },
      symptoms: [
        {
          zh: '买得起 AWP 的回合，你不会考虑其他枪',
          en: 'Any round you can afford an AWP, there\'s nothing else to consider',
          ja: 'AWPを買えるラウンドは、他の銃を検討する必要はない',
          ko: 'AWP 살 수 있는 라운드에 다른 총은 고려 대상이 아니다',
        },
        {
          zh: '你把 AWP 卖给队友这件事本身就是创伤',
          en: 'Selling the AWP to a teammate is a form of grief',
          ja: 'AWPをチームメイトに売ることは、一種の喪失体験だ',
          ko: 'AWP를 팀원에게 파는 건 일종의 트라우마다',
        },
        {
          zh: '你的高光集锦里 90% 是 AWP 爆头',
          en: 'Your highlight reel is 90% AWP headshots and 10% you getting one-tapped by a pistol',
          ja: 'ハイライト映像の90%がAWPヘッドショットで、残り10%はピストルで1タップされてる',
          ko: '하이라이트 영상의 90%는 AWP 헤드샷이고 10%는 권총에 원탭 당하는 거다',
        },
        {
          zh: '中门探头是你最爱的开局戏',
          en: 'Mid-door peek is the opening move you live for',
          ja: 'ミッドドアのピークが、毎ラウンドの生きがいだ',
          ko: '중문 피킹이 매 라운드 살아가는 이유다',
        },
        {
          zh: '被 trade 了也没关系，"那一枪值了"',
          en: 'Getting traded is fine; "that shot was worth it" is a complete emotional resolution',
          ja: 'トレードになっても "あの1撃は価値があった" で全部解決する',
          ko: '트레이드되어도 "그 한 발은 값어치 있었다"로 모든 감정 해소된다',
        },
        {
          zh: 'eco 回合你会存钱，但你存的是下一把 AWP 的钱',
          en: 'On eco rounds you save, but you\'re saving for the next AWP, not the round',
          ja: 'エコラウンドで節約するけど、次のAWPのために節約してる',
          ko: '에코 라운드에서 아끼긴 하는데, 다음 AWP를 위해서 아끼는 거다',
        },
      ],
      polarityPattern: {
        Tempo: 'high',
        Intel: 'high',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      rivalSlug: 'lineup-priest',
      bestSquadSlug: 'flash-entry',
    },
  ],
  questions: [
    // ── Q1 Anchor: Tempo ──────────────────────────────────────────────────────
    {
      id: 'cs2-q01',
      kind: 'anchor',
      text: {
        zh: '买枪阶段结束，你第一个想法是什么？',
        en: 'Buy phase ends. What\'s your first thought?',
        ja: '購入フェーズが終わった。最初に頭に浮かぶことは？',
        ko: '구매 페이즈가 끝났다. 처음 드는 생각은?',
      },
      options: [
        {
          label: {
            zh: '先拿信息，别急着进',
            en: 'Get info first, no rush',
            ja: 'まず情報を取る、焦らない',
            ko: '정보 먼저, 서두르지 않는다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '直接压，给对面一点压力',
            en: 'Push now, put pressure on them',
            ja: '今すぐ前に出る、プレッシャーをかける',
            ko: '바로 압박한다, 상대에게 압박 가한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '跟着指挥走，他说怎样就怎样',
            en: 'Follow the IGL\'s call, whatever it is',
            ja: 'IGLの指示に従う、何であれ',
            ko: 'IGL 콜 따라간다, 뭐든',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '闪光弹已经在手上了，就等倒计时',
            en: 'Flash already in hand, waiting for the countdown',
            ja: 'もうフラッシュを持って、カウントダウン待ちだ',
            ko: '이미 플래시 들고 카운트다운 기다리는 중',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── Q2 Anchor: Tempo ──────────────────────────────────────────────────────
    {
      id: 'cs2-q02',
      kind: 'anchor',
      text: {
        zh: '你们的 AWP 手被一梭子流弹撂倒在空地上，枪就躺在中路，两边雷达上都看得见。十五秒内总有人要去捡。',
        en: 'Your AWP carrier just died to a stray spray in the open. The rifle\'s sitting in the middle of the map, visible on both radars. Fifteen seconds before someone commits to grabbing it.',
        ja: 'AWP持ちが中央でランダムなスプレーに倒された。銃はマップ中央に転がってて、両チームのレーダーに映ってる。誰かが取りに行くまで15秒。',
        ko: 'AWP 캐리어가 미드에서 유탄에 맞아 쓰러졌다. 총은 중앙에 떨어져 있고 양쪽 레이더에 다 보인다. 누군가 줍기로 결심하기까지 15초 남았다.',
      },
      options: [
        {
          label: {
            zh: '当没看见，先找个安全位置重新架好',
            en: 'Write it off as unwinnable, reposition somewhere safer',
            ja: '見なかったことにして、安全な場所に立て直す',
            ko: '못 본 셈 치고 안전한 자리로 재정비한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '直接冲出去捡，这局的走向就看这把枪',
            en: 'Sprint for it, the whole round can swing on this one gun',
            ja: '走って取りに行く、このラウンドの行方はこの銃次第だ',
            ko: '바로 뛰어가서 줍는다, 이 라운드는 이 총 하나에 달렸다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先等等，看队友有没有人先去探探',
            en: 'Wait and see if a teammate tests the angle first',
            ja: '待つ、味方が先に様子を見に行くかもしれない',
            ko: '일단 기다린다, 팀원이 먼저 각도 확인하나 본다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '掩护队友去捡，两个人一起顶着压力上',
            en: 'Cover your teammate\'s sprint, push the exposed lane together',
            ja: '味方の突撃をカバーして、2人で開けた通路を攻める',
            ko: '팀원이 뛰어가는 걸 커버하며 같이 노출된 통로로 민다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── Q3 Anchor: Nerve ──────────────────────────────────────────────────────
    {
      id: 'cs2-q03',
      kind: 'anchor',
      text: {
        zh: 'Eco 局，你兜里有 800 刀，同伴全省着。你怎么买？',
        en: 'Eco round, you have $800, teammates are all saving. What do you buy?',
        ja: 'エコラウンド、所持金800ドル、味方は全員節約中。どう買う？',
        ko: '에코 라운드, 돈 800달러, 팀원 전원 아끼는 중. 뭘 살까?',
      },
      options: [
        {
          label: {
            zh: '省着，下局加一起买',
            en: 'Save it, add it to next round\'s full buy',
            ja: '節約して、次のラウンドのフルバイに加える',
            ko: '아낀다, 다음 라운드 풀바이에 더한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '买把手枪加护甲，抗一波',
            en: 'Pistol and armor, take a trade or two',
            ja: 'ピストルと防具、トレードを取りに行く',
            ko: '권총이랑 방어구, 트레이드 노린다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '买霰弹枪，万一我打出来了呢',
            en: 'Nova time, maybe I pop off',
            ja: 'ショットガン買う、もしかしたら爆発するかも',
            ko: '샷건 산다, 혹시 내가 터질 수도',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '全买，抵抗到底，省钱有什么意思',
            en: 'Spend it all, go down swinging, saving is for accountants',
            ja: '全部使う、最後まで戦う、節約は会計士にまかせる',
            ko: '다 쓴다, 끝까지 싸운다, 아끼는 건 회계사한테 맡긴다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q4 Anchor: Nerve ──────────────────────────────────────────────────────
    {
      id: 'cs2-q04',
      kind: 'anchor',
      text: {
        zh: '你 1v2，炸弹在手，还差 10 秒，两个人不知道在哪。怎么打？',
        en: '1v2, bomb in hand, 10 seconds left, two enemies at unknown positions. Call it.',
        ja: '1v2、爆弾を持ってる、残り10秒、敵2人の位置不明。どうする？',
        ko: '1v2, 폭탄 들고 있고, 10초 남았고, 적 두 명 위치 모른다. 어떻게 할까?',
      },
      options: [
        {
          label: {
            zh: '找最安全的包点藏着，等他们来拆',
            en: 'Find the safest plant spot, bait the defuse',
            ja: '一番安全な設置場所に隠れて、解除をおびき出す',
            ko: '제일 안전한 설치 지점 찾아서 해제 기다린다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '找一个干掉，再拼一个',
            en: 'Hunt one, then handle the other',
            ja: '1人倒して、もう1人に当たる',
            ko: '한 명 잡고 나머지 상대한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '包点，然后等，极限反夹',
            en: 'Plant, then swing an extreme counter-peek',
            ja: '設置して待ち、極限のカウンターピーク',
            ko: '설치하고 기다렸다가 극한 역피킹',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '直接冲出去，用位置差打懵他们',
            en: 'Push them off angle, catch them surprised',
            ja: '飛び出していって、奇襲をかける',
            ko: '바로 돌격해서 기습으로 당황하게 한다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q13 Compound: Tempo + Nerve ──────────────────────────────────────────
    {
      id: 'cs2-q13',
      kind: 'compound',
      text: {
        zh: 'Dust2 B 区，你刚从 B 洞出来，对面有两个人，烟雾有了，闪光弹没了。',
        en: 'Dust2 B tunnels, you just exited, two enemies ahead, smoke up but no flash left.',
        ja: 'Dust2のBトンネルを出た、敵が2人、スモークはある、フラッシュはない。',
        ko: 'Dust2 B 터널 방금 나왔다, 앞에 적 두 명, 스모크는 있고 플래시는 없다.',
      },
      options: [
        {
          label: {
            zh: '扔烟，慢慢等队友跟上来',
            en: 'Throw smoke and wait for teammates to catch up',
            ja: 'スモークを投げて、味方が追いつくのを待つ',
            ko: '스모크 던지고 팀원 따라올 때까지 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '扔烟，自己先闯进去',
            en: 'Throw smoke and push through anyway',
            ja: 'スモークを投げてそのまま突っ込む',
            ko: '스모크 던지고 그냥 돌진한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '退回去守 B 洞，等时机',
            en: 'Fall back to tunnels, hold for better timing',
            ja: 'トンネルに戻って、タイミングを待つ',
            ko: '터널로 후퇴해서 타이밍 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '扔烟，然后靠猜裸冲进去',
            en: 'Smoke it and blind push on a read',
            ja: 'スモークして読みで突っ込む',
            ko: '스모크 치고 읽기로 돌격한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q14 Compound: Tempo + Bond ────────────────────────────────────────────
    {
      id: 'cs2-q14',
      kind: 'compound',
      text: {
        zh: '你在跑路，队友在包点，他让你回来守，你要多跑 10 秒。',
        en: 'You\'re rotating, teammate is planting, he calls for you to hold. It adds 10 seconds.',
        ja: 'ローテート中、味方がプラント中、守備を求めてくる。10秒余分にかかる。',
        ko: '로테이션 중, 팀원 설치 중, 지키러 오라고 한다. 10초 더 걸린다.',
      },
      options: [
        {
          label: {
            zh: '回去，他需要我',
            en: 'Go back, he needs me',
            ja: '戻る、彼には自分が必要だ',
            ko: '돌아간다, 그가 나를 필요로 한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '继续走，让他自己守',
            en: 'Keep rotating, he can hold it himself',
            ja: 'ローテートを続ける、自分で守れる',
            ko: '계속 로테이션, 혼자 지킬 수 있다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '先确认包点有没有危险，再决定',
            en: 'Check if the plant spot is safe first, then decide',
            ja: '設置場所が安全か確認してから決める',
            ko: '설치 지점이 안전한지 확인하고 결정한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '不管他，先找人打掉再说',
            en: 'Ignore the call, clear enemies first',
            ja: '無視して、先に敵を片付ける',
            ko: '무시하고, 먼저 적 잡는다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── Q15 Compound: Tempo + Intel ───────────────────────────────────────────
    {
      id: 'cs2-q15',
      kind: 'compound',
      text: {
        zh: 'Mirage，你打 T 边，上半场你们 A 打了六次赢了四次。下半场打 CT，对面会怎么守 A？',
        en: 'Mirage, T side, A execute worked 4 of 6 first-half rounds. CT side now: how will they defend A?',
        ja: 'ミラージュのT側、前半にAでの攻撃が6回中4回成功。後半はCT側、相手はAをどう守る？',
        ko: '미라지 T 사이드, 전반 A 실행 6번 중 4번 성공. 후반 CT 사이드, 상대는 A를 어떻게 지킬까?',
      },
      options: [
        {
          label: {
            zh: '他们一定会加强 A 的守备，我去 B 给压力',
            en: 'They\'ll stack A, so I apply pressure on B',
            ja: '相手は絶対Aを固める、だからBにプレッシャーをかける',
            ko: '상대는 분명 A 보강할 것이다, 나는 B에 압박 준다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '等看第一局他们怎么站再决定',
            en: 'See how they set up in round one before committing',
            ja: '1ラウンド目の配置を見てから決める',
            ko: '1라운드 배치 보고 나서 결정한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉他们还会回 A，我直接去挡',
            en: 'I feel they\'re coming A again, I\'ll pre-position there',
            ja: 'またAに来る気がする、先にそこに行く',
            ko: '또 A 올 것 같다, 먼저 거기 간다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '反正等他们来再说，守好位置就行',
            en: 'Hold my position and react when they come',
            ja: 'とにかく来るまで待つ、ポジションを守るだけ',
            ko: '어차피 올 때 반응하면 된다, 포지션만 잘 잡으면 돼',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q16 Compound: Tempo + Flair ───────────────────────────────────────────
    {
      id: 'cs2-q16',
      kind: 'compound',
      text: {
        zh: '你们这局赢定了，剩下 10 秒，对面只有一个人。怎么打完这局？',
        en: 'Round is won, 10 seconds left, one enemy remaining. How do you close it?',
        ja: 'ラウンドは勝ちが確定、残り10秒、敌は1人。どう終わらせる？',
        ko: '이번 라운드 이긴 거 확정, 10초 남았고 적 한 명. 어떻게 마무리할까?',
      },
      options: [
        {
          label: {
            zh: '快点解决，下局要节省时间',
            en: 'Finish fast, save time for next round',
            ja: 'さっさと終わらせる、次のラウンドのために',
            ko: '빨리 끝낸다, 다음 판을 위해',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '慢慢压，稳赢就行',
            en: 'Take it slow and clean, a win is a win',
            ja: 'ゆっくり追い詰める、勝ちは勝ちだ',
            ko: '천천히 몰아간다, 이기면 그만이다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '试一个好看的操作，反正赢了',
            en: 'Try something flashy, we\'ve already won',
            ja: '派手なプレイを試す、どうせ勝ちだし',
            ko: '화려한 플레이 시도해본다, 어차피 이긴 거니까',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等他出来再说，给他机会也没问题',
            en: 'Let him come out, I can afford to give him the chance',
            ja: '出てくるのを待つ、機会を与えても問題ない',
            ko: '나올 때까지 기다린다, 기회 줘도 상관없다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q17 Compound: Tempo + Mental ──────────────────────────────────────────
    {
      id: 'cs2-q17',
      kind: 'compound',
      text: {
        zh: '你们在赶时间包 A，队友走位太慢，5 秒钟后就没时间了。',
        en: 'Executing to A, a teammate is moving too slowly, five seconds from no time to plant.',
        ja: 'Aへの実行中、味方の動きが遅い、あと5秒で設置できなくなる。',
        ko: 'A 실행 중, 팀원이 너무 느리게 움직인다, 5초 후면 설치할 시간이 없다.',
      },
      options: [
        {
          label: {
            zh: '冲，自己包点，不等了',
            en: 'Go yourself, plant it, no more waiting',
            ja: '自分で設置に行く、もう待たない',
            ko: '혼자 간다, 설치한다, 더 안 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '叫他快点，语气急了',
            en: 'Tell him to hurry up, tone getting sharp',
            ja: '早くしろと言う、口調がきつくなってる',
            ko: '빨리 하라고 말한다, 목소리 날카로워진다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '等，时间不够就省着，下局再打',
            en: 'Wait, if time runs out we save and retry next round',
            ja: '待つ、時間がなくなれば節約して次のラウンドに',
            ko: '기다린다, 시간 없으면 아끼고 다음 판에',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '骂他走位，然后自己也开始慌',
            en: 'Call him out and start panicking myself',
            ja: '彼を怒鳴って、自分もパニックになる',
            ko: '욕하고 나도 패닉 시작한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q18 Compound: Nerve + Bond ────────────────────────────────────────────
    {
      id: 'cs2-q18',
      kind: 'compound',
      text: {
        zh: 'Force buy 局，队友说全队一起冲 B，但你觉得成功率很低。',
        en: 'Force buy round, team wants to full rush B, you think it\'s a long shot.',
        ja: '強気買いラウンド、チームはBへのフルラッシュを望んでいるが、成功率は低いと思う。',
        ko: '풀바이 라운드, 팀이 B 풀러시하자는데 성공률이 낮다고 생각한다.',
      },
      options: [
        {
          label: {
            zh: '跟队，一起冲，成功率是另一回事',
            en: 'Go with the team, odds are a separate matter',
            ja: 'チームについていく、確率は別問題だ',
            ko: '팀 따라간다, 확률은 별개 문제다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '跟队，但准备好在危险时先撤',
            en: 'Follow but ready to peel if it goes bad',
            ja: 'ついていくが、危なくなったら引く準備をする',
            ko: '따라가지만 위험하면 빠질 준비한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '说出来反对，建议换方案',
            en: 'Speak up, suggest a better plan',
            ja: '反対意見を言う、別のプランを提案する',
            ko: '반대 의견 낸다, 다른 방안 제안한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '独立行动，去 A 单边打信息',
            en: 'Split off, go A solo for info',
            ja: '単独行動、Aへ情報を取りに行く',
            ko: '단독 행동, A로 정보 따러 간다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── Q19 Compound: Nerve + Intel ───────────────────────────────────────────
    {
      id: 'cs2-q19',
      kind: 'compound',
      text: {
        zh: 'Inferno，你守 B，队友说对面 5 个人全在 A。你信吗？',
        en: 'Inferno, holding B, teammate calls all five enemies on A. Do you trust it?',
        ja: 'インフェルノ、Bを守ってる、味方が「敵5人全員Aにいる」と言う。信じる？',
        ko: '인페르노, B 지키는 중, 팀원이 적 5명 전부 A에 있다고 한다. 믿어?',
      },
      options: [
        {
          label: {
            zh: '信，立刻转点 A',
            en: 'Trust it, rotate to A immediately',
            ja: '信じる、すぐにAにローテートする',
            ko: '믿는다, 즉시 A로 로테이션',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '怀疑，继续守 B，等更多信息',
            en: 'Skeptical, hold B, wait for more info',
            ja: '半信半疑、Bを守り続けて、もっと情報を待つ',
            ko: '의심스럽다, B 계속 지키면서 더 많은 정보 기다린다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '信，但先探头确认一下再转',
            en: 'Trust it, but peek first to confirm before rotating',
            ja: '信じるが、先にのぞいて確認してからローテートする',
            ko: '믿지만, 먼저 확인 피킹하고 로테이션한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉他说得对，直接冲过去',
            en: 'Gut says he\'s right, full speed rotate',
            ja: '感覚的に合ってる、全速でローテートする',
            ko: '직감으로 맞는 것 같다, 전속력으로 로테이션',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q20 Compound: Nerve + Flair ───────────────────────────────────────────
    {
      id: 'cs2-q20',
      kind: 'compound',
      text: {
        zh: 'Eco 局，你捡到一把对面的 M4，你拿它去打，还是留着省？',
        en: 'Eco round, you picked up an enemy M4. Play with it or save it for next round?',
        ja: 'エコラウンド、敵のM4を拾った。使うか、次のラウンドまで節約するか？',
        ko: '에코 라운드, 적의 M4 주웠다. 쓸까, 다음 라운드까지 아낄까?',
      },
      options: [
        {
          label: {
            zh: '当然拿它打，现在我有好枪',
            en: 'Obviously use it, now I have a real gun',
            ja: 'もちろん使う、今は良い銃がある',
            ko: '당연히 쓴다, 이제 좋은 총이 생겼다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '省着，下局才是要打的局',
            en: 'Save it, next round is the real round',
            ja: '節約する、次のラウンドが本当のラウンドだ',
            ko: '아낀다, 다음 라운드가 진짜 라운드다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '用它打，但走稳一点，别浪',
            en: 'Use it but play safe, don\'t throw the advantage',
            ja: '使うけど慎重に、アドバンテージを無駄にしない',
            ko: '쓰되 안전하게, 이점을 낭비하지 않는다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '拿着打，打好看点，反正是白捡的',
            en: 'Play with it, make it look good, it was free anyway',
            ja: '使う、かっこよく使う、どうせタダで拾ったんだから',
            ko: '쓴다, 멋있게 쓴다, 어차피 공짜로 주웠으니까',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q21 Compound: Nerve + Mental ──────────────────────────────────────────
    {
      id: 'cs2-q21',
      kind: 'compound',
      text: {
        zh: '你们一比六，你两死，队友说 "GG 算了"。',
        en: 'Score is 1-6, you\'ve died twice, a teammate types "GG, let\'s just end it."',
        ja: 'スコアは1-6、2回死んだ、味方が「GG、もう終わりにしよう」と打つ。',
        ko: '스코어 1-6, 두 번 죽었고, 팀원이 "GG 그냥 끝내자"고 친다.',
      },
      options: [
        {
          label: {
            zh: '无视他，继续打，比分能追',
            en: 'Ignore it, keep playing, the score can be recovered',
            ja: '無視して、プレイを続ける、スコアは取り戻せる',
            ko: '무시하고 계속 한다, 스코어 뒤집을 수 있다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '也有点想 "gg"，但不会说出来',
            en: 'A little tempted to agree but won\'t say it',
            ja: '少し同意したい気もするが、言わない',
            ko: '좀 동의하고 싶지만 말하지 않는다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '反呛他，"打完再说"',
            en: 'Counter: "finish the game first"',
            ja: '言い返す、「まず最後まで戦おう」',
            ko: '반박한다, "끝까지 싸우고 나서 말해"',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '"gg" 了，这局不想继续了',
            en: 'Yeah, typed "gg" too, not in it anymore',
            ja: '「GG」と打った、もうこのラウンドはいいや',
            ko: '"GG" 쳤다, 이 판은 더 이상 하고 싶지 않다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q22 Compound: Bond + Intel ────────────────────────────────────────────
    {
      id: 'cs2-q22',
      kind: 'compound',
      text: {
        zh: '你发现队友总是在同一个位置被同一个角度狙杀。要不要提醒他？',
        en: 'You notice a teammate keeps dying to the same angle every round. Do you say something?',
        ja: '味方が毎ラウンド同じ角度から狙撃されて死んでいるのに気づいた。伝える？',
        ko: '팀원이 매 라운드 같은 각도에서 죽는 걸 알아챘다. 말해줄까?',
      },
      options: [
        {
          label: {
            zh: '提醒他，具体说哪个角度',
            en: 'Tell him, name the exact angle',
            ja: '具体的な角度を伝える',
            ko: '알려준다, 정확히 어느 각도인지 말한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '不管，他自己会注意的',
            en: 'Leave it, he\'ll figure it out',
            ja: '放っておく、自分で気づくだろう',
            ko: '내버려둔다, 알아서 깨달을 것이다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '发个 ping，简单提示',
            en: 'Ping the spot, short and silent',
            ja: 'ピンを送る、短くて静かに',
            ko: '핑 보낸다, 간단하게',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '早就注意到了，已经在利用那个角度',
            en: 'Already noticed and exploiting that angle myself',
            ja: 'もう気づいていて、そのアングルを自分で活用してる',
            ko: '이미 알아챘고, 그 각도 내가 이미 쓰고 있다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q23 Compound: Bond + Flair ────────────────────────────────────────────
    {
      id: 'cs2-q23',
      kind: 'compound',
      text: {
        zh: '你支持的战队刚在你以为稳赢的一场 Major 小组赛里爆冷出局。你的 HLTV 论坛账号上，还挂着三个月前——他们状态正好时——贴上去的战队旗帜。',
        en: 'The team you support just crashed out of a Major group stage you were sure they\'d win. Your HLTV forum flair still has their flag pinned from three months ago, back when they were the form team.',
        ja: '応援してるチームが、絶対勝てると思ってたメジャーのグループステージで敗退した。HLTVフォーラムのプロフィールには、3ヶ月前、彼らが絶好調だった頃につけたチームフラッグがまだ残ってる。',
        ko: '응원하던 팀이 당연히 이길 거라 생각한 메이저 조별리그에서 광탈했다. HLTV 포럼 프로필에는 석 달 전, 그 팀이 폼이 제일 좋았을 때 걸어둔 팀 플래그가 아직 그대로 있다.',
      },
      options: [
        {
          label: {
            zh: '在帖子里高调回怼喷子，输了也是我的队',
            en: 'Loudly defend them in the thread, losers or not, they\'re still my team',
            ja: 'スレッドで堂々と擁護する、負けても自分のチームだ',
            ko: '스레드에서 당당하게 편든다, 져도 내 팀이다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '旗帜原样挂着，不吭声，也没必要证明什么',
            en: 'Leave the flag up, say nothing, no need to make a statement out of it',
            ja: 'フラッグはそのまま、何も言わない、証明する必要もない',
            ko: '플래그는 그대로 둔다, 말은 안 한다, 딱히 증명할 필요도 없다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '连夜换旗，还顺手发个自嘲的段子，抢在别人截图之前',
            en: 'Swap the flag overnight and post a self-deprecating joke about it before anyone else screenshots you',
            ja: '夜のうちにフラッグを変えて、誰かにスクショされる前に自虐ネタを投稿する',
            ko: '밤사이 플래그 바꾸고, 남이 스크린샷 뜨기 전에 셀프 디스 농담까지 올린다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '悄悄把旗换掉，这件事就当没发生过',
            en: 'Quietly swap the flag, pretend this never happened',
            ja: '静かにフラッグを変える、なかったことにする',
            ko: '조용히 플래그 바꾼다, 이 일은 없었던 걸로 한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── Q24 Compound: Bond + Mental ───────────────────────────────────────────
    {
      id: 'cs2-q24',
      kind: 'compound',
      text: {
        zh: '队友刚被打了个 4K，他开始在聊天框骂人。你怎么做？',
        en: 'A teammate just got 4K\'d and starts flaming in chat. What do you do?',
        ja: '味方が4キルされてチャットで荒れ始めた。どうする？',
        ko: '팀원이 4킬 당하더니 채팅에서 욕하기 시작했다. 어떻게 할까?',
      },
      options: [
        {
          label: {
            zh: '帮他冷静，发一条安慰的话',
            en: 'Help him calm down with one supportive message',
            ja: '落ち着かせるために一言サポートのメッセージを送る',
            ko: '진정시키려고 위로 메시지 한 마디 보낸다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '无视，他自己会平复的',
            en: 'Ignore it, he\'ll settle down on his own',
            ja: '無視する、自分で落ち着くだろう',
            ko: '무시한다, 알아서 진정할 것이다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '"骂人解决不了问题" 但自己也有点烦',
            en: '"Flaming doesn\'t fix it" — but you\'re a bit tilted too',
            ja: '「荒れても解決しない」でも自分もちょっとイライラしてる',
            ko: '"욕해도 안 된다"고 하지만 나도 좀 짜증난다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '帮他说，对面那个操作确实过分',
            en: 'Back him up, that play from the enemy was genuinely disrespectful',
            ja: '彼に同意する、あの敵のプレイは本当に失礼だった',
            ko: '편들어준다, 상대 그 플레이 진짜 지나쳤다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q25 Compound: Intel + Flair ───────────────────────────────────────────
    {
      id: 'cs2-q25',
      kind: 'compound',
      text: {
        zh: '你在 B 包点蹲坑，对方知道你在哪儿，绕后夹你了。',
        en: 'You\'re holding B post-plant, enemy spotted you and flanked. Caught in the open.',
        ja: 'Bプラント後で待ち伏せ中、敵に位置がバレて回り込まれた。',
        ko: 'B 폭설 후 대기 중, 적이 위치 파악하고 후방에서 쌌다.',
      },
      options: [
        {
          label: {
            zh: '立刻跑，换个位置，重新架枪',
            en: 'Immediately relocate, find a new angle',
            ja: 'すぐに動いて、新しい角度を見つける',
            ko: '즉시 이동, 새로운 각도 찾는다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '守着，靠反应速度赌一把',
            en: 'Hold and gamble on reaction speed',
            ja: 'そのまま守って、反応速度に賭ける',
            ko: '버티고 반응 속도에 베팅한다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先预判他的路线，选好时机反夹',
            en: 'Read his path and time the counter-swing',
            ja: '相手のルートを読んで、カウンタースイングのタイミングを測る',
            ko: '경로 읽어서 카운터 스윙 타이밍 맞춘다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '转出去对着他脸打，管他呢',
            en: 'Swing into his face and shoot, no thinking required',
            ja: '振り出して顔に打つ、考えるだけ無駄だ',
            ko: '스윙해서 정면으로 쏜다, 생각할 필요 없다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q26 Compound: Intel + Mental ──────────────────────────────────────────
    {
      id: 'cs2-q26',
      kind: 'compound',
      text: {
        zh: '你的 ADR（每局平均伤害）只有 52，但你们赢了。你怎么看这局？',
        en: 'Your ADR is 52 but you won the match. How do you feel about your performance?',
        ja: 'ADRは52だけど試合には勝った。自分のプレイをどう見る？',
        ko: 'ADR 52인데 경기는 이겼다. 이번 퍼포먼스를 어떻게 평가할까?',
      },
      options: [
        {
          label: {
            zh: '赢了就好，数据只是参考',
            en: 'Win is what counts, stats are secondary',
            ja: '勝てばいい、スタッツは参考程度だ',
            ko: '이겼으면 됐다, 통계는 부차적이다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: 'ADR 52 不行，下局要改进',
            en: 'ADR 52 is bad, need to do better next match',
            ja: 'ADR52はダメ、次の試合で改善する',
            ko: 'ADR 52는 안 된다, 다음 경기에서 개선해야 한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '赢了，但我知道自己打得不好',
            en: 'Won, but I know I underperformed',
            ja: '勝ったけど、自分がよくなかったのはわかってる',
            ko: '이겼지만 내가 못 했다는 건 안다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '52 ADR 让我很难受，输赢都难受',
            en: 'ADR 52 is ruining my mood regardless of the win',
            ja: 'ADR52のせいで気分が最悪、勝ち負け関係なく',
            ko: 'ADR 52 때문에 기분 나쁘다, 승패 상관없이',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q27 Compound: Flair + Mental ──────────────────────────────────────────
    {
      id: 'cs2-q27',
      kind: 'compound',
      text: {
        zh: '你用 Desert Eagle 一枪跨图爆头了一个人。事后你怎么样？',
        en: 'You landed a cross-map Desert Eagle headshot. What happens after?',
        ja: 'デザートイーグルでマップを横断するヘッドショットを決めた。その後は？',
        ko: '데저트 이글로 맵 가로질러 헤드샷 맞혔다. 그 다음 어떻게 할까?',
      },
      options: [
        {
          label: {
            zh: '正常继续，这只是一枪',
            en: 'Continue normally, it was just one shot',
            ja: '普通に続ける、ただの1発だ',
            ko: '정상적으로 계속한다, 그냥 한 발이다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '大叫一声，超出预期的',
            en: 'Shout out loud, that was beyond expectation',
            ja: '大声を上げる、期待を超えた1発だ',
            ko: '소리 지른다, 예상을 초월했다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '高兴一下，然后继续',
            en: 'Brief excitement, then right back to focus',
            ja: '少し喜んで、すぐに集中に戻る',
            ko: '잠깐 기뻐하고 바로 집중한다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '那枪进了我开始自我怀疑，手感太玄了',
            en: 'That going in makes me doubt myself, aim feels unreal',
            ja: 'あれが入ったことで自己不信に陥る、エイムが信じられない',
            ko: '그게 맞아서 오히려 자기 의심 시작됨, 에임이 비현실적이다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q28 Compound: Tempo + Nerve (peak-end: funniest) ─────────────────────
    {
      id: 'cs2-q28',
      kind: 'compound',
      text: {
        zh: '对面刚 rush B cyka，你一个人守着，队友还在 A 边。你怎么办？',
        en: 'Enemy just rushed B cyka, you\'re alone, teammates stuck on A. What\'s the plan?',
        ja: '敵がラッシュBチカを仕掛けてきた、あなた1人、味方はAにいる。どうする？',
        ko: '상대가 방금 러시 B 시작했다, 나 혼자, 팀원은 A에 있다. 어떻게 할까?',
      },
      options: [
        {
          label: {
            zh: '冲出去刚正面，死了算',
            en: 'Peek them head-on, if I die I die',
            ja: '真正面からぶつかる、死んだら死んだで仕方ない',
            ko: '정면으로 나간다, 죽으면 죽는 거다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '拿一两个，等队友回来再看',
            en: 'Pick off one or two, hold until teammates rotate',
            ja: '1、2人を仕留めて、味方がローテートするまで待つ',
            ko: '한두 명 잡고 팀원 로테이션 올 때까지 버틴다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '丢烟，让他们进不了点，自己先撑着',
            en: 'Throw smoke to delay, hold the site as long as possible',
            ja: 'スモークを投げて遅らせ、できるだけ長くサイトを守る',
            ko: '스모크 던져서 지연, 최대한 오래 사이트 버틴다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '全速冲出去，反包他们，赌的就是这个',
            en: 'Full-speed counter-rush, this is exactly the gamble I want',
            ja: '全速でカウンターラッシュ、これはまさに自分が求めるギャンブルだ',
            ko: '전속력 카운터 러시, 이게 바로 내가 원하는 도박이다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q29 Compound: Bond + Mental (peak-end: funniest) ─────────────────────
    {
      id: 'cs2-q29',
      kind: 'compound',
      text: {
        zh: '你们五排，其中一个人已经连续送了三局，但他是朋友。你怎么办？',
        en: 'Five-stack, one friend has gone 2-14 three rounds straight. What do you say?',
        ja: '5人PT、友人が3ラウンド連続で2-14のスコア。どうする？',
        ko: '5인팟, 친구 한 명이 3판 연속 2-14다. 어떻게 할까?',
      },
      options: [
        {
          label: {
            zh: '啥都不说，让他自己调整',
            en: 'Say nothing, let him self-correct',
            ja: '何も言わない、自分で修正させる',
            ko: '아무 말 안 한다, 스스로 고치게 둔다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '私信他，"要不要换个位置打？"',
            en: 'DM him: "want to try a different role?"',
            ja: 'DMを送る、「違うポジションを試してみる？」',
            ko: '개인 메시지: "다른 역할 해볼래?"',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '心里有点烦，但嘴上没说',
            en: 'Irritated internally, keeping it to yourself',
            ja: '心の中ではイライラしてるが、口には出さない',
            ko: '속으로 짜증나지만 말은 안 한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '怼了几句，朋友也要讲道理',
            en: 'Said a few words, friends still need to hear it',
            ja: '少し文句を言った、友人でも言うべきことは言う',
            ko: '몇 마디 했다, 친구도 들어야 할 말은 해야 한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q30 Compound: Intel + Flair (peak-end: funniest) ─────────────────────
    {
      id: 'cs2-q30',
      kind: 'compound',
      text: {
        zh: 's1mple 式高光：你打出了人生最秀的一枪。然后下一局你的 Premier 积分掉了 100。',
        en: 's1mple moment: you hit the most insane shot of your life. Next match, Premier Rating drops 100.',
        ja: 's1mpleの瞬間: 人生最高の1発を決めた。次の試合でプレミアレーティングが100下がった。',
        ko: 's1mple 순간: 인생 최고의 샷을 쐈다. 다음 경기에서 프리미어 레이팅 100 떨어졌다.',
      },
      options: [
        {
          label: {
            zh: '那一枪值了，积分只是数字',
            en: 'That shot was worth it, rating is just a number',
            ja: 'あの1発には価値があった、レーティングはただの数字だ',
            ko: '그 샷은 값어치 있었다, 레이팅은 그냥 숫자다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '积分掉了才是重点，那枪帮不上忙',
            en: 'The rating drop is what matters, that shot didn\'t win the match',
            ja: 'レーティングが下がったことが問題、あの1発は勝ちに繋がらなかった',
            ko: '레이팅 떨어진 게 핵심이다, 그 샷이 이기는 데 도움 안 됐다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '立刻剪了发出去，丢分不重要',
            en: 'Clipped and shared it immediately, the loss is irrelevant',
            ja: 'すぐにクリップして共有した、負けは関係ない',
            ko: '바로 클립하고 공유했다, 패배는 상관없다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '搞错了优先级，应该先想怎么赢',
            en: 'Wrong priority; should have been thinking about winning',
            ja: '優先順位を間違えた、勝つことを考えるべきだった',
            ko: '우선순위 잘못 잡았다, 이기는 걸 생각했어야 했다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── Q7 Anchor: Intel ─────────────────────────────────────────────────────
    {
      id: 'cs2-q07',
      kind: 'anchor',
      text: {
        zh: '你刚第一次冲上 FACEIT Level 10，第一把比赛对面就是个 3400 分、带 Pro League 标签、还开着 Twitch 直播的老哥。你自己才 1850 分。',
        en: 'You just hit FACEIT Level 10 for the first time. First match: a guy with a 3,400 Elo badge, a Pro League tag, and a Twitch stream running. You\'re sitting at 1,850.',
        ja: '初めてFACEITレベル10に到達した。最初の試合の相手は3400Elo、プロリーグタグ付き、Twitch配信中の猛者。自分はまだ1850だ。',
        ko: '처음으로 FACEIT 레벨 10을 찍었다. 첫 경기 상대는 3400 Elo에 프로리그 태그, 트위치 방송까지 켜놓은 사람이다. 나는 아직 1850이다.',
      },
      options: [
        {
          label: {
            zh: '把这当录像课，专心研究他的走位习惯，别想着赢个人对枪',
            en: 'Treat it as film study, focus on reading his patterns instead of winning duels',
            ja: 'これを映像研究だと思って、彼の動きのクセを読むことに集中する、対面は捨てる',
            ko: '이걸 필름 스터디라고 생각하고 패턴 읽기에 집중한다, 대인전 승부는 포기한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '照样打自己的，肌肉记忆不看分数牌',
            en: 'Play your normal game anyway, muscle memory doesn\'t check the scoreboard',
            ja: 'いつも通りプレイする、筋肉記憶はスコアボードを見ない',
            ko: '평소처럼 플레이한다, 근육 기억은 스코어보드를 안 본다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '纯打数据，打不过的对枪直接放弃，保住 ADR',
            en: 'Play purely for stats, concede duels you can\'t win, protect the ADR',
            ja: 'スタッツ狙いに徹する、勝てない対面は捨てて、ADRを守る',
            ko: '스탯만 챙긴다, 못 이길 대인전은 포기하고 ADR이나 지킨다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '把语音全静音，随缘打几局，就当免费上了节私教课',
            en: 'Mute everyone, play it out on vibes, call it a free coaching session either way',
            ja: '全員ミュートして、感覚だけでプレイする、無料のコーチングだと思えばいい',
            ko: '다 뮤트하고 감으로 플레이한다, 어차피 공짜 코칭이라 치자',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q8 Anchor: Intel ─────────────────────────────────────────────────────
    {
      id: 'cs2-q08',
      kind: 'anchor',
      text: {
        zh: '新版本更新，你第一件事是什么？',
        en: 'New update drops. What do you do first?',
        ja: 'アップデートが来た。最初にすることは？',
        ko: '새 업데이트가 나왔다. 제일 먼저 하는 것은?',
      },
      options: [
        {
          label: {
            zh: '查 patch notes 和 HLTV 分析',
            en: 'Read the patch notes and check HLTV for reactions',
            ja: 'パッチノートを読んでHLTVの反応を確認する',
            ko: '패치 노트 읽고 HLTV 반응 체크한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '直接进游戏感受一下',
            en: 'Jump in and feel it out',
            ja: 'そのままゲームに入って感じる',
            ko: '바로 들어가서 느껴본다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '等 Reddit 和 B 站总结完再说',
            en: 'Wait for Reddit and YouTube to summarise it for me',
            ja: 'RedditやYouTubeのまとめを待つ',
            ko: 'Reddit이랑 유튜브 요약 나올 때까지 기다린다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '"数据再多不如一枪爆头" 直接开干',
            en: '"Stats don\'t land headshots" — just play',
            ja: '"データより爆頭" で、そのまま始める',
            ko: '"통계보다 헤드샷이 중요" 바로 시작한다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q9 Anchor: Flair ─────────────────────────────────────────────────────
    {
      id: 'cs2-q09',
      kind: 'anchor',
      text: {
        zh: '你刚打出一个 3K，下一步你怎么做？',
        en: 'You just got a 3K. What happens next?',
        ja: '3キルを取った直後。次は何をする？',
        ko: '방금 3킬 했다. 다음 행동은?',
      },
      options: [
        {
          label: {
            zh: '报位，继续走位，不分心',
            en: 'Call positions, keep moving, stay focused',
            ja: '位置を報告して、動き続ける、集中を切らさない',
            ko: '위치 콜하고 계속 움직인다, 집중 유지',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '在频道里叫一声，大家都该知道',
            en: 'Call it out, everyone should know',
            ja: 'チャットで叫ぶ、みんなに知らせる',
            ko: '채팅에서 외친다, 다들 알아야 한다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '默默继续，3K 是基本操作',
            en: 'Continue silently, a 3K is just standard',
            ja: '黙って続ける、3キルは標準的なプレイだ',
            ko: '조용히 계속한다, 3킬은 기본이다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '等着录播看那一段，打得确实好看',
            en: 'Already looking forward to watching it in the replay',
            ja: 'リプレイでその部分を見るのが楽しみだ',
            ko: '리플레이에서 그 구간 보는 게 기대된다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q10 Anchor: Flair ────────────────────────────────────────────────────
    {
      id: 'cs2-q10',
      kind: 'anchor',
      text: {
        zh: 'Premier 积分上去了 500，你怎么看这件事？',
        en: 'Your Premier Rating just went up 500. How do you feel about it?',
        ja: 'プレミアレーティングが500上がった。どう思う？',
        ko: '프리미어 레이팅이 500 올랐다. 어떻게 생각해?',
      },
      options: [
        {
          label: {
            zh: '记录在小本子里，继续爬',
            en: 'Note it, move on, keep climbing',
            ja: 'メモしておいて、次に進む、登り続ける',
            ko: '기록해두고 계속 올라간다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '截图发群，让大家看看',
            en: 'Screenshot it, share it in the group chat',
            ja: 'スクショしてグループチャットに送る',
            ko: '스크린샷 찍어서 단톡방에 공유한다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '只是数字，赢了比分数重要',
            en: 'Just a number, winning matters more than the rating',
            ja: 'ただの数字、勝つことの方がレートより重要だ',
            ko: '그냥 숫자다, 이기는 게 레이팅보다 중요하다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '更新个人简介，现在是新段位',
            en: 'Update the profile bio, new rating calls for it',
            ja: 'プロフィールを更新する、新しいレートを載せる',
            ko: '프로필 업데이트한다, 새 레이팅 올려야지',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q5 Anchor: Bond ──────────────────────────────────────────────────────
    {
      id: 'cs2-q05',
      kind: 'anchor',
      text: {
        zh: '你和搭档说好一起双人切入，一个宽一个近，谁先中枪另一个就补枪。结果他提前半秒探头就先死了，你还没出掩体。对面这会儿是在装填还是在挪位置，你不知道。',
        en: 'You and your duo agreed to double-peek: one wide, one close, whoever gets shot first, the other trades. Your partner peeks half a second early and dies before you\'ve even left cover. The enemy might be reloading, might be repositioning. No way to know.',
        ja: 'デュオで示し合わせてダブルピーク、1人は広く、1人は近く。先に撃たれた方をもう1人がトレードする約束だった。相方が0.5秒早く出て、自分がカバーを出る前に死んだ。敵はリロード中か、位置を変えてるのか分からない。',
        ko: '듀오랑 약속한 더블 피킹, 한 명은 넓게 한 명은 좁게. 먼저 맞은 쪽을 나머지가 트레이드하기로 했다. 파트너가 0.5초 일찍 나가서 내가 커버를 벗어나기도 전에 죽었다. 상대가 재장전 중인지 위치를 바꾸는 중인지 알 수 없다.',
      },
      options: [
        {
          label: {
            zh: '撤回掩体，这个配合已经废了，别再送一条命',
            en: 'Pull back into cover, the read is dead, no point feeding a second body',
            ja: 'カバーに戻る、この連携はもう終わった、もう1人分死体を増やす意味はない',
            ko: '커버로 물러난다, 이 합은 이미 죽었다, 두 번째 목숨까지 바칠 필요 없다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '照原计划顶上去，这一枪是你欠他的',
            en: 'Commit into the same angle anyway, you owe him this trade',
            ja: '予定通り同じ角度に踏み込む、このトレードは彼への借りだ',
            ko: '원래 계획대로 같은 각도로 들어간다, 이 트레이드는 그에게 빚진 거다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '换个完全不同的角度自己找机会，这计划已经没意义了',
            en: 'Peek a completely different angle on your own, the plan\'s already dead',
            ja: '全く別の角度から単独で動く、この計画はもう意味がない',
            ko: '완전히 다른 각도로 혼자 움직인다, 이 계획은 이미 의미 없다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '多等半秒确认状况，但还是选择顶上去支援他',
            en: 'Take an extra half-second to confirm, then commit for him anyway',
            ja: 'あと0.5秒だけ状況を確認してから、それでも彼のために踏み込む',
            ko: '반 박자만 더 확인하고, 그래도 그를 위해 들어간다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // ── Q6 Anchor: Bond ──────────────────────────────────────────────────────
    {
      id: 'cs2-q06',
      kind: 'anchor',
      text: {
        zh: '队友要你丢枪给他，你刚好只有这一把 AK。',
        en: 'Teammate asks for your AK. It\'s your only rifle.',
        ja: '味方がAKを要求してきた。それがあなたの唯一のライフルだ。',
        ko: '팀원이 AK 달라고 한다. 이게 내 유일한 라이플이다.',
      },
      options: [
        {
          label: {
            zh: '不给，我打得比他好',
            en: 'No. I\'m the better fragger right now',
            ja: '渡さない。今の自分の方がうまい',
            ko: '안 준다. 지금 내가 더 잘 쏜다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '给，他这局比我重要',
            en: 'Give it. He\'s more important this round',
            ja: '渡す。彼の方が今ラウンドは重要だ',
            ko: '준다. 이 판엔 그가 더 중요하다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '看他上局打的怎样再决定',
            en: 'Depends on how he played last round',
            ja: '前のラウンドのプレイ次第で決める',
            ko: '전 판 플레이 봐서 결정한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '给，但希望他能打好',
            en: 'Give it, hoping he makes it count',
            ja: '渡す、ちゃんと使ってほしいけど',
            ko: '준다, 잘 써주길 바라면서',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // ── Q11 Anchor: Mental ───────────────────────────────────────────────────
    {
      id: 'cs2-q11',
      kind: 'anchor',
      text: {
        zh: 'CS2 上线首日，你的段位从传奇之鹰大师直接重置成银 4。一个总共才玩了 40 小时的朋友，段位是金牌新星，比你还高。群里突然没人说话了。你发的第一条消息是什么？',
        en: 'CS2 launch day. Your rank just reset from Legendary Eagle Master to Silver 4. A friend with maybe 40 hours total in the game is sitting at Gold Nova — above you. Group chat has gone quiet. What\'s your first message?',
        ja: 'CS2発売初日、ランクがレジェンダリーイーグルマスターからシルバー4に一気にリセットされた。プレイ時間40時間くらいの友達がゴールドノヴァで、自分より上にいる。グループチャットが急に静かになった。最初に送るメッセージは？',
        ko: 'CS2 출시 첫날, 랭크가 전설의 주작에서 은장 4로 리셋됐다. 플레이 시간 40시간 정도인 친구는 샛별인데, 나보다 높다. 단톡방이 갑자기 조용해졌다. 내가 보낼 첫 메시지는?',
      },
      options: [
        {
          label: {
            zh: '发一句"服务器故障，回头就好"，然后继续排队',
            en: 'Type something dry like "server error, it\'ll fix itself" and queue again',
            ja: '「サーバーのバグでしょ、そのうち直る」と軽く言って、また次のキューに入る',
            ko: '"서버 오류겠지, 곧 고쳐질 거야"라고 툭 던지고 다시 큐 돌린다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '嘴上说着"无所谓"，其实心里还是有点堵',
            en: '"Doesn\'t matter" out loud, still a little gutted underneath',
            ja: '「別にいいけど」と口では言うけど、内心は少し引っかかってる',
            ko: '"뭐 상관없어"라고 말은 하지만 속으로는 좀 쓰리다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '段位是数字，重开一局，没什么好想的',
            en: 'Rank\'s just a number, queue the next game, nothing to dwell on',
            ja: 'ランクはただの数字、次のゲームに行くだけ、考えるまでもない',
            ko: '랭크는 그냥 숫자다, 다음 게임 큐 돌린다, 생각할 것도 없다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '没忍住，先在群里打了句"这重置有问题吧"',
            en: 'Can\'t help it, already typing "this reset is broken" into the chat',
            ja: '我慢できずに「このリセットおかしくない?」とグループチャットに打ち込んでる',
            ko: '참지 못하고 단톡방에 "이 리셋 뭔가 이상한데"부터 친다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q12 Anchor: Mental ───────────────────────────────────────────────────
    {
      id: 'cs2-q12',
      kind: 'anchor',
      text: {
        zh: '对面有人一直在 trash talk，你怎么应对？',
        en: 'An opponent keeps trash talking in all-chat. Your response?',
        ja: '相手がずっとオールチャットで煽ってくる。どう対応する？',
        ko: '상대가 올챗에서 계속 도발한다. 어떻게 할까?',
      },
      options: [
        {
          label: {
            zh: '不看聊天，继续打枪',
            en: 'Ignore the chat, keep shooting',
            ja: 'チャットを見ない、プレイに集中',
            ko: '채팅 안 본다, 계속 게임한다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '杀他一次，"帮我说话了"',
            en: 'Kill him once, that\'s my reply',
            ja: '一回倒す、それが自分の返答だ',
            ko: '한 번 죽인다, 그게 내 답변이다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '回骂几句，气都撒在打字上了',
            en: 'Fire back a few lines, spend the anger on typing',
            ja: '言い返す、怒りをタイピングで発散する',
            ko: '몇 마디 받아친다, 화를 타이핑으로 푼다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '被煽成功，这局状态开始崩了',
            en: 'The tilt lands, this round\'s gone sideways',
            ja: '挑発が効いた、このラウンドは崩れ始める',
            ko: '도발에 넘어갔다, 이 판은 무너지기 시작한다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
  ],
};

export default game;
