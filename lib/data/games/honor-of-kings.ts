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
  questions: [],
};

export default game;
