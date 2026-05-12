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
        zh: '情报快读工头',
        en: 'Recon Foreman',
        ja: '情報速読工頭',
        ko: '정찰 속독 십장',
      },
      oneLiner: {
        zh: '地图扫一眼就知道该去哪，先抢撤离点再说',
        en: 'Five-second map read, extraction point called before anyone else opens their tab',
        ja: '地図を5秒見れば行き先は決まってる。撤退ポイントは誰より先に宣言する',
        ko: '지도 5초 보면 어디 갈지 안다. 철수 지점은 누구보다 먼저 선언한다',
      },
      description: {
        zh: '你在大厅就把撤离点和地图热点过了一遍，入局第一步是跑向最近的优质信息节点，不是最近的箱子。风控型的你不是不打架，只是不打没把握的架。地图读图速度让你在前 60 秒已经形成了一套高效路线。队友还在磨蹭时，你已经在撤离点等他们了。"先占点再说"是你的核心信条，即使最终撤离路线要临时改，信息优势也让你能比别人多反应半秒。',
        en: 'Before the match loads, you already know which extraction point to anchor. First 30 seconds of the round: you\'re moving, not looting. The map is a routing problem and you solve it faster than most people notice there is one. You won\'t fight unless the angle is already yours. Conservative by instinct, fast by design — the rare combination that makes you frustrating to ambush. Teammates find you at the exit wondering when you arrived.',
        ja: '試合が始まる前に、どの撤退ポイントを押さえるか決めてる。最初の30秒は移動。略奪じゃない。地図はルーティング問題で、他の人が問題に気づく前に解いてる。角度が自分にないなら戦わない。本能は慎重、動きは速い——その組み合わせのせいで待ち伏せされにくい。チームは「いつ来たの？」って聞きながら撤退出口でお前を見つける。',
        ko: '매치 시작 전에 이미 어떤 철수 지점을 선점할지 정해뒀다. 처음 30초는 이동이다. 루팅 아님. 지도는 루팅 문제고, 남들이 문제를 알아채기 전에 풀어버린다. 각도가 내 것이 아니면 싸우지 않는다. 본능은 신중하고 움직임은 빠르다 — 그 조합 덕에 기습당하기 어렵다. 팀원들은 "언제 왔어?"라고 물으며 철수 출구에서 당신을 발견한다.',
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
        zh: '你找到一个有门的房间，把一个箱子推到门后，然后开始有条不紊地搜刮。战场轰鸣声你当白噪音，20 分钟后离开时满载而归。"苟活"对你来说不是骂名，而是一种生存哲学。你靠手感判断哪条走廊没有脚步声，枪只在角度完全确认后才开。有人问你击杀数是多少，你会说"零，但我撤离了"，语气里没有一点羞愧。',
        en: 'You claim a room, push a crate against the door, and enter a methodical looting state. The firefight three floors down is ambient noise. Twenty minutes later you walk out loaded. Zero kills, 100% extraction — you say this without shame because the math is correct. Your gun comes out when the angle is already yours, not before. "Rat player" is what people who didn\'t extract call you.',
        ja: '部屋を確保して、ドアに箱を押し当ててから、黙々と略奪を始める。3階下の銃声はBGMだ。20分後に満載で出てくる。キル数はゼロ、撤退は100%——それを恥ずかしいとは思わない。数字が正しいから。銃を出すのは角度が完全に確認できたときだけ。「ラットプレイヤー」は撤退できなかった人が言う言葉だ。',
        ko: '방을 점령하고 문 뒤에 상자를 밀어 넣은 다음 체계적으로 루팅을 시작한다. 3층 아래 총격전은 배경음악이다. 20분 후 가득 들고 나온다. 킬 수 0, 철수 100% — 이걸 부끄럽게 생각하지 않는다. 수치가 맞으니까. 각도가 완전히 확인된 후에만 총을 꺼낸다. "쥐 플레이어"는 철수 못 한 사람들이 하는 말이다.',
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
        zh: '高价值套件商人',
        en: 'Kit Merchant',
        ja: '高価値キット商人',
        ko: '고가치 키트 상인',
      },
      oneLiner: {
        zh: '专挑高价值区打劫，中档物资连看都不看',
        en: 'Mid-tier loot doesn\'t exist in your vocabulary — you go straight for the high-value zone',
        ja: '中ランクの戦利品は眼中にない。真っ直ぐ高価値エリアへ',
        ko: '중간 등급 루팅은 사전에 없다. 곧장 고가치 구역으로 간다',
      },
      description: {
        zh: '你进局之前就打好算盘了：只去高价值区，只拿高价值物资，中间什么都不碰。激进的你不是不懂风险，只是觉得为中档物资冒险的性价比太低。你的局平均战利品价值比大多数人高得多，死亡率也确实高一些，但你的态度是：不去高价值区，来这局干嘛？交火是为了赶走其他觊觎高价值物资的人，算是工作内容的一部分。',
        en: 'The math is simple: high-value loot per run, or why queue at all? You go to the highest-density zones, accept the contact risk, and clear whoever\'s already there. Dying on a high-value run stings less than extract with half a bag of common ammo. Other players call the hot zone dangerous; you call it pre-screened competition. ROI is real, but yours includes the engagement cost as a known variable.',
        ja: '計算はシンプル。高価値戦利品を取る、それだけのためにキューに入る。一番密度の高いエリアへ行って、接触リスクを受け入れて、先に来てたやつを排除する。高価値ランで死ぬほうが、普通の弾薬半分で撤退するよりマシだ。他のプレイヤーがホットゾーンを危険と言う。あなたはそれを「事前選別された競争」と呼ぶ。',
        ko: '계산은 단순하다. 고가치 루팅, 아니면 왜 큐를 잡는가? 가장 밀도 높은 구역으로 가고, 접촉 위험을 받아들이고, 먼저 와있는 놈들을 처리한다. 고가치 런에서 죽는 게 평범한 탄약 반 가방 들고 철수하는 것보다 낫다. 다른 플레이어들이 핫존을 위험하다고 한다. 당신은 그걸 "사전 선별된 경쟁"이라고 부른다.',
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
        zh: '地图首响对你来说是地标，不是警报。你会判断方向和距离，然后直奔那里。2026 年"成为 Boss"更新之后，你是地图上最先到 Boss 刷新点的那个人。激进 + 速通的组合让你的交火频率远高于平均，但你的游戏逻辑是：先到先得，风险是外卖配送费。你的收益上限比大多数人高，下限也比大多数人低，你对此的态度是"这才有意思"。',
        en: 'The first gunshot is a navigation point, not a warning. You triangulate, then sprint. When TiMi dropped the "Become the Boss" update, you were the player who figured out Boss spawn timing in the first week. High aggression plus high speed means you see more fights per run than anyone else — some you win big, some you lose fast. That\'s the contract. No refunds.',
        ja: '最初の銃声はナビポイントだ。警告じゃない。位置を割り出して、ダッシュ。「ボスになる」アップデートが来たとき、最初の週にボスのスポーンタイミングを把握したのはあなただ。高攻撃性プラス高速度は、他の誰よりもランあたりの戦闘数が多いことを意味する。大勝ちするときもあれば、即死のときもある。それが契約だ。返金なし。',
        ko: '첫 총성은 내비게이션 지점이다. 경고가 아니다. 위치 파악하고 스프린트. "보스가 되어라" 업데이트가 나왔을 때, 첫 주에 보스 스폰 타이밍 파악한 게 당신이다. 높은 공격성 + 높은 속도는 다른 누구보다 런당 전투 수가 많다는 뜻이다. 크게 이길 때도 있고 순식간에 죽을 때도 있다. 그게 계약이다. 환불 없음.',
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
        zh: '你不只想撤离，你想让这次撤离值得被人回忆。激进 + 手感 + 速通的组合让你把每次撤离变成一部 5 分钟公路片：全甲上身，装甲车发动，然后你往最多人的方向开。地图上的路线是你的镜头语言，其他玩家是群演。"全甲 (全甲)" 是你的最低标准，装甲车才是你的舞台道具。撤离成功不是目标，撤离得足够有电影感，才是你来这里的理由。',
        en: 'You don\'t extract — you make an exit. Full armor is the minimum. An armored vehicle is the preferred vehicle. And driving out through a firefight rather than around it isn\'t recklessness; it\'s aesthetics. Every extraction is a five-minute short film and you\'re the director, the lead, and the driver. Other players on the route are background extras. The clip is going on Bilibili tonight.',
        ja: '撤退するんじゃない——退場する。全甲は最低条件。装甲車が理想の乗り物。戦闘を迂回するんじゃなく突き抜けるのは、無謀じゃなくて美学だ。すべての撤退は5分の短編映画で、あなたは監督でも主演でもドライバーでもある。ルート上の他のプレイヤーはエキストラだ。今夜このクリップはBilibiliに上がる。',
        ko: '철수하는 게 아니다 — 퇴장하는 거다. 풀 방탄복은 최소 조건. 장갑차가 이상적인 탈것. 전투를 우회하는 게 아니라 돌파하는 건 무모함이 아니라 미학이다. 모든 철수는 5분짜리 단편 영화고 당신은 감독이자 주연이자 드라이버다. 루트 위의 다른 플레이어들은 엑스트라다. 오늘 밤 이 클립은 빌리빌리에 올라간다.',
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
        zh: '今天带了套 2 万块的装备进高价值区，结果第一分钟遇到四人组，你……',
        en: 'You queued in with a 20,000-credit kit and ran into a four-stack in the first minute. You…',
        ja: '2万クレジット装備で高価値エリアに入ったら、最初の1分で4人組と遭遇した。あなたは……',
        ko: '2만 크레딧짜리 장비 들고 고가치 구역에 입장했는데 첫 1분에 4인 파티와 맞닥뜨렸다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '直接打，这套装备值得冒险，输了就输了',
            en: 'Fight. The kit is worth the risk — losing it hurts but that\'s the game',
            ja: '戦う。この装備は賭ける価値がある。負けたら負けたで仕方ない',
            ko: '싸운다. 이 장비는 리스크를 감수할 가치가 있다. 잃으면 잃는 거지',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '立刻撤，先把装备保住，下次再来',
            en: 'Disengage immediately. Protect the kit; there\'s always another run',
            ja: 'すぐ退く。装備を守る。次のランがある',
            ko: '즉시 빠진다. 장비 먼저 지키고 다음에 다시 오면 된다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先判断对面装备价值，再决定打不打',
            en: 'Read their gear first. If their kit is weaker, fight; otherwise, fade',
            ja: '相手の装備を見てから判断する。弱ければ戦う、そうでなければ退く',
            ko: '상대 장비부터 파악한다. 약하면 싸우고 아니면 빠진다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '冲，四人组说不定也在抢物资没心思打我',
            en: 'Push through. Four-stacks are busy looting half the time anyway',
            ja: 'そのまま進む。4人組も半分くらい略奪中だ',
            ko: '그냥 밀고 간다. 4인 파티도 절반은 루팅 중이니까',
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
        zh: '撤离时间快到了，还有两个没打开的箱子，你……',
        en: 'Extraction window is almost up. Two crates still unopened. You…',
        ja: '撤退時間がもうすぐ終わる。箱が2つ未開封のまま。あなたは……',
        ko: '철수 시간이 거의 다 됐다. 아직 못 연 상자가 두 개 남았다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '把箱子开完再走，时间肯定够的',
            en: 'Open both crates and then go. Time\'s enough if you move fast',
            ja: '全部開けてから行く。速く動けば時間は十分だ',
            ko: '상자 다 열고 간다. 빠르게 움직이면 시간 충분하다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '放弃箱子，先保撤离，物资不值一条命',
            en: 'Leave the crates. Extraction first; loot isn\'t worth the extraction',
            ja: '箱は諦めて撤退を優先する。戦利品は命より安い',
            ko: '상자 포기하고 철수 먼저. 루팅은 철수보다 안 중요하다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '开一个，时间不够就跑',
            en: 'Open one. If there\'s no time left after that, you run',
            ja: '1つだけ開ける。時間が足りなければ走る',
            ko: '하나만 연다. 그 후 시간 없으면 뛰는 거다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '提前 5 分钟就已经在撤离点了，这种情况根本不会发生',
            en: 'You were at the extraction point five minutes ago. This situation never happens to you',
            ja: '5分前にはもう撤退ポイントにいる。こんな状況にはならない',
            ko: '5분 전에 이미 철수 지점에 있다. 이런 상황 자체가 생기지 않는다',
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
        zh: '你和对面单挑输了，对面开始嘲讽，你……',
        en: 'You lost a 1v1 and the opponent is teabagging. You…',
        ja: '1v1で負けて、相手が挑発を始めた。あなたは……',
        ko: '1v1에서 지고 상대가 도발하기 시작했다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '立刻重新开把去找他，一定要赢回来',
            en: 'Queue again immediately to hunt them down. You need that win back',
            ja: 'すぐに再キューして追いかける。取り返さないといけない',
            ko: '즉시 다시 큐 잡아서 찾아간다. 반드시 되찾아야 한다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '无所谓，嘲讽是游戏的一部分，下把更稳就好',
            en: 'Doesn\'t matter. Taunting is part of the game; play cleaner next time',
            ja: 'どうでもいい。挑発はゲームの一部。次はもっとうまくやる',
            ko: '상관없다. 도발은 게임의 일부. 다음 판 더 잘하면 된다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '记住那个玩家名字，下次再遇见一定教训他',
            en: 'Memorize the username. Next time you meet, you settle it properly',
            ja: 'プレイヤー名を覚える。次会ったとき、ちゃんとやり返す',
            ko: '플레이어 이름 기억해둔다. 다음에 만나면 제대로 처리한다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '总结一下输在哪，减少下次犯同样错误的概率',
            en: 'Figure out where you went wrong. Fewer repeat mistakes next run',
            ja: 'どこで負けたか分析する。同じミスを次で減らす',
            ko: '어디서 졌는지 분석한다. 다음엔 같은 실수를 줄인다',
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
        zh: '队友一直在催你快点，你……',
        en: 'A teammate keeps telling you to hurry up. You…',
        ja: 'チームメイットがずっと急かしてくる。あなたは……',
        ko: '팀원이 계속 빨리하라고 재촉한다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '确实加快了，反正已经搜得差不多了',
            en: 'You do speed up. You were mostly done anyway',
            ja: 'たしかに少し急ぐ。もともとほぼ終わってたし',
            ko: '실제로 속도를 높인다. 어차피 거의 다 했다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '无视，按自己的节奏，催了出错更麻烦',
            en: 'Ignore it. Your pace is your pace; rushing leads to mistakes',
            ja: '無視する。自分のペースを守る。焦るとミスが増える',
            ko: '무시한다. 내 페이스대로. 서두르면 실수가 많아진다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '有点烦，但忍着，等把这个箱子搜完',
            en: 'Mildly annoyed but hold it in. Just finish this crate first',
            ja: '少しイラっとするが我慢する。この箱を開け終わるまで',
            ko: '조금 짜증나지만 참는다. 이 상자만 다 열면 된다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '直接开麦说"我有计划，你跟着走就好"',
            en: 'Unmute and say "I have a plan. Just follow my lead"',
            ja: 'マイクをオンにして「計画がある。ついてきて」と伝える',
            ko: '마이크 켜고 "계획 있다. 그냥 따라와"라고 말한다',
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
        zh: '一个陌生人在频道里求救，位置离你不远，你……',
        en: 'A random player calls for help in voice chat. They\'re not far. You…',
        ja: 'ボイスチャットで知らないプレイヤーが助けを求めている。場所は遠くない。あなたは……',
        ko: '음성 채팅에서 모르는 플레이어가 도움을 요청한다. 위치가 멀지 않다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '去救，万一是个好人呢',
            en: 'Go help. Could be a decent person, could be a good trade',
            ja: '助けに行く。いい人かもしれないし、いい取引になるかもしれない',
            ko: '도우러 간다. 좋은 사람일 수도 있고 좋은 거래가 될 수도 있다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '不去，陌生人的情况我无法判断，风险太高',
            en: 'Pass. A stranger\'s situation is unknown; the risk isn\'t worth it',
            ja: '行かない。見知らぬ人の状況は判断できない。リスクが高い',
            ko: '안 간다. 낯선 사람의 상황은 판단할 수 없다. 위험이 크다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '先问问他们有没有好装备可以共享，条件合适再去',
            en: 'Ask if they\'ve got good gear to share first. Fair trade, then help',
            ja: 'まず共有できる良い装備があるか聞く。条件が合えば助けに行く',
            ko: '공유할 좋은 장비 있는지 먼저 물어본다. 조건 맞으면 도우러 간다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '去，但做好被背刺的准备，无所谓',
            en: 'Go, but mentally prepared to get betrayed. Fine either way',
            ja: '行く。でも裏切られる覚悟はある。どちらでもいい',
            ko: '간다. 하지만 배신당할 준비는 돼 있다. 어느 쪽이든 괜찮다',
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
        zh: '你带了一把新版本数据非常好的枪，结果用起来完全不顺手，你……',
        en: 'You brought the weapon with the best stats in the new patch. It feels completely wrong in your hands. You…',
        ja: '新バージョンで性能が一番良い武器を持ってきた。でも全然しっくりこない。あなたは……',
        ko: '새 패치에서 스탯이 제일 좋다는 총을 들고 왔다. 근데 손에 전혀 안 맞는다. 당신은……',
      },
      options: [
        {
          label: {
            zh: '忍着用，数据好才是真好，手感可以练出来',
            en: 'Gut it out. Good stats win; you can train the feel later',
            ja: '我慢して使う。数値が良いのが本物。手に馴染むのは練習次第',
            ko: '참고 쓴다. 좋은 스탯이 진짜 좋은 거다. 손 맞는 건 연습하면 된다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '换回熟悉那把，感觉好才能发挥水平',
            en: 'Switch back to the familiar one. Comfort is performance',
            ja: '慣れた武器に戻す。しっくりくるから実力が出せる',
            ko: '익숙한 거로 돌아간다. 편해야 실력이 나온다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '在背包里放两把，视情况换',
            en: 'Carry both in your bag and swap depending on the situation',
            ja: 'バッグに両方入れて状況に応じて使い分ける',
            ko: '배낭에 둘 다 넣고 상황에 따라 바꿔 쓴다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '直接测这把枪能不能在高价值区压住对面，不行再说',
            en: 'Test it under pressure in the hot zone first. If it fails, you\'ll know',
            ja: '高価値エリアでこの武器がプレッシャーに耐えられるか直接テストする。ダメなら考える',
            ko: '고가치 구역에서 직접 테스트한다. 안 되면 그때 생각한다',
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
