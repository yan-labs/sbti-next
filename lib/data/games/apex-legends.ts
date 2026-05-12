import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'apex-legends',
  title: {
    zh: 'Apex 英雄',
    en: 'Apex Legends',
    ja: 'エーペックスレジェンズ',
    ko: '에이펙스 레전드',
  },
  deck: {
    zh: '你是哪种 Apex 传奇玩家？',
    en: 'What kind of Apex Legends player are you?',
    ja: 'あなたはどんなApexプレイヤー？',
    ko: '당신은 어떤 에이펙스 플레이어인가요?',
  },
  description: {
    zh: '30 道题，测出你的 Apex 英雄玩家风格。8 种原型、6 维雷达、专属玩家身份码——从转点制图师到恶灵传送门小丑，总有一型说中你。',
    en: '30 questions to profile your Apex Legends play style. 8 archetypes, 6-axis radar, a player code — from rotation cartographer to wraith portal clown. Find out which one fits.',
    ja: '30問でエーペックスのプレイスタイルを診断。8タイプ・6軸レーダー・6文字コード付き。ローテーション制図師からワープポータル道化師まで、あなたのタイプを見つけよう。',
    ko: '30문항으로 에이펙스 플레이 스타일 진단. 8가지 유형·6축 레이더·플레이어 코드 포함. 로테이션 지도 제작자부터 워프 포탈 광대까지, 당신의 유형을 찾아보세요.',
  },
  dominantAxes: ['Tempo', 'Flair', 'Bond'] as const,
  archetypes: [
    // ── 1. rotation-cartographer ────────────────────────────────────────────────
    {
      slug: 'rotation-cartographer',
      polarityPattern: {
        Tempo: 'low',
        Flair: 'low',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '转点制图师',
        en: 'Rotation Cartographer',
        ja: 'ローテーション制図師',
        ko: '로테이션 지도 제작자',
      },
      oneLiner: {
        zh: '圈在那边，别打了，转点',
        en: 'Already called the rotation before anyone opened the map',
        ja: 'みんながマップを開く前にローテーションを指示している',
        ko: '팀원이 지도 열기도 전에 이동 방향 잡아놓은 사람',
      },
      description: {
        zh: '小地图永远开着，声音比队友快三秒。枪声一响，你不在乎那场打架谁赢，你在想："圈收在哪，我们是不是已经在错误的方向上了？"你不是风险厌恶者，你只是不信任当下这场交火能带来的回报。你的口头禅是"先转点"；你的死亡原因，九成是队友没跟上。',
        en: 'The minimap is always open, always current. While your team watches the fight, you\'re checking where the ring is closing and mapping two paths out. You\'re not scared of a fight — you\'re skeptical about whether this particular fight has a positive expected value. "Rotate early" is a complete sentence for you. Most of your deaths involve a teammate who decided to push instead.',
        ja: 'ミニマップは常に開いている。チームが戦闘を見ている間、あなたはリングの縮小先と2本の脱出ルートを確認している。戦闘が怖いのではなく、この戦闘がプラスのリターンをもたらすか疑っているんだ。「早めにローテーション」は完結した文章だ。死因のほとんどは、突っ込むことを選んだチームメイトだ。',
        ko: '미니맵은 항상 켜져 있다. 팀원들이 교전 구경할 때 당신은 자기장이 어디로 좁혀지는지, 탈출 루트 두 개를 계산하고 있다. 전투가 무서운 게 아니라, 이 교전이 플러스 기대값인지 의심하는 거다. "로테이션 먼저"는 당신에게 완전한 문장이다. 대부분의 죽음은 돌격을 택한 팀원 때문이다.',
      },
      symptoms: [
        {
          zh: '每次听到枪声，你的第一反应是看小地图，而不是朝声音跑过去',
          en: 'Gunshots nearby make you check the minimap, not the direction of the gunshots',
          ja: '近くで銃声がしたら、まず方向ではなくミニマップを確認する',
          ko: '총소리 들리면 총소리 방향 말고 미니맵부터 확인한다',
        },
        {
          zh: '你能在语音里说清楚"我们现在几点钟方向，圈中心是几点钟方向"，而队友一脸懵',
          en: 'You give callouts in clock positions and ring percentages; teammates say "what does that mean"',
          ja: 'クロックポジションとリング縮小率でコールアウトする。チームメイトは「どういう意味？」と言う',
          ko: '시계 방향과 원 수축률로 콜아웃 한다. 팀원들은 "그게 무슨 말이야"라고 한다',
        },
        {
          zh: '你打过最难的架，不是正面交火，而是说服队友放弃这场打架去转点',
          en: 'The hardest fight you\'ve had wasn\'t a gunfight — it was convincing your teammates to disengage',
          ja: '最も難しかった戦いは銃撃戦ではなく、チームメイトに撤退を納得させることだ',
          ko: '지금까지 가장 어려운 싸움은 총싸움이 아니라 팀원한테 이탈 설득하는 거였다',
        },
        {
          zh: '游戏结束后，你最先想的是"当时如果早五秒转点，最后能拿几分"',
          en: 'Post-match review in your head: "if we rotated fifteen seconds earlier, we had top three"',
          ja: '試合後、頭の中でレビューする「15秒早くローテーションしていれば、トップ3に入れた」',
          ko: '경기 끝나고 머릿속으로 복기한다: "15초 일찍 이동했으면 탑3 갔는데"',
        },
        {
          zh: '你死的时候不怎么骂人，你只是叹气说"就说了转点"',
          en: 'When you die, you don\'t rage. You say "I literally called rotate" and leave it there',
          ja: '死んでもキレない。「ローテーション言ったじゃん」とだけ言う',
          ko: '죽어도 화 안 낸다. "이동하라고 했잖아"라고만 하고 끝낸다',
        },
      ],
      rivalSlug: 'solo-octane',
      bestSquadSlug: 'third-party-strategist',
    },

    // ── 2. loot-hermit ──────────────────────────────────────────────────────────
    {
      slug: 'loot-hermit',
      polarityPattern: {
        Tempo: 'low',
        Flair: 'low',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '物资苦行僧',
        en: 'Loot Hermit',
        ja: '物資苦行僧',
        ko: '루팅 은둔자',
      },
      oneLiner: {
        zh: '一个人舔完三栋楼，队友等你等到圈都收了',
        en: 'Still finishing the third building while the team has been waiting two minutes at the door',
        ja: 'チームがドアで2分待っている間、3棟目の建物を漁っている',
        ko: '팀이 2분째 문 앞에서 기다리는 동안 세 번째 건물 루팅 중',
      },
      description: {
        zh: '你和队友的时间观是两个平行宇宙。他们说"走了"的时候，你还在认真考虑要不要把地板上那把 P2020 也拿走。"舔包"对你来说不是贪婪，是对物资的基本尊重。你相信：一把满配的枪，比三个没有子弹的枪有价值。圈收了？等等，这个房间还有一个箱子。你不慌，因为你打算装备满了再说。',
        en: 'Your teammates leave and you stay. Not out of stubbornness — the building has three more boxes and this P2020 might actually have a clip somewhere. You know the ring is closing. You just believe that walking into the next fight fully stocked is worth fifteen extra seconds. It usually isn\'t. You do it anyway. A loot run is a spiritual practice, and you don\'t rush ceremonies.',
        ja: 'チームメイトは出発し、あなたは残る。頑固さからではない。建物にあと3つ箱があって、このP2020にマガジンがあるかもしれない。リングが縮まっているのはわかってる。でも、完全に装備を整えてから次の戦闘に向かう方が15秒の価値があると思っている。たいていそうじゃない。でもやってしまう。物資漁りは儀式だ。急かすものじゃない。',
        ko: '팀원들은 출발하고 당신은 남는다. 고집이 아니라 건물에 박스가 세 개 더 있고 이 P2020에 클립이 있을 수도 있어서다. 원이 좁혀지는 거 안다. 그냥 완전히 준비하고 다음 교전 가는 게 15초 가치 있다고 생각한다. 대부분은 아니다. 그래도 한다. 루팅은 의식(儀式)이다. 서두르는 거 아니다.',
      },
      symptoms: [
        {
          zh: '你能准确说出每个地图每栋楼的舔包路线，甚至包括二楼和阁楼的刷新点',
          en: 'You know the loot route for every building on every map, including which second-floor corners never spawn anything good',
          ja: '全マップの全建物のルートを知っている。2階のどのコーナーからいいものが出ないかも含めて',
          ko: '전 맵 전 건물 루팅 루트 알고 있다. 2층 어느 구석에서 좋은 게 안 나오는지도 포함해서',
        },
        {
          zh: '死于毒圈的次数，比死于敌人的次数还多，但你觉得每次都很值',
          en: 'You\'ve died to the ring more times than to enemy fire, and every single one of those deaths felt justified in the moment',
          ja: '敵の銃より自陣ダメージで死んだ回数の方が多い。でもその瞬間は毎回正しい選択に思えた',
          ko: '적 총에 죽은 것보다 자기장에 죽은 게 더 많다. 그때마다 그 순간엔 맞는 선택처럼 느껴졌다',
        },
        {
          zh: '你最满意的一把不是吃鸡，是跑路成功带着满配跑进了圈',
          en: 'Your most satisfying match wasn\'t a win — it was arriving at the ring with a full white backpack and two gold attachments',
          ja: '最も満足した試合は優勝ではなく、白バッグいっぱいとゴールドアタッチメント2個を持ってサークルに滑り込んだ回',
          ko: '가장 만족했던 판은 우승이 아니라 흰색 배낭 가득 채우고 골드 부착물 두 개 들고 원 안에 미끄러져 들어간 게임이다',
        },
        {
          zh: '你认为"团队"的定义是：在你舔包的时候帮你把风',
          en: '"Teammate" means someone who watches the door while you finish the building',
          ja: '「チームメイト」とは、あなたが建物を漁る間ドアを見張る人のことだ',
          ko: '"팀원"이란 당신이 건물 다 뒤지는 동안 문 지켜주는 사람이다',
        },
      ],
      rivalSlug: 'slide-jump-evangelist',
      bestSquadSlug: 'rotation-cartographer',
    },

    // ── 3. pinging-poet ─────────────────────────────────────────────────────────
    {
      slug: 'pinging-poet',
      polarityPattern: {
        Tempo: 'low',
        Flair: 'high',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '标记诗人',
        en: 'Pinging Poet',
        ja: 'ピングの詩人',
        ko: '핑 시인',
      },
      oneLiner: {
        zh: '麦克风从不打开，但 ping 用得比任何人都精准',
        en: 'Never touched the mic; runs the whole round on pings alone',
        ja: 'マイクを使わない。ピングだけで一試合を動かす',
        ko: '마이크 한 번도 안 켰는데 핑으로 한 판 다 이끈다',
      },
      description: {
        zh: '你是语音恐惧者，也是 Apex 标记系统的传道人。"这里有物资"是一个 ping，"敌人在那"是一个 ping，"我要去那边"也是一个 ping——三个标记，一段完整的对话。你喜欢 Apex 是因为它允许你做一个高效的无话不说的人。你的队友有时候甚至搞不清你是不是真人还是 AI，直到你在最后关头 ping 了一个他们完全没想到的位置，结果打出了那场比赛最漂亮的包抄。',
        en: 'You don\'t talk. You ping. "Looting here," "enemy spotted," "going here" — three pings carry a full tactical conversation if the listener knows how to read them. You found Apex\'s ping system and felt genuinely seen by a game for the first time. Some teammates wonder if you\'re a bot. They stop wondering when your single "enemy here" ping sets up the cleanest flanking route of the match.',
        ja: '話さない。ピングする。「ここでルート」「敵発見」「ここへ行く」——3つのピングで完全な戦術会話になる、聞き手が読める人なら。Apexのピングシステムを見て、初めてゲームに「分かってもらえた」と感じた。チームメイトはたまに「ボットじゃないか？」と思う。でも一回の「敵ここ」ピングが試合最高のフランク展開を作ったとき、疑いは消える。',
        ko: '말 안 한다. 핑 찍는다. "여기서 루팅," "적 발견," "여기로 간다" — 읽을 줄 아는 사람한테는 핑 세 개가 완전한 전술 대화다. 에이펙스 핑 시스템 보고 처음으로 게임에 "이해받은" 느낌이 들었다. 팀원들이 가끔 봇인가 의심한다. 그러다 핑 하나로 그 판 최고의 플랭크 루트 만들면 의심 사라진다.',
      },
      symptoms: [
        {
          zh: '你能靠颜色和声音分辨每种 ping 的含义，连"已注意"和"正在前往"的区别都门清',
          en: 'You distinguish every ping by color and sound, including the difference between "I hear you" and "I\'m on my way"',
          ja: '全てのピングを色と音で区別できる。「了解」と「向かっています」の違いも含めて',
          ko: '모든 핑을 색깔과 소리로 구분한다. "알겠어"와 "가고 있어"의 차이도 포함해서',
        },
        {
          zh: '你觉得语音里说话的玩家效率太低，三秒能说清的信息，一个 ping 就够了',
          en: 'Voice chat feels wasteful. Whatever takes someone three seconds to say, one ping can handle',
          ja: 'ボイスチャットは非効率だと感じる。3秒かかることがピング1回で済む',
          ko: '보이스챗은 비효율적이다. 3초 걸리는 말이 핑 하나면 된다',
        },
        {
          zh: '有人误标记了你的信号，你会感到一种莫名的领土侵犯感',
          en: 'When a teammate pings over your ping, you feel something that could charitably be called "violated"',
          ja: 'チームメイトが自分のピングを上書きすると、「領土侵害」とでも言うべき感覚がある',
          ko: '팀원이 내 핑 위에 핑 찍으면 "영역 침범"이라고 할 수밖에 없는 감각이 생긴다',
        },
        {
          zh: '你没有说过"跑路了"，你只是 ping 了两次"正在前往"，然后人已经在路上了',
          en: 'You\'ve never announced "I\'m rotating" out loud — you just ping "going here" twice and you\'re already moving',
          ja: '「ローテーションします」と声に出したことはない。「ここへ行く」ピング2回で、もう動いている',
          ko: '"로테이션 한다"고 말한 적 없다. "여기로 간다" 핑 두 번이면 이미 움직이고 있다',
        },
      ],
      rivalSlug: 'wraith-portal-clown',
      bestSquadSlug: 'rotation-cartographer',
    },

    // ── 4. shield-influencer ────────────────────────────────────────────────────
    {
      slug: 'shield-influencer',
      polarityPattern: {
        Tempo: 'low',
        Flair: 'high',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '换甲表演家',
        en: 'Shield Influencer',
        ja: 'シールドパフォーマー',
        ko: '방어구 퍼포머',
      },
      oneLiner: {
        zh: '红甲合成必须录屏，没拍到等于白合成',
        en: 'Found a red shield, popped armor swap animations on, rolled a clip — all before the next fight',
        ja: '赤シールドを見つけてアーマースワップアニメを起動してクリップ録画。次の戦闘前に全部終わる',
        ko: '빨간 방어구 발견하고 스왑 애니메이션 켜고 클립 녹화까지 다음 전투 전에 끝낸다',
      },
      description: {
        zh: '你不只是在玩 Apex，你在制作内容。每次换甲都是一个镜头，每次滑铲都是一个剪辑素材，每次压血线合成红甲都是一段传说级操作回放。你不在乎这把有没有吃鸡，你在乎的是那段换甲的截图传出去够不够好看。你的朋友圈有一半是 Apex 片段，另一半是"让我们看看我刚才做了什么"的截图配文。',
        en: 'You\'re playing a game and producing content at the same time. Armor swaps are transition shots. Slide jumps are B-roll. Red armor crafted at low HP is the main event. Whether the round ends in a win or a wipe, the question is whether the clip was worth sharing. Half your friends have seen your shield swap compilations. The other half are about to.',
        ja: 'ゲームをプレイしながらコンテンツを作っている。アーマースワップはトランジションショット。スライドジャンプはBロール。低HPで赤アーマーを合成するのがメインイベントだ。試合が勝利で終わろうと全滅で終わろうと、問題はそのクリップがシェアする価値があるかだ。友達の半分はシールドスワップコンピレーションを見た。残り半分はこれから見る。',
        ko: '게임 플레이하면서 콘텐츠도 만들고 있다. 방어구 스왑은 트랜지션 샷. 슬라이드 점프는 B롤. 낮은 체력에서 빨간 방어구 합성이 메인 이벤트다. 판이 승리로 끝나든 전멸로 끝나든, 그 클립이 공유할 가치 있는지가 문제다. 친구 절반은 방어구 스왑 모음집 봤다. 나머지 절반은 곧 보게 된다.',
      },
      symptoms: [
        {
          zh: '游戏里按录屏快捷键的次数比开枪的次数还多',
          en: 'You hit the clip button more times per session than you pull the trigger',
          ja: 'セッション中にクリップボタンを押す回数が引き金を引く回数より多い',
          ko: '한 판에 클립 버튼 누르는 횟수가 방아쇠 당기는 횟수보다 많다',
        },
        {
          zh: '你会在交火结束后专门找死亡玩家的红甲，不是因为你需要，是因为你不能让录像里没有一次换甲',
          en: 'You loot for red shields after kills even when your current armor is better, because the swap animation looks clean on video',
          ja: '現在の防具の方が良くても、キル後に赤シールドを漁る。スワップアニメがビデオ映えするから',
          ko: '지금 방어구가 더 좋아도 킬 후에 빨간 방어구 루팅한다. 스왑 애니메이션이 영상에서 예쁘게 나오니까',
        },
        {
          zh: '你一眼能看出哪个高手的视频是假的，因为他的换甲时机不对',
          en: 'You can spot a fake highlight clip in two seconds because the armor swap timing is off',
          ja: 'フェイクハイライトクリップは2秒で見抜ける。アーマースワップのタイミングがズレているから',
          ko: '가짜 하이라이트 클립은 2초 만에 알아본다. 방어구 스왑 타이밍이 어긋나서다',
        },
        {
          zh: '死亡次数多的那把，你不后悔，因为死之前换到了红甲，拍到了',
          en: 'A death doesn\'t bother you if you got the red armor swap on camera first',
          ja: 'カメラに赤シールドスワップが収まっていれば、死んでも気にならない',
          ko: '카메라에 빨간 방어구 스왑 찍혔으면 죽어도 괜찮다',
        },
      ],
      rivalSlug: 'rotation-cartographer',
      bestSquadSlug: 'wraith-portal-clown',
    },

    // ── 5. third-party-strategist ───────────────────────────────────────────────
    {
      slug: 'third-party-strategist',
      polarityPattern: {
        Tempo: 'high',
        Flair: 'low',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '渔翁参谋长',
        en: 'Third-Party Strategist',
        ja: '漁夫戦略家',
        ko: '어부지리 참모장',
      },
      oneLiner: {
        zh: '等枪声打了一半再动手，收益最大化',
        en: 'Counts to three after the fight breaks out, then moves in',
        ja: '戦闘が始まって3秒待ってから動く',
        ko: '전투 시작하고 3초 기다렸다가 움직인다',
      },
      description: {
        zh: '你不是懦弱，你是懂"渔翁"的那个人。两队在打架？你在旁边蹲着，等他们互耗到一半再动手。你的团队从来不是第一个冲进去的，但每次都是那个"恰好赶到"的。你相信：最好的交火是别人打完以后留给你的。不少队友觉得你在耍滑头，只有看过 ALGS 的人知道这叫战术定力。',
        en: 'When two squads are fighting, you wait. Not out of fear — out of math. A team that just burned shields and abilities is worth three times as much as a fresh squad. You count the engagement seconds in your head, note which direction the noise is coming from, and time your push for maximum chaos. "渔翁" (the patient fisherman) is the most accurate word for what you do. Your teammates eventually learn to trust the pause.',
        ja: '2チームが戦闘中、あなたは待つ。恐怖からではなく、計算から。シールドと能力を使い果たしたチームは、新鮮なチームの3倍の価値がある。交戦秒数を頭の中でカウントし、ノイズの方向を確認して、最大混乱のタイミングで突入する。「漁夫の利」があなたのプレイスタイルを最も正確に表す言葉だ。チームメイトはやがてその待機を信頼するようになる。',
        ko: '두 팀이 싸우는 동안 기다린다. 두려움이 아니라 계산이다. 방어구와 스킬을 다 쓴 팀은 신선한 팀보다 세 배 가치 있다. 교전 초 세고, 소음 방향 확인하고, 최대 혼란 타이밍에 들어간다. "어부지리"가 당신이 하는 걸 가장 정확히 표현한다. 팀원들은 결국 그 기다림을 신뢰하게 된다.',
      },
      symptoms: [
        {
          zh: '听到枪声你不是条件反射地往那边跑，你是先判断"这是两队在打还是一队在清箱子"',
          en: 'You don\'t flinch toward gunfire — you assess whether it\'s a two-squad fight or one squad cleaning up',
          ja: '銃声に反射的に向かわない。2チームの戦闘か1チームが掃討しているかを先に判断する',
          ko: '총소리에 반사적으로 달려가지 않는다. 두 팀 교전인지 한 팀이 정리 중인지 먼저 판단한다',
        },
        {
          zh: '你有过三次"等对面打完再进"打出三队终结局面的高光，你把视频存着',
          en: 'You have at least two recorded matches where your team third-partied into a three-squad final and won',
          ja: '3チームによる最終局面にサードパーティして勝利した試合が少なくとも2回ある。録画してある',
          ko: '세 팀 파이널에 어부지리로 들어가서 이긴 판 최소 두 개 있다. 녹화해놨다',
        },
        {
          zh: '你不喜欢主动找第一场架，你觉得"先动手"是给对方留时间',
          en: 'You rarely pick the first fight in a round because "whoever shoots first gives the other squads a free rotation"',
          ja: 'ラウンド最初の戦闘を自分からは始めない。「最初に撃つと他チームに無料ローテーションを提供する」から',
          ko: '판 첫 교전을 먼저 잡는 경우가 드물다. "먼저 쏘면 다른 팀한테 무료 로테이션 주는 거"니까',
        },
        {
          zh: '被人第三方了你不骂，你只会说"确实，换我也这么干"',
          en: 'When you get third-partied, you don\'t complain — you say "fair play, I\'d do the same"',
          ja: 'サードパーティされても文句を言わない。「フェアプレイ、自分も同じことをする」と言う',
          ko: '어부지리 당해도 불평 안 한다. "맞아, 나라도 그렇게 했겠다"고 한다',
        },
      ],
      rivalSlug: 'loot-hermit',
      bestSquadSlug: 'rotation-cartographer',
    },

    // ── 6. solo-octane ──────────────────────────────────────────────────────────
    {
      slug: 'solo-octane',
      polarityPattern: {
        Tempo: 'high',
        Flair: 'low',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '独狼奔跑者',
        en: 'Solo Octane',
        ja: 'ソロランナー',
        ko: '솔로 달리기꾼',
      },
      oneLiner: {
        zh: '跳板比队友先到，地图另一头见',
        en: 'The jump pad went off; teammates will figure out the direction',
        ja: 'ジャンプパッドは起動した。方向はチームメイトが考える',
        ko: '점프 패드 발동했다. 방향은 팀원들이 파악하면 된다',
      },
      description: {
        zh: '你喜欢 Octane 不是因为他的技能设计，是因为他和你有同一套处世哲学：快、再快、不等人。弹射板一放，你已经在飞了，队友在哪你没时间想。你不是故意无视团队，你只是处于一种"先去探路，问题反正能解决"的持续信念中。你死亡的位置，通常和你的队友相距两栋楼以上。',
        en: 'Octane\'s jump pad is the perfect tool for you: it launches the team forward whether they\'re ready or not. You don\'t wait for green-light calls. You see an angle and you take it, and the team can follow or not — they usually find you downed behind a supply bin thirty meters ahead. You\'re not ignoring them. You just process speed as safety and assume everyone else does too.',
        ja: 'オクタンのジャンプパッドはあなたにとって完璧なツールだ。準備ができていようとなかろうと、チームを前に送り出せる。ゴーサインを待たない。角度を見つけたら取る。チームはついてくるかどうか自由だ。たいていサプライボックスの後ろで30メートル先でダウンしているあなたを見つける。無視しているわけではない。スピードを安全と感じていて、みんなも同じだと思っているだけだ。',
        ko: '옥테인 점프 패드는 당신에게 완벽한 도구다. 준비됐든 안 됐든 팀을 앞으로 보낸다. 출발 신호 기다리지 않는다. 각도 보이면 잡고, 팀은 따라오든 말든 자유다. 대부분 서플라이 박스 뒤에서 30미터 앞에 쓰러진 당신을 발견한다. 무시하는 게 아니다. 속도가 안전이라고 느끼고, 다들 그렇다고 생각하는 거다.',
      },
      symptoms: [
        {
          zh: '你激活跳板的时候没想过方向，因为方向是速度到了自然确定的事',
          en: 'You launch the jump pad before checking where it\'s pointing, because direction is a downstream problem',
          ja: 'どこに向いているか確認せずにジャンプパッドを起動する。方向はあとの問題だから',
          ko: '어디 향하는지 확인 안 하고 점프 패드 발동한다. 방향은 나중 문제니까',
        },
        {
          zh: '队友说"等一下"，你已经听不见了，因为你移速太快，语音信号掉了',
          en: 'Teammates say "wait up" at the moment you clear the building — you were already gone',
          ja: 'チームメイトが「待って」と言ったとき、あなたはすでに建物を抜けていた',
          ko: '팀원이 "기다려" 할 때 당신은 이미 건물 빠져나갔다',
        },
        {
          zh: '你倒下后，队友赶来救你的路上又发现了一场新的交火，这已经是今天第三次了',
          en: 'Your teammates walked into a new fight on the way to res you — this is the third time today',
          ja: 'チームメイトが蘇生に向かう途中で別の戦闘に巻き込まれた。今日3回目だ',
          ko: '팀원이 살리러 가다가 새 교전 만났다. 오늘 세 번째다',
        },
        {
          zh: '你认为"团队合作"的本质是队友跟上你的节奏，而不是你等他们',
          en: '"Teamwork" to you means teammates learning to match your pace, not you slowing down',
          ja: '「チームワーク」とは、チームメイトが自分のペースに合わせることで、自分が遅くなることではない',
          ko: '"팀워크"는 팀원들이 당신 페이스에 맞추는 거지, 당신이 느려지는 게 아니다',
        },
        {
          zh: '游戏结束后，你总能说出"如果当时队友跟上来，那把是我们的"',
          en: 'After every loss you can point to exactly when the team failed to follow you, and that\'s the cause',
          ja: '負けるたびに、チームが自分についてこなかった瞬間を正確に指摘できる。それが原因だ',
          ko: '패배할 때마다 팀이 따라오지 못한 정확한 순간을 짚어낼 수 있다. 그게 원인이다',
        },
      ],
      rivalSlug: 'rotation-cartographer',
      bestSquadSlug: 'slide-jump-evangelist',
    },

    // ── 7. slide-jump-evangelist ────────────────────────────────────────────────
    {
      slug: 'slide-jump-evangelist',
      polarityPattern: {
        Tempo: 'high',
        Flair: 'high',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '滑铲布道者',
        en: 'Slide-Jump Evangelist',
        ja: 'スライドジャンプ伝道師',
        ko: '슬라이드 점프 전도사',
      },
      oneLiner: {
        zh: '场上最好看的移动是我的，这条路你们学一下',
        en: 'Taught two teammates the bunny hop this session; a third is already watching',
        ja: 'このセッションで2人にバニーホップを教えた。3人目はもう見ている',
        ko: '이번 판에 두 명한테 버니합 가르쳤다. 세 번째는 이미 보고 있다',
      },
      description: {
        zh: '你把 Apex 当一门移动艺术来练。滑铲接跳跃、兔跳保速、贴墙弹射——这些不是技巧，是你对这个游戏的基本态度。你觉得一个不会移动技术的玩家就像一个不会跑位的球员：会打，但不算真的懂。Season 29 Axle 的新滑铲路线你当天就研究完了，你的队友还没搞清楚那张新地图在哪个方向。你不强求他们跟上，但你会默默把自己的移动片段发到群里，"学一下。"',
        en: 'Movement tech is your religion. Slide jump into a strafe, maintain velocity through a door, wall-bounce to clear a gap — these aren\'t tricks, they\'re the vocabulary of the game as it was meant to be played. Season 29 Axle\'s Nitro Gates gave you new material the day the patch dropped, and you had routes mapped before most players finished reading the patch notes. You don\'t preach loudly. You clip and share, and let the footage do the work.',
        ja: '移動テクは信仰だ。スライドジャンプからストレーフ、ドアを通り抜けながら速度維持、隙間を越えるウォールバウンス——これらはトリックではなく、このゲームが本来意図した語彙だ。Season 29AxleのNitroゲートはパッチ当日に新素材をくれた。ほとんどのプレイヤーがパッチノートを読み終える前にルートを完成させていた。大声で説教しない。クリップしてシェアする。映像が語る。',
        ko: '움직임 기술은 신앙이다. 슬라이드 점프에서 스트레이프, 문 통과하면서 속도 유지, 틈새 넘는 월바운스 — 이건 트릭이 아니라 이 게임이 원래 의도한 어휘다. Season 29 Axle의 Nitro 게이트는 패치 당일 새 소재를 줬고, 대부분 플레이어가 패치 노트 다 읽기 전에 루트 완성했다. 크게 설교 안 한다. 클립하고 공유한다. 영상이 말한다.',
      },
      symptoms: [
        {
          zh: '进入建筑物时，你不走门，你跳过窗，不是因为更快，是因为更好看',
          en: 'You enter buildings through windows when the door is closer, because the jump arc looks better',
          ja: 'ドアが近くても窓から建物に入る。ジャンプアークの方がかっこいいから',
          ko: '문이 더 가까워도 창문으로 건물 들어간다. 점프 곡선이 더 멋있으니까',
        },
        {
          zh: '你教了三个队友如何做兔跳，其中一个在学会当天就比你做得流畅',
          en: 'You taught a teammate bunny hops and they were smoother than you within the same session',
          ja: 'バニーホップを教えたチームメイトが、同じセッション内に自分より滑らかになった',
          ko: '팀원한테 버니합 가르쳤는데 같은 판에서 당신보다 더 부드러워졌다',
        },
        {
          zh: '你最引以为傲的不是击杀，是那次滑铲绕过三个人完成包抄的完美走位',
          en: 'Your proudest highlight isn\'t a kill — it\'s the flanking slide where you stayed airborne for exactly three seconds',
          ja: '最も誇りに思うハイライトはキルではなく、ちょうど3秒間空中にいたフランクスライドだ',
          ko: '가장 자랑스러운 하이라이트는 킬이 아니라 정확히 3초간 공중에 있었던 플랭크 슬라이드다',
        },
        {
          zh: '你记得 Axle 传奇发布的日期，因为你第一天就把他的技能融入了自己的移动路线',
          en: 'You remember the day Axle launched because you had his Nitro Gate routes built into your movement before the week was out',
          ja: 'Axleのリリース日を覚えている。その週が終わる前にNitroゲートルートを移動に組み込んでいたから',
          ko: 'Axle 출시일 기억한다. 그 주 끝나기 전에 Nitro 게이트 루트를 움직임에 통합했으니까',
        },
      ],
      rivalSlug: 'loot-hermit',
      bestSquadSlug: 'solo-octane',
    },

    // ── 8. wraith-portal-clown ──────────────────────────────────────────────────
    {
      slug: 'wraith-portal-clown',
      polarityPattern: {
        Tempo: 'high',
        Flair: 'high',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '恶灵传送门小丑',
        en: 'Wraith Portal Clown',
        ja: 'ワープポータル道化師',
        ko: '워프 포탈 광대',
      },
      oneLiner: {
        zh: '门开错三次也继续开，这次肯定对',
        en: 'Third wrong portal of the match, and still absolutely certain the fourth one is right',
        ja: '今試合3回目の誤ったポータル。それでも4回目は絶対正しいと確信している',
        ko: '이번 판 세 번째 잘못 열린 포탈. 그래도 네 번째는 확실히 맞다고 확신한다',
      },
      description: {
        zh: '你开门之前脑子里有一个完美计划。门这头是安全区，门那头是撤退路线，理论上无懈可击。理论上。现实是门那头也在爆炸，你从传送门里跳出来直接进了敌人的瞄准镜。你已经这样死过三次了，但你对下一个门依然充满信心。这种乐观本身是一种才能——只是方向经常不对。你的队友爱你，但他们在你放门之前会先后退一步。',
        en: 'The portal plan is perfect in your head. Entry point: safe. Exit point: strategic. Timing: correct. What actually happens is the exit point is inside the enemy squad\'s rotation and you materialize directly in front of someone\'s R-301. This is the third time this match. The portal closes. Your teammates pay respects. Five minutes later you open another one with identical confidence, and honestly? Sometimes it works.',
        ja: 'ポータルプランは頭の中で完璧だ。入口：安全。出口：戦略的。タイミング：正確。実際には出口が敵チームのローテーション内にあって、誰かのR-301の正面に現れる。今試合3回目だ。ポータルが閉じる。チームメイトが敬意を表する。5分後、同じ自信で別のポータルを開く。正直なところ？たまに上手くいく。',
        ko: '포탈 계획은 머릿속에서 완벽하다. 입구: 안전. 출구: 전략적. 타이밍: 정확. 실제로는 출구가 적 팀 로테이션 안이고, 누군가의 R-301 정면에 나타난다. 이번 판 세 번째다. 포탈 닫힌다. 팀원들이 경의를 표한다. 5분 후 같은 자신감으로 다른 포탈 연다. 솔직히? 가끔 된다.',
      },
      symptoms: [
        {
          zh: '你的每次放门都有完整的理由，每次都讲得通，只是结果经常意外',
          en: 'Every portal placement has a valid justification you can explain afterward. The explanation always makes sense. The portal is still wrong.',
          ja: '全てのポータル設置には事後に説明できる正当な理由がある。説明は常に筋が通っている。ポータルはそれでも間違っている。',
          ko: '모든 포탈 배치에 나중에 설명할 수 있는 타당한 이유가 있다. 설명은 항상 말이 된다. 포탈은 그래도 틀렸다.',
        },
        {
          zh: '你的队友在你开门前已经下意识地往后退了，这是一种条件反射',
          en: 'Your teammates take an involuntary step back every time you start the portal animation',
          ja: 'チームメイトはポータルアニメーションが始まるたびに無意識に一歩後退する',
          ko: '팀원들이 포탈 애니메이션 시작할 때마다 무의식적으로 한 발 물러선다',
        },
        {
          zh: '有一次门开对了，你至今把那把视频当精神支柱',
          en: 'One time the portal was correct. You have the clip. It carries you through the other four matches.',
          ja: '一度だけポータルが正解だった。クリップがある。他の4試合を乗り越えるための精神的支えだ。',
          ko: '한 번 포탈이 맞았다. 클립 있다. 다른 네 판 버티는 정신적 지주다.',
        },
        {
          zh: '你认为门开错不是你的问题，是队友跟进时机不对',
          en: 'A wrong portal isn\'t a wrong portal — it\'s a correct portal that your team entered at the wrong time',
          ja: '誤ったポータルは誤ったポータルではない。正しいポータルをチームが間違ったタイミングで使っただけだ。',
          ko: '잘못된 포탈은 잘못된 포탈이 아니다. 팀이 잘못된 타이밍에 들어간 올바른 포탈이다.',
        },
        {
          zh: '你死了以后第一件事是在旁观模式里找你那个门，看看它到底有多少人用了',
          en: 'After dying you spend observer mode checking whether anyone went through your portal and how it turned out',
          ja: '死後、観戦モードで自分のポータルを誰かが使ったか、どうなったかを確認する',
          ko: '죽고 나서 관전 모드에서 누가 내 포탈 썼는지, 어떻게 됐는지 확인한다',
        },
      ],
      rivalSlug: 'pinging-poet',
      bestSquadSlug: 'shield-influencer',
    },
  ],
  questions: [
    // ── ANCHOR Q1: Tempo (peak opener — jumpmaster scenario) ─────────────────
    {
      id: 'apex-a01',
      kind: 'anchor',
      text: {
        zh: '掉落倒计时归零，跳伞领航权在你手上。你怎么选？',
        en: 'Jumpmaster countdown hits zero. The drop is yours to call. What do you do?',
        ja: 'ジャンプマスターのカウントダウンがゼロになった。降下先を決めるのはあなただ。どうする？',
        ko: '점프마스터 카운트다운 끝. 낙하 지점을 결정하는 건 당신이다. 어떻게 한다?',
      },
      options: [
        {
          label: {
            zh: '直接跳热门点，没有物资就没有打架资格',
            en: 'Drop hot. No gear, no right to fight — earn it in the first ten seconds.',
            ja: '熱いドロップポイントに直行。装備なければ戦う資格なし — 最初の10秒で稼げ。',
            ko: '핫 드랍 직행. 장비 없으면 싸울 자격 없다 — 처음 10초에 벌어라.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先看圈中心在哪，定一个既有物资又顺路转点的地方',
            en: 'Check where the ring is closing first. Pick a spot with decent loot on the rotation path.',
            ja: 'まずリングの縮小先を確認する。ルート上でそこそこ物資が出る場所を選ぶ。',
            ko: '자기장이 어디로 좁혀지는지 먼저 확인. 로테이션 경로에 있는 루팅 장소 선택.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '队友在哪我就跟去哪，我不挑地方',
            en: 'Follow wherever the team goes. Location is their call, not mine.',
            ja: 'チームについていく。場所の選択はチームに任せる。',
            ko: '팀이 어디 가든 따라간다. 장소 결정은 팀 몫이다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '手速快的那个人会先按，反正也不是真的我来选',
            en: 'Whoever clicks fastest will overrule me anyway. I\'m technically in charge but realistically not.',
            ja: '結局、一番早くクリックした人が勝つ。名目上は自分がジャンプマスターだが実際は違う。',
            ko: '어차피 제일 빨리 클릭한 사람이 이긴다. 명목상은 내가 점프마스터지만 현실은 아니다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q2: Tempo ─────────────────────────────────────────────────────
    {
      id: 'apex-a02',
      kind: 'anchor',
      text: {
        zh: '你们团队附近有枪声。战斗已经开打两秒了。',
        en: 'Gunfire nearby. A fight has been going for two seconds.',
        ja: '近くで銃声。戦闘が2秒続いている。',
        ko: '근처에서 총소리. 교전이 2초째 지속 중이다.',
      },
      options: [
        {
          label: {
            zh: '立刻压进去，现在是最乱的时候，正好是我们的机会',
            en: 'Push immediately. This second is the most chaotic — exactly when to move.',
            ja: '今すぐ攻め込む。今が最も混乱している瞬間 — 動くタイミングだ。',
            ko: '바로 밀고 들어간다. 지금이 제일 혼란스러운 순간 — 움직일 타이밍이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等一等，听一听，算一算双方打了多久再决定',
            en: 'Wait, listen, estimate how long both squads have been fighting before deciding.',
            ja: '待って、聞いて、両チームがどれだけ戦っているか推定してから決める。',
            ko: '기다리고, 듣고, 양 팀이 얼마나 싸웠는지 추정하고 결정한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '离枪声反方向走，不是我们的战斗',
            en: 'Walk the other direction. Not our fight.',
            ja: '銃声と反対方向に歩く。自分たちの戦闘じゃない。',
            ko: '총소리 반대 방향으로 걷는다. 우리 교전 아니다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '标记一下枪声方向然后推进，先占地形',
            en: 'Ping the direction and push. Claim the high ground before the surviving squad does.',
            ja: '方向にピングしてから進む。生き残ったチームより先に高台を取る。',
            ko: '방향 핑 찍고 밀어간다. 살아남은 팀보다 먼저 고지를 잡는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q3: Flair ─────────────────────────────────────────────────────
    {
      id: 'apex-a03',
      kind: 'anchor',
      text: {
        zh: '你刚成功合成了一块红甲。录屏开着吗？',
        en: 'You just crafted a red shield at low HP. Is the recording running?',
        ja: '低体力で赤シールドを合成した。録画は回ってる？',
        ko: '낮은 체력에서 빨간 방어구를 합성했다. 녹화 중인가?',
      },
      options: [
        {
          label: {
            zh: '当然，录屏常开，这一段肯定要剪进去',
            en: 'Always recording. This clip is going in the next compilation.',
            ja: 'もちろん常に録画中。このクリップは次のコンピレーションに入れる。',
            ko: '항상 녹화 중. 이 클립은 다음 모음집에 들어간다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '没开，我只在乎合成成功没有，不在乎好不好看',
            en: 'Not running. I care about surviving the swap, not whether it looks good.',
            ja: '録画してない。スワップを乗り切ることだけに集中してる。見た目は関係ない。',
            ko: '안 켰다. 스왑 성공이 중요하지 예쁘게 나오는 건 관심 없다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '合成完了回头想了想，悔恨地打开了录屏软件',
            en: 'Crafted it, then regretted not recording. Opened the software two seconds too late.',
            ja: '合成してから後悔して録画ソフトを開いた。2秒遅かった。',
            ko: '합성하고 나서 후회하며 녹화 소프트웨어 열었다. 2초 늦었다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不录，但我会记住这次，下次记得开',
            en: 'Not recording, but I\'ll remember this one and set up better next time.',
            ja: '録画してないが、この機会を覚えておいて次は準備する。',
            ko: '안 켰는데 이건 기억해두고 다음엔 준비할 거다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── ANCHOR Q4: Flair ─────────────────────────────────────────────────────
    {
      id: 'apex-a04',
      kind: 'anchor',
      text: {
        zh: '你可以用一条直路跑过去，也可以绕一段滑铲接跳跃。哪个？',
        en: 'Straight path in front of you. There\'s also a longer line with a slide-jump arc. Which one?',
        ja: '目の前に直線ルートがある。スライドジャンプのアークもある。どっちを選ぶ？',
        ko: '앞에 직선 경로가 있다. 슬라이드 점프 아크로 가는 더 긴 루트도 있다. 어느 쪽?',
      },
      options: [
        {
          label: {
            zh: '直路。快就是王道，好看是浪费时间',
            en: 'Straight path. Fast is king. Pretty is wasted time.',
            ja: '直線。速さが正義。かっこよさは時間の無駄。',
            ko: '직선. 빠른 게 최고다. 예쁜 건 시간 낭비.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '滑铲线。移速差不多，但好看，而且练移动技术必须用真实场景',
            en: 'Slide-jump line. Speed is similar but it looks better and this is how you train movement.',
            ja: 'スライドジャンプライン。速さはほぼ同じだが見栄えがいい。移動の練習にもなる。',
            ko: '슬라이드 점프 라인. 속도 비슷한데 더 멋있고 움직임 훈련이기도 하다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '看情况，如果不赶时间我会选好看那条',
            en: 'Depends on urgency. If there\'s no rush, I take the prettier one.',
            ja: '状況による。急いでなければ見栄えのいい方を取る。',
            ko: '상황에 따라. 급하지 않으면 예쁜 쪽 선택.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '两个都不选，我在原地想半秒然后乱按了一个',
            en: 'Neither, really. I hesitated half a second and pressed something randomly.',
            ja: 'どちらでもない。半秒迷ってランダムに選んだ。',
            ko: '둘 다 아님. 반초 망설이다가 아무렇게나 눌렀다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── ANCHOR Q5: Bond (peak opener — squad coordination) ───────────────────
    {
      id: 'apex-a05',
      kind: 'anchor',
      text: {
        zh: '队友倒地，救援需要五秒钻出掩体。此刻你们三个人各有不同判断。',
        en: 'Teammate is down. A res takes five seconds in the open. Three of you have different reads.',
        ja: 'チームメイトがダウン。蘇生には5秒かかるが遮蔽物がない。3人それぞれ判断が違う。',
        ko: '팀원 다운. 부활에 5초 걸리는데 엄폐물이 없다. 세 명이 각자 다른 판단을 하고 있다.',
      },
      options: [
        {
          label: {
            zh: '我来救，其他人掩护，三个人一起协调才能出来',
            en: 'I res, others cover. We coordinate or nobody comes out of this.',
            ja: '自分が蘇生、他は援護。協調しなければ誰も生き残れない。',
            ko: '내가 살리고 나머지는 엄호. 협조 안 하면 아무도 못 나온다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '叫两个人先撤，等安全窗口再救，不能三个人全折进去',
            en: 'Call the other two back first. Wait for a safe window. Can\'t lose all three.',
            ja: '2人を先に下がらせる。安全なタイミングを待つ。3人全員を失うわけにはいかない。',
            ko: '두 명 먼저 물러서게 한다. 안전한 창구 기다린다. 셋 다 잃으면 안 된다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '我先找个好位置，队友那边爱咋搞咋搞',
            en: 'I\'m finding a better position. What they do over there is their call.',
            ja: '自分はいいポジションを探す。向こうでチームがどうするかは彼らの決断だ。',
            ko: '나는 더 좋은 위치 잡는다. 저쪽에서 팀이 어떻게 할지는 그들 결정.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '直接自己冲进去救，三分都值不了这段等待',
            en: 'Rush in and res alone. Any delay costs more than five seconds of exposure.',
            ja: '一人で突っ込んで蘇生する。待機コストは5秒の露出より高い。',
            ko: '혼자 돌진해서 살린다. 기다리는 비용이 5초 노출보다 크다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── ANCHOR Q6: Bond ──────────────────────────────────────────────────────
    {
      id: 'apex-a06',
      kind: 'anchor',
      text: {
        zh: '你在最后圈开始前找到了红甲，但只有一件。队友也需要护甲升级。',
        en: 'You find a red shield before the final ring. Only one. A teammate needs an armor upgrade too.',
        ja: '最終リング前に赤シールドを発見。1枚しかない。チームメイトも防具のアップグレードが必要だ。',
        ko: '마지막 자기장 전에 빨간 방어구 하나 발견. 팀원도 방어구 업그레이드가 필요하다.',
      },
      options: [
        {
          label: {
            zh: '给队友，他下盘打得比我稳',
            en: 'Give it to the teammate. They\'ve been more solid this match.',
            ja: 'チームメイトに渡す。この試合での安定感が高い。',
            ko: '팀원에게 준다. 이번 판에서 더 안정적이었다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '留着，红甲在我手上能发挥最大价值',
            en: 'Keep it. Red armor in my hands gives the team the best return.',
            ja: '自分が持つ。自分の手の方がチームにとって最大のリターンになる。',
            ko: '가진다. 내 손에 있을 때 팀 리턴이 가장 크다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '先合成，合成完再分配其他位置的物资',
            en: 'Craft it first, then redistribute other loot around the squad.',
            ja: 'まず合成して、その後チームで他の物資を再配分する。',
            ko: '먼저 합성하고 나서 다른 루팅을 팀 내에서 재분배한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '各自找各自的，这种事没必要协调',
            en: 'Everyone finds their own gear. No point coordinating this.',
            ja: 'それぞれが自分の装備を探す。これを協調する必要はない。',
            ko: '각자 자기 장비 찾는다. 이걸 협조할 필요 없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── ANCHOR Q7: Nerve ─────────────────────────────────────────────────────
    {
      id: 'apex-a07',
      kind: 'anchor',
      text: {
        zh: '最后三队。你们满状态，另外两队在打。要不要进去抢？',
        en: 'Final three squads. Your team is full health. Two other squads are mid-fight. Go in?',
        ja: '最終3チーム。自チームは満タン。他の2チームが交戦中だ。突入する？',
        ko: '마지막 세 팀. 내 팀은 풀피. 다른 두 팀이 교전 중이다. 들어갈까?',
      },
      options: [
        {
          label: {
            zh: '进，现在是最好时机，拖就是给别人机会',
            en: 'Go. This is the best window. Waiting hands them the next fight for free.',
            ja: '行く。今が最高のタイミングだ。待てば次の戦闘を向こうに譲ることになる。',
            ko: '간다. 지금이 최고 타이밍이다. 기다리면 다음 교전 공짜로 준다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等一波，等其中一队被清掉再选择对手',
            en: 'Wait one cycle. Let one squad get wiped before choosing who to fight.',
            ja: 'もう少し待つ。1チームが全滅してから相手を選ぶ。',
            ko: '한 사이클 기다린다. 한 팀 전멸하고 나서 상대 선택한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '绕到圈中心占位，让两队来撞我',
            en: 'Rotate to ring center and hold high ground. Let both squads walk into us.',
            ja: 'サークル中心に移動して高台を確保。両チームをこちらに歩かせる。',
            ko: '자기장 중심으로 이동해서 고지 잡는다. 두 팀이 우리한테 걸어오게 한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接弹射板进去，三队同时存在才好玩',
            en: 'Jump pad right in. Three squads colliding at once is what this game was made for.',
            ja: 'ジャンプパッドで突っ込む。3チームが同時に衝突するのがこのゲームの醍醐味だ。',
            ko: '점프 패드로 바로 들어간다. 세 팀이 동시에 충돌하는 게 이 게임의 묘미다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q8: Nerve ─────────────────────────────────────────────────────
    {
      id: 'apex-a08',
      kind: 'anchor',
      text: {
        zh: '你扫描到一个不稳定的位置，可以出手但风险很高。',
        en: 'You spot an unsupported enemy in a risky angle. High damage potential, high exposure.',
        ja: '不安定なポジションの敵を発見。高ダメージ可能性、高露出リスク。',
        ko: '불안정한 위치의 적 발견. 높은 피해 가능성, 높은 노출 위험.',
      },
      options: [
        {
          label: {
            zh: '直接上，打就完了，打完再撤',
            en: 'Commit. Trade and disengage. Thinking too long just costs position.',
            ja: '行く。ダメージ交換して離脱。考えすぎるとポジションを失う。',
            ko: '간다. 교전하고 이탈. 너무 오래 생각하면 위치 잃는다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '先观察一轮再说，搞不好对面有埋伏',
            en: 'Observe one cycle. Could be bait. Better to confirm before committing.',
            ja: '1サイクル観察してから。罠かもしれない。確認してから動く方がいい。',
            ko: '한 사이클 관찰 먼저. 함정일 수도 있다. 확인하고 움직이는 게 낫다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '标记给队友，让他们判断要不要打',
            en: 'Ping it for the team and let them call whether to engage.',
            ja: 'チームにピングして、交戦するかどうか判断させる。',
            ko: '팀에 핑 찍고 교전 여부 판단하게 한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先绕后再出手，风险归风险，入射角更重要',
            en: 'Flank first, then commit. Risk is risk, but angle matters more.',
            ja: '先にフランクしてから動く。リスクはリスクだが、角度の方が重要だ。',
            ko: '먼저 플랭크하고 나서 교전. 위험은 위험이지만 각도가 더 중요하다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q9: Intel ─────────────────────────────────────────────────────
    {
      id: 'apex-a09',
      kind: 'anchor',
      text: {
        zh: '队友说"我感觉那楼里面有人"。你怎么处理这条信息？',
        en: 'Teammate says "I feel like there\'s someone in that building." How do you handle this?',
        ja: 'チームメイトが「あの建物に誰かいる気がする」と言った。この情報をどう扱う？',
        ko: '팀원이 "저 건물에 누가 있는 것 같아"라고 한다. 이 정보를 어떻게 처리하나?',
      },
      options: [
        {
          label: {
            zh: '直接绕着建筑扫一圈，用脚步声判断',
            en: 'Circle the building and listen for footsteps. Confirm before acting.',
            ja: '建物を一周して足音を聞く。行動前に確認する。',
            ko: '건물 주변 돌면서 발소리 듣는다. 행동 전에 확인한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '"感觉"不算数，有声音、有脚步、有血痕才算',
            en: '"Feeling" doesn\'t count. I need sound, footsteps, or blood trail before I act.',
            ja: '「感じ」では動かない。音、足音、血痕があって初めて動く。',
            ko: '"느낌"은 안 된다. 소리, 발소리, 혈흔이 있어야 움직인다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '信了，我进去看',
            en: 'Trusted it. Going in to check.',
            ja: '信じた。中に入って確認する。',
            ko: '믿었다. 들어가서 확인한다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '我也有这种感觉——主要是因为我们五分钟没遇到人了',
            en: 'I have the same feeling, mostly because we haven\'t seen anyone in five minutes.',
            ja: '自分も同じ感じがする — 主に5分間誰とも会っていないから。',
            ko: '나도 그 느낌 있다 — 주로 5분째 아무도 못 만났으니까.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q10: Intel ────────────────────────────────────────────────────
    {
      id: 'apex-a10',
      kind: 'anchor',
      text: {
        zh: '游戏后你会回放录像、看击杀数据，还是凭感觉记住今天打得好不好？',
        en: 'After a session, do you review VODs and stats, or remember how the game felt?',
        ja: 'セッション後にVODやデータを確認するか、ゲームの感触で覚えているか？',
        ko: '게임 후 VOD와 통계를 확인하나, 아니면 게임이 어떻게 느껴졌는지로 기억하나?',
      },
      options: [
        {
          label: {
            zh: '我会看击杀数据，找自己的问题点',
            en: 'I check stats and kill data. Find my own problem areas.',
            ja: '統計とキルデータを確認する。自分の問題点を見つける。',
            ko: '통계와 킬 데이터 확인한다. 내 문제 영역 찾는다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '凭手感记，我知道哪把打得好，不需要数字确认',
            en: 'I know which sessions felt right. Numbers don\'t tell me more than the feel does.',
            ja: '感触で覚える。どのセッションがよかったか分かる。数字より感触の方が多くを語る。',
            ko: '느낌으로 기억한다. 어느 판이 잘 됐는지 안다. 숫자가 느낌보다 더 말해주진 않는다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '只看能不能跑图的数据，比如移速和区域覆盖',
            en: 'Only check movement data: did I cover the right areas at the right times?',
            ja: '移動データだけ確認する。正しいエリアを正しいタイミングでカバーできたか？',
            ko: '움직임 데이터만 확인한다. 맞는 타이밍에 맞는 구역 커버했는지?',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '啥也不看，我游戏打完就关了，感觉还行就行',
            en: 'Nothing. Close the game and call it. "Felt fine" is enough review.',
            ja: '何も見ない。ゲームを閉じて終わり。「まあよかった」で十分なレビューだ。',
            ko: '아무것도 안 본다. 게임 끄고 끝. "괜찮았어"면 충분한 복기다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q11: Mental ───────────────────────────────────────────────────
    {
      id: 'apex-a11',
      kind: 'anchor',
      text: {
        zh: '队友弹射板把你发射进了对面阵地。你在飞行中的第一反应？',
        en: 'Your teammate\'s jump pad launched you directly into the enemy squad. You\'re mid-air.',
        ja: 'チームメイトのジャンプパッドが敵チームに向けて自分を発射した。今空中にいる。',
        ko: '팀원 점프 패드가 당신을 적 팀 쪽으로 발사했다. 지금 공중이다.',
      },
      options: [
        {
          label: {
            zh: '冷静找落点，看看能不能反客为主',
            en: 'Stay calm, find a landing spot, see if I can flip the situation.',
            ja: '冷静に着地点を探す。状況をひっくり返せるか確認する。',
            ko: '침착하게 착지 지점 찾는다. 상황을 뒤집을 수 있는지 본다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '边飞边骂，但骂完了还是会想怎么拉扯',
            en: 'Curse mid-flight. Then immediately think about how to fight out of it.',
            ja: '飛行中に悪態をつく。その後すぐに戦い方を考える。',
            ko: '비행 중에 욕한다. 그 다음 바로 빠져나올 방법 생각한다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '直接认了，这把要没了，不是我的问题',
            en: 'Accept the wipe. This round is gone. Not on me.',
            ja: 'ワイプを受け入れる。このラウンドは終わった。自分のせいじゃない。',
            ko: '전멸 인정. 이 판 끝났다. 내 잘못 아니다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '开始手抖，然后死了，之后花三分钟想起来还是在气队友',
            en: 'Hands shook. Died. Spent the next three minutes thinking about that teammate.',
            ja: '手が震えた。死んだ。その後3分間そのチームメイトのことを考えていた。',
            ko: '손 떨렸다. 죽었다. 그 다음 3분 동안 그 팀원 생각했다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },

    // ── ANCHOR Q12: Mental ───────────────────────────────────────────────────
    {
      id: 'apex-a12',
      kind: 'anchor',
      text: {
        zh: '你已经输了三把了。现在开第四把。',
        en: 'Three losses in a row. You\'re queuing for the fourth.',
        ja: '3連敗中。4回目のキューを入れている。',
        ko: '3연패 중이다. 네 번째 큐 넣고 있다.',
      },
      options: [
        {
          label: {
            zh: '没感觉，输赢都正常，下把专注就行',
            en: 'Fine with it. Losses happen. Focus on the next one.',
            ja: '別に気にしない。負けは普通。次に集中するだけ。',
            ko: '괜찮다. 패배는 원래 있는 거다. 다음 판에 집중하면 된다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '有点烦，但再来一把的想法比烦躁更强',
            en: 'Annoyed, but the urge to queue again is stronger than the annoyance.',
            ja: 'イライラしているが、もう一回やりたい気持ちの方が強い。',
            ko: '짜증나는데 다시 큐 넣고 싶은 마음이 짜증보다 크다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '第三把之后我就知道今天手感不对，但我还是开了',
            en: 'I knew after the third loss that today\'s aim is off. Queued anyway.',
            ja: '3敗目の後、今日は調子が悪いと分かった。それでもキューした。',
            ko: '세 번째 패배 후 오늘 컨디션 안 좋은 거 알았다. 그래도 큐 넣었다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '我就是会输三把，然后赢两把，然后又输，这很正常',
            en: 'I always lose three, win two, lose again. Standard cycle. Don\'t think about it.',
            ja: '自分はいつも3敗してから2勝して、また負ける。標準サイクル。気にしない。',
            ko: '항상 세 번 지고 두 번 이기고 또 진다. 표준 사이클. 신경 안 쓴다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q13: Tempo + Flair (slide-jump showboating — peak opener feel) ─
    {
      id: 'apex-c01',
      kind: 'compound',
      text: {
        zh: '你刚滑铲过了一条护甲线，出现在对手盲区。此刻的主要想法是什么？',
        en: 'You just slide-jumped over a barrier and appeared in the enemy\'s blind spot. Main thought?',
        ja: 'バリアをスライドジャンプで越えて敵の死角に現れた。今一番頭にあることは？',
        ko: '방금 장벽 넘어 슬라이드 점프로 적 사각지대에 나타났다. 지금 주된 생각은?',
      },
      options: [
        {
          label: {
            zh: '赶紧打完撤，占位优势不等人',
            en: 'Fire fast and pull back. Position advantage expires.',
            ja: 'さっさと撃って引く。ポジション優位は待ってくれない。',
            ko: '빠르게 쏘고 빠진다. 위치 우위는 기다려주지 않는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '先把这段滑铲录下来，打不打得到是其次',
            en: 'Replay is running, right? The slide matters more than the trade.',
            ja: 'リプレイは回ってる？スライドがトレードより重要だ。',
            ko: '리플레이 돌아가고 있지? 슬라이드가 교전보다 중요하다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等等，这个角度我还没用过，先观察一下才打',
            en: 'Haven\'t used this angle before. Observe one beat before committing.',
            ja: 'このアングルは初めて使う。動く前に一拍観察する。',
            ko: '이 각도 처음 써본다. 교전 전에 한 박자 관찰한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '我主要在想我是怎么滑进来的，能重复这个路线吗',
            en: 'Mostly thinking about how I got here and whether that route is repeatable.',
            ja: 'どうやってここに来たか、このルートが再現できるかを主に考えている。',
            ko: '어떻게 여기 들어왔는지, 이 루트 반복 가능한지 주로 생각하고 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q14: Tempo + Bond ───────────────────────────────────────────
    {
      id: 'apex-c02',
      kind: 'compound',
      text: {
        zh: '队友还没到位，但最佳打架窗口就是现在，30秒后对面会修好甲。',
        en: 'Teammates aren\'t in position yet. But the window to engage is right now — in 30 seconds the enemy rearms.',
        ja: 'チームメイトはまだポジションに着いていない。でも交戦の窓は今だ。30秒後に敵は装備を整える。',
        ko: '팀원이 아직 자리 못 잡았다. 그런데 교전 타이밍은 지금이다 — 30초 후에는 적이 재무장한다.',
      },
      options: [
        {
          label: {
            zh: '先打，队友会跟上来的',
            en: 'Engage now. They\'ll follow.',
            ja: '今交戦する。ついてくるはずだ。',
            ko: '지금 교전. 따라올 거다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '等十秒，给队友一个窗口跟上，然后一起压',
            en: 'Wait ten seconds, give them a chance to rotate, then go in together.',
            ja: '10秒待ってチームメイトがローテーションする時間を与え、それから一緒に攻める。',
            ko: '10초 기다려 팀원이 로테이션할 시간 주고, 같이 들어간다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '我进去拖，队友赶来后再真打',
            en: 'I\'ll bait the fight and stall. Real push starts when they arrive.',
            ja: 'フェイクで戦闘を引き延ばす。本番はチームメイトが来てから。',
            ko: '내가 들어가서 시간 끈다. 팀원 오면 진짜 교전 시작.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '窗口过了就过了，等到下一个安全的机会',
            en: 'Window closed is window closed. Wait for the next safe one.',
            ja: '窓が閉まれば閉まったまま。次の安全なチャンスを待つ。',
            ko: '타이밍 지나면 지난 거다. 다음 안전한 기회 기다린다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q15: Flair + Bond ───────────────────────────────────────────
    {
      id: 'apex-c03',
      kind: 'compound',
      text: {
        zh: '你刚发现了一套漂亮的撤离喷漆。你会等队友都到了再喷，还是先自己喷了再说？',
        en: 'You found the last evacuation spray at the dropship. Spray now alone, or wait for the team?',
        ja: '撤離スプレーの最後のスポットを発見した。一人で先に使うか、チームを待つか？',
        ko: '이탈 스프레이 마지막 자리 발견했다. 혼자 지금 뿌리나, 아니면 팀 기다리나?',
      },
      options: [
        {
          label: {
            zh: '先喷了，喷完叫他们来拍照',
            en: 'Spray now, then call them over for a group shot.',
            ja: '先に使って、その後グループショットのために呼ぶ。',
            ko: '지금 뿌리고 나서 단체 사진 찍으러 불러온다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '等他们，这种事一起才有意思',
            en: 'Wait for them. These moments only work together.',
            ja: '待つ。こういう瞬間は一緒じゃないと意味がない。',
            ko: '기다린다. 이런 순간은 같이 해야 의미 있다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '我自己喷了，队友愿不愿意来看无所谓',
            en: 'I sprayed it. Whether they come look is up to them.',
            ja: '自分で使った。見に来るかどうかは彼らの自由。',
            ko: '나 뿌렸다. 팀원이 보러 올지는 그들 자유.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '我不在乎喷漆，只想找安全位等撤离',
            en: 'I don\'t care about the spray. Just want a safe position at the evac.',
            ja: 'スプレーには興味ない。撤離での安全なポジションが欲しいだけ。',
            ko: '스프레이 관심 없다. 이탈 지점에서 안전한 위치만 잡으면 된다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q16: Tempo + Nerve ──────────────────────────────────────────
    {
      id: 'apex-c04',
      kind: 'compound',
      text: {
        zh: '你站在一栋楼的二楼，一楼有敌人在活动，楼道很窄。',
        en: 'You\'re on the second floor of a building. Enemy is on the ground floor. Stairway is tight.',
        ja: '建物の2階にいる。1階に敵がいる。階段が狭い。',
        ko: '건물 2층에 있다. 1층에 적이 있다. 계단이 좁다.',
      },
      options: [
        {
          label: {
            zh: '现在就跳下去，用落差拉扯',
            en: 'Drop down immediately. Use the height gap to confuse their tracking.',
            ja: '今すぐ飛び降りる。高さの差で追跡を惑わす。',
            ko: '지금 바로 내려간다. 높이 차이로 추적 교란시킨다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '守楼梯，让他们上来',
            en: 'Hold the stairway. Make them come to me.',
            ja: '階段を守る。向こうを上らせる。',
            ko: '계단 지킨다. 올라오게 만든다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '跳窗跑路，找更好的角度再打',
            en: 'Jump out the window. Find a better angle before engaging.',
            ja: '窓から脱出。交戦前にいいアングルを見つける。',
            ko: '창문으로 탈출. 교전 전에 더 좋은 각도 찾는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '扔手雷下去，等反应再说',
            en: 'Throw a grenade down first. See how they react before committing.',
            ja: '先に手榴弾を投げる。動く前に反応を見る。',
            ko: '먼저 수류탄 던진다. 교전 전에 반응 본다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── COMPOUND Q17: Flair + Intel ──────────────────────────────────────────
    {
      id: 'apex-c05',
      kind: 'compound',
      text: {
        zh: '你看了一个高手的移动视频，里面有一个你没见过的滑铲路线。你怎么回应？',
        en: 'You watched a pro\'s movement clip with a slide path you\'ve never seen. What happens next?',
        ja: 'プロの移動クリップを見た。見たことのないスライドルートがある。次はどうする？',
        ko: '프로의 움직임 클립 봤는데 본 적 없는 슬라이드 루트가 있다. 다음은?',
      },
      options: [
        {
          label: {
            zh: '立刻开训练模式练这个路线',
            en: 'Open training mode immediately and drill the route.',
            ja: 'すぐにトレーニングモードを開いてルートを練習する。',
            ko: '바로 훈련 모드 열고 루트 연습한다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '先记下来，等真实对局里有机会再试',
            en: 'Noted. Try it in a real match when the opportunity shows up.',
            ja: 'メモしておく。実戦で機会が来たら試す。',
            ko: '메모해 뒀다. 실전에서 기회 오면 시도한다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看看评论区有没有人分析这段技术的输入法',
            en: 'Check the comments for someone who broke down the key inputs.',
            ja: 'コメント欄でキー入力を分析した人がいるか確認する。',
            ko: '댓글에서 키 입력 분석한 사람 있는지 확인한다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '保存了，但不会专门去练，有感觉了自然会',
            en: 'Saved it, but not going to drill it. If it flows naturally in a match, great.',
            ja: '保存した。でも練習はしない。試合で自然に出てきたらそれでいい。',
            ko: '저장했다. 그런데 연습은 안 할 거다. 실전에서 자연스럽게 나오면 그걸로.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── COMPOUND Q18: Bond + Mental ──────────────────────────────────────────
    {
      id: 'apex-c06',
      kind: 'compound',
      text: {
        zh: '队友连续两次走错路把你带进了不利位置。你接下来怎么做？',
        en: 'Teammate led you into bad position twice in a row. What now?',
        ja: 'チームメイトが2回連続で悪いポジションに引き込んだ。次はどうする？',
        ko: '팀원이 연속 두 번 당신을 불리한 위치로 끌어들였다. 이제 어떻게 하나?',
      },
      options: [
        {
          label: {
            zh: '提醒一次，然后继续跟，可能他有我看不到的判断',
            en: 'Mention it once, then keep following. Maybe they have information I don\'t.',
            ja: '一度指摘して、それでもついていく。自分が知らない情報があるかもしれない。',
            ko: '한 번 말하고 계속 따라간다. 내가 모르는 정보가 있을 수도 있다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '之后的路线我自己决定，不跟了',
            en: 'I\'m making my own rotation calls from here. Done following.',
            ja: 'これ以降は自分でローテーションを決める。ついていくのは終わり。',
            ko: '앞으로 로테이션은 내가 결정한다. 따라가기 끝.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '语音里说清楚我的不满，然后继续配合',
            en: 'Say clearly in voice chat that this isn\'t working. Keep cooperating after.',
            ja: 'ボイスチャットでうまくいっていないと伝える。その後は引き続き協力する。',
            ko: '보이스에서 이게 안 된다고 분명히 말한다. 그 다음은 계속 협력한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '我现在已经有点红温了，但不会说，只是会走得离他们稍微远一点',
            en: 'Irritated but silent. I\'ll just naturally drift a little further from them.',
            ja: 'イライラしているが黙っている。自然に少し距離を置くようになる。',
            ko: '짜증나지만 말 안 한다. 자연스럽게 조금 더 거리를 둔다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },

    // ── COMPOUND Q19: Tempo + Intel ──────────────────────────────────────────
    {
      id: 'apex-c07',
      kind: 'compound',
      text: {
        zh: '你知道安全区缩到了这一片，但现在圈伤还没开始。你怎么决定转点时机？',
        en: 'Ring is closing to this area but damage hasn\'t started yet. When do you rotate?',
        ja: 'リングはこのエリアに縮まっているが、ダメージはまだ始まっていない。いつローテーションする？',
        ko: '자기장이 이 구역으로 좁혀지는데 피해는 아직 시작 안 했다. 언제 이동하나?',
      },
      options: [
        {
          label: {
            zh: '已经在路上了，我不等圈伤开',
            en: 'Already moving. I don\'t wait for ring damage.',
            ja: 'もう移動中。リングダメージを待たない。',
            ko: '이미 이동 중이다. 자기장 피해 기다리지 않는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '等圈伤 10% 再动，那是其他队伍开始承压的节点',
            en: 'Move when ring hits 10% damage. That\'s when other squads start feeling it.',
            ja: 'リングが10%ダメージになったら動く。他チームが感じ始めるタイミングだ。',
            ko: '자기장 피해가 10%일 때 이동. 다른 팀들이 부담 느끼기 시작하는 시점이다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '靠手感，打仗的感觉告诉我什么时候要走',
            en: 'I go by feel. When the fight instinct says move, I move.',
            ja: '感覚で動く。戦闘の本能が移動する時を教えてくれる。',
            ko: '감각으로 간다. 교전 본능이 이동할 때 알려준다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '我会算好时间，圈差、行进时间、扫清路上障碍的时间，精确到秒',
            en: 'Calculate ring gap, travel time, and time to clear obstacles. Accurate to within seconds.',
            ja: 'リングギャップ、移動時間、障害物を排除する時間を計算する。秒単位で正確に。',
            ko: '자기장 거리, 이동 시간, 장애물 제거 시간 계산한다. 초 단위로 정확하게.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── COMPOUND Q20: Bond + Nerve ───────────────────────────────────────────
    {
      id: 'apex-c08',
      kind: 'compound',
      text: {
        zh: '队伍正在对一个强势位拉扯，而对面有三个人。你的角色是什么？',
        en: 'Your squad is peeking a three-man squad in an entrenched position. What\'s your role?',
        ja: 'チームが3人チームの強固なポジションに対してピークしている。自分の役割は？',
        ko: '팀이 견고한 위치의 3인 팀에 피크 중이다. 당신의 역할은?',
      },
      options: [
        {
          label: {
            zh: '我带头压，打开局面，队友跟进',
            en: 'I lead the push, open up the fight, team follows.',
            ja: '自分が先頭に立って攻める。戦闘を開かせてチームをついてこさせる。',
            ko: '내가 선두로 밀고 들어가 교전 열어, 팀이 따라온다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '守好自己的侧翼，让更激进的队友打头阵',
            en: 'Cover the flank and let the more aggressive teammate lead.',
            ja: 'フランクを守り、より積極的なチームメイトを先頭に立てる。',
            ko: '사이드 커버하고, 더 공격적인 팀원이 선두 서게 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '自己找包抄，不需要跟队友协调',
            en: 'Find my own flanking path. Don\'t need to coordinate.',
            ja: '自分でフランクルートを見つける。チームメイトとの調整は不要。',
            ko: '직접 플랭크 루트 찾는다. 팀원과 조율할 필요 없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '这个架不值得打，建议转点',
            en: 'This fight isn\'t worth it. Calling a rotate.',
            ja: 'この戦闘は価値がない。ローテーションを呼ぶ。',
            ko: '이 교전 가치 없다. 로테이션 부른다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q21: Flair + Mental ─────────────────────────────────────────
    {
      id: 'apex-c09',
      kind: 'compound',
      text: {
        zh: '你打出了一个绝妙的兔跳弹射，但接下来的枪没打中，把这个好开局浪费了。',
        en: 'Perfect bunny hop into the flank. Then you whiffed three shots and lost the trade.',
        ja: '完璧なバニーホップでフランクした。でも3発外して交換を失った。',
        ko: '완벽한 버니합으로 플랭크했다. 그런데 3발 빗나가 교전 패배했다.',
      },
      options: [
        {
          label: {
            zh: '无所谓，那个移动本身就值，下次再补枪就行',
            en: 'No issue. The movement was worth it; fix the aim next time.',
            ja: '問題ない。移動自体に価値があった。次は照準を直す。',
            ko: '상관없다. 움직임 자체가 가치 있었다. 다음엔 에임 고치면 된다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '有点懊恼，好开头配上坏结尾最难受',
            en: 'That sting is real. Good entry plus bad execution is the worst outcome.',
            ja: '悔しい。いいエントリー + 悪い実行は最悪の結果だ。',
            ko: '그 찌릿함 진짜다. 좋은 진입 + 나쁜 실행이 최악의 결과다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '早就说了，花里胡哨不如站稳打准，下次走直路',
            en: 'Told myself: flashy is worthless if the aim isn\'t there. Next one is a straight line.',
            ja: '照準が伴わなければ派手な動きに価値はない、と心に刻んだ。次は直線ルートで。',
            ko: '에임이 없으면 화려한 건 소용없다고 스스로 새겼다. 다음은 직선 루트.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '发生过了，忘了。下把继续移动，继续尝试',
            en: 'Happened, forgotten. Keep moving, keep trying next round.',
            ja: '起きた、忘れた。動き続けて、次のラウンドも試し続ける。',
            ko: '일어났고, 잊었다. 계속 움직이고 다음 판도 시도한다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q22: Tempo + Bond ───────────────────────────────────────────
    {
      id: 'apex-c10',
      kind: 'compound',
      text: {
        zh: '开局你们三个人落地不同区域。怎么合兵？',
        en: 'Drop goes wrong. Three of you land in separate zones. How do you regroup?',
        ja: 'ドロップが失敗。3人が別々のエリアに着地した。どうやって合流する？',
        ko: '낙하 실패. 셋이 별도 구역에 착지했다. 어떻게 합류하나?',
      },
      options: [
        {
          label: {
            zh: '我直接往最近的队友跑，边跑边舔包',
            en: 'Run to the nearest teammate immediately. Loot on the way.',
            ja: '最も近いチームメイトにすぐ走る。途中でルートしながら。',
            ko: '가장 가까운 팀원한테 바로 달린다. 이동 중에 루팅한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '先把这个区域舔完再合兵，满装备见面',
            en: 'Loot this zone first, then regroup. Meet with full gear.',
            ja: 'まずこのゾーンをルートしてから合流。フル装備で会う。',
            ko: '이 구역 먼저 다 루팅하고 합류. 풀 장비로 만난다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '各自收装备，各自打，后面反正也要分头行动',
            en: 'Each loot separately, each fight separately. We\'ll split anyway later.',
            ja: 'それぞれがルートし、それぞれが戦う。どうせ後で分かれる。',
            ko: '각자 루팅, 각자 교전. 어차피 나중에 갈라질 거다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '先找个安全点等大家到齐，再统一行动',
            en: 'Find a safe spot and wait for everyone before moving as a unit.',
            ja: '安全な場所を見つけて全員が揃うのを待ち、ユニットとして動く。',
            ko: '안전한 장소 잡고 다 모일 때까지 기다린 뒤 함께 움직인다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q23: Flair + Nerve ──────────────────────────────────────────
    {
      id: 'apex-c11',
      kind: 'compound',
      text: {
        zh: '你打算用恶灵传送门帮队友撤退，但你也看到了一个进攻机会。',
        en: 'You\'re setting a Wraith portal to extract the team. You also see an offensive opening.',
        ja: 'チームを撤退させるワープポータルを設置中。攻撃のチャンスも見える。',
        ko: '팀 이탈용 워프 포탈 설치 중이다. 공격 기회도 보인다.',
      },
      options: [
        {
          label: {
            zh: '先攻击，把对面打懵再打门',
            en: 'Attack first, stagger the enemy, then place the portal.',
            ja: 'まず攻撃して敵を混乱させてからポータルを設置する。',
            ko: '먼저 공격해서 적 혼란시키고 포탈 설치한다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '先开门，让队友先撤，进攻的事等进到门里再说',
            en: 'Portal first. Team extracts. Engage from the safe side if the angle is still there.',
            ja: 'まずポータル。チームを撤退させる。安全な側から角度が残っていれば交戦。',
            ko: '포탈 먼저. 팀 이탈시킨다. 안전한 쪽에서 각도 남아있으면 교전.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '门指向进攻方向，撤退同时也是突袭',
            en: 'Set the portal exit into the enemy position. Retreat becomes assault.',
            ja: 'ポータルの出口を敵のポジションに向ける。撤退が突撃になる。',
            ko: '포탈 출구를 적 위치로 향하게 한다. 이탈이 돌격이 된다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '放弃进攻机会，门放好，把队友安全拉走',
            en: 'Ignore the opening. Place a clean portal and get the team out safely.',
            ja: 'チャンスは無視。きれいなポータルを置いてチームを安全に撤退させる。',
            ko: '기회 무시. 깔끔한 포탈 설치해서 팀 안전하게 빠져나간다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── COMPOUND Q24: Bond + Intel ───────────────────────────────────────────
    {
      id: 'apex-c12',
      kind: 'compound',
      text: {
        zh: '标记系统里，你更倾向用哪一种标记方式传递信息？',
        en: 'In the ping system, which pings do you rely on most to communicate?',
        ja: 'ピングシステムで、情報を伝えるためにどのピングを最もよく使うか？',
        ko: '핑 시스템에서 정보 전달에 가장 많이 쓰는 핑은?',
      },
      options: [
        {
          label: {
            zh: '"敌人在这里"——我的眼睛就是全队的情报',
            en: '"Enemy here" — my eyes are the team\'s intelligence feed.',
            ja: '「敵ここ」— 自分の目がチームの情報源だ。',
            ko: '"적 여기" — 내 눈이 팀의 정보 공급원이다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '"我在这里"——让队友知道我在哪，方便配合',
            en: '"I\'m here" — let the team track my position for coordination.',
            ja: '「ここにいる」— チームが協調しやすいよう自分の位置を知らせる。',
            ko: '"나 여기" — 팀이 협조하기 쉽게 내 위치 알린다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '"物资在这里"——大家自己过来拿，我不管分配',
            en: '"Loot here" — I ping it, others come if they want. Not my job to assign.',
            ja: '「ここに物資」— ピングしておく。欲しければ来る。分配は自分の仕事じゃない。',
            ko: '"물자 여기" — 핑 찍어두면 원하는 사람이 온다. 배분은 내 일 아니다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '我一般不主动 ping，等队友先标记再回应',
            en: 'I rarely ping first. I respond to what teammates mark.',
            ja: 'あまり自分からピングしない。チームメイトのピングに反応する。',
            ko: '먼저 핑 찍는 경우 드물다. 팀원이 찍은 핑에 반응한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },


