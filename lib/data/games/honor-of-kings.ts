import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'honor-of-kings',
  title: {
    zh: '王者荣耀',
    en: 'Honor of Kings',
    ja: '王者栄耀',
    ko: '왕자영요',
  },
  deck: {
    zh: '你在峡谷是哪种玩家灵魂？',
    en: 'What kind of Honor of Kings player are you?',
    ja: '峡谷のあなたは何型プレイヤー？',
    ko: '협곡에서 당신은 어떤 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的王者荣耀玩家类型。从野区税务稽查员到嘲讽信号市长，8 种原型、6 维雷达、专属玩家身份码。截图发朋友圈那种。',
    en: '30 questions to find your Honor of Kings player type. 8 archetypes, 6-axis radar, a shareable player code — from Jungle Auditor to BM Ping Mayor. Get your result before the next five-stack.',
    ja: '30問で王者栄耀のプレイスタイルを診断。8タイプ・6軸レーダー・6文字コード付き。野区税務稽査員からBMピン市長まで。次の試合前にシェアしよう。',
    ko: '30문제로 알아보는 왕자영요 플레이어 유형. 8가지 유형, 6축 레이더, 공유 가능한 코드까지. 정글 세무조사관부터 도발 핑 시장까지. 다음 5인 파티 전에 결과 공유해봐.',
  },
  dominantAxes: ['Bond', 'Mental', 'Flair'] as const,
  archetypes: [
    // ── 1. jungle-auditor ───────────────────────────────────────────────────────
    {
      slug: 'jungle-auditor',
      polarityPattern: {
        Bond: 'high',
        Mental: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '野区税务稽查员',
        en: 'Jungle Auditor',
        ja: '野区税務稽査員',
        ko: '정글 세무조사관',
      },
      oneLiner: {
        zh: '谁偷野谁就得交税，账本从不出错',
        en: 'Whoever steals jungle farm owes a debt — and you keep the ledger',
        ja: '野区を取ったやつは税を払え。帳簿は絶対正確だ',
        ko: '정글 팜 뺏긴 건 다 기록해둔다. 장부는 틀리는 법이 없다',
      },
      description: {
        zh: '你对野区的归属感和纳税人对自己工资条的感情一样强烈。队友越塔蹭了两个野怪？你门儿清。你不会立刻开骂，但你会在脑内记一笔，等对面打野偷野的时候用来换算税率。你相信只要野区效率够高，峡谷的胜负其实是个数学题。钝感让你在被骂"打野在干嘛"的时候依然保持冷静——你只是在做账，你没有问题。',
        en: 'Your relationship with the jungle is essentially proprietary. Every camp has a rightful owner, and that owner is you. When a laner wanders in for two creeps, you clock it without saying a word — the mental tab is open, running silently. You don\'t rage. You audit. When the enemy jungler starts taking your buffs, you calculate the tax rate owed with the precision of someone who has done this before. You probably have.',
        ja: '野区はあなたの土地だ。よその選手がちょっとクリープを刈ったとき、黙ってメモる。すぐには怒らない——頭の中の帳簿に記録するだけだ。敵ジャングラーがバフを盗んだら、税率を計算する。「ジャングラー何してんの」って言われても平然としている。帳簿をつけてるんだから問題ない。',
        ko: '정글은 네 땅이다. 라이너가 몹 두 개 가져가면 말없이 기록한다. 바로 욕은 안 한다 — 머릿속 장부에 적어두는 거다. 상대 정글러가 버프 가져가면 세율을 계산한다. "정글러 뭐해"라는 말을 들어도 태연하다. 장부 쓰는 중이니까. 아무 문제 없다.',
      },
      symptoms: [
        {
          zh: '"交野区税了" 是你发出的第一条频道消息，比说"大家好"还快',
          en: '"Paid the jungle tax again" is your first message — faster than saying hello',
          ja: '「野区税払った」が最初のメッセージ。挨拶より早い',
          ko: '"정글세 또 냈다"가 첫 번째 메시지다. 인사보다 빠르다',
        },
        {
          zh: '每次打野路线在脑内都有一份最优解，别人的路线看起来都像在浪费钱',
          en: 'You have the optimal jungle route memorized; every other route looks like money left on the table',
          ja: '最適ジャングルルートは頭に入ってる。他のルートは損にしか見えない',
          ko: '최적 정글 루트는 외워뒀다. 다른 루트는 돈 낭비로 보인다',
        },
        {
          zh: '三万 gank 是你的反面教材：你只在真正有效的时机抓人，不做无用功',
          en: 'The 30,000-gold gank is your anti-pattern: you only move when the math is right',
          ja: '「3万gank」は反面教師だ。数字が合うときだけ動く',
          ko: '"3만 갱크"는 반면교사다. 수치가 맞을 때만 움직인다',
        },
        {
          zh: '胜利复盘时你能精确报出对方打野的野区效率，对方不知道这件事',
          en: 'Post-game, you can quote the enemy jungler\'s camp efficiency; they have no idea you were tracking it',
          ja: '試合後、敵ジャングラーのキャンプ効率を正確に言える。向こうは気づいてない',
          ko: '게임 끝나고 상대 정글러 캠프 효율을 정확히 말할 수 있다. 상대는 모르는 일이다',
        },
        {
          zh: '对面说"打野太强了"，你心里想的是"这只是基础资源分配的数值优势"',
          en: '"Jungle diff" makes you privately think: "just standard resource distribution advantage"',
          ja: '「ジャングルdiff」と言われると「単なる資源分配の優位だ」と内心思う',
          ko: '"정글 diff"라는 말에 속으로 "그냥 리소스 분배 우위지"라고 생각한다',
        },
      ],
      rivalSlug: 'bm-ping-mayor',
      bestSquadSlug: 'defeat-grief-counselor',
    },

    // ── 2. family-host ──────────────────────────────────────────────────────────
    {
      slug: 'family-host',
      polarityPattern: {
        Bond: 'high',
        Mental: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '家庭群团战主持人',
        en: 'Family-Stack Host',
        ja: '5人パーティ司会者',
        ko: '5인 파티 진행자',
      },
      oneLiner: {
        zh: '五排开黑是你组的，情绪炸了也是你来稳',
        en: 'You built the five-stack. You also fix it when it falls apart',
        ja: '5人パーティを組んだのはあなた。崩れそうになったら収めるのもあなた',
        ko: '5인 파티 조직한 것도 너고, 망할 것 같을 때 수습하는 것도 너다',
      },
      description: {
        zh: '你建了那个五排微信群，你设置了"今晚 9 点峡谷见"的提醒，你提前查了各位的空闲时间表。游戏开始后你的正式头衔是打野，但实际工作是：确认所有人正常在线、调解"我要打 ADC"的角色冲突、在第一波团灭后发一个稳住情绪的哈哈哈表情。赢了是全队的荣耀，输了是你没有组织好队伍——这个锅你默默接了，然后发起投票问明晚还来不来。',
        en: 'You created the group chat. You set the 9 PM reminder. You checked everyone\'s schedule before you even touched the client. During the game your listed role is jungler, but the real job is: confirm all five are logged in, mediate the two people who both want ADC, and send one calming emoji after the first teamfight disaster. You win as a team. You lose because you didn\'t organize well enough. You already know next session\'s roster changes.',
        ja: 'グループチャットを作ったのはあなた。21時の通知を設定したのもあなた。クライアントを起動する前に全員のスケジュールを確認した。試合中の肩書はジャングラーだけど、本当の仕事は：全員ログイン確認、ADCを取り合う二人の仲裁、最初のチームファイト壊滅後に落ち着かせる絵文字の送信。勝利は全員のもの。負けはあなたの采配ミス——そう受け取って、明日夜また来るか投票を始める。',
        ko: '단체 채팅방 만든 사람이 너고, 오후 9시 알람 설정한 것도 너다. 클라이언트 켜기 전에 다들 시간 되는지 확인했다. 게임 중 직함은 정글러지만 실제 업무는: 5명 전원 접속 확인, ADC 서로 하겠다는 둘 중재, 첫 번째 팀전 참패 뒤 분위기 달래는 이모지 전송. 이기면 팀 전체의 영광이고 지면 네가 잘 못 조직한 탓이다. 그 책임 조용히 안고 내일 밤 올지 투표 시작한다.',
      },
      symptoms: [
        {
          zh: '你有一套成熟的五排组队 SOP：谁打什么位、哪些英雄是禁用优先级',
          en: 'You have a five-stack SOP: who plays what, which heroes are ban-priority, written in your head',
          ja: '5人パーティの標準手順がある：誰が何レーン、BANの優先順位も決まってる',
          ko: '5인 파티 표준 절차가 있다: 누가 어느 라인, 밴 우선순위도 정해뒀다',
        },
        {
          zh: '"今晚来不来" 的消息你每次都比其他人早发 15 分钟',
          en: '"Tonight?" message sent 15 minutes before anyone else thinks of it',
          ja: '「今夜来る？」メッセージを誰よりも15分早く送る',
          ko: '"오늘 밤 할 거야?" 메시지를 다른 누구보다 15분 일찍 보낸다',
        },
        {
          zh: '五排输了你先检讨自己的团战决策，再才开始看别人的数据',
          en: 'After a five-stack loss you review your own teamfight calls first, then check others\' numbers',
          ja: '5人負けたらまず自分のチームファイト判断を振り返る。他の人の数字は後回し',
          ko: '5인 패배 후 먼저 자기 팀전 결정을 복기한다. 다른 사람 데이터는 그다음이다',
        },
        {
          zh: '有人说"我先下了"，你会说"再打一把嘛"，然后帮他们把情绪 buff 起来',
          en: 'When someone says "I\'m logging off," you say "one more" and manage their energy back in',
          ja: '「先落ちます」って言ったら「もう一本だけ」と言って気持ちを引き戻す',
          ko: '누군가 "나 먼저 끊을게"라고 하면 "한 판만 더"라고 하며 분위기 끌어올린다',
        },
      ],
      rivalSlug: 'solo-curse',
      bestSquadSlug: 'jungle-auditor',
    },

    // ── 3. defeat-grief-counselor ───────────────────────────────────────────────
    {
      slug: 'defeat-grief-counselor',
      polarityPattern: {
        Bond: 'high',
        Mental: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '投降票心理顾问',
        en: 'Surrender-Vote Counselor',
        ja: '降参票心理カウンセラー',
        ko: '항복 투표 심리 상담사',
      },
      oneLiner: {
        zh: '投降票出来了，你第一个点否，然后开始做思想工作',
        en: 'Surrender vote pops up; you hit No and start the pep talk',
        ja: '降参投票が出たら真っ先に否定票。そしてメンタル立て直しが始まる',
        ko: '항복 투표 뜨면 첫 번째로 반대 누르고 팀원 멘탈 케어 시작한다',
      },
      description: {
        zh: '你觉得"投降"这个词在 15 分钟前不该出现在人类语言里。你不是因为形势好才投否——你投否是因为你拒绝用"放弃"作为任何问题的答案。被劝降的时候你反劝：分析对面的软肋，提出三条具体翻盘路线，把队伍从"算了"边缘拉回来。有时候真的翻了，你也不会说"我说过吧"。有时候翻不了，你接受失败，然后分析哪条路线最接近成功。这很费人，但有人得做这件事。',
        en: 'The surrender vote is a moral failure, not a strategic option. You hit No before the timer reaches two seconds — not from blind optimism but from a specific belief that the fight isn\'t over. Then comes the work: break down the enemy\'s weak point, sketch two paths back into the game, pull the team from the edge. Sometimes it turns around. You don\'t say "told you so." When it doesn\'t, you map which path came closest. It costs you. Someone has to pay.',
        ja: '降参は戦略じゃない、精神の敗北だ。タイマーが2秒になる前に否定票を押す——盲目的な楽観じゃなく、まだ戦えるという具体的な確信から。そしてカウンセリングが始まる：相手の弱点を分析して、逆転ルートを二つ提示して、諦めかけたチームを引き戻す。うまくいくこともある。「ほらね」とは言わない。うまくいかないときは、どのルートが一番惜しかったか考える。消耗する。でも誰かがやらなきゃいけない。',
        ko: '항복 투표는 전략적 선택이 아니라 정신적 패배다. 타이머 2초 되기 전에 반대 누른다 — 근거 없는 낙관이 아니라 아직 싸울 수 있다는 구체적 확신으로. 그리고 상담이 시작된다: 상대 약점 분석하고, 역전 루트 두 개 제시하고, 포기 직전의 팀을 끌어당긴다. 가끔 뒤집힌다. "봤지?"는 안 한다. 안 될 때는 어느 루트가 제일 아쉬웠는지 생각한다. 소모되는 일이다. 그래도 누군가는 해야 한다.',
      },
      symptoms: [
        {
          zh: '投降票从来不超过一票，因为你已经开始发翻盘分析了',
          en: 'The surrender vote never gets a second yes — you\'re already posting the comeback analysis',
          ja: '降参票に賛成が二つ揃うことはない。もう逆転分析を送ってるから',
          ko: '항복 투표에 두 번째 찬성이 뜨기 전에 이미 역전 분석 올리고 있다',
        },
        {
          zh: '劣势局你会在脑内开会，议题是"对面哪个位置最容易被单杀"',
          en: 'In a losing game your mental meeting topic is "which enemy laner is the easiest 1v1 target"',
          ja: '劣勢局では頭の中で会議が始まる。議題は「相手の誰が一番ソロキルされやすいか」',
          ko: '지고 있는 경기에서 머릿속 회의가 시작된다. 의제는 "상대 중 누가 솔로킬 가장 쉬운가"다',
        },
        {
          zh: '你不怕输，你怕的是在应该继续打的时候停下来',
          en: 'Losing doesn\'t scare you; stopping when you should still be fighting does',
          ja: '負けは怖くない。戦える局面で止まることが怖い',
          ko: '지는 건 무섭지 않다. 싸울 수 있을 때 멈추는 게 무섭다',
        },
        {
          zh: '赛后复盘你会说"第 18 分钟其实我们有赢的路"，而不是"队友太菜了"',
          en: 'Post-game you say "at minute 18 we had a window" instead of "teammates too bad"',
          ja: '試合後は「18分に勝てるチャンスがあった」と言う。「チームが弱かった」じゃなくて',
          ko: '게임 끝나고 "18분에 이길 창이 있었어"라고 한다. "팀원이 못해서"가 아니라',
        },
        {
          zh: '你帮队友稳住了心态，但有时候稳住了别人、烧掉了自己',
          en: 'You stabilize everyone else\'s mental; occasionally you notice yours is the one that burned',
          ja: 'チームのメンタルを安定させる。気づいたら自分が燃え尽きてる',
          ko: '팀원 멘탈을 안정시키다 보면 정작 내 멘탈이 타버린 걸 깨닫는다',
        },
      ],
      rivalSlug: 'bm-ping-mayor',
      bestSquadSlug: 'jungle-auditor',
    },

    // ── 4. teamfight-festival ────────────────────────────────────────────────────
    {
      slug: 'teamfight-festival',
      polarityPattern: {
        Bond: 'high',
        Mental: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '团战节庆策划',
        en: 'Teamfight Festival',
        ja: 'チームファイト祭典プランナー',
        ko: '팀전 축제 기획자',
      },
      oneLiner: {
        zh: '十人同屏就是你的节日，开团是你给全队的礼物',
        en: 'Ten players on screen is your festival — you start the fight, you\'re already celebrating',
        ja: '10人が画面に揃ったらお祭り開始。チームファイトはあなたの贈り物だ',
        ko: '10인 전체 화면이 네 축제다. 팀전 시작한 것도 너, 이미 축하하고 있는 것도 너',
      },
      description: {
        zh: '你看 KPL 不是为了看操作，你是为了那几秒钟十人混战的肾上腺素爆发。游戏里你把自己的节奏完全对齐到"下一场团战"这件事上——农兵是铺垫，推线是序章，只有十人同屏那一刻才是正片。哪怕局势不好你也会主动开团，因为你相信团战本身能扭转一切。被说"乱开"？那只是不理解你的节庆视角，你看到了一个别人还没看到的狂欢入口。',
        en: 'KPL highlights exist for one reason: the five-versus-five moments where ten people are moving at once. You queue for those moments. Farming is preamble; lane pressure is setup; the teamfight is the only part that counts. When the game is behind, you force the fight anyway, because you believe the chaos can flip it. "You engaged too early" is what people say when they don\'t see the opening you saw. You saw it. Mostly.',
        ja: 'KPLのハイライトを見る理由はひとつ。10人が同時に動く瞬間のためだ。そのためにキューを入れる。農業は前置き、レーン圧力は助走、チームファイトだけが本編だ。劣勢でも開戦する。混沌が逆転できると信じているから。「開戦が早い」と言われるのは、あなたの見えた突破口が相手に見えてないだけだ。見えてた。ほとんどの場合は。',
        ko: 'KPL 하이라이트를 보는 이유는 하나다. 10인이 동시에 움직이는 그 순간을 위해서. 그 순간을 위해 큐를 넣는다. 파밍은 전주곡이고, 라인 압박은 복선이다. 팀전만이 본편이다. 지고 있어도 교전을 강요한다. 혼돈이 역전시킬 수 있다고 믿으니까. "너무 일찍 들어갔다"는 말은 네가 본 입구를 상대가 못 봤을 때 나오는 말이다. 봤다. 대부분은.',
      },
      symptoms: [
        {
          zh: '对面缩塔发育，你内心开始焦虑，因为没有团战你不知道干什么',
          en: 'The enemy is turtling under tower and you\'re anxious: no teamfight means no plan',
          ja: '敵がタワー下で農業してると不安になる。チームファイトがないと何をすればいいかわからない',
          ko: '상대가 타워 아래서 파밍하면 불안하다. 팀전 없으면 무엇을 해야 할지 모르겠다',
        },
        {
          zh: '你的英雄池集中在法师和坦克——你需要能开团的英雄',
          en: 'Your hero pool is mages and tanks; you need champions that can start a fight',
          ja: '使える英雄は法師と坦克に集中してる。開戦できるチャンピオンが必要だ',
          ko: '사용 가능한 영웅이 법사랑 탱커에 집중되어 있다. 팀전을 시작할 수 있는 챔피언이 필요하다',
        },
        {
          zh: '看见十人同屏就手痒，哪怕当时死亡计时器还剩 3 秒',
          en: 'You see ten people in frame and your hand moves. Even if your respawn timer says three seconds',
          ja: '10人が画面に揃ったら手が動く。復活タイマーが3秒あっても',
          ko: '10인 화면 보이면 손이 움직인다. 부활 타이머 3초 남아있어도',
        },
        {
          zh: '"节庆策划"的意思是：你开了五次无效团战，第六次终于真赢了',
          en: '"Festival planner" means: five failed engages and one that actually wins the game',
          ja: '「祭典プランナー」とは：5回無意味な開戦をして、6回目でようやく本当に勝つこと',
          ko: '"축제 기획자"의 의미: 다섯 번의 무효 교전, 그리고 실제로 이기는 여섯 번째',
        },
        {
          zh: '复盘时你说的不是"为什么输了"，而是"那次团战应该我先上的"',
          en: 'Post-game analysis: not "why did we lose" but "I should have engaged first in that fight"',
          ja: '試合後の分析は「なぜ負けたか」じゃなく「あの戦闘は私が先に入るべきだった」',
          ko: '게임 후 분석은 "왜 졌나"가 아니라 "그 싸움은 내가 먼저 들어갔어야 했는데"다',
        },
        {
          zh: 'KPL 你最爱看的片段是决赛团战，不是某人 1v5 的单人秀',
          en: 'Your favourite KPL clip is a grand-final teamfight, not a solo 1v5 highlight',
          ja: 'KPLで一番好きな瞬間は決勝チームファイト。1v5のソロハイライトじゃない',
          ko: 'KPL에서 제일 좋아하는 장면은 결승 팀전이다. 1v5 솔로 하이라이트가 아니라',
        },
      ],
      rivalSlug: 'lane-pressure-artist',
      bestSquadSlug: 'defeat-grief-counselor',
    },

    // ── 5. lane-pressure-artist ─────────────────────────────────────────────────
    {
      slug: 'lane-pressure-artist',
      polarityPattern: {
        Bond: 'low',
        Mental: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '对线压迫艺术家',
        en: 'Lane Pressure Artist',
        ja: 'レーン圧迫アーティスト',
        ko: '라인 압박 아티스트',
      },
      oneLiner: {
        zh: '五分钟越塔击杀，在野区报点之前就已经结束了',
        en: 'Tower dive at minute five — over before the jungler could ping',
        ja: '5分でタワーダイブ。ジャングラーがピンする前に終わってる',
        ko: '5분에 타워 다이브. 정글러가 핑 찍기 전에 끝났다',
      },
      description: {
        zh: '你的世界观很简单：对线赢了其他的都是噪音。你不需要团队帮你，你只需要对面待在塔下给你体验"越塔击杀"的机会。别人说"发育期要谨慎"，你听见的是"我不懂怎么对线"。钝感保护你免受"你浪了"的批评影响——浪？那是压迫。每次越塔成功你都会在心里记一笔，这不是运气，这是技术的复利效应。',
        en: 'The game is won in lane. Everything else is commentary. You don\'t need a jungler, you need the enemy to stay under their tower long enough for you to calculate the dive angle. "Play safe in laning phase" is something people say when they\'re losing lane. You\'re not losing lane. The tower dive at minute five is a statement, not a mistake, and if anyone has a problem with that they can check the kill feed.',
        ja: 'ゲームはレーンで決まる。他は全部雑音だ。ジャングラーは必要ない。敵がタワー下に引きこもってくれればダイブ角度を計算するだけだ。「レーニング期は慎重に」は負けてる人が言う言葉だ。あなたは負けてない。5分のタワーダイブはミスじゃなく表明だ。文句があるならキルフィードを確認してほしい。',
        ko: '게임은 라인에서 결정된다. 나머지는 다 소음이다. 정글러는 필요 없다. 적이 타워 아래 있으면 다이브 각도를 계산하면 된다. "라이닝 기간에는 신중하게"는 라인 지고 있는 사람이 하는 말이다. 나는 지고 있지 않다. 5분 타워 다이브는 실수가 아니라 선언이다. 이의 있으면 킬 피드 확인하면 된다.',
      },
      symptoms: [
        {
          zh: '越塔击杀之前你会 ping 一下让队友知道，但你不会等他们回复',
          en: 'You ping before the tower dive to let teammates know, but you don\'t wait for acknowledgment',
          ja: 'タワーダイブ前にピンを一回。チームメイトへの通知。返事は待たない',
          ko: '타워 다이브 전에 핑 한 번 찍는다. 팀원에게 알림. 답장은 기다리지 않는다',
        },
        {
          zh: '对面 2 级你是 3 级，对面 5 分钟你已经 6 级——这是肌肉记忆，不是计划',
          en: 'Enemy hits level 2 when you\'re 3; minute five they\'re level 5 when you\'re 6. Muscle memory, not a plan',
          ja: '敵が2レベルのときあなたは3レベル。5分で相手が5なら自分は6。計画じゃなく筋肉記憶だ',
          ko: '적이 레벨 2일 때 너는 3이다. 5분에 상대가 5레벨이면 너는 6이다. 계획이 아니라 근육 기억이다',
        },
        {
          zh: '打野 gank 你的时候你第一反应是"他来干嘛"，因为对线你本来就赢着',
          en: 'When the jungler comes to gank you your first thought is "why, I was already winning this"',
          ja: 'ジャングラーがガンクに来ると「なんで来るの、もう勝ってるのに」と思う',
          ko: '정글러가 갱크하러 오면 첫 반응이 "왜 와, 나 이미 이기고 있었는데"다',
        },
        {
          zh: '"浪"这个字在你的词典里叫"超前的压迫"',
          en: '"Overextending" in your vocabulary is called "advanced pressure"',
          ja: '「オーバーエクステンド」はあなたの辞書で「先進的圧迫」と呼ばれる',
          ko: '"오버익스텐드"는 너의 사전에서 "선진 압박"이라고 불린다',
        },
        {
          zh: '游戏结束看战绩，你首先看对线对位的 KDA，其他线是背景',
          en: 'End screen: you look at your lane matchup KDA first; other lanes are background noise',
          ja: '終了画面：まず自分のレーン対面KDAを見る。他のレーンは背景だ',
          ko: '엔드 화면: 먼저 내 라인 매치업 KDA 확인. 다른 라인은 배경이다',
        },
      ],
      rivalSlug: 'teamfight-festival',
      bestSquadSlug: 'jungle-auditor',
    },

    // ── 6. skin-collector ────────────────────────────────────────────────────────
    {
      slug: 'skin-collector',
      polarityPattern: {
        Bond: 'low',
        Mental: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '限定皮肤鉴赏家',
        en: 'Limited-Skin Connoisseur',
        ja: '限定スキン鑑定家',
        ko: '한정 스킨 감정가',
      },
      oneLiner: {
        zh: '赢了不晒限定皮肤等于没赢，皮肤库才是你的终极段位',
        en: 'Winning without posting your limited skin is a win that didn\'t happen',
        ja: '限定スキンを晒さずに勝っても勝ちじゃない。スキン庫が本当の段位だ',
        ko: '한정 스킨 안 올리면 이긴 게 아니다. 스킨 보유량이 진짜 티어다',
      },
      description: {
        zh: '你打开王者荣耀不是为了段位，是为了确认今天限定皮肤还买不买得到。当然，赢是必要的，但赢的质量取决于你的英雄穿的是哪个系列的皮肤——普通款赢和春节限定款赢，情感价值差了一个量级。你的截图从来不截分数，只截皮肤特效最华丽的那一帧击杀画面。每次新活动上线，你的消费决策速度比任何战斗决策都快。',
        en: 'You open HoK to check whether the limited skin is still available. Winning matters, but win quality correlates directly with which skin series your hero is wearing. A Spring Festival limited-skin kill screenshot hits differently than a standard-skin win. Your end-game photos never show the scoreboard — just the frame where the special effect looks most dramatic. When a new event drops, your purchase decision is faster than any in-game reaction you\'ve trained.',
        ja: '王者栄耀を開くのは限定スキンがまだ買えるか確認するため。もちろん勝利は必要だけど、勝ちの質は英雄が着ているスキンのシリーズによる。春節限定スキンのキルスクショと通常スキンの勝利は感情的価値が一段違う。終了画面は撮らない。スキンエフェクトが一番派手なキル瞬間だけ切り取る。新イベントが来たら、どんなゲーム内判断よりも早く購入を決める。',
        ko: '왕자영요를 여는 이유는 한정 스킨이 아직 살 수 있는지 확인하기 위해서다. 이기는 건 필요하지만 승리의 질은 영웅이 어느 시리즈 스킨을 입고 있느냐에 달려있다. 설 한정 스킨 킬 스크린샷과 일반 스킨 승리는 감정적 가치가 한 단계 다르다. 엔드 화면은 안 찍는다. 스킨 이펙트가 제일 화려한 킬 프레임만 캡처한다. 신규 이벤트 뜨면 어떤 게임 내 판단보다 빠르게 구매를 결정한다.',
      },
      symptoms: [
        {
          zh: '你的账号皮肤数量超过你的总胜场数，这个比率你觉得很正常',
          en: 'Your skin count exceeds your total wins. You see nothing wrong with that ratio',
          ja: 'スキン数が総勝利数を超えてる。その比率に何も問題を感じない',
          ko: '스킨 수가 총 승리 수보다 많다. 그 비율에 아무 문제를 못 느낀다',
        },
        {
          zh: '春节限定皮肤上线第一天你必须下单，"再想想"不是选项',
          en: 'Spring Festival limited skin drops: day one purchase, non-negotiable. "Think about it" is not an option',
          ja: '春節限定スキンが発売されたら初日購入は確定。「考える」という選択肢はない',
          ko: '설 한정 스킨 출시 첫 날 구매는 확정이다. "생각해볼게"는 선택지가 아니다',
        },
        {
          zh: '胜利截图的背景永远选最好看的场景，有时候会等光效对的那一帧',
          en: 'Your win screenshot requires the right angle, the right light effect — you\'ll wait for the frame',
          ja: '勝利スクショは正しいアングルと光エフェクトが必要。そのフレームを待つ',
          ko: '승리 스크린샷은 올바른 각도와 빛 이펙트가 필요하다. 그 프레임을 기다린다',
        },
        {
          zh: '"抽奖"这个词对你的吸引力高于"上分"',
          en: '"Lucky draw" has more gravitational pull on you than "rank up"',
          ja: '「ガチャ」はあなたにとって「ランクアップ」より引力がある',
          ko: '"뽑기"가 "랭크업"보다 끌린다',
        },
        {
          zh: '你会帮朋友鉴定皮肤好不好看，意见比任何攻略博主都坚定',
          en: 'Friends ask your opinion on skins. Your verdict is more confident than any content creator\'s',
          ja: '友達がスキンの評価を聞いてくる。あなたの意見はどのYouTuberよりも断言的だ',
          ko: '친구들이 스킨 평가를 물어본다. 너의 의견은 어떤 유튜버보다 단호하다',
        },
      ],
      rivalSlug: 'jungle-auditor',
      bestSquadSlug: 'family-host',
    },

    // ── 7. solo-curse ────────────────────────────────────────────────────────────
    {
      slug: 'solo-curse',
      polarityPattern: {
        Bond: 'low',
        Mental: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '单排诅咒承受者',
        en: 'Solo-Queue Curse Carrier',
        ja: 'ソロキュー呪い受容者',
        ko: '솔로큐 저주 보유자',
      },
      oneLiner: {
        zh: '凌晨两点"再来一把"，你和单排之间是一段复杂的感情',
        en: 'Two AM, "one more game" — you and solo queue have a complicated relationship',
        ja: '深夜2時に「もう一本」。ソロキューとあなたの関係は複雑だ',
        ko: '새벽 2시 "한 판만 더" — 너와 솔로큐의 관계는 복잡하다',
      },
      description: {
        zh: '你相信钻石地狱不是你的终点，你只是暂时被系统卡住了。每一局输了都有具体的理由：对面 ADC 走位太好、打野那把 gank 时间太离谱、某个队友关键时刻掉线。这些理由你不说出来，但你在脑内存了一份详细的失败档案。"再来一把"是你唯一已知的解决方案，不管是深夜两点还是凌晨四点。明天不用上班是"再来一把"的必要条件之一，但不是充分条件。',
        en: 'Diamond hell is a temporary situation caused by matchmaking variance, not skill ceiling. Every loss has a documented cause: enemy ADC had suspiciously good positioning, jungle gank timing was statistically unlikely, a teammate disconnected at an inconvenient moment. You don\'t say any of this in chat. It lives in a private mental archive. "One more game" is the only known treatment. It is 2 AM. You are applying the treatment.',
        ja: 'ダイヤ地獄はマッチングのばらつきによる一時的な状況であって、スキル上限ではない。負けには毎回具体的な原因がある：敵ADCのポジショニングが疑わしいほど良かった、ジャングルのガンクタイミングが統計的にありえなかった、チームメイトが重要な局面で切断した。チャットではこれを言わない。心の中のアーカイブに保管されている。「もう一本」が唯一の既知の治療法だ。深夜2時。治療を継続中。',
        ko: '다이아 지옥은 매치메이킹 편차로 인한 일시적 상황이지 실력 한계가 아니다. 매 패배에는 구체적인 원인이 있다: 상대 원딜의 포지셔닝이 의심스러울 만큼 좋았고, 정글 갱크 타이밍이 통계적으로 불가능했으며, 팀원이 중요한 순간에 끊겼다. 채팅에선 이 말 안 한다. 마음속 아카이브에 보관된다. "한 판만 더"가 유일하게 알려진 치료법이다. 새벽 2시다. 치료 계속 중이다.',
      },
      symptoms: [
        {
          zh: '"再来一把"是你的口头禅，出现频率比"晚安"高',
          en: '"One more game" is said more often than "good night"',
          ja: '「もう一本」は「おやすみ」より頻繁に言う',
          ko: '"한 판만 더"가 "잘 자"보다 더 자주 나온다',
        },
        {
          zh: '钻石段位是你的长期地址，王者是你周末偶尔拜访的目的地',
          en: 'Diamond is your permanent address; Honor King tier is the weekend destination you visit occasionally',
          ja: 'ダイヤは永住地。王者段位は週末にたまに行く旅先だ',
          ko: '다이아는 영구 주소지, 왕자 단위는 가끔 방문하는 주말 여행지다',
        },
        {
          zh: '你不是因为赢了才满足，你是因为找到了"下次能赢的理由"才停',
          en: 'You stop playing not when you win but when you identify "the reason I\'ll win next time"',
          ja: '勝ったから満足するんじゃなく「次は勝てる理由」が見つかったから止める',
          ko: '이겨서 만족하는 게 아니라 "다음에 이길 이유"를 찾았을 때 멈춘다',
        },
        {
          zh: '你精通各种段位皮肤的解锁条件，因为你花了很多时间研究还差多少分',
          en: 'You know every rank skin unlock condition by heart; you\'ve spent time calculating exactly how far you are',
          ja: 'ランクスキンのアンロック条件を全部暗記してる。あと何点か計算してきたから',
          ko: '모든 랭크 스킨 해제 조건을 외우고 있다. 얼마나 남았는지 계산하며 살았으니까',
        },
        {
          zh: '你从来不删游戏，只是偶尔把它移到手机的第三屏——然后第二天又移回来',
          en: 'You never uninstall; you just move the icon to page three. It\'s back on page one by morning',
          ja: '削除はしない。アイコンを3ページ目に移すだけだ。翌朝には1ページ目に戻ってる',
          ko: '삭제는 안 한다. 아이콘을 3번째 화면으로 옮기는 것뿐이다. 아침엔 첫 화면에 돌아와 있다',
        },
      ],
      rivalSlug: 'family-host',
      bestSquadSlug: 'defeat-grief-counselor',
    },

    // ── 8. bm-ping-mayor ────────────────────────────────────────────────────────
    {
      slug: 'bm-ping-mayor',
      polarityPattern: {
        Bond: 'low',
        Mental: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
      name: {
        zh: '嘲讽信号市长',
        en: 'BM Ping Mayor',
        ja: 'BMピン市長',
        ko: '도발 핑 시장',
      },
      oneLiner: {
        zh: '掌握十种问号 ping 节奏，每一种都有具体含义且可以合理抵赖',
        en: 'Ten distinct ? ping cadences, each with a meaning, each deniable',
        ja: '10種類の「？」ピンリズム。それぞれに意味があり、いずれも否定できる',
        ko: '열 가지 구별되는 ? 핑 리듬. 각각 의미가 있고, 모두 부인 가능하다',
      },
      description: {
        zh: '你把嘲讽信号当成一门语言在学习。一个问号 ping 是"你在干嘛"，两个快速问号是"我不信你是认真的"，三个慢拍问号是"我已经对你感到失望但还没完全放弃"。你不骂人，骂人太直白；你用 ping 说话，因为 ping 可以被解读成任何一种意思。你的嘲讽对面一次换盾——他们知道。你只是在使用游戏提供的功能，这有什么问题吗？',
        en: 'The ? ping is a language and you speak it fluently. One ping: "please explain your reasoning." Two fast pings: "I\'m skeptical you have reasoning." Three slow pings: "I\'ve moved past disappointment into something quieter." You never type anything hostile — that creates evidence. Pings are ambient. When you BM-emote after a kill the enemy knows it was personal. You were just using the game\'s provided features. That\'s your story and it\'s airtight.',
        ja: '「？」ピンは言語だ。あなたは流暢に話せる。ピン一回：「理由を説明してください」。二回素早く：「理由があるか疑問だ」。三回ゆっくり：「失望を通り越して静かな何かになってる」。敵意のあるチャットは証拠を残す。ピンは周囲環境音だ。キルの後でBM挑発をすると相手は個人的な意図を理解する。ゲームが提供する機能を使っているだけだ。それが言い訳で、完璧だ。',
        ko: '? 핑은 언어다. 그리고 너는 유창하게 구사한다. 핑 한 번: "이유를 설명해줘." 빠르게 두 번: "이유가 있는지 의심스럽다." 느리게 세 번: "실망을 지나 더 조용한 무언가가 됐다." 적대적인 채팅은 증거를 남긴다. 핑은 환경음이다. 킬 후 BM 도발을 하면 상대는 개인적 의도를 안다. 게임이 제공하는 기능을 사용한 것뿐이다. 그게 너의 변명이고, 완벽하다.',
      },
      symptoms: [
        {
          zh: '你的问号 ping 频率在对面犯错后 3 秒内自动激活，不需要思考',
          en: 'Your ? ping fires within three seconds of an enemy mistake. No conscious decision required',
          ja: '？ピンは敵のミスの3秒以内に自動起動する。意識的な判断は必要ない',
          ko: '? 핑은 적의 실수 3초 내에 자동 발동한다. 의식적인 판단이 필요 없다',
        },
        {
          zh: '你有至少三种嘲讽动作的使用场景分类，包括"反杀后用"和"塔下送人头后对方用了我也用"',
          en: 'You have situational categories for each BM emote: post-kill, post-tower-dive, counter-BM',
          ja: 'BM挑発の状況分類がある：キル後、タワーダイブ後、カウンターBM用',
          ko: 'BM 도발 상황 분류가 있다: 킬 후, 타워 다이브 후, 카운터 BM용',
        },
        {
          zh: '你从来不说"我在 BM"，你说"我只是在使用游戏自带的功能"',
          en: 'You never say "I\'m BMing." You say "I\'m using the game\'s built-in features"',
          ja: '「BMしてる」とは言わない。「ゲームの内蔵機能を使ってる」と言う',
          ko: '"BM하고 있다"고 안 한다. "게임 내장 기능을 사용하는 중"이라고 한다',
        },
        {
          zh: '赢了你会在结算界面多停几秒，确认对面能看到你的段位徽章',
          en: 'You linger on the end screen for a few seconds: enough time for the enemy to see your rank badge',
          ja: '試合終了画面に数秒余分にとどまる。相手があなたのランクバッジを見るのに十分な時間',
          ko: '종료 화면에 몇 초 더 머문다. 상대가 너의 랭크 뱃지를 볼 충분한 시간',
        },
        {
          zh: '你对嘲讽节奏的感知跟对 CD 的感知一样精准，都是肌肉记忆',
          en: 'Your timing sense for BM is as precise as your cooldown tracking. Both are muscle memory',
          ja: 'BMのタイミング感覚はCDトラッキングと同じくらい正確。どちらも筋肉記憶だ',
          ko: 'BM 타이밍 감각이 쿨다운 추적만큼 정확하다. 둘 다 근육 기억이다',
        },
      ],
      rivalSlug: 'defeat-grief-counselor',
      bestSquadSlug: 'teamfight-festival',
    },
  ],
  questions: [
    // ── Q1 (peak start) — Bond × Flair compound ─────────────────────────────
    {
      id: 'hok-q01',
      kind: 'compound',
      text: {
        zh: '五排刚赢了一把高光局，你做的下一件事是？',
        en: 'You just closed out a five-stack game with a highlight finish. Next move?',
        ja: '5人パーティでハイライトな勝利を取った直後、次にやることは？',
        ko: '5인 파티로 짜릿한 승리 직후, 다음 행동은?',
      },
      options: [
        {
          label: {
            zh: '拉所有人合影截图发朋友圈，@到底',
            en: 'Group screenshot, post it everywhere, tag everyone',
            ja: '全員集合スクショ。SNSに投稿、全員タグ付け',
            ko: '단체 스크린샷 + SNS 도배 + 전원 태그',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '私聊队友"打得不错下次再来"，不发公开的',
            en: 'DM each teammate "GG" — no public post',
            ja: '個別チャットで「ナイス」、公開投稿はしない',
            ko: '개인 디엠으로 "잘했어", 공개 글은 안 올린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '自己保存截图，等下次单排上分时再放出来',
            en: 'Save the screenshot for solo-queue clout later',
            ja: 'スクショを保存して、単独ランクの自慢用に',
            ko: '스크린샷 저장. 솔로 랭크에서 자랑할 용도',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不发，立刻开下一把',
            en: 'No post. Queue the next one',
            ja: '投稿なし。次の試合へ',
            ko: '안 올리고 바로 다음 판',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── Q2 (peak start) — Bond × Mental compound (double) ───────────────────
    {
      id: 'hok-q02',
      kind: 'compound',
      text: {
        zh: '队友连输三把开始在群里说"放弃了"，你？',
        en: 'Your party just dropped three in a row and someone is typing "I\'m done." You?',
        ja: 'パーティが3連敗して、誰かが「もう諦めた」と書き始めた。あなたは？',
        ko: '파티가 3연패하고 누군가 "포기다"라고 쓰기 시작한다. 너는?',
      },
      options: [
        {
          label: {
            zh: '发详细复盘，每把都列出能翻盘的那一步',
            en: 'Send a detailed post-mortem with the one comeback path per game',
            ja: '詳細な反省を送る。各試合の逆転ルートを示す',
            ko: '자세한 복기 보낸다. 각 게임의 역전 루트도 같이',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '发个"再来一把"表情，把话题岔开',
            en: 'Send a "one more" sticker and steer the chat elsewhere',
            ja: '「もう一本」スタンプを送って話題を変える',
            ko: '"한 판만 더" 이모지 보내고 화제 돌린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '退群消息，自己单排去',
            en: 'Mute the chat. Solo queue alone',
            ja: '群通知をミュートしてソロキューへ',
            ko: '채팅 알림 끄고 혼자 솔로큐 간다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '不看消息，先把今天的赛季任务做完',
            en: 'Skip the chat. Grind today\'s season pass first',
            ja: '群を見ずに今日のシーズンタスクを進める',
            ko: '채팅 안 보고 오늘 시즌패스 진행한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // ── Q3 (peak start) — Intel × Mental compound ───────────────────────────
    {
      id: 'hok-q03',
      kind: 'compound',
      text: {
        zh: '投降票出来了，10 分钟劣势，差不多 5000 经济。你？',
        en: 'Surrender vote pops at minute 10 — about 5K gold behind. You?',
        ja: '10分時点で約5000不利、降参投票が出た。あなたは？',
        ko: '10분에 5천 골드 차이 불리, 항복 투표가 떴다. 너는?',
      },
      options: [
        {
          label: {
            zh: '调出战绩面板，找对面经济最高的那个的弱点位',
            en: 'Pull up the scoreboard; find the weakest partner of their fed carry',
            ja: '戦績パネルを開き、相手キャリーの一番弱い味方を探す',
            ko: '점수판 열고 상대 캐리의 가장 약한 파트너 찾는다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '看数据，5000 经济差还可以追，否决',
            en: 'Check the numbers — 5K gap is closeable. Vote no',
            ja: '数字を見る。5000差は埋まる。否決',
            ko: '숫자 본다. 5천 차이는 따라잡힐 만하다. 반대',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '直觉对面打野手感不行，没投同意，开打',
            en: 'Gut says their jungler is off-tempo. No vote. Push it',
            ja: '直感では相手ジャングラーが調子悪い。否決、攻める',
            ko: '직감엔 상대 정글러 감각 떨어진다. 반대. 밀어붙인다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '不觉得能赢，投同意，省点时间',
            en: 'Doesn\'t feel winnable. Vote yes, save the time',
            ja: '勝てる気がしない。降参に賛成、時間を節約',
            ko: '이길 것 같지 않다. 찬성, 시간 아낀다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // ── Q4 — Tempo anchor ───────────────────────────────────────────────────
    {
      id: 'hok-q04',
      kind: 'anchor',
      text: {
        zh: '比赛开始 30 秒，你的第一个动作是？',
        en: 'Game starts. First 30 seconds — what do you do?',
        ja: '試合開始30秒。最初の行動は？',
        ko: '게임 시작 30초. 첫 행동은?',
      },
      options: [
        {
          label: {
            zh: '看河道视野，规划前 5 分钟的发育路线',
            en: 'Check river vision; plan the next five minutes',
            ja: 'リバー視野を確認し、5分の動線を計画',
            ko: '강 시야 확인, 5분간 동선 짠다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '稳兵线，先把工资刷出来',
            en: 'Farm the wave steady; build the gold base',
            ja: 'ウェーブを安定して刈る。資金を先に作る',
            ko: '안정적으로 미니언 정리. 골드 먼저 쌓는다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '往对面打野位移动，赌他刚刷完蓝',
            en: 'Move to enemy jungle. Bet he just cleared blue',
            ja: '敵ジャングルへ移動。ブルー直後の賭け',
            ko: '상대 정글로 이동. 블루 직후라는 베팅',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '直接冲对面塔下，试探他敢不敢出来',
            en: 'Sprint to enemy tower; bait him out',
            ja: '敵タワー下に突っ込む。出てくるか試す',
            ko: '상대 타워 아래 돌진. 나오게 유도',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── Q5 — Nerve anchor ───────────────────────────────────────────────────
    {
      id: 'hok-q05',
      kind: 'anchor',
      text: {
        zh: '你残血了，对面残血在追，自家塔下能看见但不近。你？',
        en: 'You\'re low HP, enemy chasing also low. Tower\'s in sight but not close. You?',
        ja: '自分が瀕死、追ってくる敵も瀕死。タワーは見えるが少し遠い。どうする？',
        ko: '체력 낮음, 추격하는 적도 낮음. 타워 보이지만 좀 멀다. 어떻게?',
      },
      options: [
        {
          label: {
            zh: '撤回塔下，蓝条不够也撤，活着回来再说',
            en: 'Retreat to tower even without mana. Live, fight later',
            ja: 'マナ切れでもタワーに撤退。生きて次に',
            ko: '마나 떨어져도 타워로 후퇴. 살아남고 본다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '闪现绕塔，赌他不敢越塔',
            en: 'Flash around tower, bet he won\'t dive',
            ja: 'フラッシュでタワー回避、敵がダイブしないと賭ける',
            ko: '점멸로 타워 둘러간다. 적이 다이브 안 한다는 베팅',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '反身打他，赢就是名场面',
            en: 'Turn and fight; if you win it\'s a highlight',
            ja: '振り返って戦う。勝てばハイライト',
            ko: '돌아서 맞짱. 이기면 하이라이트',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '闪现 + 大招直接梭，能换就是赚',
            en: 'Flash + ult all-in; if I trade it\'s a win',
            ja: 'フラッシュ＋アルト、全賭け。相討ちでも勝ち',
            ko: '점멸 + 궁극기 올인. 맞교환만 해도 이득',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q6 — Bond anchor ────────────────────────────────────────────────────
    {
      id: 'hok-q06',
      kind: 'anchor',
      text: {
        zh: '辅助 ping 你"过来一起打"，你的反应？',
        en: 'Support pings you with "come help." Your response?',
        ja: 'サポートが「一緒に行こう」とピンを出した。反応は？',
        ko: '서포터가 "같이 가자" 핑 찍었다. 반응은?',
      },
      options: [
        {
          label: {
            zh: '立刻过去，团队节奏比对线工资重要',
            en: 'Go now — team tempo beats lane gold',
            ja: '即行く。チームテンポはレーン資金より大事',
            ko: '바로 간다. 팀 템포가 라인 골드보다 중요',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '推完这波线再过去，让辅助先稳一下',
            en: 'Finish the wave first, then rotate; support can stall',
            ja: 'このウェーブ処理してから合流。サポートは少し耐えてくれる',
            ko: '미니언 정리하고 합류. 서포터가 잠시 버텨준다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '装作没看到，自己这波越塔机会更好',
            en: 'Pretend you didn\'t see it; the dive on your lane is better',
            ja: '見なかったふり。自分のレーンのタワーダイブの方が美味い',
            ko: '못 본 척. 내 라인 다이브가 더 짭짤하다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '直接关辅助 ping，本来就不该被打扰',
            en: 'Mute the support pings; you\'re focused, leave you alone',
            ja: 'サポートのピンを切る。集中してるんだから邪魔しないで',
            ko: '서포터 핑 끈다. 집중 중이니까 방해하지 마',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── Q7 — Intel anchor ───────────────────────────────────────────────────
    {
      id: 'hok-q07',
      kind: 'anchor',
      text: {
        zh: '主宰刷新前 30 秒，你怎么判断要不要打？',
        en: 'Tyrant respawns in 30 seconds. How do you decide whether to take it?',
        ja: '主宰リスポーン30秒前。取るかどうかをどう判断する？',
        ko: '주재 리스폰 30초 전. 칠지 말지 어떻게 판단해?',
      },
      options: [
        {
          label: {
            zh: '看小地图视野 + 对面打野上次出现的位置 + 双方大招 CD',
            en: 'Map vision + enemy jungler last seen + both teams\' ult CDs',
            ja: 'ミニマップ視野＋敵ジャングラーの最終位置＋両軍のアルトCD',
            ko: '미니맵 시야 + 상대 정글러 마지막 위치 + 양 팀 궁극기 쿨',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '查面板：装备差、等级差、对面打野手速',
            en: 'Check the panel: item gap, level gap, enemy jungler clear speed',
            ja: 'パネル確認：装備差、レベル差、敵ジャングルクリア速度',
            ko: '패널 확인: 아이템 차, 레벨 차, 상대 정글 클리어 속도',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉对面这局节奏不对，可以抢',
            en: 'Their tempo feels off this game. We can steal',
            ja: '相手のテンポが今日変。盗める',
            ko: '상대 템포가 오늘 이상하다. 훔칠 수 있다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '我的英雄状态好，去就是了，多想没意义',
            en: 'My champ feels good. Just go. Overthinking kills it',
            ja: 'チャンプの調子が良い。行くだけ。考えすぎは禁物',
            ko: '내 챔프 컨디션 좋다. 그냥 간다. 생각이 많으면 망한다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q8 — Flair anchor ───────────────────────────────────────────────────
    {
      id: 'hok-q08',
      kind: 'anchor',
      text: {
        zh: '你拿了五杀，结算页停留时间是？',
        en: 'You got a penta. How long do you linger on the end screen?',
        ja: '5キル達成。終了画面の滞在時間は？',
        ko: '5킬 달성. 종료 화면에서 얼마나 머무는가?',
      },
      options: [
        {
          label: {
            zh: '点继续，下把要紧',
            en: 'Hit continue. Next game matters more',
            ja: '即「次へ」。次の試合の方が大事',
            ko: '바로 다음. 다음 판이 더 중요',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '看一眼数据就走，截图等回放看',
            en: 'Glance at the stats and leave; screenshot from replay later',
            ja: 'データを一目で見て退場。スクショはリプレイから',
            ko: '데이터 한 번 보고 나간다. 스크린샷은 리플레이에서',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '截 3 张图，分别发到不同的群',
            en: 'Take three screenshots, post to three different chats',
            ja: 'スクショ3枚、3つの群に投稿',
            ko: '스크린샷 3장, 3개 다른 채팅방에 도배',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等动态结算特效完整放完，截图必须卡那一帧',
            en: 'Wait for the full kill-cam montage; screenshot must land on the right frame',
            ja: 'キルカメラのフル演出を待つ。スクショは正しいフレームで',
            ko: '킬캠 풀 연출을 기다린다. 스크린샷은 정확한 프레임에서',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q9 — Mental anchor ──────────────────────────────────────────────────
    {
      id: 'hok-q09',
      kind: 'anchor',
      text: {
        zh: '队友给你 ping 了一个问号，你的内心？',
        en: 'A teammate hits a ? ping on you. Inner reaction?',
        ja: '味方が「？」ピンを出してきた。内心は？',
        ko: '팀원이 너에게 ? 핑 찍었다. 속마음은?',
      },
      options: [
        {
          label: {
            zh: '记一下，反正这局还要继续打',
            en: 'Filed it away. Game\'s still going',
            ja: '心に留めるだけ。試合は続いてる',
            ko: '마음에 담는다. 게임은 계속된다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '不在意，可能他自己挫败感转移',
            en: 'Whatever. He\'s probably venting frustration',
            ja: '気にしない。多分自分の苛立ち発散',
            ko: '신경 안 쓴다. 자기 답답함 풀려는 거겠지',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '红温启动，开始 ping 回他做的菜的位置',
            en: 'Tilt activated. Start pinging back his griefing spots',
            ja: '熱くなった。彼のミスったポイントにピンで返す',
            ko: '틸트 발동. 그가 망친 지점에 핑으로 응수',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '直接打字"你 12 个人头你说我"',
            en: 'Type back: "you\'re 0/12, you\'re talking to me?"',
            ja: '即タイプ：「お前0/12で俺に何か言うの？」',
            ko: '바로 채팅: "0/12면서 나한테 뭐라고?"',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q10 — Tempo anchor #2 ───────────────────────────────────────────────
    {
      id: 'hok-q10',
      kind: 'anchor',
      text: {
        zh: '对面打野刚被你看到出现在下半野区，你？',
        en: 'You just spotted the enemy jungler in your bottom-side jungle. You?',
        ja: '敵ジャングラーが下半野区にいるのを確認した。どうする？',
        ko: '상대 정글러가 아래쪽 정글에 있는 걸 확인. 너는?',
      },
      options: [
        {
          label: {
            zh: '上路安全，开始稳稳推线发育',
            en: 'Top is safe. Push the wave and farm calmly',
            ja: 'トップは安全。ウェーブを押して農業',
            ko: '탑 안전. 라인 밀고 차분히 파밍',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '蹲一波，等他往上半野区走再做决定',
            en: 'Wait it out — see if he rotates up before deciding',
            ja: '少し待つ。上半に動くか見てから判断',
            ko: '잠깐 기다린다. 위쪽으로 움직이는 거 보고 판단',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '立刻闪过去抓他，机会就是现在',
            en: 'Flash in and burst him; the window is now',
            ja: '即フラッシュで突撃。チャンスは今',
            ko: '즉시 점멸로 들어간다. 기회는 지금',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '反向越塔，趁他不在上路把他对面打野秒了',
            en: 'Counter-dive top — kill his lane while he\'s away',
            ja: '逆方向にダイブ。彼が不在の間にトップを潰す',
            ko: '반대편 다이브. 그가 없는 동안 탑 끝낸다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── Q11 — Nerve anchor #2 ───────────────────────────────────────────────
    {
      id: 'hok-q11',
      kind: 'anchor',
      text: {
        zh: '对面四个人聚在中路，你只有一个大招，你？',
        en: 'Four enemies clustered mid. You have one ult. You?',
        ja: '敵4人が中央に集まってる。アルトは1つだけ。どうする？',
        ko: '상대 4명이 미드에 뭉쳐있다. 궁극기는 하나뿐. 너는?',
      },
      options: [
        {
          label: {
            zh: '不开，等他们分开再开效率更高',
            en: 'Hold it; ult is more efficient when they\'re split',
            ja: '撃たない。分散してから撃つ方が効率がいい',
            ko: '안 쓴다. 흩어졌을 때가 더 효율적',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '退一步绕到侧翼，留大招到团战开始',
            en: 'Reposition to the flank, save ult for the actual fight',
            ja: '一歩引いて側面へ。アルトは本戦のために温存',
            ko: '한 발 물러나 측면으로. 궁극은 본 교전 위해 아낀다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接开，能秒一个就值',
            en: 'Pop it now — one kill is worth it',
            ja: '即発動。1キル取れれば十分',
            ko: '바로 쏜다. 한 명만 잡아도 본전',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '冲进去开大，能秒就秒，秒不掉队友也得跟',
            en: 'Engage and ult; if I kill, great; if not, team better follow',
            ja: '突っ込んでアルト。倒せれば良し、ダメでも味方が続くしかない',
            ko: '돌진해서 궁극. 잡으면 좋고, 못 잡아도 팀이 따라올 수밖에',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q12 — Bond anchor #2 ────────────────────────────────────────────────
    {
      id: 'hok-q12',
      kind: 'anchor',
      text: {
        zh: '一波团灭对面 4 人，主宰还有 20 秒刷新，你？',
        en: 'You just aced 4 of theirs. Tyrant in 20 seconds. You?',
        ja: '4キル取った。主宰まで20秒。どうする？',
        ko: '상대 4명 잡았다. 주재까지 20초. 너는?',
      },
      options: [
        {
          label: {
            zh: '主宰 ping，喊大家集合，准备开始',
            en: 'Ping Tyrant, call everyone to converge, prep the take',
            ja: '主宰にピン。全員集合してテイク準備',
            ko: '주재 핑. 다 모이라고 부른 뒤 준비',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '等队友过来再动，自己先做视野',
            en: 'Wait for the team; set vision in the meantime',
            ja: '味方が来るまで待つ。先に視野を取る',
            ko: '팀이 올 때까지 기다린다. 먼저 시야 잡는다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '一个人去打，队友赶上是 bonus',
            en: 'Start solo; if teammates show up, bonus',
            ja: '一人で行く。味方が来たらボーナス',
            ko: '혼자 간다. 팀 오면 보너스',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '不做主宰，自己去推条线发育',
            en: 'Skip Tyrant, push a side wave and farm',
            ja: '主宰スルー。サイドレーンを押して農業',
            ko: '주재 패스. 사이드 라인 밀고 파밍',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── Q13 — Intel anchor #2 ───────────────────────────────────────────────
    {
      id: 'hok-q13',
      kind: 'anchor',
      text: {
        zh: '你选英雄前会先看什么？',
        en: 'Before locking your hero, what do you check first?',
        ja: 'チャンプを確定する前、まず何を見る？',
        ko: '챔프 확정 전에 먼저 뭘 보는가?',
      },
      options: [
        {
          label: {
            zh: '对面阵容的克制关系 + 自家阵容的连招配合',
            en: 'Counters against their lineup + combo synergy with mine',
            ja: '相手構成のカウンター＋自陣のコンボ相性',
            ko: '상대 구성 카운터 + 우리 팀 콤보 시너지',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '查英雄面板的胜率、Ban 率，再决定',
            en: 'Check win rate, ban rate, then pick',
            ja: '勝率とBAN率を確認して決める',
            ko: '승률, 밴율 보고 선택',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '看自己今天哪个英雄手感最对',
            en: 'Whichever hero feels right today',
            ja: '今日一番調子がいいチャンプ',
            ko: '오늘 손에 제일 잘 맞는 챔프',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '直接秒选我最熟的那一个，不看对面',
            en: 'Instalock my main; ignore the enemy comp',
            ja: '使い慣れたチャンプを秒ロック。相手は見ない',
            ko: '주력 챔프 즉시 픽. 상대는 안 본다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q14 — Flair anchor #2 ───────────────────────────────────────────────
    {
      id: 'hok-q14',
      kind: 'anchor',
      text: {
        zh: '你打开赛季任务页面，先看哪一类？',
        en: 'You open the season pass — which tab first?',
        ja: 'シーズンパスを開いた。最初に見るタブは？',
        ko: '시즌패스 열었다. 먼저 보는 탭은?',
      },
      options: [
        {
          label: {
            zh: '完成度面板，看哪个任务最快上经验',
            en: 'Progress panel — which quest gives the fastest XP',
            ja: '進捗パネル。一番経験値効率がいいクエスト',
            ko: '진행도 패널. 가장 효율 좋은 퀘스트',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '段位徽章，看离下一阶还差多少',
            en: 'Rank badge — how far to next tier',
            ja: 'ランクバッジ。次の段位まで何点',
            ko: '랭크 뱃지. 다음 티어까지 얼마',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '皮肤奖励，看哪个段位能解锁什么皮肤',
            en: 'Skin rewards — which tier unlocks what skin',
            ja: 'スキン報酬。どのランクで何のスキンが解放されるか',
            ko: '스킨 보상. 어느 티어에서 어떤 스킨 풀리는지',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '限定 + 抽奖入口，先看本周还能抽什么',
            en: 'Limited + draws — what\'s pull-able this week',
            ja: '限定＋ガチャ。今週何が引けるか',
            ko: '한정 + 뽑기. 이번 주 뭘 뽑을 수 있는지',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q15 — Mental anchor #2 ──────────────────────────────────────────────
    {
      id: 'hok-q15',
      kind: 'anchor',
      text: {
        zh: '你刚输了一把高分段排位，掉了 5 颗星，你？',
        en: 'Just lost a high-rank match, dropped 5 stars. You?',
        ja: '高ランク試合に負けて星を5つ失った。あなたは？',
        ko: '고티어 매치 졌고 별 5개 떨어졌다. 너는?',
      },
      options: [
        {
          label: {
            zh: '看完结算页关游戏，明天再来',
            en: 'Look at the end screen, close the game, try tomorrow',
            ja: '結算画面を見てゲームを閉じる。明日',
            ko: '결과 화면 보고 종료. 내일',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '继续打，但换个英雄换个心情',
            en: 'Queue again, but on a different hero to reset',
            ja: '続けるけどチャンプを変えて気分転換',
            ko: '계속 하되 챔프 바꿔서 기분 전환',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '立刻再排一把，必须把这把找回来',
            en: 'Queue immediately. Need to win this back tonight',
            ja: '即再キュー。今晩取り返さないと終われない',
            ko: '바로 다시 큐. 오늘 밤 안에 만회해야 한다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '一边骂队友一边再开下一把',
            en: 'Rant about teammates while queueing the next one',
            ja: '味方の文句を言いながら次の試合へ',
            ko: '팀원 욕하면서 다음 판 큐',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q16 — Tempo × Bond compound ─────────────────────────────────────────
    {
      id: 'hok-q16',
      kind: 'compound',
      text: {
        zh: '8 分钟左右，打野来你这边视野，你？',
        en: 'About minute 8 — your jungler shows up to your lane. You?',
        ja: '8分頃、ジャングラーがあなたのレーン視野に入った。どうする？',
        ko: '8분쯤, 정글러가 네 라인 시야로 들어왔다. 너는?',
      },
      options: [
        {
          label: {
            zh: '一起做视野再打野怪，稳一波节奏',
            en: 'Set vision together first, then jungle camps; steady the tempo',
            ja: '視野を一緒に取ってからジャングル。テンポを安定させる',
            ko: '시야 같이 잡고 정글 캠프. 템포 안정시킨다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '自己稳兵线，让打野按他自己路线走',
            en: 'Farm steady; let the jungler take his own route',
            ja: '自分はウェーブ処理。ジャングラーは自分のルートで',
            ko: '난 미니언 정리. 정글러는 자기 동선대로',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '立刻一起越塔，对面没反应过来',
            en: 'Dive together right now; enemy hasn\'t reacted yet',
            ja: '即一緒にダイブ。敵はまだ反応してない',
            ko: '바로 같이 다이브. 상대 아직 반응 못 한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '自己往他视野位反向冲，单杀比 gank 快',
            en: 'Counter-rotate yourself; soloing is faster than a duo gank',
            ja: '自分が逆方向に動く。ソロキルの方がgankより早い',
            ko: '나 혼자 반대편 진격. 솔로 킬이 갱크보다 빠르다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── Q17 — Tempo × Intel compound ────────────────────────────────────────
    {
      id: 'hok-q17',
      kind: 'compound',
      text: {
        zh: '对面打野第三次来你这边 gank，你？',
        en: 'Enemy jungler ganks your lane a third time. You?',
        ja: '敵ジャングラーが3回目のガンクに来た。どうする？',
        ko: '상대 정글러가 세 번째로 갱크 왔다. 너는?',
      },
      options: [
        {
          label: {
            zh: '记录他每次出现的间隔，预判第四次',
            en: 'Log the timing intervals; predict gank number four',
            ja: '出現間隔をメモして4回目を予測',
            ko: '출현 간격 기록. 4번째 갱크를 예측',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '退塔下，把视野铺满，慢慢发育',
            en: 'Retreat under tower, vision-spam, farm slow',
            ja: 'タワー下に退避。視野を張って遅めに農業',
            ko: '타워 아래로. 시야 도배하고 느리게 파밍',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '直接换线，去抓他对应那边的打野',
            en: 'Swap lanes — go ambush his counterpart instead',
            ja: 'レーン交代。彼のカウンターパートを狙う',
            ko: '라인 교체. 그쪽 정글러 노린다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '不躲了，下次他来了我先动',
            en: 'No more hiding; next time he comes, I move first',
            ja: 'もう隠れない。次彼が来たら先に動く',
            ko: '더는 안 숨는다. 다음에 오면 내가 먼저 움직인다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q18 — Tempo × Mental compound ───────────────────────────────────────
    {
      id: 'hok-q18',
      kind: 'compound',
      text: {
        zh: '前期被对面打野针对了 3 次，2 死 1 平。你？',
        en: 'Early jungler camp got you 2 deaths, 1 narrow escape. You?',
        ja: '序盤に3回ガンクされて2デス1脱出。どうする？',
        ko: '초반 갱크 3번에 2데스 1탈출. 너는?',
      },
      options: [
        {
          label: {
            zh: '冷静推线，把节奏拖到 15 分钟之后',
            en: 'Cool head. Farm waves; drag the game past minute 15',
            ja: '冷静にウェーブ処理。15分以降に持ち込む',
            ko: '냉정하게 미니언 정리. 15분 이후로 끌고 간다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '继续稳，但内心已经记了对面 ID',
            en: 'Play safe; quietly memorize his account name',
            ja: '安全プレイ。心の中で相手IDを記録',
            ko: '안전하게. 속으로 상대 ID 외워둔다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '立刻反向打他，下一波我冲过去',
            en: 'Counter-engage; next wave I sprint into him',
            ja: '逆襲。次のウェーブで突っ込む',
            ko: '반격. 다음 미니언 때 돌진',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '红温了，立刻冲塔下找他单挑',
            en: 'Tilted. Dive under tower, 1v1 him now',
            ja: '熱くなった。即タワー下でソロデュエル',
            ko: '틸트. 즉시 타워 아래서 1대1 신청',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q19 — Tempo × Nerve compound (double) ───────────────────────────────
    {
      id: 'hok-q19',
      kind: 'compound',
      text: {
        zh: '己方主宰还有 30 秒刷新，对面 4 个不见了，你？',
        en: 'Tyrant up in 30 seconds. Four of theirs gone from map. You?',
        ja: '主宰まで30秒、敵4人がマップから消えた。どうする？',
        ko: '주재까지 30초, 상대 4명이 맵에서 사라졌다. 너는?',
      },
      options: [
        {
          label: {
            zh: '撤回主宰附近，让他们扑空',
            en: 'Pull back near Tyrant; let them whiff the engage',
            ja: '主宰付近に退避。空振りさせる',
            ko: '주재 근처로 후퇴. 헛스윙시킨다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '所有人退一波等他们露面再行动',
            en: 'Everyone backs off; only move once their position is known',
            ja: '全員一度引いて、位置がわかったら動く',
            ko: '전원 한 번 빼고, 위치 보이면 움직인다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '立刻冲主宰，越快越好，赌他们没人能赶到',
            en: 'Burst Tyrant now; bet none of them can reach us in time',
            ja: '即主宰開始。間に合わないと賭ける',
            ko: '즉시 주재 시작. 못 따라온다는 베팅',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '我去插他们的回城点上视野，赌一波找到他们位置',
            en: 'Solo ward their probable rotation; bet I spot them first',
            ja: '彼らの集結点に視野挿し。先に見つける賭け',
            ko: '단신으로 그들 동선에 시야 박는다. 먼저 찾는다는 베팅',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q20 — Nerve × Bond compound ─────────────────────────────────────────
    {
      id: 'hok-q20',
      kind: 'compound',
      text: {
        zh: '辅助说"我有大招，开团吗？"，你？',
        en: 'Support says "I\'ve got ult — engage?" You?',
        ja: 'サポートが「アルトある、開戦する？」と聞いた。あなたは？',
        ko: '서포터가 "궁극 있어, 들어갈까?"라고 묻는다. 너는?',
      },
      options: [
        {
          label: {
            zh: '等队伍状态更好再说，先做主宰视野',
            en: 'Hold until comp is healthier; vision Tyrant first',
            ja: '味方の状態が整ってから。先に主宰の視野',
            ko: '팀 컨디션 올라온 뒤에. 먼저 주재 시야',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '让他自己判断，不开就稳一波',
            en: 'His call; if he holds, we hold',
            ja: '彼の判断に任せる。引くなら全員引く',
            ko: '그의 판단대로. 안 들어가면 같이 빠진다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '直接说"开吧，跟住"，五人冲',
            en: '"Engage. Follow up." All-five push',
            ja: '「開けて、ついていく」5人で突っ込む',
            ko: '"들어가, 따라간다." 5인 돌격',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '不等他了，自己先冲，能 carry 就 carry',
            en: 'Forget him; I engage first, carry if I can',
            ja: '彼を待たず自分が突っ込む。キャリーできればする',
            ko: '그 안 기다리고 내가 먼저. 캐리할 수 있으면 한다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── Q21 — Nerve × Intel compound ────────────────────────────────────────
    {
      id: 'hok-q21',
      kind: 'compound',
      text: {
        zh: '装备里下一件你选什么？',
        en: 'Next item — what do you pick?',
        ja: '次のアイテム、何を選ぶ？',
        ko: '다음 아이템 뭐 사?',
      },
      options: [
        {
          label: {
            zh: '看对面输出位的法物/物攻比例，选最值的防御件',
            en: 'Read the enemy carry\'s damage split; pick the optimal defensive item',
            ja: '相手キャリーのダメージ割合を見て最適防具',
            ko: '상대 캐리 데미지 비율 보고 최적 방어구',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '看英雄手感选攻速 / 暴击，跟数据无关',
            en: 'Pick attack speed / crit by feel; ignore the math',
            ja: '感覚で攻速かクリティカル。データは無視',
            ko: '감각으로 공속/치명타. 데이터 무시',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '直接出输出件，赌一波早出威胁',
            en: 'Rush a damage item; bet on early pressure',
            ja: '即攻撃アイテム。早期圧力に賭ける',
            ko: '바로 데미지 아이템. 초반 압박 베팅',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '换装备路线，凭手感再来一发',
            en: 'Audible to a different build path; gut says go',
            ja: 'ビルドルートを変更。感覚で挑戦',
            ko: '빌드 루트 변경. 감으로 베팅',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q22 — Nerve × Flair compound ────────────────────────────────────────
    {
      id: 'hok-q22',
      kind: 'compound',
      text: {
        zh: '残血对面在你脸上嘲讽，你？',
        en: 'Low-HP enemy is BM-emoting in your face. You?',
        ja: '瀕死の敵があなたの目の前で挑発エモートしてる。あなたは？',
        ko: '체력 낮은 적이 네 앞에서 도발 이모트 하고 있다. 너는?',
      },
      options: [
        {
          label: {
            zh: '撤回塔下，不上头',
            en: 'Back to tower. Don\'t bite',
            ja: 'タワーへ撤退。乗らない',
            ko: '타워로 후퇴. 안 넘어간다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '退一步，等他下一次出来再处理，要稳',
            en: 'Step back; pick him off next time he steps up; play clean',
            ja: '一歩引いて、次出てきたら処理。きれいに',
            ko: '한 발 물러나, 다음에 나오면 처리한다. 깔끔하게',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '反向越塔，杀完了我也用同一个嘲讽动作',
            en: 'Counter-dive; mirror his exact emote after the kill',
            ja: '逆方向ダイブ。倒した後に同じエモートで返す',
            ko: '맞 다이브. 잡고 나서 똑같은 이모트로 응수',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '冲过去，闪现 + 大招都给他，秒了截图',
            en: 'Charge in; flash + ult + kill + screenshot',
            ja: '突撃。フラッシュ＋アルト＋撃破＋スクショ',
            ko: '돌진. 점멸 + 궁극기 + 처치 + 스크린샷',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q23 — Bond × Intel compound ─────────────────────────────────────────
    {
      id: 'hok-q23',
      kind: 'compound',
      text: {
        zh: '复盘时间，谁要先反思？',
        en: 'Post-game review time — who reviews themselves first?',
        ja: '反省タイム、最初に振り返るのは誰？',
        ko: '복기 시간, 누가 먼저 자기 반성?',
      },
      options: [
        {
          label: {
            zh: '我先来，列出我哪几个团战站位有问题',
            en: 'I\'ll start — list my positioning errors in three teamfights',
            ja: '自分から。チームファイトの立ち位置ミスを並べる',
            ko: '내가 먼저. 팀전 포지셔닝 실수 나열한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '我先来，但只是凭感觉说哪几把"打得不顺"',
            en: 'I\'ll start — but just gut feel on which fights felt off',
            ja: '自分から。でも感覚で「噛み合わなかった」と言うだけ',
            ko: '내가 먼저. 그런데 감으로 "흐름 안 맞았다" 정도만',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '我有数据，直接指出打野经济落后多少分钟',
            en: 'I have numbers — point out exact gold deficit by minute',
            ja: '数字がある。ジャングルの経済差を分単位で示す',
            ko: '데이터 있다. 정글 골드 차이를 분 단위로 짚는다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '不反思，直接进下一把',
            en: 'No review. Queue the next one',
            ja: '反省なし。次の試合へ',
            ko: '복기 없음. 바로 다음 판',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── Q24 — Intel × Flair compound (double) ───────────────────────────────
    {
      id: 'hok-q24',
      kind: 'compound',
      text: {
        zh: '皮肤限定下架前 24 小时，你？',
        en: '24 hours before a limited skin leaves the store. You?',
        ja: '限定スキン取り下げまで24時間。どうする？',
        ko: '한정 스킨 종료 24시간 전. 너는?',
      },
      options: [
        {
          label: {
            zh: '看皮肤面板的特效演示+价格，理性评估再决定',
            en: 'Open the demo, weigh effects vs price, then decide',
            ja: 'デモを見て、効果と価格を比較してから判断',
            ko: '효과 영상 보고 가격과 비교한 뒤 판단',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '查英雄胜率+使用率，确认这个英雄值得投资',
            en: 'Check hero win rate + pick rate; confirm the hero is worth the spend',
            ja: 'チャンプの勝率＋ピック率を確認、投資価値があるか',
            ko: '챔프 승률 + 픽률 확인. 투자 가치 있는지',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '直接买，限定就是要冲，价格无所谓',
            en: 'Buy now. Limited means buy. Price is irrelevant',
            ja: '即購入。限定は買い。価格は関係ない',
            ko: '바로 산다. 한정은 사야 한다. 가격 무관',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '买完截图发个动态，让朋友圈知道我入手了',
            en: 'Buy + post the purchase confirmation to your feed',
            ja: '購入後に確認画面をSNSに投稿。入手アピール',
            ko: '구매 후 결제 화면 SNS에 올린다. 득템 어필',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q25 — Flair × Mental compound ───────────────────────────────────────
    {
      id: 'hok-q25',
      kind: 'compound',
      text: {
        zh: '你 0/4 了，队友说"你别玩了"，你？',
        en: 'You\'re 0/4 and a teammate says "stop playing." You?',
        ja: '0/4で味方に「もうやめろ」と言われた。あなたは？',
        ko: '0/4인데 팀원이 "그만해"라고 한다. 너는?',
      },
      options: [
        {
          label: {
            zh: '安静继续打，等翻盘了我什么都不说',
            en: 'Quietly keep playing; if we comeback I say nothing',
            ja: '黙って続ける。逆転しても何も言わない',
            ko: '조용히 계속한다. 역전해도 아무 말 안 한다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '不回，内心已经准备给他做面板上的输出对比',
            en: 'No reply; mentally prepping the damage chart to slap him with later',
            ja: '無視。後でダメージグラフで黙らせる準備',
            ko: '무시. 나중에 데미지 차트로 응수할 준비',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '回个"看我下一把吧"，开始走表演路线',
            en: 'Reply "watch this next play" and start the comeback show',
            ja: '「次のプレイを見ろ」と返してパフォーマンス開始',
            ko: '"다음 플레이 봐" 답하고 쇼타임 시작',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '红温了，开始 ping 嘲讽信号+开始打字',
            en: 'Tilted. Open the BM ping rotation and start typing',
            ja: '熱くなった。BMピン連打＋タイピング開始',
            ko: '틸트. BM 핑 연발 + 채팅 시작',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q26 — Tempo × Flair compound ────────────────────────────────────────
    {
      id: 'hok-q26',
      kind: 'compound',
      text: {
        zh: '上半场对线赢，你？',
        en: 'You won the laning phase. Now what?',
        ja: 'レーン戦勝利。次は？',
        ko: '라인전 승리. 이제?',
      },
      options: [
        {
          label: {
            zh: '稳推线，等大龙刷新再打团',
            en: 'Push waves steady; wait for major objective spawn',
            ja: 'ウェーブを安定して押す。大型オブジェクトのリスポーンを待つ',
            ko: '미니언 안정적으로 밀고 대형 오브젝트 리스폰 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '回家做装备先，然后再回线',
            en: 'Back, finish the item, return to lane',
            ja: '一度帰還して装備を完成、それから戻る',
            ko: '귀환해서 아이템 완성하고 복귀',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '立刻越塔，再杀一个，留个表演给观众',
            en: 'Dive again right now; another kill, more highlight footage',
            ja: '即タワーダイブ。もう1キル、ハイライト追加',
            ko: '바로 다이브. 한 명 더 잡아서 하이라이트 추가',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '直接换线去抓另一路，让全场都知道我在 carry',
            en: 'Rotate to another lane immediately; make everyone see I carry',
            ja: '即別レーンへ。全員に俺がキャリーしてると見せる',
            ko: '즉시 다른 라인으로. 모두에게 내가 캐리한다는 걸 보여준다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── Q27 — Nerve × Mental compound ───────────────────────────────────────
    {
      id: 'hok-q27',
      kind: 'compound',
      text: {
        zh: '对面打野连续偷了你的红蓝 buff，你？',
        en: 'Enemy jungler stole both your red and blue buffs back-to-back. You?',
        ja: '敵ジャングラーに赤バフと青バフを連続で奪われた。どうする？',
        ko: '상대 정글러가 레드 블루 버프 둘 다 연속 훔쳤다. 너는?',
      },
      options: [
        {
          label: {
            zh: '换路线发育，反正不是必需的',
            en: 'Reroute farm; those buffs weren\'t essential anyway',
            ja: 'ルート変更で農業。必須じゃない',
            ko: '동선 바꿔서 파밍. 필수는 아니다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '记一下他偷野时间，准备等他再来时蹲',
            en: 'Log his timing; ambush next time he comes',
            ja: '盗むタイミングをメモ。次来たら待ち伏せ',
            ko: '훔치는 타이밍 기록. 다음에 오면 매복',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '反向去他野区把他的 buff 也偷了',
            en: 'Reverse-invade; steal his buffs in turn',
            ja: '逆侵入。彼のバフを奪い返す',
            ko: '역침투. 그의 버프를 훔친다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '直接堵他下次出来的路线，红温了',
            en: 'Camp his next rotation path. Tilt mode',
            ja: '次の動線を待ち伏せ。熱くなった',
            ko: '다음 동선 매복. 틸트 발동',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q28 (peak end) — Bond × Mental compound (double) ────────────────────
    {
      id: 'hok-q28',
      kind: 'compound',
      text: {
        zh: '决胜局，水晶剩 200 血，你这把扛着全队，你？',
        en: 'Match point. Crystal at 200 HP. You\'re carrying the whole team. You?',
        ja: '決勝戦、ネクサスHP200。チーム全員を背負ってる。どうする？',
        ko: '결승전, 넥서스 200 체력. 팀 전체 짊어졌다. 너는?',
      },
      options: [
        {
          label: {
            zh: '冷静喊 ping："集合中路，等我大招好"',
            en: '"All mid, wait for my ult." Calm and direct',
            ja: '冷静にピン：「中央集合、アルト待ち」',
            ko: '냉정하게 핑: "미드 집결, 궁극 대기"',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '红温但还能控住自己，安排好每个人的位置',
            en: 'Tilted but in control; assign positions to each teammate',
            ja: '熱くなってるが制御可能。各メンバーの位置を指示',
            ko: '틸트지만 통제 가능. 팀원 각자 위치 지정',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '不喊，自己一人冲进去，赌一手 1v5',
            en: 'No comms. Solo dive. Bet on a 1v5 closer',
            ja: '声を出さず単独ダイブ。1v5に賭ける',
            ko: '소통 없이 단독 다이브. 1대5 베팅',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '一边骂队友刚才的失误，一边一个人去捅水晶',
            en: 'Trash-talk teammates\' last mistake while soloing the crystal',
            ja: '味方のミスを罵りながら単独でネクサスを叩く',
            ko: '팀원 직전 실수 욕하면서 혼자 넥서스 까러 간다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── Q29 (peak end) — Tempo × Nerve compound (double) ────────────────────
    {
      id: 'hok-q29',
      kind: 'compound',
      text: {
        zh: '比赛 25 分钟，你们劣势，对面在你方高地门前蹲。你？',
        en: 'Minute 25, you\'re losing, enemy camping outside your base gate. You?',
        ja: '25分、劣勢。敵が自陣ハイグラウンドの前で待機してる。どうする？',
        ko: '25분, 불리한 상황. 상대가 우리 본진 앞에서 대기. 너는?',
      },
      options: [
        {
          label: {
            zh: '不出去，等他们打高地，地形优势是我们的',
            en: 'Don\'t engage. Wait for them to push high ground; terrain favors us',
            ja: '出ない。彼らがハイグラウンドに来るのを待つ。地形が有利',
            ko: '안 나간다. 그들이 하이그라운드 칠 때까지 기다린다. 지형 우리 편',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '稳一会，等大招冷却 + 找一个对面的破绽',
            en: 'Stall; recover ults; wait for one mistake from them',
            ja: '時間稼ぎ。アルト回復＋敵のミス待ち',
            ko: '시간 끌기. 궁극 회복 + 그들 실수 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '立刻冲出去抓他们后排，一波翻盘的机会就这一秒',
            en: 'Burst out and lock their carry; comeback window is right now',
            ja: '即飛び出してキャリーを潰す。逆転の窓は今この瞬間',
            ko: '즉시 뛰쳐나가 캐리 잡는다. 역전의 창은 지금이 순간뿐',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '所有人交闪现 + 大招出去，赌一波 5v5',
            en: 'Everyone pops flash + ult; bet the whole game on this fight',
            ja: '全員フラッシュ＋アルト解放、この一戦に全賭け',
            ko: '전원 점멸 + 궁극 풀콜. 이 한 판에 다 건다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── Q30 (peak end) — Intel × Flair compound (double) ────────────────────
    {
      id: 'hok-q30',
      kind: 'compound',
      text: {
        zh: '你刚拿了 MVP，回到了五排群，第一句话是？',
        en: 'You just got MVP. Back in the five-stack group chat. First line?',
        ja: 'MVPを取った。5人パーティのチャットに戻った。最初の一言は？',
        ko: 'MVP 받았다. 5인 파티 채팅방으로 돌아왔다. 첫 마디는?',
      },
      options: [
        {
          label: {
            zh: '"那把团战 23 分钟我大招衔接得不错"——客观数据复盘',
            en: '"That 23-min teamfight my ult chain was tight" — data review',
            ja: '「23分のチームファイト、アルト連携が良かった」——客観的データ反省',
            ko: '"23분 팀전 궁극 연계 좋았다" — 객관적 데이터 복기',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"刚才那把感觉很顺，下一把再战"——靠感觉，没数据',
            en: '"That game just felt right — one more" — gut, no stats',
            ja: '「さっきの試合、感覚良かった。次行く」——感覚、データなし',
            ko: '"방금 게임 느낌 좋았어, 한 판 더" — 감각, 데이터 없음',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '把 MVP 截图发到群里，附上"哎呀这局 carry 不到了"',
            en: 'Post MVP screenshot with "couldn\'t carry harder than this lol"',
            ja: 'MVPスクショ投稿、「キャリーしすぎちゃった」付き',
            ko: 'MVP 스크린샷 + "캐리 너무 했네 ㅋ"',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '直接发 MVP 截图 + 限定皮肤特写 + 一个嘲讽表情',
            en: 'MVP screenshot + limited-skin closeup + BM emote, all in one',
            ja: 'MVPスクショ＋限定スキンの寄り＋挑発エモートを一気に',
            ko: 'MVP 스크린샷 + 한정 스킨 클로즈업 + 도발 이모트 한 번에',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
  ],
};

export default game;
