import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'delta-force',
  title: {
    zh: '三角洲行动',
    en: 'Delta Force',
    ja: 'デルタフォース',
    ko: '델타포스',
  },
  deck: {
    zh: '你在三角洲行动撤离局是哪种玩家？',
    en: 'What kind of extraction-game operator are you in Delta Force?',
    ja: 'デルタフォース（ゲーム）、あなたは何型プレイヤー？',
    ko: '델타포스 게임에서 당신은 어떤 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的三角洲行动玩家类型。从撤离精算师到装甲车公路片导演，8 种原型、6 维雷达、专属玩家身份码。撤离成功之前先测一把。',
    en: '30 questions to find your Delta Force game player type. 8 archetypes, 6-axis radar, a shareable player code — from extract actuary to armored showoff. Find out before your next Hazard Ops run.',
    ja: '30問でデルタフォース（ゲーム）のプレイスタイルを診断。8タイプ・6軸レーダー・6文字コード付き。撤退精算師から装甲車パフォーマーまで。次のハザードオプス前にシェアしよう。',
    ko: '30문제로 알아보는 델타포스 게임 플레이어 유형. 8가지 유형, 6축 레이더, 공유 가능한 코드까지. 철수 정밀사부터 장갑차 쇼맨까지. 다음 작전 나가기 전에 테스트해봐.',
  },
  dominantAxes: ['Nerve', 'Intel', 'Tempo'] as const,
  archetypes: [
    // ── 1. extract-actuary ─────────────────────────────────────────────────────
    {
      slug: 'extract-actuary',
      polarityPattern: {
        Nerve: 'low',
        Intel: 'low',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '撤离路线精算师',
        en: 'Extract Actuary',
        ja: '撤退ルート精算師',
        ko: '철수 루트 정산사',
      },
      oneLiner: {
        zh: '每件装备都过 ROI，撤离计划比大多数人的人生计划更详细',
        en: 'Every piece of kit passes an ROI check before you queue in',
        ja: '装備ひとつひとつにROI計算。撤退計画は人生計画より詳細だ',
        ko: '장비 하나하나 ROI 계산하고 입장한다. 철수 계획이 인생 계획보다 상세하다',
      },
      description: {
        zh: '你进入撤离局之前，已经把装备价值、区域风险和预期收益算了个遍。带 2 万装备进高价值区？你会先掂量三秒。撤离路线有备选方案 A、B、C，触发条件已经写进脑内 SOP。同队玩家觉得你太保守，你觉得他们连 ROI 是什么都没想过。"苟活"对你来说不是骂人的话，而是一套完整的风险管理哲学。你的撤离成功率高于平均，账本永远平衡。',
        en: 'You run the numbers before you ever spawn in. Armor cost versus zone value, likely encounter count, margin of survival — the spreadsheet runs in your head before the queue pops. Two exits memorized, three fallback positions marked. Teammates call you passive; you call it asset protection. The "loot run" wasn\'t invented by you, but you perfected the doctrine. Your extraction rate is something you track.',
        ja: '入場前に装備コスト、エリア危険度、期待収益を全部計算する。2万の装備をホットゾーンに持ち込む？3秒考える。撤退ルートはA・B・Cの備案あり。チームメイトには「慎重すぎ」と言われるけど、向こうはROIって言葉も知らないと思う。「苟活」は悪口じゃなく、立派なリスク管理哲学だ。撤退成功率は平均より高い。帳簿はいつも合ってる。',
        ko: '입장 전에 장비 비용, 구역 위험도, 기대 수익을 다 계산한다. 2만짜리 장비를 고위험 구역에 들고 가려면 3초는 생각한다. 철수 루트는 A, B, C 대안 다 있다. 팀원들은 너무 소극적이라고 하지만, 그쪽은 ROI가 뭔지도 모를 것 같다. "쥐 플레이"는 욕이 아니라 리스크 관리 철학이다. 철수 성공률은 평균 이상. 장부는 항상 맞다.',
      },
      symptoms: [
        {
          zh: '进局前默默算过这套装备的期望收益是否为正',
          en: 'You silently calculated expected return on your kit before the match started',
          ja: '入場前に今の装備の期待収益がプラスかどうか黙って計算した',
          ko: '입장 전에 이 장비의 기대 수익이 양수인지 조용히 계산했다',
        },
        {
          zh: '撤离路线有主路线和备用路线，两套都在脑内演练过',
          en: 'You have a primary exit and a backup exit — both rehearsed mentally before the match began',
          ja: 'メインの撤退ルートと予備ルートがあって、どちらも頭の中で演習済みだ',
          ko: '메인 철수 루트와 예비 루트가 있다. 둘 다 머릿속으로 이미 연습했다',
        },
        {
          zh: '队友冲进高价值区，你先去旁边那栋楼把次级箱子搜干净',
          en: 'While your teammate rushes the hot zone, you\'re quietly clearing the adjacent building\'s secondary crates',
          ja: 'チームが高価値エリアに突っ込む間、あなたは隣の建物の二次ボックスを黙々と漁ってる',
          ko: '팀원이 핫존으로 돌격할 때, 당신은 옆 건물 2차 상자를 조용히 다 뒤지고 있다',
        },
        {
          zh: '撤离成功的瞬间比击杀任何人都有成就感',
          en: 'A successful extraction feels better than any kill on the map',
          ja: '撤退成功の瞬間、マップ上のどのキルより達成感がある',
          ko: '철수 성공 순간이 어떤 킬보다 성취감이 크다',
        },
        {
          zh: '看见队友带着满包装备被击倒，你的第一反应是心疼那套装备',
          en: 'When a teammate goes down loaded with gear, your first thought is about the kit, not the teammate',
          ja: '満載のチームメイトが倒れたとき、最初に惜しいと思ったのは装備のほうだ',
          ko: '장비 가득 든 팀원이 쓰러지면 첫 번째 생각은 그 장비가 아깝다는 것이다',
        },
      ],
      rivalSlug: 'boss-contractor',
      bestSquadSlug: 'recon-foreman',
    },

    // ── 2. recon-foreman ───────────────────────────────────────────────────────
    {
      slug: 'recon-foreman',
      polarityPattern: {
        Nerve: 'low',
        Intel: 'low',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '撤离点先知',
        en: 'Extract Oracle',
        ja: '撤退予言者',
        ko: '철수 지점 예언자',
      },
      oneLiner: {
        zh: '地图刚加载完，你已经在往今晚的撤离点走了，不是快，是像提前看过结局',
        en: 'The map just loaded and you already know tonight\'s exit. Not fast — more like you\'ve seen the ending',
        ja: 'マップが開いた瞬間、今夜の撤退口はもう分かってる。速いんじゃない、まるで結末を先に見たみたいに',
        ko: '지도 뜨자마자 오늘 밤 철수구를 이미 안다. 빠른 게 아니라 결말을 미리 본 것 같다',
      },
      description: {
        zh: '大厅地图一刷新，别人还在纠结去哪，你已经把这局的撤离点和路线在脑子里过了一遍。你不是精算师那种把 ROI 算到小数点后两位的类型，靠的是一种说不清道不明的判断力，地图扫一眼，脚下已经在往那个方向挪了。队友觉得你"跟开了天眼似的"，你自己更愿意叫它经验。枪声一响，你判断方向和距离的速度总是快别人半拍，没人说得清你怎么做到的，包括你自己。撤离路线临时被堵，你也很少慌，因为 B 方案早就在心里演练过了。',
        en: 'The map loads and while everyone else is still deciding where to go, you\'ve already run the extraction route in your head. You\'re not the type who calculates ROI to two decimal places — that\'s a different archetype\'s job. Yours is a read you can\'t quite explain: one glance at the map and your feet are already moving. Teammates say it\'s like you\'ve got a sixth sense. You call it experience. When shots fire, you place direction and distance half a beat faster than anyone else, and nobody, including you, can say exactly how. When the planned route gets blocked, you rarely panic — plan B was already rehearsed in your head before you needed it.',
        ja: 'マップが開いた瞬間、みんながまだ行き先で迷ってる間に、あなたはもう撤退ルートを頭の中で走らせ終えてる。ROIを小数点二桁まで計算するタイプじゃない。それは別のアーキタイプの仕事だ。あなたのは説明のつかない勘だ。地図を一目見ただけで、足はもう動き出してる。チームメイトは「第六感でも持ってるのか」と言う。自分では経験と呼んでる。銃声が鳴った瞬間、方向と距離を誰よりも半テンポ早く判断してる。どうやってるのか、自分でもうまく説明できない。予定ルートが塞がれても、あまり慌てない。プランBはとっくに頭の中で予行演習済みだから。',
        ko: '지도가 뜨고 다들 어디로 갈지 고민하는 사이, 당신은 이미 이번 런의 철수 루트를 머릿속으로 다 돌려봤다. ROI를 소수점 둘째 자리까지 계산하는 타입은 아니다. 그건 다른 유형의 일이다. 당신 쪽은 설명하기 애매한 감이다. 지도를 한 번 훑으면 발이 이미 그쪽으로 움직이고 있다. 팀원들은 "육감이라도 있는 거냐"고 한다. 본인은 그냥 경험이라고 부른다. 총소리가 나면 방향과 거리를 남들보다 반 박자 빠르게 파악한다. 어떻게 그러는지는 본인도 정확히 설명 못 한다. 계획한 루트가 막혀도 잘 당황하지 않는다. B안은 이미 머릿속에서 예행연습을 마쳤으니까.',
      },
      symptoms: [
        {
          zh: '落地第一件事是读地图，不是开箱子',
          en: 'First thing you do on spawn is read the map, not open a crate',
          ja: 'スポーン直後に地図を読む。箱を開けるより先に',
          ko: '스폰 직후 첫 번째 행동은 지도 읽기다. 상자 열기가 아님',
        },
        {
          zh: '你知道哪个撤离点今局最安全，并且已经开始往那里走了',
          en: 'You know which extraction point is cleanest this round and you\'re already en route',
          ja: 'このラウンドで一番安全な撤退ポイントを知ってて、もう向かってる',
          ko: '이번 라운드에서 가장 안전한 철수 지점을 알고 있고, 이미 이동 중이다',
        },
        {
          zh: '枪响了，你判断方向和距离的速度比大多数人快一拍',
          en: 'When shots fire, you\'ve already placed the direction and distance before teammates react',
          ja: '銃声が聞こえた瞬間、チームより一テンポ早く方向と距離を判断してる',
          ko: '총소리가 나면 팀원들이 반응하기 전에 이미 방향과 거리를 파악했다',
        },
        {
          zh: '你很少是第一个死的，也很少是战绩最靓的那个',
          en: 'Rarely first to die, rarely top fragger — you\'re consistently the one who extracts',
          ja: '最初に死ぬことも少ないし、キル数トップでもない。でも撤退するのはいつもあなただ',
          ko: '제일 먼저 죽는 일도 없고 킬 1등도 아니다. 하지만 철수하는 건 항상 당신이다',
        },
        {
          zh: '撤离计划临时改变时，你已经在想 B 方案了，没有慌过',
          en: 'When the exit plan collapses, you\'re already running plan B — no panic in the process',
          ja: '撤退計画が崩れたとき、もうプランBを実行してる。パニックはなし',
          ko: '철수 계획이 무너지면 이미 B안을 실행 중이다. 패닉 없음',
        },
      ],
      rivalSlug: 'armored-showoff',
      bestSquadSlug: 'extract-actuary',
    },

    // ── 3. crate-philosopher ───────────────────────────────────────────────────
    {
      slug: 'crate-philosopher',
      polarityPattern: {
        Nerve: 'low',
        Intel: 'high',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '箱子哲学家',
        en: 'Crate Philosopher',
        ja: '箱哲学者',
        ko: '상자 철학자',
      },
      oneLiner: {
        zh: '"苟活"是哲学，不是逃跑；那个房间的箱子是我的，请别打扰',
        en: 'The room is claimed, the crate is mine, and gunfire outside is not your concern',
        ja: 'この部屋は確保済み。箱は俺のもの。外の銃声は関係ない',
        ko: '이 방은 내 구역이다. 상자는 내 거고. 밖에 총소리는 내 알 바 아니다',
      },
      description: {
        zh: '你找到一个有门的房间，把箱子往门后一堆，开始有条不紊地搜刮。远处的枪炮声对你来说就是白噪音，二十分钟后满载而归，一枪没开。队友喊你"鼠鼠"，你从不反驳，甚至有点认领这个称号，反正这游戏一大半人都在"苟活"，你只是干得比较专业。你靠手感就能听出哪条走廊没人，枪只在角度稳赢的时候才开。有人问这局击杀数多少，你说"零，但我撤离了"，语气比谁都平静。',
        en: 'You find a room with a door, shove a crate behind it, and start looting with the patience of a monk. Distant gunfire is just white noise. Twenty minutes later you walk out loaded, without firing a shot. Teammates call you a rat, and you don\'t argue — you might even claim the title. Half this game\'s population plays this way anyway; you\'re just better at it than most. You can tell an empty corridor by ear alone, and the gun only comes out when the angle is already won. Someone asks your killcount for the run. "Zero," you say, "but I extracted." Calmer than anyone has a right to be.',
        ja: 'ドア付きの部屋を見つけて、箱をドアの後ろに押し込んで、黙々と略奪を始める。遠くの銃声はただの環境音だ。20分後、一発も撃たずに満載で出てくる。チームメイトに「ラット」と呼ばれても否定しない。むしろその称号を受け入れてる。このゲームの半分のプレイヤーがこうやって遊んでる、自分はただそれがちょっと上手いだけだ。廊下に誰もいないことは音だけでわかる。銃を抜くのは角度が完全に勝ってるときだけ。今回のキル数を聞かれたら「ゼロ。でも撤退した」と答える。誰よりも落ち着いた声で。',
        ko: '문 달린 방을 찾아서 상자를 문 뒤에 밀어 넣고, 차분하게 루팅을 시작한다. 멀리서 나는 총소리는 그냥 백색소음이다. 20분 후 한 발도 안 쏘고 가득 채워서 나온다. 팀원들이 "쥐"라고 불러도 부정하지 않는다. 오히려 그 칭호를 인정하는 쪽에 가깝다. 어차피 이 게임 절반이 이렇게 플레이한다, 본인은 그냥 남들보다 좀 더 잘할 뿐이다. 복도에 아무도 없다는 걸 소리만으로 안다. 총은 각도가 완전히 유리할 때만 꺼낸다. 이번 런 킬 수를 물으면 "0. 근데 철수는 했다"고 답한다. 누구보다 차분한 목소리로.',
      },
      symptoms: [
        {
          zh: '进局第一件事是找一个有门的房间，而不是朝热点跑',
          en: 'First objective: a room with a working door, not the hot zone',
          ja: '入場直後の目標はドア付きの部屋。ホットゾーンじゃない',
          ko: '입장 직후 목표는 문 달린 방이다. 핫존이 아니다',
        },
        {
          zh: '你对走廊脚步声的辨别精度，已经达到了近乎玄学的程度',
          en: 'Your ability to read footstep sounds in corridors borders on the supernatural',
          ja: '廊下の足音を聞き分ける精度が、もはや超自然的な領域に達してる',
          ko: '복도 발소리를 구분하는 능력이 거의 초자연적인 수준이다',
        },
        {
          zh: '击杀数是零，但你撤离的时候包里装满了好东西',
          en: 'Killcount: zero. Extraction: successful. Inventory: packed. No further comments.',
          ja: 'キル数はゼロ。撤退は成功。インベントリは満載。以上。',
          ko: '킬 수: 0. 철수: 성공. 인벤토리: 가득. 이상.',
        },
        {
          zh: '有人"通知"你正在进行的战斗，你表示了解，然后继续搜这个房间',
          en: 'Someone pings an active fight nearby; you acknowledge it and return to the crate you were opening',
          ja: '近くで戦闘があるとpingが来た。了解して、また箱を開け始める',
          ko: '근처 전투 핑이 왔다. 확인하고 다시 상자 열기를 계속한다',
        },
        {
          zh: '"苟活"这个词你不排斥，因为你知道谁才是最后撤离成功的那个',
          en: '"Rat player" doesn\'t land as an insult — you know who actually extracted',
          ja: '「ラットプレイヤー」は悪口にならない。最後に撤退したのが誰かを知ってるから',
          ko: '"쥐 플레이어"가 욕으로 안 들린다. 결국 누가 철수했는지 알고 있으니까',
        },
      ],
      rivalSlug: 'boss-contractor',
      bestSquadSlug: 'whisper-runner',
    },

    // ── 4. whisper-runner ──────────────────────────────────────────────────────
    {
      slug: 'whisper-runner',
      polarityPattern: {
        Nerve: 'low',
        Intel: 'high',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '静步收割人',
        en: 'Whisper Runner',
        ja: 'ウィスパーランナー',
        ko: '고요한 수확자',
      },
      oneLiner: {
        zh: '靠脚步声开枪，你比别人早两秒知道角落里有谁',
        en: 'You open fire on footsteps; the other person hasn\'t even rounded the corner yet',
        ja: '足音で射撃判断する。相手がまだ角を曲がってないうちに撃ってる',
        ko: '발소리로 사격 판단한다. 상대가 아직 모퉁이도 돌지 않았는데 이미 쐈다',
      },
      description: {
        zh: '你把游戏音量调到能听清脚步的位置，然后全程用行走速度移动。"我听到脚步声"是你的战术警报系统，也是让队友突然静止的咒语。你开枪前已经知道对面大概在哪、朝哪边走、穿没穿重甲。你的速通是为了抢角度，而不是乱打——快速移动带来信息优势，每一次选择都像在下一步棋。手感和地图感一起工作，让你在安静的战场里永远领先一拍。',
        en: 'Audio is your primary sensor. The game volume sits high enough to catch leather on concrete, and you walk — always walk — when you suspect company. "I hear footsteps" freezes the squad. By the time you fire, you already know approximate position, direction, and armor weight from sound alone. Speed isn\'t rushing; it\'s getting the angle before they get yours. Every quiet corridor is a puzzle you solve on the move.',
        ja: '音が主なセンサーだ。足音が聞こえるくらい音量を上げて、誰かいると思ったら歩く——常に歩く。「足音聞こえる」でチームが固まる。撃つときにはすでに大体の位置、方向、アーマーの重さを音だけで把握してる。速さは突撃じゃない。相手より先に角度を取ることだ。静かな廊下はすべて、移動しながら解くパズルだ。',
        ko: '소리가 주 센서다. 발소리가 들릴 만큼 볼륨을 높이고, 누군가 있다 싶으면 걷는다 — 항상 걷는다. "발소리 들린다"는 말에 팀이 멈춘다. 쏠 때는 이미 위치, 방향, 방탄복 무게를 소리만으로 파악했다. 빠른 건 돌격이 아니다. 상대보다 먼저 각도를 잡는 것이다. 조용한 복도는 전부 이동 중에 푸는 퍼즐이다.',
      },
      symptoms: [
        {
          zh: '游戏音量比队友高至少 30%，专门为了脚步声',
          en: 'Your game volume is at least 30% higher than your teammates\' — all for footstep audio',
          ja: 'ゲーム音量はチームメイトより少なくとも30%高い。全部足音のためだ',
          ko: '게임 볼륨이 팀원보다 최소 30% 높다. 전부 발소리 때문이다',
        },
        {
          zh: '"我听到脚步声"之后整队会进入 10 秒的绝对静默',
          en: '"I hear footsteps" triggers a mandatory 10-second squad silence',
          ja: '「足音聞こえる」の一言でチームが10秒の完全沈黙に入る',
          ko: '"발소리 들린다" 한 마디에 팀 전체가 10초 완전 침묵에 들어간다',
        },
        {
          zh: '你在走廊里的行走速度比队友打架的速度还慢，但你活得更久',
          en: 'You move through corridors slower than your teammates move through firefights — and you live longer',
          ja: '廊下を歩く速さはチームメイトが戦闘するより遅い。でもあなたの方が長く生き残る',
          ko: '복도에서 걷는 속도가 팀원들이 전투하는 속도보다 느리다. 근데 더 오래 산다',
        },
        {
          zh: '你已经确认了对面的位置，但还是再等了 5 秒确认他没有同伴',
          en: 'You had the position confirmed but waited five more seconds to rule out a partner',
          ja: '位置は確認してたけど、仲間がいないか確かめるためにさらに5秒待った',
          ko: '위치를 확인했지만 동료가 없는지 확인하려고 5초 더 기다렸다',
        },
        {
          zh: '撤离的时候你绕了最长的一条路，因为那条路最安静',
          en: 'You took the longest exit route because it was the quietest one',
          ja: '撤退ルートは一番長い道を選んだ。一番静かだったから',
          ko: '철수할 때 제일 긴 루트를 선택했다. 제일 조용했으니까',
        },
      ],
      rivalSlug: 'armored-showoff',
      bestSquadSlug: 'crate-philosopher',
    },

    // ── 5. kit-merchant ───────────────────────────────────────────────────────
    {
      slug: 'kit-merchant',
      polarityPattern: {
        Nerve: 'high',
        Intel: 'low',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '大红猎人',
        en: 'Red Hunter',
        ja: 'レッドハンター',
        ko: '레드 헌터',
      },
      oneLiner: {
        zh: '别人捡装备看价钱，你只认一个颜色：大红，其他一律不看',
        en: 'Loot only registers in one color: red-tier. Everything else is just inventory weight',
        ja: '戦利品は色でしか判断しない。大紅（最高レア）以外は最初から眼中にない',
        ko: '전리품은 색깔로만 본다. 대홍(레드 등급) 아니면 애초에 안 본다',
      },
      description: {
        zh: '进局之前你已经想好这局要去哪：物资密度最高的那块地方，没有之一。中间路过的蓝装紫装，你眼皮都不抬一下，你在等的是大红，别的颜色不配让你停下脚步。这么打死亡率确实不低，交火频率也是队里最高的，但你的算法很简单：一局的收益上限，不是平均值，才是重点。同队的人说你贪，你觉得这叫"只吃精华"。背着一包大红物资死掉，好歹这局没白来；空着手活着撤离，反而觉得没意思。',
        en: 'Before you even queue, you know exactly where you\'re going: whichever zone has the highest loot density on the map, full stop. Blue and purple gear along the way don\'t get a second glance. You\'re only stopping for red-tier. Anything under that color line might as well not exist. Death rate\'s higher this way, and you see more firefights per run than anyone on the squad, but the math is simple: the ceiling matters more than the average. Teammates call it greedy. You call it eating only the good parts. Dying with a bag full of red-tier loot still feels like the run counted for something. Walking out empty-handed but alive is the boring outcome.',
        ja: 'キューに入る前から今回の行き先は決まってる。マップで一番戦利品密度が高いエリア、それ以外の選択肢はない。道中の青や紫の装備には目もくれない。狙ってるのは大紅（最高レア）だけだ。その色より下は存在しないのと同じ。この打法だと死亡率は高いし、交戦回数もチームで一番多い。でも計算はシンプルだ。狙うのは平均値じゃなく上限。チームメイトには「欲張り」と言われる。自分では「美味しいところしか食べない」と思ってる。大紅を抱えたまま死んでも、このランには意味があった。何も持たずに生きて撤退する方が、正直つまらない。',
        ko: '큐 잡기 전부터 이번 런은 어디로 갈지 정해져 있다. 지도에서 루팅 밀도가 제일 높은 구역, 그게 전부다. 가는 길에 있는 파랑, 보라 장비는 쳐다도 안 본다. 노리는 건 대홍(레드 등급)뿐이다. 그 색 밑으로는 존재하지 않는 거나 마찬가지다. 이렇게 하면 사망률은 확실히 높고 교전 횟수도 팀에서 제일 많다. 근데 계산은 단순하다. 중요한 건 평균이 아니라 상한선이다. 팀원들은 욕심이 많다고 하지만 본인은 "맛있는 부분만 먹는다"고 생각한다. 레드 등급 가득 채운 채로 죽어도 이번 런은 의미 있었다고 느껴진다. 빈손으로 살아서 철수하는 쪽이 오히려 재미없다.',
      },
      symptoms: [
        {
          zh: '你知道每张地图哪个区域物资密度最高，并且每局都往那里走',
          en: 'You know the highest loot-density zone on every map, and you go there every single run',
          ja: 'マップごとに最も戦利品密度が高いエリアを知っていて、毎回そこへ行く',
          ko: '지도마다 루팅 밀도가 가장 높은 구역을 알고, 매 런마다 거기로 간다',
        },
        {
          zh: '遇到中级物资你直接跳过，因为"带这个回去不划算"',
          en: 'You walk past mid-tier loot without stopping — "not worth the carry weight"',
          ja: '中ランクの戦利品は素通りする。「持ち帰るコストに見合わない」から',
          ko: '중간 등급 루팅은 그냥 지나친다. "들고 가기에 안 남는다"고',
        },
        {
          zh: '你打人是为了让他们离开高价值区，不是因为特别想 PK',
          en: 'You fight to clear the area, not because you enjoy the fight itself',
          ja: 'エリアを空けるために戦う。戦闘自体が好きなわけじゃない',
          ko: '구역을 비우기 위해 싸운다. 전투 자체가 좋아서가 아니다',
        },
        {
          zh: '带满高价值物资的包，即使死亡也觉得这局没白来',
          en: 'Dying with a full high-value inventory still feels like the run had a point',
          ja: '高価値品で満杯のまま死んでも、このランには意味があったと思える',
          ko: '고가치 물품 가득 든 채로 죽어도 이 런은 의미 있었다고 생각한다',
        },
        {
          zh: '撤离点前如果遇到伏击，你会打，因为你背包里的东西值得打',
          en: 'If you hit an ambush at the extraction, you fight — the bag is worth defending',
          ja: '撤退ポイントで待ち伏せに遭ったら戦う。バッグの中身がそれだけの価値があるから',
          ko: '철수 지점에서 매복을 만나면 싸운다. 배낭 안에 든 게 그럴 가치가 있으니까',
        },
      ],
      rivalSlug: 'crate-philosopher',
      bestSquadSlug: 'boss-contractor',
    },

    // ── 6. boss-contractor ────────────────────────────────────────────────────
    {
      slug: 'boss-contractor',
      polarityPattern: {
        Nerve: 'high',
        Intel: 'low',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '高价值交火承包商',
        en: 'Boss Contractor',
        ja: 'ボスコントラクター',
        ko: '고가치 교전 하청업자',
      },
      oneLiner: {
        zh: '地图首响必到，Boss 掉落是你的外卖',
        en: 'First gunshot on the map is your dinner bell — you\'re already moving',
        ja: 'マップ最初の銃声はディナーベルだ。もう動いてる',
        ko: '지도 첫 총성은 저녁 식사 신호다. 이미 움직이고 있다',
      },
      description: {
        zh: '地图首响对你来说是地标，不是警报。方向和距离判断完，人已经在路上了。"赤枭巡猎"模式一开，你就是那个第一周就摸透 Boss 刷新规律的人，别人还在纠结要不要冲，你已经带着一身精英装备到场了。激进加速通的组合让你的交火频率远高于平均，但你的逻辑很简单：先到先得，风险算外卖配送费。你的收益上限比大多数人高，下限也比大多数人低，你对这件事的态度是"这才有意思"。',
        en: 'The first gunshot on the map is a landmark to you, not a warning. Direction and distance get read fast, and you\'re already moving. When the new Boss-hunt mode dropped, you were the one who cracked the spawn pattern in the first week, showing up in full elite gear while everyone else was still debating whether to push. High aggression plus high speed means you rack up more fights per run than anyone else. The logic is simple: first there, first served, risk is just a delivery fee. Your ceiling is higher than most players\', your floor is lower too, and your take on that is: this is the fun part.',
        ja: 'マップ最初の銃声はナビポイントだ。警告じゃない。方向と距離を判断したら、もう動いてる。新しい「ボスハント」モードが実装されてから、最初の週にボスのスポーンパターンを把握したのはあなただ。みんながまだ突っ込むかどうか迷ってる間に、あなたはもうフルの精鋭装備で現地入りしてる。高攻撃性プラス高速度は、他の誰よりもランあたりの戦闘数が多いことを意味する。でも論理はシンプルだ。先に着いた者が勝ち、リスクは配送料みたいなものだ。収益上限は他の人より高いし、下限も低い。それについては「だからこそ面白い」と思ってる。',
        ko: '지도 첫 총성은 당신에게 랜드마크지 경고가 아니다. 방향과 거리를 파악하면 이미 움직이고 있다. 새로 나온 "보스 헌트" 모드에서 첫 주 만에 보스 스폰 패턴을 파악한 게 당신이다. 남들이 아직 돌진할지 말지 고민하는 동안 당신은 이미 풀 정예 장비로 현장에 도착해 있다. 높은 공격성과 높은 속도의 조합은 다른 누구보다 런당 전투 수가 많다는 뜻이다. 근데 논리는 단순하다. 먼저 도착한 사람이 임자, 리스크는 배달비 같은 거다. 수익 상한선은 남들보다 높고 하한선도 낮다. 그것에 대해 당신은 "그래서 재밌다"고 생각한다.',
      },
      symptoms: [
        {
          zh: '你知道 Boss 的大概刷新位置，并且每局都往那边冲',
          en: 'You know approximate Boss spawn locations and head there every single run',
          ja: 'ボスのスポーン位置を大体把握してて、毎ランそこへ向かう',
          ko: '보스 스폰 위치를 대략 알고, 매 런마다 거기로 간다',
        },
        {
          zh: '地图首响之后你 3 秒内就判断出方位，5 秒内已经在移动',
          en: 'Three seconds after the first shot, direction is locked. Five seconds after, you\'re moving.',
          ja: '最初の銃声から3秒で方向を特定、5秒でもう動いてる',
          ko: '첫 총성 3초 만에 방향 확정, 5초 안에 이미 이동 중이다',
        },
        {
          zh: '你的撤离成功率不高，但每次成功撤离的平均收益是队友的两倍以上',
          en: 'Extraction rate: not great. Average extraction value when you do make it: at least twice your teammates\'.',
          ja: '撤退成功率は高くない。でも成功したときの平均収益はチームメイトの2倍以上だ',
          ko: '철수 성공률: 높지 않음. 성공할 때 평균 수익: 팀원의 2배 이상.',
        },
        {
          zh: '装备全输的局你不会懊悔，因为你觉得"那局打得痛快"',
          en: 'A full gear wipe doesn\'t haunt you — the run felt like a proper fight and that\'s enough',
          ja: '装備を全部失っても後悔しない。「ちゃんとした戦闘だった」それで十分だ',
          ko: '장비 다 날려도 후회 안 한다. "제대로 싸웠다"는 것만으로 충분하다',
        },
        {
          zh: '队友问你"要不要先侦察一下"，你已经在交火了',
          en: 'Your teammate asks "should we recon first?" — you\'re already in the firefight',
          ja: 'チームメイトが「まず偵察する？」と聞いたとき、あなたはもう戦闘中だ',
          ko: '팀원이 "정찰 먼저 할까?"라고 물을 때 당신은 이미 교전 중이다',
        },
      ],
      rivalSlug: 'extract-actuary',
      bestSquadSlug: 'kit-merchant',
    },

    // ── 7. loadout-romantic ───────────────────────────────────────────────────
    {
      slug: 'loadout-romantic',
      polarityPattern: {
        Nerve: 'high',
        Intel: 'high',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '装备浪漫主义者',
        en: 'Loadout Romantic',
        ja: '装備ロマンチスト',
        ko: '장비 낭만주의자',
      },
      oneLiner: {
        zh: '"装备就是穿来打仗的"——不管版本怎么变，你的枪不变',
        en: 'The meta changes; your preferred loadout doesn\'t. Gear is identity, not optimization.',
        ja: 'メタが変わっても、愛用の装備は変わらない。装備はアイデンティティだ。最適化じゃない',
        ko: '메타가 바뀌어도 좋아하는 장비는 안 바뀐다. 장비는 정체성이다. 최적화가 아니다',
      },
      description: {
        zh: '你有一把最爱的枪，或者一套"进入状态"的装备配置，元数据变了你也不换。激进的你不是看不懂数据，只是觉得用不顺手的武器赢，赢得不值。"装备展示"的 B 站视频你不只看，你也拍。在进入撤离局之前，你会把装备配置看一遍，不为优化，只是为了感受一下那种出发前的仪式感。战场上你的第一反应不是"怎么用最优路线"，而是"这枪打起来爽不爽"。',
        en: 'You have a setup. Not the meta setup — your setup. The gun you\'ve used long enough to know its recoil by feel, the armor slot arrangement that lets you move without thinking. Bilibili "gear display" videos are both your viewing genre and your production category. Entering Hazard Ops with the right kit is a ritual, not a decision. The question you ask in combat isn\'t "optimal angle" — it\'s "does this feel right."',
        ja: '自分のセットアップがある。メタじゃない——自分のだ。反動を体感で覚えるくらい長く使った銃、考えなくても動けるアーマー配置。Bilibili の「装備展示」動画は視聴ジャンルでもあり、制作カテゴリでもある。正しいキットでハザードオプスに入るのは儀式だ。決断じゃない。戦闘中に聞くのは「最適な角度は？」じゃなく「これは手に馴染むか？」だ。',
        ko: '자기 세팅이 있다. 메타 세팅이 아니라 — 자기 세팅. 반동을 몸으로 느낄 만큼 오래 쓴 총, 생각 없이도 움직일 수 있는 방탄복 배열. 빌리빌리 "장비 전시" 영상은 시청 장르이기도 하고 제작 카테고리이기도 하다. 제대로 된 키트로 하자드 옵스에 입장하는 건 의식이다. 결정이 아니다. 전투 중에 묻는 건 "최적 각도?"가 아니라 "이게 손에 맞나?"다.',
      },
      symptoms: [
        {
          zh: '你有一套固定的入场装备配置，已经用了不止三个版本',
          en: 'Your go-to kit hasn\'t changed across at least three patches',
          ja: '入場装備の固定セットは、少なくとも3つのパッチをまたいで変わってない',
          ko: '고정 입장 장비 세팅이 최소 세 번의 패치를 넘겨도 안 바뀌었다',
        },
        {
          zh: '"这把枪的后坐力我已经练熟了"，并且真的是这样',
          en: '"I\'ve drilled this recoil pattern" — and that\'s not a boast, that\'s just a fact',
          ja: '「この銃の反動パターンは練習した」それは自慢じゃなく、ただの事実だ',
          ko: '"이 총 반동 패턴 연습했다" — 자랑이 아니라 그냥 사실이다',
        },
        {
          zh: '看别人用你喜欢的枪打出名场面，你会感到一种奇特的自豪感',
          en: 'Watching someone else clutch with your favorite gun gives you a weird sense of pride',
          ja: '好きな銃で他の人がクラッチするのを見ると、不思議な誇りを感じる',
          ko: '좋아하는 총으로 다른 사람이 클러치하는 걸 보면 이상한 자부심이 생긴다',
        },
        {
          zh: '撤离的时候你尽量把爱枪带出去，"不能让它留在地图上"',
          en: 'You carry your favorite gun out on extract if at all possible — "it doesn\'t belong in this map"',
          ja: '可能なら撤退時にお気に入りの銃を持ち出す。「この地図に残してはいけない」',
          ko: '가능하면 철수할 때 좋아하는 총을 들고 나간다. "이 지도에 남겨두면 안 된다"',
        },
        {
          zh: '遇到元数据更好的武器，你看一眼数据，然后继续用原来那把',
          en: 'You check the stats on a better-meta weapon, then go back to your current one anyway',
          ja: 'メタ的に優れた武器のステータスを確認して、それでも元の武器に戻る',
          ko: '메타에서 더 좋다는 무기 스탯 확인하고, 결국 원래 것으로 돌아간다',
        },
      ],
      rivalSlug: 'recon-foreman',
      bestSquadSlug: 'armored-showoff',
    },

    // ── 8. armored-showoff ────────────────────────────────────────────────────
    {
      slug: 'armored-showoff',
      polarityPattern: {
        Nerve: 'high',
        Intel: 'high',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
      name: {
        zh: '装甲车公路片导演',
        en: 'Armored Showoff',
        ja: '装甲車ロードムービー監督',
        ko: '장갑차 로드무비 감독',
      },
      oneLiner: {
        zh: '撤离时一定要开车，最好是装甲车，最好正面穿过所有人',
        en: 'Extraction by armored vehicle, preferably through anyone standing in the way',
        ja: '撤退は装甲車で。できれば全員の正面を突き抜けて',
        ko: '철수는 장갑차로. 가능하면 모든 사람 정면을 돌파해서',
      },
      description: {
        zh: '你不只想撤离，你想让这次撤离值得被人回忆。激进加手感加速通的组合，让你把每次撤离都拍成一部五分钟公路片：全甲上身，装甲车发动，然后往人最多的方向开。你心里的参考对象是官方那部《黑鹰坠落》风格的实机短片，UE5 画质，"电影级战役"那种调调，别人拿它当宣传片看，你拿它当教学片学。地图上的路线是你的镜头语言，其他玩家是群演。"全甲进场"是你的最低标准，装甲车才是真正的舞台道具。撤离成功不是目标，撤离得有电影感，才是你来这局的理由。',
        en: 'Extracting isn\'t the point. Making the extraction worth remembering is the point. High aggression plus good instincts plus speed turns every extraction into a five-minute road movie: full armor, engine running, then straight through wherever the most people are standing. Your reference point is the studio\'s own Black Hawk Down style live-action short, the one built to look like a UE5 war epic. Everyone else watches it as marketing. You study it as technique. The route on the map is your shot list. Other players are extras. "Full armor at spawn" is the bare minimum. The armored vehicle is the actual set piece. A clean extraction was never the goal. A cinematic one is the only reason you queued.',
        ja: '撤退したいだけじゃない。この撤退を語り草にしたいんだ。高い攻撃性と手応え、そしてスピード。この組み合わせが毎回の撤退を5分のロードムービーに変える。全甲装備、装甲車のエンジン始動、そして一番人が多い方向へ突っ込む。心の中の基準は公式の「ブラックホーク・ダウン」風実写ショートムービー、UE5クオリティの「映画級」ってやつだ。みんなはあれを宣伝映像として見る。あなたは教材として見てる。マップ上のルートはあなたのショットリストだ。他のプレイヤーはエキストラ。「全甲でスポーン」は最低ライン。装甲車こそが本当の舞台装置だ。綺麗な撤退なんて目標じゃない。映画になる撤退だけが、このランに入った理由だ。',
        ko: '철수만이 목표가 아니다. 이 철수를 기억할 만하게 만드는 게 목표다. 높은 공격성과 감각, 그리고 속도의 조합이 매번의 철수를 5분짜리 로드무비로 바꾼다. 풀 방탄복 장착, 장갑차 시동, 그리고 사람이 제일 많은 방향으로 돌진. 마음속 기준점은 공식 "블랙호크 다운" 스타일 실사 단편, UE5급 "영화 같은" 그 느낌이다. 남들은 그걸 홍보 영상으로 본다. 당신은 그걸 교본으로 본다. 지도 위 루트는 당신의 촬영 리스트다. 다른 플레이어들은 엑스트라다. "풀 방탄복 입장"은 최소 기준이다. 장갑차야말로 진짜 무대 장치다. 깔끔한 철수는 목표였던 적이 없다. 영화 같은 철수만이 이번 런에 들어온 이유다.',
      },
      symptoms: [
        {
          zh: '地图上如果有可以开的载具，你会把它列进撤离计划',
          en: 'If a vehicle exists on the map, it\'s in your extraction plan',
          ja: 'マップに乗れる乗り物があれば、撤退計画に組み込む',
          ko: '지도에 탈 수 있는 차량이 있으면 철수 계획에 포함된다',
        },
        {
          zh: '你的装备里永远有足够的护甲，"全甲进场"是你的底线',
          en: '"Full armor or I don\'t queue" is not quite a rule, but it\'s close',
          ja: '「全甲じゃないならキューに入らない」はルールじゃないけど、ほぼそうだ',
          ko: '"풀 방탄복 아니면 큐 안 잡는다"는 규칙은 아니지만, 거의 그렇다',
        },
        {
          zh: '撤离路上遇到阻拦，你的第一反应是"加速冲过去"，不是"换路线"',
          en: 'Obstacle on the extraction route: you accelerate through it, not around it',
          ja: '撤退ルートに障害物。加速して突っ切る。迂回しない',
          ko: '철수 루트에 장애물: 우회가 아니라 가속해서 돌파한다',
        },
        {
          zh: '你有过用装甲车直接把人撞飞然后撤离成功的高光时刻',
          en: 'You have at least one clip where the armored vehicle is both the weapon and the exit vehicle',
          ja: '装甲車が武器でもあり撤退車両でもあったクリップが少なくとも1本ある',
          ko: '장갑차가 무기이자 철수 차량이었던 클립이 최소 하나 있다',
        },
        {
          zh: '你的 B 站收藏夹里有至少三个"装甲车名场面"合辑',
          en: 'Your Bilibili saved folder has at least three "armored vehicle highlight" compilations',
          ja: 'Bilibiliの保存フォルダに「装甲車名場面」まとめが少なくとも3本ある',
          ko: '빌리빌리 저장 폴더에 "장갑차 명장면" 모음이 최소 세 개 있다',
        },
        {
          zh: '"撤离成功"对你来说一定要有观赏价值，不然赢了也无聊',
          en: 'A clean, quiet extraction feels like a waste. If there\'s no story to tell, was it even a win?',
          ja: '静かな撤退は物足りない。語れる話がないなら、勝ったと言えるのか？',
          ko: '조용한 철수는 아쉽다. 이야기할 게 없다면, 이긴 건가?',
        },
      ],
      rivalSlug: 'whisper-runner',
      bestSquadSlug: 'loadout-romantic',
    },
  ],
  questions: [
    // ── Anchor questions Q1–Q12 ──────────────────────────────────────────────────
    // Q1 — Nerve anchor (peak-end: funny opener — loadout regret)
    {
      id: 'df-q1',
      kind: 'anchor',
      text: {
        zh: '仓库里放着攒了几个月不敢用的顶级装备，"装备恐惧症"已经好几个版本了。这局，你……',
        en: 'Your stash has months of top-tier gear you\'ve been too scared to touch. Full-blown gear fear, several patches running. This run, you…',
        ja: '倉庫には何ヶ月も使えずにいる最高級装備が眠ってる。いわゆる「装備恐怖症」、もう何パッチも続いてる。このランで、あなたは……',
        ko: '창고에는 몇 달째 무서워서 못 쓰는 최고급 장비가 쌓여있다. 이른바 "장비 공포증", 벌써 몇 패치째다. 이번 런, 당신은……',
      },
      options: [
        {
          label: {
            zh: '直接五套六套满配冲，躲了这么久也该正面刚一次了',
            en: 'Go full loadout, five or six sets deep. You\'ve hidden long enough — time to actually play the game',
            ja: '五セット六セットのフル装備で突撃。ここまで隠れてきたんだ、そろそろ正面から行っていい頃だ',
            ko: '5세트 6세트 풀 장비로 돌격. 이만큼 숨었으면 이제 정면으로 붙어볼 때다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '再苟一阵子，练好手感再说，装备不会跑',
            en: 'Stay in the safe loop a while longer. Gear isn\'t going anywhere; skill comes first',
            ja: 'もう少し様子見。まず腕を磨く。装備は逃げない',
            ko: '조금 더 웅크린다. 먼저 손 감각부터 키운다. 장비는 안 도망간다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先带中等配置探探路，稳一点总没错',
            en: 'Bring a mid-tier loadout to scout first. Safer bet either way',
            ja: 'まず中堅装備で偵察。安全策に越したことはない',
            ko: '일단 중간급 장비로 정찰부터. 안전한 게 낫다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '带，就当治病，躲一辈子也是另一种血亏',
            en: 'Bring it. Consider it exposure therapy: hiding forever is its own kind of loss',
            ja: '持ち込む。治療みたいなものだ。一生隠れてるのも結局は損だ',
            ko: '들고 간다. 치료라고 생각한다. 평생 숨는 것도 결국 손해다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // Q2 — Nerve anchor
    {
      id: 'df-q2',
      kind: 'anchor',
      text: {
        zh: '撤离点只剩 3 分钟，你背包装满了好东西，但通往撤离点的走廊里有枪声，你……',
        en: 'Three minutes to extraction. Your bag is packed. There\'s gunfire in the corridor to the exit. You…',
        ja: '撤退まで残り3分。バッグは満杯。出口の廊下で銃声がする。あなたは……',
        ko: '철수까지 3분. 배낭 가득 찼다. 출구 복도에서 총소리가 난다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '直接冲过去，背包里的东西比命还重要',
            en: 'Push through. The bag is worth more than the detour cost',
            ja: '突っ込む。バッグの中身は迂回コストより価値がある',
            ko: '그냥 돌파한다. 배낭 안 물건이 돌아가는 비용보다 가치 있다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '找绕路，多花两分钟也比送了强',
            en: 'Find another route. Two extra minutes beats dropping everything',
            ja: '別ルートを探す。2分余計にかかっても全部失うよりマシだ',
            ko: '우회로 찾는다. 2분 더 걸려도 다 날리는 것보단 낫다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先听声音，判断有几个人，单个的话打过去',
            en: 'Listen first. One opponent, you fight; more than that, you reroute',
            ja: '先に音を聞く。一人なら戦う、複数なら迂回する',
            ko: '먼저 소리 듣는다. 한 명이면 싸우고 더 많으면 우회',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '管他几个，先把弹药补满，然后开冲',
            en: 'Top off ammo and charge. Whoever\'s in that corridor is going down',
            ja: '弾薬を補充してから突撃。廊下の誰かを倒す',
            ko: '탄약 채우고 돌격. 복도에 있는 놈 쓰러뜨린다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // Q3 — Intel anchor
    {
      id: 'df-q3',
      kind: 'anchor',
      text: {
        zh: '进局之前，你对这次带的装备配置……',
        en: 'Before queuing in, your relationship with the kit you\'re bringing is…',
        ja: 'キューに入る前、持ち込む装備に対してあなたは……',
        ko: '큐 잡기 전, 들고 갈 장비에 대해 당신은……',
      },
      options: [
        {
          label: {
            zh: '算过性价比，确认期望收益是正的才进',
            en: 'You\'ve run the expected-value math and confirmed it\'s positive before queuing',
            ja: 'コスパを計算して、期待収益がプラスと確認してからキューに入る',
            ko: '기대 수익 계산해서 양수로 확인하고 나서 큐 잡는다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '凭感觉选，这套装备进局的"手感"对',
            en: 'Picked by feel. This kit just feels right for today\'s run',
            ja: '感覚で選んだ。今日のランにこの装備は合ってる気がする',
            ko: '감으로 골랐다. 오늘 런에 이 장비가 맞는 느낌이다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看了一眼数据，但最终还是用了喜欢那套',
            en: 'Checked the stats, then brought what you always bring anyway',
            ja: 'データは確認したけど、結局いつものを持ってきた',
            ko: '데이터 확인했지만 결국 늘 쓰던 거 들고 왔다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '根据这张地图的收益数据调整了配置，不同地图套路不同',
            en: 'Adjusted based on this map\'s loot-tier data. Different maps, different loadouts',
            ja: 'このマップのデータをもとに装備を調整した。マップごとに戦略が違う',
            ko: '이 지도의 루팅 데이터 기반으로 구성 조정했다. 지도마다 전략이 다르다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // Q4 — Intel anchor
    {
      id: 'df-q4',
      kind: 'anchor',
      text: {
        zh: '你判断一个陌生区域安不安全，主要靠……',
        en: 'To decide if an unfamiliar zone is safe, you mainly rely on…',
        ja: '知らないエリアの安全性を判断するのに、主に頼るのは……',
        ko: '낯선 구역이 안전한지 판단할 때 주로 의존하는 것은……',
      },
      options: [
        {
          label: {
            zh: '这条路上次进来多少人受伤，有历史数据',
            en: 'Historical patterns: how many players got hit here in recent runs',
            ja: '過去のデータ。最近このルートで被弾した人数',
            ko: '역사적 패턴. 최근 런에서 이 루트에서 피격된 사람 수',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '脚步声、枪声、呼吸声，耳朵告诉我一切',
            en: 'Footsteps, shots, breathing. Your ears are the real sensor',
            ja: '足音、銃声、呼吸音。耳が全部教えてくれる',
            ko: '발소리, 총소리, 숨소리. 귀가 다 알려준다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '地图标注的危险等级，先查再进',
            en: 'The map\'s official danger rating. Check before entering',
            ja: 'マップの公式危険度ランク。入る前に確認する',
            ko: '지도의 공식 위험 등급. 입장 전 확인한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '直觉，进过几次就知道那里有没有人气场',
            en: 'Gut feel. After a few runs you just sense whether a place is hot',
            ja: '直感。何回か入れば、そこに人がいる気配がわかる',
            ko: '직감. 몇 번 들어가다 보면 사람 있는 기운이 느껴진다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q5 — Tempo anchor (peak-end: funny opener)
    {
      id: 'df-q5',
      kind: 'anchor',
      text: {
        zh: '入局之后，你的第一步是……',
        en: 'After spawning in, your first move is…',
        ja: 'スポーン直後の最初の行動は……',
        ko: '스폰 후 첫 번째 행동은……',
      },
      options: [
        {
          label: {
            zh: '查看地图，规划出撤离点和最优路线',
            en: 'Open the map and plan the route to the extraction point',
            ja: 'マップを開いて撤退ポイントへの最適ルートを計画する',
            ko: '지도 열고 철수 지점까지 최적 루트 계획',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '直奔地图上第一个枪响的方向',
            en: 'Sprint toward wherever the first shot came from',
            ja: '最初の銃声が聞こえた方向に全力で走る',
            ko: '첫 총소리 난 방향으로 전력 질주',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '找一个有门的房间，把门关上，开始搜刮',
            en: 'Find a room with a door, close it, and start looting methodically',
            ja: 'ドア付きの部屋を見つけて閉めてから、落ち着いて略奪を始める',
            ko: '문 달린 방 찾아서 닫고 체계적으로 루팅 시작',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '跑向高价值区，要快，别人比你先到就少一层',
            en: 'Race to the high-value zone. First one there skims the best layer',
            ja: '高価値エリアへ急ぐ。先着が最上層を取る',
            ko: '고가치 구역으로 달린다. 먼저 도착한 사람이 제일 좋은 거 챙긴다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // Q6 — Tempo anchor
    {
      id: 'df-q6',
      kind: 'anchor',
      text: {
        zh: '撤离时间快到了，还剩两个箱子没开。贪一个，可能是血赚局；贪两个，可能是血亏出门。你……',
        en: 'Extraction window closing, two crates still unopened. Grab one more and it might be the run of the week. Grab both and it might be the loss of the month. You…',
        ja: '撤退時間が迫ってる。箱がまだ2つ未開封。1つ欲張れば大当たりかもしれない。2つ欲張れば大損かもしれない。あなたは……',
        ko: '철수 시간이 다가온다. 아직 못 연 상자가 두 개. 하나 욕심내면 대박일 수도, 둘 다 욕심내면 쪽박일 수도. 당신은……',
      },
      options: [
        {
          label: {
            zh: '两个都开，这局要么血赚局要么白给，赌了',
            en: 'Open both. This run\'s either a jackpot or a total wipe. You\'re betting on jackpot',
            ja: '両方開ける。今回は大当たりか全損かのどちらか。賭ける',
            ko: '둘 다 연다. 이번 런은 대박 아니면 전멸이다. 건다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '箱子不如命值钱，直接放弃，稳稳撤离',
            en: 'Crates aren\'t worth your life. Leave them and extract clean',
            ja: '箱より命の方が価値がある。諦めて確実に撤退する',
            ko: '상자보다 목숨이 더 값지다. 포기하고 확실하게 철수한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '开一个就走，血赚局不敢求，别血亏就行',
            en: 'Open one and go. Not chasing the jackpot, just avoiding the wipe',
            ja: '1つだけ開けて出る。大当たりは狙わない、大損さえしなければいい',
            ko: '하나만 열고 나간다. 대박은 안 바란다, 쪽박만 아니면 된다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '根本不会到这一步，早在五分钟前就已经在撤离点了',
            en: 'This never happens to you. You were at the extraction point five minutes ago',
            ja: 'そもそもこんな状況にはならない。5分前にはもう撤退ポイントにいる',
            ko: '애초에 이런 상황이 안 생긴다. 5분 전에 이미 철수 지점에 있었다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // Q7 — Bond anchor
    {
      id: 'df-q7',
      kind: 'anchor',
      text: {
        zh: '队友被击倒了，距离撤离点还有 200 米，你……',
        en: 'A teammate goes down 200 meters from the extraction point. You…',
        ja: 'チームメイトが撤退ポイントまで200mのところで倒れた。あなたは……',
        ko: '팀원이 철수 지점 200미터 앞에서 쓰러졌다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '去救，哪怕浪费时间，队友不能丢',
            en: 'Go back for them. Wasting time is fine; you don\'t leave teammates',
            ja: '助けに行く。時間がかかってもチームメイトを見捨てない',
            ko: '구하러 간다. 시간 낭비여도 팀원은 버리지 않는다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '先撤，活下去是第一原则，重新入局再开一把',
            en: 'Extract first. Surviving is the principle; next run you queue together again',
            ja: '先に撤退する。生き残ることが第一。次のランでまたチームを組む',
            ko: '먼저 철수한다. 살아남는 게 제1원칙. 다음 런에 다시 같이 큐 잡으면 된다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '压制对面火力，等队友自救，不贸然进去',
            en: 'Suppress the enemy fire and wait for them to self-revive; no reckless dive',
            ja: '敵の火力を制圧しながらチームメイトの自己蘇生を待つ。無謀に突っ込まない',
            ko: '적 화력 제압하면서 팀원 자가 부활 대기. 무모하게 들어가지 않는다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '看一眼周围情况，太危险就走，能救就救',
            en: 'Quick read of the surroundings. Too risky and you go; safe enough and you try',
            ja: '周囲を素早く確認。危険すぎれば去る、安全なら助けに行く',
            ko: '주변 상황 빠르게 확인. 너무 위험하면 가고, 안전하면 구한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // Q8 — Bond anchor
    {
      id: 'df-q8',
      kind: 'anchor',
      text: {
        zh: '组队进场，队友提议"我们分头行动"，你……',
        en: 'You\'re in a squad and someone suggests splitting up. You…',
        ja: 'チームで入場。仲間が「バラバラに動こう」と提案した。あなたは……',
        ko: '팀 입장, 팀원이 "각자 움직이자"고 제안했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '同意，各自效率更高，物资分布均匀',
            en: 'Agree. Solo efficiency is higher and loot spreads better',
            ja: '賛成。各自の効率が上がって、戦利品も均等に分散する',
            ko: '동의. 각자 효율이 더 높고 루팅도 고르게 분산된다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '反对，分开了遇到麻烦救援慢，要走一起走',
            en: 'Disagree. Split up means slower rescue response; you move as a unit',
            ja: '反対。バラバラだと救援が遅くなる。一緒に動く',
            ko: '반대. 나뉘면 구조가 느려진다. 같이 움직인다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '无所谓，我本来就不指望队友',
            en: 'Indifferent. You weren\'t counting on them anyway',
            ja: 'どうでもいい。もともとチームメイトに頼ってない',
            ko: '상관없다. 어차피 팀원 믿고 있지 않았다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '分区行动但保持语音，随时通报情况',
            en: 'Split zones but stay on voice. Constant status updates',
            ja: 'ゾーンは分けるがボイスはつなぐ。常に状況を報告する',
            ko: '구역은 나누되 보이스는 유지. 수시로 상황 보고',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // Q9 — Flair anchor
    {
      id: 'df-q9',
      kind: 'anchor',
      text: {
        zh: '撤离成功的瞬间，你……',
        en: 'The moment your extraction succeeds, you…',
        ja: '撤退成功の瞬間、あなたは……',
        ko: '철수 성공 순간, 당신은……',
      },
      options: [
        {
          label: {
            zh: '截图战利品列表，发 B 站或朋友圈',
            en: 'Screenshot the loot list and post it to Bilibili or your group chat',
            ja: 'ドロップリストをスクリーンショットして、BilibiliかSNSに投稿する',
            ko: '전리품 목록 스크린샷 찍어서 빌리빌리나 단톡방에 올린다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '记录一下这次的时间和收益，更新自己的撤离统计',
            en: 'Log the run time and returns. Update your personal extraction stats',
            ja: '今回のタイムと収益を記録する。自分の撤退統計を更新する',
            ko: '이번 시간과 수익 기록한다. 개인 철수 통계 업데이트',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '回放最后几分钟的操作，看看有没有值得剪辑的片段',
            en: 'Rewatch the last few minutes for anything clip-worthy',
            ja: '最後の数分を振り返って、クリップにできる場面がないか確認する',
            ko: '마지막 몇 분 다시 보며 클립할 만한 장면 찾는다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '静静感受一下，然后直接开下一把',
            en: 'Sit with the feeling for a second, then queue again',
            ja: '少しだけ余韻に浸って、次のキューに入る',
            ko: '잠깐 여운 느끼고 바로 다음 큐 잡는다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // Q10 — Flair anchor
    {
      id: 'df-q10',
      kind: 'anchor',
      text: {
        zh: '把对面打倒，然后……',
        en: 'You drop an opponent. What you do next is…',
        ja: '相手を倒した後、あなたは……',
        ko: '상대를 쓰러뜨리고 나서……',
      },
      options: [
        {
          label: {
            zh: '立刻舔包，看看有没有好东西',
            en: 'Loot the body immediately. Could be something good in there',
            ja: '即座に舐め包（ルーティング）する。良いものが入ってるかもしれない',
            ko: '즉시 전리품 뒤진다. 좋은 게 있을 수도 있다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '先确认周围安全，再考虑要不要舔包',
            en: 'Secure the area first, then decide about looting the body',
            ja: '周囲を安全確認してから、舐め包するか考える',
            ko: '주변 안전 확보 먼저, 그 다음 전리품 여부 결정',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '庆祝一下，顺手录个屏',
            en: 'Celebrate the moment and hit record. That one\'s going on the channel',
            ja: 'ちょっと喜んでから録画ボタンを押す。これはチャンネルに上げる',
            ko: '한 번 기뻐하고 녹화 버튼 누른다. 이거 채널에 올릴 거다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '留下特定战利品打个标记，告诉对面"好东西我拿走了"',
            en: 'Mark a choice item and leave the rest, a message: the good stuff is gone',
            ja: '良い物だけ取って残りに印をつける。メッセージは「良いものはもらった」',
            ko: '좋은 거만 챙기고 나머지에 표시 남긴다. 메시지: 좋은 건 내가 가져갔다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // Q11 — Mental anchor
    {
      id: 'df-q11',
      kind: 'anchor',
      text: {
        zh: '满载装备被人在门口蹲死，你的第一反应是……',
        en: 'You get gate-camped at the extraction point and lose a full kit. First reaction is…',
        ja: '出口でゲートキャンプされて装備を全部失った。最初の反応は……',
        ko: '철수 지점에서 게이트 캠핑 당해 풀 장비 날렸다. 첫 번째 반응은……',
      },
      options: [
        {
          label: {
            zh: '爆粗，然后立刻开下一把气消一半',
            en: 'Swear out loud, then queue again. Half the rage is gone before loading in',
            ja: '毒づいて、即座に次のキューに入る。ロード中に怒りの半分は消える',
            ko: '욕 한 마디 하고 바로 다음 큐 잡는다. 로딩 중에 화가 반쯤 가신다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '平静地记下这个出生点的蹲守规律，下次绕路',
            en: 'Calmly note the camping pattern at this exit. Next time you reroute',
            ja: '落ち着いてこの出口のキャンプパターンをメモする。次は迂回する',
            ko: '침착하게 이 출구 캠핑 패턴 기록한다. 다음엔 우회한다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '在队伍群里骂骂咧咧，至少让别人知道发生了什么',
            en: 'Vent in the squad chat. At least let everyone know what just happened',
            ja: 'チャットで愚痴る。少なくとも何が起きたかみんなに知らせる',
            ko: '팀 채팅에 분풀이한다. 최소한 무슨 일이 있었는지 알려야 한다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '叹口气，算了，下把换个撤离点',
            en: 'Sigh, let it go, pick a different exit next run',
            ja: 'ため息をついて、諦める。次は別の出口にする',
            ko: '한숨 쉬고 넘어간다. 다음 런에 다른 출구 선택하면 된다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q12 — Mental anchor
    {
      id: 'df-q12',
      kind: 'anchor',
      text: {
        zh: '连续三把没撤离成功，你……',
        en: 'Three consecutive failed extractions. You…',
        ja: '撤退失敗が3回連続。あなたは……',
        ko: '3연속 철수 실패. 당신은……',
      },
      options: [
        {
          label: {
            zh: '关游戏冷静一下，下次再来',
            en: 'Close the game, cool down, come back later',
            ja: 'ゲームを閉じて落ち着く。また後で戻ってくる',
            ko: '게임 끄고 진정한다. 나중에 다시 온다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '还是继续，就是手气差，下把一定成',
            en: 'Keep going. Just bad luck; the next run will land',
            ja: 'まだ続ける。ただ運が悪いだけ。次は成功する',
            ko: '계속한다. 그냥 운이 나쁜 거다. 다음 번엔 될 거다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '越挫越勇，三把失败证明下把该赢了',
            en: 'Loss streak means the win is overdue. You go harder',
            ja: '3回負けたなら次は勝ちの順番だ。さらに気合を入れる',
            ko: '3번 연패하면 다음 판 이길 차례다. 더 기합 넣는다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '分析三把失败的原因，找到共同点，下把避开',
            en: 'Analyze all three failures for a common factor and avoid it next run',
            ja: '3回の失敗の共通点を分析して、次のランで避ける',
            ko: '3번 실패 원인 분석해서 공통점 찾고 다음에 피한다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
      ],
    },

    // ── Compound questions Q13–Q30 ───────────────────────────────────────────────
    // Q13 — Nerve × Intel (vacuum effect / high-value zone)
    {
      id: 'df-q13',
      kind: 'compound',
      text: {
        zh: '你注意到地图西边打得很热闹，东边一片安静，你……',
        en: 'Heavy fighting in the west sector, east sector quiet. You…',
        ja: '西エリアで激しい戦闘、東エリアは静かだ。あなたは……',
        ko: '서쪽 구역 전투 격렬, 동쪽 구역 조용하다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '奔向西边，高风险高收益，打架才有好东西',
            en: 'Head west. High risk, high reward; fighting means better loot left over',
            ja: '西へ向かう。高リスク高リターン。戦闘の後には良い戦利品が残る',
            ko: '서쪽으로 간다. 고위험 고수익. 싸우다 남은 루팅이 좋다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '去东边，这是真空效应，安静的地方才是真正的金矿',
            en: 'Go east. That\'s the vacuum effect: the quiet zone is where the real loot sits',
            ja: '東へ行く。これが真空効果。静かなエリアこそ本当の金鉱だ',
            ko: '동쪽으로 간다. 이게 진공 효과다. 조용한 구역이 진짜 황금이다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '先绕过去看一眼西边战况，再决定',
            en: 'Circle wide to scout the west situation before committing',
            ja: '西の状況を偵察してから決める',
            ko: '서쪽 상황 원거리 정찰하고 결정한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '直接走我已经盯好的那条路线，别人打架是别人的事',
            en: 'Follow my pre-planned route. What others are fighting about is their business',
            ja: '決めておいたルートを進む。他の人が戦っているのは関係ない',
            ko: '미리 정해둔 루트대로 간다. 남들이 싸우는 건 남의 일이다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // Q14 — Nerve × Tempo (Boss spawn — boss-contractor scenario)
    {
      id: 'df-q14',
      kind: 'compound',
      text: {
        zh: '"成为 Boss"模式开启了，Boss 刷新点在地图中心，你……',
        en: '"Become the Boss" mode activates. Boss spawn is dead center on the map. You…',
        ja: '「ボスになる」モードが発動。ボスのスポーン地点はマップ中央。あなたは……',
        ko: '"보스가 되어라" 모드 활성화. 보스 스폰은 지도 정중앙. 당신은……',
      },
      options: [
        {
          label: {
            zh: '立刻冲，争取第一个到 Boss 刷新点',
            en: 'Sprint there immediately. First to the Boss spawn wins the drop',
            ja: '即ダッシュ。ボスのスポーン地点に最初に着いた者が勝つ',
            ko: '즉시 전력 질주. 보스 스폰에 제일 먼저 도착한 사람이 드랍 가져간다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等第一波交火结束，趁乱去拣漏',
            en: 'Wait for the first wave to finish fighting each other, then sweep in',
            ja: '最初の交戦が終わるのを待ってから漁夫の利を得る',
            ko: '첫 교전이 끝날 때까지 기다렸다가 어부지리 노린다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '快速移动但找掩护路线，不和人正面',
            en: 'Move fast but use cover routes. No frontal contacts until you\'re set',
            ja: '素早く動くが掩蔽ルートを使う。準備が整うまで正面衝突しない',
            ko: '빠르게 이동하되 엄폐 루트 사용. 준비될 때까지 정면 접촉 없음',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '留在当前位置继续搜刮，Boss 掉落有人比我更需要',
            en: 'Stay put and keep looting. Others want the Boss drop more than you do',
            ja: '今の位置で略奪を続ける。ボスドロップを必要としてる人が他にいる',
            ko: '현재 위치 유지하고 루팅 계속. 보스 드랍은 다른 사람이 더 필요하다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // Q15 — Intel × Tempo (footstep audio / whisper-runner)
    {
      id: 'df-q15',
      kind: 'compound',
      text: {
        zh: '你在走廊里听到了疑似脚步声，你……',
        en: 'You hear what might be footsteps in the corridor. You…',
        ja: '廊下で足音らしき音が聞こえた。あなたは……',
        ko: '복도에서 발소리 같은 소리가 들렸다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '立刻停下来，靠耳朵精确定位，等对面先动',
            en: 'Stop immediately, use audio to place them precisely, let them move first',
            ja: '即座に止まって音で正確に位置を特定し、相手が先に動くのを待つ',
            ko: '즉시 멈추고 소리로 정확히 위치 파악, 상대가 먼저 움직이길 기다린다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '加速推过去，主动发起接触，先下手为强',
            en: 'Accelerate and push. Make contact first; initiative is the advantage',
            ja: '加速して押し込む。先に接触する。主導権が優位性だ',
            ko: '가속해서 밀어붙인다. 먼저 접촉한다. 선제가 유리함이다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '换路线，不确定的信息不值得用生命验证',
            en: 'Reroute. Unconfirmed intel isn\'t worth testing with your life',
            ja: 'ルートを変更する。不確かな情報を命で確認する価値はない',
            ko: '루트 변경. 불확실한 정보를 목숨 걸고 확인할 가치 없다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '凭感觉判断危不危险，手感告诉我没事就继续走',
            en: 'Gut check: if it feels safe it probably is. Keep moving at pace',
            ja: '感覚で危険かどうか判断する。大丈夫と感じたら歩き続ける',
            ko: '감으로 위험한지 판단. 괜찮은 느낌이면 계속 걷는다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // Q16 — Nerve × Bond (救人 / team play)
    {
      id: 'df-q16',
      kind: 'compound',
      text: {
        zh: '队友在高价值区遭遇伏击，呼叫支援，你当时背包已经装得七八成满，你……',
        en: 'Your teammate is ambushed in the hot zone and calls for backup. Your bag is 70% full. You…',
        ja: 'チームメイットが高価値エリアで待ち伏せに遭い支援を要請。バッグは7割満杯。あなたは……',
        ko: '팀원이 핫존에서 매복 당해 지원 요청. 배낭은 70% 찼다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '冲过去支援，背包满了也能打，兄弟先救',
            en: 'Rush in. Bag is full enough; your teammate comes first',
            ja: '支援に駆ける。バッグは十分。チームメイットが先だ',
            ko: '지원하러 달려간다. 배낭 충분히 찼다. 팀원이 먼저다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '先把自己的东西搜完再过去，不然就浪费了',
            en: 'Finish looting the current room first. Rushing in half-stocked is wasteful',
            ja: '今の部屋を全部漁ってから行く。半端なまま突っ込むのは無駄だ',
            ko: '현재 방 루팅 다 마치고 간다. 반만 채우고 돌진하는 건 낭비다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '过去了，但保持距离观察，不贸然进战',
            en: 'Move toward them but hold distance. Observe before committing to the fight',
            ja: '移動はするが距離を保つ。戦闘に参加する前に状況を確認する',
            ko: '이동은 하되 거리 유지. 전투 합류 전 상황 관찰',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '让他坚持，我这边情况也复杂，各自解决各自的',
            en: 'Tell them to hold. Your side is complicated too; handle your own situation',
            ja: '踏ん張ってと伝える。こちらも状況が複雑だ。各自で解決する',
            ko: '버티라고 한다. 이쪽도 상황이 복잡하다. 각자 해결하면 된다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // Q17 — Intel × Bond (information sharing / recon)
    {
      id: 'df-q17',
      kind: 'compound',
      text: {
        zh: '你发现了一个没人知道的安全撤离路线，你……',
        en: 'You\'ve found a safe extraction route nobody else knows about. You…',
        ja: '誰も知らない安全な撤退ルートを発見した。あなたは……',
        ko: '아무도 모르는 안전한 철수 루트를 발견했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '告诉全队，信息分享了才有团队优势',
            en: 'Share it with the whole squad. Information shared is team advantage',
            ja: 'チーム全員に教える。情報を共有してこそチームの優位性が生まれる',
            ko: '팀 전체에 공유한다. 정보 나눠야 팀 이점이 생긴다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '留着自用，人多了那条路就不安全了',
            en: 'Keep it. More people on that route means it stops being safe',
            ja: '自分用に取っておく。人が増えたらそのルートは安全じゃなくなる',
            ko: '혼자만 쓴다. 사람 많아지면 그 루트도 안전하지 않아진다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '标记在地图上，不说话，队友自己发现吧',
            en: 'Mark it on the map silently. If teammates notice, good for them',
            ja: 'マップに印をつけるだけ。チームメイットが気づけば幸運だ',
            ko: '지도에 표시만 한다. 팀원이 알아채면 그만이다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '先用这次，下次再和队友分享，保险起见',
            en: 'Use it this run, share it with the squad next time once confirmed',
            ja: '今回は自分で使う。次回、確認が取れたらチームと共有する',
            ko: '이번엔 혼자 쓰고 다음엔 팀과 공유한다. 확인 후에 알려주는 게 안전하다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // Q18 — Tempo × Flair (armored-showoff / extraction ceremony)
    {
      id: 'df-q18',
      kind: 'compound',
      text: {
        zh: '你发现了一辆装甲车，距离撤离点还有 3 分钟，你……',
        en: 'You find an armored vehicle with three minutes to extraction. You…',
        ja: '撤退まで3分のところで装甲車を発見した。あなたは……',
        ko: '철수까지 3분 남은 상황에서 장갑차를 발견했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '开车撤离，大场面，这才叫结局',
            en: 'Drive out in style. This is how an extraction should end',
            ja: '車で撤退する。これこそがエンディングだ',
            ko: '차 타고 퇴장한다. 이게 철수다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不坐，开车声音太大，暴露位置不划算',
            en: 'Skip it. The engine noise gives away your position; not worth the drama',
            ja: '乗らない。エンジン音で位置がバレる。そのリスクに見合わない',
            ko: '안 탄다. 엔진 소리로 위치 노출된다. 리스크가 이점보다 크다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '坐上去，要快，别管有没有好看',
            en: 'Get in and go fast. Efficiency over aesthetics',
            ja: '乗って急ぐ。見た目より効率だ',
            ko: '타고 빠르게 간다. 효율이 미학보다 우선이다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '找个角度录个开车出来的镜头，然后再走',
            en: 'Set up the angle for the clip first, then drive out',
            ja: 'まずクリップ映えするアングルを確認してから出発する',
            ko: '클립 찍기 좋은 각도 먼저 잡고 나서 출발한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // Q19 — Nerve × Flair (loadout-romantic / weapon identity)
    {
      id: 'df-q19',
      kind: 'compound',
      text: {
        zh: '版本更新削弱了你最爱的枪，你……',
        en: 'A patch nerfed your favorite weapon. You…',
        ja: 'アップデートでお気に入りの武器がナーフされた。あなたは……',
        ko: '업데이트로 좋아하는 총이 너프됐다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '换枪，跟版本跑是基本功，感情用事会输',
            en: 'Switch weapons. Following the meta is fundamentals; sentiment loses games',
            ja: '武器を変える。メタに合わせることが基本。感情で戦うと負ける',
            ko: '총 바꾼다. 메타 따라가는 게 기본기. 감정으로 하면 진다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '继续用，削弱了也打，这把枪是我的身份',
            en: 'Keep using it. Nerfed or not, this weapon is your identity',
            ja: 'ナーフされても使い続ける。この武器は自分のアイデンティティだ',
            ko: '계속 쓴다. 너프됐어도 이 총은 내 정체성이다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先测一下新数据，看看削弱了多少，再决定',
            en: 'Test the new numbers first, then decide based on how much it dropped',
            ja: '新しいデータをテストしてから、どれくらい弱体化したか確認して決める',
            ko: '새 수치 먼저 테스트하고 얼마나 약해졌는지 확인 후 결정',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '坚持用，打出来的高光更有价值，不靠强版本',
            en: 'Stick with it. Highlights with an off-meta weapon mean more',
            ja: '使い続ける。弱い武器でのハイライトの方が価値がある',
            ko: '계속 쓴다. 비메타 무기로 찍은 하이라이트가 더 가치 있다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // Q20 — Tempo × Bond (squad coordination speed)
    {
      id: 'df-q20',
      kind: 'compound',
      text: {
        zh: '团队还在讨论策略，你已经看好路线了，你……',
        en: 'The squad is still debating the plan and you\'ve already mapped the route. You…',
        ja: 'チームがまだ戦略を議論している間に、あなたはもうルートを決めた。あなたは……',
        ko: '팀이 전략 논의 중인데 당신은 이미 루트 정했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '等大家讨论完，整队行动效果更好',
            en: 'Wait for the discussion to wrap up. Coordinated moves hit harder',
            ja: '議論が終わるまで待つ。まとまって動く方が効果的だ',
            ko: '토론이 끝날 때까지 기다린다. 함께 움직이면 더 효과적이다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '先走，等他们找到我就行了',
            en: 'Move ahead. They\'ll find you when they\'re ready',
            ja: '先に出発する。準備ができたら向こうが来る',
            ko: '먼저 출발한다. 준비되면 그쪽에서 올 거다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '把我的路线分享给大家，然后出发',
            en: 'Share your route with everyone, then go',
            ja: '自分のルートをみんなに共有してから出発する',
            ko: '내 루트 팀에 공유하고 출발한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '等人，但在心里把方案优化三遍',
            en: 'Wait for them, but mentally refine the plan three times while doing it',
            ja: '待つが、頭の中でルートを3回最適化する',
            ko: '기다리되 머릿속으로 루트를 세 번 최적화한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
      ],
    },
    // Q21 — Nerve × Mental (tilt / risk under pressure)
    {
      id: 'df-q21',
      kind: 'compound',
      text: {
        zh: '满编装备好好走位，忽然一枪隔墙秒穿掩体爆头，屏幕跳出"你已阵亡"。你的第一反应是……',
        en: 'Full kit, good positioning, and then one shot punches straight through cover you were sure was solid. Screen says you\'re dead. First reaction…',
        ja: 'フル装備で完璧に立ち回ってたのに、突然壁越しの一発が掩体を貫通してヘッドショット。画面に「戦死」の表示。最初の反応は……',
        ko: '풀 장비로 완벽하게 움직이고 있었는데 갑자기 벽 너머에서 한 발이 엄폐물을 뚫고 헤드샷. 화면에 "전사" 표시. 첫 번째 반응은……',
      },
      options: [
        {
          label: {
            zh: '先开麦骂一句"外挂"，然后立刻重开一把找回状态',
            en: 'Yell "hacker" out loud, then requeue immediately to shake it off',
            ja: '「チーター」と叫んでから、すぐ再キューして気持ちを切り替える',
            ko: '"핵쟁이"라고 소리치고 바로 다시 큐 잡아서 기분 전환',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '算了，可能真是我掩体没找对，下把注意点位',
            en: 'Let it go. Maybe your cover just wasn\'t as solid as you thought. Pay attention next run',
            ja: 'まあいい。掩体の選び方が悪かっただけかもしれない。次は気をつける',
            ko: '그냥 넘긴다. 엄폐물 선택이 잘못됐을 수도 있다. 다음엔 신경 쓴다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '举报按钮点到手软，顺手截图发朋友圈锐评一番',
            en: 'Mash the report button until your thumb hurts, then screenshot it for a group-chat rant',
            ja: '通報ボタンを連打して、ついでにスクショをグループチャットに投げつける',
            ko: '신고 버튼 연타하고 스크린샷 찍어서 단톡방에 저격한다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '打开击杀回放，冷静判断这一枪到底合不合理',
            en: 'Pull up the killcam and calmly work out whether that shot was actually legit',
            ja: 'キルカムを開いて、その一発が本当に妥当だったのか冷静に判断する',
            ko: '킬캠 열어서 그 한 발이 진짜 정당했는지 침착하게 판단한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q22 — Intel × Flair (loadout display / data vs. feel)
    {
      id: 'df-q22',
      kind: 'compound',
      text: {
        zh: '你在 B 站看到了一个"最强高价值区配置推荐"视频，你……',
        en: 'You find a Bilibili video titled "Best High-Value Zone Loadout Guide." You…',
        ja: 'Bilibiliで「最強高価値エリア装備推薦」動画を見つけた。あなたは……',
        ko: '빌리빌리에서 "최강 고가치 구역 장비 추천" 영상을 발견했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '认真看完，下次进局用推荐配置试试',
            en: 'Watch it carefully and try the recommended loadout next run',
            ja: 'しっかり見て、次のランで推薦装備を試す',
            ko: '꼼꼼히 보고 다음 런에 추천 장비 써본다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '看一眼但不跟，感觉那套不适合我的打法',
            en: 'Glance at it but pass. That kit doesn\'t match your playstyle',
            ja: 'ちらっと見るが従わない。あの装備は自分のプレースタイルに合わない',
            ko: '잠깐 보지만 따르진 않는다. 그 장비는 내 플레이스타일에 안 맞는다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '把数据记下来，自己做对比验证',
            en: 'Write down the numbers and run your own comparison tests',
            ja: 'データを書き留めて、自分で比較検証する',
            ko: '수치 기록하고 직접 비교 테스트를 한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '自己也想出一个配置，拍视频发上去',
            en: 'Come up with your own loadout guide and post it',
            ja: '自分でも装備ガイドを考えて投稿する',
            ko: '나만의 장비 가이드 만들어서 올린다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // Q23 — Tempo × Mental (pace under pressure)
    {
      id: 'df-q23',
      kind: 'compound',
      text: {
        zh: '官方一次性削弱了你最常用的打法，"背刺"两个字已经刷屏评论区，你……',
        en: 'A patch guts your go-to playstyle overnight. The comment section is already calling it a betrayal patch. You…',
        ja: 'アップデートでいつもの戦術が一気に弱体化。コメント欄はもう"裏切りパッチ"呼ばわりだ。あなたは……',
        ko: '패치 한 방에 자주 쓰던 플레이 스타일이 너프당했다. 댓글창은 이미 "뒤통수 패치"라고 부른다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '先适应新规则，抱怨解决不了什么，抓紧调整打法',
            en: 'Adapt to the new rules first. Complaining fixes nothing; adjust your playstyle fast',
            ja: '先に新ルールに適応する。文句を言っても何も変わらない。すぐ戦術を調整する',
            ko: '새 규칙에 먼저 적응한다. 불평해도 안 바뀐다. 빨리 플레이 스타일 조정한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '不理评论区，继续用老套路，改不改是官方的事',
            en: 'Ignore the comment section, keep your old routine. Whether they revert it is their problem',
            ja: 'コメント欄は無視して、いつも通りのやり方を続ける。戻すかどうかは運営の問題だ',
            ko: '댓글창은 무시하고 하던 대로 계속한다. 되돌리든 말든 그건 운영 몫이다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '心里憋着一股火，先忍着，等官方的补偿公告',
            en: 'Sit on the frustration for now, wait for the inevitable apology-and-compensation post',
            ja: 'モヤモヤを抱えたまま我慢して、公式の補償告知を待つ',
            ko: '속으로 열받지만 참는다. 공식 보상 공지를 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '第一时间冲进评论区开喷，态度必须让官方看见',
            en: 'Rush straight into the comments and let it rip. Make sure the devs actually see it',
            ja: '真っ先にコメント欄に突撃して吐き出す。運営に見せつけないと気が済まない',
            ko: '제일 먼저 댓글창으로 돌진해서 쏟아낸다. 운영이 봐야 직성이 풀린다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // Q24 — Nerve × Tempo (crate-philosopher vacuum / ROI speed)
    {
      id: 'df-q24',
      kind: 'compound',
      text: {
        zh: '你找到一个几乎没人来过的角落，里面有四个箱子，你……',
        en: 'You find a corner no one else has touched. Four crates inside. You…',
        ja: '誰もほとんど来ていないコーナーを見つけた。中に箱が4つある。あなたは……',
        ko: '거의 아무도 오지 않은 구석을 발견했다. 안에 상자가 네 개 있다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '关门，全部搜完，这就是"苟活"的黄金地带',
            en: 'Close the door and clear all four. This is what "rat mode" looks like at its best',
            ja: 'ドアを閉めて4つ全部開ける。これが「苟活」の黄金地帯だ',
            ko: '문 닫고 다 뒤진다. 이게 "쥐 플레이"의 황금 구역이다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '快速扫一遍，只拿最值钱的，然后继续移动',
            en: 'Speed-scan all four, grab only the highest-value items, keep moving',
            ja: '素早くスキャンして最も価値のある物だけ取り、移動を続ける',
            ko: '빠르게 훑어서 가장 가치 있는 것만 챙기고 계속 이동',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '有点想全搜，但撤离时间快到了，只能取舍',
            en: 'Want to clear all of them, but time is short. You triage',
            ja: '全部開けたいが時間が迫っている。取捨選択する',
            ko: '다 열고 싶은데 시간이 촉박하다. 우선순위 정해야 한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '记下位置，这次全搜，下次还来',
            en: 'Note the location, clear everything now, and plan to return next run',
            ja: '場所をメモして今回は全部取り、次回また来る計画を立てる',
            ko: '위치 기록해두고 이번엔 다 챙기고 다음에도 온다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // Q25 — Intel × Mental (information overload / tilt)
    {
      id: 'df-q25',
      kind: 'compound',
      text: {
        zh: '你在局内没有什么关键信息，视野一片混乱，你……',
        en: 'You\'re in a run with no solid intel and the situation is chaotic. You…',
        ja: 'ランの最中に重要な情報がなく、状況が混乱している。あなたは……',
        ko: '런 중에 핵심 정보가 없고 상황이 혼란스럽다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '冷静，耳朵和眼睛同时工作，慢慢拼出一张地图',
            en: 'Stay calm. Ears and eyes work together to piece the map together',
            ja: '落ち着いて耳と目を同時に使い、少しずつ状況を把握していく',
            ko: '침착하게 귀와 눈을 함께 써서 천천히 상황을 파악한다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '不管了，凭感觉走，混乱中靠直觉更有用',
            en: 'Stop trying to figure it out. Instinct works better in chaos',
            ja: '考えるのをやめる。混乱の中では直感の方が役立つ',
            ko: '파악하려는 걸 포기한다. 혼란 속에서는 직감이 더 유용하다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '有点焦虑，但强撑着继续分析',
            en: 'A bit anxious, but you push through and keep analyzing anyway',
            ja: '少し焦るが、強引に分析を続ける',
            ko: '조금 불안하지만 억지로 분석을 계속한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '信息不够直接暂停行动，找到安全点再重新评估',
            en: 'Not enough intel to move. Find a safe spot, stop, and reassess',
            ja: '情報不足で行動をいったん止める。安全な場所を見つけて再評価する',
            ko: '정보 부족이면 행동 중단. 안전 지점 찾아서 재평가한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q26 — Bond × Flair (squad showmanship)
    {
      id: 'df-q26',
      kind: 'compound',
      text: {
        zh: '全队一起撤离成功，最后的撤离镜头里……',
        en: 'The whole squad extracts successfully. In the extraction cutscene…',
        ja: 'チーム全員の撤退成功。撤退カットシーンで……',
        ko: '팀 전체 철수 성공. 철수 컷씬에서……',
      },
      options: [
        {
          label: {
            zh: '我就站在队友旁边，合影一下也好看',
            en: 'You stand next to your teammates. A group shot is a good shot',
            ja: 'チームメイットの隣に立つ。集合写真もいい',
            ko: '팀원 옆에 서있다. 단체 사진도 잘 나온다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '低调站着，不需要特别的仪式感',
            en: 'You stand quietly. No ceremony needed; you all made it',
            ja: 'そっと立っている。特別な儀式は要らない。全員脱出できた',
            ko: '조용히 서있다. 특별한 의식 필요 없다. 다 살았으면 됐지',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '把这次合作的高光时刻整理成一个剪辑，发给大家',
            en: 'You cut together the squad highlights from this run and share them in the group',
            ja: 'このランのチームハイライトを編集してみんなに送る',
            ko: '이번 런 팀 하이라이트 편집해서 다들에게 공유한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '撤离就撤离，截图战利品比截图人更有意义',
            en: 'Skip the cutscene screenshot. Loot lists are more meaningful than group shots',
            ja: 'カットシーンの写真より戦利品リストの方が意味がある',
            ko: '컷씬 사진보다 전리품 목록 스크린샷이 더 의미 있다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // Q27 — Bond × Mental (rescue stress)
    {
      id: 'df-q27',
      kind: 'compound',
      text: {
        zh: '一支疑似护航队从你旁边经过，报点精准到卡秒，复活踩着时间点，清 Boss 像是走流程。你……',
        en: 'A squad that reeks of paid boosting passes by, callouts timed to the second, revives on a metronome, clearing the Boss like a routine job. You…',
        ja: '明らかに"護航"（有料代行）っぽい部隊とすれ違った。コールは秒単位で正確、蘇生はタイミングぴったり、ボス処理はまるで流れ作業だ。あなたは……',
        ko: '딱 봐도 "호위"(유료 대리) 팀 같은 스쿼드가 지나간다. 콜은 초 단위로 정확하고, 부활은 타이밍 맞춰 딱딱, 보스 처리는 완전 루틴이다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '蹭上去跟着学两招，说不定能白嫖一波护航',
            en: 'Tag along and try to learn something. Might get a free carry out of it too',
            ja: 'ついていって技を盗む。運が良ければタダで護航してもらえるかもしれない',
            ko: '따라붙어서 기술 훔쳐본다. 운 좋으면 공짜로 호위받을 수도',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '躲远点，人家是收费专业户，跟着也是尴尬',
            en: 'Keep your distance. They\'re paid professionals; tagging along is just awkward',
            ja: '距離を取る。相手はプロの有料部隊だ。ついていっても気まずいだけ',
            ko: '거리를 둔다. 저쪽은 유료 프로다. 따라가봤자 어색하기만 하다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '在频道里阴阳怪气一句"陪玩天天见"，图一乐',
            en: 'Drop a sarcastic "boosting squads everywhere these days" in chat, just for the laugh',
            ja: 'チャットで「代行、毎日見るね」と皮肉って笑いを取る',
            ko: '채팅창에 "호위팀 요즘 매일 보네"라고 비꼬면서 혼자 웃는다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '凑过去打个招呼，混熟了没准以后能拼车',
            en: 'Go say hi. Get friendly enough and maybe you squad up together next time',
            ja: '近づいて挨拶する。仲良くなれば次は一緒に組めるかもしれない',
            ko: '다가가서 인사한다. 친해지면 다음엔 같이 팀 짤 수도 있다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // Q28 — Nerve × Intel × dominants (peak-end: funny scenario — loadout regret comedy)
    {
      id: 'df-q28',
      kind: 'compound',
      text: {
        zh: '保险柜这局只能保 1 件装备，其他万一没撤出来就全打水漂。你保哪个？',
        en: 'The insurance slot only covers one item this run. Everything else is gone for good if you don\'t extract. What do you insure?',
        ja: '保険枠は今回1つだけ。他のものは撤退できなければ全部消える。何を保険に入れる？',
        ko: '보험 슬롯은 이번 런에 딱 하나. 나머지는 철수 실패하면 전부 날아간다. 뭘 보험 걸까?',
      },
      options: [
        {
          label: {
            zh: '保最贵那件，数字最大最划算，感情不感情的先放一边',
            en: 'Insure the most expensive piece. Biggest number wins; sentiment can wait',
            ja: '一番高いものを保険に入れる。数字が一番大きいのが正解。感情は後回し',
            ko: '제일 비싼 걸 보험 건다. 숫자가 제일 큰 게 정답. 감정은 나중 문제',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '保那把用惯的老枪，其他大不了重新攒，感情这东西算不出来',
            en: 'Insure the beat-up gun you\'ve always used. Everything else you can grind back. Some things don\'t show up on a spreadsheet',
            ja: '使い慣れた古い銃を保険に入れる。他は取り返せばいい。愛着は数字にできない',
            ko: '늘 쓰던 낡은 총을 보험 건다. 나머진 다시 모으면 된다. 정은 계산이 안 된다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '保直觉告诉我这局用得上的那件，说不清为什么',
            en: 'Insure whatever your gut says you\'ll need this run. Can\'t quite explain why',
            ja: '今回使いそうな気がするものを保険にする。理由はうまく説明できない',
            ko: '이번 런에 쓸 것 같은 감이 오는 걸 보험 건다. 이유는 설명 못 한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '干脆不保，把这局的期望值算好，赌一把满撤',
            en: 'Skip insurance entirely. Run the expected value on the whole loadout and bet on a clean extraction',
            ja: 'いっそ保険は使わない。今回の期待値を計算して、フル装備での撤退に賭ける',
            ko: '차라리 보험 안 걸고 이번 런 기대값 계산해서 풀 철수에 건다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // Q29 — Tempo × Intel (extraction timing — vacuum effect comedy)
    {
      id: 'df-q29',
      kind: 'compound',
      text: {
        zh: '所有人都在抢撤离点，你……',
        en: 'Every player left is converging on the same extraction point. You…',
        ja: '残っている全員が同じ撤退ポイントに集まってきた。あなたは……',
        ko: '남은 모든 플레이어가 같은 철수 지점으로 몰려든다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '直接推过去，提前到了就是优势',
            en: 'Push straight through. First there has the angle advantage',
            ja: '直接向かう。先に着いた方が有利だ',
            ko: '그냥 밀고 간다. 먼저 도착하면 각도 우위가 생긴다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '等他们先互相打，我再出现',
            en: 'Wait for them to fight each other first, then appear',
            ja: '先に彼らが戦い合うのを待ってから登場する',
            ko: '먼저 서로 싸우게 내버려두고 나서 등장한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '换一个没人争的撤离点，我早就查好备用方案了',
            en: 'Switch to the other extraction point nobody\'s fighting over. You had a backup',
            ja: '誰も争っていない別の撤退ポイントに変更する。予備プランは用意してあった',
            ko: '아무도 안 싸우는 다른 철수 지점으로 바꾼다. 대안은 이미 준비해뒀다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '绕到人群后方，趁乱打一波，再撤',
            en: 'Circle behind the crowd, land a play in the chaos, then extract',
            ja: '人の後ろに回り込んで混乱に乗じて動き、撤退する',
            ko: '군중 뒤쪽으로 돌아서 혼란 속에 한 방 먹이고 철수한다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // Q30 — Nerve × Tempo × Flair (peak-end: armored-showoff extract-zone showmanship)
    {
      id: 'df-q30',
      kind: 'compound',
      text: {
        zh: '这把你背包全满，装甲全上，撤离点就在前方，只有一个人挡路，你……',
        en: 'Full bag, full armor, extraction ahead, one person in the way. You…',
        ja: 'バッグ満杯、アーマー全装着、撤退ポイントは目の前、一人だけが邪魔している。あなたは……',
        ko: '가방 가득, 방탄복 완전 장착, 철수 지점이 눈앞에, 한 명이 막고 있다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '绕路，保住装备比打架重要，撤离才是目标',
            en: 'Detour around them. Gear safety over glory; extraction is the point',
            ja: '迂回する。装備を守ることが戦闘より重要。撤退がゴールだ',
            ko: '우회한다. 장비 안전이 전투보다 중요. 철수가 목표다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '正面冲，打死他，然后走，简单干净',
            en: 'Frontal charge, take them down, then extract. Clean and simple',
            ja: '正面突撃。倒してから撤退する。シンプルで明快だ',
            ko: '정면 돌격, 쓰러뜨리고 철수한다. 단순하고 깔끔하다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '找个装甲车开过去，碾过他再撤离，这才叫电影',
            en: 'Find the nearest vehicle, run him over on the way to extraction — that\'s a movie ending',
            ja: '装甲車を見つけて轢いてから撤退する。それこそが映画のラストだ',
            ko: '장갑차 찾아서 치고 철수한다. 이게 영화 엔딩이지',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先用战术烟雾遮住自己，等他误判位置，绕过去',
            en: 'Pop smoke to cover your position, let them misread the angle, slip through',
            ja: '煙幕で位置を隠して相手に誤判断させ、すり抜ける',
            ko: '연막탄 터뜨려서 위치 가리고 상대가 각도 오판하게 만들어 통과한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
  ],
};

export default game;
