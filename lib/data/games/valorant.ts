import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'valorant',
  title: {
    zh: '无畏契约',
    en: 'VALORANT',
    ja: 'ヴァロラント',
    ko: '발로란트',
  },
  deck: {
    zh: '你是哪种无畏契约玩家？',
    en: 'What kind of VALORANT player are you?',
    ja: 'あなたはどんなバロラントプレイヤー？',
    ko: '당신은 어떤 발로란트 플레이어인가요?',
  },
  description: {
    zh: '30 题 · 6 维 · 8 种原型，从道具档案馆长到警长一发玄学家，测出你的无畏契约玩家身份码',
    en: '30 questions, 6-axis model, 8 archetypes. From lineup librarian to sheriff mystic — find your real VALORANT player code.',
    ja: '30問・6軸・8タイプ。道具ライブラリアンから残局解説員まで、本当のプレイスタイルを診断しよう。',
    ko: '30문항·6개 축·8가지 유형. 라인업 사서부터 잠금 관중까지. 당신의 발로란트 플레이어 코드를 확인하세요.',
  },
  dominantAxes: ['Bond', 'Intel', 'Flair'] as const,
  archetypes: [
    {
      slug: 'lineup-librarian',
      name: {
        zh: '道具档案馆长',
        en: 'Lineup Librarian',
        ja: '道具ライブラリアン',
        ko: '라인업 사서',
      },
      oneLiner: {
        zh: '背熟全图烟点，团队向数据派，实用主义到底',
        en: 'Every smoke lineup memorized. Every. Single. One.',
        ja: '全マップのラインナップを暗記してるけど、チームは聞いてない',
        ko: '전 맵 라인업 외웠다. 팀원들은 안 외웠다.',
      },
      description: {
        zh: '你的 VAL 生涯是一座图书馆。每张地图的烟点、墙机位置、道具打法，你都建了档案。队友叫你"道具书"不是在骂你——你觉得挺对的。对线前你要先查三个 Protocol VOD，进语音不是为了吵架，是为了同步知识库。你相信执行到位的 utility 能碾压任何手感差距，所以手感差也没关系。',
        en: 'Your VALORANT career is a filing cabinet. Every smoke lineup, every Sage wall angle, every Killjoy turret position — catalogued. Teammates call you "the util guy" and mean it as a complaint; you take it as a title. You\'ve watched three Protocol VODs before this session. You believe a well-executed utility chain beats a god aim gap, which is handy because your aim isn\'t the issue holding you back. The issue is finding teammates who execute.',
        ja: 'バロラントのキャリアはほぼ図書館だ。全マップのラインナップを暗記して、チームに共有するけど、使ってくれる人は半分くらいしかいない。試合前にプロのVOD3本見るのが普通だと思ってたけど、どうやらそうじゃないらしい。「ユーティリティちゃんと使えばエイムの差は埋まる」という信念のもと、今日も道具を撃ち込んでいる。',
        ko: '발로란트 경력은 도서관이다. 모든 맵의 라인업, 세이지 벽 각도, 킬조이 포탑 위치까지 전부 정리돼 있다. 팀원들은 "유틸 담당"이라고 부르는데, 그게 칭찬인지 불평인지는 신경 안 쓴다. 매판 전 VOD 3개는 기본이다. 유틸을 잘 쓰면 에임 차이는 극복된다는 믿음으로 오늘도 스모크를 심는다.',
      },
      symptoms: [
        {
          zh: '脑子里有每张地图至少 50 个烟点坐标，且随时待调用',
          en: 'You have 50+ smoke lineups per map indexed in your head, ready to deploy on demand',
          ja: '各マップに50個以上のラインナップが頭に入っていて、いつでも使える',
          ko: '각 맵마다 라인업 50개 이상 머릿속에 정리돼 있다',
        },
        {
          zh: '队友道具打错位置，你会在死后用文字解释正确做法',
          en: 'When teammates misplace a smoke, you type a correction in chat while spectating',
          ja: 'チームメイトが道具をミスしたら、死亡後にテキストで解説する',
          ko: '팀원이 라인업 틀리면 사망 중에도 채팅으로 수정한다',
        },
        {
          zh: '查完赛后数据才知道自己打没打赢',
          en: 'You check post-match stats before you know whether you won',
          ja: '試合結果よりスタッツを先に確認する',
          ko: '승패보다 경기 후 통계를 먼저 확인한다',
        },
        {
          zh: '队友问"跟谁走"，你已经给出了三个方案和一个备选',
          en: 'Someone asks "what\'s the call?" and you have three options prepared with one fallback',
          ja: '「どうする?」と聞かれたら、プランを3つ用意していた',
          ko: '"콜 어떻게 해?"라고 물으면 플랜 3개에 백업까지 준비돼 있다',
        },
        {
          zh: '对 Clove 或 Vyse 的版本变动比队友早知道至少两天',
          en: 'You knew about the Clove or Vyse patch changes two days before your teammates did',
          ja: 'CloveかVyseのパッチ内容を、チームより2日早く知っていた',
          ko: '클로브나 바이스 패치 내용을 팀원보다 이틀 먼저 알고 있었다',
        },
      ],
      polarityPattern: {
        Bond: 'high',
        Intel: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'instalock-spectator',
      bestSquadSlug: 'sentinel-guardian',
    },
    {
      slug: 'caffeinated-igl',
      name: {
        zh: '速射指挥官',
        en: 'Rapid-Call IGL',
        ja: '早口IGL',
        ko: '속사포 아이지엘',
      },
      oneLiner: {
        zh: '一句话塞三个指令，团队向表演派，嘴比脑子还快',
        en: 'Fits three calls into one breath. Team\'s still on the first one.',
        ja: '一息で指示を3つ詰め込むけど、チームはまだ1つ目を処理してる',
        ko: '숨 한 번에 콜 세 개. 팀원들은 아직 첫 번째 소화 중이다.',
      },
      description: {
        zh: '你是队里的 IGL，没人封的，自己戴上的帽子——而且没人跟你抢，因为调用是对的。你说话比回合计时器还快：三个方案、一次改动，外加一句对某人绕后路线的点评，全在敌人刚过中路之前说完。队友说你太累人，你说这是信息带宽问题。你从不提高音量，只是从不留空隙。不管赢输，你都要用双倍语速复盘一遍，而且复盘居然还挺好听。',
        en: 'You self-appointed IGL on day one, and nobody\'s challenged the title since — the calls keep landing. Your mouth moves faster than the round timer. Three options, one revision, and a critique of someone\'s rotation, all before the enemy\'s crossed mid. Teammates call it exhausting. You call it bandwidth. You never raise your voice; you just never leave a gap in it. Win or lose, you recap the round like a caster on double speed, and somehow it\'s still not boring.',
        ja: 'IGLを名乗ったのは自分からで、誰も文句を言わない。コールが当たるからだ。口の動きはラウンドタイマーより速い。3つの選択肢、1回の修正、誰かの迂回ルートへのダメ出し、これが敵がミッドを越える前に全部終わる。チームメイトは「疲れる」と言う。自分は「情報帯域幅」と呼んでいる。声を荒げたことはない、ただ間を空けないだけだ。勝っても負けても実況の倍速でラウンドを振り返る。それでも意外と退屈じゃない。',
        ko: 'IGL은 아무도 안 시켰는데 스스로 쓴 감투다. 아무도 안 뺏는 이유는 콜이 맞으니까. 입은 라운드 타이머보다 빠르게 움직인다. 플랜 세 개, 수정 한 번, 누군가의 우회 루트에 대한 지적까지, 적이 미드를 넘기 전에 다 끝난다. 팀원들은 "피곤하다"고 한다. 본인은 "정보 대역폭"이라고 부른다. 목소리를 높인 적은 없다. 그냥 틈을 안 둘 뿐이다. 이기든 지든 두 배속으로 라운드를 복기한다. 근데 그게 은근히 안 지루하다.',
      },
      symptoms: [
        {
          zh: '语音开着只要对面有动静你就能说出对方可能在哪',
          en: 'You call enemy positions before your teammates have even heard footsteps',
          ja: '味方が足音を聞く前に敵の位置を先読みでコールしている',
          ko: '팀원들이 발소리 듣기 전에 적 위치 콜 먼저 한다',
        },
        {
          zh: '单回合里改了两次方案，还有时间嫌队友执行慢',
          en: 'You changed the plan twice mid-round and still had time to tell someone they were slow',
          ja: '1ラウンドで2回プランを変えて、それでも味方に「遅い」と言えた',
          ko: '한 라운드에 플랜 두 번 바꾸고도 팀원한테 "느리다"고 했다',
        },
        {
          zh: 'Spike 爆了你还在分析"应该可以 retake"',
          en: 'The spike just detonated and you\'re already analyzing whether the retake was viable',
          ja: 'スパイクが爆発してもリテイクの可能性を分析してる',
          ko: '스파이크 터지는 중에도 리테이크 가능성 분석하고 있다',
        },
        {
          zh: '每局第一回合你就能猜到对面 IGL 的套路',
          en: 'By round two you\'ve already read the enemy IGL\'s default',
          ja: '2ラウンド目に相手IGLのデフォルトを読んでいる',
          ko: '2라운드에 상대 IGL 패턴 파악 완료다',
        },
        {
          zh: '你真正在意的不是 K/D，是"方案执行率"',
          en: 'K/D doesn\'t bother you. Execution rate does.',
          ja: 'KDより「プランの実行率」が気になる',
          ko: 'K/D는 관심 없다. 플랜 실행률이 신경 쓰인다.',
        },
        {
          zh: '非高峰期开黑你恨不得把所有人叫来一起学',
          en: 'In off-peak hours you\'d pull everyone into a VOD session if they\'d let you',
          ja: 'オフピーク時間はVOD勉強会を開きたくてたまらない',
          ko: '비피크 시간엔 모두 모아서 VOD 공부하고 싶다',
        },
      ],
      polarityPattern: {
        Bond: 'high',
        Intel: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'data-duelist',
      bestSquadSlug: 'lineup-librarian',
    },
    {
      slug: 'sentinel-guardian',
      name: {
        zh: '后场监护人',
        en: 'Sentinel Guardian',
        ja: 'センチネル番人',
        ko: '센티넬 수호자',
      },
      oneLiner: {
        zh: '你前压我兜底，团队向手感派，稳如磐石',
        en: '"You push. I anchor." Said in a voice that ends debates.',
        ja: '「前に出て。私は後ろ守る。」これで会話終わる',
        ko: '"너 나가. 나 지킨다." 토론 끝.',
      },
      description: {
        zh: '你是 Sentinel，字面意义上的。Vyse 或 Killjoy，无所谓谁——只要能守住后场，你干。你不喜欢"全压"，觉得那是在赌命，而你是风险管理部门。队友在 A 打的时候你已经把 B 封得密不透风。被嫌"太保守"你不在乎，因为你知道哪些子弹是因为你的守点才没打来。手感不差，只是不需要靠手感活着。',
        en: 'Pick Sentinel. Place the Vyse snare in the exact right flank gap. Watch the minimap. The teammates charging A site don\'t know how many times your B anchor saved the round. They won\'t find out either. You\'re not "passive" — you\'re load-bearing. The team tilts when you\'re gone, but they won\'t say it. You\'ve stopped expecting credit. You\'d rather collect the post-match assists column, quietly.',
        ja: '役割はセンチネル。VyseかKilljoyを選んで、後ろを全部守る。チームがAに突っ込んでるとき、Bを完璧に封鎖してるのは自分だ。「消極的」と言われることもあるけど、気にしない。自分のおかげで来なかった弾は統計に出ないから。アシスト欄は静かに増えていく。',
        ko: '역할은 센티넬이다. 바이스든 킬조이든 상관없다. 팀이 A 사이트 돌파할 때 B 봉쇄는 이미 완료돼 있다. "소극적"이라는 말 듣지만 신경 안 쓴다. 내 덕분에 안 날아온 총알은 통계에 안 잡히니까. 어시스트 칸은 조용히 쌓인다.',
      },
      symptoms: [
        {
          zh: '开局三十秒你就知道该在哪架枪，且不会动',
          en: 'You know your hold angle within thirty seconds of spawn and you\'re not moving from it',
          ja: 'スポーン30秒以内に自分の守るアングルを決めて、動かない',
          ko: '스폰 30초 안에 수비 각도 정하고 안 움직인다',
        },
        {
          zh: '每次队友 retake 失败你都能说出哪里没守住',
          en: 'Every failed retake, you can explain which flank gap wasn\'t covered',
          ja: 'リテイク失敗のたびに、どのフランクが空いていたか説明できる',
          ko: '리테이크 실패할 때마다 어떤 측면이 비었는지 설명할 수 있다',
        },
        {
          zh: '"我们 retake 得了"是你说过最激进的话',
          en: '"We can retake" is the most aggressive thing you\'ve ever said in voice',
          ja: '「リテイクできる」が自分史上最も攻撃的な発言だ',
          ko: '"리테이크 가능해"가 내가 한 가장 공격적인 말이다',
        },
        {
          zh: '你的 KDA 看起来很低，但队里的胜率说了实话',
          en: 'Your KDA looks average. The team\'s win rate tells a different story.',
          ja: 'KDAは普通に見えるけど、チームの勝率が本当のことを言ってる',
          ko: 'KDA는 평범해 보여도 팀 승률이 진실을 말한다',
        },
        {
          zh: 'Vyse 的 Arc Rose 位置比对面打了多少子弹你都心里有数',
          en: 'You know exactly how many bullets Vyse\'s Arc Rose absorbed this map',
          ja: 'VyseのArc Roseが今マップで何発受けたか把握している',
          ko: '이번 맵에서 바이스 아크 로즈가 총알 몇 발 막았는지 알고 있다',
        },
      ],
      polarityPattern: {
        Bond: 'high',
        Intel: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'instalock-spectator',
      bestSquadSlug: 'lineup-librarian',
    },
    {
      slug: 'clutch-narrator',
      name: {
        zh: '残局解说员',
        en: 'Clutch Narrator',
        ja: '実況型クラッチャー',
        ko: '클러치 실황러',
      },
      oneLiner: {
        zh: '1v4 全程自己实况，效果拉满，观众也是自己',
        en: 'Live-narrates the 1v4 like a Let\'s Play. Ratings pending.',
        ja: '1v4を丸ごと自分で実況する。誰も頼んでないのに。',
        ko: '1v4를 통째로 셀프 실황한다. 아무도 안 시켰는데.',
      },
      description: {
        zh: '你是那种死了还要发一句"差点"的人——因为这把还是得有个复盘。残局本身不是重点，解说才是全场核心。别人是静默输出，你是全程配音："好的好的好的……一个、两个、等等——"队友看你打不是义务，是因为你基本上在直播一场带 K/D 的实况。赢了输了都有一段完整播报，观众都来了，你总不能让他们空手而归。',
        en: 'You\'re the player who types "almost" after dying in a 1v4 — because the run still deserves a recap. Forget the clutch; the commentary is the whole show. Other players execute in silence. You provide a running monologue: "okay okay okay, got one... got two... wait, wait—" Teammates don\'t spectate out of obligation. They spectate because you\'re basically live-streaming a Let\'s Play with a K/D attached. Win or lose, there\'s always a play-by-play. The audience showed up. You\'re not going to disappoint them.',
        ja: '1v4で死んでも「惜しかった」とチャットに打つタイプだ——このプレイには振り返りが必要だから。クラッチ自体は本題じゃない。実況こそが本番だ。他のプレイヤーは無言でプレイするが、自分はずっと実況し続ける。「ok ok ok、一人...二人...待って、待って——」チームメイトが観戦するのは義務じゃない。K/D付きの実況配信を見てる感覚に近いからだ。勝っても負けても、必ず一通りの実況が入る。観客はもう来てる。手ぶらで帰らせるわけにはいかない。',
        ko: '1v4에서 죽어도 "아깝다"라고 채팅 치는 타입이다. 이 판은 복기가 필요하니까. 클러치 자체는 본론이 아니다. 실황이 진짜 본편이다. 다른 사람들은 조용히 플레이하지만, 나는 계속 실황을 튼다. "ok ok ok, 한 명... 두 명... 잠깐, 잠깐——" 팀원들이 관전하는 건 의무가 아니다. K/D 붙은 실황 방송을 보는 느낌에 가까워서다. 이기든 지든 항상 한 편의 실황이 완성된다. 관중은 이미 왔다. 빈손으로 보낼 수는 없다.',
      },
      symptoms: [
        {
          zh: '1v1 残局你会在心里给自己配一段紧张 BGM',
          en: 'You mentally play a dramatic BGM during your 1v1 clutch attempts',
          ja: '1v1の緊張感に頭の中でBGMを流している',
          ko: '1v1 클러치 상황에서 머릿속으로 긴장 BGM 틀어놓는다',
        },
        {
          zh: '死了第一件事不是看数据，是把过程描述给队友听',
          en: 'First thing after dying: narrating exactly what happened, not looking at the scoreboard',
          ja: '死んだ直後に、スタッツじゃなくて「今の状況」を説明する',
          ko: '죽고 나서 첫 행동은 스탯 확인이 아니라 상황 설명이다',
        },
        {
          zh: '你的赛后截图比赛后数据更频繁上传',
          en: 'You screenshot your highlight clutch more often than your final stats',
          ja: 'ハイライトクラッチのスクショは最終スタッツより多く撮る',
          ko: '클러치 하이라이트 스크린샷이 최종 스탯 사진보다 많다',
        },
        {
          zh: '被问"你在干嘛"时你会用三十个字描述一个两秒的决策',
          en: 'When asked "what are you doing?" you need thirty words to describe a two-second decision',
          ja: '「何してるの?」に対して、2秒の判断を30文字で説明する',
          ko: '"뭐 하는 거야?"라는 질문에 2초 판단을 30글자로 설명한다',
        },
        {
          zh: 'Spike 解除成功后你的第一反应是"我就知道"',
          en: 'Defuse success: your first reaction is "I knew it" spoken aloud',
          ja: 'スパイク解除成功→「やっぱりね」と声に出して言う',
          ko: '스파이크 해제 성공 → 첫 반응은 "그럴 줄 알았어"를 소리내서 말하는 것',
        },
        {
          zh: '赢了你觉得自己是原因，输了你有三个理由可以说',
          en: 'Win: you were the reason. Loss: you have three reasons ready, and none of them is you.',
          ja: '勝ちは自分のおかげ。負けには3つの理由がある。どれも自分じゃない。',
          ko: '이기면 내 덕이다. 지면 이유 세 개가 준비돼 있다. 셋 다 나는 아니다.',
        },
      ],
      polarityPattern: {
        Bond: 'high',
        Intel: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'data-duelist',
      bestSquadSlug: 'caffeinated-igl',
    },
    {
      slug: 'data-duelist',
      name: {
        zh: '安全第一决斗者',
        en: 'Safety-First Duelist',
        ja: '石橋を叩くデュエリスト',
        ko: '안전제일 듀얼리스트',
      },
      oneLiner: {
        zh: '不是不敢冲，是先看一眼 timer 而已',
        en: 'Not baiting. Just checking the timer before every single push.',
        ja: 'ビビってるんじゃない。ただ突入前にタイマーを見てるだけだ。',
        ko: '쫄보 아니다. 그냥 진입 전에 타이머 한 번 보는 것뿐.',
      },
      description: {
        zh: '服务器里所有其他 Duelist 都觉得你在 bait，你已经懒得辩解了。每次进点前：数一下上次击杀过了多久，看一眼小地图，确认至少一条信息——这不是怂，这是一套系统，而且这套系统的存活率相当漂亮。死的时候你清楚是哪个角度打来的，这半局不会再走那条线。独来独往不是性格缺陷，只是跟四个随机队友对节奏，花的时间比省下的还多。你已经想通了——你可能是全服唯一一个"安全第一"还能被队友骂的 Duelist。',
        en: 'Every other Duelist on the server thinks you\'re baiting. You\'ve stopped arguing about it. Before each push: count seconds since the last kill, check the minimap, confirm one piece of information. That\'s not fear, that\'s a system, and the system has a very good survival rate. When you die, you know the exact angle that got you, and you won\'t walk that line again this half. Solo isn\'t a personality flaw — it\'s just that syncing with four randoms costs more round time than it saves. You\'ve made peace with being the safest Duelist anyone\'s ever been mad at.',
        ja: 'サーバーの他のデュエリストは全員、自分がベイトしてると思ってる。もう反論するのをやめた。突入前に毎回、前のキルから何秒経ったか数えて、ミニマップを見て、情報を一つ確認する。これはビビりじゃない、システムだ。しかもこのシステムの生存率はかなりいい。死んだときはどのアングルでやられたか正確にわかっていて、この半分ではもう同じルートを通らない。単独行動は性格の欠陥じゃなくて、ランダムな味方4人とタイミングを合わせるコストの方が高いだけだ。石橋を叩いてるだけなのに、それでも味方に怒られるデュエリスト——たぶん自分がサーバーで唯一の存在だと、もう納得してる。',
        ko: '서버의 다른 듀얼리스트들은 전부 내가 베이팅한다고 생각한다. 이제 반박하는 것도 그만뒀다. 진입 전에 매번: 마지막 킬 이후 몇 초 지났는지 세고, 미니맵 보고, 정보 하나 확인한다. 이건 쫄보짓이 아니라 시스템이다. 그리고 이 시스템 생존율이 꽤 괜찮다. 죽으면 어느 각도에서 맞았는지 정확히 안다. 이번 하프에는 같은 루트로 다시 안 간다. 단독 플레이는 성격 결함이 아니다. 랜덤 넷이랑 타이밍 맞추는 게 그냥 아낀 시간보다 더 든다. "안전제일"인데도 욕먹는 듀얼리스트—아마 서버에 나 하나뿐일 거라는 걸, 이제는 받아들였다.',
      },
      symptoms: [
        {
          zh: '你从不"瞎冲"，每次进点前都确认了至少一条信息',
          en: 'You never push blind — there\'s always at least one confirmed information before entry',
          ja: '盲目的に突っ込むことはない。進入前に必ず情報を一つ確認する。',
          ko: '무작정 들어가는 법이 없다. 진입 전에 정보 하나는 반드시 확인한다.',
        },
        {
          zh: '对面 TenZ 级别的手感你会说"运气好"，然后换角度',
          en: 'When someone hits a TenZ-level flick on you, you say "lucky" and mentally change your angle',
          ja: 'TenZレベルのエイムでやられたら「運」と言って、アングルを変える',
          ko: '테즈 수준의 에임에 맞으면 "운 좋았네" 하고 각도 바꾼다',
        },
        {
          zh: 'eco 回合你会算对面能不能买好枪，然后据此决定怎么走',
          en: 'On eco rounds you calculate whether the enemy can full-buy, then adjust routing accordingly',
          ja: 'エコラウンドでは相手がフルバイできるか計算してから動線を決める',
          ko: 'eco 라운드에 상대가 풀바이 가능한지 계산하고 동선 결정한다',
        },
        {
          zh: '你记得上一局同一图你死的每个角度',
          en: 'You remember every angle that killed you on this map last session',
          ja: '前回の試合でこのマップで死んだ全アングルを覚えている',
          ko: '지난 판 이 맵에서 죽은 모든 각도 기억하고 있다',
        },
        {
          zh: '你不喜欢"交道具送人头"这种打法，那是在送钱给对面',
          en: 'Trading utility for a pick feels like donating the economy to the enemy team',
          ja: '道具を使って一人倒すトレードは「相手に経済を寄付してる」感覚がある',
          ko: '유틸 써서 교환하는 플레이는 상대 팀에 경제 기부하는 느낌이다',
        },
      ],
      polarityPattern: {
        Bond: 'low',
        Intel: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'instalock-spectator',
      bestSquadSlug: 'sheriff-economist',
    },
    {
      slug: 'instalock-spectator',
      name: {
        zh: '秒锁旁观者',
        en: 'Instalock Spectator',
        ja: 'インスタロック観戦者',
        ko: '인스타락 관전자',
      },
      oneLiner: {
        zh: '秒锁 Jett 然后远程指挥，独狼数据派，嘴强手弱',
        en: 'Instalocked Jett. Now spectating and giving advice. Both at once.',
        ja: 'Jettを即選びして、死亡後は遠隔指揮官になる',
        ko: '제트 인스타락. 죽고 나서 원격 지휘관 된다.',
      },
      description: {
        zh: '你是最快秒锁的那个人，选好了觉得自己已经赢了一半。然后第一回合死了，然后开始在旁观镜头里指挥队友走位。你不觉得这有什么问题——死人视角最全，信息最多。你口才比手速快，分析比执行强。对线能力中等，死后分析水平顶级。你其实很了解 VALORANT 这款游戏，就是游戏里的你和游戏外的你之间有一点落差。',
        en: 'You instalocked before anyone else had the loading screen. In your head, that decision made the rest of the team\'s jobs easier. Then round one ended early for you. From the spectator cam you have full information, complete overview, and absolutely zero accountability. The analysis is sharp. The execution of it — that\'s where the gap lives. You know this game well. The distance between your mental model and your in-game performance is a topic you prefer to discuss after someone else dies.',
        ja: '誰よりも早くJettを即選びして、それだけでもう半分勝った気がしてる。1ラウンド目で早めに死んで、そこからはスペクテイターカメラで全体を把握しながら指示を出す。「死人の視点が一番広い」という信念のもと、的確なアドバイスを届けている。プレイより解説の方が得意かもしれないけど、それは認めてない。',
        ko: '누구보다 빨리 인스타락했다. 그걸로 이미 반은 이긴 느낌이다. 1라운드에 일찍 죽고, 관전 카메라에서 전체 상황 파악하면서 지시를 내린다. "죽은 사람 시야가 제일 넓다"는 신념으로 정확한 조언을 날린다. 플레이보다 분석이 더 잘 맞는 것 같지만, 그건 인정하지 않는다.',
      },
      symptoms: [
        {
          zh: '秒锁速度比服务器延迟还快，有时候你也不确定你选了啥',
          en: 'You instalock faster than your ping, sometimes before you\'ve decided what you want',
          ja: 'Pingより早くインスタロックして、何を選んだかは選んでから確認する',
          ko: 'ping보다 빨리 인스타락. 뭘 골랐는지는 고른 다음에 확인한다.',
        },
        {
          zh: '死后五秒你就已经在给队友发位置播报',
          en: 'Five seconds after dying you\'re calling positions for teammates like it\'s your full-time job',
          ja: '死亡5秒後には味方に位置情報を送り始める',
          ko: '죽고 5초 후부터 팀원한테 위치 정보 송신 시작한다',
        },
        {
          zh: '你觉得自己的分析比你的打法更有价值',
          en: 'You genuinely believe your analysis is more valuable than your fragcount',
          ja: '自分のフラグ数より分析の方が価値があると本気で思ってる',
          ko: '킬 수보다 분석이 더 가치 있다고 진심으로 믿는다',
        },
        {
          zh: '队友不听你的调用，你觉得是他们的损失',
          en: 'When teammates ignore your calls, you decide it\'s their loss, not your communication',
          ja: '味方がコールを無視したら、「もったいない」と思って自分のせいだとは思わない',
          ko: '팀원이 콜 무시하면 "아깝다"고 생각하고 내 커뮤니케이션 문제는 아니라고 본다',
        },
        {
          zh: '你认为自己被低估了，但没有人知道这件事',
          en: 'You\'re underrated. You\'ve decided this. The data isn\'t cooperating.',
          ja: '自分は過小評価されてると思ってる。データは協力してくれてないけど。',
          ko: '자신이 저평가받고 있다고 생각한다. 데이터는 동의 안 한다.',
        },
      ],
      polarityPattern: {
        Bond: 'low',
        Intel: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'lineup-librarian',
      bestSquadSlug: 'clutch-narrator',
    },
    {
      slug: 'sheriff-economist',
      name: {
        zh: '警长经济学家',
        en: 'Sheriff Economist',
        ja: '警長エコノミスト',
        ko: '쉐리프 경제학자',
      },
      oneLiner: {
        zh: 'eco 回合靠 Sheriff 上分，独狼手感派，实用到底',
        en: 'Eco round. Sheriff. One-tap. Stolen rifle. Rinse.',
        ja: 'エコラウンドにシェリフで倒して相手のライフルを拾う。これが経済学。',
        ko: 'eco 라운드에 쉐리프 원탭. 라이플 줍는다. 이게 경제학이다.',
      },
      description: {
        zh: '你把 eco 回合当成一次投资机会。买把 Sheriff，省下枪钱，打出一个单击，拿下对面一把好枪——你叫这个"以小博大"。队友买 Spectre 你觉得太情绪化；你买 Sheriff 是理性选择。你不需要团队帮你清点，你一个人能靠信息差活下去。运气不好的时候你死得很快，但你从不把这归因于手感——是对面角度没想到。这种局赢下来，内心毫无波澜，但如果能截图裱起来挂客厅，你一定会挂。',
        en: 'An eco round is not a throwaway. It\'s an arbitrage opportunity. Buy the Sheriff. Save enough for next half. One-tap someone with a rifle, pick it up, flip the economy. Your teammates buy Spectres on eco — an emotional decision, you\'ve decided. Your Sheriff purchase is structural. You don\'t need the team to clear angles for you; you work the information edge alone. When it goes wrong, the angle was unexpected. That\'s a data point, not a mistake. The game slaps a THRIFTY banner on screen when you pull it off. You\'d frame it if you could.',
        ja: 'エコラウンドは捨てラウンドじゃない、投資機会だ。シェリフを買って、ライフルを持った相手を一発で倒して、拾う。これが経済的に正しい判断だ。チームがSpectre買うのは感情的な選択で、自分のシェリフは合理的な選択だ。一人で動いても情報差で生き残れる。うまくいかなかったときは、想定外のアングルがあっただけで、自分のミスじゃない。こういう勝ち方をしても顔には出さない。でもスクショを額に入れて飾れるなら、絶対に飾る。',
        ko: 'eco 라운드는 버리는 라운드가 아니다. 투자 기회다. 쉐리프 사고, 라이플 든 상대 원탭해서 줍는다. 이게 경제적으로 옳은 판단이다. 팀원이 스펙터 사는 건 감정적 선택이고, 내 쉐리프 구매는 합리적이다. 혼자 움직여도 정보 우위로 살아남는다. 안 풀릴 때는 예상 못 한 각도가 있었던 거지, 내 실수가 아니다. 이렇게 이겨도 티는 안 낸다. 근데 스크린샷을 액자에 넣어 걸 수 있다면, 진짜 걸 것이다.',
      },
      symptoms: [
        {
          zh: 'eco 回合你的 Sheriff 单击率比队友正常回合的 Vandal 还高',
          en: 'Your Sheriff one-tap rate on eco rounds is higher than teammates\' Vandal one-tap rate on full-buy',
          ja: 'エコラウンドのシェリフ一発率が、味方のフルバイVandal一発率より高い',
          ko: 'eco 라운드 쉐리프 원탭률이 팀원의 풀바이 반달 원탭률보다 높다',
        },
        {
          zh: '你在心里有一张每回合的经济表，能说出任何人的余额',
          en: 'You track everyone\'s economy in your head and can quote any teammate\'s credits at any point',
          ja: '全員の経済状況を頭の中で管理して、いつでも誰かの残高を答えられる',
          ko: '모든 팀원의 경제 상황을 머릿속에서 관리한다. 누구 잔액이든 말할 수 있다.',
        },
        {
          zh: '拿到对面枪你会说一句"稳了"，这是你最接近情绪表达的时刻',
          en: 'Picking up the enemy\'s rifle: you say "there we go" and that\'s your peak emotional expression',
          ja: '敵のライフルを拾ったとき「よし」と言う。これが自分の感情表現のピークだ。',
          ko: '적 라이플 줍고 "됐다"라고 말한다. 이게 감정 표현의 정점이다.',
        },
        {
          zh: '你觉得队友不买 Sheriff 是在浪费一个经济策略',
          en: 'You\'ve quietly judged every teammate who didn\'t consider the Sheriff on eco',
          ja: 'エコラウンドにシェリフを検討しない味方を、静かに評価している',
          ko: 'eco 라운드에 쉐리프 고려 안 하는 팀원을 조용히 평가한다',
        },
        {
          zh: '被问"你今天状态怎么样"，你会说枪钱够不够',
          en: 'Asked "how\'s your session going?" you instinctively answer with your current credits',
          ja: '「今日の調子は?」と聞かれたら、今の所持金で答えそうになる',
          ko: '"오늘 상태 어때?"라고 물으면 현재 잔액으로 대답할 것 같다',
        },
      ],
      polarityPattern: {
        Bond: 'low',
        Intel: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'clutch-narrator',
      bestSquadSlug: 'data-duelist',
    },
    {
      slug: 'sheriff-mystic',
      name: {
        zh: '警长一发玄学家',
        en: 'Sheriff Mystic',
        ja: 'シェリフ玄学師',
        ko: '감쉐리프',
      },
      oneLiner: {
        zh: '"我感觉他在那"——然后打中了，独狼手感表演派',
        en: '"I feel like he\'s there." *shoots* *hits*. No explanation needed.',
        ja: '「あそこにいる気がする」→ 当たる。説明はできない。',
        ko: '"거기 있을 것 같아서" → 맞음. 설명 불가.',
      },
      description: {
        zh: '你打 eco 回合用的是第六感而不是信息。"感觉他在那"说完直接一枪，然后打中了，然后假装从一开始就知道。这和 Sheriff 经济学家不同：他们算的，你是感应到的。你对运气的解释是"状态好"，对失手的解释是"角度不对"。没有人能和你解释这里面的逻辑，包括你自己。但你的那些 Sheriff 名场面截图，存了一个专属文件夹。',
        en: 'You didn\'t peek that angle because of information. You peeked it because something told you. The Sheriff went off, the kill registered, and you said "I knew it" before the death notification faded. This is not the same as the Sheriff Economist\'s calculation — there is no calculation. There\'s a feeling, and the feeling was right, and you have screenshots to prove it. The times the feeling was wrong are not stored in the same folder.',
        ja: 'エコラウンドで覗くのは情報じゃなくて、感覚だ。「あそこにいる気がする」でシェリフを撃ったら当たった。「わかってた」と言う前に確認通知が消えてる。これはシェリフエコノミストの計算とは違う。計算なんてない。感覚があって、それが当たって、スクショが残ってる。外れたときのスクショは別のフォルダには入れてない。',
        ko: 'eco 라운드에서 각도 보는 건 정보 때문이 아니다. 뭔가 느껴졌기 때문이다. "거기 있을 것 같아서" 쉐리프 쐈더니 맞았다. "알았어"라고 말하기 전에 사망 알림이 사라진다. 이건 쉐리프 경제학자의 계산과 다르다. 계산이 없다. 느낌이 있고, 그게 맞았고, 스크린샷이 있다. 빗나갔을 때 스크린샷은 다른 폴더에 없다.',
      },
      symptoms: [
        {
          zh: '"感觉他在那"是你最高频的一句话，且命中率高得离谱',
          en: '"I feel like he\'s there" is your most-used callout and it hits more than it should',
          ja: '「あそこにいる気がする」が最頻コールで、当たる確率がおかしい',
          ko: '"거기 있을 것 같아서"가 가장 많이 쓰는 콜이고, 적중률이 이상하게 높다',
        },
        {
          zh: '有时候你在没有任何信息的情况下往角落扔闪光弹，然后闪到人',
          en: 'You throw a flash into a corner with zero information and hit someone',
          ja: '情報ゼロで角にフラッシュを投げて、当てることがある',
          ko: '정보 없이 구석에 플래시 던졌는데 맞는다',
        },
        {
          zh: '你把你的"感应能力"和段位挂钩——你在白金，这种感应是白金级的',
          en: 'You\'ve quietly decided your "feel" correlates with rank: yours is Platinum-caliber intuition',
          ja: '自分の「感覚」は段位に対応してると思っていて、プラチナ級の直感と呼んでいる',
          ko: '자신의 "느낌"이 티어와 연동된다고 조용히 결론 냈다. 이건 플래티넘급 직감이다.',
        },
        {
          zh: '你的高光时刻名场面比正常对局的截图多三倍',
          en: 'Your highlight clip folder has three times the content of your regular match folder',
          ja: 'ハイライトフォルダが通常試合フォルダの3倍ある',
          ko: '하이라이트 폴더가 일반 경기 폴더보다 3배 많다',
        },
        {
          zh: '连续三次 Sheriff 命中之后你会觉得今天是"开窍之日"',
          en: 'Three consecutive Sheriff hits and you\'ve decided today is your enlightenment day',
          ja: 'シェリフを3連続で当てたら「今日は覚醒日だ」と思う',
          ko: '쉐리프 3연속 적중하면 "오늘이 각성일"이라고 생각한다',
        },
      ],
      polarityPattern: {
        Bond: 'low',
        Intel: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
      rivalSlug: 'sheriff-economist',
      bestSquadSlug: 'instalock-spectator',
    },
  ],
  questions: [
    // ── ANCHOR Q1: Bond ──────────────────────────────────────────────────────
    {
      id: 'val-a01',
      kind: 'anchor',
      text: {
        zh: '单排排到一局，队里另外四个人明显互相认识——一支四排车队，你是多出来的第五人。选人界面打开了，第一反应是？',
        en: 'Solo queue. The other four in your lobby clearly already know each other — a 4-stack, and you\'re the fifth wheel. Agent select opens. First move?',
        ja: 'ソロキュー。ロビーの他4人はもう知り合い同士——4人パーティーで、自分だけ後から加わった5人目だ。エージェント選択が開いた。最初の行動は？',
        ko: '솔로큐 돌렸는데 팀원 넷이 이미 서로 아는 사이다. 4인큐고, 나는 거기 낀 다섯 번째다. 에이전트 선택창 열렸다. 첫 행동은?',
      },
      options: [
        {
          label: {
            zh: '秒锁你的本命英雄，反正他们都配合好了，你选什么不重要',
            en: 'Instalock your one-trick. If they\'re already coordinated, your pick isn\'t going to change much.',
            ja: '自分の得意エージェントを即選び。もう連携できてるパーティーだし、自分の選択はそこまで重要じゃない。',
            ko: '원챔 인스타락한다. 어차피 넷이 이미 손발 맞춰뒀는데 내가 뭘 골라도 큰 차이 없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '在文字频道问一句"你们还缺什么"，然后补上那个位置',
            en: 'Ask in chat what the four of them still need, then flex into whatever\'s missing',
            ja: 'チャットで「まだ何が足りない?」と聞いて、足りない役割を埋める',
            ko: '채팅으로 "너희 뭐 부족해?" 물어보고 빈자리 채운다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '加载界面还没读完你就锁定了，他们缺什么自己想办法',
            en: 'Already locked before the loading screen even finished. Whatever they need, they\'ll sort it out.',
            ja: 'ロード画面が終わる前にもう選び終えてる。足りないものがあれば、向こうで何とかするだろう。',
            ko: '로딩 화면 끝나기도 전에 이미 락 했다. 뭐가 부족하든 걔네가 알아서 하겠지.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '还是加进他们的语音频道，问一句能不能把作战计划也算上你',
            en: 'Join their voice channel anyway and ask to be looped into the game plan, fifth wheel or not',
            ja: 'とりあえず彼らのボイスチャンネルに入って、自分も作戦に混ぜてもらえないか聞く',
            ko: '그래도 걔네 보이스 채널에 들어가서 작전에 나도 좀 껴달라고 물어본다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q2: Bond ──────────────────────────────────────────────────────
    {
      id: 'val-a02',
      kind: 'anchor',
      text: {
        zh: 'Haven A 点失守了，你会怎么做？',
        en: 'Haven A site just got taken. What do you do?',
        ja: 'ヘイヴンのAサイトが取られた。どうする？',
        ko: '헤이븐 A 사이트 뺏겼다. 어떻게 할 거야?',
      },
      options: [
        {
          label: {
            zh: '直接开语音，叫全队 retake，说好路线',
            en: 'Open voice, call the retake, give everyone a lane',
            ja: 'ボイスを開いて、全員にリテイクを呼びかけ、ルートを指示する',
            ko: '보이스 열고, 리테이크 콜하고, 팀원별 루트 지시한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '看小地图算算，自己去 B 打侧翼',
            en: 'Check the minimap, quietly go peel the B flank yourself',
            ja: 'ミニマップを確認して、一人でBフランクを剥がしに行く',
            ko: '미니맵 확인하고 혼자 B 측면 처리하러 간다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '在文字频道里发"retake A"，然后等人动',
            en: 'Type "retake A" in chat and wait to see who moves',
            ja: 'チャットに「リテイクA」と打って、誰かが動くのを待つ',
            ko: '"리테이크 A" 채팅 치고 누가 움직이는지 기다린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '你早就算出 retake 成本太高，已经绕去了 mid',
            en: 'Retake wasn\'t worth it by your calculation; you\'re already mid',
            ja: 'リテイクのコストが高すぎると判断して、すでにミッドに向かってる',
            ko: '리테이크 가성비가 낮다고 판단하고 이미 미드로 갔다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q3: Intel ─────────────────────────────────────────────────────
    {
      id: 'val-a03',
      kind: 'anchor',
      text: {
        zh: 'Sova 飞镖扫描没给任何信息。你现在怎么决定进点方向？',
        en: 'Sova dart scan came back empty. How do you pick a site to hit?',
        ja: 'ソーヴァのドローンスキャンで何も出なかった。どのサイトに入るか、どう決める？',
        ko: '소바 드론 스캔에 아무것도 안 잡혔다. 어떤 사이트로 들어갈지 어떻게 결정해?',
      },
      options: [
        {
          label: {
            zh: '结合上两局同一张图的对面习惯来判断',
            en: 'Base it on the enemy\'s pattern from the last two rounds on this map',
            ja: '過去2ラウンドのこのマップでの相手のパターンをもとに判断する',
            ko: '이 맵에서 지난 두 라운드 상대 패턴 기반으로 판단한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '"感觉应该打 B"——就这样',
            en: '"Feels like B." That\'s the entire call.',
            ja: '「Bな気がする」。それだけ。',
            ko: '"B인 것 같아서." 그게 전부다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看经济——他们有多少钱，大概率会守哪',
            en: 'Check their economy — with that budget, they\'re most likely stacking one side',
            ja: '相手の経済を見る。そのお金なら、どちらかに集まってるはず。',
            ko: '상대 경제 보고 판단한다. 그 예산이면 한 쪽에 몰려 있을 가능성이 높다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '就是今天"手感"告诉我打 A，我信它',
            en: 'My read right now says A. I trust that over the stats.',
            ja: '今の直感がAと言ってる。データより自分の感覚を信じる。',
            ko: '지금 느낌이 A라고 한다. 통계보다 그 느낌을 믿는다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q4: Intel ─────────────────────────────────────────────────────
    {
      id: 'val-a04',
      kind: 'anchor',
      text: {
        zh: '赛后数据显示你击杀最少。你怎么看这件事？',
        en: 'Post-match stats show you had the lowest kill count. Your interpretation?',
        ja: '試合後のスタッツで、あなたのキル数が最少だった。どう捉える？',
        ko: '경기 후 스탯 보니 킬 수가 제일 낮다. 어떻게 해석해?',
      },
      options: [
        {
          label: {
            zh: '看 ACS、首死率、工具使用率，再说',
            en: 'Check ACS, first-death rate, util usage — kills don\'t tell the story',
            ja: 'ACS、ファーストデス率、ユーティリティ使用率を確認する。キル数だけでは判断できない。',
            ko: 'ACS, 첫 사망률, 유틸 사용률 확인한다. 킬 수만으로는 판단 못 한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '说不定今天手感不好，下局会好的',
            en: 'Off day. The aim comes back; you can feel it.',
            ja: '調子が悪いだけ。エイムは戻ってくる感覚がある。',
            ko: '오늘 컨디션이 나쁜 것뿐이다. 에임은 돌아온다, 느껴진다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '我的位置本来就是 util 投送，不是开枪的',
            en: 'My role was utility delivery — not entry frags; the data should reflect that',
            ja: '自分の役割はユーティリティを使うことで、エントリーフラグじゃない。データもそれを反映すべき。',
            ko: '내 역할은 유틸 사용이지 진입킬이 아니다. 데이터가 그걸 반영해야 한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感觉打得挺好的，数据不一定准',
            en: 'Felt solid to me. Stats don\'t always capture what happened.',
            ja: '自分では良くプレイしたと思う。スタッツが全てを表してるわけじゃない。',
            ko: '본인은 잘 한 것 같다. 통계가 항상 실상을 반영하지는 않는다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q5: Flair ─────────────────────────────────────────────────────
    {
      id: 'val-a05',
      kind: 'anchor',
      text: {
        zh: 'Killjoy 大招把对面封在 B 点拿下了。你的胜利感来自哪里？',
        en: 'Killjoy ult locked the enemy in and your team won the round. What feels best?',
        ja: 'キルジョイのウルトで敵をBに閉じ込めて勝った。一番嬉しいのは？',
        ko: '킬조이 궁으로 적을 B에 가뒀고 라운드 이겼다. 어느 부분이 제일 좋아?',
      },
      options: [
        {
          label: {
            zh: '纯粹是结果——又赢了一局',
            en: 'The win. That\'s it. Another round in the bag.',
            ja: '結果だけ。もう1ラウンド取った、それだけ。',
            ko: '그냥 이긴 것. 라운드 하나 더 챙겼다, 그게 다야.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '整个团队的执行——烟点踩到位，大招交得好',
            en: 'The clean execution: smokes were perfect, ult timing was right',
            ja: 'チーム全体の実行。スモークの位置が完璧で、ウルトのタイミングが良かった。',
            ko: '팀 전체 실행이 깔끔했다: 스모크 위치 완벽, 궁 타이밍도 맞았다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '有人截图了吗？这一局太适合发群里了',
            en: 'Did anyone clip that? This round needs to go in the group chat.',
            ja: 'これ誰かクリップした？グループチャットに送らないと。',
            ko: '누가 클립했어? 이 라운드 단톡에 올려야 하는데.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '看了一眼数据确认思路对了，继续',
            en: 'Checked the round stats to confirm the read was correct, moving on',
            ja: 'ラウンドのスタッツを確認して、読みが正しかったことを確かめ、次に進む',
            ko: '라운드 스탯 확인해서 판단이 맞았는지 검증하고 다음으로 넘어간다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q6: Flair ─────────────────────────────────────────────────────
    {
      id: 'val-a06',
      kind: 'anchor',
      text: {
        zh: '你的 1v2 击杀片段。你会怎么处理它？',
        en: 'You just had a 1v2 clutch. What happens next?',
        ja: '1v2クラッチが決まった。次は何をする？',
        ko: '1v2 클러치 성공했다. 다음에 뭐 해?',
      },
      options: [
        {
          label: {
            zh: '马上截图，先传语音里，再发朋友圈',
            en: 'Screenshot immediately — into the voice group, then onto socials',
            ja: 'すぐスクショしてボイスグループに送って、SNSにも投稿する',
            ko: '바로 스크린샷 찍어서 보이스 단톡에 올리고, SNS에도 올린다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '看了一下角度，分析对面为什么没有逃脱，继续下一局',
            en: 'Look at the angles, figure out why they couldn\'t trade out, next round',
            ja: 'アングルを確認して、なぜ相手がトレードできなかったか分析し、次のラウンドへ',
            ko: '각도 확인하고, 왜 상대가 교환 못 했는지 분석하고, 다음 라운드 진행',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '跟队友说了一句"稳了"，然后什么都没留',
            en: 'Told the team "got it," moved on, no clip saved',
            ja: '「取った」と言って次に進む。クリップは保存しない。',
            ko: '"잡았다" 팀한테 말하고 넘어간다. 클립 저장 안 한다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '把那段录屏存下来，等局后复盘走位细节',
            en: 'Save the footage to rewatch the movement decisions after the match',
            ja: '録画を保存して、試合後に動きの判断を見直す',
            ko: '녹화 저장해놓고 경기 후에 이동 판단 복기한다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q7: Tempo ─────────────────────────────────────────────────────
    {
      id: 'val-a07',
      kind: 'anchor',
      text: {
        zh: '第一回合结束，你会怎么打第二回合？',
        en: 'Round one just ended. What\'s your round two approach?',
        ja: '1ラウンド目が終わった。2ラウンド目の進め方は？',
        ko: '1라운드 끝났다. 2라운드 어떻게 진행해?',
      },
      options: [
        {
          label: {
            zh: '用刚才那局收集的信息决定走法，稳步推进',
            en: 'Use the info from round one to set the pace — slow and deliberate',
            ja: '1ラウンドで得た情報を使って、ゆっくり慎重に進める',
            ko: '1라운드에서 얻은 정보를 활용해서 천천히 신중하게 진행한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '直接全压，对面还没摸清楚怎么守就强推',
            en: 'Full execute before they\'ve settled — hit them before they can adjust',
            ja: '相手が守りを固める前にフルエクスキュートを仕掛ける',
            ko: '상대가 자리 잡기 전에 바로 풀 엑스큐트 들어간다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先走信息，再决定打不打',
            en: 'Gather information first, commit only after seeing something',
            ja: 'まず情報を取ってから、何かを確認したあとで動く',
            ko: '먼저 정보 모으고, 뭔가 확인한 다음에 움직인다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '懒得等，直接冲，对面没想到就是最好的道具',
            en: 'Go now. Surprise is better utility than any grenade.',
            ja: '今動く。驚かすことが最高のユーティリティだ。',
            ko: '지금 간다. 기습이 어떤 유틸보다 낫다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q8: Tempo ─────────────────────────────────────────────────────
    {
      id: 'val-a08',
      kind: 'anchor',
      text: {
        zh: '对面上半场一直守得很死。下半你攻。你的开场思路是？',
        en: 'The enemy stacked hard all first half. You\'re on attack next. Opening plan?',
        ja: '前半は相手がずっと固めていた。後半はあなたが攻める。最初のプランは？',
        ko: '전반에 상대가 계속 단단하게 수비했다. 후반은 공격 차례다. 첫 계획은?',
      },
      options: [
        {
          label: {
            zh: '先默开局，看他们的 setup 再调整',
            en: 'Default first round, read their setup, adjust from there',
            ja: '最初はデフォルトで動いて、相手のセットアップを読んでから調整する',
            ko: '첫 라운드 디폴트로 돌면서 상대 셋업 파악하고 나서 조정한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '直接 A 点速推，让他们没时间站位',
            en: 'Straight A-site rush — deny them time to set up',
            ja: 'いきなりAサイトにラッシュして、相手がポジションを取る時間を与えない',
            ko: '바로 A 사이트 러시해서 상대가 자리 잡을 시간 안 준다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '打一个假信息拉他们动，再去真实的方向',
            en: 'Send a fake to move them, then hit the real site',
            ja: 'フェイクを仕掛けて相手を動かし、本命サイトを狙う',
            ko: '페이크로 상대 움직이게 한 다음에 진짜 사이트 들어간다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '快速冲 B——前半他们没想到，现在也没想到',
            en: 'Quick B — they weren\'t expecting it first half, probably still won\'t',
            ja: 'Bに素早く突っ込む。前半も予想してなかったし、今もしてないだろう。',
            ko: 'B 빠르게 간다. 전반에도 예상 못 했으니 지금도 마찬가지일 거다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q9: Nerve ─────────────────────────────────────────────────────
    {
      id: 'val-a09',
      kind: 'anchor',
      text: {
        zh: '你在 Operator 位上，对面肯定有人会换我过去。你怎么做？',
        en: 'You\'re holding an Operator angle. They\'re going to run someone at you. Do you peek or wait?',
        ja: 'オペレーターアングルを守っている。相手が突っ込んできそうだ。覗くか待つか？',
        ko: '오퍼레이터 각도 잡고 있다. 상대가 달려올 것 같다. 피킹하나, 기다리나?',
      },
      options: [
        {
          label: {
            zh: '等他过来——Operator 守的是时间',
            en: 'Wait for them to come to you — the Operator owns that lane',
            ja: '相手が来るのを待つ。オペレーターはそのレーンを支配してる。',
            ko: '상대가 오기를 기다린다. 오퍼레이터는 그 레인을 지배한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '主动探头，对面不一定敢接',
            en: 'Peek first — maybe they flinch',
            ja: '先に覗く。相手が怯えるかもしれない。',
            ko: '먼저 피킹한다. 상대가 움츠러들 수도 있다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '后撤再找新角度，不给他们落弹点',
            en: 'Reposition to a new angle — don\'t let them prefab where you are',
            ja: '新しいアングルに退いて、場所を特定されないようにする',
            ko: '새 각도로 후퇴한다. 상대가 내 위치를 파악하지 못하게.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '他们能来就来，我已经在等了，但我随时可以冲',
            en: 'They can come or not. Staying, but ready to push the moment they slow down.',
            ja: '来ても来なくても。待ってるけど、相手が遅くなった瞬間に突っ込む準備はできてる。',
            ko: '오든 말든. 기다리지만, 상대가 느려지는 순간 돌진할 준비는 됐다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q10: Nerve ────────────────────────────────────────────────────
    {
      id: 'val-a10',
      kind: 'anchor',
      text: {
        zh: 'eco 回合，你的余额只够买 Classic + 护甲。你会怎么选？',
        en: 'Eco round. You can afford Classic plus light shield. How do you play it?',
        ja: 'エコラウンド。Classic＋ライトシールドしか買えない。どう動く？',
        ko: 'eco 라운드. Classic에 라이트 실드만 살 수 있다. 어떻게 할 거야?',
      },
      options: [
        {
          label: {
            zh: '省着打，能换一个人就够了',
            en: 'Passive play — a trade is good enough on eco',
            ja: '受け身でいく。エコでトレードが取れれば十分だ。',
            ko: '소극적으로 플레이. eco 라운드에서 교환만 해도 충분하다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '抢 Sheriff——eco 就是投资机会',
            en: 'Steal from the buy phase — grab a Sheriff if someone else has one saved',
            ja: 'バイフェーズで調達する。誰かがシェリフを持ってたら借りる。',
            ko: '바이 페이즈에서 확보한다. 누가 쉐리프 모아뒀으면 빌린다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接冲，eco 轮子弹省着用不如赌一把',
            en: 'Rush in — saving bullets on eco is worse than gambling a good angle',
            ja: 'ラッシュする。エコで弾を節約するより、良いアングルに賭けた方がいい。',
            ko: '돌진한다. eco에서 총알 아끼는 것보다 좋은 각도에 거는 게 낫다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '找最好的角度等换弹，有一把好枪再接',
            en: 'Best passive angle possible, wait for a rifle pickup off the first kill',
            ja: '最高のパッシブアングルで待ち、最初のキルでライフルを拾う機会を待つ',
            ko: '최적 수비 각도 잡고, 첫 킬 후 라이플 줍기 기회 기다린다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q11: Mental ───────────────────────────────────────────────────
    {
      id: 'val-a11',
      kind: 'anchor',
      text: {
        zh: '你连续三局死在同一个角度。你怎么反应？',
        en: 'You died from the same angle three rounds in a row. Your reaction?',
        ja: '3ラウンド連続で同じアングルから死んだ。どう反応する？',
        ko: '같은 각도에서 3라운드 연속으로 죽었다. 어떻게 반응해?',
      },
      options: [
        {
          label: {
            zh: '换路线。就这么简单，下次不从那里过了',
            en: 'Change the approach. Simple. That angle is off the list.',
            ja: 'ルートを変える。それだけ。次はそのアングルを通らない。',
            ko: '루트 바꾼다. 간단하다. 그 각도는 목록에서 지웠다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '说句"什么鬼角度"，然后第四局还是从那过',
            en: 'You say "what angle is that" and somehow go back a fourth time',
            ja: '「なんのアングルだよ」と言って、どういうわけか4回目も同じとこを通る',
            ko: '"뭔 각도야" 하고 4번째에도 같은 데로 간다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '标记那个点，跟队友说"小心那里"，然后不再烦恼',
            en: 'Ping it for teammates and move on without dwelling on it',
            ja: '味方にその場所をピングして、引きずらずに次に進む',
            ko: '팀원한테 핑 찍어주고 미련 없이 다음으로 넘어간다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '在频道里分析那个角度的不合理性，同时心里有点红了',
            en: 'Analyze how unfair that angle is in chat, while the tilt builds quietly',
            ja: 'チャットでそのアングルがいかにおかしいか分析しながら、内心少し炎上してる',
            ko: '채팅에서 그 각도가 얼마나 말이 안 되는지 분석하면서, 속으로 슬슬 열받는다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q12: Mental ───────────────────────────────────────────────────
    {
      id: 'val-a12',
      kind: 'anchor',
      text: {
        zh: 'Sage 把墙建在你面前，挡住了你进点的路。你的第一反应是？',
        en: 'Sage just walled right in front of you mid-entry. Your immediate response?',
        ja: 'セージが進入中の自分の目の前に壁を建てた。最初の反応は？',
        ko: '세이지가 진입 중인 내 바로 앞에 벽 놨다. 첫 반응은?',
      },
      options: [
        {
          label: {
            zh: '什么都不说，找新的路线，继续',
            en: 'Nothing. Find another path. Keep playing.',
            ja: '何も言わない。別のルートを探す。続ける。',
            ko: '아무 말 안 한다. 다른 루트 찾는다. 계속한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '语音里说一声"这个墙有点问题"，然后继续',
            en: 'Say once in voice "that wall was a bit rough" and move on',
            ja: 'ボイスで「その壁はちょっとまずかった」と一言言って次に進む',
            ko: '보이스로 "그 벽 좀 아닌 것 같은데" 한 마디 하고 넘어간다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '你整局都在记着这件事，第四局又提了一次',
            en: 'You\'re still thinking about it four rounds later when you mention it again',
            ja: '4ラウンド後にもまだ覚えていて、また言及する',
            ko: '4라운드 지나서도 기억하고 있다가 또 언급한다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '马上开语音解释"以后墙要放这个位置才对"',
            en: 'Jump on voice immediately to explain the correct wall placement',
            ja: '即座にボイスに乗って「壁はこっちに置かないとダメ」と説明する',
            ko: '바로 보이스 켜서 "벽은 여기 놔야 돼" 설명한다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q13: Bond + Intel ───────────────────────────────────────────
    {
      id: 'val-c13',
      kind: 'compound',
      text: {
        zh: '你在语音里。队友说"感觉 B 点有人"。你会？',
        en: 'In voice. A teammate says "I think someone\'s on B." What do you do?',
        ja: 'ボイスで話してる。味方が「Bに誰かいる気がする」と言った。どうする？',
        ko: '보이스 중이다. 팀원이 "B에 누군가 있을 것 같아"라고 한다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '说"你有什么信息支撑这个判断？"',
            en: '"What information are you basing that on?"',
            ja: '「その判断の根拠となる情報は何?」と聞く',
            ko: '"그 판단 근거가 되는 정보가 뭔데?"라고 묻는다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '沉默，自己判断，向 B 送一颗闪光探探',
            en: 'Quiet, form your own read, throw a flash toward B to check',
            ja: '黙って自分で判断し、Bに向けてフラッシュを投げて確認する',
            ko: '조용히 자기 판단 세우고, B 쪽으로 플래시 던져서 확인한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '说"好，那我们全往 B 转"，调度全队',
            en: '"Copy that. Full rotate B" — you call it and move everyone',
            ja: '「了解。全員Bに回る」と言ってチームを動かす',
            ko: '"알겠어. 전원 B로 로테이션" 하고 팀 전체 움직인다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '觉得他说得对，跟着感觉一起往 B 走',
            en: 'Trust the vibe, move toward B with them',
            ja: '感覚を信じて一緒にBに向かう',
            ko: '직감 믿고 같이 B로 간다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q14: Bond + Intel ───────────────────────────────────────────
    {
      id: 'val-c14',
      kind: 'compound',
      text: {
        zh: '队友想在 post-plant 阶段守死，你觉得位置不好。你怎么做？',
        en: 'Post-plant. Teammate wants to hold a position you think is wrong. Your call?',
        ja: 'ポストプラント。味方が守りたいポジションが間違いだと思う。どうする？',
        ko: 'post-plant 단계. 팀원이 잡으려는 포지션이 틀렸다고 생각한다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '告诉他"那个角度会被 Sova 弹到，换一个"',
            en: 'Tell them "that angle gets Sova-darted, move over here"',
            ja: '「そのアングルはソーヴァのダーツに当たる、こっちに移動して」と伝える',
            ko: '"그 각도 소바 다트에 맞아. 여기로 옮겨"라고 말한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '不说话，自己找更好的点等着',
            en: 'Say nothing. Find a better spot yourself and hold it.',
            ja: '何も言わない。自分でいいポジションを見つけて守る。',
            ko: '아무 말 안 하고 혼자 더 나은 포지션 찾아서 잡는다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '跟队友说"感觉那里不对"，但说不清为什么',
            en: '"That spot feels off." You can\'t fully explain why, but you say it.',
            ja: '「そのポジション、なんかおかしい気がする」と言う。なぜかは説明できない。',
            ko: '"그 자리 좀 이상한 것 같아." 왜인지는 설명 못 하지만 말은 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '你也不确定谁对，干脆两个人守两个不同位置',
            en: 'Unsure who\'s right — you two cover different angles and see what happens',
            ja: 'どちらが正しいか自信がない。二人で別々のアングルを守って様子を見る。',
            ko: '누가 맞는지 확신 없어서 둘이서 다른 각도 잡고 봐도 된다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q15: Bond + Intel ───────────────────────────────────────────
    {
      id: 'val-c15',
      kind: 'compound',
      text: {
        zh: '你队 VOD 复盘时间，有人说你的道具使用率太低。你？',
        en: 'Team VOD review. Someone says your util usage is too low. Your response?',
        ja: 'チームのVOD振り返り。誰かが「あなたのユーティリティ使用率が低すぎる」と言った。反応は？',
        ko: '팀 VOD 복기 시간. 누군가 "유틸 사용률이 너무 낮다"고 한다. 반응은?',
      },
      options: [
        {
          label: {
            zh: '打开数据，对比同段位平均值，看看是不是真的低',
            en: 'Pull up the stats, compare to rank average — see if the data backs the claim',
            ja: 'データを開いて、同ランク平均と比較して、実際に低いか確認する',
            ko: '스탯 열고 같은 티어 평균이랑 비교해서 실제로 낮은지 확인한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '说"感觉我交得挺对时机的"——不看数据',
            en: '"I felt like my timing was fine." No stats check.',
            ja: '「タイミングは合ってたと思う」スタッツは確認しない。',
            ko: '"내 타이밍은 괜찮았다고 느꼈는데." 스탯은 안 본다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '已经在自己的笔记里记了哪局道具没用好，不需要别人说',
            en: 'You already noted which rounds you wasted util. You don\'t need someone to tell you.',
            ja: 'すでに自分のメモにどのラウンドでユーティリティを無駄にしたか書いてある。言われるまでもない。',
            ko: '이미 내 메모에 어느 라운드에서 유틸 낭비했는지 적어뒀다. 말 안 해줘도 안다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '说"我主观上感觉用的挺多的"然后不再管这件事',
            en: '"Felt like I used plenty." Drop it and move on.',
            ja: '「自分ではかなり使ったと思うけど」と言って、気にしない。',
            ko: '"주관적으론 많이 쓴 것 같은데." 그냥 넘어간다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q16: Bond + Flair ───────────────────────────────────────────
    {
      id: 'val-c16',
      kind: 'compound',
      text: {
        zh: '你走侧翼偷袭，一刀解决了对方 IGL。你接下来？',
        en: 'You flanked and one-shot the enemy IGL with a knife. Now what?',
        ja: 'フランクして、ナイフで相手のIGLをワンショットした。次は？',
        ko: '측면 돌아서 나이프로 상대 IGL 원킬했다. 이제 뭐 해?',
      },
      options: [
        {
          label: {
            zh: '继续跟进，乘胜追击后点',
            en: 'Keep pushing the advantage — chase the round home',
            ja: '勢いに乗って攻め続ける。ラウンドを決めに行く。',
            ko: '기세 몰아서 계속 밀고 나간다. 라운드 마무리한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '马上在语音里说"IGL 死了，全压"',
            en: 'Voice call immediately: "IGL\'s down, full send"',
            ja: '即座にボイスで「IGLが死んだ、全員突撃」と叫ぶ',
            ko: '바로 보이스로 "IGL 죽었다, 전원 풀 전송" 외친다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '先截图再进攻——这种那刀得留下来',
            en: 'Screenshot first, then push — that knife clip isn\'t going to save itself',
            ja: '先にスクショして、それから突っ込む。あのナイフクリップは自動保存されない。',
            ko: '스크린샷 먼저 찍고 돌진한다. 그 나이프 클립은 알아서 저장 안 된다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '叫队友一起 rotate，然后在语音里骄傲地说"刀死了"',
            en: 'Call team to rotate while proudly announcing "just knifed their IGL" in voice',
            ja: 'チームにローテーションを呼びかけながら、ボイスで誇らしく「IGLをナイフで倒した」と報告する',
            ko: '팀한테 로테이션 콜하면서 보이스로 자랑스럽게 "방금 상대 IGL 나이프킬했다" 공지한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q17: Bond + Flair ───────────────────────────────────────────
    {
      id: 'val-c17',
      kind: 'compound',
      text: {
        zh: '你们赢了一局高难度的 retake。你在语音里的第一句话是？',
        en: 'Your team just pulled off a hard retake. First thing out of your mouth in voice?',
        ja: 'チームで難しいリテイクを成功させた。ボイスで最初に言う言葉は？',
        ko: '팀이 어려운 리테이크 성공했다. 보이스에서 첫 마디는?',
      },
      options: [
        {
          label: {
            zh: '沉默——检查下一局的经济',
            en: 'Silence — checking the economy for next round',
            ja: '無言で次のラウンドの経済を確認してる',
            ko: '침묵. 다음 라운드 경제 확인 중.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"打得好！"然后继续分析哪里还可以更好',
            en: '"Good work!" then immediately discuss what could be cleaner',
            ja: '「よかった！」すぐに「でもここをもっとうまくできたよね」と話す',
            ko: '"잘했어!" 그 다음 바로 "근데 여기가 더 깔끔할 수 있었는데" 분석 시작',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"我早说可以 retake 的！"——然后心里爽到飞起',
            en: '"Told you we could retake!" — you\'re flying inside',
            ja: '「リテイクできるって言ったじゃん！」内心最高に気持ちいい',
            ko: '"리테이크 된다고 했잖아!" 속으로 기분 최고다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"六点钟来！"——带着全队继续冲',
            en: '"Let\'s go! Pistol up! Rotate now!" — rallying everyone for the next round',
            ja: '「行くぞ！全員次のラウンドに備えろ！」全員を盛り上げる',
            ko: '"가자! 다음 라운드 준비해!" 전원 분위기 끌어올린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q18: Bond + Flair ───────────────────────────────────────────
    {
      id: 'val-c18',
      kind: 'compound',
      text: {
        zh: '你喜欢的战队在冠军赛赛点被翻盘了。（DRX 粉丝：这剧本你们比谁都熟。）你会怎么做？',
        en: 'Your favorite team just choked a match point at Champions. (DRX fans, you know this script by heart.) What do you do?',
        ja: '応援してるチームがチャンピオンズのマッチポイントで逆転された（DRXファンにはお馴染みの展開のはず）。どうする？',
        ko: '응원하는 팀이 챔피언스 매치 포인트에서 역전당했다. (DRX 팬이면 이 각본 누구보다 잘 알 거다.) 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '剩下的一天都不想说话，安静一下',
            en: 'Go quiet for the rest of the day. Not ready to talk about it.',
            ja: 'その日はもう何も話したくない。静かに過ごす。',
            ko: '그날은 그냥 말하고 싶지 않다. 조용히 있는다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '马上重播 VOD，冷静地看清楚到底哪一步崩的',
            en: 'Rewatch the VOD immediately, calmly, to see exactly where the round fell apart',
            ja: 'すぐVODを見直す。どこで崩れたのか、冷静に確認する。',
            ko: '바로 VOD 다시 본다. 어디서 무너졌는지 냉정하게 확인한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '自己马上开一把——今天总得有人赢一把',
            en: 'Queue up yourself, immediately. Someone\'s winning something today.',
            ja: '自分で今すぐキューを入れる。今日は誰かが勝たないと気が済まない。',
            ko: '본인이 바로 큐 넣는다. 오늘은 누구라도 이겨야 한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '在聊天里打一整段小作文，分析这波裁判和版本有多离谱——总得有人说',
            en: 'Type a full essay in chat about how the patch or the ref screwed them. Someone has to say it.',
            ja: 'チャットに長文で「あのパッチかジャッジがおかしい」と書き込む。誰かが言わなきゃいけない。',
            ko: '채팅에 장문으로 "이번 판정이나 패치가 진짜 이상했다" 쓴다. 누군가는 말해야 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q19: Intel + Flair ──────────────────────────────────────────
    {
      id: 'val-c19',
      kind: 'compound',
      text: {
        zh: '你刚用 TenZ 那个青色小圆点的准星代码，打出一个不可思议的甩枪。你怎么跟自己说？',
        en: 'You just landed an impossible flick using TenZ\'s exact cyan-dot crosshair code. What do you tell yourself?',
        ja: 'TenZの水色ドットのクロスヘアコードで、信じられないフリックを決めた。自分に何と言う？',
        ko: '텐지의 그 시안색 점 크로스헤어 코드로 말도 안 되는 플릭을 성공시켰다. 자신에게 뭐라고 해?',
      },
      options: [
        {
          label: {
            zh: '"今天状态好而已，跟准星没关系"',
            en: '"That\'s just good aim today. The crosshair\'s got nothing to do with it."',
            ja: '「今日は調子がいいだけ。クロスヘアは関係ない。」',
            ko: '"오늘 컨디션이 좋은 것뿐. 크로스헤어랑은 상관없다."',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '截图死亡列表发群里："准星是工具，手是我的"',
            en: 'Screenshot the kill feed, send it to the group chat: crosshair\'s just a tool, the hand is yours',
            ja: 'キルフィードをスクショしてグループに送る。「クロスヘアは道具、手は自分のだ」',
            ko: '킬피드 스크린샷 찍어서 단톡에 올린다: "크로스헤어는 도구고, 손은 내 거야."',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"其实是准星的问题——可视性和形状都比原来的强，这话不能往外说"',
            en: '"Honestly, it\'s the crosshair. Better visibility, cleaner geometry." You\'re not telling anyone that.',
            ja: '正直、クロスヘアのおかげだ。視認性も形も前よりいい。これは誰にも言わない。',
            ko: '솔직히 크로스헤어 덕이다. 시인성도 모양도 낫다. 이건 아무한테도 말 안 한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"这就是我！"发出去还 @ 了两个人——结果接下来三枪全丢，默默换回旧设置',
            en: '"This is me!" Post it, tag two friends. Whiff the next three shots and quietly revert to your old settings.',
            ja: '「これが自分だ！」と投稿して友達を二人タグ付け。次の3発を外して、こっそり元の設定に戻す。',
            ko: '"이게 나야!" 올리고 친구 두 명 태그. 다음 세 발은 다 놓치고 조용히 원래 설정으로 되돌린다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q20: Intel + Flair ──────────────────────────────────────────
    {
      id: 'val-c20',
      kind: 'compound',
      text: {
        zh: '决胜局，15:15，最后一回合。你怎么决定进攻方向？',
        en: 'Match point, 15-15, final round. How do you decide the site?',
        ja: 'マッチポイント、15-15、最終ラウンド。どのサイトに入るか、どう決める？',
        ko: '매치 포인트, 15:15, 마지막 라운드. 사이트 어떻게 결정해?',
      },
      options: [
        {
          label: {
            zh: '跑数据——他们守 A 的次数比 B 多，所以打 B',
            en: 'Run the numbers — they\'ve stacked A more than B; go B',
            ja: 'データを出す。AよりBの方が守り回数が多い。Bを打つ。',
            ko: '데이터 뽑는다. A보다 B 수비 횟수 많다. B로 간다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"感觉是 B"——直接叫，自信满满',
            en: '"Feeling B." Called it. Full confidence.',
            ja: '「感覚ではB。」そう言った。全力で自信がある。',
            ko: '"느낌이 B야." 확신을 갖고 콜한다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '分析了半局，觉得无论打哪里都挺冒险的，随便拉张图',
            en: 'Spent half the round analyzing and decided it\'s equally risky either way, random pick',
            ja: '半分のラウンドを分析して、どちらも同じくらいリスクがあると判断して、ランダムで選ぶ',
            ko: '반 라운드 분석했는데 어느 쪽도 비슷하게 리스키해서 랜덤으로 고른다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '说"无论怎么打，打好了都是名场面"——激励全队',
            en: '"Wherever we go, if we execute clean, it\'s a highlight reel either way."',
            ja: '「どちらに行っても、ちゃんと実行すれば名場面になる。」チームを鼓舞する。',
            ko: '"어느 사이트든 깔끔하게 실행하면 하이라이트 될 거야." 팀 사기 올린다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q21: Intel + Flair ──────────────────────────────────────────
    {
      id: 'val-c21',
      kind: 'compound',
      text: {
        zh: '你的队友问"今天你状态怎么样"。你怎么回答？',
        en: 'Teammate asks "how\'s your form today?" What do you say?',
        ja: '味方が「今日の調子はどう？」と聞いた。何と答える？',
        ko: '팀원이 "오늘 폼 어때?" 묻는다. 뭐라고 대답해?',
      },
      options: [
        {
          label: {
            zh: '"K/D 现在 1.8，烟点命中率 89%"',
            en: '"K/D is 1.8, util hit rate 89%"',
            ja: '「KDは1.8、ユーティリティ命中率89%」',
            ko: '"K/D 1.8, 유틸 명중률 89%"',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"手感来了，今天可以"',
            en: '"Aim\'s on. Today\'s good."',
            ja: '「エイムが来てる。今日はいける。」',
            ko: '"에임 살아있어. 오늘 괜찮아."',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '"待会儿你们看着吧"——然后什么都没解释',
            en: '"Just watch." Nothing else.',
            ja: '「見てろよ。」それだけ。',
            ko: '"지켜봐." 그 이상 설명 없다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"上半场命中率下降了 12%，正在调整"',
            en: '"Hit rate dropped 12% in the first half. Adjusting."',
            ja: '「前半のヒット率が12%下がってる。調整中。」',
            ko: '"전반 명중률 12% 떨어졌어. 조정 중."',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q22: Bond + Tempo ───────────────────────────────────────────
    {
      id: 'val-c22',
      kind: 'compound',
      text: {
        zh: '全队问"谁来 call？"没人说话。你会？',
        en: 'Nobody\'s calling. Silence in voice. The round clock is ticking. You?',
        ja: '誰もコールしない。ボイスが静かなまま、ラウンドの時計が進んでいる。あなたは？',
        ko: '아무도 콜 안 한다. 보이스 조용하다. 라운드 시계 돌아간다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '马上接过来，快速说一个方向让大家动',
            en: 'Take it immediately — give a quick call and get everyone moving',
            ja: 'すぐ引き取って、素早くコールを出してみんなを動かす',
            ko: '바로 받아서 빠르게 콜 내고 전원 움직인다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等一会儿，看看有没有人自然说',
            en: 'Wait to see if someone steps up naturally',
            ja: 'しばらく待って、誰かが自然に引き受けるか見る',
            ko: '잠깐 기다려서 누가 자연스럽게 나서는지 본다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '自己判断，直接走，不需要全队协调',
            en: 'Make your own read, move independently — no coordination needed',
            ja: '自分で判断して動く。チームの調整は不要。',
            ko: '혼자 판단해서 움직인다. 팀 조율 필요 없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等等看情况，不急——如果局势不明就守着',
            en: 'Hold position, read the situation — rushing in blind isn\'t the answer',
            ja: '状況を読む。盲目的に動くのは答えじゃない。',
            ko: '포지션 잡고 상황 읽는다. 눈감고 들어가는 건 답이 아니다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q23: Intel + Tempo ──────────────────────────────────────────
    {
      id: 'val-c23',
      kind: 'compound',
      text: {
        zh: '对面开局就 rush B。你有信息，但时机已经到了。你选择？',
        en: 'They B-rushed early. You have information, but the window is now. What do you do?',
        ja: '相手が序盤にBラッシュしてきた。情報はあるが、タイミングは今だ。どうする？',
        ko: '상대가 초반에 B 러시 왔다. 정보는 있다. 근데 타이밍은 지금이다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '立刻反应，往 B 冲——信息已经够了',
            en: 'React now, go B — enough information to act',
            ja: '今すぐ反応してBに向かう。行動するのに十分な情報がある。',
            ko: '바로 반응해서 B로 간다. 행동하기에 충분한 정보다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先算一算他们的速度和我们的到位时间，再决定',
            en: 'Calculate their speed vs your rotate time before committing',
            ja: '先に相手のスピードと自分のローテート時間を計算してから動く',
            ko: '상대 속도 대비 내 로테이션 시간 계산하고 나서 결정한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '"感觉来得及"——直接上',
            en: '"Feels like we can make it." Go.',
            ja: '「間に合う気がする。」行く。',
            ko: '"될 것 같아서." 간다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '守着当前位置，等他们进点再打信息战',
            en: 'Hold current position, play information when they commit to the site',
            ja: '今のポジションを守って、相手がサイトに入ってから情報戦を仕掛ける',
            ko: '현재 포지션 지키면서 상대가 사이트 들어오면 정보전 한다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q24: Flair + Tempo ──────────────────────────────────────────
    {
      id: 'val-c24',
      kind: 'compound',
      text: {
        zh: 'Operator 机会出现了，只是需要你冲出去接一个硬头。你上吗？',
        en: 'Operator pickup is there. You just need to walk out into a hard angle to grab it. Do you go?',
        ja: 'オペレーターを拾う機会がある。ただし、難しいアングルに出て拾う必要がある。行く？',
        ko: '오퍼레이터 줍는 기회가 생겼다. 근데 하드 각도에 나가야 줄 수 있다. 가?',
      },
      options: [
        {
          label: {
            zh: '不值，继续守着',
            en: 'Not worth it. Hold the position.',
            ja: '割に合わない。ポジションを守る。',
            ko: '가성비 안 맞아. 포지션 지킨다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '先打一个快速接近，确认没人才拿',
            en: 'Quick peek to confirm it\'s clear, then collect',
            ja: '素早くピークして、誰もいないのを確認してから拾う',
            ko: '빠르게 피킹해서 클리어 확인하고 나서 줍는다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '没有信息也要拿——Operator 不是废铁',
            en: 'Take it blind. Operator isn\'t leaving without a shot.',
            ja: '情報なしでも取る。オペレーターは撃たずには返さない。',
            ko: '정보 없어도 줍는다. 오퍼레이터 한 발 안 쏘고 돌려보낼 수 없어.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等到下一回合——这局的局面不值得冒险',
            en: 'Leave it for the next round — the risk profile doesn\'t fit this one',
            ja: '次のラウンドに回す。このラウンドのリスクプロファイルには合わない。',
            ko: '다음 라운드로 넘긴다. 이번 라운드의 리스크 프로파일에 안 맞는다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q25: Bond + Nerve ───────────────────────────────────────────
    {
      id: 'val-c25',
      kind: 'compound',
      text: {
        zh: '队友在打 1v3 残局，你已经阵亡在观战镜头里了。你会怎么做？',
        en: 'Your last teammate is in a 1v3 clutch. You\'re already dead, watching from spectator cam. What do you do?',
        ja: '最後の味方が1v3のクラッチをしてる。自分はもう死んでスペクテイターカメラで見てる。どうする？',
        ko: '마지막 남은 팀원이 1v3 클러치 중이다. 나는 이미 죽어서 관전 카메라로 보고 있다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '说一句真正有用的信息，然后闭嘴，让他自己发挥',
            en: 'Give one clean, useful callout, then go quiet and let them cook',
            ja: '一つだけ本当に役立つ情報を伝えて、あとは黙って任せる',
            ko: '진짜 쓸모 있는 정보 하나만 주고, 그다음엔 조용히 지켜본다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '把敌人位置和技能冷却全部喊出来，一直喊——多说总没坏处',
            en: 'Call every enemy position and cooldown out loud, nonstop — more info can\'t hurt',
            ja: '敵の位置とスキルのクールタイムを全部叫び続ける。情報は多いほどいいはずだ。',
            ko: '적 위치랑 스킬 쿨타임 다 소리쳐서 알려준다, 계속. 정보는 많을수록 좋으니까.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '把自己静音，安静地看。这时候说什么都是噪音',
            en: 'Mute yourself and just watch. Anything you say right now is noise.',
            ja: '自分をミュートして、ただ見る。今何を言っても雑音でしかない。',
            ko: '스스로 뮤트하고 그냥 본다. 지금 뭘 말해도 소음이다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '本想憋住不说，但"用大招啊"还是在他刚要交火时脱口而出',
            en: 'Try to hold it in, but "use your ult!" slips out right as they line up the shot',
            ja: '我慢しようとしたのに、相手と撃ち合う直前に「アルト使えよ」が口から出る',
            ko: '참으려고 했는데, 상대랑 교전 직전에 "궁 써!"가 입에서 튀어나온다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q26: Intel + Nerve ──────────────────────────────────────────
    {
      id: 'val-c26',
      kind: 'compound',
      text: {
        zh: '你看到对面最后一个人在 A 点，但没有具体位置。你会进去找他吗？',
        en: 'Enemy last player is somewhere on A site. No exact position. Do you push in to find them?',
        ja: '敵の最後の1人がAサイトにいるはずだが、正確な位置は不明。探しに入るか？',
        ko: '적 마지막 한 명이 A 사이트에 있다. 정확한 위치는 모른다. 들어가서 찾을 거야?',
      },
      options: [
        {
          label: {
            zh: '等他出来——守好角度，他迟早要动',
            en: 'Hold and wait — they have to move eventually',
            ja: '待つ。アングルを守れば、相手はいつか動く。',
            ko: '잡고 기다린다. 상대는 결국 움직여야 한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先扔 Sova 探测确认位置，再推',
            en: 'Recon dart first to confirm position, then push',
            ja: 'まずソーヴァのドローンスキャンで位置を確認してから押す',
            ko: '먼저 소바 정찰 스킬로 위치 확인하고 나서 밀어간다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '靠走位和感觉推进——我知道他在哪',
            en: 'Push on feel — you can sense where they\'re holding',
            ja: '感覚で押す。どこで守ってるか感じ取れる。',
            ko: '감각으로 밀어간다. 어디 잡고 있는지 느껴진다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '"感觉他在 Heaven，但不敢进"——原地等',
            en: '"Think he\'s Heaven but not confident enough to commit." Stay put.',
            ja: '「ヘブンにいる気がするけど、踏み込む自信がない。」その場で待つ。',
            ko: '"헤븐에 있을 것 같은데 자신 없어서 못 들어간다." 제자리 대기.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q27: Flair + Nerve ──────────────────────────────────────────
    {
      id: 'val-c27',
      kind: 'compound',
      text: {
        zh: '决胜局，10:10，你手里有大招。你会？',
        en: 'Match point, 10-10. You have your ultimate. When do you use it?',
        ja: 'マッチポイント、10-10。アルティメットを持っている。いつ使う？',
        ko: '매치 포인트 10:10. 궁 있다. 언제 쓸 거야?',
      },
      options: [
        {
          label: {
            zh: '等到最完美的时机，哪怕晚一点',
            en: 'Wait for the perfect timing, even if it means holding it longer',
            ja: '完璧なタイミングを待つ。少し長く保持しても。',
            ko: '완벽한 타이밍 기다린다. 좀 더 오래 들고 있어도.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '现在交，越早打开局面越好',
            en: 'Use it now. Open the round up.',
            ja: '今使う。ラウンドを切り開く。',
            ko: '지금 쓴다. 라운드 열어야지.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等一个剧情感最强的时刻——这一把要有名场面',
            en: 'Wait for the most cinematic moment — this round deserves a highlight',
            ja: '一番映える瞬間を待つ。このラウンドには名場面が必要だ。',
            ko: '제일 드라마틱한 순간 기다린다. 이 라운드엔 하이라이트가 필요하다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '一进遭遇立刻交——时机不等人',
            en: 'Pop it at first contact — timing waits for no one',
            ja: '最初の交戦で即座に使う。タイミングは待ってくれない。',
            ko: '첫 교전에서 바로 쓴다. 타이밍은 기다려주지 않는다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q28: Tempo + Mental ─────────────────────────────────────────
    {
      id: 'val-c28',
      kind: 'compound',
      text: {
        zh: '你连续输了五局，还有时间再打一把。你？',
        en: 'Five straight losses. Time for one more. Honestly, what happens inside your head?',
        ja: '5連敗した。もう1戦できる時間がある。正直、頭の中で何が起きてる？',
        ko: '5연패했다. 한 판 더 할 시간 있다. 솔직히 머릿속에서 무슨 일이 일어나고 있어?',
      },
      options: [
        {
          label: {
            zh: '"大不了再输一把，我要研究清楚为什么输"——冷静开新局',
            en: '"One more loss at worst. Let me figure out what\'s going wrong." You queue calmly.',
            ja: '「最悪もう1敗するだけ。何がいけないか分析しよう。」冷静にキューを入れる。',
            ko: '"최악에 한 번 더 지는 것뿐. 뭐가 문제인지 파악해보자." 냉정하게 큐 들어간다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '"打就打，不能这样结束今天"——马上进队',
            en: '"Can\'t end the day like this." You queue instantly without thinking.',
            ja: '「こんな形で今日は終われない。」考える前に即キュー。',
            ko: '"이렇게 오늘 끝낼 수 없어." 생각 없이 즉시 큐 들어간다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '想一下，发现手感没了，明天再来',
            en: 'Pause. Aim\'s gone for today. Log off and come back tomorrow.',
            ja: '少し考えてエイムが今日はもう出ないと気づき、ログオフして明日また来る。',
            ko: '잠깐 멈추고. 오늘 에임 다 갔다. 로그오프하고 내일 돌아온다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '"赶快开下一把！"——然后在队列里边等边骂刚才的队友',
            en: '"Next queue, fast!" You\'re queueing and still angry about round fourteen of game five.',
            ja: '「早く次のキューを！」キュー中にゲーム5の14ラウンドのことをまだ怒ってる。',
            ko: '"빨리 다음 큐!" 큐 기다리면서 5경기 14라운드 팀원한테 아직 화나있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q29: Nerve + Mental ─────────────────────────────────────────
    {
      id: 'val-c29',
      kind: 'compound',
      text: {
        zh: '两周了，每次就差一把上分，每次都功亏一篑。这局又是决定性的一把。你脑子里在想什么？',
        en: 'Two weeks. One win from rank-up, every single time, and it slips. This round\'s another coinflip that decides it. What\'s actually happening in your head?',
        ja: '2週間ずっと、あと1勝でランクアップなのに毎回逃してる。このラウンドがまた運命の分かれ目だ。頭の中で何が起きてる？',
        ko: '2주째다. 매번 딱 한 판 차이로 랭크업을 놓친다. 이번 라운드도 또 그 결정적인 한 판이다. 머릿속에서 무슨 일이 일어나고 있어?',
      },
      options: [
        {
          label: {
            zh: '冷静，守好点，数好时间。跟平时的每一局没什么区别',
            en: 'Ice cold. Hold the angle, count the timer. Just another round, same as any other.',
            ja: '冷静に。アングルを守ってタイマーを数える。いつもと同じラウンドだ。',
            ko: '침착하게. 각도 잡고 타이머 센다. 그냥 여느 때와 같은 라운드다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '干脆冲一把，今天到底行不行，现在就见分晓',
            en: 'Push it now. Might as well find out today, one way or the other.',
            ja: 'いっそ突っ込む。今日イケるかどうか、今すぐわかる。',
            ko: '그냥 밀어붙인다. 오늘 되는지 안 되는지 지금 확인해보자.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '都两周了——直接冲，管他呢',
            en: 'Two weeks of this. Just send it and see what happens.',
            ja: '2週間これだ。もう突っ込むしかない、知らん。',
            ko: '2주째 이 짓이다. 그냥 지른다, 모르겠다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '守着点没动，但脑子里的吐槽帖已经打好草稿了',
            en: 'Holding the angle, not moving. But the tilt-post is already drafted in your head.',
            ja: 'アングルは動かない。でも頭の中では愚痴投稿の下書きがもう完成してる。',
            ko: '각도는 안 움직인다. 근데 머릿속엔 이미 하소연 글 초안이 다 써졌다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q30: Flair + Mental ─────────────────────────────────────────
    {
      id: 'val-c30',
      kind: 'compound',
      text: {
        zh: '你以一敌四，打出了职业级走位，最后还是输了。现在你在想什么？',
        en: 'You just went 1v4, played it beautifully, and still lost. Right now, what are you thinking?',
        ja: '1v4で美しいプレイをして、それでも負けた。今、何を考えてる？',
        ko: '1v4에서 멋지게 플레이했는데도 졌다. 지금 무슨 생각 해?',
      },
      options: [
        {
          label: {
            zh: '"好打就够了，赢不赢无所谓"——心情其实还不错',
            en: '"That was satisfying. Win or not, I played well." You feel genuinely fine.',
            ja: '「楽しかった。勝ち負けより、いいプレイができた。」本当に気持ちが落ち着いてる。',
            ko: '"재밌었으면 됐다. 이겼든 졌든 잘 플레이했다." 진심으로 괜찮다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '"下一局复仇"——已经在想怎么赢回来',
            en: '"Next round I get it back." You\'re already planning the revenge.',
            ja: '「次のラウンドで取り返す。」もう復讐の計画を立ててる。',
            ko: '"다음 판에 되갚는다." 이미 복수 계획 세우는 중이다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '"完全不公平——这种局面本来就不该输的"——挂语音里讲了五分钟',
            en: '"That should not have been a loss. That setup was perfect." — you\'re explaining for five minutes.',
            ja: '「本来負けるはずじゃなかった。あのセットアップは完璧だった。」5分間説明し続けてる。',
            ko: '"이건 지면 안 되는 상황이었어. 그 셋업은 완벽했는데." 5분째 설명 중이다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '"记下来了，下次换个结尾"——心里没事，但有点遗憾',
            en: '"Noted. Better ending next time." Disappointed but not derailed.',
            ja: '「覚えた。次はもっといい結末にする。」少し残念だが、乱れていない。',
            ko: '"메모했다. 다음엔 더 좋은 결말 만들자." 아쉽지만 흔들리지는 않는다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
  ],
};

export default game;
