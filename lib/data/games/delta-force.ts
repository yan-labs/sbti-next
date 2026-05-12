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
  questions: [],
};

export default game;
